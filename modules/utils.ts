import path from "path";
import https from "https";
import fs from "fs";

export function downloadPhoto(url: string, id: number): void {
   const img = fs.createWriteStream(
      path.join(__dirname, "../", "public", "avatars", `${id}.jpg`)
   );
   https.get(url, function (response) {
      response.pipe(img);

      img.on("finish", () => {
         img.close();
      });
   });
}
