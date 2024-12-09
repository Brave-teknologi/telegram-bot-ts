import { Telegraf } from "telegraf";
import textHandler from "../handlers/textHandler";
import callbackHandler from "../handlers/callbackHandler";

/**
 * Registers bot event handlers
 * @param bot
 */
export const registerHandlers = (bot: Telegraf) => {
   bot.on("text", textHandler);
   bot.on("callback_query", callbackHandler);
};
