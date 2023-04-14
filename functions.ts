import { productType, cartType, userType } from "./response.interface";
import { mustFind } from "./utils";

export const getAllCategories = (products: productType[]) => {
    const result: { [key: string]: number } = {};
    products.forEach((item) => {
        if (item.category in result) {
            result[item.category] += item.price;
            result[item.category] = Math.round(result[item.category] * 100) / 100;
        }
        else result[item.category] = item.price
    })
    return result;
}

export const getHighestValueCart = ({ products, carts, users }: { products: productType[], carts: cartType[], users: userType[] }) => {
    let mostExpensiveCartIds: number[] = [], mostExpensiveCartPrice = -1;
    carts.forEach((cart, index) => {
        const cartPrice = cart.products.reduce((result, product) => {
            const productDetails = mustFind(products, (p) => {
                return p.id === product.productId;
            })
            return Math.round((result + productDetails.price) * 100) / 100;
        }, 0);

        if (cartPrice === mostExpensiveCartPrice) mostExpensiveCartIds.push(index);
        if (cartPrice > mostExpensiveCartPrice) {
            mostExpensiveCartIds = [index];
            mostExpensiveCartPrice = cartPrice;
        }
    })

    return mostExpensiveCartIds.map((index) => {
        const user = mustFind(users, (user) => user.id === index)
        return {
            name: user.name,
            cartValue: mostExpensiveCartPrice
        }
    })
}


export const getTwoMostDistantUsers = (users: userType[]) => {
    let closestsUserX: userType | null = null, closestsUserY: userType | null = null;
    let maxDistant = -1;

    if (users.length < 2) return null;

    for (let x = 0; x < users.length; ++x) {
        for (let y = x + 1; y < users.length; ++y) {
            const curDistant = (Number(users[x].address.geolocation.lat) - Number(users[y].address.geolocation.lat)) ** 2 + (Number(users[x].address.geolocation.long) - Number(users[y].address.geolocation.long)) ** 2;
            if (maxDistant < curDistant) {
                maxDistant = curDistant;
                closestsUserX = users[x];
                closestsUserY = users[y];
            }
        }
    }

    return [closestsUserX, closestsUserY];
}