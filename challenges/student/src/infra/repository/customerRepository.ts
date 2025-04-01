import Address from "../../domain/entity/address";
import Customer from "../../domain/entity/customer";
import CustomerRepositoryInterface from "../../domain/repository/customerRepository.interface copy";
import CustomerModel from "../db/sequelize/model/customer.model";

export default class CustomerRepository implements CustomerRepositoryInterface {
    async create(entity: Customer): Promise<void> {
        await CustomerModel.create({
            id: entity.id,
            name: entity.name,
            active: entity.isActive(),
            reward_points: entity.rewardPoints,
            street: entity.Address.street,
            number: entity.Address.number,
            city: entity.Address.city,
            zipcode: entity.Address.zipcode,
            country: entity.Address.country,
        });
    }

    async update(entity: Customer): Promise<void> {
        await CustomerModel.update(
            {
                name: entity.name,
                active: entity.isActive(),
                reward_points: entity.rewardPoints,
                street: entity.Address.street,
                number: entity.Address.number,
                city: entity.Address.city,
                zipcode: entity.Address.zipcode,
                country: entity.Address.country,
            },
            {
                where: {
                    id: entity.id,
                },
            }
        );
    }

    async find(id: string): Promise<Customer> {
        const customerModel = await CustomerModel.findOne({ where: { id } });
        const address = new Address(
            customerModel.street,
            customerModel.number,
            customerModel.zipcode,
            customerModel.city,
            customerModel.country
        );

        const customer = new Customer(customerModel.id, customerModel.name);
        customer.changeAddress(address);
        return customer;
    }

    async findAll(): Promise<Customer[]> {
        const customerModels = await CustomerModel.findAll();

        return customerModels.map((customerModel) => {
            const address = new Address(
                customerModel.street,
                customerModel.number,
                customerModel.zipcode,
                customerModel.city,
                customerModel.country
            );
            const customer = new Customer(customerModel.id, customerModel.name);
            customer.changeAddress(address);
            return customer;
        });
    }
}