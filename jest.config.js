// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
}
