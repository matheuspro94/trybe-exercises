# Nome da abstração
# Círculo

# atributos/estados
# - PI
# - raio

# comportamentos
# - calcular area (PI * raio * raio)
# - calcular perímetro (2 * PI * raio)

class Circle:
    PI = 3.14159

    def __init__(self, raio):
        self.raio = raio

    def calculate_square(self):
        return self.PI * self.raio * self.raio

    def calculate_perimeter(self):
        return 2 * self.PI * self.raio


circle_1 = Circle(5)
print(circle_1.calculate_square())
print(circle_1.calculate_perimeter())
