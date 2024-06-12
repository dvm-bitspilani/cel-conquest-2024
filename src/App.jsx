import { Route, Routes } from "react-router-dom";
import axios from "axios";

import RequireAuth from "./routes/RequireAuth/RequireAuth";

import Login from "./routes/Login/Login";
import LandingPage from "./routes/Landing/LandingPage";
import ErrorPage from "./routes/ErrorPage/ErrorPage";

// importing and initializing react ga
import ReactGA from "react-ga4";
import { useEffect, useContext } from "react";
import { WebContext } from "./store/website-context";
import Dashboard from "./routes/Dashboard/Dashboard";
import Home from "./routes/Dashboard/Home/Home";
import Meetings from "./routes/Dashboard/Meetings/Meetings";
import Startups from "./routes/Dashboard/Startups/Startups";
import Unauthorised from "./routes/Unauthorised/Unauthorised";
import StartupProfile from "./routes/Dashboard/StartupProfile/StartupProfile";
import Experts from "./routes/Dashboard/Experts/Experts";
import Mentors from "./routes/Dashboard/Mentors/Mentors";
import Connections from "./routes/Dashboard/Connections/Connections";
import Forms from "./routes/Dashboard/Forms/Forms";
ReactGA.initialize("G-ETE2M81K4Z"); // might have to put this in environment variables -> will do later

function App() {
  // tracking page views
  const { setUser, getUserData, tokenRefreshFunction } = useContext(WebContext);
  // const location = useLocation();
  useEffect(() => {
    console.log(window.location.pathname + window.location.search); // for debugging
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
      title: "Custom Title",
    });

    if (localStorage.getItem("lastSessionCall") && localStorage.getItem("tokens")) {
      if (Date.now() > JSON.parse(localStorage.getItem("tokens")).refresh_token_lifetime) {
        setUser(null);
        if (localStorage.getItem("userData")) {
          localStorage.removeItem("userData");
        }
      }
      else if (Date.now() > JSON.parse(localStorage.getItem("tokens")).access_token_lifetime) {
        tokenRefreshFunction()
      }
      else {
        setTimeout(() => {
          axios.post('https://conquest-api.bits-dvm.org/api/users/token/refresh/', {
            refresh: JSON.parse(localStorage.getItem("tokens")).refresh
          })
            .then(res => {
              localStorage.setItem("tokens", JSON.stringify(res.data))
              const newUserData = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null;
              localStorage.setItem("lastSessionCall", `${Date.now()}`)
              newUserData ?? localStorage.setItem("userData", JSON.stringify({ ...newUserData, tokens: res.data }));
            })
            .catch(err => {
              console.log(err)
            })
          tokenRefreshFunction()
        }, JSON.parse(localStorage.getItem("tokens")).access_token_lifetime - (Date.now() - parseInt(localStorage.getItem("lastSessionCall"))))
      }
    }

    const userData = getUserData();
    if (userData) {
      setUser(userData);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} errorElement={<ErrorPage />} />
      <Route path="unauthorised" element={<Unauthorised />} />
      <Route path="login" element={<Login />} />
      <Route element={<RequireAuth />}>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Home />}></Route>
          <Route path="meetings" element={<Meetings />}></Route>
          <Route path="startups" element={<Startups />}></Route>
          <Route path="experts" element={<Experts />}></Route>
          <Route
            path="startup-profile/:id?"
            element={<StartupProfile />}
          ></Route>
          <Route path="mentors" element={<Mentors />}></Route>
          <Route path="connections" element={<Connections />}></Route>
          <Route path="forms" element={<Forms />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
