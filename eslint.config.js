import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    files: ["**/*.ts"],
    rules: {
      // TypeScript Best Practices (not too strict)
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-inferrable-types": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",

      // General Best Practices
      "no-console": "warn",
      "no-debugger": "warn",
      "prefer-const": "warn",
      "no-var": "error",
      eqeqeq: ["warn", "always"],
      curly: ["warn", "multi-line"],
      "no-duplicate-imports": "error",
    },
  },
  {
    ignores: ["node_modules/**", "dist/**", "*.js"],
  }
);
