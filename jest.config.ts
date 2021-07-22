/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const config = {
  roots: ["<rootDir>"],
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  testPathIgnorePatterns: ["<doorDir>[/\\\\](node_modules|.next)[/\\\\]"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.tsx?$"],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.s?css$": "<rootDir>/__mocks__/styleMock.ts",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;
