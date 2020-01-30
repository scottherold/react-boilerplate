// *** This file mocks the moment.js node module *** //
// *** MODULES *** //

/*
/ this is how you can require modules within a mock
/ otherwise, the function will recursively call itself, resulting in a stack trace error
*/
const moment = require.requireActual('moment');

// *** EXPORTS *** //
// You need to add teh default for timestamp, else, it will take a current timestamp with the moment library
export default (timestamp = 0) => {
    return moment(timestamp);
};