import Address from "./address";

export default class Customer {
    private _id: string;
    private _name: string;
    private _active: boolean = false;
    private _rewardPoints: number = 0;
    private _address: Address;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    get name(): string {
        return this._name;
    }

    get rewardPoints(): number {
        return this._rewardPoints;
    }

    get id(): string {
        return this._id;
    }

    get Address(): Address {
        return this._address;
    }

    validate() {
        this.validateId();
        this.validateName();
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

    // Business rules
    changeName(name: string) {
        this._name = name;
        this.validateName();
    }

    changeAddress(address: Address) {
        this._address = address;
    }

    activate() {
        if (this._address === undefined) {
            throw new Error("Address is mandatory to activate a customer");
        }

        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

    isActive(): boolean {
        return this._active;
    }

    addRewardPoints(points: number) {
        this._rewardPoints += points;
    }

    set Address(address: Address) {
        this._address = address;
    }
}
