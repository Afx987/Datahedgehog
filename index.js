
const functions = require('firebase-functions');

const admin = require('firebase-admin');



admin.initializeApp(functions.config().firebase);


exports.contenedorTrigger = functions.firestore.document('Contenedor/{ContenedorId}')
.onCreate((snapshot, context) => {



admin.firestore().collection('Contenedor').get().then((snapshots) =>{

var token = ['e4OvM35wDzk:APA91bHV_4F6cxTgG7-X80vblVEmnc5VAgvZZ8dg7yFPnfgfDkLaWEnPF_aZ9rKKws46qAsILusTI37_BNbLqySdmV4Mll55gSUGmwaLL6mhIktO4vUKiKYZZPHIFOmi329ksnZ1-jEh'];
let lastReg = snapshots.docs[snapshots.docs.length-1].data().Fecha;
let lastTemp = snapshots.docs[snapshots.docs.length-1].data().Temperatura01;
let lastTemp2 = snapshots.docs[snapshots.docs.length-1].data().Temperatura02;
let lastTemp3 = snapshots.docs[snapshots.docs.length-1].data().Temperatura03;
let lastTemp4 = snapshots.docs[snapshots.docs.length-1].data().Temperatura04;
let lastORP = snapshots.docs[snapshots.docs.length-1].data().ORP01;;
let lastORP2 = snapshots.docs[snapshots.docs.length-1].data().ORP02;
let lastORP3 = snapshots.docs[snapshots.docs.length-1].data().ORP03;
let lastORP4 = snapshots.docs[snapshots.docs.length-1].data().ORP04;     
let lastHum = snapshots.docs[snapshots.docs.length-1].data().Humedad01;
let lastHum2 = snapshots.docs[snapshots.docs.length-1].data().Humedad02;
let lastHum3 = snapshots.docs[snapshots.docs.length-1].data().Humedad03;
let lastHum4 = snapshots.docs[snapshots.docs.length-1].data().Humedad04;

if (snapshots.empty){
    console.log('Sin dispositivos');

}
else {

if(lastTemp > 30){

    var payload = {
        "notification": {
            "title": "From " + String(lastTemp),
            "body": "TEMPERATURA 01 EXCEDIDA!!" + String(lastTemp),
            "sound": "default"
        } ,
        "data":{
            "sendername" : String(lastTemp),
            "message" : String(lastTemp)
        }
    }

    return admin.messaging().sendToDevice(token, payload).then((response) =>{
        console.log ("TODO OK...");
        console.log (lastTemp)
        }).catch((err) => {
        
            console.log(err);
        
        })
     

}



if(lastTemp2 > 30){

    var payload2 = {
        "notification": {
            "title": "From " + String(lastTemp2),
            "body": "TEMPERATURA 02 EXCEDIDA!!" + String(lastTemp2),
            "sound": "default"
        } ,
        "data":{
            "sendername" : String(lastTemp2),
            "message" : String(lastTemp2)
        }
    }

    return admin.messaging().sendToDevice(token, payload2).then((response) =>{
        console.log ("TODO OK...");
        console.log (lastTemp2);
        }).catch((err) => {
        
            console.log(err);
        
        })
        

    

}

if(lastTemp3 > 30){

    var payload3 = {
        "notification": {
            "title": "From " + String(lastTemp3),
            "body": "TEMPERATURA 03 EXCEDIDA!!" + String(lastTemp3),
            "sound": "default"
        } ,
        "data":{
            "sendername" : String(lastTemp3),
            "message" : String(lastTemp3)
        }
    }

    return admin.messaging().sendToDevice(token, payload3).then((response) =>{
        console.log ("TODO OK...");
        console.log (lastTemp3);
        }).catch((err) => {
        
            console.log(err);
        
        })
        

}
if(lastTemp4 > 30){

    var payload4 = {
        "notification": {
            "title": "From " + String(lastTemp4),
            "body": "TEMPERATURA 04 EXCEDIDA!!" + String(lastTemp4),
            "sound": "default"
        } ,
        "data":{
            "sendername" : String(lastTemp4),
            "message" : String(lastTemp4)
        }
    }
    return admin.messaging().sendToDevice(token, payload4).then((response) =>{
        console.log ("TODO OK...");
        console.log (lastTemp4);
        }).catch((err) => {
        
            console.log(err);
        
        })
        

}

if(lastORP > 300){

    var payload5 = {
        "notification": {
            "title": "From " + String(lastORP),
            "body": "ORP 01 EXCEDIDA!!" +  String(lastORP),
            "sound": "default"
        } ,
        "data":{
            "sendername" :  String(lastORP),
            "message" :  String(lastORP)
        }
    }

    return admin.messaging().sendToDevice(token, payload5).then((response) =>{
        console.log ("TODO OK...");
        console.log (lastORP);
        }).catch((err) => {
        
            console.log(err);
        
        })
        

}

if(lastORP2 > 300){

    var payload6 = {
        "notification": {
            "title": "From " +  String(lastORP2),
            "body": "ORP 02 EXCEDIDA!!" +  String(lastORP2),
            "sound": "default"
        } ,
        "data":{
            "sendername" :  String(lastORP2),
            "message" :  String(lastORP2)
        }
    }


    return admin.messaging().sendToDevice(token, payload6).then((response) =>{
        console.log ("TODO OK...");
        console.log (lastORP2);
        }).catch((err) => {
        
            console.log(err);
        
        })
        

}

if(lastORP3 > 300){

    var payload7 = {
        "notification": {
            "title": "From " +  String(lastORP3),
            "body": "ORP 03 EXCEDIDA!!" +  String(lastORP3),
            "sound": "default"
        } ,
        "data":{
            "sendername" :  String(lastORP3),
            "message" :  String(lastORP3)
        }
    }

    return admin.messaging().sendToDevice(token, payload7).then((response) =>{
        console.log ("TODO OK...");
        console.log (lastORP3);
        }).catch((err) => {
        
            console.log(err);
        
        })
        

}

if(lastORP4 > 300){

    var payload8 = {
        "notification": {
            "title": "From " +  String(lastORP4),
            "body": "ORP 04 EXCEDIDA!!" +  String(lastORP4),
            "sound": "default"
        } ,
        "data":{
            "sendername" : String(lastORP4),
            "message" : String(lastORP4)
        }
    }

    return admin.messaging().sendToDevice(token, payload8).then((response) =>{
        console.log ("TODO OK...");
        console.log (lastORP4);
        }).catch((err) => {
        
            console.log(err);
        
        })
        

}

if(lastHum > 3000){

    var payload9 = {
        "notification": {
            "title": "From " + String(lastHum),
            "body": "Humedad 01 EXCEDIDA!!" + String(lastHum),
            "sound": "default"
        } ,
        "data":{
            "sendername" : String(lastHum),
            "message" : String(lastHum)
        }
    }


    return admin.messaging().sendToDevice(token, payload9).then((response) =>{
        console.log ("TODO OK...");
        console.log(lastHum);
        }).catch((err) => {
        
            console.log(err);
        
        })
        

}

if(lastHum2 > 3000){

    var payload10 = {
        "notification": {
            "title": "From " + String(lastHum2),
            "body": "Humedad 02 EXCEDIDA!!" + String(lastHum2),
            "sound": "default"
        } ,
        "data":{
            "sendername" : String(lastHum2),
            "message" : String(lastHum2)
        }
    }


    return admin.messaging().sendToDevice(token, payload10).then((response) =>{
        console.log ("TODO OK...");
        console.log(lastHum2);
        }).catch((err) => {
        
            console.log(err);
        
        })
        
}


if(lastHum3 > 3000){

    var payload11 = {
        "notification": {
            "title": "From " + String(lastHum3),
            "body": "Humedad 03 EXCEDIDA!!" + String(lastHum3),
            "sound": "default"
        } ,
        "data":{
            "sendername" : String(lastHum3),
            "message" : String(lastHum3)
        }
    }


    return admin.messaging().sendToDevice(token, payload11).then((response) =>{
        console.log ("TODO OK...");
        console.log(lastHum3);
        }).catch((err) => {
        
            console.log(err);
        
        })
        

}


if(lastHum4 > 3000){

    var payload12 = {
        "notification": {
            "title": "From " + String(lastHum4),
            "body": "Humedad 04 EXCEDIDA!!" + String(lastHum4),
            "sound": "default"
        } ,
        "data":{
            "sendername" : String(lastHum4),
            "message" : String(lastHum4)
        }
    }





    return admin.messaging().sendToDevice(token, payload12).then((response) =>{
        console.log ("TODO OK...");
        console.log(lastHum4);
        }).catch((err) => {
        
            console.log(err);
        
        })
        

}
}

})

console.log("hoLA COMO ESTAS");


})
