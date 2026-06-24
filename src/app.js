import express from 'express'
import { adminauth } from '../middleware/auth.js';
const app = express()

const PORT = 3000

app.use("/admin", adminauth );

app.get("/admin/getAllData",(req,res) => {
     res.send("After getting authorised");
});

app.use("/test",(req,res)=>{
    res.send("Hello from the server !");
});

app.use("/test2",
  [(req, res, next) => {
    console.log("1st line of code");
    next();
  },
  (req, res, next) => {
    console.log("New stuff bro");
    next();
  },
  (req, res) => {
    res.send("New thing bro 2");
  }
]);

app.use("/test3",(req,res)=>{
    res.send("Hello from the server 3!");
}); 

app.get("/", (req, res) => {
    res.send("Welcome to the homepage!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})