/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/strong_mode_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./resolver_test_case";
import * as lib4 from "./../utils";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(StrongModeLocalInferenceTest);
        defineReflectiveTests(StrongModeStaticTypeAnalyzer2Test);
        defineReflectiveTests(StrongModeTypePropagationTest);
    });
};
export namespace StrongModeLocalInferenceTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'StrongModeLocalInferenceTest';
    export type Interface = Omit<StrongModeLocalInferenceTest, Constructors>;
}
@DartClass
export class StrongModeLocalInferenceTest extends lib3.ResolverTestCase {
    _assertions : lib4.TypeAssertions;

    _isDynamic : <T>(type : any) => void;

    _isFutureOfDynamic : <T>(type : any) => void;

    _isFutureOfInt : <T>(type : any) => void;

    _isFutureOfNull : <T>(type : any) => void;

    _isFutureOrOfInt : <T>(type : any) => void;

    _isInt : <T>(type : any) => void;

    _isNull : <T>(type : any) => void;

    _isNum : <T>(type : any) => void;

    _isObject : <T>(type : any) => void;

    _isString : <T>(type : any) => void;

    _isFunction2Of : <S0,S1,T>(arg0 : <T>(type : any) => void,arg1 : <T>(type : any) => void) => <T>(type : any) => void;

    _isFutureOf : <S,T>(arg : core.DartList<<T>(type : any) => void>) => <T>(type : any) => void;

    _isFutureOrOf : <S,T>(arg : core.DartList<<T>(type : any) => void>) => <T>(type : any) => void;

    _isInstantiationOf : <R,S,T>(arg : <T>(type : any) => void) => <S,T>(arg : core.DartList<<T>(type : any) => void>) => <T>(type : any) => void;

    _isListOf : <S,T>(arg : <T>(type : any) => void) => <T>(type : any) => void;

    _isMapOf : <S0,S1,T>(arg0 : <T>(type : any) => void,arg1 : <T>(type : any) => void) => <T>(type : any) => void;

    _isStreamOf : <S,T>(arg : core.DartList<<T>(type : any) => void>) => <T>(type : any) => void;

    _isType : <S,T>(arg : any) => <T>(type : any) => void;

    _hasElement : <S,T>(arg : any) => <T>(type : any) => void;

    _hasElementOf : <S,T>(arg : any) => <T>(type : any) => void;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeAnalysisResult(source : any) : async.Future<lib3.TestAnalysisResult> { 
        return new async.Future.fromPromise(( async () =>  {
            let result : lib3.TestAnalysisResult = await super.computeAnalysisResult(source);
            if (op(Op.EQUALS,this._assertions,null)) {
                this._assertions = new lib4.TypeAssertions(this.typeProvider);
                this._isType = this._assertions.isType.bind(this._assertions);
                this._hasElement = this._assertions.hasElement.bind(this._assertions);
                this._isInstantiationOf = this._assertions.isInstantiationOf.bind(this._assertions);
                this._isInt = this._assertions.isInt;
                this._isNull = this._assertions.isNull;
                this._isNum = this._assertions.isNum;
                this._isObject = this._assertions.isObject;
                this._isString = this._assertions.isString;
                this._isDynamic = this._assertions.isDynamic;
                this._isListOf = this._assertions.isListOf.bind(this._assertions);
                this._isMapOf = this._assertions.isMapOf.bind(this._assertions);
                this._isFunction2Of = this._assertions.isFunction2Of.bind(this._assertions);
                this._hasElementOf = this._assertions.hasElementOf.bind(this._assertions);
                this._isFutureOf = this._isInstantiationOf(this._hasElementOf(this.typeProvider.futureType));
                this._isFutureOrOf = this._isInstantiationOf(this._hasElementOf(this.typeProvider.futureOrType));
                this._isFutureOfDynamic = this._isFutureOf(new core.DartList.literal(this._isDynamic));
                this._isFutureOfInt = this._isFutureOf(new core.DartList.literal(this._isInt));
                this._isFutureOfNull = this._isFutureOf(new core.DartList.literal(this._isNull));
                this._isFutureOrOfInt = this._isFutureOrOf(new core.DartList.literal(this._isInt));
                this._isStreamOf = this._isInstantiationOf(this._hasElementOf(this.typeProvider.streamType));
            }
            return result;
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        let options : any = new bare.createInstance(any,null);
        options.strongMode = true;
        this.resetWith({
            options : options});
    }
    test_async_method_propagation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      import "dart:async";
            let unit : any = await this.resolveSource(code);
            var check : (name : string,typeTest : <T>(type : any) => void) => void = (name : string,typeTest : <T>(type : any) => void) : void =>  {
                let test : any = lib4.AstFinder.getMethodInClass(unit,"A",name);
                let body : any = test.body;
                let returnExp : any;
                if (is(body, any)) {
                    returnExp = body.expression;
                }else {
                    let stmt : any = op(Op.INDEX,(body as any).block.statements,0);
                    returnExp = stmt.expression;
                }
                let type : any = returnExp.staticType;
                if (is(returnExp, any)) {
                    type = returnExp.expression.staticType;
                }
                typeTest(type);
            };
            check("f0",this._isFutureOfDynamic);
            check("f1",this._isFutureOfDynamic);
            check("f2",this._isFutureOfDynamic);
            check("f3",this._isFutureOfInt);
            check("f4",this._isFutureOfInt);
            check("f5",this._isFutureOfInt);
            check("g0",this._isFutureOfDynamic);
            check("g1",this._isFutureOfDynamic);
            check("g2",this._isFutureOfDynamic);
            check("g3",this._isFutureOfInt);
            check("g4",this._isFutureOfInt);
            check("g5",this._isFutureOfInt);
        } )());
    }

    test_async_propagation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      import "dart:async";
            let unit : any = await this.resolveSource(code);
            var check : (name : string,typeTest : <T>(type : any) => void) => void = (name : string,typeTest : <T>(type : any) => void) : void =>  {
                let test : any = lib4.AstFinder.getTopLevelFunction(unit,name);
                let body : any = test.functionExpression.body;
                let returnExp : any;
                if (is(body, any)) {
                    returnExp = body.expression;
                }else {
                    let stmt : any = op(Op.INDEX,(body as any).block.statements,0);
                    returnExp = stmt.expression;
                }
                let type : any = returnExp.staticType;
                if (is(returnExp, any)) {
                    type = returnExp.expression.staticType;
                }
                typeTest(type);
            };
            check("f0",this._isFutureOfDynamic);
            check("f1",this._isFutureOfDynamic);
            check("f2",this._isFutureOfDynamic);
            check("f3",this._isFutureOfInt);
            check("f4",this._isFutureOfInt);
            check("f5",this._isFutureOfInt);
            check("g0",this._isFutureOfDynamic);
            check("g1",this._isFutureOfDynamic);
            check("g2",this._isFutureOfDynamic);
            check("g3",this._isFutureOfInt);
            check("g4",this._isFutureOfInt);
            check("g5",this._isFutureOfInt);
        } )());
    }

    test_async_star_method_propagation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      import "dart:async";
            let unit : any = await this.resolveSource(code);
            var check : (name : string,typeTest : <T>(type : any) => void) => void = (name : string,typeTest : <T>(type : any) => void) : void =>  {
                let test : any = lib4.AstFinder.getMethodInClass(unit,"A",name);
                let body : any = test.body;
                let stmt : any = op(Op.INDEX,body.block.statements,0);
                let exp : any = stmt.expression;
                typeTest(exp.staticType);
            };
            check("g0",this._isListOf(this._isDynamic));
            check("g1",this._isStreamOf(new core.DartList.literal(this._isDynamic)));
            check("g2",this._isListOf(this._isInt));
            check("g3",this._isStreamOf(new core.DartList.literal((type : any) =>  {
                return (this._isListOf(this._isInt))(type);
            })));
        } )());
    }

    test_async_star_propagation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      import "dart:async";
            let unit : any = await this.resolveSource(code);
            var check : (name : string,typeTest : <T>(type : any) => void) => void = (name : string,typeTest : <T>(type : any) => void) : void =>  {
                let test : any = lib4.AstFinder.getTopLevelFunction(unit,name);
                let body : any = test.functionExpression.body;
                let stmt : any = op(Op.INDEX,body.block.statements,0);
                let exp : any = stmt.expression;
                typeTest(exp.staticType);
            };
            check("g0",this._isListOf(this._isDynamic));
            check("g1",this._isStreamOf(new core.DartList.literal(this._isDynamic)));
            check("g2",this._isListOf(this._isInt));
            check("g3",this._isStreamOf(new core.DartList.literal((type : any) =>  {
                return (this._isListOf(this._isInt))(type);
            })));
        } )());
    }

    test_cascadeExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      class A<T> {
            let unit : any = await this.resolveSource(code);
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"main");
            var fetch : (i : number) => any = (i : number) : any =>  {
                let stmt : any = statements[i];
                let decl : any = op(Op.INDEX,stmt.variables.variables,0);
                let exp : any = decl.initializer;
                return exp;
            };
            let elementA : any = lib4.AstFinder.getClass(unit,"A").element;
            let cascade : any = fetch(0);
            ((this._isInstantiationOf(this._hasElement(elementA)))(new core.DartList.literal(this._isInt)))(cascade.staticType);
            let invoke : any = op(Op.INDEX,cascade.cascadeSections,0);
            let function : any = op(Op.INDEX,invoke.argumentList.arguments,1);
            let f0 : any = function.element;
            (this._isListOf(this._isInt))(f0.type.returnType);
            expect(op(Op.INDEX,f0.type.normalParameterTypes,0),this.typeProvider.intType);
        } )());
    }

    test_constrainedByBounds1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    T f<S, T extends S>(S x) => null;
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"test");
            let stmt : any = statements[0];
            let decl : any = op(Op.INDEX,stmt.variables.variables,0);
            let call : any = decl.initializer;
            this._isInt(call.staticType);
        } )());
    }

    test_constrainedByBounds2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    T f<T extends S, S>(S x) => null;
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"test");
            let stmt : any = statements[0];
            let decl : any = op(Op.INDEX,stmt.variables.variables,0);
            let call : any = decl.initializer;
            this._isInt(call.staticType);
        } )());
    }

    test_constrainedByBounds3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('      T f<T extends S, S extends int>(S x) => null;
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"test");
            let stmt : any = statements[0];
            let decl : any = op(Op.INDEX,stmt.variables.variables,0);
            let call : any = decl.initializer;
            this._isInt(call.staticType);
        } )());
    }

    test_constrainedByBounds4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    typedef To Func1<From, To>(From x);
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"test");
            let stmt : any = statements[0];
            let decl : any = op(Op.INDEX,stmt.variables.variables,0);
            let call : any = decl.initializer;
            this._isInt(call.staticType);
        } )());
    }

    test_constrainedByBounds5() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    typedef To Func1<From, To>(From x);
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StrongModeCode.COULD_NOT_INFER));
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"test");
            let stmt : any = statements[0];
            let decl : any = op(Op.INDEX,stmt.variables.variables,0);
            let call : any = decl.initializer;
            this._isDynamic(call.staticType);
        } )());
    }

    test_constructorInitializer_propagation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      class A {
            let unit : any = await this.resolveSource(code);
            let constructor : any = lib4.AstFinder.getConstructorInClass(unit,"A",null);
            let assignment : any = op(Op.INDEX,constructor.initializers,0);
            let exp : any = assignment.expression;
            (this._isListOf(this._isString))(exp.staticType);
        } )());
    }

    test_factoryConstructor_propagation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      class A<T> {
            let unit : any = await this.resolveSource(code);
            let constructor : any = lib4.AstFinder.getConstructorInClass(unit,"A",null);
            let body : any = constructor.body;
            let stmt : any = op(Op.INDEX,body.block.statements,0);
            let exp : any = stmt.expression;
            let elementB : any = lib4.AstFinder.getClass(unit,"B").element;
            let elementA : any = lib4.AstFinder.getClass(unit,"A").element;
            expect(resolutionMap.typeForTypeName(exp.constructorName.type).element,elementB);
            ((this._isInstantiationOf(this._hasElement(elementB)))(new core.DartList.literal(this._isType(op(Op.INDEX,elementA.typeParameters,0).type))))(exp.staticType);
        } )());
    }

    test_fieldDeclaration_propagation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      class A {
            let unit : any = await this.resolveSource(code);
            let field : any = lib4.AstFinder.getFieldInClass(unit,"A","f0");
            (this._isListOf(this._isString))(field.initializer.staticType);
        } )());
    }

    test_functionDeclaration_body_propagation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      typedef T Function2<S, T>(S x);
            let unit : any = await this.resolveSource(code);
            let assertListOfInt : <T>(type : any) => void = this._isListOf(this._isInt);
            let test1 : any = lib4.AstFinder.getTopLevelFunction(unit,"test1");
            let body : any = test1.functionExpression.body;
            assertListOfInt(body.expression.staticType);
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"test2");
            let inner : any = (statements[0] as any).functionDeclaration;
            let body0 : any = inner.functionExpression.body;
            let return0 : any = op(Op.INDEX,body0.block.statements,0);
            let anon0 : any = return0.expression;
            let type0 : any = anon0.staticType;
            expect(type0.returnType,this.typeProvider.intType);
            expect(op(Op.INDEX,type0.normalParameterTypes,0),this.typeProvider.stringType);
            let anon1 : any = (statements[1] as any).expression;
            let type1 : any = resolutionMap.elementDeclaredByFunctionExpression(anon1).type;
            expect(type1.returnType,this.typeProvider.intType);
            expect(op(Op.INDEX,type1.normalParameterTypes,0),this.typeProvider.intType);
        } )());
    }

    test_functionLiteral_assignment_typedArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      typedef T Function2<S, T>(S x);
            let unit : any = await this.resolveSource(code);
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"main");
            var literal : (i : number) => any = (i : number) : any =>  {
                let stmt : any = statements[i];
                let decl : any = op(Op.INDEX,stmt.variables.variables,0);
                let exp : any = decl.initializer;
                return resolutionMap.elementDeclaredByFunctionExpression(exp).type;
            };
            (this._isFunction2Of(this._isInt,this._isString))(literal(0));
            (this._isFunction2Of(this._isInt,this._isString))(literal(1));
            (this._isFunction2Of(this._isString,this._isString))(literal(2));
            (this._isFunction2Of(this._isInt,this._isInt))(literal(3));
            (this._isFunction2Of(this._isInt,this._isString))(literal(4));
        } )());
    }

    test_functionLiteral_assignment_unTypedArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      typedef T Function2<S, T>(S x);
            let unit : any = await this.resolveSource(code);
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"main");
            var literal : (i : number) => any = (i : number) : any =>  {
                let stmt : any = statements[i];
                let decl : any = op(Op.INDEX,stmt.variables.variables,0);
                let exp : any = decl.initializer;
                return resolutionMap.elementDeclaredByFunctionExpression(exp).type;
            };
            (this._isFunction2Of(this._isInt,this._isString))(literal(0));
            (this._isFunction2Of(this._isInt,this._isString))(literal(1));
            (this._isFunction2Of(this._isInt,this._isString))(literal(2));
            (this._isFunction2Of(this._isInt,this._isInt))(literal(3));
            (this._isFunction2Of(this._isInt,this._isString))(literal(4));
        } )());
    }

    test_functionLiteral_body_propagation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      typedef T Function2<S, T>(S x);
            let unit : any = await this.resolveSource(code);
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"main");
            var functionReturnValue : (i : number) => any = (i : number) : any =>  {
                let stmt : any = statements[i];
                let decl : any = op(Op.INDEX,stmt.variables.variables,0);
                let exp : any = decl.initializer;
                let body : any = exp.body;
                if (is(body, any)) {
                    return body.expression;
                }else {
                    let stmt : any = op(Op.INDEX,(body as any).block.statements,0);
                    return (stmt as any).expression;
                }
            };
            let assertListOfString : <T>(type : any) => void = this._isListOf(this._isString);
            assertListOfString(functionReturnValue(0).staticType);
            assertListOfString(functionReturnValue(1).staticType);
            assertListOfString(functionReturnValue(2).staticType);
            assertListOfString(functionReturnValue(3).staticType);
        } )());
    }

    test_functionLiteral_functionExpressionInvocation_typedArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      class Mapper<F, T> {
            let unit : any = await this.resolveSource(code);
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"main");
            var literal : (i : number) => any = (i : number) : any =>  {
                let stmt : any = statements[i];
                let invk : any = stmt.expression;
                let exp : any = op(Op.INDEX,invk.argumentList.arguments,0);
                return resolutionMap.elementDeclaredByFunctionExpression(exp).type;
            };
            (this._isFunction2Of(this._isInt,this._isString))(literal(0));
            (this._isFunction2Of(this._isInt,this._isString))(literal(1));
            (this._isFunction2Of(this._isString,this._isString))(literal(2));
            (this._isFunction2Of(this._isInt,this._isInt))(literal(3));
            (this._isFunction2Of(this._isInt,this._isString))(literal(4));
        } )());
    }

    test_functionLiteral_functionExpressionInvocation_unTypedArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      class Mapper<F, T> {
            let unit : any = await this.resolveSource(code);
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"main");
            var literal : (i : number) => any = (i : number) : any =>  {
                let stmt : any = statements[i];
                let invk : any = stmt.expression;
                let exp : any = op(Op.INDEX,invk.argumentList.arguments,0);
                return resolutionMap.elementDeclaredByFunctionExpression(exp).type;
            };
            (this._isFunction2Of(this._isInt,this._isString))(literal(0));
            (this._isFunction2Of(this._isInt,this._isString))(literal(1));
            (this._isFunction2Of(this._isInt,this._isString))(literal(2));
            (this._isFunction2Of(this._isInt,this._isInt))(literal(3));
            (this._isFunction2Of(this._isInt,this._isString))(literal(4));
        } )());
    }

    test_functionLiteral_functionInvocation_typedArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      String map(String mapper(int x)) => mapper(null);
            let unit : any = await this.resolveSource(code);
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"main");
            var literal : (i : number) => any = (i : number) : any =>  {
                let stmt : any = statements[i];
                let invk : any = stmt.expression;
                let exp : any = op(Op.INDEX,invk.argumentList.arguments,0);
                return resolutionMap.elementDeclaredByFunctionExpression(exp).type;
            };
            (this._isFunction2Of(this._isInt,this._isString))(literal(0));
            (this._isFunction2Of(this._isInt,this._isString))(literal(1));
            (this._isFunction2Of(this._isString,this._isString))(literal(2));
            (this._isFunction2Of(this._isInt,this._isInt))(literal(3));
            (this._isFunction2Of(this._isInt,this._isString))(literal(4));
        } )());
    }

    test_functionLiteral_functionInvocation_unTypedArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      String map(String mapper(int x)) => mapper(null);
            let unit : any = await this.resolveSource(code);
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"main");
            var literal : (i : number) => any = (i : number) : any =>  {
                let stmt : any = statements[i];
                let invk : any = stmt.expression;
                let exp : any = op(Op.INDEX,invk.argumentList.arguments,0);
                return resolutionMap.elementDeclaredByFunctionExpression(exp).type;
            };
            (this._isFunction2Of(this._isInt,this._isString))(literal(0));
            (this._isFunction2Of(this._isInt,this._isString))(literal(1));
            (this._isFunction2Of(this._isInt,this._isString))(literal(2));
            (this._isFunction2Of(this._isInt,this._isInt))(literal(3));
            (this._isFunction2Of(this._isInt,this._isString))(literal(4));
        } )());
    }

    test_functionLiteral_methodInvocation_typedArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      class Mapper<F, T> {
            let unit : any = await this.resolveSource(code);
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"main");
            var literal : (i : number) => any = (i : number) : any =>  {
                let stmt : any = statements[i];
                let invk : any = stmt.expression;
                let exp : any = op(Op.INDEX,invk.argumentList.arguments,0);
                return resolutionMap.elementDeclaredByFunctionExpression(exp).type;
            };
            (this._isFunction2Of(this._isInt,this._isString))(literal(0));
            (this._isFunction2Of(this._isInt,this._isString))(literal(1));
            (this._isFunction2Of(this._isString,this._isString))(literal(2));
            (this._isFunction2Of(this._isInt,this._isInt))(literal(3));
            (this._isFunction2Of(this._isInt,this._isString))(literal(4));
        } )());
    }

    test_functionLiteral_methodInvocation_unTypedArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      class Mapper<F, T> {
            let unit : any = await this.resolveSource(code);
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"main");
            var literal : (i : number) => any = (i : number) : any =>  {
                let stmt : any = statements[i];
                let invk : any = stmt.expression;
                let exp : any = op(Op.INDEX,invk.argumentList.arguments,0);
                return resolutionMap.elementDeclaredByFunctionExpression(exp).type;
            };
            (this._isFunction2Of(this._isInt,this._isString))(literal(0));
            (this._isFunction2Of(this._isInt,this._isString))(literal(1));
            (this._isFunction2Of(this._isInt,this._isString))(literal(2));
            (this._isFunction2Of(this._isInt,this._isInt))(literal(3));
            (this._isFunction2Of(this._isInt,this._isString))(literal(4));
        } )());
    }

    test_functionLiteral_unTypedArgument_propagation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      typedef T Function2<S, T>(S x);
            let unit : any = await this.resolveSource(code);
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"main");
            var functionReturnValue : (i : number) => any = (i : number) : any =>  {
                let stmt : any = statements[i];
                let decl : any = op(Op.INDEX,stmt.variables.variables,0);
                let exp : any = decl.initializer;
                let body : any = exp.body;
                if (is(body, any)) {
                    return body.expression;
                }else {
                    let stmt : any = op(Op.INDEX,(body as any).block.statements,0);
                    return (stmt as any).expression;
                }
            };
            expect(functionReturnValue(0).staticType,this.typeProvider.intType);
            expect(functionReturnValue(1).staticType,this.typeProvider.intType);
            expect(functionReturnValue(2).staticType,this.typeProvider.intType);
            expect(functionReturnValue(3).staticType,this.typeProvider.dynamicType);
            expect(functionReturnValue(4).staticType,this.typeProvider.stringType);
        } )());
    }

    test_futureOr_assignFromFuture() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    FutureOr<T> mk<T>(Future<T> x) => x;
            this._isFutureOrOfInt(invoke.staticType);
        } )());
    }

    test_futureOr_assignFromValue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    FutureOr<T> mk<T>(T x) => x;
            this._isFutureOrOfInt(invoke.staticType);
        } )());
    }

    test_futureOr_asyncExpressionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    Future<T> mk<T>(FutureOr<T> x) async => x;
            this._isFutureOfInt(invoke.staticType);
        } )());
    }

    test_futureOr_asyncReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    Future<T> mk<T>(FutureOr<T> x) async { return x; }
            this._isFutureOfInt(invoke.staticType);
        } )());
    }

    test_futureOr_await() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    Future<T> mk<T>(FutureOr<T> x) async => await x;
            this._isFutureOfInt(invoke.staticType);
        } )());
    }

    test_futureOr_downwards1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    Future<T> mk<T>(FutureOr<T> x) => null;
            this._isFutureOfInt(invoke.staticType);
        } )());
    }

    test_futureOr_downwards2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    Future<T> mk<T>(FutureOr<T> x) => null;
            this._isFutureOfInt(invoke.staticType);
        } )());
    }

    test_futureOr_downwards3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    Future<T> mk<T>(FutureOr<T> x) => null;
            this._isFutureOfInt(invoke.staticType);
            this._isFutureOfInt(op(Op.INDEX,invoke.argumentList.arguments,0).staticType);
        } )());
    }

    test_futureOr_downwards4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    Future<T> mk<T>(FutureOr<T> x) => null;
            this._isFutureOfInt(invoke.staticType);
            this._isFutureOfInt(op(Op.INDEX,invoke.argumentList.arguments,0).staticType);
        } )());
    }

    test_futureOr_downwards5() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    Future<T> mk<T>(FutureOr<T> x) => null;
            (this._isFutureOf(new core.DartList.literal(this._isNum)))(invoke.staticType);
            (this._isFutureOf(new core.DartList.literal(this._isNum)))(op(Op.INDEX,invoke.argumentList.arguments,0).staticType);
        } )());
    }

    test_futureOr_downwards6() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    T mk<T>(T x) => null;
            this._isFutureOrOfInt(invoke.staticType);
            this._isFutureOfInt(op(Op.INDEX,invoke.argumentList.arguments,0).staticType);
        } )());
    }

    test_futureOr_downwards7() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('      T mk<T extends Future<int>>(T x) => null;
            this._isFutureOfInt(invoke.staticType);
            this._isFutureOfInt(op(Op.INDEX,invoke.argumentList.arguments,0).staticType);
        } )());
    }

    test_futureOr_downwards8() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    T mk<T extends Future<Object>>(T x) => null;
            this._isFutureOfInt(invoke.staticType);
            this._isFutureOfInt(op(Op.INDEX,invoke.argumentList.arguments,0).staticType);
        } )());
    }

    test_futureOr_downwards9() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    List<T> mk<T>(T x) => null;
            (this._isListOf(this._isInt))(invoke.staticType);
            this._isInt(op(Op.INDEX,invoke.argumentList.arguments,0).staticType);
        } )());
    }

    test_futureOr_methods1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    dynamic test(FutureOr<int> x) => x.toString();
            this._isString(invoke.staticType);
        } )());
    }

    test_futureOr_methods2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    dynamic test(FutureOr<int> x) => x.abs();
                errors : new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD)});
            this._isDynamic(invoke.staticType);
        } )());
    }

    test_futureOr_methods3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    dynamic test(FutureOr<int> x) => x.then((x) => x);
                errors : new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD)});
            this._isDynamic(invoke.staticType);
        } )());
    }

    test_futureOr_methods4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    dynamic test(FutureOr<dynamic> x) => x.abs();
                errors : new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD)});
            this._isDynamic(invoke.staticType);
        } )());
    }

    test_futureOr_no_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    FutureOr<T> mk<T>(Future<T> x) => x;
            (this._isFunction2Of(this._isInt,this._isNull))(op(Op.INDEX,invoke.argumentList.arguments,0).staticType);
            this._isFutureOfNull(invoke.staticType);
        } )());
    }

    test_futureOr_no_return_value() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    FutureOr<T> mk<T>(Future<T> x) => x;
            (this._isFunction2Of(this._isInt,this._isNull))(op(Op.INDEX,invoke.argumentList.arguments,0).staticType);
            this._isFutureOfNull(invoke.staticType);
        } )());
    }

    test_futureOr_return_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    FutureOr<T> mk<T>(Future<T> x) => x;
            (this._isFunction2Of(this._isInt,this._isNull))(op(Op.INDEX,invoke.argumentList.arguments,0).staticType);
            this._isFutureOfNull(invoke.staticType);
        } )());
    }

    test_futureOr_upwards1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    Future<T> mk<T>(FutureOr<T> x) => null;
            this._isFutureOfInt(invoke.staticType);
        } )());
    }

    test_futureOr_upwards2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    Future<T> mk<T extends Future<Object>>(FutureOr<T> x) => null;
                errors : new core.DartList.literal(StrongModeCode.COULD_NOT_INFER)});
            this._isFutureOfInt(invoke.staticType);
        } )());
    }

    test_futureOrNull_no_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    FutureOr<T> mk<T>(Future<T> x) => x;
            (this._isFunction2Of(this._isInt,this._isNull))(op(Op.INDEX,invoke.argumentList.arguments,0).staticType);
            this._isFutureOfNull(invoke.staticType);
        } )());
    }

    test_futureOrNull_no_return_value() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    FutureOr<T> mk<T>(Future<T> x) => x;
            (this._isFunction2Of(this._isInt,this._isNull))(op(Op.INDEX,invoke.argumentList.arguments,0).staticType);
            this._isFutureOfNull(invoke.staticType);
        } )());
    }

    test_futureOrNull_return_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let invoke : any = await this._testFutureOr('    FutureOr<T> mk<T>(Future<T> x) => x;
            (this._isFunction2Of(this._isInt,this._isNull))(op(Op.INDEX,invoke.argumentList.arguments,0).staticType);
            this._isFutureOfNull(invoke.staticType);
        } )());
    }

    test_generic_partial() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class A<T> {
            let unit : any = await this.resolveSource(code);
            let elementA : any = lib4.AstFinder.getClass(unit,"A").element;
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"test");
            var check : (i : number) => void = (i : number) : void =>  {
                let stmt : any = statements[i];
                let decl : any = op(Op.INDEX,stmt.variables.variables,0);
                let init : any = decl.initializer;
                ((this._isInstantiationOf(this._hasElement(elementA)))(new core.DartList.literal(this._isInt)))(init.staticType);
            };
            for(let i = 0; i < 5; i++)check(i);
        } )());
    }

    test_inferConstructor_unknownTypeLowerBound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('        class C<T> {
            let unit : any = (await this.computeAnalysisResult(source)).unit;
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let cType : any = op(Op.INDEX,lib4.AstFinder.getTopLevelFunction(unit,"test").element.localVariables,0).type;
            let elementC : any = lib4.AstFinder.getClass(unit,"C").element;
            ((this._isInstantiationOf(this._hasElement(elementC)))(new core.DartList.literal(this._isDynamic)))(cType);
        } )());
    }

    test_inference_error_arguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef R F<T, R>(T t);
            await this.computeAnalysisResult(source);
            this._expectInferenceError(source,new core.DartList.literal(StrongModeCode.COULD_NOT_INFER,StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE),'Couldn\'t infer type parameter \'T\'.
        } )());
    }

    test_inference_error_arguments2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef R F<T, R>(T t);
            await this.computeAnalysisResult(source);
            this._expectInferenceError(source,new core.DartList.literal(StrongModeCode.COULD_NOT_INFER,StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE,StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE),'Couldn\'t infer type parameter \'T\'.
        } )());
    }

    test_inference_error_extendsFromReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('T max<T extends num>(T x, T y) => x;
            let analysisResult = await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StrongModeCode.INVALID_CAST_LITERAL,StrongModeCode.INVALID_CAST_LITERAL));
            let unit = analysisResult.unit;
            let h = op(Op.INDEX,(lib4.AstFinder.getStatementsInTopLevelFunction(unit,"test")[0] as any).variables.variables,0);
            let call = h.initializer as any;
            expect(call.staticInvokeType.toString(),'(Null, Null) → Null');
        } )());
    }

    test_inference_error_extendsFromReturn2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef R F<T, R>(T t);
            await this.computeAnalysisResult(source);
            this._expectInferenceError(source,new core.DartList.literal(StrongModeCode.COULD_NOT_INFER),'Couldn\'t infer type parameter \'T\'.
        } )());
    }

    test_inference_error_genericFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('T max<T extends num>(T x, T y) => x < y ? y : x;
            await this.computeAnalysisResult(source);
            this._expectInferenceError(source,new core.DartList.literal(StrongModeCode.COULD_NOT_INFER,StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE),'Couldn\'t infer type parameter \'T\'.
        } )());
    }

    test_inference_error_returnContext() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef R F<T, R>(T t);
            await this.computeAnalysisResult(source);
            this._expectInferenceError(source,new core.DartList.literal(StrongModeCode.COULD_NOT_INFER),'Couldn\'t infer type parameter \'T\'.
        } )());
    }

    test_inference_hints() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('      void main () {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_inferGenericInstantiation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source = this.addSource('T f<T>(T x(T t)) => x(null);
            let analysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit = analysisResult.unit;
            let h = op(Op.INDEX,(lib4.AstFinder.getStatementsInTopLevelFunction(unit,"test")[0] as any).variables.variables,0);
            this._isDynamic(h.element.type);
            let fCall = h.initializer as any;
            expect(fCall.staticInvokeType.toString(),'((dynamic) → dynamic) → dynamic');
            let g = op(Op.INDEX,fCall.argumentList.arguments,0);
            expect(g.staticType.toString(),'(dynamic) → dynamic');
        } )());
    }

    test_inferGenericInstantiation2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source = this.addSource('T max<T extends num>(T x, T y) => x < y ? y : x;
            let analysisResult = await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StrongModeCode.COULD_NOT_INFER,StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
            let unit = analysisResult.unit;
            let fold = (lib4.AstFinder.getTopLevelFunction(unit,'test').functionExpression.body as any).expression as any;
            expect(fold.staticInvokeType.toString(),'(num, (num, dynamic) → num) → num');
            let max = op(Op.INDEX,fold.argumentList.arguments,1);
            expect(max.staticType.toString(),'(dynamic, dynamic) → dynamic');
        } )());
    }

    test_inferredFieldDeclaration_propagation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      abstract class A {
            let unit : any = await this.resolveSource(code);
            let assertListOfInt : <T>(type : any) => void = this._isListOf(this._isInt);
            let assertMapOfIntToListOfInt : <T>(type : any) => void = this._isMapOf(this._isInt,(type : any) =>  {
                return assertListOfInt(type);
            });
            let mapB : any = lib4.AstFinder.getFieldInClass(unit,"B","map");
            let mapC : any = lib4.AstFinder.getMethodInClass(unit,"C","map");
            assertMapOfIntToListOfInt(resolutionMap.elementDeclaredByVariableDeclaration(mapB).type);
            assertMapOfIntToListOfInt(resolutionMap.elementDeclaredByMethodDeclaration(mapC).returnType);
            let mapLiteralB : any = mapB.initializer;
            let mapLiteralC : any = (mapC.body as any).expression;
            assertMapOfIntToListOfInt(mapLiteralB.staticType);
            assertMapOfIntToListOfInt(mapLiteralC.staticType);
            let listLiteralB : any = op(Op.INDEX,mapLiteralB.entries,0).value;
            let listLiteralC : any = op(Op.INDEX,mapLiteralC.entries,0).value;
            assertListOfInt(listLiteralB.staticType);
            assertListOfInt(listLiteralC.staticType);
        } )());
    }

    test_instanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      class A<S, T> {
            let unit : any = await this.resolveSource(code);
            var rhs : (stmt : any) => any = (stmt : any) : any =>  {
                let decl : any = op(Op.INDEX,stmt.variables.variables,0);
                let exp : any = decl.initializer;
                return exp;
            };
            var hasType : (assertion : <T>(type : any) => void,exp : any) => void = (assertion : <T>(type : any) => void,exp : any) : void =>  {
                return assertion(exp.staticType);
            };
            let elementA : any = lib4.AstFinder.getClass(unit,"A").element;
            let elementB : any = lib4.AstFinder.getClass(unit,"B").element;
            let elementC : any = lib4.AstFinder.getClass(unit,"C").element;
            let elementD : any = lib4.AstFinder.getClass(unit,"D").element;
            let elementE : any = lib4.AstFinder.getClass(unit,"E").element;
            let elementF : any = lib4.AstFinder.getClass(unit,"F").element;
            let assertAOf : <S,T>(arg : core.DartList<<T>(type : any) => void>) => <T>(type : any) => void = this._isInstantiationOf(this._hasElement(elementA));
            let assertBOf : <S,T>(arg : core.DartList<<T>(type : any) => void>) => <T>(type : any) => void = this._isInstantiationOf(this._hasElement(elementB));
            let assertCOf : <S,T>(arg : core.DartList<<T>(type : any) => void>) => <T>(type : any) => void = this._isInstantiationOf(this._hasElement(elementC));
            let assertDOf : <S,T>(arg : core.DartList<<T>(type : any) => void>) => <T>(type : any) => void = this._isInstantiationOf(this._hasElement(elementD));
            let assertEOf : <S,T>(arg : core.DartList<<T>(type : any) => void>) => <T>(type : any) => void = this._isInstantiationOf(this._hasElement(elementE));
            let assertFOf : <S,T>(arg : core.DartList<<T>(type : any) => void>) => <T>(type : any) => void = this._isInstantiationOf(this._hasElement(elementF));
            {
                let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"test0");
                hasType(assertAOf(new core.DartList.literal(this._isInt,this._isString)),rhs(statements[0]));
                hasType(assertAOf(new core.DartList.literal(this._isInt,this._isString)),rhs(statements[0]));
                hasType(assertAOf(new core.DartList.literal(this._isInt,this._isString)),rhs(statements[1]));
                hasType(assertAOf(new core.DartList.literal(this._isInt,this._isString)),rhs(statements[2]));
                hasType(assertAOf(new core.DartList.literal(this._isInt,this._isString)),rhs(statements[3]));
                hasType(assertAOf(new core.DartList.literal(this._isInt,this._isDynamic)),rhs(statements[4]));
                hasType(assertAOf(new core.DartList.literal(this._isDynamic,this._isDynamic)),rhs(statements[5]));
            }
            {
                let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"test1");
                hasType(assertAOf(new core.DartList.literal(this._isInt,this._isString)),rhs(statements[0]));
                hasType(assertAOf(new core.DartList.literal(this._isInt,this._isString)),rhs(statements[1]));
            }
            {
                let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"test2");
                hasType(assertBOf(new core.DartList.literal(this._isString,this._isInt)),rhs(statements[0]));
                hasType(assertBOf(new core.DartList.literal(this._isString,this._isInt)),rhs(statements[1]));
                hasType(assertBOf(new core.DartList.literal(this._isString,this._isInt)),rhs(statements[2]));
                hasType(assertBOf(new core.DartList.literal(this._isString,this._isInt)),rhs(statements[3]));
                hasType(assertBOf(new core.DartList.literal(this._isString,this._isDynamic)),rhs(statements[4]));
                hasType(assertBOf(new core.DartList.literal(this._isDynamic,this._isDynamic)),rhs(statements[5]));
            }
            {
                let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"test3");
                hasType(assertBOf(new core.DartList.literal(this._isString,this._isInt)),rhs(statements[0]));
                hasType(assertBOf(new core.DartList.literal(this._isString,this._isInt)),rhs(statements[1]));
            }
            {
                let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"test4");
                hasType(assertCOf(new core.DartList.literal(this._isInt)),rhs(statements[0]));
                hasType(assertCOf(new core.DartList.literal(this._isInt)),rhs(statements[1]));
                hasType(assertCOf(new core.DartList.literal(this._isInt)),rhs(statements[2]));
                hasType(assertCOf(new core.DartList.literal(this._isInt)),rhs(statements[3]));
                hasType(assertCOf(new core.DartList.literal(this._isDynamic)),rhs(statements[4]));
                hasType(assertCOf(new core.DartList.literal(this._isDynamic)),rhs(statements[5]));
            }
            {
                let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"test5");
                hasType(assertCOf(new core.DartList.literal(this._isInt)),rhs(statements[0]));
                hasType(assertCOf(new core.DartList.literal(this._isInt)),rhs(statements[1]));
            }
            {
                let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"test6");
                hasType(assertDOf(new core.DartList.literal(this._isDynamic,this._isString)),rhs(statements[0]));
                hasType(assertDOf(new core.DartList.literal(this._isDynamic,this._isString)),rhs(statements[1]));
                hasType(assertDOf(new core.DartList.literal(this._isInt,this._isString)),rhs(statements[2]));
                hasType(assertDOf(new core.DartList.literal(this._isString,this._isString)),rhs(statements[3]));
                hasType(assertDOf(new core.DartList.literal(this._isNum,this._isDynamic)),rhs(statements[4]));
                hasType(assertDOf(new core.DartList.literal(this._isDynamic,this._isDynamic)),rhs(statements[5]));
            }
            {
                let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"test7");
                hasType(assertDOf(new core.DartList.literal(this._isDynamic,this._isString)),rhs(statements[0]));
                hasType(assertDOf(new core.DartList.literal(this._isDynamic,this._isString)),rhs(statements[1]));
            }
            {
                let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"test8");
                hasType(assertEOf(new core.DartList.literal(this._isInt,this._isString)),rhs(statements[0]));
            }
            {
                let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"test9");
                hasType(assertFOf(new core.DartList.literal(this._isInt,this._isString)),rhs(statements[0]));
                hasType(assertFOf(new core.DartList.literal(this._isInt,this._isString)),rhs(statements[1]));
                hasType(assertFOf(new core.DartList.literal(this._isInt,this._isString)),rhs(statements[2]));
                hasType(assertFOf(new core.DartList.literal(this._isInt,this._isString)),rhs(statements[3]));
                hasType(assertFOf(new core.DartList.literal(this._isInt,this._isString)),rhs(statements[4]));
                hasType(assertFOf(new core.DartList.literal(this._isInt,this._isString)),rhs(statements[5]));
            }
        } )());
    }

    test_listLiteral_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      void main () {
            let unit : any = await this.resolveSource(code);
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"main");
            var literal : (i : number) => any = (i : number) : any =>  {
                let stmt : any = statements[i];
                let decl : any = op(Op.INDEX,stmt.variables.variables,0);
                let exp : any = decl.initializer;
                return exp;
            };
            let assertListOfInt : <T>(type : any) => void = this._isListOf(this._isInt);
            let assertListOfListOfInt : <T>(type : any) => void = this._isListOf((type : any) =>  {
                return assertListOfInt(type);
            });
            assertListOfListOfInt(literal(0).staticType);
            assertListOfListOfInt(literal(1).staticType);
            assertListOfListOfInt(literal(2).staticType);
            assertListOfListOfInt(literal(3).staticType);
            assertListOfInt(op(Op.INDEX,literal(1).elements,0).staticType);
            assertListOfInt(op(Op.INDEX,literal(2).elements,0).staticType);
            assertListOfInt(op(Op.INDEX,literal(3).elements,0).staticType);
        } )());
    }

    test_listLiteral_simple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      void main () {
            let unit : any = await this.resolveSource(code);
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"main");
            var literal : (i : number) => any = (i : number) : any =>  {
                let stmt : any = statements[i];
                let decl : any = op(Op.INDEX,stmt.variables.variables,0);
                let exp : any = decl.initializer;
                return exp.staticType;
            };
            let assertListOfInt : <T>(type : any) => void = this._isListOf(this._isInt);
            assertListOfInt(literal(0));
            assertListOfInt(literal(1));
            assertListOfInt(literal(2));
            assertListOfInt(literal(3));
        } )());
    }

    test_listLiteral_simple_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      void main () {
            let unit : any = await this.resolveSource(code);
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"main");
            var literal : (i : number) => any = (i : number) : any =>  {
                let stmt : any = statements[i];
                let decl : any = op(Op.INDEX,stmt.variables.variables,0);
                let exp : any = decl.initializer;
                return exp.staticType;
            };
            let assertListOfInt : <T>(type : any) => void = this._isListOf(this._isInt);
            assertListOfInt(literal(0));
            assertListOfInt(literal(1));
            assertListOfInt(literal(2));
            assertListOfInt(literal(3));
        } )());
    }

    test_listLiteral_simple_disabled() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      void main () {
            let unit : any = await this.resolveSource(code);
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"main");
            var literal : (i : number) => any = (i : number) : any =>  {
                let stmt : any = statements[i];
                let decl : any = op(Op.INDEX,stmt.variables.variables,0);
                let exp : any = decl.initializer;
                return exp.staticType;
            };
            (this._isListOf(this._isNum))(literal(0));
            (this._isListOf(this._isNum))(literal(1));
            (this._isListOf(this._isString))(literal(2));
            (this._isListOf(this._isDynamic))(literal(3));
        } )());
    }

    test_listLiteral_simple_subtype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      void main () {
            let unit : any = await this.resolveSource(code);
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"main");
            var literal : (i : number) => any = (i : number) : any =>  {
                let stmt : any = statements[i];
                let decl : any = op(Op.INDEX,stmt.variables.variables,0);
                let exp : any = decl.initializer;
                return exp.staticType;
            };
            let assertListOfInt : <T>(type : any) => void = this._isListOf(this._isInt);
            assertListOfInt(literal(0));
            assertListOfInt(literal(1));
            assertListOfInt(literal(2));
            assertListOfInt(literal(3));
        } )());
    }

    test_mapLiteral_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      void main () {
            let unit : any = await this.resolveSource(code);
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"main");
            var literal : (i : number) => any = (i : number) : any =>  {
                let stmt : any = statements[i];
                let decl : any = op(Op.INDEX,stmt.variables.variables,0);
                let exp : any = decl.initializer;
                return exp;
            };
            let assertListOfString : <T>(type : any) => void = this._isListOf(this._isString);
            let assertMapOfIntToListOfString : <T>(type : any) => void = this._isMapOf(this._isInt,(type : any) =>  {
                return assertListOfString(type);
            });
            assertMapOfIntToListOfString(literal(0).staticType);
            assertMapOfIntToListOfString(literal(1).staticType);
            assertMapOfIntToListOfString(literal(2).staticType);
            assertMapOfIntToListOfString(literal(3).staticType);
            assertMapOfIntToListOfString(literal(4).staticType);
            assertListOfString(op(Op.INDEX,literal(1).entries,0).value.staticType);
            assertListOfString(op(Op.INDEX,literal(2).entries,0).value.staticType);
            assertListOfString(op(Op.INDEX,literal(3).entries,0).value.staticType);
            assertListOfString(op(Op.INDEX,literal(4).entries,0).value.staticType);
        } )());
    }

    test_mapLiteral_simple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      void main () {
            let unit : any = await this.resolveSource(code);
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"main");
            var literal : (i : number) => any = (i : number) : any =>  {
                let stmt : any = statements[i];
                let decl : any = op(Op.INDEX,stmt.variables.variables,0);
                let exp : any = decl.initializer;
                return exp.staticType;
            };
            let assertMapOfIntToString : <T>(type : any) => void = this._isMapOf(this._isInt,this._isString);
            assertMapOfIntToString(literal(0));
            assertMapOfIntToString(literal(1));
            assertMapOfIntToString(literal(2));
            assertMapOfIntToString(literal(3));
        } )());
    }

    test_mapLiteral_simple_disabled() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      void main () {
            let unit : any = await this.resolveSource(code);
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(unit,"main");
            var literal : (i : number) => any = (i : number) : any =>  {
                let stmt : any = statements[i];
                let decl : any = op(Op.INDEX,stmt.variables.variables,0);
                let exp : any = decl.initializer;
                return exp.staticType;
            };
            let assertMapOfIntToDynamic : <T>(type : any) => void = this._isMapOf(this._isInt,this._isDynamic);
            assertMapOfIntToDynamic(literal(0));
            assertMapOfIntToDynamic(literal(1));
            assertMapOfIntToDynamic(literal(2));
            assertMapOfIntToDynamic(literal(3));
        } )());
    }

    test_methodDeclaration_body_propagation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      class A {
            let unit : any = await this.resolveSource(code);
            var methodReturnValue : (methodName : string) => any = (methodName : string) : any =>  {
                let method : any = lib4.AstFinder.getMethodInClass(unit,"A",methodName);
                let body : any = method.body;
                if (is(body, any)) {
                    return body.expression;
                }else {
                    let stmt : any = op(Op.INDEX,(body as any).block.statements,0);
                    return (stmt as any).expression;
                }
            };
            let assertListOfString : <T>(type : any) => void = this._isListOf(this._isString);
            assertListOfString(methodReturnValue("m0").staticType);
            assertListOfString(methodReturnValue("m1").staticType);
        } )());
    }

    test_partialTypes1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    typedef To Func1<From, To>(From x);
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let test : any = lib4.AstFinder.getTopLevelFunction(unit,"test");
            let body : any = test.functionExpression.body;
            this._isString(body.expression.staticType);
            let invoke : any = body.expression;
            let function : any = op(Op.INDEX,invoke.argumentList.arguments,0);
            let f0 : any = function.element;
            let type : any = f0.type;
            (this._isFunction2Of(this._isString,this._isInt))(type);
        } )());
    }

    test_pinning_multipleConstraints1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    class A<S, T> {
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StrongModeCode.INVALID_CAST_LITERAL));
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let test : any = lib4.AstFinder.getTopLevelFunction(unit,"test");
            let body : any = test.functionExpression.body;
            let type : any = body.expression.staticType;
            let elementB : any = lib4.AstFinder.getClass(unit,"B").element;
            ((this._isInstantiationOf(this._hasElement(elementB)))(new core.DartList.literal(this._isNull)))(type);
        } )());
    }

    test_pinning_multipleConstraints2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    class A<S, T> {
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let test : any = lib4.AstFinder.getTopLevelFunction(unit,"test");
            let body : any = test.functionExpression.body;
            let type : any = body.expression.staticType;
            let elementB : any = lib4.AstFinder.getClass(unit,"B").element;
            ((this._isInstantiationOf(this._hasElement(elementB)))(new core.DartList.literal(this._isNum)))(type);
        } )());
    }

    test_pinning_multipleConstraints3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    class A<S, T> {
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StrongModeCode.INVALID_CAST_LITERAL));
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let test : any = lib4.AstFinder.getTopLevelFunction(unit,"test");
            let body : any = test.functionExpression.body;
            let type : any = body.expression.staticType;
            let elementB : any = lib4.AstFinder.getClass(unit,"B").element;
            ((this._isInstantiationOf(this._hasElement(elementB)))(new core.DartList.literal(this._isNull)))(type);
        } )());
    }

    test_pinning_multipleConstraints4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    class A<S, T> {
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let test : any = lib4.AstFinder.getTopLevelFunction(unit,"test");
            let body : any = test.functionExpression.body;
            let type : any = body.expression.staticType;
            let elementB : any = lib4.AstFinder.getClass(unit,"B").element;
            ((this._isInstantiationOf(this._hasElement(elementB)))(new core.DartList.literal(this._isInt)))(type);
        } )());
    }

    test_pinning_multipleConstraints_contravariant1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    class A<S, T> {
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let test : any = lib4.AstFinder.getTopLevelFunction(unit,"test");
            let body : any = test.functionExpression.body;
            let functionType : any = body.expression.staticType;
            let type : any = op(Op.INDEX,functionType.normalParameterTypes,0);
            let elementA : any = lib4.AstFinder.getClass(unit,"A").element;
            ((this._isInstantiationOf(this._hasElement(elementA)))(new core.DartList.literal(this._isObject,this._isObject)))(type);
        } )());
    }

    test_pinning_multipleConstraints_contravariant2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    class A<S, T> {
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let test : any = lib4.AstFinder.getTopLevelFunction(unit,"test");
            let body : any = test.functionExpression.body;
            let functionType : any = body.expression.staticType;
            let type : any = op(Op.INDEX,functionType.normalParameterTypes,0);
            let elementA : any = lib4.AstFinder.getClass(unit,"A").element;
            ((this._isInstantiationOf(this._hasElement(elementA)))(new core.DartList.literal(this._isNum,this._isNum)))(type);
        } )());
    }

    test_pinning_multipleConstraints_contravariant3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    class A<S, T> {
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let test : any = lib4.AstFinder.getTopLevelFunction(unit,"test");
            let body : any = test.functionExpression.body;
            let functionType : any = body.expression.staticType;
            let type : any = op(Op.INDEX,functionType.normalParameterTypes,0);
            let elementA : any = lib4.AstFinder.getClass(unit,"A").element;
            ((this._isInstantiationOf(this._hasElement(elementA)))(new core.DartList.literal(this._isNum,this._isNum)))(type);
        } )());
    }

    test_pinning_multipleConstraints_contravariant4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    class A<S, T> {
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let test : any = lib4.AstFinder.getTopLevelFunction(unit,"test");
            let body : any = test.functionExpression.body;
            let functionType : any = body.expression.staticType;
            let type : any = op(Op.INDEX,functionType.normalParameterTypes,0);
            let elementA : any = lib4.AstFinder.getClass(unit,"A").element;
            ((this._isInstantiationOf(this._hasElement(elementA)))(new core.DartList.literal(this._isNum,this._isNum)))(type);
        } )());
    }

    test_redirectingConstructor_propagation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      class A {
            let unit : any = await this.resolveSource(code);
            let constructor : any = lib4.AstFinder.getConstructorInClass(unit,"A",null);
            let invocation : any = op(Op.INDEX,constructor.initializers,0);
            let exp : any = op(Op.INDEX,invocation.argumentList.arguments,0);
            (this._isListOf(this._isString))(exp.staticType);
        } )());
    }

    test_returnType_variance1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    typedef To Func1<From, To>(From x);
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let test : any = lib4.AstFinder.getTopLevelFunction(unit,"test");
            let body : any = test.functionExpression.body;
            let invoke : any = body.expression;
            (this._isFunction2Of(this._isNum,this._isFunction2Of(this._isNum,this._isString)))(invoke.staticInvokeType);
        } )());
    }

    test_returnType_variance2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    typedef To Func1<From, To>(From x);
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let test : any = lib4.AstFinder.getTopLevelFunction(unit,"test");
            let body : any = test.functionExpression.body;
            let invoke : any = body.expression;
            (this._isFunction2Of(this._isNum,this._isFunction2Of(this._isString,this._isNum)))(invoke.staticInvokeType);
        } )());
    }

    test_returnType_variance3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    typedef To Func1<From, To>(From x);
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let test : any = lib4.AstFinder.getTopLevelFunction(unit,"test");
            let body : any = test.functionExpression.body;
            let functionType : any = body.expression.staticType;
            let type : any = op(Op.INDEX,functionType.normalParameterTypes,0);
            this._isInt(type);
        } )());
    }

    test_returnType_variance4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    typedef To Func1<From, To>(From x);
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let test : any = lib4.AstFinder.getTopLevelFunction(unit,"test");
            let body : any = test.functionExpression.body;
            let functionType : any = body.expression.staticType;
            let type : any = functionType.returnType;
            this._isInt(type);
        } )());
    }

    test_returnType_variance5() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    typedef To Func1<From, To>(From x);
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let test : any = lib4.AstFinder.getTopLevelFunction(unit,"test");
            let body : any = test.functionExpression.body;
            let call : any = body.expression;
            this._isNum(call.staticType);
            (this._isFunction2Of(this._isFunction2Of(this._isNum,this._isString),this._isNum))(call.staticInvokeType);
        } )());
    }

    test_returnType_variance6() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    typedef To Func1<From, To>(From x);
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let test : any = lib4.AstFinder.getTopLevelFunction(unit,"test");
            let body : any = test.functionExpression.body;
            let call : any = body.expression;
            this._isNum(call.staticType);
            (this._isFunction2Of(this._isFunction2Of(this._isString,this._isNum),this._isNum))(call.staticInvokeType);
        } )());
    }

    test_superConstructorInvocation_propagation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      class B {
            let unit : any = await this.resolveSource(code);
            let constructor : any = lib4.AstFinder.getConstructorInClass(unit,"A",null);
            let invocation : any = op(Op.INDEX,constructor.initializers,0);
            let exp : any = op(Op.INDEX,invocation.argumentList.arguments,0);
            (this._isListOf(this._isString))(exp.staticType);
        } )());
    }

    test_sync_star_method_propagation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      import "dart:async";
            let unit : any = await this.resolveSource(code);
            var check : (name : string,typeTest : <T>(type : any) => void) => void = (name : string,typeTest : <T>(type : any) => void) : void =>  {
                let test : any = lib4.AstFinder.getMethodInClass(unit,"A",name);
                let body : any = test.body;
                let stmt : any = op(Op.INDEX,body.block.statements,0);
                let exp : any = stmt.expression;
                typeTest(exp.staticType);
            };
            check("f0",this._isListOf(this._isDynamic));
            check("f1",this._isListOf(this._isDynamic));
            check("f2",this._isListOf(this._isInt));
            check("f3",this._isListOf((type : any) =>  {
                return (this._isListOf(this._isInt))(type);
            }));
        } )());
    }

    test_sync_star_propagation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '      import "dart:async";
            let unit : any = await this.resolveSource(code);
            var check : (name : string,typeTest : <T>(type : any) => void) => void = (name : string,typeTest : <T>(type : any) => void) : void =>  {
                let test : any = lib4.AstFinder.getTopLevelFunction(unit,name);
                let body : any = test.functionExpression.body;
                let stmt : any = op(Op.INDEX,body.block.statements,0);
                let exp : any = stmt.expression;
                typeTest(exp.staticType);
            };
            check("f0",this._isListOf(this._isDynamic));
            check("f1",this._isListOf(this._isDynamic));
            check("f2",this._isListOf(this._isInt));
            check("f3",this._isListOf((type : any) =>  {
                return (this._isListOf(this._isInt))(type);
            }));
        } )());
    }

    _expectInferenceError(source : any,errorCodes : core.DartList<any>,errorMessage : string) : void {
        this.assertErrors(source,errorCodes);
        let errors = this.analysisResults.get(source).errors.where((e : any) =>  {
            return op(Op.EQUALS,e.errorCode,StrongModeCode.COULD_NOT_INFER);
        }).map((e : any) =>  {
            return e.message;
        }).toList();
        expect(errors.length,1);
        let actual = errors[0];
        expect(actual,errorMessage,{
            reason : `Actual error did not match expected error:\n${actual}`});
    }
    _testFutureOr(code : string,_namedArguments? : {errors? : core.DartList<any>}) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let {errors} = Object.assign({
            }, _namedArguments );
            let source : any = this.addSource(`    import "dart:async";
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            if (errors == null) {
                this.assertNoErrors(source);
            }else {
                this.assertErrors(source,errors);
            }
            this.verify(new core.DartList.literal(source));
            let test : any = lib4.AstFinder.getTopLevelFunction(analysisResult.unit,"test");
            let body : any = test.functionExpression.body;
            return body.expression;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StrongModeLocalInferenceTest() {
    }
}

export namespace StrongModeStaticTypeAnalyzer2Test {
    export type Constructors = lib3.StaticTypeAnalyzer2TestShared.Constructors | 'StrongModeStaticTypeAnalyzer2Test';
    export type Interface = Omit<StrongModeStaticTypeAnalyzer2Test, Constructors>;
}
@DartClass
export class StrongModeStaticTypeAnalyzer2Test extends lib3.StaticTypeAnalyzer2TestShared {
    expectStaticInvokeType(search : string,type : string) : void {
        let invocation = this.findIdentifier(search).parent as any;
        expect(invocation.staticInvokeType.toString(),type);
    }
    fail_futureOr_promotion4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    import "dart:async";
            await this.resolveTestUnit(code);
        } )());
    }

    fail_genericMethod_tearoff_instantiated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C<E> {
            this.expectIdentifierType('methodTearOffInst',"(int) → int");
            this.expectIdentifierType('staticTearOffInst',"(int) → int");
            this.expectIdentifierType('staticFieldTearOffInst',"(int) → int");
            this.expectIdentifierType('topFunTearOffInst',"(int) → int");
            this.expectIdentifierType('topFieldTearOffInst',"(int) → int");
            this.expectIdentifierType('localTearOffInst',"(int) → int");
            this.expectIdentifierType('paramTearOffInst',"(int) → int");
        } )());
    }

    setUp() : void {
        super.setUp();
        let options : any = new bare.createInstance(any,null);
        options.strongMode = true;
        this.resetWith({
            options : options});
    }
    test_dynamicObjectGetter_hashCode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {
            await this.resolveTestUnit(code);
            this.expectInitializerType('foo','int',isNull);
        } )());
    }

    test_dynamicObjectMethod_toString() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {
            await this.resolveTestUnit(code);
            this.expectInitializerType('foo','String',isNull);
        } )());
    }

    test_futureOr_promotion1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    import "dart:async";
            await this.resolveTestUnit(code);
        } )());
    }

    test_futureOr_promotion2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    import "dart:async";
            await this.resolveTestUnit(code);
        } )());
    }

    test_futureOr_promotion4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '    import "dart:async";
            await this.resolveTestUnit(code);
        } )());
    }

    test_genericFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('/*=T*/ f/*<T>*/(/*=T*/ x) => null;');
            this.expectFunctionType('f','<T>(T) → T',{
                elementTypeParams : '[T]',typeFormals : '[T]'});
            let f : any = this.findIdentifier('f');
            let e : any = f.staticElement;
            let ft : any = e.type.instantiate(new core.DartList.literal(this.typeProvider.stringType));
            expect(ft.toString(),'(String) → String');
        } )());
    }

    test_genericFunction_bounds() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('/*=T*/ f/*<T extends num>*/(/*=T*/ x) => null;');
            this.expectFunctionType('f','<T extends num>(T) → T',{
                elementTypeParams : '[T extends num]',typeFormals : '[T extends num]'});
        } )());
    }

    test_genericFunction_parameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('void g(/*=T*/ f/*<T>*/(/*=T*/ x)) {}
                noErrors : false});
            this.expectFunctionType('f','<T>(T) → T',{
                elementTypeParams : '[T]',typeFormals : '[T]'});
            let f : any = this.findIdentifier('f');
            let e : any = f.staticElement;
            let type : any = e.type;
            let ft : any = type.instantiate(new core.DartList.literal(this.typeProvider.stringType));
            expect(ft.toString(),'(String) → String');
        } )());
    }

    test_genericFunction_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C<E> {
            this.expectFunctionType('f','<T>(T) → T',{
                elementTypeParams : '[T]',typeFormals : '[T]'});
            let f : any = this.findIdentifier('f');
            let e : any = f.staticElement;
            let ft : any = e.type.instantiate(new core.DartList.literal(this.typeProvider.stringType));
            expect(ft.toString(),'(String) → String');
        } )());
    }

    test_genericFunction_typedef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'typedef T F<T>(T x);
            await this.resolveTestUnit(code);
            var checkBody : (className : string) => any = (className : string) =>  {
                let statements : core.DartList<any> = lib4.AstFinder.getStatementsInMethod(this.testUnit,className,"g");
                for(let i : number = 1; i <= 5; i++){
                    let exp : any = (statements[i] as any).expression;
                    expect(exp.staticType,this.typeProvider.dynamicType);
                }
            };
            checkBody("C");
            checkBody("D");
        } )());
    }

    test_genericFunction_upwardsAndDownwards() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('List<num> x = [1, 2];');
            this.expectInitializerType('x','List<num>');
        } )());
    }

    test_genericFunction_upwardsAndDownwards_Object() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('List<Object> aaa = [];
            this.expectInitializerType('aaa','List<Object>');
            this.expectInitializerType('bbb','List<Object>');
            this.expectInitializerType('ccc','List<Object>');
            this.expectInitializerType('ddd','List<Object>');
            this.expectInitializerType('eee','List<Object>');
        } )());
    }

    test_genericMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C<E> {
            this.expectFunctionType('f','<T>(E) → List<T>',{
                elementTypeParams : '[T]',typeParams : '[E]',typeArgs : '[E]',typeFormals : '[T]'});
            let c : any = this.findIdentifier('cOfString');
            let ft : any = (c.staticType as any).getMethod('f').type;
            expect(ft.toString(),'<T>(String) → List<T>');
            ft = ft.instantiate(new core.DartList.literal(this.typeProvider.intType));
            expect(ft.toString(),'(String) → List<int>');
            expect(`${ft.typeArguments}/${ft.typeParameters}`,'[String, int]/[E, T]');
        } )());
    }

    test_genericMethod_explicitTypeParams() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C<E> {
            let f : any = this.findIdentifier('f/*<int>*/').parent;
            let ft : any = f.staticInvokeType;
            expect(ft.toString(),'(String) → List<int>');
            expect(`${ft.typeArguments}/${ft.typeParameters}`,'[String, int]/[E, T]');
            let x : any = this.findIdentifier('x');
            expect(x.staticType,this.typeProvider.listType.instantiate(new core.DartList.literal(this.typeProvider.intType)));
        } )());
    }

    test_genericMethod_functionExpressionInvocation_explicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C<E> {
                noErrors : false});
            this.expectIdentifierType('methodCall',"int");
            this.expectIdentifierType('staticCall',"int");
            this.expectIdentifierType('staticFieldCall',"int");
            this.expectIdentifierType('topFunCall',"int");
            this.expectIdentifierType('topFieldCall',"int");
            this.expectIdentifierType('localCall',"int");
            this.expectIdentifierType('paramCall',"int");
            this.expectIdentifierType('lambdaCall',"int");
        } )());
    }

    test_genericMethod_functionExpressionInvocation_inferred() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C<E> {
                noErrors : false});
            this.expectIdentifierType('methodCall',"int");
            this.expectIdentifierType('staticCall',"int");
            this.expectIdentifierType('staticFieldCall',"int");
            this.expectIdentifierType('topFunCall',"int");
            this.expectIdentifierType('topFieldCall',"int");
            this.expectIdentifierType('localCall',"int");
            this.expectIdentifierType('paramCall',"int");
            this.expectIdentifierType('lambdaCall',"int");
        } )());
    }

    test_genericMethod_functionInvocation_explicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C<E> {
                noErrors : false});
            this.expectIdentifierType('methodCall',"int");
            this.expectIdentifierType('staticCall',"int");
            this.expectIdentifierType('staticFieldCall',"int");
            this.expectIdentifierType('topFunCall',"int");
            this.expectIdentifierType('topFieldCall',"int");
            this.expectIdentifierType('localCall',"int");
            this.expectIdentifierType('paramCall',"int");
        } )());
    }

    test_genericMethod_functionInvocation_inferred() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C<E> {
                noErrors : false});
            this.expectIdentifierType('methodCall',"int");
            this.expectIdentifierType('staticCall',"int");
            this.expectIdentifierType('staticFieldCall',"int");
            this.expectIdentifierType('topFunCall',"int");
            this.expectIdentifierType('topFieldCall',"int");
            this.expectIdentifierType('localCall',"int");
            this.expectIdentifierType('paramCall',"int");
        } )());
    }

    test_genericMethod_functionTypedParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C<E> {
            this.expectFunctionType('f','<T>((E) → T) → List<T>',{
                elementTypeParams : '[T]',typeParams : '[E]',typeArgs : '[E]',typeFormals : '[T]'});
            let c : any = this.findIdentifier('cOfString');
            let ft : any = (c.staticType as any).getMethod('f').type;
            expect(ft.toString(),'<T>((String) → T) → List<T>');
            ft = ft.instantiate(new core.DartList.literal(this.typeProvider.intType));
            expect(ft.toString(),'((String) → int) → List<int>');
        } )());
    }

    test_genericMethod_implicitDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class List<E> {
            this.expectIdentifierType('map((e) => e);','<T>((dynamic) → T) → T',isNull);
            this.expectIdentifierType('map((e) => 3);','<T>((dynamic) → T) → T',isNull);
            let m1 : any = this.findIdentifier('map((e) => e);').parent;
            expect(m1.staticInvokeType.toString(),'((dynamic) → dynamic) → dynamic');
            let m2 : any = this.findIdentifier('map((e) => 3);').parent;
            expect(m2.staticInvokeType.toString(),'((dynamic) → int) → int');
        } )());
    }

    test_genericMethod_max_doubleDouble() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'import \'dart:math\';
            await this.resolveTestUnit(code);
            this.expectInitializerType('foo','double',isNull);
        } )());
    }

    test_genericMethod_max_doubleDouble_prefixed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'import \'dart:math\' as math;
            await this.resolveTestUnit(code);
            this.expectInitializerType('foo','double',isNull);
        } )());
    }

    test_genericMethod_max_doubleInt() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'import \'dart:math\';
            await this.resolveTestUnit(code);
            this.expectInitializerType('foo','num',isNull);
        } )());
    }

    test_genericMethod_max_intDouble() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'import \'dart:math\';
            await this.resolveTestUnit(code);
            this.expectInitializerType('foo','num',isNull);
        } )());
    }

    test_genericMethod_max_intInt() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'import \'dart:math\';
            await this.resolveTestUnit(code);
            this.expectInitializerType('foo','int',isNull);
        } )());
    }

    test_genericMethod_nestedBound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class Foo<T extends num> {
            await this.resolveTestUnit(code);
        } )());
    }

    test_genericMethod_nestedCapture() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C<T> {
            let f : any = this.findIdentifier('f/*<int>*/(3);').parent;
            expect(f.staticInvokeType.toString(),'(int) → S');
            let ft : any = f.staticInvokeType;
            expect(`${ft.typeArguments}/${ft.typeParameters}`,'[S, int]/[T, S]');
            this.expectIdentifierType('f;','<S₀>(S₀) → S');
        } )());
    }

    test_genericMethod_nestedFunctions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('/*=S*/ f/*<S>*/(/*=S*/ x) {
            this.expectIdentifierType('f','<S>(S) → S');
            this.expectIdentifierType('g','<S>(S) → <S>(S) → S');
        } )());
    }

    test_genericMethod_override() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C {
            this.expectFunctionType('f/*<T>*/(/*=T*/ x) => null; // from D','<T>(T) → T',{
                elementTypeParams : '[T]',typeFormals : '[T]'});
            let f : any = this.findIdentifier('f/*<T>*/(/*=T*/ x) => null; // from D');
            let e : any = f.staticElement;
            let ft : any = e.type.instantiate(new core.DartList.literal(this.typeProvider.stringType));
            expect(ft.toString(),'(String) → String');
        } )());
    }

    test_genericMethod_override_bounds() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {}
        } )());
    }

    test_genericMethod_override_covariant_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_genericMethod_override_invalidReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StrongModeCode.INVALID_METHOD_OVERRIDE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_genericMethod_override_invalidTypeParamBounds() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StrongModeCode.INVALID_METHOD_OVERRIDE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_genericMethod_override_invalidTypeParamCount() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StrongModeCode.INVALID_METHOD_OVERRIDE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_genericMethod_propagatedType_promotion() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('abstract class Iter {
            this.expectIdentifierType('y = ','List<C>',isNull);
        } )());
    }

    test_genericMethod_tearoff() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C<E> {
                noErrors : false});
            this.expectIdentifierType('methodTearOff',"<T>(int) → T");
            this.expectIdentifierType('staticTearOff',"<T>(T) → T");
            this.expectIdentifierType('staticFieldTearOff',"<T>(T) → T");
            this.expectIdentifierType('topFunTearOff',"<T>(T) → T");
            this.expectIdentifierType('topFieldTearOff',"<T>(T) → T");
            this.expectIdentifierType('localTearOff',"<T>(T) → T");
            this.expectIdentifierType('paramTearOff',"<T>(T) → T");
        } )());
    }

    test_genericMethod_then() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'import \'dart:async\';
            await this.resolveTestUnit(code);
            this.expectInitializerType('foo','Future<String>',isNull);
        } )());
    }

    test_genericMethod_then_prefixed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'import \'dart:async\' as async;
            await this.resolveTestUnit(code);
            this.expectInitializerType('foo','Future<String>',isNull);
        } )());
    }

    test_genericMethod_then_propagatedType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'import \'dart:async\';
            await this.resolveTestUnit(code);
            this.expectInitializerType('foo','Future<String>',isNull);
        } )());
    }

    test_implicitBounds() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class A<T> {}
            await this.resolveTestUnit(code);
            this.expectIdentifierType('ai',"A<dynamic>");
            this.expectIdentifierType('bi',"B<num>");
            this.expectIdentifierType('ci',"C<int, B<int>, A<dynamic>>");
            this.expectIdentifierType('aa',"A<dynamic>");
            this.expectIdentifierType('bb',"B<num>");
            this.expectIdentifierType('cc',"C<int, B<int>, A<dynamic>>");
        } )());
    }

    test_inferClosureType_parameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef F({bool p});
            let result = await this.computeAnalysisResult(source);
            let main = op(Op.INDEX,result.unit.declarations,2) as any;
            let body = main.functionExpression.body as any;
            let statement = op(Op.INDEX,body.block.statements,0) as any;
            let invocation = statement.expression as any;
            let closure = op(Op.INDEX,invocation.argumentList.arguments,0) as any;
            let closureType = closure.staticType as any;
            let fType = op(Op.INDEX,closureType.parameters,0).type as any;
            let p : any = op(Op.INDEX,fType.parameters,0);
            expect(p.name,'p');
            expect(p.enclosingElement,same(fType.element));
        } )());
    }

    test_instantiateToBounds_class_error_extension_malbounded() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C<T0 extends List<T1>, T1 extends List<T0>> {}
            await this.resolveTestUnit(code,{
                noErrors : false});
            this.assertErrors(this.testSource,new core.DartList.literal(StrongModeCode.NO_DEFAULT_BOUNDS));
        } )());
    }

    test_instantiateToBounds_class_error_instantiation_malbounded() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C<T0 extends List<T1>, T1 extends List<T0>> {}
            await this.resolveTestUnit(code,{
                noErrors : false});
            this.assertErrors(this.testSource,new core.DartList.literal(StrongModeCode.NO_DEFAULT_BOUNDS));
            this.expectIdentifierType('c;','C<List<dynamic>, List<dynamic>>');
        } )());
    }

    test_instantiateToBounds_class_error_recursion() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C<T0 extends List<T1>, T1 extends List<T0>> {}
            await this.resolveTestUnit(code,{
                noErrors : false});
            this.assertNoErrors(this.testSource);
            this.expectIdentifierType('c;','C<List<dynamic>, List<dynamic>>');
        } )());
    }

    test_instantiateToBounds_class_error_recursion_self() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C<T extends C<T>> {}
            await this.resolveTestUnit(code,{
                noErrors : false});
            this.assertNoErrors(this.testSource);
            this.expectIdentifierType('c;','C<C<dynamic>>');
        } )());
    }

    test_instantiateToBounds_class_error_recursion_self2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class A<E> {}
            await this.resolveTestUnit(code,{
                noErrors : false});
            this.assertNoErrors(this.testSource);
            this.expectIdentifierType('c;','C<A<dynamic>>');
        } )());
    }

    test_instantiateToBounds_class_error_typedef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'typedef T F<T>(T x);
            await this.resolveTestUnit(code,{
                noErrors : false});
            this.assertNoErrors(this.testSource);
            this.expectIdentifierType('c;','C<(dynamic) → dynamic>');
        } )());
    }

    test_instantiateToBounds_class_ok_implicitDynamic_multi() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C<T0 extends Map<T1, T2>, T1 extends List, T2 extends int> {}
            await this.resolveTestUnit(code);
            this.assertNoErrors(this.testSource);
            this.expectIdentifierType('c;','C<Map<List<dynamic>, int>, List<dynamic>, int>');
        } )());
    }

    test_instantiateToBounds_class_ok_referenceOther_after() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C<T0 extends T1, T1 extends int> {}
            await this.resolveTestUnit(code);
            this.assertNoErrors(this.testSource);
            this.expectIdentifierType('c;','C<int, int>');
        } )());
    }

    test_instantiateToBounds_class_ok_referenceOther_after2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C<T0 extends Map<T1, T1>, T1 extends int> {}
            await this.resolveTestUnit(code);
            this.assertNoErrors(this.testSource);
            this.expectIdentifierType('c;','C<Map<int, int>, int>');
        } )());
    }

    test_instantiateToBounds_class_ok_referenceOther_before() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C<T0 extends int, T1 extends T0> {}
            await this.resolveTestUnit(code);
            this.assertNoErrors(this.testSource);
            this.expectIdentifierType('c;','C<int, int>');
        } )());
    }

    test_instantiateToBounds_class_ok_referenceOther_multi() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C<T0 extends Map<T1, T2>, T1 extends List<T2>, T2 extends int> {}
            await this.resolveTestUnit(code);
            this.assertNoErrors(this.testSource);
            this.expectIdentifierType('c;','C<Map<List<int>, int>, List<int>, int>');
        } )());
    }

    test_instantiateToBounds_class_ok_simpleBounds() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class A<T> {}
            await this.resolveTestUnit(code);
            this.assertNoErrors(this.testSource);
            this.expectIdentifierType('a;','A<dynamic>');
            this.expectIdentifierType('b;','B<num>');
            this.expectIdentifierType('c;','C<List<int>>');
            this.expectIdentifierType('d;','D<A<dynamic>>');
        } )());
    }

    test_instantiateToBounds_generic_function_error_malbounded() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'T0 f<T0 extends List<T1>, T1 extends List<T0>>() {}
            await this.resolveTestUnit(code,{
                noErrors : false});
            this.assertErrors(this.testSource,new core.DartList.literal(StrongModeCode.NO_DEFAULT_BOUNDS));
            this.expectIdentifierType('c;','List<dynamic>');
        } )());
    }

    test_instantiateToBounds_method_ok_referenceOther_before() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C<T> {
            await this.resolveTestUnit(code);
            this.assertNoErrors(this.testSource);
            this.expectStaticInvokeType('m(null','(Null, Null) → void');
        } )());
    }

    test_instantiateToBounds_method_ok_referenceOther_before2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C<T> {
            await this.resolveTestUnit(code);
            this.assertNoErrors(this.testSource);
            this.expectStaticInvokeType('m();','() → Map<T, List<T>>');
        } )());
    }

    test_instantiateToBounds_method_ok_simpleBounds() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C<T> {
            await this.resolveTestUnit(code);
            this.assertNoErrors(this.testSource);
            this.expectStaticInvokeType('m(null)','(Null) → void');
        } )());
    }

    test_instantiateToBounds_method_ok_simpleBounds2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C<T> {
            await this.resolveTestUnit(code);
            this.assertNoErrors(this.testSource);
            this.expectStaticInvokeType('m();','() → T');
        } )());
    }

    test_notInstantiatedBound_direct_class_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class A<T extends int> {}
            await this.resolveTestUnit(code,{
                noErrors : false});
            this.assertErrors(this.testSource,new core.DartList.literal(StrongModeCode.NOT_INSTANTIATED_BOUND));
        } )());
    }

    test_notInstantiatedBound_direct_class_typedef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'typedef void F<T extends int>();
            await this.resolveTestUnit(code,{
                noErrors : false});
            this.assertErrors(this.testSource,new core.DartList.literal(StrongModeCode.NOT_INSTANTIATED_BOUND));
        } )());
    }

    test_notInstantiatedBound_direct_typedef_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class C<T extends int> {}
            await this.resolveTestUnit(code,{
                noErrors : false});
            this.assertErrors(this.testSource,new core.DartList.literal(StrongModeCode.NOT_INSTANTIATED_BOUND));
        } )());
    }

    test_notInstantiatedBound_indirect_class_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class A<T> {}
            await this.resolveTestUnit(code,{
                noErrors : false});
            this.assertErrors(this.testSource,new core.DartList.literal(StrongModeCode.NOT_INSTANTIATED_BOUND));
        } )());
    }

    test_notInstantiatedBound_indirect_class_class2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class A<K, V> {}
            await this.resolveTestUnit(code,{
                noErrors : false});
            this.assertErrors(this.testSource,new core.DartList.literal(StrongModeCode.NOT_INSTANTIATED_BOUND,StrongModeCode.NOT_INSTANTIATED_BOUND));
        } )());
    }

    test_objectMethodOnFunctions_Anonymous() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'void main() {
            await this._objectMethodOnFunctions_helper2(code);
        } )());
    }

    test_objectMethodOnFunctions_Function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'void main() {
            await this._objectMethodOnFunctions_helper2(code);
        } )());
    }

    test_objectMethodOnFunctions_Static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'int f(int x) => null;
            await this._objectMethodOnFunctions_helper2(code);
        } )());
    }

    test_objectMethodOnFunctions_Typedef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'typedef bool Predicate<T>(T object);
            await this._objectMethodOnFunctions_helper2(code);
        } )());
    }

    test_setterWithDynamicTypeIsError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_VOID_RETURN_FOR_SETTER,StaticWarningCode.NON_VOID_RETURN_FOR_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_setterWithExplicitVoidType_returningVoid() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void returnsVoid() {}
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_setterWithNoVoidType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.RETURN_OF_INVALID_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_setterWithNoVoidType_returningVoid() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void returnsVoid() {}
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_setterWithOtherTypeIsError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_VOID_RETURN_FOR_SETTER,StaticWarningCode.NON_VOID_RETURN_FOR_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_ternaryOperator_null_left() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {
            await this.resolveTestUnit(code);
            this.expectInitializerType('foo','int',isNull);
        } )());
    }

    test_ternaryOperator_null_right() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {
            await this.resolveTestUnit(code);
            this.expectInitializerType('foo','int',isNull);
        } )());
    }

    _objectMethodOnFunctions_helper2(code : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit(code);
            this.expectIdentifierType('t0',"String");
            this.expectIdentifierType('t1',"() → String");
            this.expectIdentifierType('t2',"int");
            this.expectIdentifierType('t3',"String");
            this.expectIdentifierType('t4',"() → String");
            this.expectIdentifierType('t5',"int");
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StrongModeStaticTypeAnalyzer2Test() {
    }
}

export namespace StrongModeTypePropagationTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'StrongModeTypePropagationTest';
    export type Interface = Omit<StrongModeTypePropagationTest, Constructors>;
}
@DartClass
export class StrongModeTypePropagationTest extends lib3.ResolverTestCase {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        let options : any = new bare.createInstance(any,null);
        options.strongMode = true;
        this.resetWith({
            options : options});
    }
    test_foreachInference_dynamic_disabled() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {
            let unit : any = await this.resolveSource(code);
            this.assertPropagatedIterationType(code,unit,this.typeProvider.dynamicType,null);
            this.assertTypeOfMarkedExpression(code,unit,this.typeProvider.dynamicType,null);
        } )());
    }

    test_foreachInference_reusedVar_disabled() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {
            let unit : any = await this.resolveSource(code);
            this.assertPropagatedIterationType(code,unit,this.typeProvider.dynamicType,null);
            this.assertTypeOfMarkedExpression(code,unit,this.typeProvider.dynamicType,null);
        } )());
    }

    test_foreachInference_var() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {
            let unit : any = await this.resolveSource(code);
            this.assertPropagatedIterationType(code,unit,this.typeProvider.intType,null);
            this.assertTypeOfMarkedExpression(code,unit,this.typeProvider.intType,null);
        } )());
    }

    test_foreachInference_var_iterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {
            let unit : any = await this.resolveSource(code);
            this.assertPropagatedIterationType(code,unit,this.typeProvider.intType,null);
            this.assertTypeOfMarkedExpression(code,unit,this.typeProvider.intType,null);
        } )());
    }

    test_foreachInference_var_stream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'import \'dart:async\';
            let unit : any = await this.resolveSource(code);
            this.assertPropagatedIterationType(code,unit,this.typeProvider.intType,null);
            this.assertTypeOfMarkedExpression(code,unit,this.typeProvider.intType,null);
        } )());
    }

    test_localVariableInference_bottom_disabled() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {
            let unit : any = await this.resolveSource(code);
            this.assertPropagatedAssignedType(code,unit,this.typeProvider.dynamicType,null);
            this.assertTypeOfMarkedExpression(code,unit,this.typeProvider.dynamicType,null);
        } )());
    }

    test_localVariableInference_constant() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {
            let unit : any = await this.resolveSource(code);
            this.assertPropagatedAssignedType(code,unit,this.typeProvider.intType,null);
            this.assertTypeOfMarkedExpression(code,unit,this.typeProvider.intType,null);
        } )());
    }

    test_localVariableInference_declaredType_disabled() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {
            let unit : any = await this.resolveSource(code);
            this.assertPropagatedAssignedType(code,unit,this.typeProvider.dynamicType,null);
            this.assertTypeOfMarkedExpression(code,unit,this.typeProvider.dynamicType,null);
        } )());
    }

    test_localVariableInference_noInitializer_disabled() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {
            let unit : any = await this.resolveSource(code);
            this.assertPropagatedAssignedType(code,unit,this.typeProvider.dynamicType,null);
            this.assertTypeOfMarkedExpression(code,unit,this.typeProvider.dynamicType,null);
        } )());
    }

    test_localVariableInference_transitive_field_inferred_lexical() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class A {
            let unit : any = await this.resolveSource(code);
            this.assertPropagatedAssignedType(code,unit,this.typeProvider.intType,null);
            this.assertTypeOfMarkedExpression(code,unit,this.typeProvider.intType,null);
        } )());
    }

    test_localVariableInference_transitive_field_inferred_reversed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class A {
            let unit : any = await this.resolveSource(code);
            this.assertPropagatedAssignedType(code,unit,this.typeProvider.intType,null);
            this.assertTypeOfMarkedExpression(code,unit,this.typeProvider.intType,null);
        } )());
    }

    test_localVariableInference_transitive_field_lexical() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class A {
            let unit : any = await this.resolveSource(code);
            this.assertPropagatedAssignedType(code,unit,this.typeProvider.intType,null);
            this.assertTypeOfMarkedExpression(code,unit,this.typeProvider.intType,null);
        } )());
    }

    test_localVariableInference_transitive_field_reversed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class A {
            let unit : any = await this.resolveSource(code);
            this.assertPropagatedAssignedType(code,unit,this.typeProvider.intType,null);
            this.assertTypeOfMarkedExpression(code,unit,this.typeProvider.intType,null);
        } )());
    }

    test_localVariableInference_transitive_list_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {
            let unit : any = await this.resolveSource(code);
            this.assertPropagatedAssignedType(code,unit,this.typeProvider.intType,null);
            this.assertTypeOfMarkedExpression(code,unit,this.typeProvider.intType,null);
        } )());
    }

    test_localVariableInference_transitive_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {
            let unit : any = await this.resolveSource(code);
            this.assertPropagatedAssignedType(code,unit,this.typeProvider.intType,null);
            this.assertTypeOfMarkedExpression(code,unit,this.typeProvider.intType,null);
        } )());
    }

    test_localVariableInference_transitive_toplevel_inferred_lexical() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'final x = 3;
            let unit : any = await this.resolveSource(code);
            this.assertPropagatedAssignedType(code,unit,this.typeProvider.intType,null);
            this.assertTypeOfMarkedExpression(code,unit,this.typeProvider.intType,null);
        } )());
    }

    test_localVariableInference_transitive_toplevel_inferred_reversed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {
            let unit : any = await this.resolveSource(code);
            this.assertPropagatedAssignedType(code,unit,this.typeProvider.intType,null);
            this.assertTypeOfMarkedExpression(code,unit,this.typeProvider.intType,null);
        } )());
    }

    test_localVariableInference_transitive_toplevel_lexical() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'int x = 3;
            let unit : any = await this.resolveSource(code);
            this.assertPropagatedAssignedType(code,unit,this.typeProvider.intType,null);
            this.assertTypeOfMarkedExpression(code,unit,this.typeProvider.intType,null);
        } )());
    }

    test_localVariableInference_transitive_toplevel_reversed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'main() {
            let unit : any = await this.resolveSource(code);
            this.assertPropagatedAssignedType(code,unit,this.typeProvider.intType,null);
            this.assertTypeOfMarkedExpression(code,unit,this.typeProvider.intType,null);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StrongModeTypePropagationTest() {
    }
}

export class properties {
}