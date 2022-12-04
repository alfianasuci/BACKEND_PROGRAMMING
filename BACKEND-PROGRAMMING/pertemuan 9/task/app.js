// import FruitController
// melakukan destructing

const {index, store, update, destroy} = require("./fruitController.js");

const main = () => {
    console.log(`Method index - menampilkan buah`);
    index();
    console.log("");
    store("Melon");
    console.log("");
    update(2, "Nanas");
    console.log("");
    destroy(4);
};

main();