/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/edit/organize_directives_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";
import * as lib4 from "./../mocks";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(OrganizeDirectivesTest);
    });
};
export namespace OrganizeDirectivesTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'OrganizeDirectivesTest';
    export type Interface = Omit<OrganizeDirectivesTest, Constructors>;
}
@DartClass
export class OrganizeDirectivesTest extends lib3.AbstractAnalysisTest {
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
            await this.waitForTasksFinished();
            let request : any = new bare.createInstance(any,null,'/no/such/file.dart').toRequest('0');
            let response : any = await this.waitResponse(request);
            expect(response,lib4.isResponseFailure('0',RequestErrorCode.FILE_NOT_ANALYZED));
        } )());
    }

    test_BAD_hasParseError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('import \'dart:async\'\n\nmain() {}\n');
            await this.waitForTasksFinished();
            let request : any = new bare.createInstance(any,null,this.testFile).toRequest('0');
            let response : any = await this.waitResponse(request);
            expect(response,lib4.isResponseFailure('0',RequestErrorCode.ORGANIZE_DIRECTIVES_ERROR));
        } )());
    }

    test_BAD_notDartFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.waitForTasksFinished();
            let request : any = new bare.createInstance(any,null,'/not-a-Dart-file.txt').toRequest('0');
            let response : any = await this.waitResponse(request);
            expect(response,lib4.isResponseFailure('0',RequestErrorCode.FILE_NOT_ANALYZED));
        } )());
    }

    test_OK_remove_duplicateImports_withSamePrefix() : async.Future<any> {
        this.addTestFile('library lib;\n\nimport \'dart:async\' as async;\nimport \'dart:async\' as async;\n\nmain() {\n  async.Future f;\n}\n');
        return this._assertOrganized('library lib;\n\nimport \'dart:async\' as async;\n\nmain() {\n  async.Future f;\n}\n');
    }
    test_OK_remove_unresolvedDirectives() : async.Future<any> {
        this.addFile(`${this.testFolder}/existing_part1.dart`,'part of lib;');
        this.addFile(`${this.testFolder}/existing_part2.dart`,'part of lib;');
        this.addTestFile('library lib;\n\nexport \'dart:noSuchExportSdkLibrary\';\nexport \'dart:async\';\nexport \'package:noSuchExportPackage/andLib.dart\';\nexport \'dart:math\';\n\nimport \'dart:async\';\nimport \'dart:noSuchImportSdkLibrary\';\nimport \'dart:math\';\nimport \'package:noSuchImportPackage/andLib.dart\';\n\npart \'existing_part1.dart\';\npart \'no_such_part.dart\';\npart \'existing_part2.dart\';\n\nmain(Future f) {\n  print(PI);\n}\n');
        return this._assertOrganized('library lib;\n\nimport \'dart:async\';\nimport \'dart:math\';\n\nexport \'dart:async\';\nexport \'dart:math\';\n\npart \'existing_part1.dart\';\npart \'existing_part2.dart\';\n\nmain(Future f) {\n  print(PI);\n}\n');
    }
    test_OK_remove_unusedImports() : async.Future<any> {
        this.addTestFile('library lib;\n\nimport \'dart:async\';\nimport \'dart:math\';\nimport \'dart:convert\';\nimport \'dart:collection\';\n\nmain() {\n  print(PI);\n  new HashMap();\n}\n');
        return this._assertOrganized('library lib;\n\nimport \'dart:collection\';\nimport \'dart:math\';\n\nmain() {\n  print(PI);\n  new HashMap();\n}\n');
    }
    _assertOrganized(expectedCode : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.waitForTasksFinished();
            await this._requestOrganize();
            let resultCode : string = SourceEdit.applySequence(this.testCode,this.fileEdit.edits);
            expect(resultCode,expectedCode);
        } )());
    }

    _requestOrganize() : async.Future<any> { 
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
    OrganizeDirectivesTest() {
    }
}

export class properties {
}
