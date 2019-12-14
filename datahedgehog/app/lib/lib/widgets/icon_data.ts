/** Library asset:datahedgehog_monitor/lib/lib/widgets/icon_data.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace IconData {
    export type Constructors = 'IconData';
    export type Interface = Omit<IconData, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class IconData {
    constructor(codePoint : number,_namedArguments? : {fontFamily? : string,fontPackage? : string,matchTextDirection? : boolean}) {
    }
    @defaultConstructor
    IconData(codePoint : number,_namedArguments? : {fontFamily? : string,fontPackage? : string,matchTextDirection? : boolean}) {
        let {fontFamily,fontPackage,matchTextDirection} = Object.assign({
            "matchTextDirection" : false}, _namedArguments );
        this.codePoint = codePoint;
        this.fontFamily = fontFamily;
        this.fontPackage = fontPackage;
        this.matchTextDirection = matchTextDirection;
    }
    codePoint : number;

    fontFamily : string;

    fontPackage : string;

    matchTextDirection : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : IconData = other;
        return this.codePoint == typedOther.codePoint && this.fontFamily == typedOther.fontFamily && this.fontPackage == typedOther.fontPackage && this.matchTextDirection == typedOther.matchTextDirection;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.codePoint,this.fontFamily,this.fontPackage,this.matchTextDirection);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `IconData(U+${new core.DartString(new core.DartString(new core.DartInt(this.codePoint).toRadixString(16)).toUpperCase()).padLeft(5,'0')})`;
    }
}

export class properties {
}
