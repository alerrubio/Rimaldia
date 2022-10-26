const Group = require("../models/groupSchema");

exports.create = async (req, res) => {
  const { body: group } = req;
  try{
    const groupDB = new Group(group);
    await groupDB.save().catch((err) => {
      console.log("Un error ha ocurrido", err)
      res.send({
          message: "Un error ha ocurrido",
          error_data: err,
          group_data: group
        });
    }
    );
    res.send({
      message: "Grupo creado con éxito",
      data: groupDB,
    });
  }
  catch(error){
    console.log(error);
  }
  
};

exports.get = async (req, res) => {
  const {params: {id}} = req;
  try{
    const data = await Group.findOne({_id: id});
    if (data){
      res.send(data);
    }else{
      res.send({
          message: "No se encontró el grupo",
          grupo_id: id,
        });
    }
  }
  catch(error){
    console.log(error);
    res.send({
      message: "Algo salió mal",
      error_data: error,
      group_id: id,
    });
  }
  
};

exports.delete = async (req, res) => {
    const {params: {id}} = req;
    try{
      let msg = "";
      let data = null;
      const groupDB = await Group.findOneAndDelete({_id: id});
      if (groupDB){
        msg = "Grupo eliminado";
        data = groupDB;
      }
      else{
        msg = "No se encontró el grupo";
        data = {group_id: id};
      }
      res.send({message: msg,
        data: data});
    }
    catch (error){
      console.log(error);
        res.send({message: "No se pudo eliminar el grupo",
          error: error,
          group_id: id});
    }
  };

exports.update = async (req, res) => {
    const {params: {id}} = req;
    const {body: group} = req;
    try{
        const groupDB = await Group.findOne({_id: id});
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
        res.send({message: "No se pudo actualizar el grupo",
        error_data: err,  
        group_data: group});
    }
  };
