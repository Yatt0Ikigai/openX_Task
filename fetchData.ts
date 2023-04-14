import {
    userSchema, userType,
    cartSchema, cartType,
    productsSchema, productType
} from "./response.interface";
import axios from "axios";
import { z } from "zod";

const getUsers = async (): Promise<userType[]> => {
    const response = await axios("https://fakestoreapi.com/users");
    return z.array(userSchema).parse(response.data);
}

const getCarts = async (): Promise<cartType[]> => {
    const response = await axios("https://fakestoreapi.com/carts/?startdate=2000-01-01&enddate=2023-04-07");
    return z.array(cartSchema).parse(response.data);
}

const getProducts = async (): Promise<productType[]> => {
    const response = await axios("http://fakestoreapi.com/products");
    return z.array(productsSchema).parse(response.data);
}

export const getData = async () => {
        return await Promise.all([
            getUsers(),
            getCarts(),
            getProducts(),
        ]);
}