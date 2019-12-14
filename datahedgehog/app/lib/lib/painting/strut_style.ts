/** Library asset:datahedgehog_monitor/lib/lib/painting/strut_style.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib4 from "./basic_types";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/collections";

export namespace StrutStyle {
    export type Constructors = lib3.Diagnosticable.Constructors | 'StrutStyle';
    export type Interface = Omit<StrutStyle, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class StrutStyle extends lib3.Diagnosticable {
    constructor(_namedArguments? : {fontFamily? : string,fontFamilyFallback? : core.DartList<string>,fontSize? : double,height? : double,leading? : double,fontWeight? : any,fontStyle? : any,forceStrutHeight? : boolean,debugLabel? : string,package? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StrutStyle(_namedArguments? : {fontFamily? : string,fontFamilyFallback? : core.DartList<string>,fontSize? : double,height? : double,leading? : double,fontWeight? : any,fontStyle? : any,forceStrutHeight? : boolean,debugLabel? : string,package? : string}) {
        let {fontFamily,fontFamilyFallback,fontSize,height,leading,fontWeight,fontStyle,forceStrutHeight,debugLabel,package} = Object.assign({
        }, _namedArguments );
        this.fontFamily = package == null ? fontFamily : `packages/${package}/${fontFamily}`;
        this._fontFamilyFallback = fontFamilyFallback;
        this._package = package;
        this.assert = assert;
        this.fontSize = fontSize;
        this.height = height;
        this.leading = leading;
        this.fontWeight = fontWeight;
        this.fontStyle = fontStyle;
        this.forceStrutHeight = forceStrutHeight;
        this.debugLabel = debugLabel;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    [null](package : any, : any) {
    }
    [null](fontFamily : any, : any) {
    }
     : any;

    fontFamily : string;

    get fontFamilyFallback() : core.DartList<string> {
        if (this._package != null && this._fontFamilyFallback != null) return this._fontFamilyFallback.map((family : string) =>  {
            return `packages/${this._package}/${family}`;
        }).toList();
        return this._fontFamilyFallback;
    }
    _fontFamilyFallback : core.DartList<string>;

    _package : string;

    fontSize : double;

    height : double;

    fontWeight : any;

    fontStyle : any;

    leading : double;

    forceStrutHeight : boolean;

    debugLabel : string;

    compareTo(other : StrutStyle) : lib4.RenderComparison {
        if (core.identical(this,other)) return lib4.RenderComparison.identical;
        if (this.fontFamily != other.fontFamily || this.fontSize != other.fontSize || this.fontWeight != other.fontWeight || this.fontStyle != other.fontStyle || this.height != other.height || this.leading != other.leading || this.forceStrutHeight != other.forceStrutHeight || !lib5.listEquals(this.fontFamilyFallback,other.fontFamilyFallback)) return lib4.RenderComparison.layout;
        return lib4.RenderComparison.identical;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : StrutStyle = other;
        return this.fontFamily == typedOther.fontFamily && this.fontSize == typedOther.fontSize && op(Op.EQUALS,this.fontWeight,typedOther.fontWeight) && op(Op.EQUALS,this.fontStyle,typedOther.fontStyle) && this.height == typedOther.height && this.leading == typedOther.leading && this.forceStrutHeight == typedOther.forceStrutHeight;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.fontFamily,this.fontSize,this.fontWeight,this.fontStyle,this.height,this.leading,this.forceStrutHeight);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib3.DiagnosticPropertiesBuilder,_namedArguments? : {prefix? : string}) : any {
        let {prefix} = Object.assign({
            "prefix" : ''}, _namedArguments );
        super.debugFillProperties(properties);
        if (this.debugLabel != null) properties.add(lib3.MessageProperty(`${prefix}debugLabel`,this.debugLabel));
        let styles : core.DartList<lib3.DiagnosticsNode> = new core.DartList.literal<lib3.DiagnosticsNode>();
        styles.add(lib3.StringProperty(`${prefix}family`,this.fontFamily,{
            defaultValue : null,quoted : false}));
        styles.add(lib3.IterableProperty(`${prefix}familyFallback`,this.fontFamilyFallback,{
            defaultValue : null}));
        styles.add(lib3.DoubleProperty(`${prefix}size`,this.fontSize,{
            defaultValue : null}));
        let weightDescription : string;
        if (this.fontWeight != null) {
            weightDescription = `${op(Op.PLUS,this.fontWeight.index,1)}00`;
        }
        styles.add(lib3.DiagnosticsProperty(`${prefix}weight`,this.fontWeight,{
            description : weightDescription,defaultValue : null}));
        styles.add(lib3.EnumProperty(`${prefix}style`,this.fontStyle,{
            defaultValue : null}));
        styles.add(lib3.DoubleProperty(`${prefix}height`,this.height,{
            unit : 'x',defaultValue : null}));
        styles.add(lib3.FlagProperty(`${prefix}forceStrutHeight`,{
            value : this.forceStrutHeight,defaultValue : null}));
        let styleSpecified : boolean = styles.any((n : lib3.DiagnosticsNode) =>  {
            return !n.isFiltered(lib3.DiagnosticLevel.info);
        });
        styles.forEach(properties.add.bind(properties));
        if (!styleSpecified) properties.add(lib3.FlagProperty('forceStrutHeight',{
            value : this.forceStrutHeight,ifTrue : `${prefix}<strut height forced>`,ifFalse : `${prefix}<strut height normal>`}));
    }
}

export class properties {
}
