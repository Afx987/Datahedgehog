/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/protocol_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as convert from "@dart2ts/dart/convert";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(NotificationTest);
        defineReflectiveTests(RequestTest);
        defineReflectiveTests(RequestErrorTest);
        defineReflectiveTests(ResponseTest);
    });
};
export namespace InvalidParameterResponseMatcher {
    export type Constructors = 'InvalidParameterResponseMatcher';
    export type Interface = Omit<InvalidParameterResponseMatcher, Constructors>;
}
@DartClass
export class InvalidParameterResponseMatcher extends any {
    private static __$ERROR_CODE : string;
    static get ERROR_CODE() : string { 
        if (this.__$ERROR_CODE===undefined) {
            this.__$ERROR_CODE = 'INVALID_PARAMETER';
        }
        return this.__$ERROR_CODE;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describe(description : any) : any {
        return description.add(`an 'invalid parameter' response (code ${InvalidParameterResponseMatcher.ERROR_CODE})`);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    matches(item : any,matchState : core.DartMap<any,any>) : boolean {
        if (isNot(item, any)) {
            return false;
        }
        let response = item.response;
        if (isNot(response, any)) {
            return false;
        }
        if (isNot(response.error, any)) {
            return false;
        }
        let requestError : any = response.error;
        if (requestError.code != InvalidParameterResponseMatcher.ERROR_CODE) {
            return false;
        }
        return true;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InvalidParameterResponseMatcher() {
    }
}

export namespace NotificationTest {
    export type Constructors = 'NotificationTest';
    export type Interface = Omit<NotificationTest, Constructors>;
}
@DartClass
export class NotificationTest {
    test_fromJson() : void {
        let original : any = new bare.createInstance(any,null,'foo');
        let notification : any = new bare.createInstance(any,null,original.toJson());
        expect(notification.event,equals('foo'));
        expect(notification.toJson().keys,isNot(contains('params')));
    }
    test_fromJson_withParams() : void {
        let original : any = new bare.createInstance(any,null,'foo',new core.DartMap.literal([
            ['x','y']]));
        let notification : any = new bare.createInstance(any,null,original.toJson());
        expect(notification.event,equals('foo'));
        expect(op(Op.INDEX,notification.toJson(),'params'),equals(new core.DartMap.literal([
            ['x','y']])));
    }
    test_toJson_noParams() : void {
        let notification : any = new bare.createInstance(any,null,'foo');
        expect(notification.event,equals('foo'));
        expect(notification.toJson().keys,isNot(contains('params')));
        expect(notification.toJson(),equals(new core.DartMap.literal([
            ['event','foo']])));
    }
    test_toJson_withParams() : void {
        let notification : any = new bare.createInstance(any,null,'foo',new core.DartMap.literal([
            ['x','y']]));
        expect(notification.event,equals('foo'));
        expect(op(Op.INDEX,notification.toJson(),'params'),equals(new core.DartMap.literal([
            ['x','y']])));
        expect(notification.toJson(),equals(new core.DartMap.literal([
            ['event','foo'],
            ['params',new core.DartMap.literal([
                ['x','y']])]])));
    }
    constructor() {
    }
    @defaultConstructor
    NotificationTest() {
    }
}

export namespace RequestErrorTest {
    export type Constructors = 'RequestErrorTest';
    export type Interface = Omit<RequestErrorTest, Constructors>;
}
@DartClass
export class RequestErrorTest {
    test_create() : void {
        let error : any = new bare.createInstance(any,null,RequestErrorCode.INVALID_REQUEST,'msg');
        expect(error.code,RequestErrorCode.INVALID_REQUEST);
        expect(error.message,"msg");
        expect(error.toJson(),equals(new core.DartMap.literal([
            [CODE,'INVALID_REQUEST'],
            [MESSAGE,"msg"]])));
    }
    test_fromJson() : void {
        let trace = 'a stack trace\nfoo';
        let json = new core.DartMap.literal([
            [CODE,RequestErrorCode.INVALID_PARAMETER.name],
            [MESSAGE,'foo'],
            [STACK_TRACE,trace]]);
        let error : any = new bare.createInstance(any,null,new bare.createInstance(any,null,null),'',json);
        expect(error.code,RequestErrorCode.INVALID_PARAMETER);
        expect(error.message,"foo");
        expect(error.stackTrace,trace);
    }
    test_toJson() : void {
        let trace = 'a stack trace\nbar';
        let error : any = new bare.createInstance(any,null,RequestErrorCode.UNKNOWN_REQUEST,'msg',{
            stackTrace : trace});
        expect(error.toJson(),new core.DartMap.literal([
            [CODE,'UNKNOWN_REQUEST'],
            [MESSAGE,'msg'],
            [STACK_TRACE,trace]]));
    }
    constructor() {
    }
    @defaultConstructor
    RequestErrorTest() {
    }
}

export namespace RequestTest {
    export type Constructors = 'RequestTest';
    export type Interface = Omit<RequestTest, Constructors>;
}
@DartClass
export class RequestTest {
    test_fromJson() : void {
        let original : any = new bare.createInstance(any,null,'one','aMethod');
        let json : string = convert.properties.JSON.encode(original.toJson());
        let request : any = new bare.createInstance(any,null,json);
        expect(request.id,equals('one'));
        expect(request.method,equals('aMethod'));
        expect(request.clientRequestTime,isNull);
    }
    test_fromJson_invalidId() : void {
        let json : string = '{"id":{"one":"two"},"method":"aMethod","params":{"foo":"bar"}}';
        let request : any = new bare.createInstance(any,null,json);
        expect(request,isNull);
    }
    test_fromJson_invalidMethod() : void {
        let json : string = '{"id":"one","method":{"boo":"aMethod"},"params":{"foo":"bar"}}';
        let request : any = new bare.createInstance(any,null,json);
        expect(request,isNull);
    }
    test_fromJson_invalidParams() : void {
        let json : string = '{"id":"one","method":"aMethod","params":"foobar"}';
        let request : any = new bare.createInstance(any,null,json);
        expect(request,isNull);
    }
    test_fromJson_withBadClientTime() : void {
        let original : any = new bare.createInstance(any,null,'one','aMethod',null,347);
        let map : core.DartMap<string,core.DartObject> = original.toJson();
        map.set(Request.CLIENT_REQUEST_TIME,'347');
        let json : string = convert.properties.JSON.encode(map);
        let request : any = new bare.createInstance(any,null,json);
        expect(request,isNull);
    }
    test_fromJson_withClientTime() : void {
        let original : any = new bare.createInstance(any,null,'one','aMethod',null,347);
        let json : string = convert.properties.JSON.encode(original.toJson());
        let request : any = new bare.createInstance(any,null,json);
        expect(request.id,equals('one'));
        expect(request.method,equals('aMethod'));
        expect(request.clientRequestTime,347);
    }
    test_fromJson_withParams() : void {
        let original : any = new bare.createInstance(any,null,'one','aMethod',new core.DartMap.literal([
            ['foo','bar']]));
        let json : string = convert.properties.JSON.encode(original.toJson());
        let request : any = new bare.createInstance(any,null,json);
        expect(request.id,equals('one'));
        expect(request.method,equals('aMethod'));
        expect(op(Op.INDEX,request.toJson(),'params'),equals(new core.DartMap.literal([
            ['foo','bar']])));
    }
    test_toJson() : void {
        let request : any = new bare.createInstance(any,null,'one','aMethod');
        expect(request.toJson(),equals(new core.DartMap.literal([
            [Request.ID,'one'],
            [Request.METHOD,'aMethod']])));
    }
    test_toJson_withParams() : void {
        let request : any = new bare.createInstance(any,null,'one','aMethod',new core.DartMap.literal([
            ['foo','bar']]));
        expect(request.toJson(),equals(new core.DartMap.literal([
            [Request.ID,'one'],
            [Request.METHOD,'aMethod'],
            [Request.PARAMS,new core.DartMap.literal([
                ['foo','bar']])]])));
    }
    constructor() {
    }
    @defaultConstructor
    RequestTest() {
    }
}

export namespace ResponseTest {
    export type Constructors = 'ResponseTest';
    export type Interface = Omit<ResponseTest, Constructors>;
}
@DartClass
export class ResponseTest {
    test_create_invalidRequestFormat() : void {
        let response : any = new bare.createInstance(any,null);
        expect(response.id,equals(''));
        expect(response.error,isNotNull);
        expect(response.toJson(),equals(new core.DartMap.literal([
            [Response.ID,''],
            [Response.ERROR,new core.DartMap.literal([
                ['code','INVALID_REQUEST'],
                ['message','Invalid request']])]])));
    }
    test_create_unanalyzedPriorityFiles() : void {
        let response : any = new bare.createInstance(any,null,'0','file list');
        expect(response.id,equals('0'));
        expect(response.error,isNotNull);
        expect(response.toJson(),equals(new core.DartMap.literal([
            [Response.ID,'0'],
            [Response.ERROR,new core.DartMap.literal([
                ['code','UNANALYZED_PRIORITY_FILES'],
                ['message',"Unanalyzed files cannot be a priority: 'file list'"]])]])));
    }
    test_create_unknownRequest() : void {
        let response : any = new bare.createInstance(any,null,new bare.createInstance(any,null,'0',''));
        expect(response.id,equals('0'));
        expect(response.error,isNotNull);
        expect(response.toJson(),equals(new core.DartMap.literal([
            [Response.ID,'0'],
            [Response.ERROR,new core.DartMap.literal([
                ['code','UNKNOWN_REQUEST'],
                ['message','Unknown request']])]])));
    }
    test_fromJson() : void {
        let original : any = new bare.createInstance(any,null,'myId');
        let response : any = new bare.createInstance(any,null,original.toJson());
        expect(response.id,equals('myId'));
    }
    test_fromJson_withError() : void {
        let original : any = new bare.createInstance(any,null);
        let response : any = new bare.createInstance(any,null,original.toJson());
        expect(response.id,equals(''));
        expect(response.error,isNotNull);
        let error : any = response.error;
        expect(error.code,equals(RequestErrorCode.INVALID_REQUEST));
        expect(error.message,equals('Invalid request'));
    }
    test_fromJson_withResult() : void {
        let original : any = new bare.createInstance(any,null,'myId',{
            result : new core.DartMap.literal([
                ['foo','bar']])});
        let response : any = new bare.createInstance(any,null,original.toJson());
        expect(response.id,equals('myId'));
        let result : core.DartMap<string,core.DartObject> = op(Op.INDEX,response.toJson(),'result') as core.DartMap<string,core.DartObject>;
        expect(result.length,equals(1));
        expect(result.get('foo'),equals('bar'));
    }
    constructor() {
    }
    @defaultConstructor
    ResponseTest() {
    }
}

export class properties {
    private static __$_throwsRequestFailure : any;
    static get _throwsRequestFailure() : any { 
        if (this.__$_throwsRequestFailure===undefined) {
            this.__$_throwsRequestFailure = throwsA(new bare.createInstance(any,null));
        }
        return this.__$_throwsRequestFailure;
    }
    static set _throwsRequestFailure(__$value : any)  { 
        this.__$_throwsRequestFailure = __$value;
    }

}
