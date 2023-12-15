import { create } from "zustand";

type StoreProps = {
  isError: boolean;
  setIsError: (newIsError: boolean) => void;
};

export const useErrorMessageStore = create<StoreProps>((set) => ({
  isError: false,
  setIsError: (newIsError) => set(() => ({ isError: newIsError })),
}));
