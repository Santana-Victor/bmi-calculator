import { useUserBMIStore } from "../store/UserBMIStore";

import useCheckingBMI from "./useCheckingBMI";

export default function useCalculatingBMI() {
  const setResult = useUserBMIStore((state) => state.setResult);

  const { checkingBMI } = useCheckingBMI();

  const calculatingBMI = (weight: string, height: string) => {
    const weightInNumber = Number(weight.replace(",", "."));
    const heightInNumber = Number(height.replace(",", "."));
    const bmi = weightInNumber / (heightInNumber * heightInNumber);

    const aboutBMI = checkingBMI(Number(bmi.toFixed(2)));

    setResult(bmi.toFixed(2).replace(".", ","), aboutBMI);
  };

  return { calculatingBMI };
}
