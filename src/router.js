import NotFound from "./views/NotFound.js";

let ROUTES = {};

let rootEl = null;

export const setRootEl = (el) => {
  rootEl = el;
};

export const setRoutes = (routes) => {
  if (typeof routes !== "object" || routes === null) {
    throw new Error("param routes is not an object");
  }

  ROUTES = routes;
};

const queryStringToObject = (queryString) =>
  Object.fromEntries(new URLSearchParams(queryString));

const renderView = (pathname, props) => {
  const view = ROUTES[pathname] || NotFound;
  rootEl.innerHTML = "";
  rootEl.append(view(props));
};

export const navigateTo = (pathname, props) => {
  console.log(props);
  window.history.pushState(props, "", pathname);

  renderView(pathname, props);
};

export const onURLChange = (location, props = {}) => {
  const pathname = location.pathname;
  const params = { ...props, ...queryStringToObject(location.search) };
  console.log(location.pathname, params, "urlChange");
  renderView(pathname, params);
};
