import { useEffect } from "react";

const useDefaultScrollPosition = (
) => {

    useEffect((): void => {
        window.scrollTo(0, 0);
    }, []);
};

export default useDefaultScrollPosition;
