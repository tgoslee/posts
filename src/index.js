import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Posts from "./Posts";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Posts />
  </StrictMode>,
  rootElement
);
