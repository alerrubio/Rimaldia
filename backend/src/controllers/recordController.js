const Record = require("../models/recordSchema");

exports.create = async (req, res) => {
  const { body: record } = req;
  console.log(record);
  const recordDB = new Record(record);
  await recordDB.save().catch((err) => {
    console.log("UPS!", err)
    res.send({
        message: err,
        data: recordDB,
      });
  }
  );
  res.send({
    message: "Registro creado con éxito.",
    data: recordDB,
  });
};

exports.get = async (req, res) => {
  const {params: {id}} = req;
  const data = await Record.findOne({_id: id}).catch((err) => console.log("UPS!", err));
  if (data){
    res.send(data);
  }else{
    res.send({
        message: "No se encontró el registro.",
        record_id: id,
      });
  }
};

exports.delete = async (req, res) => {
    const {params: {id}} = req;
    let msg = "";
    const data = await Record.findOneAndDelete({_id: id}).catch((err) => {
      msg = err;
      res.send({message: "No se pudo eliminar el registro.",
                error: err});
    });
    if(data){
      msg = "Registro eliminado.";
    res.send({message: msg,
      data: data});
    }else{
      res.send({message: "No se encontró el registro."});
    }
  };

exports.update = async (req, res) => {
    const {params: {id}} = req;
    const {body: record} = req;
    try{
        const recordDB = await Record.findOne({_id: id}).catch((err) => console.log("UPS!", err));
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
    }
  };