import { Request, Response } from "express";

export function getTokenImage(req: Request, res: Response): void {
  // const imageUrl = `${req.protocol}://${req.get(
  //   "host"
  // )}/api/umk/token-logo/umk.png`;
  res.json({
    imageUrl:
      "https://bafkreiclbt2dikewxhfnsrezynavdye42nv7nwt3mxdw4vhx7tfdhgz4hi.ipfs.nftstorage.link/",
  });
}
