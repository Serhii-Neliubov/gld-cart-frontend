import React from 'react';
import {CompaniesItem} from "./CompaniesItem.tsx";

const companies = [
    'src/assets/images/HomePage/companies/company1.png',
    'src/assets/images/HomePage/companies/company2.png',
    'src/assets/images/HomePage/companies/company3.png',
    'src/assets/images/HomePage/companies/company4.png',
    'src/assets/images/HomePage/companies/company5.png',
    'src/assets/images/HomePage/companies/company6.png',
]

export const CompaniesList = () => {
    return (
        <div className="page__companies companies">
            <div className="companies__container">
                <div className="companies__items">
                    {companies.map((image, index) => <CompaniesItem key={index} image={image}/>)}
                </div>
            </div>
        </div>
    )
}