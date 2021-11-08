import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { BoardProvider } from "./context/board-context";
import Application from "./components/Application";
import "./index.scss";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router>
      <BoardProvider>
        <Application />
      </BoardProvider>
    </Router>,
    document.body.appendChild(document.createElement("div"))
  );
});
