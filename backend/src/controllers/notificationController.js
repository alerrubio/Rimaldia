const Notification = require("../models/notificationSchema");

exports.get = async (req, res) => {
    const {params: {id}} = req;
    const data = await Notification.findOne({_id: id}).catch((err) => console.log("UPS!", err));
    console.log(data);
    if (data){
      res.send(data);
    }else{
      res.send({
          message: "No se encontró la notificación",
          notification_id: id,
        });
    }
  };
  
exports.create = async (req, res) => {
  const { body: notification } = req;
  console.log(notification);
  const notiDB = new Notification(notification);
  await notiDB.save().catch((err) => {
    console.log("UPS!", err)
    res.send({
        message: err,
        data: notiDB,
      });
  }
  );
  res.send({
    message: "Notificación creada con éxito",
    data: notiDB,
  });
};

exports.delete = async (req, res) => {
    const {params: {id}} = req;
    let msg = "";
    const data = await Notification.findOneAndDelete({_id: id}).catch((err) => {
      msg = err;
      res.send({message: "No se pudo eliminar la notificación",
                error: err});
    });
    msg = "Notificación eliminada";
    res.send({message: msg,
      data: data});
  };
