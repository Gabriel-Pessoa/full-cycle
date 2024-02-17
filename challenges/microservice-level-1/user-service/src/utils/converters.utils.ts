import { isValidNumber } from "./validators.utils";

export function stringToNumber(src: any): number {
    const isValid = isValidNumber(src);
    if (!isValid) {
        throw new Error("number is invalid");
    }

    return Number(src);
}
