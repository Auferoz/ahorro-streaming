import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
    {
      name: "post-build-replace-plugin",
      enforce: "post", // Run after other plugins
      generateBundle(options, bundle) {
        for (const fileName in bundle) {
          const file = bundle[fileName];

          // Only process .js files
          if (file.type === "asset" || !fileName.endsWith(".js")) continue;

          let code = file.code.toString();

          // 1. Replace "https://cdn-eds.en.tel" with "{{vars.cdn}}"
          code = code.replace(/https:\/\/cdn-eds\.en\.tel/g, "{{vars.cdn}}");

          // 2. Replace URLs containing UUIDs with "{{ 'UUID' | asset_url_by_uuid }}"
          const urlRegex =
            /https:\/\/entel\.cdn\.modyo\.com\/uploads\/([a-f0-9\-]+)\/original\/([a-zA-Z0-9\-\.]+)\.(png|jpg|jpeg)/g;

          code = code.replace(urlRegex, (match, uuid) => {
            return `{{ '${uuid}' | asset_url_by_uuid }}`;
          });

          // Write the updated code back to the bundle
          file.code = code;
        }
      },
    },
  ],
});
