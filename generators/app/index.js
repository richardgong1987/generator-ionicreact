"use strict";
const Generator = require("yeoman-generator");
const Utils = require("../utils/Utils");
module.exports = class extends Generator {
  writing() {
    let [pagename] = this._args;
    let toPageName = Utils.toPageName(pagename);
    this.fs.copyTpl(
      this.templatePath("pages.ejs"),
      this.destinationPath(`app/pages/${pagename}.tsx`),
      {
        title: toPageName
      }
    );
  }

  install() {
    this.installDependencies({ bower: false });
  }
};
