const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientItems = document.querySelector(`#ingredients`)

for(const ingredient of ingredients) {
  const ingredientEl = document.createElement(`li`);
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add(`item`);
  ingredientItems.append(ingredientEl);
}

