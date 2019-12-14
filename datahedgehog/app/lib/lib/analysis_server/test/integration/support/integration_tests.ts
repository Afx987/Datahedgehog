/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/support/integration_tests.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./protocol_matchers";
import * as lib4 from "./integration_test_methods";
import * as io from "@dart2ts/dart/io";
import * as collection from "@dart2ts/dart/core";
import * as lib7 from "@dart2ts.packages/path/lib/path";
import * as convert from "@dart2ts/dart/convert";

export var isListOf : (elementMatcher : any) => any = (elementMatcher : any) : any =>  {
    return new _ListOf(elementMatcher);
};
export var isMapOf : (keyMatcher : any,valueMatcher : any) => any = (keyMatcher : any,valueMatcher : any) : any =>  {
    return new _MapOf(keyMatcher,valueMatcher);
};
export var isOneOf : (choiceMatchers : core.DartList<any>) => any = (choiceMatchers : core.DartList<any>) : any =>  {
    return new _OneOf(choiceMatchers);
};
export var outOfTestExpect : (actual : any,matcher : any,_namedArguments? : {reason? : string,skip? : any,verbose? : boolean}) => void = (actual : any,matcher : any,_namedArguments? : {reason? : string,skip? : any,verbose? : boolean}) : void =>  {
    let {reason,skip,verbose} = Object.assign({
        "verbose" : false}, _namedArguments );
    let matchState = new core.DartMap.literal([
    ]);
    try {
        if (matcher.matches(actual,matchState)) return;
    } catch (__error__) {

        {
            let trace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
            let e = __error__;
            if (reason == null) {
                reason = `${(is(e, "string")) ? e : e.toString()} at ${trace}`;
            }
        }
    }
    fail(_defaultFailFormatter(actual,matcher,reason,matchState,verbose));
};
export var _defaultFailFormatter : (actual : any,matcher : any,reason : string,matchState : core.DartMap<any,any>,verbose : boolean) => string = (actual : any,matcher : any,reason : string,matchState : core.DartMap<any,any>,verbose : boolean) : string =>  {
    let description = new bare.createInstance(any,null);
    description.add('Expected: ').addDescriptionOf(matcher).add('\n');
    description.add('  Actual: ').addDescriptionOf(actual).add('\n');
    let mismatchDescription = new bare.createInstance(any,null);
    matcher.describeMismatch(actual,mismatchDescription,matchState,verbose);
    if (op(Op.GT,mismatchDescription.length,0)) {
        description.add(`   Which: ${mismatchDescription}\n`);
    }
    if (reason != null) description.add(reason).add('\n');
    return description.toString();
};
export namespace AbstractAnalysisServerIntegrationTest {
    export type Constructors = lib4.IntegrationTestMixin.Constructors | 'AbstractAnalysisServerIntegrationTest';
    export type Interface = Omit<AbstractAnalysisServerIntegrationTest, Constructors>;
}
@DartClass
export class AbstractAnalysisServerIntegrationTest extends lib4.IntegrationTestMixin {
    private static __$SHUTDOWN_TIMEOUT : core.DartDuration;
    static get SHUTDOWN_TIMEOUT() : core.DartDuration { 
        if (this.__$SHUTDOWN_TIMEOUT===undefined) {
            this.__$SHUTDOWN_TIMEOUT = new core.DartDuration({
                seconds : 5});
        }
        return this.__$SHUTDOWN_TIMEOUT;
    }

    server : Server;

    sourceDirectory : io.Directory;

    currentAnalysisErrors : core.DartHashMap<string,core.DartList<any>>;

    lastAnalyzedFiles : core.DartList<string>;

    skipShutdown : boolean;

    _subscribedToServerStatus : boolean;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AbstractAnalysisServerIntegrationTest() {
        this.server = new Server();
        this.currentAnalysisErrors = new core.DartHashMap<string,core.DartList<any>>();
        this.skipShutdown = false;
        this._subscribedToServerStatus = false;
        this.initializeInttestMixin();
    }
    get analysisFinished() : async.Future<any> {
        let completer : async.DartCompleter<any> = new async.DartCompleter<any>();
        let subscription : async.DartStreamSubscription<any>;
        outOfTestExpect(this._subscribedToServerStatus,isTrue);
        subscription = this.onServerStatus.listen((params : any) =>  {
            if (params.analysis != null && !params.analysis.isAnalyzing) {
                completer.complete(params);
                subscription.cancel();
            }
        });
        return completer.future;
    }
    debugStdio() : void {
        this.server.debugStdio();
    }
    getErrors(pathname : string) : core.DartList<any> {
        return op(Op.INDEX,this.currentAnalysisErrors,pathname);
    }
    readFile(pathname : string) : string {
        return new io.File(pathname).readAsStringSync();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    sendServerSetSubscriptions(subscriptions : core.DartList<any>) : async.Future<any> {
        this._subscribedToServerStatus = subscriptions.contains(ServerService.STATUS);
        return super.sendServerSetSubscriptions(subscriptions);
    }
    setUp() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.sourceDirectory = new io.Directory(io.Directory.systemTemp.createTempSync('analysisServer').resolveSymbolicLinksSync());
            this.onAnalysisErrors.listen((params : any) =>  {
                op(Op.INDEX_ASSIGN,this.currentAnalysisErrors,params.file,params.errors);
            });
            this.onAnalysisAnalyzedFiles.listen((params : any) =>  {
                this.lastAnalyzedFiles = params.directories;
            });
            let serverConnected : async.DartCompleter<any> = new async.DartCompleter<any>();
            this.onServerConnected.listen((_ : any) =>  {
                outOfTestExpect(serverConnected.isCompleted,isFalse);
                serverConnected.complete();
            });
            this.onServerError.listen((params : any) =>  {
                fail(`${params.message}\n${params.stackTrace}`);
            });
            await this.startServer();
            this.server.listenToOutput(this.dispatchNotification.bind(this));
            this.server.exitCode.then((_ : any) =>  {
                this.skipShutdown = true;
            });
            return serverConnected.future;
        } )());
    }

    shutdownIfNeeded() : async.Future<any> {
        if (this.skipShutdown) {
            return new async.Future.value();
        }
        this.sendServerShutdown();
        return this.server.exitCode.timeout(AbstractAnalysisServerIntegrationTest.SHUTDOWN_TIMEOUT,{
            onTimeout : () =>  {
                return this.server.kill('server failed to exit').then((_ : any) =>  {
                    return -1;
                });
            }});
    }
    sourcePath(relativePath : string) : string {
        return lib7.join(this.sourceDirectory.path,new core.DartString(relativePath).replaceAll('/',lib7.properties.separator));
    }
    standardAnalysisSetup(_namedArguments? : {subscribeStatus? : boolean}) : async.Future<any> {
        let {subscribeStatus} = Object.assign({
            "subscribeStatus" : true}, _namedArguments );
        let futures : core.DartList<async.Future<any>> = new core.DartList.literal<async.Future<any>>();
        if (subscribeStatus) {
            futures.add(this.sendServerSetSubscriptions(new core.DartList.literal(ServerService.STATUS)));
        }
        futures.add(this.sendAnalysisSetAnalysisRoots(new core.DartList.literal(this.sourceDirectory.path),new core.DartList.literal()));
        return async.Future.wait(futures);
    }
    startServer(_namedArguments? : {checked? : boolean,diagnosticPort? : number,servicesPort? : number}) : async.Future<any> {
        let {checked,diagnosticPort,servicesPort} = Object.assign({
            "checked" : true}, _namedArguments );
        return this.server.start({
            checked : checked,diagnosticPort : diagnosticPort,servicesPort : servicesPort});
    }
    tearDown() : async.Future<any> {
        return this.shutdownIfNeeded().then((_ : any) =>  {
            this.sourceDirectory.deleteSync({
                recursive : true});
        });
    }
    writeFile(pathname : string,contents : string) : string {
        new io.Directory(lib7.dirname(pathname)).createSync({
            recursive : true});
        let file : io.File = new io.File(pathname);
        file.writeAsStringSync(contents);
        return file.resolveSymbolicLinksSync();
    }
}

export namespace LazyMatcher {
    export type Constructors = 'LazyMatcher';
    export type Interface = Omit<LazyMatcher, Constructors>;
}
@DartClass
@Implements(any)
export class LazyMatcher implements any.Interface {
    _creator : () => any;

    _wrappedMatcher : any;

    constructor(_creator : () => any) {
    }
    @defaultConstructor
    LazyMatcher(_creator : () => any) {
        this._creator = _creator;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describe(description : any) : any {
        this._createMatcher();
        return this._wrappedMatcher.describe(description);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describeMismatch(item : any,mismatchDescription : any,matchState : core.DartMap<any,any>,verbose : boolean) : any {
        this._createMatcher();
        return this._wrappedMatcher.describeMismatch(item,mismatchDescription,matchState,verbose);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    matches(item : any,matchState : core.DartMap<any,any>) : boolean {
        this._createMatcher();
        return this._wrappedMatcher.matches(item,matchState);
    }
    _createMatcher() : void {
        if (op(Op.EQUALS,this._wrappedMatcher,null)) {
            this._wrappedMatcher = this._creator();
        }
    }
}

export namespace MatchesEnum {
    export type Constructors = 'MatchesEnum';
    export type Interface = Omit<MatchesEnum, Constructors>;
}
@DartClass
export class MatchesEnum extends any {
    description : string;

    allowedValues : core.DartList<string>;

    constructor(description : string,allowedValues : core.DartList<string>) {
    }
    @defaultConstructor
    MatchesEnum(description : string,allowedValues : core.DartList<string>) {
        this.description = description;
        this.allowedValues = allowedValues;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describe(description : any) : any {
        return description.add(this.description);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    matches(item : any,matchState : core.DartMap<any,any>) : boolean {
        return this.allowedValues.contains(item);
    }
}

export namespace Server {
    export type Constructors = 'Server';
    export type Interface = Omit<Server, Constructors>;
}
@DartClass
export class Server {
    _process : io.Process;

    _pendingCommands : core.DartMap<string,async.DartCompleter<any>>;

    _nextId : number;

    _recordedStdio : core.DartList<string>;

    _debuggingStdio : boolean;

    _receivedBadDataFromServer : boolean;

    _time : core.DartStopwatch;

    lastCommunicationTime : double;

    get currentElapseTime() : double {
        return this._time.elapsedTicks / this._time.frequency;
    }
    get exitCode() : async.Future<number> {
        return this._process.exitCode;
    }
    debugStdio() : void {
        if (this._debuggingStdio) {
            return;
        }
        this._debuggingStdio = true;
        for(let line of this._recordedStdio) {
            core.print(line);
        }
    }
    findRoot(pathname : string) : string {
        while (!new core.DartList.literal('benchmark','test').contains(lib7.basename(pathname))){
            let parent : string = lib7.dirname(pathname);
            if (new core.DartString(parent).length >= new core.DartString(pathname).length) {
                throw new core.Exception("Can't find root directory");
            }
            pathname = parent;
        }
        return lib7.dirname(pathname);
    }
    flushCommands() : async.Future<any> {
        return this._process.stdin.flush();
    }
    kill(reason : string) : async.Future<number> {
        this.debugStdio();
        this._recordStdio(`FORCIBLY TERMINATING PROCESS: ${reason}`);
        this._process.kill();
        return this._process.exitCode;
    }
    listenToOutput(notificationProcessor : (event : string,params : any) => void) : void {
        this._process.stdout.transform((new convert.Utf8Codec()).decoder).transform(new convert.LineSplitter()).listen((line : string) =>  {
            this.lastCommunicationTime = this.currentElapseTime;
            let trimmedLine : string = new core.DartString(line).trim();
            if (new core.DartString(trimmedLine).startsWith('Observatory listening on ')) {
                return;
            }
            this._recordStdio(`RECV: ${trimmedLine}`);
            let message;
            try {
                message = convert.properties.JSON.decoder.convert(trimmedLine);
            } catch (__error__) {

                {
                    let exception = __error__;
                    this._badDataFromServer(`JSON decode failure: ${exception}`);
                    return;
                }
            }
            outOfTestExpect(message,isMap);
            let messageAsMap : core.DartMap<any,any> = message;
            if (messageAsMap.containsKey('id')) {
                outOfTestExpect(messageAsMap.get('id'),properties.isString);
                let id : string = op(Op.INDEX,message,'id');
                let completer : async.DartCompleter<any> = this._pendingCommands.get(id);
                if (op(Op.EQUALS,completer,null)) {
                    fail(`Unexpected response from server: id=${id}`);
                }else {
                    this._pendingCommands.remove(id);
                }
                if (messageAsMap.containsKey('error')) {
                    completer.completeError(new ServerErrorMessage(messageAsMap));
                }else {
                    completer.complete(messageAsMap.get('result'));
                }
                outOfTestExpect(message,properties.isResponse);
            }else {
                outOfTestExpect(messageAsMap,contains('event'));
                outOfTestExpect(messageAsMap.get('event'),properties.isString);
                notificationProcessor(messageAsMap.get('event'),messageAsMap.get('params'));
                outOfTestExpect(message,properties.isNotification);
            }
        });
        this._process.stderr.transform((new convert.Utf8Codec()).decoder).transform(new convert.LineSplitter()).listen((line : string) =>  {
            let trimmedLine : string = new core.DartString(line).trim();
            this._recordStdio(`ERR:  ${trimmedLine}`);
            this._badDataFromServer('Message received on stderr',{
                silent : true});
        });
    }
    send(method : string,params : core.DartMap<string,any>) : async.Future<any> {
        let id : string = `${this._nextId++}`;
        let command : core.DartMap<string,any> = new core.DartMap.literal([
            ['id',id],
            ['method',method]]);
        if (params != null) {
            command.set('params',params);
        }
        let completer : async.DartCompleter<any> = new async.DartCompleter<any>();
        this._pendingCommands.set(id,completer);
        let line : string = convert.properties.JSON.encode(command);
        this._recordStdio(`SEND: ${line}`);
        this._process.stdin.add(convert.properties.UTF8.encoder.convert(`${line}\n`));
        return completer.future;
    }
    start(_namedArguments? : {checked? : boolean,diagnosticPort? : number,instrumentationLogFile? : string,profileServer? : boolean,sdkPath? : string,servicesPort? : number,useAnalysisHighlight2? : boolean}) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let {checked,diagnosticPort,instrumentationLogFile,profileServer,sdkPath,servicesPort,useAnalysisHighlight2} = Object.assign({
                "checked" : true,
                "profileServer" : false,
                "useAnalysisHighlight2" : false}, _namedArguments );
            if (this._process != null) {
                throw new core.Exception('Process already started');
            }
            this._time.start();
            let dartBinary : string = io.Platform.executable;
            let rootDir : string = this.findRoot(io.Platform.script.toFilePath({
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
            if (instrumentationLogFile != null) {
                arguments.add(`--instrumentation-log-file=${instrumentationLogFile}`);
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
                    this._badDataFromServer(`server terminated with exit code ${code}`);
                }
            });
        } )());
    }

    _badDataFromServer(details : string,_namedArguments? : {silent? : boolean}) : void {
        let {silent} = Object.assign({
            "silent" : false}, _namedArguments );
        if (!silent) {
            this._recordStdio(`BAD DATA FROM SERVER: ${details}`);
        }
        if (this._receivedBadDataFromServer) {
            return;
        }
        this._receivedBadDataFromServer = true;
        this.debugStdio();
        new async.Future.delayed(new core.DartDuration({
            seconds : 1}),expectAsync0(() =>  {
            fail(`Bad data received from server: ${details}`);
        }));
    }
    _recordStdio(line : string) : void {
        let elapsedTime : double = this.currentElapseTime;
        line = `${elapsedTime}: ${line}`;
        if (this._debuggingStdio) {
            core.print(line);
        }
        this._recordedStdio.add(line);
    }
    constructor() {
    }
    @defaultConstructor
    Server() {
        this._pendingCommands = new core.DartMap.literal([
        ]);
        this._nextId = 0;
        this._recordedStdio = new core.DartList.literal<string>();
        this._debuggingStdio = false;
        this._receivedBadDataFromServer = false;
        this._time = new core.DartStopwatch();
    }
}

export namespace ServerErrorMessage {
    export type Constructors = 'ServerErrorMessage';
    export type Interface = Omit<ServerErrorMessage, Constructors>;
}
@DartClass
export class ServerErrorMessage {
    message : core.DartMap<any,any>;

    constructor(message : core.DartMap<any,any>) {
    }
    @defaultConstructor
    ServerErrorMessage(message : core.DartMap<any,any>) {
        this.message = message;
    }
    get error() : any {
        return this.message.get('error');
    }
    toString() : string {
        return this.message.toString();
    }
}

export namespace _ListOf {
    export type Constructors = '_ListOf';
    export type Interface = Omit<_ListOf, Constructors>;
}
@DartClass
export class _ListOf extends any {
    elementMatcher : any;

    iterableMatcher : any;

    constructor(elementMatcher : any) {
    }
    @defaultConstructor
    _ListOf(elementMatcher : any) {
        this.elementMatcher = elementMatcher;
        this.iterableMatcher = everyElement(elementMatcher);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describe(description : any) : any {
        return description.add('List of ').addDescriptionOf(this.elementMatcher);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describeMismatch(item : any,mismatchDescription : any,matchState : core.DartMap<any,any>,verbose : boolean) : any {
        if (isNot(item, core.DartList<any>)) {
            return super.describeMismatch(item,mismatchDescription,matchState,verbose);
        }else {
            return this.iterableMatcher.describeMismatch(item,mismatchDescription,matchState,verbose);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    matches(item : any,matchState : core.DartMap<any,any>) : boolean {
        if (isNot(item, core.DartList<any>)) {
            return false;
        }
        return this.iterableMatcher.matches(item,matchState);
    }
}

export namespace _OneOf {
    export type Constructors = '_OneOf';
    export type Interface = Omit<_OneOf, Constructors>;
}
@DartClass
export class _OneOf extends any {
    choiceMatchers : core.DartList<any>;

    constructor(choiceMatchers : core.DartList<any>) {
    }
    @defaultConstructor
    _OneOf(choiceMatchers : core.DartList<any>) {
        this.choiceMatchers = choiceMatchers;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describe(description : any) : any {
        for(let i : number = 0; i < this.choiceMatchers.length; i++){
            if (i != 0) {
                if (this.choiceMatchers.length == 2) {
                    description = description.add(' or ');
                }else {
                    description = description.add(', ');
                    if (i == this.choiceMatchers.length - 1) {
                        description = description.add('or ');
                    }
                }
            }
            description = description.addDescriptionOf(this.choiceMatchers[i]);
        }
        return description;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    matches(item : any,matchState : core.DartMap<any,any>) : boolean {
        for(let choiceMatcher of this.choiceMatchers) {
            let subState : core.DartMap<any,any> = new core.DartMap.literal([
            ]);
            if (choiceMatcher.matches(item,subState)) {
                return true;
            }
        }
        return false;
    }
}

export namespace _RecursiveMatcher {
    export type Constructors = '_RecursiveMatcher';
    export type Interface = Omit<_RecursiveMatcher, Constructors>;
}
@DartClass
export class _RecursiveMatcher extends any {
    constructor() {
    }
    @defaultConstructor
    _RecursiveMatcher() {
    }
    checkSubstructure(item : any,matcher : any,mismatches : core.DartList<(mismatchDescription : any) => any>,describeSubstructure : (Description : any) => any) {
        let subState : core.DartMap<any,any> = new core.DartMap.literal([
        ]);
        if (!matcher.matches(item,subState)) {
            mismatches.add((mismatchDescription : any) =>  {
                mismatchDescription = mismatchDescription.add('contains malformed ');
                mismatchDescription = describeSubstructure(mismatchDescription);
                mismatchDescription = mismatchDescription.add(' (should be ').addDescriptionOf(matcher);
                let subDescription : string = matcher.describeMismatch(item,new bare.createInstance(any,null),subState,false).toString();
                if (new core.DartString(subDescription).isNotEmpty) {
                    mismatchDescription = mismatchDescription.add('; ').add(subDescription);
                }
                return mismatchDescription.add(')');
            });
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describeMismatch(item : any,mismatchDescription : any,matchState : core.DartMap<any,any>,verbose : boolean) : any {
        let mismatches : core.DartList<(mismatchDescription : any) => any> = matchState.get('mismatches') as core.DartList<(mismatchDescription : any) => any>;
        if (mismatches != null) {
            for(let i : number = 0; i < mismatches.length; i++){
                let mismatch : (mismatchDescription : any) => any = mismatches[i];
                if (i > 0) {
                    if (mismatches.length == 2) {
                        mismatchDescription = mismatchDescription.add(' and ');
                    }else if (i == mismatches.length - 1) {
                        mismatchDescription = mismatchDescription.add(', and ');
                    }else {
                        mismatchDescription = mismatchDescription.add(', ');
                    }
                }
                mismatchDescription = mismatch(mismatchDescription);
            }
            return mismatchDescription;
        }else {
            return super.describeMismatch(item,mismatchDescription,matchState,verbose);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    matches(item : any,matchState : core.DartMap<any,any>) : boolean {
        let mismatches : core.DartList<(mismatchDescription : any) => any> = new core.DartList.literal<(mismatchDescription : any) => any>();
        this.populateMismatches(item,mismatches);
        if (mismatches.isEmpty) {
            return true;
        }else {
            addStateInfo(matchState,new core.DartMap.literal([
                ['mismatches',mismatches]]));
            return false;
        }
    }
    @Abstract
    populateMismatches(item : any,mismatches : core.DartList<(mismatchDescription : any) => any>) : void{ throw 'abstract'}
    simpleDescription(description : string) : (mismatchDescription : any) => any {
        return (mismatchDescription : any) =>  {
            mismatchDescription.add(description);
        };
    }
}

export namespace MatchesJsonObject {
    export type Constructors = _RecursiveMatcher.Constructors | 'MatchesJsonObject';
    export type Interface = Omit<MatchesJsonObject, Constructors>;
}
@DartClass
export class MatchesJsonObject extends _RecursiveMatcher {
    description : string;

    requiredFields : core.DartMap<string,any>;

    optionalFields : core.DartMap<string,any>;

    constructor(description : string,requiredFields : core.DartMap<string,any>,_namedArguments? : {optionalFields? : core.DartMap<string,any>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MatchesJsonObject(description : string,requiredFields : core.DartMap<string,any>,_namedArguments? : {optionalFields? : core.DartMap<string,any>}) {
        let {optionalFields} = Object.assign({
        }, _namedArguments );
        this.description = description;
        this.requiredFields = requiredFields;
        this.optionalFields = optionalFields;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describe(description : any) : any {
        return description.add(this.description);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    populateMismatches(item : any,mismatches : core.DartList<(mismatchDescription : any) => any>) : void {
        if (isNot(item, core.DartMap<any,any>)) {
            mismatches.add(this.simpleDescription('is not a map'));
            return;
        }
        if (this.requiredFields != null) {
            this.requiredFields.forEach((key : string,valueMatcher : any) =>  {
                if (!item.containsKey(key)) {
                    mismatches.add((mismatchDescription : any) =>  {
                        return mismatchDescription.add('is missing field ').addDescriptionOf(key).add(' (').addDescriptionOf(valueMatcher).add(')');
                    });
                }else {
                    this._checkField(key,item.get(key),valueMatcher,mismatches);
                }
            });
        }
        item.forEach((key : any,value : any) =>  {
            if (this.requiredFields != null && this.requiredFields.containsKey(key)) {
            }else if (this.optionalFields != null && this.optionalFields.containsKey(key)) {
                this._checkField(key,value,this.optionalFields.get(key),mismatches);
            }else {
                mismatches.add((mismatchDescription : any) =>  {
                    return mismatchDescription.add('has unexpected field ').addDescriptionOf(key);
                });
            }
        });
    }
    _checkField(key : string,value : any,valueMatcher : any,mismatches : core.DartList<(mismatchDescription : any) => any>) : void {
        this.checkSubstructure(value,valueMatcher,mismatches,(description : any) =>  {
            return description.add('field ').addDescriptionOf(key);
        });
    }
}

export namespace _MapOf {
    export type Constructors = _RecursiveMatcher.Constructors | '_MapOf';
    export type Interface = Omit<_MapOf, Constructors>;
}
@DartClass
export class _MapOf extends _RecursiveMatcher {
    keyMatcher : any;

    valueMatcher : any;

    constructor(keyMatcher : any,valueMatcher : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MapOf(keyMatcher : any,valueMatcher : any) {
        this.keyMatcher = keyMatcher;
        this.valueMatcher = valueMatcher;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describe(description : any) : any {
        return description.add('Map from ').addDescriptionOf(this.keyMatcher).add(' to ').addDescriptionOf(this.valueMatcher);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    populateMismatches(item : any,mismatches : core.DartList<(mismatchDescription : any) => any>) : void {
        if (isNot(item, core.DartMap<any,any>)) {
            mismatches.add(this.simpleDescription('is not a map'));
            return;
        }
        item.forEach((key : any,value : any) =>  {
            this.checkSubstructure(key,this.keyMatcher,mismatches,(description : any) =>  {
                return description.add('key ').addDescriptionOf(key);
            });
            this.checkSubstructure(value,this.valueMatcher,mismatches,(description : any) =>  {
                return description.add('field ').addDescriptionOf(key);
            });
        });
    }
}

export class properties {
    private static __$isBool : any;
    static get isBool() : any { 
        if (this.__$isBool===undefined) {
            this.__$isBool = new bare.createInstance(any,null);
        }
        return this.__$isBool;
    }
    static set isBool(__$value : any)  { 
        this.__$isBool = __$value;
    }

    private static __$isInt : any;
    static get isInt() : any { 
        if (this.__$isInt===undefined) {
            this.__$isInt = new bare.createInstance(any,null);
        }
        return this.__$isInt;
    }
    static set isInt(__$value : any)  { 
        this.__$isInt = __$value;
    }

    private static __$isNotification : any;
    static get isNotification() : any { 
        if (this.__$isNotification===undefined) {
            this.__$isNotification = new MatchesJsonObject('notification',new core.DartMap.literal([
                ['event',properties.isString]]),{
                optionalFields : new core.DartMap.literal([
                    ['params',isMap]])});
        }
        return this.__$isNotification;
    }
    static set isNotification(__$value : any)  { 
        this.__$isNotification = __$value;
    }

    private static __$isObject : any;
    static get isObject() : any { 
        if (this.__$isObject===undefined) {
            this.__$isObject = isMap;
        }
        return this.__$isObject;
    }
    static set isObject(__$value : any)  { 
        this.__$isObject = __$value;
    }

    private static __$isString : any;
    static get isString() : any { 
        if (this.__$isString===undefined) {
            this.__$isString = new bare.createInstance(any,null);
        }
        return this.__$isString;
    }
    static set isString(__$value : any)  { 
        this.__$isString = __$value;
    }

    private static __$isResponse : any;
    static get isResponse() : any { 
        if (this.__$isResponse===undefined) {
            this.__$isResponse = new MatchesJsonObject('response',new core.DartMap.literal([
                ['id',properties.isString]]),{
                optionalFields : new core.DartMap.literal([
                    ['result',anything],
                    ['error',lib3.properties.isRequestError]])});
        }
        return this.__$isResponse;
    }
    static set isResponse(__$value : any)  { 
        this.__$isResponse = __$value;
    }

}
