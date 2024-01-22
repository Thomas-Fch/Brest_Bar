import { create } from "zustand";

export const useOpenModal = create<{
    isOpen: boolean;
    toggle: () => void;
}>((set) => ({
    isOpen: false,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))