import { Redis } from "@telegraf/session/redis";
import { session, SessionStore, Telegraf } from "telegraf";
import { WizardContext, WizardSessionData } from "telegraf/typings/scenes";
import { testStage } from "../scenes/test";

/**
 * Registers bot scenes
 * @param bot
 */
export const registerScenes = (
   bot: Telegraf<WizardContext<WizardSessionData>>
) => {
   const redis = Redis({
      url: "redis://127.0.0.1:6379",
   });
   const store = redis as SessionStore<{}>;
   bot.use(session({ store }));

   // use scene here
   bot.use(testStage.middleware());
};
