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
      description: "Enforce data-tid attribute on all elements",
      category: "recommended",
    },
    fixable: "code",
    schema: [],
    messages: {
      missingDataTid: "Missing data-tid attribute",
    },
  },
  create(context) {
    return context.parserServices.defineTemplateBodyVisitor({
      VElement(node) {
        const tag = kebabToPascalCase(node.rawName);
        const tokens = context.parserServices.getTemplateBodyTokenStore();
        if (testableTagNames.includes(tag)) {
          const dataTid = node.startTag.attributes.find(
            (attr) => attr.key.name === "data-tid"
          );
          if (!dataTid) {
            context.report({
              node,
              loc: tokens.getFirstToken(node).loc,
              messageId: "missingDataTid",
              fix: (fixer) =>
                fixer.insertTextAfter(
                  tokens.getFirstToken(node),
                  ' data-tid=""'
                ),
            });
          }
        }
      },
    });
  },
};
