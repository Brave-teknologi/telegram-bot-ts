import { Context } from "telegraf";

/**
 * Handles plain text messages
 * @param ctx
 */
const textHandler = async (ctx: Context) => {
   await ctx.reply(`You said: "${ctx.text}"`);
};

export default textHandler;
