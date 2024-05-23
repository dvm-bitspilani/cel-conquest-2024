import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Landing from "./routes/Landing/Landing";
import Login from "./routes/Login/Login";

import WebContextProvider from "./store/website-context";

const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
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
