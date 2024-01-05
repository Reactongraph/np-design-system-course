import { dirname, join } from "path";

module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-storysource",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
    getAbsolutePath("@storybook/preset-typescript"),
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
