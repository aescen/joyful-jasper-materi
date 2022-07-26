// buat sebuah file joyfull.txt
// isi tulisannya "Coding bootcamp joyfull jasper"

// module FS
const fs = require("fs");
// const data = fs.readFileSync(
//   "/Users/thoriqnurfaizal/Desktop/JoyfullJasper/materi/26-node/index.js",
//   { encoding: "utf8", flag: "r" }
// );
// console.log(data);
let data = "Coding bootcamp joyfull jasper";

fs.writeFile("joyfull.txt", data, (err) => {
  if (err) {
    console.log("gagal");
  } else {
    console.log("berhasil membuat file");
    console.log(fs.readFileSync("joyfull.txt", { encoding: "utf8" }));
  }
});

fs.appendFile("joyfull.txt", "data to append", (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});

let path =
  "/Users/thoriqnurfaizal/Desktop/JoyfullJasper/materi/26-node/joyfull.txt";
fs.unlinkSync(path);

// fs.writeFile("joyfull.txt", "data baru", (err) => {
//   if (err) {
//     console.log("gagal");
//   } else {
//     console.log("berhasil membuat file");
//     console.log(fs.readFileSync("joyfull.txt", { encoding: "utf8" }));
//   }
// });

// module events
// const EventEmitter = require("events");

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on("event", () => {
//   console.log("an event occurred!");
// });
// myEmitter.emit("event");

// module util
// const util = require("util");
// const debuglog = util.debuglog("foo");

// console.log(util);
// console.log(debug);
// debuglog("tes debuglog [%d]", 123);

// module OS
// const os = require("os");
// console.log("os", os.platform());
// console.log("os", os.arch());

// module process
// const process = require("process");
// const env = process.env;

// console.log(env);

// non arrow function
// function countLength(num1, num2) {
//   return num1 + num2;
// }
// console.log(countLength(10, 20));

// Arrow function
// const countLength2 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(countLength2(20, 30));

// console.log("cuci piring");
// setTimeout(() => {
//   console.log("cuci baju");
// }, 1000);
// console.log("masak");
