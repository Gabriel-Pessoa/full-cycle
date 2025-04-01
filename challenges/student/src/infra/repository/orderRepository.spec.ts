import { Sequelize } from 'sequelize-typescript';
import Address from '../../domain/entity/address';
import Customer from '../../domain/entity/customer';
import Order from '../../domain/entity/order';
import OrderItem from '../../domain/entity/order_item';
import Product from '../../domain/entity/product';
import CustomerModel from '../db/sequelize/model/customer.model';
import OrderModel from '../db/sequelize/model/order.model';
import OrdemItemModel from '../db/sequelize/model/orderItem.model';
import ProductModel from '../db/sequelize/model/product.model';
import CustomerRepository from './customerRepository';
import ProductRepository from './productRepository';

describe('Order repository unit tests', () => {
    let sequelize: Sequelize;

    beforeAll(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            logging: false,
            sync: { force: true },
            models: [OrderModel, CustomerModel, OrdemItemModel, ProductModel],
        });
        await sequelize.sync();
    });

    afterEach(async () => {
        for (const key in sequelize.models) {
            await sequelize.models[key].destroy({ where: {}, force: true });
        }
    });

    afterAll(async () => {
        await sequelize.close();
    });

    it('Should create a order', async () => {
        const customerRepository = new CustomerRepository();
        const customer = new Customer('123', 'Customer 1');
        const address = new Address("Rua Rio Pajeu", 34, "51230-360", "Recife", "Brazil");
        customer.changeAddress(address);
        await customerRepository.create(customer);

        const productRepository = new ProductRepository();
        const product = new Product("123", "Product 1", 10);
        await productRepository.create(product);
        
        const orderItem = new OrderItem(
            "1",
            product.name,
            product.price,
            product.id,
            2
        );

        const orderRepository = new OrderRepository();
        const order = new Order("123", customer.id, [orderItem]);
        await orderRepository.create(order);

        const orderModel = await OrderModel.findOne({
            where: { id: order.id },
            include: ['items'],
        });

        expect(orderModel.toJSON()).toStrictEqual({
            id: "123",
            customer_id: "123",
            total: order.total(),
            items: [
                {
                    id: orderItem.id,
                    name: orderItem.name,
                    price: orderItem.price,
                    quantity: orderItem.quantity, 
                    order_id: "123",
                },
            ],
        });
    });
});
