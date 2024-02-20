import {useEffect, useState} from 'react';
import $api from "../../../../utils/interceptors/interceptors.ts";

type cleaning = {
    _id: string,
    service_name: string,
    category: string,
    subcategory: string,
    description: string,
    images: string[],
    attributes: {
        wantToGiveProfServicesIn: string,
        dayRentPrice: string,
        amountOfDays: string,
        weeklyRentPrice: string,
        amountOfWeeks: string,
        monthlyRentPrice: string,
        amountOfMonths: string,
        workingHours: string,
        numberOfProfessional: string,
        cleaningMaterial: string,
        cleaningFrequency: string[],
    },
}

export const useCleaning = () => {
    const [cleaning, setCleaning] = useState<cleaning[]>([]);

    const getCars = async() => {
        const response = await $api.get('/professional-services/category/cleaning');

        if(response && response.data) setCleaning(response.data);
    }

    useEffect(() => {
        getCars();
    }, []);

    return cleaning;
}