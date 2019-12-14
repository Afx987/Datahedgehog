/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/base/uri_kind.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace UriKind {
    export type Constructors = 'UriKind';
    export type Interface = Omit<UriKind, Constructors>;
}
@DartClass
@Implements(core.DartComparable)
export class UriKind implements core.DartComparable.Interface<UriKind> {
    private static __$DART_URI : UriKind;
    static get DART_URI() : UriKind { 
        if (this.__$DART_URI===undefined) {
            this.__$DART_URI = new UriKind('DART_URI',0,100);
        }
        return this.__$DART_URI;
    }

    private static __$FILE_URI : UriKind;
    static get FILE_URI() : UriKind { 
        if (this.__$FILE_URI===undefined) {
            this.__$FILE_URI = new UriKind('FILE_URI',1,102);
        }
        return this.__$FILE_URI;
    }

    private static __$PACKAGE_URI : UriKind;
    static get PACKAGE_URI() : UriKind { 
        if (this.__$PACKAGE_URI===undefined) {
            this.__$PACKAGE_URI = new UriKind('PACKAGE_URI',2,112);
        }
        return this.__$PACKAGE_URI;
    }

    private static __$values : core.DartList<UriKind>;
    static get values() : core.DartList<UriKind> { 
        if (this.__$values===undefined) {
            this.__$values = new core.DartList.literal(UriKind.DART_URI,UriKind.FILE_URI,UriKind.PACKAGE_URI);
        }
        return this.__$values;
    }

    name : string;

    ordinal : number;

    encoding : number;

    constructor(name : string,ordinal : number,encoding : number) {
    }
    @defaultConstructor
    UriKind(name : string,ordinal : number,encoding : number) {
        this.name = name;
        this.ordinal = ordinal;
        this.encoding = encoding;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compareTo(other : UriKind) : number {
        return this.ordinal - other.ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
    static fromEncoding(encoding : number) : UriKind {
        while (true){
            if (encoding == 100) {
                return UriKind.DART_URI;
            }else if (encoding == 102) {
                return UriKind.FILE_URI;
            }else if (encoding == 112) {
                return UriKind.PACKAGE_URI;
            }
            break;
        }
        return null;
    }
    static fromScheme(scheme : string) : UriKind {
        if (scheme == 'package') {
            return UriKind.PACKAGE_URI;
        }else if (scheme == 'dart') {
            return UriKind.DART_URI;
        }else if (scheme == 'file') {
            return UriKind.FILE_URI;
        }
        return UriKind.FILE_URI;
    }
}

export class properties {
}
