/**
 * Header HTTP
 * 
 * menerima otentikasi berupa username dan password
 */

// import modul http

const http = require("http");

const server = http.createServer((req, res)=>{

    let dataHeader, // menampung object dari header request
    dataAuthorization, // menampung property authorization dari object dataHeader
    splitData, // pemisah value authorization
    dataUser, //menampung value yang berisi kode base64 to String dari dataUser
    userPass, // menampung hasil dari decode base64
    dataResponse // menampung data yang akan dikirim ke response


    // set header
    res.setHeader("Content-Type", "application/json");

    //set header dari request
    dataHeader = req.headers

    console.log(dataHeader);

    dataAuthorization = dataHeader.authorization;

    // jika data ini terdapat authorization kita buka alert
    if(!dataAuthorization){
        dataResponse = {
            data : " Undifined Authorization"
        }
        return res.end(JSON.stringify(dataResponse))
    }
    /**
     * untuk menampikan format data authorization, (token), (kode base64)
     */

    // split yang menjadi array dengan batasan spasi
    splitData = dataAuthorization.split(" ")

    // generate kode base64 dia di index 1
    dataUser = splitData[1];

    //convert data user nya jadi base64
    userPass = Buffer.from(dataUser, "base64").toString()

    // buat response berisi token dan userPass
    dataResponse = {
        token:dataHeader.authorization,userPass

    }
    return res.end(JSON.stringify(dataResponse))

}); 

server.listen(5000)