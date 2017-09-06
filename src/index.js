import noVanillaReselect from './no-vanilla-reselect.js';
import reactPropTypesImport from './react-proptypes-import.js';

// lave module.exports here, otherwise eslint will not load the rules properly.
// don't use `export default ...`.
module.exports = {
  rules: {
    'no-vanilla-reselect': noVanillaReselect,
    'react-proptypes-import': reactPropTypesImport,
  },
};
