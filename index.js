const express = require('express')
const blog = require("./routes/blog")
const ecommerce = require("./routes/ecommerce")
const app = express();
const PORT = 3000;

app.use(express.json())

// app.get("/", (req, res) => {
//     res.send("hello")
// })
// console.log("hello");
app.use("/", ecommerce);
app.use("/", blog);
app.listen(PORT, () => {
    console.log("running http://localhost:3000");
})
