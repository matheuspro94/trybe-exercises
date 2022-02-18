alunosDeRecuperacao = []
with open("file.txt") as arquivo_notas:
    for linha in arquivo_notas:
        nota_aluno = linha
        nota_aluno = nota_aluno.split(" ")
        if int(nota_aluno[1]) < 6:
            alunosDeRecuperacao.append(nota_aluno[0] + "\n")


with open("alunosDeRecuperacao.txt", mode="w") as alunosDeRecuperacaoArq:
    print(alunosDeRecuperacao)
    alunosDeRecuperacaoArq.writelines(alunosDeRecuperacao)
