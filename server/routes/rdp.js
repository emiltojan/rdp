var express = require('express');
var router = express.Router();
var fs = require('fs');
const opn = require('opn');
    
router.post('/rdp',function(req,res,next){

var dc = req.body.dc;
var node = req.body.node;
var country_code = req.body.country_code;
var userid = req.body.userid;

var ip = 's0'+dc+'nts288'+node+country_code+'.s0'+dc+'.'+country_code;

var content = `screen mode id:i:2
use multimon:i:0
desktopwidth:i:1280
desktopheight:i:1024
session bpp:i:16
winposstr:s:0,1,0,31,1280,891
compression:i:1
keyboardhook:i:2
audiocapturemode:i:0
videoplaybackmode:i:1
connection type:i:2
displayconnectionbar:i:1
disable wallpaper:i:1
allow font smoothing:i:0
allow desktop composition:i:0
disable full window drag:i:1
disable menu anims:i:1
disable themes:i:0
disable cursor setting:i:0
bitmapcachepersistenable:i:1
full address:s:${ip}
audiomode:i:0
redirectprinters:i:1
redirectcomports:i:0
redirectsmartcards:i:1
redirectclipboard:i:1
redirectposdevices:i:0
redirectdirectx:i:1
autoreconnection enabled:i:1
authentication level:i:2
prompt for credentials:i:0
negotiate security layer:i:1
remoteapplicationmode:i:0
alternate shell:s:E:\walmart applications\gls\launch\gls2_select.exe
shell working directory:s:E:\walmart applications\gls
gatewayhostname:s:
gatewayusagemethod:i:4
gatewaycredentialssource:i:4
gatewayprofileusagemethod:i:0
promptcredentialonce:i:1
use redirection server name:i:0
networkautodetect:i:1
bandwidthautodetect:i:1
enableworkspacereconnect:i:0
rdgiskdcproxy:i:0
kdcproxyname:s:
drivestoredirect:s:`;

console.log("full address" + ip);

fileName = 'C:\\Users\\'+userid+'\\\AppData\\Local\\Temp\\'+dc+'.rdp';
console.log('file Name'+fileName);

fs.writeFile(fileName, content, function(err) {
    if(err) {
        return console.log(err);
        res.send(err);
    }

    console.log("The file was saved!");
     opn(fileName);
    
}); 
 res.send(fileName);
});

module.exports = router;
