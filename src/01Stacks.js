/* Stacks! */

// zasobnik

// example knihy poukladane na sebe
// naboje v zasobniku

// funkcie
//pridať prvok (na vrch),
//odobrať prvok (z vrchu),
//pozrieť sa na vrchný prvok.

// functions: push, pop, peek, length

var letters = []; // this is our stack

var word = "freeCodeCamp";

var rword = "";

// put letters of word into stack(array )
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
// vyskoci zo zasobnika v opacnom poradi
for (var j = 0; j < word.length; j++) {
  rword += letters.pop();
}

console.log(rword);

if (rword === word) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palindrome.");
}

// Creates a stack
var Stack = function() {
  this.count = 0;
  this.storage = {};

  // Adds a value onto the end of the stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and returns the value at the end of the stack
  this.pop = function() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function() {
    return this.count;
  };

  // Returns the value at the end of the stack
  this.peek = function() {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
