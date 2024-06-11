// store.js
import create from 'zustand';

const useStore = create((set) => ({
  elements: [],
  loggedIn: false,
  addElement: (element) => set((state) => ({ elements: [...state.elements, element] })),
  toggleLogin: () => set((state) => ({ loggedIn: !state.loggedIn })),
}));

export default useStore;
