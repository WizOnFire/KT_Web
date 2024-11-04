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
            //const response = await axios.get<T>(`${url}`);
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

// import { useEffect, useState } from "react";
// import { ref, get } from "firebase/database";
// import {database} from ".././upload"; // Adjust the path as necessary

// const useFetchData = <T>(path: string) => {
//     const [data, setData] = useState<T | null>(null);
//     const [isLoading, setIsLoading] = useState<boolean>(false);
//     const [error, setError] = useState<string | null>(null);

//     const fetchData = async () => {
//         setIsLoading(true);
//         try {
//             const snapshot = await get(ref(database, path)); // 경로를 사용하여 데이터 가져오기
//             console.log(snapshot)
//             if (snapshot.exists()) {
//                 setData(snapshot.val() as T); // 데이터를 상태에 저장
//             } else {
//                 setError("데이터가 없습니다.");
//             }
//         } catch (error) {
//             setError("데이터 통신 오류!");
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     useEffect(() => {
//         if (path) {
//             fetchData();
//         }
//     }, [path]);

//     return { data, isLoading, error };
// };


// export default useFetchData;
