import {useEffect, useState} from 'react';
import $api from "../../../../lib/http.ts";

type car = {
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

export const useCars = () => {
    const [cars, setCars] = useState<car[]>([]);

    const getCars = async() => {
        const response = await $api.get('/renting/category/vehicles');

        if(response && response.data) setCars(response.data);
    }

    useEffect(() => {
        getCars();
    }, []);

    return cars;
}