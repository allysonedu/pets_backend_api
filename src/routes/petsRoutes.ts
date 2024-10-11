import { Router } from "express";
import {
  listPets,
  createPets,
  // deletePetById,
  // updatePetById,
  // getPetById,
} from "../controllers/petsController";

const petsRouter = Router();

petsRouter.get("/pets", listPets);

petsRouter.post("/pets", createPets);

// petsRouter.delete("/pets/petId", deletePetById);

// petsRouter.put("/pets/petId", updatePetById);

// petsRouter.get("/pets/petId", getPetById);

export default petsRouter;
