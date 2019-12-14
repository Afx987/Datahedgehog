/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/static_type_analyzer_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./resolver_test_case";
import * as lib4 from "./test_support";
import * as collection from "@dart2ts/dart/core";
import * as lib6 from "./analysis_context_factory";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(StaticTypeAnalyzerTest);
        defineReflectiveTests(StaticTypeAnalyzer2Test);
    });
};
export namespace StaticTypeAnalyzer2Test {
    export type Constructors = lib3.StaticTypeAnalyzer2TestShared.Constructors | 'StaticTypeAnalyzer2Test';
    export type Interface = Omit<StaticTypeAnalyzer2Test, Constructors>;
}
@DartClass
export class StaticTypeAnalyzer2Test extends lib3.StaticTypeAnalyzer2TestShared {
    test_FunctionExpressionInvocation_block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {\n  var foo = (() { return 1; })();\n}\n';
            await this.resolveTestUnit(code);
            this.expectInitializerType('foo','dynamic',isNull);
        } )());
    }

    test_FunctionExpressionInvocation_curried() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'typedef int F();\nF f() => null;\nmain() {\n  var foo = f()();\n}\n';
            await this.resolveTestUnit(code);
            this.expectInitializerType('foo','int',isNull);
        } )());
    }

    test_FunctionExpressionInvocation_expression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {\n  var foo = (() => 1)();\n}\n';
            await this.resolveTestUnit(code);
            this.expectInitializerType('foo','int',isNull);
        } )());
    }

    test_MethodInvocation_nameType_localVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = "typedef Foo();\nmain() {\n  Foo foo;\n  foo();\n}\n";
            await this.resolveTestUnit(code);
            this.expectIdentifierType("foo();",new bare.createInstance(any,null));
        } )());
    }

    test_MethodInvocation_nameType_parameter_FunctionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = "typedef Foo();\nmain(Foo foo) {\n  foo();\n}\n";
            await this.resolveTestUnit(code);
            this.expectIdentifierType("foo();",new bare.createInstance(any,null));
        } )());
    }

    test_MethodInvocation_nameType_parameter_propagatedType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = "typedef Foo();\nmain(p) {\n  if (p is Foo) {\n    p();\n  }\n}\n";
            await this.resolveTestUnit(code);
            this.expectIdentifierType("p()",DynamicTypeImpl.instance,predicate((type : any) =>  {
                return op(Op.EQUALS,type.name,'Foo');
            }));
        } )());
    }

    test_staticMethods_classTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C<T> {\n  static void m() => null;\n}\nmain() {\n  print(C.m);\n}\n';
            await this.resolveTestUnit(code);
            this.expectFunctionType('m);','() → void');
        } )());
    }

    test_staticMethods_classTypeParameters_genericMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C<T> {\n  static void m<S>(S s) {\n    void f<U>(S s, U u) {}\n    print(f);\n  }\n}\nmain() {\n  print(C.m);\n}\n';
            await this.resolveTestUnit(code);
            let typeS : any;
            {
                let type : any = this.expectFunctionType('m);','<S>(S) → void',{
                    elementTypeParams : '[S]',typeFormals : '[S]',identifierType : '(dynamic) → void'});
                typeS = op(Op.INDEX,type.typeFormals,0).type;
                type = type.instantiate(new core.DartList.literal(DynamicTypeImpl.instance));
                expect(type.toString(),'(dynamic) → void');
                expect(type.typeParameters.toString(),'[S]');
                expect(type.typeArguments,new core.DartList.literal(DynamicTypeImpl.instance));
                expect(type.typeFormals,isEmpty);
            }
            {
                let type : any = this.expectFunctionType('f);','<U>(S, U) → void',{
                    elementTypeParams : '[U]',typeParams : '[S]',typeArgs : '[S]',typeFormals : '[U]',identifierType : '(S, dynamic) → void'});
                type = type.instantiate(new core.DartList.literal(DynamicTypeImpl.instance));
                expect(type.toString(),'(S, dynamic) → void');
                expect(type.typeParameters.toString(),'[S, U]');
                expect(type.typeArguments,new core.DartList.literal(typeS,DynamicTypeImpl.instance));
                expect(type.typeFormals,isEmpty);
            }
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StaticTypeAnalyzer2Test() {
    }
}

export namespace StaticTypeAnalyzerTest {
    export type Constructors = lib4.EngineTestCase.Constructors | 'StaticTypeAnalyzerTest';
    export type Interface = Omit<StaticTypeAnalyzerTest, Constructors>;
}
@DartClass
export class StaticTypeAnalyzerTest extends lib4.EngineTestCase {
    _listener : lib4.GatheringErrorListener;

    _visitor : any;

    _analyzer : any;

    _typeProvider : any;

    get _typeSystem() : any {
        return this._visitor.typeSystem;
    }
    fail_visitFunctionExpressionInvocation() : void {
        fail("Not yet tested");
        this._listener.assertNoErrors();
    }
    fail_visitMethodInvocation() : void {
        fail("Not yet tested");
        this._listener.assertNoErrors();
    }
    fail_visitSimpleIdentifier() : void {
        fail("Not yet tested");
        this._listener.assertNoErrors();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this._listener = new lib4.GatheringErrorListener();
        this._analyzer = this._createAnalyzer();
    }
    test_flatten_derived() : void {
        let derivedClass : any = ElementFactory.classElement2('Derived',new core.DartList.literal('T'));
        derivedClass.supertype = this._typeProvider.futureType.instantiate(new core.DartList.literal(op(Op.INDEX,derivedClass.typeParameters,0).type));
        let intType : any = this._typeProvider.intType;
        let dynamicType : any = this._typeProvider.dynamicType;
        let derivedIntType : any = derivedClass.type.instantiate(new core.DartList.literal(intType));
        let derivedDynamicType : any = derivedClass.type.instantiate(new core.DartList.literal(dynamicType));
        expect(this._flatten(derivedDynamicType),dynamicType);
        expect(this._flatten(derivedIntType),intType);
        expect(this._flatten(derivedClass.type.instantiate(new core.DartList.literal(derivedDynamicType))),derivedDynamicType);
        expect(this._flatten(derivedClass.type.instantiate(new core.DartList.literal(derivedIntType))),derivedIntType);
    }
    test_flatten_inhibit_recursion() : void {
        let classA : any = ElementFactory.classElement2('A',new core.DartList.literal());
        let classB : any = ElementFactory.classElement2('B',new core.DartList.literal());
        classA.supertype = classB.type;
        classB.supertype = classA.type;
        expect(this._flatten(classA.type),classA.type);
        expect(this._flatten(classB.type),classB.type);
    }
    test_flatten_related_derived_types() : void {
        let intType : any = this._typeProvider.intType;
        let numType : any = this._typeProvider.numType;
        let derivedClass : any = ElementFactory.classElement2('Derived',new core.DartList.literal('T'));
        derivedClass.supertype = this._typeProvider.futureType.instantiate(new core.DartList.literal(op(Op.INDEX,derivedClass.typeParameters,0).type));
        let derivedType : any = derivedClass.type;
        let classA : any = ElementFactory.classElement('A',derivedType.instantiate(new core.DartList.literal(intType)));
        classA.interfaces = new core.DartList.literal<any>(derivedType.instantiate(new core.DartList.literal(numType)));
        let classB : any = ElementFactory.classElement('B',derivedType.instantiate(new core.DartList.literal(numType)));
        classB.interfaces = new core.DartList.literal<any>(derivedType.instantiate(new core.DartList.literal(intType)));
        expect(this._flatten(classA.type),intType);
        expect(this._flatten(classB.type),intType);
    }
    test_flatten_related_types() : void {
        let futureType : any = this._typeProvider.futureType;
        let intType : any = this._typeProvider.intType;
        let numType : any = this._typeProvider.numType;
        let classA : any = ElementFactory.classElement('A',futureType.instantiate(new core.DartList.literal(intType)));
        classA.interfaces = new core.DartList.literal<any>(futureType.instantiate(new core.DartList.literal(numType)));
        let classB : any = ElementFactory.classElement('B',futureType.instantiate(new core.DartList.literal(numType)));
        classB.interfaces = new core.DartList.literal<any>(futureType.instantiate(new core.DartList.literal(intType)));
        expect(this._flatten(classA.type),intType);
        expect(this._flatten(classB.type),intType);
    }
    test_flatten_simple() : void {
        let intType : any = this._typeProvider.intType;
        let dynamicType : any = this._typeProvider.dynamicType;
        let futureDynamicType : any = this._typeProvider.futureDynamicType;
        let futureIntType : any = this._typeProvider.futureType.instantiate(new core.DartList.literal(intType));
        let futureFutureDynamicType : any = this._typeProvider.futureType.instantiate(new core.DartList.literal(futureDynamicType));
        let futureFutureIntType : any = this._typeProvider.futureType.instantiate(new core.DartList.literal(futureIntType));
        expect(this._flatten(intType),intType);
        expect(this._flatten(dynamicType),dynamicType);
        expect(this._flatten(futureDynamicType),dynamicType);
        expect(this._flatten(futureIntType),intType);
        expect(this._flatten(futureFutureDynamicType),dynamicType);
        expect(this._flatten(futureFutureIntType),intType);
    }
    test_flatten_unrelated_types() : void {
        let futureType : any = this._typeProvider.futureType;
        let intType : any = this._typeProvider.intType;
        let stringType : any = this._typeProvider.stringType;
        let classA : any = ElementFactory.classElement('A',futureType.instantiate(new core.DartList.literal(intType)));
        classA.interfaces = new core.DartList.literal<any>(futureType.instantiate(new core.DartList.literal(stringType)));
        let classB : any = ElementFactory.classElement('B',futureType.instantiate(new core.DartList.literal(stringType)));
        classB.interfaces = new core.DartList.literal<any>(futureType.instantiate(new core.DartList.literal(intType)));
        expect(this._flatten(classA.type),classA.type);
        expect(this._flatten(classB.type),classB.type);
    }
    test_visitAdjacentStrings() : void {
        let node : any = AstTestFactory.adjacentStrings(new core.DartList.literal(this._resolvedString("a"),this._resolvedString("b")));
        expect(this._analyze(node),same(this._typeProvider.stringType));
        this._listener.assertNoErrors();
    }
    test_visitAsExpression() : void {
        let superclass : any = ElementFactory.classElement2("A");
        let superclassType : any = superclass.type;
        let subclass : any = ElementFactory.classElement("B",superclassType);
        let node : any = AstTestFactory.asExpression(AstTestFactory.thisExpression(),AstTestFactory.typeName(subclass));
        expect(this._analyze3(node,superclassType),same(subclass.type));
        this._listener.assertNoErrors();
    }
    test_visitAssignmentExpression_compound_II() : void {
        var validate : (operator : any) => any = (operator : any) =>  {
            let numType : any = this._typeProvider.numType;
            let intType : any = this._typeProvider.intType;
            let identifier : any = this._resolvedVariable(intType,"i");
            let node : any = AstTestFactory.assignmentExpression(identifier,operator,this._resolvedInteger(1));
            let plusMethod : any = this.getMethod(numType,"+");
            node.staticElement = plusMethod;
            expect(this._analyze(node),same(intType));
            this._listener.assertNoErrors();
        };
        validate(TokenType.MINUS_EQ);
        validate(TokenType.PERCENT_EQ);
        validate(TokenType.PLUS_EQ);
        validate(TokenType.STAR_EQ);
        validate(TokenType.TILDE_SLASH_EQ);
    }
    test_visitAssignmentExpression_compound_lazy() : void {
        var validate : (operator : any) => any = (operator : any) =>  {
            let boolType : any = this._typeProvider.boolType;
            let identifier : any = this._resolvedVariable(boolType,"b");
            let node : any = AstTestFactory.assignmentExpression(identifier,operator,this._resolvedBool(true));
            expect(this._analyze(node),same(boolType));
            this._listener.assertNoErrors();
        };
        validate(TokenType.AMPERSAND_AMPERSAND_EQ);
        validate(TokenType.BAR_BAR_EQ);
    }
    test_visitAssignmentExpression_compound_plusID() : void {
        var validate : (operator : any) => any = (operator : any) =>  {
            let numType : any = this._typeProvider.numType;
            let intType : any = this._typeProvider.intType;
            let doubleType : any = this._typeProvider.doubleType;
            let identifier : any = this._resolvedVariable(intType,"i");
            let node : any = AstTestFactory.assignmentExpression(identifier,operator,this._resolvedDouble(1.0));
            let plusMethod : any = this.getMethod(numType,"+");
            node.staticElement = plusMethod;
            expect(this._analyze(node),same(doubleType));
            this._listener.assertNoErrors();
        };
        validate(TokenType.MINUS_EQ);
        validate(TokenType.PERCENT_EQ);
        validate(TokenType.PLUS_EQ);
        validate(TokenType.STAR_EQ);
    }
    test_visitAssignmentExpression_compoundIfNull_differentTypes() : void {
        let node : any = AstTestFactory.assignmentExpression(this._resolvedVariable(this._typeProvider.doubleType,'d'),TokenType.QUESTION_QUESTION_EQ,this._resolvedInteger(0));
        expect(this._analyze(node),same(this._typeProvider.numType));
        this._listener.assertNoErrors();
    }
    test_visitAssignmentExpression_compoundIfNull_sameTypes() : void {
        let node : any = AstTestFactory.assignmentExpression(this._resolvedVariable(this._typeProvider.intType,'i'),TokenType.QUESTION_QUESTION_EQ,this._resolvedInteger(0));
        expect(this._analyze(node),same(this._typeProvider.intType));
        this._listener.assertNoErrors();
    }
    test_visitAssignmentExpression_simple() : void {
        let intType : any = this._typeProvider.intType;
        let node : any = AstTestFactory.assignmentExpression(this._resolvedVariable(intType,"i"),TokenType.EQ,this._resolvedInteger(0));
        expect(this._analyze(node),same(intType));
        this._listener.assertNoErrors();
    }
    test_visitAwaitExpression_flattened() : void {
        let intType : any = this._typeProvider.intType;
        let futureIntType : any = this._typeProvider.futureType.instantiate(new core.DartList.literal<any>(intType));
        let futureFutureIntType : any = this._typeProvider.futureType.instantiate(new core.DartList.literal<any>(futureIntType));
        let node : any = AstTestFactory.awaitExpression(this._resolvedVariable(futureFutureIntType,'e'));
        expect(this._analyze(node),same(intType));
        this._listener.assertNoErrors();
    }
    test_visitAwaitExpression_simple() : void {
        let intType : any = this._typeProvider.intType;
        let futureIntType : any = this._typeProvider.futureType.instantiate(new core.DartList.literal<any>(intType));
        let node : any = AstTestFactory.awaitExpression(this._resolvedVariable(futureIntType,'e'));
        expect(this._analyze(node),same(intType));
        this._listener.assertNoErrors();
    }
    test_visitBinaryExpression_equals() : void {
        let node : any = AstTestFactory.binaryExpression(this._resolvedInteger(2),TokenType.EQ_EQ,this._resolvedInteger(3));
        expect(this._analyze(node),same(this._typeProvider.boolType));
        this._listener.assertNoErrors();
    }
    test_visitBinaryExpression_ifNull() : void {
        let node : any = AstTestFactory.binaryExpression(this._resolvedInteger(1),TokenType.QUESTION_QUESTION,this._resolvedDouble(1.5));
        expect(this._analyze(node),same(this._typeProvider.numType));
        this._listener.assertNoErrors();
    }
    test_visitBinaryExpression_logicalAnd() : void {
        let node : any = AstTestFactory.binaryExpression(AstTestFactory.booleanLiteral(false),TokenType.AMPERSAND_AMPERSAND,AstTestFactory.booleanLiteral(true));
        expect(this._analyze(node),same(this._typeProvider.boolType));
        this._listener.assertNoErrors();
    }
    test_visitBinaryExpression_logicalOr() : void {
        let node : any = AstTestFactory.binaryExpression(AstTestFactory.booleanLiteral(false),TokenType.BAR_BAR,AstTestFactory.booleanLiteral(true));
        expect(this._analyze(node),same(this._typeProvider.boolType));
        this._listener.assertNoErrors();
    }
    test_visitBinaryExpression_minusID_propagated() : void {
        let node : any = AstTestFactory.binaryExpression(this._propagatedVariable(this._typeProvider.intType,'a'),TokenType.MINUS,this._propagatedVariable(this._typeProvider.doubleType,'b'));
        node.propagatedElement = this.getMethod(this._typeProvider.numType,"+");
        this._analyze(node);
        expect(node.propagatedType,same(this._typeProvider.doubleType));
        this._listener.assertNoErrors();
    }
    test_visitBinaryExpression_notEquals() : void {
        let node : any = AstTestFactory.binaryExpression(this._resolvedInteger(2),TokenType.BANG_EQ,this._resolvedInteger(3));
        expect(this._analyze(node),same(this._typeProvider.boolType));
        this._listener.assertNoErrors();
    }
    test_visitBinaryExpression_plusID() : void {
        let node : any = AstTestFactory.binaryExpression(this._resolvedInteger(1),TokenType.PLUS,this._resolvedDouble(2.0));
        node.staticElement = this.getMethod(this._typeProvider.numType,"+");
        expect(this._analyze(node),same(this._typeProvider.doubleType));
        this._listener.assertNoErrors();
    }
    test_visitBinaryExpression_plusII() : void {
        let node : any = AstTestFactory.binaryExpression(this._resolvedInteger(1),TokenType.PLUS,this._resolvedInteger(2));
        node.staticElement = this.getMethod(this._typeProvider.numType,"+");
        expect(this._analyze(node),same(this._typeProvider.intType));
        this._listener.assertNoErrors();
    }
    test_visitBinaryExpression_plusII_propagated() : void {
        let node : any = AstTestFactory.binaryExpression(this._propagatedVariable(this._typeProvider.intType,'a'),TokenType.PLUS,this._propagatedVariable(this._typeProvider.intType,'b'));
        node.propagatedElement = this.getMethod(this._typeProvider.numType,"+");
        this._analyze(node);
        expect(node.propagatedType,same(this._typeProvider.intType));
        this._listener.assertNoErrors();
    }
    test_visitBinaryExpression_slash() : void {
        let node : any = AstTestFactory.binaryExpression(this._resolvedInteger(2),TokenType.SLASH,this._resolvedInteger(2));
        node.staticElement = this.getMethod(this._typeProvider.numType,"/");
        expect(this._analyze(node),same(this._typeProvider.doubleType));
        this._listener.assertNoErrors();
    }
    test_visitBinaryExpression_star_notSpecial() : void {
        let classA : any = ElementFactory.classElement2("A");
        let typeA : any = classA.type;
        let operator : any = ElementFactory.methodElement("*",typeA,new core.DartList.literal(this._typeProvider.doubleType));
        classA.methods = new core.DartList.literal<any>(operator);
        let node : any = AstTestFactory.binaryExpression(AstTestFactory.asExpression(AstTestFactory.identifier3("a"),AstTestFactory.typeName(classA)),TokenType.PLUS,this._resolvedDouble(2.0));
        node.staticElement = operator;
        expect(this._analyze(node),same(typeA));
        this._listener.assertNoErrors();
    }
    test_visitBinaryExpression_starID() : void {
        let node : any = AstTestFactory.binaryExpression(this._resolvedInteger(1),TokenType.PLUS,this._resolvedDouble(2.0));
        node.staticElement = this.getMethod(this._typeProvider.numType,"*");
        expect(this._analyze(node),same(this._typeProvider.doubleType));
        this._listener.assertNoErrors();
    }
    test_visitBooleanLiteral_false() : void {
        let node : any = AstTestFactory.booleanLiteral(false);
        expect(this._analyze(node),same(this._typeProvider.boolType));
        this._listener.assertNoErrors();
    }
    test_visitBooleanLiteral_true() : void {
        let node : any = AstTestFactory.booleanLiteral(true);
        expect(this._analyze(node),same(this._typeProvider.boolType));
        this._listener.assertNoErrors();
    }
    test_visitCascadeExpression() : void {
        let node : any = AstTestFactory.cascadeExpression(this._resolvedString("a"),new core.DartList.literal(AstTestFactory.propertyAccess2(null,"length")));
        expect(this._analyze(node),same(this._typeProvider.stringType));
        this._listener.assertNoErrors();
    }
    test_visitConditionalExpression_differentTypes() : void {
        let node : any = AstTestFactory.conditionalExpression(AstTestFactory.booleanLiteral(true),this._resolvedDouble(1.0),this._resolvedInteger(0));
        expect(this._analyze(node),same(this._typeProvider.numType));
        this._listener.assertNoErrors();
    }
    test_visitConditionalExpression_sameTypes() : void {
        let node : any = AstTestFactory.conditionalExpression(AstTestFactory.booleanLiteral(true),this._resolvedInteger(1),this._resolvedInteger(0));
        expect(this._analyze(node),same(this._typeProvider.intType));
        this._listener.assertNoErrors();
    }
    test_visitDoubleLiteral() : void {
        let node : any = AstTestFactory.doubleLiteral(4.33);
        expect(this._analyze(node),same(this._typeProvider.doubleType));
        this._listener.assertNoErrors();
    }
    test_visitFunctionExpression_async_block() : void {
        let body : any = AstTestFactory.blockFunctionBody2();
        body.keyword = TokenFactory.tokenFromString('async');
        let node : any = this._resolvedFunctionExpression(AstTestFactory.formalParameterList(new core.DartList.literal()),body);
        let resultType : any = this._analyze(node);
        this._assertFunctionType(this._typeProvider.futureDynamicType,null,null,null,resultType);
        this._listener.assertNoErrors();
    }
    test_visitFunctionExpression_async_expression() : void {
        let intType : any = this._typeProvider.intType;
        let futureIntType : any = this._typeProvider.futureType.instantiate(new core.DartList.literal<any>(intType));
        let expression : any = this._resolvedVariable(intType,'e');
        let body : any = AstTestFactory.expressionFunctionBody(expression);
        body.keyword = TokenFactory.tokenFromString('async');
        let node : any = this._resolvedFunctionExpression(AstTestFactory.formalParameterList(new core.DartList.literal()),body);
        let resultType : any = this._analyze(node);
        this._assertFunctionType(futureIntType,null,null,null,resultType);
        this._listener.assertNoErrors();
    }
    test_visitFunctionExpression_async_expression_flatten() : void {
        let intType : any = this._typeProvider.intType;
        let futureIntType : any = this._typeProvider.futureType.instantiate(new core.DartList.literal<any>(intType));
        let expression : any = this._resolvedVariable(futureIntType,'e');
        let body : any = AstTestFactory.expressionFunctionBody(expression);
        body.keyword = TokenFactory.tokenFromString('async');
        let node : any = this._resolvedFunctionExpression(AstTestFactory.formalParameterList(new core.DartList.literal()),body);
        let resultType : any = this._analyze(node);
        this._assertFunctionType(futureIntType,null,null,null,resultType);
        this._listener.assertNoErrors();
    }
    test_visitFunctionExpression_async_expression_flatten_twice() : void {
        let intType : any = this._typeProvider.intType;
        let futureIntType : any = this._typeProvider.futureType.instantiate(new core.DartList.literal<any>(intType));
        let futureFutureIntType : any = this._typeProvider.futureType.instantiate(new core.DartList.literal<any>(futureIntType));
        let expression : any = this._resolvedVariable(futureFutureIntType,'e');
        let body : any = AstTestFactory.expressionFunctionBody(expression);
        body.keyword = TokenFactory.tokenFromString('async');
        let node : any = this._resolvedFunctionExpression(AstTestFactory.formalParameterList(new core.DartList.literal()),body);
        let resultType : any = this._analyze(node);
        this._assertFunctionType(futureIntType,null,null,null,resultType);
        this._listener.assertNoErrors();
    }
    test_visitFunctionExpression_generator_async() : void {
        let body : any = AstTestFactory.blockFunctionBody2();
        body.keyword = TokenFactory.tokenFromString('async');
        body.star = TokenFactory.tokenFromType(TokenType.STAR);
        let node : any = this._resolvedFunctionExpression(AstTestFactory.formalParameterList(new core.DartList.literal()),body);
        let resultType : any = this._analyze(node);
        this._assertFunctionType(this._typeProvider.streamDynamicType,null,null,null,resultType);
        this._listener.assertNoErrors();
    }
    test_visitFunctionExpression_generator_sync() : void {
        let body : any = AstTestFactory.blockFunctionBody2();
        body.keyword = TokenFactory.tokenFromString('sync');
        body.star = TokenFactory.tokenFromType(TokenType.STAR);
        let node : any = this._resolvedFunctionExpression(AstTestFactory.formalParameterList(new core.DartList.literal()),body);
        let resultType : any = this._analyze(node);
        this._assertFunctionType(this._typeProvider.iterableDynamicType,null,null,null,resultType);
        this._listener.assertNoErrors();
    }
    test_visitFunctionExpression_named_block() : void {
        let dynamicType : any = this._typeProvider.dynamicType;
        let p1 : any = AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("p1"),this._resolvedInteger(0));
        this._setType(p1,dynamicType);
        let p2 : any = AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("p2"),this._resolvedInteger(0));
        this._setType(p2,dynamicType);
        let node : any = this._resolvedFunctionExpression(AstTestFactory.formalParameterList(new core.DartList.literal(p1,p2)),AstTestFactory.blockFunctionBody2());
        this._analyze5(p1);
        this._analyze5(p2);
        let resultType : any = this._analyze(node);
        let expectedNamedTypes : core.DartMap<string,any> = new core.DartHashMap<string,any>();
        op(Op.INDEX_ASSIGN,expectedNamedTypes,"p1",dynamicType);
        op(Op.INDEX_ASSIGN,expectedNamedTypes,"p2",dynamicType);
        this._assertFunctionType(dynamicType,null,null,expectedNamedTypes,resultType);
        this._listener.assertNoErrors();
    }
    test_visitFunctionExpression_named_expression() : void {
        let dynamicType : any = this._typeProvider.dynamicType;
        let p : any = AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("p"),this._resolvedInteger(0));
        this._setType(p,dynamicType);
        let node : any = this._resolvedFunctionExpression(AstTestFactory.formalParameterList(new core.DartList.literal(p)),AstTestFactory.expressionFunctionBody(this._resolvedInteger(0)));
        this._analyze5(p);
        let resultType : any = this._analyze(node);
        let expectedNamedTypes : core.DartMap<string,any> = new core.DartHashMap<string,any>();
        op(Op.INDEX_ASSIGN,expectedNamedTypes,"p",dynamicType);
        this._assertFunctionType(this._typeProvider.intType,null,null,expectedNamedTypes,resultType);
        this._listener.assertNoErrors();
    }
    test_visitFunctionExpression_normal_block() : void {
        let dynamicType : any = this._typeProvider.dynamicType;
        let p1 : any = AstTestFactory.simpleFormalParameter3("p1");
        this._setType(p1,dynamicType);
        let p2 : any = AstTestFactory.simpleFormalParameter3("p2");
        this._setType(p2,dynamicType);
        let node : any = this._resolvedFunctionExpression(AstTestFactory.formalParameterList(new core.DartList.literal(p1,p2)),AstTestFactory.blockFunctionBody2());
        this._analyze5(p1);
        this._analyze5(p2);
        let resultType : any = this._analyze(node);
        this._assertFunctionType(dynamicType,new core.DartList.literal<any>(dynamicType,dynamicType),null,null,resultType);
        this._listener.assertNoErrors();
    }
    test_visitFunctionExpression_normal_expression() : void {
        let dynamicType : any = this._typeProvider.dynamicType;
        let p : any = AstTestFactory.simpleFormalParameter3("p");
        this._setType(p,dynamicType);
        let node : any = this._resolvedFunctionExpression(AstTestFactory.formalParameterList(new core.DartList.literal(p)),AstTestFactory.expressionFunctionBody(this._resolvedInteger(0)));
        this._analyze5(p);
        let resultType : any = this._analyze(node);
        this._assertFunctionType(this._typeProvider.intType,new core.DartList.literal<any>(dynamicType),null,null,resultType);
        this._listener.assertNoErrors();
    }
    test_visitFunctionExpression_normalAndNamed_block() : void {
        let dynamicType : any = this._typeProvider.dynamicType;
        let p1 : any = AstTestFactory.simpleFormalParameter3("p1");
        this._setType(p1,dynamicType);
        let p2 : any = AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("p2"),this._resolvedInteger(0));
        this._setType(p2,dynamicType);
        let node : any = this._resolvedFunctionExpression(AstTestFactory.formalParameterList(new core.DartList.literal(p1,p2)),AstTestFactory.blockFunctionBody2());
        this._analyze5(p2);
        let resultType : any = this._analyze(node);
        let expectedNamedTypes : core.DartMap<string,any> = new core.DartHashMap<string,any>();
        op(Op.INDEX_ASSIGN,expectedNamedTypes,"p2",dynamicType);
        this._assertFunctionType(dynamicType,new core.DartList.literal<any>(dynamicType),null,expectedNamedTypes,resultType);
        this._listener.assertNoErrors();
    }
    test_visitFunctionExpression_normalAndNamed_expression() : void {
        let dynamicType : any = this._typeProvider.dynamicType;
        let p1 : any = AstTestFactory.simpleFormalParameter3("p1");
        this._setType(p1,dynamicType);
        let p2 : any = AstTestFactory.namedFormalParameter(AstTestFactory.simpleFormalParameter3("p2"),this._resolvedInteger(0));
        this._setType(p2,dynamicType);
        let node : any = this._resolvedFunctionExpression(AstTestFactory.formalParameterList(new core.DartList.literal(p1,p2)),AstTestFactory.expressionFunctionBody(this._resolvedInteger(0)));
        this._analyze5(p2);
        let resultType : any = this._analyze(node);
        let expectedNamedTypes : core.DartMap<string,any> = new core.DartHashMap<string,any>();
        op(Op.INDEX_ASSIGN,expectedNamedTypes,"p2",dynamicType);
        this._assertFunctionType(this._typeProvider.intType,new core.DartList.literal<any>(dynamicType),null,expectedNamedTypes,resultType);
        this._listener.assertNoErrors();
    }
    test_visitFunctionExpression_normalAndPositional_block() : void {
        let dynamicType : any = this._typeProvider.dynamicType;
        let p1 : any = AstTestFactory.simpleFormalParameter3("p1");
        this._setType(p1,dynamicType);
        let p2 : any = AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("p2"),this._resolvedInteger(0));
        this._setType(p2,dynamicType);
        let node : any = this._resolvedFunctionExpression(AstTestFactory.formalParameterList(new core.DartList.literal(p1,p2)),AstTestFactory.blockFunctionBody2());
        this._analyze5(p1);
        this._analyze5(p2);
        let resultType : any = this._analyze(node);
        this._assertFunctionType(dynamicType,new core.DartList.literal<any>(dynamicType),new core.DartList.literal<any>(dynamicType),null,resultType);
        this._listener.assertNoErrors();
    }
    test_visitFunctionExpression_normalAndPositional_expression() : void {
        let dynamicType : any = this._typeProvider.dynamicType;
        let p1 : any = AstTestFactory.simpleFormalParameter3("p1");
        this._setType(p1,dynamicType);
        let p2 : any = AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("p2"),this._resolvedInteger(0));
        this._setType(p2,dynamicType);
        let node : any = this._resolvedFunctionExpression(AstTestFactory.formalParameterList(new core.DartList.literal(p1,p2)),AstTestFactory.expressionFunctionBody(this._resolvedInteger(0)));
        this._analyze5(p1);
        this._analyze5(p2);
        let resultType : any = this._analyze(node);
        this._assertFunctionType(this._typeProvider.intType,new core.DartList.literal<any>(dynamicType),new core.DartList.literal<any>(dynamicType),null,resultType);
        this._listener.assertNoErrors();
    }
    test_visitFunctionExpression_positional_block() : void {
        let dynamicType : any = this._typeProvider.dynamicType;
        let p1 : any = AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("p1"),this._resolvedInteger(0));
        this._setType(p1,dynamicType);
        let p2 : any = AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("p2"),this._resolvedInteger(0));
        this._setType(p2,dynamicType);
        let node : any = this._resolvedFunctionExpression(AstTestFactory.formalParameterList(new core.DartList.literal(p1,p2)),AstTestFactory.blockFunctionBody2());
        this._analyze5(p1);
        this._analyze5(p2);
        let resultType : any = this._analyze(node);
        this._assertFunctionType(dynamicType,null,new core.DartList.literal<any>(dynamicType,dynamicType),null,resultType);
        this._listener.assertNoErrors();
    }
    test_visitFunctionExpression_positional_expression() : void {
        let dynamicType : any = this._typeProvider.dynamicType;
        let p : any = AstTestFactory.positionalFormalParameter(AstTestFactory.simpleFormalParameter3("p"),this._resolvedInteger(0));
        this._setType(p,dynamicType);
        let node : any = this._resolvedFunctionExpression(AstTestFactory.formalParameterList(new core.DartList.literal(p)),AstTestFactory.expressionFunctionBody(this._resolvedInteger(0)));
        this._analyze5(p);
        let resultType : any = this._analyze(node);
        this._assertFunctionType(this._typeProvider.intType,null,new core.DartList.literal<any>(dynamicType),null,resultType);
        this._listener.assertNoErrors();
    }
    test_visitIndexExpression_getter() : void {
        let listType : any = this._typeProvider.listType;
        let identifier : any = this._resolvedVariable(listType,"a");
        let node : any = AstTestFactory.indexExpression(identifier,this._resolvedInteger(2));
        let indexMethod : any = op(Op.INDEX,listType.element.methods,0);
        node.staticElement = indexMethod;
        expect(this._analyze(node),same(op(Op.INDEX,listType.typeArguments,0)));
        this._listener.assertNoErrors();
    }
    test_visitIndexExpression_setter() : void {
        let listType : any = this._typeProvider.listType;
        let identifier : any = this._resolvedVariable(listType,"a");
        let node : any = AstTestFactory.indexExpression(identifier,this._resolvedInteger(2));
        let indexMethod : any = op(Op.INDEX,listType.element.methods,1);
        node.staticElement = indexMethod;
        AstTestFactory.assignmentExpression(node,TokenType.EQ,AstTestFactory.integer(0));
        expect(this._analyze(node),same(op(Op.INDEX,listType.typeArguments,0)));
        this._listener.assertNoErrors();
    }
    test_visitIndexExpression_typeParameters() : void {
        let intType : any = this._typeProvider.intType;
        let listType : any = this._typeProvider.listType;
        let methodElement : any = this.getMethod(listType,"[]");
        let identifier : any = AstTestFactory.identifier3("list");
        let listOfIntType : any = listType.instantiate(new core.DartList.literal<any>(intType));
        identifier.staticType = listOfIntType;
        let indexExpression : any = AstTestFactory.indexExpression(identifier,AstTestFactory.integer(0));
        let indexMethod : any = MethodMember.from(methodElement,listOfIntType);
        indexExpression.staticElement = indexMethod;
        expect(this._analyze(indexExpression),same(intType));
        this._listener.assertNoErrors();
    }
    test_visitIndexExpression_typeParameters_inSetterContext() : void {
        let intType : any = this._typeProvider.intType;
        let listType : any = this._typeProvider.listType;
        let methodElement : any = this.getMethod(listType,"[]=");
        let identifier : any = AstTestFactory.identifier3("list");
        let listOfIntType : any = listType.instantiate(new core.DartList.literal<any>(intType));
        identifier.staticType = listOfIntType;
        let indexExpression : any = AstTestFactory.indexExpression(identifier,AstTestFactory.integer(0));
        let indexMethod : any = MethodMember.from(methodElement,listOfIntType);
        indexExpression.staticElement = indexMethod;
        AstTestFactory.assignmentExpression(indexExpression,TokenType.EQ,AstTestFactory.integer(0));
        expect(this._analyze(indexExpression),same(intType));
        this._listener.assertNoErrors();
    }
    test_visitInstanceCreationExpression_named() : void {
        let classElement : any = ElementFactory.classElement2("C");
        let constructorName : string = "m";
        let constructor : any = ElementFactory.constructorElement2(classElement,constructorName);
        classElement.constructors = new core.DartList.literal<any>(constructor);
        let node : any = AstTestFactory.instanceCreationExpression2(null,AstTestFactory.typeName(classElement),new core.DartList.literal(AstTestFactory.identifier3(constructorName)));
        node.staticElement = constructor;
        expect(this._analyze(node),same(classElement.type));
        this._listener.assertNoErrors();
    }
    test_visitInstanceCreationExpression_typeParameters() : void {
        let elementC : any = ElementFactory.classElement2("C",new core.DartList.literal("E"));
        let elementI : any = ElementFactory.classElement2("I");
        let constructor : any = ElementFactory.constructorElement2(elementC,null);
        elementC.constructors = new core.DartList.literal<any>(constructor);
        let typeName : any = AstTestFactory.typeName(elementC,new core.DartList.literal(AstTestFactory.typeName(elementI)));
        typeName.type = elementC.type.instantiate(new core.DartList.literal<any>(elementI.type));
        let node : any = AstTestFactory.instanceCreationExpression2(null,typeName);
        node.staticElement = constructor;
        let interfaceType : any = this._analyze(node) as any;
        let typeArgs : core.DartList<any> = interfaceType.typeArguments;
        expect(typeArgs.length,1);
        expect(typeArgs[0],elementI.type);
        this._listener.assertNoErrors();
    }
    test_visitInstanceCreationExpression_unnamed() : void {
        let classElement : any = ElementFactory.classElement2("C");
        let constructor : any = ElementFactory.constructorElement2(classElement,null);
        classElement.constructors = new core.DartList.literal<any>(constructor);
        let node : any = AstTestFactory.instanceCreationExpression2(null,AstTestFactory.typeName(classElement));
        node.staticElement = constructor;
        expect(this._analyze(node),same(classElement.type));
        this._listener.assertNoErrors();
    }
    test_visitIntegerLiteral() : void {
        let node : any = this._resolvedInteger(42);
        expect(this._analyze(node),same(this._typeProvider.intType));
        this._listener.assertNoErrors();
    }
    test_visitIsExpression_negated() : void {
        let node : any = AstTestFactory.isExpression(this._resolvedString("a"),true,AstTestFactory.typeName4("String"));
        expect(this._analyze(node),same(this._typeProvider.boolType));
        this._listener.assertNoErrors();
    }
    test_visitIsExpression_notNegated() : void {
        let node : any = AstTestFactory.isExpression(this._resolvedString("a"),false,AstTestFactory.typeName4("String"));
        expect(this._analyze(node),same(this._typeProvider.boolType));
        this._listener.assertNoErrors();
    }
    test_visitListLiteral_empty() : void {
        let node : any = AstTestFactory.listLiteral();
        let resultType : any = this._analyze(node);
        this._assertType2(this._typeProvider.listType.instantiate(new core.DartList.literal<any>(this._typeProvider.dynamicType)),resultType);
        this._listener.assertNoErrors();
    }
    test_visitListLiteral_nonEmpty() : void {
        let node : any = AstTestFactory.listLiteral(new core.DartList.literal(this._resolvedInteger(0)));
        let resultType : any = this._analyze(node);
        this._assertType2(this._typeProvider.listType.instantiate(new core.DartList.literal<any>(this._typeProvider.dynamicType)),resultType);
        this._listener.assertNoErrors();
    }
    test_visitListLiteral_unresolved() : void {
        this._analyzer = this._createAnalyzer({
            strongMode : true});
        let identifier : any = AstTestFactory.identifier3('a');
        let node : any = AstTestFactory.listLiteral(new core.DartList.literal(identifier));
        let resultType : any = this._analyze(node);
        this._assertType2(this._typeProvider.listType.instantiate(new core.DartList.literal<any>(this._typeProvider.dynamicType)),resultType);
        this._listener.assertNoErrors();
    }
    test_visitListLiteral_unresolved_multiple() : void {
        this._analyzer = this._createAnalyzer({
            strongMode : true});
        let identifier : any = AstTestFactory.identifier3('a');
        let node : any = AstTestFactory.listLiteral(new core.DartList.literal(this._resolvedInteger(0),identifier,this._resolvedInteger(1)));
        let resultType : any = this._analyze(node);
        this._assertType2(this._typeProvider.listType.instantiate(new core.DartList.literal<any>(this._typeProvider.intType)),resultType);
        this._listener.assertNoErrors();
    }
    test_visitMapLiteral_empty() : void {
        let node : any = AstTestFactory.mapLiteral2();
        let resultType : any = this._analyze(node);
        this._assertType2(this._typeProvider.mapType.instantiate(new core.DartList.literal<any>(this._typeProvider.dynamicType,this._typeProvider.dynamicType)),resultType);
        this._listener.assertNoErrors();
    }
    test_visitMapLiteral_nonEmpty() : void {
        let node : any = AstTestFactory.mapLiteral2(new core.DartList.literal(AstTestFactory.mapLiteralEntry("k",this._resolvedInteger(0))));
        let resultType : any = this._analyze(node);
        this._assertType2(this._typeProvider.mapType.instantiate(new core.DartList.literal<any>(this._typeProvider.dynamicType,this._typeProvider.dynamicType)),resultType);
        this._listener.assertNoErrors();
    }
    test_visitMethodInvocation_then() : void {
        let node : any = AstTestFactory.methodInvocation(null,"then");
        this._analyze(node);
        this._listener.assertNoErrors();
    }
    test_visitNamedExpression() : void {
        let node : any = AstTestFactory.namedExpression2("n",this._resolvedString("a"));
        expect(this._analyze(node),same(this._typeProvider.stringType));
        this._listener.assertNoErrors();
    }
    test_visitNullLiteral() : void {
        let node : any = AstTestFactory.nullLiteral();
        expect(this._analyze(node),same(this._typeProvider.nullType));
        this._listener.assertNoErrors();
    }
    test_visitParenthesizedExpression() : void {
        let node : any = AstTestFactory.parenthesizedExpression(this._resolvedInteger(0));
        expect(this._analyze(node),same(this._typeProvider.intType));
        this._listener.assertNoErrors();
    }
    test_visitPostfixExpression_minusMinus() : void {
        let node : any = AstTestFactory.postfixExpression(this._resolvedInteger(0),TokenType.MINUS_MINUS);
        expect(this._analyze(node),same(this._typeProvider.intType));
        this._listener.assertNoErrors();
    }
    test_visitPostfixExpression_plusPlus() : void {
        let node : any = AstTestFactory.postfixExpression(this._resolvedInteger(0),TokenType.PLUS_PLUS);
        expect(this._analyze(node),same(this._typeProvider.intType));
        this._listener.assertNoErrors();
    }
    test_visitPrefixedIdentifier_getter() : void {
        let boolType : any = this._typeProvider.boolType;
        let getter : any = ElementFactory.getterElement("b",false,boolType);
        let node : any = AstTestFactory.identifier5("a","b");
        node.identifier.staticElement = getter;
        expect(this._analyze(node),same(boolType));
        this._listener.assertNoErrors();
    }
    test_visitPrefixedIdentifier_setter() : void {
        let boolType : any = this._typeProvider.boolType;
        let field : any = ElementFactory.fieldElement("b",false,false,false,boolType);
        let setter : any = field.setter;
        let node : any = AstTestFactory.identifier5("a","b");
        node.identifier.staticElement = setter;
        expect(this._analyze(node),same(boolType));
        this._listener.assertNoErrors();
    }
    test_visitPrefixedIdentifier_variable() : void {
        let variable : any = ElementFactory.localVariableElement2("b");
        variable.type = this._typeProvider.boolType;
        let node : any = AstTestFactory.identifier5("a","b");
        node.identifier.staticElement = variable;
        expect(this._analyze(node),same(this._typeProvider.boolType));
        this._listener.assertNoErrors();
    }
    test_visitPrefixExpression_bang() : void {
        let node : any = AstTestFactory.prefixExpression(TokenType.BANG,this._resolvedInteger(0));
        expect(this._analyze(node),same(this._typeProvider.boolType));
        this._listener.assertNoErrors();
    }
    test_visitPrefixExpression_minus() : void {
        let node : any = AstTestFactory.prefixExpression(TokenType.MINUS,this._resolvedInteger(0));
        let minusMethod : any = this.getMethod(this._typeProvider.numType,"-");
        node.staticElement = minusMethod;
        expect(this._analyze(node),same(this._typeProvider.numType));
        this._listener.assertNoErrors();
    }
    test_visitPrefixExpression_minusMinus() : void {
        let node : any = AstTestFactory.prefixExpression(TokenType.MINUS_MINUS,this._resolvedInteger(0));
        let minusMethod : any = this.getMethod(this._typeProvider.numType,"-");
        node.staticElement = minusMethod;
        expect(this._analyze(node),same(this._typeProvider.intType));
        this._listener.assertNoErrors();
    }
    test_visitPrefixExpression_not() : void {
        let node : any = AstTestFactory.prefixExpression(TokenType.BANG,AstTestFactory.booleanLiteral(true));
        expect(this._analyze(node),same(this._typeProvider.boolType));
        this._listener.assertNoErrors();
    }
    test_visitPrefixExpression_plusPlus() : void {
        let node : any = AstTestFactory.prefixExpression(TokenType.PLUS_PLUS,this._resolvedInteger(0));
        let plusMethod : any = this.getMethod(this._typeProvider.numType,"+");
        node.staticElement = plusMethod;
        expect(this._analyze(node),same(this._typeProvider.intType));
        this._listener.assertNoErrors();
    }
    test_visitPrefixExpression_tilde() : void {
        let node : any = AstTestFactory.prefixExpression(TokenType.TILDE,this._resolvedInteger(0));
        let tildeMethod : any = this.getMethod(this._typeProvider.intType,"~");
        node.staticElement = tildeMethod;
        expect(this._analyze(node),same(this._typeProvider.intType));
        this._listener.assertNoErrors();
    }
    test_visitPropertyAccess_propagated_getter() : void {
        let boolType : any = this._typeProvider.boolType;
        let getter : any = ElementFactory.getterElement("b",false,boolType);
        let node : any = AstTestFactory.propertyAccess2(AstTestFactory.identifier3("a"),"b");
        node.propertyName.propagatedElement = getter;
        expect(this._analyze2(node,false),same(boolType));
        this._listener.assertNoErrors();
    }
    test_visitPropertyAccess_propagated_setter() : void {
        let boolType : any = this._typeProvider.boolType;
        let field : any = ElementFactory.fieldElement("b",false,false,false,boolType);
        let setter : any = field.setter;
        let node : any = AstTestFactory.propertyAccess2(AstTestFactory.identifier3("a"),"b");
        node.propertyName.propagatedElement = setter;
        expect(this._analyze2(node,false),same(boolType));
        this._listener.assertNoErrors();
    }
    test_visitPropertyAccess_static_getter() : void {
        let boolType : any = this._typeProvider.boolType;
        let getter : any = ElementFactory.getterElement("b",false,boolType);
        let node : any = AstTestFactory.propertyAccess2(AstTestFactory.identifier3("a"),"b");
        node.propertyName.staticElement = getter;
        expect(this._analyze(node),same(boolType));
        this._listener.assertNoErrors();
    }
    test_visitPropertyAccess_static_setter() : void {
        let boolType : any = this._typeProvider.boolType;
        let field : any = ElementFactory.fieldElement("b",false,false,false,boolType);
        let setter : any = field.setter;
        let node : any = AstTestFactory.propertyAccess2(AstTestFactory.identifier3("a"),"b");
        node.propertyName.staticElement = setter;
        expect(this._analyze(node),same(boolType));
        this._listener.assertNoErrors();
    }
    test_visitSimpleIdentifier_dynamic() : void {
        let identifier : any = AstTestFactory.identifier3('dynamic');
        let element : any = DynamicElementImpl.instance;
        identifier.staticElement = element;
        identifier.staticType = this._typeProvider.typeType;
        expect(this._analyze(identifier),same(this._typeProvider.typeType));
        this._listener.assertNoErrors();
    }
    test_visitSimpleStringLiteral() : void {
        let node : any = this._resolvedString("a");
        expect(this._analyze(node),same(this._typeProvider.stringType));
        this._listener.assertNoErrors();
    }
    test_visitStringInterpolation() : void {
        let node : any = AstTestFactory.string(new core.DartList.literal(AstTestFactory.interpolationString("a","a"),AstTestFactory.interpolationExpression(this._resolvedString("b")),AstTestFactory.interpolationString("c","c")));
        expect(this._analyze(node),same(this._typeProvider.stringType));
        this._listener.assertNoErrors();
    }
    test_visitSuperExpression() : void {
        let superType : any = ElementFactory.classElement2("A").type;
        let thisType : any = ElementFactory.classElement("B",superType).type;
        let node : any = AstTestFactory.superExpression();
        expect(this._analyze3(node,thisType),same(thisType));
        this._listener.assertNoErrors();
    }
    test_visitSymbolLiteral() : void {
        expect(this._analyze(AstTestFactory.symbolLiteral(new core.DartList.literal("a"))),same(this._typeProvider.symbolType));
    }
    test_visitThisExpression() : void {
        let thisType : any = ElementFactory.classElement("B",ElementFactory.classElement2("A").type).type;
        let node : any = AstTestFactory.thisExpression();
        expect(this._analyze3(node,thisType),same(thisType));
        this._listener.assertNoErrors();
    }
    test_visitThrowExpression_withoutValue() : void {
        let node : any = AstTestFactory.throwExpression();
        expect(this._analyze(node),same(this._typeProvider.bottomType));
        this._listener.assertNoErrors();
    }
    test_visitThrowExpression_withValue() : void {
        let node : any = AstTestFactory.throwExpression2(this._resolvedInteger(0));
        expect(this._analyze(node),same(this._typeProvider.bottomType));
        this._listener.assertNoErrors();
    }
    _analyze(node : any) : any {
        return this._analyze4(node,null,true);
    }
    _analyze2(node : any,useStaticType : boolean) : any {
        return this._analyze4(node,null,useStaticType);
    }
    _analyze3(node : any,thisType : any) : any {
        return this._analyze4(node,thisType,true);
    }
    _analyze4(node : any,thisType : any,useStaticType : boolean) : any {
        this._analyzer.thisType = thisType;
        node.accept(this._analyzer);
        if (useStaticType) {
            return node.staticType;
        }else {
            return node.propagatedType;
        }
    }
    _analyze5(node : any) : any {
        node.accept(this._analyzer);
        return (node.identifier.staticElement as any).type;
    }
    _assertFunctionType(expectedReturnType : any,expectedNormalTypes : core.DartList<any>,expectedOptionalTypes : core.DartList<any>,expectedNamedTypes : core.DartMap<string,any>,actualType : any) : void {
        lib4.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },FunctionType,actualType);
        let functionType : any = actualType as any;
        let normalTypes : core.DartList<any> = functionType.normalParameterTypes;
        if (expectedNormalTypes == null) {
            expect(normalTypes,hasLength(0));
        }else {
            let expectedCount : number = expectedNormalTypes.length;
            expect(normalTypes,hasLength(expectedCount));
            for(let i : number = 0; i < expectedCount; i++){
                expect(normalTypes[i],same(expectedNormalTypes[i]));
            }
        }
        let optionalTypes : core.DartList<any> = functionType.optionalParameterTypes;
        if (expectedOptionalTypes == null) {
            expect(optionalTypes,hasLength(0));
        }else {
            let expectedCount : number = expectedOptionalTypes.length;
            expect(optionalTypes,hasLength(expectedCount));
            for(let i : number = 0; i < expectedCount; i++){
                expect(optionalTypes[i],same(expectedOptionalTypes[i]));
            }
        }
        let namedTypes : core.DartMap<string,any> = functionType.namedParameterTypes;
        if (expectedNamedTypes == null) {
            expect(namedTypes,hasLength(0));
        }else {
            expect(namedTypes,hasLength(expectedNamedTypes.length));
            expectedNamedTypes.forEach((name : string,type : any) =>  {
                expect(namedTypes.get(name),same(type));
            });
        }
        expect(functionType.returnType,equals(expectedReturnType));
    }
    _assertType(expectedType : any,actualType : any) : void {
        expect(actualType.displayName,expectedType.displayName);
        expect(actualType.element,expectedType.element);
        let expectedArguments : core.DartList<any> = expectedType.typeArguments;
        let length : number = expectedArguments.length;
        let actualArguments : core.DartList<any> = actualType.typeArguments;
        expect(actualArguments,hasLength(length));
        for(let i : number = 0; i < length; i++){
            this._assertType2(expectedArguments[i],actualArguments[i]);
        }
    }
    _assertType2(expectedType : any,actualType : any) : void {
        if (is(expectedType, any)) {
            lib4.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },InterfaceTypeImpl,actualType);
            this._assertType(expectedType,actualType as any);
        }
    }
    _createAnalyzer(_namedArguments? : {strongMode? : boolean}) : any {
        let {strongMode} = Object.assign({
            "strongMode" : false}, _namedArguments );
        let resourceProvider : any = new bare.createInstance(any,null);
        let context : any;
        if (strongMode) {
            let options : any = new bare.createInstance(any,null);
            options.strongMode = true;
            context = lib6.AnalysisContextFactory.contextWithCoreAndOptions(options,{
                resourceProvider : resourceProvider});
        }else {
            context = lib6.AnalysisContextFactory.contextWithCore({
                resourceProvider : resourceProvider});
        }
        let source : any = new bare.createInstance(any,null,resourceProvider.getFile("/lib.dart"));
        let definingCompilationUnit : any = new bare.createInstance(any,null,"lib.dart");
        definingCompilationUnit.librarySource = definingCompilationUnit.source = source;
        let definingLibrary : any = new bare.createInstance(any,null,context,null);
        definingLibrary.definingCompilationUnit = definingCompilationUnit;
        this._typeProvider = context.typeProvider;
        this._visitor = new bare.createInstance(any,null,definingLibrary,source,this._typeProvider,this._listener,{
            nameScope : new bare.createInstance(any,null,definingLibrary)});
        this._visitor.overrideManager.enterScope();
        return this._visitor.typeAnalyzer;
    }
    _flatten(type : any) : any {
        return type.flattenFutures(this._typeSystem);
    }
    _propagatedVariable(type : any,variableName : string) : any {
        let identifier : any = AstTestFactory.identifier3(variableName);
        let element : any = ElementFactory.localVariableElement(identifier);
        element.type = type;
        identifier.staticType = this._typeProvider.dynamicType;
        identifier.propagatedElement = element;
        identifier.propagatedType = type;
        return identifier;
    }
    _resolvedBool(value : boolean) : any {
        let literal : any = AstTestFactory.booleanLiteral(value);
        literal.staticType = this._typeProvider.intType;
        return literal;
    }
    _resolvedDouble(value : double) : any {
        let literal : any = AstTestFactory.doubleLiteral(value);
        literal.staticType = this._typeProvider.doubleType;
        return literal;
    }
    _resolvedFunctionExpression(parameters : any,body : any) : any {
        let parameterElements : core.DartList<any> = new core.DartList<any>();
        for(let parameter of parameters.parameters) {
            let element : any = new bare.createInstance(any,null,parameter.identifier);
            element.parameterKind = parameter.kind;
            element.type = this._typeProvider.dynamicType;
            parameter.identifier.staticElement = element;
            parameterElements.add(element);
        }
        let node : any = AstTestFactory.functionExpression2(parameters,body);
        let element : any = new bare.createInstance(any,null,null);
        element.parameters = parameterElements;
        element.type = new bare.createInstance(any,null,element);
        node.element = element;
        return node;
    }
    _resolvedInteger(value : number) : any {
        let literal : any = AstTestFactory.integer(value);
        literal.staticType = this._typeProvider.intType;
        return literal;
    }
    _resolvedString(value : string) : any {
        let string : any = AstTestFactory.string2(value);
        string.staticType = this._typeProvider.stringType;
        return string;
    }
    _resolvedVariable(type : any,variableName : string) : any {
        let identifier : any = AstTestFactory.identifier3(variableName);
        let element : any = ElementFactory.localVariableElement(identifier);
        element.type = type;
        identifier.staticElement = element;
        identifier.staticType = type;
        return identifier;
    }
    _setType(parameter : any,type : any) : void {
        let identifier : any = parameter.identifier;
        let element : any = identifier.staticElement;
        if (isNot(element, any)) {
            element = new bare.createInstance(any,null,identifier);
            identifier.staticElement = element;
        }
        (element as any).type = type;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StaticTypeAnalyzerTest() {
    }
}

export class properties {
}
