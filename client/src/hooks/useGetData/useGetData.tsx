import {useEffect, useState} from 'react';
import $api, {API_URL} from "../../lib/http.ts";

export const useGetData = (link: string) => {
    const [data, setData] = useState();

    async function getCleaning() {
        try {
            const response = await $api.get(`${API_URL}/${link}`);
            setData(response.data);
        } catch (error) {
            console.error("Error fetching cars:", error);
        }
    }

    useEffect(() => {
        getCleaning();
    }, []);

    return data;
}