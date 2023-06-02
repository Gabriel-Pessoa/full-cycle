import { isValidNumber } from "./validators.utils";

export function stringToNumberWithDefault(src: string | undefined, def: number = 0): number {
    const isValid = isValidNumber(src);
    if (!isValid) {
        return def;
    }

    return Number(src);
}

