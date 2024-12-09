import { Context } from "telegraf";

/**
 * Handles the /start command
 * @param ctx
 */
const startCommand = async (ctx: Context) => {
   await ctx.reply(
      "Welcome! This bot is here to assist you. Use /help to see available commands."
   );
};

export default startCommand;
