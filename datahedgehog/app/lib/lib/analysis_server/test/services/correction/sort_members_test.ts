/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/correction/sort_members_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../abstract_single_unit";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SortMembersTest);
    });
};
export namespace SortMembersTest {
    export type Constructors = lib3.AbstractSingleUnitTest.Constructors | 'SortMembersTest';
    export type Interface = Omit<SortMembersTest, Constructors>;
}
@DartClass
export class SortMembersTest extends lib3.AbstractSingleUnitTest {
    test_classMembers_accessor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class A {\n  set c(x) {}\n  set a(x) {}\n  get a => null;\n  get b => null;\n  set b(x) {}\n  get c => null;\n}\n');
            this._assertSort('class A {\n  get a => null;\n  set a(x) {}\n  get b => null;\n  set b(x) {}\n  get c => null;\n  set c(x) {}\n}\n');
        } )());
    }

    test_classMembers_accessor_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class A {\n  get a => null;\n  set a(x) {}\n  static get b => null;\n  static set b(x) {}\n}\n');
            this._assertSort('class A {\n  static get b => null;\n  static set b(x) {}\n  get a => null;\n  set a(x) {}\n}\n');
        } )());
    }

    test_classMembers_constructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class A {\n  A.c() {   }\n  A.a() { }\n  A() {}\n  A.b();\n}\n');
            this._assertSort('class A {\n  A() {}\n  A.a() { }\n  A.b();\n  A.c() {   }\n}\n');
        } )());
    }

    test_classMembers_external_constructorMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class Chart {\n  external Pie();\n  external Chart();\n}\n');
            this._assertSort('class Chart {\n  external Chart();\n  external Pie();\n}\n');
        } )());
    }

    test_classMembers_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class A {\n  String c;\n  int a;\n  void toString() => null;\n  double b;\n}\n');
            this._assertSort('class A {\n  String c;\n  int a;\n  double b;\n  void toString() => null;\n}\n');
        } )());
    }

    test_classMembers_field_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class A {\n  int b;\n  int a;\n  static int d;\n  static int c;\n}\n');
            this._assertSort('class A {\n  static int d;\n  static int c;\n  int b;\n  int a;\n}\n');
        } )());
    }

    test_classMembers_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class A {\n  c() {}\n  a() {}\n  b() {}\n}\n');
            this._assertSort('class A {\n  a() {}\n  b() {}\n  c() {}\n}\n');
        } )());
    }

    test_classMembers_method_emptyLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class A {\n  b() {}\n\n  a() {}\n}\n');
            this._assertSort('class A {\n  a() {}\n\n  b() {}\n}\n');
        } )());
    }

    test_classMembers_method_ignoreCase() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class A {\n  m_C() {}\n  m_a() {}\n  m_B() {}\n}\n');
            this._assertSort('class A {\n  m_a() {}\n  m_B() {}\n  m_C() {}\n}\n');
        } )());
    }

    test_classMembers_method_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class A {\n  static a() {}\n  b() {}\n}\n');
            this._assertSort('class A {\n  b() {}\n  static a() {}\n}\n');
        } )());
    }

    test_classMembers_mix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class A {\n  /// static field public\n  static int nnn;\n  /// static field private\n  static int _nnn;\n  /// instance getter public\n  int get nnn => null;\n  /// instance setter public\n  set nnn(x) {}\n  /// instance getter private\n  int get _nnn => null;\n  /// instance setter private\n  set _nnn(x) {}\n  /// instance method public\n  nnn() {}\n  /// instance method private\n  _nnn() {}\n  /// static method public\n  static nnn() {}\n  /// static method private\n  static _nnn() {}\n  /// static getter public\n  static int get nnn => null;\n  /// static setter public\n  static set nnn(x) {}\n  /// static getter private\n  static int get _nnn => null;\n  /// static setter private\n  static set _nnn(x) {}\n  /// instance field public\n  int nnn;\n  /// instance field private\n  int _nnn;\n  /// constructor generative unnamed\n  A();\n  /// constructor factory unnamed\n  factory A() => null;\n  /// constructor generative public\n  A.nnn();\n  /// constructor factory public\n  factory A.ooo() => null;\n  /// constructor generative private\n  A._nnn();\n  /// constructor factory private\n  factory A._ooo() => null;\n}\n');
            this._assertSort('class A {\n  /// static field public\n  static int nnn;\n  /// static field private\n  static int _nnn;\n  /// static getter public\n  static int get nnn => null;\n  /// static setter public\n  static set nnn(x) {}\n  /// static getter private\n  static int get _nnn => null;\n  /// static setter private\n  static set _nnn(x) {}\n  /// instance field public\n  int nnn;\n  /// instance field private\n  int _nnn;\n  /// constructor generative unnamed\n  A();\n  /// constructor factory unnamed\n  factory A() => null;\n  /// constructor generative public\n  A.nnn();\n  /// constructor factory public\n  factory A.ooo() => null;\n  /// constructor generative private\n  A._nnn();\n  /// constructor factory private\n  factory A._ooo() => null;\n  /// instance getter public\n  int get nnn => null;\n  /// instance setter public\n  set nnn(x) {}\n  /// instance getter private\n  int get _nnn => null;\n  /// instance setter private\n  set _nnn(x) {}\n  /// instance method public\n  nnn() {}\n  /// instance method private\n  _nnn() {}\n  /// static method public\n  static nnn() {}\n  /// static method private\n  static _nnn() {}\n}\n');
        } )());
    }

    test_directives() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('library lib;\n\nexport \'dart:bbb\';\nimport \'dart:bbb\';\nexport \'package:bbb/bbb.dart\';\nexport \'http://bbb.com\';\nimport \'bbb/bbb.dart\';\nexport \'http://aaa.com\';\nimport \'http://bbb.com\';\nexport \'dart:aaa\';\nexport \'package:aaa/aaa.dart\';\nimport \'package:bbb/bbb.dart\';\nexport \'aaa/aaa.dart\';\nexport \'bbb/bbb.dart\';\nimport \'dart:aaa\';\nimport \'package:aaa/aaa.dart\';\nimport \'aaa/aaa.dart\';\nimport \'http://aaa.com\';\npart \'bbb/bbb.dart\';\npart \'aaa/aaa.dart\';\n\nmain() {\n}\n');
            this._assertSort('library lib;\n\nimport \'dart:aaa\';\nimport \'dart:bbb\';\n\nimport \'package:aaa/aaa.dart\';\nimport \'package:bbb/bbb.dart\';\n\nimport \'http://aaa.com\';\nimport \'http://bbb.com\';\n\nimport \'aaa/aaa.dart\';\nimport \'bbb/bbb.dart\';\n\nexport \'dart:aaa\';\nexport \'dart:bbb\';\n\nexport \'package:aaa/aaa.dart\';\nexport \'package:bbb/bbb.dart\';\n\nexport \'http://aaa.com\';\nexport \'http://bbb.com\';\n\nexport \'aaa/aaa.dart\';\nexport \'bbb/bbb.dart\';\n\npart \'aaa/aaa.dart\';\npart \'bbb/bbb.dart\';\n\nmain() {\n}\n');
        } )());
    }

    test_directives_docComment_hasLibrary_lines() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('/// Library documentation comment A.\n/// Library documentation comment B.\nlibrary foo.bar;\n\n/// bbb1\n/// bbb2\n/// bbb3\nimport \'b.dart\';\n/// aaa1\n/// aaa2\nimport \'a.dart\';\n');
            this._assertSort('/// Library documentation comment A.\n/// Library documentation comment B.\nlibrary foo.bar;\n\n/// aaa1\n/// aaa2\nimport \'a.dart\';\n/// bbb1\n/// bbb2\n/// bbb3\nimport \'b.dart\';\n');
        } )());
    }

    test_directives_docComment_hasLibrary_stars() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('/**\n * Library documentation comment A.\n * Library documentation comment B.\n */\nlibrary foo.bar;\n\n/**\n * bbb\n */\nimport \'b.dart\';\n/**\n * aaa\n * aaa\n */\nimport \'a.dart\';\n');
            this._assertSort('/**\n * Library documentation comment A.\n * Library documentation comment B.\n */\nlibrary foo.bar;\n\n/**\n * aaa\n * aaa\n */\nimport \'a.dart\';\n/**\n * bbb\n */\nimport \'b.dart\';\n');
        } )());
    }

    test_directives_docComment_noLibrary_lines() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('/// Library documentation comment A\n/// Library documentation comment B\nimport \'b.dart\';\n/// aaa1\n/// aaa2\nimport \'a.dart\';\n');
            this._assertSort('/// aaa1\n/// aaa2\n/// Library documentation comment A\n/// Library documentation comment B\nimport \'a.dart\';\nimport \'b.dart\';\n');
        } )());
    }

    test_directives_docComment_noLibrary_stars() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('/**\n * Library documentation comment A.\n * Library documentation comment B.\n */\nimport \'b.dart\';\n/**\n * aaa\n * aaa\n */\nimport \'a.dart\';\n');
            this._assertSort('/**\n * aaa\n * aaa\n */\n/**\n * Library documentation comment A.\n * Library documentation comment B.\n */\nimport \'a.dart\';\nimport \'b.dart\';\n');
        } )());
    }

    test_directives_imports_packageAndPath() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('library lib;\n\nimport \'package:product.ui.api.bbb/manager1.dart\';\nimport \'package:product.ui.api/entity2.dart\';\nimport \'package:product.ui/entity.dart\';\nimport \'package:product.ui.api.aaa/manager2.dart\';\nimport \'package:product.ui.api/entity1.dart\';\nimport \'package:product2.client/entity.dart\';\n');
            this._assertSort('library lib;\n\nimport \'package:product.ui/entity.dart\';\nimport \'package:product.ui.api/entity1.dart\';\nimport \'package:product.ui.api/entity2.dart\';\nimport \'package:product.ui.api.aaa/manager2.dart\';\nimport \'package:product.ui.api.bbb/manager1.dart\';\nimport \'package:product2.client/entity.dart\';\n');
        } )());
    }

    test_unitMembers_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class C {}\nclass A {}\nclass B {}\n');
            this._assertSort('class A {}\nclass B {}\nclass C {}\n');
        } )());
    }

    test_unitMembers_class_ignoreCase() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class C {}\nclass a {}\nclass B {}\n');
            this._assertSort('class a {}\nclass B {}\nclass C {}\n');
        } )());
    }

    test_unitMembers_classTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class M {}\nclass C = Object with M;\nclass A = Object with M;\nclass B = Object with M;\n');
            this._assertSort('class A = Object with M;\nclass B = Object with M;\nclass C = Object with M;\nclass M {}\n');
        } )());
    }

    test_unitMembers_directive_hasDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('library lib;\nclass C {}\nclass A {}\nclass B {}\n');
            this._assertSort('library lib;\nclass A {}\nclass B {}\nclass C {}\n');
        } )());
    }

    test_unitMembers_directive_noDirective_hasComment_line() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('// Some comment\n\nclass B {}\n\nclass A {}\n');
            this._assertSort('// Some comment\n\nclass A {}\n\nclass B {}\n');
        } )());
    }

    test_unitMembers_directive_noDirective_noComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('\nclass B {}\n\nclass A {}\n');
            this._assertSort('\nclass A {}\n\nclass B {}\n');
        } )());
    }

    test_unitMembers_enum() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('enum C {x, y}\nenum A {x, y}\nenum B {x, y}\n');
            this._assertSort('enum A {x, y}\nenum B {x, y}\nenum C {x, y}\n');
        } )());
    }

    test_unitMembers_enumClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('enum C {x, y}\nclass A {}\nclass D {}\nenum B {x, y}\n');
            this._assertSort('class A {}\nenum B {x, y}\nenum C {x, y}\nclass D {}\n');
        } )());
    }

    test_unitMembers_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('fc() {}\nfa() {}\nfb() {}\n');
            this._assertSort('fa() {}\nfb() {}\nfc() {}\n');
        } )());
    }

    test_unitMembers_functionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('typedef FC();\ntypedef FA();\ntypedef FB();\n');
            this._assertSort('typedef FA();\ntypedef FB();\ntypedef FC();\n');
        } )());
    }

    test_unitMembers_importsAndDeclarations() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('import \'dart:a\';\nimport \'package:b\';\n\nfoo() {\n}\n\nf() => null;\n');
            this._assertSort('import \'dart:a\';\n\nimport \'package:b\';\n\nf() => null;\n\nfoo() {\n}\n');
        } )());
    }

    test_unitMembers_mainFirst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('class C {}\naaa() {}\nget bbb() {}\nclass A {}\nmain() {}\nclass B {}\n');
            this._assertSort('main() {}\nget bbb() {}\naaa() {}\nclass A {}\nclass B {}\nclass C {}\n');
        } )());
    }

    test_unitMembers_mix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('_mmm() {}\ntypedef nnn();\n_nnn() {}\ntypedef mmm();\ntypedef _nnn();\ntypedef _mmm();\nclass mmm {}\nget _nnn => null;\nclass nnn {}\nclass _mmm {}\nclass _nnn {}\nvar mmm;\nvar nnn;\nvar _mmm;\nvar _nnn;\nset nnn(x) {}\nget mmm => null;\nset mmm(x) {}\nget nnn => null;\nget _mmm => null;\nset _mmm(x) {}\nset _nnn(x) {}\nmmm() {}\nnnn() {}\n');
            this._assertSort('var mmm;\nvar nnn;\nvar _mmm;\nvar _nnn;\nget mmm => null;\nset mmm(x) {}\nget nnn => null;\nset nnn(x) {}\nget _mmm => null;\nset _mmm(x) {}\nget _nnn => null;\nset _nnn(x) {}\nmmm() {}\nnnn() {}\n_mmm() {}\n_nnn() {}\ntypedef mmm();\ntypedef nnn();\ntypedef _mmm();\ntypedef _nnn();\nclass mmm {}\nclass nnn {}\nclass _mmm {}\nclass _nnn {}\n');
        } )());
    }

    test_unitMembers_topLevelVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('int c;\nint a;\nint b;\n');
            this._assertSort('int a;\nint b;\nint c;\n');
        } )());
    }

    test_unitMembers_topLevelVariable_withConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._parseTestUnit('int c;\nint a;\nconst B = 2;\nint b;\nconst A = 1;\n');
            this._assertSort('const A = 1;\nconst B = 2;\nint a;\nint b;\nint c;\n');
        } )());
    }

    _assertSort(expectedCode : string) : void {
        let sorter : any = new bare.createInstance(any,null,this.testCode,this.testUnit);
        let edits : core.DartList<any> = sorter.sort();
        let result : string = SourceEdit.applySequence(this.testCode,edits);
        expect(result,expectedCode);
    }
    _parseTestUnit(code : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource(code);
            let result : any = await this.driver.parseFile(this.testSource.fullName);
            this.testUnit = result.unit;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SortMembersTest() {
    }
}

export class properties {
}
