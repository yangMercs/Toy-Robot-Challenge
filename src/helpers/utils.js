const chalk = require('chalk');

// for text color purposes, if red then error | if green then success | if blue then its an info
const error = chalk.bold.red;
const success = chalk.bold.green;
const info = chalk.blue;

module.exports = {
	error: text => console.log(error(`\n${text}\n`)),
	info: text => console.log(info(`\n${text}\n`)),
    success: text => console.log(success(`\n${text}\n`)),
	log: (text, items) => console.log(text, items || ''),
	logTitle: title => console.log((title)),
	buildPlaceObject: (data) => {
		return {
			x: parseInt(data[1]),
			y: parseInt(data[2]),
			direction: data[3]
		}
	}
};