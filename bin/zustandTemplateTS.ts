/* TypeScript Zustand template */
import create from 'zustand';

type State = {
    count: number;
    isLoading: boolean;
    error: Error | null;
    data: any;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    fetchData: (url: string) => Promise<void>;
    doubleCount: number;
};

const zustandTemplateTS = create<State>((set, get) => ({
    // State
    count: 0,
    isLoading: false,
    error: null,
    data: null,

    // Actions
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),

    // Async action example
    fetchData: async (url) => {
        set({ isLoading: true, error: null });

        try {
            const response = await fetch(url);
            const data = await response.json();
            set({ data, isLoading: false });
        } catch (error) {
            set({ error, isLoading: false });
        }
    },

    // Computed property example
    get doubleCount() {
        return get().count * 2;
    },
}));

export default zustandTemplateTS;