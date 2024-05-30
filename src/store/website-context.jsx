import { createContext, useEffect, useState } from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";

export const WebContext = createContext({
    user: {},
    activeMeet: <div />,
    glogin: () => { },
    glogout: () => { },
    selectMeet: () => { }
});

export default function WebContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [activeMeet, setActiveMeet] = useState(null);

    const glogout = () => {
        googleLogout();
        axios.post('http://127.0.0.1:8000/api/users/logout/', {
            refresh_token: localStorage.getItem("userData")
        })
        localStorage.removeItem("userData");
        setUser(null);
    }

    const glogin = useGoogleLogin({
        onSuccess: response => {
            console.log(response)
            // Send access token
            axios.post('http://127.0.0.1:8000/api/users/login/google/', {
                access_token: response.access_token
            }).then((res) => {
                try {
                    setUser(res.user_profile_obj)
                    localStorage.setItem("userData", JSON.stringify(res))
                }
                catch (err) {
                    console.log(err)
                    console.log("User not found")
                }
            }).catch(err => console.log(err))
        }
    })

    const selectMeet = (target) => {
        setActiveMeet(prev => {
            if (prev) {
                prev.id = '';
            }
            target.id = 'selected-meeting-item';
            return target
        })
    }

    useEffect(() => {
        const userData = localStorage.getItem("userData");
        setUser(JSON.parse(userData))
    }, []);

    const ctxValue = {
        user,
        activeMeet,
        glogin,
        glogout,
        selectMeet
    };

    return (
        <WebContext.Provider value={ctxValue}>
            {children}
        </WebContext.Provider>
    )
}