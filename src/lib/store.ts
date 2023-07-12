import { create } from "zustand";
import { type FileMapData } from "./types";
interface FileMapStoreType {
  fileMapData: FileMapData | null;
  setFileMapData: (data: FileMapData) => void;
}

export const useFileMapStore = create<FileMapStoreType>((set) => ({
  fileMapData: null,
  setFileMapData: (data: FileMapData) => set({ fileMapData: data }),
}));
