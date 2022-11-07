const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories:`,numberOfCategories.length)

numberOfCategories.forEach((category) => {
   const totalElementsinCategory = category.querySelector(`h2`)
    console.log(`Category:`,totalElementsinCategory.textContent)
    console.log(`Elements:`,totalElementsinCategory.nextElementSibling.children.length)
    }
);

// const firstElementsLiitem = document.querySelector("li")
// console.log(`Category:`,firstElementsLiitem.firstElementChild.textContent);
// console.log(`Elements:`,firstElementsLiitem.lastElementChild.children.length);

// const nextElementsLiitem = firstElementsLiitem.nextElementSibling;
// console.log(`Category:`,nextElementsLiitem.firstElementChild.textContent);
// console.log(`Elements:`,nextElementsLiitem.lastElementChild.children.length);

// const lastElementsLiitem = nextElementsLiitem.nextElementSibling;
// console.log(`Category:`,lastElementsLiitem.firstElementChild.textContent);
// console.log(`Elements:`,lastElementsLiitem.lastElementChild.children.length);




// const allElementsLiitem = document.querySelector(`ul`);
// console.log(`Category:`,allElementsLiitem.firstElementChild.firstElementChild.textContent);
// console.log(`Elements:`,allElementsLiitem.firstElementChild.lastElementChild.children.length);

// console.log(`Category:`,allElementsLiitem.children[1].firstElementChild.textContent);
// console.log(`Elements:`,allElementsLiitem.children[1].lastElementChild.children.length);

// console.log(`Category:`,allElementsLiitem.lastElementChild.firstElementChild.textContent);
// console.log(`Elements:`,allElementsLiitem.lastElementChild.lastElementChild.children.length);