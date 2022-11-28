/*
The idea of the command pattern is to take the different operations that you want something to do and encapsulate them
into individual cammand that have a perform and then an undo method.
*/

class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    this.value = command.undo(this.value);
  }
}

class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }

  execute(currentValue) {
    return currentValue + this.valueToAdd;
  }

  undo(currentValue) {
    return currentValue - this.valueToAdd;
  }
}

class SubstractCommand {
  constructor(valueToSubstract) {
    this.valueToSubstract = valueToSubstract;
  }

  execute(currentValue) {
    return currentValue - this.valueToSubstract;
  }

  undo(currentValue) {
    return currentValue + this.valueToSubstract;
  }
}

class MultiplyCommand {
  constructor(valueToMultiply) {
    this.valueToMultiply = valueToMultiply;
  }

  execute(currentValue) {
    return currentValue * this.valueToMultiply;
  }

  undo(currentValue) {
    return currentValue / this.valueToMultiply;
  }
}

class DevideCommand {
  constructor(valueToDevide) {
    this.valueToDevide = valueToDevide;
  }

  execute(currentValue) {
    return currentValue / this.valueToDevide;
  }

  undo(currentValue) {
    return currentValue * this.valueToDevide;
  }
}

const calculator = new Calculator();
calculator.value = 10;
calculator.executeCommand(new DevideCommand(2));
console.log(calculator.value); // 5
calculator.undo();
console.log(calculator.value); // 10
