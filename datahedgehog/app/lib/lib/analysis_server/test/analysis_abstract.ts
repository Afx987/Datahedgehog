/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/analysis_abstract.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./mocks";
import * as lib4 from "./mock_sdk";

export var findIdentifierLength : (search : string) => number = (search : string) : number =>  {
    let length : number = 0;
    while (length < new core.DartString(search).length){
        let c : number = new core.DartString(search).codeUnitAt(length);
        if (!(c >= new core.DartString('a').codeUnitAt(0) && c <= new core.DartString('z').codeUnitAt(0) || c >= new core.DartString('A').codeUnitAt(0) && c <= new core.DartString('Z').codeUnitAt(0) || c >= new core.DartString('0').codeUnitAt(0) && c <= new core.DartString('9').codeUnitAt(0) || c == new core.DartString('_').codeUnitAt(0))) {
            break;
        }
        length++;
    }
    return length;
};
export namespace AbstractAnalysisTest {
    export type Constructors = 'AbstractAnalysisTest';
    export type Interface = Omit<AbstractAnalysisTest, Constructors>;
}
@DartClass
export class AbstractAnalysisTest {
    generateSummaryFiles : boolean;

    serverChannel : lib3.MockServerChannel;

    resourceProvider : any;

    packageMapProvider : lib3.MockPackageMapProvider;

    pluginManager : TestPluginManager;

    server : any;

    handler : any;

    serverErrors : core.DartList<any>;

    generalServices : core.DartList<any>;

    analysisSubscriptions : core.DartMap<any,core.DartList<string>>;

    projectPath : string;

    testFolder : string;

    testFile : string;

    testCode : string;

    constructor() {
    }
    @defaultConstructor
    AbstractAnalysisTest() {
        this.generateSummaryFiles = false;
        this.serverErrors = new core.DartList.literal<any>();
        this.generalServices = new core.DartList.literal<any>();
        this.analysisSubscriptions = new core.DartMap.literal([
        ]);
    }
    get analysisHandler() : any {
        return this.server.handlers.singleWhere((handler : any) =>  {
            return is(handler, any);
        });
    }
    get analysisOptions() : any {
        return this.enableNewAnalysisDriver ? this.testDiver.analysisOptions : this.testContext.analysisOptions;
    }
    get enableNewAnalysisDriver() : boolean {
        return true;
    }
    get testContext() : any {
        return this.server.getAnalysisContext(this.testFile);
    }
    get testDiver() : any {
        return this.server.getAnalysisDriver(this.testFile);
    }
    addAnalysisSubscription(service : any,file : string) : void {
        let files = this.analysisSubscriptions.get(service);
        if (files == null) {
            files = new core.DartList.literal<string>();
            this.analysisSubscriptions.set(service,files);
        }
        files.add(file);
        let request : any = new bare.createInstance(any,null,this.analysisSubscriptions).toRequest('0');
        this.handleSuccessfulRequest(request);
    }
    addFile(path : string,content : string) : string {
        path = this.resourceProvider.convertPath(path);
        this.resourceProvider.newFile(path,content);
        return path;
    }
    addGeneralAnalysisSubscription(service : any) : void {
        this.generalServices.add(service);
        let request : any = new bare.createInstance(any,null,this.generalServices).toRequest('0');
        this.handleSuccessfulRequest(request);
    }
    addServerPlugins(plugins : core.DartList<any>) : void {
    }
    addTestFile(content : string) : string {
        this.addFile(this.testFile,content);
        this.testCode = content;
        return this.testFile;
    }
    createAnalysisServer(index : any) : any {
        let serverPlugin : any = new bare.createInstance(any,null);
        let plugins : core.DartList<any> = new core.DartList.literal<any>();
        plugins.addAll(AnalysisEngine.instance.requiredPlugins);
        plugins.add(serverPlugin);
        plugins.add(dartCompletionPlugin);
        this.addServerPlugins(plugins);
        let manager : any = new bare.createInstance(any,null);
        manager.processPlugins(plugins);
        new lib4.MockSdk({
            generateSummaryFiles : this.generateSummaryFiles,resourceProvider : this.resourceProvider});
        let options : any = new bare.createInstance(any,null);
        options.enableNewAnalysisDriver = this.enableNewAnalysisDriver;
        return new bare.createInstance(any,null,this.serverChannel,this.resourceProvider,this.packageMapProvider,index,serverPlugin,options,new bare.createInstance(any,null,this.resourceProvider.convertPath('/'),true),InstrumentationService.NULL_SERVICE);
    }
    createIndex() : any {
        return null;
    }
    createProject(_namedArguments? : {packageRoots? : core.DartMap<string,string>}) : void {
        let {packageRoots} = Object.assign({
        }, _namedArguments );
        this.resourceProvider.newFolder(this.projectPath);
        let request : any = new bare.createInstance(any,null,new core.DartList.literal(this.projectPath),new core.DartList.literal(),{
            packageRoots : packageRoots}).toRequest('0');
        this.handleSuccessfulRequest(request,{
            handler : this.analysisHandler});
    }
    findFileOffset(path : string,search : string) : number {
        let file : any = this.resourceProvider.getResource(path) as any;
        let code : string = file.createSource().contents.data;
        let offset : number = new core.DartString(code).indexOf(search);
        expect(offset,isNot(-1),{
            reason : `"${search}" in\n${code}`});
        return offset;
    }
    findOffset(search : string) : number {
        let offset : number = new core.DartString(this.testCode).indexOf(search);
        expect(offset,isNot(-1));
        return offset;
    }
    handleSuccessfulRequest(request : any,_namedArguments? : {handler? : any}) : any {
        let {handler} = Object.assign({
        }, _namedArguments );
        handler = ( handler ) || ( this.handler );
        let response : any = handler.handleRequest(request);
        expect(response,lib3.isResponseSuccess(request.id));
        return response;
    }
    modifyTestFile(content : string) : string {
        let path : string = this.resourceProvider.convertPath(this.testFile);
        this.resourceProvider.updateFile(path,content);
        this.testCode = content;
        return this.testFile;
    }
    processNotification(notification : any) : void {
        if (op(Op.EQUALS,notification.event,SERVER_ERROR)) {
            let params = new bare.createInstance(any,null,notification);
            this.serverErrors.add(params);
        }
    }
    removeGeneralAnalysisSubscription(service : any) : void {
        this.generalServices.remove(service);
        let request : any = new bare.createInstance(any,null,this.generalServices).toRequest('0');
        this.handleSuccessfulRequest(request);
    }
    setUp() : void {
        this.serverChannel = new lib3.MockServerChannel();
        this.resourceProvider = new bare.createInstance(any,null);
        this.projectPath = this.resourceProvider.convertPath('/project');
        this.testFolder = this.resourceProvider.convertPath('/project/bin');
        this.testFile = this.resourceProvider.convertPath('/project/bin/test.dart');
        this.packageMapProvider = new lib3.MockPackageMapProvider();
        this.pluginManager = new TestPluginManager();
        let index : any = this.createIndex();
        this.server = this.createAnalysisServer(index);
        this.server.pluginManager = this.pluginManager;
        this.handler = this.analysisHandler;
        let notificationStream : async.DartStream<any> = this.serverChannel.notificationController.stream;
        notificationStream.listen((notification : any) =>  {
            this.processNotification(notification);
        });
    }
    tearDown() : void {
        this.server.done();
        this.handler = null;
        this.server = null;
        this.resourceProvider = null;
        this.serverChannel = null;
    }
    waitForTasksFinished() : async.Future<any> {
        return this.server.onAnalysisComplete;
    }
    waitResponse(request : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            return this.serverChannel.sendRequest(request);
        } )());
    }

}

export namespace TestPluginManager {
    export type Constructors = 'TestPluginManager';
    export type Interface = Omit<TestPluginManager, Constructors>;
}
@DartClass
@Implements(any)
export class TestPluginManager implements any.Interface {
    analysisSetPriorityFilesParams : any;

    analysisSetSubscriptionsParams : any;

    analysisUpdateContentParams : any;

    broadcastedRequest : any;

    broadcastResults : core.DartMap<any,async.Future<any>>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get byteStorePath() : string {
        fail('Unexpected invocation of byteStorePath');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get instrumentationService() : any {
        fail('Unexpected invocation of instrumentationService');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get notificationManager() : any {
        fail('Unexpected invocation of notificationManager');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get resourceProvider() : any {
        fail('Unexpected invocation of resourceProvider');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sdkPath() : string {
        fail('Unexpected invocation of sdkPath');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addPluginToContextRoot(contextRoot : any,path : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            fail('Unexpected invocation of addPluginToContextRoot');
            return null;
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    broadcastRequest(params : any,_namedArguments? : {contextRoot? : any}) : core.DartMap<any,async.Future<any>> {
        let {contextRoot} = Object.assign({
        }, _namedArguments );
        this.broadcastedRequest = params;
        return (this.broadcastResults || new core.DartMap.literal([
        ]));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    broadcastWatchEvent(watchEvent : any) : async.Future<core.DartList<async.Future<any>>> { 
        return new async.Future.fromPromise(( async () =>  {
            return new core.DartList.literal<async.Future<any>>();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    pluginsForContextRoot(contextRoot : any) : core.DartList<any> {
        fail('Unexpected invocation of pluginsForContextRoot');
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removedContextRoot(contextRoot : any) : void {
        fail('Unexpected invocation of removedContextRoot');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setAnalysisSetPriorityFilesParams(params : any) : void {
        this.analysisSetPriorityFilesParams = params;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setAnalysisSetSubscriptionsParams(params : any) : void {
        this.analysisSetSubscriptionsParams = params;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setAnalysisUpdateContentParams(params : any) : void {
        this.analysisUpdateContentParams = params;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    stopAll() : async.Future<core.DartList<core.Null>> { 
        return new async.Future.fromPromise(( async () =>  {
            fail('Unexpected invocation of stopAll');
            return null;
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    whitelistEverything() : void {
        fail('Unexpected invocation of whitelistEverything');
    }
    constructor() {
    }
    @defaultConstructor
    TestPluginManager() {
    }
}

export class properties {
}
