import { createContext, useEffect, useState } from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const WebContext = createContext({
    user: {},
    isUserLoginBtnDisabled: false,
    loginErrorMessage: null,
    formListRerender: 0,
    setFormListRerender: () => { },
    setLoginErrorMessage: () => { },
    setUser: () => { },
    glogin: () => { },
    glogout: () => { },
    usernameLogin: () => { },
    getUserData: () => { }
});

export default function WebContextProvider({ children }) {
    const navigate = useNavigate()

    const [user, setUser] = useState(null);
    const [isUserLoginBtnDisabled, setIsUserLoginBtnDisabled] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState(null);
    const [formListRerender, setFormListRerender] = useState(Math.random())

    const usernameLogin = (credentials) => {
        setIsUserLoginBtnDisabled(true)
        axios.post('https://conquest-api.bits-dvm.org/api/users/login/username/', credentials)
            .then((res) => {
                console.log("In context")
                // console.log(res)
                setUser(res.data.user_profile_obj)
                localStorage.setItem("userData", JSON.stringify(res.data))
                setIsUserLoginBtnDisabled(false)
                navigate('/dashboard')
                setLoginErrorMessage('Log In Successful!')
            })
            .catch((err) => {
                console.log("In context err")
                console.log(err)
                setIsUserLoginBtnDisabled(false)
                if (err.response.status === 401) {
                    setLoginErrorMessage('User does not exist!')
                }
                if (err.response.status === 404) {
                    setLoginErrorMessage('Incorrect Credentials!')
                }
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

    const getUserData = () => {
        if (localStorage.getItem("userData")) {
            return JSON.parse(localStorage.getItem("userData")).user_profile_obj
        }
        return null;
    }

    useEffect(() => {
        const userData = localStorage.getItem("userData");
        setUser(JSON.parse(userData))
    }, []);

    const ctxValue = {
        user,
        isUserLoginBtnDisabled,
        loginErrorMessage,
        formListRerender,
        setFormListRerender,
        setLoginErrorMessage,
        setUser,
        glogin,
        glogout,
        usernameLogin,
        getUserData
    };

    return (
        <WebContext.Provider value={ctxValue}>
            {children}
        </WebContext.Provider>
    )
}