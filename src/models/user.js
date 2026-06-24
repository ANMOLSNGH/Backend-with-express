import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    emailid: {
        type: String
    },
    password: {
        type: String
    },
    mobile: {
        type: Number
    }
});


export default mongoose.model("User", userSchema);