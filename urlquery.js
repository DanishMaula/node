/**URL Query String 
 * 
 * 
 * 
 * 
 * q = key 
 * 
 * di gunakan untuk mengirim data ke server dengan method GET
*/


const http = require('http')

const url = require('url') // import modul url
const queryString = require('querystring') // import modul query string

const server = http.createServer((req, res)=> {

  let urlRequest, // berisi path yang terdapat di request
  urlObj, // berisi url yang telah di proses
  urlQuery, // object dari query
  dataResponse // object dari query yang udah di parsing

  res.setHeader("Content-Type", "application/json")

  urlRequest = req.url

  urlObj = url.parse(urlRequest)
  console.log(urlObj)


  // ambil property yang terdapat di object url
  urlQuery = urlObj.query

  if(!urlQuery){
      dataResponse = {
          data : 'Query not found'
      }

      return res.end(JSON.stringify(dataResponse))
  }
  dataResponse = queryString.parse(urlQuery)
  return res.end(JSON.stringify(dataResponse))

})

server.listen(8000)