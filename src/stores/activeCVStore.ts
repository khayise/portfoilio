import { create } from 'zustand';
import { CVsList } from '../assets/CVsList';

type Store = {
	activeIndex: number;
	setActiveIndex: (index: number) => void;
};

export const useActiveCVStore = create<Store>()((set) => ({
	activeIndex: CVsList.findIndex((cv) => !cv.disabled),
	setActiveIndex: (index: number) => set(() => ({ activeIndex: index })),
}));
