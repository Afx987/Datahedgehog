/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/src/plugin/plugin_manager_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts.packages/watcher/lib/watcher";
import * as lib5 from "@dart2ts.packages/path/lib/path";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(BuiltInPluginInfoTest);
        defineReflectiveTests(DiscoveredPluginInfoTest);
        defineReflectiveTests(PluginManagerTest);
        defineReflectiveTests(PluginManagerFromDiskTest);
        defineReflectiveTests(PluginSessionTest);
        defineReflectiveTests(PluginSessionFromDiskTest);
    });
};
export namespace BuiltInPluginInfoTest {
    export type Constructors = 'BuiltInPluginInfoTest';
    export type Interface = Omit<BuiltInPluginInfoTest, Constructors>;
}
@DartClass
export class BuiltInPluginInfoTest {
    notificationManager : TestNotificationManager;

    plugin : any;

    setUp() : void {
        this.notificationManager = new TestNotificationManager();
        this.plugin = new bare.createInstance(any,null,null,'test plugin',this.notificationManager,InstrumentationService.NULL_SERVICE);
    }
    test_addContextRoot() {
        let contextRoot1 : any = new bare.createInstance(any,null,'/pkg1',new core.DartList.literal());
        this.plugin.addContextRoot(contextRoot1);
        expect(this.plugin.contextRoots,new core.DartList.literal(contextRoot1));
        this.plugin.addContextRoot(contextRoot1);
        expect(this.plugin.contextRoots,new core.DartList.literal(contextRoot1));
    }
    test_creation() {
        expect(this.plugin.pluginId,'test plugin');
        expect(this.plugin.notificationManager,this.notificationManager);
        expect(this.plugin.contextRoots,isEmpty);
        expect(this.plugin.currentSession,isNull);
    }
    test_removeContextRoot() {
        let contextRoot1 : any = new bare.createInstance(any,null,'/pkg1',new core.DartList.literal());
        let contextRoot2 : any = new bare.createInstance(any,null,'/pkg2',new core.DartList.literal());
        this.plugin.addContextRoot(contextRoot1);
        expect(this.plugin.contextRoots,unorderedEquals(new core.DartList.literal(contextRoot1)));
        this.plugin.addContextRoot(contextRoot2);
        expect(this.plugin.contextRoots,unorderedEquals(new core.DartList.literal(contextRoot1,contextRoot2)));
        this.plugin.removeContextRoot(contextRoot1);
        expect(this.plugin.contextRoots,unorderedEquals(new core.DartList.literal(contextRoot2)));
        this.plugin.removeContextRoot(contextRoot2);
        expect(this.plugin.contextRoots,isEmpty);
    }
    test_start_notRunning() {
        fail('Not tested');
    }
    test_start_running() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.plugin.currentSession = new bare.createInstance(any,null,this.plugin);
            try {
                await this.plugin.start('','');
                fail('Expected a StateError');
            } catch (__error__) {

                if (is(__error__,core.StateError)){
                }
            }
        } )());
    }

    test_stop_notRunning() {
        expect(() =>  {
            return this.plugin.stop();
        },throwsA(new bare.createInstance(any,null)));
    }
    test_stop_running() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let session : any = new bare.createInstance(any,null,this.plugin);
            let channel : TestServerCommunicationChannel = new TestServerCommunicationChannel(session);
            this.plugin.currentSession = session;
            await this.plugin.stop();
            expect(this.plugin.currentSession,isNull);
            expect(channel.sentRequests,hasLength(1));
            expect(channel.sentRequests[0].method,'plugin.shutdown');
        } )());
    }

    constructor() {
    }
    @defaultConstructor
    BuiltInPluginInfoTest() {
    }
}

export namespace DiscoveredPluginInfoTest {
    export type Constructors = 'DiscoveredPluginInfoTest';
    export type Interface = Omit<DiscoveredPluginInfoTest, Constructors>;
}
@DartClass
export class DiscoveredPluginInfoTest {
    resourceProvider : any;

    notificationManager : TestNotificationManager;

    pluginPath : string;

    executionPath : string;

    packagesPath : string;

    plugin : any;

    setUp() : void {
        this.resourceProvider = new bare.createInstance(any,null);
        this.notificationManager = new TestNotificationManager();
        this.plugin = new bare.createInstance(any,null,this.pluginPath,this.executionPath,this.packagesPath,this.notificationManager,InstrumentationService.NULL_SERVICE);
    }
    test_addContextRoot() {
        let contextRoot1 : any = new bare.createInstance(any,null,'/pkg1',new core.DartList.literal());
        this.plugin.addContextRoot(contextRoot1);
        expect(this.plugin.contextRoots,new core.DartList.literal(contextRoot1));
        this.plugin.addContextRoot(contextRoot1);
        expect(this.plugin.contextRoots,new core.DartList.literal(contextRoot1));
    }
    test_creation() {
        expect(this.plugin.path,this.pluginPath);
        expect(this.plugin.executionPath,this.executionPath);
        expect(this.plugin.notificationManager,this.notificationManager);
        expect(this.plugin.contextRoots,isEmpty);
        expect(this.plugin.currentSession,isNull);
    }
    test_removeContextRoot() {
        let contextRoot1 : any = new bare.createInstance(any,null,'/pkg1',new core.DartList.literal());
        let contextRoot2 : any = new bare.createInstance(any,null,'/pkg2',new core.DartList.literal());
        this.plugin.addContextRoot(contextRoot1);
        expect(this.plugin.contextRoots,unorderedEquals(new core.DartList.literal(contextRoot1)));
        this.plugin.addContextRoot(contextRoot2);
        expect(this.plugin.contextRoots,unorderedEquals(new core.DartList.literal(contextRoot1,contextRoot2)));
        this.plugin.removeContextRoot(contextRoot1);
        expect(this.plugin.contextRoots,unorderedEquals(new core.DartList.literal(contextRoot2)));
        this.plugin.removeContextRoot(contextRoot2);
        expect(this.plugin.contextRoots,isEmpty);
    }
    test_start_notRunning() {
        fail('Not tested');
    }
    test_start_running() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.plugin.currentSession = new bare.createInstance(any,null,this.plugin);
            try {
                await this.plugin.start('','');
                fail('Expected a StateError');
            } catch (__error__) {

                if (is(__error__,core.StateError)){
                }
            }
        } )());
    }

    test_stop_notRunning() {
        expect(() =>  {
            return this.plugin.stop();
        },throwsA(new bare.createInstance(any,null)));
    }
    test_stop_running() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let session : any = new bare.createInstance(any,null,this.plugin);
            let channel : TestServerCommunicationChannel = new TestServerCommunicationChannel(session);
            this.plugin.currentSession = session;
            await this.plugin.stop();
            expect(this.plugin.currentSession,isNull);
            expect(channel.sentRequests,hasLength(1));
            expect(channel.sentRequests[0].method,'plugin.shutdown');
        } )());
    }

    constructor() {
    }
    @defaultConstructor
    DiscoveredPluginInfoTest() {
        this.pluginPath = '/pluginDir';
        this.executionPath = '/pluginDir/bin/plugin.dart';
        this.packagesPath = '/pluginDir/.packages';
    }
}

export namespace PluginManagerTest {
    export type Constructors = 'PluginManagerTest';
    export type Interface = Omit<PluginManagerTest, Constructors>;
}
@DartClass
export class PluginManagerTest {
    resourceProvider : any;

    byteStorePath : string;

    sdkPath : string;

    notificationManager : TestNotificationManager;

    manager : any;

    setUp() : void {
        this.resourceProvider = new bare.createInstance(any,null);
        this.byteStorePath = this.resourceProvider.convertPath('/byteStore');
        this.sdkPath = this.resourceProvider.convertPath('/sdk');
        this.notificationManager = new TestNotificationManager();
        this.manager = new bare.createInstance(any,null,this.resourceProvider,this.byteStorePath,this.sdkPath,this.notificationManager,InstrumentationService.NULL_SERVICE);
    }
    test_broadcastRequest_none() : void {
        let contextRoot : any = new bare.createInstance(any,null,'/pkg1',new core.DartList.literal());
        let responses : core.DartMap<any,async.Future<any>> = this.manager.broadcastRequest(new bare.createInstance(any,null,'/pkg1/lib/pkg1.dart',100),{
            contextRoot : contextRoot});
        expect(responses,hasLength(0));
    }
    test_creation() : void {
        expect(this.manager.resourceProvider,this.resourceProvider);
        expect(this.manager.byteStorePath,this.byteStorePath);
        expect(this.manager.sdkPath,this.sdkPath);
        expect(this.manager.notificationManager,this.notificationManager);
    }
    test_pluginsForContextRoot_none() : void {
        let contextRoot : any = new bare.createInstance(any,null,'/pkg1',new core.DartList.literal());
        expect(this.manager.pluginsForContextRoot(contextRoot),isEmpty);
    }
    test_stopAll_none() : void {
        this.manager.stopAll();
    }
    constructor() {
    }
    @defaultConstructor
    PluginManagerTest() {
    }
}

export namespace PluginSessionTest {
    export type Constructors = 'PluginSessionTest';
    export type Interface = Omit<PluginSessionTest, Constructors>;
}
@DartClass
export class PluginSessionTest {
    resourceProvider : any;

    notificationManager : TestNotificationManager;

    pluginPath : string;

    executionPath : string;

    packagesPath : string;

    sdkPath : string;

    plugin : any;

    session : any;

    setUp() : void {
        this.resourceProvider = new bare.createInstance(any,null);
        this.notificationManager = new TestNotificationManager();
        this.pluginPath = this.resourceProvider.convertPath('/pluginDir');
        this.executionPath = this.resourceProvider.convertPath('/pluginDir/bin/plugin.dart');
        this.packagesPath = this.resourceProvider.convertPath('/pluginDir/.packages');
        this.sdkPath = this.resourceProvider.convertPath('/sdk');
        this.plugin = new bare.createInstance(any,null,this.pluginPath,this.executionPath,this.packagesPath,this.notificationManager,InstrumentationService.NULL_SERVICE);
        this.session = new bare.createInstance(any,null,this.plugin);
    }
    test_handleNotification() : void {
        let notification : any = new bare.createInstance(any,null,'/test.dart',new core.DartList.literal<any>()).toNotification();
        expect(this.notificationManager.notifications,hasLength(0));
        this.session.handleNotification(notification);
        expect(this.notificationManager.notifications,hasLength(1));
        expect(this.notificationManager.notifications[0],notification);
    }
    test_handleOnDone() : void {
        let channel : TestServerCommunicationChannel = new TestServerCommunicationChannel(this.session);
        this.session.handleOnDone();
        expect(channel.closeCount,1);
        expect(this.session.pluginStoppedCompleter.isCompleted,isTrue);
    }
    test_handleOnError() : void {
        this.session.handleOnError(new core.DartList.literal<string>('message','trace'));
        fail('The method handleOnError is not implemented');
    }
    test_handleResponse() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            new TestServerCommunicationChannel(this.session);
            let response : any = new bare.createInstance(any,null,true,'name','version',new core.DartList.literal<string>(),{
                contactInfo : 'contactInfo'}).toResponse('0',1);
            let future : async.Future<any> = this.session.sendRequest(new bare.createInstance(any,null,'','',''));
            expect(this.session.pendingRequests,hasLength(1));
            this.session.handleResponse(response);
            expect(this.session.pendingRequests,hasLength(0));
            let result : any = await future;
            expect(result,same(response));
        } )());
    }

    test_nextRequestId() : void {
        expect(this.session.requestId,0);
        expect(this.session.nextRequestId,'0');
        expect(this.session.requestId,1);
    }
    test_sendRequest() : void {
        let channel : TestServerCommunicationChannel = new TestServerCommunicationChannel(this.session);
        this.session.sendRequest(new bare.createInstance(any,null,'','',''));
        expect(channel.sentRequests,hasLength(1));
        expect(channel.sentRequests[0].method,'plugin.versionCheck');
    }
    test_start_notCompatible() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.session.isCompatible = false;
            expect(await this.session.start(lib5.join(this.pluginPath,'byteStore'),this.sdkPath),isFalse);
        } )());
    }

    test_start_running() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            new TestServerCommunicationChannel(this.session);
            try {
                await this.session.start(null,'');
                fail('Expected a StateError to be thrown');
            } catch (__error__) {

                if (is(__error__,core.StateError)){
                }
            }
        } )());
    }

    test_stop_notRunning() {
        expect(() =>  {
            return this.session.stop();
        },throwsA(new bare.createInstance(any,null)));
    }
    test_stop_running() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let channel : TestServerCommunicationChannel = new TestServerCommunicationChannel(this.session);
            await this.session.stop();
            expect(channel.sentRequests,hasLength(1));
            expect(channel.sentRequests[0].method,'plugin.shutdown');
        } )());
    }

    constructor() {
    }
    @defaultConstructor
    PluginSessionTest() {
    }
}

export namespace PluginTestSupport {
    export type Constructors = 'PluginTestSupport';
    export type Interface = Omit<PluginTestSupport, Constructors>;
}
@DartClass
export class PluginTestSupport {
    resourceProvider : any;

    notificationManager : TestNotificationManager;

    _packagesFileContent : string;

    setUp() : void {
        this.resourceProvider = PhysicalResourceProvider.INSTANCE;
        this.notificationManager = new TestNotificationManager();
    }
    withPlugin(_namedArguments? : {content? : string,pluginName? : string,test? : (pluginPath : string) => async.Future<core.Null>}) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let {content,pluginName,test} = Object.assign({
            }, _namedArguments );
            let tempDirectory : io.Directory = io.Directory.systemTemp.createTempSync((pluginName || 'test_plugin'));
            try {
                let pluginPath : string = tempDirectory.resolveSymbolicLinksSync();
                let packagesFile : io.File = new io.File(lib5.join(pluginPath,'.packages'));
                packagesFile.writeAsStringSync(this._getPackagesFileContent());
                let binPath : string = lib5.join(pluginPath,'bin');
                new io.Directory(binPath).createSync();
                let pluginFile : io.File = new io.File(lib5.join(binPath,'plugin.dart'));
                pluginFile.writeAsStringSync((content || this._defaultPluginContent()));
                await test(pluginPath);
            } finally {
                tempDirectory.deleteSync({
                    recursive : true});
            }
        } )());
    }

    _convertPackageMap(sdkDirPath : string,sdkPackageMap : core.DartList<string>) : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        for(let line of sdkPackageMap) {
            if (!new core.DartString(line).startsWith('#')) {
                let index : number = new core.DartString(line).indexOf(':');
                let packageName : string = new core.DartString(line).substring(0,index + 1);
                let relativePath : string = new core.DartString(line).substring(index + 1);
                let absolutePath : string = lib5.join(sdkDirPath,relativePath);
                buffer.write(packageName);
                buffer.writeln(absolutePath);
            }
        }
        return buffer.toString();
    }
    _defaultPluginContent() : string {
        return 'import \'dart:isolate\';\nimport \'package:analyzer/file_system/file_system.dart\';\nimport \'package:analyzer/file_system/physical_file_system.dart\';\nimport \'package:analyzer_plugin/plugin/plugin.dart\';\nimport \'package:analyzer_plugin/protocol/protocol_generated.dart\';\nimport \'package:analyzer_plugin/starter.dart\';\nimport \'package:pub_semver/pub_semver.dart\';\n\nvoid main(List<String> args, SendPort sendPort) {\n  MinimalPlugin plugin = new MinimalPlugin(PhysicalResourceProvider.INSTANCE);\n  new ServerPluginStarter(plugin).start(sendPort);\n}\n\nclass MinimalPlugin extends ServerPlugin {\n  MinimalPlugin(ResourceProvider provider) : super(provider);\n\n  @override\n  List<String> get fileGlobsToAnalyze => <String>[\'**/*.dart\'];\n\n  @override\n  String get name => \'minimal\';\n\n  @override\n  String get version => \'0.0.1\';\n\n  @override\n  AnalysisHandleWatchEventsResult handleAnalysisHandleWatchEvents(\n          AnalysisHandleWatchEventsParams parameters) =>\n    new AnalysisHandleWatchEventsResult();\n\n  @override\n  bool isCompatibleWith(Version serverVersion) => true;\n}\n';
    }
    _getPackagesFileContent() : string {
        if (this._packagesFileContent == null) {
            let sdkPackagesFile : io.File = new io.File(this._sdkPackagesPath());
            let sdkPackageMap : core.DartList<string> = sdkPackagesFile.readAsLinesSync();
            this._packagesFileContent = this._convertPackageMap(lib5.dirname(sdkPackagesFile.path),sdkPackageMap);
        }
        return this._packagesFileContent;
    }
    _sdkPackagesPath() : string {
        let packagesPath : string = io.Platform.script.toFilePath();
        while (new core.DartString(packagesPath).isNotEmpty && lib5.basename(packagesPath) != 'analysis_server'){
            packagesPath = lib5.dirname(packagesPath);
        }
        packagesPath = lib5.dirname(packagesPath);
        packagesPath = lib5.dirname(packagesPath);
        return lib5.join(packagesPath,'.packages');
    }
    constructor() {
    }
    @defaultConstructor
    PluginTestSupport() {
    }
}

export namespace TestNotificationManager {
    export type Constructors = 'TestNotificationManager';
    export type Interface = Omit<TestNotificationManager, Constructors>;
}
@DartClass
@Implements(any)
export class TestNotificationManager implements any.Interface {
    notifications : core.DartList<any>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handlePluginNotification(pluginId : string,notification : any) : void {
        this.notifications.add(notification);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    noSuchMethod(invocation : core.Invocation) {
        fail(`Unexpected invocation of ${invocation.memberName}`);
    }
    constructor() {
    }
    @defaultConstructor
    TestNotificationManager() {
        this.notifications = new core.DartList.literal<any>();
    }
}

export namespace TestServerCommunicationChannel {
    export type Constructors = 'TestServerCommunicationChannel';
    export type Interface = Omit<TestServerCommunicationChannel, Constructors>;
}
@DartClass
@Implements(any)
export class TestServerCommunicationChannel implements any.Interface {
    session : any;

    closeCount : number;

    sentRequests : core.DartList<any>;

    constructor(session : any) {
    }
    @defaultConstructor
    TestServerCommunicationChannel(session : any) {
        this.closeCount = 0;
        this.sentRequests = new core.DartList.literal<any>();
        this.session = session;
        this.session.channel = this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    close() : void {
        this.closeCount++;
    }
    kill() : void {
        fail('Unexpected invocation of kill');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    listen(onResponse : (response : any) => void,onNotification : (notification : any) => void,_namedArguments? : {onError? : Function,onDone? : () => void}) : void {
        let {onError,onDone} = Object.assign({
        }, _namedArguments );
        fail('Unexpected invocation of listen');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    sendRequest(request : any) : void {
        this.sentRequests.add(request);
        if (op(Op.EQUALS,request.method,'plugin.shutdown')) {
            this.session.handleOnDone();
        }
    }
}

export namespace PluginManagerFromDiskTest {
    export type Constructors = PluginTestSupport.Constructors | 'PluginManagerFromDiskTest';
    export type Interface = Omit<PluginManagerFromDiskTest, Constructors>;
}
@DartClass
export class PluginManagerFromDiskTest extends PluginTestSupport {
    byteStorePath : string;

    manager : any;

    setUp() : void {
        super.setUp();
        this.manager = new bare.createInstance(any,null,this.resourceProvider,this.byteStorePath,'',this.notificationManager,InstrumentationService.NULL_SERVICE);
        this.manager.whitelistEverything();
    }
    test_addPluginToContextRoot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pkg1Dir : io.Directory = io.Directory.systemTemp.createTempSync('pkg1');
            let pkgPath : string = pkg1Dir.resolveSymbolicLinksSync();
            await this.withPlugin({
                test : (pluginPath : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
                    let contextRoot : any = new bare.createInstance(any,null,pkgPath,new core.DartList.literal());
                    await this.manager.addPluginToContextRoot(contextRoot,pluginPath);
                    await this.manager.stopAll();
                })())});
            pkg1Dir.deleteSync({
                recursive : true});
        } )());
    }

    test_broadcastRequest_many() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pkg1Dir : io.Directory = io.Directory.systemTemp.createTempSync('pkg1');
            let pkgPath : string = pkg1Dir.resolveSymbolicLinksSync();
            await this.withPlugin({
                pluginName : 'plugin1',test : (plugin1Path : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
                    await this.withPlugin({
                        pluginName : 'plugin2',test : (plugin2Path : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
                            let contextRoot : any = new bare.createInstance(any,null,pkgPath,new core.DartList.literal());
                            await this.manager.addPluginToContextRoot(contextRoot,plugin1Path);
                            await this.manager.addPluginToContextRoot(contextRoot,plugin2Path);
                            let responses : core.DartMap<any,async.Future<any>> = this.manager.broadcastRequest(new bare.createInstance(any,null,'/pkg1/lib/pkg1.dart',100),{
                                contextRoot : contextRoot});
                            expect(responses,hasLength(2));
                            await this.manager.stopAll();
                        })())});
                })())});
            pkg1Dir.deleteSync({
                recursive : true});
        } )());
    }

    test_broadcastRequest_many_noContextRoot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pkg1Dir : io.Directory = io.Directory.systemTemp.createTempSync('pkg1');
            let pkgPath : string = pkg1Dir.resolveSymbolicLinksSync();
            await this.withPlugin({
                pluginName : 'plugin1',test : (plugin1Path : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
                    await this.withPlugin({
                        pluginName : 'plugin2',test : (plugin2Path : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
                            let contextRoot : any = new bare.createInstance(any,null,pkgPath,new core.DartList.literal());
                            await this.manager.addPluginToContextRoot(contextRoot,plugin1Path);
                            await this.manager.addPluginToContextRoot(contextRoot,plugin2Path);
                            let responses : core.DartMap<any,async.Future<any>> = this.manager.broadcastRequest(new bare.createInstance(any,null,'/pkg1/lib/pkg1.dart',100));
                            expect(responses,hasLength(2));
                            await this.manager.stopAll();
                        })())});
                })())});
            pkg1Dir.deleteSync({
                recursive : true});
        } )());
    }

    test_broadcastWatchEvent() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pkg1Dir : io.Directory = io.Directory.systemTemp.createTempSync('pkg1');
            let pkgPath : string = pkg1Dir.resolveSymbolicLinksSync();
            await this.withPlugin({
                pluginName : 'plugin1',test : (plugin1Path : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
                    let contextRoot : any = new bare.createInstance(any,null,pkgPath,new core.DartList.literal());
                    await this.manager.addPluginToContextRoot(contextRoot,plugin1Path);
                    let plugins : core.DartList<any> = this.manager.pluginsForContextRoot(contextRoot);
                    expect(plugins,hasLength(1));
                    let watchEvent : any = new bare.createInstance(any,null,lib4.ChangeType.MODIFY,lib5.join(pkgPath,'lib','lib.dart'));
                    let responses : core.DartList<async.Future<any>> = await this.manager.broadcastWatchEvent(watchEvent);
                    expect(responses,hasLength(1));
                    let response : any = await responses[0];
                    expect(response,isNotNull);
                    expect(response.error,isNull);
                    await this.manager.stopAll();
                })())});
            pkg1Dir.deleteSync({
                recursive : true});
        } )());
    }

    test_pluginsForContextRoot_multiple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pkg1Dir : io.Directory = io.Directory.systemTemp.createTempSync('pkg1');
            let pkgPath : string = pkg1Dir.resolveSymbolicLinksSync();
            await this.withPlugin({
                pluginName : 'plugin1',test : (plugin1Path : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
                    await this.withPlugin({
                        pluginName : 'plugin2',test : (plugin2Path : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
                            let contextRoot : any = new bare.createInstance(any,null,pkgPath,new core.DartList.literal());
                            await this.manager.addPluginToContextRoot(contextRoot,plugin1Path);
                            await this.manager.addPluginToContextRoot(contextRoot,plugin2Path);
                            let plugins : core.DartList<any> = this.manager.pluginsForContextRoot(contextRoot);
                            expect(plugins,hasLength(2));
                            let paths : core.DartList<string> = plugins.map((plugin : any) =>  {
                                return plugin.pluginId;
                            }).toList();
                            expect(paths,unorderedEquals(new core.DartList.literal(plugin1Path,plugin2Path)));
                            await this.manager.stopAll();
                        })())});
                })())});
            pkg1Dir.deleteSync({
                recursive : true});
        } )());
    }

    test_pluginsForContextRoot_one() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pkg1Dir : io.Directory = io.Directory.systemTemp.createTempSync('pkg1');
            let pkgPath : string = pkg1Dir.resolveSymbolicLinksSync();
            await this.withPlugin({
                test : (pluginPath : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
                    let contextRoot : any = new bare.createInstance(any,null,pkgPath,new core.DartList.literal());
                    await this.manager.addPluginToContextRoot(contextRoot,pluginPath);
                    let plugins : core.DartList<any> = this.manager.pluginsForContextRoot(contextRoot);
                    expect(plugins,hasLength(1));
                    expect(plugins[0].pluginId,pluginPath);
                    await this.manager.stopAll();
                })())});
            pkg1Dir.deleteSync({
                recursive : true});
        } )());
    }

    test_removedContextRoot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pkg1Dir : io.Directory = io.Directory.systemTemp.createTempSync('pkg1');
            let pkgPath : string = pkg1Dir.resolveSymbolicLinksSync();
            await this.withPlugin({
                test : (pluginPath : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
                    let contextRoot : any = new bare.createInstance(any,null,pkgPath,new core.DartList.literal());
                    await this.manager.addPluginToContextRoot(contextRoot,pluginPath);
                    this.manager.removedContextRoot(contextRoot);
                    await this.manager.stopAll();
                })())});
            pkg1Dir.deleteSync({
                recursive : true});
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PluginManagerFromDiskTest() {
        this.byteStorePath = '/byteStore';
    }
}

export namespace PluginSessionFromDiskTest {
    export type Constructors = PluginTestSupport.Constructors | 'PluginSessionFromDiskTest';
    export type Interface = Omit<PluginSessionFromDiskTest, Constructors>;
}
@DartClass
export class PluginSessionFromDiskTest extends PluginTestSupport {
    test_start_notRunning() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.withPlugin({
                test : (pluginPath : string) => new async.Future.fromPromise(( async () : Promise<any> =>  {
                    let packagesPath : string = lib5.join(pluginPath,'.packages');
                    let mainPath : string = lib5.join(pluginPath,'bin','plugin.dart');
                    let byteStorePath : string = lib5.join(pluginPath,'byteStore');
                    new io.Directory(byteStorePath).createSync();
                    let plugin : any = new bare.createInstance(any,null,pluginPath,mainPath,packagesPath,this.notificationManager,InstrumentationService.NULL_SERVICE);
                    let session : any = new bare.createInstance(any,null,plugin);
                    plugin.currentSession = session;
                    expect(await session.start(byteStorePath,''),isTrue);
                    await session.stop();
                })())});
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PluginSessionFromDiskTest() {
    }
}

export class properties {
}
