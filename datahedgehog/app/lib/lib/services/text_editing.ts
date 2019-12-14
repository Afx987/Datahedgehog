/** Library asset:datahedgehog_monitor/lib/lib/services/text_editing.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace TextRange {
    export type Constructors = 'TextRange' | 'collapsed';
    export type Interface = Omit<TextRange, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class TextRange {
    constructor(_namedArguments? : {start? : any,end? : any}) {
    }
    @defaultConstructor
    TextRange(_namedArguments? : {start? : any,end? : any}) {
        let {start,end} = Object.assign({
        }, _namedArguments );
        this.start = offset;
        this.end = offset;
        this.assert = assert;
        this.start = start;
        this.end = end;
    }
     : any;

     : any;

     : any;

     : any;

    @namedConstructor
    collapsed(offset : number) {
        this.start = offset;
        this.end = offset;
        this.assert = assert;
    }
    static collapsed : new(offset : number) => TextRange;

     : any;

     : any;

    start;
    end;

    private static __$empty : TextRange;
    static get empty() : TextRange { 
        if (this.__$empty===undefined) {
            this.__$empty = TextRange({
                start : -1,end : -1});
        }
        return this.__$empty;
    }

    start : number;

    end : number;

    get isValid() : boolean {
        return op(Op.GEQ,this.start,0) && op(Op.GEQ,this.end,0);
    }
    get isCollapsed() : boolean {
        return op(Op.EQUALS,this.start,this.end);
    }
    get isNormalized() : boolean {
        return op(Op.GEQ,this.end,this.start);
    }
    textBefore(text : string) : string {
        /* TODO (AssertStatementImpl) : assert (isNormalized); */;
        return new core.DartString(text).substring(0,this.start);
    }
    textAfter(text : string) : string {
        /* TODO (AssertStatementImpl) : assert (isNormalized); */;
        return new core.DartString(text).substring(this.end);
    }
    textInside(text : string) : string {
        /* TODO (AssertStatementImpl) : assert (isNormalized); */;
        return new core.DartString(text).substring(this.start,this.end);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (isNot(other, TextRange)) return false;
        let typedOther : TextRange = other;
        return op(Op.EQUALS,typedOther.start,this.start) && op(Op.EQUALS,typedOther.end,this.end);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.start.hashCode,this.end.hashCode);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `TextRange(start: ${this.start}, end: ${this.end})`;
    }
}

export namespace TextSelection {
    export type Constructors = TextRange.Constructors | 'TextSelection' | 'collapsed' | 'fromPosition';
    export type Interface = Omit<TextSelection, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class TextSelection extends TextRange {
    constructor(_namedArguments? : {baseOffset? : number,extentOffset? : number,affinity? : any,isDirectional? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TextSelection(_namedArguments? : {baseOffset? : number,extentOffset? : number,affinity? : any,isDirectional? : boolean}) {
        let {baseOffset,extentOffset,affinity,isDirectional} = Object.assign({
            "affinity" : TextAffinity.downstream,
            "isDirectional" : false}, _namedArguments );
        super.TextRange({
            start : baseOffset < extentOffset ? baseOffset : extentOffset,end : baseOffset < extentOffset ? extentOffset : baseOffset});
        this.baseOffset = baseOffset;
        this.extentOffset = extentOffset;
        this.affinity = affinity;
        this.isDirectional = isDirectional;
    }
    @namedConstructor
    collapsed(_namedArguments? : {offset? : number,affinity? : any}) {
        let {offset,affinity} = Object.assign({
            "affinity" : TextAffinity.downstream}, _namedArguments );
        this.baseOffset = offset;
        this.extentOffset = offset;
        this.isDirectional = false;
        super.collapsed(offset);
        this.affinity = affinity;
    }
    static collapsed : new(_namedArguments? : {offset? : number,affinity? : any}) => TextSelection;

    @namedConstructor
    fromPosition(position : any) {
        this.baseOffset = position.offset;
        this.extentOffset = position.offset;
        this.affinity = position.affinity;
        this.isDirectional = false;
        super.collapsed(position.offset);
    }
    static fromPosition : new(position : any) => TextSelection;

    baseOffset : number;

    extentOffset : number;

    affinity : any;

    isDirectional : boolean;

    get base() : any {
        return TextPosition({
            offset : this.baseOffset,affinity : this.affinity});
    }
    get extent() : any {
        return TextPosition({
            offset : this.extentOffset,affinity : this.affinity});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(baseOffset: ${this.baseOffset}, extentOffset: ${this.extentOffset}, affinity: ${this.affinity}, isDirectional: ${this.isDirectional})`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (isNot(other, TextSelection)) return false;
        let typedOther : TextSelection = other;
        return typedOther.baseOffset == this.baseOffset && typedOther.extentOffset == this.extentOffset && op(Op.EQUALS,typedOther.affinity,this.affinity) && typedOther.isDirectional == this.isDirectional;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(new core.DartInt(this.baseOffset).hashCode,new core.DartInt(this.extentOffset).hashCode,this.affinity.hashCode,this.isDirectional.hashCode);
    }
    copyWith(_namedArguments? : {baseOffset? : number,extentOffset? : number,affinity? : any,isDirectional? : boolean}) : TextSelection {
        let {baseOffset,extentOffset,affinity,isDirectional} = Object.assign({
        }, _namedArguments );
        return TextSelection({
            baseOffset : (baseOffset || this.baseOffset),extentOffset : (extentOffset || this.extentOffset),affinity : (affinity || this.affinity),isDirectional : (isDirectional || this.isDirectional)});
    }
}

export class properties {
}
