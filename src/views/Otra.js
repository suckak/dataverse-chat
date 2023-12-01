const Otra = (props) => {
  console.log(props);
  const container = document.createElement("div");
  const title = document.createElement("h1");

  title.innerHTML = "Otra";

  container.append(title);
  return container;
};

export default Otra;
