import React from 'react'
import styles from "./Renting.module.scss";
import { Link } from 'react-router-dom';
import { IRentingCategory } from './RentingCategoryItemList';

export const RentingCategoryItem = ({imageURL, title, href}: IRentingCategory) => {
    return (
        <Link to={href} className={styles.block}>
            <div className={styles.image}>
                <img src={imageURL} alt="Image" />
            </div>
            <span>{title}</span>
        </Link>
    )
}