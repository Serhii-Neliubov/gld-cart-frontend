import {useEffect, useState} from 'react';
import $api from "../../../../lib/interceptors.ts";

type electronic = {
    _id: string,
    product_name: string,
    category: string,
    subcategory: string,
    description: string,
    images: string[],
    attributes: {
        driver: string,
        dayRentPrice: string,
        amountOfDays: string,
        weeklyRentPrice: string,
        amountOfWeeks: string,
        monthlyRentPrice: string,
        amountOfMonths: string,
        yearOfManufacture: string,
        vehiclePlateNumber: string,
        transmission: string,
        specificationDetails: string,
        fuelType: string,
        engineCapacity: string,
        seatCapacity: string,
        storageBagCapacity: string,
        airBags: string
    },
}

export const useElectronics = () => {
    const [electronics, setElectronics] = useState<electronic[]>([]);

    async function getElectronics() {
        try {
            const response = await $api.get('/renting/category/electronics');
            setElectronics(response.data);
        } catch (error) {
            console.error("Error fetching cars:", error);
        }
    }

    useEffect(() => {
        getElectronics();
    }, []);

    return electronics;
}