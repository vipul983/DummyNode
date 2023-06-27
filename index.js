const http=require('http')
const server=http.createServer((req,res)=>{
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("home page")
})

const PORT=process.env.PORT || 3000

server.listen(PORT,()=>console.log("server is listening at port 3000"))





