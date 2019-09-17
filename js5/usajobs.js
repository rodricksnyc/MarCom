



var request = require('request');

var host = 'data.usajobs.gov';
var userAgent = 'rodricksnyc@gmail.com';
var authKey = 'ZVRFnMsfJGJ+6jvGyznqQPRyhF9n5h9jSS259lekdgU=';

request({
    url: 'https://data.usajobs.gov/api/Search?PositionTitle=Auditor',
    method: 'GET',
    headers: {
        "Host": host,
        "User-Agent": userAgent,
        "Authorization-Key": authKey
    }
}, function(error, response, body) {
    var data = JSON.parse(body);
});
