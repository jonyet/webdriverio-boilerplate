'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transports = [];

transports.push(new _winston2.default.transports.Console({
	json: process.env.LOCAL_LOG_JSON === 'true',
	colorize: true,
	level: 'error'
	//debug -> info -> error
}));

var logger = new _winston2.default.Logger({
	transports: transports
});

exports.default = logger;