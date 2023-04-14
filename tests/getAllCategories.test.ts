import { getAllCategories } from "../functions";
import { typicalProducts, twoCategoriesInProducts, zeroProducts } from "../data/RequestData";

test('getAllCategories Typical Data', () => {
    expect(getAllCategories(typicalProducts)).toStrictEqual({
        "men's clothing": 204.23,
        "jewelery": 883.98,
        "electronics": 1994.99,
        "women's clothing": 157.72
    });
})

test('getAllCategories Two Categories', () => {
    expect(getAllCategories(twoCategoriesInProducts)).toStrictEqual({
        "men's clothing": 500,
        "jewelery": 200,
    });
})

test('getAllCategories Zero Products', () => {
    expect(getAllCategories(zeroProducts)).toStrictEqual({});
})
