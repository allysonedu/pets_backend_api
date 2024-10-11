import { Pet } from "../models/pet";

const pets: Pet[] = [
  {
    id: 1,
    name: "Rex",
    age: 3,
    breed: "Golden Retriever",
    color: "Golden",
    gender: "Male",
  },
  {
    id: 2,
    name: "Buddy",
    age: 4,
    breed: "Labrador Retriever",
    color: "Brown",
    gender: "Male",
  },
];

const notFound = new Error("Pet Not Found");

export class PetsService {
  async fetchPets(): Promise<Pet[]> {
    return pets;
  }

  async getPets(id: number): Promise<Pet | undefined> {
    const pet = pets.find((p) => p.id === id);
    if (pet === null) throw notFound;
    return pet;
  }

  async createPets(pet: Pet): Promise<Pet> {
    pets.push(pet);
    return pet;
  }

  async updatePets(id: number, pet: Pet): Promise<void> {
    const index = pets.findIndex((p) => p.id === id);
    if (index < 0) throw notFound;
    pets[index] = pet;
  }

  async deletePets(id: number): Promise<void> {
    const index = pets.findIndex((p) => p.id === id);
    if (index < 0) throw notFound;
    pets.splice(index, 1);
  }
}
