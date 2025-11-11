import type { Preview } from "@storybook/react-vite";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { lightTheme, darkTheme } from "../src/theme/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider({
      themes: { light: lightTheme, dark: darkTheme },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
