var express = require('express');
var router = express.Router();
//var db = require('../config/database');

router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/main', function(req, res, next) {
  //Token de seguridad
  let tokenSeguridad = req.body.tokenSeguridad;
  if(tokenSeguridad == undefined){
    res.render('index');
  }

});

router.post('/main', function(req, res, next) {
  //Login del usuario
  let usuario = {
    username : req.body.username,
    password : req.body.password,
  };

  if(usuario.username == 'root' && usuario.password == 'root'){
    /*
    db.ref('datos').on('value',(snapshot) =>{
      let datos = snapshot.val();
      console.log(datos)
      
    });
    */
    res.render('lectura');
    
  }else{
    res.render('index',{
      acceso:false
    });
  }

  //res.render('lectura');
});

module.exports = router;
