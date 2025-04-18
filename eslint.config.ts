import { core } from "@phanect/lint";
import { react } from "@phanect/lint-react";
import { vue } from "@phanect/lint-vue";
import { svelte } from "@phanect/lint-svelte";
import type { Linter } from "eslint";

const configs: Linter.Config[] = [
  {
    ignores: [
      "path/to/ignore/**",
    ],
  },

  ...core,

  {
    // Do not add `files: [ "*" ],` here.

    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  ...(react.map(config => ({
    files: [ join(import.meta.dirname, "examples/react/**") ],
  }))),
  ...(vue.map(config => ({
    files: [ join(import.meta.dirname, "examples/vue/**") ],
  }))),
  ...(svelte.map(config => ({
    files: [ join(import.meta.dirname, "examples/svelte/**") ],
  }))),
];

export default configs;
