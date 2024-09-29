config = {
    collectCoverage: false,
    collectCoverageFrom: ["src/**/*.{js,jsx}"],
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.cjs"],
    preset: 'ts-jest',
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest"
    }
}

module.exports = config;