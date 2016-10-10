grunt-gabarito-selenium [![Build Status](https://travis-ci.org/pablo-cabrera/grunt-gabarito-selenium.png)](https://travis-ci.org/pablo-cabrera/grunt-gabarito-selenium)
==============

Gabarito-selenium plugin for Grunt.

## TL;DR

Install dev dependencies.

```shell
npm install gabarito --save-dev
npm install gabarito-selenium --save-dev
npm install grunt-gabarito --save-dev
```
Configure within `Gruntfile.js`

```js
grunt.initConfig({
    gabarito: {
        src: ["test.js"],
        options: {
            environments: [{
                "type": "selenium",
                "capabilities": {
                    "browserName": "firefox",
                    "version: "47"
                },
                "hub": "localhost:4444",
                "host": "localhost"
            }]
        }
    }
});

grunt.loadNpmTasks("grunt-gabarito");
grunt.loadNpmTasks("grunt-gabarito-selenium");
```

Write test.
```js
// test.js

var assert = gabarito.assert;

gabarito.add("test").
clause("should pass", function () {
    assert.isTrue(true);
}).

clause("should fail", function () {
    assert.isTrue(false);
});
```
Run.
```shell
grunt gabarito
```
