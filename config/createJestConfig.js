'use strict'

const fs = require('fs')
const path = require('path')
const paths = require('../utils/paths')

module.exports = (resolve, resolveAppPath) => {
  const pkg = require(resolveAppPath('package.json'))

  let setupFilesAfterEnv = [resolve('config/jest/setup.js')]
  if (pkg.jest && pkg.jest.setupFilesAfterEnv) {
    setupFilesAfterEnv = setupFilesAfterEnv.concat(pkg.jest.setupFilesAfterEnv)
  }

  let config = {
    rootDir: resolveAppPath('.'),
    setupFilesAfterEnv: setupFilesAfterEnv,
    moduleNameMapper: {
      '^.+\\.css$': resolve('node_modules/identity-obj-proxy'),
    },
    transform: {
      "\\.(gql|graphql)$": resolve('node_modules/jest-transform-graphql'),
      "^.+\\.(js|jsx|mjs)$": resolve('config/jest/babelTransform.js'),
      "^.+\\.(ts|tsx)$": resolve('node_modules/typescript-babel-jest'),
      '^(?!.*\\.(js|jsx|mjs|css|ts|tsx|json|graphql|gql)$)': resolve(
        'config/jest/fileTransform.js'
      ),
    }
  }

  return config
}
