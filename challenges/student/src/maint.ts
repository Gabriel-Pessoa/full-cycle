import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";
import Product from "./domain/entity/product";

const address = new Address("Rua Rio Pajeu", 34, "51230-360", "Recife", "Brazil");
const customer = new Customer("123", "Gabriel Pessoa");
customer.setAddress(address);
customer.activate();

const item1 = new Product("1", "Item 1", 10);
const item2 = new Product("2", "Item 2", 15);
