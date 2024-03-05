import express, { Request } from "express";
import morgan from "morgan";
import cors from "cors";
import { metaDataRouter } from "../routes/metadata";
import { tokenImageRouter } from "../routes/tokenImageRouter";

const app = express();

app.use(morgan(":method :url :status :response-time ms"));

app.use(cors<Request>());
app.use(express.json());

// app.get("/", (req, res) => {
//   return res.status(200).json({
//     uptime: process.uptime(),
//     message: "mmm ok",
//     timestamp: Date.now(),
//   });
// });

app.use("/api/umk/token-logo", express.static("images"));
app.use("/api/umk", metaDataRouter);
app.use("/api/umk", tokenImageRouter);

export default app;
