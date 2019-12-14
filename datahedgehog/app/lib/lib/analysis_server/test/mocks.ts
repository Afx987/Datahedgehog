/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/mocks.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts/dart/uri";

export var isResponseFailure : (id : string,code? : any) => any = (id : string,code? : any) : any =>  {
    return new _IsResponseFailure(id,code);
};
export var isResponseSuccess : (id : string) => any = (id : string) : any =>  {
    return new _IsResponseSuccess(id);
};
export var pumpEventQueue : (times? : number) => async.Future<any> = (times? : number) : async.Future<any> =>  {
    times = times || 5000;
    if (times == 0) return new async.Future.value();
    return new async.Future.delayed(core.DartDuration.ZERO,() =>  {
        return pumpEventQueue(times - 1);
    });
};
export namespace MockClassElement {
    export type Constructors = 'MockClassElement';
    export type Interface = Omit<MockClassElement, Constructors>;
}
@DartClass
@Implements(any)
export class MockClassElement extends any implements any.Interface {
    kind : any;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockClassElement() {
        this.kind = ElementKind.CLASS;
    }
}

export namespace MockCompilationUnitElement {
    export type Constructors = 'MockCompilationUnitElement';
    export type Interface = Omit<MockCompilationUnitElement, Constructors>;
}
@DartClass
@Implements(any)
export class MockCompilationUnitElement extends any implements any.Interface {
    kind : any;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockCompilationUnitElement() {
        this.kind = ElementKind.COMPILATION_UNIT;
    }
}

export namespace MockConstructorElement {
    export type Constructors = 'MockConstructorElement';
    export type Interface = Omit<MockConstructorElement, Constructors>;
}
@DartClass
@Implements(any)
export class MockConstructorElement extends any implements any.Interface {
    kind;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockConstructorElement() {
        this.kind = ElementKind.CONSTRUCTOR;
    }
}

export namespace MockFieldElement {
    export type Constructors = 'MockFieldElement';
    export type Interface = Omit<MockFieldElement, Constructors>;
}
@DartClass
@Implements(any)
export class MockFieldElement extends any implements any.Interface {
    kind : any;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockFieldElement() {
        this.kind = ElementKind.FIELD;
    }
}

export namespace MockFunctionElement {
    export type Constructors = 'MockFunctionElement';
    export type Interface = Omit<MockFunctionElement, Constructors>;
}
@DartClass
@Implements(any)
export class MockFunctionElement extends any implements any.Interface {
    kind : any;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockFunctionElement() {
        this.kind = ElementKind.FUNCTION;
    }
}

export namespace MockFunctionTypeAliasElement {
    export type Constructors = 'MockFunctionTypeAliasElement';
    export type Interface = Omit<MockFunctionTypeAliasElement, Constructors>;
}
@DartClass
@Implements(any)
export class MockFunctionTypeAliasElement extends any implements any.Interface {
    kind : any;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockFunctionTypeAliasElement() {
        this.kind = ElementKind.FUNCTION_TYPE_ALIAS;
    }
}

export namespace MockImportElement {
    export type Constructors = 'MockImportElement';
    export type Interface = Omit<MockImportElement, Constructors>;
}
@DartClass
@Implements(any)
export class MockImportElement extends any implements any.Interface {
    kind : any;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockImportElement() {
        this.kind = ElementKind.IMPORT;
    }
}

export namespace MockLibraryElement {
    export type Constructors = 'MockLibraryElement';
    export type Interface = Omit<MockLibraryElement, Constructors>;
}
@DartClass
@Implements(any)
export class MockLibraryElement extends any implements any.Interface {
    kind : any;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockLibraryElement() {
        this.kind = ElementKind.LIBRARY;
    }
}

export namespace MockLocalVariableElement {
    export type Constructors = 'MockLocalVariableElement';
    export type Interface = Omit<MockLocalVariableElement, Constructors>;
}
@DartClass
@Implements(any)
export class MockLocalVariableElement extends any implements any.Interface {
    kind : any;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockLocalVariableElement() {
        this.kind = ElementKind.LOCAL_VARIABLE;
    }
}

export namespace MockLogger {
    export type Constructors = 'MockLogger';
    export type Interface = Omit<MockLogger, Constructors>;
}
@DartClass
@Implements(any)
export class MockLogger extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockLogger() {
    }
}

export namespace MockPackageMapProvider {
    export type Constructors = 'MockPackageMapProvider';
    export type Interface = Omit<MockPackageMapProvider, Constructors>;
}
@DartClass
@Implements(any)
export class MockPackageMapProvider implements any.Interface {
    packageMap : core.DartMap<string,core.DartList<any>>;

    packageMaps : core.DartMap<string,core.DartMap<string,core.DartList<any>>>;

    dependencies : core.DartSet<string>;

    computeCount : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computePackageMap(folder : any) : any {
        ++this.computeCount;
        if (this.packageMaps != null) {
            return new bare.createInstance(any,null,this.packageMaps.get(folder.path),this.dependencies);
        }
        return new bare.createInstance(any,null,this.packageMap,this.dependencies);
    }
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    constructor() {
    }
    @defaultConstructor
    MockPackageMapProvider() {
        this.packageMap = new core.DartMap.literal([
        ]);
        this.packageMaps = null;
        this.dependencies = new core.DartSet<string>();
        this.computeCount = 0;
    }
}

export namespace MockParameterElement {
    export type Constructors = 'MockParameterElement';
    export type Interface = Omit<MockParameterElement, Constructors>;
}
@DartClass
@Implements(any)
export class MockParameterElement extends any implements any.Interface {
    kind : any;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockParameterElement() {
        this.kind = ElementKind.PARAMETER;
    }
}

export namespace MockPropertyAccessorElement {
    export type Constructors = 'MockPropertyAccessorElement';
    export type Interface = Omit<MockPropertyAccessorElement, Constructors>;
}
@DartClass
@Implements(any)
export class MockPropertyAccessorElement extends any implements any.Interface {
    kind : any;

    constructor(kind : any) {
    }
    @defaultConstructor
    MockPropertyAccessorElement(kind : any) {
        this.kind = kind;
    }
}

export namespace MockServerChannel {
    export type Constructors = 'MockServerChannel';
    export type Interface = Omit<MockServerChannel, Constructors>;
}
@DartClass
@Implements(any)
export class MockServerChannel implements any.Interface {
    requestController : async.DartStreamController<any>;

    responseController : async.DartStreamController<any>;

    notificationController : async.DartStreamController<any>;

    responsesReceived : core.DartList<any>;

    notificationsReceived : core.DartList<any>;

    _closed : boolean;

    constructor() {
    }
    @defaultConstructor
    MockServerChannel() {
        this.requestController = new async.DartStreamController<any>();
        this.responseController = new async.DartStreamController.broadcast();
        this.notificationController = new async.DartStreamController<any>({
            sync : true});
        this.responsesReceived = new core.DartList.literal();
        this.notificationsReceived = new core.DartList.literal();
        this._closed = false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    close() : void {
        this._closed = true;
    }
    expectMsgCount(_namedArguments? : {responseCount? : any,notificationCount? : any}) : void {
        let {responseCount,notificationCount} = Object.assign({
            "responseCount" : 0,
            "notificationCount" : 0}, _namedArguments );
        expect(this.responsesReceived,hasLength(responseCount));
        expect(this.notificationsReceived,hasLength(notificationCount));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    listen(onRequest : (request : any) => void,_namedArguments? : {onError? : Function,onDone? : () => void}) : void {
        let {onError,onDone} = Object.assign({
        }, _namedArguments );
        this.requestController.stream.listen(onRequest,{
            onError : onError,onDone : onDone});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    sendNotification(notification : any) : void {
        if (this._closed) {
            return;
        }
        this.notificationsReceived.add(notification);
        this.notificationController.add(notification);
    }
    sendRequest(request : any) : async.Future<any> {
        if (this._closed) {
            throw new core.Exception('sendRequest after connection closed');
        }
        new async.Future<any>(() =>  {
            return this.requestController.add(request);
        });
        return this.waitForResponse(request);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    sendResponse(response : any) : void {
        if (this._closed) {
            return;
        }
        this.responsesReceived.add(response);
        new async.Future<any>(() =>  {
            return this.responseController.add(response);
        });
    }
    waitForResponse(request : any) : async.Future<any> {
        let id : string = request.id;
        return new async.Future<any>(() =>  {
            return this.responseController.stream.firstWhere((response : any) =>  {
                return op(Op.EQUALS,response.id,id);
            }) as async.Future<any>;
        });
    }
}

export namespace MockServerOperation {
    export type Constructors = 'MockServerOperation';
    export type Interface = Omit<MockServerOperation, Constructors>;
}
@DartClass
@Implements(any)
export class MockServerOperation implements any.Interface {
    priority : any;

    _perform : (server : any) => void;

    constructor(priority : any,_perform : (server : any) => void) {
    }
    @defaultConstructor
    MockServerOperation(priority : any,_perform : (server : any) => void) {
        this.priority = priority;
        this._perform = _perform;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get context() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isContinue() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    perform(server : any) : void {
        return this.this._perform(server);
    }
}

export namespace MockSocket {
    export type Constructors = 'MockSocket';
    export type Interface<T> = Omit<MockSocket<T>, Constructors>;
}
@DartClass
@Implements(io.WebSocket)
export class MockSocket<T> implements io.WebSocket.Interface {
    controller : async.DartStreamController<T>;

    twin : MockSocket<T>;

    stream : async.DartStream<T>;

    constructor() {
    }
    @defaultConstructor
    MockSocket() {
        this.controller = new async.DartStreamController<T>();
    }
    @namedFactory
    static $pair<T>() : MockSocket<T> {
        let socket1 : MockSocket<T> = new MockSocket<T>();
        let socket2 : MockSocket<T> = new MockSocket<T>();
        socket1.twin = socket2;
        socket2.twin = socket1;
        socket1.stream = socket2.controller.stream;
        socket2.stream = socket1.controller.stream;
        return socket1;
    }
    static pair : new<T>() => MockSocket<T>;

    add(text : any) : void {
        return this.controller.add(text as T);
    }
    allowMultipleListeners() : void {
        this.stream = this.stream.asBroadcastStream();
    }
    close(code? : number,reason? : string) : async.Future<any> {
        return this.controller.close().then((_ : any) =>  {
            return this.twin.controller.close();
        });
    }
    listen(onData : <T>(event : any) => void,_namedArguments? : {onError? : Function,onDone? : <T>() => void,cancelOnError? : boolean}) : async.DartStreamSubscription<T> {
        let {onError,onDone,cancelOnError} = Object.assign({
        }, _namedArguments );
        return this.stream.listen((data : T) =>  {
            return onData(data);
        },{
            onError : onError,onDone : onDone,cancelOnError : cancelOnError});
    }
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    where(test : <T>(t : any) => boolean) : async.DartStream<T> {
        return this.stream.where((data : T) =>  {
            return test(data);
        });
    }
}

export namespace MockTopLevelVariableElement {
    export type Constructors = 'MockTopLevelVariableElement';
    export type Interface = Omit<MockTopLevelVariableElement, Constructors>;
}
@DartClass
@Implements(any)
export class MockTopLevelVariableElement extends any implements any.Interface {
    kind : any;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockTopLevelVariableElement() {
        this.kind = ElementKind.TOP_LEVEL_VARIABLE;
    }
}

export namespace MockTypeParameterElement {
    export type Constructors = 'MockTypeParameterElement';
    export type Interface = Omit<MockTypeParameterElement, Constructors>;
}
@DartClass
@Implements(any)
export class MockTypeParameterElement extends any implements any.Interface {
    kind : any;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockTypeParameterElement() {
        this.kind = ElementKind.TYPE_PARAMETER;
    }
}

export namespace NoResponseException {
    export type Constructors = 'NoResponseException';
    export type Interface = Omit<NoResponseException, Constructors>;
}
@DartClass
@Implements(core.Exception)
export class NoResponseException implements core.Exception.Interface {
    request : any;

    constructor(request : any) {
    }
    @defaultConstructor
    NoResponseException(request : any) {
        this.request = request;
    }
    toString() : string {
        return `NoResponseException after request ${this.request.toJson()}`;
    }
}

export namespace StringTypedMock {
    export type Constructors = 'StringTypedMock';
    export type Interface = Omit<StringTypedMock, Constructors>;
}
@DartClass
export class StringTypedMock extends any {
    _toString : string;

    constructor(_toString : string) {
    }
    @defaultConstructor
    StringTypedMock(_toString : string) {
        this._toString = _toString;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        if (this._toString != null) {
            return this._toString;
        }
        return super.toString();
    }
}

export namespace _IsResponseFailure {
    export type Constructors = '_IsResponseFailure';
    export type Interface = Omit<_IsResponseFailure, Constructors>;
}
@DartClass
export class _IsResponseFailure extends any {
    _id : string;

    _code : any;

    constructor(_id : string,_code : any) {
    }
    @defaultConstructor
    _IsResponseFailure(_id : string,_code : any) {
        this._id = _id;
        this._code = _code;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describe(description : any) : any {
        description = description.add(`response with identifier "${this._id}" and an error`);
        if (this._code != null) {
            description = description.add(` with code ${this._code.name}`);
        }
        return description;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describeMismatch(item : any,mismatchDescription : any,matchState : core.DartMap<any,any>,verbose : boolean) : any {
        let response : any = item;
        let id = response.id;
        let error : any = response.error;
        mismatchDescription.add(`has identifier "${id}"`);
        if (op(Op.EQUALS,error,null)) {
            mismatchDescription.add(' and has no error');
        }else {
            mismatchDescription.add(` and has error code ${response.error.code.name}`);
        }
        return mismatchDescription;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    matches(item : any,matchState : core.DartMap<any,any>) : boolean {
        let response : any = item;
        if (response.id != this._id || op(Op.EQUALS,response.error,null)) {
            return false;
        }
        if (this._code != null && response.error.code != this._code) {
            return false;
        }
        return true;
    }
}

export namespace _IsResponseSuccess {
    export type Constructors = '_IsResponseSuccess';
    export type Interface = Omit<_IsResponseSuccess, Constructors>;
}
@DartClass
export class _IsResponseSuccess extends any {
    _id : string;

    constructor(_id : string) {
    }
    @defaultConstructor
    _IsResponseSuccess(_id : string) {
        this._id = _id;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describe(description : any) : any {
        return description.addDescriptionOf(`response with identifier "${this._id}" and without error`);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describeMismatch(item : any,mismatchDescription : any,matchState : core.DartMap<any,any>,verbose : boolean) : any {
        let response : any = item;
        if (op(Op.EQUALS,response,null)) {
            mismatchDescription.add('is null response');
        }else {
            let id = response.id;
            let error : any = response.error;
            mismatchDescription.add(`has identifier "${id}"`);
            if (error != null) {
                mismatchDescription.add(` and has error ${error}`);
            }
        }
        return mismatchDescription;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    matches(item : any,matchState : core.DartMap<any,any>) : boolean {
        let response : any = item;
        return response != null && op(Op.EQUALS,response.id,this._id) && op(Op.EQUALS,response.error,null);
    }
}

export namespace MockAnalysisContext {
    export type Constructors = StringTypedMock.Constructors | 'MockAnalysisContext';
    export type Interface = Omit<MockAnalysisContext, Constructors>;
}
@DartClass
@Implements(any)
export class MockAnalysisContext extends StringTypedMock implements any.Interface {
    constructor(name : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockAnalysisContext(name : string) {
        super.StringTypedMock(name);
    }
}

export namespace MockElement {
    export type Constructors = StringTypedMock.Constructors | 'MockElement';
    export type Interface = Omit<MockElement, Constructors>;
}
@DartClass
@Implements(any)
export class MockElement extends StringTypedMock implements any.Interface {
    constructor(name? : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockElement(name? : string) {
        name = name || '<element>';
        super.StringTypedMock(name);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get displayName() : string {
        return this._toString;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return this._toString;
    }
}

export namespace MockMethodElement {
    export type Constructors = StringTypedMock.Constructors | 'MockMethodElement';
    export type Interface = Omit<MockMethodElement, Constructors>;
}
@DartClass
@Implements(any)
export class MockMethodElement extends StringTypedMock implements any.Interface {
    kind;

    constructor(name? : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockMethodElement(name? : string) {
        name = name || 'method';
        this.kind = ElementKind.METHOD;
        super.StringTypedMock(name);
    }
}

export namespace MockSource {
    export type Constructors = StringTypedMock.Constructors | 'MockSource';
    export type Interface = Omit<MockSource, Constructors>;
}
@DartClass
@Implements(any)
export class MockSource extends StringTypedMock implements any.Interface {
    constructor(name? : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MockSource(name? : string) {
        name = name || 'mocked.dart';
        super.StringTypedMock(name);
    }
}

export class properties {
    static get sdkPath() : string {
        let sdkUri : lib4.Uri = io.Platform.script.resolve('../../../sdk/');
        let sdkDir : io.Directory = new io.Directory.fromUri(sdkUri);
        if (!sdkDir.existsSync()) {
            throw `Specified Dart SDK does not exist: ${sdkDir}`;
        }
        return sdkDir.path;
    }
}
