import express from 'express'
import { adminauth } from './middleware/auth.js';
import { userauth } from './middleware/useraut.js';
import connectDB from "./config/database.js";
import User from "./models/user.js";

const app = express()

app.post("/signup", async (req, res) => {
  try {
    const user = new User({
      firstname: "Anmol",
      lastname: "Rana",
      emailid: "anmolsingh95@gmail.com",
      password: "asingh",
      mobile: 8433142504
    });
    await user.save();
    res.send("User created successfully");
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});

const PORT = "3000";
connectDB()
  .then(() => {
    console.log("Connection established successfully!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Connection not established:", err.message);
  });



// const PORT = 3000

// app.use("/admin", adminauth);


// app.get("/getuserdata", (req, res) => {

//   throw new Error("Invalid");
//   res.send("Request");
//   // catch (error) {
//   //   console.log("Error");
//   //   res.send("error");
//   // }
// });

// app.use("/", (err, req, res, next) => {
//   if (err) {
//     res.status(500).send("Invalid response correct it !");
//   }
// });


// app.get("/user/data", userauth, (req, res) => {
//   res.send("User data sent!");
// });

// app.get("/user/login", (req, res) => {
//   res.send("User can login!");
// });

// app.get("/admin/getAllData", (req, res) => {
//   res.send("After getting authorised");
// });


// app.use("/test", (req, res) => {
//   res.send("Hello from the server !");
// });

// app.use("/test2",
//   [(req, res, next) => {
//     console.log("1st line of code");
//     next();
//   },
//   (req, res, next) => {
//     console.log("New stuff bro");
//     next();
//   },
//   (req, res) => {
//     res.send("New thing bro 2");
//   }
//   ]);

// app.use("/test3", (req, res) => {
//   res.send("Hello from the server 3!");
// });

// app.get("/", (req, res) => {
//   res.send("Welcome to the homepage!");
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`)
// })


