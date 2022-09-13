const Student = require("../models/studentSchema");
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
    message: "Usuario creado con exito",
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
    const data = await User.findOneAndDelete({_id: id}).catch((err) => console.log("UPS!", err));
    res.send(data);
  };

exports.update = async (req, res) => {
    const {params: {id}} = req;
    const {body: user} = req;
    try{
        const userDB = await User.findOne({_id: id}).catch((err) => console.log("UPS!", err));
        let data = null;
        if (userDB){
            data = await User.updateOne({_id: id}, user);
        }else{
            data = {message: "No se encontró al usuario"}
        }
        res.send({data: userDB,
        message: data});
    }
    catch(err){
        console.log(err);
    }
  };