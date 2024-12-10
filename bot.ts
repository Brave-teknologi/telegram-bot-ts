import { Telegraf } from "telegraf";
import { errorMiddleware, loggerMiddleware } from "./middleware";
import { registerCommands } from "./routes/commandRoutes";
import { registerHandlers } from "./routes/handlerRoutes";
import dotenv from "dotenv";
import { WizardContext, WizardSessionData } from "telegraf/typings/scenes";
import { registerScenes } from "./routes/sceneRoutes";
dotenv.config();

if (!process.env.BOT_TOKEN) {
   throw Error("Bot token not configured");
}

// Initialize the bot
export const bot = new Telegraf<WizardContext<WizardSessionData>>(
   process.env.BOT_TOKEN
);

// Use middleware
bot.use(loggerMiddleware);
bot.catch(errorMiddleware);

// Register commands, handlers and scenes
registerScenes(bot);
registerCommands(bot);
registerHandlers(bot);
