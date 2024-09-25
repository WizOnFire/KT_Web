import { create } from "zustand";
type TRankingCategory = {
  selectedRankingBar: string;
  setSelectedRankingBar: (category: string) => void;
}

export const useSubCategoryStore = create<TRankingCategory>((set) => ({
  selectedRankingBar: "팀순위",
  setSelectedRankingBar: (category) => set({ selectedRankingBar: category }),
}));



