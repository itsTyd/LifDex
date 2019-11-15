import { render } from "react-dom";
import App from "./App";
import './gui.scss';

const body: HTMLElement = document.getElementsByTagName("body")[0];
const container: HTMLElement = document.createElement("div");
container.setAttribute("id", "root");

body.insertBefore(container, body.firstChild);

render(
    <App />,
    container
);