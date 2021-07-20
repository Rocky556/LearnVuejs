// 1. 导入{}定义的变量
import { flag, sum } from "./aaa.js"

if (flag) {
  console.log('xiaoming is a genius');
  console.log(sum(10, 20));
}

// 2. 直接导入export定义的变量
import { num1, height } from "./aaa.js";

console.log(num1);


// 3. 导入export的function
import { mul, Person } from "./aaa.js";
console.log(mul(30, 50));

const p = new Person();
p.run();


// 4. 导入export default中的内容
// import aaaaaaa from "./aaa.js";
// console.log(aaaaaaa);

import addr from "./aaa.js";
console.log(addr);
addr('hello')

// 5. 统一全部导入
// import { flag, num1, height, Person, mul, sum } from "./aaa.js";
import * as aaa from "./aaa.js"
console.log(aaa.flag);
console.log(aaa.height);