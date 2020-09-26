'use strict';
const Generator = require('yeoman-generator');
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.myargs = args;
  }

  writing() {
    // var [pathssss] = this.myargs;
    var pathssss = 'hahaha'
    console.log("pathssss:*****************pathssss:*****************pathssss:*****************", pathssss)
    this.fs.copy(
      this.templatePath('pages.html'),
      this.destinationPath(`app/pages/${pathssss}.tsx`)
    );
  }

  install() {
    this.installDependencies({bower: false, npm: false, yarn: false});
  }
};
