module.exports = {
  setupFiles: ["./jest.setup.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleNameMapper: {
    "\\.(css|jpg|png)$": "identity-obj-proxy"
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}']
};