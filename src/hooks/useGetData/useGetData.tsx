import $api from "@/utils/interceptors/interceptors.ts";
import {useEffect, useState} from "react";

export const useGetData = (url: string) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const getData = async () => {
        try {
            setLoading(true);
            const response = await $api.get(url);
            setData(response.data);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return {data, loading};
}