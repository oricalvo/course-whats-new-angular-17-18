// import {sayHello} from './common.js';

enum Color {
    red = 1,
    green = 2,
    blue = 3,
}

async function main() {
    // sayHello();

    // console.log(Color["red"]);

    const {sayHello} = await import("./common.js");
    sayHello();
}

main();
