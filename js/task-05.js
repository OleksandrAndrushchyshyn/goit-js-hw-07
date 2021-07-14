const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const onUserName = (event) => {
  console.log(event.currentTarget.value);
  outputName.textContent = event.currentTarget.value;
};
inputName.addEventListener("input", onUserName);
