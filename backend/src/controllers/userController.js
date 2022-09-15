const User = require("../models/userSchema");

exports.create = async (req, res) => {
  const { body: user } = req;
  console.log(user);
  const userDB = new User(user);
  await userDB.save().catch((err) => {
    console.log("UPS!", err)
    res.send({
        message: err,
        data: userDB,
      });
  }
  );
  res.send({
    message: "Usuario creado con éxito",
    data: userDB,
  });
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

exports.delete = async (req, res) => {
    const {params: {id}} = req;
    let msg = "";
    const data = await User.findOneAndDelete({_id: id}).catch((err) => {
      msg = err;
      res.send({message: "No se pudo eliminar al usuario",
                error: err});
    });
    msg = "Usuario eliminado";
    res.send({message: msg,
      data: data});
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