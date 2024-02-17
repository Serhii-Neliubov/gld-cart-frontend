import React from 'react';
import {CompaniesItem} from "./CompaniesItem.tsx";

const companies = [
    'HomePage/companies/company1.png',
    'HomePage/companies/company2.png',
    'HomePage/companies/company3.png',
    'HomePage/companies/company4.png',
    'HomePage/companies/company5.png',
    'HomePage/companies/company6.png',
]

export const CompaniesList = () => {
    return (
        <div className="page__companies companies">
            <div className="companies__container">
                <div className="companies__items">
                    {companies.map((image) => <CompaniesItem image={image}/>)}
                </div>
            </div>
        </div>
    )
}