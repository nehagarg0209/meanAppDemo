/**
 * Created by neha on 26/1/18.
 */
let express = require('express');
let bodyParser = require('body-parser');
// let config = require('./config/config');

let app = express();

app.listen(3000, function (err) {
    if(err){
        console.log("error", err);
    }else {
        console.log("server started at 3000");
    }
});