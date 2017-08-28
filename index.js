console.log('Init')
//Import third party modules
var chalk = require('chalk');
var figlet = require('figlet');
var request = require('request');
var inquirer = require('inquirer')
//Import local modules
var interface = require('./modules/interface.js') //For interfacing with the device
var discover = require('./modules/discover.js') //Used for discovering Cisco devices
var tools = require('./modules/tools.js') //Extra tools to keep index.js to a minimum
var cmd = require('./modules/cmds.js') //Tool that runs the comamnds.
var log = require('./modules/log.js') //Used for logging errors
//Load configs
var config = require('./config.json')
//Finished loadup
console.log(chalk.bgGreen('Startup complete!'))
figlet(config.about.name, {font: "Slant"}, function(err, data) {
    if (err) {
        console.log('**Displaying the figlet failed, skipping.**');
        log.log('[FIGLET LAODER] ' + err, 'error')
        return;
    }
    console.log(data)
    console.log('By Nevexo // Version' + config.about.version + " // Release Name: " + config.about.releaseName)
    console.log('=========================\nIOS TARG: ' + config.about.iosTarget + '\nPLATFORM(S) ' + config.about.platform)
});

function mainLoop() {
    //inquirer.prompt()
}