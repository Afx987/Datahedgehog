/** Library asset:datahedgehog_monitor/lib/lib/widgets/icon.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "./icon_data";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib6 from "./basic";
import * as lib7 from "./icon_theme";
import * as lib8 from "./icon_theme_data";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/painting/text_span";
import * as lib11 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export namespace Icon {
    export type Constructors = lib3.StatelessWidget.Constructors | 'Icon';
    export type Interface = Omit<Icon, Constructors>;
}
@DartClass
export class Icon extends lib3.StatelessWidget {
    constructor(icon : lib4.IconData,_namedArguments? : {key? : lib5.Key,size? : double,color? : any,semanticLabel? : string,textDirection? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Icon(icon : lib4.IconData,_namedArguments? : {key? : lib5.Key,size? : double,color? : any,semanticLabel? : string,textDirection? : any}) {
        let {key,size,color,semanticLabel,textDirection} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.icon = icon;
        this.size = size;
        this.color = color;
        this.semanticLabel = semanticLabel;
        this.textDirection = textDirection;
    }
    icon : lib4.IconData;

    size : double;

    color : any;

    semanticLabel : string;

    textDirection : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (this.textDirection != null || debugCheckHasDirectionality(context)); */;
        let textDirection : any = (this.textDirection || lib6.Directionality.of(context));
        let iconTheme : lib8.IconThemeData = lib7.IconTheme.of(context);
        let iconSize : double = (this.size || iconTheme.size);
        if (op(Op.EQUALS,this.icon,null)) {
            return lib6.Semantics({
                label : this.semanticLabel,child : lib6.SizedBox({
                    width : iconSize,height : iconSize})});
        }
        let iconOpacity : double = iconTheme.opacity;
        let iconColor : any = (this.color || iconTheme.color);
        if (iconOpacity != 1.0) iconColor = iconColor.withOpacity(op(Op.TIMES,iconColor.opacity,iconOpacity));
        let iconWidget : lib3.Widget = lib6.RichText({
            textDirection : textDirection,text : lib10.TextSpan({
                text : new core.DartString(string).fromCharCode(this.icon.codePoint),style : lib9.TextStyle({
                    inherit : false,color : iconColor,fontSize : iconSize,fontFamily : this.icon.fontFamily,package : this.icon.fontPackage})})});
        if (this.icon.matchTextDirection) {
            switch (textDirection) {
                case TextDirection.rtl:
                    iconWidget = lib6.Transform({
                        transform : ((_) : any =>  {
                            {
                                scale(-1.0,1.0,1.0);
                                return _;
                            }
                        })(lib11.Matrix4.identity()),alignment : lib12.Alignment.center,transformHitTests : false,child : iconWidget});
                    break;
                case TextDirection.ltr:
                    break;
            }
        }
        return lib6.Semantics({
            label : this.semanticLabel,child : lib6.ExcludeSemantics({
                child : lib6.SizedBox({
                    width : iconSize,height : iconSize,child : lib6.Center({
                        child : iconWidget})})})});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib13.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib13.DiagnosticsProperty('icon',this.icon,{
            ifNull : '<empty>',showName : false}));
        properties.add(lib13.DoubleProperty('size',this.size,{
            defaultValue : null}));
        properties.add(lib13.DiagnosticsProperty('color',this.color,{
            defaultValue : null}));
    }
}

export class properties {
}
