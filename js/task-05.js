const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
const initalName = outputName.textContent;
const onUserName = (event) => {
  if (event.currentTarget.value === "") {
    outputName.textContent = initalName;
  } else {
    outputName.textContent = event.currentTarget.value;
  }
};
inputName.addEventListener("input", onUserName);
