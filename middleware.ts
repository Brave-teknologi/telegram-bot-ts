import { Context, MiddlewareFn } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";

export const loggerMiddleware: MiddlewareFn<Context> = async (ctx, next) => {
   // console.log(`Update received: ${JSON.stringify(ctx.update)}`);
   await next();
};

export const errorMiddleware = (err: unknown, ctx: Context<Update>) => {
   if (err instanceof Error && err.stack) {
      console.error("Error:", err.message);

      // Parsing stack trace
      const stackLines = err.stack.split("\n");
      if (stackLines.length > 1) {
         console.error("Location of error:", stackLines[1].trim());
      }
   }
};
