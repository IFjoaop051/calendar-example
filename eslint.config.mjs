import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import tseslint from "typescript-eslint";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // Adicione as suas regras personalizadas ou ignores aqui
    ignores: [
      "node_modules/",
      ".expo/",
      "android/",
      "ios/",
      "build/",
      "dist/",
    ],
  },
  {
    rules: {
      // "react-native/no-inline-styles": "warn",
      "no-console": "warn",                   
      "sort-imports": "error",
      "space-before-blocks": [
        "error",
        {
          "functions": "always",
          "keywords": "always",
          "classes": "always",
        },
      ],
      "eol-last": "error",
      "no-magic-numbers":"off",
      "react/react-in-jsx-scope": "off",
      "no-async-promise-executor": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "switch-colon-spacing": [
        "error",
        {
          "after": true,
          "before": false,
        },
      ],
      "no-dupe-keys": "error",
      "comma-dangle": [
        2,
        "always-multiline",
      ],
      "indent": [
        "error",
        2,
        {
          "SwitchCase": 1,
        },
      ],
      "quotes": [
        "error",
        "double",
      ],
      "semi": [
        "error",
        "always",
      ],
    },
  },
]);
