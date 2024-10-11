import { Request, Response } from "express";

import { PetsService } from "../services/petsService";

const service = new PetsService();

export const listPets = async (req: Request, res: Response) => {
  res.status(200).json(await service.fetchPets());
};

export const createPets = async (req: Request, res: Response) => {
  const result = await service.createPets(req.body);
  res.status(201).json(result);
};

export const getPetById = async (req: Request, res: Response) => {
  const petId = parseInt(req.params.petId);
  const pet = await service.getPets(petId);
  res.status(200).json(pet);
};

export const updatePetById = async (req: Request, res: Response) => {
  const petId = parseInt(req.params.petId);
  await service.updatePets(petId, req.body);
  res.status(204).send();
};

export const deletePetById = async (req: Request, res: Response) => {
  const petId = parseInt(req.params.petId);
  await service.deletePets(petId);
  res.status(204).send();
};
