const isAadPermissionRejectedPage = require("./isAadPermissionRejectedPage")
const isCloudflarePermissionRejectedPage = require("./isCloudflarePermissionRejectedPage")

exports.assertion = function () {
  if (this.__nightwatchInstance.settings.globals.isRemote) {
    isCloudflarePermissionRejectedPage.reusable(this)
  } else {
    isAadPermissionRejectedPage.reusable(this)
  }
}