import { Sequelize } from 'sequelize-typescript';
import Product from '../../domain/entity/product';
import ProductModel from '../db/sequelize/model/product.model';
import ProductRepository from './productRepository';

describe("Product repository unit tests", () => {
    let sequelize: Sequelize;

    beforeAll(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            logging: false,
            sync: { force: true },
            models: [ProductModel],
        });
        await sequelize.sync();
    });

    afterEach(async () => {      
        await sequelize.models['ProductModel'].destroy({ where: {}, force: true });
    });

    afterAll(async () => {
        await sequelize.close();
    });

    it("Should create a product", async () => {
        const productRepository = new ProductRepository();
        const product = new Product("1", "Product 1", 100);
        await productRepository.create(product);

        const productModel = await ProductModel.findOne({ where: { id: "1" } });

        expect(productModel.toJSON()).toStrictEqual(
            {
                id: "1",
                name: "Product 1",
                price: 100,
            }
        );
    });

    it("Should update a product", async () => {
        const productRepository = new ProductRepository();
        const product = new Product("1", "Product 1", 100);
        await productRepository.create(product);

        const productModel1 = await ProductModel.findOne({ where: { id: "1" } });

        expect(productModel1.toJSON()).toStrictEqual(
            {
                id: "1",
                name: "Product 1",
                price: 100,
            }
        );

        product.changeName("Product 2");
        product.changePrice(200);
        await productRepository.update(product);

        const productModel2 = await ProductModel.findOne({ where: { id: "1" } });

        expect(productModel2.toJSON()).toStrictEqual(
            {
                id: "1",
                name: "Product 2",
                price: 200,
            }
        );
    });

    it("Should find a product", async () => {
        const productRepository = new ProductRepository();
        const product = new Product("1", "Product 1", 100);
        await productRepository.create(product);

        const productModel = await ProductModel.findOne({ where: { id: "1" } });

        expect(productModel.toJSON()).toStrictEqual(
            {
                id: "1",
                name: "Product 1",
                price: 100,
            }
        );
    });

    it("Should find all products", async () => {
        const productRepository = new ProductRepository();

        const product1 = new Product("1", "Product1", 100);
        await productRepository.create(product1);


        const product2 = new Product("2", "Product2", 200);
        await productRepository.create(product2);

        const createdProducts = [product1, product2];
        const foundProducts = await productRepository.findAll();

        expect(createdProducts).toEqual(foundProducts);
    });
});
