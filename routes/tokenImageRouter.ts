import { Router } from "express";
import { getTokenImage } from "../controllers/tokenImage";

export const tokenImageRouter = Router();

tokenImageRouter.get("/token-logo", getTokenImage);
