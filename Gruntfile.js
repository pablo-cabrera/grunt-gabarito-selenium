/*
 * grunt-gabarito
 * https://github.com/pablo/grunt-gabarito
 *
 * Copyright (c) 2015 Pablo Cabrera
 * Licensed under the MIT license.
 */


module.exports = function (grunt) {
    "use strict";

    var lintFiles = ["Gruntfile.js", "tasks/**/*.js"];

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        jscs: {
            src: lintFiles,

            options: {
                config: ".jscsrc"
            }
        },

        jshint: {
            options: {
                /* enforcing */
                strict: true,
                bitwise: false,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                noempty: true,
                plusplus: true,
                quotmark: "double",

                undef: true,

                /* relaxing */
                eqnull: true,
                sub: true,

                /* environment */
                node: true,
                browser: true,
                globals: {
                    JSON: true
                }
            },

            files: lintFiles
        }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-jscs");

    // Local tasks
    grunt.loadTasks("tasks");

    // By default, lint and run all tests.
    grunt.registerTask("default", ["jshint", "jscs"]);

};
