const Post = require("../models/postSchema");

exports.create = async (req, res) => {
  const { body: post } = req;

  try{
    console.log(post);
    const postDB = new Post(post);
    await postDB.save().catch((err) => {
      console.log("UPS!", err)
      res.send({
          message: "Un error ha ocurrido",
          error_data: err,
          post_data: postDB,
        });
    }
    );
    res.send({
      message: "Publicación creada con éxito.",
      data: postDB,
    });
  }
  catch(err){
      console.log(err);
  }
  
};

exports.get = async (req, res) => {
  const {params: {id}} = req;

  try{
    const data = await Post.findOne({_id: id});
    console.log(data);
    if (data){
      res.send(data);
    }else{
      res.send({
          message: "No se encontró la publicación.",
          post_id: id,
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

exports.getPostsbyUserid = async (req, res) => {
  const {params: {id}} = req;
  try{
    const data = await Post.find({user_id: id}).sort( '-createdOn' );
    console.log(data);
    if (data){
      res.send(data);
    }else{
      res.send({
          message: "No se encontraron publicaciones."
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

exports.getAllPosts = async (req, res) => {
  const {params: {page}} = req;
  const pagination = 10 * page;
  try{
    const data = await Post.find({}).skip(pagination).limit( 3 ).sort( '-createdOn' );
    console.log(data);
    if (data){
      res.send(data);
    }else{
      res.send({
          message: "No se encontró la publicación."
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

exports.delete = async (req, res) => {
    const {params: {id}} = req;

    try{
      let msg = "";
      let data = null;
      const postDB = await Post.findOneAndDelete({_id: id});
      if(postDB){
        msg = "Publicación eliminada.";
        data = postDB;
      }else{
        msg = "No se encontró la publicación.";
        data = {post_id: id};
      }
      res.send({message: msg,
        data: data});
    }
    catch(err){
        console.log(err);
        res.send({message: "No se pudo eliminar la publicación.",
          post_id: id});
    }
  };

exports.update = async (req, res) => {
    const {params: {id}} = req;
    const {body: post} = req;
    
    try{
        const postDB = await Post.findOne({_id: id});
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
        res.send({message: "No se pudo actualizar la publicación",
        error_data: err,  
        post_data: post});
    }
  };

exports.get_most_liked_post = async (req, res) => {
  try{
    const {
      query: {postquantity}
    } = req;

    let data = await Post.aggregate([{$project: { count: { $size: '$liked_by_id' } }}]);
    data.sort(function(a, b) {
      return b.count - a.count;
    });
    console.log(data);
    //const most_liked_posts = await Post.find({_id: data._id});
    res.send({posts: data.slice(0,postquantity)});
  }
  catch(error){
    console.log(error);
  }
};

exports.get_most_active_users = async (req, res) => {
  try{
    const {
      query: {postquantity}
    } = req;

    let data = await Post.aggregate([ //aggregate te permite hacer queries más elaborados.
      {$group: {_id: "$user_id", count: {$sum: 1}}}, //agrupa por user_id y 
      //suma la cantidad de veces que aparece el user_id, 
      //representando la cantidad de posts que tiene el usuario
      {$sort: { _id: 1 }}]); //1 desc order, -1 asc order

    console.log(data);
    //const most_liked_posts = await Post.find({_id: data._id});
    res.send({users: data});
  }
  catch(error){
    console.log(error);
  }
};
