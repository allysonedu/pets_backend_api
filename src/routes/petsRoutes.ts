import { Router } from "express";
import {
  listPets,
  createPets,
  deletePetById,
  updatePetById,
  getPetById,
} from "../controllers/petsController";

const petsRouter = Router();

petsRouter.get("/pets", listPets);

petsRouter.post("/pets", createPets);

petsRouter.delete("/pets/petId(\\d+)", deletePetById);

petsRouter.put("/pets/petId(\\d+)", updatePetById);

petsRouter.get("/pets/petId(\\d+)", getPetById);

export default petsRouter;
