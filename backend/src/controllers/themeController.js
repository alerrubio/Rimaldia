const Theme = require("../models/themeSchema");

exports.create = async (req, res) => {
  const { body: theme } = req;
  console.log(theme);
  const themeDB = new Theme(theme);
  await themeDB.save().catch((err) => {
    console.log("UPS!", err)
    res.send({
        message: err,
        data: themeDB,
      });
  }
  );
  res.send({
    message: "Tema creado con éxito",
    data: themeDB,
  });
};

exports.get = async (req, res) => {
  const {params: {id}} = req;
  const data = await Theme.findOne({_id: id}).catch((err) => console.log("UPS!", err));
  if (data){
    res.send(data);
  }else{
    res.send({
        message: "No se encontró el tema",
        theme_id: id,
      });
  }
};

exports.delete = async (req, res) => {
    const {params: {id}} = req;
    let msg = "";
    const data = await Theme.findOneAndDelete({_id: id}).catch((err) => {
      msg = err;
      res.send({message: "No se pudo eliminar el tema",
                error: err});
    });
    msg = "Tema eliminado";
    res.send({message: msg,
      data: data});
  };

exports.update = async (req, res) => {
    const {params: {id}} = req;
    const {body: theme} = req;
    try{
        const themeDB = await Theme.findOne({_id: id}).catch((err) => console.log("UPS!", err));
        let data = null;
        let msg = "";
        if (themeDB){
          data = await Theme.findOneAndUpdate({_id: id}, theme);
          msg = "Tema actualizado";
        }else{
          msg = "No se encontró el tema";
          data = {theme_id: id};
        }
        res.send({message: msg,
                  data: data});
    }
    catch(err){
        console.log(err);
    }
  };