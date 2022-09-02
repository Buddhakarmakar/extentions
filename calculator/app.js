console.log("I am a Calculator");

const PI = Math.PI;

const fact = (num) => {
  let arr = [];
  arr[0] = 1;
  for (let i = 1; i <= num; i++) {
    arr[i] = arr[i - 1] * i;
  }
  // console.log(arr)
  return arr[num];
};

const pow = (x, y) => {
  return Math.pow(x, y);
};

const sqrt = (num) => {
  return Math.sqrt(num);
};
const cbrt = (num) => {
  return Math.cbrt(num);
};
const square = (num) => {
  return Math.pow(num, 2);
};

const add = (expr) => {
  evaluateExpr(expr);
};
const sub = (expr) => {
  evaluateExpr(expr);
};
const mul = (expr) => {
  evaluateExpr(expr);
};
const divide = (expr) => {
  evaluateExpr(expr);
};
const sin = (deg) => {
  return Math.sin(deg);
};

const cos = (deg) => {
  return Math.cos(deg);
};

const tan = (deg) => {
  return Math.tan(deg);
};

const cot = (deg) => {
  return Math.cot(deg);
};

const sec = (deg) => {
  return Math.sec(deg);
};

const cosec = (deg) => {
  return Math.cosec(deg);
};

const sinh = (deg) => {
  return Math.sinh(deg);
};

const cosh = (deg) => {
  return Math.cosh(deg);
};

const tanh = (deg) => {
  return Math.tanh(deg);
};

const coth = (deg) => {
  return Math.coth(deg);
};

const sech = (deg) => {
  return Math.sech(deg);
};

const cosech = (deg) => {
  return Math.cosech(deg);
};

const npr = (n, r) => {
  return fact(n) / fact(n - r);
};
const ncr = (n, r) => {
  return fact(n) / (fact(r) * fact(n - r));
};
const abs = (num) => {
  return abs(num);
};
const rev = (num) => {
  if (num < 0) {
    return Math.abs(num);
  } else {
    return -num;
  }
};

const log10 = (num) => {
  return Math.log10(num);
};
const log2 = (num) => {
  return Math.log2(num);
};
const loge = () => {
  return Math.LOG10E;
};
const evalExpr = (expr) => {
  return eval(expr);
};

