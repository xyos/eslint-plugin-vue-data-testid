'use strict'

const { defaultTestableEventNames, defaultDataTestIdAttribute } = require('../utils/constants')

module.exports = {
  meta: {
    docs: {
      description: 'Ensure a data-test-id attribute is present on elements with Vue.js DOM events',
      category: 'recommended',
    },
    fixable: 'code',
    schema: [
      {
        type: 'object',
        properties: {
          dataTestIdAttribute: {
            type: 'string',
          },
          testableEventNames: {
            type: 'array',
            items: { type: 'string' },
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      missingDataTestId: 'Missing {{dataTestIdAttribute}} attribute on testable event',
    },
  },
  create (context) {
    const options = context.options[0] || {}
    const dataTestIdAttribute = options.dataTestIdAttribute || defaultDataTestIdAttribute
    const testableEventNames = options.testableEventName || defaultTestableEventNames

    function validateAttribute (attr) {
      if (attr.key && attr.key && attr.key.type && attr.key.type === 'VDirectiveKey') {
        const { name, argument } = attr.key
        if (name && name.name && name.name === 'on' && argument && argument.type && argument.type === 'VIdentifier') {
          const modifier = argument.name
          return testableEventNames.some(validEventName => modifier.startsWith(validEventName))
        }
      }
      return false
    }

    return context.parserServices.defineTemplateBodyVisitor({
      VElement (node) {
        const tokens = context.parserServices.getTemplateBodyTokenStore()
        const hasTestableEvent = node.startTag.attributes.some((attr) => validateAttribute(attr))
        if (hasTestableEvent) {
          const dataTestId = node.startTag.attributes.find(
            (attr) => attr.key.name === dataTestIdAttribute
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
