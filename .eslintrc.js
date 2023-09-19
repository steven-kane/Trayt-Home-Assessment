module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 2021, // Specify the ECMAScript version
    sourceType: 'module', // Use ES modules
  },
  rules: {
    indent: ['error', 2], // Enforce 2-space indentation
    quotes: ['error', 'single'], // Enforce single quotes
    semi: ['error', 'always'], // Require semicolons
  },
  overrides: [
    // Configuration for Node.js files (e.g., server-side code)
    {
      files: ['.eslintrc.js', '.eslintrc.cjs'],
      env: {
        node: true, // Node.js environment
      },
      parserOptions: {
        sourceType: 'script', // Set sourceType to 'script' for Node.js
      },
    },
  ],
};
