
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
var n = 0;
var l = document.getElementById("lblContador");

const firebaseConfig = {
apiKey: "AIzaSyC4bvDFtHdedoLXQg8vqD8q7OtN28bPd9M",
authDomain: "dthtr-f4e31.firebaseapp.com",
projectId: "dthtr-f4e31",
storageBucket: "dthtr-f4e31.appspot.com",
messagingSenderId: "663743069752",
appId: "1:663743069752:web:20aaf9a5dad60b72b030cd",
measurementId: "G-F4FJ186X7X",
databaseURL :'https://dthtr-f4e31-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db =  firebase.database();



db.ref('datos').on('value',(snapshot) =>{
    let datos = snapshot.val();
    //console.log(datos)

    document.getElementById('lblTemperatura').innerHTML='';
    document.getElementById('lblTemperatura').innerHTML=''+datos.temperatura+' °C';
    document.getElementById('lblHumedad').innerHTML='';
    document.getElementById('lblHumedad').innerHTML=''+datos.humedad+' %';
    l.innerHTML = '0 '
    n = 0

    //Estilos para la temperatura
    if(datos.temperatura<=14){
        document.getElementById("lblTemperatura").style.color = "#EEC508";
    }

    if(datos.temperatura >=15 && datos.temperatura<=22){
        document.getElementById("lblTemperatura").style.color = "#00F200";
    }

    if(datos.temperatura >= 23 && datos.temperatura <= 25  ){
        document.getElementById("lblTemperatura").style.color = "#EEC508";
    }

    if(datos.temperatura >= 26){
        document.getElementById("lblTemperatura").style.color = "red";
    }

    //Estilos para la humedad
    if(datos.humedad >=40 && datos.humedad <= 60){
        document.getElementById("lblHumedad").style.color = "#00F200";
    }

    if(datos.humedad >=25 && datos.humedad <= 39){
        document.getElementById("lblHumedad").style.color = "#EEC508";
    }

    if(datos.humedad >=61 && datos.humedad <= 80){
        document.getElementById("lblHumedad").style.color = "#EEC508";
    }

    if(datos.humedad <= 24 || datos.humedad >= 81){
        document.getElementById("lblHumedad").style.color = "red";
    }
});




window.setInterval(function(){
    
    var hour = Math.floor(n / 3600);
    hour = (hour < 10)? '0' + hour : hour;
    var minute = Math.floor((n / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute;
    var second = n % 60;
    second = (second < 10)? '0' + second : second;
    l.innerHTML = hour + ':' + minute + ':' + second+' ' ;


    n++;
},1000);


