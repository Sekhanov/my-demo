import Person from "../data/Person";

export const persons: Person[] = [
    new Person("ivan", "petrov", 10),
    new Person('peter', 'ivanov', 20),
    new Person('Sergey', 'KHanov', 3)
];

export const mockStoreData = {
    persons: [
      {
        name: 'ivan',
        surname: 'petrov',
        age: 10
      },
      {
        name: 'peter',
        surname: 'ivanov',
        age: 20
      },
      {
        name: 'Sergey',
        surname: 'KHanov',
        age: 3
      }
    ]
  }