var express = require('express');
var router = express.Router();
var UsuarioDAO = require('../model/UsuarioDAO') //El DAO del usuario para operaciones con la base de datos
var md5 = require("md5");  //Libreria para ioncriptar contraseñas

router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/login', function (req, res, next) {
  console.log("Cerrando sesions");
  res.render('index');
});

router.get('/main/:IdUsuario', function (req, res, next) {
  
  let IdUsuario = req.params.IdUsuario;
  console.log("Id parametro index main: ", IdUsuario);
  UsuarioDAO.obtenerUsuarioPorId(IdUsuario , (data)=>{
    let usuario = data;

    res.render('lectura',{
      usuario : usuario
    })

  });


});

router.get('/about/:IdUsuario', function (req, res, next) {
  let IdUsuario = req.params.IdUsuario;
  console.log("Id del parametro en index", IdUsuario);
  UsuarioDAO.obtenerUsuarioPorId(IdUsuario ,(data)=>{
    //Capturamos al usuario es esta vriable
    let usuario = data;
    //console.log("Usuario: ",usuario);

    res.render('about',{
      usuario : usuario
    });

  });
  
});



router.post('/main', function (req, res, next) {
  
  //Guardamos el nombre de usuario y contraseña puestos en el login 
  let usuario = {
    username: req.body.username,       //Nombre del usuario dado por el usuario
    password: md5(req.body.password),  //Constraseña dada por el usuario, la mandamos a incriptar con md5
  };
    
  UsuarioDAO.logueo(usuario, (data) => {

    //Capturamos al usuario es esta vriable
    usuario = data;
    //console.log("Usuario: ",usuario);

    //Validamos que no sea un valor indefinido
    if (usuario != undefined) {
      //Validando si es usuario de tipo administrador 
      if (usuario.tipoUsuario === 1) { 
        //Si el usuario es de tipo administrador entra al sistema
        res.render('lectura', {
          usuario: usuario 
        });
      } else {
        //De no ser administrador lo mandamos de regreso al login con 
        //Con un mensaje de error de auntentificacion
        res.render('index', {
          acceso: false
        });
      }
    } else {
      res.render('index', {
        acceso: false
      });
    }


  });

});


router.get('/construccion', function (req, res, next) {
  res.render('construccion');
});



router.get('/reporte/:IdUsuario', function (req, res, next) {

  let IdUsuario = req.params.IdUsuario;

  UsuarioDAO.obtenerUsuarioPorId(IdUsuario , (data)=>{
    let usuario = data;

    res.render('reporteLectura',{
      usuario: usuario
    });
  });

});


module.exports = router;