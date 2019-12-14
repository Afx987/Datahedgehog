/** Library asset:datahedgehog_monitor/lib/lib/_internal/js_runtime/lib/developer_patch.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var debugger : (_namedArguments? : {when? : boolean,message? : string}) => boolean = (_namedArguments? : {when? : boolean,message? : string}) : boolean =>  {
    let {when,message} = Object.assign({
        "when" : true}, _namedArguments );
    if (when) {
        debugger/* JS('', 'debugger') */;
    }
    return when;
};
export var inspect : (object : core.DartObject) => core.DartObject = (object : core.DartObject) : core.DartObject =>  {
    return object;
};
export var log : (message : string,_namedArguments? : {time? : core.DartDateTime,sequenceNumber? : number,level? : number,name? : string,zone? : any,error? : core.DartObject,stackTrace? : core.DartStackTrace}) => void = (message : string,_namedArguments? : {time? : core.DartDateTime,sequenceNumber? : number,level? : number,name? : string,zone? : any,error? : core.DartObject,stackTrace? : core.DartStackTrace}) : void =>  {
    let {time,sequenceNumber,level,name,zone,error,stackTrace} = Object.assign({
        "level" : 0,
        "name" : ''}, _namedArguments );
};
export var _lookupExtension : (method : string) => any = (method : string) : any =>  {
    return op(Op.INDEX,properties._extensions,method);
};
export var _registerExtension : (method : string,handler : any) => any = (method : string,handler : any) =>  {
    op(Op.INDEX_ASSIGN,properties._extensions,method,handler);
};
export var _postEvent : (eventKind : string,eventData : string) => void = (eventKind : string,eventData : string) : void =>  {
};
export var _isDartStreamEnabled : () => boolean = () : boolean =>  {
    return false;
};
export var _getTraceClock : () => number = () : number =>  {
    return properties._clockValue++;
};
export var _getThreadCpuClock : () => number = () : number =>  {
    return -1;
};
export var _reportCompleteEvent : (start : number,startCpu : number,category : string,name : string,argumentsAsJson : string) => void = (start : number,startCpu : number,category : string,name : string,argumentsAsJson : string) : void =>  {
};
export var _reportInstantEvent : (start : number,category : string,name : string,argumentsAsJson : string) => void = (start : number,category : string,name : string,argumentsAsJson : string) : void =>  {
};
export var _getNextAsyncId : () => number = () : number =>  {
    return 0;
};
export var _getIsolateNum : () => number = () : number =>  {
    return 0;
};
export var _reportTaskEvent : (start : number,taskId : number,phase : string,category : string,name : string,argumentsAsJson : string) => void = (start : number,taskId : number,phase : string,category : string,name : string,argumentsAsJson : string) : void =>  {
};
export var _getServiceMajorVersion : () => number = () : number =>  {
    return 0;
};
export var _getServiceMinorVersion : () => number = () : number =>  {
    return 0;
};
export var _getServerInfo : (sendPort : any) => void = (sendPort : any) : void =>  {
    sendPort.send(null);
};
export var _webServerControl : (sendPort : any,enable : boolean) => void = (sendPort : any,enable : boolean) : void =>  {
    sendPort.send(null);
};
export var _getIsolateIDFromSendPort : (sendPort : any) => string = (sendPort : any) : string =>  {
    return null;
};
export var getCurrentTag : () => UserTag = () : UserTag =>  {
    return properties._currentTag;
};
export namespace UserTag {
    export type Constructors = never;
    export type Interface = Omit<UserTag, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class UserTag {
    constructor(label : string) {
    }
    @defaultFactory
    static $UserTag(label : string) : UserTag {
        return new _FakeUserTag.$create(label);
    }
    @DartMethodAnnotation({
        library : 'dart:_js_helper',type : 'patch',value : {
            arguments : [],namedArguments : {
            }}})
    static get defaultTag() : UserTag {
        return _FakeUserTag._defaultTag;
    }
}

export namespace _FakeUserTag {
    export type Constructors = 'real';
    export type Interface = Omit<_FakeUserTag, Constructors>;
}
@DartClass
@Implements(UserTag)
export class _FakeUserTag implements UserTag.Interface {
    private static __$_instances : core.DartMap<any,any>;
    static get _instances() : core.DartMap<any,any> { 
        if (this.__$_instances===undefined) {
            this.__$_instances = new core.DartMap.literal([
            ]);
        }
        return this.__$_instances;
    }
    static set _instances(__$value : core.DartMap<any,any>)  { 
        this.__$_instances = __$value;
    }

    @namedConstructor
    real(label : string) {
        this.label = label;
    }
    static real : new(label : string) => _FakeUserTag;

    constructor(label : string) {
    }
    @defaultFactory
    static $_FakeUserTag(label : string) : _FakeUserTag {
        let existingTag = _FakeUserTag._instances.get(label);
        if (existingTag != null) {
            return existingTag;
        }
        if (_FakeUserTag._instances.length == UserTag.MAX_USER_TAGS) {
            throw new core.UnsupportedError(`UserTag instance limit (${UserTag.MAX_USER_TAGS}) reached.`);
        }
        let instance = new _FakeUserTag.real(label);
        _FakeUserTag._instances.set(label,instance);
        return instance;
    }
    label : string;

    makeCurrent() : UserTag {
        let old = properties._currentTag;
        properties._currentTag = this;
        return old;
    }
    private static __$_defaultTag : UserTag;
    static get _defaultTag() : UserTag { 
        if (this.__$_defaultTag===undefined) {
            this.__$_defaultTag = new _FakeUserTag('Default');
        }
        return this.__$_defaultTag;
    }
    static set _defaultTag(__$value : UserTag)  { 
        this.__$_defaultTag = __$value;
    }

}

export class properties {
    private static __$_extensions;
    static get _extensions() { 
        if (this.__$_extensions===undefined) {
            this.__$_extensions = new core.DartMap<string,any>();
        }
        return this.__$_extensions;
    }
    static set _extensions(__$value : any)  { 
        this.__$_extensions = __$value;
    }

    private static __$_clockValue : number;
    static get _clockValue() : number { 
        if (this.__$_clockValue===undefined) {
            this.__$_clockValue = 0;
        }
        return this.__$_clockValue;
    }
    static set _clockValue(__$value : number)  { 
        this.__$_clockValue = __$value;
    }

    private static __$_currentTag;
    static get _currentTag() { 
        if (this.__$_currentTag===undefined) {
            this.__$_currentTag = _FakeUserTag._defaultTag;
        }
        return this.__$_currentTag;
    }
    static set _currentTag(__$value : any)  { 
        this.__$_currentTag = __$value;
    }

}
