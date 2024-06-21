import { createContext, useEffect, useState } from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import * as timestamp from "unix-timestamp";

export const WebContext = createContext({
    user: {},
    isUserLoginBtnDisabled: false,
    loginErrorMessage: null,
    formListRerender: 0,
    contextHolder: null,
    bookSlotRequestedID: null,
    meetingTimeArray: [],
    setFormListRerender: () => { },
    setLoginErrorMessage: () => { },
    setUser: () => { },
    glogin: () => { },
    glogout: () => { },
    usernameLogin: () => { },
    getUserData: () => { },
    tokenRefreshFunction: () => { },
    displayMessage: () => { },
    setMeetingTimeArray: () => { },
    setBookSlotRequestedID: () => { },
    customDate: null,
});

export default function WebContextProvider({ children }) {
    const navigate = useNavigate()

    const [user, setUser] = useState(null);
    const [isUserLoginBtnDisabled, setIsUserLoginBtnDisabled] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState(null);
    const [formListRerender, setFormListRerender] = useState(Math.random())
    const [meetingTimeArray, setMeetingTimeArray] = useState([])
    const [bookSlotRequestedID, setBookSlotRequestedID] = useState(null)

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
                console.log(err.response.data.message)
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
                    if (res.data.user_profile_obj.role !== "Guest - Tier 2") {
                        navigate('/dashboard')
                    }
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

    class customDate {
        constructor(date) {
            this.dateArray = `${timestamp.toDate(date)}`.split(" ")
        }
        getMonth() {
            switch (this.dateArray[1]) {
                case "Jan":
                    return "January";
                    break;
                case "Feb":
                    return "February";
                    break;
                case "Mar":
                    return "March";
                    break;
                case "Apr":
                    return "April";
                    break;
                case "May":
                    return "May";
                    break;
                case "Jun":
                    return "June";
                    break;
                case "Jul":
                    return "July";
                    break;
                case "Aug":
                    return "August";
                    break;
                case "Sep":
                    return "September";
                    break;
                case "Oct":
                    return "October";
                    break;
                case "Nov":
                    return "November";
                    break;
                case "Dec":
                    return "December";
                    break;
                default:
                    return this.dateArray[1];
                    break;
            }
        }
        getTime() {
            return this.dateArray[4].slice(0, -3);
        }
        getFullTime() {
            if (parseInt(this.dateArray[4].slice(0, 2)) > 12) {
                return `${parseInt(this.dateArray[4].slice(0, 2)) - 12}${this.dateArray[4].slice(2, -3)} PM`
            }
            else {
                return `${this.dateArray[4].slice(0, -3)} AM`
            }
        }
        getDate() {
            if (this.dateArray[2][0] === "1" && this.dateArray[2].length === 2) {
                return this.dateArray[2] + "th";
            } else {
                switch (this.dateArray[2][1]) {
                    case "1":
                        return this.dateArray[2] + "st";
                        break;
                    case "2":
                        return this.dateArray[2] + "nd";
                        break;
                    case "3":
                        return this.dateArray[2] + "rd";
                        break;
                    default:
                        return this.dateArray[2] + "th";
                        break;
                }
            }
        }
    }

    useEffect(() => {
        const userData = localStorage.getItem("userData");
        setUser(JSON.parse(userData))
    }, []);

    // ANT DESIGN MESSAGE
    const [messageApi, contextHolder] = message.useMessage();

    const displayMessage = (type = 'success', content = 'this is a success message', duration = 3) => {
        messageApi.open({
            type,
            content,
            duration
        });
    }

    const ctxValue = {
        user,
        isUserLoginBtnDisabled,
        loginErrorMessage,
        formListRerender,
        contextHolder,
        meetingTimeArray,
        bookSlotRequestedID,
        customDate,
        setFormListRerender,
        setLoginErrorMessage,
        setUser,
        glogin,
        glogout,
        usernameLogin,
        getUserData,
        tokenRefreshFunction,
        displayMessage,
        setBookSlotRequestedID,
        setMeetingTimeArray
    };

    return (
        <WebContext.Provider value={ctxValue}>
            {children}
        </WebContext.Provider>
    )
}