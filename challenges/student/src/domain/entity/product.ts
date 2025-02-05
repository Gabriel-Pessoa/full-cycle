export default class Product {
    private _id: string;
    private _name: string;
    private _price: number;

    constructor(id: string, name: string, price: number) {
        this._id = id;
        this._name = name;
        this._price = price;

        this.validate();
    }

    changeName(name: string) {
        this._name = name;
        this.validateName();
    }

    changePrice(price: number) {
        this._price = price;
        this.validatePrice();
    }

    get id(): string {
        return this._id;
    }

    get price(): number {
        return this._price;
    }

    get name(): string {
        return this._name;
    }

    validate() {
        this.validateId();
        this.validateName();
        this.validatePrice();
    }

    validateId() {
        if (this._id.trim() === "") {
            throw new Error("Id is required");
        }
    }

    validateName() {
        if (this._name.trim() === "") {
            throw new Error("Name is required");
        }
    }

    validatePrice() {
        if (this._price <= 0) {
            throw new Error("Price must be greater than 0");
        }
    }
}