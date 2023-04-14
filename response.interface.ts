import z from "zod";

export const userSchema = z.object({
    address: z.object({
        geolocation: z.object({
            lat: z.string(),
            long: z.string()
        }),
        city: z.string(),
        street: z.string(),
        number: z.number(),
        zipcode: z.string(),
    }),
    id: z.number(),
    email: z.string(),
    username: z.string(),
    password: z.string(),
    name: z.object({
        firstname: z.string(),
        lastname: z.string()
    }),
    phone: z.string(),
    __v: z.number()
})


export const cartSchema = z.object({
    id: z.number(),
    userId: z.number(),
    date:z.string(),
    products: z.object({
        productId: z.number(),
        quantity: z.number(),
    }).array(),
    __v: z.number()
})

export const productsSchema = z.object({
    id: z.number(),
    title: z.string(),
    price: z.number(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    rating: z.object({
        rate: z.number(),
        count: z.number(),
    })
})

export type userType = z.infer<typeof userSchema>
export type cartType = z.infer<typeof cartSchema>
export type productType = z.infer<typeof productsSchema>