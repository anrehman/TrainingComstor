
module.exports = function(controller) {
    controller.hears(["add"], "direct_message,direct_mention", function(
      bot,
      message
    ) {
        var email = message.user;
        var CiscoSpark = require('node-ciscospark');
        var async = require('async');

    });
}