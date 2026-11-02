const express = require("express");
const products = require("./routes/products");

const app = express();
app.use(products);

app.get("/health", (req, res) => res.send("ok"));

app.listen(process.env.PORT || 3000);
