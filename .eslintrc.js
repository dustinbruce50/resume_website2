module.exports = {
  rules: {
    // Global rules for the project
    quotes: ["error", "double"], // This enforces double quotes globally
  },
  overrides: [
    {
      files: ["*.css"], // Target specific files like CSS
      rules: {
        quotes: ["error", "single"], // Allow single quotes in @import statements
      },
    },
  ],
};
