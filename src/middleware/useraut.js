export const userauth = (req, res, next) => {
    const token = "xyzig";
    const authorization = token === "xyzig";
    if (!authorization) res.status(401).send("Not Authorized");
    else next();
}