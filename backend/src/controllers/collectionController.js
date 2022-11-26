const Collection = require("../models/collectionSchema");

//[GET]
exports.get = async (req, res) => {
    const {params: {id}} = req;
    try {
      const data = await Collection.findOne({_id: id});
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
      res.send({
        message: "Algo salió mal",
        error_data: error,
        collection_id: id,
      });
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
          message: "Un error ha ocurrido",
          error_data: err,
          collection_data: collectionDB
        });
    }
    );
    res.send({
      message: "Colección creada con éxito",
      data: collectionDB
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
        const collectionDB = await Collection.findOne({_id: id});
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
        res.send({message: "No se pudo actualizar la colección",
        error_data: err,  
        data: collection});
    }
  };

//[DELETE]
exports.delete = async (req, res) => {
    const {params: {id}} = req;
    try {
        let msg = "";
        let data = null;
        const collectionDB = await Collection.findOneAndDelete({_id: id});
        if (collectionDB){
          msg = "Colección eliminada";
          data = collectionDB;
        }else{
          msg = "No se encontró la colección";
          data = {collection_id: id};
        }
        
        res.send({message: msg,
          data: data});
    
      } catch (error) {
        console.log(error);
        res.send({message: "No se pudo eliminar la colección",
        error_data: error,  
        collection_id: id});
      }
  };

  //[TRAER TODAS LAS CATEGORÍAS]
  exports.getAllCategories = async (req, res) => {
    try{
      const data = await Collection.find()
      console.log(data);
      if (data){
        res.send(data);
      }else{
        res.send({
            message: "No se encontró la categoría."
          });
      }
    }
    catch(err){
        console.log(err);
        res.send({
          message: "Algo salió mal",
          error_data: err,
          post_id: id,
        });
    }
    
  };
