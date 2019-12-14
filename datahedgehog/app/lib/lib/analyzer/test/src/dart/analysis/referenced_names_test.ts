/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/dart/analysis/referenced_names_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../../generated/parser_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ReferencedNamesBuilderTest);
    });
};
export namespace ReferencedNamesBuilderTest {
    export type Constructors = lib3.ParserTestCase.Constructors | 'ReferencedNamesBuilderTest';
    export type Interface = Omit<ReferencedNamesBuilderTest, Constructors>;
}
@DartClass
export class ReferencedNamesBuilderTest extends lib3.ParserTestCase {
    test_class_constructor() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {\n  U.named(A a, B b) {\n    C c = null;\n  }\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C')));
    }
    test_class_constructor_parameters() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {\n  U(A a) {\n    a;\n    b;\n  }\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','b')));
    }
    test_class_field() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {\n  A f = new B();\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B')));
    }
    test_class_getter() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {\n  A get a => new B();\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B')));
    }
    test_class_members() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {\n  int a;\n  int get b;\n  set c(_) {}\n  m(D d) {\n    a;\n    b;\n    c = 1;\n    m();\n  }\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('int','D')));
    }
    test_class_members_dontHideQualified() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {\n  int a;\n  int get b;\n  set c(_) {}\n  m(D d) {\n    d.a;\n    d.b;\n    d.c;\n  }\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('int','D','a','b','c')));
    }
    test_class_method() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {\n  A m(B p) {\n    C v = 0;\n  }\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C')));
    }
    test_class_method_localVariables() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {\n  A m() {\n    B b = null;\n    b;\n    {\n      C c = null;\n      b;\n      c;\n    }\n    d;\n  }\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C','d')));
    }
    test_class_method_parameters() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {\n  m(A a) {\n    a;\n    b;\n  }\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','b')));
    }
    test_class_method_parameters_dontHideNamedExpressionName() {
        let names : core.DartSet<string> = this._computeReferencedNames('main() {\n  var p;\n  new C(p: p);\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('C','p')));
    }
    test_class_method_typeParameters() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {\n  A m<T>(B b, T t) {\n    C c = 0;\n  }\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C')));
    }
    test_class_setter() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {\n  set a(A a) {\n    B b = null;\n  }\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B')));
    }
    test_class_typeParameters() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U<T> {\n  T f = new A<T>();\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A')));
    }
    test_instantiatedNames_importPrefix() {
        let names : core.DartSet<string> = this._computeReferencedNames('import \'a.dart\' as p1;\nimport \'b.dart\' as p2;\nmain() {\n  new p1.A();\n  new p1.A.c1();\n  new p1.B();\n  new p2.C();\n  new D();\n  new D.c2();\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C','D','c1','c2')));
    }
    test_localFunction() {
        let names : core.DartSet<string> = this._computeReferencedNames('f(A a) {\n  g(B b) {}\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B')));
    }
    test_superToSubs_importPrefix() {
        let names : core.DartSet<string> = this._computeReferencedNames('import \'a.dart\' as p1;\nimport \'b.dart\' as p2;\nclass U extends p1.A with p2.B implements p2.C {}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C')));
    }
    test_topLevelVariable() {
        let names : core.DartSet<string> = this._computeReferencedNames('A v = new B(c);\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B','c')));
    }
    test_topLevelVariable_multiple() {
        let names : core.DartSet<string> = this._computeReferencedNames('A v1 = new B(c), v2 = new D<E>(f);\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B','c','D','E','f')));
    }
    test_unit_classTypeAlias() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U = A with B implements C;\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C')));
    }
    test_unit_classTypeAlias_typeParameters() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U<T1, T2 extends D> = A<T1> with B<T2> implements C<T1, T2>;\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C','D')));
    }
    test_unit_function() {
        let names : core.DartSet<string> = this._computeReferencedNames('A f(B b) {\n  C c = 0;\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C')));
    }
    test_unit_function_doc() {
        let names : core.DartSet<string> = this._computeReferencedNames('/**\n * Documentation [C.d] reference.\n */\nA f(B b) {}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C','d')));
    }
    test_unit_function_dontHideQualified() {
        let names : core.DartSet<string> = this._computeReferencedNames('class U {\n  int a;\n  int get b;\n  set c(_) {}\n  m(D d) {\n    d.a;\n    d.b;\n    d.c;\n  }\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('int','D','a','b','c')));
    }
    test_unit_function_localFunction_parameter() {
        let names : core.DartSet<string> = this._computeReferencedNames('A f() {\n  B g(x) {\n    x;\n    return null;\n  }\n  return null;\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B')));
    }
    test_unit_function_localFunctions() {
        let names : core.DartSet<string> = this._computeReferencedNames('A f() {\n  B b = null;\n  C g() {}\n  g();\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C')));
    }
    test_unit_function_localsDontHideQualified() {
        let names : core.DartSet<string> = this._computeReferencedNames('f(A a, B b) {\n  var v = 0;\n  a.v;\n  a.b;\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B','v','b')));
    }
    test_unit_function_localVariables() {
        let names : core.DartSet<string> = this._computeReferencedNames('A f() {\n  B b = null;\n  b;\n  {\n    C c = null;\n    b;\n    c;\n  }\n  d;\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C','d')));
    }
    test_unit_function_parameters() {
        let names : core.DartSet<string> = this._computeReferencedNames('A f(B b) {\n  C c = 0;\n  b;\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C')));
    }
    test_unit_function_parameters_dontHideQualified() {
        let names : core.DartSet<string> = this._computeReferencedNames('f(x, C g()) {\n  g().x;\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('C','x')));
    }
    test_unit_function_typeParameters() {
        let names : core.DartSet<string> = this._computeReferencedNames('A f<T>(B b, T t) {\n  C c = 0;\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C')));
    }
    test_unit_functionTypeAlias() {
        let names : core.DartSet<string> = this._computeReferencedNames('typedef A F(B B, C c(D d));\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C','D')));
    }
    test_unit_functionTypeAlias_typeParameters() {
        let names : core.DartSet<string> = this._computeReferencedNames('typedef A F<T>(B b, T t);\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B')));
    }
    test_unit_getter() {
        let names : core.DartSet<string> = this._computeReferencedNames('A get aaa {\n  return new B();\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B')));
    }
    test_unit_setter() {
        let names : core.DartSet<string> = this._computeReferencedNames('set aaa(A a) {\n  B b = null;\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B')));
    }
    test_unit_topLevelDeclarations() {
        let names : core.DartSet<string> = this._computeReferencedNames('class L1 {}\nclass L2 = A with B implements C;\nA L3() => null;\ntypedef A L4(B b);\nA get L5 => null;\nset L6(_) {}\nA L7, L8;\nmain() {\n  L1;\n  L2;\n  L3;\n  L4;\n  L5;\n  L6;\n  L7;\n  L8;\n}\n');
        expect(names,unorderedEquals(new core.DartList.literal('A','B','C')));
    }
    _computeReferencedNames(code : string) : core.DartSet<string> {
        let unit : any = this.parseCompilationUnit2(code);
        return computeReferencedNames(unit);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ReferencedNamesBuilderTest() {
    }
}

export class properties {
}
