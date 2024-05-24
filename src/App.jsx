import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./routes/Login/Login";
import LandingPage from "./routes/Landing/LandingPage";

import WebContextProvider from "./store/website-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  { path: "/login", element: <Login /> }
]);

function App() {
  return (
    <WebContextProvider>
      <RouterProvider router={router} />
    </WebContextProvider>
  );
}

export default App;
