# Nome da abstração
# Square

# atributos/estados
# - lado (tamanho)

# comportamentos
# - calcular area (lado * lado)
# - calcular perímetro (4 * lado)

class Square:
    def __init__(self, base, height):
        self.base = base
        self.height = height

    def calculate_area(self):
        return self.base * self.height

    def calculate_perimeter(self):
        return self.base * 4


square_1 = Square(5, 5)
print(square_1.calculate_area())
print(square_1.calculate_perimeter())
