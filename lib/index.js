'use strict';

var _noVanillaReselect = require('./no-vanilla-reselect.js');

var _noVanillaReselect2 = _interopRequireDefault(_noVanillaReselect);

var _reactProptypesImport = require('./react-proptypes-import.js');

var _reactProptypesImport2 = _interopRequireDefault(_reactProptypesImport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// lave module.exports here, otherwise eslint will not load the rules properly.
// don't use `export default ...`.
module.exports = {
  rules: {
    'no-vanilla-reselect': _noVanillaReselect2.default,
    'react-proptypes-import': _reactProptypesImport2.default
  }
};