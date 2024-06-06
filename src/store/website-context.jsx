import { createContext, useEffect, useState } from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";

export const WebContext = createContext({
    user: {},
    glogin: () => { },
    glogout: () => { },
    usernameLogin: () => { }
});

export default function WebContextProvider({ children }) {
    const [user, setUser] = useState(null);

    const usernameLogin = (credentials) => {
        axios.post('https://conquest-api.bits-dvm.org/api/users/login/username/', credentials)
            .then((res) => {
                console.log("In context")
                // console.log(res)
            })
            .catch((err) => {
                console.log("In context err")
                // console.log(err)
            })
    }

    const glogout = () => {
        const refresh_token = JSON.parse(localStorage.getItem("userData")).tokens.refresh
        const access_token = JSON.parse(localStorage.getItem("userData")).tokens.access
        googleLogout();
        axios.post('https://conquest-api.bits-dvm.org/api/users/logout/', {
            refresh_token
        }, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
        localStorage.removeItem("userData");
        setUser(null);
    }

    const glogin = useGoogleLogin({
        onSuccess: response => {
            // console.log(response)
            // Send access token
            axios.post('https://conquest-api.bits-dvm.org/api/users/login/google/', {
                access_token: response.access_token
            }).then((res) => {
                try {
                    // console.log(res.data)
                    setUser(res.data.user_profile_obj)
                    localStorage.setItem("userData", JSON.stringify(res.data))
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
        glogout,
        usernameLogin
    };

    return (
        <WebContext.Provider value={ctxValue}>
            {children}
        </WebContext.Provider>
    )
}