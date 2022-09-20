const Record = require("../models/recordSchema");

exports.create = async (req, res) => {
  const { body: record } = req;

  try{
    console.log(record);
    const recordDB = new Record(record);
    await recordDB.save().catch((err) => {
      console.log("Un error ha ocurrido", err)
      res.send({
          message: "Un error ha ocurrido",
          error_data: err,
          record_data: recordDB,
        });
    }
    );
    res.send({
      message: "Registro creado con éxito.",
      data: recordDB,
    });
  }
  catch(err){
      console.log(err);
  }
  
};

exports.get = async (req, res) => {
  const {params: {id}} = req;

  try{
    const data = await Record.findOne({_id: id});
    if (data){
      res.send(data);
    }else{
      res.send({
          message: "No se encontró el registro.",
          record_id: id,
        });
    }
  }
  catch(err){
      console.log(err);
      res.send({
        message: "Algo salió mal",
        error_data: err,
        record_id: id,
      });
  }
  
};

exports.delete = async (req, res) => {
    const {params: {id}} = req;

    try{
      let msg = "";
      let data = null;
      const recordDB = await Record.findOneAndDelete({_id: id});
      if(recordDB){
        msg = "Registro eliminado.";
        data = recordDB;
      }else{
        msg = "No se encontró el registro.";
        data = {record_id: id};
      }
      res.send({message: msg,
        data: data});
    }
    catch(err){
        console.log(err);
        res.send({message: "No se pudo eliminar el rol de usuario",
          error: err,
          user_role_id: id});
    }
    
  };

exports.update = async (req, res) => {
    const {params: {id}} = req;
    const {body: record} = req;
    
    try{
        const recordDB = await Record.findOne({_id: id});
        let data = null;
        let msg = "";
        if (recordDB){
          data = await Record.findOneAndUpdate({_id: id}, record);
          msg = "Registro actualizado.";
        }else{
          msg = "No se encontró el registro.";
          data = {record_id: id};
        }
        res.send({message: msg,
                  data: data});
    }
    catch(err){
        console.log(err);
        res.send({message: "No se pudo actualizar el registro",
        error_data: err,  
        record_data: record});
    }
  };