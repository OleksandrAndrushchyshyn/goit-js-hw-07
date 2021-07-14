const inputContent = document.querySelector("#validation-input");
const onInputContent = () => {
  if (+inputContent.dataset.length === inputContent.value.length) {
    inputContent.classList.remove("invalid");
    inputContent.classList.add("valid");
  } else {
    inputContent.classList.remove("valid");
    inputContent.classList.add("invalid");
  }
};
inputContent.addEventListener("blur", onInputContent);
