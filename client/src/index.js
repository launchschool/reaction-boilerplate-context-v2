import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { BoardContextProvider } from "./context/board-context";
import Application from "./components/Application";
import "./index.scss";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router>
      <BoardContextProvider>
        <Application />
      </BoardContextProvider>
    </Router>,
    document.body.appendChild(document.createElement("div"))
  );
});
