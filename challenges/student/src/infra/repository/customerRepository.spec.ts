import { Sequelize } from 'sequelize-typescript';
import Address from '../../domain/entity/address';
import Customer from '../../domain/entity/customer';
import CustomerModel from '../db/sequelize/model/customer.model';
import CustomerRepository from './customerRepository';

describe("Customer repository unit test", () => {
    let sequelize: Sequelize;

    beforeAll(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            logging: false,
            sync: { force: true },
            models: [CustomerModel],
        });
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.models['CustomerModel'].destroy({ where: {}, force: true });
    });

    afterAll(async () => {
        await sequelize.close();
    });

    it("Should create a customer", async () => {
        const customerRepository = new CustomerRepository();
        const customer = new Customer('123', 'Customer 1');
        const address = new Address("Rua Rio Pajeu", 34, "51230-360", "Recife", "Brazil");
        customer.Address = address;
        await customerRepository.create(customer);

        const customerModel = await CustomerModel.findOne({ where: { id: "123" } });

        expect(customerModel.toJSON()).toStrictEqual(
            {
                id: "123",
                name: customer.name,
                active: customer.isActive(),
                reward_points: customer.rewardPoints,
                street: address.street,
                number: address.number,
                city: address.city,
                zipcode: address.zipcode,
                country: address.country,
            }
        );
    });

    it("Should update a customer", async () => {
        const customerRepository = new CustomerRepository();
        const customer = new Customer('123', 'Customer 1');
        const address = new Address("Rua Rio Pajeu", 34, "51230-360", "Recife", "Brazil");
        customer.Address = address;
        await customerRepository.create(customer);

        customer.changeName('Customer 2');
        await customerRepository.update(customer);
        const customerModel = await CustomerModel.findOne({ where: { id: "123" } });

        expect(customerModel.toJSON()).toStrictEqual(
            {
                id: "123",
                name: customer.name,
                active: customer.isActive(),
                reward_points: customer.rewardPoints,
                street: address.street,
                number: address.number,
                city: address.city,
                zipcode: address.zipcode,
                country: address.country,
            }
        );
    });

    it("Should find a customer", async () => {
        const customerRepository = new CustomerRepository();
        const customer = new Customer('123', 'Customer 1');
        const address = new Address("Rua Rio Pajeu", 34, "51230-360", "Recife", "Brazil");
        customer.Address = address;
        await customerRepository.create(customer);

        const customerModel = await CustomerModel.findOne({ where: { id: "123" } });

        expect(customerModel.toJSON()).toStrictEqual(
            {
                id: "123",
                name: customer.name,
                active: customer.isActive(),
                reward_points: customer.rewardPoints,
                street: address.street,
                number: address.number,
                city: address.city,
                zipcode: address.zipcode,
                country: address.country,
            }
        );
    });

    it("Should find all customers", async () => {
        const customerRepository = new CustomerRepository();

        const customer1 = new Customer('1', 'Customer 1');
        const addressA = new Address("Rua Rio Pajeu", 34, "51230-360", "Recife", "Brazil");
        customer1.Address = addressA
        customerRepository.create(customer1);

        const customer2 = new Customer('2', 'Customer 2');
        const addressB = new Address("Rua Rio da Prata", 27, "51230-342", "Recife", "Brazil");
        customer2.Address = addressB
        customerRepository.create(customer2);

        const createdCustomers = [customer1, customer2];
        const foundCustomers = await customerRepository.findAll();

        expect(createdCustomers).toEqual(foundCustomers);
    });
});