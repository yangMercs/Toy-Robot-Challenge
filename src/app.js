const path = require('path');


const argv = require('yargs')
    .usage('Usage')
    .command('run', 'Run the simulation', {
        prompt: {
            alias: 'p',
            description: 'Run commands on prompt'
        },
        file: {
            alias: 'f',
            description: 'Run commands on a text file'
        }
    })
    .options({
        help: {
            alias: 'h',
            describe: 'Get help screen'
        }
    })
    .demandCommand(1, 'You need atlest run the command to begin the app').argv;


const Simulation = require('./modules/simulation');

// Run the simulation starts
const simulation = new Simulation({x: 5, y: 5}, argv.file || null);

simulation.run();