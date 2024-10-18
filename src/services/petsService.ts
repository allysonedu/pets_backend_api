import Pet from "../models/pet";

import { NotFoundError } from "../models/exceptions";

// quando colocar export default eu ultilizo assim: import Pet from "../models/pet", sem as chaves.
// quando colocar só export eu ultilizo assim: import {Pet} from "../models/pet", com as chaves.

// passo 3
const notFound = new NotFoundError("Pet Not Found");

export class PetsService {
  async fetchPets(): Promise<Pet[]> {
    return await Pet.findAll();
  }

  async getPets(id: number): Promise<Pet | undefined> {
    const petOne = await Pet.findByPk(id);
    if (petOne === null) throw notFound;
    return petOne;
  }

  async createPets(pet: Pet): Promise<Pet> {
    const createdPet = await Pet.create({ ...pet });
    return createdPet;
  }

  async updatePets(id: number, pet: Pet): Promise<void> {
    const dontExists = (await Pet.findByPk(id)) === null;
    if (dontExists) throw notFound;
    await Pet.update({ ...pet }, { where: { id } });
  }

  async deletePets(id: number): Promise<void> {
    const dontExists = (await Pet.findByPk(id)) === null;
    if (dontExists) throw notFound;
    await Pet.destroy({ where: { id } });
  }
}
