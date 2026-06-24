import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://anmolmongo:bi8Cvt4ihikDIeb6@cluster0.kpxqdwx.mongodb.net/Devtinder");
};

export default connectDB;
