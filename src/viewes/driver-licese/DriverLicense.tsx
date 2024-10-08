import React from 'react';
import { useSelector } from "react-redux";
import { userDataSelector } from "@/store/slices/userDataSlice.ts";
import { DriverLicenseBuyer } from "./components/buyer/DriverLicenseBuyer.tsx";
import { DriverLicenseVendor } from "./components/vendor/DriverLicenseVendor.tsx";

export const DriverLicense = () => {
    const user = useSelector(userDataSelector);

    return (
        user.type === 'Vendor' ?
            <DriverLicenseBuyer /> :
            <DriverLicenseVendor />
    );
}
