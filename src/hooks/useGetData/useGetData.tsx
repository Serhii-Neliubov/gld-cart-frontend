import $api from "@/utils/interceptors/interceptors.ts";
import {useEffect, useState} from "react";

export const useGetData = (url: string) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                return await $api.get(url);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        }

        getData().then(response => setData(response?.data));
    }, []);

    return {data, loading};
}