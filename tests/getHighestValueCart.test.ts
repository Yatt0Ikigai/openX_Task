import { getHighestValueCart } from "../functions";
import { typicalCarts, typicalUsers, typicalProducts, missingProducts, missingUsers } from "../data/RequestData";

test('getMostExpensiveCarts Typical Data', () => {
    expect(getHighestValueCart({ carts: typicalCarts, products: typicalProducts, users: typicalUsers })).toStrictEqual(
        [
            {
                name: { firstname: 'john', lastname: 'doe' },
                cartValue: 827.25
            }
        ]
    )
})

test('getHighestValueCart Missing Produts', () => {
    expect(() => {
        getHighestValueCart({
            carts: typicalCarts,
            products: missingProducts,
            users: typicalUsers
        })
    }).toThrow("Item was not found in the array (missing data or wrong boolean function)");
})

test('getHighestValueCart Missing Users', () => {
    expect(() => {
        getHighestValueCart({
            carts: typicalCarts,
            products: typicalProducts,
            users: missingUsers
        })
    }).toThrow("Item was not found in the array (missing data or wrong boolean function)");
})

