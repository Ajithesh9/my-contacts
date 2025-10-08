const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json()); //data parser

app.use("/api/contacts",require ("./routes/contactRoutes"));
//redirects /api/contacts to contactRoutes file

app.use(errorHandler);

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});

