import { Context } from "telegraf";

export interface IUserService {
   registerUser(ctx: Context): Promise<void>;
   fetchPhotoProfile(ctx: Context, id: number): Promise<string | null>;
   downloadPhoto(url: string, id: number): void;
}
