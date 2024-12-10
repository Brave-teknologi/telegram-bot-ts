import { Telegraf } from "telegraf";
import textHandler from "../handlers/textHandler";
import callbackHandler from "../handlers/callbackHandler";
import { WizardContext, WizardSessionData } from "telegraf/typings/scenes";

/**
 * Registers bot event handlers
 * @param bot
 */
export const registerHandlers = (
   bot: Telegraf<WizardContext<WizardSessionData>>
) => {
   bot.on("text", textHandler);
   bot.on("callback_query", callbackHandler);
};
