const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsItems = ingredients.map((item) => {
  let items = document.createElement("li");
  items.textContent = item;
  return items;
});
const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...ingredientsItems);
