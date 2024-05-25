import React from 'react';
import { useSelector } from "react-redux";
import { DriverLicenseBuyer } from "./components/buyer/DriverLicenseBuyer.tsx";
import { DriverLicenseVendor } from "./components/vendor/DriverLicenseVendor.tsx";
import {userDataSelector} from "@store/slices/userDataSlice.ts";

export default function DriverLicense() {
    const user = useSelector(userDataSelector);

    return (
        user.type === 'Vendor' ?
            <DriverLicenseBuyer /> :
            <DriverLicenseVendor />
    );
}
