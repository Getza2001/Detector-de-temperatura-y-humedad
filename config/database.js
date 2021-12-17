
var admin = require('firebase-admin');
var serviceAccount = require("../config/dthtr-f4e31-firebase-adminsdk-txlyb-9a347ea0c4.json");


//Inicializacion para connectar con la base de datos firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL :'https://dthtr-f4e31-default-rtdb.firebaseio.com/'
});


//Objeto para interactuar con la base datos firebase
const db = admin.database();


module.exports = db;