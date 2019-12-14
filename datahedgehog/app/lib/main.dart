import 'dart:async';
import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
void main() {
  runApp(new MyApp());
}
class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Datahedgehog Monitor',
      theme: new ThemeData(
        primarySwatch: Colors.blue,
        primaryColor: const Color(0xFF2196f3),
        accentColor: const Color(0xFF2196f3),
        canvasColor: const Color(0xFFfafafa),
      ),
      home: new MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key}) : super(key: key);
  @override
  _MyHomePageState createState() => new _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {





  @override
  Widget build(BuildContext context) {

    var reviewFlag = false;
    var reviews;
    Future<QuerySnapshot> info = Firestore.instance.collection('Contenedor 1')
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

    });

    return new Scaffold(
      appBar: new AppBar(
        title: new Text('Datahedgehog Monitor'),
      ),
      body:

      new SizedBox(
        width: 1000.0,
        height: 1000.0,
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
                      new SizedBox(
                        width: 300.0,
                        height: 100.0,
                        child:
                        new Container(
                          decoration: BoxDecoration(
                              color: Colors.cyanAccent,
                              border: Border.all(color: Colors.black)
                          ),
                          child : Text(
                            "Contenedor 1",
                            style: new TextStyle(fontSize:45.0,
                                color: const Color(0xFF000000),
                                fontWeight: FontWeight.w900,
                                fontFamily: "Roboto"),
                          ),
                          alignment: Alignment.center,
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
                                new SizedBox(
                                    width: 100.0,
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
                                new SizedBox(
                                  width: 100.0,
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

                          child:
                          new Column(
                              mainAxisAlignment: MainAxisAlignment.start,
                              mainAxisSize: MainAxisSize.min,
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: <Widget>[
                                new SizedBox(
                                  width: 100.0,
                                  height: 36.0,
                                  child:
                                  new Container(
                                    decoration: BoxDecoration(
                                        color: Colors.red,
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

                                new SizedBox(
                                  width: 100.0,
                                  height: 70.0,
                                  child:
                                  new Icon(
                                      Icons.show_chart,
                                      color: const Color(0xFFF00000),
                                      size: 69.0),

                                )
                              ]

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
                          child: Text(
                            "H1" + " PPM",
                            style: new TextStyle(fontSize:15.0,
                                color: const Color(0xFFfffbfb),
                                fontWeight: FontWeight.w900,
                                fontFamily: "Roboto"),
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
                          child: Text(
                            "T1456",
                            style: new TextStyle(fontSize:15.0,
                                color: const Color(0xFF000000),
                                fontWeight: FontWeight.w900,
                                fontFamily: "Roboto"),
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
                              color: Colors.red,
                              border: Border.all(color: Colors.black)
                          ),
                          child: Text(
                            "O1" + " mV",
                            style: new TextStyle(fontSize:15.0,
                                color: const Color(0xFF000000),
                                fontWeight: FontWeight.w900,
                                fontFamily: "Roboto"),
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
                          child: Text(
                            "H2" + " PPM",
                            style: new TextStyle(fontSize:15.0,
                                color: Color(0xFFf7f1f1),
                                fontWeight: FontWeight.w900,
                                fontFamily: "Roboto"),
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
                          child:
                          Text(
                            "T2" +  " °C",
                            style: new TextStyle(fontSize:15.0,
                                color: const Color(0xFF000000),
                                fontWeight: FontWeight.w900,
                                fontFamily: "Roboto"),
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
                              color: Colors.red,
                              border: Border.all(color: Colors.black)
                          ),
                          child: Text(
                            "O2" + " °C",
                            style: new TextStyle(fontSize:15.0,
                                color: const Color(0xFF000000),
                                fontWeight: FontWeight.w900,
                                fontFamily: "Roboto"),
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
                          child: Text(
                            "H3" + " °C" ,
                            style: new TextStyle(fontSize:15.0,
                                color: const Color(0xFFf9f7f7),
                                fontWeight: FontWeight.w900,
                                fontFamily: "Roboto"),
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
                          child: Text(
                            "T3" + " °C",
                            style: new TextStyle(fontSize:15.0,
                                color: const Color(0xFF000000),
                                fontWeight: FontWeight.w900,
                                fontFamily: "Roboto"),
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
                              color: Colors.red,
                              border: Border.all(color: Colors.black)
                          ),
                          child: Text(
                            "O3" + " °C",
                            style: new TextStyle(fontSize:15.0,
                                color: const Color(0xFF000000),
                                fontWeight: FontWeight.w900,
                                fontFamily: "Roboto"),
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
                          child: Text(
                            "H4" +  " PPM",
                            style: new TextStyle(fontSize:15.0,
                                color: const Color(0xFFfbf3f3),
                                fontWeight: FontWeight.w900,
                                fontFamily: "Roboto"),
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
                          child:  Text(
                            "T4" + " °C",
                            style: new TextStyle(fontSize:16.0,
                                color: const Color(0xFF000000),
                                fontWeight: FontWeight.w900,
                                fontFamily: "Roboto"),
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
                              color: Colors.red,
                              border: Border.all(color: Colors.black)
                          ),
                          child:  Text(
                            "O4" +  " mV",
                            style: new TextStyle(fontSize:15.0,
                                color: const Color(0xFF000000),
                                fontWeight: FontWeight.w900,
                                fontFamily: "Roboto"),
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
}