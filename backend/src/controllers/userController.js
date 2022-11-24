const User = require("../models/userSchema");
var constants = require('../lib/constants');

exports.create = async (req, res) => {
  const { body: user } = req;
  try{
    const userDB = new User(user);
    await userDB.save();
    res.status(200);
    res.send({
      message: "Usuario creado con éxito",
      data: userDB,
    });
  }catch(err){
    console.log(err);
    res.status(400);
    res.send({
      error: err,
      message: "No se pudo crear al usuario",
      user_data: user,
    });
  }
};

exports.get = async (req, res) => {
  const {params: {id}} = req;
  const data = await User.findOne({_id: id}).catch((err) => console.log("UPS!", err));
  if (data){
    res.send(data);
  }else{
    res.send({
        message: "No se encontró al usuario",
        user_id: id,
      });
  }
};

exports.isAdmin = async (req, res) => {
  const {body: {user_email}} = req;
  try{
    const data = await User.find({email: user_email, role: '637c33318a3d0bc0a9233344'});
    console.log(data);
    if (data.length > 0){
      res.status(200).send({
        message: "Usuario es admin",
        user_email: user_email,
      });
    }else{
      res.status(204).send({
        message: "Usuario no es admin",
        user_email: user_email,
      });
    }
  }
  catch(err){
    res.status(500).send({
      message: "Algo salió mal",
      error: err
    });
  }
};

exports.getByEmail = async (req, res) => {
  const {body: {email}} = req;
  try{
    const data = await User.findOne({email: email});
    if (data){
      res.status(200).send({
        message: "Usuario existe",
        user_email: email,
      });
    }else{
      res.status(204).send({
        message: "No se encontró al usuario",
        user_email: email,
      });
    }
  }
  catch(err){
    res.status(500).send({
      message: "Algo salió mal",
      error: err
    });
  }
  
};

exports.delete = async (req, res) => {
    const {params: {id}} = req;
    let msg = "";
    let data = null;
   try{
    const userDB = await User.findOneAndDelete({_id: id})
    if (userDB){
      msg = "Usuario eliminado";
      data = userDB;
    }
    else{
      msg = "No se encontró al usuario";
      data = {user_id: id};
    }
    res.send({message: msg,
      user: data});
   }
   catch(err){
    console.log(err);
    res.send({message: "No se pudo eliminar al usuario",
      user_id: id});
   }
    
  };

exports.update = async (req, res) => {
    const {params: {id}} = req;
    const {body: user} = req;
    try{
        const userDB = await User.findOne({_id: id}).catch((err) => console.log("UPS!", err));
        let data = null;
        let msg = "";
        if (userDB){
          data = await User.findOneAndUpdate({_id: id}, user);
          msg = "Usuario actualizado";
        }else{
          msg = "No se encontró al usuario";
          data = {user_id: id};
        }
        res.send({message: msg,
                  data: data});
    }
    catch(err){
        console.log(err);
    }
  };