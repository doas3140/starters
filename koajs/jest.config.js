/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
};
// export default {
//   clearMocks: true,
//   coverageProvider: 'v8',
//   moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],

//   roots: ['<rootDir>/src'],

  
//   transform: {
//     '^.+\\.(ts|tsx)$': 'ts-jest',
//   },
// }
