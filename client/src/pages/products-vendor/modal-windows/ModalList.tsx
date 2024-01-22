import React from 'react';
import { Bags } from "./bags/Bags.tsx";
import {AwesomeLipCare} from "./awesomeLipCare/AwesomeLipCare.tsx";
import {MobileTablets} from "./mobileTablets/mobileTablets.tsx";

type ModalListProps = {
    modalOpenValue: string,
    closeModal: () => void
}

export const ModalList = ({modalOpenValue, closeModal}: ModalListProps) => {
    console.log(modalOpenValue);
    if(modalOpenValue === 'bags'){
        return <Bags closeModal={closeModal}/>
    } else if(modalOpenValue === 'awesome'){
        return <AwesomeLipCare closeModal={closeModal}/>
    } else if(modalOpenValue === 'mobileTablets'){
        return <MobileTablets closeModal={closeModal}/>
    }
}