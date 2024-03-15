import React from 'react';
import styles from "../../Renting.module.scss";
import { RentingCategoryItem } from './RentingCategoryItem';

export interface IRentingCategory {
    title: string,
    imageURL: string,
    href: string,
}

const rentingCategories:IRentingCategory[] = [
    {
        title: 'Vehicles',
        imageURL: 'src/assets/images/RentingPage/img1.png',
        href: '/renting-car'
    },
    {
        title: 'Houses',
        imageURL: 'src/assets/images/RentingPage/img2.png',
        href: '/renting-house'
    },
    {
        title: 'Electronics',
        imageURL: 'src/assets/images/RentingPage/img3.png',
        href: '/renting-electronics'
    }
]

export const RentingCategoryItemList = () => {
    return <div className={styles.blocks}>
        {rentingCategories.map((item, index) =>
            <RentingCategoryItem
                key={index}
                href={item.href}
                imageURL={item.imageURL}
                title={item.title}
            />
        )}
    </div>
}