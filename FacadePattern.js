class Complaints {
  constructor() {
    this.complaints = [];
  }

  reply(complaint) {}

  add(complaint) {
    this.complaints.push(complaint);
    return this.reply(complaint);
  }
}

class ProductComplaint extends Complaints {
  reply({ id, customer, details }) {
    return `Product: ${id}: ${customer} (${details})`;
  }
}

class ServiseComplaint extends Complaints {
  reply({ id, customer, details }) {
    return `Servise: ${id}: ${customer} (${details})`;
  }
}

class ComplainRegistry {
  register(customer, type, details) {
    const id = Date.now();
    let complaint;

    if (type === "servise") {
      complaint = new ServiseComplaint();
    } else {
      complaint = new ProductComplaint();
    }

    return complaint.add({ id, customer, details });
  }
}

const registry = new ComplainRegistry();
console.log(registry.register("Michael", "servise", "error on mane page")); // Servise: 1669726444695: Michael (error on mane page)
console.log(registry.register("John", "product", "do not work")); // Product: 1669726444697: John (do not work)
