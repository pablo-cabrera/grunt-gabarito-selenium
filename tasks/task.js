/*
 * grunt-gabarito https://github.com/pablo/grunt-gabarito-selenium
 *
 * Copyright (c) 2016 Pablo Cabrera Licensed under the MIT license.
 */
"use strict";

var GabaritoTask = require("grunt-gabarito");
var SeleniumEnvironment = require("gabarito-selenium");

GabaritoTask.instance().registerEnvironment("selenium", function (env) {
    return new SeleniumEnvironment(
       env.capabilities,
       env.hub || "localhost:4444",
       env.host || "localhost");
});

module.exports = function () {};
