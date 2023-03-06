import { defineConfig } from "cypress";
import { devServer } from "@cypress/webpack-dev-server";

export default defineConfig({
  component: {
    devServer: devServerOptions =>
      devServer({
        ...devServerOptions,
        framework: "react",
        webpackConfig: () => {
          const webpackConfig = require("react-scripts/config/webpack.config")("test");

          return webpackConfig;
        },
      }),
  },
});
