const menu = [
    {
        name: "panakes",
        category: "breakfast",
    },
    {
        name: "burger",
        category: "lunch",
    },
    {
        name: "steak",
        category: "dinner",
    },
    {
        name: "eggs",
        category: "breakfast",
    },
    {
        name: "pasta",
        category: "dinner",
    },
]


// Set only returns unique values as n object
// ...for turining it into the array
const categories = ['all',...new Set(menu.map((item) => item.category))];

console.log(categories);


const result = document.querySelector("#result");
result.innerHTML = categories.map((item) => `<button>${item}</button>`).join("  ")