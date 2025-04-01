import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            const waterItem = new OrderItem("123", "water", 1.20, "p1", 2);
            const order = new Order("", "123", [waterItem]);
        }).toThrow("Id is required");
    });

    it("should throw error when customerId is empty", () => {
        expect(() => {
            const waterItem = new OrderItem("123", "water", 1.20, "p1", 2);
            const order = new Order("123", "", [waterItem]);
        }).toThrow("CustomerId is required");
    });

    it("should throw error when Items is empty", () => {
        expect(() => {
            const order = new Order("123", "123", []);
        }).toThrow("Items are required");
    });

    it("should calculate total", () => {
        // Arrange
        const waterItem = new OrderItem("123", "water", 1.20, "p1", 2);
        const bookItem = new OrderItem("123", "water", 5.20, "p2", 3);

        // Act
        const order = new Order("123", "123", [waterItem, bookItem]);

        // Assert
        expect(order.total()).toBe(18)
    });
});
