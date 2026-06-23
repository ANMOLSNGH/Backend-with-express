import express from 'express'
const app = express()

const PORT = 3000

app.use("/test",(req,res)=>{
    res.send("Hello from the server !");
});

app.use("/test2",(req,res)=>{
    res.send("Hello from the server 2!");
});

app.use("/test3",(req,res)=>{
    res.send("Hello from the server 3!");
});

app.get("/", (req, res) => {
    res.send("Welcome to the homepage!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})