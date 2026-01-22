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
    this.items.push(item);
  }
  pop() {
    this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
}

const str = "{[()]}";
const stack = new Stack();

for (const bracket of str) {
  const pair = brackets[bracket];
  if (stack.peek() == pair) {
    stack.pop();
    continue;
  }
  stack.push(bracket);
}

console.log(stack.items);
