const express = require("express");
const products = require("./routes/products");
const plugins = require("./plugins");

const app = express();
app.use(products);
plugins(app);

app.get("/health", (req, res) => res.send("ok"));

app.listen(process.env.PORT || 3000);
