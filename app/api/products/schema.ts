import { number, object, string } from "zod";

const productSchema = object({
    name: string(),
    price: number()
})

export default productSchema