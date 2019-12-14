/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/plugin/plugin_manager.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts/dart/uri";
import * as collection from "@dart2ts/dart/core";
import * as lib6 from "@dart2ts.packages/watcher/lib/watcher";

export namespace PluginInfo {
    export type Constructors = 'PluginInfo';
    export type Interface = Omit<PluginInfo, Constructors>;
}
@DartClass
export class PluginInfo {
    notificationManager : any;

    instrumentationService : any;

    contextRoots : core.DartSet<any>;

    currentSession : PluginSession;

    constructor(notificationManager : any,instrumentationService : any) {
    }
    @defaultConstructor
    PluginInfo(notificationManager : any,instrumentationService : any) {
        this.contextRoots = new core.DartHashSet<any>();
        this.notificationManager = notificationManager;
        this.instrumentationService = instrumentationService;
    }
    get data() : any {
        return new bare.createInstance(any,null,this.pluginId,((t)=>(!!t)?t.name:null)(this.currentSession),((t)=>(!!t)?t.version:null)(this.currentSession));
    }
    @AbstractProperty
    get pluginId() : string{ throw 'abstract'}
    addContextRoot(contextRoot : any) : void {
        if (this.contextRoots.add(contextRoot)) {
            this._updatePluginRoots();
        }
    }
    isAnalyzing(filePath : string) : boolean {
        for(let contextRoot of this.contextRoots) {
            if (contextRoot.containsFile(filePath)) {
                return true;
            }
        }
        return false;
    }
    removeContextRoot(contextRoot : any) : void {
        if (this.contextRoots.remove(contextRoot)) {
            this._updatePluginRoots();
        }
    }
    sendRequest(params : any) : void {
        ((_26_)=>(!!_26_)?_26_.sendRequest(params):null)(this.currentSession);
    }
    start(byteStorePath : string,sdkPath : string) : async.Future<PluginSession> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this.currentSession != null) {
                throw new core.StateError('Cannot start a plugin that is already running.');
            }
            this.currentSession = new PluginSession(this);
            let isRunning : boolean = await this.currentSession.start(byteStorePath,sdkPath);
            if (!isRunning) {
                this.currentSession = null;
            }
            return this.currentSession;
        } )());
    }

    stop() : async.Future<core.Null> {
        if (op(Op.EQUALS,this.currentSession,null)) {
            throw new core.StateError('Cannot stop a plugin that is not running.');
        }
        let doneFuture : async.Future<core.Null> = this.currentSession.stop();
        this.currentSession = null;
        return doneFuture;
    }
    @Abstract
    _createChannel() : any{ throw 'abstract'}
    _updatePluginRoots() : void {
        if (this.currentSession != null) {
            let params : any = new bare.createInstance(any,null,this.contextRoots.map((contextRoot : any) =>  {
                return new bare.createInstance(any,null,contextRoot.root,contextRoot.exclude);
            }).toList());
            this.currentSession.sendRequest(params);
        }
    }
}

export namespace PluginManager {
    export type Constructors = 'PluginManager';
    export type Interface = Omit<PluginManager, Constructors>;
}
@DartClass
export class PluginManager {
    private static __$pluginResponseTimes : core.DartMap<PluginInfo,core.DartMap<string,core.DartList<number>>>;
    static get pluginResponseTimes() : core.DartMap<PluginInfo,core.DartMap<string,core.DartList<number>>> { 
        if (this.__$pluginResponseTimes===undefined) {
            this.__$pluginResponseTimes = new core.DartMap.literal([
            ]);
        }
        return this.__$pluginResponseTimes;
    }
    static set pluginResponseTimes(__$value : core.DartMap<PluginInfo,core.DartMap<string,core.DartList<number>>>)  { 
        this.__$pluginResponseTimes = __$value;
    }

    resourceProvider : any;

    byteStorePath : string;

    sdkPath : string;

    notificationManager : any;

    instrumentationService : any;

    _whitelistGlobs : core.DartList<any>;

    _pluginMap : core.DartMap<string,PluginInfo>;

    _analysisSetPriorityFilesParams : any;

    _analysisSetSubscriptionsParams : any;

    _overlayState : core.DartMap<string,any>;

    constructor(resourceProvider : any,byteStorePath : string,sdkPath : string,notificationManager : any,instrumentationService : any) {
    }
    @defaultConstructor
    PluginManager(resourceProvider : any,byteStorePath : string,sdkPath : string,notificationManager : any,instrumentationService : any) {
        this._pluginMap = new core.DartMap.literal([
        ]);
        this._overlayState = new core.DartMap.literal([
        ]);
        this.resourceProvider = resourceProvider;
        this.byteStorePath = byteStorePath;
        this.sdkPath = sdkPath;
        this.notificationManager = notificationManager;
        this.instrumentationService = instrumentationService;
        this._whitelistGlobs = new core.DartList.literal<any>(new bare.createInstance(any,null,this.resourceProvider.pathContext.separator,'**/analyze_angular/tools/analysis_plugin'));
    }
    addPluginToContextRoot(contextRoot : any,path : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this._isWhitelisted(path)) {
                return;
            }
            let plugin : PluginInfo = this._pluginMap.get(path);
            let isNew : boolean = op(Op.EQUALS,plugin,null);
            if (isNew) {
                let pluginPaths : core.DartList<string> = this._pathsFor(path);
                if (pluginPaths == null) {
                    return;
                }
                plugin = new DiscoveredPluginInfo(path,pluginPaths[0],pluginPaths[1],this.notificationManager,this.instrumentationService);
                this._pluginMap.set(path,plugin);
                if (pluginPaths[0] != null) {
                    let session : PluginSession = await plugin.start(this.byteStorePath,this.sdkPath);
                    ((_27_)=>(!!_27_)?_27_.then((_ : any) =>  {
                        this._pluginMap.remove(path);
                    }):null)(((t)=>(!!t)?t.onDone:null)(session));
                }
            }
            plugin.addContextRoot(contextRoot);
            if (isNew) {
                if (this._analysisSetSubscriptionsParams != null) {
                    plugin.sendRequest(this._analysisSetSubscriptionsParams);
                }
                if (this._overlayState.isNotEmpty) {
                    plugin.sendRequest(new bare.createInstance(any,null,this._overlayState));
                }
                if (this._analysisSetPriorityFilesParams != null) {
                    plugin.sendRequest(this._analysisSetPriorityFilesParams);
                }
            }
        } )());
    }

    broadcastRequest(params : any,_namedArguments? : {contextRoot? : any}) : core.DartMap<PluginInfo,async.Future<any>> {
        let {contextRoot} = Object.assign({
        }, _namedArguments );
        let plugins : core.DartList<PluginInfo> = this.pluginsForContextRoot(contextRoot);
        let responseMap : core.DartMap<PluginInfo,async.Future<any>> = new core.DartMap.literal([
        ]);
        for(let plugin of plugins) {
            responseMap.set(plugin,((_28_)=>(!!_28_)?_28_.sendRequest(params):null)(plugin.currentSession));
        }
        return responseMap;
    }
    broadcastWatchEvent(watchEvent : any) : async.Future<core.DartList<async.Future<any>>> { 
        return new async.Future.fromPromise(( async () =>  {
            let filePath : string = watchEvent.path;
            var matches : (pattern : string) => boolean = (pattern : string) : boolean =>  {
                return new bare.createInstance(any,null,this.resourceProvider.pathContext.separator,pattern).matches(filePath);
            };
            let event : any = null;
            let responses : core.DartList<async.Future<any>> = new core.DartList.literal<async.Future<any>>();
            for(let plugin of this._pluginMap.values) {
                let session : PluginSession = plugin.currentSession;
                if (session != null && plugin.isAnalyzing(filePath) && session.interestingFiles.any(matches)) {
                    event = ( event ) || ( this._convertWatchEvent(watchEvent) );
                    let params : any = new bare.createInstance(any,null,new core.DartList.literal(event));
                    responses.add(session.sendRequest(params));
                }
            }
            return responses;
        } )());
    }

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'visibleForTesting',value : {
            arguments : [],namedArguments : {
            }}})
    pluginsForContextRoot(contextRoot : any) : core.DartList<PluginInfo> {
        if (op(Op.EQUALS,contextRoot,null)) {
            return this._pluginMap.values.toList();
        }
        let plugins : core.DartList<PluginInfo> = new core.DartList.literal<PluginInfo>();
        for(let plugin of this._pluginMap.values) {
            if (plugin.contextRoots.contains(contextRoot)) {
                plugins.add(plugin);
            }
        }
        return plugins;
    }
    removedContextRoot(contextRoot : any) : void {
        let plugins : core.DartList<PluginInfo> = this._pluginMap.values.toList();
        for(let plugin of plugins) {
            plugin.removeContextRoot(contextRoot);
            if (is(plugin, DiscoveredPluginInfo) && plugin.contextRoots.isEmpty) {
                this._pluginMap.remove(plugin.path);
                plugin.stop();
            }
        }
    }
    setAnalysisSetPriorityFilesParams(params : any) : void {
        for(let plugin of this._pluginMap.values) {
            plugin.sendRequest(params);
        }
        this._analysisSetPriorityFilesParams = params;
    }
    setAnalysisSetSubscriptionsParams(params : any) : void {
        for(let plugin of this._pluginMap.values) {
            plugin.sendRequest(params);
        }
        this._analysisSetSubscriptionsParams = params;
    }
    setAnalysisUpdateContentParams(params : any) : void {
        for(let plugin of this._pluginMap.values) {
            plugin.sendRequest(params);
        }
        let files : core.DartMap<string,any> = params.files;
        for(let file of files.keys) {
            let overlay : core.DartObject = files.get(file);
            if (is(overlay, any)) {
                this._overlayState.remove(file);
            }else if (is(overlay, any)) {
                this._overlayState.set(file,overlay);
            }else if (is(overlay, any)) {
                let previousOverlay : any = this._overlayState.get(file);
                let newContent : string = SourceEdit.applySequence(previousOverlay.content,overlay.edits);
                this._overlayState.set(file,new bare.createInstance(any,null,newContent));
            }else {
                throw new core.ArgumentError(`Invalid class of overlay: ${overlay.runtimeType}`);
            }
        }
    }
    stopAll() : async.Future<core.DartList<core.Null>> {
        return async.Future.wait(this._pluginMap.values.map((info : PluginInfo) =>  {
            return info.stop();
        }));
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'visibleForTesting',value : {
            arguments : [],namedArguments : {
            }}})
    whitelistEverything() : void {
        this._whitelistGlobs = new core.DartList.literal<any>(new bare.createInstance(any,null,this.resourceProvider.pathContext.separator,'**/*'));
    }
    _convertChangeType(type : any) : any {
        switch (type) {
            case lib6.ChangeType.ADD:
                return WatchEventType.ADD;
            case lib6.ChangeType.MODIFY:
                return WatchEventType.MODIFY;
            case lib6.ChangeType.REMOVE:
                return WatchEventType.REMOVE;
            default:
                throw new core.StateError(`Unknown change type: ${type}`);
        }
    }
    _convertWatchEvent(watchEvent : any) : any {
        return new bare.createInstance(any,null,this._convertChangeType(watchEvent.type),watchEvent.path);
    }
    _isWhitelisted(path : string) : boolean {
        for(let glob of this._whitelistGlobs) {
            if (glob.matches(path)) {
                return true;
            }
        }
        return false;
    }
    _pathsFor(pluginPath : string) : core.DartList<string> {
        var needToCopy : (folder : any) => boolean = (folder : any) : boolean =>  {
            let pubspecFile : any = folder.getChildAssumingFile('pubspec.yaml');
            if (!pubspecFile.exists) {
                return false;
            }
            return op(Op.EQUALS,BazelWorkspace.find(this.resourceProvider,folder.path),null) && op(Op.EQUALS,GnWorkspace.find(this.resourceProvider,folder.path),null);
        };
        var computePaths : (pluginFolder : any,_namedArguments? : {runPub? : boolean}) => core.DartList<string> = (pluginFolder : any,_namedArguments? : {runPub? : boolean}) : core.DartList<string> =>  {
            let {runPub} = Object.assign({
                "runPub" : false}, _namedArguments );
            let pluginFile : any = pluginFolder.getChildAssumingFolder('bin').getChildAssumingFile('plugin.dart');
            if (!pluginFile.exists) {
                return null;
            }
            let packagesFile : any = pluginFolder.getChildAssumingFile('.packages');
            if (!packagesFile.exists) {
                if (runPub) {
                    if (!packagesFile.exists) {
                        packagesFile = null;
                    }
                }else {
                    packagesFile = null;
                }
            }
            return new core.DartList.literal<string>(pluginFile.path,((t)=>(!!t)?t.path:null)(packagesFile));
        };
        let pluginFolder : any = this.resourceProvider.getFolder(pluginPath);
        if (!needToCopy(pluginFolder)) {
            return computePaths(pluginFolder);
        }
        let stateFolder : any = this.resourceProvider.getStateLocation('.plugin_manager');
        let stateName : string = this._uniqueDirectoryName(pluginPath);
        let parentFolder : any = stateFolder.getChildAssumingFolder(stateName);
        if (parentFolder.exists) {
            let executionFolder : any = parentFolder.getChildAssumingFolder(pluginFolder.shortName);
            return computePaths(executionFolder);
        }
        let executionFolder : any = pluginFolder.copyTo(parentFolder);
        return computePaths(executionFolder,{
            runPub : true});
    }
    _uniqueDirectoryName(path : string) : string {
        let bytes : core.DartList<number> = md5.convert(new core.DartString(path).codeUnits).bytes;
        return hex.encode(bytes);
    }
    static recordResponseTime(plugin : PluginInfo,method : string,time : number) : void {
        PluginManager.pluginResponseTimes.putIfAbsent(plugin,() =>  {
            return new core.DartMap.literal([
            ]);
        }).putIfAbsent(method,() =>  {
            return new core.DartList.literal<number>();
        }).add(time);
    }
}

export namespace PluginSession {
    export type Constructors = 'PluginSession';
    export type Interface = Omit<PluginSession, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'visibleForTesting',value : {
        arguments : [],namedArguments : {
        }}})
export class PluginSession {
    private static __$MAXIMUM_RESPONSE_TIME : core.DartDuration;
    static get MAXIMUM_RESPONSE_TIME() : core.DartDuration { 
        if (this.__$MAXIMUM_RESPONSE_TIME===undefined) {
            this.__$MAXIMUM_RESPONSE_TIME = new core.DartDuration({
                minutes : 2});
        }
        return this.__$MAXIMUM_RESPONSE_TIME;
    }

    private static __$WAIT_FOR_SHUTDOWN_DURATION : core.DartDuration;
    static get WAIT_FOR_SHUTDOWN_DURATION() : core.DartDuration { 
        if (this.__$WAIT_FOR_SHUTDOWN_DURATION===undefined) {
            this.__$WAIT_FOR_SHUTDOWN_DURATION = new core.DartDuration({
                seconds : 10});
        }
        return this.__$WAIT_FOR_SHUTDOWN_DURATION;
    }

    info : PluginInfo;

    pluginStoppedCompleter : async.DartCompleter<core.Null>;

    channel : any;

    requestId : number;

    pendingRequests : core.DartMap<string,_PendingRequest>;

    isCompatible : boolean;

    contactInfo : string;

    interestingFiles : core.DartList<string>;

    name : string;

    version : string;

    constructor(info : PluginInfo) {
    }
    @defaultConstructor
    PluginSession(info : PluginInfo) {
        this.pluginStoppedCompleter = new async.DartCompleter<core.Null>();
        this.requestId = 0;
        this.pendingRequests = new core.DartMap.literal([
        ]);
        this.isCompatible = true;
        this.info = info;
    }
    get nextRequestId() : string {
        return new core.DartInt((this.requestId++)).toString();
    }
    get onDone() : async.Future<core.Null> {
        return this.pluginStoppedCompleter.future;
    }
    handleNotification(notification : any) : void {
        if (op(Op.EQUALS,notification.event,PLUGIN_NOTIFICATION_ERROR)) {
            let params : any = new bare.createInstance(any,null,notification);
            if (params.isFatal) {
                this.info.stop();
                this.stop();
            }
        }
        this.info.notificationManager.handlePluginNotification(this.info.pluginId,notification);
    }
    handleOnDone() : void {
        this.channel.close();
        this.channel = null;
        this.pluginStoppedCompleter.complete(null);
    }
    handleOnError(errorPair : core.DartList<string>) : void {
    }
    handleResponse(response : any) : void {
        let requestData : _PendingRequest = this.pendingRequests.remove(response.id);
        let responseTime : number = new core.DartDateTime.now().millisecondsSinceEpoch;
        let duration : number = responseTime - requestData.requestTime;
        PluginManager.recordResponseTime(this.info,requestData.method,duration);
        let completer : async.DartCompleter<any> = requestData.completer;
        if (completer != null) {
            completer.complete(response);
        }
    }
    isNonResponsive() : boolean {
        let cutOffTime : number = new core.DartDateTime.now().millisecondsSinceEpoch - PluginSession.MAXIMUM_RESPONSE_TIME.inMilliseconds;
        for(let requestData of this.pendingRequests.values) {
            if (requestData.requestTime < cutOffTime) {
                return true;
            }
        }
        return false;
    }
    sendRequest(parameters : any) : async.Future<any> {
        if (op(Op.EQUALS,this.channel,null)) {
            throw new core.StateError('Cannot send a request to a plugin that has stopped.');
        }
        let id : string = this.nextRequestId;
        let completer : async.DartCompleter<any> = new async.DartCompleter<any>();
        let requestTime : number = new core.DartDateTime.now().millisecondsSinceEpoch;
        let request : any = parameters.toRequest(id);
        this.pendingRequests.set(id,new _PendingRequest(request.method,requestTime,completer));
        this.channel.sendRequest(request);
        return completer.future;
    }
    start(byteStorePath : string,sdkPath : string) : async.Future<boolean> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this.channel != null) {
                throw new core.StateError('Cannot start a plugin that is already running.');
            }
            if (byteStorePath == null || new core.DartString(byteStorePath).isEmpty) {
                throw new core.StateError('Missing byte store path');
            }
            if (!this.isCompatible) {
                return false;
            }
            this.channel = this.info._createChannel();
            await this.channel.listen(this.handleResponse.bind(this),this.handleNotification.bind(this),{
                onDone : this.handleOnDone.bind(this),onError : this.handleOnError.bind(this)});
            if (op(Op.EQUALS,this.channel,null)) {
                return false;
            }
            let response : any = await this.sendRequest(new bare.createInstance(any,null,(byteStorePath || ''),sdkPath,'1.0.0-alpha.0'));
            let result : any = new bare.createInstance(any,null,response);
            this.isCompatible = result.isCompatible;
            this.contactInfo = result.contactInfo;
            this.interestingFiles = result.interestingFiles;
            this.name = result.name;
            this.version = result.version;
            if (!this.isCompatible) {
                this.sendRequest(new bare.createInstance(any,null));
                return false;
            }
            return true;
        } )());
    }

    stop() : async.Future<core.Null> {
        if (op(Op.EQUALS,this.channel,null)) {
            throw new core.StateError('Cannot stop a plugin that is not running.');
        }
        this.sendRequest(new bare.createInstance(any,null));
        new async.Future.delayed(PluginSession.WAIT_FOR_SHUTDOWN_DURATION,() =>  {
            if (this.channel != null) {
                this.channel.kill();
                this.channel = null;
            }
        });
        return this.pluginStoppedCompleter.future;
    }
}

export namespace _PendingRequest {
    export type Constructors = '_PendingRequest';
    export type Interface = Omit<_PendingRequest, Constructors>;
}
@DartClass
export class _PendingRequest {
    method : string;

    requestTime : number;

    completer : async.DartCompleter<any>;

    constructor(method : string,requestTime : number,completer : async.DartCompleter<any>) {
    }
    @defaultConstructor
    _PendingRequest(method : string,requestTime : number,completer : async.DartCompleter<any>) {
        this.method = method;
        this.requestTime = requestTime;
        this.completer = completer;
    }
}

export namespace BuiltInPluginInfo {
    export type Constructors = PluginInfo.Constructors | 'BuiltInPluginInfo';
    export type Interface = Omit<BuiltInPluginInfo, Constructors>;
}
@DartClass
export class BuiltInPluginInfo extends PluginInfo {
    entryPoint : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    pluginId : string;

    constructor(entryPoint : any,pluginId : string,notificationManager : any,instrumentationService : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BuiltInPluginInfo(entryPoint : any,pluginId : string,notificationManager : any,instrumentationService : any) {
        super.PluginInfo(notificationManager,instrumentationService);
        this.entryPoint = entryPoint;
        this.pluginId = pluginId;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _createChannel() : any {
        return new bare.createInstance(any,null,this.entryPoint,this.pluginId,this.instrumentationService);
    }
}

export namespace DiscoveredPluginInfo {
    export type Constructors = PluginInfo.Constructors | 'DiscoveredPluginInfo';
    export type Interface = Omit<DiscoveredPluginInfo, Constructors>;
}
@DartClass
export class DiscoveredPluginInfo extends PluginInfo {
    path : string;

    executionPath : string;

    packagesPath : string;

    constructor(path : string,executionPath : string,packagesPath : string,notificationManager : any,instrumentationService : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DiscoveredPluginInfo(path : string,executionPath : string,packagesPath : string,notificationManager : any,instrumentationService : any) {
        super.PluginInfo(notificationManager,instrumentationService);
        this.path = path;
        this.executionPath = executionPath;
        this.packagesPath = packagesPath;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get pluginId() : string {
        return this.path;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _createChannel() : any {
        return new bare.createInstance(any,null,new lib4.Uri.file(this.executionPath,{
            windows : io.Platform.isWindows}),new lib4.Uri.file(this.packagesPath,{
            windows : io.Platform.isWindows}),this.instrumentationService);
    }
}

export class properties {
}
