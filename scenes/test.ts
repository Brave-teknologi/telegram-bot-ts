import { Composer, Scenes, session, Telegraf } from "telegraf";
import { WizardContext, WizardSessionData } from "telegraf/typings/scenes";

const stepHandler = new Composer<Scenes.WizardContext>();

stepHandler.command("next", async (ctx) => {
   await ctx.reply("Step 2. Via command");
   return ctx.wizard.next();
});

const scene = new Scenes.WizardScene<WizardContext<WizardSessionData>>(
   "sceneId",
   async (ctx) => {
      await ctx.reply("Step 1");
      return ctx.wizard.next();
   },
   stepHandler,
   async (ctx) => {
      await ctx.reply("Step 2");
      return ctx.wizard.next();
   },
   async (ctx) => {
      await ctx.reply("Done");
      return await ctx.scene.leave();
   }
);

// to compose all scenes you use Stage
export const testStage = new Scenes.Stage<
   Scenes.WizardContext<WizardSessionData>
>([scene]);
