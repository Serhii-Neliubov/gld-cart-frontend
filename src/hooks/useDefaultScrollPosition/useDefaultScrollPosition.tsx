import { useEffect } from "react";
import {useLocation} from "react-router-dom";

const useDefaultScrollPosition = (
) => {
    const routePath = useLocation();

    useEffect((): void => {
        window.scrollTo(0, 0);
    }, [routePath]);

    return null;
};

export default useDefaultScrollPosition;
