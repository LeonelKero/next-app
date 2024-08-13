import { number, object, string } from "zod";

const schema = object({
    title: string().min(8),
    releasedAt: number()
})

export default schema