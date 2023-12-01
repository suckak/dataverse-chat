import { navigateTo } from "../router.js";

const Home = () => {
  const container = document.createElement("div");

  const title = document.createElement("h1");
  title.innerHTML = "HOME";

  const button = document.createElement("button");
  button.innerHTML = "Go!";
  button.addEventListener("click", () => {
    navigateTo("/detail?otra=cosa", { test: "text" });
  });

  container.append(title, button);
  return container;
};

export default Home;
