import React, { useState } from 'react';
import { ProfilePictureStage } from './stages/ProfilePictureStage/ProfilePictureStage.tsx';
import { PhoneNumberStage } from './stages/PhoneNumberStage/PhoneNumberStage.tsx';
import { IdConfirmationStage } from './stages/IdConfirmationStage/IdConfirmationStage.tsx';

export const DriverLicenseVendor = () => {
    const [stage, setStage] = useState(1);

    return (
        <div className='__container'>
            {stage === 1 && (
                <ProfilePictureStage setStage={setStage}/>
            )}
            {stage === 2 && (
                <PhoneNumberStage setStage={setStage}/>
            )}
            {stage === 3 && (
                <IdConfirmationStage setStage={setStage}/>
            )}
        </div>
    );
}