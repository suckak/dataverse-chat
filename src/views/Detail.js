import { navigateTo } from "../router.js";

const Detail = (props) => {
  console.log(props);
  const container = document.createElement("div");
  const title = document.createElement("h1");

  title.innerHTML = "DETAIL " + props.test;

  const button = document.createElement("button");
  button.addEventListener("click", () => {
    navigateTo("/otra");
  });

  container.append(title, button);
  return container;
};

export default Detail;
