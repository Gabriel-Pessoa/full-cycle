export enum ErrorType {
    Database_No_Rows = "DATABASE_NO_ROWS"
}

export class CustomError extends Error {
    type: ErrorType;

    constructor(type: ErrorType, message?: string) {
        super(message);

        this.type = type;

        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
