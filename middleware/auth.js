export const adminauth = (req,res,next) => {
     const token = "1234";
     const isAdministrative = token === "1234";
     console.log("Checking token matching");
     if(!isAdministrative) res.status(401).send("Unauthorised status");
     else next();
}