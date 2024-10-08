import { number, object, string } from "zod";

const productSchema = object({
    name: string(),
    price: number().min(1)
})

export default productSchema