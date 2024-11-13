var Color = /* @__PURE__ */ ((Color2) => {
  Color2[Color2["red"] = 1] = "red";
  Color2[Color2["green"] = 2] = "green";
  Color2[Color2["blue"] = 3] = "blue";
  return Color2;
})(Color || {});
async function main() {
  const { sayHello } = await import("./common.js");
  sayHello();
}
main();
