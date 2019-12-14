/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/fasta/type_inference/type_schema_elimination_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(TypeSchemaEliminationTest);
    });
};
export namespace TypeSchemaEliminationTest {
    export type Constructors = 'TypeSchemaEliminationTest';
    export type Interface = Omit<TypeSchemaEliminationTest, Constructors>;
}
@DartClass
export class TypeSchemaEliminationTest {
    private static __$unknownType : any;
    static get unknownType() : any { 
        if (this.__$unknownType===undefined) {
            this.__$unknownType = new bare.createInstance(any,null);
        }
        return this.__$unknownType;
    }

    coreTypes : any;

    get dynamicType() : any {
        return new bare.createInstance(any,null);
    }
    get nullType() : any {
        return this.coreTypes.nullClass.rawType;
    }
    get objectType() : any {
        return this.coreTypes.objectClass.rawType;
    }
    greatestClosure(schema : any) : any {
        return null /*topLevl*/.greatestClosure(this.coreTypes,schema);
    }
    leastClosure(schema : any) : any {
        return null /*topLevl*/.leastClosure(this.coreTypes,schema);
    }
    test_greatestClosure_contravariant() : void {
        expect(this.greatestClosure(new bare.createInstance(any,null,new core.DartList.literal(TypeSchemaEliminationTest.unknownType),this.dynamicType)).toString(),'(dart.core::Null) → dynamic');
        expect(this.greatestClosure(new bare.createInstance(any,null,new core.DartList.literal(),this.dynamicType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'foo',TypeSchemaEliminationTest.unknownType))})).toString(),'({foo: dart.core::Null}) → dynamic');
    }
    test_greatestClosure_contravariant_contravariant() : void {
        expect(this.greatestClosure(new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,new core.DartList.literal(TypeSchemaEliminationTest.unknownType),this.dynamicType)),this.dynamicType)).toString(),'((dynamic) → dynamic) → dynamic');
    }
    test_greatestClosure_covariant() : void {
        expect(this.greatestClosure(new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEliminationTest.unknownType)).toString(),'() → dynamic');
        expect(this.greatestClosure(new bare.createInstance(any,null,this.coreTypes.listClass,new core.DartList.literal(TypeSchemaEliminationTest.unknownType))).toString(),'dart.core::List<dynamic>');
    }
    test_greatestClosure_simple() : void {
        expect(this.greatestClosure(TypeSchemaEliminationTest.unknownType).toString(),'dynamic');
    }
    test_leastClosure_contravariant() : void {
        expect(this.leastClosure(new bare.createInstance(any,null,new core.DartList.literal(TypeSchemaEliminationTest.unknownType),this.dynamicType)).toString(),'(dynamic) → dynamic');
        expect(this.leastClosure(new bare.createInstance(any,null,new core.DartList.literal(),this.dynamicType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'foo',TypeSchemaEliminationTest.unknownType))})).toString(),'({foo: dynamic}) → dynamic');
    }
    test_leastClosure_contravariant_contravariant() : void {
        expect(this.leastClosure(new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,new core.DartList.literal(TypeSchemaEliminationTest.unknownType),this.dynamicType)),this.dynamicType)).toString(),'((dart.core::Null) → dynamic) → dynamic');
    }
    test_leastClosure_covariant() : void {
        expect(this.leastClosure(new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEliminationTest.unknownType)).toString(),'() → dart.core::Null');
        expect(this.leastClosure(new bare.createInstance(any,null,this.coreTypes.listClass,new core.DartList.literal(TypeSchemaEliminationTest.unknownType))).toString(),'dart.core::List<dart.core::Null>');
    }
    test_leastClosure_simple() : void {
        expect(this.leastClosure(TypeSchemaEliminationTest.unknownType).toString(),'dart.core::Null');
    }
    constructor() {
    }
    @defaultConstructor
    TypeSchemaEliminationTest() {
        this.coreTypes = new _MockCoreTypes();
    }
}

export namespace _MockCoreTypes {
    export type Constructors = '_MockCoreTypes';
    export type Interface = Omit<_MockCoreTypes, Constructors>;
}
@DartClass
@Implements(any)
export class _MockCoreTypes implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    listClass : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    nullClass : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    objectClass : any;

    constructor() {
    }
    @defaultConstructor
    _MockCoreTypes() {
        this.listClass = new bare.createInstance(any,null,{
            name : 'List'});
        this.nullClass = new bare.createInstance(any,null,{
            name : 'Null'});
        this.objectClass = new bare.createInstance(any,null,{
            name : 'Object'});
        new bare.createInstance(any,null,lib3.Uri.parse('dart:core'),{
            name : 'dart.core',classes : new core.DartList.literal(this.listClass,this.nullClass,this.objectClass)});
    }
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
}

export class properties {
}
