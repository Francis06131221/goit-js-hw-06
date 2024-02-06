const ulCategories = document.getElementById('categories');
const liItems = ulCategories.querySelectorAll('li.item');
console.log(`Number of Categories: ${liItems.length}`);
liItems.forEach(item => {
    const h2Header = item.querySelector('h2').textContent;
    const liItems = item.querySelectorAll('ul > li').length;
    console.log(`Category: ${h2Header}`);
    console.log(`Number of Elements: ${liItems}`);
});