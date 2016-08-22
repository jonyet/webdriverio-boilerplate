var
	winston = require('winston'),
	transports = [];

transports.push(new (winston.transports.Console)({
	json: process.env.LOCAL_LOG_JSON === 'true',
	colorize: true,
	level: 'error'
	//debug -> info -> error
}));

var logger = new (winston.Logger)({
	transports: transports
});

module.exports = logger;
