class Account {
  pay(orderPrice) {
    if (this.canPay(orderPrice)) {
      console.log(`Paid ${orderPrice} using ${this.name}`);
    } else if (this.incomer) {
      console.log(`Cannot pay using ${this.name}`);
      this.incomer.pay(orderPrice);
    } else {
      console.log("Unfortunately, not enough money");
    }
  }
  canPay(amount) {
    return this.balance >= amount;
  }
  setNext(account) {
    this.incomer = account;
  }
}

class MasterCard extends Account {
  constructor(balance) {
    super();
    this.name = "Master Card";
    this.balance = balance;
  }
}

class Paypal extends Account {
  constructor(balance) {
    super();
    this.name = "Paypal";
    this.balance = balance;
  }
}

class Qiwi extends Account {
  constructor(balance) {
    super();
    this.name = "Qiwi";
    this.balance = balance;
  }
}

const masterCard = new MasterCard(100);
const paypal = new Paypal(200);
const qiwi = new Qiwi(500);

// Define chain (создаем цепочку преемников)
masterCard.setNext(paypal);
paypal.setNext(qiwi);

masterCard.pay(438);
/* 
Cannot pay using Master Card
Cannot pay using Paypal
Paid 438 using Qiwi
 */
