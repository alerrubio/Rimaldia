const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb+srv://root:root@rimaldia.d4otwdh.mongodb.net/Rimaldia", { useNewUrlParser: true })
  .then(() => console.log("Conectado a la base de datos MongoDB"))
  .catch(() => {
    console.log("No se pudo conectar con la base de datos");
    process.exit();
  });

  // npm install mongoose
  // conexión local: mongodb://localhost:27017/Rimaldia