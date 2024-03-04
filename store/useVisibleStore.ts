import { create } from "zustand";

export type State = {
    isModalVisible: boolean;
    isSideVisible: boolean;
    isFilterVisible: boolean;
};

export type Action = {
    setIsModalVisible: (isModalVisible: boolean) => void;
    setIsSideVisible: (isSideVisible: boolean) => void;
    setIsFilterVisible: (isFilterVisible: boolean) => void;
};

export const initialState: State = {
    isModalVisible: false,
    isSideVisible: false,
    isFilterVisible: false,
};

export const useVisibleStore = create<State & Action>()((set) => ({
    ...initialState,

    setIsModalVisible: (isModalVisible: boolean) =>
    set(() => ({ isModalVisible })),

    setIsSideVisible: (isSideVisible) =>
    set(() => ({ isSideVisible })),

    setIsFilterVisible: (isFilterVisible) =>
    set(() => ({ isFilterVisible })),
}));

  