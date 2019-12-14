/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/analysis/get_errors_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(GetErrorsTest);
    });
};
export namespace GetErrorsTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'GetErrorsTest';
    export type Interface = Omit<GetErrorsTest, Constructors>;
}
@DartClass
export class GetErrorsTest extends lib3.AbstractAnalysisTest {
    private static __$requestId : string;
    static get requestId() : string { 
        if (this.__$requestId===undefined) {
            this.__$requestId = 'test-getError';
        }
        return this.__$requestId;
    }

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
        this.server.handlers = new core.DartList.literal(new bare.createInstance(any,null,this.server));
        this.createProject();
    }
    test_afterAnalysisComplete() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  print(42)\n}\n');
            await this.waitForTasksFinished();
            let errors : core.DartList<any> = await this._getErrors(this.testFile);
            expect(errors,hasLength(1));
        } )());
    }

    test_errorInPart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libPath : string = `${this.testFolder}/main.dart`;
            let partPath : string = `${this.testFolder}/main_part.dart`;
            this.addFile(libPath,'library main;\npart \'main_part.dart\';\nclass A {}\n');
            this.addFile(partPath,'part of main;\nclass A {}\n');
            await this.waitForTasksFinished();
            {
                let libErrors : core.DartList<any> = await this._getErrors(libPath);
                expect(libErrors,isEmpty);
            }
            {
                let partErrors : core.DartList<any> = await this._getErrors(partPath);
                expect(partErrors,hasLength(1));
            }
        } )());
    }

    test_fileDoesNotExist() {
        let file : string = `${this.projectPath}/doesNotExist.dart`;
        return this._checkInvalid(file);
    }
    test_fileWithoutContext() {
        let file : string = '/outside.dart';
        this.addFile(file,'main() {\n  print(42);\n}\n');
        return this._checkInvalid(file);
    }
    test_hasErrors() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  print(42)\n}\n');
            let errors : core.DartList<any> = await this._getErrors(this.testFile);
            expect(errors,hasLength(1));
            {
                let error : any = errors[0];
                expect(error.severity,AnalysisErrorSeverity.ERROR);
                expect(error.type,AnalysisErrorType.SYNTACTIC_ERROR);
                expect(error.location.file,this.testFile);
                expect(error.location.startLine,2);
            }
        } )());
    }

    test_noErrors() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  print(42);\n}\n');
            let errors : core.DartList<any> = await this._getErrors(this.testFile);
            expect(errors,isEmpty);
        } )());
    }

    test_removeContextAfterRequest() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  print(42)\n}\n');
            let request : any = this._createGetErrorsRequest(this.testFile);
            this.server.handleRequest(request);
            this.resourceProvider.deleteFolder(this.projectPath);
            let response : any = await this.serverChannel.waitForResponse(request);
            expect(response.error,isNotNull);
            expect(response.error.code,RequestErrorCode.GET_ERRORS_INVALID_FILE);
        } )());
    }

    _checkInvalid(file : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let request : any = this._createGetErrorsRequest(file);
            let response : any = await this.serverChannel.sendRequest(request);
            expect(response.error,isNotNull);
            expect(response.error.code,RequestErrorCode.GET_ERRORS_INVALID_FILE);
        } )());
    }

    _createGetErrorsRequest(file : string) : any {
        return new bare.createInstance(any,null,file).toRequest(GetErrorsTest.requestId);
    }
    _getErrors(file : string) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let request : any = this._createGetErrorsRequest(file);
            let response : any = await this.serverChannel.sendRequest(request);
            return new bare.createInstance(any,null,response).errors;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GetErrorsTest() {
    }
}

export class properties {
}
