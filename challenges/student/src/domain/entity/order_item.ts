export default class OrderItem {
    private _id: string;
    private _productId: string;
    private _name: string;
    private _quantity: number;
    private _price: number;

    constructor(id: string, name: string, price: number, productId: string, quantity: number) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._productId = productId;
        this._quantity = quantity;

        this.validate();
    }

    get price(): number {
        return this._price;
    }

    total (): number {
        return this._quantity * this._price;
    }

    validate() {
        this.validateId();
        this.validateName();
        this.validatePrice();
        this.validateProductId();
        this.validateQuantity();
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

    validateProductId() {
        if (this._productId.trim() === "") {
            throw new Error("ProductId is required");
        }
    }

    validateQuantity() {
        if (this._quantity <= 0) {
            throw new Error("Quantity must be greater than 0");
        }
    }
}