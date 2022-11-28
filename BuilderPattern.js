// JS Example 1

class Adress {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }

  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }

  setAdress(adress) {
    this.user.adress = adress;
    return this;
  }

  build() {
    return this.user;
  }
}

let builder = new UserBuilder("Mike").setAge(19).setPhone("2345324").build();
console.log(builder);

// JS Example 2

class Adress {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, { age, phone, adress } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.adress = adress;
  }
}

let user = new User("Mike", { age: 19, adress: new Adress(1, "Wall Street") });
console.log(user);
