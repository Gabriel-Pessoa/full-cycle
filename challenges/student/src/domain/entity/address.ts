export default class Address {
    _street: string;
    _number: number = 0;
    _zip: string;
    _city: string;
    _country: string;

    constructor(
        street: string,
        number: number,
        zip: string,
        city: string,
        country: string
    ) {
        this._street = street;
        this._number = number;
        this._zip = zip;
        this._city = city;
        this._country = country;

        this.validate();
    }

    validate() {
        if (this._street.trim() === "") {
            throw new Error("Street is required");
        }
        if (this._number === 0) {
            throw new Error("Number is invalid");
        }
        if (this._zip.trim() === "") {
            throw new Error("Zip is required");
        }
        if (this._city.trim() === "") {
            throw new Error("City is required");
        }
        if (this._country.trim() === "") {
            throw new Error("Country is required");
        }
    }
}
