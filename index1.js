//const fs= require('fs');
//fs.writeFileSync("hello.txt","how are you,what is your name");
//console.log("-->",__dirname);

const http = require('http');

function dataControl(req,resp){
    resp.write("<h1>hello, This is pawan</h1>");
    resp.end();
}

http.createServer(dataControl).listen(4500);

/*http.createServer((req,resp)=>{

    resp.write("<h1>hello this is pawan</h1>");
    resp.end();
}).listen(4500);
*/
