const Notification = require("../models/notificationSchema");

exports.get = async (req, res) => {
    const {params: {id}} = req;
    try{
      const data = await Notification.findOne({_id: id});
      console.log(data);
      if (data){
        res.send(data);
      }else{
        res.send({
            message: "No se encontró la notificación",
            notification_id: id,
          });
      }
    }catch(error){
      console.log(error);
      res.send({
        message: "Algo salió mal",
        error_data: error,
        notification_id: id,
      });
    }
  };
  
exports.create = async (req, res) => {
  const { body: notification } = req;
  console.log(notification);
  try{
    const notiDB = new Notification(notification);
    await notiDB.save().catch((err) => {
      console.log("Un error ha ocurrido", err)
      res.send({
          message: "Un error ha ocurrido",
          error_data: err,
          notification_data: notification
        });
    }
    );
    res.send({
      message: "Notificación creada con éxito",
      data: notiDB,
    });
  }
  catch(error){
    console.log(error);
  }
  
};

exports.delete = async (req, res) => {
    const {params: {id}} = req;
    try{
      let msg = "";
      let data = null;
      const notifDB = await Notification.findOneAndDelete({_id: id});
      if (notifDB){
        msg = "Notificación eliminada";
        data = notifDB;
      }else{
        msg = "No se encontró la notificación";
        data = {notification_id: id};
      }
      res.send({message: msg,
        data: data});
    }
    catch(error){
      console.log(error);
      res.send({message: "No se pudo eliminar la notificación",
        error: error,
        notification_id: id});
    }
  };

  exports.update = async (req, res) => {
    const {params: {id}} = req;
    const {body: notification} = req;
    try{
        const notificationDB = await Notification.findOne({_id: id}).catch((err) => console.log("UPS!", err));
        let data = null;
        let msg = "";
        if (notificationDB){
          data = await Notification.findOneAndUpdate({_id: id}, notification);
          msg = "Notificación actualizada.";
        }else{
          msg = "No se encontró la notificación.";
          data = {notification_id: id};
        }
        res.send({message: msg,
                  data: data});
    }
    catch(err){
        console.log(err);
        res.send({message: "No se pudo actualizar la notificación",
        error_data: err,  
        notification_data: notification});
    }
  };
