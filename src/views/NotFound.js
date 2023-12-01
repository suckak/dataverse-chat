const NotFound = () => {
  const container = document.createElement("div");
  const title = document.createElement("h1");

  title.innerHTML = "404 :/";

  container.append(title);
  return container;
};

export default NotFound;
