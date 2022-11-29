class AutoNews {
  constructor() {
    this.news = "";
    this.actions = [];
  }

  setNews(text) {
    this.news = text;
    this.notifyAll();
  }

  notifyAll() {
    return this.actions.forEach((subs) => subs.inform(this));
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions = this.actions.filter((el) => !(el instanceof observer));
  }
}

class Jack {
  inform(message) {
    console.log(`Jack has been informed about: ${message.news}`);
  }
}

class Max {
  inform(message) {
    console.log(`Max has been informed about: ${message.news}`);
  }
}

const autonews = new AutoNews();

autonews.register(new Jack());
autonews.register(new Max());
autonews.setNews("New Tesla prise is 100000$");

// Jack has been informed about: New Tesla prise is 100000$
// Max has been informed about: New Tesla prise is 100000$
