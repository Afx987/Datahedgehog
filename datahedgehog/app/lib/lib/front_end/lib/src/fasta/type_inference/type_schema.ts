/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/type_inference/type_schema.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var isKnown : (schema : any) => boolean = (schema : any) : boolean =>  {
    return schema.accept(new _IsKnownVisitor());
};
export var typeSchemaToString : (schema : any) => string = (schema : any) : string =>  {
    let buffer : core.DartStringBuffer = new core.DartStringBuffer();
    new TypeSchemaPrinter(buffer,{
        syntheticNames : globalDebuggingNames}).writeNode(schema);
    return `${buffer}`;
};
export namespace TypeSchemaPrinter {
    export type Constructors = 'TypeSchemaPrinter';
    export type Interface = Omit<TypeSchemaPrinter, Constructors>;
}
@DartClass
@Implements(TypeSchemaVisitor)
export class TypeSchemaPrinter extends any implements TypeSchemaVisitor.Interface<core.Null> {
    constructor(sink : core.DartStringSink,_namedArguments? : {syntheticNames? : any,showExternal? : boolean,showOffsets? : boolean,importTable? : any,annotator? : any}) {
    }
    @defaultConstructor
    TypeSchemaPrinter(sink : core.DartStringSink,_namedArguments? : {syntheticNames? : any,showExternal? : boolean,showOffsets? : boolean,importTable? : any,annotator? : any}) {
        let {syntheticNames,showExternal,showOffsets,importTable,annotator} = Object.assign({
            "showOffsets" : false}, _namedArguments );
        super.DartObject(sink,{
            syntheticNames : syntheticNames,showExternal : showExternal,showOffsets : showOffsets,importTable : importTable,annotator : annotator});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitUnknownType(node : UnknownType) {
        writeWord('?');
    }
}

export namespace TypeSchemaVisitor {
    export type Constructors = 'TypeSchemaVisitor';
    export type Interface<R> = Omit<TypeSchemaVisitor<R>, Constructors>;
}
@DartClass
export class TypeSchemaVisitor<R> extends any {
    visitUnknownType(node : UnknownType) : R {
        return defaultDartType(node);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeSchemaVisitor() {
    }
}

export namespace UnknownType {
    export type Constructors = 'UnknownType';
    export type Interface = Omit<UnknownType, Constructors>;
}
@DartClass
export class UnknownType extends any {
    constructor() {
    }
    @defaultConstructor
    UnknownType() {
    }
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        return is(other, UnknownType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(v : any) {
        if (is(v, TypeSchemaVisitor<any>)) {
            return v.visitUnknownType(this);
        }else {
            return v.defaultDartType(this);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(v : any) {
    }
}

export namespace _IsKnownVisitor {
    export type Constructors = TypeSchemaVisitor.Constructors | '_IsKnownVisitor';
    export type Interface = Omit<_IsKnownVisitor, Constructors>;
}
@DartClass
export class _IsKnownVisitor extends TypeSchemaVisitor<boolean> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    defaultDartType(node : any) : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionType(node : any) : boolean {
        if (!node.returnType.accept(this)) return false;
        for(let parameterType of node.positionalParameters) {
            if (!parameterType.accept(this)) return false;
        }
        for(let namedParameterType of node.namedParameters) {
            if (!namedParameterType.type.accept(this)) return false;
        }
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitInterfaceType(node : any) : boolean {
        for(let typeArgument of node.typeArguments) {
            if (!typeArgument.accept(this)) return false;
        }
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypedefType(node : any) : boolean {
        for(let typeArgument of node.typeArguments) {
            if (!typeArgument.accept(this)) return false;
        }
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitUnknownType(node : UnknownType) : boolean {
        return false;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _IsKnownVisitor() {
    }
}

export class properties {
}
