const isAadErrorPage = require("./isAadErrorPage")

const reusable = function (context) {
  isAadErrorPage.reusable("AADSTS50105", context)
}

const assertion = function () {
  reusable(this)
};

module.exports = {
  reusable,
  assertion
}