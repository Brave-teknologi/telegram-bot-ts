import { Context, MiddlewareFn } from "telegraf";

export const loggerMiddleware: MiddlewareFn<Context> = async (ctx, next) => {
   // console.log(`Update received: ${JSON.stringify(ctx.update)}`);
   await next();
};
