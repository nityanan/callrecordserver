var express = require('express');
var router = express.Router();

router.get('/rest/download', function(req, res, next) {
    var query = req.query
    //var path = "/home/rahul"
    //var path = "/var/spool/asterisk/monitor"
    //var path = "/home/rahul/Downloads"
    var id =  query.id

    var filename = __dirname+"/"+id+".wav"
    console.log(filename)
  res.download(filename)
});

module.exports = router;
