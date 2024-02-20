import React from 'react';
import { CompaniesItem } from './CompaniesItem.tsx';

import imageCompany1 from '@/assets/images/HomePage/companies/company1.png';
import imageCompany2 from '@/assets/images/HomePage/companies/company2.png';
import imageCompany3 from '@/assets/images/HomePage/companies/company3.png';
import imageCompany4 from '@/assets/images/HomePage/companies/company4.png';
import imageCompany5 from '@/assets/images/HomePage/companies/company5.png';
import imageCompany6 from '@/assets/images/HomePage/companies/company6.png';

const companies = [
    imageCompany1,
    imageCompany2,
    imageCompany3,
    imageCompany4,
    imageCompany5,
    imageCompany6,
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