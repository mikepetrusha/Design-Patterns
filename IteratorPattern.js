class Iterator {
  constructor(el) {
    this.index = 0;
    this.keys = Object.keys(el);
    this.elements = el;
  }

  next() {
    return this.elements[this.keys[this.index++]];
  }

  hasNext() {
    return this.index < this.keys.length;
  }
}

const autos = {
  audi: { model: "Q7", color: "brown", price: "20000" },
  bmw: { model: "X6", color: "black", price: "25000" },
  tesla: { model: "S", color: "red", price: "40000" },
};

const collection = new Iterator(autos);

while (collection.hasNext()) {
  console.log(collection.next());
}
// { model: 'Q7', color: 'brown', price: '20000' }
// { model: 'X6', color: 'black', price: '25000' }
// { model: 'S', color: 'red', price: '40000' }
