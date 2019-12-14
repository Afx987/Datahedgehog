/** Library asset:datahedgehog_monitor/lib/lib/material/card.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib7 from "./card_theme";
import * as lib8 from "./material";
import * as lib9 from "./theme";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/painting/border_radius";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/painting/rounded_rectangle_border";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/widgets/container";

export namespace Card {
    export type Constructors = lib3.StatelessWidget.Constructors | 'Card';
    export type Interface = Omit<Card, Constructors>;
}
@DartClass
export class Card extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,color? : any,elevation? : double,shape? : lib5.ShapeBorder,borderOnForeground? : boolean,margin? : lib6.EdgeInsetsGeometry,clipBehavior? : any,child? : lib3.Widget,semanticContainer? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Card(_namedArguments? : {key? : lib4.Key,color? : any,elevation? : double,shape? : lib5.ShapeBorder,borderOnForeground? : boolean,margin? : lib6.EdgeInsetsGeometry,clipBehavior? : any,child? : lib3.Widget,semanticContainer? : boolean}) {
        let {key,color,elevation,shape,borderOnForeground,margin,clipBehavior,child,semanticContainer} = Object.assign({
            "borderOnForeground" : true,
            "semanticContainer" : true}, _namedArguments );
        this.assert = assert;
        this.color = color;
        this.elevation = elevation;
        this.shape = shape;
        this.borderOnForeground = borderOnForeground;
        this.margin = margin;
        this.clipBehavior = clipBehavior;
        this.child = child;
        this.semanticContainer = semanticContainer;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    color : any;

    elevation : double;

    shape : lib5.ShapeBorder;

    borderOnForeground : boolean;

    clipBehavior : any;

    margin : lib6.EdgeInsetsGeometry;

    semanticContainer : boolean;

    child : lib3.Widget;

    private static __$_defaultElevation : double;
    static get _defaultElevation() : double { 
        if (this.__$_defaultElevation===undefined) {
            this.__$_defaultElevation = 1.0;
        }
        return this.__$_defaultElevation;
    }

    private static __$_defaultClipBehavior : any;
    static get _defaultClipBehavior() : any { 
        if (this.__$_defaultClipBehavior===undefined) {
            this.__$_defaultClipBehavior = Clip.none;
        }
        return this.__$_defaultClipBehavior;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let cardTheme : lib7.CardTheme = lib7.CardTheme.of(context);
        return lib12.Semantics({
            container : this.semanticContainer,child : lib13.Container({
                margin : ((this.margin || cardTheme.margin) || new lib6.EdgeInsets.all(4.0)),child : lib8.Material({
                    type : lib8.MaterialType.card,color : ((this.color || cardTheme.color) || lib9.Theme.of(context).cardColor),elevation : ((this.elevation || cardTheme.elevation) || Card._defaultElevation),shape : ((this.shape || cardTheme.shape) || new lib11.RoundedRectangleBorder({
                        borderRadius : lib10.BorderRadius.all(Radius.circular(4.0))})),borderOnForeground : this.borderOnForeground,clipBehavior : ((this.clipBehavior || cardTheme.clipBehavior) || Card._defaultClipBehavior),child : lib12.Semantics({
                        explicitChildNodes : !this.semanticContainer,child : this.child})})})});
    }
}

export class properties {
}
