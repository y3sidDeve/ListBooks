import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="dark dark:bg-slate-800 text-white">
      <App />
    </main>
  </React.StrictMode>
);
