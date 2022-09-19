const Post = require("../models/postSchema");

exports.create = async (req, res) => {
  const { body: post } = req;
  console.log(post);
  const postDB = new Post(post);
  await postDB.save().catch((err) => {
    console.log("UPS!", err)
    res.send({
        message: err,
        data: postDB,
      });
  }
  );
  res.send({
    message: "Publicación creada con éxito.",
    data: postDB,
  });
};

exports.get = async (req, res) => {
  const {params: {id}} = req;
  const data = await Post.findOne({_id: id}).catch((err) => console.log("UPS!", err));
  if (data){
    res.send(data);
  }else{
    res.send({
        message: "No se encontró la publicación.",
        post_id: id,
      });
  }
};

exports.delete = async (req, res) => {
    const {params: {id}} = req;
    let msg = "";
    const data = await Post.findOneAndDelete({_id: id}).catch((err) => {
      msg = err;
      res.send({message: "No se pudo eliminar la publicación.",
                error: err});
    });
    if(data){
      msg = "Publicación eliminada.";
    res.send({message: msg,
      data: data});
    }else{
      res.send({message: "No se encontró la publicación."});
    }
    
  };

exports.update = async (req, res) => {
    const {params: {id}} = req;
    const {body: post} = req;
    try{
        const postDB = await Post.findOne({_id: id}).catch((err) => console.log("UPS!", err));
        let data = null;
        let msg = "";
        if (postDB){
          data = await Post.findOneAndUpdate({_id: id}, post);
          msg = "Publicación actualizada.";
        }else{
          msg = "No se encontró la publicación.";
          data = {post_id: id};
        }
        res.send({message: msg,
                  data: data});
    }
    catch(err){
        console.log(err);
    }
  };