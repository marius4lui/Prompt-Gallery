import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import PromptPlayground from "../components/PromptPlayground.vue";
import PromptIndex from "../components/PromptIndex.vue";
import PromptInput from "../components/PromptInput.vue";
import PromptOutput from "../components/PromptOutput.vue";
import PromptMeta from "../components/PromptMeta.vue";
import "./custom.css";

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("PromptPlayground", PromptPlayground);
    app.component("PromptIndex", PromptIndex);
    app.component("PromptInput", PromptInput);
    app.component("PromptOutput", PromptOutput);
    app.component("PromptMeta", PromptMeta);
  }
};

export default theme;
