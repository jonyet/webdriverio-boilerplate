import winston from 'winston';
const transports = [];

transports.push(new (winston.transports.Console)({
	json: process.env.LOCAL_LOG_JSON === 'true',
	colorize: true,
	level: 'error'
	//debug -> info -> error
}));

const logger = new (winston.Logger)({
	transports
});

export default logger;
