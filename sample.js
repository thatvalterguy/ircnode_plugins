// A sample plugin for IRC Node.
// API documentation: https://github.com/totallymike/ircnode/wiki/PluginAPI

/* First we get the irc object from global. Inside this object, all
 * all the api calls are made. In this example only privmsg is used. */
// TODO Look if there is a better way to get the irc object
var irc = global.irc;

/* Then the command handler function is created. This handler function
 * is called when the command is triggered. The developer can choose
 * the structure of the plugin as he/she wishes but a main handler
 * function always needs to be created. */
var test_handler = function (act) {

  /* If no parameters are added to the command, we just send 'test'
   * back to the source. */
  if (act.params.length === 0) {
    irc.privmsg(act.source, 'test');
  }

  /* If there are parameters, then they are joined into one string
   * and then sent back to the source. */
  else {
    irc.privmsg(act.source, act.params.join(' '));
  }

};

/* Afterwards the plugin needs to be exported back to the "main" module.
 *
 * The 'name' property is how the plugin is referred to internally. That
 * means that if the plugin is named 'test', then for example the data
 * plugin stores will be linked with he name 'test'.
 *
 * The 'hooks' property is the mapping between triggers which the
 * user calls to execute the command and the functions which are called
 * when the plugin is triggered. These triggers are also the names which
 * are used to disable and enable the triggers with '!enable <command>'
 * and '!disable <command>'. In this example, '!test [PARAMS]' would call
 * the 'test_handler (act)' function.
 */
exports.name = 'test';
exports.hooks = { 'test': test_handler };
