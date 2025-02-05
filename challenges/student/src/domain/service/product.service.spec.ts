import Product from "../entity/product";
import ProductService from "./product.service";

describe("Product service unit tests", () => {
    it("Should change the price of all products", () => {
        // Arrange
        const p1 = new Product("1", "product 1", 10);
        const p2 = new Product("2", "product 2", 15);
        const products = [p1, p2];

        // Act
        ProductService.increasePrices(products, 10);

        // Assert
        expect(p1.price).toBe(11);
        expect(p2.price).toBe(16.5);
    });
});