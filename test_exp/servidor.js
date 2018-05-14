function init(req, res) {
    res.send('Hello World');
}

var e = require("express");
var app = e();

app.get('/', init)

app.listen(8086);
