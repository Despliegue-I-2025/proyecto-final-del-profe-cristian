import r2a from "./functions/r2a.js";
import a2r from "./functions/a2r.js";
import express from "express";
import cors from "cors"
const app = express();
const port = process.env.PORT || 3000;



app.use(cors());
app.get("/r2a", r2a);
app.get("/a2r", a2r);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});