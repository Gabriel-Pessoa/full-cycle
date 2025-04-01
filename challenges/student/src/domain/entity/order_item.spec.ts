import OrderItem from "./order_item";

describe("Order Item unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            const waterItem = new OrderItem("", "water", 1.20, "p1", 2);
        }).toThrow("Id is required");
    });

    it("should throw error when name is empty", () => {
        expect(() => {
            const waterItem = new OrderItem("123", "", 1.20, "p1", 2);
        }).toThrow("Name is required");
    });

    it("should throw error when price is equal zero", () => {
        expect(() => {
            const waterItem = new OrderItem("123", "water", 0, "p1", 1);
        }).toThrow("Price must be greater than 0");
    });

    it("should throw error when price is less than zero", () => {
        expect(() => {
            const waterItem = new OrderItem("123", "water", -1, "p1", 1);
        }).toThrow("Price must be greater than 0");
    });

    it("should throw error when Product Id is required is empty", () => {
        expect(() => {
            const waterItem = new OrderItem("123", "water", 1.20, "", 2);
        }).toThrow("ProductId is required");
    });

    it("should throw error when Quantity is equal zero", () => {
        expect(() => {
            const waterItem = new OrderItem("123", "water", 1.20, "p1", 0);
        }).toThrow("Quantity must be greater than 0");
    });

    it("should throw error when Quantity is less than zero", () => {
        expect(() => {
            const waterItem = new OrderItem("123", "water", 1.20, "p1", -1);
        }).toThrow("Quantity must be greater than 0");
    });
});
