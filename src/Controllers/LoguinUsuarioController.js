import Usuario from '../Models/UsuarioModel.js';
import bcrypt from 'bcrypt';

export const login = async (req, res) => {
  try {
    const { nomUsu, PasswordUsu } = req.body;

    const usuario = await Usuario.findOne({
      where: {
        nomUsu,
      },
    });
    console.log("usuario:",usuario);
    if (usuario) {
      const passwordMatch = await bcrypt.compare(PasswordUsu, usuario.passwordUsu);
      console.log("passwordMatch:",passwordMatch);
      if (passwordMatch) {
        req.session.nomUsu = usuario.nomUsu;
        req.session.idUsu = usuario.idUsu;
        req.session.idTipoUsu=usuario.idTipoUsu;
      console.log("ression:",req.session);

        return res.json({ Login: true, nomUsu: req.session.nomUsu, idUsu: req.session.idUsu, idTipoUsu: req.session.idTipoUsu });
      } else {

        return res.json({ Login: false, Message: "Credenciales incorrectas" });
      }
    } else {
      return res.json({ Login: false, Message: "Credenciales incorrectas" });
    }
  } catch (error) {
    console.error("Error en el servidor:", error);
    return res.status(500).json({ Message: "Error interno del servidor" });
  }
};

export const sign = async (req, res) => {
  console.log("sign:",req.session.nomUsu);
    if(req.session.nomUsu){
      console.log("sign if :",req.session.nomUsu);
        return res.json({valid: true, nomUsu:req.session.nomUsu, idUsu: req.session.idUsu, idTipoUsu: req.session.idTipoUsu})
    } else{
        return res.json({ valid : false})
    }
};



export const logout = async (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('Error al cerrar la sesión:', err);
        res.status(500).json({ message: 'Error al cerrar la sesión' });
      } else {
        res.json({ message: 'Sesión cerrada exitosamente' });
      }
    });
  };