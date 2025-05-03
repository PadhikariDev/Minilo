import express from "express";
import urlRoutes from "./routes/url.js"
import connectMongoDB from "./connect.js"
const app= express();
const PORT =3000;

app.use(express.json());
app.use("/",urlRoutes);

connectMongoDB("addmongoDb url/databaseName").then(()=>{
    console.log("Database has been connected.");
}).catch(err=>{
    console.error("Failed to connect to the Database.");
});

app.listen(PORT,()=>{
    console.log("server started.");
});
