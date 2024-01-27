import { useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {vendorProductInfo} from "../../redux/slices/vendorProductInfoSlice.ts";

const useCategoryRedirect = (category: string, navigate: string) => {
    const navigator = useNavigate();
    const data = useSelector(vendorProductInfo);

    useEffect(() => {
        if (data.category !== category) {
            navigator(navigate);
        }
    }, [data, navigator]);
};

export default useCategoryRedirect;
