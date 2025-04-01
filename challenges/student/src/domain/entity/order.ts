import OrderItem from './order_item';

export default class Order {
    private _id: string;
    private _customerId: string; // Guarda-se a referencia do customer e nao a entidade toda
    private _items: OrderItem[] = [];

    constructor(id: string, customerId: string, items: OrderItem[]) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;

        this.validate();
    }

    get id(): string {
        return this._id;
    }

    total(): number {
        return this._items.reduce((acc, item) => acc + item.total(), 0);
    }

    validate() {
        this.validateId();
        this.validateCustomerId();
        this.validateItems();
    }

    validateId() {
        if (this._id.trim() === "") {
            throw new Error("Id is required");
        }
    }

    validateCustomerId() {
        if (this._customerId.trim() === "") {
            throw new Error("CustomerId is required");
        }
    }

    validateItems() {
        if (this._items.length === 0) {
            throw new Error("Items are required");
        }
    }
} 