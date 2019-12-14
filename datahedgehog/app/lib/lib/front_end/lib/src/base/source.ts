/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/base/source.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "@dart2ts.packages/path/lib/path";

export namespace Source {
    export type Constructors = 'Source';
    export type Interface = Omit<Source, Constructors>;
}
@DartClass
@Implements(any)
export class Source implements any.Interface {
    private static __$EMPTY_LIST : core.DartList<Source>;
    static get EMPTY_LIST() : core.DartList<Source> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<Source>();
        }
        return this.__$EMPTY_LIST;
    }

    @AbstractProperty
    get contents() : any{ throw 'abstract'}
    @AbstractProperty
    get encoding() : string{ throw 'abstract'}
    @AbstractProperty
    get fullName() : string{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get hashCode() : number{ throw 'abstract'}
    @AbstractProperty
    get isInSystemLibrary() : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get librarySource() : Source {
        return null;
    }
    @AbstractProperty
    get modificationStamp() : number{ throw 'abstract'}
    @AbstractProperty
    get shortName() : string{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get source() : Source {
        return this;
    }
    @AbstractProperty
    get uri() : lib3.Uri{ throw 'abstract'}
    @AbstractProperty
    get uriKind() : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean{ throw 'abstract'}
    @Abstract
    exists() : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Source() {
    }
}

export namespace BasicSource {
    export type Constructors = Source.Constructors | 'BasicSource';
    export type Interface = Omit<BasicSource, Constructors>;
}
@DartClass
export class BasicSource extends Source {
    uri : lib3.Uri;

    constructor(uri : lib3.Uri) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BasicSource(uri : lib3.Uri) {
        this.uri = uri;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get encoding() : string {
        return this.uri.toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fullName() : string {
        return this.encoding;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.uri.hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isInSystemLibrary() : boolean {
        return this.uri.scheme == 'dart';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get shortName() : string {
        return lib4.basename(this.fullName);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        return is(object, Source) && op(Op.EQUALS,object.uri,this.uri);
    }
}

export class properties {
}
