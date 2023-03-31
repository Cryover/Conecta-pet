import express from "express";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", getUsers);

export default router;
