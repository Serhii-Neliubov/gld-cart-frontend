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

const defaultFormData = {
    gender: 'Man',
    priceType: 'Full Price',
    productMaterials: [],
    productColors: [],
    productFeatures: [],
    productSizes: [],
}

type PopupWindowProps = {
    stage: number,
    setStage: (value: number) => void
}

export const Bags = ({stage, setStage}: PopupWindowProps) => {

    const [price, setPrice] = useState('');
    const [discountedPrice, setDiscountedPrice] = useState('');
    const [discount, setDiscount] = useState('');

    const [formData, setFormData] = useState<formDataProps>(defaultFormData);

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
                onChecked={onChecked}
                setStage={setStage}
                stage={stage}
                setColorHandler={setColorHandler}
            /> }
            { stage === 3 && <StageThree
                onChecked={onChecked}
                setStage={setStage}
                stage={stage}
            /> }
            { stage === 4 && <StageFour
                defaultFormData={defaultFormData}
                setFormData={setFormData}
                onChecked={onChecked}
                formData={formData}
                price={price}
                discount={discount}
                discountedPrice={discountedPrice}
                setStage={setStage}
                stage={stage}
            /> }
            <button
                style={{backgroundColor: '#EEE'}}
                onClick={() => {
                    setFormData(defaultFormData);
                    console.log(formData);
                }
            }>Clear</button>
        </React.Fragment>
    )


}