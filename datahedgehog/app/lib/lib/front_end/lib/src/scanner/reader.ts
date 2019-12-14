/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/scanner/reader.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace CharacterReader {
    export type Constructors = 'CharacterReader';
    export type Interface = Omit<CharacterReader, Constructors>;
}
@DartClass
export class CharacterReader {
    @AbstractProperty
    get offset() : number{ throw 'abstract'}
    set offset(offset : number){ throw 'abstract'}
    @Abstract
    advance() : number{ throw 'abstract'}
    @Abstract
    getContents() : string{ throw 'abstract'}
    @Abstract
    getString(start : number,endDelta : number) : string{ throw 'abstract'}
    @Abstract
    peek() : number{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    CharacterReader() {
    }
}

export namespace CharSequenceReader {
    export type Constructors = 'CharSequenceReader';
    export type Interface = Omit<CharSequenceReader, Constructors>;
}
@DartClass
@Implements(CharacterReader)
export class CharSequenceReader implements CharacterReader.Interface {
    _sequence : string;

    _stringLength : number;

    _charOffset : number;

    constructor(_sequence : string) {
    }
    @defaultConstructor
    CharSequenceReader(_sequence : string) {
        this._sequence = _sequence;
        this._stringLength = new core.DartString(this._sequence).length;
        this._charOffset = 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get offset() : number {
        return this._charOffset - 1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set offset(offset : number) {
        this._charOffset = offset + 1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    advance() : number {
        if (this._charOffset >= this._stringLength) {
            return -1;
        }
        return new core.DartString(this._sequence).codeUnitAt(this._charOffset++);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getContents() : string {
        return this._sequence;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getString(start : number,endDelta : number) : string {
        return new core.DartString(this._sequence).substring(start,this._charOffset + endDelta);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    peek() : number {
        if (this._charOffset >= this._stringLength) {
            return -1;
        }
        return new core.DartString(this._sequence).codeUnitAt(this._charOffset);
    }
}

export namespace SubSequenceReader {
    export type Constructors = CharSequenceReader.Constructors | 'SubSequenceReader';
    export type Interface = Omit<SubSequenceReader, Constructors>;
}
@DartClass
export class SubSequenceReader extends CharSequenceReader {
    _offsetDelta : number;

    constructor(sequence : string,_offsetDelta : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SubSequenceReader(sequence : string,_offsetDelta : number) {
        super.CharSequenceReader(sequence);
        this._offsetDelta = _offsetDelta;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get offset() : number {
        return this._offsetDelta + super.offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set offset(offset : number) {
        super.offset = offset - this._offsetDelta;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getContents() : string {
        return new core.DartString(super.getContents()).substring(this._offsetDelta);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getString(start : number,endDelta : number) : string {
        return super.getString(start - this._offsetDelta,endDelta);
    }
}

export class properties {
}
