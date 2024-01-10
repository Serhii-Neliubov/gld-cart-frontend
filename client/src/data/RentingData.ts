type RentingDataProps = {
    image: string;
    categories: {
        name: string,
        img: string,
    }[],
    subcategories: string[];
    items: string[];
};
export const RentingData: RentingDataProps =
    {
        image: "ProductsCategoryPage/Vector-10.svg",
        categories: [
            { name: 'Vehicles', img: 'RentingCategory/pajamas_mobile.png'},
            { name: 'Houses', img: 'ProductsCategoryPage/Vector-3.svg'},
            { name: 'Electronics', img: 'ProductsCategoryPage/Vector-3.svg'},
        ],
        subcategories: [
            "Sedans",
            "Coupes",
            "Hatchbacks",
            "Minivans",
            "Pickup Trucks",
            "Luxury Cars",
            "Electric Cars",
            "Hybrid Cars",
            "Full-size Cars",
            "Premium Cars",
            "Economy Cars",
            "Midsize Cars",
            "Sports Cars",
            "Vans",
            "Jeep",
        ],
        items: [
            'Toyota',
            'Honda',
            'Ford',
            'Nissan',
            'Hyundai',
            'Kia',
            'Subaru',
            'Mazda',
            'BMW',
            'Mercedes',
            'Audi',
            'Lexus',
            'Others'
        ],
    }
