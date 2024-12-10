import { Telegraf } from "telegraf";
import startCommand from "../commands/start";
import helpCommand from "../commands/help";
import { WizardContext, WizardSessionData } from "telegraf/typings/scenes";

/**
 * Registers bot commands
 * @param bot
 */
export const registerCommands = (
   bot: Telegraf<WizardContext<WizardSessionData>>
) => {
   bot.command("start", startCommand);
   bot.command("help", helpCommand);
   bot.command("test", (ctx) => ctx.scene.enter("sceneId"));
};
