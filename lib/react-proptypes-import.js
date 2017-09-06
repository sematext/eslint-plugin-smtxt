'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CORRECT_IMPORT = '\'prop-types\'';

/**
 * Makes sure PropTypes is imported from prop-types.
 */
exports.default = {
  meta: {
    fixable: 'code'
  },
  create: function create(context) {
    return {
      ImportDeclaration: function ImportDeclaration(node) {
        if (node.source.value === 'react') {
          var propTypes = node.specifiers.find(function (s) {
            return s.type === 'ImportSpecifier' && s.imported.name === 'PropTypes';
          });
          if (propTypes) {
            context.report({
              node: node,
              message: 'PropTypes should be imported from ' + CORRECT_IMPORT,
              fix: function fix(fixer) {
                return fixer.replaceText(node.source, CORRECT_IMPORT);
              }
            });
          }
        }
      }
    };
  }
};