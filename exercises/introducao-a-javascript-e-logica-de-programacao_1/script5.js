let degreeAngle1 = 100;
let degreeAngle2 = 60;
let degreeAngle3 = 20;

if (degreeAngle1 < 0 || degreeAngle2 < 0 || degreeAngle3 < 0) {
  console.log ("ERRO!!! Ângulo inválido. Insira um novo valor válido.")
} else if ((degreeAngle1 + degreeAngle2 + degreeAngle3) === 180) {
  console.log ("True")
} else {
  console.log ("False")
}