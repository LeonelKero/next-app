import { boolean, number, object, string } from "zod";

const userSchema = object({
    name: string().min(2),
    email: string().email(),
    followers: number().min(0).optional(),
    isActive: boolean().default(false).optional()
})

export default userSchema