// import data fruits
const fruits = require("./fruits.js");

// membuat fungsi index
const index = () => {
    for (const fruit of fruits){
        console.log(fruit);
    }
};

// membuat fungsi store
const store = (name) => {
    fruits.push(name);
    index();
};

// membuat fungsi update
const update = (position, name) => {
    fruits[position] = name;
    console.log(`Method update - Update data ${position} menjadi ${name}`);
    index();
};

// membuat fungsi destroy
const destroy = (position) => {
    const value = fruits.indexOf(fruits[position]);
    if (value > 1){
        fruits.splice(value, 1);
    }
    console.log(`Method detroy - Menghapus data ${position}`);
    index();
};


// exports method index dan store
module.exports = {index, store, update, destroy};