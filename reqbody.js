/**
 * 
 * Request body
 * 
 * learn passing data body dari request
 * 
 *  
 */

/**
 * Bentuk transaksi client ada 2  yaitu upload dan download
 */

const http = require('http')
const queryString = require('querystring')
const server = http.createServer((req,res) => {
    let urlReq, methodReq, dataRequest

    const chunksArr = []
    const dataResponse = {}

    res.setHeader("Content-Type", "application/json")

    // untuk mendapatkan path dari url
    urlReq = req.url

    // kalau method nya kosong, isi dengan get

    methodReq = req.method?? "get"


    // kita akan membuat routing ke login

    if(urlReq.toLowerCase() === "/login"){
        if(methodReq.toLowerCase( ) === 'get'){
            // tandai halaman login
            dataResponse.data = "Ini adalah halaman login"
            res.end(JSON.stringify(dataResponse))
        }else if(methodReq.toLowerCase() == 'post'){
            req.on('data', (chunks)=>{
                 // tambahkan chunk ke chunksArr
                chunksArr.push(chunks)
            })
            req.on('end', () =>{
                if(chunksArr.length !==0){
                    dataRequest = Buffer.concat(chunksArr).toString()
                    // ambil dataRequestnya
                    console.log(dataRequest)
        
                    let requestObj = queryString.parse(dataRequest)
        
                    // masukan object tersebut ke respon nya
                    dataResponse.data = requestObj
                }
        
               res.end(JSON.stringify(dataResponse))
            })
        }else{
            dataResponse.data = 'hanya menerima Method GET dan POST'
            res.end(JSON.stringify(dataResponse))
        }
    }else{
        // kalau endpoint nya bukan login
        dataResponse.data = 'Gunakan Endpoint /login'
        res.end(JSON.stringify(dataResponse))
    }

    // setelah data request selesai, akan di terima oleh server
    
    
})

server.listen(5555)