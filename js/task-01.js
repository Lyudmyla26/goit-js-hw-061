const ul = document.querySelector("#categories");
const item = ul.children.length;
console.log(`Number of categories: ${item}`);
const title = document.querySelectorAll("h2");
title.forEach((item) => {
  console.log("Category:", item.textContent);
  console.log("Elements:", item.nextElementSibling.children.length);
});
