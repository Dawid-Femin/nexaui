import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx|mdx)"],

  addons: ["@storybook/addon-links", "@storybook/addon-themes"],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => {
        if (!prop.parent) return true;
        return (
          prop.parent.fileName.includes("@mui") ||
          !/node_modules/.test(prop.parent.fileName)
        );
      },
    },
  },
};

export default config;
