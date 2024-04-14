export function isValidString(str: any): boolean {
    const isStringType = typeof str === "string";
    const isValidValue = str.trim().length > 0;
    return isStringType && isValidValue;
}

export function isValidNumber(num: any): boolean {
    const isInvalid = Number.isNaN(num);
    return !isInvalid;
}
