import React from 'react';
import {useCleaning} from "../hooks/useCleaning.tsx";
import {CleaningItem} from "./CleaningItem.tsx";

export const CleaningList = () => {
    const cleaning = useCleaning();

    return (
        <div>
            {cleaning.map(clean => {
                return (
                    <CleaningItem clean={clean}/>
                )
            })}
        </div>
    )
}