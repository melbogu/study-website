import React from "react";
import { StrictMode } from 'react';
import * as ReactDomClient from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDomClient.createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
);