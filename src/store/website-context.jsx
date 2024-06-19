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
    getUserData: () => { },
    tokenRefreshFunction: () => { }
});

export default function WebContextProvider({ children }) {
    const navigate = useNavigate()

    const [user, setUser] = useState(null);
    const [isUserLoginBtnDisabled, setIsUserLoginBtnDisabled] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState(null);
    const [formListRerender, setFormListRerender] = useState(Math.random())

    const tokenRefreshFunction = () => {
        console.log('token refresh function')
        const refreshTokenInterval = setInterval(() => {
            console.log('interval')
            axios.post('https://conquest-api.bits-dvm.org/api/users/token/refresh/', {
                refresh: JSON.parse(localStorage.getItem("tokens")).refresh
            })
                .then(res => {
                    localStorage.setItem("tokens", JSON.stringify(res.data))
                    const newUserData = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null;
                    localStorage.setItem("lastSessionCall", `${Date.now()}`)
                    // newUserData ?? localStorage.setItem("userData", JSON.stringify({ ...newUserData, tokens: res.data }));
                    if (newUserData) {
                        const newData = { ...newUserData, tokens: res.data }
                        console.log(newData)
                        localStorage.setItem("userData", JSON.stringify(newData))
                        console.log(newData.tokens.access === JSON.parse(localStorage.getItem("userData")).tokens.access)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }, 10800000)
        // }, JSON.parse(localStorage.getItem("tokens")).access_token_lifetime)
        // }, 10800000)
        localStorage.setItem('refreshTokenInterval', `${refreshTokenInterval}`)
    }

    const usernameLogin = (credentials) => {
        setIsUserLoginBtnDisabled(true)
        axios.post('https://conquest-api.bits-dvm.org/api/users/login/username/', credentials)
            .then((res) => {
                console.log("In context")
                // console.log(res)
                setUser(res.data.user_profile_obj)
                localStorage.setItem("userData", JSON.stringify(res.data))
                localStorage.setItem("lastSessionCall", `${Date.now()}`)
                localStorage.setItem("tokens", JSON.stringify(res.data.tokens))
                tokenRefreshFunction()
                setIsUserLoginBtnDisabled(false)
                navigate('/dashboard')
                setLoginErrorMessage('Log In Successful!')
            })
            .catch((err) => {
                console.log("In context err")
                console.log(err)
                setIsUserLoginBtnDisabled(false)
                setLoginErrorMessage('Incorrect Credentials!')
                // if (err.response.status === 401) {
                // }
                // if (err.response.status === 404) {
                //     setLoginErrorMessage('Incorrect Credentials!')
                // }
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
        setUser(null);
        clearInterval(parseInt(localStorage.getItem('refreshTokenInterval')))
        localStorage.removeItem("userData");
        localStorage.removeItem('refreshTokenInterval')
        localStorage.removeItem('tokens')
        localStorage.removeItem('lastSessionCall')
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
                    localStorage.setItem("lastSessionCall", `${Date.now()}`)
                    localStorage.setItem("tokens", JSON.stringify(res.data.tokens))
                    tokenRefreshFunction()
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
        getUserData,
        tokenRefreshFunction
    };

    return (
        <WebContext.Provider value={ctxValue}>
            {children}
        </WebContext.Provider>
    )
}