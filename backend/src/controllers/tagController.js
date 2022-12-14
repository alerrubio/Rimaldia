const Tag = require("../models/tagSchema");
const mongoose = require('mongoose');

//[GET]
exports.get = async (req, res) => {
    const {params: {id}} = req;
    try {
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
    } catch (error) {
      console.log(error);
    }
  };

  exports.getPostTags = async (req, res) => {
    const {body: {tags}} = req;
    console.log(tags);
    try {
      const data = await Tag.find({ '_id': { $in: tags } });
      console.log(data);
      if (data.length > 0){
        res.status(200).send(data);
      }else{
        res.status(204).send();
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  };

//[CREAR]
exports.create = async (req, res) => {
  const { body: tag } = req;
  console.log(tag);
  try {
      const tagDB = new Tag(tag);
      const response = await tagDB.save().catch((err) => {
        console.log("Un error ha ocurrido", err)
        res.send({
            message: err,
            data: tagDB,
          });
      }
      );
      res.send({
        message: "Tag creado con éxito",
        data: response,
      });
  } catch (error) {
    console.log(error);
  }
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
    try {
        let msg = "";
        const data = await Tag.findOneAndDelete({_id: id}).catch((err) => {
          msg = err;
          res.send({message: "No se pudo eliminar el tag",
                    error: err});
        });
        if (data){
          msg = "Tag eliminado";
        }
        else{
          msg = "No se encontró el tag";
        }
        res.send({message: msg,
          data: data});
          
      } catch (error) {
        console.log(error);
      }
  };
