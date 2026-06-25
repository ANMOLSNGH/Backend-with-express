import mongoose from "mongoose";
import validator from "validator";



const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 30
    },
    lastname: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 30
    },
    emailid: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email data is not valid");
            }
        },
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error("Password data is not valid");
            }
        },
    },
    mobile: {
        type: Number,
        required: true,
    },
    gender:
    {
        type: String,
        validate(value) {
            if (!["male", "female", "other"].includes(value)) {
                throw new Error("Gender data is not valid");
            }
        },
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 18) {
                throw new Error("Age must be greater than or equal to 18");
            }
        }
    },
}, { timestamps: true });


export default mongoose.model("User", userSchema);