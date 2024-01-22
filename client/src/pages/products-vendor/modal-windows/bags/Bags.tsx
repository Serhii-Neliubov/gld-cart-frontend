import React, {ChangeEvent, useEffect, useState} from 'react';
import { StageOne } from './popupWindowStages/StageOne.tsx';
import {StageTwo} from "./popupWindowStages/StageTwo.tsx";
import {StageThree} from "./popupWindowStages/StageThree.tsx";
import {StageFour} from "./popupWindowStages/StageFour.tsx";


export type formDataProps = {
    gender: string;
    priceType: string;
    productMaterials: string[];
    productColors: string[];
    productFeatures: string[];
    productSizes: string[];
    [key: string]: string | string[];
}

interface BagsProps{
    closeModal: () => void
}

export const Bags = ({closeModal}: BagsProps) => {
    const [stage, setStage] = useState(1);
    const [price, setPrice] = useState('');
    const [discountedPrice, setDiscountedPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [formData, setFormData] = useState<formDataProps>({
        gender: 'Man',
        priceType: 'Full Price',
        productMaterials: [],
        productColors: [],
        productFeatures: [],
        productSizes: [],
    });

    const onChecked = (event: ChangeEvent<HTMLInputElement>, key: string, element: string) => {
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

    const setColorHandler = (value: boolean,  key: string, element: string) => {
        let container = formData[key] as string[];

        if(!value){
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
                formData={formData}
                setFormData={setFormData}
                setStage={setStage}
                closeModal={closeModal}
                price={price}
                setPrice={setPrice}
                discountedPrice={discountedPrice}
                setDiscountedPrice={setDiscountedPrice}
                discount={discount}
                setDiscount={setDiscount}
            /> }
            { stage === 2 && <StageTwo
                onChecked={onChecked}
                closeModal={closeModal}
                setStage={setStage}
                stage={stage}
                setColorHandler={setColorHandler}
            /> }
            { stage === 3 && <StageThree
                onChecked={onChecked}
                closeModal={closeModal}
                setStage={setStage}
                stage={stage}
            /> }
            { stage === 4 && <StageFour
                setFormData={setFormData}
                onChecked={onChecked}
                formData={formData}
                closeModal={closeModal}
                price={price}
                discount={discount}
                discountedPrice={discountedPrice}
                setStage={setStage}
                stage={stage}
            /> }
        </React.Fragment>
    )


}