var apiai = require('apiai');
var app = apiai("c3062d839dcd46c389f5f26a0a9fc066");
var request = app.textRequest('<Your text query>', {
    sessionId: '<unique session id>'
});
request.on('response', function(response) {
    console.log(response);
});
request.on('error', function(error) {
    console.log(error);
});
request.end();

exports.doNLP = (text, sessionId) => app.textRequest(text, { sessionId: sessionId })
    .on('response', (res) => { return res }).on('error', (res) => { return res });