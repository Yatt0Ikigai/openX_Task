import { getData } from "./fetchData";
import { getHighestValueCart, getAllCategories, getTwoMostDistantUsers } from "./functions";


const main = async () => {
    try {
        const [users, carts, products] = await getData();

        const twoDistantUsers = getTwoMostDistantUsers(users);
        const allCategories = getAllCategories(products);
        const highestValueCart = getHighestValueCart({ carts, products, users });
        
    } catch (error) {
        let message: string;
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log(error);
    }
}

main();