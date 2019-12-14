/** Library asset:datahedgehog_monitor/lib/lib/widgets/text.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/rendering/paragraph";
import * as lib7 from "./basic";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/strut_style";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/painting/text_span";
import * as lib11 from "./media_query";

export namespace DefaultTextStyle {
    export type Constructors = lib3.InheritedWidget.Constructors | 'DefaultTextStyle' | 'fallback';
    export type Interface = Omit<DefaultTextStyle, Constructors>;
}
@DartClass
export class DefaultTextStyle extends lib3.InheritedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,style? : lib5.TextStyle,textAlign? : any,softWrap? : boolean,overflow? : lib6.TextOverflow,maxLines? : number,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DefaultTextStyle(_namedArguments? : {key? : lib4.Key,style? : lib5.TextStyle,textAlign? : any,softWrap? : boolean,overflow? : lib6.TextOverflow,maxLines? : number,child? : lib3.Widget}) {
        let {key,style,textAlign,softWrap,overflow,maxLines,child} = Object.assign({
            "softWrap" : true,
            "overflow" : lib6.TextOverflow.clip}, _namedArguments );
        this.assert = assert;
        this.style = style;
        this.textAlign = textAlign;
        this.softWrap = softWrap;
        this.overflow = overflow;
        this.maxLines = maxLines;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    key;
    child;

     : any;

    @namedConstructor
    fallback() {
        this.style = new lib5.TextStyle();
        this.textAlign = null;
        this.softWrap = true;
        this.maxLines = null;
        this.overflow = lib6.TextOverflow.clip;
    }
    static fallback : new() => DefaultTextStyle;

    static merge(_namedArguments? : {key? : lib4.Key,style? : lib5.TextStyle,textAlign? : any,softWrap? : boolean,overflow? : lib6.TextOverflow,maxLines? : number,child? : lib3.Widget}) : lib3.Widget {
        let {key,style,textAlign,softWrap,overflow,maxLines,child} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        return lib7.Builder({
            builder : (context : lib3.BuildContext) =>  {
                let parent : DefaultTextStyle = DefaultTextStyle.of(context);
                return DefaultTextStyle({
                    key : key,style : parent.style.merge(style),textAlign : (textAlign || parent.textAlign),softWrap : (softWrap || parent.softWrap),overflow : (overflow || parent.overflow),maxLines : (maxLines || parent.maxLines),child : child});
            }});
    }
    style : lib5.TextStyle;

    textAlign : any;

    softWrap : boolean;

    overflow : lib6.TextOverflow;

    maxLines : number;

    static of(context : lib3.BuildContext) : DefaultTextStyle {
        return (context.inheritFromWidgetOfExactType(DefaultTextStyle) || new DefaultTextStyle.fallback());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(oldWidget : DefaultTextStyle) : boolean {
        return this.style != oldWidget.style || this.textAlign != oldWidget.textAlign || this.softWrap != oldWidget.softWrap || this.overflow != oldWidget.overflow || this.maxLines != oldWidget.maxLines;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib8.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        ((_968_)=>(!!_968_)?_968_.debugFillProperties(properties):null)(this.style);
        properties.add(lib8.EnumProperty('textAlign',this.textAlign,{
            defaultValue : null}));
        properties.add(lib8.FlagProperty('softWrap',{
            value : this.softWrap,ifTrue : 'wrapping at box width',ifFalse : 'no wrapping except at line break characters',showName : true}));
        properties.add(lib8.EnumProperty('overflow',this.overflow,{
            defaultValue : null}));
        properties.add(lib8.IntProperty('maxLines',this.maxLines,{
            defaultValue : null}));
    }
}

export namespace Text {
    export type Constructors = lib3.StatelessWidget.Constructors | 'Text' | 'rich';
    export type Interface = Omit<Text, Constructors>;
}
@DartClass
export class Text extends lib3.StatelessWidget {
    constructor(data : any,_namedArguments? : {key? : lib4.Key,style? : lib5.TextStyle,strutStyle? : lib9.StrutStyle,textAlign? : any,textDirection? : any,locale? : any,softWrap? : boolean,overflow? : lib6.TextOverflow,textScaleFactor? : double,maxLines? : number,semanticsLabel? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Text(data : any,_namedArguments? : {key? : lib4.Key,style? : lib5.TextStyle,strutStyle? : lib9.StrutStyle,textAlign? : any,textDirection? : any,locale? : any,softWrap? : boolean,overflow? : lib6.TextOverflow,textScaleFactor? : double,maxLines? : number,semanticsLabel? : string}) {
        let {key,style,strutStyle,textAlign,textDirection,locale,softWrap,overflow,textScaleFactor,maxLines,semanticsLabel} = Object.assign({
        }, _namedArguments );
        this.textSpan = null;
        this.data = null;
        this.assert = assert;
        this.data = data;
        this.style = style;
        this.strutStyle = strutStyle;
        this.textAlign = textAlign;
        this.textDirection = textDirection;
        this.locale = locale;
        this.softWrap = softWrap;
        this.overflow = overflow;
        this.textScaleFactor = textScaleFactor;
        this.maxLines = maxLines;
        this.semanticsLabel = semanticsLabel;
    }
     : any;

    textSpan;
    super;

     : any;

     : any;

    @namedConstructor
    rich(textSpan : any,_namedArguments? : {key? : lib4.Key,style? : lib5.TextStyle,strutStyle? : lib9.StrutStyle,textAlign? : any,textDirection? : any,locale? : any,softWrap? : boolean,overflow? : lib6.TextOverflow,textScaleFactor? : double,maxLines? : number,semanticsLabel? : string}) {
        let {key,style,strutStyle,textAlign,textDirection,locale,softWrap,overflow,textScaleFactor,maxLines,semanticsLabel} = Object.assign({
        }, _namedArguments );
        this.textSpan = null;
        this.data = null;
        this.assert = assert;
        this.textSpan = textSpan;
        this.style = style;
        this.strutStyle = strutStyle;
        this.textAlign = textAlign;
        this.textDirection = textDirection;
        this.locale = locale;
        this.softWrap = softWrap;
        this.overflow = overflow;
        this.textScaleFactor = textScaleFactor;
        this.maxLines = maxLines;
        this.semanticsLabel = semanticsLabel;
    }
    static rich : new(textSpan : any,_namedArguments? : {key? : lib4.Key,style? : lib5.TextStyle,strutStyle? : lib9.StrutStyle,textAlign? : any,textDirection? : any,locale? : any,softWrap? : boolean,overflow? : lib6.TextOverflow,textScaleFactor? : double,maxLines? : number,semanticsLabel? : string}) => Text;

     : any;

    data;
    super;

     : any;

     : any;

    data : string;

    textSpan : lib10.TextSpan;

    style : lib5.TextStyle;

    strutStyle : lib9.StrutStyle;

    textAlign : any;

    textDirection : any;

    locale : any;

    softWrap : boolean;

    overflow : lib6.TextOverflow;

    textScaleFactor : double;

    maxLines : number;

    semanticsLabel : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let defaultTextStyle : DefaultTextStyle = DefaultTextStyle.of(context);
        let effectiveTextStyle : lib5.TextStyle = this.style;
        if (op(Op.EQUALS,this.style,null) || this.style.inherit) effectiveTextStyle = defaultTextStyle.style.merge(this.style);
        if (lib11.MediaQuery.boldTextOverride(context)) effectiveTextStyle = effectiveTextStyle.merge(new lib5.TextStyle({
            fontWeight : FontWeight.bold}));
        let result : lib3.Widget = lib7.RichText({
            textAlign : ((this.textAlign || defaultTextStyle.textAlign) || TextAlign.start),textDirection : this.textDirection,locale : this.locale,softWrap : (this.softWrap || defaultTextStyle.softWrap),overflow : (this.overflow || defaultTextStyle.overflow),textScaleFactor : (this.textScaleFactor || lib11.MediaQuery.textScaleFactorOf(context)),maxLines : (this.maxLines || defaultTextStyle.maxLines),strutStyle : this.strutStyle,text : lib10.TextSpan({
                style : effectiveTextStyle,text : this.data,children : this.textSpan != null ? new core.DartList.literal<lib10.TextSpan>(this.textSpan) : null})});
        if (this.semanticsLabel != null) {
            result = lib7.Semantics({
                textDirection : this.textDirection,label : this.semanticsLabel,child : lib7.ExcludeSemantics({
                    child : result})});
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib8.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib8.StringProperty('data',this.data,{
            showName : false}));
        if (this.textSpan != null) {
            properties.add(this.textSpan.toDiagnosticsNode({
                name : 'textSpan',style : lib8.DiagnosticsTreeStyle.transition}));
        }
        ((_969_)=>(!!_969_)?_969_.debugFillProperties(properties):null)(this.style);
        properties.add(lib8.EnumProperty('textAlign',this.textAlign,{
            defaultValue : null}));
        properties.add(lib8.EnumProperty('textDirection',this.textDirection,{
            defaultValue : null}));
        properties.add(lib8.DiagnosticsProperty('locale',this.locale,{
            defaultValue : null}));
        properties.add(lib8.FlagProperty('softWrap',{
            value : this.softWrap,ifTrue : 'wrapping at box width',ifFalse : 'no wrapping except at line break characters',showName : true}));
        properties.add(lib8.EnumProperty('overflow',this.overflow,{
            defaultValue : null}));
        properties.add(lib8.DoubleProperty('textScaleFactor',this.textScaleFactor,{
            defaultValue : null}));
        properties.add(lib8.IntProperty('maxLines',this.maxLines,{
            defaultValue : null}));
        if (this.semanticsLabel != null) {
            properties.add(lib8.StringProperty('semanticsLabel',this.semanticsLabel));
        }
    }
}

export class properties {
}
