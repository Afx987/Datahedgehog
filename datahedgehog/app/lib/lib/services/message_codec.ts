/** Library asset:datahedgehog_monitor/lib/lib/services/message_codec.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as typed_data from "@dart2ts/dart/typed_data";

export namespace MessageCodec {
    export type Constructors = 'MessageCodec';
    export type Interface<T> = Omit<MessageCodec<T>, Constructors>;
}
@DartClass
export class MessageCodec<T> {
    @Abstract
    encodeMessage(message : T) : typed_data.ByteData{ throw 'abstract'}
    @Abstract
    decodeMessage(message : typed_data.ByteData) : T{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    MessageCodec() {
    }
}

export namespace MethodCall {
    export type Constructors = 'MethodCall';
    export type Interface = Omit<MethodCall, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class MethodCall {
    constructor(method : string,arguments? : any) {
    }
    @defaultConstructor
    MethodCall(method : string,arguments? : any) {
        this.assert = assert;
        this.method = method;
        this.arguments = arguments;
    }
     : any;

    method : string;

    arguments : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.method}, ${this.arguments})`;
    }
}

export namespace MethodCodec {
    export type Constructors = 'MethodCodec';
    export type Interface = Omit<MethodCodec, Constructors>;
}
@DartClass
export class MethodCodec {
    @Abstract
    encodeMethodCall(methodCall : MethodCall) : typed_data.ByteData{ throw 'abstract'}
    @Abstract
    decodeMethodCall(methodCall : typed_data.ByteData) : MethodCall{ throw 'abstract'}
    @Abstract
    decodeEnvelope(envelope : typed_data.ByteData) : any{ throw 'abstract'}
    @Abstract
    encodeSuccessEnvelope(result : any) : typed_data.ByteData{ throw 'abstract'}
    @Abstract
    encodeErrorEnvelope(_namedArguments? : {code? : string,message? : string,details? : any}) : typed_data.ByteData{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    MethodCodec() {
    }
}

export namespace PlatformException {
    export type Constructors = 'PlatformException';
    export type Interface = Omit<PlatformException, Constructors>;
}
@DartClass
@Implements(core.Exception)
export class PlatformException implements core.Exception.Interface {
    constructor(_namedArguments? : {code? : string,message? : string,details? : any}) {
    }
    @defaultConstructor
    PlatformException(_namedArguments? : {code? : string,message? : string,details? : any}) {
        let {code,message,details} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.code = code;
        this.message = message;
        this.details = details;
    }
     : any;

    code : string;

    message : string;

    details : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `PlatformException(${this.code}, ${this.message}, ${this.details})`;
    }
}

export namespace MissingPluginException {
    export type Constructors = 'MissingPluginException';
    export type Interface = Omit<MissingPluginException, Constructors>;
}
@DartClass
@Implements(core.Exception)
export class MissingPluginException implements core.Exception.Interface {
    constructor(message? : string) {
    }
    @defaultConstructor
    MissingPluginException(message? : string) {
        this.message = message;
    }
    message : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `MissingPluginException(${this.message})`;
    }
}

export class properties {
}
