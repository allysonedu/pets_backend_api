export class PetsService {
  async fetchPets() {
    console.log();
  }

  async getPets(id = null) {
    console.log(id);
  }

  async createPets(pet = null) {
    console.log(pet);
  }

  async updatePets(id = null, pet = null) {
    console.log(id, pet);
  }

  async deletePets(id = null) {
    console.log(id);
  }
}
