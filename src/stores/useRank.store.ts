import { create } from "zustand";

type TRankStoreType = {
    year: string;
    setYear: (year: any) => void;
};

export const useRankStore = create<TRankStoreType>((set) => ({
    year : "2024",
    setYear: (year) => set({year : year})
}));

//top3 평균자책점 player
type TPlayerStore = {
    top3Players: string[];
    setTop3Players: (players: string[]) => void;
  };

export const usePlayerStore = create<TPlayerStore>((set) => ({
    top3Players: [],
    setTop3Players: (players) => set({top3Players: players}),
}));