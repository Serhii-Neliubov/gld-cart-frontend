import {useEffect, useState} from 'react';
import $api, {API_URL} from "../../lib/http.ts";

export const useGetData = (link: string) => {
    const [cleaning, setCleaning] = useState();

    async function getCleaning() {
        try {
            const response = await $api.get(`${API_URL}/${link}`);
            setCleaning(response.data);
        } catch (error) {
            console.error("Error fetching cars:", error);
        }
    }

    useEffect(() => {
        getCleaning();
    }, []);

    return cleaning;
}