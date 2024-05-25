import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./routes/Login/Login";
import LandingPage from "./routes/Landing/LandingPage";
import ErrorPage from "./routes/ErrorPage/ErrorPage";

import WebContextProvider from "./store/website-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />
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
