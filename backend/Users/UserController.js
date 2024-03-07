import asyncHandler from "express-async-handler"
import User from "./UserModel.js"

export const registerUser = asyncHandler(async (request, response) => {
    const { firstname, middlename, lastname, username, password } = request.body;
    if (!firstname || !username || !password) {
        throw new Error("All fields are mandatory");
    }
    const checkIfUsernameAlreadyExists = await User.findOne({ username });
    if (checkIfUsernameAlreadyExists) {
        throw new Error("Username already exists");
    }

    try {
        const user = await User.create({
            firstname,
            middlename,
            lastname,
            username,
            password
        })

        if (user) {
            response.json({ status: 201, message: "CREATED", id: user.id })
        }
    } catch (error) {
        console.log(error)
        response.json({ status: 500, message: "FAILED" })
    }
})

export default { registerUser }


