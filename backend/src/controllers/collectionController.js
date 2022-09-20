const Collection = require("../models/collectionSchema");

//[GET]
exports.get = async (req, res) => {
    const {params: {id}} = req;
    try {
      const data = await Collection.findOne({_id: id}).catch((err) => console.log("Un error ha ocurrido", err));
      console.log(data);
      if (data){
        res.send(data);
      }else{
        res.send({
            message: "No se encontró la colección",
            collection_id: id,
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

//[CREAR]
exports.create = async (req, res) => {
  const { body: collection } = req;
  console.log(collection);
  try {
    const collectionDB = new Collection(collection);
    await collectionDB.save().catch((err) => {
      console.log("Un error ha ocurrido", err)
      res.send({
          message: err,
          data: collectionDB,
        });
    }
    );
    res.send({
      message: "Colección creada con éxito",
      data: collectionDB,
    });
  } catch (error) {
    console.log(error);
  }
};

//[UPDATE]
exports.update = async (req, res) => {
    const {params: {id}} = req;
    const {body: collection} = req;
    try{
        const collectionDB = await Collection.findOne({_id: id}).catch((err) => console.log("UPS!", err));
        let data = null;
        let msg = "";
        if (collectionDB){
          data = await Collection.findOneAndUpdate({_id: id}, collection);
          msg = "Colección actualizada";
        }else{
          msg = "No se encontró la colección";
          data = {collection_id: id};
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
    try {
        let msg = "";
        const data = await Collection.findOneAndDelete({_id: id}).catch((err) => {
          msg = err;
          res.send({message: "No se pudo eliminar la colección",
                    error: err});
        });
        msg = "Colección eliminada";
        res.send({message: msg,
          data: data});
    
      } catch (error) {
        console.log(error);
      }
  };
