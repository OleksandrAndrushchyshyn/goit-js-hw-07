const inputControl = document.querySelector("#font-size-control");
const spanControl = document.querySelector("#text");
const onInputChange = () => {
  spanControl.style.fontSize = inputControl.value + "px";
};
inputControl.addEventListener("input", onInputChange);
