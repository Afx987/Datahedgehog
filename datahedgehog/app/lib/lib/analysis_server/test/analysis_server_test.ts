/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/analysis_server_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./mocks";
import * as lib4 from "./mock_sdk";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisServerTest);
    });
};
export namespace AnalysisServerTest {
    export type Constructors = 'AnalysisServerTest';
    export type Interface = Omit<AnalysisServerTest, Constructors>;
}
@DartClass
export class AnalysisServerTest {
    channel : lib3.MockServerChannel;

    server : any;

    resourceProvider : any;

    packageMapProvider : lib3.MockPackageMapProvider;

    fail_getAnalysisContextForSource_crossImports() : async.Future<any> {
        this.server.serverServices = new core.DartList.literal(ServerService.STATUS).toSet();
        this.resourceProvider.newFolder('/foo');
        this.resourceProvider.newFolder('/bar');
        let foo : any = this.resourceProvider.newFile('/foo/foo.dart','libary foo;\nimport "../bar/bar.dart";\n');
        let fooSource : any = foo.createSource();
        let bar : any = this.resourceProvider.newFile('/bar/bar.dart','library bar;\nimport "../foo/foo.dart";\n');
        let barSource : any = bar.createSource();
        this.server.setAnalysisRoots('0',new core.DartList.literal('/foo','/bar'),new core.DartList.literal(),new core.DartMap.literal([
        ]));
        return this.server.onAnalysisComplete.then((_ : any) =>  {
            expect(this.server.statusAnalyzing,isFalse);
            let fooContext : any = this.server.getAnalysisContextForSource(fooSource);
            expect(fooContext,isNotNull);
            let barContext : any = this.server.getAnalysisContextForSource(barSource);
            expect(barContext,isNotNull);
            expect(fooContext,isNot(same(barContext)));
            expect(fooContext.getKindOf(fooSource),SourceKind.LIBRARY);
            expect(fooContext.getKindOf(barSource),SourceKind.UNKNOWN);
            expect(barContext.getKindOf(fooSource),SourceKind.UNKNOWN);
            expect(barContext.getKindOf(barSource),SourceKind.LIBRARY);
        });
    }
    fail_getAnalysisContextForSource_unanalyzed() : async.Future<any> {
        this.server.serverServices = new core.DartList.literal(ServerService.STATUS).toSet();
        this.resourceProvider.newFolder('/foo');
        this.resourceProvider.newFolder('/bar');
        let foo : any = this.resourceProvider.newFile('/foo/foo.dart','library lib;');
        let fooSource : any = foo.createSource();
        let bar : any = this.resourceProvider.newFile('/bar/bar.dart','library lib;');
        let barSource : any = bar.createSource();
        this.server.setAnalysisRoots('0',new core.DartList.literal('/foo','/bar'),new core.DartList.literal(),new core.DartMap.literal([
        ]));
        let fooContext : any = this.server.getAnalysisContextForSource(fooSource);
        expect(fooContext,isNotNull);
        let barContext : any = this.server.getAnalysisContextForSource(barSource);
        expect(barContext,isNotNull);
        expect(fooContext,isNot(same(barContext)));
        return this.server.onAnalysisComplete.then((_ : any) =>  {
            expect(this.server.statusAnalyzing,isFalse);
            expect(fooContext.getKindOf(fooSource),SourceKind.LIBRARY);
            expect(fooContext.getKindOf(barSource),SourceKind.UNKNOWN);
            expect(barContext.getKindOf(fooSource),SourceKind.UNKNOWN);
            expect(barContext.getKindOf(barSource),SourceKind.LIBRARY);
        });
    }
    processRequiredPlugins(serverPlugin : any) : void {
        let plugins : core.DartList<any> = new core.DartList.literal<any>();
        plugins.addAll(AnalysisEngine.instance.requiredPlugins);
        plugins.add(serverPlugin);
        let manager : any = new bare.createInstance(any,null);
        manager.processPlugins(plugins);
    }
    setUp() : void {
        let serverPlugin : any = new bare.createInstance(any,null);
        this.processRequiredPlugins(serverPlugin);
        this.channel = new lib3.MockServerChannel();
        this.resourceProvider = new bare.createInstance(any,null);
        new lib4.MockSdk({
            resourceProvider : this.resourceProvider});
        this.packageMapProvider = new lib3.MockPackageMapProvider();
        this.server = new bare.createInstance(any,null,this.channel,this.resourceProvider,this.packageMapProvider,null,serverPlugin,new bare.createInstance(any,null),new bare.createInstance(any,null,'/',false),InstrumentationService.NULL_SERVICE,{
            rethrowExceptions : true});
    }
    test_contextDisposed() : async.Future<any> {
        this.resourceProvider.newFolder('/foo');
        this.resourceProvider.newFile('/foo/bar.dart','library lib;');
        this.server.setAnalysisRoots('0',new core.DartList.literal('/foo'),new core.DartList.literal(),new core.DartMap.literal([
        ]));
        let context : any;
        return lib3.pumpEventQueue().then((_ : any) =>  {
            context = this.server.getAnalysisContext('/foo/bar.dart');
            this.server.setAnalysisRoots('1',new core.DartList.literal(),new core.DartList.literal(),new core.DartMap.literal([
            ]));
        }).then((_ : any) =>  {
            return lib3.pumpEventQueue();
        }).then((_ : any) =>  {
            expect(context.isDisposed,isTrue);
        });
    }
    test_contextsChangedEvent() : async.Future<any> {
        this.resourceProvider.newFolder('/foo');
        let wasAdded : boolean = false;
        let wasChanged : boolean = false;
        let wasRemoved : boolean = false;
        this.server.onContextsChanged.listen((event : any) =>  {
            wasAdded = op(Op.EQUALS,event.added.length,1);
            if (wasAdded) {
                expect(op(Op.INDEX,event.added,0),isNotNull);
            }
            wasChanged = op(Op.EQUALS,event.changed.length,1);
            if (wasChanged) {
                expect(op(Op.INDEX,event.changed,0),isNotNull);
            }
            wasRemoved = op(Op.EQUALS,event.removed.length,1);
            if (wasRemoved) {
                expect(op(Op.INDEX,event.removed,0),isNotNull);
            }
        });
        this.server.setAnalysisRoots('0',new core.DartList.literal('/foo'),new core.DartList.literal(),new core.DartMap.literal([
        ]));
        return lib3.pumpEventQueue().then((_ : any) =>  {
            expect(wasAdded,isTrue);
            expect(wasChanged,isFalse);
            expect(wasRemoved,isFalse);
            wasAdded = false;
            wasChanged = false;
            wasRemoved = false;
            this.server.setAnalysisRoots('0',new core.DartList.literal('/foo'),new core.DartList.literal(),new core.DartMap.literal([
                ['/foo','/bar']]));
            return lib3.pumpEventQueue();
        }).then((_ : any) =>  {
            expect(wasAdded,isFalse);
            expect(wasChanged,isTrue);
            expect(wasRemoved,isFalse);
            wasAdded = false;
            wasChanged = false;
            wasRemoved = false;
            this.server.setAnalysisRoots('0',new core.DartList.literal(),new core.DartList.literal(),new core.DartMap.literal([
            ]));
            return lib3.pumpEventQueue();
        }).then((_ : any) =>  {
            expect(wasAdded,isFalse);
            expect(wasChanged,isFalse);
            expect(wasRemoved,isTrue);
        });
    }
    test_echo() : async.Future<any> {
        this.server.handlers = new core.DartList.literal(new EchoHandler());
        let request = new bare.createInstance(any,null,'my22','echo');
        return this.channel.sendRequest(request).then((response : any) =>  {
            expect(response.id,equals('my22'));
            expect(response.error,isNull);
        });
    }
    test_getAnalysisContextForSource() : async.Future<any> {
        this.server.serverServices = new core.DartList.literal(ServerService.STATUS).toSet();
        this.resourceProvider.newFolder('/foo');
        this.resourceProvider.newFolder('/bar');
        let foo : any = this.resourceProvider.newFile('/foo/foo.dart','library lib;');
        let fooSource : any = foo.createSource();
        let bar : any = this.resourceProvider.newFile('/bar/bar.dart','library lib;');
        let barSource : any = bar.createSource();
        this.server.setAnalysisRoots('0',new core.DartList.literal('/foo','/bar'),new core.DartList.literal(),new core.DartMap.literal([
        ]));
        return this.server.onAnalysisComplete.then((_ : any) =>  {
            expect(this.server.statusAnalyzing,isFalse);
            let fooContext : any = this.server.getAnalysisContextForSource(fooSource);
            expect(fooContext,isNotNull);
            let barContext : any = this.server.getAnalysisContextForSource(barSource);
            expect(barContext,isNotNull);
            expect(fooContext,isNot(same(barContext)));
            expect(fooContext.getKindOf(fooSource),SourceKind.LIBRARY);
            expect(fooContext.getKindOf(barSource),SourceKind.UNKNOWN);
            expect(barContext.getKindOf(fooSource),SourceKind.UNKNOWN);
            expect(barContext.getKindOf(barSource),SourceKind.LIBRARY);
        });
    }
    test_getContextSourcePair_nested() {
        let dir1Path : string = '/dir1';
        let dir2Path : string = dir1Path + '/dir2';
        let filePath : string = dir2Path + '/file.dart';
        this.resourceProvider.newFile(`${dir1Path}/.packages`,'');
        this.resourceProvider.newFile(`${dir2Path}/.packages`,'');
        this.resourceProvider.newFile(filePath,'library lib;');
        this.server.setAnalysisRoots('0',new core.DartList.literal(dir1Path),new core.DartList.literal(),new core.DartMap.literal([
        ]));
        let pair : any = this.server.getContextSourcePair(filePath);
        this._assertContextOfFolder(pair.context,dir2Path);
        let source : any = pair.source;
        expect(source,isNotNull);
        expect(source.uri.scheme,'file');
        expect(source.fullName,filePath);
    }
    test_getContextSourcePair_nonFile() {
        let dirPath : string = '/dir';
        let dir : any = this.resourceProvider.newFolder(dirPath);
        let context : any = AnalysisEngine.instance.createAnalysisContext();
        this._configureSourceFactory(context);
        op(Op.INDEX_ASSIGN,this.server.folderMap,dir,context);
        let pair : any = this.server.getContextSourcePair(dirPath);
        expect(pair,isNotNull);
        expect(pair.context,isNull);
        expect(pair.source,isNull);
    }
    test_getContextSourcePair_simple() {
        let dirPath : string = '/dir';
        let filePath : string = dirPath + '/file.dart';
        this.resourceProvider.newFile(filePath,'library lib;');
        this.server.setAnalysisRoots('0',new core.DartList.literal(dirPath),new core.DartList.literal(),new core.DartMap.literal([
        ]));
        let pair : any = this.server.getContextSourcePair(filePath);
        this._assertContextOfFolder(pair.context,dirPath);
        let source : any = pair.source;
        expect(source,isNotNull);
        expect(source.uri.scheme,'file');
        expect(source.fullName,filePath);
    }
    test_getContextSourcePair_withPackagesFile() {
        let dirPath : string = '/dir';
        let packagesFilePath : string = dirPath + '/.packages';
        this.resourceProvider.newFile(packagesFilePath,'dir:lib/');
        let filePath : string = dirPath + '/lib/file.dart';
        this.resourceProvider.newFile(filePath,'library lib;');
        this.server.setAnalysisRoots('0',new core.DartList.literal(dirPath),new core.DartList.literal(),new core.DartMap.literal([
        ]));
        let pair : any = this.server.getContextSourcePair(filePath);
        this._assertContextOfFolder(pair.context,dirPath);
        let source : any = pair.source;
        expect(source,isNotNull);
        expect(source.uri.scheme,'package');
        expect(source.fullName,filePath);
    }
    test_no_duplicate_notifications() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.server.serverServices = new core.DartList.literal(ServerService.STATUS).toSet();
            this.resourceProvider.newFolder('/foo');
            this.resourceProvider.newFolder('/bar');
            this.resourceProvider.newFile('/foo/foo.dart','import "../bar/bar.dart";');
            let bar : any = this.resourceProvider.newFile('/bar/bar.dart','library bar;');
            this.server.setAnalysisRoots('0',new core.DartList.literal('/foo','/bar'),new core.DartList.literal(),new core.DartMap.literal([
            ]));
            let subscriptions : core.DartMap<any,core.DartSet<string>> = new core.DartMap.literal([
            ]);
            for(let service of AnalysisService.VALUES) {
                subscriptions.set(service,new core.DartList.literal<string>(bar.path).toSet());
            }
            this.server.setAnalysisSubscriptions(subscriptions);
            await this.server.onAnalysisComplete;
            expect(this.server.statusAnalyzing,isFalse);
            this.channel.notificationsReceived.clear();
            this.server.updateContent('0',new core.DartMap.literal([
                [bar.path,new bare.createInstance(any,null,'library bar; void f() {}')]]));
            await this.server.onAnalysisComplete;
            expect(this.server.statusAnalyzing,isFalse);
            expect(this.channel.notificationsReceived,isNotEmpty);
            let notificationTypesReceived : core.DartSet<string> = new core.DartSet<string>();
            for(let notification of this.channel.notificationsReceived) {
                let notificationType : string = notification.event;
                switch (notificationType) {
                    case 'server.status':
                    case 'analysis.errors':
                        break;
                    case 'analysis.outline':
                        break;
                    default:
                        if (!notificationTypesReceived.add(notificationType)) {
                            fail(`Notification type ${notificationType} received more than once`);
                        }
                        break;
                }
            }
        } )());
    }

    test_operationsRemovedOnContextDisposal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resourceProvider.newFolder('/foo');
            this.resourceProvider.newFile('/foo/baz.dart','library lib;');
            this.resourceProvider.newFolder('/bar');
            this.resourceProvider.newFile('/bar/baz.dart','library lib;');
            this.server.setAnalysisRoots('0',new core.DartList.literal('/foo','/bar'),new core.DartList.literal(),new core.DartMap.literal([
            ]));
            await lib3.pumpEventQueue();
            let contextFoo : any = this.server.getAnalysisContext('/foo/baz.dart');
            let contextBar : any = this.server.getAnalysisContext('/bar/baz.dart');
            let operationFoo : _MockServerOperation = new _MockServerOperation(contextFoo);
            let operationBar : _MockServerOperation = new _MockServerOperation(contextBar);
            this.server.scheduleOperation(operationFoo);
            this.server.scheduleOperation(operationBar);
            this.server.setAnalysisRoots('1',new core.DartList.literal('/foo'),new core.DartList.literal(),new core.DartMap.literal([
            ]));
            await lib3.pumpEventQueue();
            expect(operationFoo.isComplete,isTrue);
            expect(operationBar.isComplete,isFalse);
        } )());
    }

    test_prioritySourcesChangedEvent() : async.Future<any> {
        this.resourceProvider.newFolder('/foo');
        let eventCount : number = 0;
        let firstSource : any = null;
        this.server.onPriorityChange.listen((event : any) =>  {
            ++eventCount;
            firstSource = event.firstSource;
        });
        this.server.setAnalysisRoots('0',new core.DartList.literal('/foo'),new core.DartList.literal(),new core.DartMap.literal([
        ]));
        return lib3.pumpEventQueue().then((_ : any) =>  {
            expect(eventCount,0);
            this.server.setPriorityFiles('1',new core.DartList.literal('/foo/bar.dart'));
            return lib3.pumpEventQueue();
        }).then((_ : any) =>  {
            expect(eventCount,1);
            expect(firstSource.fullName,'/foo/bar.dart');
            this.server.setPriorityFiles('2',new core.DartList.literal('/foo/b1.dart','/foo/b2.dart'));
            return lib3.pumpEventQueue();
        }).then((_ : any) =>  {
            expect(eventCount,2);
            expect(firstSource.fullName,'/foo/b1.dart');
            this.server.setPriorityFiles('17',new core.DartList.literal());
            return lib3.pumpEventQueue();
        }).then((_ : any) =>  {
            expect(eventCount,3);
            expect(firstSource,isNull);
        });
    }
    test_rethrowExceptions() : void {
        let exceptionToThrow : core.Exception = new core.Exception('test exception');
        let operation : lib3.MockServerOperation = new lib3.MockServerOperation(ServerOperationPriority.ANALYSIS,(_ : any) =>  {
            throw exceptionToThrow;
        });
        this.server.operationQueue.add(operation);
        this.server.performOperationPending = true;
        try {
            this.server.performOperation();
            fail('exception not rethrown');
        } catch (__error__) {

            if (is(__error__,any)){
                let exception : any = __error__;
                expect(exception.cause.exception,equals(exceptionToThrow));
            }
        }
    }
    test_serverStatusNotifications() : async.Future<any> {
        let context : lib3.MockAnalysisContext = new lib3.MockAnalysisContext('context');
        let source : lib3.MockSource = new lib3.MockSource('source');
        when(source.fullName).thenReturn('foo.dart');
        when(source.isInSystemLibrary).thenReturn(false);
        let notice : any = new bare.createInstance(any,null,source);
        notice.setErrors(new core.DartList.literal(),new bare.createInstance(any,null,new core.DartList.literal(0)));
        let firstResult : any = new bare.createInstance(any,null,new core.DartList.literal(notice),0,'',0);
        let lastResult : any = new bare.createInstance(any,null,null,1,'',1);
        when(context.analysisOptions).thenReturn(new bare.createInstance(any,null));
        when(context.performAnalysisTask).thenReturnList(new core.DartList.literal(firstResult,firstResult,firstResult,lastResult));
        this.server.serverServices.add(ServerService.STATUS);
        this.server.schedulePerformAnalysisOperation(context);
        return lib3.pumpEventQueue().then((_ : any) =>  {
            let notifications : core.DartList<any> = this.channel.notificationsReceived;
            expect(notifications,isNotEmpty);
            expect(notifications.any((notification : any) =>  {
                if (op(Op.EQUALS,notification.event,SERVER_STATUS)) {
                    let params = new bare.createInstance(any,null,notification);
                    return params.analysis.isAnalyzing;
                }
                return false;
            }),isTrue);
            let notification : any = notifications[notifications.length - 1];
            let params = new bare.createInstance(any,null,notification);
            expect(params.analysis.isAnalyzing,isFalse);
        });
    }
    test_setAnalysisSubscriptions_fileInIgnoredFolder_newOptions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let path : string = '/project/samples/sample.dart';
            this.resourceProvider.newFile(path,'');
            this.resourceProvider.newFile('/project/analysis_options.yaml','analyzer:\n  exclude:\n    - \'samples/**\'\n');
            this.server.setAnalysisRoots('0',new core.DartList.literal('/project'),new core.DartList.literal(),new core.DartMap.literal([
            ]));
            this.server.setAnalysisSubscriptions(new core.DartMap.literal([
                [AnalysisService.NAVIGATION,new core.DartSet.from(new core.DartList.literal(path))]]));
            await this.server.onAnalysisComplete;
            expect(this.channel.notificationsReceived.any((notification : any) =>  {
                return op(Op.EQUALS,notification.event,ANALYSIS_NAVIGATION);
            }),isFalse);
        } )());
    }

    test_setAnalysisSubscriptions_fileInIgnoredFolder_oldOptions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let path : string = '/project/samples/sample.dart';
            this.resourceProvider.newFile(path,'');
            this.resourceProvider.newFile('/project/.analysis_options','analyzer:\n  exclude:\n    - \'samples/**\'\n');
            this.server.setAnalysisRoots('0',new core.DartList.literal('/project'),new core.DartList.literal(),new core.DartMap.literal([
            ]));
            this.server.setAnalysisSubscriptions(new core.DartMap.literal([
                [AnalysisService.NAVIGATION,new core.DartSet.from(new core.DartList.literal(path))]]));
            await this.server.onAnalysisComplete;
            expect(this.channel.notificationsReceived.any((notification : any) =>  {
                return op(Op.EQUALS,notification.event,ANALYSIS_NAVIGATION);
            }),isFalse);
        } )());
    }

    test_shutdown() : async.Future<any> {
        this.server.handlers = new core.DartList.literal(new bare.createInstance(any,null,this.server));
        let request = new bare.createInstance(any,null,'my28',SERVER_SHUTDOWN);
        return this.channel.sendRequest(request).then((response : any) =>  {
            expect(response.id,equals('my28'));
            expect(response.error,isNull);
        });
    }
    test_unknownRequest() : async.Future<any> {
        this.server.handlers = new core.DartList.literal(new EchoHandler());
        let request = new bare.createInstance(any,null,'my22','randomRequest');
        return this.channel.sendRequest(request).then((response : any) =>  {
            expect(response.id,equals('my22'));
            expect(response.error,isNotNull);
        });
    }
    _assertContextOfFolder(context : any,expectedFolderPath : string) : void {
        let expectedFolder : any = this.resourceProvider.newFolder(expectedFolderPath);
        let expectedContextInfo : any = (this.server.contextManager as any).getContextInfoFor(expectedFolder);
        expect(expectedContextInfo,isNotNull);
        expect(context,same(expectedContextInfo.context));
    }
    _configureSourceFactory(context : any) : void {
        let resourceUriResolver = new bare.createInstance(any,null,this.resourceProvider);
        let packageUriResolver = new bare.createInstance(any,null,this.resourceProvider,this.packageMapProvider.packageMap);
        context.sourceFactory = new bare.createInstance(any,null,new core.DartList.literal(packageUriResolver,resourceUriResolver));
    }
    constructor() {
    }
    @defaultConstructor
    AnalysisServerTest() {
    }
}

export namespace EchoHandler {
    export type Constructors = 'EchoHandler';
    export type Interface = Omit<EchoHandler, Constructors>;
}
@DartClass
@Implements(any)
export class EchoHandler implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleRequest(request : any) : any {
        if (op(Op.EQUALS,request.method,'echo')) {
            return new bare.createInstance(any,null,request.id,{
                result : new core.DartMap.literal([
                    ['echo',true]])});
        }
        return null;
    }
    constructor() {
    }
    @defaultConstructor
    EchoHandler() {
    }
}

export namespace _MockServerOperation {
    export type Constructors = '_MockServerOperation';
    export type Interface = Omit<_MockServerOperation, Constructors>;
}
@DartClass
@Implements(any)
export class _MockServerOperation implements any.Interface {
    context : any;

    isComplete : boolean;

    constructor(context : any) {
    }
    @defaultConstructor
    _MockServerOperation(context : any) {
        this.isComplete = false;
        this.context = context;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get priority() : any {
        return ServerOperationPriority.ANALYSIS;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    perform(server : any) : void {
        this.isComplete = true;
    }
}

export class properties {
}
