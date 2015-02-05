(function(module) {
    // load key modules
    var express = require('express');
    var fs = require('fs');
    var app = express();
    var router = express.Router();

    // todo clean up this function and make it production-worthy
    // Utility function for loading html views into the browser
    function renderPage(filename, res) {
        var readFile = __dirname + '/../views/' + filename + ".html";

        fs.readFile(readFile, 'utf8', function(err, data) {
            if(err) {
                res.writeHead(404);
                res.write("Failed to render %s.", filename);
            }
            else {
                res.writeHead(200);
                res.write(data.toString());
            }
            res.end();
        });

    }


    //todo find out where else in this project codebase there is code that could be handing requests to /

    /* GET home page. */
    router.get([ '/' , '/home' ], function(req, res) {
        renderPage( 'index', res);
//        renderPage('index', res);
    });

    /* GET all other requests */
    router.get('*', function(req, res) {
        renderPage('error', res);
    });


    module.exports = router;

})(module);


