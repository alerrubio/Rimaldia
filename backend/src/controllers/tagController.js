const Tag = require("../models/tagSchema");

//[GET]
exports.get = async (req, res) => {
    const {params: {id}} = req;
    const data = await Tag.findOne({_id: id}).catch((err) => console.log("Un error ha ocurrido", err));
    console.log(data);
    if (data){
      res.send(data);
    }else{
      res.send({
          message: "No se encontró el tag",
          tag_id: id,
        });
    }
  };

//[CREAR]
exports.create = async (req, res) => {
  const { body: tag } = req;
  console.log(tag);
  const tagDB = new Tag(tag);
  await tagDB.save().catch((err) => {
    console.log("Un error ha ocurrido", err)
    res.send({
        message: err,
        data: tagDB,
      });
  }
  );
  res.send({
    message: "Tag creado con éxito",
    data: tagDB,
  });
};

//[UPDATE]
exports.update = async (req, res) => {
    const {params: {id}} = req;
    const {body: tag} = req;
    try{
        const tagDB = await Tag.findOne({_id: id}).catch((err) => console.log("UPS!", err));
        let data = null;
        let msg = "";
        if (tagDB){
          data = await Tag.findOneAndUpdate({_id: id}, tag);
          msg = "Tag actualizado";
        }else{
          msg = "No se encontró el tag";
          data = {tag_id: id};
        }
        res.send({message: msg,
                  data: data});
    }
    catch(err){
        console.log(err);
    }
  };

//[DELETE]
exports.delete = async (req, res) => {
    const {params: {id}} = req;
    let msg = "";
    const data = await Tag.findOneAndDelete({_id: id}).catch((err) => {
      msg = err;
      res.send({message: "No se pudo eliminar el tag",
                error: err});
    });
    msg = "Tag eliminado";
    res.send({message: msg,
      data: data});
  };