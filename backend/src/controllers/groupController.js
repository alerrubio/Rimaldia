const Group = require("../models/groupSchema");

exports.create = async (req, res) => {
  const { body: group } = req;
  try{
    const groupDB = new Group(group);
    await groupDB.save().catch(
      (err) => 
        {
          console.log("Un error ha ocurrido", err);
          res.status(500).send({
              message: "Un error ha ocurrido",
              error_data: err,
              group_data: group
            });
        }
    );
    res.status(200).send({
      message: "Grupo creado con éxito",
      data: groupDB,
    });
  }
  catch(error){
    console.log(error);
    res.status(500).send({
      message: "Algo salió mal",
      data: error,
    });
  }
  
};

exports.get = async (req, res) => {
  const {params: {id}} = req;
  try{
    const data = await Group.findOne({_id: id});
    if (data){
      res.status(200).send(data);
    }else{
      res.status(204).send();
    }
  }
  catch(error){
    console.log(error);
    res.status(500).send({
      message: "Algo salió mal",
      error_data: error,
      group_id: id,
    });
  }
};

exports.getAllUserGroups = async (req, res) => {
  const {params: {user_id}} = req;
  try{
    const data = await Group.find({users: user_id});
    if (data){
      res.status(200).send(data);
    }else{
      res.status(204).send();
    }
  }
  catch(error){
    console.log(error);
    res.status(500).send({
      message: "Algo salió mal",
      error_data: error,
      group_id: id,
    });
  }
};

exports.getAllUserOwnedGroups = async (req, res) => {
  const {params: {user_id}} = req;
  try{
    const data = await Group.find({creator_id: user_id});
    if (data){
      res.status(200).send(data);
    }else{
      res.status(204).send();
    }
  }
  catch(error){
    console.log(error);
    res.status(500).send({
      message: "Algo salió mal",
      error_data: error,
      group_id: id,
    });
  }
};

exports.getAll = async (req, res) => {
  try{
    const data = await Group.find();
    if (data){
      res.status(200).send(data);
    }else{
      res.status(204).send();
    }
  }
  catch(error){
    console.log(error);
    res.status(500).send({
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

exports.addUser = async (req, res) => {
  const {params: {id}} = req;
  const {body: {user_id}} = req;
  try{
      const groupDB = await Group.findOne({_id: id});
      let data = null;
      let msg = "";
      let status = 0;
      if (groupDB){
        console.log("ESTE ES EL ID DEL USUARIO: " + user_id);
        groupDB.users.push(user_id);
        data = groupDB.save();
        msg = "Grupo actualizado";
        status = 200;
      }else{
        msg = "No se encontró el grupo";
        data = {group_id: id};
        status = 204;
      }
      res.status(status).send({message: msg,
                data: data});
  }
  catch(err){
      console.log(err);
      res.status(500).send({message: "No se pudo actualizar el grupo",
      error_data: err,  
      group_data: group});
  }
};
