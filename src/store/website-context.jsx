import { createContext, useEffect, useState } from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";

export const WebContext = createContext({
    user: {},
    login: () => { },
    logout: () => { }
});

export default function WebContextProvider({ children }) {
    const [user, setUser] = useState(null);

    const logout = () => {
        googleLogout();
        localStorage.removeItem("userData")
        setUser(null);
    }

    const login = useGoogleLogin({
        onSuccess: response => {
            axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: {
                    Authorization: `Bearer ${response.access_token}`
                }
            }).then((res) => {
                setUser(res.data)
                localStorage.setItem("userData", JSON.stringify(res.data))
            }).catch(err => console.log(err))
        }
    })

    useEffect(() => {
        const userData = localStorage.getItem("userData");
        setUser(JSON.parse(userData))
    }, []);

    const ctxValue = {
        user: user,
        login,
        logout
    };

    return (
        <WebContext.Provider value={ctxValue}>
            {children}
        </WebContext.Provider>
    )
}