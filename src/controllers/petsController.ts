import { Request, Response } from "express";

import { PetsService } from "../services/petsService";

const service = new PetsService();

export const listPets = (req: Request, res: Response) => {
  res.status(200).json(service.fetchPets());
};

export const createPets = async (req: Request, res: Response) => {
  const result = await service.createPets(req.body);
  res.status(201).json(result);
};

// export const getPetById = (req: Request, res: Response) => {
//   console.log("getPetById");
// };

// export const updatePetById = (req: Request, res: Response) => {
//   console.log("updatePetById");
// };

// export const deletePetById = (req: Request, res: Response) => {
//   console.log("deletePetById");
// };
