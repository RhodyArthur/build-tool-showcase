module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    moduleFileExtensions: ["js", "json", "jsx", "node"],
    moduleNameMapper: {
      "\\.(css|scss)$": "identity-obj-proxy",
    },
  };