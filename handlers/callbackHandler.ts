import { Context } from "telegraf";

/**
 * Handles callback queries from inline buttons
 * @param ctx Telegraf context
 */
const callbackHandler = async (ctx: Context) => {
   const callbackData = ctx.callbackQuery?.message;
   await ctx.answerCbQuery(`You clicked: ${callbackData}`);
};

export default callbackHandler;
