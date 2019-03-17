const http = require('http');
const serverConfig = {
    port: 12345,
    address: '127.0.0.1'
};

let helloDocument = `<!doctype html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <title>hello</title>
    </head>
    <body>
        <h2>demo</h2>
        <script>
            alert('你好');
        </script>
    </body>
</html>
`;

const httpServer = http.createServer(function(request, response){
    /**
     * request: 浏览器对服务器的请求
     * resppinse: 服务器对浏览器的响应
    */
    let url = request.url;
    if(url == '/hello'){
        response.writeHead(200, {
            'Content-Type': 'text/html' 
        });
        response.end(helloDocument);
    }else{
        response.writeHead(404);
        response.end();
    }

});

httpServer.listen(serverConfig.port, serverConfig.address, function(err){
    if(err){
        console.error('http server listen ${serverConfig.address}:${serverConfig.port} error:', err);
        process.abort();
    }else{
        console.log('http server listen ${serverConfig.address}:${serverConfig.port} success');
    }
});

