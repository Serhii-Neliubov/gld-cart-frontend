import {useSelector} from "react-redux";
import {RootState} from "@store/store.ts";
import {Navigate} from "react-router-dom";
import {RouteElement} from "../navigation/nav.data.ts";

export default function ProtectRoute({route}: {route: RouteElement}) {
    if(!route.userRole?.length) {
        return <div>User role is not found for current route...</div>;
    }

    const user = useSelector((state: RootState) => state.userDataSlice.user);

    if(!user) {
        return <Navigate to="/login" />;
    }

    const userType = user.type?.toLowerCase();
    const routeAccessRoles = route.userRole.map(role => role.toLowerCase());

    if(!routeAccessRoles.includes(userType)) {
        return <div>You don't have access to this page!</div>;
    }

    return <route.element />;
}