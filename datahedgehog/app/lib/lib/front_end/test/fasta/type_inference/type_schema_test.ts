/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/fasta/type_inference/type_schema_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(UnknownTypeTest);
    });
};
export namespace UnknownTypeTest {
    export type Constructors = 'UnknownTypeTest';
    export type Interface = Omit<UnknownTypeTest, Constructors>;
}
@DartClass
export class UnknownTypeTest {
    private static __$unknownType;
    static get unknownType() { 
        if (this.__$unknownType===undefined) {
            this.__$unknownType = new bare.createInstance(any,null);
        }
        return this.__$unknownType;
    }

    test_equality() : void {
        expect(UnknownTypeTest.unknownType,equals(UnknownTypeTest.unknownType));
        expect(UnknownTypeTest.unknownType,equals(new bare.createInstance(any,null)));
        expect(UnknownTypeTest.unknownType,isNot(equals(new bare.createInstance(any,null))));
    }
    test_isKnown() : void {
        expect(isKnown(UnknownTypeTest.unknownType),isFalse);
        expect(isKnown(new bare.createInstance(any,null)),isTrue);
        let classA = new bare.createInstance(any,null,{
            name : 'A'});
        let A = new bare.createInstance(any,null,classA);
        let typedefF = new bare.createInstance(any,null,'F',A);
        expect(isKnown(A),isTrue);
        expect(isKnown(new bare.createInstance(any,null,classA,new core.DartList.literal(A))),isTrue);
        expect(isKnown(new bare.createInstance(any,null,classA,new core.DartList.literal(UnknownTypeTest.unknownType))),isFalse);
        expect(isKnown(new bare.createInstance(any,null,new core.DartList.literal(),new bare.createInstance(any,null))),isTrue);
        expect(isKnown(new bare.createInstance(any,null,new core.DartList.literal(),UnknownTypeTest.unknownType)),isFalse);
        expect(isKnown(new bare.createInstance(any,null,new core.DartList.literal(A),new bare.createInstance(any,null))),isTrue);
        expect(isKnown(new bare.createInstance(any,null,new core.DartList.literal(UnknownTypeTest.unknownType),new bare.createInstance(any,null))),isFalse);
        expect(isKnown(new bare.createInstance(any,null,new core.DartList.literal(),new bare.createInstance(any,null),{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'x',A))})),isTrue);
        expect(isKnown(new bare.createInstance(any,null,new core.DartList.literal(),new bare.createInstance(any,null),{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'x',UnknownTypeTest.unknownType))})),isFalse);
        expect(isKnown(new bare.createInstance(any,null,typedefF)),isTrue);
        expect(isKnown(new bare.createInstance(any,null,typedefF,new core.DartList.literal(A))),isTrue);
        expect(isKnown(new bare.createInstance(any,null,typedefF,new core.DartList.literal(UnknownTypeTest.unknownType))),isFalse);
    }
    test_ordinary_visitor_noOverrides() : void {
        expect(UnknownTypeTest.unknownType.accept(new _OrdinaryVisitor<any>()),isNull);
    }
    test_ordinary_visitor_overrideDefault() : void {
        expect(UnknownTypeTest.unknownType.accept(new _OrdinaryVisitor<string>({
            defaultDartType : (node : any) =>  {
                expect(node,same(UnknownTypeTest.unknownType));
                return 'defaultDartType';
            }})),'defaultDartType');
    }
    test_type_schema_visitor_noOverrides() : void {
        expect(UnknownTypeTest.unknownType.accept(new _TypeSchemaVisitor<any>()),isNull);
    }
    test_type_schema_visitor_overrideDefault() : void {
        expect(UnknownTypeTest.unknownType.accept(new _TypeSchemaVisitor<string>({
            defaultDartType : (node : any) =>  {
                expect(node,same(UnknownTypeTest.unknownType));
                return 'defaultDartType';
            }})),'defaultDartType');
    }
    test_type_schema_visitor_overrideVisitUnknownType() : void {
        expect(UnknownTypeTest.unknownType.accept(new _TypeSchemaVisitor<string>({
            visitUnknownType : (node : any) =>  {
                expect(node,same(UnknownTypeTest.unknownType));
                return 'visitUnknownType';
            }})),'visitUnknownType');
    }
    test_typeSchemaToString() : void {
        expect(UnknownTypeTest.unknownType.toString(),isNot('?'));
        expect(typeSchemaToString(UnknownTypeTest.unknownType),'?');
        expect(typeSchemaToString(new bare.createInstance(any,null,new core.DartList.literal(UnknownTypeTest.unknownType,UnknownTypeTest.unknownType),UnknownTypeTest.unknownType)),'(?, ?) → ?');
    }
    test_visitChildren() : void {
        UnknownTypeTest.unknownType.visitChildren(new _TypeSchemaVisitor<any>({
            defaultDartType : (node : any) =>  {
                fail('Should not have visited anything');
            }}));
    }
    constructor() {
    }
    @defaultConstructor
    UnknownTypeTest() {
    }
}

export namespace _OrdinaryVisitor {
    export type Constructors = '_OrdinaryVisitor';
    export type Interface<R> = Omit<_OrdinaryVisitor<R>, Constructors>;
}
@DartClass
export class _OrdinaryVisitor<R> extends any {
    _defaultDartType : <T,U>(t : any) => R;

    constructor(_namedArguments? : {defaultDartType? : <T,U>(t : any) => R}) {
    }
    @defaultConstructor
    _OrdinaryVisitor(_namedArguments? : {defaultDartType? : <T,U>(t : any) => R}) {
        let {defaultDartType} = Object.assign({
        }, _namedArguments );
        this._defaultDartType = defaultDartType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    defaultDartType(node : any) : R {
        if (this._defaultDartType != null) {
            return this._defaultDartType(node);
        }else {
            return super.defaultDartType(node);
        }
    }
}

export namespace _TypeSchemaVisitor {
    export type Constructors = '_TypeSchemaVisitor';
    export type Interface<R> = Omit<_TypeSchemaVisitor<R>, Constructors>;
}
@DartClass
@Implements(any)
export class _TypeSchemaVisitor<R> extends any implements any.Interface {
    _defaultDartType : <T,U>(t : any) => R;

    _visitUnknownType : <T,U>(t : any) => R;

    constructor(_namedArguments? : {defaultDartType? : <T,U>(t : any) => R,visitUnknownType? : <T,U>(t : any) => R}) {
    }
    @defaultConstructor
    _TypeSchemaVisitor(_namedArguments? : {defaultDartType? : <T,U>(t : any) => R,visitUnknownType? : <T,U>(t : any) => R}) {
        let {defaultDartType,visitUnknownType} = Object.assign({
        }, _namedArguments );
        this._defaultDartType = defaultDartType;
        this._visitUnknownType = visitUnknownType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    defaultDartType(node : any) : R {
        if (this._defaultDartType != null) {
            return this._defaultDartType(node);
        }else {
            return super.defaultDartType(node);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitUnknownType(node : any) : R {
        if (this._visitUnknownType != null) {
            return this._visitUnknownType(node);
        }else {
            return this.defaultDartType(node);
        }
    }
}

export class properties {
}
