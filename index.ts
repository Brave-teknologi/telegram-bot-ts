import { bot } from "./bot";

const webhook = async () => {
   if (!process.env.WEB_URL) {
      throw Error("No web url specified");
   }
   await bot.createWebhook({ domain: process.env.WEB_URL });
};

if (process.env.NODE_ENV == "development") {
   // Start the bot
   console.log("Bot is running..");
   bot.launch();

   // Graceful stop for SIGINT/SIGTERM
   process.once("SIGINT", () => bot.stop("SIGINT"));
   process.once("SIGTERM", () => bot.stop("SIGTERM"));
} else {
   const port = process.env.PORT ?? 8000;

   if (!process.env.WEB_URL) {
      throw Error("No web url specified");
   }

   console.log("Listening on port", port);
   bot.launch({
      webhook: {
         // Public domain for webhook; e.g.: example.com
         domain: process.env.WEB_URL,

         // Port to listen on; e.g.: 8080
         port: port as number,

         // Optional secret to be sent back in a header for security.
         // e.g.: `crypto.randomBytes(64).toString("hex")`
         secretToken: "coba123",
      },
   });
}
