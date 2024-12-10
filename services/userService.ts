import { Context } from "telegraf";
import { IUserService } from "./interfaces/IUserService";
import { PrismaClient } from "@prisma/client";
import { downloadPhoto } from "../modules/utils";

export class UserService implements IUserService {
   private prisma: PrismaClient;

   constructor() {
      this.prisma = new PrismaClient();
   }

   async registerUser(ctx: Context): Promise<void> {
      const user = ctx.from;

      if (!user) {
         throw Error("User data nulled");
      }

      const myData = await this.prisma.user.findFirst({
         where: { telegramId: user.id.toString() },
         select: { id: true },
      });

      if (myData) {
         return;
      }

      const photoUrl = await this.fetchPhotoProfile(ctx, user.id);

      if (photoUrl) {
         downloadPhoto(photoUrl, user.id);
      }

      const fullName = user.first_name ?? "user" + user.last_name ?? "";

      await this.prisma.user.create({
         data: {
            name: fullName,
            username: user?.username ?? "",
            telegramId: user.id.toString(),
            avatar: photoUrl ? user.id + ".jpg" : "avatar.png",
         },
      });
   }

   async fetchPhotoProfile(ctx: Context, id: number): Promise<string | null> {
      const photo = await ctx.telegram.getUserProfilePhotos(id);

      if (!photo.total_count) {
         return null;
      }

      const fileId = photo.photos[0][0].file_id;

      const file = await ctx.telegram.getFile(fileId);
      const fileUrl = `https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${file.file_path}`;

      return fileUrl;
   }
}
