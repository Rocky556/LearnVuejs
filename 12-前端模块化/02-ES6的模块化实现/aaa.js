let name = 'xiaoming';
let age = 18;
let flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

if (flag) {
  console.log(sum(20, 30));
}

// 1. 导出方式1
export {
  flag,
  sum
}

// 2. 导出方式2
export let num1 = 1000;
export let height = 1.88;

// 3. 导出函数/类
export function mul(num1, num2) {
  return num1 * num2
}

export class Person {
  run() {
    console.log('在奔跑');
  }
}

// 5. export default 编写者不命名，让导入者自己命名

// const address='北京市';
// export {
//   address
// }

// export const address = '北京市'

// const address = '北京市';

// //默认(default)只能有一个
// export default address;

export default function (argument) {
  console.log(argument);
}