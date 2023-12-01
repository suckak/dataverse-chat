import Home from "./views/Home.js";
import Detail from "./views/Detail.js";
import Otra from "./views/Otra.js";
import { setRootEl, setRoutes, onURLChange, navigateTo } from "./router.js";

const routes = {
  "/": Home,
  "/detail": Detail,
  "/otra": Otra,
};

setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => {
  setRootEl(document.getElementById("root"));
  onURLChange(window.location);
});

window.addEventListener("popstate", (event) => {
  console.log(document.location.pathname, event.state);
  onURLChange(document.location, event.state);
});
