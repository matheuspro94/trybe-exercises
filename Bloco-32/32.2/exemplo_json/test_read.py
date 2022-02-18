import json

# with open("pokemons.json") as file:
#     content = file.read()
#     pokemons = json.loads(content)["results"]
# print(pokemons[0])

with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]
print(pokemons[0])
