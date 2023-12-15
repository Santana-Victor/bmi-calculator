export default function useCheckingBMI() {
  const checkingBMI = (bmi: number) => {
    let aboutBMI = "";
    if (bmi <= 18.59) {
      aboutBMI = "Cuidado, você está abaixo do peso ideal!";
      return aboutBMI;
    } else if (bmi >= 18.6 && bmi <= 24.99) {
      aboutBMI = "Você está no seu peso ideal";
      return aboutBMI;
    } else if (bmi >= 25 && bmi <= 29.99) {
      aboutBMI = "Cuidado você está com sobrepeso!";
      return aboutBMI;
    } else if (bmi >= 30) {
      aboutBMI = "Atenção, você está com obesidade!";
      return aboutBMI;
    } else {
      aboutBMI = "Não foi possível realizar o cálculo";
      return aboutBMI;
    }
  };

  return { checkingBMI };
}
