import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Landing from "./routes/Landing/Landing";
import Login from "./routes/Login/Login";

const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  { path: '/login', element: <Login /> }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
