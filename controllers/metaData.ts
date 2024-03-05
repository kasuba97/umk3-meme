import { Request, Response } from "express";
import { getTokenImage } from "./tokenImage";

export function getMetadata(req: Request, res: Response): void {
  try {
    res.json({
      name: "MK3 Gladiators Voting Token",
      symbol: "$M3GVT",
      description:
        "MK3 Gladiators Voting Token (M3GVT) is a unique utility token built on the Solana blockchain, designed to empower the community in determining the outcome of thrilling battles featuring the legendary MK3 characters. Embrace the nostalgia of the MK3 era and become an active participant in the gaming experience.",
      imageUrl: `${req.protocol}://${req.get(
        "host"
      )}/api/umk/token-logo/umk.png`,
    });
  } catch (err) {
    res.status(500).json({
      error: "Error fetching metadata",
    });
  }
}
