/** Library asset:datahedgehog_monitor/lib/lib/material/flutter_logo.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./colors";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/flutter_logo";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme_data";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/widgets/implicit_animations";

export namespace FlutterLogo {
    export type Constructors = lib3.StatelessWidget.Constructors | 'FlutterLogo';
    export type Interface = Omit<FlutterLogo, Constructors>;
}
@DartClass
export class FlutterLogo extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,size? : double,colors? : lib5.MaterialColor,textColor? : any,style? : lib6.FlutterLogoStyle,duration? : core.DartDuration,curve? : lib7.Curve}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FlutterLogo(_namedArguments? : {key? : lib4.Key,size? : double,colors? : lib5.MaterialColor,textColor? : any,style? : lib6.FlutterLogoStyle,duration? : core.DartDuration,curve? : lib7.Curve}) {
        let {key,size,colors,textColor,style,duration,curve} = Object.assign({
            "textColor" : new bare.createInstance(any,null,4284572001),
            "style" : lib6.FlutterLogoStyle.markOnly,
            "duration" : new core.DartDuration({
                milliseconds : 750}),
            "curve" : lib7.Curves.fastOutSlowIn}, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.size = size;
        this.colors = colors;
        this.textColor = textColor;
        this.style = style;
        this.duration = duration;
        this.curve = curve;
    }
    size : double;

    colors : lib5.MaterialColor;

    textColor : any;

    style : lib6.FlutterLogoStyle;

    duration : core.DartDuration;

    curve : lib7.Curve;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let iconTheme : lib9.IconThemeData = lib8.IconTheme.of(context);
        let iconSize : double = (this.size || iconTheme.size);
        let logoColors : lib5.MaterialColor = (this.colors || lib5.Colors.blue);
        return lib10.AnimatedContainer({
            width : iconSize,height : iconSize,duration : this.duration,curve : this.curve,decoration : lib6.FlutterLogoDecoration({
                lightColor : logoColors.shade400,darkColor : logoColors.shade900,style : this.style,textColor : this.textColor})});
    }
}

export class properties {
}
