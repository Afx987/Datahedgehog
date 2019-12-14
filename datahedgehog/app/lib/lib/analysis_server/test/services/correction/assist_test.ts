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
            this.addSource('/my_lib.dart','library my_lib;
            await this.resolveTestUnit('import \'my_lib.dart\';
            await this.assertNoAssistAt('test)',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_BAD_privateType_declaredIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/my_lib.dart','library my_lib;
            await this.resolveTestUnit('import \'my_lib.dart\';
            await this.assertNoAssistAt('var item',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_BAD_privateType_list() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/my_lib.dart','library my_lib;
            await this.resolveTestUnit('import \'my_lib.dart\';
            await this.assertNoAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_BAD_privateType_variable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/my_lib.dart','library my_lib;
            await this.resolveTestUnit('import \'my_lib.dart\';
            await this.assertNoAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_classField_OK_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('final ',DartAssistKind.ADD_TYPE_ANNOTATION,'class A {
        } )());
    }

    test_addTypeAnnotation_classField_OK_int() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await await this.assertHasAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION,'class A {
        } )());
    }

    test_addTypeAnnotation_declaredIdentifier_BAD_hasTypeAnnotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {
            await this.assertNoAssistAt('item in',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_declaredIdentifier_BAD_inForEachBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {
            await this.assertNoAssistAt('42;',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_declaredIdentifier_BAD_unknownType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('item in',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_declaredIdentifier_generic_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A<T> {
            await this.assertHasAssistAt('item in',DartAssistKind.ADD_TYPE_ANNOTATION,'class A<T> {
        } )());
    }

    test_addTypeAnnotation_declaredIdentifier_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {
            await this.assertHasAssistAt('item in',DartAssistKind.ADD_TYPE_ANNOTATION,'main(List<String> items) {
            await this.assertHasAssistAt('for (',DartAssistKind.ADD_TYPE_ANNOTATION,'main(List<String> items) {
        } )());
    }

    test_addTypeAnnotation_declaredIdentifier_OK_addImport_dartUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/my_lib.dart','import \'dart:async\';
            await this.resolveTestUnit('import \'my_lib.dart\';
            await this.assertHasAssistAt('future in',DartAssistKind.ADD_TYPE_ANNOTATION,'import \'dart:async\';
        } )());
    }

    test_addTypeAnnotation_declaredIdentifier_OK_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {
            await this.assertHasAssistAt('item in',DartAssistKind.ADD_TYPE_ANNOTATION,'main(List<String> items) {
        } )());
    }

    test_addTypeAnnotation_local_BAD_bottom() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_local_BAD_hasTypeAnnotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt(' = 42',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_local_BAD_multiple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_local_BAD_noValue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_local_BAD_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_local_BAD_onInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('0;',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_local_BAD_unknown() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_local_generic_OK_literal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('v =',DartAssistKind.ADD_TYPE_ANNOTATION,'class A {
        } )());
    }

    test_addTypeAnnotation_local_generic_OK_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A<T> {
            await this.assertHasAssistAt('v =',DartAssistKind.ADD_TYPE_ANNOTATION,'class A<T> {
        } )());
    }

    test_addTypeAnnotation_local_OK_addImport_dartUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/my_lib.dart','import \'dart:async\';
            await this.resolveTestUnit('import \'my_lib.dart\';
            await this.assertHasAssistAt('v =',DartAssistKind.ADD_TYPE_ANNOTATION,'import \'dart:async\';
        } )());
    }

    test_addTypeAnnotation_local_OK_addImport_notLibraryUnit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/my_lib.dart','import \'dart:async\';
            let appCode : string = 'library my_app;
            this.testCode = 'part of my_app;
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
                expect(resultCode,'library my_app;
            }
            {
                let testFileEdit = this.change.getFileEdit('/test.dart');
                let resultCode = SourceEdit.applySequence(this.testCode,testFileEdit.edits);
                expect(resultCode,'part of my_app;
            }
        } )());
    }

    test_addTypeAnnotation_local_OK_addImport_relUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/aa/bbb/lib_a.dart','class MyClass {}
            this.addSource('/ccc/lib_b.dart','import \'../aa/bbb/lib_a.dart\';
            await this.resolveTestUnit('import \'ccc/lib_b.dart\';
            await this.assertHasAssistAt('v =',DartAssistKind.ADD_TYPE_ANNOTATION,'import \'aa/bbb/lib_a.dart\';
        } )());
    }

    test_addTypeAnnotation_local_OK_Function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('v =',DartAssistKind.ADD_TYPE_ANNOTATION,'main() {
        } )());
    }

    test_addTypeAnnotation_local_OK_int() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('v =',DartAssistKind.ADD_TYPE_ANNOTATION,'main() {
        } )());
    }

    test_addTypeAnnotation_local_OK_List() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('v =',DartAssistKind.ADD_TYPE_ANNOTATION,'main() {
        } )());
    }

    test_addTypeAnnotation_local_OK_localType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C {}
            await this.assertHasAssistAt('x =',DartAssistKind.ADD_TYPE_ANNOTATION,'class C {}
        } )());
    }

    test_addTypeAnnotation_local_OK_onName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('bc',DartAssistKind.ADD_TYPE_ANNOTATION,'main() {
        } )());
    }

    test_addTypeAnnotation_local_OK_onVar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION,'main() {
        } )());
    }

    test_addTypeAnnotation_OK_privateType_sameLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class _A {}
            await this.assertHasAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION,'class _A {}
        } )());
    }

    test_addTypeAnnotation_parameter_BAD_hasExplicitType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('foo(f(int p)) {}
            await this.assertNoAssistAt('test',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_parameter_BAD_noPropagatedType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('foo(f(p)) {}
            await this.assertNoAssistAt('test',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_parameter_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('foo(f(int p)) {}
            await this.assertHasAssistAt('test',DartAssistKind.ADD_TYPE_ANNOTATION,'foo(f(int p)) {}
        } )());
    }

    test_addTypeAnnotation_topLevelField_BAD_multiple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('var A = 1, V = \'\';
            await this.assertNoAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_topLevelField_BAD_noValue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('var V;
            await this.assertNoAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION);
        } )());
    }

    test_addTypeAnnotation_topLevelField_OK_int() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('var V = 0;
            await this.assertHasAssistAt('var ',DartAssistKind.ADD_TYPE_ANNOTATION,'int V = 0;
        } )());
    }

    test_assignToLocalVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('readBytes();',DartAssistKind.ASSIGN_TO_LOCAL_VARIABLE,'main() {
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('readBytes = '),this.expectedSuggestions(LinkedEditSuggestionKind.VARIABLE,new core.DartList.literal('list','bytes2','readBytes')));
        } )());
    }

    test_assignToLocalVariable_alreadyAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('vvv =',DartAssistKind.ASSIGN_TO_LOCAL_VARIABLE);
        } )());
    }

    test_assignToLocalVariable_inClosure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('345',DartAssistKind.ASSIGN_TO_LOCAL_VARIABLE,'main() {
        } )());
    }

    test_assignToLocalVariable_invocationArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('345',DartAssistKind.ASSIGN_TO_LOCAL_VARIABLE);
        } )());
    }

    test_assignToLocalVariable_throw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('throw ',DartAssistKind.ASSIGN_TO_LOCAL_VARIABLE);
        } )());
    }

    test_assignToLocalVariable_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('f();',DartAssistKind.ASSIGN_TO_LOCAL_VARIABLE);
        } )());
    }

    test_convertDocumentationIntoBlock_BAD_alreadyBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('/**
            await this.assertNoAssistAt('AAA',DartAssistKind.CONVERT_DOCUMENTATION_INTO_BLOCK);
        } )());
    }

    test_convertDocumentationIntoBlock_BAD_notDocumentation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('// AAAA
            await this.assertNoAssistAt('AAA',DartAssistKind.CONVERT_DOCUMENTATION_INTO_BLOCK);
        } )());
    }

    test_convertDocumentationIntoBlock_OK_noSpaceBeforeText() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('AAAAA',DartAssistKind.CONVERT_DOCUMENTATION_INTO_BLOCK,'class A {
        } )());
    }

    test_convertDocumentationIntoBlock_OK_onReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('/// AAAAAAA [int] AAAAAAA
            await this.assertHasAssistAt('nt]',DartAssistKind.CONVERT_DOCUMENTATION_INTO_BLOCK,'/**
        } )());
    }

    test_convertDocumentationIntoBlock_OK_onText() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('AAA [',DartAssistKind.CONVERT_DOCUMENTATION_INTO_BLOCK,'class A {
        } )());
    }

    test_convertDocumentationIntoLine_BAD_alreadyLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('/// AAAAAAA
            await this.assertNoAssistAt('AAA',DartAssistKind.CONVERT_DOCUMENTATION_INTO_LINE);
        } )());
    }

    test_convertDocumentationIntoLine_BAD_notDocumentation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('/* AAAA */
            await this.assertNoAssistAt('AAA',DartAssistKind.CONVERT_DOCUMENTATION_INTO_LINE);
        } )());
    }

    test_convertDocumentationIntoLine_OK_onReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('/**
            await this.assertHasAssistAt('nt]',DartAssistKind.CONVERT_DOCUMENTATION_INTO_LINE,'/// AAAAAAA [int] AAAAAAA
        } )());
    }

    test_convertDocumentationIntoLine_OK_onText() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('AAA [',DartAssistKind.CONVERT_DOCUMENTATION_INTO_LINE,'class A {
        } )());
    }

    test_convertDocumentationIntoLine_OK_onText_hasFirstLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('AAA [',DartAssistKind.CONVERT_DOCUMENTATION_INTO_LINE,'class A {
        } )());
    }

    test_convertFlutterChild_OK_multiLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';
            this._setCaretLocation();
            await this.assertHasAssist(DartAssistKind.CONVERT_FLUTTER_CHILD,'import \'package:flutter/src/widgets/framework.dart\';
        } )());
    }

    test_convertFlutterChild_OK_newlineChild() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';
            this._setCaretLocation();
            await this.assertHasAssist(DartAssistKind.CONVERT_FLUTTER_CHILD,'import \'package:flutter/src/widgets/framework.dart\';
        } )());
    }

    test_convertFlutterChild_OK_singleLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';
            this._setCaretLocation();
            await this.assertHasAssist(DartAssistKind.CONVERT_FLUTTER_CHILD,'import \'package:flutter/src/widgets/framework.dart\';
        } )());
    }

    test_convertToBlockBody_BAD_noEnclosingFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('var v = 123;
            await this.assertNoAssistAt('v =',DartAssistKind.CONVERT_INTO_BLOCK_BODY);
        } )());
    }

    test_convertToBlockBody_BAD_notExpressionBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('fff() {
            await this.assertNoAssistAt('fff() {',DartAssistKind.CONVERT_INTO_BLOCK_BODY);
        } )());
    }

    test_convertToBlockBody_OK_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('mmm()',DartAssistKind.CONVERT_INTO_BLOCK_BODY,'class A {
        } )());
    }

    test_convertToBlockBody_OK_closure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('setup(x) {}
            await this.assertHasAssistAt('() => 42',DartAssistKind.CONVERT_INTO_BLOCK_BODY,'setup(x) {}
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
            await this.resolveTestUnit('setup(x) {}
            await this.assertHasAssistAt('() => print',DartAssistKind.CONVERT_INTO_BLOCK_BODY,'setup(x) {}
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
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('A()',DartAssistKind.CONVERT_INTO_BLOCK_BODY,'class A {
        } )());
    }

    test_convertToBlockBody_OK_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('mmm()',DartAssistKind.CONVERT_INTO_BLOCK_BODY,'class A {
        } )());
    }

    test_convertToBlockBody_OK_onName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('fff() => 123;
            await this.assertHasAssistAt('fff()',DartAssistKind.CONVERT_INTO_BLOCK_BODY,'fff() {
        } )());
    }

    test_convertToBlockBody_OK_onValue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('fff() => 123;
            await this.assertHasAssistAt('23;',DartAssistKind.CONVERT_INTO_BLOCK_BODY,'fff() {
        } )());
    }

    test_convertToExpressionBody_BAD_already() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('fff() => 42;
            await this.assertNoAssistAt('fff()',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY);
        } )());
    }

    test_convertToExpressionBody_BAD_moreThanOneStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('fff() {
            await this.assertNoAssistAt('fff()',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY);
        } )());
    }

    test_convertToExpressionBody_BAD_noEnclosingFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('var V = 42;
            await this.assertNoAssistAt('V = ',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY);
        } )());
    }

    test_convertToExpressionBody_BAD_noReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('fff() {
            await this.assertNoAssistAt('fff()',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY);
        } )());
    }

    test_convertToExpressionBody_BAD_noReturnValue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('fff() {
            await this.assertNoAssistAt('fff()',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY);
        } )());
    }

    test_convertToExpressionBody_OK_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('mmm',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY,'class A {
        } )());
    }

    test_convertToExpressionBody_OK_closure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('setup(x) {}
            await this.assertHasAssistAt('42;',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY,'setup(x) {}
        } )());
    }

    test_convertToExpressionBody_OK_closure_voidExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('setup(x) {}
            await this.assertHasAssistAt('print(',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY,'setup(x) {}
        } )());
    }

    test_convertToExpressionBody_OK_constructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('A()',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY,'class A {
        } )());
    }

    test_convertToExpressionBody_OK_function_onBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('fff() {
            await this.assertHasAssistAt('{',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY,'fff() => 42;
        } )());
    }

    test_convertToExpressionBody_OK_function_onName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('fff() {
            await this.assertHasAssistAt('ff()',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY,'fff() => 42;
        } )());
    }

    test_convertToExpressionBody_OK_method_onBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('{ // marker',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY,'class A {
        } )());
    }

    test_convertToExpressionBody_OK_topFunction_onReturnStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('fff() {
            await this.assertHasAssistAt('return',DartAssistKind.CONVERT_INTO_EXPRESSION_BODY,'fff() => 42;
        } )());
    }

    test_convertToFieldParameter_BAD_additionalUse() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertNoAssistAt('aaa)',DartAssistKind.CONVERT_TO_FIELD_PARAMETER);
        } )());
    }

    test_convertToFieldParameter_BAD_notPureAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertNoAssistAt('aaa)',DartAssistKind.CONVERT_TO_FIELD_PARAMETER);
        } )());
    }

    test_convertToFieldParameter_OK_firstInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('aaa, ',DartAssistKind.CONVERT_TO_FIELD_PARAMETER,'class A {
        } )());
    }

    test_convertToFieldParameter_OK_onParameterName_inInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('test {',DartAssistKind.CONVERT_TO_FIELD_PARAMETER,'class A {
        } )());
    }

    test_convertToFieldParameter_OK_onParameterName_inParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('test)',DartAssistKind.CONVERT_TO_FIELD_PARAMETER,'class A {
        } )());
    }

    test_convertToFieldParameter_OK_secondInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('bbb)',DartAssistKind.CONVERT_TO_FIELD_PARAMETER,'class A {
        } )());
    }

    test_convertToFinalField_BAD_hasSetter_inThisClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertNoAssistAt('get foo',DartAssistKind.CONVERT_INTO_FINAL_FIELD);
        } )());
    }

    test_convertToFinalField_BAD_notExpressionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertNoAssistAt('get foo',DartAssistKind.CONVERT_INTO_FINAL_FIELD);
        } )());
    }

    test_convertToFinalField_BAD_notGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertNoAssistAt('foo',DartAssistKind.CONVERT_INTO_FINAL_FIELD);
        } )());
    }

    test_convertToFinalField_OK_blockBody_onlyReturnStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('get foo',DartAssistKind.CONVERT_INTO_FINAL_FIELD,'class A {
        } )());
    }

    test_convertToFinalField_OK_hasOverride() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('const myAnnotation = const Object();
            await this.assertHasAssistAt('get foo',DartAssistKind.CONVERT_INTO_FINAL_FIELD,'const myAnnotation = const Object();
        } )());
    }

    test_convertToFinalField_OK_hasSetter_inSuper() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('get foo',DartAssistKind.CONVERT_INTO_FINAL_FIELD,'class A {
        } )());
    }

    test_convertToFinalField_OK_notNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('get foo',DartAssistKind.CONVERT_INTO_FINAL_FIELD,'class A {
        } )());
    }

    test_convertToFinalField_OK_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('get foo',DartAssistKind.CONVERT_INTO_FINAL_FIELD,'class A {
        } )());
    }

    test_convertToFinalField_OK_onName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('foo',DartAssistKind.CONVERT_INTO_FINAL_FIELD,'class A {
        } )());
    }

    test_convertToFinalField_OK_onReturnType_parameterized() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('nt> get',DartAssistKind.CONVERT_INTO_FINAL_FIELD,'class A {
        } )());
    }

    test_convertToFinalField_OK_onReturnType_simple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('int get',DartAssistKind.CONVERT_INTO_FINAL_FIELD,'class A {
        } )());
    }

    test_convertToForIndex_BAD_bodyNotBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {
            await this.assertNoAssistAt('for (String',DartAssistKind.CONVERT_INTO_FOR_INDEX);
        } )());
    }

    test_convertToForIndex_BAD_doesNotDeclareVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {
            await this.assertNoAssistAt('for (item',DartAssistKind.CONVERT_INTO_FOR_INDEX);
        } )());
    }

    test_convertToForIndex_BAD_iterableIsNotVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('for (String',DartAssistKind.CONVERT_INTO_FOR_INDEX);
        } )());
    }

    test_convertToForIndex_BAD_iterableNotList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(Iterable<String> items) {
            await this.assertNoAssistAt('for (String',DartAssistKind.CONVERT_INTO_FOR_INDEX);
        } )());
    }

    test_convertToForIndex_BAD_usesIJK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {
            await this.assertNoAssistAt('for (String',DartAssistKind.CONVERT_INTO_FOR_INDEX);
        } )());
    }

    test_convertToForIndex_OK_onDeclaredIdentifier_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {
            await this.assertHasAssistAt('item in',DartAssistKind.CONVERT_INTO_FOR_INDEX,'main(List<String> items) {
        } )());
    }

    test_convertToForIndex_OK_onDeclaredIdentifier_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {
            await this.assertHasAssistAt('tring item',DartAssistKind.CONVERT_INTO_FOR_INDEX,'main(List<String> items) {
        } )());
    }

    test_convertToForIndex_OK_onFor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {
            await this.assertHasAssistAt('for (String',DartAssistKind.CONVERT_INTO_FOR_INDEX,'main(List<String> items) {
        } )());
    }

    test_convertToForIndex_OK_usesI() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {
            await this.assertHasAssistAt('for (String',DartAssistKind.CONVERT_INTO_FOR_INDEX,'main(List<String> items) {
        } )());
    }

    test_convertToForIndex_OK_usesIJ() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List<String> items) {
            await this.assertHasAssistAt('for (String',DartAssistKind.CONVERT_INTO_FOR_INDEX,'main(List<String> items) {
        } )());
    }

    test_convertToGetter_BAD_noInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('class A {
            await this.assertNoAssistAt('foo',DartAssistKind.CONVERT_INTO_GETTER);
        } )());
    }

    test_convertToGetter_BAD_notFinal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertNoAssistAt('foo',DartAssistKind.CONVERT_INTO_GETTER);
        } )());
    }

    test_convertToGetter_BAD_notSingleField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertNoAssistAt('foo',DartAssistKind.CONVERT_INTO_GETTER);
        } )());
    }

    test_convertToGetter_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('const myAnnotation = const Object();
            await this.assertHasAssistAt('foo =',DartAssistKind.CONVERT_INTO_GETTER,'const myAnnotation = const Object();
        } )());
    }

    test_convertToGetter_OK_noType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('foo =',DartAssistKind.CONVERT_INTO_GETTER,'class A {
        } )());
    }

    test_convertToIsNot_BAD_is_alreadyIsNot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {
            await this.assertNoAssistAt('is!',DartAssistKind.CONVERT_INTO_IS_NOT);
        } )());
    }

    test_convertToIsNot_BAD_is_noEnclosingParenthesis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {
            await this.assertNoAssistAt('is String',DartAssistKind.CONVERT_INTO_IS_NOT);
        } )());
    }

    test_convertToIsNot_BAD_is_noPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {
            await this.assertNoAssistAt('is String',DartAssistKind.CONVERT_INTO_IS_NOT);
        } )());
    }

    test_convertToIsNot_BAD_is_notIsExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {
            await this.assertNoAssistAt('123 +',DartAssistKind.CONVERT_INTO_IS_NOT);
        } )());
    }

    test_convertToIsNot_BAD_is_notTheNotOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('main(p) {
            await this.assertNoAssistAt('is String',DartAssistKind.CONVERT_INTO_IS_NOT);
        } )());
    }

    test_convertToIsNot_BAD_not_alreadyIsNot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {
            await this.assertNoAssistAt('!(p',DartAssistKind.CONVERT_INTO_IS_NOT);
        } )());
    }

    test_convertToIsNot_BAD_not_noEnclosingParenthesis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {
            await this.assertNoAssistAt('!p',DartAssistKind.CONVERT_INTO_IS_NOT);
        } )());
    }

    test_convertToIsNot_BAD_not_notIsExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {
            await this.assertNoAssistAt('!(p',DartAssistKind.CONVERT_INTO_IS_NOT);
        } )());
    }

    test_convertToIsNot_BAD_not_notTheNotOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('main(p) {
            await this.assertNoAssistAt('++(',DartAssistKind.CONVERT_INTO_IS_NOT);
        } )());
    }

    test_convertToIsNot_OK_childOfIs_left() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {
            await this.assertHasAssistAt('p is',DartAssistKind.CONVERT_INTO_IS_NOT,'main(p) {
        } )());
    }

    test_convertToIsNot_OK_childOfIs_right() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {
            await this.assertHasAssistAt('String)',DartAssistKind.CONVERT_INTO_IS_NOT,'main(p) {
        } )());
    }

    test_convertToIsNot_OK_is() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {
            await this.assertHasAssistAt('is String',DartAssistKind.CONVERT_INTO_IS_NOT,'main(p) {
        } )());
    }

    test_convertToIsNot_OK_is_higherPrecedencePrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {
            await this.assertHasAssistAt('is String',DartAssistKind.CONVERT_INTO_IS_NOT,'main(p) {
        } )());
    }

    test_convertToIsNot_OK_is_not_higherPrecedencePrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {
            await this.assertHasAssistAt('!(p',DartAssistKind.CONVERT_INTO_IS_NOT,'main(p) {
        } )());
    }

    test_convertToIsNot_OK_not() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {
            await this.assertHasAssistAt('!(p',DartAssistKind.CONVERT_INTO_IS_NOT,'main(p) {
        } )());
    }

    test_convertToIsNot_OK_parentheses() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {
            await this.assertHasAssistAt('(p is',DartAssistKind.CONVERT_INTO_IS_NOT,'main(p) {
        } )());
    }

    test_convertToIsNotEmpty_BAD_noBang() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('main(String str) {
            await this.assertNoAssistAt('isEmpty;',DartAssistKind.CONVERT_INTO_IS_NOT_EMPTY);
        } )());
    }

    test_convertToIsNotEmpty_BAD_noIsNotEmpty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertNoAssistAt('isEmpty;',DartAssistKind.CONVERT_INTO_IS_NOT_EMPTY);
        } )());
    }

    test_convertToIsNotEmpty_BAD_notInPrefixExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(String str) {
            await this.assertNoAssistAt('isEmpty;',DartAssistKind.CONVERT_INTO_IS_NOT_EMPTY);
        } )());
    }

    test_convertToIsNotEmpty_BAD_notIsEmpty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(int p) {
            await this.assertNoAssistAt('isEven;',DartAssistKind.CONVERT_INTO_IS_NOT_EMPTY);
        } )());
    }

    test_convertToIsNotEmpty_OK_on_isEmpty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(String str) {
            await this.assertHasAssistAt('isEmpty',DartAssistKind.CONVERT_INTO_IS_NOT_EMPTY,'main(String str) {
        } )());
    }

    test_convertToIsNotEmpty_OK_on_str() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(String str) {
            await this.assertHasAssistAt('str.',DartAssistKind.CONVERT_INTO_IS_NOT_EMPTY,'main(String str) {
        } )());
    }

    test_convertToIsNotEmpty_OK_propertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(String str) {
            await this.assertHasAssistAt('isEmpty',DartAssistKind.CONVERT_INTO_IS_NOT_EMPTY,'main(String str) {
        } )());
    }

    test_convertToNormalParameter_OK_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('test)',DartAssistKind.CONVERT_TO_NORMAL_PARAMETER,'class A {
        } )());
    }

    test_convertToNormalParameter_OK_firstInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('test)',DartAssistKind.CONVERT_TO_NORMAL_PARAMETER,'class A {
        } )());
    }

    test_convertToNormalParameter_OK_secondInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('bbb)',DartAssistKind.CONVERT_TO_NORMAL_PARAMETER,'class A {
        } )());
    }

    test_encapsulateField_BAD_alreadyPrivate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertNoAssistAt('_test =',DartAssistKind.ENCAPSULATE_FIELD);
        } )());
    }

    test_encapsulateField_BAD_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertNoAssistAt('test =',DartAssistKind.ENCAPSULATE_FIELD);
        } )());
    }

    test_encapsulateField_BAD_multipleFields() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertNoAssistAt('bbb, ',DartAssistKind.ENCAPSULATE_FIELD);
        } )());
    }

    test_encapsulateField_BAD_notOnName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertNoAssistAt('+ 2',DartAssistKind.ENCAPSULATE_FIELD);
        } )());
    }

    test_encapsulateField_BAD_parseError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('class A {
            await this.assertNoAssistAt('; // marker',DartAssistKind.ENCAPSULATE_FIELD);
        } )());
    }

    test_encapsulateField_BAD_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertNoAssistAt('test =',DartAssistKind.ENCAPSULATE_FIELD);
        } )());
    }

    test_encapsulateField_OK_hasType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('test = 42',DartAssistKind.ENCAPSULATE_FIELD,'class A {
        } )());
    }

    test_encapsulateField_OK_noType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('test = 42',DartAssistKind.ENCAPSULATE_FIELD,'class A {
        } )());
    }

    test_exchangeBinaryExpressionArguments_BAD_extraLength() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            this.length = 3;
            await this.assertNoAssistAt('+ 222',DartAssistKind.EXCHANGE_OPERANDS);
        } )());
    }

    test_exchangeBinaryExpressionArguments_BAD_onOperand() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            this.length = 3;
            await this.assertNoAssistAt('11 +',DartAssistKind.EXCHANGE_OPERANDS);
        } )());
    }

    test_exchangeBinaryExpressionArguments_BAD_selectionWithBinary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
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
                await this.resolveTestUnit(`bool main(int a, int b) {
                await this.assertHasAssistAt(initialOperator,DartAssistKind.EXCHANGE_OPERANDS,`bool main(int a, int b) {
            }
        } )());
    }

    test_exchangeBinaryExpressionArguments_OK_extended_mixOperator_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('* 2',DartAssistKind.EXCHANGE_OPERANDS,'main() {
        } )());
    }

    test_exchangeBinaryExpressionArguments_OK_extended_mixOperator_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('+ 2',DartAssistKind.EXCHANGE_OPERANDS,'main() {
        } )());
    }

    test_exchangeBinaryExpressionArguments_OK_extended_sameOperator_afterFirst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('+ 2',DartAssistKind.EXCHANGE_OPERANDS,'main() {
        } )());
    }

    test_exchangeBinaryExpressionArguments_OK_extended_sameOperator_afterSecond() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('+ 3',DartAssistKind.EXCHANGE_OPERANDS,'main() {
        } )());
    }

    test_exchangeBinaryExpressionArguments_OK_simple_afterOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt(' 2',DartAssistKind.EXCHANGE_OPERANDS,'main() {
        } )());
    }

    test_exchangeBinaryExpressionArguments_OK_simple_beforeOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('+ 2',DartAssistKind.EXCHANGE_OPERANDS,'main() {
        } )());
    }

    test_exchangeBinaryExpressionArguments_OK_simple_fullSelection() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            this.length = new core.DartString('1 + 2').length;
            await this.assertHasAssistAt('1 + 2',DartAssistKind.EXCHANGE_OPERANDS,'main() {
        } )());
    }

    test_exchangeBinaryExpressionArguments_OK_simple_withLength() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            this.length = 2;
            await this.assertHasAssistAt('+ 2',DartAssistKind.EXCHANGE_OPERANDS,'main() {
        } )());
    }

    test_importAddShow_BAD_hasShow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:math\' show PI;
            await this.assertNoAssistAt('import ',DartAssistKind.IMPORT_ADD_SHOW);
        } )());
    }

    test_importAddShow_BAD_unresolvedUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('import \'/no/such/lib.dart\';
            await this.assertNoAssistAt('import ',DartAssistKind.IMPORT_ADD_SHOW);
        } )());
    }

    test_importAddShow_BAD_unused() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:math\';
            await this.assertNoAssistAt('import ',DartAssistKind.IMPORT_ADD_SHOW);
        } )());
    }

    test_importAddShow_OK_hasUnresolvedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:math\';
            await this.assertHasAssistAt('import ',DartAssistKind.IMPORT_ADD_SHOW,'import \'dart:math\' show PI;
        } )());
    }

    test_importAddShow_OK_onDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:math\';
            await this.assertHasAssistAt('import ',DartAssistKind.IMPORT_ADD_SHOW,'import \'dart:math\' show E, PI, max;
        } )());
    }

    test_importAddShow_OK_onUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:math\';
            await this.assertHasAssistAt('art:math',DartAssistKind.IMPORT_ADD_SHOW,'import \'dart:math\' show E, PI, max;
        } )());
    }

    test_introduceLocalTestedType_BAD_notBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {
            await this.assertNoAssistAt('if (p',DartAssistKind.INTRODUCE_LOCAL_CAST_TYPE);
        } )());
    }

    test_introduceLocalTestedType_BAD_notIsExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {
            await this.assertNoAssistAt('if (p',DartAssistKind.INTRODUCE_LOCAL_CAST_TYPE);
        } )());
    }

    test_introduceLocalTestedType_BAD_notStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C {
            await this.assertNoAssistAt('is int',DartAssistKind.INTRODUCE_LOCAL_CAST_TYPE);
        } )());
    }

    test_introduceLocalTestedType_OK_if_is() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class MyTypeName {}
            let expected : string = 'class MyTypeName {}
            await this.assertHasAssistAt('is MyType',DartAssistKind.INTRODUCE_LOCAL_CAST_TYPE,expected);
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('myTypeName = '),this.expectedSuggestions(LinkedEditSuggestionKind.VARIABLE,new core.DartList.literal('myTypeName','typeName','name')));
            await this.assertHasAssistAt('if (p',DartAssistKind.INTRODUCE_LOCAL_CAST_TYPE,expected);
        } )());
    }

    test_introduceLocalTestedType_OK_if_isNot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class MyTypeName {}
            let expected : string = 'class MyTypeName {}
            await this.assertHasAssistAt('is! MyType',DartAssistKind.INTRODUCE_LOCAL_CAST_TYPE,expected);
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('myTypeName = '),this.expectedSuggestions(LinkedEditSuggestionKind.VARIABLE,new core.DartList.literal('myTypeName','typeName','name')));
            await this.assertHasAssistAt('if (p',DartAssistKind.INTRODUCE_LOCAL_CAST_TYPE,expected);
        } )());
    }

    test_introduceLocalTestedType_OK_while() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {
            let expected : string = 'main(p) {
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
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('if (',DartAssistKind.INVERT_IF_STATEMENT,'main() {
        } )());
    }

    test_invertIfStatement_statements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('if (',DartAssistKind.INVERT_IF_STATEMENT,'main() {
        } )());
    }

    test_joinIfStatementInner_BAD_innerNotIf() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('if (1 ==',DartAssistKind.JOIN_IF_WITH_INNER);
        } )());
    }

    test_joinIfStatementInner_BAD_innerWithElse() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('if (1 ==',DartAssistKind.JOIN_IF_WITH_INNER);
        } )());
    }

    test_joinIfStatementInner_BAD_statementAfterInner() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('if (1 ==',DartAssistKind.JOIN_IF_WITH_INNER);
        } )());
    }

    test_joinIfStatementInner_BAD_statementBeforeInner() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('if (1 ==',DartAssistKind.JOIN_IF_WITH_INNER);
        } )());
    }

    test_joinIfStatementInner_BAD_targetNotIf() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('print',DartAssistKind.JOIN_IF_WITH_INNER);
        } )());
    }

    test_joinIfStatementInner_BAD_targetWithElse() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('if (1 ==',DartAssistKind.JOIN_IF_WITH_INNER);
        } )());
    }

    test_joinIfStatementInner_OK_conditionAndOr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('if (1 ==',DartAssistKind.JOIN_IF_WITH_INNER,'main() {
        } )());
    }

    test_joinIfStatementInner_OK_conditionInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('if (isCheck',DartAssistKind.JOIN_IF_WITH_INNER,'main() {
        } )());
    }

    test_joinIfStatementInner_OK_conditionOrAnd() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('if (1 ==',DartAssistKind.JOIN_IF_WITH_INNER,'main() {
        } )());
    }

    test_joinIfStatementInner_OK_onCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('1 ==',DartAssistKind.JOIN_IF_WITH_INNER,'main() {
        } )());
    }

    test_joinIfStatementInner_OK_simpleConditions_block_block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('if (1 ==',DartAssistKind.JOIN_IF_WITH_INNER,'main() {
        } )());
    }

    test_joinIfStatementInner_OK_simpleConditions_block_single() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('if (1 ==',DartAssistKind.JOIN_IF_WITH_INNER,'main() {
        } )());
    }

    test_joinIfStatementInner_OK_simpleConditions_single_blockMulti() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('if (1 ==',DartAssistKind.JOIN_IF_WITH_INNER,'main() {
        } )());
    }

    test_joinIfStatementInner_OK_simpleConditions_single_blockOne() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('if (1 ==',DartAssistKind.JOIN_IF_WITH_INNER,'main() {
        } )());
    }

    test_joinIfStatementOuter_BAD_outerNotIf() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('if (1 == 1',DartAssistKind.JOIN_IF_WITH_OUTER);
        } )());
    }

    test_joinIfStatementOuter_BAD_outerWithElse() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('if (2 == 2',DartAssistKind.JOIN_IF_WITH_OUTER);
        } )());
    }

    test_joinIfStatementOuter_BAD_statementAfterInner() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('if (2 == 2',DartAssistKind.JOIN_IF_WITH_OUTER);
        } )());
    }

    test_joinIfStatementOuter_BAD_statementBeforeInner() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('if (2 == 2',DartAssistKind.JOIN_IF_WITH_OUTER);
        } )());
    }

    test_joinIfStatementOuter_BAD_targetNotIf() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('print',DartAssistKind.JOIN_IF_WITH_OUTER);
        } )());
    }

    test_joinIfStatementOuter_BAD_targetWithElse() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('if (2 == 2',DartAssistKind.JOIN_IF_WITH_OUTER);
        } )());
    }

    test_joinIfStatementOuter_OK_conditionAndOr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('if (2 ==',DartAssistKind.JOIN_IF_WITH_OUTER,'main() {
        } )());
    }

    test_joinIfStatementOuter_OK_conditionInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('if (isCheck',DartAssistKind.JOIN_IF_WITH_OUTER,'main() {
        } )());
    }

    test_joinIfStatementOuter_OK_conditionOrAnd() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('if (3 == 3',DartAssistKind.JOIN_IF_WITH_OUTER,'main() {
        } )());
    }

    test_joinIfStatementOuter_OK_onCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('if (2 == 2',DartAssistKind.JOIN_IF_WITH_OUTER,'main() {
        } )());
    }

    test_joinIfStatementOuter_OK_simpleConditions_block_block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('if (2 == 2',DartAssistKind.JOIN_IF_WITH_OUTER,'main() {
        } )());
    }

    test_joinIfStatementOuter_OK_simpleConditions_block_single() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('if (2 == 2',DartAssistKind.JOIN_IF_WITH_OUTER,'main() {
        } )());
    }

    test_joinIfStatementOuter_OK_simpleConditions_single_blockMulti() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('if (2 == 2',DartAssistKind.JOIN_IF_WITH_OUTER,'main() {
        } )());
    }

    test_joinIfStatementOuter_OK_simpleConditions_single_blockOne() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('if (2 == 2',DartAssistKind.JOIN_IF_WITH_OUTER,'main() {
        } )());
    }

    test_joinVariableDeclaration_onAssignment_BAD_hasInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('v = 2',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onAssignment_BAD_notAdjacent() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('v = 1',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onAssignment_BAD_notAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('v += 1',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onAssignment_BAD_notDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(var v) {
            await this.assertNoAssistAt('v = 1',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onAssignment_BAD_notLeftArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('v; // marker',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onAssignment_BAD_notOneVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('v = 1',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onAssignment_BAD_notResolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('x = 1',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onAssignment_BAD_notSameBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('v = 1',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onAssignment_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('v =',DartAssistKind.JOIN_VARIABLE_DECLARATION,'main() {
        } )());
    }

    test_joinVariableDeclaration_onDeclaration_BAD_hasInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('v = 1',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onDeclaration_BAD_lastStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('v;',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onDeclaration_BAD_nextNotAssignmentExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('v;',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onDeclaration_BAD_nextNotExpressionStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('v;',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onDeclaration_BAD_nextNotPureAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('v;',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onDeclaration_BAD_notOneVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('v, ',DartAssistKind.JOIN_VARIABLE_DECLARATION);
        } )());
    }

    test_joinVariableDeclaration_onDeclaration_OK_onName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('v;',DartAssistKind.JOIN_VARIABLE_DECLARATION,'main() {
        } )());
    }

    test_joinVariableDeclaration_onDeclaration_OK_onType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('int v',DartAssistKind.JOIN_VARIABLE_DECLARATION,'main() {
        } )());
    }

    test_joinVariableDeclaration_onDeclaration_OK_onVar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('var v',DartAssistKind.JOIN_VARIABLE_DECLARATION,'main() {
        } )());
    }

    test_moveFlutterWidgetDown_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';
            this._setCaretLocation();
            await this.assertHasAssist(DartAssistKind.MOVE_FLUTTER_WIDGET_DOWN,'import \'package:flutter/src/widgets/framework.dart\';
        } )());
    }

    test_moveFlutterWidgetUp_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';
            this._setCaretLocation();
            await this.assertHasAssist(DartAssistKind.MOVE_FLUTTER_WIDGET_UP,'import \'package:flutter/src/widgets/framework.dart\';
        } )());
    }

    test_removeTypeAnnotation_classField_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('v = ',DartAssistKind.REMOVE_TYPE_ANNOTATION,'class A {
        } )());
    }

    test_removeTypeAnnotation_classField_OK_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasAssistAt('v = ',DartAssistKind.REMOVE_TYPE_ANNOTATION,'class A {
        } )());
    }

    test_removeTypeAnnotation_localVariable_BAD_onInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('1;',DartAssistKind.REMOVE_TYPE_ANNOTATION);
        } )());
    }

    test_removeTypeAnnotation_localVariable_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('int ',DartAssistKind.REMOVE_TYPE_ANNOTATION,'main() {
        } )());
    }

    test_removeTypeAnnotation_localVariable_OK_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('int ',DartAssistKind.REMOVE_TYPE_ANNOTATION,'main() {
        } )());
    }

    test_removeTypeAnnotation_localVariable_OK_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('int ',DartAssistKind.REMOVE_TYPE_ANNOTATION,'main() {
        } )());
    }

    test_removeTypeAnnotation_topLevelVariable_BAD_syntheticName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('MyType
            await this.assertNoAssistAt('MyType',DartAssistKind.REMOVE_TYPE_ANNOTATION);
        } )());
    }

    test_removeTypeAnnotation_topLevelVariable_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('int V = 1;
            await this.assertHasAssistAt('int ',DartAssistKind.REMOVE_TYPE_ANNOTATION,'var V = 1;
        } )());
    }

    test_removeTypeAnnotation_topLevelVariable_OK_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('final int V = 1;
            await this.assertHasAssistAt('int ',DartAssistKind.REMOVE_TYPE_ANNOTATION,'final V = 1;
        } )());
    }

    test_reparentFlutterList_BAD_multiLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';
            this._setCaretLocation();
            await this.assertNoAssist(DartAssistKind.REPARENT_FLUTTER_LIST);
        } )());
    }

    test_reparentFlutterList_BAD_singleLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';
            this._setCaretLocation();
            await this.assertNoAssist(DartAssistKind.REPARENT_FLUTTER_LIST);
        } )());
    }

    test_reparentFlutterList_OK_multiLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';
            this._setCaretLocation();
            await this.assertHasAssist(DartAssistKind.REPARENT_FLUTTER_LIST,'import \'package:flutter/src/widgets/framework.dart\';
        } )());
    }

    test_reparentFlutterWidget_BAD_minimal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('/*caret*/x(){}
            this._setCaretLocation();
            await this.assertNoAssist(DartAssistKind.REPARENT_FLUTTER_WIDGET);
        } )());
    }

    test_reparentFlutterWidget_BAD_singleLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';
            this._setCaretLocation();
            await this.assertNoAssist(DartAssistKind.REPARENT_FLUTTER_WIDGET);
        } )());
    }

    test_reparentFlutterWidget_OK_multiLines() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';
            this._setCaretLocation();
            await this.assertHasAssist(DartAssistKind.REPARENT_FLUTTER_WIDGET,'import \'package:flutter/src/widgets/framework.dart\';
        } )());
    }

    test_reparentFlutterWidget_OK_multiLines_eol2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';
            this._setCaretLocation();
            await this.assertHasAssist(DartAssistKind.REPARENT_FLUTTER_WIDGET,'import \'package:flutter/src/widgets/framework.dart\';
        } )());
    }

    test_reparentFlutterWidget_OK_singleLine1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';
            this._setCaretLocation();
            await this.assertHasAssist(DartAssistKind.REPARENT_FLUTTER_WIDGET,'import \'package:flutter/src/widgets/framework.dart\';
        } )());
    }

    test_reparentFlutterWidget_OK_singleLine2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';
            this._setCaretLocation();
            await this.assertHasAssist(DartAssistKind.REPARENT_FLUTTER_WIDGET,'import \'package:flutter/src/widgets/framework.dart\';
        } )());
    }

    test_replaceConditionalWithIfElse_BAD_noEnclosingStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('var v = true ? 111 : 222;
            await this.assertNoAssistAt('? 111',DartAssistKind.REPLACE_CONDITIONAL_WITH_IF_ELSE);
        } )());
    }

    test_replaceConditionalWithIfElse_BAD_notConditional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('v = 42',DartAssistKind.REPLACE_CONDITIONAL_WITH_IF_ELSE);
        } )());
    }

    test_replaceConditionalWithIfElse_OK_assignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('11 :',DartAssistKind.REPLACE_CONDITIONAL_WITH_IF_ELSE,'main() {
            await this.assertHasAssistAt('v =',DartAssistKind.REPLACE_CONDITIONAL_WITH_IF_ELSE,'main() {
        } )());
    }

    test_replaceConditionalWithIfElse_OK_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('return ',DartAssistKind.REPLACE_CONDITIONAL_WITH_IF_ELSE,'main() {
        } )());
    }

    test_replaceConditionalWithIfElse_OK_variableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('11 :',DartAssistKind.REPLACE_CONDITIONAL_WITH_IF_ELSE,'main() {
        } )());
    }

    test_replaceIfElseWithConditional_BAD_expressionVsReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('else',DartAssistKind.REPLACE_IF_ELSE_WITH_CONDITIONAL);
        } )());
    }

    test_replaceIfElseWithConditional_BAD_notIfStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('print',DartAssistKind.REPLACE_IF_ELSE_WITH_CONDITIONAL);
        } )());
    }

    test_replaceIfElseWithConditional_BAD_notSingleStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('if (true)',DartAssistKind.REPLACE_IF_ELSE_WITH_CONDITIONAL);
        } )());
    }

    test_replaceIfElseWithConditional_OK_assignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('if (true)',DartAssistKind.REPLACE_IF_ELSE_WITH_CONDITIONAL,'main() {
        } )());
    }

    test_replaceIfElseWithConditional_OK_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('if (true)',DartAssistKind.REPLACE_IF_ELSE_WITH_CONDITIONAL,'main() {
        } )());
    }

    test_splitAndCondition_BAD_hasElse() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('&& 2',DartAssistKind.SPLIT_AND_CONDITION);
        } )());
    }

    test_splitAndCondition_BAD_notAnd() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('|| 2',DartAssistKind.SPLIT_AND_CONDITION);
        } )());
    }

    test_splitAndCondition_BAD_notPartOfIf() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('&& 2',DartAssistKind.SPLIT_AND_CONDITION);
        } )());
    }

    test_splitAndCondition_BAD_notTopLevelAnd() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('&& 2',DartAssistKind.SPLIT_AND_CONDITION);
            await this.assertNoAssistAt('&& 4',DartAssistKind.SPLIT_AND_CONDITION);
        } )());
    }

    test_splitAndCondition_OK_innerAndExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('&& 2 == 2',DartAssistKind.SPLIT_AND_CONDITION,'main() {
        } )());
    }

    test_splitAndCondition_OK_thenBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('&& false',DartAssistKind.SPLIT_AND_CONDITION,'main() {
        } )());
    }

    test_splitAndCondition_OK_thenStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('&& false',DartAssistKind.SPLIT_AND_CONDITION,'main() {
        } )());
    }

    test_splitAndCondition_wrong() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('main() {',DartAssistKind.SPLIT_AND_CONDITION);
            {
                this.length = 5;
                await this.assertNoAssistAt('&& 2 == 2',DartAssistKind.SPLIT_AND_CONDITION);
            }
        } )());
    }

    test_splitVariableDeclaration_BAD_notOneVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoAssistAt('v = 1',DartAssistKind.SPLIT_VARIABLE_DECLARATION);
        } )());
    }

    test_splitVariableDeclaration_OK_onName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('v =',DartAssistKind.SPLIT_VARIABLE_DECLARATION,'main() {
        } )());
    }

    test_splitVariableDeclaration_OK_onType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('int ',DartAssistKind.SPLIT_VARIABLE_DECLARATION,'main() {
        } )());
    }

    test_splitVariableDeclaration_OK_onVar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasAssistAt('var ',DartAssistKind.SPLIT_VARIABLE_DECLARATION,'main() {
        } )());
    }

    test_surroundWith_block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            this._setStartEndSelection();
            await this.assertHasAssist(DartAssistKind.SURROUND_WITH_BLOCK,'main() {
        } )());
    }

    test_surroundWith_doWhile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            this._setStartEndSelection();
            await this.assertHasAssist(DartAssistKind.SURROUND_WITH_DO_WHILE,'main() {
        } )());
    }

    test_surroundWith_for() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            this._setStartEndSelection();
            await this.assertHasAssist(DartAssistKind.SURROUND_WITH_FOR,'main() {
        } )());
    }

    test_surroundWith_forIn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            this._setStartEndSelection();
            await this.assertHasAssist(DartAssistKind.SURROUND_WITH_FOR_IN,'main() {
        } )());
    }

    test_surroundWith_if() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            this._setStartEndSelection();
            await this.assertHasAssist(DartAssistKind.SURROUND_WITH_IF,'main() {
        } )());
    }

    test_surroundWith_tryCatch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            this._setStartEndSelection();
            await this.assertHasAssist(DartAssistKind.SURROUND_WITH_TRY_CATCH,'main() {
        } )());
    }

    test_surroundWith_tryFinally() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            this._setStartEndSelection();
            await this.assertHasAssist(DartAssistKind.SURROUND_WITH_TRY_FINALLY,'main() {
        } )());
    }

    test_surroundWith_while() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            this._setStartEndSelection();
            await this.assertHasAssist(DartAssistKind.SURROUND_WITH_WHILE,'main() {
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