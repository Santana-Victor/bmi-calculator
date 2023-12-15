import { create } from "zustand";

type StoreProps = {
  userBMI: string;
  aboutBMI: string;
  setResult: (newUserBMI: string, newAboutBMI: string) => void;
};

export const useUserBMIStore = create<StoreProps>((set) => ({
  userBMI: "",
  aboutBMI: "",
  setResult: (newUserBMI, newAboutBMI) =>
    set(() => ({ userBMI: newUserBMI, aboutBMI: newAboutBMI })),
}));
