import { defineConfig } from "cypress";
import { devServer } from "@cypress/webpack-dev-server";

export default defineConfig({
  component: {
    devServer: devServerOptions =>
      devServer({
        ...devServerOptions,
        framework: "react",
        webpackConfig: () => {
          process.env.NODE_ENV = "development";
          process.env.BABEL_ENV = "development";

          const webpackConfig = require("react-app-rewired/config/webpack.config")("development");

          return webpackConfig;
        },
      }),
  },
});
