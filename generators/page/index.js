"use strict";
const Generator = require("yeoman-generator");
const Utils = require("../utils/Utils");
const path = require("path");
module.exports = class extends Generator {
  /**
   *
   * @param p
   * @returns {{pagepath: string, pageName: *}}
   */
  getPageInfo(p) {
    let filename = path.basename(p);
    let pagepath = path.dirname(p);
    let pageName = Utils.toPageName(filename);
    return {
      pageName,
      pagepath,
      filename
    };
  }

  writing() {
    let [pagedir, title, gobackdefaultUrl] = this._args;
    let { pageName, pagepath, filename } = this.getPageInfo(pagedir);
    let gPath = `src/pages/${pagepath}`;
    // This.appendRouter(pagedir);
    let tplData = {
      pageName,
      title,
      gobackdefaultUrl,
      filename,
      headerComponent: `${path.relative(gPath, "src/components/common-header")}`
    };
    this.fs.copyTpl(
      this.templatePath("pages.ejs"),
      this.destinationPath(`${gPath}/${filename}/${filename}.tsx`),
      tplData
    );
    this.fs.copyTpl(
      this.templatePath("pagescss.ejs"),
      this.destinationPath(`${gPath}/${filename}/_${filename}.scss`),
      tplData
    );
  }

  // AppendRouter(pagedir) {
  //   this.fs.append("reactrouter.tsx", `abc`);
  // }

  install() {
    this.installDependencies({ bower: false, npm: false, yarn: true });
  }
};
