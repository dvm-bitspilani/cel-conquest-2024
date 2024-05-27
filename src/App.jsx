import { Route, Routes } from "react-router-dom";

import Login from "./routes/Login/Login";
import LandingPage from "./routes/Landing/LandingPage";
import ErrorPage from "./routes/ErrorPage/ErrorPage";

import WebContextProvider from "./store/website-context";

// importing and initializing react ga
import ReactGA from "react-ga4";
import { useEffect } from "react";
import Dashboard from "./routes/Dashboard/Dashboard";
import Home from "./routes/Dashboard/Home/Home"
import Meetings from "./routes/Dashboard/Meetings/Meetings"
ReactGA.initialize("G-ETE2M81K4Z"); // might have to put this in environment variables -> will do later

function App() {
  // tracking page views
  // const location = useLocation();
  useEffect(() => {
    console.log(window.location.pathname + window.location.search); // for debugging
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
      title: "Custom Title",
    });
  }, []);

  return (
    <WebContextProvider>
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
          errorElement={<ErrorPage />}
        />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="home" element={<Home/>}></Route>
          <Route path="Meetings" element={<Meetings/>}></Route>
        </Route>
      </Routes>
    </WebContextProvider>
  );
}

export default App;
