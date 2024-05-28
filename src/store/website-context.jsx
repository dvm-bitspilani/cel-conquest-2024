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
            console.log(response)
            // Send access token
            axios.post('http://127.0.0.1:8000/api/users/login/google/', {
                access_token: response.access_token
            }).then((res) => {
                try {
                    setUser(res.user_profile_obj)
                    localStorage.setItem("userData", JSON.stringify(res.user_profile_obj))
                }
                catch (err) {
                    console.log(err)
                    console.log("User not found")
                }
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