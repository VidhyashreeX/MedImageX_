import { create } from 'zustand';

interface AppState {
  isDarkMode: boolean;
  zoom: number; // Add zoom property
  setZoom: (zoom: number) => void; // Add setZoom function
  toggleDarkMode: () => void;
}

export const useStore = create<AppState>((set) => ({
  isDarkMode: false,
  zoom: 1, // Initialize zoom
  setZoom: (zoom) => set({ zoom }), // Implement setZoom function
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
