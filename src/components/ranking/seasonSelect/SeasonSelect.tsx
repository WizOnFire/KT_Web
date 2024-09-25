import { useRankStore } from "../../../stores/useRank.store";
import { SelectBoxRank,SelectBoxPitRank } from "./SeasonSelectStyles"
const SeasonSelect = () => {
    const { setYear } = useRankStore();
    
    const handleYearChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setYear(e.target.value);
    }

    return (
    <SelectBoxRank>
        <SelectBoxPitRank onChange={handleYearChange}>
        {Array(2024 - 2014 + 1).fill(0).map((_,index) => {
            const indexYear = 2024 - index;
            return (
            <option key={indexYear} value={indexYear}>
                {indexYear} 시즌
            </option>
            )
        })}
        </SelectBoxPitRank>
    </SelectBoxRank>
    );
}
export default SeasonSelect