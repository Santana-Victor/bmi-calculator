import { create } from "zustand";

type StoreProps = {
  userWeight: string;
  setUserWeight: (newUserWeight: string) => void;
};

export const useUserWeightStore = create<StoreProps>((set) => ({
  userWeight: "",
  setUserWeight: (newUserWeight) => set(() => ({ userWeight: newUserWeight })),
}));
