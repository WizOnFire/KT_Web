import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = <T>(url:string) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL || '';
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async() => {
        setIsLoading(true)
        try {
            const response = await axios.get<T>(`${BASE_URL}/${url}`);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            setError("데이터 통신 오류!")
            setIsLoading(false);
        }
    };

    useEffect(()=>{
        if (url) {  // URL이 빈 값일 경우 요청하지 않도록 조건 추가
            fetchData();
        }
    },[url]);
    return { data, isLoading, error };
}
export default useFetchData;