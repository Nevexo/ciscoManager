fs = require('fs')
var config = {
    "locations": {
        "errors": "logs/errors.log"
    }
}



exports.log = function(data, type) {
    if (type === 'error') {
        fs.appendFile(config.locations.errors, data + "\n", function (err) {
            if (err) {console.log('[FATAL] Saving the log failed.' + err)};
   
        });
    }
}