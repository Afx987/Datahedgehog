
import 'dart:async';
import 'dart:developer';
import 'dart:io';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
void main() {
  runApp(new MyApp());
}


class MyApp extends StatelessWidget {



  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Datahedgehog Monitor',
      debugShowCheckedModeBanner: false,
      theme: new ThemeData(
        primarySwatch: Colors.blue,
        primaryColor: const Color(0xFF2196f3),
        accentColor: const Color(0xFF2196f3),
        canvasColor: const Color(0xFFfafafa),
      ),

      home: Scaffold(
         body: MessageHandler(),
        //new MyHomePage() en caso de que no funcione
      )

    );
  }

}


class MessageHandler extends StatefulWidget {
  @override
  _MessageHandlerState createState() => _MessageHandlerState();
}

/*
class MyHomePage extends StatefulWidget {
  MyHomePage({Key key}) : super(key: key);
  @override
  _MyHomePageState createState() => new _MyHomePageState();

}

*/

class SizeConfig {
  static MediaQueryData _mediaQueryData;
  static double screenWidth;
  static double screenHeight;
  static double blockSizeHorizontal;
  static double blockSizeVertical;
  static double _safeAreaHorizontal;
  static double _safeAreaVertical;
  static double safeBlockHorizontal;
  static double safeBlockVertical;

  void init(BuildContext context){
    _mediaQueryData = MediaQuery.of(context);
    screenWidth = _mediaQueryData.size.width;
    screenHeight = _mediaQueryData.size.height;
    blockSizeHorizontal = screenWidth/100;
    blockSizeVertical = screenHeight/100;
    _safeAreaHorizontal = _mediaQueryData.padding.left +
        _mediaQueryData.padding.right;
    _safeAreaVertical = _mediaQueryData.padding.top +
        _mediaQueryData.padding.bottom;
    safeBlockHorizontal = (screenWidth - _safeAreaHorizontal)/100;
    safeBlockVertical = (screenHeight - _safeAreaVertical)/100;
  }
}


//class _MyHomePageState extends State<MyHomePage> {

class _MessageHandlerState extends State<MessageHandler>{

  var _color = Colors.red;
  var _height = 100.0;
  var _width = 100.0;

  final Firestore db = Firestore.instance;
  final FirebaseMessaging fcm = FirebaseMessaging();


  animateContainer() {

    setState(() {
      _color = _color == Colors.yellow ? Colors.green: Colors.red;
    });
  }

  animateContainer2() {

    setState(() {
      _color = _color == Colors.yellow ? Colors.green: Colors.red;
    });
  }

  animateContainer3() {

    setState(() {
      _color = _color == Colors.yellow ? Colors.green: Colors.red;
    });
  }
  Widget getWidgetT(double NUM) {

    WidgetsBinding.instance.addPostFrameCallback((_) => animateContainer() );

    return new AnimatedContainer(
      duration: Duration (seconds: 1),
      decoration: BoxDecoration(
          color: _color,
          border: Border.all(color: Colors.black)
      ),
      child: Column(

        children: <Widget>[

          Text(
            "ALERTA!:  " + NUM.toString()+ " °C",
            style: new TextStyle(fontSize:15.0,
                color: const Color(0xFF000000),
                fontWeight: FontWeight.w900,
                fontFamily: "Roboto"),
          ),

        ],

      ),

    );



  }


  Widget getWidgetH(double NUM) {

    WidgetsBinding.instance.addPostFrameCallback((_) => animateContainer() );

    return new AnimatedContainer(
      duration: Duration (seconds: 1),
      decoration: BoxDecoration(
          color: _color,
          border: Border.all(color: Colors.black)
      ),
      child: Column(

        children: <Widget>[

          Text(
            "ALERTA!:  " + NUM.toString()+ " PPM",
            style: new TextStyle(fontSize:15.0,
                color: const Color(0xFF000000),
                fontWeight: FontWeight.w900,
                fontFamily: "Roboto"),
          ),

        ],

      ),

    );



  }


  Widget getWidgetO(double NUM) {

    WidgetsBinding.instance.addPostFrameCallback((_) => animateContainer() );

    return new AnimatedContainer(
      duration: Duration (seconds: 1),
      decoration: BoxDecoration(
          color: _color,
          border: Border.all(color: Colors.black)
      ),
      child: Column(

        children: <Widget>[

          Text(
            "ALERTA!:  " + NUM.toString()+ " mV",
            style: new TextStyle(fontSize:15.0,
                color: const Color(0xFF000000),
                fontWeight: FontWeight.w900,
                fontFamily: "Roboto"),
          ),

        ],

      ),

    );



  }

  StreamSubscription iosSubscription;





  @override
  void initState() {

    super.initState();

    if (Platform.isIOS) {
      iosSubscription = fcm.onIosSettingsRegistered.listen((data) {
        saveDeviceToken();
      });

      fcm.requestNotificationPermissions(IosNotificationSettings());
    } else
      {
        saveDeviceToken();
      }
    // ...

    fcm.configure(
      onMessage: (Map<String, dynamic> message) async {
        print("onMessage: $message");
        showDialog(
          context: context,
          builder: (context) => AlertDialog(
            content: ListTile(
              title: Text(message['notification']['title']),
              subtitle: Text(message['notification']['body']),
            ),
            actions: <Widget>[
              FlatButton(
                child: Text('Ok'),
                onPressed: () => Navigator.of(context).pop(),
              ),
            ],
          ),
        );
      },
      onLaunch: (Map<String, dynamic> message) async {
        print("onLaunch: $message");
        // TODO optional
      },
      onResume: (Map<String, dynamic> message) async {
        print("onResume: $message");
        // TODO optional
      },
    );
  }



  @override
  Widget build(BuildContext context) {


    SizeConfig().init(context);

/*    var reviewFlag = false;
    var reviews;
    Future<QuerySnapshot> in
    fo = Firestore.instance.collection('Contenedor')
        .orderBy('Fecha', descending: true)
        .getDocuments();

    info.then((QuerySnapshot docs){
      if(docs.documents.isNotEmpty){
        reviewFlag = true;
        reviews = docs.documents[0].data;
      }
      else{
        reviews = "Nada";
      }

    });*/

    return new Scaffold(
      appBar: new AppBar(
        title: new Text('Datahedgehog Monitor'),
      ),
      body:


      new SizedBox(


        height: SizeConfig.safeBlockVertical * 100, //10 for example
        width: SizeConfig.safeBlockHorizontal * 100,
        child: new SingleChildScrollView(
          child:
          new Column(
              mainAxisAlignment: MainAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[

                new Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    mainAxisSize: MainAxisSize.max,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: <Widget>[
                      Expanded(
                        flex: 2,
                    child:  new SizedBox(
                        width: 300.0,
                        height: 100.0,

                        child: new Container(
                          decoration: BoxDecoration(
                              color: Colors.cyanAccent,
                              border: Border.all(color: Colors.black)
                          ),
                          child : Text(
                            "Contenedor",
                            style: new TextStyle(fontSize:45.0,
                                color: const Color(0xFF000000),
                                fontWeight: FontWeight.w900,
                                fontFamily: "Roboto"),
                          ),
                          alignment: Alignment.center,
                        ),
          ),
          ),




                    ]
                ),

                new Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    mainAxisSize: MainAxisSize.max,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: <Widget>[

                      new SizedBox(
                        width: 100.0,
                        height: 100.0,
                        child: new SingleChildScrollView(
                          child:
                          new Column(
                              mainAxisAlignment: MainAxisAlignment.start,
                              mainAxisSize: MainAxisSize.min,
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: <Widget>[
                                Flexible(
                                  fit: FlexFit.loose,
                               child: new SizedBox(
                                    width: 200.0,
                                    height: 36.0,
                                    child:
                                    new Container(
                                      decoration: BoxDecoration(
                                          color: Colors.blue,
                                          border: Border.all(color: Colors.black)
                                      ),
                                      child: Text(
                                        "Humedad",
                                        style: new TextStyle(fontSize:17.0,
                                            color: const Color(0xFFf7efef),
                                            fontWeight: FontWeight.w500,
                                            fontFamily: "Roboto"),
                                      ),


                                      alignment: Alignment.center,
                                      width: 1.7976931348623157e+308,
                                      height: 1.7976931348623157e+308,
                                    )

                          ),
                                ),
                                new SizedBox(
                                  width: 100.0,
                                  height: 70.0,
                                  child:
                                  new Icon(
                                      Icons.filter_drama,
                                      color: const Color(0xFF2453df),
                                      size: 70.0),

                                )
                              ]

                          ),
                        ),
                      ),

                      new SizedBox(
                        width: 100.0,
                        height: 100.0,
                        child: new SingleChildScrollView(

                          child:
                          new Column(
                              mainAxisAlignment: MainAxisAlignment.start,
                              mainAxisSize: MainAxisSize.min,
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: <Widget>[
                                Flexible(
                                  fit: FlexFit.loose,
                                  child: new SizedBox(
                                  width: 200.0,
                                  height: 36.0,
                                  child:
                                  new Container(
                                    decoration: BoxDecoration(
                                        color: Colors.yellow,
                                        border: Border.all(color: Colors.black)
                                    ),
                                    child: Text(
                                      "Temperatura",
                                      style: new TextStyle(fontSize:17.0,
                                          color: const Color(0xFF000000),
                                          fontWeight: FontWeight.w400,
                                          fontFamily: "Roboto"),
                                    ),


                                    alignment: Alignment.center,
                                    width: 1.7976931348623157e+308,
                                    height: 1.7976931348623157e+308,
                                  ),

                                ),

                        ),
                                new SizedBox(
                                  width: 100.0,
                                  height: 70.0,
                                  child:
                                  new Icon(
                                      Icons.whatshot,
                                      color: const Color(0xFFdd950f),
                                      size: 69.0),

                                )
                              ]

                          ),

                        ),
                      ),



                      new SizedBox(
                        width: 100.0,
                        height: 100.0,
                        child: new SingleChildScrollView(
                          child: new IntrinsicWidth(
                          child: new Column(

                              mainAxisAlignment: MainAxisAlignment.start,
                              mainAxisSize: MainAxisSize.min,
                              crossAxisAlignment: CrossAxisAlignment.stretch,
                              children: <Widget>[
                                Flexible(
                                  fit: FlexFit.loose,
                                  child: new SizedBox(
                                  width: 200.0,
                                  height: 36.0,
                                  child:
                                  new Container(
                                    decoration: BoxDecoration(
                                        color: Colors.green,
                                        border: Border.all(color: Colors.black)
                                    ),
                                    child: Text(
                                      "ORP",
                                      style: new TextStyle(fontSize:17.0,
                                          color: const Color(0xFF000000),
                                          fontWeight: FontWeight.w400,
                                          fontFamily: "Roboto"),
                                    ),



                                    alignment: Alignment.center,
                                    width: 1.7976931348623157e+308,
                                    height: 1.7976931348623157e+308,

                                  ),

                                ),
                        ),
                                new SizedBox(
                                  width: 100.0,
                                  height: 70.0,
                                  child:
                                  new Icon(
                                      Icons.show_chart,
                                      color: const Color(0xFF4caf50),
                                      size: 69.0),

                                )
                              ]

                          ),


                        ),
                        ),
                      ),



                    ]
                ),

                new Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    mainAxisSize: MainAxisSize.max,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: <Widget>[
                      new SizedBox(
                        width: 100.0,
                        height: 100.0,
                        child:
                        new Container(
                          decoration: BoxDecoration(
                              color: Colors.blue,
                              border: Border.all(color: Colors.black)
                          ),


                          child: StreamBuilder(
                            stream: Firestore.instance.collection('Contenedor').snapshots(),
                            builder: (context, snapshot){
                              if (snapshot.hasData && snapshot.data.documents.length > 0) {
                                  var H1 = double.parse(
                                      snapshot.data.documents[snapshot.data
                                          .documents.length - 1]['Humedad01']
                                          .toString());

                          if (double.parse(H1.toString()) > 3000)
                            {
                              return getWidgetH(H1);
                            }


                              }

                              if (!snapshot.hasData || snapshot.data.documents.length <= 0) {
                                return Text('Cargando...');
                              }

                              else {

                                return Column(
                                  children: <Widget>[

                                    Text(
                                      "H1: " +
                                          snapshot.data.documents[snapshot.data
                                              .documents.length -
                                              1]['Humedad01'].toString() +
                                          " PPM",
                                      style: new TextStyle(fontSize: 15.0,
                                          color: const Color(0xFF000000),
                                          fontWeight: FontWeight.w900,
                                          fontFamily: "Roboto"),
                                    ),

                                  ],
                                );
                              }
                            },

                          ),

                            alignment: Alignment.center,
                        ),

                      ),


                      new SizedBox(
                        width: 100.0,
                        height: 100.0,
                        child:
                        new Container(
                          decoration: BoxDecoration(
                              color: Colors.yellow,
                              border: Border.all(color: Colors.black)
                          ),
                          child:  StreamBuilder(
                            stream: Firestore.instance.collection('Contenedor').snapshots(),
                            builder: (context, snapshot){


                                  if (snapshot.hasData && snapshot.data.documents.length > 0) {
                                    var T1 = double.parse(
                                        snapshot.data.documents[snapshot.data.documents.length -
                                            1]['Temperatura01'].toString());

                                    if ((double.parse(T1.toString()) > 20))
                                      return getWidgetT(T1);
                                  }

                                  if (!snapshot.hasData || snapshot.data.documents.length <= 0) {
                                    return Text('Cargando...');
                                  }
                              return Column(

                                children: <Widget>[

                                  Text(
                                   "T1: " + snapshot.data.documents[snapshot.data.documents.length-1]['Temperatura01'].toString() + "°C",
                                    style: new TextStyle(fontSize:15.0,
                                        color: const Color(0xFF000000),
                                        fontWeight: FontWeight.w900,
                                        fontFamily: "Roboto"),
                                  ),

                                ],
                              );
                            },

                          ),


                          alignment: Alignment.center,
                        ),



                      ),

                      new SizedBox(
                        width: 100.0,
                        height: 100.0,
                        child:
                        new Container(
                          decoration: BoxDecoration(
                              color: Colors.green,
                              border: Border.all(color: Colors.black)
                          ),
                          child:  StreamBuilder(
                            stream: Firestore.instance.collection('Contenedor').snapshots(),
                            builder: (context, snapshot){
                              if (snapshot.hasData && snapshot.data.documents.length > 0) {
                                var O1 = double.parse(
                                    snapshot.data.documents[snapshot.data.documents.length -
                                        1]['ORP01'].toString());

                                if ((double.parse(O1.toString()) > 200))
                                  return getWidgetO(O1);
                              }

                              if (!snapshot.hasData || snapshot.data.documents.length <= 0) {
                                return Text('Cargando...');
                              }

                              return Column(
                                children: <Widget>[
                                  Text(
                                    "O1: " + snapshot.data.documents[snapshot.data.documents.length-1]['ORP01'].toString() + " mV",
                                    style: new TextStyle(fontSize:15.0,
                                        color: const Color(0xFF000000),
                                        fontWeight: FontWeight.w900,
                                        fontFamily: "Roboto"),
                                  ),

                                ],
                              );
                            },

                          ),
                          alignment: Alignment.center,
                        ),

                      )
                    ]

                ),

                new Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    mainAxisSize: MainAxisSize.max,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: <Widget>[
                      new SizedBox(
                        width: 100.0,
                        height: 100.0,
                        child:
                        new Container(
                          decoration: BoxDecoration(
                              color: Colors.blue,
                              border: Border.all(color: Colors.black)
                          ),
                          child:  StreamBuilder(
                            stream: Firestore.instance.collection('Contenedor').snapshots(),
                            builder: (context, snapshot){
                              if (snapshot.hasData && snapshot.data.documents.length > 0) {
                                var H2 = double.parse(
                                    snapshot.data.documents[snapshot.data
                                        .documents.length - 1]['Humedad02']
                                        .toString());
                                if (double.parse(H2.toString()) > 3000)
                                  return getWidgetH(H2);

                              }

                              if (!snapshot.hasData || snapshot.data.documents.length <= 0) {
                                return Text('Cargando...');
                              }

                              return Column(
                                children: <Widget>[
                                  Text(
                                    "H2: " + snapshot.data.documents[snapshot.data.documents.length-1]['Humedad02'].toString() + " PPM",
                                    style: new TextStyle(fontSize:15.0,
                                        color: const Color(0xFF000000),
                                        fontWeight: FontWeight.w900,
                                        fontFamily: "Roboto"),
                                  ),

                                ],
                              );
                            },

                          ),

                          alignment: Alignment.center,
                        ),

                      ),

                      new SizedBox(
                        width: 100.0,
                        height: 100.0,
                        child:
                        new Container(
                          decoration: BoxDecoration(
                              color: Colors.yellow,
                              border: Border.all(color: Colors.black)
                          ),
                          child:  StreamBuilder(
                            stream: Firestore.instance.collection('Contenedor').snapshots(),
                            builder: (context, snapshot){

                              if (snapshot.hasData && snapshot.data.documents.length > 0) {
                                var T2 = double.parse(
                                    snapshot.data.documents[snapshot.data.documents.length -
                                        1]['Temperatura02'].toString());

                                if ((double.parse(T2.toString()) > 20))
                                  return getWidgetT(T2);
                              }

                              if (!snapshot.hasData || snapshot.data.documents.length <= 0) {
                                return Text('Cargando...');
                              }
                              return Column(
                                children: <Widget>[
                                  Text(
                                    "T2: " + snapshot.data.documents[snapshot.data.documents.length-1]['Temperatura02'].toString() + "°C",
                                    style: new TextStyle(fontSize:15.0,
                                        color: const Color(0xFF000000),
                                        fontWeight: FontWeight.w900,
                                        fontFamily: "Roboto"),
                                  ),

                                ],
                              );
                            },

                          ),
                          alignment: Alignment.center,
                        ),

                      ),

                      new SizedBox(
                        width: 100.0,
                        height: 100.0,
                        child:
                        new Container(
                          decoration: BoxDecoration(
                              color: Colors.green,
                              border: Border.all(color: Colors.black)
                          ),
                          child:  StreamBuilder(
                            stream: Firestore.instance.collection('Contenedor').snapshots(),
                            builder: (context, snapshot){
                              if (snapshot.hasData && snapshot.data.documents.length > 0) {
                                var O2 = double.parse(
                                    snapshot.data.documents[snapshot.data.documents.length -
                                        1]['ORP02'].toString());

                                if ((double.parse(O2.toString()) > 200))
                                  return getWidgetO(O2);
                              }

                            if (!snapshot.hasData || snapshot.data.documents.length <= 0) {
                              return Text('Cargando...');}



                              return Column(
                                children: <Widget>[
                                  Text(
                                    "O2: " + snapshot.data.documents[snapshot.data.documents.length-1]['ORP02'].toString() + "mV",
                                    style: new TextStyle(fontSize:15.0,
                                        color: const Color(0xFF000000),
                                        fontWeight: FontWeight.w900,
                                        fontFamily: "Roboto"),
                                  ),

                                ],
                              );
                            },

                          ),

                          alignment: Alignment.center,
                        ),

                      )
                    ]

                ),

                new Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    mainAxisSize: MainAxisSize.max,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: <Widget>[
                      new SizedBox(
                        width: 100.0,
                        height: 100.0,
                        child:
                        new Container(
                          decoration: BoxDecoration(
                              color: Colors.blue,
                              border: Border.all(color: Colors.black)
                          ),
                          child:  StreamBuilder(
                            stream: Firestore.instance.collection('Contenedor').snapshots(),
                            builder: (context, snapshot){
                              if (snapshot.hasData && snapshot.data.documents.length > 0) {
                                var H3 = double.parse(
                                    snapshot.data.documents[snapshot.data
                                        .documents.length - 1]['Humedad03']
                                        .toString());
                                if (double.parse(H3.toString()) > 3000)
                                  return getWidgetH(H3);

                              }
                              if (!snapshot.hasData || snapshot.data.documents.length <= 0) {
                                return Text('Cargando...');
                              }


                              return Column(
                                children: <Widget>[
                                  Text(
                                    "H3:\n"
                                        ""
                                        "" + snapshot.data.documents[snapshot.data.documents.length-1]['Humedad03'].toString() + " PPM",
                                    style: new TextStyle(fontSize:15.0,
                                        color: const Color(0xFF000000),
                                        fontWeight: FontWeight.w900,
                                        fontFamily: "Roboto"),
                                  ),

                                ],
                              );
                            },

                          ),

                          alignment: Alignment.center,
                        ),

                      ),

                      new SizedBox(
                        width: 100.0,
                        height: 100.0,
                        child:
                        new Container(
                          decoration: BoxDecoration(
                              color: Colors.yellow,
                              border: Border.all(color: Colors.black)
                          ),
                          child:  StreamBuilder(
                            stream: Firestore.instance.collection('Contenedor').snapshots(),
                            builder: (context, snapshot){
                              if (snapshot.hasData && snapshot.data.documents.length > 0) {
                                var T3 = double.parse(
                                    snapshot.data.documents[snapshot.data.documents.length -
                                        1]['Temperatura03'].toString());

                                if ((double.parse(T3.toString()) > 20))
                                  return getWidgetT(T3);
                              }

    if (!snapshot.hasData || snapshot.data.documents.length <= 0) {
      return Text("Cargando...");
    }

                              return Column(
                                children: <Widget>[
                                  Text(
                                    "T3: " + snapshot.data.documents[snapshot.data.documents.length-1]['Temperatura03'].toString() + "°C",
                                    style: new TextStyle(fontSize:15.0,
                                        color: const Color(0xFF000000),
                                        fontWeight: FontWeight.w900,
                                        fontFamily: "Roboto"),
                                  ),

                                ],
                              );
                            },

                          ),
                          alignment: Alignment.center,
                        ),

                      ),

                      new SizedBox(
                        width: 100.0,
                        height: 100.0,
                        child:
                        new Container(
                          decoration: BoxDecoration(
                              color: Colors.green,
                              border: Border.all(color: Colors.black)
                          ),
                          child:  StreamBuilder(
                            stream: Firestore.instance.collection('Contenedor').snapshots(),
                            builder: (context, snapshot){
                              if (snapshot.hasData && snapshot.data.documents.length > 0) {
                                var O3 = double.parse(
                                    snapshot.data.documents[snapshot.data.documents.length -
                                        1]['ORP03'].toString());

                                if ((double.parse(O3.toString()) > 200))
                                  return getWidgetO(O3);
                              }

    if (!snapshot.hasData || snapshot.data.documents.length <= 0) {return Text('Cargando...');}



                              return Column(
                                children: <Widget>[
                                  Text(
                                    "O3: " + snapshot.data.documents[snapshot.data.documents.length-1]['ORP03'].toString() + "mV",
                                    style: new TextStyle(fontSize:15.0,
                                        color: const Color(0xFF000000),
                                        fontWeight: FontWeight.w900,
                                        fontFamily: "Roboto"),
                                  ),

                                ],
                              );
                            },

                          ),
                          alignment: Alignment.center,
                        ),

                      )
                    ]

                ),

                new Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    mainAxisSize: MainAxisSize.max,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: <Widget>[
                      new SizedBox(
                        width: 100.0,
                        height: 100.0,
                        child:
                        new Container(
                          decoration: BoxDecoration(
                              color: Colors.blue,
                              border: Border.all(color: Colors.black)
                          ),
                          child:  StreamBuilder(
                            stream: Firestore.instance.collection('Contenedor').snapshots(),
                            builder: (context, snapshot){
                              if (snapshot.hasData && snapshot.data.documents.length > 0) {
                                var H4 = double.parse(
                                    snapshot.data.documents[snapshot.data
                                        .documents.length - 1]['Humedad04']
                                        .toString());
                                if (double.parse(H4.toString()) > 3000)
                                  return getWidgetH(H4);

                              }
                        if (!snapshot.hasData || snapshot.data.documents.length <= 0) {
                          return Text('Cargando...');
                        }

                              return Column(
                                children: <Widget>[
                                  Text(
                                    "H4: " + snapshot.data.documents[snapshot.data.documents.length-1]['Humedad04'].toString() + " PPM",
                                    style: new TextStyle(fontSize:15.0,
                                        color: const Color(0xFF000000),
                                        fontWeight: FontWeight.w900,
                                        fontFamily: "Roboto"),
                                  ),

                                ],
                              );
                            },

                          ),
                          alignment: Alignment.center,
                        ),

                      ),

                      new SizedBox(
                        width: 100.0,
                        height: 100.0,
                        child:
                        new Container(
                          decoration: BoxDecoration(
                              color: Colors.yellowAccent,
                              border: Border.all(color: Colors.black)
                          ),
                          child:  StreamBuilder(
                            stream: Firestore.instance.collection('Contenedor').snapshots(),
                            builder: (context, snapshot){
                              if (snapshot.hasData && snapshot.data.documents.length > 0) {
                                var T4 = double.parse(
                                    snapshot.data.documents[snapshot.data.documents.length -
                                        1]['Temperatura04'].toString());

                                if ((double.parse(T4.toString()) > 20))
                                  return getWidgetT(T4);
                              }

    if (!snapshot.hasData || snapshot.data.documents.length <= 0) {return Text('Cargando...');}

                              return Column(
                                children: <Widget>[
                                  Text(
                                    "T4: " + snapshot.data.documents[snapshot.data.documents.length-1]['Temperatura04'].toString() + "°C",
                                    style: new TextStyle(fontSize:15.0,
                                        color: const Color(0xFF000000),
                                        fontWeight: FontWeight.w900,
                                        fontFamily: "Roboto"),
                                  ),

                                ],
                              );
                            },

                          ),

                          alignment: Alignment.center,
                        ),

                      ),

                      new SizedBox(
                        width: 100.0,
                        height: 100.0,
                        child:
                        new Container(
                          decoration: BoxDecoration(
                              color: Colors.green,
                              border: Border.all(color: Colors.black)
                          ),
                          child:  StreamBuilder(
                            stream: Firestore.instance.collection('Contenedor').snapshots(),
                            builder: (context, snapshot){
                              if (snapshot.hasData && snapshot.data.documents.length > 0) {
                                var O4 = double.parse(
                                    snapshot.data.documents[snapshot.data.documents.length -
                                        1]['ORP04'].toString());

                                if ((double.parse(O4.toString()) > 200))
                                  return getWidgetO(O4);
                              }

    if (!snapshot.hasData || snapshot.data.documents.length <= 0) {return Text('Cargando...');}
    


                              return Column(
                                children: <Widget>[
                                  Text(
                                    "O4: " + snapshot.data.documents[snapshot.data.documents.length-1]['ORP04'].toString() + "mV",
                                    style: new TextStyle(fontSize:15.0,
                                        color: const Color(0xFF000000),
                                        fontWeight: FontWeight.w900,
                                        fontFamily: "Roboto"),
                                  ),

                                ],
                              );
                            },

                          ),
                          alignment: Alignment.center,
                        ),

                      )
                    ]

                )
              ]

          ),

        ),





    ),

    );

  }


  /// Get the token, save it to the database for current user
  saveDeviceToken() async {
    // Get the current user
    String uid = 'datahedgehogquintay';
    // FirebaseUser user = await _auth.currentUser();

    // Get the token for this device
    String fcmToken = await fcm.getToken();

    // Save it to Firestore
    if (fcmToken != null) {
      var tokens = db
          .collection('Usuarios')
          .document(uid)
          .collection('Tokens')
          .document(fcmToken);

      await tokens.setData({
        'token': fcmToken,
        'Creado en': FieldValue.serverTimestamp(), // optional
        'Plataforma': Platform.operatingSystem // optional
      });
    }
  }




}