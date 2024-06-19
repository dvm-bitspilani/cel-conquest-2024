import { useContext, useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

import { WebContext } from "../../store/website-context";

export default function RequireAuth() {
    const { getUserData } = useContext(WebContext);
    const location = useLocation()
    const user = getUserData()

    if (user === null) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    else if (user.role === "Guest - Tier 2") {
        return <Navigate to='/dashboard/meetings' state={{ from: location }} replace />
    }
    else if (user.role === "Startup" || user.role === "Mentor") {
        return <Outlet />
    }
    else {
        return <Outlet />
    }
}