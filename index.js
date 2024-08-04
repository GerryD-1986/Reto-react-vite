import dotenv from "dotenv/config";
import app from "./src/app.js";
import {connectDB} from "./src/db.js"


const PORT = process.env.PORT || 3000;

connectDB()
.then(() =>{
    app.listen(PORT, () =>{

        console.log(`server is running on port: ${PORT}`)
    });
})
.catch((error) =>{
    console.error("DB connection error:" , error);
});