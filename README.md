# gulp-karma-angularjs

> [Karma](https://github.com/karma-runner/karma) integration into [Gulp.js](http://gulpjs.com/)-based build, with angularJS example.

This repository contains instructions and samples illustrating how to use karma-runner from the Gulp.js based build.

Based on the [https://github.com/karma-runner/gulp-karma](https://github.com/karma-runner/gulp-karma) repo front the karma-runner team.

## Illustrated tasks

This sample project illustrates 2 usage scenarios of Karma integration in the Gulp.js build:

* `gulp test` - a task that runs all the tests with Karma once and exits. Such a task is often used on CI servers etc.
* `gulp tdd` - a task that runs the tests and pauses, watching for file changes. Upon detecting a change Karma re-runs the tests. Such a task is often during development.

## Karma without gulp
For use karma-runner without gulp.js, use karma start (uses karma.conf.js), and other karma commands (see karma --help)
