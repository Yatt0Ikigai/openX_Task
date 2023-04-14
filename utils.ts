import { boolean } from "zod"

export function mustFind<T>(arr: Array<T>, predicate: (t: T) => boolean): T {
    const item = arr.find(predicate);
    if (!item) throw new Error(`Item was not found in the array (missing data or wrong boolean function)`);
    return item;
}