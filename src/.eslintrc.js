module.exports = {
  extends: [
    "airbnb",
    "prettier",
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "prettier/prettier": "error",
    "arrow-body-style": ["error", "as-needed"],
    "react/jsx-one-expression-per-line": [
      "<disabled>",
      { allow: "none" | "literal" | "single-child" }
    ],
    "no-confusing-arrow": ["error", { allowParens: true }],
    "import/order": ["error", { "newlines-between": "always" }],
    "react/destructuring-assignment": ["<enabled>", "always"],
    "no-console": 1,
    "react/no-danger": 0
  },
  plugins: ["prettier"],
  parser: "babel-eslint",
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/resolver": {
      webpack: {
        config: "./webpack.config.js"
      }
    }
  }
};
