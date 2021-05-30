module.exports = {
  moduleFileExtensions: ['js', 'json'],
  watchman: false,
  transform: {'^.+\\.js$': '<rootDir>/node_modules/babel-jest'},
  collectCoverage: true
};
