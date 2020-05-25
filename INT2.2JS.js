var vegs = ["apple","banana","kiwi"];
vegs.push ("orange");
console.log(vegs);
console.log(vegs.slice(0, 3));

var ani = ["monkey","horse","dog"];
console.log(ani.sort());
ani.unshift ("cat");

var string = ("mango/cherries/kiwi/grapes/pear/peach/orange/lemon");
var y = new Array();
y = string.split("/");
document.write (y.join("<br />"));
console.log (y.join("\n"))