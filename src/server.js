require("dotenv").config();
const app = require("./app");
const express = require("express");
const connectDB = require("./config/db");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/trips", require("./routes/tripRoutes"));

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
