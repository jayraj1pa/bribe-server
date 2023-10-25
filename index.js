const jsonServer = require('json-server')

const crimeServer = jsonServer.create()

const router = jsonServer.router('db.json')

const middleware = jsonServer.defaults()

const port = 4000 || process.env.port

crimeServer.use(middleware)

crimeServer.use(router)

crimeServer.listen(port,()=>{
    console.log("your port is running",{port});
})