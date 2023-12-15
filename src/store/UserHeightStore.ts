import { create } from "zustand";

type StoreProps = {
  userHeight: string;
  setUserHeight: (newUserHeight: string) => void;
};

export const useUserHeightStore = create<StoreProps>((set) => ({
  userHeight: "",
  setUserHeight: (newUserHeight) => set(() => ({ userHeight: newUserHeight })),
}));
