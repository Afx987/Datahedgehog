/** Library asset:datahedgehog_monitor/lib/lib/widgets/image_icon.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/image_provider";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib6 from "./icon_theme";
import * as lib7 from "./icon_theme_data";
import * as lib8 from "./basic";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/box_fit";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib11 from "./image";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export namespace ImageIcon {
    export type Constructors = lib3.StatelessWidget.Constructors | 'ImageIcon';
    export type Interface = Omit<ImageIcon, Constructors>;
}
@DartClass
export class ImageIcon extends lib3.StatelessWidget {
    constructor(image : lib4.ImageProvider<any>,_namedArguments? : {key? : lib5.Key,size? : double,color? : any,semanticLabel? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ImageIcon(image : lib4.ImageProvider<any>,_namedArguments? : {key? : lib5.Key,size? : double,color? : any,semanticLabel? : string}) {
        let {key,size,color,semanticLabel} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.image = image;
        this.size = size;
        this.color = color;
        this.semanticLabel = semanticLabel;
    }
    image : lib4.ImageProvider<any>;

    size : double;

    color : any;

    semanticLabel : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let iconTheme : lib7.IconThemeData = lib6.IconTheme.of(context);
        let iconSize : double = (this.size || iconTheme.size);
        if (op(Op.EQUALS,this.image,null)) return lib8.Semantics({
            label : this.semanticLabel,child : lib8.SizedBox({
                width : iconSize,height : iconSize})});
        let iconOpacity : double = iconTheme.opacity;
        let iconColor : any = (this.color || iconTheme.color);
        if (iconOpacity != null && iconOpacity != 1.0) iconColor = iconColor.withOpacity(op(Op.TIMES,iconColor.opacity,iconOpacity));
        return lib8.Semantics({
            label : this.semanticLabel,child : lib11.Image({
                image : this.image,width : iconSize,height : iconSize,color : iconColor,fit : lib9.BoxFit.scaleDown,alignment : lib10.Alignment.center,excludeFromSemantics : true})});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib12.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib12.DiagnosticsProperty('image',this.image,{
            ifNull : '<empty>',showName : false}));
        properties.add(lib12.DoubleProperty('size',this.size,{
            defaultValue : null}));
        properties.add(lib12.DiagnosticsProperty('color',this.color,{
            defaultValue : null}));
    }
}

export class properties {
}
