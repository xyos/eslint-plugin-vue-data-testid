'use strict'

function kebabToPascalCase (str) {
  return str
    .replace(/(?:^|[-_])(\w)/g, (_, c) => c.toUpperCase())
    .replace(/[-_]/g, '')
}

module.exports = {
  kebabToPascalCase,
}
