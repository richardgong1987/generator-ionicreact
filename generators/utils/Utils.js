module.exports = class Utils {
  static toPageName(str) {
    str = str.replace(/[_-](\w)/g, function(all, letter) {
      return letter.toUpperCase();
    });
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  }
};
