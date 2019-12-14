/** Library asset:datahedgehog_monitor/lib/lib/material/bottom_app_bar.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/notched_shapes";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib8 from "./scaffold";
import * as lib9 from "./bottom_app_bar_theme";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/painting/rounded_rectangle_border";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/rendering/proxy_box";
import * as lib12 from "./theme";
import * as lib13 from "./material";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/safe_area";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/widgets/basic";

export namespace BottomAppBar {
    export type Constructors = lib3.StatefulWidget.Constructors | 'BottomAppBar';
    export type Interface = Omit<BottomAppBar, Constructors>;
}
@DartClass
export class BottomAppBar extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,color? : any,elevation? : double,shape? : lib5.NotchedShape,clipBehavior? : any,notchMargin? : double,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BottomAppBar(_namedArguments? : {key? : lib4.Key,color? : any,elevation? : double,shape? : lib5.NotchedShape,clipBehavior? : any,notchMargin? : double,child? : lib3.Widget}) {
        let {key,color,elevation,shape,clipBehavior,notchMargin,child} = Object.assign({
            "clipBehavior" : Clip.none,
            "notchMargin" : 4.0}, _namedArguments );
        this.assert = assert;
        this.color = color;
        this.elevation = elevation;
        this.shape = shape;
        this.clipBehavior = clipBehavior;
        this.notchMargin = notchMargin;
        this.child = child;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    child : lib3.Widget;

    color : any;

    elevation : double;

    shape : lib5.NotchedShape;

    clipBehavior : any;

    notchMargin : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : any {
        return _BottomAppBarState();
    }
}

export namespace _BottomAppBarState {
    export type Constructors = '_BottomAppBarState';
    export type Interface = Omit<_BottomAppBarState, Constructors>;
}
@DartClass
export class _BottomAppBarState extends any {
    geometryListenable : lib6.ValueListenable<lib8.ScaffoldGeometry>;

    private static __$_defaultElevation : double;
    static get _defaultElevation() : double { 
        if (this.__$_defaultElevation===undefined) {
            this.__$_defaultElevation = 8.0;
        }
        return this.__$_defaultElevation;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        super.didChangeDependencies();
        this.geometryListenable = lib8.Scaffold.geometryOf(lib7.properties.context);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let babTheme : lib9.BottomAppBarTheme = lib9.BottomAppBarTheme.of(context);
        let notchedShape : lib5.NotchedShape = (widget.shape || babTheme.shape);
        let clipper : lib11.CustomClipper<any> = notchedShape != null ? _BottomAppBarClipper({
            geometry : this.geometryListenable,shape : notchedShape,notchMargin : widget.notchMargin}) : new lib11.ShapeBorderClipper({
            shape : lib10.RoundedRectangleBorder()});
        return lib15.PhysicalShape({
            clipper : clipper,elevation : ((widget.elevation || babTheme.elevation) || _BottomAppBarState._defaultElevation),color : ((widget.color || babTheme.color) || lib12.Theme.of(context).bottomAppBarColor),clipBehavior : widget.clipBehavior,child : lib13.Material({
                type : lib13.MaterialType.transparency,child : op(Op.EQUALS,widget.child,null) ? null : lib14.SafeArea({
                    child : widget.child})})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _BottomAppBarState() {
    }
}

export namespace _BottomAppBarClipper {
    export type Constructors = lib11.CustomClipper.Constructors | '_BottomAppBarClipper';
    export type Interface = Omit<_BottomAppBarClipper, Constructors>;
}
@DartClass
export class _BottomAppBarClipper extends lib11.CustomClipper<any> {
    constructor(_namedArguments? : {geometry? : lib6.ValueListenable<lib8.ScaffoldGeometry>,shape? : lib5.NotchedShape,notchMargin? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _BottomAppBarClipper(_namedArguments? : {geometry? : lib6.ValueListenable<lib8.ScaffoldGeometry>,shape? : lib5.NotchedShape,notchMargin? : double}) {
        let {geometry,shape,notchMargin} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.geometry = geometry;
        this.shape = shape;
        this.notchMargin = notchMargin;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    geometry : lib6.ValueListenable<lib8.ScaffoldGeometry>;

    shape : lib5.NotchedShape;

    notchMargin : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getClip(size : any) : any {
        let button : any = ((_720_)=>(!!_720_)?_720_.translate(0.0,this.geometry.value.bottomNavigationBarTop * -1.0):null)(this.geometry.value.floatingActionButtonArea);
        return this.shape.getOuterPath(op(Op.BITAND,Offset.zero,size),((_721_)=>(!!_721_)?_721_.inflate(this.notchMargin):null)(button));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldReclip(oldClipper : _BottomAppBarClipper) : boolean {
        return oldClipper.geometry != this.geometry || oldClipper.shape != this.shape || oldClipper.notchMargin != this.notchMargin;
    }
}

export class properties {
}
