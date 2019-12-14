/** Library asset:datahedgehog_monitor/lib/main.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/binding";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/material/colors";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/material/theme_data";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/material/app";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib9 from "@dart2ts.packages/cloud_firestore/lib/cloud_firestore";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/material/app_bar";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/painting/box_border";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/material/icons";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/widgets/icon";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/widgets/single_child_scroll_view";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/material/scaffold";

export var main : () => any = () : any =>  {
    lib3.runApp(new MyApp());
};
export namespace MyApp {
    export type Constructors = lib4.StatelessWidget.Constructors | 'MyApp';
    export type Interface = Omit<MyApp, Constructors>;
}
@DartClass
export class MyApp extends lib4.StatelessWidget {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib4.BuildContext) : lib4.Widget {
        return new lib7.MaterialApp({
            title : 'Datahedgehog Monitor',theme : new lib6.ThemeData({
                primarySwatch : lib5.Colors.blue,primaryColor : new bare.createInstance(any,null,4280391411),accentColor : new bare.createInstance(any,null,4280391411),canvasColor : new bare.createInstance(any,null,4294638330)}),home : new MyHomePage()});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MyApp() {
    }
}

export namespace MyHomePage {
    export type Constructors = lib4.StatefulWidget.Constructors | 'MyHomePage';
    export type Interface = Omit<MyHomePage, Constructors>;
}
@DartClass
export class MyHomePage extends lib4.StatefulWidget {
    constructor(_namedArguments? : {key? : lib8.Key}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MyHomePage(_namedArguments? : {key? : lib8.Key}) {
        let {key} = Object.assign({
        }, _namedArguments );
        super.StatefulWidget({
            key : key});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _MyHomePageState {
        return new _MyHomePageState();
    }
}

export namespace _MyHomePageState {
    export type Constructors = '_MyHomePageState';
    export type Interface = Omit<_MyHomePageState, Constructors>;
}
@DartClass
export class _MyHomePageState extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib4.BuildContext) : lib4.Widget {
        let reviewFlag = false;
        let reviews;
        let info : async.Future<lib9.QuerySnapshot> = lib9.Firestore.instance.collection('Contenedor 1').orderBy('Fecha',{
            descending : true}).getDocuments();
        info.then((docs : lib9.QuerySnapshot) =>  {
            if (docs.documents.isNotEmpty) {
                reviewFlag = true;
                reviews = op(Op.INDEX,docs.documents,0).data;
            }else {
                reviews = "Nada";
            }
        });
        return new lib22.Scaffold({
            appBar : new lib11.AppBar({
                title : new lib10.Text('Datahedgehog Monitor')}),body : new lib18.SizedBox({
                width : 1000.0,height : 1000.0,child : new lib21.SingleChildScrollView({
                    child : new lib18.Column({
                        mainAxisAlignment : lib12.MainAxisAlignment.start,mainAxisSize : lib12.MainAxisSize.min,crossAxisAlignment : lib12.CrossAxisAlignment.center,children : new core.DartList.literal<lib4.Widget>(new lib18.Row({
                            mainAxisAlignment : lib12.MainAxisAlignment.start,mainAxisSize : lib12.MainAxisSize.max,crossAxisAlignment : lib12.CrossAxisAlignment.center,children : new core.DartList.literal<lib4.Widget>(new lib18.SizedBox({
                                width : 300.0,height : 100.0,child : new lib17.Container({
                                    decoration : lib14.BoxDecoration({
                                        color : lib5.Colors.cyanAccent,border : lib13.Border.all({
                                            color : lib5.Colors.black})}),child : lib10.Text("Contenedor 1",{
                                        style : new lib15.TextStyle({
                                            fontSize : 45.0,color : new bare.createInstance(any,null,4278190080),fontWeight : FontWeight.w900,fontFamily : "Roboto"})}),alignment : lib16.Alignment.center})}))}),new lib18.Row({
                            mainAxisAlignment : lib12.MainAxisAlignment.start,mainAxisSize : lib12.MainAxisSize.max,crossAxisAlignment : lib12.CrossAxisAlignment.center,children : new core.DartList.literal<lib4.Widget>(new lib18.SizedBox({
                                width : 100.0,height : 100.0,child : new lib21.SingleChildScrollView({
                                    child : new lib18.Column({
                                        mainAxisAlignment : lib12.MainAxisAlignment.start,mainAxisSize : lib12.MainAxisSize.min,crossAxisAlignment : lib12.CrossAxisAlignment.center,children : new core.DartList.literal<lib4.Widget>(new lib18.SizedBox({
                                            width : 100.0,height : 36.0,child : new lib17.Container({
                                                decoration : lib14.BoxDecoration({
                                                    color : lib5.Colors.blue,border : lib13.Border.all({
                                                        color : lib5.Colors.black})}),child : lib10.Text("Humedad",{
                                                    style : new lib15.TextStyle({
                                                        fontSize : 17.0,color : new bare.createInstance(any,null,4294438895),fontWeight : FontWeight.w500,fontFamily : "Roboto"})}),alignment : lib16.Alignment.center,width : 1.7976931348623157e+308,height : 1.7976931348623157e+308})}),new lib18.SizedBox({
                                            width : 100.0,height : 70.0,child : new lib20.Icon(lib19.Icons.filter_drama,{
                                                color : new bare.createInstance(any,null,4280570847),size : 70.0})}))})})}),new lib18.SizedBox({
                                width : 100.0,height : 100.0,child : new lib21.SingleChildScrollView({
                                    child : new lib18.Column({
                                        mainAxisAlignment : lib12.MainAxisAlignment.start,mainAxisSize : lib12.MainAxisSize.min,crossAxisAlignment : lib12.CrossAxisAlignment.center,children : new core.DartList.literal<lib4.Widget>(new lib18.SizedBox({
                                            width : 100.0,height : 36.0,child : new lib17.Container({
                                                decoration : lib14.BoxDecoration({
                                                    color : lib5.Colors.yellow,border : lib13.Border.all({
                                                        color : lib5.Colors.black})}),child : lib10.Text("Temperatura",{
                                                    style : new lib15.TextStyle({
                                                        fontSize : 17.0,color : new bare.createInstance(any,null,4278190080),fontWeight : FontWeight.w400,fontFamily : "Roboto"})}),alignment : lib16.Alignment.center,width : 1.7976931348623157e+308,height : 1.7976931348623157e+308})}),new lib18.SizedBox({
                                            width : 100.0,height : 70.0,child : new lib20.Icon(lib19.Icons.whatshot,{
                                                color : new bare.createInstance(any,null,4292711695),size : 69.0})}))})})}),new lib18.SizedBox({
                                width : 100.0,height : 100.0,child : new lib21.SingleChildScrollView({
                                    child : new lib18.Column({
                                        mainAxisAlignment : lib12.MainAxisAlignment.start,mainAxisSize : lib12.MainAxisSize.min,crossAxisAlignment : lib12.CrossAxisAlignment.center,children : new core.DartList.literal<lib4.Widget>(new lib18.SizedBox({
                                            width : 100.0,height : 36.0,child : new lib17.Container({
                                                decoration : lib14.BoxDecoration({
                                                    color : lib5.Colors.red,border : lib13.Border.all({
                                                        color : lib5.Colors.black})}),child : lib10.Text("ORP",{
                                                    style : new lib15.TextStyle({
                                                        fontSize : 17.0,color : new bare.createInstance(any,null,4278190080),fontWeight : FontWeight.w400,fontFamily : "Roboto"})}),alignment : lib16.Alignment.center,width : 1.7976931348623157e+308,height : 1.7976931348623157e+308})}),new lib18.SizedBox({
                                            width : 100.0,height : 70.0,child : new lib20.Icon(lib19.Icons.show_chart,{
                                                color : new bare.createInstance(any,null,4293918720),size : 69.0})}))})})}))}),new lib18.Row({
                            mainAxisAlignment : lib12.MainAxisAlignment.start,mainAxisSize : lib12.MainAxisSize.max,crossAxisAlignment : lib12.CrossAxisAlignment.center,children : new core.DartList.literal<lib4.Widget>(new lib18.SizedBox({
                                width : 100.0,height : 100.0,child : new lib17.Container({
                                    decoration : lib14.BoxDecoration({
                                        color : lib5.Colors.blue,border : lib13.Border.all({
                                            color : lib5.Colors.black})}),child : lib10.Text("H1" + " PPM",{
                                        style : new lib15.TextStyle({
                                            fontSize : 15.0,color : new bare.createInstance(any,null,4294966267),fontWeight : FontWeight.w900,fontFamily : "Roboto"})}),alignment : lib16.Alignment.center})}),new lib18.SizedBox({
                                width : 100.0,height : 100.0,child : new lib17.Container({
                                    decoration : lib14.BoxDecoration({
                                        color : lib5.Colors.yellow,border : lib13.Border.all({
                                            color : lib5.Colors.black})}),child : lib10.Text("T1456",{
                                        style : new lib15.TextStyle({
                                            fontSize : 15.0,color : new bare.createInstance(any,null,4278190080),fontWeight : FontWeight.w900,fontFamily : "Roboto"})}),alignment : lib16.Alignment.center})}),new lib18.SizedBox({
                                width : 100.0,height : 100.0,child : new lib17.Container({
                                    decoration : lib14.BoxDecoration({
                                        color : lib5.Colors.red,border : lib13.Border.all({
                                            color : lib5.Colors.black})}),child : lib10.Text("O1" + " mV",{
                                        style : new lib15.TextStyle({
                                            fontSize : 15.0,color : new bare.createInstance(any,null,4278190080),fontWeight : FontWeight.w900,fontFamily : "Roboto"})}),alignment : lib16.Alignment.center})}))}),new lib18.Row({
                            mainAxisAlignment : lib12.MainAxisAlignment.start,mainAxisSize : lib12.MainAxisSize.max,crossAxisAlignment : lib12.CrossAxisAlignment.center,children : new core.DartList.literal<lib4.Widget>(new lib18.SizedBox({
                                width : 100.0,height : 100.0,child : new lib17.Container({
                                    decoration : lib14.BoxDecoration({
                                        color : lib5.Colors.blue,border : lib13.Border.all({
                                            color : lib5.Colors.black})}),child : lib10.Text("H2" + " PPM",{
                                        style : new lib15.TextStyle({
                                            fontSize : 15.0,color : Color(4294439409),fontWeight : FontWeight.w900,fontFamily : "Roboto"})}),alignment : lib16.Alignment.center})}),new lib18.SizedBox({
                                width : 100.0,height : 100.0,child : new lib17.Container({
                                    decoration : lib14.BoxDecoration({
                                        color : lib5.Colors.yellow,border : lib13.Border.all({
                                            color : lib5.Colors.black})}),child : lib10.Text("T2" + " °C",{
                                        style : new lib15.TextStyle({
                                            fontSize : 15.0,color : new bare.createInstance(any,null,4278190080),fontWeight : FontWeight.w900,fontFamily : "Roboto"})}),alignment : lib16.Alignment.center})}),new lib18.SizedBox({
                                width : 100.0,height : 100.0,child : new lib17.Container({
                                    decoration : lib14.BoxDecoration({
                                        color : lib5.Colors.red,border : lib13.Border.all({
                                            color : lib5.Colors.black})}),child : lib10.Text("O2" + " °C",{
                                        style : new lib15.TextStyle({
                                            fontSize : 15.0,color : new bare.createInstance(any,null,4278190080),fontWeight : FontWeight.w900,fontFamily : "Roboto"})}),alignment : lib16.Alignment.center})}))}),new lib18.Row({
                            mainAxisAlignment : lib12.MainAxisAlignment.start,mainAxisSize : lib12.MainAxisSize.max,crossAxisAlignment : lib12.CrossAxisAlignment.center,children : new core.DartList.literal<lib4.Widget>(new lib18.SizedBox({
                                width : 100.0,height : 100.0,child : new lib17.Container({
                                    decoration : lib14.BoxDecoration({
                                        color : lib5.Colors.blue,border : lib13.Border.all({
                                            color : lib5.Colors.black})}),child : lib10.Text("H3" + " °C",{
                                        style : new lib15.TextStyle({
                                            fontSize : 15.0,color : new bare.createInstance(any,null,4294572023),fontWeight : FontWeight.w900,fontFamily : "Roboto"})}),alignment : lib16.Alignment.center})}),new lib18.SizedBox({
                                width : 100.0,height : 100.0,child : new lib17.Container({
                                    decoration : lib14.BoxDecoration({
                                        color : lib5.Colors.yellow,border : lib13.Border.all({
                                            color : lib5.Colors.black})}),child : lib10.Text("T3" + " °C",{
                                        style : new lib15.TextStyle({
                                            fontSize : 15.0,color : new bare.createInstance(any,null,4278190080),fontWeight : FontWeight.w900,fontFamily : "Roboto"})}),alignment : lib16.Alignment.center})}),new lib18.SizedBox({
                                width : 100.0,height : 100.0,child : new lib17.Container({
                                    decoration : lib14.BoxDecoration({
                                        color : lib5.Colors.red,border : lib13.Border.all({
                                            color : lib5.Colors.black})}),child : lib10.Text("O3" + " °C",{
                                        style : new lib15.TextStyle({
                                            fontSize : 15.0,color : new bare.createInstance(any,null,4278190080),fontWeight : FontWeight.w900,fontFamily : "Roboto"})}),alignment : lib16.Alignment.center})}))}),new lib18.Row({
                            mainAxisAlignment : lib12.MainAxisAlignment.start,mainAxisSize : lib12.MainAxisSize.max,crossAxisAlignment : lib12.CrossAxisAlignment.center,children : new core.DartList.literal<lib4.Widget>(new lib18.SizedBox({
                                width : 100.0,height : 100.0,child : new lib17.Container({
                                    decoration : lib14.BoxDecoration({
                                        color : lib5.Colors.blue,border : lib13.Border.all({
                                            color : lib5.Colors.black})}),child : lib10.Text("H4" + " PPM",{
                                        style : new lib15.TextStyle({
                                            fontSize : 15.0,color : new bare.createInstance(any,null,4294702067),fontWeight : FontWeight.w900,fontFamily : "Roboto"})}),alignment : lib16.Alignment.center})}),new lib18.SizedBox({
                                width : 100.0,height : 100.0,child : new lib17.Container({
                                    decoration : lib14.BoxDecoration({
                                        color : lib5.Colors.yellowAccent,border : lib13.Border.all({
                                            color : lib5.Colors.black})}),child : lib10.Text("T4" + " °C",{
                                        style : new lib15.TextStyle({
                                            fontSize : 16.0,color : new bare.createInstance(any,null,4278190080),fontWeight : FontWeight.w900,fontFamily : "Roboto"})}),alignment : lib16.Alignment.center})}),new lib18.SizedBox({
                                width : 100.0,height : 100.0,child : new lib17.Container({
                                    decoration : lib14.BoxDecoration({
                                        color : lib5.Colors.red,border : lib13.Border.all({
                                            color : lib5.Colors.black})}),child : lib10.Text("O4" + " mV",{
                                        style : new lib15.TextStyle({
                                            fontSize : 15.0,color : new bare.createInstance(any,null,4278190080),fontWeight : FontWeight.w900,fontFamily : "Roboto"})}),alignment : lib16.Alignment.center})}))}))})})})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MyHomePageState() {
    }
}

export class properties {
}
