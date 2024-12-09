import { Telegraf } from "telegraf";
import dotenv from "dotenv";
dotenv.config();

// Commands
import startCommand from "./commands/start";
import helpCommand from "./commands/help";

// Handlers
import textHandler from "./handlers/textHandler";
import callbackHandler from "./handlers/callbackHandler";
import { loggerMiddleware } from "./middleware";
import { registerCommands } from "./routes/commandRoutes";
import { registerHandlers } from "./routes/handlerRoutes";

if (!process.env.BOT_TOKEN) {
   throw Error("Bot token not configured");
}

// Initialize the bot
const bot = new Telegraf(process.env.BOT_TOKEN);

// Use middleware
bot.use(loggerMiddleware);

// Register commands and handlers
registerCommands(bot);
registerHandlers(bot);

// Start the bot
console.log("Bot is running..");
bot.launch();

// Graceful stop for SIGINT/SIGTERM
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
