//Crie uma função chamada imprimir que recebe um argumento e simplesmente imprime ele na tela;

function imprimir (a) {
  console.log(a)
}

imprimir (2)

/*Lembra dos exercícios que propusemos na Aula 05 - Variáveis? Com base neles, faça o seguinte:
Crie uma função para cada algoritmo proposto lá, exceto o número 6;
Todas as funções devem retornar o valor final;
Procure dar nomes que façam sentido às funções. Ex.: a função para o item 4 poderia se chamar mediaAritmetica ou calcularMediaAritmetica;
Procure utilizar comentários para documentar cada método;
Na função da média aritmética, evite colocar todos os itens como argumentos do método, pois isso limitaria sua utilização a um número fixo de elementos. Tente implementar uma lógica para receber um array e calcular a média em cima dele, tornando a função mais reaproveitável em diferentes situações.
*/

//1) Crie uma variável mesmoNome que verifica se nomeDoFulano é igual a nomeDoBeltrano;



////////////Funções abaixo///////////////
function comparaNome (nome1, nome2){
  comparativo=false
if (nome1==nome2){
  comparativo=true
      }
      return comparativo
}



//////////Variáveis e testes///////
nome = "Gabriel"
nome2 = "Outro"
if (comparaNome (nome, nome2)==true) {
  imprimir ("É o mesmo nome.")
  }
  else {
    imprimir ("Não é o mesmo nome.")
  }

//2) Crie uma variável maiorDeIdade que verifica se idade é de um adulto;
idadeDeAdulto = 18
function verificaSeEhAdulto(idade) {
  resultado=false
  if (idade>=idadeDeAdulto) {
    resultado=true
  }
  return  resultado
}

idadeGabriel=26

if (verificaSeEhAdulto(idadeGabriel)==true) {
  imprimir ("É adulto")
}
else {
  imprimir ("Não é adulto")
}

//3) Crie uma variável valorComJuros que calcula o valor de um boleto acrescido de 10% de juros por atraso;

function calculaJuros (valor){
  resultado=valor*1.1
  return resultado
}

boleto=1000
imprimir(calculaJuros(boleto))
imprimir(calculaJuros(984.5))

//4) Faça a representação da fórmula de média aritmética, considerando um conjunto de elementos com 5 elementos nomeados como item1, item2, item3, item4 e item5;

function calculaMedia(vetor) {
  soma=0
      for (contador=0; contador < vetor.length; contador++) {
      soma=soma+vetor[contador]
            
      }
    media=soma/vetor.length
    return media
    }


nota = [10 , 100 , 200]
calculaMedia(nota)
imprimir (calculaMedia(nota))

imprimir (calculaMedia([1, 2, 3, 4, 5]))


//5) O lucro bruto de uma empresa é representado pela receita líquida de vendas menos o custo dos produtos vendidos. A margem bruta de uma empresa é calculada pela divisão do lucro bruto pela receita líquida de vendas. Faça a representação da fórmula da margem bruta, multiplicando o resultado final por 100 para obter o valor percentual;

function margemBruta (receitaLiquida, custoDeProdutosVendidos) {
        resultado = ((receitaLiquida-custoDeProdutosVendidos)/receitaLiquida)*100

        return resultado

}

imprimir (margemBruta(1000000, 500000) + "%")

imprimir (margemBruta(528459.11, 632501.87) + "%")
