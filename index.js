// #!usr/bin/env node
// console.log("hello")

// require('./add')
// const add=require('./add')



// console.log("hello vipul")

// const res=add(1,2);
// console.log(res)


// require('./batman')
// require('./superman')


// const superHero=require('./super-hero')
// console.log(superHero.getName())
// superHero.setName('superman')
// console.log(superHero.getName())

// const newSuperHero=require('./super-hero')
// console.log(newSuperHero.getName())


// const SuperHero=require('./super-hero')
// const batman=new SuperHero('batman')
// console.log(batman.getName())
// batman.setName('bruce wayne')
// console.log(batman.getName())

// const newSuperHero=require('./super-hero')
// const superman=new newSuperHero('superman')
// console.log(superman.getName())


// const math=require('./math')
// console.log(math.add(1,2))

// console.log(math.subtract(1,2))

// const data=require('./data.json')
// console.log(data)



// console.log("hello")


// const path=require('node:path')
// console.log(__dirname)
// console.log(__filename)
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))
// console.log(path.format(path.parse(__filename)))
// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute('./iife.js'))
// console.log(path.join("hello","vipul","index.html"))
// console.log(path.resolve("/hello","//vipul","../index.html"))

// function callback(name){
//     console.log(`hello ${name}`)
// }

// function higherOrderFun(){
//     callback("vipul")
// }
// higherOrderFun(callback)


// const eventEmitter=require("node:events")
// const emitter= new eventEmitter;

// emitter.on("order-pizza",(size,toping)=>{
//     console.log(`order received! baking the ${size} pizza with ${toping}`)
// })
// emitter.on("order-pizza",(size)=>{
//     if(size==="large"){
//         console.log(`complementary small pizza`)
//     } 
// })
// emitter.emit("order-pizza","large","mushroom")


// const PizzaShop=require('./pizza-shop')
// const DrinkMachine=require('./drink-machine')
// const pizzaShop=new PizzaShop
// const drinkMachine=new DrinkMachine
// pizzaShop.on("order",(size,toping)=>{
//     console.log(`order received! baking the ${size} pizza with ${toping}`)
//     drinkMachine.serveDrink(size)

    
// })
// pizzaShop.order("large","mushroom")
// pizzaShop.displayOrderNumber()


// video 24
// const buffer=new Buffer.from("Vipul");
// buffer.write("garg")
// console.log(buffer);
// console.log(buffer.toJSON());
// console.log(buffer.toString());



// video 26
// const fs=require("node:fs")
// const fileContent=fs.readFileSync("./greet.txt","utf-8")
// console.log(fileContent)

// fs.readFile("./greet.txt","utf-8",(error,data)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(data)
//     }
// })

// fs.writeFileSync("./greet.txt","ji")
// fs.writeFile("./greet.txt"," no" ,{flag:"a"},(error)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log("file written")
//     }
    
// })

// 27
// const fs=require("node:fs/promises")

// async function readFile(){
//     try{
//         const data=await fs.readFile("./greet.txt","utf-8")
//         console.log(data)
//     }
//     catch(err){
//         console.log(err)
//     }
    
// }
// readFile()

// 28
// const fs=require("node:fs")
// const readableStream=fs.createReadStream("./greet.txt",{encoding:"utf-8",highWaterMark:2})
// const writeableStream=fs.createWriteStream("./greet2.txt")
// readableStream.on("data",(chunk)=>{
//     console.log(chunk)
//     writeableStream.write(chunk)
// })

// 29
// const fs=require("node:fs")
// const readableStream=fs.createReadStream("./greet.txt",{encoding:"utf-8",highWaterMark:2})
// const writeableStream=fs.createWriteStream("./greet2.txt")
// readableStream.pipe(writeableStream)


//30
// const fs=require("node:fs")
// const zlib=require("node:zlib")
// const gzip=zlib.createGzip()
// const readableStream=fs.createReadStream("./greet.txt",{encoding:"utf-8",highWaterMark:2})
// const writeableStream=fs.createWriteStream("./greet2.txt")
// readableStream.pipe(writeableStream)
// readableStream.pipe(gzip).pipe(fs.WriteStream("greet2.txt.gz"))

//31
// const http=require("node:http")
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"text/plain"})
//     res.end("Hello world!")
// })
// server.listen(3000,()=>{
//     console.log("server running on port 3000")
// })


// //32
// const http=require("node:http")
// const hello={
//     name:"vipul",
//     lastName:"garg"
// }
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"application/json"})
//     res.end(JSON.stringify(hello))
// })
// server.listen(3000,()=>{
//     console.log("server running on port 3000")
// })


//33
// const http=require("node:http")
// const fs=require('node:fs')
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"text/html"})
//     // res.end("<h1>hello vipul!</h1>")
//     // const html=fs.readFileSync("./index.html","utf-8")
//     fs.createReadStream(__dirname+"/index.html").pipe(res);
//     // res.end(html)
// })
// server.listen(3000,()=>{
//     console.log("server running on port 3000")
// })

//34
// const http=require("node:http")
// const fs=require('node:fs')
// const server=http.createServer((req,res)=>{
//     const name="vipul"
//     res.writeHead(200,{"content-type":"text/html"})
//     let html=fs.readFileSync("./index.html","utf-8")
//     html=html.replace("{{name}}",name)
//     res.end(html)
// })
// server.listen(3000,()=>{
//     console.log("server running on port 3000")
// })

//35
// const http=require("node:http")
// const fs=require('node:fs')
// const server=http.createServer((req,res)=>{

//     if(req.url==='/'){
//         res.writeHead(200,{"content-type":"text/plain"})
//         res.end("home page")
//     } else if(req.url==='/about'){
//         res.writeHead(200,{"content-type":"text/plain"})
//         res.end("about page")
//     } else if(req.url==='/api'){
//         res.writeHead(200,{"content-type":"application/json"})
//         res.end(JSON.stringify({
//             firstNAme:"vipul",
//             lastName:"garg"
//         }))
//     }
//     else{
//         res.writeHead(404,{"content-type":"text/plain"})
//         res.end("page not found")
//     }

// })
// server.listen(3000,()=>{
//     console.log("server running on port 3000")
// })


//43
// console.log("1")
// process.nextTick(()=>{
//     console.log("next tick")
// })
// console.log("2")
// Promise.resolve().then(()=>{
//     console.log("rpomise")
// })
// process.nextTick(()=>{
//     console.log("next tick")
// })

//63

const http=require('node:http')
const server=http.createServer((req,res)=>{
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("home page")
})

const PORT=process.env.PORT || 3000

server.listen(PORT,()=>console.log("server is listening at port 3000"))





