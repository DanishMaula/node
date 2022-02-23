const http = require('http')

const server = http.createServer((req, res) =>{
    let url, method, dataResponse

      // Set response header berupa json
  res.setHeader("Content-Type", "application/json");

  // ambil path url dari request
  url = req.url;

  method = req.method?? "get" // ambil method nya, jika tidak ada, maka diubah menjadi get

  if(url === "/"){
      dataResponse = {
          data: "ini adalah halaman Homepage"
      }
  }else if(url.toLowerCase() == "/login"){
     if(method.toLowerCase() == 'post'){
         dataResponse = {
             data : 'anda Login dengan method post'
         }
     }else{
        dataResponse = {
            data : "anda berada di get"
        }
    }
  }else{
      dataResponse = {
          data : "404 Not found"
      }
  }

  return res.end(JSON.stringify(dataResponse))

}) 

server.listen(6000);
