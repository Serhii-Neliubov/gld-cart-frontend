import React from 'react';
import { Bags } from "./bags/Bags.tsx";
import {AwesomeLipCare} from "./awesomeLipCare/AwesomeLipCare.tsx";

type ModalListProps = {
    modalOpenValue: string,
    closeModal: () => void
}

export const ModalList = ({modalOpenValue, closeModal}: ModalListProps) => {
    if(modalOpenValue === 'bags'){
        return <Bags closeModal={closeModal}/>
    } else if(modalOpenValue === 'awesome'){
        return <AwesomeLipCare />
    }
}