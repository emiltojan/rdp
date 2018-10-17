var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var port = 3000;

var index = require('./routes/index');
var rdp = require('./routes/rdp');
var removeFile = require('./routes/removeFile');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'client')));

app.use('/', index);
app.use('/api', rdp);
app.use('/api',removeFile);


app.get('*', function(req, res) {
  res.sendfile('./views/index.html')
})

app.listen(port, function(){
    console.log("Server started on port" + port);
});
