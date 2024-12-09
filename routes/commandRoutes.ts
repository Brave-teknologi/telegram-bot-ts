import { Telegraf } from "telegraf";
import startCommand from "../commands/start";
import helpCommand from "../commands/help";

/**
 * Registers bot commands
 * @param bot
 */
export const registerCommands = (bot: Telegraf) => {
   bot.command("start", startCommand);
   bot.command("help", helpCommand);
};
