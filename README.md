Exercicios do bloco 8.4 Trybe

Descrição
concat()
concat cria um novo array unindo todos os elementos que foram passados como parâmetro, na ordem dada, para cada argumento e seus elementos (se o elemento passado for um array).

concat não altera a si mesmo ou a qualquer um dos argumentos passados, apenas providencia um novo array contendo uma cópia de si mesmo e dos argumentos passados. Os elementos copiados são:

Referência aos objetos (e não o objeto): concat copia a referência aos objetos para o novo array. Tanto o original quanto a cópia apontam para o mesmo objeto. Ou seja, se o objeto foi modificado, tais mudanças serão visíveis no objeto original e no array.
Strings e numbers (diferente dos objetos String e Number): concat copia os valores de strings e numbers para o novo array. Qualquer alteração no novo array não refletirá no original, e vice versa.