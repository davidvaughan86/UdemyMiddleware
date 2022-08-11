const express = require('express')
const app = express()
const PORT = 5500
// this allows the app to use middleware same as bodyparser. all routes will be enabled when using this function .use()
app.use(log)

// creating middleware requires 3 arguments, the request and response and next. next is envoked at the end of the line of code within scope to tell the middleware to proceed back to the request
function log(req, res, next) {
    console.log("[Logging 1]")
    console.log("[Logging 2]")
    console.log("[Logging 3]")
    console.log("[Logging 4]")
    next()
}


app.get('/', (req,res) =>{
  
    res.send("ROOT")
})
app.get('/login', (req,res) =>{
  
    res.send("LOGIN")
})




















app.listen(PORT, () => {
    console.log('sever running')
})