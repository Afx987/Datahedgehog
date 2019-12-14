/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/analysis/set_priority_files_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";
import * as lib4 from "./../mocks";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SetPriorityFilesTest);
    });
};
export namespace SetPriorityFilesTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'SetPriorityFilesTest';
    export type Interface = Omit<SetPriorityFilesTest, Constructors>;
}
@DartClass
export class SetPriorityFilesTest extends lib3.AbstractAnalysisTest {
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
    test_fileDoesNotExist() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let file : string = `${this.projectPath}/doesNotExist.dart`;
            let response : any = await this._setPriorityFile(file);
            expect(response,lib4.isResponseSuccess('0'));
        } )());
    }

    test_fileInAnalysisRoot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('');
            await this.server.onAnalysisComplete;
            let response : any = await this._setPriorityFile(this.testFile);
            expect(response,lib4.isResponseSuccess('0'));
            let context : any = this.server.getContainingContext(this.testFile);
            let prioritySources : core.DartList<any> = context.prioritySources;
            expect(prioritySources,hasLength(1));
            expect(prioritySources.first.fullName,this.testFile);
        } )());
    }

    test_fileInSdk() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('');
            await this.server.onAnalysisComplete;
            let filePath : string = '/lib/convert/convert.dart';
            let response : any = await this._setPriorityFile(filePath);
            expect(response,lib4.isResponseSuccess('0'));
            let sdkContext : any = this.server.findSdk().context;
            let prioritySources : core.DartList<any> = sdkContext.prioritySources;
            expect(prioritySources,hasLength(1));
            expect(prioritySources.first.fullName,filePath);
        } )());
    }

    test_fileNotInAnalysisRoot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let path : string = '/other/file.dart';
            this.addFile(path,'');
            let response : any = await this._setPriorityFile(path);
            expect(response.error,isNotNull);
            expect(response.error.code,RequestErrorCode.UNANALYZED_PRIORITY_FILES);
        } )());
    }

    test_ignoredInAnalysisOptions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let sampleFile : string = `${this.projectPath}/samples/sample.dart`;
            this.addFile(`${this.projectPath}/.analysis_options`,'analyzer:\n  exclude:\n    - \'samples/**\'\n');
            this.addFile(sampleFile,'');
            let response : any = await this._setPriorityFile(sampleFile);
            expect(response.error,isNotNull);
            expect(response.error.code,RequestErrorCode.UNANALYZED_PRIORITY_FILES);
        } )());
    }

    test_ignoredInAnalysisOptions_inChildContext() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile(`${this.projectPath}/.packages`,'');
            this.addFile(`${this.projectPath}/child/.packages`,'');
            let sampleFile : string = `${this.projectPath}/child/samples/sample.dart`;
            this.addFile(`${this.projectPath}/child/.analysis_options`,'analyzer:\n  exclude:\n    - \'samples/**\'\n');
            this.addFile(sampleFile,'');
            let response : any = await this._setPriorityFile(sampleFile);
            expect(response.error,isNotNull);
            expect(response.error.code,RequestErrorCode.UNANALYZED_PRIORITY_FILES);
        } )());
    }

    test_ignoredInAnalysisOptions_inRootContext() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile(`${this.projectPath}/.packages`,'');
            this.addFile(`${this.projectPath}/child/.packages`,'');
            let sampleFile : string = `${this.projectPath}/child/samples/sample.dart`;
            this.addFile(`${this.projectPath}/.analysis_options`,'analyzer:\n  exclude:\n    - \'child/samples/**\'\n');
            this.addFile(sampleFile,'');
            let response : any = await this._setPriorityFile(sampleFile);
            expect(response.error,isNotNull);
            expect(response.error.code,RequestErrorCode.UNANALYZED_PRIORITY_FILES);
        } )());
    }

    test_sentToPlugins() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('');
            await this.server.onAnalysisComplete;
            let response : any = await this._setPriorityFile(this.testFile);
            expect(response,lib4.isResponseSuccess('0'));
            let params : any = this.pluginManager.analysisSetPriorityFilesParams;
            expect(params,isNotNull);
            expect(params.files,new core.DartList.literal<string>(this.testFile));
        } )());
    }

    _setPriorityFile(file : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let request : any = new bare.createInstance(any,null,new core.DartList.literal<string>(file)).toRequest('0');
            return await this.serverChannel.sendRequest(request);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SetPriorityFilesTest() {
    }
}

export class properties {
}
