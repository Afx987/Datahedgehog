/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/dart/sdk/patch_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SdkPatcherTest);
    });
};
export namespace SdkPatcherTest {
    export type Constructors = 'SdkPatcherTest';
    export type Interface = Omit<SdkPatcherTest, Constructors>;
}
@DartClass
export class SdkPatcherTest {
    provider : any;

    sdkFolder : any;

    sdk : any;

    patcher : any;

    listener : any;

    setUp() : void {
        this.sdkFolder = this.provider.getFolder(this._p('/sdk'));
    }
    test_class_constructor_append_fail_notPrivate_named() {
        expect(() =>  {
            this._doTopLevelPatching('class C {}\n','@patch\nclass C {\n  C.named() {}\n}\n');
        },throwsArgumentError);
    }
    test_class_constructor_append_fail_notPrivate_unnamed() {
        expect(() =>  {
            this._doTopLevelPatching('class C {}\n','@patch\nclass C {\n  C() {}\n}\n');
        },throwsArgumentError);
    }
    test_class_constructor_append_named() {
        let unit : any = this._doTopLevelPatching('class C {\n}\n','@patch\nclass C {\n  C._named() {}\n}\n');
        this._assertUnitCode(unit,'class C {C._named() {}}');
        let clazz : any = op(Op.INDEX,unit.declarations,0);
        let constructor : any = op(Op.INDEX,clazz.members,0);
        SdkPatcherTest._assertPrevNextToken(clazz.leftBracket,constructor.beginToken);
        SdkPatcherTest._assertPrevNextToken(constructor.endToken,clazz.rightBracket);
    }
    test_class_constructor_append_unnamed() {
        let unit : any = this._doTopLevelPatching('class _C {\n}\n','@patch\nclass _C {\n  _C() {}\n}\n');
        this._assertUnitCode(unit,'class _C {_C() {}}');
        let clazz : any = op(Op.INDEX,unit.declarations,0);
        let constructor : any = op(Op.INDEX,clazz.members,0);
        SdkPatcherTest._assertPrevNextToken(clazz.leftBracket,constructor.beginToken);
        SdkPatcherTest._assertPrevNextToken(constructor.endToken,clazz.rightBracket);
    }
    test_class_constructor_patch() {
        let unit : any = this._doTopLevelPatching('class C {\n  external C.named();\n}\n','@patch\nclass C {\n  @patch\n  C.named() {\n    print(42);\n  }\n}\n');
        this._assertUnitCode(unit,'class C {C.named() {print(42);}}');
        let clazz : any = op(Op.INDEX,unit.declarations,0);
        let constructor : any = op(Op.INDEX,clazz.members,0);
        expect(constructor.externalKeyword,isNull);
        SdkPatcherTest._assertPrevNextToken(constructor.parameters.endToken,constructor.body.beginToken);
        SdkPatcherTest._assertPrevNextToken(constructor.endToken,clazz.rightBracket);
    }
    test_class_constructor_patch_fail_baseFactory_patchGenerative() {
        expect(() =>  {
            this._doTopLevelPatching('class C {\n  external factory C.named();\n}\n','@patch\nclass C {\n  @patch\n  C.named() {}\n}\n');
        },throwsArgumentError);
    }
    test_class_constructor_patch_fail_baseGenerative_patchFactory() {
        expect(() =>  {
            this._doTopLevelPatching('class C {\n  external C.named();\n}\n','@patch\nclass C {\n  @patch\n  factory C.named() {}\n}\n');
        },throwsArgumentError);
    }
    test_class_constructor_patch_fail_fieldFormalParam_inBase() {
        expect(() =>  {
            this._doTopLevelPatching('class C {\n  int f;\n  external C.named(this.f);\n}\n','@patch\nclass C {\n  @patch\n  C.named() : f = 2 {}\n}\n');
        },throwsArgumentError);
    }
    test_class_constructor_patch_fail_fieldFormalParam_inPatch() {
        expect(() =>  {
            this._doTopLevelPatching('class C {\n  int f;\n  external C.named(int f);\n}\n','@patch\nclass C {\n  @patch\n  C.named(this.f) {}\n}\n');
        },throwsArgumentError);
    }
    test_class_constructor_patch_fail_fieldFormalParam_inPatchAndBase() {
        expect(() =>  {
            this._doTopLevelPatching('class C {\n  int f;\n  external C.named(this.f);\n}\n','@patch\nclass C {\n  @patch\n  C.named(this.f) {}\n}\n');
        },throwsArgumentError);
    }
    test_class_constructor_patch_fail_hasInitializers() {
        expect(() =>  {
            this._doTopLevelPatching('class C {\n  int f;\n  external C.named() : f = 1;\n}\n','@patch\nclass C {\n  @patch\n  C.named() : f = 2 {}\n}\n');
        },throwsArgumentError);
    }
    test_class_constructor_patch_fail_noExternalKeyword() {
        expect(() =>  {
            this._doTopLevelPatching('class C {\n  C.named();\n}\n','@patch\nclass C {\n  @patch\n  C.named() {}\n}\n');
        },throwsArgumentError);
    }
    test_class_constructor_patch_fail_signatureChange() {
        expect(() =>  {
            this._doTopLevelPatching('class C {\n  external C.named(int x);\n}\n','@patch\nclass C {\n  @patch\n  C.named(double x) {}\n}\n');
        },throwsArgumentError);
    }
    test_class_constructor_patch_fail_signatureChange_nameOnly() {
        expect(() =>  {
            this._doTopLevelPatching('class C {\n  external C.named(int x);\n}\n','@patch\nclass C {\n  @patch\n  C.named(int y) {}\n}\n');
        },throwsArgumentError);
    }
    test_class_constructor_patch_initializers() {
        let unit : any = this._doTopLevelPatching('class C {\n  int f;\n  external C.named();\n}\n','@patch\nclass C {\n  @patch\n  C.named() : f = 2 {\n    print(42);\n  }\n}\n');
        this._assertUnitCode(unit,'class C {int f; C.named() : f = 2 {print(42);}}');
        let clazz : any = op(Op.INDEX,unit.declarations,0);
        let constructor : any = op(Op.INDEX,clazz.members,1);
        expect(constructor.externalKeyword,isNull);
        SdkPatcherTest._assertPrevNextToken(constructor.parameters.endToken,constructor.initializers.beginToken.previous);
        SdkPatcherTest._assertPrevNextToken(constructor.endToken,clazz.rightBracket);
    }
    test_class_field_append() {
        let unit : any = this._doTopLevelPatching('class C {\n  void a() {}\n}\n','@patch\nclass C {\n  int _b = 42;\n}\n');
        this._assertUnitCode(unit,'class C {void a() {} int _b = 42;}');
        let clazz : any = op(Op.INDEX,unit.declarations,0);
        let a : any = op(Op.INDEX,clazz.members,0);
        let b : any = op(Op.INDEX,clazz.members,1);
        SdkPatcherTest._assertPrevNextToken(a.endToken,b.beginToken);
        SdkPatcherTest._assertPrevNextToken(b.endToken,clazz.rightBracket);
    }
    test_class_field_append_fail_moreThanOne() {
        expect(() =>  {
            this._doTopLevelPatching('class A {}\n','@patch\nclass A {\n  @patch\n  int _f1, _f2;\n}\n');
        },throwsArgumentError);
    }
    test_class_field_append_fail_notPrivate() {
        expect(() =>  {
            this._doTopLevelPatching('class A {}\n','@patch\nclass A {\n  @patch\n  int b;\n}\n');
        },throwsArgumentError);
    }
    test_class_field_append_publicInPrivateClass() {
        let unit : any = this._doTopLevelPatching('class _C {\n  void a() {}\n}\n','@patch\nclass _C {\n  int b = 42;\n}\n');
        this._assertUnitCode(unit,'class _C {void a() {} int b = 42;}');
        let clazz : any = op(Op.INDEX,unit.declarations,0);
        let a : any = op(Op.INDEX,clazz.members,0);
        let b : any = op(Op.INDEX,clazz.members,1);
        SdkPatcherTest._assertPrevNextToken(a.endToken,b.beginToken);
        SdkPatcherTest._assertPrevNextToken(b.endToken,clazz.rightBracket);
    }
    test_class_field_patch_fail() {
        expect(() =>  {
            this._doTopLevelPatching('class A {}\n','@patch\nclass A {\n  @patch\n  int _f;\n}\n');
        },throwsArgumentError);
    }
    test_class_getter_append() {
        let unit : any = this._doTopLevelPatching('class C {\n  void a() {}\n}\n','@patch\nclass C {\n  int get _b => 2;\n}\n');
        this._assertUnitCode(unit,'class C {void a() {} int get _b => 2;}');
    }
    test_class_method_append() {
        let unit : any = this._doTopLevelPatching('class C {\n  void a() {}\n}\n','@patch\nclass C {\n  void _b() {}\n  void _c() {}\n}\n');
        this._assertUnitCode(unit,'class C {void a() {} void _b() {} void _c() {}}');
        let clazz : any = op(Op.INDEX,unit.declarations,0);
        let a : any = op(Op.INDEX,clazz.members,0);
        let b : any = op(Op.INDEX,clazz.members,1);
        let c : any = op(Op.INDEX,clazz.members,2);
        SdkPatcherTest._assertPrevNextToken(a.endToken,b.beginToken);
        SdkPatcherTest._assertPrevNextToken(b.endToken,c.beginToken);
        SdkPatcherTest._assertPrevNextToken(c.endToken,clazz.rightBracket);
    }
    test_class_method_fail_notPrivate() {
        expect(() =>  {
            this._doTopLevelPatching('class A {}\n','@patch\nclass A {\n  void m() {}\n}\n');
        },throwsArgumentError);
    }
    test_class_method_patch() {
        let unit : any = this._doTopLevelPatching('class C {\n  external int m();\n}\n','@patch\nclass C {\n  @patch\n  int m() => 42;\n}\n');
        this._assertUnitCode(unit,'class C {int m() => 42;}');
        let clazz : any = op(Op.INDEX,unit.declarations,0);
        let m : any = op(Op.INDEX,clazz.members,0);
        expect(m.externalKeyword,isNull);
        SdkPatcherTest._assertPrevNextToken(m.parameters.rightParenthesis,m.body.beginToken);
        SdkPatcherTest._assertPrevNextToken(m.body.endToken,clazz.rightBracket);
    }
    test_class_method_patch_fail_noExternalKeyword() {
        expect(() =>  {
            this._doTopLevelPatching('class C {\n  int m();\n}\n','@patch\nclass C {\n  @patch\n  int m() => 42;\n}\n');
        },throwsArgumentError);
    }
    test_class_method_patch_fail_signatureChange() {
        expect(() =>  {
            this._doTopLevelPatching('class C {\n  external void f(int x);\n}\n','@patch\nclass C {\n  @patch\n  void f(double x) {}\n}\n');
        },throwsArgumentError);
    }
    test_class_method_patch_fail_signatureChange_extraArgument() {
        expect(() =>  {
            this._doTopLevelPatching('class C {\n  external void f();\n}\n','@patch\nclass C {\n  @patch\n  void f(int x) {}\n}\n');
        },throwsArgumentError);
    }
    test_class_method_patch_fail_signatureChange_extraTypeTokens() {
        expect(() =>  {
            this._doTopLevelPatching('class C {\n  external List f();\n}\n','@patch\nclass C {\n  @patch\n  List<int> f() => null;\n}\n');
        },throwsArgumentError);
    }
    test_class_method_patch_fail_signatureChange_functionTypedParam_paramType() {
        expect(() =>  {
            this._doTopLevelPatching('class C {\n  external void f(void x(int y));\n}\n','@patch\nclass C {\n  @patch\n  void f(void x(double y)) {}\n}\n');
        },throwsArgumentError);
    }
    test_class_method_patch_fail_signatureChange_functionTypedParam_returnType() {
        expect(() =>  {
            this._doTopLevelPatching('class C {\n  external void f(int x());\n}\n','@patch\nclass C {\n  @patch\n  void f(double x()) {}\n}\n');
        },throwsArgumentError);
    }
    test_class_method_patch_fail_signatureChange_makeReturnTypeExplicit() {
        expect(() =>  {
            this._doTopLevelPatching('class C {\n  external f();\n}\n','@patch\nclass C {\n  @patch\n  int f() => 0;\n}\n');
        },throwsArgumentError);
    }
    test_class_method_patch_fail_signatureChange_missingArgument() {
        expect(() =>  {
            this._doTopLevelPatching('class C {\n  external void f(int x);\n}\n','@patch\nclass C {\n  @patch\n  void f() {}\n}\n');
        },throwsArgumentError);
    }
    test_class_method_patch_fail_signatureChange_missingTypeTokens() {
        expect(() =>  {
            this._doTopLevelPatching('class C {\n  external List<int> f();\n}\n','@patch\nclass C {\n  @patch\n  List f() => null;\n}\n');
        },throwsArgumentError);
    }
    test_class_method_patch_fail_signatureChange_nameOnly() {
        expect(() =>  {
            this._doTopLevelPatching('class C {\n  external void f(int x);\n}\n','@patch\nclass C {\n  @patch\n  void f(int y) {}\n}\n');
        },throwsArgumentError);
    }
    test_class_method_patch_fail_signatureChange_returnTypeOnly() {
        expect(() =>  {
            this._doTopLevelPatching('class C {\n  external void f(int x);\n}\n','@patch\nclass C {\n  @patch\n  int f(int x) {}\n}\n');
        },throwsArgumentError);
    }
    test_class_method_patch_success_defaultFormalParameter() {
        let unit : any = this._doTopLevelPatching('class C {\n  external void f(int x = 0);\n}\n','@patch\nclass C {\n  @patch\n  void f(int x) {}\n}\n');
        let cls : any = op(Op.INDEX,unit.declarations,0);
        let method : any = op(Op.INDEX,cls.members,0);
        let parameter : any = op(Op.INDEX,method.parameters.parameters,0);
        expect(parameter,new bare.createInstance(any,null));
    }
    test_class_method_patch_success_implicitReturnType() {
        this._doTopLevelPatching('class C {\n  external f();\n}\n','@patch\nclass C {\n  @patch\n  f() => null;\n}\n');
    }
    test_class_method_patch_success_multiTokenReturnType() {
        this._doTopLevelPatching('class C {\n  external List<int> f();\n}\n','@patch\nclass C {\n  @patch\n  List<int> f() => null;\n}\n');
    }
    test_class_method_patch_success_signatureChange_functionTypedParam_matching() {
        this._doTopLevelPatching('class C {\n  external void f(void x(int y));\n}\n','@patch\nclass C {\n  @patch\n  void f(void x(int y)) {}\n}\n');
    }
    test_class_setter_append() {
        let unit : any = this._doTopLevelPatching('class C {\n  void a() {}\n}\n','@patch\nclass C {\n  void set _b(_) {}\n}\n');
        this._assertUnitCode(unit,'class C {void a() {} void set _b(_) {}}');
    }
    test_directive_fail_export() {
        expect(() =>  {
            this._doTopLevelPatching('import \'a.dart\';\n','export \'c.dart\';\n');
        },throwsArgumentError);
    }
    test_directive_import() {
        let unit : any = this._doTopLevelPatching('import \'a.dart\';\npart \'b.dart\';\nint bar() => 0;\n','import \'c.dart\';\n');
        this._assertUnitCode(unit,"import 'a.dart'; part 'b.dart'; import 'c.dart'; int bar() => 0;");
    }
    test_fail_patchFileDoesNotExist() {
        expect(() =>  {
            this._setSdkLibraries('final Map<String, LibraryInfo> LIBRARIES = const <String, LibraryInfo> {\n  \'test\' : const LibraryInfo(\n    \'test/test.dart\'),\n};');
            this._createSdk();
            let patchPaths = new core.DartMap.literal([
                ['dart:test',new core.DartList.literal(this._p('/sdk/lib/does_not_exist.dart'))]]);
            let file : any = this.provider.newFile(this._p('/sdk/lib/test/test.dart'),'');
            let source : any = file.createSource(lib3.Uri.parse('dart:test'));
            let unit : any = SdkPatcher.parse(source,true,this.listener);
            this.patcher.patch(this.provider,true,patchPaths,this.listener,source,unit);
        },throwsArgumentError);
    }
    test_internal_allowNewPublicNames() {
        this._setSdkLibraries('final Map<String, LibraryInfo> LIBRARIES = const <String, LibraryInfo> {\n  \'_internal\' : const LibraryInfo(\n    \'internal/internal.dart\'),\n};');
        let patchPaths = new core.DartMap.literal([
            ['dart:_internal',new core.DartList.literal(this._p('/sdk/lib/internal/internal_patch.dart'))]]);
        let file : any = this.provider.newFile(this._p('/sdk/lib/internal/internal.dart'),'library dart._internal;\nclass A {}\nclass B {\n  B();\n}\n');
        this.provider.newFile(this._p('/sdk/lib/internal/internal_patch.dart'),'@patch\nclass B {\n  int newField;\n  B.newConstructor();\n  int newMethod() => 1;\n}\nclass NewClass {}\nint newFunction() => 2;\n');
        this._createSdk();
        let source : any = file.createSource(lib3.Uri.parse('dart:_internal'));
        let unit : any = SdkPatcher.parse(source,true,this.listener);
        this.patcher.patch(this.provider,true,patchPaths,this.listener,source,unit);
        this._assertUnitCode(unit,'library dart._internal; class A {} ' + 'class B {B(); int newField; B.newConstructor(); int newMethod() => 1;} ' + 'class NewClass {} int newFunction() => 2;');
    }
    test_part() {
        let baseLibCode : string = 'library test;\npart \'test_part.dart\';\nclass A {}\n';
        let basePartCode : string = 'part of test;\nclass B {}\n';
        this._setSdkLibraries('final Map<String, LibraryInfo> LIBRARIES = const <String, LibraryInfo> {\n  \'test\' : const LibraryInfo(\n    \'test/test.dart\',\n    patches: {VM_PLATFORM: [\'test/test_patch.dart\']}),\n};');
        let patchPaths = new core.DartMap.literal([
            ['dart:test',new core.DartList.literal(this._p('/sdk/lib/test/test_patch.dart'))]]);
        let fileLib : any = this.provider.newFile(this._p('/sdk/lib/test/test.dart'),baseLibCode);
        let filePart : any = this.provider.newFile(this._p('/sdk/lib/test/test_part.dart'),basePartCode);
        this.provider.newFile(this._p('/sdk/lib/test/test_patch.dart'),'import \'foo.dart\';\n\n@patch\nclass A {\n  int _a() => 1;\n}\n\n@patch\nclass B {\n  int _b() => 1;\n}\n\nclass _C {}\n');
        this._createSdk();
        {
            let uri : lib3.Uri = lib3.Uri.parse('dart:test');
            let source : any = fileLib.createSource(uri);
            let unit : any = SdkPatcher.parse(source,true,this.listener);
            this.patcher.patch(this.provider,true,patchPaths,this.listener,source,unit);
            this._assertUnitCode(unit,"library test; part 'test_part.dart'; import 'foo.dart'; " + "class A {int _a() => 1;} class _C {}");
        }
        {
            let uri : lib3.Uri = lib3.Uri.parse('dart:test/test_part.dart');
            let source : any = filePart.createSource(uri);
            let unit : any = SdkPatcher.parse(source,true,this.listener);
            this.patcher.patch(this.provider,true,patchPaths,this.listener,source,unit);
            this._assertUnitCode(unit,"part of test; class B {int _b() => 1;}");
        }
    }
    test_topLevel_class_append() {
        let unit : any = this._doTopLevelPatching('class A {}\n','class _B {\n  void mmm() {}\n}\n');
        this._assertUnitCode(unit,'class A {} class _B {void mmm() {}}');
        let a : any = op(Op.INDEX,unit.declarations,0);
        let b : any = op(Op.INDEX,unit.declarations,1);
        SdkPatcherTest._assertPrevNextToken(a.endToken,b.beginToken);
    }
    test_topLevel_class_fail_mixinApplication() {
        expect(() =>  {
            this._doTopLevelPatching('class A {}\n','class _B {}\nclass _C = Object with _B;\n');
        },throwsArgumentError);
    }
    test_topLevel_class_fail_notPrivate() {
        expect(() =>  {
            this._doTopLevelPatching('class A {}\n','class B {}\n');
        },throwsArgumentError);
    }
    test_topLevel_function_append() {
        let unit : any = this._doTopLevelPatching('int foo() => 0;\n','int _bar1() => 1;\nint _bar2() => 2;\n');
        this._assertUnitCode(unit,'int foo() => 0; int _bar1() => 1; int _bar2() => 2;');
        let foo : any = op(Op.INDEX,unit.declarations,0);
        let bar1 : any = op(Op.INDEX,unit.declarations,1);
        let bar2 : any = op(Op.INDEX,unit.declarations,2);
        SdkPatcherTest._assertPrevNextToken(foo.endToken,bar1.beginToken);
        SdkPatcherTest._assertPrevNextToken(bar1.endToken,bar2.beginToken);
    }
    test_topLevel_function_fail_noExternalKeyword() {
        expect(() =>  {
            this._doTopLevelPatching('int foo();\n','@patch\nint foo() => 1;\n');
        },throwsArgumentError);
    }
    test_topLevel_function_fail_notPrivate() {
        expect(() =>  {
            this._doTopLevelPatching('int foo() => 1;\n','int bar() => 2;\n');
        },throwsArgumentError);
    }
    test_topLevel_functionTypeAlias_append() {
        let unit : any = this._doTopLevelPatching('int foo() => 0;\n','typedef int _bar1();\ntypedef int _bar2();\n');
        this._assertUnitCode(unit,'int foo() => 0; typedef int _bar1(); typedef int _bar2();');
        let foo : any = op(Op.INDEX,unit.declarations,0);
        let bar1 : any = op(Op.INDEX,unit.declarations,1);
        let bar2 : any = op(Op.INDEX,unit.declarations,2);
        SdkPatcherTest._assertPrevNextToken(foo.endToken,bar1.beginToken);
        SdkPatcherTest._assertPrevNextToken(bar1.endToken,bar2.beginToken);
        expect(unit.endToken.type,TokenType.EOF);
        expect(bar2.endToken.next,same(unit.endToken));
    }
    test_topLevel_functionTypeAlias_fail_hasAnnotation() {
        expect(() =>  {
            this._doTopLevelPatching('int foo() => 0;\n','@patch\ntypedef int _bar();\n');
        },throwsArgumentError);
    }
    test_topLevel_functionTypeAlias_fail_notPrivate() {
        expect(() =>  {
            this._doTopLevelPatching('int foo() => 0;\n','typedef int bar();\n');
        },throwsArgumentError);
    }
    test_topLevel_patch_function() {
        let unit : any = this._doTopLevelPatching('external int foo();\nint bar() => 2;\n','@patch\nint foo() => 1;\n');
        this._assertUnitCode(unit,'int foo() => 1; int bar() => 2;');
        let foo : any = op(Op.INDEX,unit.declarations,0);
        let bar : any = op(Op.INDEX,unit.declarations,1);
        {
            expect(foo.externalKeyword,isNull);
            let token : any = foo.beginToken;
            expect(token.lexeme,'int');
            expect(token.previous.type,TokenType.EOF);
        }
        {
            let fooExpr : any = foo.functionExpression;
            let fooBody : any = fooExpr.body;
            expect(fooBody.beginToken.previous,same(fooExpr.parameters.endToken));
            expect(fooBody.endToken.next,same(bar.beginToken));
        }
    }
    test_topLevel_patch_function_blockBody() {
        let unit : any = this._doTopLevelPatching('external int foo();\n','@patch\nint foo() {int v = 1; return v + 2;}\n');
        this._assertUnitCode(unit,'int foo() {int v = 1; return v + 2;}');
    }
    test_topLevel_patch_function_fail_signatureChange() {
        expect(() =>  {
            this._doTopLevelPatching('external void f(int x);\n','@patch\nvoid f(double x) {}\n');
        },throwsArgumentError);
    }
    test_topLevel_patch_function_fail_signatureChange_nameOnly() {
        expect(() =>  {
            this._doTopLevelPatching('external void f(int x);\n','@patch\nvoid f(int y) {}\n');
        },throwsArgumentError);
    }
    test_topLevel_patch_function_fail_signatureChange_returnTypeOnly() {
        expect(() =>  {
            this._doTopLevelPatching('external void f(int x);\n','@patch\nint f(int x) {}\n');
        },throwsArgumentError);
    }
    test_topLevel_patch_getter() {
        let unit : any = this._doTopLevelPatching('external int get foo;\nint bar() => 2;\n','@patch\nint get foo => 1;\n');
        this._assertUnitCode(unit,'int get foo => 1; int bar() => 2;');
    }
    test_topLevel_patch_setter() {
        let unit : any = this._doTopLevelPatching('external void set foo(int val);\nint bar() => 2;\n','@patch\nvoid set foo(int val) {}\n');
        this._assertUnitCode(unit,'void set foo(int val) {} int bar() => 2;');
    }
    test_topLevel_topLevelVariable_append() {
        let unit : any = this._doTopLevelPatching('int foo() => 0;\n','int _bar;\n');
        this._assertUnitCode(unit,'int foo() => 0; int _bar;');
        let a : any = op(Op.INDEX,unit.declarations,0);
        let b : any = op(Op.INDEX,unit.declarations,1);
        SdkPatcherTest._assertPrevNextToken(a.endToken,b.beginToken);
    }
    _assertUnitCode(unit : any,expectedCode : string) : void {
        expect(unit.toSource(),expectedCode);
    }
    _createSdk() : void {
        this.sdk = new bare.createInstance(any,null,this.provider,this.sdkFolder);
        this.sdk.analysisOptions = ((_) : any =>  {
            {
                _.strongMode = true;
                return _;
            }
        })(new bare.createInstance(any,null));
    }
    _doTopLevelPatching(baseCode : string,patchCode : string) : any {
        this._setSdkLibraries('final Map<String, LibraryInfo> LIBRARIES = const <String, LibraryInfo> {\n  \'test\' : const LibraryInfo(\n    \'test/test.dart\'),\n};');
        let patchPaths = new core.DartMap.literal([
            ['dart:test',new core.DartList.literal(this._p('/sdk/lib/test/test_patch.dart'))]]);
        let file : any = this.provider.newFile(this._p('/sdk/lib/test/test.dart'),baseCode);
        this.provider.newFile(this._p('/sdk/lib/test/test_patch.dart'),patchCode);
        this._createSdk();
        let source : any = file.createSource(lib3.Uri.parse('dart:test'));
        let unit : any = SdkPatcher.parse(source,true,this.listener);
        this.patcher.patch(this.provider,true,patchPaths,this.listener,source,unit);
        return unit;
    }
    _p(path : string) : string {
        return this.provider.convertPath(path);
    }
    _setSdkLibraries(code : string) : void {
        this.provider.newFile(this._p('/sdk/lib/_internal/sdk_library_metadata/lib/libraries.dart'),code);
    }
    static _assertPrevNextToken(prev : any,next : any) : void {
        expect(prev.next,same(next));
        expect(next.previous,same(prev));
    }
    constructor() {
    }
    @defaultConstructor
    SdkPatcherTest() {
        this.provider = new bare.createInstance(any,null);
        this.patcher = new bare.createInstance(any,null);
        this.listener = new bare.createInstance(any,null);
    }
}

export class properties {
}
