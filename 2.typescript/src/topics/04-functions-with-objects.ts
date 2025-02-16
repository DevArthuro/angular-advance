interface CHARACTER {
  id: string;
  name: string;
  age: number;
  hpPoints: number;
  increasePoints: () => void;
  decreasePoints: () => void;
}

type CHARACTER_REGISTER = Pick<CHARACTER, "name" | "age">

const clientsRegistered: CHARACTER[] = [];

const registerCharacter = (character: CHARACTER_REGISTER): CHARACTER => {
  const id = clientsRegistered.length + 1
  const characterBuild: CHARACTER = {
    ...character,
    hpPoints: 0,
    increasePoints(){
      this.hpPoints += 1;
    },
    decreasePoints(){
      this.hpPoints += 1;
    },
    id: String(id)
  };
  clientsRegistered.push(characterBuild);
  return characterBuild;
};

const deleteCharacter = (character: CHARACTER): CHARACTER => {
  const { id } = character;
  clientsRegistered.filter((characterValue) => characterValue.id !== id);
  return character;
};

const getCharacter = ({ id }: Pick<CHARACTER, "id">): CHARACTER | null => {
  const findCharacter = clientsRegistered.find((characterValue) => characterValue.id === id);
  if (!findCharacter) return null
  return findCharacter
}

const person = registerCharacter({age: 18, name: "Carlos Orrego"})
console.log(person)
person.increasePoints()
person.increasePoints();
person.increasePoints();
person.increasePoints();
person.increasePoints();
console.log(person);
