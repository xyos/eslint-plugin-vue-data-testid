'use strict'

const { kebabToPascalCase } = require('../utils/helpers')
const { defaultTestableTagNames, defaultDataTestIdAttribute } = require('../utils/constants')

module.exports = {
  meta: {
    docs: {
      description: 'Enforce a custom data-testid attribute on testable Vue.js components',
      category: 'recommended',
    },
    fixable: 'code',
    schema: [
      {
        type: 'object',
        properties: {
          testableTagNames: {
            type: 'array',
            items: { type: 'string' },
          },
          dataTestIdAttribute: {
            type: 'string',
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      missingDataTestId: 'Missing {{dataTestIdAttribute}} attribute',
    },
  },
  create (context) {
    const options = context.options[0] || {}
    const testableTagNames = options.testableTagNames || defaultTestableTagNames
    const dataTestIdAttribute = options.dataTestIdAttribute || defaultDataTestIdAttribute
    return context.parserServices.defineTemplateBodyVisitor({
      VElement (node) {
        const tag = kebabToPascalCase(node.rawName)
        const tokens = context.parserServices.getTemplateBodyTokenStore()
        if (testableTagNames.includes(tag)) {
          const dataTestId = node.startTag.attributes.find(
            (attr) => {
              if (attr.directive && attr.key.argument && attr.key.argument.name) {
                return attr.key.argument.name === dataTestIdAttribute
              } else {
                return attr.key.name === dataTestIdAttribute
              }
            }
          )
          if (!dataTestId) {
            context.report({
              node,
              messageId: 'missingDataTestId',
              data: { dataTestIdAttribute },
              fix: (fixer) =>
                fixer.insertTextAfter(
                  tokens.getFirstToken(node),
                  ` ${dataTestIdAttribute}=""`
                ),
            })
          }
        }
      },
    })
  },
}
