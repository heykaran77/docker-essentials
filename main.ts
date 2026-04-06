import express from "express";

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Hello from docker 🐳!",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
