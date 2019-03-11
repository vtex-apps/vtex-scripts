'use strict'

const fs = require('fs')
const path = require('path')

const appDirectory = fs.realpathSync(process.cwd())
const resolveAppPath = relative => path.resolve(appDirectory, relative)

module.exports.resolveAppPath = resolveAppPath
module.exports.moduleName = path.basename(process.cwd())
