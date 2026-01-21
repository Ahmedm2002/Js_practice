const brackets = {
  "{": "}",
  "}": "{",
  "(": ")",
  ")": "(",
  "[": "]",
  "]": "[",
};

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    if (!item) return;
    this.items.push(item);
  }
  exists(item) {
    if (!item) return;
    return this.items.includes(item);
  }
  removeElement(item) {
    if (!item) return;
    this.items.splice(this.items.indexOf(item), 1);
  }
}

const str = "()[{}])(";

const stack = new Stack();

for (const bracket of str) {
  const pair = brackets[bracket];
  if (stack.exists(pair)) {
    stack.removeElement(pair);
    continue;
  }
  stack.push(bracket);
}

console.log("Stack Status: ", stack);
