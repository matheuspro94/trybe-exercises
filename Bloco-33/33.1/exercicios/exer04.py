# Nome da abstração
# Pedido

# atributos/estados
# - cliente
# - itens consumidos
# - forma de pagamento
# - descontos

# comportamentos
# - calcular total
# - calcular total com descontos

# -----

# Nome da abstração
# Item

# atributos/estados
# - nome
# - preço

# comportamentos
# - alterar preço
class Item:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    # def change_price(self):
    #     self.price = new_price


class Pedido:
    def __init__(self, client, consumed_items, form_of_payment, discount):
        self.client = client
        self.consumed_items = consumed_items
        self.form_of_payment = form_of_payment
        self.discount = discount

    def calculate_total(self):
        total = 0
        for item in self.consumed_items:
            total = total + item.price

        return total

    def calculate_total_with_discount(self):
        return self.calculate_total() * (1 - self.discount)


sanduba = Item('X-tudo', 16.9)
guarana = Item('Guarana', 5.9)
fritas = Item('Fritas crocantes', 10.9)

pedido_mesa_1 = Pedido('Cristiano', [sanduba, guarana, fritas], 'Cartao', 0.1)

print(pedido_mesa_1.calculate_total_with_discount())
