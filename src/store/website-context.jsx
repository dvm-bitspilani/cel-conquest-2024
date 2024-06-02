import { createContext, useEffect, useState } from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";

export const WebContext = createContext({
    user: {},
    glogin: () => { },
    glogout: () => { }
});

export default function WebContextProvider({ children }) {
    const [user, setUser] = useState(null);

    const glogout = () => {
        googleLogout();
        axios.post('https://conquest-api.bits-dvm.org/api/users/logout/', {
            refresh_token: localStorage.getItem("userData")
        })
        localStorage.removeItem("userData");
        setUser(null);
    }

    const glogin = useGoogleLogin({
        onSuccess: response => {
            console.log(response)
            // Send access token
            axios.post('https://conquest-api.bits-dvm.org/api/users/login/google/', {
                access_token: response.access_token
            }).then((res) => {
                try {
                    console.log(res)
                    setUser(res.user_profile_obj)
                    localStorage.setItem("userData", JSON.stringify(res))
                }
                catch (err) {
                    console.log(err)
                    console.log("User not found")
                }
            }).catch(err => {
                console.log(err)
                console.log("User not found or Invalid token")
            })
        }
    })

    useEffect(() => {
        const userData = localStorage.getItem("userData");
        setUser(JSON.parse(userData))
    }, []);

    const ctxValue = {
        user,
        glogin,
        glogout
    };

    return (
        <WebContext.Provider value={ctxValue}>
            {children}
        </WebContext.Provider>
    )
}