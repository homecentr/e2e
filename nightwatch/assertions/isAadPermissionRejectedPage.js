const { reusable } = require("./isAadErrorPage")

exports.assertion = function () {
  reusable(this, "AADSTS50105")
}