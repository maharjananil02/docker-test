import mongoose from "mongoose";

const userSchema = ({
    firstname: {
        type: String,
        required: [true, "Firstname is required"]
    },
    middlename: {
        type: String,
    },
    lastname: {
        type: String,
    },
    username: {
        type: String,
        required: [true],
        unique: [true, "Username already taken"]
    },
    password: {
        type: String,
        required: [true, , "Password is required"]
    }

})

export default mongoose.model("User", userSchema);