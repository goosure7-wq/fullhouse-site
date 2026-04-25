const fs = require('fs');
const vm = require('vm');

let dc = fs.readFileSync('c:/Users/Dell/Desktop/New folder/DivineCure/products.js', 'utf8');
let pill = fs.readFileSync('c:/Users/Dell/Desktop/New folder/pill/products.js', 'utf8');

const dcCtx = { window: {}, localStorage: {}, document: { querySelectorAll: () => [] } };
// Mock the document/localStorage as they might be used in the classes below the products array
const dcScript = dc + '\n var dcProducts = products;';
try {
    vm.runInNewContext(dcScript, dcCtx);
} catch (e) {
    console.log("Error evaluating DC:", e);
}

const pillCtx = { window: {}, localStorage: {}, document: { querySelectorAll: () => [] } };
const pillScript = pill + '\n var pillProducts = products;';
try {
    vm.runInNewContext(pillScript, pillCtx);
} catch (e) {
    console.log("Error evaluating Pill:", e);
}

const dcProducts = dcCtx.dcProducts || [];
const pillProducts = pillCtx.pillProducts || [];

console.log("DC Products:", dcProducts.length);
console.log("Pill Products:", pillProducts.length);

dcProducts.forEach(p => {
    const pillP = pillProducts.find(pp => pp.title === p.title) || pillProducts.find(pp => pp.id === p.id);
    if (pillP) {
        if (pillP.subtitle) p.subtitle = pillP.subtitle;
        if (pillP.description) p.description = pillP.description;
        if (pillP.oldPrice) p.oldPrice = pillP.oldPrice;
        if (pillP.image && pillP.image !== 'product.webp') p.image = pillP.image;
        if (pillP.hasDiscount !== undefined) p.hasDiscount = pillP.hasDiscount;
    }
});

let newArrayStr = JSON.stringify(dcProducts, null, 4);

// The original file format has lines like: { id: 1, ... }
// We'll just write it as formatted JSON array.
let newDc = dc.replace(/const products = \[[\s\S]*?\];/, `const products = ${newArrayStr};`);

if (!newDc.includes('getCategoryIcon')) {
    newDc = newDc.replace('// Helper to format currency', `function getCategoryIcon(category) {
    const icons = {
        "Erectile Dysfunction": "fa-heart-pulse",
        "Premature Ejaculation": "fa-stopwatch",
        "Hair Loss": "fa-scissors",
        "Narcolepsy": "fa-bed",
        "Abortion": "fa-hospital-user",
        "Uncategorized": "fa-pills"
    };
    return icons[category] || "fa-pills";
}

function getCategoryIconHtml(category) {
    return \`<i class="fa-solid \${getCategoryIcon(category)}"></i>\`;
}

// Helper to format currency`);
}

fs.writeFileSync('c:/Users/Dell/Desktop/New folder/DivineCure/products.js', newDc, 'utf8');
console.log("Merge complete.");
