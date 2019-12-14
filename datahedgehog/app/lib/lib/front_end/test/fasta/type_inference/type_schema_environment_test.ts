/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/fasta/type_inference/type_schema_environment_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(TypeSchemaEnvironmentTest);
    });
};
export namespace TypeSchemaEnvironmentTest {
    export type Constructors = 'TypeSchemaEnvironmentTest';
    export type Interface = Omit<TypeSchemaEnvironmentTest, Constructors>;
}
@DartClass
export class TypeSchemaEnvironmentTest {
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

    private static __$bottomType : any;
    static get bottomType() : any { 
        if (this.__$bottomType===undefined) {
            this.__$bottomType = new bare.createInstance(any,null);
        }
        return this.__$bottomType;
    }

    testLib;

    program : any;

    coreTypes : any;

    constructor() {
    }
    @defaultConstructor
    TypeSchemaEnvironmentTest() {
        this.testLib = new bare.createInstance(any,null,lib3.Uri.parse('org-dartlang:///test.dart'));
        this.program = createMockSdkProgram();
        this.program.libraries.add(((_) : any =>  {
            {
                _.parent = this.program;
                return _;
            }
        })(this.testLib));
        this.coreTypes = new bare.createInstance(any,null,this.program);
    }
    get doubleType() : any {
        return this.coreTypes.doubleClass.rawType;
    }
    get functionType() : any {
        return this.coreTypes.functionClass.rawType;
    }
    get intType() : any {
        return this.coreTypes.intClass.rawType;
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
    get numType() : any {
        return this.coreTypes.numClass.rawType;
    }
    get objectClass() : any {
        return this.coreTypes.objectClass;
    }
    get objectType() : any {
        return this.objectClass.rawType;
    }
    test_addLowerBound() : void {
        let A = this._addClass(this._class('A')).rawType;
        let B = this._addClass(this._class('B',{
            supertype : A.classNode.asThisSupertype})).rawType;
        let C = this._addClass(this._class('C',{
            supertype : A.classNode.asThisSupertype})).rawType;
        let env = this._makeEnv();
        let typeConstraint = new bare.createInstance(any,null);
        expect(typeConstraint.lower,same(TypeSchemaEnvironmentTest.unknownType));
        env.addLowerBound(typeConstraint,B);
        expect(typeConstraint.lower,same(B));
        env.addLowerBound(typeConstraint,C);
        expect(typeConstraint.lower,same(A));
    }
    test_addUpperBound() : void {
        let A = this._addClass(this._class('A')).rawType;
        let B = this._addClass(this._class('B',{
            supertype : A.classNode.asThisSupertype})).rawType;
        let C = this._addClass(this._class('C',{
            supertype : A.classNode.asThisSupertype})).rawType;
        let env = this._makeEnv();
        let typeConstraint = new bare.createInstance(any,null);
        expect(typeConstraint.upper,same(TypeSchemaEnvironmentTest.unknownType));
        env.addUpperBound(typeConstraint,A);
        expect(typeConstraint.upper,same(A));
        env.addUpperBound(typeConstraint,B);
        expect(typeConstraint.upper,same(B));
        env.addUpperBound(typeConstraint,C);
        expect(typeConstraint.upper,same(TypeSchemaEnvironmentTest.bottomType));
    }
    test_glb_bottom() : void {
        let A = this._addClass(this._class('A')).rawType;
        let env = this._makeEnv();
        expect(env.getGreatestLowerBound(TypeSchemaEnvironmentTest.bottomType,A),same(TypeSchemaEnvironmentTest.bottomType));
        expect(env.getGreatestLowerBound(A,TypeSchemaEnvironmentTest.bottomType),same(TypeSchemaEnvironmentTest.bottomType));
    }
    test_glb_function() : void {
        let A = this._addClass(this._class('A')).rawType;
        let B = this._addClass(this._class('B',{
            supertype : A.classNode.asThisSupertype})).rawType;
        let env = this._makeEnv();
        expect(env.getGreatestLowerBound(new bare.createInstance(any,null,new core.DartList.literal(),A),new bare.createInstance(any,null,new core.DartList.literal(),B)),new bare.createInstance(any,null,new core.DartList.literal(),B));
        expect(env.getGreatestLowerBound(new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType),new bare.createInstance(any,null,new core.DartList.literal(A,B),TypeSchemaEnvironmentTest.voidType)),new bare.createInstance(any,null,new core.DartList.literal(A,B),TypeSchemaEnvironmentTest.voidType,{
            requiredParameterCount : 0}));
        expect(env.getGreatestLowerBound(new bare.createInstance(any,null,new core.DartList.literal(A,B),TypeSchemaEnvironmentTest.voidType),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType)),new bare.createInstance(any,null,new core.DartList.literal(A,B),TypeSchemaEnvironmentTest.voidType,{
            requiredParameterCount : 0}));
        expect(env.getGreatestLowerBound(new bare.createInstance(any,null,new core.DartList.literal(A),TypeSchemaEnvironmentTest.voidType),new bare.createInstance(any,null,new core.DartList.literal(B),TypeSchemaEnvironmentTest.voidType)),new bare.createInstance(any,null,new core.DartList.literal(A),TypeSchemaEnvironmentTest.voidType));
        expect(env.getGreatestLowerBound(new bare.createInstance(any,null,new core.DartList.literal(B),TypeSchemaEnvironmentTest.voidType),new bare.createInstance(any,null,new core.DartList.literal(A),TypeSchemaEnvironmentTest.voidType)),new bare.createInstance(any,null,new core.DartList.literal(A),TypeSchemaEnvironmentTest.voidType));
        expect(env.getGreatestLowerBound(new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',A))}),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'b',B))})),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',A),new bare.createInstance(any,null,'b',B))}));
        expect(env.getGreatestLowerBound(new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'b',B))}),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',A))})),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',A),new bare.createInstance(any,null,'b',B))}));
        expect(env.getGreatestLowerBound(new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',A),new bare.createInstance(any,null,'c',A))}),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'b',B),new bare.createInstance(any,null,'d',B))})),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',A),new bare.createInstance(any,null,'b',B),new bare.createInstance(any,null,'c',A),new bare.createInstance(any,null,'d',B))}));
        expect(env.getGreatestLowerBound(new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',A),new bare.createInstance(any,null,'b',B))}),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',B),new bare.createInstance(any,null,'b',A))})),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',A),new bare.createInstance(any,null,'b',A))}));
        expect(env.getGreatestLowerBound(new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',B),new bare.createInstance(any,null,'b',A))}),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',A),new bare.createInstance(any,null,'b',B))})),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',A),new bare.createInstance(any,null,'b',A))}));
        expect(env.getGreatestLowerBound(new bare.createInstance(any,null,new core.DartList.literal(B),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',A))}),new bare.createInstance(any,null,new core.DartList.literal(B),TypeSchemaEnvironmentTest.voidType)),new bare.createInstance(any,null,new core.DartList.literal(B),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',A))}));
        expect(env.getGreatestLowerBound(new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',A))}),new bare.createInstance(any,null,new core.DartList.literal(B),TypeSchemaEnvironmentTest.voidType)),same(TypeSchemaEnvironmentTest.bottomType));
        expect(env.getGreatestLowerBound(new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',A))}),new bare.createInstance(any,null,new core.DartList.literal(B),TypeSchemaEnvironmentTest.voidType,{
            requiredParameterCount : 0})),same(TypeSchemaEnvironmentTest.bottomType));
    }
    test_glb_identical() : void {
        let A = this._addClass(this._class('A')).rawType;
        let env = this._makeEnv();
        expect(env.getGreatestLowerBound(A,A),same(A));
        expect(env.getGreatestLowerBound(new bare.createInstance(any,null,A.classNode),A),A);
    }
    test_glb_subtype() : void {
        let A = this._addClass(this._class('A')).rawType;
        let B = this._addClass(this._class('B',{
            supertype : A.classNode.asThisSupertype})).rawType;
        let env = this._makeEnv();
        expect(env.getGreatestLowerBound(A,B),same(B));
        expect(env.getGreatestLowerBound(B,A),same(B));
    }
    test_glb_top() : void {
        let A = this._addClass(this._class('A')).rawType;
        let env = this._makeEnv();
        expect(env.getGreatestLowerBound(TypeSchemaEnvironmentTest.dynamicType,A),same(A));
        expect(env.getGreatestLowerBound(A,TypeSchemaEnvironmentTest.dynamicType),same(A));
        expect(env.getGreatestLowerBound(this.objectType,A),same(A));
        expect(env.getGreatestLowerBound(A,this.objectType),same(A));
        expect(env.getGreatestLowerBound(TypeSchemaEnvironmentTest.voidType,A),same(A));
        expect(env.getGreatestLowerBound(A,TypeSchemaEnvironmentTest.voidType),same(A));
    }
    test_glb_unknown() : void {
        let A = this._addClass(this._class('A')).rawType;
        let env = this._makeEnv();
        expect(env.getGreatestLowerBound(A,TypeSchemaEnvironmentTest.unknownType),same(A));
        expect(env.getGreatestLowerBound(TypeSchemaEnvironmentTest.unknownType,A),same(A));
    }
    test_glb_unrelated() : void {
        let A = this._addClass(this._class('A')).rawType;
        let B = this._addClass(this._class('B')).rawType;
        let env = this._makeEnv();
        expect(env.getGreatestLowerBound(A,B),same(TypeSchemaEnvironmentTest.bottomType));
    }
    test_inferGenericFunctionOrType() : void {
        let env = this._makeEnv();
        {
            let inferredTypes = new core.DartList.literal<any>(TypeSchemaEnvironmentTest.unknownType);
            let T : any = op(Op.INDEX,this.listClass.thisType.typeArguments,0);
            env.inferGenericFunctionOrType(this.listClass.thisType,new core.DartList.literal(T.parameter),null,null,null,inferredTypes);
            expect(inferredTypes[0],TypeSchemaEnvironmentTest.unknownType);
            env.inferGenericFunctionOrType(this.listClass.thisType,new core.DartList.literal(T.parameter),new core.DartList.literal(T,T),new core.DartList.literal(this.intType,this.doubleType),null,inferredTypes);
            expect(inferredTypes[0],this.numType);
        }
        {
            let inferredTypes = new core.DartList.literal<any>(TypeSchemaEnvironmentTest.unknownType);
            let T : any = op(Op.INDEX,this.listClass.thisType.typeArguments,0);
            env.inferGenericFunctionOrType(this.listClass.thisType,new core.DartList.literal(T.parameter),null,null,this._list(this.objectType),inferredTypes);
            expect(inferredTypes[0],this.objectType);
            env.inferGenericFunctionOrType(this.listClass.thisType,new core.DartList.literal(T.parameter),new core.DartList.literal(T,T),new core.DartList.literal(this.intType,this.doubleType),this._list(this.objectType),inferredTypes);
            expect(inferredTypes[0],this.objectType);
        }
    }
    test_inferTypeFromConstraints_applyBound() : void {
        let T = new bare.createInstance(any,null,'T',this.numType);
        this._addClass(this._class('A',{
            typeParameters : new core.DartList.literal(T)})).thisType;
        let env = this._makeEnv();
        {
            let constraints = new core.DartMap.literal([
                [T,new bare.createInstance(any,null)]]);
            let inferredTypes = new core.DartList.literal<any>(TypeSchemaEnvironmentTest.unknownType);
            env.inferTypeFromConstraints(constraints,new core.DartList.literal(T),inferredTypes,{
                downwardsInferPhase : true});
            expect(inferredTypes[0],TypeSchemaEnvironmentTest.unknownType);
            env.inferTypeFromConstraints(constraints,new core.DartList.literal(T),inferredTypes);
            expect(inferredTypes[0],this.numType);
        }
        {
            let constraints = new core.DartMap.literal([
                [T,this._makeConstraint({
                    upper : this.objectType})]]);
            let inferredTypes = new core.DartList.literal<any>(TypeSchemaEnvironmentTest.unknownType);
            env.inferTypeFromConstraints(constraints,new core.DartList.literal(T),inferredTypes,{
                downwardsInferPhase : true});
            expect(inferredTypes[0],this.numType);
            env.inferTypeFromConstraints(constraints,new core.DartList.literal(T),inferredTypes);
            expect(inferredTypes[0],this.numType);
            constraints = new core.DartMap.literal([
                [T,this._makeConstraint({
                    lower : this.intType,upper : this.intType})]]);
            env.inferTypeFromConstraints(constraints,new core.DartList.literal(T),inferredTypes);
            expect(inferredTypes[0],this.numType);
        }
    }
    test_inferTypeFromConstraints_simple() : void {
        let env = this._makeEnv();
        let T = op(Op.INDEX,this.listClass.typeParameters,0);
        let constraints = new core.DartMap.literal([
            [T,this._makeConstraint({
                upper : this._list(TypeSchemaEnvironmentTest.unknownType)})]]);
        let inferredTypes = new core.DartList.literal<any>(TypeSchemaEnvironmentTest.unknownType);
        env.inferTypeFromConstraints(constraints,new core.DartList.literal(T),inferredTypes,{
            downwardsInferPhase : true});
        expect(inferredTypes[0],this._list(TypeSchemaEnvironmentTest.unknownType));
        env.inferTypeFromConstraints(constraints,new core.DartList.literal(T),inferredTypes);
        expect(inferredTypes[0],this._list(TypeSchemaEnvironmentTest.dynamicType));
    }
    test_instantiateToBounds_noTypesKnown() : void {
        let A = this._addClass(this._class('A')).rawType;
        let B = this._addClass(this._class('B',{
            typeParameters : new core.DartList.literal(new bare.createInstance(any,null,'T',this.intType))})).thisType;
        let C = (() =>  {
            let T = new bare.createInstance(any,null,'T',this.intType);
            let S = new bare.createInstance(any,null,'S',new bare.createInstance(any,null,B.classNode,new core.DartList.literal(new bare.createInstance(any,null,T))));
            return this._addClass(this._class('C',{
                typeParameters : new core.DartList.literal(T,S)})).thisType;
        })();
        let D = (() =>  {
            let T = new bare.createInstance(any,null,'T');
            T.bound = new bare.createInstance(any,null,B.classNode,new core.DartList.literal(new bare.createInstance(any,null,T)));
            return this._addClass(this._class('D',{
                typeParameters : new core.DartList.literal(T)})).thisType;
        })();
        let E = (() =>  {
            let T = new bare.createInstance(any,null,'T',this.intType);
            let typedefNode = new bare.createInstance(any,null,'E',new bare.createInstance(any,null,new core.DartList.literal(),new bare.createInstance(any,null,T)),{
                typeParameters : new core.DartList.literal(T)});
            return new bare.createInstance(any,null,typedefNode,new core.DartList.literal(new bare.createInstance(any,null,T)));
        })();
        let F = this._addClass(this._class('F',{
            typeParameters : new core.DartList.literal(new bare.createInstance(any,null,'T',this.objectType))})).thisType;
        let env = this._makeEnv();
        expect(env.instantiateToBounds(A),same(A));
        expect(env.instantiateToBounds(B),new bare.createInstance(any,null,B.classNode,new core.DartList.literal(this.intType)));
        expect(env.instantiateToBounds(C),new bare.createInstance(any,null,C.classNode,new core.DartList.literal(this.intType,new bare.createInstance(any,null,B.classNode,new core.DartList.literal(this.intType)))));
        expect(env.instantiateToBounds(D),D.classNode.rawType);
        expect(env.instantiateToBounds(E),new bare.createInstance(any,null,E.typedefNode,new core.DartList.literal(this.intType)));
        expect(env.instantiateToBounds(F),F.classNode.rawType);
    }
    test_instantiateToBounds_typesKnown() : void {
        let A = this._addClass(this._class('A',{
            typeParameters : new core.DartList.literal(new bare.createInstance(any,null,'T',this.numType))})).thisType;
        let B = (() =>  {
            let T = new bare.createInstance(any,null,'T');
            T.bound = new bare.createInstance(any,null,A.classNode,new core.DartList.literal(new bare.createInstance(any,null,T)));
            return this._addClass(this._class('B',{
                typeParameters : new core.DartList.literal(T)})).thisType;
        })();
        let env = this._makeEnv();
        expect(env.instantiateToBounds(A,{
            knownTypes : new core.DartMap.literal([
                [op(Op.INDEX,A.classNode.typeParameters,0),this.intType]])}),new bare.createInstance(any,null,A.classNode,new core.DartList.literal(this.intType)));
        expect(env.instantiateToBounds(B,{
            knownTypes : new core.DartMap.literal([
                [op(Op.INDEX,B.classNode.typeParameters,0),this.intType]])}),new bare.createInstance(any,null,B.classNode,new core.DartList.literal(this.intType)));
    }
    test_lub_bottom() : void {
        let A = this._addClass(this._class('A')).rawType;
        let env = this._makeEnv();
        expect(env.getLeastUpperBound(TypeSchemaEnvironmentTest.bottomType,A),same(A));
        expect(env.getLeastUpperBound(A,TypeSchemaEnvironmentTest.bottomType),same(A));
    }
    test_lub_classic() : void {
        let A = this._addClass(this._class('A')).rawType;
        let B = this._addClass(this._class('B',{
            supertype : A.classNode.asThisSupertype})).rawType;
        let C = this._addClass(this._class('C',{
            supertype : A.classNode.asThisSupertype})).rawType;
        let D = this._addClass(this._class('D',{
            implementedTypes : new core.DartList.literal(B.classNode.asThisSupertype,C.classNode.asThisSupertype)})).rawType;
        let E = this._addClass(this._class('E',{
            implementedTypes : new core.DartList.literal(B.classNode.asThisSupertype,C.classNode.asThisSupertype)})).rawType;
        let env = this._makeEnv();
        expect(env.getLeastUpperBound(D,E),A);
    }
    test_lub_commonClass() : void {
        let env = this._makeEnv();
        expect(env.getLeastUpperBound(this._list(this.intType),this._list(this.doubleType)),this._list(this.numType));
    }
    test_lub_function() : void {
        let A = this._addClass(this._class('A')).rawType;
        let B = this._addClass(this._class('B',{
            supertype : A.classNode.asThisSupertype})).rawType;
        let env = this._makeEnv();
        expect(env.getLeastUpperBound(new bare.createInstance(any,null,new core.DartList.literal(),A),new bare.createInstance(any,null,new core.DartList.literal(),B)),new bare.createInstance(any,null,new core.DartList.literal(),A));
        expect(env.getLeastUpperBound(new bare.createInstance(any,null,new core.DartList.literal(A),TypeSchemaEnvironmentTest.voidType,{
            requiredParameterCount : 0}),new bare.createInstance(any,null,new core.DartList.literal(A),TypeSchemaEnvironmentTest.voidType)),this.functionType);
        expect(env.getLeastUpperBound(new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType),new bare.createInstance(any,null,new core.DartList.literal(A,B),TypeSchemaEnvironmentTest.voidType)),this.functionType);
        expect(env.getLeastUpperBound(new bare.createInstance(any,null,new core.DartList.literal(A,B),TypeSchemaEnvironmentTest.voidType),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType)),this.functionType);
        expect(env.getLeastUpperBound(new bare.createInstance(any,null,new core.DartList.literal(A),TypeSchemaEnvironmentTest.voidType),new bare.createInstance(any,null,new core.DartList.literal(B),TypeSchemaEnvironmentTest.voidType)),new bare.createInstance(any,null,new core.DartList.literal(B),TypeSchemaEnvironmentTest.voidType));
        expect(env.getLeastUpperBound(new bare.createInstance(any,null,new core.DartList.literal(B),TypeSchemaEnvironmentTest.voidType),new bare.createInstance(any,null,new core.DartList.literal(A),TypeSchemaEnvironmentTest.voidType)),new bare.createInstance(any,null,new core.DartList.literal(B),TypeSchemaEnvironmentTest.voidType));
        expect(env.getLeastUpperBound(new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',A))}),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'b',B))})),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType));
        expect(env.getLeastUpperBound(new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'b',B))}),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',A))})),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType));
        expect(env.getLeastUpperBound(new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',A),new bare.createInstance(any,null,'c',A))}),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'b',B),new bare.createInstance(any,null,'d',B))})),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType));
        expect(env.getLeastUpperBound(new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',A),new bare.createInstance(any,null,'b',B))}),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',B),new bare.createInstance(any,null,'b',A))})),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',B),new bare.createInstance(any,null,'b',B))}));
        expect(env.getLeastUpperBound(new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',B),new bare.createInstance(any,null,'b',A))}),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',A),new bare.createInstance(any,null,'b',B))})),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',B),new bare.createInstance(any,null,'b',B))}));
        expect(env.getLeastUpperBound(new bare.createInstance(any,null,new core.DartList.literal(B),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',A))}),new bare.createInstance(any,null,new core.DartList.literal(B),TypeSchemaEnvironmentTest.voidType)),new bare.createInstance(any,null,new core.DartList.literal(B),TypeSchemaEnvironmentTest.voidType));
        expect(env.getLeastUpperBound(new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',A))}),new bare.createInstance(any,null,new core.DartList.literal(B),TypeSchemaEnvironmentTest.voidType)),this.functionType);
        expect(env.getLeastUpperBound(new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType,{
            namedParameters : new core.DartList.literal(new bare.createInstance(any,null,'a',A))}),new bare.createInstance(any,null,new core.DartList.literal(B),TypeSchemaEnvironmentTest.voidType,{
            requiredParameterCount : 0})),new bare.createInstance(any,null,new core.DartList.literal(),TypeSchemaEnvironmentTest.voidType));
    }
    test_lub_identical() : void {
        let A = this._addClass(this._class('A')).rawType;
        let env = this._makeEnv();
        expect(env.getLeastUpperBound(A,A),same(A));
        expect(env.getLeastUpperBound(new bare.createInstance(any,null,A.classNode),A),A);
    }
    test_lub_sameClass() : void {
        let A = this._addClass(this._class('A')).rawType;
        let B = this._addClass(this._class('B',{
            supertype : A.classNode.asThisSupertype})).rawType;
        let env = this._makeEnv();
        expect(env.getLeastUpperBound(this._map(A,B),this._map(B,A)),this._map(A,A));
    }
    test_lub_subtype() : void {
        let env = this._makeEnv();
        expect(env.getLeastUpperBound(this._list(this.intType),this._iterable(this.numType)),this._iterable(this.numType));
        expect(env.getLeastUpperBound(this._iterable(this.numType),this._list(this.intType)),this._iterable(this.numType));
    }
    test_lub_top() : void {
        let A = this._addClass(this._class('A')).rawType;
        let env = this._makeEnv();
        expect(env.getLeastUpperBound(TypeSchemaEnvironmentTest.dynamicType,A),same(TypeSchemaEnvironmentTest.dynamicType));
        expect(env.getLeastUpperBound(A,TypeSchemaEnvironmentTest.dynamicType),same(TypeSchemaEnvironmentTest.dynamicType));
        expect(env.getLeastUpperBound(this.objectType,A),same(this.objectType));
        expect(env.getLeastUpperBound(A,this.objectType),same(this.objectType));
        expect(env.getLeastUpperBound(TypeSchemaEnvironmentTest.voidType,A),same(TypeSchemaEnvironmentTest.voidType));
        expect(env.getLeastUpperBound(A,TypeSchemaEnvironmentTest.voidType),same(TypeSchemaEnvironmentTest.voidType));
        expect(env.getLeastUpperBound(TypeSchemaEnvironmentTest.dynamicType,this.objectType),same(TypeSchemaEnvironmentTest.dynamicType));
        expect(env.getLeastUpperBound(this.objectType,TypeSchemaEnvironmentTest.dynamicType),same(this.objectType));
        expect(env.getLeastUpperBound(TypeSchemaEnvironmentTest.dynamicType,TypeSchemaEnvironmentTest.voidType),same(TypeSchemaEnvironmentTest.dynamicType));
        expect(env.getLeastUpperBound(TypeSchemaEnvironmentTest.voidType,TypeSchemaEnvironmentTest.dynamicType),same(TypeSchemaEnvironmentTest.dynamicType));
        expect(env.getLeastUpperBound(this.objectType,TypeSchemaEnvironmentTest.voidType),same(TypeSchemaEnvironmentTest.voidType));
        expect(env.getLeastUpperBound(TypeSchemaEnvironmentTest.voidType,this.objectType),same(TypeSchemaEnvironmentTest.voidType));
    }
    test_lub_typeParameter() : void {
        let T = new bare.createInstance(any,null,new bare.createInstance(any,null,'T'));
        T.parameter.bound = this._list(T);
        let U = new bare.createInstance(any,null,new bare.createInstance(any,null,'U'));
        U.parameter.bound = this._list(TypeSchemaEnvironmentTest.bottomType);
        let env = this._makeEnv();
        expect(env.getLeastUpperBound(T,T),same(T));
        expect(env.getLeastUpperBound(T,this._list(TypeSchemaEnvironmentTest.bottomType)),this._list(this.objectType));
        expect(env.getLeastUpperBound(this._list(TypeSchemaEnvironmentTest.bottomType),T),this._list(this.objectType));
        expect(env.getLeastUpperBound(T,U),this._list(this.objectType));
        expect(env.getLeastUpperBound(U,T),this._list(this.objectType));
    }
    test_lub_unknown() : void {
        let A = this._addClass(this._class('A')).rawType;
        let env = this._makeEnv();
        expect(env.getGreatestLowerBound(A,TypeSchemaEnvironmentTest.unknownType),same(A));
        expect(env.getGreatestLowerBound(TypeSchemaEnvironmentTest.unknownType,A),same(A));
    }
    test_solveTypeConstraint() : void {
        let A = this._addClass(this._class('A')).rawType;
        let B = this._addClass(this._class('B',{
            supertype : A.classNode.asThisSupertype})).rawType;
        let env = this._makeEnv();
        expect(env.solveTypeConstraint(this._makeConstraint()),same(TypeSchemaEnvironmentTest.unknownType));
        expect(env.solveTypeConstraint(this._makeConstraint(),{
            grounded : true}),TypeSchemaEnvironmentTest.dynamicType);
        expect(env.solveTypeConstraint(this._makeConstraint({
            lower : A})),A);
        expect(env.solveTypeConstraint(this._makeConstraint({
            lower : A}),{
            grounded : true}),A);
        expect(env.solveTypeConstraint(this._makeConstraint({
            lower : new bare.createInstance(any,null,A.classNode,new core.DartList.literal(TypeSchemaEnvironmentTest.unknownType))})),new bare.createInstance(any,null,A.classNode,new core.DartList.literal(TypeSchemaEnvironmentTest.unknownType)));
        expect(env.solveTypeConstraint(this._makeConstraint({
            lower : new bare.createInstance(any,null,A.classNode,new core.DartList.literal(TypeSchemaEnvironmentTest.unknownType))}),{
            grounded : true}),new bare.createInstance(any,null,A.classNode,new core.DartList.literal(this.nullType)));
        expect(env.solveTypeConstraint(this._makeConstraint({
            upper : A})),A);
        expect(env.solveTypeConstraint(this._makeConstraint({
            upper : A}),{
            grounded : true}),A);
        expect(env.solveTypeConstraint(this._makeConstraint({
            upper : new bare.createInstance(any,null,A.classNode,new core.DartList.literal(TypeSchemaEnvironmentTest.unknownType))})),new bare.createInstance(any,null,A.classNode,new core.DartList.literal(TypeSchemaEnvironmentTest.unknownType)));
        expect(env.solveTypeConstraint(this._makeConstraint({
            upper : new bare.createInstance(any,null,A.classNode,new core.DartList.literal(TypeSchemaEnvironmentTest.unknownType))}),{
            grounded : true}),new bare.createInstance(any,null,A.classNode,new core.DartList.literal(TypeSchemaEnvironmentTest.dynamicType)));
        expect(env.solveTypeConstraint(this._makeConstraint({
            lower : B,upper : A})),B);
        expect(env.solveTypeConstraint(this._makeConstraint({
            lower : B,upper : A}),{
            grounded : true}),B);
        expect(env.solveTypeConstraint(this._makeConstraint({
            lower : new bare.createInstance(any,null,B.classNode,new core.DartList.literal(TypeSchemaEnvironmentTest.unknownType)),upper : A})),A);
        expect(env.solveTypeConstraint(this._makeConstraint({
            lower : new bare.createInstance(any,null,B.classNode,new core.DartList.literal(TypeSchemaEnvironmentTest.unknownType)),upper : A}),{
            grounded : true}),A);
        expect(env.solveTypeConstraint(this._makeConstraint({
            lower : B,upper : new bare.createInstance(any,null,A.classNode,new core.DartList.literal(TypeSchemaEnvironmentTest.unknownType))})),B);
        expect(env.solveTypeConstraint(this._makeConstraint({
            lower : B,upper : new bare.createInstance(any,null,A.classNode,new core.DartList.literal(TypeSchemaEnvironmentTest.unknownType))}),{
            grounded : true}),B);
        expect(env.solveTypeConstraint(this._makeConstraint({
            lower : new bare.createInstance(any,null,B.classNode,new core.DartList.literal(TypeSchemaEnvironmentTest.unknownType)),upper : new bare.createInstance(any,null,A.classNode,new core.DartList.literal(TypeSchemaEnvironmentTest.unknownType))})),new bare.createInstance(any,null,B.classNode,new core.DartList.literal(TypeSchemaEnvironmentTest.unknownType)));
        expect(env.solveTypeConstraint(this._makeConstraint({
            lower : new bare.createInstance(any,null,B.classNode,new core.DartList.literal(TypeSchemaEnvironmentTest.unknownType)),upper : new bare.createInstance(any,null,A.classNode,new core.DartList.literal(TypeSchemaEnvironmentTest.unknownType))}),{
            grounded : true}),new bare.createInstance(any,null,B.classNode,new core.DartList.literal(this.nullType)));
    }
    test_typeConstraint_default() : void {
        let typeConstraint = new bare.createInstance(any,null);
        expect(typeConstraint.lower,same(TypeSchemaEnvironmentTest.unknownType));
        expect(typeConstraint.upper,same(TypeSchemaEnvironmentTest.unknownType));
    }
    test_typeSatisfiesConstraint() : void {
        let A = this._addClass(this._class('A')).rawType;
        let B = this._addClass(this._class('B',{
            supertype : A.classNode.asThisSupertype})).rawType;
        let C = this._addClass(this._class('C',{
            supertype : B.classNode.asThisSupertype})).rawType;
        let D = this._addClass(this._class('D',{
            supertype : C.classNode.asThisSupertype})).rawType;
        let E = this._addClass(this._class('E',{
            supertype : D.classNode.asThisSupertype})).rawType;
        let env = this._makeEnv();
        let typeConstraint = this._makeConstraint({
            upper : B,lower : D});
        expect(env.typeSatisfiesConstraint(A,typeConstraint),isFalse);
        expect(env.typeSatisfiesConstraint(B,typeConstraint),isTrue);
        expect(env.typeSatisfiesConstraint(C,typeConstraint),isTrue);
        expect(env.typeSatisfiesConstraint(D,typeConstraint),isTrue);
        expect(env.typeSatisfiesConstraint(E,typeConstraint),isFalse);
    }
    test_unknown_at_bottom() : void {
        let A = this._addClass(this._class('A')).rawType;
        let env = this._makeEnv();
        expect(env.isSubtypeOf(TypeSchemaEnvironmentTest.unknownType,A),isTrue);
    }
    test_unknown_at_top() : void {
        let A = this._addClass(this._class('A')).rawType;
        let env = this._makeEnv();
        expect(env.isSubtypeOf(A,TypeSchemaEnvironmentTest.unknownType),isTrue);
    }
    _addClass(c : any) : any {
        this.testLib.addClass(c);
        return c;
    }
    _class(name : string,_namedArguments? : {supertype? : any,typeParameters? : core.DartList<any>,implementedTypes? : core.DartList<any>}) : any {
        let {supertype,typeParameters,implementedTypes} = Object.assign({
        }, _namedArguments );
        return new bare.createInstance(any,null,{
            name : name,supertype : (supertype || this.objectClass.asThisSupertype),typeParameters : typeParameters,implementedTypes : implementedTypes});
    }
    _iterable(elementType : any) : any {
        return new bare.createInstance(any,null,this.iterableClass,new core.DartList.literal(elementType));
    }
    _list(elementType : any) : any {
        return new bare.createInstance(any,null,this.listClass,new core.DartList.literal(elementType));
    }
    _makeConstraint(_namedArguments? : {lower? : any,upper? : any}) : any {
        let {lower,upper} = Object.assign({
            "lower" : new bare.createInstance(any,null),
            "upper" : new bare.createInstance(any,null)}, _namedArguments );
        return ((_) : any =>  {
            {
                _.lower = lower;
                _.upper = upper;
                return _;
            }
        })(new bare.createInstance(any,null));
    }
    _makeEnv() : any {
        return new bare.createInstance(any,null,this.coreTypes,new bare.createInstance(any,null,this.program));
    }
    _map(key : any,value : any) : any {
        return new bare.createInstance(any,null,this.mapClass,new core.DartList.literal(key,value));
    }
}

export class properties {
}
