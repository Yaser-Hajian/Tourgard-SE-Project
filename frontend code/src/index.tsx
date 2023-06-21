import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "./styles/index.scss";
import { AppProvider } from "./proviers";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppProvider>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#08A893",
          },
        }}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ConfigProvider>
    </BrowserRouter>
  </AppProvider>
);
