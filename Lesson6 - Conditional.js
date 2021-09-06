peso = 80
altura=1.73
IMC=peso/(altura*altura)
//IMC=32.99

if (IMC<=18.5)
{
    IMC=parseFloat(IMC.toFixed(2))
console.log("Seu IMC é "+ IMC%2 + ", que é considerado magreza.")
}
else if (IMC>18.5 && IMC<=24.99){
    IMC=parseFloat(IMC.toFixed(2))
  console.log("Seu IMC é "+ IMC + ", que é considerado normal.")
}
else if (IMC=>25 && IMC<=29.99){
      IMC=parseFloat(IMC.toFixed(2))
console.log("Seu IMC é "+ IMC + ", que é considerado sobrepeso.")
}
else if (IMC>=18.5 && IMC<=34.99){
      IMC=parseFloat(IMC.toFixed(2))
console.log("Seu IMC é "+ IMC + ", que é considerado obesidade.")
}
else
{
      IMC=parseFloat(IMC.toFixed(2))
  console.log("Seu IMC é "+ IMC + ", que é considerado obesidade grave.")
}




///Exemplo de switch para futuras consultas///
/*switch (IMC){
  case <=18.5:
  console.log("a")
  Break
  case "Normal":
  console.log("a")
  Break
    case "a":
  console.log("a")
  Break
    case "a":
  console.log("a")
  Break
    case "a":
  console.log("a")
  Break
    case "a":
  console.log("a")
  Break
  }
*/