import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Configure ESLint with Next.js recommended rules and additional rules to fix errors
const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript"
  ),
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "react-hooks/rules-of-hooks": "error", 
      "@typescript-eslint/no-unused-vars": "error", // Changed to error to catch unused variables
      "@next/next/no-img-element": "error", // Changed to error to enforce next/image usage
      "@typescript-eslint/no-empty-interface": "error", // Changed to error to prevent empty interfaces
      "@typescript-eslint/no-explicit-any": "error", // Changed to error to prevent any type
      "react-hooks/exhaustive-deps": "error", // Changed to error to catch missing dependencies
      "@typescript-eslint/no-empty-object-type": "error" // Added to fix empty object type error
    }
  }
];

export default eslintConfig;
