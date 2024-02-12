import {useEffect, useState} from 'react';
import $api from "../../../../lib/http.ts";

type house = {
    _id: string,
    product_name: string,
    category: string,
    subcategory: string,
    description: string,
    images: string[],
    attributes: {
        city: string,
        address: string,
        tidiness: string,
        dayRentPrice: string,
        weeklyRentPrice: string,
        monthlyRentPrice: string,
        amountOfWeeks: string,
        amountOfDays: string,
        amountOfMonths: string,
        bedrooms: string,
        washroom: string,
        condition: string,
        countOfStoreys: string,
        areaUnit: string,
        area: string,
        features: string[]
    },
}

export const useHouses = () => {
    const [houses, setElectronics] = useState<house[]>([]);

    async function getElectronics() {
        try {
            const response = await $api.get('/renting/category/houses');
            setElectronics(response.data);
        } catch (error) {
            console.error("Error fetching electronics:", error);
        }
    }

    useEffect(() => {
        getElectronics();
    }, []);

    return houses;
}