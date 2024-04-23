import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { Candidates } from "./models/Candidate";

const app = express();

const router = express.Router();

router.get("/", (req, res) => res.json({ hello: "Hello, World" }));
app.use(router);

router.get('/candidates', async (req, res) => {
    const candidates = await Candidates.findAll()
    return res.json(candidates)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App Start in PORT:${PORT}`);
  console.log(`Access: http://localhost:3000/`);
});
