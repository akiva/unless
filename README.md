# Unless

A JavaScript implementation of the Ruby `unless` conditional flow
structure.

## Installation

Installation is easy. Issue the following command from within your
project directory:

    npm install unless --save

## Usage

To use this module within your project, simply add it into the desired
files and use it like so:

    var unless = require('unless')

    unless(thingToTestTruthinessOf, fn);

Using an example:

    var unless = require('unless')

    unless(true, function() { console.log('This won't get called.'); });
    unless(false, function() { console.log('Someone set us up the bomb!'); });

## Tests

To run the test suite, use `npm test`.

## License

MIT
