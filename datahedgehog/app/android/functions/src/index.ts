import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
const fcm = admin.messaging();



export const sendToDevice = functions.firestore
  .document('Contenedor/{ContenedorId}')
  .onCreate(async snapshot => {

    const querySnapshot = await db
    .collection('Usuarios')
    .doc('datahedgehogquintay')
    .collection('Tokens')
    .get();
  
    const tokens = querySnapshot.docs.map(snap => snap.id);
  
    admin.firestore().collection('Contenedor').get().then((snapshots) =>{

   
      var lastTemp = snapshots.docs[snapshots.docs.length-1].data().Temperatura01;
      var lastTemp2 = snapshots.docs[snapshots.docs.length-1].data().Temperatura02;
      var lastTemp3 = snapshots.docs[snapshots.docs.length-1].data().Temperatura03;
      var lastTemp4 = snapshots.docs[snapshots.docs.length-1].data().Temperatura04;
      var lastORP = snapshots.docs[snapshots.docs.length-1].data().ORP01;;
      var lastORP2 = snapshots.docs[snapshots.docs.length-1].data().ORP02;
      var lastORP3 = snapshots.docs[snapshots.docs.length-1].data().ORP03;
      var lastORP4 = snapshots.docs[snapshots.docs.length-1].data().ORP04;     
      var lastHum = snapshots.docs[snapshots.docs.length-1].data().Humedad01;
      var lastHum2 = snapshots.docs[snapshots.docs.length-1].data().Humedad02;
      var lastHum3 = snapshots.docs[snapshots.docs.length-1].data().Humedad03;
      var lastHum4 = snapshots.docs[snapshots.docs.length-1].data().Humedad04;

 
      if(lastTemp > 30 && lastTemp < 15 ||  lastTemp2 > 30 &&  lastTemp2 < 15 || lastTemp3 > 30 &&  lastTemp3 < 15 || lastTemp4 > 30 &&  lastTemp4 < 15 || lastHum> 3000 && lastHum < 1000 ||  lastHum2 > 3000 && lastHum2 < 1000  || lastHum3 > 3000 && lastHum3 < 1000  || lastHum4 > 3000 && lastHum4 < 1000  || lastORP > 200 && lastORP < 600  ||  lastORP2 > 200 && lastORP2 < 600  || lastORP3 > 200 && lastORP3 < 600 || lastORP4  > 200 && lastORP4 < 600 ) {
        
        const payload: admin.messaging.MessagingPayload = {
          notification: {
            title: 'ALERTA!,PARÁMETROS EXCEDIDOS O DEFICIENTES',
            body: 'T1:' + lastTemp + ' ' +
            'T2:' + lastTemp2 + ' ' +
            'T3:' + lastTemp3 + ' ' + 
            'T4:' + lastTemp4 + '\n' +
            'O1:' + lastORP + ' ' +
            'O2:' + lastORP2 + ' ' +
            'O3:' + lastORP3+ ' ' +
            'O4:' + lastORP4 + ' ' +
            'H1:' + lastHum + ' ' +
            'H2:' + lastHum2 + ' ' +
            'H3:' + lastHum3 + ' ' +
            'H4:' + lastHum4 + ' ' +
            'REVISAR!!!',
            click_action: 'FLUTTER_NOTIFICATION_CLICK',
            sound : 'default'
          }
        };

            return fcm.sendToDevice(tokens, payload);
      }

    

   
          return;
   }); 



  })







  

