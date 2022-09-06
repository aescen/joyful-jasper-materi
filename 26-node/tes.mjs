import { setTimeout } from "timers/promises";

const res = await setTimeout(3000, "result");
console.log(res);
