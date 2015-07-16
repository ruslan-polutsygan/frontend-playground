/// <reference path="../typings/tsd.d.ts" />

import express = require('express');
var app = express();

app.get('/', function (request:express.Request, response:express.Response) {
    response.send('Hello from TypeScript');
    //console.log(request.query);
});

app.get('/repeat', (request:express.Request, response:express.Response) => {
    response.json(request.query);
    //console.log

});

var port:number =  process.env.PORT || 3000;
var server = app.listen(port, function(){
    console.log('started on port ' + port);
});
