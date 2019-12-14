/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/strong_mode_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../generated/resolver_test_case";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(InstanceMemberInferrerTest);
        defineReflectiveTests(SetFieldTypeTest);
        defineReflectiveTests(VariableGathererTest);
    });
};
export namespace InstanceMemberInferrerTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'InstanceMemberInferrerTest';
    export type Interface = Omit<InstanceMemberInferrerTest, Constructors>;
}
@DartClass
export class InstanceMemberInferrerTest extends lib3.ResolverTestCase {
    createInferrer(library : any) : any {
        let context : any = library.context;
        let inheritanceManager = new bare.createInstance(any,null,library);
        return new bare.createInstance(any,null,context.typeProvider,(_ : any) =>  {
            return inheritanceManager;
        },new core.DartSet<any>(),{
            typeSystem : context.typeSystem});
    }
    resolve(content : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource('/test.dart',content);
            if (this.enableNewAnalysisDriver) {
                let analysisResult = await this.computeAnalysisResult(source);
                return analysisResult.unit.element;
            }else {
                return this.analysisContext.resolveCompilationUnit2(source,source).element;
            }
        } )());
    }

    test_inferCompilationUnit_invalid_inheritanceCycle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit : any = await this.resolve('class A extends C {}\nclass B extends A {}\nclass C extends B {}\n');
            this._runInferrer(unit);
        } )());
    }

    test_inferCompilationUnit_method_parameter_multiple_different() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let methodName : string = 'm';
            let unit : any = await this.resolve(`class A {\n  ${methodName}(int p) => 0;\n}\nclass B {\n  ${methodName}(double p) => 0;\n}\nclass C implements A, B {\n  ${methodName}(p) => 0;\n}\n`);
            let classC : any = unit.getType('C');
            let methodC : any = classC.getMethod(methodName);
            let parameterC : any = op(Op.INDEX,methodC.parameters,0);
            expect(parameterC.type.isDynamic,isTrue);
            this._runInferrer(unit);
            expect(parameterC.type.isDynamic,isTrue);
        } )());
    }

    test_inferCompilationUnit_method_parameter_multiple_named_different() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let methodName : string = 'm';
            let unit : any = await this.resolve(`class A {\n  ${methodName}({int p}) => 0;\n}\nclass B {\n  ${methodName}({int q}) => 0;\n}\nclass C implements A, B {\n  ${methodName}({p}) => 0;\n}\n`);
            let classC : any = unit.getType('C');
            let methodC : any = classC.getMethod(methodName);
            let parameterC : any = op(Op.INDEX,methodC.parameters,0);
            expect(parameterC.type.isDynamic,isTrue);
            this._runInferrer(unit);
            expect(parameterC.type.isDynamic,isTrue);
        } )());
    }

    test_inferCompilationUnit_method_parameter_multiple_named_same() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let methodName : string = 'm';
            let unit : any = await this.resolve(`class A {\n  ${methodName}({int p}) => 0;\n}\nclass B {\n  ${methodName}({int p}) => 0;\n}\nclass C implements A, B {\n  ${methodName}({p}) => 0;\n}\n`);
            let classA : any = unit.getType('A');
            let methodA : any = classA.getMethod(methodName);
            let parameterA : any = op(Op.INDEX,methodA.parameters,0);
            let expectedType : any = parameterA.type;
            let classC : any = unit.getType('C');
            let methodC : any = classC.getMethod(methodName);
            let parameterC : any = op(Op.INDEX,methodC.parameters,0);
            expect(parameterC.type.isDynamic,isTrue);
            this._runInferrer(unit);
            expect(parameterC.type,expectedType);
        } )());
    }

    test_inferCompilationUnit_method_parameter_multiple_namedAndRequired() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let methodName : string = 'm';
            let unit : any = await this.resolve(`class A {\n  ${methodName}({int p}) => 0;\n}\nclass B {\n  ${methodName}(int p) => 0;\n}\nclass C implements A, B {\n  ${methodName}(p) => 0;\n}\n`);
            let classC : any = unit.getType('C');
            let methodC : any = classC.getMethod(methodName);
            let parameterC : any = op(Op.INDEX,methodC.parameters,0);
            expect(parameterC.type.isDynamic,isTrue);
            this._runInferrer(unit);
            expect(parameterC.type.isDynamic,isTrue);
        } )());
    }

    test_inferCompilationUnit_method_parameter_multiple_optionalAndRequired() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let methodName : string = 'm';
            let unit : any = await this.resolve(`class A {\n  ${methodName}(int p) => 0;\n}\nclass B {\n  ${methodName}([int p]) => 0;\n}\nclass C implements A, B {\n  ${methodName}(p) => 0;\n}\n`);
            let classA : any = unit.getType('A');
            let methodA : any = classA.getMethod(methodName);
            let parameterA : any = op(Op.INDEX,methodA.parameters,0);
            let expectedType : any = parameterA.type;
            let classC : any = unit.getType('C');
            let methodC : any = classC.getMethod(methodName);
            let parameterC : any = op(Op.INDEX,methodC.parameters,0);
            expect(parameterC.type.isDynamic,isTrue);
            this._runInferrer(unit);
            expect(parameterC.type,expectedType);
        } )());
    }

    test_inferCompilationUnit_method_parameter_single_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let methodName : string = 'm';
            let unit : any = await this.resolve(`class A<E> {\n  ${methodName}(E p) => 0;\n}\nclass C<E> implements A<E> {\n  ${methodName}(p) => 0;\n}\n`);
            let classC : any = unit.getType('C');
            let typeCE : any = op(Op.INDEX,classC.typeParameters,0).type;
            let methodC : any = classC.getMethod(methodName);
            let parameterC : any = op(Op.INDEX,methodC.parameters,0);
            expect(parameterC.type.isDynamic,isTrue);
            expect(methodC.type.typeArguments,new core.DartList.literal(typeCE));
            this._runInferrer(unit);
            expect(parameterC.type,op(Op.INDEX,classC.typeParameters,0).type);
            expect(methodC.type.typeArguments,new core.DartList.literal(typeCE),{
                reason : 'function type should still have type arguments'});
        } )());
    }

    test_inferCompilationUnit_method_return_multiple_different() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let methodName : string = 'm';
            let unit : any = await this.resolve(`class A {\n  int ${methodName}() => 0;\n}\nclass B {\n  double ${methodName}() => 0.0;\n}\nclass C implements A, B {\n  ${methodName}() => 0;\n}\n`);
            let classC : any = unit.getType('C');
            let methodC : any = classC.getMethod(methodName);
            expect(methodC.returnType.isDynamic,isTrue);
            this._runInferrer(unit);
            expect(methodC.returnType.isDynamic,isTrue);
        } )());
    }

    test_inferCompilationUnit_method_return_multiple_different_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let methodName : string = 'm';
            let unit : any = await this.resolve(`class A<E> {\n  E ${methodName}() => null;\n}\nclass B<E> {\n  E ${methodName}() => null;\n}\nclass C implements A<int>, B<double> {\n  ${methodName}() => null;\n}\n`);
            let classC : any = unit.getType('C');
            let methodC : any = classC.getMethod(methodName);
            expect(methodC.returnType.isDynamic,isTrue);
            this._runInferrer(unit);
            expect(methodC.returnType.isDynamic,isTrue);
        } )());
    }

    test_inferCompilationUnit_method_return_multiple_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let methodName : string = 'm';
            let unit : any = await this.resolve(`class A {\n  int ${methodName}() => 0;\n}\nclass B {\n  ${methodName}() => 0;\n}\nclass C implements A, B {\n  ${methodName}() => 0;\n}\n`);
            let classC : any = unit.getType('C');
            let methodC : any = classC.getMethod(methodName);
            expect(methodC.returnType.isDynamic,isTrue);
            this._runInferrer(unit);
            expect(methodC.returnType.isDynamic,isTrue);
        } )());
    }

    test_inferCompilationUnit_method_return_multiple_same_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let methodName : string = 'm';
            let unit : any = await this.resolve(`class A<E> {\n  E ${methodName}() => 0;\n}\nclass B<E> {\n  E ${methodName}() => 0;\n}\nclass C<E> implements A<E>, B<E> {\n  ${methodName}() => 0;\n}\n`);
            let classC : any = unit.getType('C');
            let methodC : any = classC.getMethod(methodName);
            expect(methodC.returnType.isDynamic,isTrue);
            this._runInferrer(unit);
            expect(methodC.returnType,op(Op.INDEX,classC.typeParameters,0).type);
        } )());
    }

    test_inferCompilationUnit_method_return_multiple_same_nonVoid() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let methodName : string = 'm';
            let unit : any = await this.resolve(`class A {\n  int ${methodName}() => 0;\n}\nclass B {\n  int ${methodName}() => 0;\n}\nclass C implements A, B {\n  ${methodName}() => 0;\n}\n`);
            let classA : any = unit.getType('A');
            let methodA : any = classA.getMethod(methodName);
            let expectedType : any = methodA.returnType;
            let classC : any = unit.getType('C');
            let methodC : any = classC.getMethod(methodName);
            expect(methodC.returnType.isDynamic,isTrue);
            this._runInferrer(unit);
            expect(methodC.returnType,expectedType);
        } )());
    }

    test_inferCompilationUnit_method_return_multiple_same_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let methodName : string = 'm';
            let unit : any = await this.resolve(`class A {\n  void ${methodName}() {};\n}\nclass B {\n  void ${methodName}() {};\n}\nclass C implements A, B {\n  ${methodName}() {};\n}\n`);
            let classA : any = unit.getType('A');
            let methodA : any = classA.getMethod(methodName);
            let expectedType : any = methodA.returnType;
            let classC : any = unit.getType('C');
            let methodC : any = classC.getMethod(methodName);
            expect(methodC.returnType.isDynamic,isTrue);
            this._runInferrer(unit);
            expect(methodC.returnType,expectedType);
        } )());
    }

    test_inferCompilationUnit_method_return_multiple_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let methodName : string = 'm';
            let unit : any = await this.resolve(`class A {\n  int ${methodName}() => 0;\n}\nclass B {\n  void ${methodName}() => 0;\n}\nclass C implements A, B {\n  ${methodName}() => 0;\n}\n`);
            let classC : any = unit.getType('C');
            let methodC : any = classC.getMethod(methodName);
            expect(methodC.returnType.isDynamic,isTrue);
            this._runInferrer(unit);
            expect(methodC.returnType.isDynamic,isTrue);
        } )());
    }

    test_inferCompilationUnit_method_return_single() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let methodName : string = 'm';
            let unit : any = await this.resolve(`class A {\n  int ${methodName}() => 0;\n}\nclass B extends A {\n  ${methodName}() => 0;\n}\n`);
            let classA : any = unit.getType('A');
            let methodA : any = classA.getMethod(methodName);
            let classB : any = unit.getType('B');
            let methodB : any = classB.getMethod(methodName);
            expect(methodB.returnType.isDynamic,isTrue);
            this._runInferrer(unit);
            expect(methodB.returnType,methodA.returnType);
        } )());
    }

    test_inferCompilationUnit_method_return_single_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let methodName : string = 'm';
            let unit : any = await this.resolve(`class A<E> {\n  E ${methodName}() => 0;\n}\nclass B<E> extends A<E> {\n  ${methodName}() => 0;\n}\n`);
            let classB : any = unit.getType('B');
            let typeBE : any = op(Op.INDEX,classB.typeParameters,0).type;
            let methodB : any = classB.getMethod(methodName);
            expect(methodB.returnType.isDynamic,isTrue);
            expect(methodB.type.typeArguments,new core.DartList.literal(typeBE));
            this._runInferrer(unit);
            expect(methodB.returnType,op(Op.INDEX,classB.typeParameters,0).type);
            expect(methodB.type.typeArguments,new core.DartList.literal(typeBE),{
                reason : 'function type should still have type arguments'});
        } )());
    }

    _runInferrer(unit : any) : any {
        let inferrer : any = this.createInferrer(unit.library);
        inferrer.inferCompilationUnit(unit);
        return inferrer;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InstanceMemberInferrerTest() {
    }
}

export namespace SetFieldTypeTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'SetFieldTypeTest';
    export type Interface = Omit<SetFieldTypeTest, Constructors>;
}
@DartClass
export class SetFieldTypeTest extends lib3.ResolverTestCase {
    test_setter_withoutParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('var x = 0;\nset x() {}\n');
            let analysisResult = await this.computeAnalysisResult(source);
            let unit : any = analysisResult.unit.element;
            let variable : any = unit.topLevelVariables.single;
            setFieldType(variable,unit.context.typeProvider.intType);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SetFieldTypeTest() {
    }
}

export namespace VariableGathererTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'VariableGathererTest';
    export type Interface = Omit<VariableGathererTest, Constructors>;
}
@DartClass
export class VariableGathererTest extends lib3.ResolverTestCase {
    test_creation_withFilter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let filter : any = (variable : any) =>  {
                return true;
            };
            let gatherer : any = new bare.createInstance(any,null,filter);
            expect(gatherer,isNotNull);
            expect(gatherer.filter,filter);
        } )());
    }

    test_creation_withoutFilter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let gatherer : any = new bare.createInstance(any,null);
            expect(gatherer,isNotNull);
            expect(gatherer.filter,isNull);
        } )());
    }

    test_visit_noReferences() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource('/test.dart','library lib;\nimport \'dart:math\';\nint zero = 0;\nclass C {\n  void m() => null;\n}\ntypedef void F();\n');
            let analysisResult = await this.computeAnalysisResult(source);
            let gatherer : any = new bare.createInstance(any,null);
            analysisResult.unit.accept(gatherer);
            expect(gatherer.results,hasLength(0));
        } )());
    }

    test_visit_withFilter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let filter : any = (variable : any) =>  {
                return variable.isStatic;
            };
            let variables : core.DartSet<any> = await this._gather(filter);
            expect(variables,hasLength(1));
        } )());
    }

    test_visit_withoutFilter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let variables : core.DartSet<any> = await this._gather();
            expect(variables,hasLength(4));
        } )());
    }

    _gather(filter? : any) : async.Future<core.DartSet<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            filter = filter || null;
            let source : any = this.addNamedSource('/test.dart','const int zero = 0;\nclass Counter {\n  int value = zero;\n  void inc() {\n    value++;\n  }\n  void dec() {\n    value = value - 1;\n  }\n  void fromZero(f(int index)) {\n    for (int i = zero; i < value; i++) {\n      f(i);\n    }\n  }\n}\n');
            let analysisResult = await this.computeAnalysisResult(source);
            let gatherer : any = new bare.createInstance(any,null,filter);
            analysisResult.unit.accept(gatherer);
            return gatherer.results;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableGathererTest() {
    }
}

export class properties {
}
