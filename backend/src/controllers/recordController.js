const Record = require("../models/recordSchema");
const Post = require("../models/postSchema");
const {ObjectId} = require('mongodb'); 

exports.create = async (req, res) => {
  const { body: record } = req;

  function mode(array)
  {
      if(array.length == 0)
          return null;
      var modeMap = {};
      var maxEl = array[0], maxCount = 1;
      for(var i = 0; i < array.length; i++)
      {
          var el = array[i];
          if(modeMap[el] == null)
              modeMap[el] = 1;
          else
              modeMap[el]++;  
          if(modeMap[el] > maxCount)
          {
              maxEl = el;
              maxCount = modeMap[el];
          }
      }
      return maxEl;
  }

  try{


    //0. Search documents (posts) between the given dates to extract the desired data (user_id, tag_id[])
    const between_dates = await Post.find({
      createdAt: { $gte: record.start_date, $lte: record.end_date },
    }); 
    console.log("Records found between dates:"+ JSON.stringify(between_dates));

    let docsList=[];

    {between_dates.forEach((doc, index)=>{      
      docsList.push(doc.user_id);      
    })}

    /*console.log(JSON.stringify(docsList));
    console.log(mode(docsList));
    console.log("Result count:"+between_dates.length);
    console.log("id count:"+docsList.length);*/

    //1. Count the documents by user_id and pick the top 5
    const countTopUser = Post.count({
      'booking.status': 'Underprocess',
      'booking.delivery_date' : '15-03-2016'
    }, function (err, docs) {
      // ... count of top-level items which have booking with following attributes
    });

    ////////2. Extract and merge the tag_id then count down how many times there are repeated and pick the top 5
    const objectId =new ObjectId(mode(docsList));
    record.most_popular_users_id.push(objectId);


    
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
      message: "Registro creado con ??xito.",
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
          message: "No se encontr?? el registro.",
          record_id: id,
        });
    }
  }
  catch(err){
      console.log(err);
      res.send({
        message: "Algo sali?? mal",
        error_data: err,
        record_id: id,
      });
  }
  
};

exports.getAll = async (req, res) => {
  const data = await Record.find({isActive: true}).sort('-createdAt');
  console.log(data);
  if (data){
    res.send(data);
  }else{
    res.send({
        message: "No se encontraron records.",
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
        msg = "No se encontr?? el registro.";
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
          msg = "No se encontr?? el registro.";
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