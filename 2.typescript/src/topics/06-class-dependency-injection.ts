interface User {
  name: string;
  phone: string;
}

interface PersonClases {
  getUser: () => User;
}

interface CompanyClases {
  findById: (name: string, phone: string) => Person | null;
  createUser: (newEmploye: Person) => { id: string; person: Person };
  getAllEmployes: () => User[];
}

class Person implements PersonClases {
  constructor(private name: string, private phone: string) {}
  getUser(): User {
    return {
      name: this.name,
      phone: this.phone,
    };
  }
}

class Company implements CompanyClases {
  private employes: Person[];
  constructor() {
    this.employes = []
  }
  createUser(newEmploye: Person): { id: string; person: Person } {
    this.employes.push(newEmploye);
    return {
      id: this.employes.length.toString(),
      person: newEmploye,
    };
  }
  findById(name: string, phone: string): Person | null {
    const employee =
      this.employes.find(
        (person) =>
          person.getUser().name === name && person.getUser().phone === phone
      ) ?? null;
    return employee;
  }
  getAllEmployes(): User[] {
    return this.employes.map((personClass) => personClass.getUser())
  };
}

const newPerson = new Person("Carlos", "3042240910")
const newPerson2 = new Person("Juan", "3207515166")

const company = new Company()
company.createUser(newPerson);
company.createUser(newPerson2)

console.log(company.getAllEmployes())
console.log(company.findById("Carlosss", "3042240910")?.getUser() ?? "Not found")