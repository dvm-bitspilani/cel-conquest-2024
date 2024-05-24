import { Route, Routes } from "react-router-dom";

import Login from "./routes/Login/Login";
import LandingPage from "./routes/Landing/LandingPage";
import RootLayout from "./routes/RootLayout/RootLayout";

import WebContextProvider from "./store/website-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <LandingPage /> }],
  },
  { path: "/login", element: <Login /> },
]);

function App() {
  return (
    <WebContextProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </WebContextProvider>
  );
}

export default App;
