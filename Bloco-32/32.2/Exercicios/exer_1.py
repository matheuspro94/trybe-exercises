numeros = input("Insira valores aqui, sepados por espaço: ")

numeroArray = numeros.split(" ")

sum = 0
for num in numeroArray:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} não é um dígito.")
    else:
        sum += int(num)
print(f"A soma dos valores válidos é: {sum}")
