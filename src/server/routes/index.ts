import { Router } from "express";
import { StatusCodes } from 'http-status-codes'
import { CidadesController } from './../controller/'

const router = Router();

router.get("/", (_, res) => {
  return res.send("Olá Dev");
});

router.post("/cidades", CidadesController.create);

export { router };
