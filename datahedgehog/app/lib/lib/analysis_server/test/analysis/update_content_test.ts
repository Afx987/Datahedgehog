/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/analysis/update_content_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(UpdateContentTest);
    });
};
export var compilationUnitMatcher : (file : string) => any = (file : string) =>  {
    return new _ArgumentMatcher_CompilationUnit(file);
};
export namespace UpdateContentTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'UpdateContentTest';
    export type Interface = Omit<UpdateContentTest, Constructors>;
}
@DartClass
export class UpdateContentTest extends lib3.AbstractAnalysisTest {
    filesErrors : core.DartMap<string,core.DartList<string>>;

    serverErrorCount : number;

    navigationCount : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    createIndex() : any {
        return new _MockIndex();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    processNotification(notification : any) : void {
        if (op(Op.EQUALS,notification.event,ANALYSIS_ERRORS)) {
            let decoded = new bare.createInstance(any,null,notification);
            var _format : (e : any) => string = (e : any) : string =>  {
                return `${e.location.startLine}: ${e.message}`;
            };
            this.filesErrors.set(decoded.file,decoded.errors.map(_format).toList());
        }
        if (op(Op.EQUALS,notification.event,ANALYSIS_NAVIGATION)) {
            this.navigationCount++;
        }
        if (op(Op.EQUALS,notification.event,SERVER_ERROR)) {
            this.serverErrorCount++;
        }
    }
    test_discardNotifications_onSourceChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.createProject();
            this.addTestFile('');
            await this.server.onAnalysisComplete;
            this.server.setAnalysisSubscriptions(new core.DartMap.literal([
                [AnalysisService.NAVIGATION,new core.DartList.literal(this.testFile).toSet()]]));
            this.navigationCount = 0;
            this.server.updateContent('1',new core.DartMap.literal([
                [this.testFile,new bare.createInstance(any,null,'foo() {}')]]));
            this.server.test_performAllAnalysisOperations();
            expect(this.serverErrorCount,0);
            expect(this.navigationCount,0);
            this.server.updateContent('2',new core.DartMap.literal([
                [this.testFile,new bare.createInstance(any,null,'bar() {}')]]));
            await this.server.onAnalysisComplete;
            expect(this.serverErrorCount,0);
            expect(this.navigationCount,1);
        } )());
    }

    test_illegal_ChangeContentOverlay() {
        this.createProject();
        this.addTestFile('library foo;');
        let id : string = 'myId';
        try {
            this.server.updateContent(id,new core.DartMap.literal([
                [this.testFile,new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,8,3,'bar')))]]));
            fail('Expected an exception to be thrown');
        } catch (__error__) {

            if (is(__error__,any)){
                let e : any = __error__;
                expect(e.response.id,id);
                expect(e.response.error.code,RequestErrorCode.INVALID_OVERLAY_CHANGE);
            }
        }
    }
    test_indexUnitAfterNopChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.enableNewAnalysisDriver) return;
            throw 'is this test used by the new analysis driver?';
            let testUnitMatcher = compilationUnitMatcher(this.testFile) as any;
            this.createProject();
            this.addTestFile('main() { print(1); }');
            await this.server.onAnalysisComplete;
            verify(this.server.index.indexUnit(testUnitMatcher)).times(1);
            this.server.updateContent('1',new core.DartMap.literal([
                [this.testFile,new bare.createInstance(any,null,'main() { print(2); }')]]));
            await this.server.test_onOperationPerformed;
            this.resourceProvider.updateFile(this.testFile,'main() { print(2); }');
            this.server.updateContent('2',new core.DartMap.literal([
                [this.testFile,new bare.createInstance(any,null)]]));
            await this.server.onAnalysisComplete;
            verify(this.server.index.indexUnit(testUnitMatcher)).times(3);
        } )());
    }

    test_multiple_contexts() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let fooPath : string = '/project1/foo.dart';
            this.resourceProvider.newFile(fooPath,'library foo;\nimport \'../project2/baz.dart\';\nmain() { f(); }');
            let barPath : string = '/project2/bar.dart';
            this.resourceProvider.newFile(barPath,'library bar;\nimport \'baz.dart\';\nmain() { f(); }');
            let bazPath : string = '/project2/baz.dart';
            this.resourceProvider.newFile(bazPath,'library baz;\nf(int i) {}\n');
            let request : any = new bare.createInstance(any,null,new core.DartList.literal('/project1','/project2'),new core.DartList.literal()).toRequest('0');
            this.handleSuccessfulRequest(request);
            {
                await this.server.onAnalysisComplete;
                expect(this.filesErrors.get(fooPath),hasLength(1));
                expect(this.filesErrors.get(barPath),hasLength(1));
                this.server.updateContent('1',new core.DartMap.literal([
                    [bazPath,new bare.createInstance(any,null,'library baz;\nf() {}\n')]]));
            }
            {
                await this.server.onAnalysisComplete;
                expect(this.filesErrors.get(fooPath),isEmpty);
                expect(this.filesErrors.get(barPath),isEmpty);
            }
        } )());
    }

    test_overlay_addPreviouslyImported() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let project : any = this.resourceProvider.newFolder('/project');
            this.handleSuccessfulRequest(new bare.createInstance(any,null,new core.DartList.literal(project.path),new core.DartList.literal()).toRequest('0'));
            this.server.updateContent('1',new core.DartMap.literal([
                ['/project/main.dart',new bare.createInstance(any,null,'import "target.dart";')]]));
            await this.server.onAnalysisComplete;
            expect(this.filesErrors,new core.DartMap.literal([
                ['/project/main.dart',new core.DartList.literal("1: Target of URI doesn't exist: 'target.dart'.")],
                ['/project/target.dart',new core.DartList.literal()]]));
            this.server.updateContent('1',new core.DartMap.literal([
                ['/project/target.dart',new bare.createInstance(any,null,'import "none.dart";')]]));
            await this.server.onAnalysisComplete;
            expect(this.filesErrors,new core.DartMap.literal([
                ['/project/main.dart',new core.DartList.literal("1: Unused import.")],
                ['/project/target.dart',new core.DartList.literal("1: Target of URI doesn't exist: 'none.dart'.")],
                ['/project/none.dart',new core.DartList.literal()]]));
        } )());
    }

    test_overlayOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let filePath : string = '/User/project1/test.dart';
            let folder1 : any = this.resourceProvider.newFolder('/User/project1');
            let folder2 : any = this.resourceProvider.newFolder('/User/project2');
            let request : any = new bare.createInstance(any,null,new core.DartList.literal(folder1.path,folder2.path),new core.DartList.literal()).toRequest('0');
            this.handleSuccessfulRequest(request);
            expect(this.server.folderMap,hasLength(2));
            let context1 : any = op(Op.INDEX,this.server.folderMap,folder1);
            let context2 : any = op(Op.INDEX,this.server.folderMap,folder2);
            expect(this._getUserSources(context1),isEmpty);
            expect(this._getUserSources(context2),isEmpty);
            this.server.updateContent('1',new core.DartMap.literal([
                [filePath,new bare.createInstance(any,null,'')]]));
            {
                let sources : core.DartList<any> = this._getUserSources(context1);
                expect(sources,hasLength(1));
                expect(sources[0].fullName,filePath);
            }
            expect(this._getUserSources(context2),isEmpty);
            this.server.updateContent('2',new core.DartMap.literal([
                [filePath,new bare.createInstance(any,null)]]));
            expect(this._getUserSources(context1),isEmpty);
            expect(this._getUserSources(context2),isEmpty);
        } )());
    }

    test_removeOverlay_incrementalChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.enableNewAnalysisDriver) return;
            throw 'is this test used by the new analysis driver?';
            this.createProject();
            this.addTestFile('main() { print(1); }');
            await this.server.onAnalysisComplete;
            let unit : any = this._getTestUnit();
            this.server.updateContent('1',new core.DartMap.literal([
                [this.testFile,new bare.createInstance(any,null,'main() { print(2); }')]]));
            await this.server.onAnalysisComplete;
            expect(this._getTestUnit(),same(unit));
            this.server.updateContent('2',new core.DartMap.literal([
                [this.testFile,new bare.createInstance(any,null)]]));
            await this.server.onAnalysisComplete;
            expect(this._getTestUnit(),same(unit));
        } )());
    }

    test_sendNoticesAfterNopChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.createProject();
            this.addTestFile('');
            await this.server.onAnalysisComplete;
            this.server.updateContent('1',new core.DartMap.literal([
                [this.testFile,new bare.createInstance(any,null,'main() {} main() {}')]]));
            await this.server.onAnalysisComplete;
            this.filesErrors.clear();
            this.server.updateContent('2',new core.DartMap.literal([
                [this.testFile,new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,0,4,'main')))]]));
            await this.server.onAnalysisComplete;
            expect(this.filesErrors,isNotEmpty);
        } )());
    }

    test_sendNoticesAfterNopChange_flushedUnit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.createProject();
            this.addTestFile('');
            await this.server.onAnalysisComplete;
            this.server.updateContent('1',new core.DartMap.literal([
                [this.testFile,new bare.createInstance(any,null,'main() {} main() {}')]]));
            await this.server.onAnalysisComplete;
            this.filesErrors.clear();
            this.server.test_flushAstStructures(this.testFile);
            this.server.updateContent('2',new core.DartMap.literal([
                [this.testFile,new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,0,4,'main')))]]));
            await this.server.onAnalysisComplete;
            expect(this.filesErrors,isNotEmpty);
        } )());
    }

    test_sentToPlugins() {
        let filePath : string = '/project/target.dart';
        let fileContent : string = 'import "none.dart";';
        this.handleSuccessfulRequest(new bare.createInstance(any,null,new core.DartMap.literal([
            [filePath,new bare.createInstance(any,null,fileContent)]])).toRequest('0'));
        let params : any = this.pluginManager.analysisUpdateContentParams;
        expect(params,isNotNull);
        let files : core.DartMap<string,any> = params.files;
        expect(files,hasLength(1));
        let overlay : core.DartObject = files.get(filePath);
        expect(overlay,new bare.createInstance(any,null));
        let addOverlay : any = overlay;
        expect(addOverlay.content,fileContent);
        this.pluginManager.analysisUpdateContentParams = null;
        this.handleSuccessfulRequest(new bare.createInstance(any,null,new core.DartMap.literal([
            [filePath,new bare.createInstance(any,null,new core.DartList.literal<any>(new bare.createInstance(any,null,8,1,"'"),new bare.createInstance(any,null,18,1,"'")))]])).toRequest('1'));
        params = this.pluginManager.analysisUpdateContentParams;
        expect(params,isNotNull);
        files = params.files;
        expect(files,hasLength(1));
        overlay = files.get(filePath);
        expect(overlay,new bare.createInstance(any,null));
        let changeOverlay : any = overlay;
        expect(changeOverlay.edits,hasLength(2));
        this.pluginManager.analysisUpdateContentParams = null;
        this.handleSuccessfulRequest(new bare.createInstance(any,null,new core.DartMap.literal([
            [filePath,new bare.createInstance(any,null)]])).toRequest('2'));
        params = this.pluginManager.analysisUpdateContentParams;
        expect(params,isNotNull);
        files = params.files;
        expect(files,hasLength(1));
        overlay = files.get(filePath);
        expect(overlay,new bare.createInstance(any,null));
    }
    _getTestUnit() : any {
        let pair : any = this.server.getContextSourcePair(this.testFile);
        let context : any = pair.context;
        let source : any = pair.source;
        return context.getResolvedCompilationUnit2(source,source);
    }
    _getUserSources(context : any) : core.DartList<any> {
        let sources : core.DartList<any> = new core.DartList.literal<any>();
        context.sources.forEach((source : any) =>  {
            if (source.fullName.startsWith('/User/')) {
                sources.add(source);
            }
        });
        return sources;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UpdateContentTest() {
        this.filesErrors = new core.DartMap.literal([
        ]);
        this.serverErrorCount = 0;
        this.navigationCount = 0;
    }
}

export namespace _ArgumentMatcher_CompilationUnit {
    export type Constructors = '_ArgumentMatcher_CompilationUnit';
    export type Interface = Omit<_ArgumentMatcher_CompilationUnit, Constructors>;
}
@DartClass
export class _ArgumentMatcher_CompilationUnit extends any {
    file : string;

    constructor(file : string) {
    }
    @defaultConstructor
    _ArgumentMatcher_CompilationUnit(file : string) {
        this.file = file;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    matches(arg : any) : boolean {
        return is(arg, any) && op(Op.EQUALS,resolutionMap.elementDeclaredByCompilationUnit(arg).source.fullName,this.file);
    }
}

export namespace _MockIndex {
    export type Constructors = '_MockIndex';
    export type Interface = Omit<_MockIndex, Constructors>;
}
@DartClass
@Implements(any)
export class _MockIndex extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MockIndex() {
    }
}

export class properties {
}
