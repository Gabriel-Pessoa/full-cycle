import Product from "./product";

describe("Product unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            const product = new Product("", "water", 1);
        }).toThrow("Id is required");
    });

    it("should throw error when name is empty", () => {
        expect(() => {
            const product = new Product("1", "", 1);
        }).toThrow("Name is required");
    });

    it("should throw error when price is equal 0", () => {
        expect(() => {
            const product = new Product("1", "water", 0);
        }).toThrow("Price must be greater than 0");
    });

    it("should throw error when price is less than 0", () => {
        expect(() => {
            const product = new Product("1", "water", -1);
        }).toThrow("Price must be greater than 0");
    });

    it("should throw error when changeName is empty", () => {
        expect(() => {
            const product = new Product("1", "water", 1);
            product.changeName("");
        }).toThrow("Name is required");
    });

    it("should changeName successfully", () => {
        // Arrange
        const product = new Product("1", "water", 1);

        // Act
        product.changeName("book");

        // Assert
        expect(product.name).toBe("book");
    });

    it("should throw error when changePrice is equal 0", () => {
        expect(() => {
            const product = new Product("1", "water", 1);
            product.changePrice(0);
        }).toThrow("Price must be greater than 0");
    });

    it("should throw error when changePrice is less than 0", () => {
        expect(() => {
            const product = new Product("1", "water", 1);
            product.changePrice(-1);
        }).toThrow("Price must be greater than 0");
    });

    it("should changePrice successfully", () => {
        // Arrange
        const product = new Product("1", "water", 1);

        // Act
        product.changePrice(1.75);

        // Assert
        expect(product.price).toBe(1.75);
    });
});