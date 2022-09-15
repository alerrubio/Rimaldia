const Comment = require("../models/commentSchema");

exports.get = async (req, res) => {
    const {params: {id}} = req;
    const data = await Comment.findOne({_id: id}).catch((err) => console.log("UPS!", err));
    console.log(data);
    if (data){
      res.send(data);
    }else{
      res.send({
          message: "No se encontró el comentario",
          comment_id: id,
        });
    }
  };
  
exports.create = async (req, res) => {
  const { body: comment } = req;
  console.log(comment);
  const commentDB = new Comment(comment);
  await commentDB.save().catch((err) => {
    console.log("UPS!", err)
    res.send({
        message: err,
        data: commentDB,
      });
  }
  );
  res.send({
    message: "Comentario creado con éxito",
    data: commentDB,
  });
};

exports.delete = async (req, res) => {
    const {params: {id}} = req;
    let msg = "";
    const data = await Comment.findOneAndDelete({_id: id}).catch((err) => {
      msg = err;
      res.send({message: "No se pudo eliminar el comentario",
                error: err});
    });
    msg = "Comentario eliminado";
    res.send({message: msg,
      data: data});
  };

exports.update = async (req, res) => {
    const {params: {id}} = req;
    const {body: comment} = req;
    try{
        const commentDB = await Comment.findOne({_id: id}).catch((err) => console.log("UPS!", err));
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
    }
  };