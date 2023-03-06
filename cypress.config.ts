import { defineConfig } from "cypress";
import { devServer } from "@cypress/webpack-dev-server";

export default defineConfig({
  component: {
    devServer: devServerOptions =>
      devServer({
        ...devServerOptions,
        framework: "react",
        webpackConfig: () => {
          process.env.NODE_ENV = "test";
          process.env.BABEL_ENV = "test";

          const webpackConfig = require("react-app-rewired/config/webpack.config")("test");

          return webpackConfig;
        },
      }),
  },
});
