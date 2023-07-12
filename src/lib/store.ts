import { create } from "zustand";

interface IFileMapStore {
  data: any;
  setData: (data: any) => void;
}

export const useFileMapStore = create<IFileMapStore>((set) => ({
  data: 0,
  setData: (data: any) => set({ data }),
}));
