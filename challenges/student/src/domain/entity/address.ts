export default class Address {
    readonly street: string;
    readonly number: number = 0;
    readonly city: string;
    readonly zipcode: string;
    readonly country: string;

    constructor(
        street: string,
        number: number,
        zipcode: string,
        city: string,
        country: string
    ) {
        this.street = street;
        this.number = number;
        this.city = city;
        this.zipcode = zipcode;
        this.country = country;

        this.validate();
    }

    validate() {
        if (this.street.trim() === "") {
            throw new Error("Street is required");
        }
        if (this.number === 0) {
            throw new Error("Number is invalid");
        }
        if (this.zipcode.trim() === "") {
            throw new Error("Zip is required");
        }
        if (this.city.trim() === "") {
            throw new Error("City is required");
        }
        if (this.country.trim() === "") {
            throw new Error("Country is required");
        }
    }
}
