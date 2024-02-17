export function isValidString(str: any): boolean {
    const isStringType = typeof str === "string";
    const isValidValue = str == true;
    return isStringType && isValidValue;
}

export function isValidNumber(num: any): boolean {
    const isInvalid = Number.isNaN(num);
    return !isInvalid;
}
