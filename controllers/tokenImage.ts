import { Request, Response } from "express";

export function getTokenImage(req: Request, res: Response): void {
  const imageUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/umk/token-logo/umk.png`;
  res.json({ imageUrl });
}
