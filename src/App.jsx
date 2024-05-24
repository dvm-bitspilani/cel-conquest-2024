import { Route, Routes } from "react-router-dom";

import Landing from "./routes/Landing";
import Login from "./routes/Login";

import WebContextProvider from "./store/website-context";

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
