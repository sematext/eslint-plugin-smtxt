const CORRECT_IMPORT = '\'utils/selectors\'';

/**
 * Makes sure what we only use the logged createSelector, and that each
 * selector has a name. Using the logged createSelector will allow use to track
 * down issues in selectors much easier.
 */
const noVanillaReselect = {
  meta: {
    fixable: 'code',
  },
  create: context => ({
    ImportDeclaration: node => {
      if (node.source.value === 'reselect') {
        const createSelector = node.specifiers.find(
          s => s.type === 'ImportSpecifier' && s.imported.name === 'createSelector'
        );
        if (createSelector) {
          context.report({
            node,
            message: `createSelector should be imported from ${CORRECT_IMPORT}`,
            fix: fixer => fixer.replaceText(node.source, CORRECT_IMPORT),
          });
        }
      }
    },
    CallExpression: node => {
      if (node.callee.name === 'createSelector') {
        const firstArg = node.arguments[0];
        if (firstArg === undefined) {
          context.report(node, 'missing arguments to createSelector');
        }
        if (firstArg.type !== 'Literal' && firstArg.type !== 'TemplateLiteral') {
          context.report({
            node,
            message: 'createSelector first argument should be selector name',
            fix: fixer => {
              if (node.parent.type === 'VariableDeclarator') {
                const name = node.parent.id.name;
                return fixer.insertTextBefore(firstArg, `'${name}',\n  `);
              }
              return false;
            },
          });
        }
      }
    },
  }),
};

// lave module.exports here, otherwise eslint will not load the rules properly.
// don't use `export default ...`.
module.exports = {
  rules: {
    'no-vanilla-reselect': noVanillaReselect,
  },
};
