import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  res.status(201).send("Hello World");
});

export default router;
