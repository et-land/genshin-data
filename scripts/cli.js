const Yargs = require('yargs')
const Path = require('path')

global.base = Path.resolve(__dirname, '../')

Yargs(process.argv) /* eslint-disable-line */
  .demandCommand()
  .help()
  .argv
