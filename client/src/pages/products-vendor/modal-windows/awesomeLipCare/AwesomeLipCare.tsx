import React, { useEffect, useState } from 'react';
import { StageOne } from './popupWindowStages/StageOne.tsx';
import {StageTwo} from "./popupWindowStages/StageTwo.tsx";
import {StageThree} from "./popupWindowStages/StageThree.tsx";
import {StageFour} from "./popupWindowStages/StageFour.tsx";

export type formDataProps = {
    productType: string;
    priceType: string;
    productMaterials: string[];
    productColors: string[];
    productFeatures: string[];
    productSizes: string[];
    [key: string]: string | string[];
}

type AwesomeLipCareProps = {
    closeModal: () => void,
}

export const AwesomeLipCare = ({closeModal}: AwesomeLipCareProps) => {
    const [stage, setStage] = useState(1);
    const [price, setPrice] = useState('');
    const [discountedPrice, setDiscountedPrice] = useState('');
    const [discount, setDiscount] = useState('');

    const [formData, setFormData] = useState<formDataProps>({
        productType: 'Branded',
        priceType: 'Full Price',
        productMaterials: [],
        productColors: [],
        productFeatures: [],
        productSizes: [],
    });

    const onChecked = (event:React.ChangeEvent<HTMLInputElement>, key: string, element: string) => {
        let container = formData[key] as string[];

        if(event.target.checked){
            container.push(element)
        } else {
            container = container.filter((size) => size !== element);
        }

        setFormData({
            ...formData,
            [key]: container
        })
    }

    useEffect(() => {
        if(formData.priceType === 'Full Price'){
            setDiscount('');
            setDiscountedPrice('');
        } else if (formData.priceType === 'Discount Price'){
            setPrice('');
        }

    }, [formData.priceType])

    return (
        <React.Fragment>
            { stage === 1 && <StageOne
                closeModal={closeModal}
                formData={formData}
                setStage={setStage}
                setFormData={setFormData}
                price={price}
                setPrice={setPrice}
                discountedPrice={discountedPrice}
                setDiscountedPrice={setDiscountedPrice}
                discount={discount}
                setDiscount={setDiscount}
            /> }
            { stage === 2 && <StageTwo
                setStage={setStage}
                closeModal={closeModal}
                stage={stage}
            /> }
            { stage === 3 && <StageThree
                setStage={setStage}
                closeModal={closeModal}
                stage={stage}
            /> }
            { stage === 4 && <StageFour
                onChecked={onChecked}
                closeModal={closeModal}
                formData={formData}
                price={price}
                discount={discount}
                discountedPrice={discountedPrice}
                setStage={setStage}
                stage={stage}
            /> }
        </React.Fragment>
    )

}