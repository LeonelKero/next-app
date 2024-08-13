import { object, string } from "zod";

const userSchema = object({
    name: string().min(2),
    email: string().email()
})

export default userSchema