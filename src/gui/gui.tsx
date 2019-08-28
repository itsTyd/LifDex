import * as ReactDOM from "react-dom";

const body: HTMLElement = document.getElementsByTagName("body")[0];
const container: HTMLElement = document.createElement("div");
container.setAttribute("id", "root");

body.insertBefore(container, body.firstChild);

ReactDOM.render(
    <h1>Henlo</h1>,
    container
);