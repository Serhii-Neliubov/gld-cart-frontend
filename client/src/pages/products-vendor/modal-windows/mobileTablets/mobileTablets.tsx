import React, { useEffect, useState } from 'react';
import { StageOne } from './popupWindowStages/StageOne.tsx';
import {StageTwo} from "./popupWindowStages/StageTwo.tsx";
import {StageThree} from "./popupWindowStages/StageThree.tsx";

export type formDataProps = {
    productType: string;
    priceType: string;
    operatingSystem: string,
    processor: string,
    memory: string,
    storage: string,
    screenDisplay: string,
    [key: string]: string | string[],
    features: string[],
}

type AwesomeLipCareProps = {
    closeModal: () => void,
}

export const MobileTablets = ({closeModal}: AwesomeLipCareProps) => {
    const [stage, setStage] = useState(1);
    const [price, setPrice] = useState('');
    const [discountedPrice, setDiscountedPrice] = useState('');
    const [discount, setDiscount] = useState('');

    const [formData, setFormData] = useState<formDataProps>({
        productType: 'New',
        priceType: 'Full Price',
        operatingSystem: '',
        processor: '',
        memory: '',
        storage: '',
        screenDisplay: '',
        features: [],
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
        if(formData.priceType === 'New'){
            setDiscount('');
            setDiscountedPrice('');
        } else if (formData.priceType === 'Used'){
            setPrice('');
        }

    }, [formData.priceType])

    return (
        <React.Fragment>
            { stage === 1 && <StageOne
                closeModal={closeModal}
                formData={formData}
                setFormData={setFormData}
                setStage={setStage}
                price={price}
                setPrice={setPrice}
                discountedPrice={discountedPrice}
                setDiscountedPrice={setDiscountedPrice}
                discount={discount}
                setDiscount={setDiscount}
            /> }
            { stage === 2 && <StageTwo
                setStage={setStage}
                formData={formData}
                setFormData={setFormData}
                closeModal={closeModal}
                stage={stage}
            /> }
            { stage === 3 && <StageThree
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