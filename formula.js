var prompt = require('prompt');

prompt.start();
// input1 and input 2 are variables
prompt.get(['input1', 'input2'], function (err, result) {
    console.log('Command-line input received:');
    console.log('  input1: ' + result.input1);
    console.log('  input2: ' + result.input2);
    // insert formula here
    console.log('total: ' + (parseInt(result.input1) + parseInt(result.input2)));
});