'use strict';

const gulp = require('gulp');
const boilerplate = require('appium-gulp-plugins').boilerplate.use(gulp);

boilerplate({
  build: 'appium-tizen-driver',
  testTimeout: 40000,
  eslint: false,
});
