const UserRole = require("../models/userRoleSchema");

//[GET]
exports.get = async (req, res) => {
    const {params: {id}} = req;
    try {
      const data = await UserRole.findOne({_id: id}).catch((err) => console.log("Un error ha ocurrido", err));
      console.log(data);
      if (data){
        res.send(data);
      }else{
        res.send({
            message: "No se encontró el rol",
            userRole_id: id,
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

//[CREAR]
exports.create = async (req, res) => {
  const { body: userRole } = req;
  console.log(userRole);
  try {
    const userRoleDB = new UserRole(userRole);
    await userRoleDB.save().catch((err) => {
      console.log("Un error ha ocurrido", err)
      res.send({
          message: err,
          data: userRoleDB,
        });
    }
    );
    res.send({
      message: "Rol creado con éxito",
      data: userRoleDB,
    });
  } catch (error) {
    console.log(error);
  }
};

//[UPDATE]
exports.update = async (req, res) => {
    const {params: {id}} = req;
    const {body: userRole} = req;
    try{
        const userRoleDB = await UserRole.findOne({_id: id}).catch((err) => console.log("UPS!", err));
        let data = null;
        let msg = "";
        if (userRoleDB){
          data = await UserRole.findOneAndUpdate({_id: id}, userRole);
          msg = "Rol actualizado";
        }else{
          msg = "No se encontró el rol";
          data = {userRole_id: id};
        }
        res.send({message: msg,
                  data: data});
    }
    catch(err){
        console.log(err);
    }
  };

//[DELETE]
exports.delete = async (req, res) => {
    const {params: {id}} = req;
    try {
        let msg = "";
        const data = await UserRole.findOneAndDelete({_id: id}).catch((err) => {
          msg = err;
          res.send({message: "No se pudo eliminar el rol",
                    error: err});
        });
        msg = "Rol eliminado";
        res.send({message: msg,
          data: data});
    
      } catch (error) {
        console.log(error);
      }
  };
