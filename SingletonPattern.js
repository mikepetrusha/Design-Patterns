class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instanse;
    }
    Database.instanse = this;
    Database.exists = true;
    this.data = data;
  }
  getData() {
    return this.data;
  }
}

const mongoDB = new Database("MongoDB");
console.log(mongoDB.getData()); // MongoDB
const sql = new Database("SQL");
console.log(sql.getData()); // MongoDB
