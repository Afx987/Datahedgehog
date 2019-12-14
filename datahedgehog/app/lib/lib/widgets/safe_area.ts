/** Library asset:datahedgehog_monitor/lib/lib/widgets/safe_area.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib6 from "./media_query";
import * as math from "@dart2ts/dart/math";
import * as lib8 from "./basic";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export namespace SafeArea {
    export type Constructors = lib3.StatelessWidget.Constructors | 'SafeArea';
    export type Interface = Omit<SafeArea, Constructors>;
}
@DartClass
export class SafeArea extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,left? : boolean,top? : boolean,right? : boolean,bottom? : boolean,minimum? : lib5.EdgeInsets,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SafeArea(_namedArguments? : {key? : lib4.Key,left? : boolean,top? : boolean,right? : boolean,bottom? : boolean,minimum? : lib5.EdgeInsets,child? : lib3.Widget}) {
        let {key,left,top,right,bottom,minimum,child} = Object.assign({
            "left" : true,
            "top" : true,
            "right" : true,
            "bottom" : true,
            "minimum" : lib5.EdgeInsets.zero}, _namedArguments );
        this.assert = assert;
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.minimum = minimum;
        this.child = child;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    left : boolean;

    top : boolean;

    right : boolean;

    bottom : boolean;

    minimum : lib5.EdgeInsets;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMediaQuery(context)); */;
        let padding : lib5.EdgeInsets = lib6.MediaQuery.of(context).padding;
        return lib8.Padding({
            padding : lib5.EdgeInsets.only({
                left : math.max(this.left ? padding.left : 0.0,this.minimum.left),top : math.max(this.top ? padding.top : 0.0,this.minimum.top),right : math.max(this.right ? padding.right : 0.0,this.minimum.right),bottom : math.max(this.bottom ? padding.bottom : 0.0,this.minimum.bottom)}),child : lib6.MediaQuery.removePadding({
                context : context,removeLeft : this.left,removeTop : this.top,removeRight : this.right,removeBottom : this.bottom,child : this.child})});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib9.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib9.FlagProperty('left',{
            value : this.left,ifTrue : 'avoid left padding'}));
        properties.add(lib9.FlagProperty('top',{
            value : this.left,ifTrue : 'avoid top padding'}));
        properties.add(lib9.FlagProperty('right',{
            value : this.left,ifTrue : 'avoid right padding'}));
        properties.add(lib9.FlagProperty('bottom',{
            value : this.left,ifTrue : 'avoid bottom padding'}));
    }
}

export namespace SliverSafeArea {
    export type Constructors = lib3.StatelessWidget.Constructors | 'SliverSafeArea';
    export type Interface = Omit<SliverSafeArea, Constructors>;
}
@DartClass
export class SliverSafeArea extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,left? : boolean,top? : boolean,right? : boolean,bottom? : boolean,minimum? : lib5.EdgeInsets,sliver? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverSafeArea(_namedArguments? : {key? : lib4.Key,left? : boolean,top? : boolean,right? : boolean,bottom? : boolean,minimum? : lib5.EdgeInsets,sliver? : lib3.Widget}) {
        let {key,left,top,right,bottom,minimum,sliver} = Object.assign({
            "left" : true,
            "top" : true,
            "right" : true,
            "bottom" : true,
            "minimum" : lib5.EdgeInsets.zero}, _namedArguments );
        this.assert = assert;
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.minimum = minimum;
        this.sliver = sliver;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    left : boolean;

    top : boolean;

    right : boolean;

    bottom : boolean;

    minimum : lib5.EdgeInsets;

    sliver : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMediaQuery(context)); */;
        let padding : lib5.EdgeInsets = lib6.MediaQuery.of(context).padding;
        return lib8.SliverPadding({
            padding : lib5.EdgeInsets.only({
                left : math.max(this.left ? padding.left : 0.0,this.minimum.left),top : math.max(this.top ? padding.top : 0.0,this.minimum.top),right : math.max(this.right ? padding.right : 0.0,this.minimum.right),bottom : math.max(this.bottom ? padding.bottom : 0.0,this.minimum.bottom)}),sliver : lib6.MediaQuery.removePadding({
                context : context,removeLeft : this.left,removeTop : this.top,removeRight : this.right,removeBottom : this.bottom,child : this.sliver})});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib9.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib9.FlagProperty('left',{
            value : this.left,ifTrue : 'avoid left padding'}));
        properties.add(lib9.FlagProperty('top',{
            value : this.left,ifTrue : 'avoid top padding'}));
        properties.add(lib9.FlagProperty('right',{
            value : this.left,ifTrue : 'avoid right padding'}));
        properties.add(lib9.FlagProperty('bottom',{
            value : this.left,ifTrue : 'avoid bottom padding'}));
    }
}

export class properties {
}
