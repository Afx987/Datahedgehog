/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/utilities_dart.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var setElementDocumentationComment : (element : any,node : any) => void = (element : any,node : any) : void =>  {
    let comment : any = node.documentationComment;
    if (comment != null && comment.isDocumentation) {
        element.documentationComment = comment.tokens.map((t : any) =>  {
            return t.lexeme;
        }).join('\n');
    }
};
export var startsWith : (uri1 : lib3.Uri,uri2 : lib3.Uri) => boolean = (uri1 : lib3.Uri,uri2 : lib3.Uri) : boolean =>  {
    let uri1Segments : core.DartList<string> = uri1.pathSegments;
    let uri2Segments : core.DartList<string> = uri2.pathSegments.toList();
    if (uri2Segments.isEmpty) {
        return false;
    }
    if (uri2Segments.last == '') {
        uri2Segments.removeLast();
    }
    if (uri2Segments.length > uri1Segments.length) {
        return false;
    }
    for(let i : number = 0; i < uri2Segments.length; ++i){
        if (uri2Segments[i] != uri1Segments[i]) {
            return false;
        }
    }
    return true;
};
export namespace ParameterKind {
    export type Constructors = 'ParameterKind';
    export type Interface = Omit<ParameterKind, Constructors>;
}
@DartClass
@Implements(core.DartComparable)
export class ParameterKind implements core.DartComparable.Interface<ParameterKind> {
    private static __$REQUIRED : ParameterKind;
    static get REQUIRED() : ParameterKind { 
        if (this.__$REQUIRED===undefined) {
            this.__$REQUIRED = new ParameterKind('REQUIRED',0,false);
        }
        return this.__$REQUIRED;
    }

    private static __$POSITIONAL : ParameterKind;
    static get POSITIONAL() : ParameterKind { 
        if (this.__$POSITIONAL===undefined) {
            this.__$POSITIONAL = new ParameterKind('POSITIONAL',1,true);
        }
        return this.__$POSITIONAL;
    }

    private static __$NAMED : ParameterKind;
    static get NAMED() : ParameterKind { 
        if (this.__$NAMED===undefined) {
            this.__$NAMED = new ParameterKind('NAMED',2,true);
        }
        return this.__$NAMED;
    }

    private static __$values : core.DartList<ParameterKind>;
    static get values() : core.DartList<ParameterKind> { 
        if (this.__$values===undefined) {
            this.__$values = new core.DartList.literal(ParameterKind.REQUIRED,ParameterKind.POSITIONAL,ParameterKind.NAMED);
        }
        return this.__$values;
    }

    name : string;

    ordinal : number;

    isOptional : boolean;

    constructor(name : string,ordinal : number,isOptional : boolean) {
    }
    @defaultConstructor
    ParameterKind(name : string,ordinal : number,isOptional : boolean) {
        this.name = name;
        this.ordinal = ordinal;
        this.isOptional = isOptional;
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
    compareTo(other : ParameterKind) : number {
        return this.ordinal - other.ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
}

export class properties {
}
