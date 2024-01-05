import { dirname, join } from "path";
module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    getAbsolutePath(
      "@storybook/preset-typescript",
      'storybook/addon-storysource'
    ),
  ],

  docs: {
    autodocs: true,
  },

  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {},
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
