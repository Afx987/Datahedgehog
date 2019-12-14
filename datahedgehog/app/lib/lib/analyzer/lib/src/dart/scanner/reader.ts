/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/scanner/reader.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace CharacterRangeReader {
    export type Constructors = 'CharacterRangeReader';
    export type Interface = Omit<CharacterRangeReader, Constructors>;
}
@DartClass
export class CharacterRangeReader extends any {
    baseReader : any;

    startIndex : number;

    endIndex : number;

    constructor(baseReader : any,startIndex : number,endIndex : number) {
    }
    @defaultConstructor
    CharacterRangeReader(baseReader : any,startIndex : number,endIndex : number) {
        this.baseReader = baseReader;
        this.startIndex = startIndex;
        this.endIndex = endIndex;
        this.baseReader.offset = this.startIndex - 1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get offset() : number {
        return this.baseReader.offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set offset(offset : number) {
        this.baseReader.offset = offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    advance() : number {
        if (op(Op.GEQ,op(Op.PLUS,this.baseReader.offset,1),this.endIndex)) {
            return -1;
        }
        return this.baseReader.advance();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getContents() : string {
        return this.baseReader.getContents().substring(this.startIndex,this.endIndex);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getString(start : number,endDelta : number) : string {
        return this.baseReader.getString(start,endDelta);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    peek() : number {
        if (op(Op.GEQ,op(Op.PLUS,this.baseReader.offset,1),this.endIndex)) {
            return -1;
        }
        return this.baseReader.peek();
    }
}

export class properties {
}
