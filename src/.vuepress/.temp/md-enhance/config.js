import { defineClientConfig } from "@vuepress/client";
import { defineAsyncComponent } from "vue";
import CodeTabs from "E:/MyNode/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.114/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import "E:/MyNode/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.114/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    
  }
});