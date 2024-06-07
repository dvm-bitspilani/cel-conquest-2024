import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import WebContextProvider from "./store/website-context.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1003752349264-n8tlblfv003sj7pjka1lbtb1sungnvre.apps.googleusercontent.com">
      <BrowserRouter>
        <WebContextProvider>
          <App />
        </WebContextProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
