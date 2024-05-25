import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function DefaultScrollPosition() {
    const routePath = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [routePath]);

    return null;
}