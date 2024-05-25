const express = require("express");
const cors = require("cors"); // Importar el módulo cors
const app = express();

//middlewares
app.use(express.json());
app.use(cors()); // Usar el middleware cors

//mongodb connection
const connectDB = require("./config/db");
connectDB();

//routes
app.use("/api/v1/", require("./routes/userRoutes"));

app.listen(8080, () => {
  console.log('servidor escuchando en el puerto 8080');
});
