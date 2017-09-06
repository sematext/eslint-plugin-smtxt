const CORRECT_IMPORT = '\'prop-types\'';

/**
 * Makes sure PropTypes is imported from prop-types.
 */
export default {
  meta: {
    fixable: 'code',
  },
  create: context => ({
    ImportDeclaration: node => {
      if (node.source.value === 'react') {
        const propTypes = node.specifiers.find(
          s => s.type === 'ImportSpecifier' && s.imported.name === 'PropTypes'
        );
        if (propTypes) {
          context.report({
            node,
            message: `PropTypes should be imported from ${CORRECT_IMPORT}`,
            fix: fixer => fixer.replaceText(node.source, CORRECT_IMPORT),
          });
        }
      }
    },
  }),
};

