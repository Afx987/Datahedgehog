/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/edit/sort_members_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";
import * as lib4 from "./../mocks";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SortMembersTest);
    });
};
export namespace SortMembersTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'SortMembersTest';
    export type Interface = Omit<SortMembersTest, Constructors>;
}
@DartClass
export class SortMembersTest extends lib3.AbstractAnalysisTest {
    fileEdit : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.createProject();
        let manager : any = new bare.createInstance(any,null);
        manager.processPlugins(new core.DartList.literal(this.server.serverPlugin));
        this.handler = new bare.createInstance(any,null,this.server);
    }
    test_BAD_doesNotExist() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let request : any = new bare.createInstance(any,null,'/no/such/file.dart').toRequest('0');
            let response : any = await this.waitResponse(request);
            expect(response,lib4.isResponseFailure('0',RequestErrorCode.SORT_MEMBERS_INVALID_FILE));
        } )());
    }

    test_BAD_hasParseError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  print()\n}\n');
            let request : any = new bare.createInstance(any,null,this.testFile).toRequest('0');
            let response : any = await this.waitResponse(request);
            expect(response,lib4.isResponseFailure('0',RequestErrorCode.SORT_MEMBERS_PARSE_ERRORS));
        } )());
    }

    test_BAD_notDartFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let request : any = new bare.createInstance(any,null,'/not-a-Dart-file.txt').toRequest('0');
            let response : any = await this.waitResponse(request);
            expect(response,lib4.isResponseFailure('0',RequestErrorCode.SORT_MEMBERS_INVALID_FILE));
        } )());
    }

    test_OK_afterWaitForAnalysis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class C {}\nclass A {}\nclass B {}\n');
            await this.waitForTasksFinished();
            return this._assertSorted('class A {}\nclass B {}\nclass C {}\n');
        } )());
    }

    test_OK_classMembers_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  c() {}\n  a() {}\n  b() {}\n}\n');
            return this._assertSorted('class A {\n  a() {}\n  b() {}\n  c() {}\n}\n');
        } )());
    }

    test_OK_directives() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library lib;\n\nexport \'dart:bbb\';\nimport \'dart:bbb\';\nexport \'package:bbb/bbb.dart\';\nimport \'bbb/bbb.dart\';\nexport \'dart:aaa\';\nexport \'package:aaa/aaa.dart\';\nimport \'package:bbb/bbb.dart\';\nexport \'aaa/aaa.dart\';\nexport \'bbb/bbb.dart\';\nimport \'dart:aaa\';\nimport \'package:aaa/aaa.dart\';\nimport \'aaa/aaa.dart\';\npart \'bbb/bbb.dart\';\npart \'aaa/aaa.dart\';\n\nmain() {\n}\n');
            return this._assertSorted('library lib;\n\nimport \'dart:aaa\';\nimport \'dart:bbb\';\n\nimport \'package:aaa/aaa.dart\';\nimport \'package:bbb/bbb.dart\';\n\nimport \'aaa/aaa.dart\';\nimport \'bbb/bbb.dart\';\n\nexport \'dart:aaa\';\nexport \'dart:bbb\';\n\nexport \'package:aaa/aaa.dart\';\nexport \'package:bbb/bbb.dart\';\n\nexport \'aaa/aaa.dart\';\nexport \'bbb/bbb.dart\';\n\npart \'aaa/aaa.dart\';\npart \'bbb/bbb.dart\';\n\nmain() {\n}\n');
        } )());
    }

    test_OK_directives_withAnnotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library lib;\n\nexport \'dart:bbb\';\n@MyAnnotation(1)\n@MyAnnotation(2)\nimport \'dart:bbb\';\n@MyAnnotation(3)\nexport \'dart:aaa\';\nimport \'dart:aaa\';\n\nclass MyAnnotation {\n  const MyAnnotation(_);\n}\n');
            return this._assertSorted('library lib;\n\nimport \'dart:aaa\';\n@MyAnnotation(1)\n@MyAnnotation(2)\nimport \'dart:bbb\';\n\n@MyAnnotation(3)\nexport \'dart:aaa\';\nexport \'dart:bbb\';\n\nclass MyAnnotation {\n  const MyAnnotation(_);\n}\n');
        } )());
    }

    test_OK_genericFunctionTypeInComments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile(this.projectPath + '/analysis_options.yaml','analyzer:\n  strong-mode: true\n');
            this.addTestFile('class C {\n  void caller() {\n    Super s = new Super();\n    takesSub(s); // <- No warning\n  }\n\n  void takesSub(Sub s) {}\n}\n\nclass Sub extends Super {}\n\nclass Super {}\n\ntypedef dynamic Func(String x, String y);\n\nFunction/*=F*/ allowInterop/*<F extends Function>*/(Function/*=F*/ f) => null;\n\nFunc bar(Func f) {\n  return allowInterop(f);\n}\n');
            return this._assertSorted('Function/*=F*/ allowInterop/*<F extends Function>*/(Function/*=F*/ f) => null;\n\nFunc bar(Func f) {\n  return allowInterop(f);\n}\n\ntypedef dynamic Func(String x, String y);\n\nclass C {\n  void caller() {\n    Super s = new Super();\n    takesSub(s); // <- No warning\n  }\n\n  void takesSub(Sub s) {}\n}\n\nclass Sub extends Super {}\n\nclass Super {}\n');
        } )());
    }

    test_OK_unitMembers_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class C {}\nclass A {}\nclass B {}\n');
            return this._assertSorted('class A {}\nclass B {}\nclass C {}\n');
        } )());
    }

    _assertSorted(expectedCode : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._requestSort();
            let resultCode : string = SourceEdit.applySequence(this.testCode,this.fileEdit.edits);
            expect(resultCode,expectedCode);
        } )());
    }

    _requestSort() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let request : any = new bare.createInstance(any,null,this.testFile).toRequest('0');
            let response : any = await this.waitResponse(request);
            let result = new bare.createInstance(any,null,response);
            this.fileEdit = result.edit;
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
