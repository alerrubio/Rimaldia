const UserRole = require("../models/userRoleSchema");

//[GET]
exports.get = async (req, res) => {
    const {params: {id}} = req;
    try {
      const data = await UserRole.findOne({_id: id});
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
      res.send({
        message: "Algo salió mal",
        error_data: error,
        userRole_id: id,
      });
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
          message: "Un error ha ocurrido",
          error_data: err,
          user_role_data: userRoleDB
        });
    }
    );
    res.send({
      message: "Rol creado con éxito",
      data: userRoleDB
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
        const userRoleDB = await UserRole.findOne({_id: id});
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
        res.send({message: "No se pudo actualizar el rol de usuario",
        error_data: err,  
        data: userRole});
    }
  };

//[DELETE]
exports.delete = async (req, res) => {
    const {params: {id}} = req;
    try {
        let msg = "";
        let data = null;
        const roleDB = await UserRole.findOneAndDelete({_id: id});
        if (roleDB){
          msg = "Rol eliminado";
          data = roleDB;
        }
        else{
          msg = "No se encontró el rol";
          data = {user_role_id: id};
        }
        
        res.send({message: msg,
          data: data});
    
      } catch (error) {
        console.log(error);
        res.send({message: "No se pudo eliminar el rol de usuario",
          user_role_id: id});
      }
  };
