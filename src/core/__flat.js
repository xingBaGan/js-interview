import getBoxType from "../utils/getBoxType";

let ARRAY_ERROR_TEXT = 'Expected a array'
export default function __flat(depth = 1) {
    if (!(getBoxType(this) === 'array')) {
        throw new TypeError(ARRAY_ERROR_TEXT)
    }
    return this.reduce((acc, currentValue, i, arr) => {
        if (!Array.isArray(currentValue)) {
            return acc.concat(currentValue);
        }
        if (depth > 0) {
            return acc.concat(currentValue.__flat(depth - 1));
        } else {
            return currentValue.slice();
        }
    }, [])
}