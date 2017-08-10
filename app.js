var express = require('express');
var bodyParser = require('body-Parser');
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});
app.post('/nlp', (req, res) => {
    var apiai = require('apiai');
    var app = apiai("c3062d839dcd46c389f5f26a0a9fc066");
    var request = app.textRequest(req.body.text, {
        sessionId: req.body.session
    });
    request.on('response', function(response) {
        res.send(response.result.fulfillment.speech);
    });
    request.on('error', function(error) {
        console.log(error);
    });
    request.end();
});
app.listen(9000);