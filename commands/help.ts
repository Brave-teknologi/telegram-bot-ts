import { Context } from "telegraf";

/**
 * Handles the /help command
 * @param ctx
 */
const helpCommand = async (ctx: Context) => {
   await ctx.reply(
      "Available commands:\n/start - Start the bot\n/help - Show this help message"
   );
};

export default helpCommand;
