// Nullish Coalescing Operator: Basicamente o operador que lida com apenas valores verdadeiramente não válidos (null, undefined) nas condicionais, ignorando por exemplo o problema de interpretação ao passar o '0' em uma condição.
const idade = 0
// Exemplo #1: Sem nenhuma condicional
document.body.innerText = "Sua idade é: " + idade
// Exemplo #2: Com condicional || tradicional
document.body.innerText = "Sua idade é: " + (idade || "Não informado")
// Exemplo #3: Utilizando o NCO - Note que ele passa a burlar o '0' como falsy no parâmetro do if
document.body.innerText = "Sua idade é: " + (idade ?? "Não informado")

// Objetos - Manipulações e funções úteis de objetos
const user = {
  name: "João Victor",
  lastName: "Borges",
  age: "25",
  address: {
    street: "Rua Alecsander Alves",
    number: "18",
  },
}
// Exemplo #1: Validar se uma variável existe dentro de um objeto (o campo em si, e não seu conteúdo!)
document.body.innerText = "name" in user
// Exemplo #2: Obter todas as chaves (nomes das variáveis) contidas em um objeto
document.body.innerText = Object.keys(user)
// Exemplo #3: Obter todos os valores (conteúdos armazenados em variáveis) contidos em todas as chaves de um objeto
document.body.innerText = Object.values(user)
// Exemplo #3.1: Para melhorar a visualização de estruturas de dados mais complexas na tela como o caso de objetos contidos dentro de outros objetos (exemplo: user > address) podemos utilizar a conversão para string do conteúdo
document.body.innerText = JSON.stringify(Object.values(user))
// Exemplo #4: Para receber o nome da chave (variável) e também seu conteúdo podemos utilizar o conceito de entradas, que retorna um Vetor de Vetores onde cada linha da matriz contém na primeira coluna o nome da variável e a segunda seu conteúdo
document.body.innerText = JSON.stringify(Object.entries(user))

// Desestruturação: Remover parte de um objeto e transportar para uma variável a parte
// Exemplo #1: Modo tradicional de realizar este conceito
const endereco = user.address
document.body.innerText = JSON.stringify(endereco)
// Exemplo #2: Utilizando desestruturação
const { address } = user
document.body.innerText = JSON.stringify(address)
// Exemplo #3: É possível utilizar a desestruturação para armazenar em mais de uma variável os diversos fragmentos do objeto, o segredo está em usar sempre o mesmo identificador nas chaves a serem armazenadas em relação ao objeto a ser manipulado
const { name, age } = user
document.body.innerText = JSON.stringify({ name, age })
// Exemplo #4: A partir do recurso da desestruturação é também possível renomear uma variável
const { name: nombre, age: edad } = user
document.body.innerText = JSON.stringify({ nombre, edad })
// Exemplo #5: É possível ainda definir um valor padrão (default) para uma variável (caso ela não esteja declarada dentro de um objeto).
const { name: nome, secondName = "Lopes" } = user
document.body.innerText = JSON.stringify({ nome, secondName })
// Exemplo #5.1: Porém a partir do momento em que a mesma exista na estrutura, passamos a ignorar a declaração default abaixo.
const { name: nomeAuxiliar, lastName = "Lopes Borges" } = user
document.body.innerText = JSON.stringify({ nomeAuxiliar, lastName })
// Exemplo #6: A desestruturação pode ser utilizada em QUALQUER lugar que manipule estruturas do tipo Objetos, como por exemplo, parâmetros de funções
function mostraIdade({ age: idade2 }) {
  return idade2
}
document.body.innerText = mostraIdade(user)
// Exemplo #6.1: Válido para objetos dentro de objetos!
const { number } = user.address
document.body.innerText = number

// Rest Operator: A maneira como acessamos o "resto" do objeto desestruturado.
// Exemplo #1: Então o Rest visa armazenar o resto de tudo aquilo que não foi desestruturado dentro de uma variável. Tudo aquilo que NÃO estiver desestruturado ficará armazenado na variável de rest (indicada após as reticências), logo se eu adicionar os campos W e X a uma desestruturação, no rest teremos Y e Z
const { name: nome1, ...rest } = user
document.body.innerText = JSON.stringify(rest)
// Exemplo #2: Desestruturação e Rest Operator funcionam também para arrays, o detalhe aqui é que logicamente utilizamos os colchetes para denotar estas manipulações
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [primeiro, segundo, ...resto] = array
document.body.innerText = JSON.stringify({ primeiro, segundo, resto })
// Exemplo #3: No caso de uma manipulação de array podemos ainda "pular" uma posição do vetor deixando a mesma em branco na desestruturação
const [first, , third, ...demaisElementos] = array
document.body.innerText = JSON.stringify({ first, third, demaisElementos })

// Short Syntax: Uma maneira de reduzir ou abreviar a declaração de conteúdos internos a um objeto
// Exemplo #1: Declaração tradicional
const placa = "HIS-0440"
const ano = "2014"
const carro = {
  placa: placa,
  ano: ano,
}
document.body.innerText = JSON.stringify(carro)
// Exemplo #2: Declaração por Short Syntax
const genero = "M"
const peso = 62.5
const pessoa = {
  genero,
  peso,
}
document.body.innerText = JSON.stringify(pessoa)
