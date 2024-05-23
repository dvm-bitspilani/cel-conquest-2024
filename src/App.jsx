import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Landing from "./routes/Landing/Landing";
import Login from "./routes/Login/Login";
import RootLayout from "./routes/RootLayout/RootLayout";

import WebContextProvider from "./store/website-context";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Landing /> },
    ]
  },
  { path: '/login', element: <Login /> }
])

function App() {
  return (
    <WebContextProvider>
      <RouterProvider router={router} />
    </WebContextProvider>
  )
}

export default App;
