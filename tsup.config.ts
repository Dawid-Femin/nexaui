import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: {
      index: "src/index.ts",
    },
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: true,
    clean: true,
    bundle: true,
    external: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "@mui/material",
      "@mui/icons-material",
      "@emotion/react",
      "@emotion/styled",
      "react-easy-crop",
    ],
    treeshake: true,
    splitting: false,
  },
  {
    entry: {
      "Alert/index": "src/MuiComponents/Alert/Alert.tsx",
      "Button/index": "src/MuiComponents/Button/Button.tsx",
      "Breadcrumbs/index": "src/MuiComponents/Breadcrumbs/Breadcrumbs.tsx",
      "Cropper/index": "src/Components/Cropper/Cropper.tsx",
      theme: "src/theme/theme.ts",
    },
    format: ["esm"],
    dts: true,
    bundle: false,
    external: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "@mui/material",
      "@mui/icons-material",
      "@emotion/react",
      "@emotion/styled",
      "react-easy-crop",
    ],
    esbuildOptions(options) {
      options.jsx = "automatic";
      options.jsxImportSource = "react";
    },
    outDir: "dist",
  },
]);
