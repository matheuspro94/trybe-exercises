const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phoneNumber = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;

  // console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${street}, N: ${number}, APT: ${apartment}.`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const novoCliente = order.name = 'Luiz Silva';
  const muzzarella = order.order.pizza = 'muzzarella'
  const calabresa = order.order.pizza = 'calabresa'
  const bebida = order.order.drinks.coke.type;
  const total = order.order.payment = '50,00';

console.log(`Olá ${novoCliente}, o total do seu pedido de ${muzzarella}, ${calabresa} e ${bebida} é R$ ${total}.`)
}

orderModifier(order);