import $api from "@/utils/interceptors/interceptors.ts";
import {useEffect, useState} from "react";

export const useGetData = (url: string) => {
    const [data, setData] = useState([]);
    const getData = async () => {
        const response = await $api.get(url);
        setData(response.data);
    }

    useEffect(() => {
        getData();
    }, []);

    return data;
}