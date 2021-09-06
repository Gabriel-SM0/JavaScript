//Crie um array de 5 posições com quaisquer valores. Utilize qualquer estrutura de repetição apresentada no vídeo para exibir todos os valores do array;
numeros = [0,1,2,3,4]
contador=0
for (contador=0; contador<=numeros.length; contador++) {
  console.log(numeros[contador])
}


//Crie um algoritmo capaz de calcular a média aritmética de um array com qualquer quantidade de elementos numéricos. Para fins de exemplo, o resultado do algoritmo com um array de valores 1, 2, 3, 5, 8, 13, 21, 23, 34, 55 deve ser 16.5. Procure usar uma estrutura de repetição diferente da que você usou para fazer o exercício anterior;
paraMedia=[1,2,3,5,8,13,21,23,34,55]

contador2=0
somatorio=0

while(contador2< paraMedia.length){
somatorio=somatorio+paraMedia[contador2]
//console.log(paraMedia[contador2])


contador2++
}
console.log(somatorio/paraMedia.length)

//Considerando a lista dos 60 nomes mais comuns no Brasil nos últimos 10 anos, crie um algoritmo para verificar se seu nome está lá. Se sim, exiba a mensagem: É, nome comum :P. Se não, exiba a mensagem: Diferentão, hein? XD.


nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
"Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
"Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
"Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
"Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
"Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]

nomeEspecial=false

for (c=1; c<nomesComuns.length; c++){

  if ("Gabriel"==nomesComuns[c])
    {
      console.log("É, nome comum :P")
      nomeEspecial=true
      break
    }
    


}
if (nomeEspecial==false){
   console.log("Diferentão, hein? XD")
}