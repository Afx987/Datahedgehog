/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/type_system_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./analysis_context_factory";
import * as lib4 from "@dart2ts.packages/path/lib/path";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(StrongAssignabilityTest);
        defineReflectiveTests(StrongSubtypingTest);
        defineReflectiveTests(StrongGenericFunctionInferenceTest);
        defineReflectiveTests(LeastUpperBoundTest);
        defineReflectiveTests(StrongLeastUpperBoundTest);
        defineReflectiveTests(StrongGreatestLowerBoundTest);
    });
};
export namespace BoundTestBase {
    export type Constructors = 'BoundTestBase';
    export type Interface = Omit<BoundTestBase, Constructors>;
}
@DartClass
export class BoundTestBase {
    typeProvider : any;

    typeSystem : any;

    simpleFunctionType : any;

    get bottomType() : any {
        return this.typeProvider.bottomType;
    }
    get doubleType() : any {
        return this.typeProvider.doubleType;
    }
    get dynamicType() : any {
        return this.typeProvider.dynamicType;
    }
    get functionType() : any {
        return this.typeProvider.functionType;
    }
    get intType() : any {
        return this.typeProvider.intType;
    }
    get iterableType() : any {
        return this.typeProvider.iterableType;
    }
    get listType() : any {
        return this.typeProvider.listType;
    }
    get numType() : any {
        return this.typeProvider.numType;
    }
    get objectType() : any {
        return this.typeProvider.objectType;
    }
    get stringType() : any {
        return this.typeProvider.stringType;
    }
    get strongTypeSystem() : any {
        return this.typeSystem as any;
    }
    get voidType() : any {
        return VoidTypeImpl.instance;
    }
    setUp() : void {
        let context : any = lib3.AnalysisContextFactory.contextWithCore();
        this.typeProvider = context.typeProvider;
        let typeAlias : any = ElementFactory.functionTypeAliasElement('A');
        typeAlias.parameters = new core.DartList.literal();
        typeAlias.returnType = this.voidType;
        this.simpleFunctionType = typeAlias.type;
    }
    _checkGreatestLowerBound(type1 : any,type2 : any,expectedResult : any) : void {
        let glb : any = this.strongTypeSystem.getGreatestLowerBound(type1,type2);
        expect(glb,expectedResult);
        expect(this.typeSystem.isSubtypeOf(glb,type1),true);
        expect(this.typeSystem.isSubtypeOf(glb,type2),true);
        glb = this.strongTypeSystem.getGreatestLowerBound(type2,type1);
        if (is(glb, any)) {
            expect(this.typeSystem.isSubtypeOf(glb,expectedResult),true);
            expect(this.typeSystem.isSubtypeOf(expectedResult,glb),true);
        }else {
            expect(glb,expectedResult);
        }
    }
    _checkLeastUpperBound(type1 : any,type2 : any,expectedResult : any) : void {
        let lub : any = this.typeSystem.getLeastUpperBound(type1,type2);
        expect(lub,expectedResult);
        expect(this.typeSystem.isSubtypeOf(type1,lub),true);
        expect(this.typeSystem.isSubtypeOf(type2,lub),true);
        lub = this.typeSystem.getLeastUpperBound(type2,type1);
        if (is(lub, any)) {
            expect(this.typeSystem.isSubtypeOf(lub,expectedResult),true);
            expect(this.typeSystem.isSubtypeOf(expectedResult,lub),true);
        }else {
            expect(lub,expectedResult);
        }
    }
    _functionType(required : core.DartList<any>,_namedArguments? : {optional? : core.DartList<any>,named? : core.DartMap<string,any>,returns? : any}) : any {
        let {optional,named,returns} = Object.assign({
        }, _namedArguments );
        if (op(Op.EQUALS,returns,null)) {
            returns = this.voidType;
        }
        return ElementFactory.functionElement8(required,returns,{
            optional : optional,named : named}).type;
    }
    constructor() {
    }
    @defaultConstructor
    BoundTestBase() {
    }
}

export namespace StrongAssignabilityTest {
    export type Constructors = 'StrongAssignabilityTest';
    export type Interface = Omit<StrongAssignabilityTest, Constructors>;
}
@DartClass
export class StrongAssignabilityTest {
    typeProvider : any;

    typeSystem : any;

    get bottomType() : any {
        return this.typeProvider.bottomType;
    }
    get doubleType() : any {
        return this.typeProvider.doubleType;
    }
    get dynamicType() : any {
        return this.typeProvider.dynamicType;
    }
    get functionType() : any {
        return this.typeProvider.functionType;
    }
    get intType() : any {
        return this.typeProvider.intType;
    }
    get listType() : any {
        return this.typeProvider.listType;
    }
    get numType() : any {
        return this.typeProvider.numType;
    }
    get objectType() : any {
        return this.typeProvider.objectType;
    }
    get stringType() : any {
        return this.typeProvider.stringType;
    }
    get voidType() : any {
        return VoidTypeImpl.instance;
    }
    setUp() : void {
        this.typeProvider = new bare.createInstance(any,null);
        this.typeSystem = new bare.createInstance(any,null,this.typeProvider);
    }
    test_isAssignableTo_bottom_isBottom() : void {
        let interfaceType : any = ElementFactory.classElement2('A',new core.DartList.literal()).type;
        let interassignable : core.DartList<any> = new core.DartList.literal<any>(this.dynamicType,this.objectType,this.intType,this.doubleType,this.numType,this.stringType,interfaceType,this.bottomType);
        this._checkGroups(this.bottomType,{
            interassignable : interassignable});
    }
    test_isAssignableTo_call_method() : void {
        let classBottom : any = ElementFactory.classElement2("B");
        let methodBottom : any = ElementFactory.methodElement("call",this.objectType,new core.DartList.literal<any>(this.intType));
        classBottom.methods = new core.DartList.literal<any>(methodBottom);
        let top : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.intType),result : this.objectType});
        let bottom : any = classBottom.type;
        this._checkIsStrictAssignableTo(bottom,top);
    }
    test_isAssignableTo_classes() : void {
        let classTop : any = ElementFactory.classElement2("A");
        let classLeft : any = ElementFactory.classElement("B",classTop.type);
        let classRight : any = ElementFactory.classElement("C",classTop.type);
        let classBottom : any = ((_) : any =>  {
            {
                _.interfaces = new core.DartList.literal<any>(classRight.type);
                return _;
            }
        })(ElementFactory.classElement("D",classLeft.type));
        let top : any = classTop.type;
        let left : any = classLeft.type;
        let right : any = classRight.type;
        let bottom : any = classBottom.type;
        this._checkLattice(top,left,right,bottom);
    }
    test_isAssignableTo_double() : void {
        let interfaceType : any = ElementFactory.classElement2('A',new core.DartList.literal()).type;
        let interassignable : core.DartList<any> = new core.DartList.literal<any>(this.dynamicType,this.objectType,this.doubleType,this.numType,this.bottomType);
        let unrelated : core.DartList<any> = new core.DartList.literal<any>(this.intType,this.stringType,interfaceType);
        this._checkGroups(this.doubleType,{
            interassignable : interassignable,unrelated : unrelated});
    }
    test_isAssignableTo_dynamic_isTop() : void {
        let interfaceType : any = ElementFactory.classElement2('A',new core.DartList.literal()).type;
        let interassignable : core.DartList<any> = new core.DartList.literal<any>(this.dynamicType,this.objectType,this.intType,this.doubleType,this.numType,this.stringType,interfaceType,this.bottomType);
        this._checkGroups(this.dynamicType,{
            interassignable : interassignable});
    }
    test_isAssignableTo_fuzzy_arrows() : void {
        let top : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.dynamicType),result : this.objectType});
        let left : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.objectType),result : this.objectType});
        let right : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.dynamicType),result : this.bottomType});
        let bottom : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.objectType),result : this.bottomType});
        this._checkCrossLattice(top,left,right,bottom);
    }
    test_isAssignableTo_generics() : void {
        let LClass : any = ElementFactory.classElement2('L',new core.DartList.literal("T"));
        let LType : any = LClass.type;
        let MClass : any = ElementFactory.classElement2('M',new core.DartList.literal("T"));
        let typeParam : any = op(Op.INDEX,MClass.typeParameters,0).type;
        let superType : any = LType.instantiate(new core.DartList.literal<any>(typeParam));
        MClass.interfaces = new core.DartList.literal<any>(superType);
        let MType : any = MClass.type;
        let top : any = LType.instantiate(new core.DartList.literal<any>(this.dynamicType));
        let left : any = MType.instantiate(new core.DartList.literal<any>(this.dynamicType));
        let right : any = LType.instantiate(new core.DartList.literal<any>(this.intType));
        let bottom : any = MType.instantiate(new core.DartList.literal<any>(this.intType));
        this._checkCrossLattice(top,left,right,bottom);
    }
    test_isAssignableTo_int() : void {
        let interfaceType : any = ElementFactory.classElement2('A',new core.DartList.literal()).type;
        let interassignable : core.DartList<any> = new core.DartList.literal<any>(this.dynamicType,this.objectType,this.intType,this.numType,this.bottomType);
        let unrelated : core.DartList<any> = new core.DartList.literal<any>(this.doubleType,this.stringType,interfaceType);
        this._checkGroups(this.intType,{
            interassignable : interassignable,unrelated : unrelated});
    }
    test_isAssignableTo_named_optional() : void {
        let r : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.intType),result : this.intType});
        let o : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(),optional : new core.DartList.literal<any>(this.intType),result : this.intType});
        let n : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(),named : new core.DartMap.literal([
                ['x',this.intType]]),result : this.intType});
        let rr : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.intType,this.intType),result : this.intType});
        let ro : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.intType),optional : new core.DartList.literal<any>(this.intType),result : this.intType});
        let rn : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.intType),named : new core.DartMap.literal([
                ['x',this.intType]]),result : this.intType});
        let oo : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(),optional : new core.DartList.literal<any>(this.intType,this.intType),result : this.intType});
        let nn : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(),named : new core.DartMap.literal([
                ['x',this.intType],
                ['y',this.intType]]),result : this.intType});
        let nnn : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(),named : new core.DartMap.literal([
                ['x',this.intType],
                ['y',this.intType],
                ['z',this.intType]]),result : this.intType});
        this._checkGroups(r,{
            interassignable : new core.DartList.literal(r,o,ro,rn,oo),unrelated : new core.DartList.literal(n,rr,nn,nnn)});
        this._checkGroups(o,{
            interassignable : new core.DartList.literal(o,oo),unrelated : new core.DartList.literal(n,rr,ro,rn,nn,nnn)});
        this._checkGroups(n,{
            interassignable : new core.DartList.literal(n,nn,nnn),unrelated : new core.DartList.literal(r,o,rr,ro,rn,oo)});
        this._checkGroups(rr,{
            interassignable : new core.DartList.literal(rr,ro,oo),unrelated : new core.DartList.literal(r,o,n,rn,nn,nnn)});
        this._checkGroups(ro,{
            interassignable : new core.DartList.literal(ro,oo),unrelated : new core.DartList.literal(o,n,rn,nn,nnn)});
        this._checkGroups(rn,{
            interassignable : new core.DartList.literal(rn),unrelated : new core.DartList.literal(o,n,rr,ro,oo,nn,nnn)});
        this._checkGroups(oo,{
            interassignable : new core.DartList.literal(oo),unrelated : new core.DartList.literal(n,rn,nn,nnn)});
        this._checkGroups(nn,{
            interassignable : new core.DartList.literal(nn,nnn),unrelated : new core.DartList.literal(r,o,rr,ro,rn,oo)});
        this._checkGroups(nnn,{
            interassignable : new core.DartList.literal(nnn),unrelated : new core.DartList.literal(r,o,rr,ro,rn,oo)});
    }
    test_isAssignableTo_num() : void {
        let interfaceType : any = ElementFactory.classElement2('A',new core.DartList.literal()).type;
        let interassignable : core.DartList<any> = new core.DartList.literal<any>(this.dynamicType,this.objectType,this.numType,this.intType,this.doubleType,this.bottomType);
        let unrelated : core.DartList<any> = new core.DartList.literal<any>(this.stringType,interfaceType);
        this._checkGroups(this.numType,{
            interassignable : interassignable,unrelated : unrelated});
    }
    test_isAssignableTo_simple_function() : void {
        let top : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.intType),result : this.objectType});
        let left : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.intType),result : this.intType});
        let right : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.objectType),result : this.objectType});
        let bottom : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.objectType),result : this.intType});
        this._checkCrossLattice(top,left,right,bottom);
    }
    test_isAssignableTo_void_functions() : void {
        let top : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.intType),result : this.voidType});
        let bottom : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.objectType),result : this.intType});
        this._checkEquivalent(bottom,top);
    }
    _checkCrossLattice(top : any,left : any,right : any,bottom : any) : void {
        this._checkGroups(top,{
            interassignable : new core.DartList.literal(top,left,right,bottom)});
        this._checkGroups(left,{
            interassignable : new core.DartList.literal(top,left,bottom),unrelated : new core.DartList.literal(right)});
        this._checkGroups(right,{
            interassignable : new core.DartList.literal(top,right,bottom),unrelated : new core.DartList.literal(left)});
        this._checkGroups(bottom,{
            interassignable : new core.DartList.literal(top,left,right,bottom)});
    }
    _checkEquivalent(type1 : any,type2 : any) : void {
        this._checkIsAssignableTo(type1,type2);
        this._checkIsAssignableTo(type2,type1);
    }
    _checkGroups(t1 : any,_namedArguments? : {interassignable? : core.DartList<any>,unrelated? : core.DartList<any>}) : void {
        let {interassignable,unrelated} = Object.assign({
        }, _namedArguments );
        if (interassignable != null) {
            for(let t2 of interassignable) {
                this._checkEquivalent(t1,t2);
            }
        }
        if (unrelated != null) {
            for(let t2 of unrelated) {
                this._checkUnrelated(t1,t2);
            }
        }
    }
    _checkIsAssignableTo(type1 : any,type2 : any) : void {
        expect(this.typeSystem.isAssignableTo(type1,type2),true);
    }
    _checkIsNotAssignableTo(type1 : any,type2 : any) : void {
        expect(this.typeSystem.isAssignableTo(type1,type2),false);
    }
    _checkIsStrictAssignableTo(type1 : any,type2 : any) : void {
        this._checkIsAssignableTo(type1,type2);
        this._checkIsNotAssignableTo(type2,type1);
    }
    _checkLattice(top : any,left : any,right : any,bottom : any) : void {
        this._checkGroups(top,{
            interassignable : new core.DartList.literal<any>(top,left,right,bottom)});
        this._checkGroups(left,{
            interassignable : new core.DartList.literal<any>(top,left,bottom),unrelated : new core.DartList.literal<any>(right)});
        this._checkGroups(right,{
            interassignable : new core.DartList.literal<any>(top,right,bottom),unrelated : new core.DartList.literal<any>(left)});
        this._checkGroups(bottom,{
            interassignable : new core.DartList.literal<any>(top,left,right,bottom)});
    }
    _checkUnrelated(type1 : any,type2 : any) : void {
        this._checkIsNotAssignableTo(type1,type2);
        this._checkIsNotAssignableTo(type2,type1);
    }
    constructor() {
    }
    @defaultConstructor
    StrongAssignabilityTest() {
    }
}

export namespace StrongGenericFunctionInferenceTest {
    export type Constructors = 'StrongGenericFunctionInferenceTest';
    export type Interface = Omit<StrongGenericFunctionInferenceTest, Constructors>;
}
@DartClass
export class StrongGenericFunctionInferenceTest {
    typeProvider : any;

    typeSystem : any;

    get bottomType() : any {
        return this.typeProvider.bottomType;
    }
    get doubleType() : any {
        return this.typeProvider.doubleType;
    }
    get dynamicType() : any {
        return this.typeProvider.dynamicType;
    }
    get functionType() : any {
        return this.typeProvider.functionType;
    }
    get intType() : any {
        return this.typeProvider.intType;
    }
    get iterableType() : any {
        return this.typeProvider.iterableType;
    }
    get listType() : any {
        return this.typeProvider.listType;
    }
    get numType() : any {
        return this.typeProvider.numType;
    }
    get objectType() : any {
        return this.typeProvider.objectType;
    }
    get stringType() : any {
        return this.typeProvider.stringType;
    }
    get voidType() : any {
        return VoidTypeImpl.instance;
    }
    get nullType() : any {
        return this.typeProvider.nullType;
    }
    setUp() : void {
        this.typeProvider = new bare.createInstance(any,null);
        this.typeSystem = new bare.createInstance(any,null,this.typeProvider);
    }
    test_boundedByAnotherTypeParameter() : void {
        let tFrom = TypeBuilder.variable('TFrom');
        let tTo = TypeBuilder.variable('TTo',{
            bound : this.iterableType.instantiate(new core.DartList.literal(tFrom))});
        let cast = TypeBuilder.function({
            types : new core.DartList.literal(tFrom,tTo),required : new core.DartList.literal(tFrom),result : tTo});
        expect(this._inferCall(cast,new core.DartList.literal(this.stringType)),new core.DartList.literal(this.stringType,this.iterableType.instantiate(new core.DartList.literal(this.stringType))));
    }
    test_boundedByOuterClass() : void {
        let a = ElementFactory.classElement('A',this.objectType);
        let b = ElementFactory.classElement('B',a.type);
        let c = ElementFactory.classElement('C',this.objectType,new core.DartList.literal('T'));
        (op(Op.INDEX,c.typeParameters,0) as any).bound = a.type;
        let s = TypeBuilder.variable('S');
        (s.element as any).bound = op(Op.INDEX,c.typeParameters,0).type;
        let m = ElementFactory.methodElement('m',s,new core.DartList.literal(s));
        m.typeParameters = new core.DartList.literal(s.element);
        c.methods = new core.DartList.literal(m);
        let cOfObject = c.type.instantiate(new core.DartList.literal(this.objectType));
        let cOfA = c.type.instantiate(new core.DartList.literal(a.type));
        let cOfB = c.type.instantiate(new core.DartList.literal(b.type));
        expect(this._inferCall(cOfB.getMethod('m').type,new core.DartList.literal(b.type)),new core.DartList.literal(b.type,b.type));
        expect(this._inferCall(cOfA.getMethod('m').type,new core.DartList.literal(b.type)),new core.DartList.literal(a.type,b.type));
        expect(this._inferCall(cOfObject.getMethod('m').type,new core.DartList.literal(b.type)),new core.DartList.literal(this.objectType,b.type));
    }
    test_boundedByOuterClassSubstituted() : void {
        let a = ElementFactory.classElement('A',this.objectType);
        let b = ElementFactory.classElement('B',a.type);
        let c = ElementFactory.classElement('C',this.objectType,new core.DartList.literal('T'));
        (op(Op.INDEX,c.typeParameters,0) as any).bound = a.type;
        let s = TypeBuilder.variable('S');
        let iterableOfT = this.iterableType.instantiate(new core.DartList.literal(op(Op.INDEX,c.typeParameters,0).type));
        (s.element as any).bound = iterableOfT;
        let m = ElementFactory.methodElement('m',s,new core.DartList.literal(s));
        m.typeParameters = new core.DartList.literal(s.element);
        c.methods = new core.DartList.literal(m);
        let cOfObject = c.type.instantiate(new core.DartList.literal(this.objectType));
        let cOfA = c.type.instantiate(new core.DartList.literal(a.type));
        let cOfB = c.type.instantiate(new core.DartList.literal(b.type));
        let listOfB = this.listType.instantiate(new core.DartList.literal(b.type));
        expect(this._inferCall(cOfB.getMethod('m').type,new core.DartList.literal(listOfB)),new core.DartList.literal(b.type,listOfB));
        expect(this._inferCall(cOfA.getMethod('m').type,new core.DartList.literal(listOfB)),new core.DartList.literal(a.type,listOfB));
        expect(this._inferCall(cOfObject.getMethod('m').type,new core.DartList.literal(listOfB)),new core.DartList.literal(this.objectType,listOfB));
    }
    test_boundedRecursively() : void {
        let clonable : any = ElementFactory.classElement('Clonable',this.objectType,new core.DartList.literal('T'));
        (op(Op.INDEX,clonable.typeParameters,0) as any).bound = clonable.type;
        let foo : any = ElementFactory.classElement('Foo',null);
        foo.supertype = clonable.type.instantiate(new core.DartList.literal(foo.type));
        let s = TypeBuilder.variable('S');
        (s.element as any).bound = clonable.type.instantiate(new core.DartList.literal(s));
        let clone = TypeBuilder.function({
            types : new core.DartList.literal(s),required : new core.DartList.literal(s,s),result : s});
        expect(this._inferCall(clone,new core.DartList.literal(foo.type,foo.type)),new core.DartList.literal(foo.type));
        expect(this._inferCall(clone,new core.DartList.literal(this.stringType,this.numType),{
            expectError : true}),new core.DartList.literal(this.objectType));
    }
    test_genericCastFunction() : void {
        let tFrom = TypeBuilder.variable('TFrom');
        let tTo = TypeBuilder.variable('TTo');
        let cast = TypeBuilder.function({
            types : new core.DartList.literal(tFrom,tTo),required : new core.DartList.literal(tFrom),result : tTo});
        expect(this._inferCall(cast,new core.DartList.literal(this.intType)),new core.DartList.literal(this.intType,this.dynamicType));
    }
    test_genericCastFunctionWithUpperBound() : void {
        let tFrom = TypeBuilder.variable('TFrom');
        let tTo = TypeBuilder.variable('TTo',{
            bound : tFrom});
        let cast = TypeBuilder.function({
            types : new core.DartList.literal(tFrom,tTo),required : new core.DartList.literal(tFrom),result : tTo});
        expect(this._inferCall(cast,new core.DartList.literal(this.intType)),new core.DartList.literal(this.intType,this.intType));
    }
    test_parametersToFunctionParam() : void {
        let t = TypeBuilder.variable('T');
        let cast = TypeBuilder.function({
            types : new core.DartList.literal(t),required : new core.DartList.literal(TypeBuilder.function({
                required : new core.DartList.literal(t),result : this.dynamicType})),result : t});
        expect(this._inferCall(cast,new core.DartList.literal(TypeBuilder.function({
            required : new core.DartList.literal(this.numType),result : this.dynamicType}))),new core.DartList.literal(this.numType));
    }
    test_parametersUseLeastUpperBound() : void {
        let t = TypeBuilder.variable('T');
        let cast = TypeBuilder.function({
            types : new core.DartList.literal(t),required : new core.DartList.literal(t,t),result : t});
        expect(this._inferCall(cast,new core.DartList.literal(this.intType,this.doubleType)),new core.DartList.literal(this.numType));
    }
    test_parameterTypeUsesUpperBound() : void {
        let t = TypeBuilder.variable('T',{
            bound : this.numType});
        let f = TypeBuilder.function({
            types : new core.DartList.literal(t),required : new core.DartList.literal(t),result : this.dynamicType});
        expect(this._inferCall(f,new core.DartList.literal(this.intType)),new core.DartList.literal(this.intType));
    }
    test_returnFunctionWithGenericParameter() : void {
        let t = TypeBuilder.variable('T');
        let f = TypeBuilder.function({
            types : new core.DartList.literal(t),required : new core.DartList.literal(TypeBuilder.function({
                required : new core.DartList.literal(t),result : t})),result : TypeBuilder.function({
                required : new core.DartList.literal(t),result : this.voidType})});
        expect(this._inferCall(f,new core.DartList.literal(TypeBuilder.function({
            required : new core.DartList.literal(this.numType),result : this.intType}))),new core.DartList.literal(this.intType));
    }
    test_returnFunctionWithGenericParameterAndContext() : void {
        let t = TypeBuilder.variable('T');
        let f = TypeBuilder.function({
            types : new core.DartList.literal(t),required : new core.DartList.literal(TypeBuilder.function({
                required : new core.DartList.literal(t),result : t})),result : TypeBuilder.function({
                required : new core.DartList.literal(t),result : this.voidType})});
        expect(this._inferCall(f,new core.DartList.literal(),{
            returnType : TypeBuilder.function({
                required : new core.DartList.literal(this.numType),result : this.intType})}),new core.DartList.literal(this.numType));
    }
    test_returnFunctionWithGenericParameterAndReturn() : void {
        let t = TypeBuilder.variable('T');
        let f = TypeBuilder.function({
            types : new core.DartList.literal(t),required : new core.DartList.literal(TypeBuilder.function({
                required : new core.DartList.literal(t),result : t})),result : TypeBuilder.function({
                required : new core.DartList.literal(t),result : t})});
        expect(this._inferCall(f,new core.DartList.literal(TypeBuilder.function({
            required : new core.DartList.literal(this.numType),result : this.intType}))),new core.DartList.literal(this.intType));
    }
    test_returnFunctionWithGenericReturn() : void {
        let t = TypeBuilder.variable('T');
        let f = TypeBuilder.function({
            types : new core.DartList.literal(t),required : new core.DartList.literal(TypeBuilder.function({
                required : new core.DartList.literal(t),result : t})),result : TypeBuilder.function({
                required : new core.DartList.literal(),result : t})});
        expect(this._inferCall(f,new core.DartList.literal(TypeBuilder.function({
            required : new core.DartList.literal(this.numType),result : this.intType}))),new core.DartList.literal(this.intType));
    }
    test_returnTypeFromContext() : void {
        let t = TypeBuilder.variable('T');
        let f = TypeBuilder.function({
            types : new core.DartList.literal(t),required : new core.DartList.literal(),result : t});
        expect(this._inferCall(f,new core.DartList.literal(),{
            returnType : this.stringType}),new core.DartList.literal(this.stringType));
    }
    test_returnTypeWithBoundFromContext() : void {
        let t = TypeBuilder.variable('T',{
            bound : this.numType});
        let f = TypeBuilder.function({
            types : new core.DartList.literal(t),required : new core.DartList.literal(),result : t});
        expect(this._inferCall(f,new core.DartList.literal(),{
            returnType : this.doubleType}),new core.DartList.literal(this.doubleType));
    }
    test_returnTypeWithBoundFromInvalidContext() : void {
        let t = TypeBuilder.variable('T',{
            bound : this.numType});
        let f = TypeBuilder.function({
            types : new core.DartList.literal(t),required : new core.DartList.literal(),result : t});
        expect(this._inferCall(f,new core.DartList.literal(),{
            returnType : this.stringType}),new core.DartList.literal(this.nullType));
    }
    test_unifyParametersToFunctionParam() : void {
        let t = TypeBuilder.variable('T');
        let cast = TypeBuilder.function({
            types : new core.DartList.literal(t),required : new core.DartList.literal(TypeBuilder.function({
                required : new core.DartList.literal(t),result : this.dynamicType}),TypeBuilder.function({
                required : new core.DartList.literal(t),result : this.dynamicType})),result : t});
        expect(this._inferCall(cast,new core.DartList.literal(TypeBuilder.function({
            required : new core.DartList.literal(this.intType),result : this.dynamicType}),TypeBuilder.function({
            required : new core.DartList.literal(this.doubleType),result : this.dynamicType}))),new core.DartList.literal(this.nullType));
    }
    test_unusedReturnTypeIsDynamic() : void {
        let t = TypeBuilder.variable('T');
        let f = TypeBuilder.function({
            types : new core.DartList.literal(t),required : new core.DartList.literal(),result : t});
        expect(this._inferCall(f,new core.DartList.literal()),new core.DartList.literal(this.dynamicType));
    }
    test_unusedReturnTypeWithUpperBound() : void {
        let t = TypeBuilder.variable('T',{
            bound : this.numType});
        let f = TypeBuilder.function({
            types : new core.DartList.literal(t),required : new core.DartList.literal(),result : t});
        expect(this._inferCall(f,new core.DartList.literal()),new core.DartList.literal(this.numType));
    }
    _inferCall(ft : any,arguments : core.DartList<any>,_namedArguments? : {returnType? : any,expectError? : boolean}) : core.DartList<any> {
        let {returnType,expectError} = Object.assign({
            "expectError" : false}, _namedArguments );
        let listener = new bare.createInstance(any,null);
        let reporter = new bare.createInstance(any,null,listener,new bare.createInstance(any,null,'/test.dart',lib4.toUri('/test.dart'),UriKind.FILE_URI));
        let inferred : any = this.typeSystem.inferGenericFunctionOrType(ft,ft.parameters,arguments,returnType,{
            errorReporter : reporter,errorNode : astFactory.nullLiteral(new bare.createInstance(any,null,Keyword.NULL,0))});
        if (expectError) {
            expect(listener.errors.map((e : any) =>  {
                return e.errorCode;
            }).toList(),new core.DartList.literal(StrongModeCode.COULD_NOT_INFER),{
                reason : 'expected exactly 1 could not infer error.'});
        }else {
            expect(listener.errors,isEmpty,{
                reason : 'did not expect any errors.'});
        }
        return ((t)=>(!!t)?t.typeArguments:null)(inferred);
    }
    constructor() {
    }
    @defaultConstructor
    StrongGenericFunctionInferenceTest() {
    }
}

export namespace StrongSubtypingTest {
    export type Constructors = 'StrongSubtypingTest';
    export type Interface = Omit<StrongSubtypingTest, Constructors>;
}
@DartClass
export class StrongSubtypingTest {
    typeProvider : any;

    typeSystem : any;

    get bottomType() : any {
        return this.typeProvider.bottomType;
    }
    get doubleType() : any {
        return this.typeProvider.doubleType;
    }
    get dynamicType() : any {
        return this.typeProvider.dynamicType;
    }
    get functionType() : any {
        return this.typeProvider.functionType;
    }
    get intType() : any {
        return this.typeProvider.intType;
    }
    get listType() : any {
        return this.typeProvider.listType;
    }
    get numType() : any {
        return this.typeProvider.numType;
    }
    get objectType() : any {
        return this.typeProvider.objectType;
    }
    get stringType() : any {
        return this.typeProvider.stringType;
    }
    get voidType() : any {
        return VoidTypeImpl.instance;
    }
    setUp() : void {
        this.typeProvider = new bare.createInstance(any,null);
        this.typeSystem = new bare.createInstance(any,null,this.typeProvider);
    }
    test_bottom_isBottom() : void {
        let interfaceType : any = ElementFactory.classElement2('A',new core.DartList.literal()).type;
        let equivalents : core.DartList<any> = new core.DartList.literal<any>(this.bottomType);
        let supertypes : core.DartList<any> = new core.DartList.literal<any>(this.dynamicType,this.objectType,this.intType,this.doubleType,this.numType,this.stringType,this.functionType,interfaceType);
        this._checkGroups(this.bottomType,{
            equivalents : equivalents,supertypes : supertypes});
    }
    test_call_method() : void {
        let classBottom : any = ElementFactory.classElement2("Bottom");
        let methodBottom : any = ElementFactory.methodElement("call",this.objectType,new core.DartList.literal<any>(this.intType));
        classBottom.methods = new core.DartList.literal<any>(methodBottom);
        let top : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.intType),result : this.objectType});
        let bottom : any = classBottom.type;
        this._checkIsStrictSubtypeOf(bottom,top);
    }
    test_classes() : void {
        let classTop : any = ElementFactory.classElement2("A");
        let classLeft : any = ElementFactory.classElement("B",classTop.type);
        let classRight : any = ElementFactory.classElement("C",classTop.type);
        let classBottom : any = ((_) : any =>  {
            {
                _.interfaces = new core.DartList.literal<any>(classRight.type);
                return _;
            }
        })(ElementFactory.classElement("D",classLeft.type));
        let top : any = classTop.type;
        let left : any = classLeft.type;
        let right : any = classRight.type;
        let bottom : any = classBottom.type;
        this._checkLattice(top,left,right,bottom);
    }
    test_double() : void {
        let equivalents : core.DartList<any> = new core.DartList.literal<any>(this.doubleType);
        let supertypes : core.DartList<any> = new core.DartList.literal<any>(this.numType);
        let unrelated : core.DartList<any> = new core.DartList.literal<any>(this.intType);
        this._checkGroups(this.doubleType,{
            equivalents : equivalents,supertypes : supertypes,unrelated : unrelated});
    }
    test_dynamic_isTop() : void {
        let interfaceType : any = ElementFactory.classElement2('A',new core.DartList.literal()).type;
        let equivalents : core.DartList<any> = new core.DartList.literal<any>(this.dynamicType,this.objectType);
        let subtypes : core.DartList<any> = new core.DartList.literal<any>(this.intType,this.doubleType,this.numType,this.stringType,this.functionType,interfaceType,this.bottomType);
        this._checkGroups(this.dynamicType,{
            equivalents : equivalents,subtypes : subtypes});
    }
    test_fuzzy_arrows() : void {
        let top : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.dynamicType),result : this.objectType});
        let left : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.objectType),result : this.objectType});
        let right : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.dynamicType),result : this.bottomType});
        let bottom : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.objectType),result : this.bottomType});
        this._checkLattice(top,left,right,bottom);
    }
    test_genericFunction_generic_monomorphic() : void {
        let s : any = TypeBuilder.variable("S");
        let t : any = TypeBuilder.variable("T",{
            bound : s});
        let u : any = TypeBuilder.variable("U",{
            bound : this.intType});
        let v : any = TypeBuilder.variable("V",{
            bound : u});
        let a : any = TypeBuilder.variable("A");
        let b : any = TypeBuilder.variable("B",{
            bound : a});
        let c : any = TypeBuilder.variable("C",{
            bound : this.intType});
        let d : any = TypeBuilder.variable("D",{
            bound : c});
        this._checkIsStrictSubtypeOf(TypeBuilder.function({
            types : new core.DartList.literal(s,t),required : new core.DartList.literal(s),result : t}),TypeBuilder.function({
            types : new core.DartList.literal(a,b),required : new core.DartList.literal(this.dynamicType),result : this.dynamicType}));
        this._checkIsNotSubtypeOf(TypeBuilder.function({
            types : new core.DartList.literal(u,v),required : new core.DartList.literal(u),result : v}),TypeBuilder.function({
            types : new core.DartList.literal(c,d),required : new core.DartList.literal(this.objectType),result : this.objectType}));
        this._checkIsNotSubtypeOf(TypeBuilder.function({
            types : new core.DartList.literal(u,v),required : new core.DartList.literal(u),result : v}),TypeBuilder.function({
            types : new core.DartList.literal(c,d),required : new core.DartList.literal(this.intType),result : this.intType}));
    }
    test_genericFunction_genericDoesNotSubtypeNonGeneric() : void {
        let s : any = TypeBuilder.variable("S");
        let t : any = TypeBuilder.variable("T",{
            bound : s});
        let u : any = TypeBuilder.variable("U",{
            bound : this.intType});
        let v : any = TypeBuilder.variable("V",{
            bound : u});
        this._checkIsNotSubtypeOf(TypeBuilder.function({
            types : new core.DartList.literal(s,t),required : new core.DartList.literal(s),result : t}),TypeBuilder.function({
            required : new core.DartList.literal(this.dynamicType),result : this.dynamicType}));
        this._checkIsNotSubtypeOf(TypeBuilder.function({
            types : new core.DartList.literal(u,v),required : new core.DartList.literal(u),result : v}),TypeBuilder.function({
            required : new core.DartList.literal(this.objectType),result : this.objectType}));
        this._checkIsNotSubtypeOf(TypeBuilder.function({
            types : new core.DartList.literal(u,v),required : new core.DartList.literal(u),result : v}),TypeBuilder.function({
            required : new core.DartList.literal(this.intType),result : this.intType}));
    }
    test_genericFunction_simple() : void {
        let s : any = TypeBuilder.variable("S");
        let t : any = TypeBuilder.variable("T");
        this._checkEquivalent(TypeBuilder.function({
            types : new core.DartList.literal(t)}),TypeBuilder.function({
            types : new core.DartList.literal(s)}));
        this._checkEquivalent(TypeBuilder.function({
            types : new core.DartList.literal(t),required : new core.DartList.literal(t),result : t}),TypeBuilder.function({
            types : new core.DartList.literal(s),required : new core.DartList.literal(s),result : s}));
    }
    test_genericFunction_simple_bounded() : void {
        let s : any = TypeBuilder.variable("S");
        let t : any = TypeBuilder.variable("T",{
            bound : s});
        let u : any = TypeBuilder.variable("U");
        let v : any = TypeBuilder.variable("V",{
            bound : u});
        this._checkEquivalent(TypeBuilder.function({
            types : new core.DartList.literal(s,t)}),TypeBuilder.function({
            types : new core.DartList.literal(u,v)}));
        this._checkEquivalent(TypeBuilder.function({
            types : new core.DartList.literal(s,t),required : new core.DartList.literal(s),result : t}),TypeBuilder.function({
            types : new core.DartList.literal(u,v),required : new core.DartList.literal(u),result : v}));
        {
            let top : any = TypeBuilder.function({
                types : new core.DartList.literal(s,t),required : new core.DartList.literal(t),result : s});
            let left : any = TypeBuilder.function({
                types : new core.DartList.literal(u,v),required : new core.DartList.literal(u),result : u});
            let right : any = TypeBuilder.function({
                types : new core.DartList.literal(u,v),required : new core.DartList.literal(v),result : v});
            let bottom : any = TypeBuilder.function({
                types : new core.DartList.literal(s,t),required : new core.DartList.literal(s),result : t});
            this._checkLattice(top,left,right,bottom);
        }
    }
    test_genericFunction_simple_fBounded() : void {
        let AClass : any = ElementFactory.classElement2('A',new core.DartList.literal("Q"));
        let AType : any = AClass.type;
        let BClass : any = ElementFactory.classElement2('B',new core.DartList.literal("R"));
        BClass.supertype = AType.instantiate(new core.DartList.literal(op(Op.INDEX,BClass.typeParameters,0).type));
        let BType : any = BClass.type;
        let s : any = TypeBuilder.variable("S");
        (s.element as any).bound = AType.instantiate(new core.DartList.literal(s));
        let t : any = TypeBuilder.variable("T",{
            bound : s});
        let u : any = TypeBuilder.variable("U");
        (u.element as any).bound = BType.instantiate(new core.DartList.literal(u));
        let v : any = TypeBuilder.variable("V",{
            bound : u});
        this._checkIsStrictSubtypeOf(TypeBuilder.function({
            types : new core.DartList.literal(s)}),TypeBuilder.function({
            types : new core.DartList.literal(u)}));
        this._checkIsStrictSubtypeOf(TypeBuilder.function({
            types : new core.DartList.literal(s,t),required : new core.DartList.literal(s),result : t}),TypeBuilder.function({
            types : new core.DartList.literal(u,v),required : new core.DartList.literal(u),result : v}));
    }
    test_generics() : void {
        let LClass : any = ElementFactory.classElement2('L',new core.DartList.literal("T"));
        let LType : any = LClass.type;
        let MClass : any = ElementFactory.classElement2('M',new core.DartList.literal("T"));
        let typeParam : any = op(Op.INDEX,MClass.typeParameters,0).type;
        let superType : any = LType.instantiate(new core.DartList.literal<any>(typeParam));
        MClass.interfaces = new core.DartList.literal<any>(superType);
        let MType : any = MClass.type;
        let top : any = LType.instantiate(new core.DartList.literal<any>(this.dynamicType));
        let left : any = MType.instantiate(new core.DartList.literal<any>(this.dynamicType));
        let right : any = LType.instantiate(new core.DartList.literal<any>(this.intType));
        let bottom : any = MType.instantiate(new core.DartList.literal<any>(this.intType));
        this._checkLattice(top,left,right,bottom);
    }
    test_int() : void {
        let equivalents : core.DartList<any> = new core.DartList.literal<any>(this.intType);
        let supertypes : core.DartList<any> = new core.DartList.literal<any>(this.numType);
        let unrelated : core.DartList<any> = new core.DartList.literal<any>(this.doubleType);
        this._checkGroups(this.intType,{
            equivalents : equivalents,supertypes : supertypes,unrelated : unrelated});
    }
    test_named_optional() : void {
        let r : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.intType),result : this.intType});
        let o : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(),optional : new core.DartList.literal<any>(this.intType),result : this.intType});
        let n : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(),named : new core.DartMap.literal([
                ['x',this.intType]]),result : this.intType});
        let rr : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.intType,this.intType),result : this.intType});
        let ro : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.intType),optional : new core.DartList.literal<any>(this.intType),result : this.intType});
        let rn : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.intType),named : new core.DartMap.literal([
                ['x',this.intType]]),result : this.intType});
        let oo : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(),optional : new core.DartList.literal<any>(this.intType,this.intType),result : this.intType});
        let nn : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(),named : new core.DartMap.literal([
                ['x',this.intType],
                ['y',this.intType]]),result : this.intType});
        let nnn : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(),named : new core.DartMap.literal([
                ['x',this.intType],
                ['y',this.intType],
                ['z',this.intType]]),result : this.intType});
        this._checkGroups(r,{
            equivalents : new core.DartList.literal(r),subtypes : new core.DartList.literal(o,ro,rn,oo),unrelated : new core.DartList.literal(n,rr,nn,nnn)});
        this._checkGroups(o,{
            equivalents : new core.DartList.literal(o),subtypes : new core.DartList.literal(oo),unrelated : new core.DartList.literal(n,rr,ro,rn,nn,nnn)});
        this._checkGroups(n,{
            equivalents : new core.DartList.literal(n),subtypes : new core.DartList.literal(nn,nnn),unrelated : new core.DartList.literal(r,o,rr,ro,rn,oo)});
        this._checkGroups(rr,{
            equivalents : new core.DartList.literal(rr),subtypes : new core.DartList.literal(ro,oo),unrelated : new core.DartList.literal(r,o,n,rn,nn,nnn)});
        this._checkGroups(ro,{
            equivalents : new core.DartList.literal(ro),subtypes : new core.DartList.literal(oo),unrelated : new core.DartList.literal(o,n,rn,nn,nnn)});
        this._checkGroups(rn,{
            equivalents : new core.DartList.literal(rn),subtypes : new core.DartList.literal(),unrelated : new core.DartList.literal(o,n,rr,ro,oo,nn,nnn)});
        this._checkGroups(oo,{
            equivalents : new core.DartList.literal(oo),subtypes : new core.DartList.literal(),unrelated : new core.DartList.literal(n,rn,nn,nnn)});
        this._checkGroups(nn,{
            equivalents : new core.DartList.literal(nn),subtypes : new core.DartList.literal(nnn),unrelated : new core.DartList.literal(r,o,rr,ro,rn,oo)});
        this._checkGroups(nnn,{
            equivalents : new core.DartList.literal(nnn),subtypes : new core.DartList.literal(),unrelated : new core.DartList.literal(r,o,rr,ro,rn,oo)});
    }
    test_num() : void {
        let equivalents : core.DartList<any> = new core.DartList.literal<any>(this.numType);
        let supertypes : core.DartList<any> = new core.DartList.literal<any>();
        let unrelated : core.DartList<any> = new core.DartList.literal<any>(this.stringType);
        let subtypes : core.DartList<any> = new core.DartList.literal<any>(this.intType,this.doubleType);
        this._checkGroups(this.numType,{
            equivalents : equivalents,supertypes : supertypes,unrelated : unrelated,subtypes : subtypes});
    }
    test_simple_function() : void {
        let top : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.intType),result : this.objectType});
        let left : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.intType),result : this.intType});
        let right : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.objectType),result : this.objectType});
        let bottom : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.objectType),result : this.intType});
        this._checkLattice(top,left,right,bottom);
    }
    test_simple_function_void() : void {
        let functionType : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.intType),result : this.objectType});
        this._checkIsNotSubtypeOf(this.voidType,functionType);
    }
    test_void_functions() : void {
        let top : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.intType),result : this.voidType});
        let bottom : any = TypeBuilder.function({
            required : new core.DartList.literal<any>(this.objectType),result : this.intType});
        this._checkIsStrictSubtypeOf(bottom,top);
    }
    _checkEquivalent(type1 : any,type2 : any) : void {
        this._checkIsSubtypeOf(type1,type2);
        this._checkIsSubtypeOf(type2,type1);
    }
    _checkGroups(t1 : any,_namedArguments? : {equivalents? : core.DartList<any>,unrelated? : core.DartList<any>,subtypes? : core.DartList<any>,supertypes? : core.DartList<any>}) : void {
        let {equivalents,unrelated,subtypes,supertypes} = Object.assign({
        }, _namedArguments );
        if (equivalents != null) {
            for(let t2 of equivalents) {
                this._checkEquivalent(t1,t2);
            }
        }
        if (unrelated != null) {
            for(let t2 of unrelated) {
                this._checkUnrelated(t1,t2);
            }
        }
        if (subtypes != null) {
            for(let t2 of subtypes) {
                this._checkIsStrictSubtypeOf(t2,t1);
            }
        }
        if (supertypes != null) {
            for(let t2 of supertypes) {
                this._checkIsStrictSubtypeOf(t1,t2);
            }
        }
    }
    _checkIsNotSubtypeOf(type1 : any,type2 : any) : void {
        expect(this.typeSystem.isSubtypeOf(type1,type2),false);
    }
    _checkIsStrictSubtypeOf(type1 : any,type2 : any) : void {
        this._checkIsSubtypeOf(type1,type2);
        this._checkIsNotSubtypeOf(type2,type1);
    }
    _checkIsSubtypeOf(type1 : any,type2 : any) : void {
        expect(this.typeSystem.isSubtypeOf(type1,type2),true);
    }
    _checkLattice(top : any,left : any,right : any,bottom : any) : void {
        this._checkGroups(top,{
            equivalents : new core.DartList.literal<any>(top),subtypes : new core.DartList.literal<any>(left,right,bottom)});
        this._checkGroups(left,{
            equivalents : new core.DartList.literal<any>(left),subtypes : new core.DartList.literal<any>(bottom),unrelated : new core.DartList.literal<any>(right),supertypes : new core.DartList.literal<any>(top)});
        this._checkGroups(right,{
            equivalents : new core.DartList.literal<any>(right),subtypes : new core.DartList.literal<any>(bottom),unrelated : new core.DartList.literal<any>(left),supertypes : new core.DartList.literal<any>(top)});
        this._checkGroups(bottom,{
            equivalents : new core.DartList.literal<any>(bottom),supertypes : new core.DartList.literal<any>(top,left,right)});
    }
    _checkUnrelated(type1 : any,type2 : any) : void {
        this._checkIsNotSubtypeOf(type1,type2);
        this._checkIsNotSubtypeOf(type2,type1);
    }
    constructor() {
    }
    @defaultConstructor
    StrongSubtypingTest() {
    }
}

export namespace TypeBuilder {
    export type Constructors = 'TypeBuilder';
    export type Interface = Omit<TypeBuilder, Constructors>;
}
@DartClass
export class TypeBuilder {
    static function(_namedArguments? : {types? : core.DartList<any>,required? : core.DartList<any>,optional? : core.DartList<any>,named? : core.DartMap<string,any>,result? : any}) : any {
        let {types,required,optional,named,result} = Object.assign({
        }, _namedArguments );
        result = (result || VoidTypeImpl.instance);
        required = (required || new core.DartList.literal());
        let f : any = ElementFactory.functionElement8(required,result,{
            optional : optional,named : named});
        if (types != null) {
            f.typeParameters = new core.DartList.from(types.map((t : any) =>  {
                return t.element;
            }));
        }
        return f.type = new bare.createInstance(any,null,f);
    }
    static variable(name : string,_namedArguments? : {bound? : any}) : any {
        let {bound} = Object.assign({
        }, _namedArguments );
        return ElementFactory.typeParameterWithType(name,bound).type;
    }
    constructor() {
    }
    @defaultConstructor
    TypeBuilder() {
    }
}

export namespace LeastUpperBoundTestBase {
    export type Constructors = BoundTestBase.Constructors | 'LeastUpperBoundTestBase';
    export type Interface = Omit<LeastUpperBoundTestBase, Constructors>;
}
@DartClass
export class LeastUpperBoundTestBase extends BoundTestBase {
    test_bottom_function() : void {
        this._checkLeastUpperBound(this.bottomType,this.simpleFunctionType,this.simpleFunctionType);
    }
    test_bottom_interface() : void {
        let interfaceType : any = ElementFactory.classElement2('A',new core.DartList.literal()).type;
        this._checkLeastUpperBound(this.bottomType,interfaceType,interfaceType);
    }
    test_bottom_typeParam() : void {
        let typeParam : any = ElementFactory.typeParameterElement('T').type;
        this._checkLeastUpperBound(this.bottomType,typeParam,typeParam);
    }
    test_directInterfaceCase() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement2("B");
        let classC : any = ElementFactory.classElement2("C");
        let typeA : any = classA.type;
        let typeB : any = classB.type;
        let typeC : any = classC.type;
        classB.interfaces = new core.DartList.literal<any>(typeA);
        classC.interfaces = new core.DartList.literal<any>(typeB);
        this._checkLeastUpperBound(typeB,typeC,typeB);
    }
    test_directSubclassCase() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement("C",classB.type);
        let typeB : any = classB.type;
        let typeC : any = classC.type;
        this._checkLeastUpperBound(typeB,typeC,typeB);
    }
    test_dynamic_bottom() : void {
        this._checkLeastUpperBound(this.dynamicType,this.bottomType,this.dynamicType);
    }
    test_dynamic_function() : void {
        this._checkLeastUpperBound(this.dynamicType,this.simpleFunctionType,this.dynamicType);
    }
    test_dynamic_interface() : void {
        let interfaceType : any = ElementFactory.classElement2('A',new core.DartList.literal()).type;
        this._checkLeastUpperBound(this.dynamicType,interfaceType,this.dynamicType);
    }
    test_dynamic_typeParam() : void {
        let typeParam : any = ElementFactory.typeParameterElement('T').type;
        this._checkLeastUpperBound(this.dynamicType,typeParam,this.dynamicType);
    }
    test_dynamic_void() : void {
        this._checkLeastUpperBound(this.dynamicType,this.voidType,this.dynamicType);
    }
    test_functionsDifferentRequiredArity() : void {
        let type1 : any = this._functionType(new core.DartList.literal(this.intType,this.intType));
        let type2 : any = this._functionType(new core.DartList.literal(this.intType,this.intType,this.intType));
        this._checkLeastUpperBound(type1,type2,this.functionType);
    }
    test_functionsIgnoreExtraNamedParams() : void {
        let type1 : any = this._functionType(new core.DartList.literal(),{
            named : new core.DartMap.literal([
                ['a',this.intType],
                ['b',this.intType]])});
        let type2 : any = this._functionType(new core.DartList.literal(),{
            named : new core.DartMap.literal([
                ['a',this.intType],
                ['c',this.intType]])});
        let expected : any = this._functionType(new core.DartList.literal(),{
            named : new core.DartMap.literal([
                ['a',this.intType]])});
        this._checkLeastUpperBound(type1,type2,expected);
    }
    test_functionsIgnoreExtraPositionalParams() : void {
        let type1 : any = this._functionType(new core.DartList.literal(),{
            optional : new core.DartList.literal(this.intType,this.intType,this.stringType)});
        let type2 : any = this._functionType(new core.DartList.literal(),{
            optional : new core.DartList.literal(this.intType)});
        let expected : any = this._functionType(new core.DartList.literal(),{
            optional : new core.DartList.literal(this.intType)});
        this._checkLeastUpperBound(type1,type2,expected);
    }
    test_functionsLubReturnType() : void {
        let type1 : any = this._functionType(new core.DartList.literal(),{
            returns : this.intType});
        let type2 : any = this._functionType(new core.DartList.literal(),{
            returns : this.doubleType});
        let expected : any = this._functionType(new core.DartList.literal(),{
            returns : this.numType});
        this._checkLeastUpperBound(type1,type2,expected);
    }
    test_functionsSameType() : void {
        let type1 : any = this._functionType(new core.DartList.literal(this.stringType,this.intType,this.numType),{
            optional : new core.DartList.literal(this.doubleType),named : new core.DartMap.literal([
                ['n',this.numType]]),returns : this.intType});
        let type2 : any = this._functionType(new core.DartList.literal(this.stringType,this.intType,this.numType),{
            optional : new core.DartList.literal(this.doubleType),named : new core.DartMap.literal([
                ['n',this.numType]]),returns : this.intType});
        let expected : any = this._functionType(new core.DartList.literal(this.stringType,this.intType,this.numType),{
            optional : new core.DartList.literal(this.doubleType),named : new core.DartMap.literal([
                ['n',this.numType]]),returns : this.intType});
        this._checkLeastUpperBound(type1,type2,expected);
    }
    test_interface_function() : void {
        let interfaceType : any = ElementFactory.classElement2('A',new core.DartList.literal()).type;
        this._checkLeastUpperBound(interfaceType,this.simpleFunctionType,this.objectType);
    }
    test_mixinCase() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement("C",classA.type);
        let classD : any = ElementFactory.classElement("D",classB.type);
        let typeA : any = classA.type;
        let typeC : any = classC.type;
        let typeD : any = classD.type;
        classD.mixins = new core.DartList.literal<any>(ElementFactory.classElement2("M").type,ElementFactory.classElement2("N").type,ElementFactory.classElement2("O").type,ElementFactory.classElement2("P").type);
        this._checkLeastUpperBound(typeD,typeC,typeA);
    }
    test_nestedFunctionsLubInnerParamTypes() : void {
        let type1 : any = this._functionType(new core.DartList.literal(this._functionType(new core.DartList.literal(this.stringType,this.intType,this.intType))));
        let type2 : any = this._functionType(new core.DartList.literal(this._functionType(new core.DartList.literal(this.intType,this.doubleType,this.numType))));
        let expected : any = this._functionType(new core.DartList.literal(this._functionType(new core.DartList.literal(this.objectType,this.numType,this.numType))));
        this._checkLeastUpperBound(type1,type2,expected);
    }
    test_object() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement2("B");
        let typeA : any = classA.type;
        let typeB : any = classB.type;
        let typeObject : any = typeA.element.supertype;
        expect((typeObject.element as any).supertype,isNull);
        expect(typeB.element.supertype,typeObject);
        this._checkLeastUpperBound(typeA,typeB,typeObject);
    }
    test_self() : void {
        let typeParam : any = ElementFactory.typeParameterElement('T').type;
        let interfaceType : any = ElementFactory.classElement2('A',new core.DartList.literal()).type;
        let types : core.DartList<any> = new core.DartList.literal(this.dynamicType,this.voidType,this.bottomType,typeParam,interfaceType,this.simpleFunctionType);
        for(let type of types) {
            this._checkLeastUpperBound(type,type,type);
        }
    }
    test_sharedSuperclass1() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement("C",classA.type);
        let typeA : any = classA.type;
        let typeB : any = classB.type;
        let typeC : any = classC.type;
        this._checkLeastUpperBound(typeB,typeC,typeA);
    }
    test_sharedSuperclass2() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement("C",classA.type);
        let classD : any = ElementFactory.classElement("D",classC.type);
        let typeA : any = classA.type;
        let typeB : any = classB.type;
        let typeD : any = classD.type;
        this._checkLeastUpperBound(typeB,typeD,typeA);
    }
    test_sharedSuperclass3() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement("C",classB.type);
        let classD : any = ElementFactory.classElement("D",classB.type);
        let typeB : any = classB.type;
        let typeC : any = classC.type;
        let typeD : any = classD.type;
        this._checkLeastUpperBound(typeC,typeD,typeB);
    }
    test_sharedSuperclass4() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classA2 : any = ElementFactory.classElement2("A2");
        let classA3 : any = ElementFactory.classElement2("A3");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement("C",classA.type);
        let typeA : any = classA.type;
        let typeA2 : any = classA2.type;
        let typeA3 : any = classA3.type;
        let typeB : any = classB.type;
        let typeC : any = classC.type;
        classB.interfaces = new core.DartList.literal<any>(typeA2);
        classC.interfaces = new core.DartList.literal<any>(typeA3);
        this._checkLeastUpperBound(typeB,typeC,typeA);
    }
    test_sharedSuperinterface1() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement2("B");
        let classC : any = ElementFactory.classElement2("C");
        let typeA : any = classA.type;
        let typeB : any = classB.type;
        let typeC : any = classC.type;
        classB.interfaces = new core.DartList.literal<any>(typeA);
        classC.interfaces = new core.DartList.literal<any>(typeA);
        this._checkLeastUpperBound(typeB,typeC,typeA);
    }
    test_sharedSuperinterface2() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement2("B");
        let classC : any = ElementFactory.classElement2("C");
        let classD : any = ElementFactory.classElement2("D");
        let typeA : any = classA.type;
        let typeB : any = classB.type;
        let typeC : any = classC.type;
        let typeD : any = classD.type;
        classB.interfaces = new core.DartList.literal<any>(typeA);
        classC.interfaces = new core.DartList.literal<any>(typeA);
        classD.interfaces = new core.DartList.literal<any>(typeC);
        this._checkLeastUpperBound(typeB,typeD,typeA);
    }
    test_sharedSuperinterface3() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement2("B");
        let classC : any = ElementFactory.classElement2("C");
        let classD : any = ElementFactory.classElement2("D");
        let typeA : any = classA.type;
        let typeB : any = classB.type;
        let typeC : any = classC.type;
        let typeD : any = classD.type;
        classB.interfaces = new core.DartList.literal<any>(typeA);
        classC.interfaces = new core.DartList.literal<any>(typeB);
        classD.interfaces = new core.DartList.literal<any>(typeB);
        this._checkLeastUpperBound(typeC,typeD,typeB);
    }
    test_sharedSuperinterface4() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classA2 : any = ElementFactory.classElement2("A2");
        let classA3 : any = ElementFactory.classElement2("A3");
        let classB : any = ElementFactory.classElement2("B");
        let classC : any = ElementFactory.classElement2("C");
        let typeA : any = classA.type;
        let typeA2 : any = classA2.type;
        let typeA3 : any = classA3.type;
        let typeB : any = classB.type;
        let typeC : any = classC.type;
        classB.interfaces = new core.DartList.literal<any>(typeA,typeA2);
        classC.interfaces = new core.DartList.literal<any>(typeA,typeA3);
        this._checkLeastUpperBound(typeB,typeC,typeA);
    }
    test_twoComparables() : void {
        this._checkLeastUpperBound(this.stringType,this.numType,this.objectType);
    }
    test_typeParam_function_bounded() : void {
        let typeA : any = ElementFactory.classElement('A',this.functionType).type;
        let typeParamElement : any = ElementFactory.typeParameterElement('T');
        typeParamElement.bound = typeA;
        let typeParam : any = typeParamElement.type;
        this._checkLeastUpperBound(typeParam,this.simpleFunctionType,this.functionType);
    }
    test_typeParam_function_noBound() : void {
        let typeParam : any = ElementFactory.typeParameterElement('T').type;
        this._checkLeastUpperBound(typeParam,this.simpleFunctionType,this.objectType);
    }
    test_typeParam_interface_bounded() : void {
        let typeA : any = ElementFactory.classElement2('A',new core.DartList.literal()).type;
        let typeB : any = ElementFactory.classElement('B',typeA).type;
        let typeC : any = ElementFactory.classElement('C',typeA).type;
        let typeParamElement : any = ElementFactory.typeParameterElement('T');
        typeParamElement.bound = typeB;
        let typeParam : any = typeParamElement.type;
        this._checkLeastUpperBound(typeParam,typeC,typeA);
    }
    test_typeParam_interface_noBound() : void {
        let typeParam : any = ElementFactory.typeParameterElement('T').type;
        let interfaceType : any = ElementFactory.classElement2('A',new core.DartList.literal()).type;
        this._checkLeastUpperBound(typeParam,interfaceType,this.objectType);
    }
    test_typeParameters_same() : void {
        let listOfIntType : any = this.listType.instantiate(new core.DartList.literal<any>(this.intType));
        this._checkLeastUpperBound(listOfIntType,listOfIntType,listOfIntType);
    }
    test_void() : void {
        let types : core.DartList<any> = new core.DartList.literal(this.bottomType,this.simpleFunctionType,ElementFactory.classElement2('A',new core.DartList.literal()).type,ElementFactory.typeParameterElement('T').type);
        for(let type of types) {
            this._checkLeastUpperBound(this._functionType(new core.DartList.literal(),{
                returns : this.voidType}),this._functionType(new core.DartList.literal(),{
                returns : type}),this._functionType(new core.DartList.literal(),{
                returns : this.voidType}));
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LeastUpperBoundTestBase() {
    }
}

export namespace StrongGreatestLowerBoundTest {
    export type Constructors = BoundTestBase.Constructors | 'StrongGreatestLowerBoundTest';
    export type Interface = Omit<StrongGreatestLowerBoundTest, Constructors>;
}
@DartClass
export class StrongGreatestLowerBoundTest extends BoundTestBase {
    setUp() : void {
        super.setUp();
        this.typeSystem = new bare.createInstance(any,null,this.typeProvider);
    }
    test_bottom_function() : void {
        this._checkGreatestLowerBound(this.bottomType,this.simpleFunctionType,this.bottomType);
    }
    test_bottom_interface() : void {
        let interfaceType : any = ElementFactory.classElement2('A',new core.DartList.literal()).type;
        this._checkGreatestLowerBound(this.bottomType,interfaceType,this.bottomType);
    }
    test_bottom_typeParam() : void {
        let typeParam : any = ElementFactory.typeParameterElement('T').type;
        this._checkGreatestLowerBound(this.bottomType,typeParam,this.bottomType);
    }
    test_classAndSuperclass() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement("C",classB.type);
        this._checkGreatestLowerBound(classA.type,classC.type,classC.type);
    }
    test_classAndSuperinterface() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement2("B");
        let classC : any = ElementFactory.classElement2("C");
        classB.interfaces = new core.DartList.literal<any>(classA.type);
        classC.interfaces = new core.DartList.literal<any>(classB.type);
        this._checkGreatestLowerBound(classA.type,classC.type,classC.type);
    }
    test_dynamic_bottom() : void {
        this._checkGreatestLowerBound(this.dynamicType,this.bottomType,this.bottomType);
    }
    test_dynamic_function() : void {
        this._checkGreatestLowerBound(this.dynamicType,this.simpleFunctionType,this.simpleFunctionType);
    }
    test_dynamic_interface() : void {
        let interfaceType : any = ElementFactory.classElement2('A',new core.DartList.literal()).type;
        this._checkGreatestLowerBound(this.dynamicType,interfaceType,interfaceType);
    }
    test_dynamic_typeParam() : void {
        let typeParam : any = ElementFactory.typeParameterElement('T').type;
        this._checkGreatestLowerBound(this.dynamicType,typeParam,typeParam);
    }
    test_dynamic_void() : void {
        this._checkGreatestLowerBound(this.dynamicType,this.voidType,this.voidType);
    }
    test_functionsDifferentNamedTakeUnion() : void {
        let type1 : any = this._functionType(new core.DartList.literal(),{
            named : new core.DartMap.literal([
                ['a',this.intType],
                ['b',this.intType]])});
        let type2 : any = this._functionType(new core.DartList.literal(),{
            named : new core.DartMap.literal([
                ['b',this.doubleType],
                ['c',this.stringType]])});
        let expected : any = this._functionType(new core.DartList.literal(),{
            named : new core.DartMap.literal([
                ['a',this.intType],
                ['b',this.numType],
                ['c',this.stringType]])});
        this._checkGreatestLowerBound(type1,type2,expected);
    }
    test_functionsDifferentOptionalArityTakeMax() : void {
        let type1 : any = this._functionType(new core.DartList.literal(),{
            optional : new core.DartList.literal(this.intType)});
        let type2 : any = this._functionType(new core.DartList.literal(),{
            optional : new core.DartList.literal(this.doubleType,this.stringType,this.objectType)});
        let expected : any = this._functionType(new core.DartList.literal(),{
            optional : new core.DartList.literal(this.numType,this.stringType,this.objectType)});
        this._checkGreatestLowerBound(type1,type2,expected);
    }
    test_functionsDifferentRequiredArityBecomeOptional() : void {
        let type1 : any = this._functionType(new core.DartList.literal(this.intType));
        let type2 : any = this._functionType(new core.DartList.literal(this.intType,this.intType,this.intType));
        let expected : any = this._functionType(new core.DartList.literal(this.intType),{
            optional : new core.DartList.literal(this.intType,this.intType)});
        this._checkGreatestLowerBound(type1,type2,expected);
    }
    test_functionsFuzzyArrows() : void {
        let type1 : any = this._functionType(new core.DartList.literal(this.dynamicType));
        let type2 : any = this._functionType(new core.DartList.literal(this.intType));
        let expected : any = this._functionType(new core.DartList.literal(this.intType));
        this._checkGreatestLowerBound(type1,type2,expected);
    }
    test_functionsGlbReturnType() : void {
        let type1 : any = this._functionType(new core.DartList.literal(),{
            returns : this.intType});
        let type2 : any = this._functionType(new core.DartList.literal(),{
            returns : this.numType});
        let expected : any = this._functionType(new core.DartList.literal(),{
            returns : this.intType});
        this._checkGreatestLowerBound(type1,type2,expected);
    }
    test_functionsLubNamedParams() : void {
        let type1 : any = this._functionType(new core.DartList.literal(),{
            named : new core.DartMap.literal([
                ['a',this.stringType],
                ['b',this.intType]])});
        let type2 : any = this._functionType(new core.DartList.literal(),{
            named : new core.DartMap.literal([
                ['a',this.intType],
                ['b',this.numType]])});
        let expected : any = this._functionType(new core.DartList.literal(),{
            named : new core.DartMap.literal([
                ['a',this.objectType],
                ['b',this.numType]])});
        this._checkGreatestLowerBound(type1,type2,expected);
    }
    test_functionsLubPositionalParams() : void {
        let type1 : any = this._functionType(new core.DartList.literal(),{
            optional : new core.DartList.literal(this.stringType,this.intType)});
        let type2 : any = this._functionType(new core.DartList.literal(),{
            optional : new core.DartList.literal(this.intType,this.numType)});
        let expected : any = this._functionType(new core.DartList.literal(),{
            optional : new core.DartList.literal(this.objectType,this.numType)});
        this._checkGreatestLowerBound(type1,type2,expected);
    }
    test_functionsLubRequiredParams() : void {
        let type1 : any = this._functionType(new core.DartList.literal(this.stringType,this.intType,this.intType));
        let type2 : any = this._functionType(new core.DartList.literal(this.intType,this.doubleType,this.numType));
        let expected : any = this._functionType(new core.DartList.literal(this.objectType,this.numType,this.numType));
        this._checkGreatestLowerBound(type1,type2,expected);
    }
    test_functionsMixedOptionalAndRequiredBecomeOptional() : void {
        let type1 : any = this._functionType(new core.DartList.literal(this.intType,this.intType),{
            optional : new core.DartList.literal(this.intType,this.intType,this.intType)});
        let type2 : any = this._functionType(new core.DartList.literal(this.intType),{
            optional : new core.DartList.literal(this.intType,this.intType)});
        let expected : any = this._functionType(new core.DartList.literal(this.intType),{
            optional : new core.DartList.literal(this.intType,this.intType,this.intType,this.intType)});
        this._checkGreatestLowerBound(type1,type2,expected);
    }
    test_functionsReturnBottomIfMixOptionalAndNamed() : void {
        let type1 : any = this._functionType(new core.DartList.literal(this.intType),{
            named : new core.DartMap.literal([
                ['a',this.intType]])});
        let type2 : any = this._functionType(new core.DartList.literal(),{
            named : new core.DartMap.literal([
                ['a',this.intType]])});
        this._checkGreatestLowerBound(type1,type2,this.bottomType);
    }
    test_functionsSameType() : void {
        let type1 : any = this._functionType(new core.DartList.literal(this.stringType,this.intType,this.numType),{
            optional : new core.DartList.literal(this.doubleType),named : new core.DartMap.literal([
                ['n',this.numType]]),returns : this.intType});
        let type2 : any = this._functionType(new core.DartList.literal(this.stringType,this.intType,this.numType),{
            optional : new core.DartList.literal(this.doubleType),named : new core.DartMap.literal([
                ['n',this.numType]]),returns : this.intType});
        let expected : any = this._functionType(new core.DartList.literal(this.stringType,this.intType,this.numType),{
            optional : new core.DartList.literal(this.doubleType),named : new core.DartMap.literal([
                ['n',this.numType]]),returns : this.intType});
        this._checkGreatestLowerBound(type1,type2,expected);
    }
    test_interface_function() : void {
        let interfaceType : any = ElementFactory.classElement2('A',new core.DartList.literal()).type;
        this._checkGreatestLowerBound(interfaceType,this.simpleFunctionType,this.bottomType);
    }
    test_mixin() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement2("B");
        let classC : any = ElementFactory.classElement2("C");
        let classD : any = ElementFactory.classElement("D",classA.type);
        classD.mixins = new core.DartList.literal<any>(classB.type,classC.type);
        this._checkGreatestLowerBound(classA.type,classD.type,classD.type);
        this._checkGreatestLowerBound(classB.type,classD.type,classD.type);
        this._checkGreatestLowerBound(classC.type,classD.type,classD.type);
    }
    test_self() : void {
        let typeParam : any = ElementFactory.typeParameterElement('T').type;
        let interfaceType : any = ElementFactory.classElement2('A',new core.DartList.literal()).type;
        let types : core.DartList<any> = new core.DartList.literal(this.dynamicType,this.voidType,this.bottomType,typeParam,interfaceType,this.simpleFunctionType);
        for(let type of types) {
            this._checkGreatestLowerBound(type,type,type);
        }
    }
    test_typeParam_function_noBound() : void {
        let typeParam : any = ElementFactory.typeParameterElement('T').type;
        this._checkGreatestLowerBound(typeParam,this.simpleFunctionType,this.bottomType);
    }
    test_typeParam_interface_bounded() : void {
        let typeA : any = ElementFactory.classElement2('A',new core.DartList.literal()).type;
        let typeB : any = ElementFactory.classElement('B',typeA).type;
        let typeC : any = ElementFactory.classElement('C',typeB).type;
        let typeParam : any = ElementFactory.typeParameterElement('T');
        typeParam.bound = typeB;
        this._checkGreatestLowerBound(typeParam.type,typeC,this.bottomType);
    }
    test_typeParam_interface_noBound() : void {
        let typeParam : any = ElementFactory.typeParameterElement('T').type;
        let interfaceType : any = ElementFactory.classElement2('A',new core.DartList.literal()).type;
        this._checkGreatestLowerBound(typeParam,interfaceType,this.bottomType);
    }
    test_typeParameters_different() : void {
        let listOfIntType : any = this.listType.instantiate(new core.DartList.literal<any>(this.intType));
        let listOfDoubleType : any = this.listType.instantiate(new core.DartList.literal<any>(this.doubleType));
        this._checkGreatestLowerBound(listOfIntType,listOfDoubleType,this.bottomType);
    }
    test_typeParameters_same() : void {
        let listOfIntType : any = this.listType.instantiate(new core.DartList.literal<any>(this.intType));
        this._checkGreatestLowerBound(listOfIntType,listOfIntType,listOfIntType);
    }
    test_unrelatedClasses() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement2("B");
        this._checkGreatestLowerBound(classA.type,classB.type,this.bottomType);
    }
    test_void() : void {
        let types : core.DartList<any> = new core.DartList.literal(this.bottomType,this.simpleFunctionType,ElementFactory.classElement2('A',new core.DartList.literal()).type,ElementFactory.typeParameterElement('T').type);
        for(let type of types) {
            this._checkGreatestLowerBound(this._functionType(new core.DartList.literal(),{
                returns : this.voidType}),this._functionType(new core.DartList.literal(),{
                returns : type}),this._functionType(new core.DartList.literal(),{
                returns : type}));
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StrongGreatestLowerBoundTest() {
    }
}

export namespace LeastUpperBoundTest {
    export type Constructors = LeastUpperBoundTestBase.Constructors | 'LeastUpperBoundTest';
    export type Interface = Omit<LeastUpperBoundTest, Constructors>;
}
@DartClass
export class LeastUpperBoundTest extends LeastUpperBoundTestBase {
    setUp() : void {
        super.setUp();
        this.typeSystem = new bare.createInstance(any,null,this.typeProvider);
    }
    test_functionsLubNamedParams() : void {
        let type1 : any = this._functionType(new core.DartList.literal(),{
            named : new core.DartMap.literal([
                ['a',this.stringType],
                ['b',this.intType]])});
        let type2 : any = this._functionType(new core.DartList.literal(),{
            named : new core.DartMap.literal([
                ['a',this.intType],
                ['b',this.numType]])});
        let expected : any = this._functionType(new core.DartList.literal(),{
            named : new core.DartMap.literal([
                ['a',this.objectType],
                ['b',this.numType]])});
        this._checkLeastUpperBound(type1,type2,expected);
    }
    test_functionsLubPositionalParams() : void {
        let type1 : any = this._functionType(new core.DartList.literal(),{
            optional : new core.DartList.literal(this.stringType,this.intType)});
        let type2 : any = this._functionType(new core.DartList.literal(),{
            optional : new core.DartList.literal(this.intType,this.numType)});
        let expected : any = this._functionType(new core.DartList.literal(),{
            optional : new core.DartList.literal(this.objectType,this.numType)});
        this._checkLeastUpperBound(type1,type2,expected);
    }
    test_functionsLubRequiredParams() : void {
        let type1 : any = this._functionType(new core.DartList.literal(this.stringType,this.intType,this.intType));
        let type2 : any = this._functionType(new core.DartList.literal(this.intType,this.doubleType,this.numType));
        let expected : any = this._functionType(new core.DartList.literal(this.objectType,this.numType,this.numType));
        this._checkLeastUpperBound(type1,type2,expected);
    }
    test_nestedNestedFunctionsLubInnermostParamTypes() : void {
        let type1 : any = this._functionType(new core.DartList.literal(this._functionType(new core.DartList.literal(this._functionType(new core.DartList.literal(this.stringType,this.intType,this.intType))))));
        let type2 : any = this._functionType(new core.DartList.literal(this._functionType(new core.DartList.literal(this._functionType(new core.DartList.literal(this.intType,this.doubleType,this.numType))))));
        let expected : any = this._functionType(new core.DartList.literal(this._functionType(new core.DartList.literal(this._functionType(new core.DartList.literal(this.objectType,this.numType,this.numType))))));
        this._checkLeastUpperBound(type1,type2,expected);
    }
    test_typeParameters_different() : void {
        let listOfIntType : any = this.listType.instantiate(new core.DartList.literal<any>(this.intType));
        let listOfDoubleType : any = this.listType.instantiate(new core.DartList.literal<any>(this.doubleType));
        this._checkLeastUpperBound(listOfIntType,listOfDoubleType,this.objectType);
    }
    test_typeParametersAndClass_different() : void {
        let listOfIntType : any = this.listType.instantiate(new core.DartList.literal<any>(this.intType));
        let iterableOfDoubleType : any = this.iterableType.instantiate(new core.DartList.literal<any>(this.doubleType));
        this._checkLeastUpperBound(listOfIntType,iterableOfDoubleType,this.objectType);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LeastUpperBoundTest() {
    }
}

export namespace StrongLeastUpperBoundTest {
    export type Constructors = LeastUpperBoundTestBase.Constructors | 'StrongLeastUpperBoundTest';
    export type Interface = Omit<StrongLeastUpperBoundTest, Constructors>;
}
@DartClass
export class StrongLeastUpperBoundTest extends LeastUpperBoundTestBase {
    setUp() : void {
        super.setUp();
        this.typeSystem = new bare.createInstance(any,null,this.typeProvider);
    }
    test_functionsFuzzyArrows() : void {
        let type1 : any = this._functionType(new core.DartList.literal(this.dynamicType));
        let type2 : any = this._functionType(new core.DartList.literal(this.intType));
        let expected : any = this._functionType(new core.DartList.literal(this.dynamicType));
        this._checkLeastUpperBound(type1,type2,expected);
    }
    test_functionsGlbNamedParams() : void {
        let type1 : any = this._functionType(new core.DartList.literal(),{
            named : new core.DartMap.literal([
                ['a',this.stringType],
                ['b',this.intType]])});
        let type2 : any = this._functionType(new core.DartList.literal(),{
            named : new core.DartMap.literal([
                ['a',this.intType],
                ['b',this.numType]])});
        let expected : any = this._functionType(new core.DartList.literal(),{
            named : new core.DartMap.literal([
                ['a',this.bottomType],
                ['b',this.intType]])});
        this._checkLeastUpperBound(type1,type2,expected);
    }
    test_functionsGlbPositionalParams() : void {
        let type1 : any = this._functionType(new core.DartList.literal(),{
            optional : new core.DartList.literal(this.stringType,this.intType)});
        let type2 : any = this._functionType(new core.DartList.literal(),{
            optional : new core.DartList.literal(this.intType,this.numType)});
        let expected : any = this._functionType(new core.DartList.literal(),{
            optional : new core.DartList.literal(this.bottomType,this.intType)});
        this._checkLeastUpperBound(type1,type2,expected);
    }
    test_functionsGlbRequiredParams() : void {
        let type1 : any = this._functionType(new core.DartList.literal(this.stringType,this.intType,this.intType));
        let type2 : any = this._functionType(new core.DartList.literal(this.intType,this.doubleType,this.numType));
        let expected : any = this._functionType(new core.DartList.literal(this.bottomType,this.bottomType,this.intType));
        this._checkLeastUpperBound(type1,type2,expected);
    }
    test_nestedNestedFunctionsGlbInnermostParamTypes() : void {
        let type1 : any = this._functionType(new core.DartList.literal(this._functionType(new core.DartList.literal(this._functionType(new core.DartList.literal(this.stringType,this.intType,this.intType))))));
        let type2 : any = this._functionType(new core.DartList.literal(this._functionType(new core.DartList.literal(this._functionType(new core.DartList.literal(this.intType,this.doubleType,this.numType))))));
        let expected : any = this._functionType(new core.DartList.literal(this._functionType(new core.DartList.literal(this._functionType(new core.DartList.literal(this.bottomType,this.bottomType,this.intType))))));
        this._checkLeastUpperBound(type1,type2,expected);
    }
    test_typeParam_boundedByParam() : void {
        let typeParamElementT : any = ElementFactory.typeParameterElement('T');
        let typeParamElementS : any = ElementFactory.typeParameterElement('S');
        let typeParamT : any = typeParamElementT.type;
        let typeParamS : any = typeParamElementS.type;
        typeParamElementT.bound = typeParamS;
        this._checkLeastUpperBound(typeParamT,typeParamS,typeParamS);
    }
    test_typeParam_fBounded() : void {
        let AClass : any = ElementFactory.classElement2('A',new core.DartList.literal("Q"));
        let AType : any = AClass.type;
        let s : any = TypeBuilder.variable("S");
        (s.element as any).bound = AType.instantiate(new core.DartList.literal(s));
        let u : any = TypeBuilder.variable("U");
        (u.element as any).bound = AType.instantiate(new core.DartList.literal(u));
        this._checkLeastUpperBound(s,u,AType.instantiate(new core.DartList.literal(this.objectType)));
    }
    test_typeParameters_different() : void {
        let listOfIntType : any = this.listType.instantiate(new core.DartList.literal<any>(this.intType));
        let listOfDoubleType : any = this.listType.instantiate(new core.DartList.literal<any>(this.doubleType));
        let listOfNum : any = this.listType.instantiate(new core.DartList.literal<any>(this.numType));
        this._checkLeastUpperBound(listOfIntType,listOfDoubleType,listOfNum);
    }
    test_typeParametersAndClass_different() : void {
        let listOfIntType : any = this.listType.instantiate(new core.DartList.literal<any>(this.intType));
        let iterableOfDoubleType : any = this.iterableType.instantiate(new core.DartList.literal<any>(this.doubleType));
        this._checkLeastUpperBound(listOfIntType,iterableOfDoubleType,this.objectType);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StrongLeastUpperBoundTest() {
    }
}

export class properties {
}
