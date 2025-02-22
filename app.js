//importamos express
const express = require("express");
const { dbConnection } = require("./src/database/config");
const app = express();
const cors = require("cors");

//importamos dotEnv
require("dotenv").config();

//lecutura y parseo del body
app.use(express.json());

//cors
app.use(cors());

//coneccion a la base de datos
dbConnection();

//conectamos nuestras rutas con el archivo raiz en este ejemplo "/auth" va a ser que todos las funciones que se encuentren en "./routes/auth" va a ser que tengan por implicito la ruta /auth
app.use("/auth", require("./src/routes/auth"));
app.use("/menu", require("./src/routes/menu"));
app.use("/prod", require("./src/routes/prod"));

//definimos el puerto en donde vamos a estar trabajando
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
