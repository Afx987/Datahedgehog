/** Library asset:datahedgehog_monitor/lib/lib/material/divider.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./theme";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/painting/box_border";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/basic";

export namespace Divider {
    export type Constructors = lib3.StatelessWidget.Constructors | 'Divider';
    export type Interface = Omit<Divider, Constructors>;
}
@DartClass
export class Divider extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,height? : double,indent? : double,color? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Divider(_namedArguments? : {key? : lib4.Key,height? : double,indent? : double,color? : any}) {
        let {key,height,indent,color} = Object.assign({
            "height" : 16.0,
            "indent" : 0.0}, _namedArguments );
        this.assert = assert;
        this.height = height;
        this.indent = indent;
        this.color = color;
    }
     : any;

     : any;

     : any;

    height : double;

    indent : double;

    color : any;

    static createBorderSide(context : lib3.BuildContext,_namedArguments? : {color? : any,width? : double}) : lib6.BorderSide {
        let {color,width} = Object.assign({
            "width" : 0.0}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (width != null); */;
        return lib6.BorderSide({
            color : (color || lib5.Theme.of(context).dividerColor),width : width});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib11.SizedBox({
            height : this.height,child : lib11.Center({
                child : lib10.Container({
                    height : 0.0,margin : lib7.EdgeInsetsDirectional.only({
                        start : this.indent}),decoration : lib9.BoxDecoration({
                        border : lib8.Border({
                            bottom : Divider.createBorderSide(context,{
                                color : this.color})})})})})});
    }
}

export namespace VerticalDivider {
    export type Constructors = lib3.StatelessWidget.Constructors | 'VerticalDivider';
    export type Interface = Omit<VerticalDivider, Constructors>;
}
@DartClass
export class VerticalDivider extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,width? : double,indent? : double,color? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VerticalDivider(_namedArguments? : {key? : lib4.Key,width? : double,indent? : double,color? : any}) {
        let {key,width,indent,color} = Object.assign({
            "width" : 16.0,
            "indent" : 0.0}, _namedArguments );
        this.assert = assert;
        this.width = width;
        this.indent = indent;
        this.color = color;
    }
     : any;

     : any;

     : any;

    width : double;

    indent : double;

    color : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib11.SizedBox({
            width : this.width,child : lib11.Center({
                child : lib10.Container({
                    width : 0.0,margin : lib7.EdgeInsetsDirectional.only({
                        start : this.indent}),decoration : lib9.BoxDecoration({
                        border : lib8.Border({
                            left : Divider.createBorderSide(context,{
                                color : this.color})})})})})});
    }
}

export class properties {
}
