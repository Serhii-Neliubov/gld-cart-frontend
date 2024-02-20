import React from 'react';

type CompaniesItemProps = {
    image: string,
}

export const CompaniesItem = ({image}: CompaniesItemProps) => {
    return (
        <div className="companies__item">
            <img src={image} alt="Image company"/>
        </div>
    )
}