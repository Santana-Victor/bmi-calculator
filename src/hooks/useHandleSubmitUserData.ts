import { FormEvent } from "react";

import { useUserWeightStore } from "../store/UserWeightStore";
import { useUserHeightStore } from "../store/UserHeightStore";
import { useErrorMessageStore } from "../store/ErrorMessageStore";

import useCalculatingBMI from "./useCalculatingBMI";

export default function useHandleSubmitUserData() {
  const [userWeight, setUserWeight] = useUserWeightStore((state) => [
    state.userWeight,
    state.setUserWeight,
  ]);
  const [userHeight, setUserHeight] = useUserHeightStore((state) => [
    state.userHeight,
    state.setUserHeight,
  ]);
  const setIsError = useErrorMessageStore((state) => state.setIsError);

  const { calculatingBMI } = useCalculatingBMI();

  const handleSubmitUserData = (event: FormEvent) => {
    event.preventDefault();

    if (!userWeight || !userHeight) {
      setIsError(true);
      return;
    }

    calculatingBMI(userWeight, userHeight);

    setUserWeight("");
    setUserHeight("");
    setIsError(false);
  };

  return { handleSubmitUserData };
}
