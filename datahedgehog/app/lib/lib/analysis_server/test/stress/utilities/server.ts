/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/stress/utilities/server.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as io from "@dart2ts/dart/io";
import * as lib5 from "./logger";
import * as math from "@dart2ts/dart/math";
import * as lib7 from "@dart2ts.packages/path/lib/path";
import * as convert from "@dart2ts/dart/convert";

export namespace ErrorMap {
    export type Constructors = 'ErrorMap' | 'from';
    export type Interface = Omit<ErrorMap, Constructors>;
}
@DartClass
export class ErrorMap {
    pathMap : core.DartMap<string,core.DartList<any>>;

    constructor() {
    }
    @defaultConstructor
    ErrorMap() {
        this.pathMap = new core.DartHashMap<string,core.DartList<any>>();
    }
    @namedConstructor
    from(errorMap : ErrorMap) {
        this.pathMap = new core.DartHashMap<string,core.DartList<any>>();
        this.pathMap.addAll(errorMap.pathMap);
    }
    static from : new(errorMap : ErrorMap) => ErrorMap;

    [OperatorMethods.INDEX_EQ](filePath : string,errors : core.DartList<any>) : void {
        this.pathMap.set(filePath,errors);
    }
    expectErrorMap(errorMap : ErrorMap) : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        let comparator : _ErrorComparator = new _ErrorComparator(buffer);
        comparator.compare(this.pathMap,errorMap.pathMap);
        if (buffer.length > 0) {
            return buffer.toString();
        }
        return null;
    }
}

export namespace RequestData {
    export type Constructors = 'RequestData';
    export type Interface = Omit<RequestData, Constructors>;
}
@DartClass
export class RequestData {
    id : string;

    method : string;

    params : core.DartMap<string,any>;

    requestTime : number;

    responseTime : number;

    _response : any;

    _responseCompleter : async.DartCompleter<any>;

    constructor(id : string,method : string,params : core.DartMap<string,any>,requestTime : number) {
    }
    @defaultConstructor
    RequestData(id : string,method : string,params : core.DartMap<string,any>,requestTime : number) {
        this.responseTime = null;
        this.id = id;
        this.method = method;
        this.params = params;
        this.requestTime = requestTime;
    }
    get elapsedTime() : number {
        return this.responseTime - this.requestTime;
    }
    get respondedTo() : async.Future<any> {
        if (this._response != null) {
            return new async.Future.value(this._response);
        }
        if (op(Op.EQUALS,this._responseCompleter,null)) {
            this._responseCompleter = new async.DartCompleter<any>();
        }
        return this._responseCompleter.future;
    }
    recordResponse(response : any) : void {
        if (this._response != null) {
            io.properties.stdout.writeln(`Received a second response to a ${this.method} request (id = ${this.id})`);
            return;
        }
        this.responseTime = properties.currentTime;
        this._response = response;
        if (this._responseCompleter != null) {
            this._responseCompleter.complete(response);
            this._responseCompleter = null;
        }
    }
}

export namespace Server {
    export type Constructors = 'Server';
    export type Interface = Omit<Server, Constructors>;
}
@DartClass
export class Server {
    private static __$fromClient : string;
    static get fromClient() : string { 
        if (this.__$fromClient===undefined) {
            this.__$fromClient = 'client';
        }
        return this.__$fromClient;
    }

    private static __$fromServer : string;
    static get fromServer() : string { 
        if (this.__$fromServer===undefined) {
            this.__$fromServer = 'server';
        }
        return this.__$fromServer;
    }

    private static __$fromStderr : string;
    static get fromStderr() : string { 
        if (this.__$fromStderr===undefined) {
            this.__$fromStderr = 'stderr';
        }
        return this.__$fromStderr;
    }

    logger : lib5.Logger;

    _process : io.Process;

    _nextId : number;

    _analysisRootIncludes : core.DartList<string>;

    filesWithOverlays : core.DartList<string>;

    _analyzedFiles : core.DartList<string>;

    _errorMap : ErrorMap;

    _analysisFinishedCompleter : async.DartCompleter<core.Null>;

    _serverConnectedCompleter : async.DartCompleter<core.Null>;

    _requestDataMap : core.DartMap<string,RequestData>;

    _notificationCountMap : core.DartMap<string,number>;

    constructor(_namedArguments? : {logger? : lib5.Logger}) {
    }
    @defaultConstructor
    Server(_namedArguments? : {logger? : lib5.Logger}) {
        let {logger} = Object.assign({
            "logger" : null}, _namedArguments );
        this._process = null;
        this._nextId = 0;
        this._analysisRootIncludes = new core.DartList.literal<string>();
        this.filesWithOverlays = new core.DartList.literal<string>();
        this._analyzedFiles = new core.DartList.literal<string>();
        this._errorMap = new ErrorMap();
        this._requestDataMap = new core.DartMap.literal([
        ]);
        this._notificationCountMap = new core.DartMap.literal([
        ]);
        this.logger = logger;
    }
    get analysisFinished() : async.Future<any> {
        if (op(Op.EQUALS,this._analysisFinishedCompleter,null)) {
            this._analysisFinishedCompleter = new async.DartCompleter<any>();
        }
        return this._analysisFinishedCompleter.future;
    }
    get analyzedDartFiles() : core.DartList<string> {
        var isAnalyzed : (filePath : string) => boolean = (filePath : string) : boolean =>  {
            for(let includedRoot of this._analysisRootIncludes) {
                if (new core.DartString(filePath).startsWith(includedRoot)) {
                    return true;
                }
            }
            return false;
        };
        let analyzedFiles : core.DartList<string> = new core.DartList.literal<string>();
        for(let filePath of this._analyzedFiles) {
            if (new core.DartString(filePath).endsWith('.dart') && isAnalyzed(filePath)) {
                analyzedFiles.add(filePath);
            }
        }
        return analyzedFiles;
    }
    get errorMap() : ErrorMap {
        return new ErrorMap.from(this._errorMap);
    }
    computeErrorMap(filePaths : core.DartList<string>) : async.Future<ErrorMap> { 
        return new async.Future.fromPromise(( async () =>  {
            let errorMap : ErrorMap = new ErrorMap();
            let futures : core.DartList<async.Future<any>> = new core.DartList.literal<async.Future<any>>();
            for(let filePath of filePaths) {
                let requestData : RequestData = this.sendAnalysisGetErrors(filePath);
                futures.add(requestData.respondedTo.then((response : any) =>  {
                    if (response.result != null) {
                        let result : any = new bare.createInstance(any,null,response);
                        op(Op.INDEX_ASSIGN,errorMap,filePath,result.errors);
                    }
                }));
            }
            await async.Future.wait(futures);
            return errorMap;
        } )());
    }

    printStatistics() : void {
        var writeSpaces : (count : number) => void = (count : number) : void =>  {
            for(let i : number = 0; i < count; i++){
                io.properties.stdout.write(' ');
            }
        };
        io.properties.stdout.writeln('Request Counts');
        if (this._requestDataMap.isEmpty) {
            io.properties.stdout.writeln('  none');
        }else {
            let requestsByMethod : core.DartMap<string,core.DartList<RequestData>> = new core.DartMap.literal([
            ]);
            this._requestDataMap.values.forEach((requestData : RequestData) =>  {
                requestsByMethod.putIfAbsent(requestData.method,() =>  {
                    return new core.DartList.literal<RequestData>();
                }).add(requestData);
            });
            let keys : core.DartList<string> = requestsByMethod.keys.toList();
            keys.sort();
            let maxCount : number = requestsByMethod.values.fold(0,(count : number,list : core.DartList<RequestData>) =>  {
                return count + list.length;
            });
            let countWidth : number = new core.DartString(new core.DartInt(maxCount).toString()).length;
            for(let key of keys) {
                let requests : core.DartList<RequestData> = requestsByMethod.get(key);
                let noResponseCount : number = 0;
                let responseCount : number = 0;
                let minTime : number = -1;
                let maxTime : number = -1;
                let totalTime : number = 0;
                requests.forEach((data : RequestData) =>  {
                    if (data.responseTime == null) {
                        noResponseCount++;
                    }else {
                        responseCount++;
                        let time : number = data.elapsedTime;
                        minTime = minTime < 0 ? time : math.min(minTime,time);
                        maxTime = math.max(maxTime,time);
                        totalTime += time;
                    }
                });
                let count : string = new core.DartInt(requests.length).toString();
                writeSpaces(countWidth - new core.DartString(count).length);
                io.properties.stdout.write('  ');
                io.properties.stdout.write(count);
                io.properties.stdout.write(' - ');
                io.properties.stdout.write(key);
                if (noResponseCount > 0) {
                    io.properties.stdout.write(', ');
                    io.properties.stdout.write(noResponseCount);
                    io.properties.stdout.write(' with no response');
                }
                if (maxTime >= 0) {
                    io.properties.stdout.write(' (');
                    io.properties.stdout.write(minTime);
                    io.properties.stdout.write(', ');
                    io.properties.stdout.write(totalTime / responseCount);
                    io.properties.stdout.write(', ');
                    io.properties.stdout.write(maxTime);
                    io.properties.stdout.write(')');
                }
                io.properties.stdout.writeln();
            }
        }
        io.properties.stdout.writeln();
        io.properties.stdout.writeln('Notification Counts');
        if (this._notificationCountMap.isEmpty) {
            io.properties.stdout.writeln('  none');
        }else {
            let keys : core.DartList<string> = this._notificationCountMap.keys.toList();
            keys.sort();
            let maxCount : number = this._notificationCountMap.values.fold(0,math.max);
            let countWidth : number = new core.DartString(new core.DartInt(maxCount).toString()).length;
            for(let key of keys) {
                let count : string = new core.DartInt(this._notificationCountMap.get(key)).toString();
                writeSpaces(countWidth - new core.DartString(count).length);
                io.properties.stdout.write('  ');
                io.properties.stdout.write(count);
                io.properties.stdout.write(' - ');
                io.properties.stdout.writeln(key);
            }
        }
    }
    removeAllOverlays() : void {
        let files : core.DartMap<string,any> = new core.DartHashMap<string,any>();
        for(let path of this.filesWithOverlays) {
            op(Op.INDEX_ASSIGN,files,path,new bare.createInstance(any,null));
        }
        this.sendAnalysisUpdateContent(files);
    }
    sendAnalysisGetErrors(file : string) : RequestData {
        let params = new bare.createInstance(any,null,file).toJson();
        return this._send("analysis.getErrors",params);
    }
    sendAnalysisGetHover(file : string,offset : number) : RequestData {
        let params = new bare.createInstance(any,null,file,offset).toJson();
        return this._send("analysis.getHover",params);
    }
    sendAnalysisGetLibraryDependencies() : RequestData {
        return this._send("analysis.getLibraryDependencies",null);
    }
    sendAnalysisGetNavigation(file : string,offset : number,length : number) : RequestData {
        let params = new bare.createInstance(any,null,file,offset,length).toJson();
        return this._send("analysis.getNavigation",params);
    }
    sendAnalysisGetReachableSources(file : string) : RequestData {
        let params = new bare.createInstance(any,null,file).toJson();
        return this._send("analysis.getReachableSources",params);
    }
    sendAnalysisReanalyze(_namedArguments? : {roots? : core.DartList<string>}) : void {
        let {roots} = Object.assign({
        }, _namedArguments );
        let params = new bare.createInstance(any,null,{
            roots : roots}).toJson();
        this._send("analysis.reanalyze",params);
    }
    sendAnalysisSetAnalysisRoots(included : core.DartList<string>,excluded : core.DartList<string>,_namedArguments? : {packageRoots? : core.DartMap<string,string>}) : void {
        let {packageRoots} = Object.assign({
        }, _namedArguments );
        this._analysisRootIncludes = included;
        let params = new bare.createInstance(any,null,included,excluded,{
            packageRoots : packageRoots}).toJson();
        this._send("analysis.setAnalysisRoots",params);
    }
    sendAnalysisSetGeneralSubscriptions(subscriptions : core.DartList<any>) : void {
        let params = new bare.createInstance(any,null,subscriptions).toJson();
        this._send("analysis.setGeneralSubscriptions",params);
    }
    sendAnalysisSetPriorityFiles(files : core.DartList<string>) : void {
        let params = new bare.createInstance(any,null,files).toJson();
        this._send("analysis.setPriorityFiles",params);
    }
    sendAnalysisSetSubscriptions(subscriptions : core.DartMap<any,core.DartList<string>>) : void {
        let params = new bare.createInstance(any,null,subscriptions).toJson();
        this._send("analysis.setSubscriptions",params);
    }
    sendAnalysisUpdateContent(files : core.DartMap<string,any>) : void {
        files.forEach((path : string,overlay : any) =>  {
            if (is(overlay, any)) {
                this.filesWithOverlays.add(path);
            }else if (is(overlay, any)) {
                this.filesWithOverlays.remove(path);
            }
        });
        let params = new bare.createInstance(any,null,files).toJson();
        this._send('analysis.updateContent',params);
    }
    sendAnalysisUpdateOptions(options : any) : void {
        let params = new bare.createInstance(any,null,options).toJson();
        this._send("analysis.updateOptions",params);
    }
    sendCompletionGetSuggestions(file : string,offset : number) : void {
        let params = new bare.createInstance(any,null,file,offset).toJson();
        this._send("completion.getSuggestions",params);
    }
    sendDiagnosticGetDiagnostics() : RequestData {
        return this._send("diagnostic.getDiagnostics",null);
    }
    sendEditFormat(file : string,selectionOffset : number,selectionLength : number,_namedArguments? : {lineLength? : number}) : RequestData {
        let {lineLength} = Object.assign({
        }, _namedArguments );
        let params = new bare.createInstance(any,null,file,selectionOffset,selectionLength,{
            lineLength : lineLength}).toJson();
        return this._send("edit.format",params);
    }
    sendEditGetAssists(file : string,offset : number,length : number) : RequestData {
        let params = new bare.createInstance(any,null,file,offset,length).toJson();
        return this._send("edit.getAssists",params);
    }
    sendEditGetAvailableRefactorings(file : string,offset : number,length : number) : RequestData {
        let params = new bare.createInstance(any,null,file,offset,length).toJson();
        return this._send("edit.getAvailableRefactorings",params);
    }
    sendEditGetFixes(file : string,offset : number) : RequestData {
        let params = new bare.createInstance(any,null,file,offset).toJson();
        return this._send("edit.getFixes",params);
    }
    sendEditGetRefactoring(kind : any,file : string,offset : number,length : number,validateOnly : boolean,_namedArguments? : {options? : any}) : RequestData {
        let {options} = Object.assign({
        }, _namedArguments );
        let params = new bare.createInstance(any,null,kind,file,offset,length,validateOnly,{
            options : options}).toJson();
        return this._send("edit.getRefactoring",params);
    }
    sendEditOrganizeDirectives(file : string) : RequestData {
        let params = new bare.createInstance(any,null,file).toJson();
        return this._send("edit.organizeDirectives",params);
    }
    sendEditSortMembers(file : string) : RequestData {
        let params = new bare.createInstance(any,null,file).toJson();
        return this._send("edit.sortMembers",params);
    }
    sendExecutionCreateContext(contextRoot : string) : RequestData {
        let params = new bare.createInstance(any,null,contextRoot).toJson();
        return this._send("execution.createContext",params);
    }
    sendExecutionDeleteContext(id : string) : RequestData {
        let params = new bare.createInstance(any,null,id).toJson();
        return this._send("execution.deleteContext",params);
    }
    sendExecutionMapUri(id : string,_namedArguments? : {file? : string,uri? : string}) : RequestData {
        let {file,uri} = Object.assign({
        }, _namedArguments );
        let params = new bare.createInstance(any,null,id,{
            file : file,uri : uri}).toJson();
        return this._send("execution.mapUri",params);
    }
    sendExecutionSetSubscriptions(subscriptions : core.DartList<any>) : RequestData {
        let params = new bare.createInstance(any,null,subscriptions).toJson();
        return this._send("execution.setSubscriptions",params);
    }
    sendSearchFindElementReferences(file : string,offset : number,includePotential : boolean) : void {
        let params = new bare.createInstance(any,null,file,offset,includePotential).toJson();
        this._send("search.findElementReferences",params);
    }
    sendSearchFindMemberDeclarations(name : string) : void {
        let params = new bare.createInstance(any,null,name).toJson();
        this._send("search.findMemberDeclarations",params);
    }
    sendSearchFindMemberReferences(name : string) : void {
        let params = new bare.createInstance(any,null,name).toJson();
        this._send("search.findMemberReferences",params);
    }
    sendSearchFindTopLevelDeclarations(pattern : string) : void {
        let params = new bare.createInstance(any,null,pattern).toJson();
        this._send("search.findTopLevelDeclarations",params);
    }
    sendSearchGetTypeHierarchy(file : string,offset : number,_namedArguments? : {superOnly? : boolean}) : void {
        let {superOnly} = Object.assign({
        }, _namedArguments );
        let params = new bare.createInstance(any,null,file,offset,{
            superOnly : superOnly}).toJson();
        this._send("search.getTypeHierarchy",params);
    }
    sendServerGetVersion() : RequestData {
        return this._send("server.getVersion",null);
    }
    sendServerSetSubscriptions(subscriptions : core.DartList<any>) : void {
        let params = new bare.createInstance(any,null,subscriptions).toJson();
        this._send("server.setSubscriptions",params);
    }
    sendServerShutdown() : void {
        this._send("server.shutdown",null);
    }
    start(_namedArguments? : {checked? : boolean,diagnosticPort? : number,profileServer? : boolean,sdkPath? : string,servicesPort? : number,useAnalysisHighlight2? : boolean}) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let {checked,diagnosticPort,profileServer,sdkPath,servicesPort,useAnalysisHighlight2} = Object.assign({
                "checked" : true,
                "profileServer" : false,
                "useAnalysisHighlight2" : false}, _namedArguments );
            if (this._process != null) {
                throw new core.Exception('Process already started');
            }
            let dartBinary : string = io.Platform.executable;
            let rootDir : string = this._findRoot(io.Platform.script.toFilePath({
                windows : io.Platform.isWindows}));
            let serverPath : string = lib7.normalize(lib7.join(rootDir,'bin','server.dart'));
            let arguments : core.DartList<string> = new core.DartList.literal();
            if (profileServer) {
                if (servicesPort == null) {
                    arguments.add('--observe');
                }else {
                    arguments.add(`--observe=${servicesPort}`);
                }
                arguments.add('--pause-isolates-on-exit');
            }else if (servicesPort != null) {
                arguments.add(`--enable-vm-service=${servicesPort}`);
            }
            if (io.Platform.packageRoot != null) {
                arguments.add(`--package-root=${io.Platform.packageRoot}`);
            }
            if (io.Platform.packageConfig != null) {
                arguments.add(`--packages=${io.Platform.packageConfig}`);
            }
            if (checked) {
                arguments.add('--checked');
            }
            arguments.add(serverPath);
            if (diagnosticPort != null) {
                arguments.add('--port');
                arguments.add(new core.DartInt(diagnosticPort).toString());
            }
            if (sdkPath != null) {
                arguments.add(`--sdk=${sdkPath}`);
            }
            if (useAnalysisHighlight2) {
                arguments.add('--useAnalysisHighlight2');
            }
            this._process = await io.Process.start(dartBinary,arguments);
            this._process.exitCode.then((code : number) =>  {
                if (code != 0) {
                    throw new core.StateError(`Server terminated with exit code ${code}`);
                }
            });
            this._listenToOutput();
            this._serverConnectedCompleter = new async.DartCompleter<any>();
            return this._serverConnectedCompleter.future;
        } )());
    }

    _findRoot(pathname : string) : string {
        while (!new core.DartList.literal('benchmark','test').contains(lib7.basename(pathname))){
            let parent : string = lib7.dirname(pathname);
            if (new core.DartString(parent).length >= new core.DartString(pathname).length) {
                throw new core.Exception("Can't find root directory");
            }
            pathname = parent;
        }
        return lib7.dirname(pathname);
    }
    _handleNotification(notification : any) : void {
        switch (notification.event) {
            case "server.connected":
                this._serverConnectedCompleter.complete(null);
                break;
            case "server.error":
                throw new core.StateError(`Server error: ${notification.toJson()}`);
                break;
            case "server.status":
                if (this._analysisFinishedCompleter != null) {
                    let params : any = new bare.createInstance(any,null,notification);
                    let analysis = params.analysis;
                    if (analysis != null && !analysis.isAnalyzing) {
                        this._analysisFinishedCompleter.complete(null);
                    }
                }
                break;
            case "analysis.analyzedFiles":
                let params : any = new bare.createInstance(any,null,notification);
                this._analyzedFiles = params.directories;
                break;
            case "analysis.errors":
                let params : any = new bare.createInstance(any,null,notification);
                this._errorMap.pathMap.set(params.file,params.errors);
                break;
            case "analysis.flushResults":
                this._errorMap.pathMap.clear();
                break;
            case "analysis.folding":
                break;
            case "analysis.highlights":
                break;
            case "analysis.implemented":
                break;
            case "analysis.invalidate":
                break;
            case "analysis.navigation":
                break;
            case "analysis.occurrences":
                break;
            case "analysis.outline":
                break;
            case "analysis.overrides":
                break;
            case "completion.results":
                break;
            case "search.results":
                break;
            case "execution.launchData":
                break;
            default:
                throw new core.StateError(`Unhandled notification: ${notification.toJson()}`);
        }
    }
    _handleResponse(response : any) : void {
        let id : string = response.id.toString();
        let requestData : RequestData = this._requestDataMap.get(id);
        requestData.recordResponse(response);
    }
    _handleStdErr(line : string) : void {
        let trimmedLine : string = new core.DartString(line).trim();
        ((_46_)=>(!!_46_)?_46_.log(Server.fromStderr,`${trimmedLine}`):null)(this.logger);
        throw new core.StateError(`Message received on stderr: "${trimmedLine}"`);
    }
    _handleStdOut(line : string) : void {
        var asMap : (value : core.DartObject) => core.DartMap<any,any> = (value : core.DartObject) : core.DartMap<any,any> =>  {
            if (is(value, core.DartMap<any,any>)) {
                return value;
            }
            throw new core.ArgumentError(`Expected a Map, found a ${value.runtimeType}`);
        };
        let trimmedLine : string = new core.DartString(line).trim();
        if (new core.DartString(trimmedLine).isEmpty || new core.DartString(trimmedLine).startsWith('Observatory listening on ')) {
            return;
        }
        ((_47_)=>(!!_47_)?_47_.log(Server.fromServer,`${trimmedLine}`):null)(this.logger);
        let message : core.DartMap<any,any> = asMap(convert.properties.JSON.decoder.convert(trimmedLine));
        if (message.containsKey('id')) {
            let response : any = new bare.createInstance(any,null,message);
            this._handleResponse(response);
        }else {
            let notification : any = new bare.createInstance(any,null,message);
            let event : string = notification.event;
            this._notificationCountMap.set(event,((this._notificationCountMap.get(event) || 0)) + 1);
            this._handleNotification(notification);
        }
    }
    _listenToOutput() : void {
        var installHandler : (stream : async.DartStream<core.DartList<number>>,handler : (line : string) => any) => void = (stream : async.DartStream<core.DartList<number>>,handler : (line : string) => any) : void =>  {
            stream.transform((new convert.Utf8Codec()).decoder).transform(new convert.LineSplitter()).listen(handler);
        };
        installHandler(this._process.stdout,this._handleStdOut.bind(this));
        installHandler(this._process.stderr,this._handleStdErr.bind(this));
    }
    _send(method : string,params : core.DartMap<string,any>,_namedArguments? : {onResponse? : (response : any) => void}) : RequestData {
        let {onResponse} = Object.assign({
        }, _namedArguments );
        let id : string = `${this._nextId++}`;
        let requestData : RequestData = new RequestData(id,method,params,properties.currentTime);
        this._requestDataMap.set(id,requestData);
        let command : core.DartMap<string,any> = new core.DartMap.literal([
            ['id',id],
            ['method',method]]);
        if (params != null) {
            command.set('params',params);
        }
        let line : string = convert.properties.JSON.encode(command);
        this._process.stdin.add(convert.properties.UTF8.encoder.convert(`${line}\n`));
        ((_48_)=>(!!_48_)?_48_.log(Server.fromClient,`${line}`):null)(this.logger);
        return requestData;
    }
}

export namespace _ErrorComparator {
    export type Constructors = '_ErrorComparator';
    export type Interface = Omit<_ErrorComparator, Constructors>;
}
@DartClass
export class _ErrorComparator {
    private static __$NO_ERRORS : core.DartList<any>;
    static get NO_ERRORS() : core.DartList<any> { 
        if (this.__$NO_ERRORS===undefined) {
            this.__$NO_ERRORS = new core.DartList.literal<any>();
        }
        return this.__$NO_ERRORS;
    }
    static set NO_ERRORS(__$value : core.DartList<any>)  { 
        this.__$NO_ERRORS = __$value;
    }

    buffer : core.DartStringBuffer;

    constructor(buffer : core.DartStringBuffer) {
    }
    @defaultConstructor
    _ErrorComparator(buffer : core.DartStringBuffer) {
        this.buffer = buffer;
    }
    compare(actualErrorMap : core.DartMap<string,core.DartList<any>>,expectedErrorMap : core.DartMap<string,core.DartList<any>>) : void {
        let allFiles : core.DartSet<string> = new core.DartHashSet<any>();
        allFiles.addAll(actualErrorMap.keys);
        allFiles.addAll(expectedErrorMap.keys);
        let sortedFiles : core.DartList<string> = ((_) : core.DartList<string> =>  {
            {
                _.sort();
                return _;
            }
        })(allFiles.toList());
        for(let filePath of sortedFiles) {
            let actualErrors : core.DartList<any> = actualErrorMap.get(filePath);
            let expectedErrors : core.DartList<any> = expectedErrorMap.get(filePath);
            this._compareLists(filePath,(actualErrors || _ErrorComparator.NO_ERRORS),(expectedErrors || _ErrorComparator.NO_ERRORS));
        }
    }
    _compareLists(filePath : string,actualErrors : core.DartList<any>,expectedErrors : core.DartList<any>) : void {
        let remainingExpected : core.DartList<any> = new core.DartList.from(expectedErrors);
        for(let actualError of actualErrors) {
            let expectedError : any = this._findError(remainingExpected,actualError);
            if (op(Op.EQUALS,expectedError,null)) {
                this._writeReport(filePath,actualErrors,expectedErrors);
                return;
            }
            remainingExpected.remove(expectedError);
        }
        if (remainingExpected.isNotEmpty) {
            this._writeReport(filePath,actualErrors,expectedErrors);
        }
    }
    _equalErrors(firstError : any,secondError : any) : boolean {
        return op(Op.EQUALS,firstError.severity,secondError.severity) && op(Op.EQUALS,firstError.type,secondError.type) && this._equalLocations(firstError.location,secondError.location) && op(Op.EQUALS,firstError.message,secondError.message);
    }
    _equalLocations(firstLocation : any,secondLocation : any) : boolean {
        return op(Op.EQUALS,firstLocation.file,secondLocation.file) && op(Op.EQUALS,firstLocation.offset,secondLocation.offset) && op(Op.EQUALS,firstLocation.length,secondLocation.length);
    }
    _findError(errors : core.DartList<any>,targetError : any) : any {
        for(let error of errors) {
            if (this._equalErrors(error,targetError)) {
                return error;
            }
        }
        return null;
    }
    _writeErrors(prefix : string,errors : core.DartList<any>) : void {
        this.buffer.write(prefix);
        this.buffer.write(errors.length);
        this.buffer.write(' errors:');
        for(let error of errors) {
            this.buffer.writeln();
            let location : any = error.location;
            let offset : number = location.offset;
            this.buffer.write('    ');
            this.buffer.write(location.file);
            this.buffer.write(' (');
            this.buffer.write(offset);
            this.buffer.write('..');
            this.buffer.write(offset + location.length);
            this.buffer.write(') ');
            this.buffer.write(error.severity);
            this.buffer.write(', ');
            this.buffer.write(error.type);
            this.buffer.write(' : ');
            this.buffer.write(error.message);
        }
    }
    _writeReport(filePath : string,actualErrors : core.DartList<any>,expectedErrors : core.DartList<any>) : void {
        if (this.buffer.length > 0) {
            this.buffer.writeln();
            this.buffer.writeln();
        }
        this.buffer.writeln(filePath);
        this._writeErrors('  Expected ',expectedErrors);
        this.buffer.writeln();
        this._writeErrors('  Found ',actualErrors);
    }
}

export class properties {
    static get currentTime() : number {
        return new core.DartDateTime.now().millisecondsSinceEpoch;
    }
}
