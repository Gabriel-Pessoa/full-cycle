import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            const customer = new Customer("", "John");
        }).toThrow("Id is required");
    });

    it("should throw error when name is empty", () => {
        expect(() => {
            const customer = new Customer("123", "");
        }).toThrow("Name is required");
    });

    it("should throw error when change name", () => {
        expect(() => {
            const customer = new Customer("123", "John");
            customer.changeName("");
        }).toThrow("Name is required");
    });

    it("should change name successfully", () => {
        // Arrange
        const customer = new Customer("123", "John");

        // Act
        customer.changeName("Jane");

        // Assert
        expect(customer.name).toBe("Jane")
    });

    it("should throw error when activate customer", () => {
        expect(() => {
            const customer = new Customer("123", "John");
            customer.activate();
        }).toThrow("Address is mandatory to activate a customer");
    });

    it("should activate customer successfully", () => {
        // Arrange
        const customer = new Customer("123", "John");
        const address = new Address("Rua Rio Pajeu", 34, "51230-360", "Recife", "Brazil");
        customer.setAddress(address);

        // Act
        customer.activate();

        // Arrange
        expect(customer.isActive()).toBe(true);
    });

    it("should deactivate customer successfully", () => {
        // Arrange
        const customer = new Customer("123", "John");

        // Act
        customer.deactivate();

        // Arrange
        expect(customer.isActive()).toBe(false);
    });

    it("should add reward points", () => {
        const customer = new Customer("123", "John");
        expect(customer.rewardPoints).toBe(0);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(10);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(20);
    });
});
