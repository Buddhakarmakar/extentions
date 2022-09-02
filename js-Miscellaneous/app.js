var numbers = [1, 2, 3, 4, 5];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (target[prop] != undefined) {
      return target[prop];
    } else {
      return "Value Not found";
    }
  },
  set(target, ind, val) {
    if (typeof val == "number") {
      target[ind] = val;
      return true;
    } else {
      console.log("Type error");
      return false;
    }
  },
});

// console.log(numbers[1])
// console.log(numbers[6])

// // console.log(numbers[12]=13)

// numbers[12]="gut" //type error

// numbers.push(67)
// console.log(numbers)

// console.log(Object.getOwnPropertyNames(numbers))

// console.log(Object.getOwnPropertySymbols(numbers))

// console.log(Object.keys(numbers))
// console.log(Object.values(numbers))

var Person = {
  name: "Buddhadeb",
  age: 23,
  _password: "Buddha",
};

Person = new Proxy(Person, {
  ownKeys(target, val) {
    return Object.keys(target).filter((k) => !k.startsWith("_"));
  },
});

// console.log(Person);

// for (p in Person) {
//   console.log(p);
// }

// console.log(Object.keys(Person));
// console.log(Object.values(Person));

// console.log(Object.getOwnPropertyNames(Person));
// console.log(Object.getOwnPropertySymbols(Person));

let company = {
  // the same object, compressed for brevity
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

const calculateSalary = (departmant) => {
  if (Array.isArray(departmant)) {
    return departmant.reduce((prev, cur) => prev + cur.salary, 0);
  } else {
    var sum = 0;
    for (let i of Object.values(departmant)) {
      sum += calculateSalary(i);
    }
  }
  return sum;
};

var res = calculateSalary(company);
// console.log(res);




/// rest parameter ...

function sum(...num){
    let sum=0
    for (n of num){
        sum+=n
    }
    return sum
}
// console.log(sum(1))
// console.log(sum(1,2,3))
// console.log(sum(1,2,3,4,5,6,7))
// console.log(sum(1,2,3,4,5,6))

//default arguments

function sum(){
    console.log(arguments.length)
    // console.log(arguments[0])
    // console.log(arguments[1])

    // console.log(arguments[2])
    const myFun=()=>{
        console.log(arguments.length)
        console.log(arguments[0])
        
        
    }
    myFun()

}
// sum(1,3,4,5)

//arguments parameter in arrow functions



// sum()


var arr=[1,2,33,45,1,5]

// console.log(...arr)

// console.log(Math.max(...arr))

// var str="Hello"
// // console.log([...str])
// // console.log(Array.from(str))

// const a=0;
// // a=3
// console.log(a)

// let b=1
// b=3
// console.log(b)

function myCounter(){
    let count=0
    return function(){
        // console.log(count)
        return count++
    }
}




///
let counter=myCounter()

// console.log(counter())
// console.log(counter())
// console.log(counter())



// let name="Jhon"

// function sayHi(){
//     let name="Kunal"
//     return function(){
//         console.log("Hi ",name)
//     }
// }
// name="Buddha"
// sayHi()()


//function with clouser

function sum(val1){

    return function(val2){
        return val1 +val2
    }

}
// console.log(sum(10)(2))

// (function() {
//     alert("Parentheses around the function");
//   })();
// (function() {
//     alert("Parentheses around the function");
//   })();
  
//   (function() {
//     console.log("Parentheses around the whole thing");
//   }());
  
//   !function() {
//     console.log("Bitwise NOT operator starts the expression");
//   }();
  
//   +function() {
//     // console.log("Unary plus starts the expression");
//     globalThis.alert("Unary plus starts the expression");

//   }();
// window.alert("HI")



let sayHi=function func(who){
    if(who){
    console.log("Hi ",who)

    }else{
        func("Guest")
    }
}

// sayHi("Buddha")
// sayHi()



// let counter=
function m(a,b){
    let count=0
    return function(){
        // console.log(a,b)
        return count++
    }
}

let myfun=m()
// console.log(myfun())
// console.log(myfun())
// console.log(myfun())

// let mCounter=setTimeout(myfun,1000)
// console.log(mCounter)
// console.log(setTimeout(myfun,1000))
// setTimeout(()=>console.log(m()(2,3)),1000,2,3)
// setTimeout(()=>console.log(myfun()),2000)
// setTimeout(()=>console.log(myfun()),3000)

// function x(first,last){
//     console.log(first,last)
// }

// setTimeout(x,1000,"Budda","Karmakar")
// let l=setInterval(()=>console.log(myfun()),1000)

// setTimeout(()=>{
//     clearTimeout(l)
// },1000*10)


let heavyFun=(val)=>{
    
    if(val==1){
        return val
    }
    return val * heavyFun(val-1)
}

function decorator(func){

    let cache=new Map()

    return function(x){
        if (cache.has(x)){
            return cache.get(x)
        }
        else{
            let result=func(x)
            cache.set(x,result)
            return result
        }
    }
}

heavyFun=decorator(heavyFun)

// console.log(heavyFun(150))
// console.log(heavyFun(100))

// console.log(heavyFun())
// len=9
// i=-1
// i = i ? i < 0 ? Math.max(0, len + i) : i :9
// console.log(i)

function* generator(){
  yield 1
  yield 2
  yield 3
}  

let ge=generator()

// for( item of ge){
//   console.log(item)
// }
// console.log(ge)
// console.log(ge.next().value)
// console.log(ge.next().value)
// console.log(ge.next().value)
// console.log(ge.next())


// let a=10000000
// console.log(a)
// a=1_00_00_000
// console.log(a)
// let a=0b10010101;
// console.log(0b10010101)

// console.log(0o23472)

// console.log(561..toString(2))

// console.log(0.1+0.2)

// console.log(9999999999999999)

// console.log("abc">"Zzz")
// console.log("a">"Z")


// console.log("z".localeCompare("a"))

// console.log("S\u0307")


  
//   console.log(`S\u0310`)

//   console.log([0]===[0])

// let user={name:"Jhon"}
// let ar=[user]

// user=null
// console.log(ar)
// console.log(user)

let d=new Date()

console.log(d)
console.log(Date.now())

// console.log(new Date(2022,0,28,0,0,0,0))
console.log(new Date(2011, 0, 1).getTimezoneOffset())

let start = new Date(); // start measuring time

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // end measuring time

// console.log( `The loop took ${end - start} ms` );

let prom=new Promise((resolve,reject)=>{

  setTimeout(()=>resolve("Successfull"),1000)
  // setTimeout(()=>resolve("Error"),1000)

})

// console.log(prom.then())

// prom.then(v=>{
//   console.log(v)
//   return v
// }).then(v=>{
//   console.log(v)
//   return v
// })

// .catch(e=>{
//   console.log(e)
// })

// var x="Hello";

// var y=x;
// console.log(x,y)
// y="World"
// console.log(x,y)

// let user={
//   name:"Buddha"
// }
// let admin=user;

// console.log(user,admin)
// admin.name="Kunal"
// console.log(user,admin)

// let user={
//   name:"Buddha",
//   age:23
// }
// let abc={}
// for( key in user){
//   // console.log(key)
//   abc[key]=user[key]
// }
// abc.name="Kunal"
// console.log(user,abc)

// let xx=user;
// console.log(user,xx)
// user=null
// console.log(user,xx)

// "use strict";
// function f(){
//   console.log(this)
// }

// // console.log(f())
// f()

function f(){
  console.log(this)
}

function f2(){
  let f1=()=>{
    console.log(this)
  }
  f1()
}

let u={
  name:"Buddha"
}

// u.f=f
// u.f1=f2
// u.f()
// u.f1()

// let symb=Symbol("s")
// let s1=Symbol("s")

// console.log(symb.description)

'use strict'
let dd=Object.getOwnPropertyDescriptor(u,"name")
// console.log(u)
// u.name="Kunal"

console.log(dd)

Object.defineProperty(u,"name",{
  writable: false
})

u.name="manpgal"
dd=Object.getOwnPropertyDescriptor(u,"name")
console.log(u)
console.log(dd)
