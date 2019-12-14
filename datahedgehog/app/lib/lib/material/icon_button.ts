/** Library asset:datahedgehog_monitor/lib/lib/material/icon_button.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib7 from "./theme";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme_data";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib12 from "./tooltip";
import * as lib13 from "./material";
import * as math from "@dart2ts/dart/math";
import * as lib15 from "./ink_well";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export namespace IconButton {
    export type Constructors = lib3.StatelessWidget.Constructors | 'IconButton';
    export type Interface = Omit<IconButton, Constructors>;
}
@DartClass
export class IconButton extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,iconSize? : double,padding? : lib5.EdgeInsetsGeometry,alignment? : lib6.AlignmentGeometry,icon? : lib3.Widget,color? : any,highlightColor? : any,splashColor? : any,disabledColor? : any,onPressed? : any,tooltip? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IconButton(_namedArguments? : {key? : lib4.Key,iconSize? : double,padding? : lib5.EdgeInsetsGeometry,alignment? : lib6.AlignmentGeometry,icon? : lib3.Widget,color? : any,highlightColor? : any,splashColor? : any,disabledColor? : any,onPressed? : any,tooltip? : string}) {
        let {key,iconSize,padding,alignment,icon,color,highlightColor,splashColor,disabledColor,onPressed,tooltip} = Object.assign({
            "iconSize" : 24.0,
            "padding" : new lib5.EdgeInsets.all(8.0),
            "alignment" : lib6.Alignment.center}, _namedArguments );
        this.assert = assert;
        this.iconSize = iconSize;
        this.padding = padding;
        this.alignment = alignment;
        this.icon = icon;
        this.color = color;
        this.highlightColor = highlightColor;
        this.splashColor = splashColor;
        this.disabledColor = disabledColor;
        this.onPressed = onPressed;
        this.tooltip = tooltip;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    iconSize : double;

    padding : lib5.EdgeInsetsGeometry;

    alignment : lib6.AlignmentGeometry;

    icon : lib3.Widget;

    color : any;

    splashColor : any;

    highlightColor : any;

    disabledColor : any;

    onPressed : any;

    tooltip : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterial(context)); */;
        let currentColor : any;
        if (this.onPressed != null) currentColor = this.color;else currentColor = (this.disabledColor || lib7.Theme.of(context).disabledColor);
        let result : lib3.Widget = lib11.Semantics({
            button : true,enabled : this.onPressed != null,child : lib11.ConstrainedBox({
                constraints : new lib8.BoxConstraints({
                    minWidth : properties._kMinButtonSize,minHeight : properties._kMinButtonSize}),child : lib11.Padding({
                    padding : this.padding,child : lib11.SizedBox({
                        height : this.iconSize,width : this.iconSize,child : lib11.Align({
                            alignment : this.alignment,child : lib10.IconTheme.merge({
                                data : lib9.IconThemeData({
                                    size : this.iconSize,color : currentColor}),child : this.icon})})})})})});
        if (this.tooltip != null) {
            result = lib12.Tooltip({
                message : this.tooltip,child : result});
        }
        return lib15.InkResponse({
            onTap : this.onPressed,child : result,highlightColor : (this.highlightColor || lib7.Theme.of(context).highlightColor),splashColor : (this.splashColor || lib7.Theme.of(context).splashColor),radius : math.max(lib13.Material.defaultSplashRadius,(this.iconSize + math.min(this.padding.horizontal,this.padding.vertical)) * 0.7)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib16.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib16.DiagnosticsProperty('icon',this.icon,{
            showName : false}));
        properties.add(lib16.ObjectFlagProperty('onPressed',this.onPressed,{
            ifNull : 'disabled'}));
        properties.add(lib16.StringProperty('tooltip',this.tooltip,{
            defaultValue : null,quoted : false}));
    }
}

export class properties {
    private static __$_kMinButtonSize : double;
    static get _kMinButtonSize() : double { 
        if (this.__$_kMinButtonSize===undefined) {
            this.__$_kMinButtonSize = 48.0;
        }
        return this.__$_kMinButtonSize;
    }
    static set _kMinButtonSize(__$value : double)  { 
        this.__$_kMinButtonSize = __$value;
    }

}
