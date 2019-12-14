/** Library asset:datahedgehog_monitor/lib/lib/material/circle_avatar.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/image_provider";
import * as lib6 from "./theme";
import * as lib7 from "./theme_data";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib10 from "./constants";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/painting/box_fit";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/painting/decoration_image";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/painting/box_border";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/widgets/implicit_animations";

export namespace CircleAvatar {
    export type Constructors = lib3.StatelessWidget.Constructors | 'CircleAvatar';
    export type Interface = Omit<CircleAvatar, Constructors>;
}
@DartClass
export class CircleAvatar extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,backgroundColor? : any,backgroundImage? : lib5.ImageProvider<any>,foregroundColor? : any,radius? : double,minRadius? : double,maxRadius? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CircleAvatar(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,backgroundColor? : any,backgroundImage? : lib5.ImageProvider<any>,foregroundColor? : any,radius? : double,minRadius? : double,maxRadius? : double}) {
        let {key,child,backgroundColor,backgroundImage,foregroundColor,radius,minRadius,maxRadius} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.child = child;
        this.backgroundColor = backgroundColor;
        this.backgroundImage = backgroundImage;
        this.foregroundColor = foregroundColor;
        this.radius = radius;
        this.minRadius = minRadius;
        this.maxRadius = maxRadius;
    }
     : any;

    [null](minRadius : any, : any) {
    }
     : any;

     : any;

     : any;

    child : lib3.Widget;

    backgroundColor : any;

    foregroundColor : any;

    backgroundImage : lib5.ImageProvider<any>;

    radius : double;

    minRadius : double;

    maxRadius : double;

    private static __$_defaultRadius : double;
    static get _defaultRadius() : double { 
        if (this.__$_defaultRadius===undefined) {
            this.__$_defaultRadius = 20.0;
        }
        return this.__$_defaultRadius;
    }

    private static __$_defaultMinRadius : double;
    static get _defaultMinRadius() : double { 
        if (this.__$_defaultMinRadius===undefined) {
            this.__$_defaultMinRadius = 0.0;
        }
        return this.__$_defaultMinRadius;
    }

    private static __$_defaultMaxRadius : double;
    static get _defaultMaxRadius() : double { 
        if (this.__$_defaultMaxRadius===undefined) {
            this.__$_defaultMaxRadius = new core.DartDouble(double).infinity;
        }
        return this.__$_defaultMaxRadius;
    }

    get _minDiameter() : double {
        if (this.radius == null && this.minRadius == null && this.maxRadius == null) {
            return CircleAvatar._defaultRadius * 2.0;
        }
        return 2.0 * (((this.radius || this.minRadius) || CircleAvatar._defaultMinRadius));
    }
    get _maxDiameter() : double {
        if (this.radius == null && this.minRadius == null && this.maxRadius == null) {
            return CircleAvatar._defaultRadius * 2.0;
        }
        return 2.0 * (((this.radius || this.maxRadius) || CircleAvatar._defaultMaxRadius));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMediaQuery(context)); */;
        let theme : lib7.ThemeData = lib6.Theme.of(context);
        let textStyle : lib8.TextStyle = theme.primaryTextTheme.subhead.copyWith({
            color : this.foregroundColor});
        let effectiveBackgroundColor : any = this.backgroundColor;
        if (op(Op.EQUALS,effectiveBackgroundColor,null)) {
            switch (lib7.ThemeData.estimateBrightnessForColor(textStyle.color)) {
                case Brightness.dark:
                    effectiveBackgroundColor = theme.primaryColorLight;
                    break;
                case Brightness.light:
                    effectiveBackgroundColor = theme.primaryColorDark;
                    break;
            }
        }else if (op(Op.EQUALS,this.foregroundColor,null)) {
            switch (lib7.ThemeData.estimateBrightnessForColor(this.backgroundColor)) {
                case Brightness.dark:
                    textStyle = textStyle.copyWith({
                        color : theme.primaryColorLight});
                    break;
                case Brightness.light:
                    textStyle = textStyle.copyWith({
                        color : theme.primaryColorDark});
                    break;
            }
        }
        let minDiameter : double = this._minDiameter;
        let maxDiameter : double = this._maxDiameter;
        return lib19.AnimatedContainer({
            constraints : lib9.BoxConstraints({
                minHeight : minDiameter,minWidth : minDiameter,maxWidth : maxDiameter,maxHeight : maxDiameter}),duration : lib10.properties.kThemeChangeDuration,decoration : lib14.BoxDecoration({
                color : effectiveBackgroundColor,image : this.backgroundImage != null ? lib12.DecorationImage({
                    image : this.backgroundImage,fit : lib11.BoxFit.cover}) : null,shape : lib13.BoxShape.circle}),child : op(Op.EQUALS,this.child,null) ? null : lib18.Center({
                child : lib15.MediaQuery({
                    data : lib15.MediaQuery.of(context).copyWith({
                        textScaleFactor : 1.0}),child : lib17.IconTheme({
                        data : theme.iconTheme.copyWith({
                            color : textStyle.color}),child : lib16.DefaultTextStyle({
                            style : textStyle,child : this.child})})})})});
    }
}

export class properties {
}
