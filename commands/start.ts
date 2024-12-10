import { Context } from "telegraf";
import { UserService } from "../services/userService";

const userService = new UserService();

/**
 * Handles the /start command
 * @param ctx
 */
const startCommand = async (ctx: Context) => {
   await userService.registerUser(ctx);

   await ctx.reply(
      "Welcome! This bot is here to assist you. Use /help to see available commands."
   );
};

export default startCommand;
