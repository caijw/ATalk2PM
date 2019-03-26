const http = require('http');
const fs = require('fs');
const serverConfig = {
    port: 12345,
    address: '127.0.0.1'
};

const httpServer = http.createServer(function(request, response){
    /**
     * request: 浏览器对服务器的请求
     * resppinse: 服务器对浏览器的响应
    */
    let url = request.url;
    if(url == '/hello'){
        fs.readFile('./index.html', function(err, helloDocument){
            response.writeHead(200, {
                'Content-Type': 'text/html' 
            });
            if(err){
                response.end(err.stack);
            }else{
                response.end(helloDocument);
            }

        });
        fs.writenFile('test.txt', url);

    }else{
        response.writeHead(404);
        response.end();
    }

});

httpServer.listen(serverConfig.port, serverConfig.address, function(err){
    if(err){
        console.error(`http server listen ${serverConfig.address}:${serverConfig.port} error:`, err);
        process.abort();
    }else{
        console.log(`http server listen ${serverConfig.address}:${serverConfig.port} success`);
    }
});

