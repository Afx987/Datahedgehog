/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/correction/assist_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../abstract_single_unit";
import * as lib4 from "./flutter_util";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AssistProcessorTest);
    });
};
export namespace AssistProcessorTest {
    export type Constructors = lib3.AbstractSingleUnitTest.Constructors | 'AssistProcessorTest';
    export type Interface = Omit<AssistProcessorTest, Constructors>;
}
@DartClass
export class AssistProcessorTest extends lib3.AbstractSingleUnitTest {
    offset : number;

    length : number;

    plugin : any;

    assist : any;

    change : any;

    resultCode : string;

    linkedPositionGroup : any;

    assertHasAssist(kind : any,expected : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.assist = await this._assertHasAssist(kind);
            this.change = this.assist.change;
            let fileEdits : core.DartList<any> = this.change.edits;
            expect(fileEdits,hasLength(1));
            this.resultCode = SourceEdit.applySequence(this.testCode,op(Op.INDEX,this.change.edits,0).edits);
            expect(this.resultCode,expected);
        } )());
    }

    assertHasAssistAt(offsetSearch : string,kind : any,expected : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.offset = this.findOffset(offsetSearch);
            await this.assertHasAssist(kind,expected);
        } )());
    }

    assertNoAssist(kind : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let assists : core.DartList<any> = await this._computeAssists();
            for(let assist of assists) {
                if (op(Op.EQUALS,assist.kind,kind)) {
                    throw fail(`Unexpected assist ${kind} in\n${assists.join('\n')}`);
                }
            }
        } )());
    }

    assertNoAssistAt(offsetSearch : string,kind : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.offset = this.findOffset(offsetSearch);
            await this.assertNoAssist(kind);
        } )());
    }

    expectedPosition(search : string) : any {
        let offset : number = new core.DartString(this.resultCode).indexOf(search);
        return new bare.createInstance(any,null,this.testFile,offset);
    }
    expectedPositions(patterns : core.DartList<string>) : core.DartList<any> {
        let positions : core.DartList<any> = new core.DartList.literal<any>();
        patterns.forEach((search : string) =>  {
            positions.add(this.expectedPosition(search));
        });
        return positions;
    }
    expectedSuggestions(kind : any,values : core.DartList<string>) : core.DartList<any> {
        return values.map((value : any) =>  {
            return new bare.createInstance(any,null,value,kind);
        }).toList();
    }
    processRequiredPlugins() : void {
        this.plugin = new bare.createInstance(any,null);
        let plugins : core.DartList<any> = new core.DartList.literal<any>();
        plugins.addAll(AnalysisEngine.instance.requiredPlugins);
        plugins.add(this.plugin);
        let manager : any = new bare.createInstance(any,null);
        manager.processPlugins(plugins);
    }
    setUp() : void {
        super.setUp();
        this.offset = 0;
        this.length = 0;
    }
    test_addTypeAnnotation_BAD_privateType_closureParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/my_lib.dart','library my_lib;\nclass A {}\nclass _B extends A {}\nfoo(f(_B p)) {}\n');
            await this.resolveTestUnit('import \'my_lib.dart\';\nmain() {\n  foo((test) {});\n}\n ');
            await this.assertNoAssistAt('test)',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_BAD_privateType_declaredIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/my_lib.dart','library my_lib;\nclass A {}\nclass _B extends A {}\nList<_B> getValues() => [];\n');
            await this.resolveTestUnit('import \'my_lib.dart\';\nclass A<T> {\n  main() {\n    for (var item in getValues()) {\n    }\n  }\n}\n');
            await this.assertNoAssistAt('var item',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_BAD_privateType_list() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/my_lib.dart','library my_lib;\nclass A {}\nclass _B extends A {}\nList<_B> getValues() => [];\n');
            await this.resolveTestUnit('import \'my_lib.dart\';\nmain() {\n  var v = getValues();\n}\n');
            await this.assertNoAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_BAD_privateType_variable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/my_lib.dart','library my_lib;\nclass A {}\nclass _B extends A {}\n_B getValue() => new _B();\n');
            await this.resolveTestUnit('import \'my_lib.dart\';\nmain() {\n  var v = getValue();\n}\n');
            await this.assertNoAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_classField_OK_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  final f = 0;\n}\n');
            await this.assertHasAssistAt('final ',DartAssistKind.ADD_TYPE_ANNOTATION,'class A {\n  final int f = 0;\n}\n');
        } )());
    }

    test_addTypeAnnotation_classField_OK_int() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  var f = 0;\n}\n');
            await await this.assertHasAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION,'class A {\n  int f = 0;\n}\n');
        } )());
    }

    test_addTypeAnnotation_declaredIdentifier_BAD_hasTypeAnnotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {\n  for (String item in items) {\n  }\n}\n');
            await this.assertNoAssistAt('item in',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_declaredIdentifier_BAD_inForEachBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {\n  for (var item in items) {\n    42;\n  }\n}\n');
            await this.assertNoAssistAt('42;',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_declaredIdentifier_BAD_unknownType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('main() {\n  for (var item in unknownList) {\n  }\n}\n');
            await this.assertNoAssistAt('item in',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_declaredIdentifier_generic_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A<T> {\n  main(List<List<T>> items) {\n    for (var item in items) {\n    }\n  }\n}\n');
            await this.assertHasAssistAt('item in',DartAssistKind.ADD_TYPE_ANNOTATION,'class A<T> {\n  main(List<List<T>> items) {\n    for (List<T> item in items) {\n    }\n  }\n}\n');
        } )());
    }

    test_addTypeAnnotation_declaredIdentifier_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {\n  for (var item in items) {\n  }\n}\n');
            await this.assertHasAssistAt('item in',DartAssistKind.ADD_TYPE_ANNOTATION,'main(List<String> items) {\n  for (String item in items) {\n  }\n}\n');
            await this.assertHasAssistAt('for (',DartAssistKind.ADD_TYPE_ANNOTATION,'main(List<String> items) {\n  for (String item in items) {\n  }\n}\n');
        } )());
    }

    test_addTypeAnnotation_declaredIdentifier_OK_addImport_dartUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/my_lib.dart','import \'dart:async\';\nList<Future<int>> getFutures() => null;\n');
            await this.resolveTestUnit('import \'my_lib.dart\';\nmain() {\n  for (var future in getFutures()) {\n  }\n}\n');
            await this.assertHasAssistAt('future in',DartAssistKind.ADD_TYPE_ANNOTATION,'import \'dart:async\';\nimport \'my_lib.dart\';\nmain() {\n  for (Future<int> future in getFutures()) {\n  }\n}\n');
        } )());
    }

    test_addTypeAnnotation_declaredIdentifier_OK_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {\n  for (final item in items) {\n  }\n}\n');
            await this.assertHasAssistAt('item in',DartAssistKind.ADD_TYPE_ANNOTATION,'main(List<String> items) {\n  for (final String item in items) {\n  }\n}\n');
        } )());
    }

    test_addTypeAnnotation_local_BAD_bottom() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v = throw 42;\n}\n');
            await this.assertNoAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_local_BAD_hasTypeAnnotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  int v = 42;\n}\n');
            await this.assertNoAssistAt(' = 42',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_local_BAD_multiple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var a = 1, b = \'\';\n}\n');
            await this.assertNoAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_local_BAD_noValue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('main() {\n  var v;\n}\n');
            await this.assertNoAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_local_BAD_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v = null;\n}\n');
            await this.assertNoAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_local_BAD_onInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var abc = 0;\n}\n');
            await this.assertNoAssistAt('0;',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_local_BAD_unknown() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('main() {\n  var v = unknownVar;\n}\n');
            await this.assertNoAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_local_generic_OK_literal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  main(List<int> items) {\n    var v = items;\n  }\n}\n');
            await this.assertHasAssistAt('v =',DartAssistKind.ADD_TYPE_ANNOTATION,'class A {\n  main(List<int> items) {\n    List<int> v = items;\n  }\n}\n');
        } )());
    }

    test_addTypeAnnotation_local_generic_OK_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A<T> {\n  main(List<T> items) {\n    var v = items;\n  }\n}\n');
            await this.assertHasAssistAt('v =',DartAssistKind.ADD_TYPE_ANNOTATION,'class A<T> {\n  main(List<T> items) {\n    List<T> v = items;\n  }\n}\n');
        } )());
    }

    test_addTypeAnnotation_local_OK_addImport_dartUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/my_lib.dart','import \'dart:async\';\nFuture<int> getFutureInt() => null;\n');
            await this.resolveTestUnit('import \'my_lib.dart\';\nmain() {\n  var v = getFutureInt();\n}\n');
            await this.assertHasAssistAt('v =',DartAssistKind.ADD_TYPE_ANNOTATION,'import \'dart:async\';\nimport \'my_lib.dart\';\nmain() {\n  Future<int> v = getFutureInt();\n}\n');
        } )());
    }

    test_addTypeAnnotation_local_OK_addImport_notLibraryUnit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/my_lib.dart','import \'dart:async\';\nFuture<int> getFutureInt() => null;\n');
            let appCode : string = 'library my_app;\nimport \'my_lib.dart\';\npart \'test.dart\';\n';
            this.testCode = 'part of my_app;\nmain() {\n  var v = getFutureInt();\n}\n';
            let appSource : any = this.addSource('/app.dart',appCode);
            this.testSource = this.addSource('/test.dart',this.testCode);
            if (this.enableNewAnalysisDriver) {
                await this.resolveTestUnit(this.testCode);
            }else {
                this.context.resolveCompilationUnit2(appSource,appSource);
                this.testUnit = this.context.resolveCompilationUnit2(this.testSource,appSource);
                this.testUnitElement = this.testUnit.element;
                this.testLibraryElement = this.testUnitElement.library;
            }
            this.offset = this.findOffset('v = ');
            this.assist = await this._assertHasAssist(DartAssistKind.ADD_TYPE_ANNOTATION);
            this.change = this.assist.change;
            {
                let testFileEdit = this.change.getFileEdit('/app.dart');
                let resultCode = SourceEdit.applySequence(appCode,testFileEdit.edits);
                expect(resultCode,'library my_app;\nimport \'dart:async\';\nimport \'my_lib.dart\';\npart \'test.dart\';\n');
            }
            {
                let testFileEdit = this.change.getFileEdit('/test.dart');
                let resultCode = SourceEdit.applySequence(this.testCode,testFileEdit.edits);
                expect(resultCode,'part of my_app;\nmain() {\n  Future<int> v = getFutureInt();\n}\n');
            }
        } )());
    }

    test_addTypeAnnotation_local_OK_addImport_relUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/aa/bbb/lib_a.dart','class MyClass {}\n');
            this.addSource('/ccc/lib_b.dart','import \'../aa/bbb/lib_a.dart\';\nMyClass newMyClass() => null;\n');
            await this.resolveTestUnit('import \'ccc/lib_b.dart\';\nmain() {\n  var v = newMyClass();\n}\n');
            await this.assertHasAssistAt('v =',DartAssistKind.ADD_TYPE_ANNOTATION,'import \'aa/bbb/lib_a.dart\';\nimport \'ccc/lib_b.dart\';\nmain() {\n  MyClass v = newMyClass();\n}\n');
        } )());
    }

    test_addTypeAnnotation_local_OK_Function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v = () => 1;\n}\n');
            await this.assertHasAssistAt('v =',DartAssistKind.ADD_TYPE_ANNOTATION,'main() {\n  Function v = () => 1;\n}\n');
        } )());
    }

    test_addTypeAnnotation_local_OK_int() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v = 0;\n}\n');
            await this.assertHasAssistAt('v =',DartAssistKind.ADD_TYPE_ANNOTATION,'main() {\n  int v = 0;\n}\n');
        } )());
    }

    test_addTypeAnnotation_local_OK_List() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v = <String>[];\n}\n');
            await this.assertHasAssistAt('v =',DartAssistKind.ADD_TYPE_ANNOTATION,'main() {\n  List<String> v = <String>[];\n}\n');
        } )());
    }

    test_addTypeAnnotation_local_OK_localType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C {}\nC f() => null;\nmain() {\n  var x = f();\n}\n');
            await this.assertHasAssistAt('x =',DartAssistKind.ADD_TYPE_ANNOTATION,'class C {}\nC f() => null;\nmain() {\n  C x = f();\n}\n');
        } )());
    }

    test_addTypeAnnotation_local_OK_onName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var abc = 0;\n}\n');
            await this.assertHasAssistAt('bc',DartAssistKind.ADD_TYPE_ANNOTATION,'main() {\n  int abc = 0;\n}\n');
        } )());
    }

    test_addTypeAnnotation_local_OK_onVar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v = 0;\n}\n');
            await this.assertHasAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION,'main() {\n  int v = 0;\n}\n');
        } )());
    }

    test_addTypeAnnotation_OK_privateType_sameLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class _A {}\n_A getValue() => new _A();\nmain() {\n  var v = getValue();\n}\n');
            await this.assertHasAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION,'class _A {}\n_A getValue() => new _A();\nmain() {\n  _A v = getValue();\n}\n');
        } )());
    }

    test_addTypeAnnotation_parameter_BAD_hasExplicitType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('foo(f(int p)) {}\nmain() {\n  foo((num test) {});\n}\n');
            await this.assertNoAssistAt('test',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_parameter_BAD_noPropagatedType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('foo(f(p)) {}\nmain() {\n  foo((test) {});\n}\n');
            await this.assertNoAssistAt('test',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_parameter_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('foo(f(int p)) {}\nmain() {\n  foo((test) {});\n}\n');
            await this.assertHasAssistAt('test',DartAssistKind.ADD_TYPE_ANNOTATION,'foo(f(int p)) {}\nmain() {\n  foo((int test) {});\n}\n');
        } )());
    }

    test_addTypeAnnotation_topLevelField_BAD_multiple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('var A = 1, V = \'\';\n');
            await this.assertNoAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_topLevelField_BAD_noValue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('var V;\n');
            await this.assertNoAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_topLevelField_OK_int() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('var V = 0;\n');
            await this.assertHasAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION,'int V = 0;\n');
        } )());
    }

    test_assignToLocalVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  List<int> bytes;\n  readBytes();\n}\nList<int> readBytes() => <int>[];\n');
            await this.assertHasAssistAt('readBytes();',DartAssistKind.ASSIGN_TO_LOCAL_VARIABLE,'main() {\n  List<int> bytes;\n  var readBytes = readBytes();\n}\nList<int> readBytes() => <int>[];\n');
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('readBytes = '),this.expectedSuggestions(LinkedEditSuggestionKind.VARIABLE,new core.DartList.literal('list','bytes2','readBytes')));
        } )());
    }

    test_assignToLocalVariable_alreadyAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var vvv;\n  vvv = 42;\n}\n');
            await this.assertNoAssistAt('vvv =',DartAssistKind.ASSIGN_TO_LOCAL_VARIABLE);
        } )());
    }

    test_assignToLocalVariable_inClosure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  print(() {\n    12345;\n  });\n}\n');
            await this.assertHasAssistAt('345',DartAssistKind.ASSIGN_TO_LOCAL_VARIABLE,'main() {\n  print(() {\n    var i = 12345;\n  });\n}\n');
        } )());
    }

    test_assignToLocalVariable_invocationArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  f(12345);\n}\nvoid f(p) {}\n');
            await this.assertNoAssistAt('345',DartAssistKind.ASSIGN_TO_LOCAL_VARIABLE);
        } )());
    }

    test_assignToLocalVariable_throw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  throw 42;\n}\n');
            await this.assertNoAssistAt('throw ',DartAssistKind.ASSIGN_TO_LOCAL_VARIABLE);
        } )());
    }

    test_assignToLocalVariable_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  f();\n}\nvoid f() {}\n');
            await this.assertNoAssistAt('f();',DartAssistKind.ASSIGN_TO_LOCAL_VARIABLE);
        } )());
    }

    test_convertDocumentationIntoBlock_BAD_alreadyBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('/**\n * AAAAAAA\n */\nclass A {}\n');
            await this.assertNoAssistAt('AAA',DartAssistKind.CONVERT_DOCUMENTATION_INTO_BLOCK);
        } )());
    }

    test_convertDocumentationIntoBlock_BAD_notDocumentation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('// AAAA\nclass A {}\n');
            await this.assertNoAssistAt('AAA',DartAssistKind.CONVERT_DOCUMENTATION_INTO_BLOCK);
        } )());
    }

    test_convertDocumentationIntoBlock_OK_noSpaceBeforeText() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  /// AAAAA\n  ///BBBBB\n  ///\n  /// CCCCC\n  mmm() {}\n}\n');
            await this.assertHasAssistAt('AAAAA',DartAssistKind.CONVERT_DOCUMENTATION_INTO_BLOCK,'class A {\n  /**\n   * AAAAA\n   *BBBBB\n   *\n   * CCCCC\n   */\n  mmm() {}\n}\n');
        } )());
    }

    test_convertDocumentationIntoBlock_OK_onReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('/// AAAAAAA [int] AAAAAAA\nclass A {}\n');
            await this.assertHasAssistAt('nt]',DartAssistKind.CONVERT_DOCUMENTATION_INTO_BLOCK,'/**\n * AAAAAAA [int] AAAAAAA\n */\nclass A {}\n');
        } )());
    }

    test_convertDocumentationIntoBlock_OK_onText() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  /// AAAAAAA [int] AAAAAAA\n  /// BBBBBBBB BBBB BBBB\n  /// CCC [A] CCCCCCCCCCC\n  mmm() {}\n}\n');
            await this.assertHasAssistAt('AAA [',DartAssistKind.CONVERT_DOCUMENTATION_INTO_BLOCK,'class A {\n  /**\n   * AAAAAAA [int] AAAAAAA\n   * BBBBBBBB BBBB BBBB\n   * CCC [A] CCCCCCCCCCC\n   */\n  mmm() {}\n}\n');
        } )());
    }

    test_convertDocumentationIntoLine_BAD_alreadyLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('/// AAAAAAA\nclass A {}\n');
            await this.assertNoAssistAt('AAA',DartAssistKind.CONVERT_DOCUMENTATION_INTO_LINE);
        } )());
    }

    test_convertDocumentationIntoLine_BAD_notDocumentation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('/* AAAA */\nclass A {}\n');
            await this.assertNoAssistAt('AAA',DartAssistKind.CONVERT_DOCUMENTATION_INTO_LINE);
        } )());
    }

    test_convertDocumentationIntoLine_OK_onReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('/**\n * AAAAAAA [int] AAAAAAA\n */\nclass A {}\n');
            await this.assertHasAssistAt('nt]',DartAssistKind.CONVERT_DOCUMENTATION_INTO_LINE,'/// AAAAAAA [int] AAAAAAA\nclass A {}\n');
        } )());
    }

    test_convertDocumentationIntoLine_OK_onText() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  /**\n   * AAAAAAA [int] AAAAAAA\n   * BBBBBBBB BBBB BBBB\n   * CCC [A] CCCCCCCCCCC\n   */\n  mmm() {}\n}\n');
            await this.assertHasAssistAt('AAA [',DartAssistKind.CONVERT_DOCUMENTATION_INTO_LINE,'class A {\n  /// AAAAAAA [int] AAAAAAA\n  /// BBBBBBBB BBBB BBBB\n  /// CCC [A] CCCCCCCCCCC\n  mmm() {}\n}\n');
        } )());
    }

    test_convertDocumentationIntoLine_OK_onText_hasFirstLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  /** AAAAAAA [int] AAAAAAA\n   * BBBBBBBB BBBB BBBB\n   * CCC [A] CCCCCCCCCCC\n   */\n  mmm() {}\n}\n');
            await this.assertHasAssistAt('AAA [',DartAssistKind.CONVERT_DOCUMENTATION_INTO_LINE,'class A {\n  /// AAAAAAA [int] AAAAAAA\n  /// BBBBBBBB BBBB BBBB\n  /// CCC [A] CCCCCCCCCCC\n  mmm() {}\n}\n');
        } )());
    }

    test_convertFlutterChild_OK_multiLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';\nbuild() {\n  return new Scaffold(\n// start\n    body: new Center(\n      /*caret*/child: new Container(\n        width: 200.0,\n        height: 300.0,\n      ),\n      key: null,\n    ),\n// end\n  );\n}\n');
            this._setCaretLocation();
            await this.assertHasAssist(DartAssistKind.CONVERT_FLUTTER_CHILD,'import \'package:flutter/src/widgets/framework.dart\';\nbuild() {\n  return new Scaffold(\n// start\n    body: new Center(\n      /*caret*/children: <Widget>[\n        new Container(\n          width: 200.0,\n          height: 300.0,\n        ),\n      ],\n      key: null,\n    ),\n// end\n  );\n}\n');
        } )());
    }

    test_convertFlutterChild_OK_newlineChild() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';\nbuild() {\n  return new Scaffold(\n// start\n    body: new Center(\n      /*caret*/child:\n          new Container(\n        width: 200.0,\n        height: 300.0,\n      ),\n      key: null,\n    ),\n// end\n  );\n}\n');
            this._setCaretLocation();
            await this.assertHasAssist(DartAssistKind.CONVERT_FLUTTER_CHILD,'import \'package:flutter/src/widgets/framework.dart\';\nbuild() {\n  return new Scaffold(\n// start\n    body: new Center(\n      /*caret*/children: <Widget>[\n        new Container(\n          width: 200.0,\n          height: 300.0,\n        ),\n      ],\n      key: null,\n    ),\n// end\n  );\n}\n');
        } )());
    }

    test_convertFlutterChild_OK_singleLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';\nbuild() {\n  return new Scaffold(\n// start\n    body: new Center(\n      /*caret*/child: new GestureDetector(),\n      key: null,\n    ),\n// end\n  );\n}\n');
            this._setCaretLocation();
            await this.assertHasAssist(DartAssistKind.CONVERT_FLUTTER_CHILD,'import \'package:flutter/src/widgets/framework.dart\';\nbuild() {\n  return new Scaffold(\n// start\n    body: new Center(\n      /*caret*/children: <Widget>[new GestureDetector()],\n      key: null,\n    ),\n// end\n  );\n}\n');
        } )());
    }

    test_convertToBlockBody_BAD_noEnclosingFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('var v = 123;\n');
            await this.assertNoAssistAt('v =',DartAssistKind.CONVERT_INTO_BLOCK_BODY);
        } )());
    }

    test_convertToBlockBody_BAD_notExpressionBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('fff() {\n  return 123;\n}\n');
            await this.assertNoAssistAt('fff() {',DartAssistKind.CONVERT_INTO_BLOCK_BODY);
        } )());
    }

    test_convertToBlockBody_OK_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  mmm() async => 123;\n}\n');
            await this.assertHasAssistAt('mmm()',DartAssistKind.CONVERT_INTO_BLOCK_BODY,'class A {\n  mmm() async {\n    return 123;\n  }\n}\n');
        } )());
    }

    test_convertToBlockBody_OK_closure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('setup(x) {}\nmain() {\n  setup(() => 42);\n}\n');
            await this.assertHasAssistAt('() => 42',DartAssistKind.CONVERT_INTO_BLOCK_BODY,'setup(x) {}\nmain() {\n  setup(() {\n    return 42;\n  });\n}\n');
            {
                let exitPos : any = this.change.selection;
                expect(exitPos,isNotNull);
                expect(exitPos.file,this.testFile);
                expect(op(Op.MINUS,exitPos.offset,3),new core.DartString(this.resultCode).indexOf('42;'));
            }
        } )());
    }

    test_convertToBlockBody_OK_closure_voidExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('setup(x) {}\nmain() {\n  setup(() => print(\'done\'));\n}\n');
            await this.assertHasAssistAt('() => print',DartAssistKind.CONVERT_INTO_BLOCK_BODY,'setup(x) {}\nmain() {\n  setup(() {\n    print(\'done\');\n  });\n}\n');
            {
                let exitPos : any = this.change.selection;
                expect(exitPos,isNotNull);
                expect(exitPos.file,this.testFile);
                expect(op(Op.MINUS,exitPos.offset,3),new core.DartString(this.resultCode).indexOf("');"));
            }
        } )());
    }

    test_convertToBlockBody_OK_constructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  factory A() => null;\n}\n');
            await this.assertHasAssistAt('A()',DartAssistKind.CONVERT_INTO_BLOCK_BODY,'class A {\n  factory A() {\n    return null;\n  }\n}\n');
        } )());
    }

    test_convertToBlockBody_OK_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  mmm() => 123;\n}\n');
            await this.assertHasAssistAt('mmm()',DartAssistKind.CONVERT_INTO_BLOCK_BODY,'class A {\n  mmm() {\n    return 123;\n  }\n}\n');
        } )());
    }

    test_convertToBlockBody_OK_onName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('fff() => 123;\n');
            await this.assertHasAssistAt('fff()',DartAssistKind.CONVERT_INTO_BLOCK_BODY,'fff() {\n  return 123;\n}\n');
        } )());
    }

    test_convertToBlockBody_OK_onValue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('fff() => 123;\n');
            await this.assertHasAssistAt('23;',DartAssistKind.CONVERT_INTO_BLOCK_BODY,'fff() {\n  return 123;\n}\n');
        } )());
    }

    test_convertToExpressionBody_BAD_already() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('fff() => 42;\n');
            await this.assertNoAssistAt('fff()',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY);
        } )());
    }

    test_convertToExpressionBody_BAD_moreThanOneStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('fff() {\n  var v = 42;\n  return v;\n}\n');
            await this.assertNoAssistAt('fff()',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY);
        } )());
    }

    test_convertToExpressionBody_BAD_noEnclosingFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('var V = 42;\n');
            await this.assertNoAssistAt('V = ',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY);
        } )());
    }

    test_convertToExpressionBody_BAD_noReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('fff() {\n  var v = 42;\n}\n');
            await this.assertNoAssistAt('fff()',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY);
        } )());
    }

    test_convertToExpressionBody_BAD_noReturnValue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('fff() {\n  return;\n}\n');
            await this.assertNoAssistAt('fff()',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY);
        } )());
    }

    test_convertToExpressionBody_OK_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  mmm() async {\n    return 42;\n  }\n}\n');
            await this.assertHasAssistAt('mmm',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY,'class A {\n  mmm() async => 42;\n}\n');
        } )());
    }

    test_convertToExpressionBody_OK_closure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('setup(x) {}\nmain() {\n  setup(() {\n    return 42;\n  });\n}\n');
            await this.assertHasAssistAt('42;',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY,'setup(x) {}\nmain() {\n  setup(() => 42);\n}\n');
        } )());
    }

    test_convertToExpressionBody_OK_closure_voidExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('setup(x) {}\nmain() {\n  setup(() {\n    print(\'test\');\n  });\n}\n');
            await this.assertHasAssistAt('print(',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY,'setup(x) {}\nmain() {\n  setup(() => print(\'test\'));\n}\n');
        } )());
    }

    test_convertToExpressionBody_OK_constructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  factory A() {\n    return null;\n  }\n}\n');
            await this.assertHasAssistAt('A()',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY,'class A {\n  factory A() => null;\n}\n');
        } )());
    }

    test_convertToExpressionBody_OK_function_onBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('fff() {\n  return 42;\n}\n');
            await this.assertHasAssistAt('{',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY,'fff() => 42;\n');
        } )());
    }

    test_convertToExpressionBody_OK_function_onName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('fff() {\n  return 42;\n}\n');
            await this.assertHasAssistAt('ff()',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY,'fff() => 42;\n');
        } )());
    }

    test_convertToExpressionBody_OK_method_onBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  m() { // marker\n    return 42;\n  }\n}\n');
            await this.assertHasAssistAt('{ // marker',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY,'class A {\n  m() => 42;\n}\n');
        } )());
    }

    test_convertToExpressionBody_OK_topFunction_onReturnStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('fff() {\n  return 42;\n}\n');
            await this.assertHasAssistAt('return',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY,'fff() => 42;\n');
        } )());
    }

    test_convertToFieldParameter_BAD_additionalUse() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int aaa2;\n  int bbb2;\n  A(int aaa) : aaa2 = aaa, bbb2 = aaa;\n}\n');
            await this.assertNoAssistAt('aaa)',DartAssistKind.CONVERT_TO_FIELD_PARAMETER);
        } )());
    }

    test_convertToFieldParameter_BAD_notPureAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int aaa2;\n  A(int aaa) : aaa2 = aaa * 2;\n}\n');
            await this.assertNoAssistAt('aaa)',DartAssistKind.CONVERT_TO_FIELD_PARAMETER);
        } )());
    }

    test_convertToFieldParameter_OK_firstInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int aaa2;\n  int bbb2;\n  A(int aaa, int bbb) : aaa2 = aaa, bbb2 = bbb;\n}\n');
            await this.assertHasAssistAt('aaa, ',DartAssistKind.CONVERT_TO_FIELD_PARAMETER,'class A {\n  int aaa2;\n  int bbb2;\n  A(this.aaa2, int bbb) : bbb2 = bbb;\n}\n');
        } )());
    }

    test_convertToFieldParameter_OK_onParameterName_inInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int test2;\n  A(int test) : test2 = test {\n  }\n}\n');
            await this.assertHasAssistAt('test {',DartAssistKind.CONVERT_TO_FIELD_PARAMETER,'class A {\n  int test2;\n  A(this.test2) {\n  }\n}\n');
        } )());
    }

    test_convertToFieldParameter_OK_onParameterName_inParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int test;\n  A(int test) : test = test {\n  }\n}\n');
            await this.assertHasAssistAt('test)',DartAssistKind.CONVERT_TO_FIELD_PARAMETER,'class A {\n  int test;\n  A(this.test) {\n  }\n}\n');
        } )());
    }

    test_convertToFieldParameter_OK_secondInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int aaa2;\n  int bbb2;\n  A(int aaa, int bbb) : aaa2 = aaa, bbb2 = bbb;\n}\n');
            await this.assertHasAssistAt('bbb)',DartAssistKind.CONVERT_TO_FIELD_PARAMETER,'class A {\n  int aaa2;\n  int bbb2;\n  A(int aaa, this.bbb2) : aaa2 = aaa;\n}\n');
        } )());
    }

    test_convertToFinalField_BAD_hasSetter_inThisClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int get foo => null;\n  void set foo(_) {}\n}\n');
            await this.assertNoAssistAt('get foo',DartAssistKind.CONVERT_INTO_FINAL_FIELD);
        } )());
    }

    test_convertToFinalField_BAD_notExpressionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int get foo {\n    int v = 1 + 2;\n    return v + 3;\n  }\n}\n');
            await this.assertNoAssistAt('get foo',DartAssistKind.CONVERT_INTO_FINAL_FIELD);
        } )());
    }

    test_convertToFinalField_BAD_notGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int foo() => 42;\n}\n');
            await this.assertNoAssistAt('foo',DartAssistKind.CONVERT_INTO_FINAL_FIELD);
        } )());
    }

    test_convertToFinalField_OK_blockBody_onlyReturnStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int get foo {\n    return 1 + 2;\n  }\n}\n');
            await this.assertHasAssistAt('get foo',DartAssistKind.CONVERT_INTO_FINAL_FIELD,'class A {\n  final int foo = 1 + 2;\n}\n');
        } )());
    }

    test_convertToFinalField_OK_hasOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('const myAnnotation = const Object();\nclass A {\n  @myAnnotation\n  int get foo => 42;\n}\n');
            await this.assertHasAssistAt('get foo',DartAssistKind.CONVERT_INTO_FINAL_FIELD,'const myAnnotation = const Object();\nclass A {\n  @myAnnotation\n  final int foo = 42;\n}\n');
        } )());
    }

    test_convertToFinalField_OK_hasSetter_inSuper() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  void set foo(_) {}\n}\nclass B extends A {\n  int get foo => null;\n}\n');
            await this.assertHasAssistAt('get foo',DartAssistKind.CONVERT_INTO_FINAL_FIELD,'class A {\n  void set foo(_) {}\n}\nclass B extends A {\n  final int foo;\n}\n');
        } )());
    }

    test_convertToFinalField_OK_notNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int get foo => 1 + 2;\n}\n');
            await this.assertHasAssistAt('get foo',DartAssistKind.CONVERT_INTO_FINAL_FIELD,'class A {\n  final int foo = 1 + 2;\n}\n');
        } )());
    }

    test_convertToFinalField_OK_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int get foo => null;\n}\n');
            await this.assertHasAssistAt('get foo',DartAssistKind.CONVERT_INTO_FINAL_FIELD,'class A {\n  final int foo;\n}\n');
        } )());
    }

    test_convertToFinalField_OK_onName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int get foo => 42;\n}\n');
            await this.assertHasAssistAt('foo',DartAssistKind.CONVERT_INTO_FINAL_FIELD,'class A {\n  final int foo = 42;\n}\n');
        } )());
    }

    test_convertToFinalField_OK_onReturnType_parameterized() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  List<int> get foo => null;\n}\n');
            await this.assertHasAssistAt('nt> get',DartAssistKind.CONVERT_INTO_FINAL_FIELD,'class A {\n  final List<int> foo;\n}\n');
        } )());
    }

    test_convertToFinalField_OK_onReturnType_simple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int get foo => 42;\n}\n');
            await this.assertHasAssistAt('int get',DartAssistKind.CONVERT_INTO_FINAL_FIELD,'class A {\n  final int foo = 42;\n}\n');
        } )());
    }

    test_convertToForIndex_BAD_bodyNotBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {\n  for (String item in items) print(item);\n}\n');
            await this.assertNoAssistAt('for (String',DartAssistKind.CONVERT_INTO_FOR_INDEX);
        } )());
    }

    test_convertToForIndex_BAD_doesNotDeclareVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {\n  String item;\n  for (item in items) {\n    print(item);\n  }\n}\n');
            await this.assertNoAssistAt('for (item',DartAssistKind.CONVERT_INTO_FOR_INDEX);
        } )());
    }

    test_convertToForIndex_BAD_iterableIsNotVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  for (String item in [\'a\', \'b\', \'c\']) {\n    print(item);\n  }\n}\n');
            await this.assertNoAssistAt('for (String',DartAssistKind.CONVERT_INTO_FOR_INDEX);
        } )());
    }

    test_convertToForIndex_BAD_iterableNotList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(Iterable<String> items) {\n  for (String item in items) {\n    print(item);\n  }\n}\n');
            await this.assertNoAssistAt('for (String',DartAssistKind.CONVERT_INTO_FOR_INDEX);
        } )());
    }

    test_convertToForIndex_BAD_usesIJK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {\n  for (String item in items) {\n    print(item);\n    int i, j, k;\n  }\n}\n');
            await this.assertNoAssistAt('for (String',DartAssistKind.CONVERT_INTO_FOR_INDEX);
        } )());
    }

    test_convertToForIndex_OK_onDeclaredIdentifier_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {\n  for (String item in items) {\n    print(item);\n  }\n}\n');
            await this.assertHasAssistAt('item in',DartAssistKind.CONVERT_INTO_FOR_INDEX,'main(List<String> items) {\n  for (int i = 0; i < items.length; i++) {\n    String item = items[i];\n    print(item);\n  }\n}\n');
        } )());
    }

    test_convertToForIndex_OK_onDeclaredIdentifier_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {\n  for (String item in items) {\n    print(item);\n  }\n}\n');
            await this.assertHasAssistAt('tring item',DartAssistKind.CONVERT_INTO_FOR_INDEX,'main(List<String> items) {\n  for (int i = 0; i < items.length; i++) {\n    String item = items[i];\n    print(item);\n  }\n}\n');
        } )());
    }

    test_convertToForIndex_OK_onFor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {\n  for (String item in items) {\n    print(item);\n  }\n}\n');
            await this.assertHasAssistAt('for (String',DartAssistKind.CONVERT_INTO_FOR_INDEX,'main(List<String> items) {\n  for (int i = 0; i < items.length; i++) {\n    String item = items[i];\n    print(item);\n  }\n}\n');
        } )());
    }

    test_convertToForIndex_OK_usesI() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {\n  for (String item in items) {\n    int i = 0;\n  }\n}\n');
            await this.assertHasAssistAt('for (String',DartAssistKind.CONVERT_INTO_FOR_INDEX,'main(List<String> items) {\n  for (int j = 0; j < items.length; j++) {\n    String item = items[j];\n    int i = 0;\n  }\n}\n');
        } )());
    }

    test_convertToForIndex_OK_usesIJ() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {\n  for (String item in items) {\n    print(item);\n    int i = 0, j = 1;\n  }\n}\n');
            await this.assertHasAssistAt('for (String',DartAssistKind.CONVERT_INTO_FOR_INDEX,'main(List<String> items) {\n  for (int k = 0; k < items.length; k++) {\n    String item = items[k];\n    print(item);\n    int i = 0, j = 1;\n  }\n}\n');
        } )());
    }

    test_convertToGetter_BAD_noInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('class A {\n  final int foo;\n}\n');
            await this.assertNoAssistAt('foo',DartAssistKind.CONVERT_INTO_GETTER);
        } )());
    }

    test_convertToGetter_BAD_notFinal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int foo = 1;\n}\n');
            await this.assertNoAssistAt('foo',DartAssistKind.CONVERT_INTO_GETTER);
        } )());
    }

    test_convertToGetter_BAD_notSingleField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  final int foo = 1, bar = 2;\n}\n');
            await this.assertNoAssistAt('foo',DartAssistKind.CONVERT_INTO_GETTER);
        } )());
    }

    test_convertToGetter_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('const myAnnotation = const Object();\nclass A {\n  @myAnnotation\n  final int foo = 1 + 2;\n}\n');
            await this.assertHasAssistAt('foo =',DartAssistKind.CONVERT_INTO_GETTER,'const myAnnotation = const Object();\nclass A {\n  @myAnnotation\n  int get foo => 1 + 2;\n}\n');
        } )());
    }

    test_convertToGetter_OK_noType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  final foo = 42;\n}\n');
            await this.assertHasAssistAt('foo =',DartAssistKind.CONVERT_INTO_GETTER,'class A {\n  get foo => 42;\n}\n');
        } )());
    }

    test_convertToIsNot_BAD_is_alreadyIsNot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  p is! String;\n}\n');
            await this.assertNoAssistAt('is!',DartAssistKind.CONVERT_INTO_IS_NOT);
        } )());
    }

    test_convertToIsNot_BAD_is_noEnclosingParenthesis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  p is String;\n}\n');
            await this.assertNoAssistAt('is String',DartAssistKind.CONVERT_INTO_IS_NOT);
        } )());
    }

    test_convertToIsNot_BAD_is_noPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  (p is String);\n}\n');
            await this.assertNoAssistAt('is String',DartAssistKind.CONVERT_INTO_IS_NOT);
        } )());
    }

    test_convertToIsNot_BAD_is_notIsExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  123 + 456;\n}\n');
            await this.assertNoAssistAt('123 +',DartAssistKind.CONVERT_INTO_IS_NOT);
        } )());
    }

    test_convertToIsNot_BAD_is_notTheNotOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('main(p) {\n  ++(p is String);\n}\n');
            await this.assertNoAssistAt('is String',DartAssistKind.CONVERT_INTO_IS_NOT);
        } )());
    }

    test_convertToIsNot_BAD_not_alreadyIsNot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  !(p is! String);\n}\n');
            await this.assertNoAssistAt('!(p',DartAssistKind.CONVERT_INTO_IS_NOT);
        } )());
    }

    test_convertToIsNot_BAD_not_noEnclosingParenthesis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  !p;\n}\n');
            await this.assertNoAssistAt('!p',DartAssistKind.CONVERT_INTO_IS_NOT);
        } )());
    }

    test_convertToIsNot_BAD_not_notIsExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  !(p == null);\n}\n');
            await this.assertNoAssistAt('!(p',DartAssistKind.CONVERT_INTO_IS_NOT);
        } )());
    }

    test_convertToIsNot_BAD_not_notTheNotOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('main(p) {\n  ++(p is String);\n}\n');
            await this.assertNoAssistAt('++(',DartAssistKind.CONVERT_INTO_IS_NOT);
        } )());
    }

    test_convertToIsNot_OK_childOfIs_left() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  !(p is String);\n}\n');
            await this.assertHasAssistAt('p is',DartAssistKind.CONVERT_INTO_IS_NOT,'main(p) {\n  p is! String;\n}\n');
        } )());
    }

    test_convertToIsNot_OK_childOfIs_right() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  !(p is String);\n}\n');
            await this.assertHasAssistAt('String)',DartAssistKind.CONVERT_INTO_IS_NOT,'main(p) {\n  p is! String;\n}\n');
        } )());
    }

    test_convertToIsNot_OK_is() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  !(p is String);\n}\n');
            await this.assertHasAssistAt('is String',DartAssistKind.CONVERT_INTO_IS_NOT,'main(p) {\n  p is! String;\n}\n');
        } )());
    }

    test_convertToIsNot_OK_is_higherPrecedencePrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  !!(p is String);\n}\n');
            await this.assertHasAssistAt('is String',DartAssistKind.CONVERT_INTO_IS_NOT,'main(p) {\n  !(p is! String);\n}\n');
        } )());
    }

    test_convertToIsNot_OK_is_not_higherPrecedencePrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  !!(p is String);\n}\n');
            await this.assertHasAssistAt('!(p',DartAssistKind.CONVERT_INTO_IS_NOT,'main(p) {\n  !(p is! String);\n}\n');
        } )());
    }

    test_convertToIsNot_OK_not() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  !(p is String);\n}\n');
            await this.assertHasAssistAt('!(p',DartAssistKind.CONVERT_INTO_IS_NOT,'main(p) {\n  p is! String;\n}\n');
        } )());
    }

    test_convertToIsNot_OK_parentheses() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  !(p is String);\n}\n');
            await this.assertHasAssistAt('(p is',DartAssistKind.CONVERT_INTO_IS_NOT,'main(p) {\n  p is! String;\n}\n');
        } )());
    }

    test_convertToIsNotEmpty_BAD_noBang() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('main(String str) {\n  ~str.isEmpty;\n}\n');
            await this.assertNoAssistAt('isEmpty;',DartAssistKind.CONVERT_INTO_IS_NOT_EMPTY);
        } )());
    }

    test_convertToIsNotEmpty_BAD_noIsNotEmpty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  bool get isEmpty => false;\n}\nmain(A a) {\n  !a.isEmpty;\n}\n');
            await this.assertNoAssistAt('isEmpty;',DartAssistKind.CONVERT_INTO_IS_NOT_EMPTY);
        } )());
    }

    test_convertToIsNotEmpty_BAD_notInPrefixExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(String str) {\n  str.isEmpty;\n}\n');
            await this.assertNoAssistAt('isEmpty;',DartAssistKind.CONVERT_INTO_IS_NOT_EMPTY);
        } )());
    }

    test_convertToIsNotEmpty_BAD_notIsEmpty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(int p) {\n  !p.isEven;\n}\n');
            await this.assertNoAssistAt('isEven;',DartAssistKind.CONVERT_INTO_IS_NOT_EMPTY);
        } )());
    }

    test_convertToIsNotEmpty_OK_on_isEmpty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(String str) {\n  !str.isEmpty;\n}\n');
            await this.assertHasAssistAt('isEmpty',DartAssistKind.CONVERT_INTO_IS_NOT_EMPTY,'main(String str) {\n  str.isNotEmpty;\n}\n');
        } )());
    }

    test_convertToIsNotEmpty_OK_on_str() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(String str) {\n  !str.isEmpty;\n}\n');
            await this.assertHasAssistAt('str.',DartAssistKind.CONVERT_INTO_IS_NOT_EMPTY,'main(String str) {\n  str.isNotEmpty;\n}\n');
        } )());
    }

    test_convertToIsNotEmpty_OK_propertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(String str) {\n  !\'text\'.isEmpty;\n}\n');
            await this.assertHasAssistAt('isEmpty',DartAssistKind.CONVERT_INTO_IS_NOT_EMPTY,'main(String str) {\n  \'text\'.isNotEmpty;\n}\n');
        } )());
    }

    test_convertToNormalParameter_OK_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  var test;\n  A(this.test) {\n  }\n}\n');
            await this.assertHasAssistAt('test)',DartAssistKind.CONVERT_TO_NORMAL_PARAMETER,'class A {\n  var test;\n  A(test) : test = test {\n  }\n}\n');
        } )());
    }

    test_convertToNormalParameter_OK_firstInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int test;\n  A(this.test) {\n  }\n}\n');
            await this.assertHasAssistAt('test)',DartAssistKind.CONVERT_TO_NORMAL_PARAMETER,'class A {\n  int test;\n  A(int test) : test = test {\n  }\n}\n');
        } )());
    }

    test_convertToNormalParameter_OK_secondInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  double aaa;\n  int bbb;\n  A(this.bbb) : aaa = 1.0;\n}\n');
            await this.assertHasAssistAt('bbb)',DartAssistKind.CONVERT_TO_NORMAL_PARAMETER,'class A {\n  double aaa;\n  int bbb;\n  A(int bbb) : aaa = 1.0, bbb = bbb;\n}\n');
        } )());
    }

    test_encapsulateField_BAD_alreadyPrivate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int _test = 42;\n}\nmain(A a) {\n  print(a._test);\n}\n');
            await this.assertNoAssistAt('_test =',DartAssistKind.ENCAPSULATE_FIELD);
        } )());
    }

    test_encapsulateField_BAD_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  final int test = 42;\n}\n');
            await this.assertNoAssistAt('test =',DartAssistKind.ENCAPSULATE_FIELD);
        } )());
    }

    test_encapsulateField_BAD_multipleFields() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int aaa, bbb, ccc;\n}\nmain(A a) {\n  print(a.bbb);\n}\n');
            await this.assertNoAssistAt('bbb, ',DartAssistKind.ENCAPSULATE_FIELD);
        } )());
    }

    test_encapsulateField_BAD_notOnName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int test = 1 + 2 + 3;\n}\n');
            await this.assertNoAssistAt('+ 2',DartAssistKind.ENCAPSULATE_FIELD);
        } )());
    }

    test_encapsulateField_BAD_parseError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('class A {\n  int; // marker\n}\nmain(A a) {\n  print(a.test);\n}\n');
            await this.assertNoAssistAt('; // marker',DartAssistKind.ENCAPSULATE_FIELD);
        } )());
    }

    test_encapsulateField_BAD_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  static int test = 42;\n}\n');
            await this.assertNoAssistAt('test =',DartAssistKind.ENCAPSULATE_FIELD);
        } )());
    }

    test_encapsulateField_OK_hasType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int test = 42;\n  A(this.test);\n}\nmain(A a) {\n  print(a.test);\n}\n');
            await this.assertHasAssistAt('test = 42',DartAssistKind.ENCAPSULATE_FIELD,'class A {\n  int _test = 42;\n\n  int get test => _test;\n\n  void set test(int test) {\n    _test = test;\n  }\n  A(this._test);\n}\nmain(A a) {\n  print(a.test);\n}\n');
        } )());
    }

    test_encapsulateField_OK_noType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  var test = 42;\n}\nmain(A a) {\n  print(a.test);\n}\n');
            await this.assertHasAssistAt('test = 42',DartAssistKind.ENCAPSULATE_FIELD,'class A {\n  var _test = 42;\n\n  get test => _test;\n\n  void set test(test) {\n    _test = test;\n  }\n}\nmain(A a) {\n  print(a.test);\n}\n');
        } )());
    }

    test_exchangeBinaryExpressionArguments_BAD_extraLength() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  111 + 222;\n}\n');
            this.length = 3;
            await this.assertNoAssistAt('+ 222',DartAssistKind.EXCHANGE_OPERANDS);
        } )());
    }

    test_exchangeBinaryExpressionArguments_BAD_onOperand() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  111 + 222;\n}\n');
            this.length = 3;
            await this.assertNoAssistAt('11 +',DartAssistKind.EXCHANGE_OPERANDS);
        } )());
    }

    test_exchangeBinaryExpressionArguments_BAD_selectionWithBinary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  1 + 2 + 3;\n}\n');
            this.length = new core.DartString('1 + 2 + 3').length;
            await this.assertNoAssistAt('1 + 2 + 3',DartAssistKind.EXCHANGE_OPERANDS);
        } )());
    }

    test_exchangeBinaryExpressionArguments_OK_compare() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let initialOperators = new core.DartList.literal('<','<=','>','>=');
            let resultOperators = new core.DartList.literal('>','>=','<','<=');
            for(let i : number = 0; i <= 0; i++){
                let initialOperator : string = initialOperators[i];
                let resultOperator : string = resultOperators[i];
                await this.resolveTestUnit(`bool main(int a, int b) {\n  return a ${initialOperator} b;\n}\n`);
                await this.assertHasAssistAt(initialOperator,DartAssistKind.EXCHANGE_OPERANDS,`bool main(int a, int b) {\n  return b ${resultOperator} a;\n}\n`);
            }
        } )());
    }

    test_exchangeBinaryExpressionArguments_OK_extended_mixOperator_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  1 * 2 * 3 + 4;\n}\n');
            await this.assertHasAssistAt('* 2',DartAssistKind.EXCHANGE_OPERANDS,'main() {\n  2 * 3 * 1 + 4;\n}\n');
        } )());
    }

    test_exchangeBinaryExpressionArguments_OK_extended_mixOperator_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  1 + 2 - 3 + 4;\n}\n');
            await this.assertHasAssistAt('+ 2',DartAssistKind.EXCHANGE_OPERANDS,'main() {\n  2 + 1 - 3 + 4;\n}\n');
        } )());
    }

    test_exchangeBinaryExpressionArguments_OK_extended_sameOperator_afterFirst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  1 + 2 + 3;\n}\n');
            await this.assertHasAssistAt('+ 2',DartAssistKind.EXCHANGE_OPERANDS,'main() {\n  2 + 3 + 1;\n}\n');
        } )());
    }

    test_exchangeBinaryExpressionArguments_OK_extended_sameOperator_afterSecond() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  1 + 2 + 3;\n}\n');
            await this.assertHasAssistAt('+ 3',DartAssistKind.EXCHANGE_OPERANDS,'main() {\n  3 + 1 + 2;\n}\n');
        } )());
    }

    test_exchangeBinaryExpressionArguments_OK_simple_afterOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  1 + 2;\n}\n');
            await this.assertHasAssistAt(' 2',DartAssistKind.EXCHANGE_OPERANDS,'main() {\n  2 + 1;\n}\n');
        } )());
    }

    test_exchangeBinaryExpressionArguments_OK_simple_beforeOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  1 + 2;\n}\n');
            await this.assertHasAssistAt('+ 2',DartAssistKind.EXCHANGE_OPERANDS,'main() {\n  2 + 1;\n}\n');
        } )());
    }

    test_exchangeBinaryExpressionArguments_OK_simple_fullSelection() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  1 + 2;\n}\n');
            this.length = new core.DartString('1 + 2').length;
            await this.assertHasAssistAt('1 + 2',DartAssistKind.EXCHANGE_OPERANDS,'main() {\n  2 + 1;\n}\n');
        } )());
    }

    test_exchangeBinaryExpressionArguments_OK_simple_withLength() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  1 + 2;\n}\n');
            this.length = 2;
            await this.assertHasAssistAt('+ 2',DartAssistKind.EXCHANGE_OPERANDS,'main() {\n  2 + 1;\n}\n');
        } )());
    }

    test_importAddShow_BAD_hasShow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:math\' show PI;\nmain() {\n  PI;\n}\n');
            await this.assertNoAssistAt('import ',DartAssistKind.IMPORT_ADD_SHOW);
        } )());
    }

    test_importAddShow_BAD_unresolvedUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('import \'/no/such/lib.dart\';\n');
            await this.assertNoAssistAt('import ',DartAssistKind.IMPORT_ADD_SHOW);
        } )());
    }

    test_importAddShow_BAD_unused() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:math\';\n');
            await this.assertNoAssistAt('import ',DartAssistKind.IMPORT_ADD_SHOW);
        } )());
    }

    test_importAddShow_OK_hasUnresolvedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:math\';\nmain(x) {\n  PI;\n  return x.foo();\n}\n');
            await this.assertHasAssistAt('import ',DartAssistKind.IMPORT_ADD_SHOW,'import \'dart:math\' show PI;\nmain(x) {\n  PI;\n  return x.foo();\n}\n');
        } )());
    }

    test_importAddShow_OK_onDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:math\';\nmain() {\n  PI;\n  E;\n  max(1, 2);\n}\n');
            await this.assertHasAssistAt('import ',DartAssistKind.IMPORT_ADD_SHOW,'import \'dart:math\' show E, PI, max;\nmain() {\n  PI;\n  E;\n  max(1, 2);\n}\n');
        } )());
    }

    test_importAddShow_OK_onUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:math\';\nmain() {\n  PI;\n  E;\n  max(1, 2);\n}\n');
            await this.assertHasAssistAt('art:math',DartAssistKind.IMPORT_ADD_SHOW,'import \'dart:math\' show E, PI, max;\nmain() {\n  PI;\n  E;\n  max(1, 2);\n}\n');
        } )());
    }

    test_introduceLocalTestedType_BAD_notBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  if (p is String)\n    print(\'not a block\');\n}\n');
            await this.assertNoAssistAt('if (p',DartAssistKind.INTRODUCE_LOCAL_CAST_TYPE);
        } )());
    }

    test_introduceLocalTestedType_BAD_notIsExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  if (p == null) {\n  }\n}\n');
            await this.assertNoAssistAt('if (p',DartAssistKind.INTRODUCE_LOCAL_CAST_TYPE);
        } )());
    }

    test_introduceLocalTestedType_BAD_notStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C {\n  bool b;\n  C(v) : b = v is int;\n}');
            await this.assertNoAssistAt('is int',DartAssistKind.INTRODUCE_LOCAL_CAST_TYPE);
        } )());
    }

    test_introduceLocalTestedType_OK_if_is() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class MyTypeName {}\nmain(p) {\n  if (p is MyTypeName) {\n  }\n  p = null;\n}\n');
            let expected : string = 'class MyTypeName {}\nmain(p) {\n  if (p is MyTypeName) {\n    MyTypeName myTypeName = p;\n  }\n  p = null;\n}\n';
            await this.assertHasAssistAt('is MyType',DartAssistKind.INTRODUCE_LOCAL_CAST_TYPE,expected);
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('myTypeName = '),this.expectedSuggestions(LinkedEditSuggestionKind.VARIABLE,new core.DartList.literal('myTypeName','typeName','name')));
            await this.assertHasAssistAt('if (p',DartAssistKind.INTRODUCE_LOCAL_CAST_TYPE,expected);
        } )());
    }

    test_introduceLocalTestedType_OK_if_isNot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class MyTypeName {}\nmain(p) {\n  if (p is! MyTypeName) {\n    return;\n  }\n}\n');
            let expected : string = 'class MyTypeName {}\nmain(p) {\n  if (p is! MyTypeName) {\n    return;\n  }\n  MyTypeName myTypeName = p;\n}\n';
            await this.assertHasAssistAt('is! MyType',DartAssistKind.INTRODUCE_LOCAL_CAST_TYPE,expected);
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('myTypeName = '),this.expectedSuggestions(LinkedEditSuggestionKind.VARIABLE,new core.DartList.literal('myTypeName','typeName','name')));
            await this.assertHasAssistAt('if (p',DartAssistKind.INTRODUCE_LOCAL_CAST_TYPE,expected);
        } )());
    }

    test_introduceLocalTestedType_OK_while() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  while (p is String) {\n  }\n  p = null;\n}\n');
            let expected : string = 'main(p) {\n  while (p is String) {\n    String s = p;\n  }\n  p = null;\n}\n';
            await this.assertHasAssistAt('is String',DartAssistKind.INTRODUCE_LOCAL_CAST_TYPE,expected);
            await this.assertHasAssistAt('while (p',DartAssistKind.INTRODUCE_LOCAL_CAST_TYPE,expected);
        } )());
    }

    test_invalidSelection() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('');
            this.offset = -1;
            this.length = 0;
            let assists : core.DartList<any> = await this._computeAssists();
            expect(assists,isEmpty);
        } )());
    }

    test_invertIfStatement_blocks() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (true) {\n    0;\n  } else {\n    1;\n  }\n}\n');
            await this.assertHasAssistAt('if (',DartAssistKind.INVERT_IF_STATEMENT,'main() {\n  if (false) {\n    1;\n  } else {\n    0;\n  }\n}\n');
        } )());
    }

    test_invertIfStatement_statements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (true)\n    0;\n  else\n    1;\n}\n');
            await this.assertHasAssistAt('if (',DartAssistKind.INVERT_IF_STATEMENT,'main() {\n  if (false)\n    1;\n  else\n    0;\n}\n');
        } )());
    }

    test_joinIfStatementInner_BAD_innerNotIf() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1) {\n    print(0);\n  }\n}\n');
            await this.assertNoAssistAt('if (1 ==',DartAssistKind.JOIN_IF_WITH_INNER);
        } )());
    }

    test_joinIfStatementInner_BAD_innerWithElse() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1) {\n    if (2 == 2) {\n      print(0);\n    } else {\n      print(1);\n    }\n  }\n}\n');
            await this.assertNoAssistAt('if (1 ==',DartAssistKind.JOIN_IF_WITH_INNER);
        } )());
    }

    test_joinIfStatementInner_BAD_statementAfterInner() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1) {\n    if (2 == 2) {\n      print(2);\n    }\n    print(1);\n  }\n}\n');
            await this.assertNoAssistAt('if (1 ==',DartAssistKind.JOIN_IF_WITH_INNER);
        } )());
    }

    test_joinIfStatementInner_BAD_statementBeforeInner() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1) {\n    print(1);\n    if (2 == 2) {\n      print(2);\n    }\n  }\n}\n');
            await this.assertNoAssistAt('if (1 ==',DartAssistKind.JOIN_IF_WITH_INNER);
        } )());
    }

    test_joinIfStatementInner_BAD_targetNotIf() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  print(0);\n}\n');
            await this.assertNoAssistAt('print',DartAssistKind.JOIN_IF_WITH_INNER);
        } )());
    }

    test_joinIfStatementInner_BAD_targetWithElse() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1) {\n    if (2 == 2) {\n      print(0);\n    }\n  } else {\n    print(1);\n  }\n}\n');
            await this.assertNoAssistAt('if (1 ==',DartAssistKind.JOIN_IF_WITH_INNER);
        } )());
    }

    test_joinIfStatementInner_OK_conditionAndOr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1) {\n    if (2 == 2 || 3 == 3) {\n      print(0);\n    }\n  }\n}\n');
            await this.assertHasAssistAt('if (1 ==',DartAssistKind.JOIN_IF_WITH_INNER,'main() {\n  if (1 == 1 && (2 == 2 || 3 == 3)) {\n    print(0);\n  }\n}\n');
        } )());
    }

    test_joinIfStatementInner_OK_conditionInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (isCheck()) {\n    if (2 == 2) {\n      print(0);\n    }\n  }\n}\nbool isCheck() => false;\n');
            await this.assertHasAssistAt('if (isCheck',DartAssistKind.JOIN_IF_WITH_INNER,'main() {\n  if (isCheck() && 2 == 2) {\n    print(0);\n  }\n}\nbool isCheck() => false;\n');
        } )());
    }

    test_joinIfStatementInner_OK_conditionOrAnd() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1 || 2 == 2) {\n    if (3 == 3) {\n      print(0);\n    }\n  }\n}\n');
            await this.assertHasAssistAt('if (1 ==',DartAssistKind.JOIN_IF_WITH_INNER,'main() {\n  if ((1 == 1 || 2 == 2) && 3 == 3) {\n    print(0);\n  }\n}\n');
        } )());
    }

    test_joinIfStatementInner_OK_onCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1) {\n    if (2 == 2) {\n      print(0);\n    }\n  }\n}\n');
            await this.assertHasAssistAt('1 ==',DartAssistKind.JOIN_IF_WITH_INNER,'main() {\n  if (1 == 1 && 2 == 2) {\n    print(0);\n  }\n}\n');
        } )());
    }

    test_joinIfStatementInner_OK_simpleConditions_block_block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1) {\n    if (2 == 2) {\n      print(0);\n    }\n  }\n}\n');
            await this.assertHasAssistAt('if (1 ==',DartAssistKind.JOIN_IF_WITH_INNER,'main() {\n  if (1 == 1 && 2 == 2) {\n    print(0);\n  }\n}\n');
        } )());
    }

    test_joinIfStatementInner_OK_simpleConditions_block_single() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1) {\n    if (2 == 2)\n      print(0);\n  }\n}\n');
            await this.assertHasAssistAt('if (1 ==',DartAssistKind.JOIN_IF_WITH_INNER,'main() {\n  if (1 == 1 && 2 == 2) {\n    print(0);\n  }\n}\n');
        } )());
    }

    test_joinIfStatementInner_OK_simpleConditions_single_blockMulti() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1) {\n    if (2 == 2) {\n      print(1);\n      print(2);\n      print(3);\n    }\n  }\n}\n');
            await this.assertHasAssistAt('if (1 ==',DartAssistKind.JOIN_IF_WITH_INNER,'main() {\n  if (1 == 1 && 2 == 2) {\n    print(1);\n    print(2);\n    print(3);\n  }\n}\n');
        } )());
    }

    test_joinIfStatementInner_OK_simpleConditions_single_blockOne() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1)\n    if (2 == 2) {\n      print(0);\n    }\n}\n');
            await this.assertHasAssistAt('if (1 ==',DartAssistKind.JOIN_IF_WITH_INNER,'main() {\n  if (1 == 1 && 2 == 2) {\n    print(0);\n  }\n}\n');
        } )());
    }

    test_joinIfStatementOuter_BAD_outerNotIf() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1) {\n    print(0);\n  }\n}\n');
            await this.assertNoAssistAt('if (1 == 1',DartAssistKind.JOIN_IF_WITH_OUTER);
        } )());
    }

    test_joinIfStatementOuter_BAD_outerWithElse() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1) {\n    if (2 == 2) {\n      print(0);\n    }\n  } else {\n    print(1);\n  }\n}\n');
            await this.assertNoAssistAt('if (2 == 2',DartAssistKind.JOIN_IF_WITH_OUTER);
        } )());
    }

    test_joinIfStatementOuter_BAD_statementAfterInner() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1) {\n    if (2 == 2) {\n      print(2);\n    }\n    print(1);\n  }\n}\n');
            await this.assertNoAssistAt('if (2 == 2',DartAssistKind.JOIN_IF_WITH_OUTER);
        } )());
    }

    test_joinIfStatementOuter_BAD_statementBeforeInner() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1) {\n    print(1);\n    if (2 == 2) {\n      print(2);\n    }\n  }\n}\n');
            await this.assertNoAssistAt('if (2 == 2',DartAssistKind.JOIN_IF_WITH_OUTER);
        } )());
    }

    test_joinIfStatementOuter_BAD_targetNotIf() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  print(0);\n}\n');
            await this.assertNoAssistAt('print',DartAssistKind.JOIN_IF_WITH_OUTER);
        } )());
    }

    test_joinIfStatementOuter_BAD_targetWithElse() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1) {\n    if (2 == 2) {\n      print(0);\n    } else {\n      print(1);\n    }\n  }\n}\n');
            await this.assertNoAssistAt('if (2 == 2',DartAssistKind.JOIN_IF_WITH_OUTER);
        } )());
    }

    test_joinIfStatementOuter_OK_conditionAndOr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1) {\n    if (2 == 2 || 3 == 3) {\n      print(0);\n    }\n  }\n}\n');
            await this.assertHasAssistAt('if (2 ==',DartAssistKind.JOIN_IF_WITH_OUTER,'main() {\n  if (1 == 1 && (2 == 2 || 3 == 3)) {\n    print(0);\n  }\n}\n');
        } )());
    }

    test_joinIfStatementOuter_OK_conditionInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1) {\n    if (isCheck()) {\n      print(0);\n    }\n  }\n}\nbool isCheck() => false;\n');
            await this.assertHasAssistAt('if (isCheck',DartAssistKind.JOIN_IF_WITH_OUTER,'main() {\n  if (1 == 1 && isCheck()) {\n    print(0);\n  }\n}\nbool isCheck() => false;\n');
        } )());
    }

    test_joinIfStatementOuter_OK_conditionOrAnd() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1 || 2 == 2) {\n    if (3 == 3) {\n      print(0);\n    }\n  }\n}\n');
            await this.assertHasAssistAt('if (3 == 3',DartAssistKind.JOIN_IF_WITH_OUTER,'main() {\n  if ((1 == 1 || 2 == 2) && 3 == 3) {\n    print(0);\n  }\n}\n');
        } )());
    }

    test_joinIfStatementOuter_OK_onCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1) {\n    if (2 == 2) {\n      print(0);\n    }\n  }\n}\n');
            await this.assertHasAssistAt('if (2 == 2',DartAssistKind.JOIN_IF_WITH_OUTER,'main() {\n  if (1 == 1 && 2 == 2) {\n    print(0);\n  }\n}\n');
        } )());
    }

    test_joinIfStatementOuter_OK_simpleConditions_block_block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1) {\n    if (2 == 2) {\n      print(0);\n    }\n  }\n}\n');
            await this.assertHasAssistAt('if (2 == 2',DartAssistKind.JOIN_IF_WITH_OUTER,'main() {\n  if (1 == 1 && 2 == 2) {\n    print(0);\n  }\n}\n');
        } )());
    }

    test_joinIfStatementOuter_OK_simpleConditions_block_single() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1) {\n    if (2 == 2)\n      print(0);\n  }\n}\n');
            await this.assertHasAssistAt('if (2 == 2',DartAssistKind.JOIN_IF_WITH_OUTER,'main() {\n  if (1 == 1 && 2 == 2) {\n    print(0);\n  }\n}\n');
        } )());
    }

    test_joinIfStatementOuter_OK_simpleConditions_single_blockMulti() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1) {\n    if (2 == 2) {\n      print(1);\n      print(2);\n      print(3);\n    }\n  }\n}\n');
            await this.assertHasAssistAt('if (2 == 2',DartAssistKind.JOIN_IF_WITH_OUTER,'main() {\n  if (1 == 1 && 2 == 2) {\n    print(1);\n    print(2);\n    print(3);\n  }\n}\n');
        } )());
    }

    test_joinIfStatementOuter_OK_simpleConditions_single_blockOne() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1)\n    if (2 == 2) {\n      print(0);\n    }\n}\n');
            await this.assertHasAssistAt('if (2 == 2',DartAssistKind.JOIN_IF_WITH_OUTER,'main() {\n  if (1 == 1 && 2 == 2) {\n    print(0);\n  }\n}\n');
        } )());
    }

    test_joinVariableDeclaration_onAssignment_BAD_hasInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v = 1;\n  v = 2;\n}\n');
            await this.assertNoAssistAt('v = 2',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onAssignment_BAD_notAdjacent() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v;\n  var bar;\n  v = 1;\n}\n');
            await this.assertNoAssistAt('v = 1',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onAssignment_BAD_notAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v;\n  v += 1;\n}\n');
            await this.assertNoAssistAt('v += 1',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onAssignment_BAD_notDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(var v) {\n  v = 1;\n}\n');
            await this.assertNoAssistAt('v = 1',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onAssignment_BAD_notLeftArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v;\n  1 + v; // marker\n}\n');
            await this.assertNoAssistAt('v; // marker',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onAssignment_BAD_notOneVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v, v2;\n  v = 1;\n}\n');
            await this.assertNoAssistAt('v = 1',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onAssignment_BAD_notResolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('main() {\n  var v;\n  x = 1;\n}\n');
            await this.assertNoAssistAt('x = 1',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onAssignment_BAD_notSameBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v;\n  {\n    v = 1;\n  }\n}\n');
            await this.assertNoAssistAt('v = 1',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onAssignment_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v;\n  v = 1;\n}\n');
            await this.assertHasAssistAt('v =',DartAssistKind.JOIN_VARIABLE_DECLARATION,'main() {\n  var v = 1;\n}\n');
        } )());
    }

    test_joinVariableDeclaration_onDeclaration_BAD_hasInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v = 1;\n  v = 2;\n}\n');
            await this.assertNoAssistAt('v = 1',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onDeclaration_BAD_lastStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (true)\n    var v;\n}\n');
            await this.assertNoAssistAt('v;',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onDeclaration_BAD_nextNotAssignmentExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v;\n  42;\n}\n');
            await this.assertNoAssistAt('v;',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onDeclaration_BAD_nextNotExpressionStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v;\n  if (true) return;\n}\n');
            await this.assertNoAssistAt('v;',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onDeclaration_BAD_nextNotPureAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v;\n  v += 1;\n}\n');
            await this.assertNoAssistAt('v;',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onDeclaration_BAD_notOneVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v, v2;\n  v = 1;\n}\n');
            await this.assertNoAssistAt('v, ',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onDeclaration_OK_onName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v;\n  v = 1;\n}\n');
            await this.assertHasAssistAt('v;',DartAssistKind.JOIN_VARIABLE_DECLARATION,'main() {\n  var v = 1;\n}\n');
        } )());
    }

    test_joinVariableDeclaration_onDeclaration_OK_onType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  int v;\n  v = 1;\n}\n');
            await this.assertHasAssistAt('int v',DartAssistKind.JOIN_VARIABLE_DECLARATION,'main() {\n  int v = 1;\n}\n');
        } )());
    }

    test_joinVariableDeclaration_onDeclaration_OK_onVar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v;\n  v = 1;\n}\n');
            await this.assertHasAssistAt('var v',DartAssistKind.JOIN_VARIABLE_DECLARATION,'main() {\n  var v = 1;\n}\n');
        } )());
    }

    test_moveFlutterWidgetDown_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';\nbuild() {\n  return new Scaffold(\n// start\n    body: new /*caret*/GestureDetector(\n      onTap: () => startResize(),\n      child: new Center(\n        child: new Container(\n          width: 200.0,\n          height: 300.0,\n        ),\n        key: null,\n      ),\n    ),\n// end\n  );\n}\nstartResize() {}\n');
            this._setCaretLocation();
            await this.assertHasAssist(DartAssistKind.MOVE_FLUTTER_WIDGET_DOWN,'import \'package:flutter/src/widgets/framework.dart\';\nbuild() {\n  return new Scaffold(\n// start\n    body: new Center(\n      child: new /*caret*/GestureDetector(\n        onTap: () => startResize(),\n        child: new Container(\n          width: 200.0,\n          height: 300.0,\n        ),\n      ),\n      key: null,\n    ),\n// end\n  );\n}\nstartResize() {}\n');
        } )());
    }

    test_moveFlutterWidgetUp_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';\nbuild() {\n  return new Scaffold(\n// start\n    body: new Center(\n      child: new /*caret*/GestureDetector(\n        onTap: () => startResize(),\n        child: new Container(\n          width: 200.0,\n          height: 300.0,\n        ),\n      ),\n      key: null,\n    ),\n// end\n  );\n}\nstartResize() {}\n');
            this._setCaretLocation();
            await this.assertHasAssist(DartAssistKind.MOVE_FLUTTER_WIDGET_UP,'import \'package:flutter/src/widgets/framework.dart\';\nbuild() {\n  return new Scaffold(\n// start\n    body: new /*caret*/GestureDetector(\n      onTap: () => startResize(),\n      child: new Center(\n        child: new Container(\n          width: 200.0,\n          height: 300.0,\n        ),\n        key: null,\n      ),\n    ),\n// end\n  );\n}\nstartResize() {}\n');
        } )());
    }

    test_removeTypeAnnotation_classField_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  int v = 1;\n}\n');
            await this.assertHasAssistAt('v = ',DartAssistKind.REMOVE_TYPE_ANNOTATION,'class A {\n  var v = 1;\n}\n');
        } )());
    }

    test_removeTypeAnnotation_classField_OK_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {\n  final int v = 1;\n}\n');
            await this.assertHasAssistAt('v = ',DartAssistKind.REMOVE_TYPE_ANNOTATION,'class A {\n  final v = 1;\n}\n');
        } )());
    }

    test_removeTypeAnnotation_localVariable_BAD_onInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  final int v = 1;\n}\n');
            await this.assertNoAssistAt('1;',DartAssistKind.REMOVE_TYPE_ANNOTATION);
        } )());
    }

    test_removeTypeAnnotation_localVariable_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  int a = 1, b = 2;\n}\n');
            await this.assertHasAssistAt('int ',DartAssistKind.REMOVE_TYPE_ANNOTATION,'main() {\n  var a = 1, b = 2;\n}\n');
        } )());
    }

    test_removeTypeAnnotation_localVariable_OK_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  const int v = 1;\n}\n');
            await this.assertHasAssistAt('int ',DartAssistKind.REMOVE_TYPE_ANNOTATION,'main() {\n  const v = 1;\n}\n');
        } )());
    }

    test_removeTypeAnnotation_localVariable_OK_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  final int v = 1;\n}\n');
            await this.assertHasAssistAt('int ',DartAssistKind.REMOVE_TYPE_ANNOTATION,'main() {\n  final v = 1;\n}\n');
        } )());
    }

    test_removeTypeAnnotation_topLevelVariable_BAD_syntheticName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('MyType\n');
            await this.assertNoAssistAt('MyType',DartAssistKind.REMOVE_TYPE_ANNOTATION);
        } )());
    }

    test_removeTypeAnnotation_topLevelVariable_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('int V = 1;\n');
            await this.assertHasAssistAt('int ',DartAssistKind.REMOVE_TYPE_ANNOTATION,'var V = 1;\n');
        } )());
    }

    test_removeTypeAnnotation_topLevelVariable_OK_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('final int V = 1;\n');
            await this.assertHasAssistAt('int ',DartAssistKind.REMOVE_TYPE_ANNOTATION,'final V = 1;\n');
        } )());
    }

    test_reparentFlutterList_BAD_multiLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';\nbuild() {\n  return new Container(\n    child: new Row(\n      children: [/*caret*/\n// start\n        new Transform(),\n        new Object(),\n        new AspectRatio(),\n// end\n      ],\n    ),\n  );\n}\n');
            this._setCaretLocation();
            await this.assertNoAssist(DartAssistKind.REPARENT_FLUTTER_LIST);
        } )());
    }

    test_reparentFlutterList_BAD_singleLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';\nclass FakeFlutter {\n  main() {\n  var obj;\n// start\n    return new Row(children: [/*caret*/ new Transform()]);\n// end\n  }\n}\n');
            this._setCaretLocation();
            await this.assertNoAssist(DartAssistKind.REPARENT_FLUTTER_LIST);
        } )());
    }

    test_reparentFlutterList_OK_multiLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';\nbuild() {\n  return new Container(\n    child: new Row(\n// start\n      children: [/*caret*/\n        new Transform(),\n        new Transform(),\n        new AspectRatio(),\n      ],\n// end\n    ),\n  );\n}\n');
            this._setCaretLocation();
            await this.assertHasAssist(DartAssistKind.REPARENT_FLUTTER_LIST,'import \'package:flutter/src/widgets/framework.dart\';\nbuild() {\n  return new Container(\n    child: new Row(\n// start\n      children: [\n        new widget(\n          children: [/*caret*/\n            new Transform(),\n            new Transform(),\n            new AspectRatio(),\n          ],\n        ),\n      ],\n// end\n    ),\n  );\n}\n');
        } )());
    }

    test_reparentFlutterWidget_BAD_minimal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('/*caret*/x(){}\n');
            this._setCaretLocation();
            await this.assertNoAssist(DartAssistKind.REPARENT_FLUTTER_WIDGET);
        } )());
    }

    test_reparentFlutterWidget_BAD_singleLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';\nclass FakeFlutter {\n  main() {\n  var obj;\n// start\n    return new Container(child: obj.xyz./*caret*/abc);\n// end\n  }\n}\n');
            this._setCaretLocation();
            await this.assertNoAssist(DartAssistKind.REPARENT_FLUTTER_WIDGET);
        } )());
    }

    test_reparentFlutterWidget_OK_multiLines() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';\nclass FakeFlutter {\n  main() {\n    return new Container(\n// start\n      child: new /*caret*/DefaultTextStyle(\n        child: new Row(\n          children: <Widget>[\n            new Container(\n            ),\n          ],\n        ),\n      ),\n// end\n    );\n  }\n}\n');
            this._setCaretLocation();
            await this.assertHasAssist(DartAssistKind.REPARENT_FLUTTER_WIDGET,'import \'package:flutter/src/widgets/framework.dart\';\nclass FakeFlutter {\n  main() {\n    return new Container(\n// start\n      child: new widget(\n        child: new /*caret*/DefaultTextStyle(\n          child: new Row(\n            children: <Widget>[\n              new Container(\n              ),\n            ],\n          ),\n        ),\n      ),\n// end\n    );\n  }\n}\n');
        } )());
    }

    test_reparentFlutterWidget_OK_multiLines_eol2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';\nclass FakeFlutter {\n  main() {\n    return new Container(\n// start\n      child: new /*caret*/DefaultTextStyle(\n        child: new Row(\n          children: <Widget>[\n            new Container(\n            ),\n          ],\n        ),\n      ),\n// end\n    );\n  }\n}\n');
            this._setCaretLocation();
            await this.assertHasAssist(DartAssistKind.REPARENT_FLUTTER_WIDGET,'import \'package:flutter/src/widgets/framework.dart\';\nclass FakeFlutter {\n  main() {\n    return new Container(\n// start\n      child: new widget(\n        child: new /*caret*/DefaultTextStyle(\n          child: new Row(\n            children: <Widget>[\n              new Container(\n              ),\n            ],\n          ),\n        ),\n      ),\n// end\n    );\n  }\n}\n');
        } )());
    }

    test_reparentFlutterWidget_OK_singleLine1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';\nclass FakeFlutter {\n  main() {\n// start\n    return /*caret*/new Container();\n// end\n  }\n}\n');
            this._setCaretLocation();
            await this.assertHasAssist(DartAssistKind.REPARENT_FLUTTER_WIDGET,'import \'package:flutter/src/widgets/framework.dart\';\nclass FakeFlutter {\n  main() {\n// start\n    return /*caret*/new widget(child: new Container());\n// end\n  }\n}\n');
        } )());
    }

    test_reparentFlutterWidget_OK_singleLine2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';\nclass FakeFlutter {\n  main() {\n// start\n    return new ClipRect./*caret*/rect();\n// end\n  }\n}\n');
            this._setCaretLocation();
            await this.assertHasAssist(DartAssistKind.REPARENT_FLUTTER_WIDGET,'import \'package:flutter/src/widgets/framework.dart\';\nclass FakeFlutter {\n  main() {\n// start\n    return new widget(child: new ClipRect./*caret*/rect());\n// end\n  }\n}\n');
        } )());
    }

    test_replaceConditionalWithIfElse_BAD_noEnclosingStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('var v = true ? 111 : 222;\n');
            await this.assertNoAssistAt('? 111',DartAssistKind.REPLACE_CONDITIONAL_WITH_IF_ELSE);
        } )());
    }

    test_replaceConditionalWithIfElse_BAD_notConditional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v = 42;\n}\n');
            await this.assertNoAssistAt('v = 42',DartAssistKind.REPLACE_CONDITIONAL_WITH_IF_ELSE);
        } )());
    }

    test_replaceConditionalWithIfElse_OK_assignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v;\n  v = true ? 111 : 222;\n}\n');
            await this.assertHasAssistAt('11 :',DartAssistKind.REPLACE_CONDITIONAL_WITH_IF_ELSE,'main() {\n  var v;\n  if (true) {\n    v = 111;\n  } else {\n    v = 222;\n  }\n}\n');
            await this.assertHasAssistAt('v =',DartAssistKind.REPLACE_CONDITIONAL_WITH_IF_ELSE,'main() {\n  var v;\n  if (true) {\n    v = 111;\n  } else {\n    v = 222;\n  }\n}\n');
        } )());
    }

    test_replaceConditionalWithIfElse_OK_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  return true ? 111 : 222;\n}\n');
            await this.assertHasAssistAt('return ',DartAssistKind.REPLACE_CONDITIONAL_WITH_IF_ELSE,'main() {\n  if (true) {\n    return 111;\n  } else {\n    return 222;\n  }\n}\n');
        } )());
    }

    test_replaceConditionalWithIfElse_OK_variableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  int a = 1, vvv = true ? 111 : 222, b = 2;\n}\n');
            await this.assertHasAssistAt('11 :',DartAssistKind.REPLACE_CONDITIONAL_WITH_IF_ELSE,'main() {\n  int a = 1, vvv, b = 2;\n  if (true) {\n    vvv = 111;\n  } else {\n    vvv = 222;\n  }\n}\n');
        } )());
    }

    test_replaceIfElseWithConditional_BAD_expressionVsReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (true) {\n    print(42);\n  } else {\n    return;\n  }\n}\n');
            await this.assertNoAssistAt('else',DartAssistKind.REPLACE_IF_ELSE_WITH_CONDITIONAL);
        } )());
    }

    test_replaceIfElseWithConditional_BAD_notIfStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  print(0);\n}\n');
            await this.assertNoAssistAt('print',DartAssistKind.REPLACE_IF_ELSE_WITH_CONDITIONAL);
        } )());
    }

    test_replaceIfElseWithConditional_BAD_notSingleStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  int vvv;\n  if (true) {\n    print(0);\n    vvv = 111;\n  } else {\n    print(0);\n    vvv = 222;\n  }\n}\n');
            await this.assertNoAssistAt('if (true)',DartAssistKind.REPLACE_IF_ELSE_WITH_CONDITIONAL);
        } )());
    }

    test_replaceIfElseWithConditional_OK_assignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  int vvv;\n  if (true) {\n    vvv = 111;\n  } else {\n    vvv = 222;\n  }\n}\n');
            await this.assertHasAssistAt('if (true)',DartAssistKind.REPLACE_IF_ELSE_WITH_CONDITIONAL,'main() {\n  int vvv;\n  vvv = true ? 111 : 222;\n}\n');
        } )());
    }

    test_replaceIfElseWithConditional_OK_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (true) {\n    return 111;\n  } else {\n    return 222;\n  }\n}\n');
            await this.assertHasAssistAt('if (true)',DartAssistKind.REPLACE_IF_ELSE_WITH_CONDITIONAL,'main() {\n  return true ? 111 : 222;\n}\n');
        } )());
    }

    test_splitAndCondition_BAD_hasElse() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1 && 2 == 2) {\n    print(1);\n  } else {\n    print(2);\n  }\n}\n');
            await this.assertNoAssistAt('&& 2',DartAssistKind.SPLIT_AND_CONDITION);
        } )());
    }

    test_splitAndCondition_BAD_notAnd() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1 || 2 == 2) {\n    print(0);\n  }\n}\n');
            await this.assertNoAssistAt('|| 2',DartAssistKind.SPLIT_AND_CONDITION);
        } )());
    }

    test_splitAndCondition_BAD_notPartOfIf() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  print(1 == 1 && 2 == 2);\n}\n');
            await this.assertNoAssistAt('&& 2',DartAssistKind.SPLIT_AND_CONDITION);
        } )());
    }

    test_splitAndCondition_BAD_notTopLevelAnd() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (true || (1 == 1 && 2 == 2)) {\n    print(0);\n  }\n  if (true && (3 == 3 && 4 == 4)) {\n    print(0);\n  }\n}\n');
            await this.assertNoAssistAt('&& 2',DartAssistKind.SPLIT_AND_CONDITION);
            await this.assertNoAssistAt('&& 4',DartAssistKind.SPLIT_AND_CONDITION);
        } )());
    }

    test_splitAndCondition_OK_innerAndExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1 && 2 == 2 && 3 == 3) {\n    print(0);\n  }\n}\n');
            await this.assertHasAssistAt('&& 2 == 2',DartAssistKind.SPLIT_AND_CONDITION,'main() {\n  if (1 == 1) {\n    if (2 == 2 && 3 == 3) {\n      print(0);\n    }\n  }\n}\n');
        } )());
    }

    test_splitAndCondition_OK_thenBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (true && false) {\n    print(0);\n    if (3 == 3) {\n      print(1);\n    }\n  }\n}\n');
            await this.assertHasAssistAt('&& false',DartAssistKind.SPLIT_AND_CONDITION,'main() {\n  if (true) {\n    if (false) {\n      print(0);\n      if (3 == 3) {\n        print(1);\n      }\n    }\n  }\n}\n');
        } )());
    }

    test_splitAndCondition_OK_thenStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (true && false)\n    print(0);\n}\n');
            await this.assertHasAssistAt('&& false',DartAssistKind.SPLIT_AND_CONDITION,'main() {\n  if (true)\n    if (false)\n      print(0);\n}\n');
        } )());
    }

    test_splitAndCondition_wrong() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  if (1 == 1 && 2 == 2) {\n    print(0);\n  }\n  print(3 == 3 && 4 == 4);\n}\n');
            await this.assertNoAssistAt('main() {',DartAssistKind.SPLIT_AND_CONDITION);
            {
                this.length = 5;
                await this.assertNoAssistAt('&& 2 == 2',DartAssistKind.SPLIT_AND_CONDITION);
            }
        } )());
    }

    test_splitVariableDeclaration_BAD_notOneVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v = 1, v2;\n}\n');
            await this.assertNoAssistAt('v = 1',DartAssistKind.SPLIT_VARIABLE_DECLARATION);
        } )());
    }

    test_splitVariableDeclaration_OK_onName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v = 1;\n}\n');
            await this.assertHasAssistAt('v =',DartAssistKind.SPLIT_VARIABLE_DECLARATION,'main() {\n  var v;\n  v = 1;\n}\n');
        } )());
    }

    test_splitVariableDeclaration_OK_onType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  int v = 1;\n}\n');
            await this.assertHasAssistAt('int ',DartAssistKind.SPLIT_VARIABLE_DECLARATION,'main() {\n  int v;\n  v = 1;\n}\n');
        } )());
    }

    test_splitVariableDeclaration_OK_onVar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var v = 1;\n}\n');
            await this.assertHasAssistAt('var ',DartAssistKind.SPLIT_VARIABLE_DECLARATION,'main() {\n  var v;\n  v = 1;\n}\n');
        } )());
    }

    test_surroundWith_block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n// start\n  print(0);\n  print(1);\n// end\n}\n');
            this._setStartEndSelection();
            await this.assertHasAssist(DartAssistKind.SURROUND_WITH_BLOCK,'main() {\n// start\n  {\n    print(0);\n    print(1);\n  }\n// end\n}\n');
        } )());
    }

    test_surroundWith_doWhile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n// start\n  print(0);\n  print(1);\n// end\n}\n');
            this._setStartEndSelection();
            await this.assertHasAssist(DartAssistKind.SURROUND_WITH_DO_WHILE,'main() {\n// start\n  do {\n    print(0);\n    print(1);\n  } while (condition);\n// end\n}\n');
        } )());
    }

    test_surroundWith_for() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n// start\n  print(0);\n  print(1);\n// end\n}\n');
            this._setStartEndSelection();
            await this.assertHasAssist(DartAssistKind.SURROUND_WITH_FOR,'main() {\n// start\n  for (var v = init; condition; increment) {\n    print(0);\n    print(1);\n  }\n// end\n}\n');
        } )());
    }

    test_surroundWith_forIn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n// start\n  print(0);\n  print(1);\n// end\n}\n');
            this._setStartEndSelection();
            await this.assertHasAssist(DartAssistKind.SURROUND_WITH_FOR_IN,'main() {\n// start\n  for (var item in iterable) {\n    print(0);\n    print(1);\n  }\n// end\n}\n');
        } )());
    }

    test_surroundWith_if() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n// start\n  print(0);\n  print(1);\n// end\n}\n');
            this._setStartEndSelection();
            await this.assertHasAssist(DartAssistKind.SURROUND_WITH_IF,'main() {\n// start\n  if (condition) {\n    print(0);\n    print(1);\n  }\n// end\n}\n');
        } )());
    }

    test_surroundWith_tryCatch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n// start\n  print(0);\n  print(1);\n// end\n}\n');
            this._setStartEndSelection();
            await this.assertHasAssist(DartAssistKind.SURROUND_WITH_TRY_CATCH,'main() {\n// start\n  try {\n    print(0);\n    print(1);\n  } on Exception catch (e) {\n    // TODO\n  }\n// end\n}\n');
        } )());
    }

    test_surroundWith_tryFinally() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n// start\n  print(0);\n  print(1);\n// end\n}\n');
            this._setStartEndSelection();
            await this.assertHasAssist(DartAssistKind.SURROUND_WITH_TRY_FINALLY,'main() {\n// start\n  try {\n    print(0);\n    print(1);\n  } finally {\n    // TODO\n  }\n// end\n}\n');
        } )());
    }

    test_surroundWith_while() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n// start\n  print(0);\n  print(1);\n// end\n}\n');
            this._setStartEndSelection();
            await this.assertHasAssist(DartAssistKind.SURROUND_WITH_WHILE,'main() {\n// start\n  while (condition) {\n    print(0);\n    print(1);\n  }\n// end\n}\n');
        } )());
    }

    _assertHasAssist(kind : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let assists : core.DartList<any> = await this._computeAssists();
            for(let assist of assists) {
                if (op(Op.EQUALS,assist.kind,kind)) {
                    return assist;
                }
            }
            throw fail(`Expected to find assist ${kind} in\n${assists.join('\n')}`);
        } )());
    }

    _assertLinkedGroup(group : any,expectedStrings : core.DartList<string>,expectedSuggestions? : core.DartList<any>) : void {
        let expectedPositions : core.DartList<any> = this._findResultPositions(expectedStrings);
        expect(group.positions,unorderedEquals(expectedPositions));
        if (expectedSuggestions != null) {
            expect(group.suggestions,unorderedEquals(expectedSuggestions));
        }
    }
    _computeAssists() : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let testUnitElement : any = resolutionMap.elementDeclaredByCompilationUnit(this.testUnit);
            let assistContext : any;
            assistContext = new _DartAssistContextForValues(testUnitElement.source,this.offset,this.length,this.driver,new bare.createInstance(any,null,this.driver),this.testUnit);
            let processor : any = new bare.createInstance(any,null,assistContext);
            return await processor.compute();
        } )());
    }

    _configureFlutterPkg(pathToCode : core.DartMap<string,string>) : void {
        pathToCode.forEach((path : any,code : any) =>  {
            this.provider.newFile(`${lib4.properties.flutterPkgLibPath}/${path}`,code);
        });
        let myPkgFolder : any = this.provider.getResource(lib4.properties.flutterPkgLibPath);
        let pkgResolver : any = new bare.createInstance(any,null,this.provider,new core.DartMap.literal([
            ['flutter',new core.DartList.literal(myPkgFolder)]]));
        let sourceFactory : any = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this.sdk),pkgResolver,this.resourceResolver));
        if (this.enableNewAnalysisDriver) {
            this.driver.configure({
                sourceFactory : sourceFactory});
        }else {
            this.context.sourceFactory = sourceFactory;
        }
        this.addSource('/tmp/other.dart',pathToCode.keys.map((path : any) =>  {
            return `import 'package:flutter/${path}';`;
        }).join('\n'));
    }
    _findResultPositions(searchStrings : core.DartList<string>) : core.DartList<any> {
        let positions : core.DartList<any> = new core.DartList.literal<any>();
        for(let search of searchStrings) {
            let offset : number = new core.DartString(this.resultCode).indexOf(search);
            positions.add(new bare.createInstance(any,null,this.testFile,offset));
        }
        return positions;
    }
    _setCaretLocation() : void {
        this.offset = this.findOffset('/*caret*/') + new core.DartString('/*caret*/').length;
        this.length = 0;
    }
    _setStartEndSelection() : void {
        this.offset = this.findOffset('// start\n') + new core.DartString('// start\n').length;
        this.length = this.findOffset('// end') - this.offset;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AssistProcessorTest() {
    }
}

export namespace _DartAssistContextForValues {
    export type Constructors = '_DartAssistContextForValues';
    export type Interface = Omit<_DartAssistContextForValues, Constructors>;
}
@DartClass
@Implements(any)
export class _DartAssistContextForValues implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    source : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    selectionOffset : number;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    selectionLength : number;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    analysisDriver : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    astProvider : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    unit : any;

    constructor(source : any,selectionOffset : number,selectionLength : number,analysisDriver : any,astProvider : any,unit : any) {
    }
    @defaultConstructor
    _DartAssistContextForValues(source : any,selectionOffset : number,selectionLength : number,analysisDriver : any,astProvider : any,unit : any) {
        this.source = source;
        this.selectionOffset = selectionOffset;
        this.selectionLength = selectionLength;
        this.analysisDriver = analysisDriver;
        this.astProvider = astProvider;
        this.unit = unit;
    }
}

export class properties {
}
