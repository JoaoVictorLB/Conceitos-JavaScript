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

// Optional Chaining: Se propõe a ser uma simplificação de ternários muito extensos, quando se precisa validar o conteúdo de um campo interno a muitas camadas de um objeto, então utilizamos a cada camada acessada ao invés de 'camada1 ? camada1.camada2 : null' a notação 'camada1?.camada2 ?? null' combinando o conceito de Nullish Coalescing Operator ('??') com a nova notação ('?.')
const usuario = {
  nome: "Joao Victor",
  idade: "25",
  endereco: {
    rua: "Rua Alecsander Alves",
    numero: "18",
    cep: {
      codigo: "36036533",
      cidade: "Juiz de Fora",
    },
    retornaStatusAtivoDoEndereco() {
      return "Ativo!"
    },
  },
}
// Exemplo #1: Acessando o campo 'codigo' através de um ternário padrão e tratando as camadas para o cenário em que não existam
document.body.innerText = usuario
  ? usuario.endereco
    ? usuario.endereco.cep
      ? usuario.endereco.cep.codigo
      : "Informação não encontrada!"
    : "Informação não encontrada!"
  : "Informação não encontrada!"
// Exemplo #2: Acessando o campo 'codigo' através de um Optional Chaining e tratando as camadas para o cenário em que não existam
document.body.innerText =
  usuario.endereco?.cep?.codigo ?? "Informação não encontrada!"
// Exemplo #3: Utilizando o conceito para chamadas de função
document.body.innerText = usuario.endereco?.retornaStatusAtivoDoEndereco?.()

// Métodos e Manipulações envolvendo Arrays
const arrayList = [1, 2, 3, 4, 5]
// Podemos percorrer um array de diversas maneiras, for, forEach, map e etc... Porém no caso do forEach não é possível realizar um return dentro do escopo do mesmo. Já no map é possível aplicar tal conceito.

// MAP: Permite a manipulação de todos os itens do array original de acordo com condições indicadas pelo programador
// Exemplo #1: Retornando valores a partir de um map
const novoArray = arrayList.map(item => {
  if(item % 2 === 0){
    return item * 10
  }
  else{
    return item
  }
})
document.body.innerText = novoArray
// Observação: O map sempre irá retornar um novo array com o mesmo tamanho do array original que está sendo manipulado, esta ferramenta sempre trata um array e retorna outro array (de mesmo length!)

// FILTER: Filtra, corta, pega um pedaço do array original
// Exemplo #1: Fltrando o array original para retornar apenas os elementos ímpares do mesmo
const arrayFiltrado = arrayList.filter(item => item % 2 !== 0)
document.body.innerText = arrayFiltrado
// Exemplo #2: Encadeando métodos de arrays
const arrayFiltradoEMapeado = arrayList
  .filter(item => item % 2 !== 0)
  .map(item => item * 10)
document.body.innerText = arrayFiltradoEMapeado

// EVERY: Manipulação de array que percorre todos os seus elementos, validando se determinada condição é atendida por cada um dos itens do vetor, caso seja, este método retorna o booleano 'true' caso contrário 'false'
// Exemplo #1: Validando se todos os elementos de um array são do tipo 'number'
const todosOsItensSaoNumeros = arrayList.every(item => typeof(item) === "number");
document.body.innerText = todosOsItensSaoNumeros;
// Observação: Logicamente, o conteúdo interno da função '.every' deve ser sempre em formato de condicional, retornando verdeiro ou falso.

// SOME: Valida a existência de pelo menos algum item dentro de um array que atenda a uma condição específica explicitada. Retornando também um booleano para indicar o resultado da validação.
// Exemplo #1: Busca por algum item que não seja um número
const arrayAuxiliar = [1, 2, 3, "quatro", "cinco", false]
const peloMenosUmItemNaoEUmNumero = arrayAuxiliar.some(item => typeof(item) !== "number")
document.body.innerText = peloMenosUmItemNaoEUmNumero;

// FIND: Retorna o primeiro item encontrado em um array que atenda a uma condição explicitada
// Exemplo #1: Busca por um número par
const numeroPar = arrayList.find(item => item % 2 === 0)
document.body.innerText = numeroPar;

// FINDINDEX: Retorna o índice (posição no array) do primeiro elemento do vetor que atende a determinada condição explicitada
// Exemplo #1: Busca o índice do primeiro elemento par
const indiceDoNumeroPar = arrayList.findIndex(item => item % 2 === 0)
document.body.innerText = indiceDoNumeroPar

// REDUCE: Utilizado geralmente quando queremos manipular um array e a partir deste criar uma nova estrutura de dados, baseada no conteúdo deste vetor. Seus parâmetros de entrada são basicamente: Uma arrow function e o valor inicial que aquela nova estrutura a ser criada deve armazenar.
// Exemplo #1: Somar todos os valores de um vetor e retornar este resultado. Para tal precisamos de uma função que explicite esta soma, e passaremos o valor inicial da estrutura como 0, para que o resultado seja unicamente a soma dos elementos do array
const soma = arrayList.reduce((acc, item) => {
  // acc é o acumulator a variável a ser acumulada a cada iteração do método sobre o array
  document.body.innerText += acc + ", " + item + ' --- '
  // O método reduce espera que a cada iteração seja retornado o novo valor do acumulator (acc) ou seja o conteúdo do return deste método irá ser armazenado no acc na próxima iteração
  return acc + item;
}, 0)
document.body.innerText = soma