/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/fasta/type_inference/type_constraint_gatherer_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(TypeConstraintGathererTest);
    });
};
export namespace TypeConstraintGathererTest {
    export type Constructors = 'TypeConstraintGathererTest';
    export type Interface = Omit<TypeConstraintGathererTest, Constructors>;
}
@DartClass
export class TypeConstraintGathererTest {
    private static __$unknownType : any;
    static get unknownType() : any { 
        if (this.__$unknownType===undefined) {
            this.__$unknownType = new bare.createInstance(any,null);
        }
        return this.__$unknownType;
    }

    private static __$dynamicType : any;
    static get dynamicType() : any { 
        if (this.__$dynamicType===undefined) {
            this.__$dynamicType = new bare.createInstance(any,null);
        }
        return this.__$dynamicType;
    }

    private static __$voidType : any;
    static get voidType() : any { 
        if (this.__$voidType===undefined) {
            this.__$voidType = new bare.createInstance(any,null);
        }
        return this.__$voidType;
    }

    testLib;

    program : any;

    coreTypes : any;

    T1 : any;

    T2 : any;

    classP : any;

    classQ : any;

    constructor() {
    }
    @defaultConstructor
    TypeConstraintGathererTest() {
        this.testLib = new bare.createInstance(any,null,lib3.Uri.parse('org-dartlang:///test.dart'),{
            name : 'lib'});
        this.program = createMockSdkProgram();
        this.program.libraries.add(((_) : any =>  {
            {
                _.parent = this.program;
                return _;
            }
        })(this.testLib));
        this.coreTypes = new bare.createInstance(any,null,this.program);
        this.T1 = new bare.createInstance(any,null,new bare.createInstance(any,null,'T1',this.objectType));
        this.T2 = new bare.createInstance(any,null,new bare.createInstance(any,null,'T2',this.objectType));
        this.classP = this._addClass(this._class('P'));
        this.classQ = this._addClass(this._class('Q'));
    }
    get functionClass() : any {
        return this.coreTypes.functionClass;
    }
    get functionType() : any {
        return this.functionClass.rawType;
    }
    get iterableClass() : any {
        return this.coreTypes.iterableClass;
    }
    get listClass() : any {
        return this.coreTypes.listClass;
    }
    get mapClass() : any {
        return this.coreTypes.mapClass;
    }
    get nullType() : any {
        return this.coreTypes.nullClass.rawType;
    }
    get objectClass() : any {
        return this.coreTypes.objectClass;
    }
    get objectType() : any {
        return this.objectClass.rawType;
    }
    get P() : any {
        return this.classP.rawType;
    }
    get Q() : any {
        return this.classQ.rawType;
    }
    test_any_subtype_parameter() : void {
        this._checkConstraints(this.Q,this.T1,new core.DartList.literal('lib::Q <: T1'));
    }
    test_any_subtype_top() : void {
        this._checkConstraints(this.P,TypeConstraintGathererTest.dynamicType,new core.DartList.literal());
        this._checkConstraints(this.P,this.objectType,new core.DartList.literal());
        this._checkConstraints(this.P,TypeConstraintGathererTest.voidType,new core.DartList.literal());
    }
    test_any_subtype_unknown() : void {
        this._checkConstraints(this.P,TypeConstraintGathererTest.unknownType,new core.DartList.literal());
        this._checkConstraints(this.T1,TypeConstraintGathererTest.unknownType,new core.DartList.literal());
    }
    test_different_classes() : void {
        this._checkConstraints(this._list(this.T1),this._iterable(this.Q),new core.DartList.literal('T1 <: lib::Q'));
        this._checkConstraints(this._iterable(this.T1),this._list(this.Q),null);
    }
    test_equal_types() : void {
        this._checkConstraints(this.P,this.P,new core.DartList.literal());
    }
    test_function_generic() : void {
        let T = new bare.createInstance(any,null,new bare.createInstance(any,null,'T',this.objectType));
        let U = new bare.createInstance(any,null,new bare.createInstance(any,null,'U',this.objectType));
        this._checkConstraints(new bare.createInstance(any,null,new core.DartList.literal(),TypeConstraintGathererTest.dynamicType,{
            typeParameters : new core.DartList.literal(T.parameter)}),new bare.createInstance(any,null,new core.DartList.literal(),TypeConstraintGathererTest.dynamicType),null);
        this._checkConstraints(new bare.createInstance(any,null,new core.DartList.literal(),TypeConstraintGathererTest.dynamicType),new bare.createInstance(any,null,new core.DartList.literal(),TypeConstraintGathererTest.dynamicType,{
            typeParameters : new core.DartList.literal(T.parameter)}),null);
        this._checkConstraints(new bare.createInstance(any,null,new core.DartList.literal(T),T,{
            typeParameters : new core.DartList.literal(T.parameter)}),new bare.createInstance(any,null,new core.DartList.literal(U),U,{
            typeParameters : new core.DartList.literal(U.parameter)}),new core.DartList.literal());
    }
    test_function_parameter_mismatch() : void {
        this._checkConstraints(new bare.createInstance(any,null,new core.DartList.literal(this.P),TypeConstraintGathererTest.dynamicType),new bare.createInstance(any,null,new core.DartList.literal(),TypeConstraintGathererTest.dynamicType),null);
        this._checkConstraints(new bare.createInstance(any,null,new core.DartList.literal(),TypeConstraintGathererTest.dynamicType),new bare.createInstance(any,null,new core.DartList.literal(this.P),TypeConstraintGathererTest.dynamicType),null);
        this._checkConstraints(new bare.createInstance(any,null,new core.DartList.literal(this.P),TypeConstraintGathererTest.dynamicType,{
            requiredParameterCount : 0}),new bare.createInstance(any,null,new core.DartList.literal(),TypeConstraintGathererTest.dynamicType),new core.DartList.literal());
        this._checkConstraints(new bare.createInstance(any,null,new core.DartList.literal(),TypeConstraintGathererTest.dynamicType),new bare.createInstance(any,null,new core.DartList.literal(this.P),TypeConstraintGathererTest.dynamicType,{
            requiredParameterCount : 0}),null);
        this._checkConstraints(new bare.createInstance(any,null,new core.DartList.literal(),TypeConstraintGathererTest.dynamicType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'x',this.P))}),new bare.createInstance(any,null,new core.DartList.literal(),TypeConstraintGathererTest.dynamicType),new core.DartList.literal());
        this._checkConstraints(new bare.createInstance(any,null,new core.DartList.literal(),TypeConstraintGathererTest.dynamicType),new bare.createInstance(any,null,new core.DartList.literal(),TypeConstraintGathererTest.dynamicType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'x',this.P))}),null);
    }
    test_function_parameter_types() : void {
        this._checkConstraints(new bare.createInstance(any,null,new core.DartList.literal(this.T1),TypeConstraintGathererTest.dynamicType),new bare.createInstance(any,null,new core.DartList.literal(this.Q),TypeConstraintGathererTest.dynamicType),new core.DartList.literal('lib::Q <: T1'));
        this._checkConstraints(new bare.createInstance(any,null,new core.DartList.literal(),TypeConstraintGathererTest.dynamicType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'x',this.T1))}),new bare.createInstance(any,null,new core.DartList.literal(),TypeConstraintGathererTest.dynamicType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'x',this.Q))}),new core.DartList.literal('lib::Q <: T1'));
    }
    test_function_return_type() : void {
        this._checkConstraints(new bare.createInstance(any,null,new core.DartList.literal(),this.T1),new bare.createInstance(any,null,new core.DartList.literal(),this.Q),new core.DartList.literal('T1 <: lib::Q'));
        this._checkConstraints(new bare.createInstance(any,null,new core.DartList.literal(),this.P),new bare.createInstance(any,null,new core.DartList.literal(),TypeConstraintGathererTest.voidType),new core.DartList.literal());
        this._checkConstraints(new bare.createInstance(any,null,new core.DartList.literal(),TypeConstraintGathererTest.voidType),new bare.createInstance(any,null,new core.DartList.literal(),this.P),null);
    }
    test_function_trivial_cases() : void {
        let F = new bare.createInstance(any,null,new core.DartList.literal(),TypeConstraintGathererTest.dynamicType);
        this._checkConstraints(F,TypeConstraintGathererTest.dynamicType,new core.DartList.literal());
        this._checkConstraints(F,this.functionType,new core.DartList.literal());
        this._checkConstraints(F,this.objectType,new core.DartList.literal());
    }
    test_nonInferredParameter_subtype_any() : void {
        let U = new bare.createInstance(any,null,new bare.createInstance(any,null,'U',this._list(this.P)));
        this._checkConstraints(U,this._list(this.T1),new core.DartList.literal('lib::P <: T1'));
    }
    test_null_subtype_any() : void {
        this._checkConstraints(this.nullType,this.T1,new core.DartList.literal('dart.core::Null <: T1'));
        this._checkConstraints(this.nullType,this.Q,new core.DartList.literal());
    }
    test_parameter_subtype_any() : void {
        this._checkConstraints(this.T1,this.Q,new core.DartList.literal('T1 <: lib::Q'));
    }
    test_same_classes() : void {
        this._checkConstraints(this._list(this.T1),this._list(this.Q),new core.DartList.literal('T1 <: lib::Q'));
    }
    test_typeParameters() : void {
        this._checkConstraints(this._map(this.T1,this.T2),this._map(this.P,this.Q),new core.DartList.literal('T1 <: lib::P','T2 <: lib::Q'));
    }
    test_unknown_subtype_any() : void {
        this._checkConstraints(TypeConstraintGathererTest.unknownType,this.Q,new core.DartList.literal());
        this._checkConstraints(TypeConstraintGathererTest.unknownType,this.T1,new core.DartList.literal());
    }
    _addClass(c : any) : any {
        this.testLib.addClass(c);
        return c;
    }
    _checkConstraints(a : any,b : any,expectedConstraints : core.DartList<string>) : void {
        let typeSchemaEnvironment = new bare.createInstance(any,null,this.coreTypes,new bare.createInstance(any,null,this.program));
        let typeConstraintGatherer = new bare.createInstance(any,null,typeSchemaEnvironment,new core.DartList.literal(this.T1.parameter,this.T2.parameter));
        let constraints = typeConstraintGatherer.trySubtypeMatch(a,b) ? typeConstraintGatherer.computeConstraints() : null;
        if (expectedConstraints == null) {
            expect(constraints,isNull);
            return;
        }
        expect(constraints,isNotNull);
        let constraintStrings = new core.DartList.literal<string>();
        constraints.forEach((t : any,constraint : any) =>  {
            if (isNot(constraint.lower, any) || isNot(constraint.upper, any)) {
                let s = t.name;
                if (isNot(constraint.lower, any)) {
                    s = `${typeSchemaToString(constraint.lower)} <: ${s}`;
                }
                if (isNot(constraint.upper, any)) {
                    s = `${s} <: ${typeSchemaToString(constraint.upper)}`;
                }
                constraintStrings.add(s);
            }
        });
        expect(constraintStrings,unorderedEquals(expectedConstraints));
    }
    _class(name : string,_namedArguments? : {supertype? : any,typeParameters? : core.DartList<any>,implementedTypes? : core.DartList<any>}) : any {
        let {supertype,typeParameters,implementedTypes} = Object.assign({
        }, _namedArguments );
        return new bare.createInstance(any,null,{
            name : name,supertype : (supertype || this.objectClass.asThisSupertype),typeParameters : typeParameters,implementedTypes : implementedTypes});
    }
    _iterable(element : any) : any {
        return new bare.createInstance(any,null,this.iterableClass,new core.DartList.literal(element));
    }
    _list(element : any) : any {
        return new bare.createInstance(any,null,this.listClass,new core.DartList.literal(element));
    }
    _map(key : any,value : any) : any {
        return new bare.createInstance(any,null,this.mapClass,new core.DartList.literal(key,value));
    }
}

export class properties {
}
