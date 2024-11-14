console.log("main");

async function main() {
    (await import("./common")).sayHello();
}

main();
