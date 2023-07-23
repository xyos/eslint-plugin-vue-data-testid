"use strict";

function kebabToPascalCase(str) {
  return str
    .replace(/(?:^|[-_])(\w)/g, (c) => c.toUpperCase())
    .replace(/[-_]/g, "");
}

const testableTagNames = [
  "Input",
  "Button",
  "Checkbox",
  "Radio",
  "Select",
  "Textarea",
  "Link",
];

module.exports = {
  meta: {
    docs: {
      description: "Enforce data-test-id attribute on all elements",
      category: "recommended",
    },
    fixable: "code",
    schema: [],
    messages: {
      missingDataTestId: "Missing data-test-id attribute",
    },
  },
  create(context) {
    return context.parserServices.defineTemplateBodyVisitor({
      VElement(node) {
        const tag = kebabToPascalCase(node.rawName);
        const tokens = context.parserServices.getTemplateBodyTokenStore();
        if (testableTagNames.includes(tag)) {
          const dataTestId = node.startTag.attributes.find(
            (attr) => attr.key.name === "data-test-id"
          );
          if (!dataTestId) {
            context.report({
              node,
              loc: tokens.getFirstToken(node).loc,
              messageId: "missingDataTestId",
              fix: (fixer) =>
                fixer.insertTextAfter(
                  tokens.getFirstToken(node),
                  ' data-test-id=""'
                ),
            });
          }
        }
      },
    });
  },
};
