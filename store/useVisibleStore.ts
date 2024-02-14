import { create } from "zustand";

export type State = {
    isModalVisible: boolean;
    isSideVisible: boolean;
};

export type Action = {
    setIsModalVisible: (isModalVisible: boolean) => void;
    setIsSideVisible: (isSideVisible: boolean) => void;
};

export const initialState: State = {
    isModalVisible: false,
    isSideVisible: false,
};

export const useVisibleStore = create<State & Action>()((set) => ({
    ...initialState,

    setIsModalVisible: (isModalVisible: boolean) =>
    set(() => ({ isModalVisible })),

    setIsSideVisible: (isSideVisible) =>
    set(() => ({ isSideVisible })),
}));

  