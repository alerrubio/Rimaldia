const Comment = require("../models/commentSchema");

exports.get = async (req, res) => {
    const {params: {id}} = req;
    try{
      const data = await Comment.findOne({_id: id});
      console.log(data);
      if (data){
        res.send(data);
      }else{
        res.send({
            message: "No se encontró el comentario",
            comment_id: id,
          });
      }
    }
    catch(error){
      console.log(error);
      res.send({
        message: "Algo salió mal",
        error_data: error,
        comment_id: id,
      });
    }
  };
  
exports.create = async (req, res) => {
  const { body: comment } = req;
  console.log(comment);
  try{
    const commentDB = new Comment(comment);
    await commentDB.save().catch((err) => {
      console.log("Un error ha ocurrido", err)
      res.send({
          message: "Un error ha ocurrido",
          error_data: err,
          comment_data: commentDB
        });
    }
    );
    res.send({
      message: "Comentario creado con éxito",
      data: commentDB,
    });
  }
  catch (error){
    console.log(error);
  }
};

exports.delete = async (req, res) => {
    const {params: {id}} = req;
    try{
      let msg = "";
      let data = null;
      const commentDB = await Comment.findOneAndDelete({_id: id});
      if (commentDB){
        msg = "Comentario eliminado";
        data = commentDB;
      }
      else{
        msg = "No se encontró el comentario";
        data = {commment_id: id};
      }
      res.send({message: msg,
        comment: data});
    }catch(error){
      console.log(error);
      res.send({
        message: "No se pudo borrar el comentario",
        error_data: error,
        comment_id: id,
      });
    }
    
  };

exports.update = async (req, res) => {
    const {params: {id}} = req;
    const {body: comment} = req;
    try{
        const commentDB = await Comment.findOne({_id: id});
        let data = null;
        let msg = "";
        if (commentDB){
          data = await Comment.findOneAndUpdate({_id: id}, comment);
          msg = "Comentario actualizado";
        }else{
          msg = "No se encontró el comentario";
          data = {comment_id: id};
        }
        res.send({message: msg,
                  data: data});
    }
    catch(err){
        console.log(err);
        res.send({message: "No se pudo actualizar el comentario",
          error_data: err,
          data: comment});
    }
  };