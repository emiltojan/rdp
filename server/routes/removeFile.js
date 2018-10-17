var express = require('express');
var router = express.Router();
var fs = require('fs');
    
router.post('/removeFile',function(req,res,next){
    var fileName = req.body.fileName;

    console.log("File to be deleted:"+fileName);
     if (fs.existsSync(fileName)) {
       console.log("File is present");
       setTimeout(function(){
       fs.unlink(fileName);
       console.log("file removed");
       res.send("SUCCESS");       
       }, 3000);

     }
     else{
        res.json({'err':'Not able to delete file'});
        res.send(err);
    }
    
});

module.exports = router;