import express from "express";

let app = express();

app.get("/", (req, res) => {
  res.json({
    message: "healthy",
    success: true,
  });
});

export default app;
