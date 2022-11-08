import { useStyleTag } from "E:/MyNode/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.114/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import { h } from "vue";
import { defineClientConfig } from "@vuepress/client";
import Badge from "E:/MyNode/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.114/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "E:/MyNode/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.114/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "E:/MyNode/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.114/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Badge", Badge);
    app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`@import url("//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css");`, { id: "icon-assets" });
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});