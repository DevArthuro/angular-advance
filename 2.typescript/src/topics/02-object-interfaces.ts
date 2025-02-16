// this array only allow the types string
const skills: string[] = ["Carlos", "Arturo"];

// This caught error because only allow the strings
// skills.push(3)

// This allow string
skills.push("Orrego");

interface CUSTOMER {
  name: string;
  email: string;
  phoneNumber: string | number;
  isActive?: boolean; // it can be inside the object or just not define
}

const person: CUSTOMER = {
  email: "carlosorrego5151@gmail.com",
  name: "Carlos Orrego",
  phoneNumber: 3207515166,
};

person.isActive = true;
person.phoneNumber = "3042240910";

const people: CUSTOMER[] = [];

// Can push the interface already build or build in proccess
people.push(person, {
  email: "dora@gmail.com",
  name: "Dora",
  phoneNumber: "3142158642",
});

console.log(people)