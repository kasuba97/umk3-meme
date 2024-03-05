import { Router } from "express";
import { getMetadata } from "../controllers/metaData";

export const metaDataRouter = Router();

metaDataRouter.get("/token-metadata", getMetadata);
