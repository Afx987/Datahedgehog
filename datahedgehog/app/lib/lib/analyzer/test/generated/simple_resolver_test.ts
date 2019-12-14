/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/simple_resolver_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./resolver_test_case";
import * as lib4 from "./../utils";
import * as lib5 from "./test_support";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SimpleResolverTest);
    });
};
export namespace SimpleResolverTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'SimpleResolverTest';
    export type Interface = Omit<SimpleResolverTest, Constructors>;
}
@DartClass
export class SimpleResolverTest extends lib3.ResolverTestCase {
    test_argumentResolution_required_matching() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void f() {\n    g(1, 2, 3);\n  }\n  void g(a, b, c) {}\n}');
            this._validateArgumentResolution(source,new core.DartList.literal(0,1,2));
        } )());
    }

    test_argumentResolution_required_tooFew() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void f() {\n    g(1, 2);\n  }\n  void g(a, b, c) {}\n}');
            this._validateArgumentResolution(source,new core.DartList.literal(0,1));
        } )());
    }

    test_argumentResolution_required_tooMany() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void f() {\n    g(1, 2, 3);\n  }\n  void g(a, b) {}\n}');
            this._validateArgumentResolution(source,new core.DartList.literal(0,1,-1));
        } )());
    }

    test_argumentResolution_requiredAndNamed_extra() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void f() {\n    g(1, 2, c: 3, d: 4);\n  }\n  void g(a, b, {c}) {}\n}');
            this._validateArgumentResolution(source,new core.DartList.literal(0,1,2,-1));
        } )());
    }

    test_argumentResolution_requiredAndNamed_matching() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void f() {\n    g(1, 2, c: 3);\n  }\n  void g(a, b, {c}) {}\n}');
            this._validateArgumentResolution(source,new core.DartList.literal(0,1,2));
        } )());
    }

    test_argumentResolution_requiredAndNamed_missing() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void f() {\n    g(1, 2, d: 3);\n  }\n  void g(a, b, {c, d}) {}\n}');
            this._validateArgumentResolution(source,new core.DartList.literal(0,1,3));
        } )());
    }

    test_argumentResolution_requiredAndPositional_fewer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void f() {\n    g(1, 2, 3);\n  }\n  void g(a, b, [c, d]) {}\n}');
            this._validateArgumentResolution(source,new core.DartList.literal(0,1,2));
        } )());
    }

    test_argumentResolution_requiredAndPositional_matching() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void f() {\n    g(1, 2, 3, 4);\n  }\n  void g(a, b, [c, d]) {}\n}');
            this._validateArgumentResolution(source,new core.DartList.literal(0,1,2,3));
        } )());
    }

    test_argumentResolution_requiredAndPositional_more() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void f() {\n    g(1, 2, 3, 4);\n  }\n  void g(a, b, [c]) {}\n}');
            this._validateArgumentResolution(source,new core.DartList.literal(0,1,2,-1));
        } )());
    }

    test_argumentResolution_setter_propagated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit : any = await this.resolveSource('main() {\n  var a = new A();\n  a.sss = 0;\n}\nclass A {\n  set sss(x) {}\n}');
            let assignment : any;
            {
                let statements = lib4.AstFinder.getStatementsInTopLevelFunction(unit,'main');
                let statement = statements[1] as any;
                assignment = statement.expression as any;
            }
            let rhs : any = assignment.rightHandSide;
            expect(rhs.staticParameterElement,isNull);
            let parameter : any = rhs.propagatedParameterElement;
            expect(parameter,isNotNull);
            expect(parameter.displayName,"x");
            let classA : any = op(Op.INDEX,unit.element.types,0);
            let setter : any = op(Op.INDEX,classA.accessors,0);
            expect(op(Op.INDEX,setter.parameters,0),same(parameter));
        } )());
    }

    test_argumentResolution_setter_propagated_propertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit : any = await this.resolveSource('main() {\n  var a = new A();\n  a.b.sss = 0;\n}\nclass A {\n  B b = new B();\n}\nclass B {\n  set sss(x) {}\n}');
            let assignment : any;
            {
                let statements = lib4.AstFinder.getStatementsInTopLevelFunction(unit,'main');
                let statement = statements[1] as any;
                assignment = statement.expression as any;
            }
            let rhs : any = assignment.rightHandSide;
            expect(rhs.staticParameterElement,isNull);
            let parameter : any = rhs.propagatedParameterElement;
            expect(parameter,isNotNull);
            expect(parameter.displayName,"x");
            let classB : any = op(Op.INDEX,unit.element.types,1);
            let setter : any = op(Op.INDEX,classB.accessors,0);
            expect(op(Op.INDEX,setter.parameters,0),same(parameter));
        } )());
    }

    test_argumentResolution_setter_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit : any = await this.resolveSource('main() {\n  A a = new A();\n  a.sss = 0;\n}\nclass A {\n  set sss(x) {}\n}');
            let assignment : any;
            {
                let statements = lib4.AstFinder.getStatementsInTopLevelFunction(unit,'main');
                let statement = statements[1] as any;
                assignment = statement.expression as any;
            }
            let rhs : any = assignment.rightHandSide;
            let parameter : any = rhs.staticParameterElement;
            expect(parameter,isNotNull);
            expect(parameter.displayName,"x");
            let classA : any = op(Op.INDEX,unit.element.types,0);
            let setter : any = op(Op.INDEX,classA.accessors,0);
            expect(op(Op.INDEX,setter.parameters,0),same(parameter));
        } )());
    }

    test_argumentResolution_setter_static_propertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit : any = await this.resolveSource('main() {\n  A a = new A();\n  a.b.sss = 0;\n}\nclass A {\n  B b = new B();\n}\nclass B {\n  set sss(x) {}\n}');
            let assignment : any;
            {
                let statements = lib4.AstFinder.getStatementsInTopLevelFunction(unit,'main');
                let statement = statements[1] as any;
                assignment = statement.expression as any;
            }
            let rhs : any = assignment.rightHandSide;
            let parameter : any = rhs.staticParameterElement;
            expect(parameter,isNotNull);
            expect(parameter.displayName,"x");
            let classB : any = op(Op.INDEX,unit.element.types,1);
            let setter : any = op(Op.INDEX,classB.accessors,0);
            expect(op(Op.INDEX,setter.parameters,0),same(parameter));
        } )());
    }

    test_breakTarget_labeled() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let text : string = 'void f() {\n  loop1: while (true) {\n    loop2: for (int i = 0; i < 10; i++) {\n      break loop1;\n      break loop2;\n    }\n  }\n}\n';
            let unit : any = await this.resolveSource(text);
            let whileStatement : any = lib5.EngineTestCase.findNode(unit,text,'while (true)',(n : any) =>  {
                return is(n, any);
            });
            let forStatement : any = lib5.EngineTestCase.findNode(unit,text,'for',(n : any) =>  {
                return is(n, any);
            });
            let break1 : any = lib5.EngineTestCase.findNode(unit,text,'break loop1',(n : any) =>  {
                return is(n, any);
            });
            let break2 : any = lib5.EngineTestCase.findNode(unit,text,'break loop2',(n : any) =>  {
                return is(n, any);
            });
            expect(break1.target,same(whileStatement));
            expect(break2.target,same(forStatement));
        } )());
    }

    test_breakTarget_unlabeledBreakFromDo() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let text : string = 'void f() {\n  do {\n    break;\n  } while (true);\n}\n';
            let unit : any = await this.resolveSource(text);
            let doStatement : any = lib5.EngineTestCase.findNode(unit,text,'do',(n : any) =>  {
                return is(n, any);
            });
            let breakStatement : any = lib5.EngineTestCase.findNode(unit,text,'break',(n : any) =>  {
                return is(n, any);
            });
            expect(breakStatement.target,same(doStatement));
        } )());
    }

    test_breakTarget_unlabeledBreakFromFor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let text : string = 'void f() {\n  for (int i = 0; i < 10; i++) {\n    break;\n  }\n}\n';
            let unit : any = await this.resolveSource(text);
            let forStatement : any = lib5.EngineTestCase.findNode(unit,text,'for',(n : any) =>  {
                return is(n, any);
            });
            let breakStatement : any = lib5.EngineTestCase.findNode(unit,text,'break',(n : any) =>  {
                return is(n, any);
            });
            expect(breakStatement.target,same(forStatement));
        } )());
    }

    test_breakTarget_unlabeledBreakFromForEach() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let text : string = 'void f() {\n  for (x in []) {\n    break;\n  }\n}\n';
            let unit : any = await this.resolveSource(text);
            let forStatement : any = lib5.EngineTestCase.findNode(unit,text,'for',(n : any) =>  {
                return is(n, any);
            });
            let breakStatement : any = lib5.EngineTestCase.findNode(unit,text,'break',(n : any) =>  {
                return is(n, any);
            });
            expect(breakStatement.target,same(forStatement));
        } )());
    }

    test_breakTarget_unlabeledBreakFromSwitch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let text : string = 'void f() {\n  while (true) {\n    switch (0) {\n      case 0:\n        break;\n    }\n  }\n}\n';
            let unit : any = await this.resolveSource(text);
            let switchStatement : any = lib5.EngineTestCase.findNode(unit,text,'switch',(n : any) =>  {
                return is(n, any);
            });
            let breakStatement : any = lib5.EngineTestCase.findNode(unit,text,'break',(n : any) =>  {
                return is(n, any);
            });
            expect(breakStatement.target,same(switchStatement));
        } )());
    }

    test_breakTarget_unlabeledBreakFromWhile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let text : string = 'void f() {\n  while (true) {\n    break;\n  }\n}\n';
            let unit : any = await this.resolveSource(text);
            let whileStatement : any = lib5.EngineTestCase.findNode(unit,text,'while',(n : any) =>  {
                return is(n, any);
            });
            let breakStatement : any = lib5.EngineTestCase.findNode(unit,text,'break',(n : any) =>  {
                return is(n, any);
            });
            expect(breakStatement.target,same(whileStatement));
        } )());
    }

    test_breakTarget_unlabeledBreakToOuterFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let text : string = 'void f() {\n  while (true) {\n    void g() {\n      break;\n    }\n  }\n}\n';
            let unit : any = await this.resolveSource(text);
            let breakStatement : any = lib5.EngineTestCase.findNode(unit,text,'break',(n : any) =>  {
                return is(n, any);
            });
            expect(breakStatement.target,isNull);
        } )());
    }

    test_class_definesCall() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int call(int x) { return x; }\n}\nint f(A a) {\n  return a(0);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_class_extends_implements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A extends B implements C {}\nclass B {}\nclass C {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_commentReference_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {}\n/** [A] [new A] [A.n] [new A.n] [m] [f] */\nclass A {\n  A() {}\n  A.n() {}\n  m() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_commentReference_parameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() {}\n  A.n() {}\n  /** [e] [f] */\n  m(e, f()) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_commentReference_singleLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('/// [A]\nclass A {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_continueTarget_labeled() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let text : string = 'void f() {\n  loop1: while (true) {\n    loop2: for (int i = 0; i < 10; i++) {\n      continue loop1;\n      continue loop2;\n    }\n  }\n}\n';
            let unit : any = await this.resolveSource(text);
            let whileStatement : any = lib5.EngineTestCase.findNode(unit,text,'while (true)',(n : any) =>  {
                return is(n, any);
            });
            let forStatement : any = lib5.EngineTestCase.findNode(unit,text,'for',(n : any) =>  {
                return is(n, any);
            });
            let continue1 : any = lib5.EngineTestCase.findNode(unit,text,'continue loop1',(n : any) =>  {
                return is(n, any);
            });
            let continue2 : any = lib5.EngineTestCase.findNode(unit,text,'continue loop2',(n : any) =>  {
                return is(n, any);
            });
            expect(continue1.target,same(whileStatement));
            expect(continue2.target,same(forStatement));
        } )());
    }

    test_continueTarget_unlabeledContinueFromDo() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let text : string = 'void f() {\n  do {\n    continue;\n  } while (true);\n}\n';
            let unit : any = await this.resolveSource(text);
            let doStatement : any = lib5.EngineTestCase.findNode(unit,text,'do',(n : any) =>  {
                return is(n, any);
            });
            let continueStatement : any = lib5.EngineTestCase.findNode(unit,text,'continue',(n : any) =>  {
                return is(n, any);
            });
            expect(continueStatement.target,same(doStatement));
        } )());
    }

    test_continueTarget_unlabeledContinueFromFor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let text : string = 'void f() {\n  for (int i = 0; i < 10; i++) {\n    continue;\n  }\n}\n';
            let unit : any = await this.resolveSource(text);
            let forStatement : any = lib5.EngineTestCase.findNode(unit,text,'for',(n : any) =>  {
                return is(n, any);
            });
            let continueStatement : any = lib5.EngineTestCase.findNode(unit,text,'continue',(n : any) =>  {
                return is(n, any);
            });
            expect(continueStatement.target,same(forStatement));
        } )());
    }

    test_continueTarget_unlabeledContinueFromForEach() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let text : string = 'void f() {\n  for (x in []) {\n    continue;\n  }\n}\n';
            let unit : any = await this.resolveSource(text);
            let forStatement : any = lib5.EngineTestCase.findNode(unit,text,'for',(n : any) =>  {
                return is(n, any);
            });
            let continueStatement : any = lib5.EngineTestCase.findNode(unit,text,'continue',(n : any) =>  {
                return is(n, any);
            });
            expect(continueStatement.target,same(forStatement));
        } )());
    }

    test_continueTarget_unlabeledContinueFromWhile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let text : string = 'void f() {\n  while (true) {\n    continue;\n  }\n}\n';
            let unit : any = await this.resolveSource(text);
            let whileStatement : any = lib5.EngineTestCase.findNode(unit,text,'while',(n : any) =>  {
                return is(n, any);
            });
            let continueStatement : any = lib5.EngineTestCase.findNode(unit,text,'continue',(n : any) =>  {
                return is(n, any);
            });
            expect(continueStatement.target,same(whileStatement));
        } )());
    }

    test_continueTarget_unlabeledContinueSkipsSwitch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let text : string = 'void f() {\n  while (true) {\n    switch (0) {\n      case 0:\n        continue;\n    }\n  }\n}\n';
            let unit : any = await this.resolveSource(text);
            let whileStatement : any = lib5.EngineTestCase.findNode(unit,text,'while',(n : any) =>  {
                return is(n, any);
            });
            let continueStatement : any = lib5.EngineTestCase.findNode(unit,text,'continue',(n : any) =>  {
                return is(n, any);
            });
            expect(continueStatement.target,same(whileStatement));
        } )());
    }

    test_continueTarget_unlabeledContinueToOuterFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let text : string = 'void f() {\n  while (true) {\n    void g() {\n      continue;\n    }\n  }\n}\n';
            let unit : any = await this.resolveSource(text);
            let continueStatement : any = lib5.EngineTestCase.findNode(unit,text,'continue',(n : any) =>  {
                return is(n, any);
            });
            expect(continueStatement.target,isNull);
        } )());
    }

    test_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_entryPoint_exported() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/two.dart",'library two;\nmain() {}');
            let source : any = this.addNamedSource("/one.dart",'library one;\nexport \'two.dart\';');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let main : any = library.entryPoint;
            expect(main,isNotNull);
            expect(main.library,isNot(same(library)));
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_entryPoint_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource("/one.dart",'library one;\nmain() {}');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let main : any = library.entryPoint;
            expect(main,isNotNull);
            expect(main.library,same(library));
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_entryPoint_none() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource("/one.dart","library one;");
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            expect(library.entryPoint,isNull);
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_enum_externalLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/my_lib.dart",'library my_lib;\nenum EEE {A, B, C}');
            let source : any = this.addSource('import \'my_lib.dart\';\nmain() {\n  EEE e = null;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extractedMethodAsConstant() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class Comparable<T> {\n  int compareTo(T other);\n  static int compare(Comparable a, Comparable b) => a.compareTo(b);\n}\nclass A {\n  void sort([compare = Comparable.compare]) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n  int y;\n  A(this.x) : y = x {}\n}');
            let unit : any = this.analysisContext2.resolveCompilationUnit2(source,source);
            let classA : any = op(Op.INDEX,unit.declarations,0);
            let field : any = op(Op.INDEX,classA.members,0);
            let constructor : any = op(Op.INDEX,classA.members,2);
            let paramElement : any = op(Op.INDEX,constructor.parameters.parameters,0).element;
            expect(paramElement,new bare.createInstance(any,null));
            expect((paramElement as any).field,op(Op.INDEX,field.fields.variables,0).element);
            let initializer : any = op(Op.INDEX,constructor.initializers,0);
            let identifierX : any = initializer.expression;
            expect(identifierX.staticElement,paramElement);
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_forEachLoops_nonConflicting() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  List list = [1,2,3];\n  for (int x in list) {}\n  for (int x in list) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_forLoops_nonConflicting() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  for (int i = 0; i < 3; i++) {\n  }\n  for (int i = 0; i < 3; i++) {\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef bool P(e);\nclass A {\n  P p;\n  m(e) {\n    if (p(e)) {}\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_getter_and_setter_fromMixins_bare_identifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {}\nclass M1 {\n  get x => null;\n  set x(value) {}\n}\nclass M2 {\n  get x => null;\n  set x(value) {}\n}\nclass C extends B with M1, M2 {\n  void f() {\n    x += 1;\n  }\n}\n');
            let analysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInMethod(analysisResult.unit,'C','f');
            let statement = statements[0] as any;
            let assignment : any = statement.expression;
            let leftHandSide : any = assignment.leftHandSide;
            expect(resolutionMap.staticElementForIdentifier(leftHandSide).enclosingElement.name,'M2');
            expect(leftHandSide.auxiliaryElements.staticElement.enclosingElement.name,'M2');
        } )());
    }

    test_getter_and_setter_fromMixins_property_access() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {}\nclass M1 {\n  get x => null;\n  set x(value) {}\n}\nclass M2 {\n  get x => null;\n  set x(value) {}\n}\nclass C extends B with M1, M2 {}\nvoid main() {\n  new C().x += 1;\n}\n');
            let analysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(analysisResult.unit,'main');
            let statement = statements[0] as any;
            let assignment : any = statement.expression;
            let propertyAccess : any = assignment.leftHandSide;
            expect(resolutionMap.staticElementForIdentifier(propertyAccess.propertyName).enclosingElement.name,'M2');
            expect(propertyAccess.propertyName.auxiliaryElements.staticElement.enclosingElement.name,'M2');
        } )());
    }

    test_getter_fromMixins_bare_identifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {}\nclass M1 {\n  get x => null;\n}\nclass M2 {\n  get x => null;\n}\nclass C extends B with M1, M2 {\n  f() {\n    return x;\n  }\n}\n');
            let analysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let statements = lib4.AstFinder.getStatementsInMethod(analysisResult.unit,'C','f');
            let statement = statements[0] as any;
            let x : any = statement.expression;
            expect(resolutionMap.staticElementForIdentifier(x).enclosingElement.name,'M2');
        } )());
    }

    test_getter_fromMixins_property_access() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {}\nclass M1 {\n  get x => null;\n}\nclass M2 {\n  get x => null;\n}\nclass C extends B with M1, M2 {}\nvoid main() {\n  var y = new C().x;\n}\n');
            let analysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(analysisResult.unit,'main');
            let statement = statements[0] as any;
            let propertyAccess : any = op(Op.INDEX,statement.variables.variables,0).initializer;
            expect(resolutionMap.staticElementForIdentifier(propertyAccess.propertyName).enclosingElement.name,'M2');
        } )());
    }

    test_getterAndSetterWithDifferentTypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int get f => 0;\n  void set f(String s) {}\n}\ng (A a) {\n  a.f = a.f.toString();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.MISMATCHED_GETTER_AND_SETTER_TYPES));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_hasReferenceToSuper() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B {toString() => super.toString();}');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unit : any = library.definingCompilationUnit;
            expect(unit,isNotNull);
            let classes : core.DartList<any> = unit.types;
            expect(classes,hasLength(2));
            expect(classes[0].hasReferenceToSuper,isFalse);
            expect(classes[1].hasReferenceToSuper,isTrue);
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_import_hide() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib1.dart",'library lib1;\nset foo(value) {}\nclass A {}');
            this.addNamedSource("/lib2.dart",'library lib2;\nset foo(value) {}');
            let source : any = this.addNamedSource("/lib3.dart",'import \'lib1.dart\' hide foo;\nimport \'lib2.dart\';\n\nmain() {\n  foo = 0;\n}\nA a;');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_import_prefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/two.dart",'library two;\nf(int x) {\n  return x * x;\n}');
            let source : any = this.addNamedSource("/one.dart",'library one;\nimport \'two.dart\' as _two;\nmain() {\n  _two.f(0);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_import_prefix_doesNotExist() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource("/a.dart",'import \'missing.dart\' as p;\nint a = p.q + p.r.s;\nString b = p.t(a) + p.u(v: 0);\np.T c = new p.T();\nclass D<E> extends p.T {\n  D(int i) : super(i);\n  p.U f = new p.V();\n}\nclass F implements p.T {\n  p.T m(p.U u) => null;\n}\nclass G extends Object with p.V {}\nclass H extends D<p.W> {\n  H(int i) : super(i);\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.URI_DOES_NOT_EXIST));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_import_show_doesNotExist() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource("/a.dart",'import \'missing.dart\' show q, r, t, u, T, U, V, W;\nint a = q + r.s;\nString b = t(a) + u(v: 0);\nT c = new T();\nclass D<E> extends T {\n  D(int i) : super(i);\n  U f = new V();\n}\nclass F implements T {\n  T m(U u) => null;\n}\nclass G extends Object with V {}\nclass H extends D<W> {\n  H(int i) : super(i);\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.URI_DOES_NOT_EXIST));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_import_spaceInUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/sub folder/lib.dart",'library lib;\nfoo() {}');
            let source : any = this.addNamedSource("/app.dart",'import \'sub folder/lib.dart\';\n\nmain() {\n  foo();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_indexExpression_typeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  List<int> a;\n  a[0];\n  List<List<int>> b;\n  b[0][0];\n  List<List<List<int>>> c;\n  c[0][0][0];\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_indexExpression_typeParameters_invalidAssignmentWarning() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  List<List<int>> b;\n  b[0][0] = \'hi\';\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_indirectOperatorThroughCall() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  B call() { return new B(); }\n}\n\nclass B {\n  int operator [](int i) { return i; }\n}\n\nA f = new A();\n\ng(int x) {}\n\nmain() {\n  g(f()[0]);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invoke_dynamicThroughGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  List get X => [() => 0];\n  m(A a) {\n    X.last;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_isValidMixin_badSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A extends B {}\nclass B {}\nclass C = Object with A;');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unit : any = library.definingCompilationUnit;
            expect(unit,isNotNull);
            let a : any = unit.getType('A');
            expect(a.isValidMixin,isFalse);
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_INHERITS_FROM_NOT_OBJECT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_isValidMixin_badSuperclass_withSuperMixins() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.enableSuperMixins = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            let source : any = this.addSource('class A extends B {}\nclass B {}\nclass C = Object with A;');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unit : any = library.definingCompilationUnit;
            expect(unit,isNotNull);
            let a : any = unit.getType('A');
            expect(a.isValidMixin,isTrue);
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_isValidMixin_constructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() {}\n}\nclass C = Object with A;');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unit : any = library.definingCompilationUnit;
            expect(unit,isNotNull);
            let a : any = unit.getType('A');
            expect(a.isValidMixin,isFalse);
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_DECLARES_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_isValidMixin_constructor_withSuperMixins() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.enableSuperMixins = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            let source : any = this.addSource('class A {\n  A() {}\n}\nclass C = Object with A;');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unit : any = library.definingCompilationUnit;
            expect(unit,isNotNull);
            let a : any = unit.getType('A');
            expect(a.isValidMixin,isFalse);
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_DECLARES_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_isValidMixin_factoryConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  factory A() => null;\n}\nclass C = Object with A;');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unit : any = library.definingCompilationUnit;
            expect(unit,isNotNull);
            let a : any = unit.getType('A');
            expect(a.isValidMixin,isTrue);
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_isValidMixin_factoryConstructor_withSuperMixins() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.enableSuperMixins = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            let source : any = this.addSource('class A {\n  factory A() => null;\n}\nclass C = Object with A;');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unit : any = library.definingCompilationUnit;
            expect(unit,isNotNull);
            let a : any = unit.getType('A');
            expect(a.isValidMixin,isTrue);
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_isValidMixin_super() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  toString() {\n    return super.toString();\n  }\n}\nclass C = Object with A;');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unit : any = library.definingCompilationUnit;
            expect(unit,isNotNull);
            let a : any = unit.getType('A');
            expect(a.isValidMixin,isFalse);
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_REFERENCES_SUPER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_isValidMixin_super_withSuperMixins() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.enableSuperMixins = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            let source : any = this.addSource('class A {\n  toString() {\n    return super.toString();\n  }\n}\nclass C = Object with A;');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unit : any = library.definingCompilationUnit;
            expect(unit,isNotNull);
            let a : any = unit.getType('A');
            expect(a.isValidMixin,isTrue);
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_isValidMixin_valid() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass C = Object with A;');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unit : any = library.definingCompilationUnit;
            expect(unit,isNotNull);
            let a : any = unit.getType('A');
            expect(a.isValidMixin,isTrue);
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_isValidMixin_valid_withSuperMixins() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.enableSuperMixins = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            let source : any = this.addSource('class A {}\nclass C = Object with A;');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unit : any = library.definingCompilationUnit;
            expect(unit,isNotNull);
            let a : any = unit.getType('A');
            expect(a.isValidMixin,isTrue);
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_labels_switch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void doSwitch(int target) {\n  switch (target) {\n    l0: case 0:\n      continue l1;\n    l1: case 1:\n      continue l0;\n    default:\n      continue l1;\n  }\n}');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_localVariable_types_invoked() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const A = null;\nmain() {\n  var myVar = (int p) => \'foo\';\n  myVar(42);\n}');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unit : any = this.analysisContext.resolveCompilationUnit(source,library);
            expect(unit,isNotNull);
            let found : core.DartList<boolean> = new core.DartList.literal(false);
            let thrownException : core.DartList<any> = new core.DartList<any>(1);
            unit.accept(new _SimpleResolverTest_localVariable_types_invoked(this,found,thrownException));
            if (thrownException[0] != null) {
                throw new bare.createInstance(any,null,"Exception",new bare.createInstance(any,null,thrownException[0],null));
            }
            expect(found[0],isTrue);
        } )());
    }

    test_metadata_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const A = null;\n@A class C<A> {}');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unitElement : any = library.definingCompilationUnit;
            expect(unitElement,isNotNull);
            let classes : core.DartList<any> = unitElement.types;
            expect(classes,hasLength(1));
            let annotations : core.DartList<any> = classes[0].metadata;
            expect(annotations,hasLength(1));
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = this.resolveCompilationUnit(source,library);
            let declarations : any = unit.declarations;
            expect(declarations,hasLength(2));
            let expectedElement : any = op(Op.INDEX,(op(Op.INDEX,declarations,0) as any).variables.variables,0).name.staticElement;
            lib5.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },PropertyInducingElement,expectedElement);
            expectedElement = (expectedElement as any).getter;
            let actualElement : any = op(Op.INDEX,(op(Op.INDEX,declarations,1) as any).metadata,0).name.staticElement;
            expect(actualElement,same(expectedElement));
        } )());
    }

    test_metadata_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const A = null;\nclass C {\n  @A int f;\n}');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unit : any = library.definingCompilationUnit;
            expect(unit,isNotNull);
            let classes : core.DartList<any> = unit.types;
            expect(classes,hasLength(1));
            let field : any = op(Op.INDEX,classes[0].fields,0);
            let annotations : core.DartList<any> = field.metadata;
            expect(annotations,hasLength(1));
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_metadata_fieldFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const A = null;\nclass C {\n  int f;\n  C(@A this.f);\n}');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unit : any = library.definingCompilationUnit;
            expect(unit,isNotNull);
            let classes : core.DartList<any> = unit.types;
            expect(classes,hasLength(1));
            let constructors : core.DartList<any> = classes[0].constructors;
            expect(constructors,hasLength(1));
            let parameters : core.DartList<any> = constructors[0].parameters;
            expect(parameters,hasLength(1));
            let annotations : core.DartList<any> = parameters[0].metadata;
            expect(annotations,hasLength(1));
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_metadata_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const A = null;\n@A f() {}');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unit : any = library.definingCompilationUnit;
            expect(unit,isNotNull);
            let functions : core.DartList<any> = unit.functions;
            expect(functions,hasLength(1));
            let annotations : core.DartList<any> = functions[0].metadata;
            expect(annotations,hasLength(1));
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_metadata_functionTypedParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const A = null;\nf(@A int p(int x)) {}');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unit : any = library.definingCompilationUnit;
            expect(unit,isNotNull);
            let functions : core.DartList<any> = unit.functions;
            expect(functions,hasLength(1));
            let parameters : core.DartList<any> = functions[0].parameters;
            expect(parameters,hasLength(1));
            let annotations1 : core.DartList<any> = parameters[0].metadata;
            expect(annotations1,hasLength(1));
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_metadata_libraryDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('@A library lib;\nconst A = null;');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let annotations : core.DartList<any> = library.metadata;
            expect(annotations,hasLength(1));
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_metadata_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const A = null;\nclass C {\n  @A void m() {}\n}');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unit : any = library.definingCompilationUnit;
            expect(unit,isNotNull);
            let classes : core.DartList<any> = unit.types;
            expect(classes,hasLength(1));
            let method : any = op(Op.INDEX,classes[0].methods,0);
            let annotations : core.DartList<any> = method.metadata;
            expect(annotations,hasLength(1));
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_metadata_namedParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const A = null;\nf({@A int p : 0}) {}');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unit : any = library.definingCompilationUnit;
            expect(unit,isNotNull);
            let functions : core.DartList<any> = unit.functions;
            expect(functions,hasLength(1));
            let parameters : core.DartList<any> = functions[0].parameters;
            expect(parameters,hasLength(1));
            let annotations1 : core.DartList<any> = parameters[0].metadata;
            expect(annotations1,hasLength(1));
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_metadata_positionalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const A = null;\nf([@A int p = 0]) {}');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unit : any = library.definingCompilationUnit;
            expect(unit,isNotNull);
            let functions : core.DartList<any> = unit.functions;
            expect(functions,hasLength(1));
            let parameters : core.DartList<any> = functions[0].parameters;
            expect(parameters,hasLength(1));
            let annotations1 : core.DartList<any> = parameters[0].metadata;
            expect(annotations1,hasLength(1));
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_metadata_simpleParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const A = null;\nf(@A p1, @A int p2) {}');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unit : any = library.definingCompilationUnit;
            expect(unit,isNotNull);
            let functions : core.DartList<any> = unit.functions;
            expect(functions,hasLength(1));
            let parameters : core.DartList<any> = functions[0].parameters;
            expect(parameters,hasLength(2));
            let annotations1 : core.DartList<any> = parameters[0].metadata;
            expect(annotations1,hasLength(1));
            let annotations2 : core.DartList<any> = parameters[1].metadata;
            expect(annotations2,hasLength(1));
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_metadata_typedef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const A = null;\n@A typedef F<A>();');
            let library : any = this.resolve2(source);
            expect(library,isNotNull);
            let unitElement : any = library.definingCompilationUnit;
            expect(unitElement,isNotNull);
            let aliases : core.DartList<any> = unitElement.functionTypeAliases;
            expect(aliases,hasLength(1));
            let annotations : core.DartList<any> = aliases[0].metadata;
            expect(annotations,hasLength(1));
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = this.resolveCompilationUnit(source,library);
            let declarations : any = unit.declarations;
            expect(declarations,hasLength(2));
            let expectedElement : any = op(Op.INDEX,(op(Op.INDEX,declarations,0) as any).variables.variables,0).name.staticElement;
            lib5.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },PropertyInducingElement,expectedElement);
            expectedElement = (expectedElement as any).getter;
            let actualElement : any = op(Op.INDEX,(op(Op.INDEX,declarations,1) as any).metadata,0).name.staticElement;
            expect(actualElement,same(expectedElement));
        } )());
    }

    test_method_fromMixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {\n  bar() => 1;\n}\nclass A {\n  foo() => 2;\n}\n\nclass C extends B with A {\n  bar() => super.bar();\n  foo() => super.foo();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_method_fromMixins() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {}\nclass M1 {\n  void f() {}\n}\nclass M2 {\n  void f() {}\n}\nclass C extends B with M1, M2 {}\nvoid main() {\n  new C().f();\n}\n');
            let analysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(analysisResult.unit,'main');
            let statement = statements[0] as any;
            let expr : any = statement.expression;
            expect(resolutionMap.staticElementForIdentifier(expr.methodName).enclosingElement.name,'M2');
        } )());
    }

    test_method_fromMixins_bare_identifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {}\nclass M1 {\n  void f() {}\n}\nclass M2 {\n  void f() {}\n}\nclass C extends B with M1, M2 {\n  void g() {\n    f();\n  }\n}\n');
            let analysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInMethod(analysisResult.unit,'C','g');
            let statement = statements[0] as any;
            let invocation : any = statement.expression;
            let methodName : any = invocation.methodName;
            expect(resolutionMap.staticElementForIdentifier(methodName).enclosingElement.name,'M2');
        } )());
    }

    test_method_fromMixins_invoked_from_outside_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {}\nclass M1 {\n  void f() {}\n}\nclass M2 {\n  void f() {}\n}\nclass C extends B with M1, M2 {}\nvoid main() {\n  new C().f();\n}\n');
            let analysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(analysisResult.unit,'main');
            let statement = statements[0] as any;
            let invocation : any = statement.expression;
            expect(resolutionMap.staticElementForIdentifier(invocation.methodName).enclosingElement.name,'M2');
        } )());
    }

    test_method_fromSuperclassMixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void m1() {}\n}\nclass B extends Object with A {\n}\nclass C extends B {\n}\nf(C c) {\n  c.m1();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_methodCascades() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void m1() {}\n  void m2() {}\n  void m() {\n    A a = new A();\n    a..m1()\n     ..m2();\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_methodCascades_withSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  String name;\n  void m1() {}\n  void m2() {}\n  void m() {\n    A a = new A();\n    a..m1()\n     ..name = \'name\'\n     ..m2();\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_resolveAgainstNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(var p) {\n  return null == p;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_setter_fromMixins_bare_identifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {}\nclass M1 {\n  set x(value) {}\n}\nclass M2 {\n  set x(value) {}\n}\nclass C extends B with M1, M2 {\n  void f() {\n    x = 1;\n  }\n}\n');
            let analysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInMethod(analysisResult.unit,'C','f');
            let statement = statements[0] as any;
            let assignment : any = statement.expression;
            let leftHandSide : any = assignment.leftHandSide;
            expect(resolutionMap.staticElementForIdentifier(leftHandSide).enclosingElement.name,'M2');
        } )());
    }

    test_setter_fromMixins_property_access() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {}\nclass M1 {\n  set x(value) {}\n}\nclass M2 {\n  set x(value) {}\n}\nclass C extends B with M1, M2 {}\nvoid main() {\n  new C().x = 1;\n}\n');
            let analysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let statements : core.DartList<any> = lib4.AstFinder.getStatementsInTopLevelFunction(analysisResult.unit,'main');
            let statement = statements[0] as any;
            let assignment : any = statement.expression;
            let propertyAccess : any = assignment.leftHandSide;
            expect(resolutionMap.staticElementForIdentifier(propertyAccess.propertyName).enclosingElement.name,'M2');
        } )());
    }

    test_setter_inherited() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int get x => 0;\n  set x(int p) {}\n}\nclass B extends A {\n  int get x => super.x == null ? 0 : super.x;\n  int f() => x = 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_setter_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('set s(x) {\n}\n\nmain() {\n  s = 123;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_staticInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static int get g => (a,b) => 0;\n}\nclass B {\n  f() {\n    A.g(1,0);\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    _validateArgumentResolution(source : any,indices : core.DartList<number>) : void {
        let library : any = this.resolve2(source);
        expect(library,isNotNull);
        let classElement : any = op(Op.INDEX,library.definingCompilationUnit.types,0);
        let parameters : core.DartList<any> = op(Op.INDEX,classElement.methods,1).parameters;
        let unit : any = this.resolveCompilationUnit(source,library);
        expect(unit,isNotNull);
        let classDeclaration : any = op(Op.INDEX,unit.declarations,0) as any;
        let methodDeclaration : any = op(Op.INDEX,classDeclaration.members,0) as any;
        let block : any = (methodDeclaration.body as any).block;
        let statement : any = op(Op.INDEX,block.statements,0) as any;
        let invocation : any = statement.expression as any;
        let arguments : any = invocation.argumentList.arguments;
        let argumentCount : number = arguments.length;
        expect(argumentCount,indices.length);
        for(let i : number = 0; i < argumentCount; i++){
            let argument : any = op(Op.INDEX,arguments,i);
            let element : any = argument.staticParameterElement;
            let index : number = indices[i];
            if (index < 0) {
                expect(element,isNull);
            }else {
                expect(element,same(parameters[index]));
            }
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SimpleResolverTest() {
    }
}

export namespace _SimpleResolverTest_localVariable_types_invoked {
    export type Constructors = '_SimpleResolverTest_localVariable_types_invoked';
    export type Interface = Omit<_SimpleResolverTest_localVariable_types_invoked, Constructors>;
}
@DartClass
export class _SimpleResolverTest_localVariable_types_invoked extends any {
    test : SimpleResolverTest;

    found : core.DartList<boolean>;

    thrownException : core.DartList<any>;

    constructor(test : SimpleResolverTest,found : core.DartList<boolean>,thrownException : core.DartList<any>) {
    }
    @defaultConstructor
    _SimpleResolverTest_localVariable_types_invoked(test : SimpleResolverTest,found : core.DartList<boolean>,thrownException : core.DartList<any>) {
        super.DartObject();
        this.test = test;
        this.found = found;
        this.thrownException = thrownException;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) : core.DartObject {
        if (op(Op.EQUALS,node.name,"myVar") && is(node.parent, any)) {
            try {
                this.found[0] = true;
                let staticType : any = node.staticType;
                expect(staticType,same(this.test.typeProvider.dynamicType));
                let propagatedType : any = node.propagatedType as any;
                expect(propagatedType.returnType,this.test.typeProvider.stringType);
            } catch (__error__) {

                if (is(__error__,any)){
                    let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e : any = __error__;
                    this.thrownException[0] = new bare.createInstance(any,null,e,stackTrace);
                }
            }
        }
        return null;
    }
}

export class properties {
}
