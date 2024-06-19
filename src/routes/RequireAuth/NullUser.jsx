import { useContext, useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

import { WebContext } from "../../store/website-context";

export default function NullUserAuth() {
    const { getUserData } = useContext(WebContext);
    const location = useLocation()
    const user = getUserData()

    if (user === null) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    else {
        return <Outlet />
    }
}