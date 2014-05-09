module.exports = function(test, fn) {
  'use strict';
  if (arguments.length !== 2)
    throw new Error('Function requires 2 arguments');
  if (Object.prototype.toString.call(arguments[1]) !== '[object Function]')
    throw new Error('Callback argument must be a function');
  if (!test) fn();
};
