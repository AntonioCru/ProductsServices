module.exports = {
  testEnvironment: 'jsdom', // ahora sí funciona porque lo instalaste
  transform: {
    '^.+\\.[jt]sx?$': `<rootDir>/node_modules/babel-jest`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': `<rootDir>/__mocks__/file-mock.js`,
    '^gatsby-page-utils/(.*)$': `gatsby-page-utils/dist/$1`,
    '^gatsby-core-utils/(.*)$': `gatsby-core-utils/dist/$1`,
    '^gatsby-plugin-utils/(.*)$': `gatsby-plugin-utils/dist/$1`,
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
}
