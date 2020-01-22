## Syntax parser:
- Program that reads your code and decides what needs to be done if its Syntax is valid by rading charecter by charecter
- Before running through the compiler, syntax parser will interpretes and validates the code

## lexical environment: {need to study more}
- Where sometyhing sits physically in the code you write

#Execution context:
- A wrappeer to help manage the code that is running
- There are lots of lexical environments. Which one is currently running is managed via execution contexts. It can contain things beyond what you have written in your code

# Objects:
- Object is a name/value pair
- Name which maps to unique value
- Value may be more name/value pair

## Global environmenta and the global Object
- More than one execution contexts will run at a time, base execution context will be base.
- javascript engine will creates Global Object and this once the js starts execution
- In node.js we won't get window as global object, that will be different

## Global:
- Not inside a function
- Global variables and functions get attached to global object window.


## The execution context: creation and hoisting:
- Variables and functions are moved physically to the top (not correct)
- Execution context will be created in 2 phases
   * Creation phase: Global object and this will be set upped in memory, outer environment will be sets up. also sets up memory space for variables and functions it is called hoisting
   - note that full function will be moved and in case of variable, it moves and sets up

* Uncaught reference error: I don't have variable in my memory

----------------

 Data Structure:
 - Brakikg into smaller problems and joining together to get the result.
 - Factorial: 
    function fact (n){
        if (n===0){
        return 1;
        }
        else
        return n*fact(n-1);
    }

- print 321123
function fun(n){
    if(n<1)
        return;
    else {
        console.log(n);
        fun(n-1);
        console.log(n);
    }
}

- print 54321 i/p: 5
function fun1(n){
    if(n === 0){
        return;
    }else{
        console.log(n);
        fun1(n-1)
    }
}

------------------------------------------------------------------------------

## Data Types
Primitive data types:
- Number
- String
- Boolean
- Undefined
- Null
- Symbols

Non-Primitive data types:
- Object
- Array

## Throtling and debounce
// debounce (check it)
Example: search bar in flipkart, which will hit backend if we give some space while typing
const getData = ()=>{
    console.log('hitting network')
}

const dosomething = function(fn, d){
    let timer;
    return function(){
        clearInterval(timer);
        timer = setInterval(()=>{
            fn();
        }, d);
    }
}

const betterFunction = dosomething(getData, 300);

// Throttle
Example: If button clicks repeatedly, trigger after some ineterval
    const throttle = (fn, limit)=>{
        let flag = true;
        return function(){
            let context = this;
            let args = arguments;

            if(flag){
                fn.apply(context, args);
                flag= false;
                setTimeout(()=>{
                    flag = true;
                }, limit);
            }

        }
    }

## Polyfill for bind
- Polyfill is a browser fallback

let name = {
    firstName : "Sreeketh",
    lastName : 'k',
    some: 'some'
}

let printName = function(){
    console.log(this.firstName+' '+this.lastName+' '+this.some)
}

let printMyName = printName.bind(name);

printMyName();

console.log('----')

Function.prototype.myBind = function(...args){
    let obj = this;
    return function(...args2){
      obj.apply(args[0], [...args.splice(0,1), ...args2])
    }
}

let printMyName2 = printName.myBind(name);

printMyName2();

## Function currying
- Setting parameter value fixed.

- Using bind:
let multiply = function(x, y){
  console.log(x*y);
}

let multyplytwo = multiply.bind(this, 2);
multyplytwo(5)

let multyplyThree = multiply.bind(this, 3);
multyplyThree(5)

- Using closure:

let multiply = function(x, y){
  console.log(x*y);
}

function createCurry(x){

    return function(y){multiply(x, y)};
}

## sum(1)(2)(3)(4)(5)

var result = 0;

function sum(param){

if(param){
result += param;
    return sum;
}
return result;

}

OR

let sum = a=> b=> b?sum(a+b): a; // It works!

## Async and Defer

- By default:
1. HTML parsing will start
2. Once it fids script, it pauses html parsing and starts script loading and executes scripts
3. After executing js, resumes HTML parsing

- If we use async tag:
1. HTML parsing will start
2. Parallally loads javascript when it finds script tag.
3. Once javascript loads to dom, it pauses HTML parsing and starts executing js
4. After executing js, resumes HTML parsing
note: it doesn't guarantee the execution order, for google analytics we can use it.

- If we use defer:
1. HTML parser will start
2. loads js once it finds script tag, it doesn't stops HTML parsing till it complete
3. executes javascript
note: it guarantee the execution order


## EVENT BUBLING, CAPTURING OR trickling

## Event deligation
// event.target to get clicked element

## flattening object

## Search and sort

- Quick Sort:
function quicksort(arr =[]){
    if(!arr.length){
       return arr;
    }
    const [pivot, ...rest] = arr;
    const left = [];
    const right = [];

    rest.forEach(el => el<pivot? left.push(el): right.push(el));
    return quicksort(left).concat(pivot).concat(quicksort(right));

}




------------
## CSS positions:
- default position is static
- relative: almost same as static only thing is we can change  the top, right, bottom and left i.e, it moves out of the   document flow
- absolute: absolute is relative to the relative position

------------

## Binary search tree

class bst3{

    constructor() {
        this.root = null;
    }

    insertNumberNode(value, left = null, right = null) {

        let node = {
            value,
            left,
            right
        };

        if (this.root === null) {
            this.root = node;
        } else {
            let currentNode = this.root;

            while (currentNode.value) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    } else {
                        currentNode = currentNode.left;
                    }

                } else if (value > currentNode.value) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    } else {
                        currentNode = currentNode.right;
                    }

                } else {
                    console.log('same value can\'t be inserted');
                    break;
                }
            }

        }

    }

}

// running

var tree = new bst();
tree.insertNumberNode(5);
tree.insertNumberNode(6);
...

-----------

