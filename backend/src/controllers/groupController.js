const Group = require("../models/groupSchema");

exports.create = async (req, res) => {
  const { body: group } = req;
  console.log(theme);
  const groupDB = new Group(group);
  await groupDB.save().catch((err) => {
    console.log("UPS!", err)
    res.send({
        message: err,
        data: groupDB,
      });
  }
  );
  res.send({
    message: "grupo creado con éxito",
    data: groupDB,
  });
};

exports.get = async (req, res) => {
  const {params: {id}} = req;
  const data = await Group.findOne({_id: id}).catch((err) => console.log("UPS!", err));
  if (data){
    res.send(data);
  }else{
    res.send({
        message: "No se encontró el grupo",
        grupo_id: id,
      });
  }
};

exports.delete = async (req, res) => {
    const {params: {id}} = req;
    let msg = "";
    const data = await Group.findOneAndDelete({_id: id}).catch((err) => {
      msg = err;
      res.send({message: "No se pudo eliminar el grupo",
                error: err});
    });
    msg = "Grupo eliminado";
    res.send({message: msg,
      data: data});
  };

exports.update = async (req, res) => {
    const {params: {id}} = req;
    const {body: group} = req;
    try{
        const groupDB = await Group.findOne({_id: id}).catch((err) => console.log("UPS!", err));
        let data = null;
        let msg = "";
        if (groupDB){
          data = await Group.findOneAndUpdate({_id: id}, group);
          msg = "Grupo actualizado";
        }else{
          msg = "No se encontró el grupo";
          data = {group_id: id};
        }
        res.send({message: msg,
                  data: data});
    }
    catch(err){
        console.log(err);
    }
  };
