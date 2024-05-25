import { Route, Routes } from "react-router-dom";

import Login from "./routes/Login/Login";
import LandingPage from "./routes/Landing/LandingPage";
import ErrorPage from "./routes/ErrorPage/ErrorPage";

import WebContextProvider from "./store/website-context";

// importing and initializing react ga
import ReactGA from "react-ga4";
import { useEffect } from "react";
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
        <Route path="/login" element={<Login />} />
      </Routes>
    </WebContextProvider>
  );
}

export default App;
