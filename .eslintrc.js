module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "google", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
    "require-jsdoc": 0,
    "no-var": 0,
    "spaced-comment": ["error", "always", { exceptions: ["-", "+"] }],
    "no-extra-boolean-cast": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
