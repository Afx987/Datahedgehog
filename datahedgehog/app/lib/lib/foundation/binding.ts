/** Library asset:datahedgehog_monitor/lib/lib/foundation/binding.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as developer from "@dart2ts/dart/developer";
import * as lib4 from "./constants";
import * as lib5 from "./assertions";
import * as lib6 from "./debug";
import * as io from "@dart2ts/dart/io";

export var unlocked : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (!locked); */;
};
export var reassembleApplication : () => any = () =>  {
    return lockEvents(performReassemble);
};
export var performReassemble : () => any = () =>  {
    lib5.FlutterError.resetErrorCount();
    return op(Op.LT,async.Future<T>,);
    op(Op.GT,,.value());
};
export var registerSignalServiceExtension : (_namedArguments? : {name? : string,callback? : any}) => any = (_namedArguments? : {name? : string,callback? : any}) : any =>  {
    let {name,callback} = Object.assign({
    }, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (name != null); */;
    /* TODO (AssertStatementImpl) : assert (callback != null); */;
    registerServiceExtension({
        name : name,callback : (parameters : core.DartMap<string,string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
            await callback();
            return new core.DartMap.literal([
            ]);
        })())});
};
export var registerBoolServiceExtension : (_namedArguments? : {name? : string,getter? : <T>() => async.Future<boolean>,setter? : any}) => any = (_namedArguments? : {name? : string,getter? : <T>() => async.Future<boolean>,setter? : any}) : any =>  {
    let {name,getter,setter} = Object.assign({
    }, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (name != null); */;
    /* TODO (AssertStatementImpl) : assert (getter != null); */;
    /* TODO (AssertStatementImpl) : assert (setter != null); */;
    registerServiceExtension({
        name : name,callback : (parameters : core.DartMap<string,string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
            if (parameters.containsKey('enabled')) {
                await setter(parameters.get('enabled') == 'true');
                _postExtensionStateChangedEvent(name,await getter() ? 'true' : 'false');
            }
            return new core.DartMap.literal([
                ['enabled',await getter() ? 'true' : 'false']]);
        })())});
};
export var registerNumericServiceExtension : (_namedArguments? : {name? : string,getter? : <T>() => async.Future<double>,setter? : any}) => any = (_namedArguments? : {name? : string,getter? : <T>() => async.Future<double>,setter? : any}) : any =>  {
    let {name,getter,setter} = Object.assign({
    }, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (name != null); */;
    /* TODO (AssertStatementImpl) : assert (getter != null); */;
    /* TODO (AssertStatementImpl) : assert (setter != null); */;
    registerServiceExtension({
        name : name,callback : (parameters : core.DartMap<string,string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
            if (parameters.containsKey(name)) {
                await setter(core.DartDouble.parse(parameters.get(name)));
                _postExtensionStateChangedEvent(name,new core.DartDouble((await getter())).toString());
            }
            return new core.DartMap.literal([
                [name,new core.DartDouble((await getter())).toString()]]);
        })())});
};
export var _postExtensionStateChangedEvent : (name : string,value : any) => any = (name : string,value : any) : any =>  {
    postEvent('Flutter.ServiceExtensionStateChanged',new core.DartMap.literal([
        ['extension',`ext.flutter.${name}`],
        ['value',value]]));
};
export var postEvent : (eventKind : string,eventData : core.DartMap<string,any>) => any = (eventKind : string,eventData : core.DartMap<string,any>) : any =>  {
    developer.postEvent(eventKind,eventData);
};
export var registerStringServiceExtension : (_namedArguments? : {name? : string,getter? : <T>() => async.Future<string>,setter? : any}) => any = (_namedArguments? : {name? : string,getter? : <T>() => async.Future<string>,setter? : any}) : any =>  {
    let {name,getter,setter} = Object.assign({
    }, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (name != null); */;
    /* TODO (AssertStatementImpl) : assert (getter != null); */;
    /* TODO (AssertStatementImpl) : assert (setter != null); */;
    registerServiceExtension({
        name : name,callback : (parameters : core.DartMap<string,string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
            if (parameters.containsKey('value')) {
                await setter(parameters.get('value'));
                _postExtensionStateChangedEvent(name,await getter());
            }
            return new core.DartMap.literal([
                ['value',await getter()]]);
        })())});
};
export var registerServiceExtension : (_namedArguments? : {name? : string,callback? : (parameters : core.DartMap<string,string>) => async.Future<core.DartMap<string,any>>}) => any = (_namedArguments? : {name? : string,callback? : (parameters : core.DartMap<string,string>) => async.Future<core.DartMap<string,any>>}) : any =>  {
    let {name,callback} = Object.assign({
    }, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (name != null); */;
    /* TODO (AssertStatementImpl) : assert (callback != null); */;
    let methodName : string = `ext.flutter.${name}`;
    developer.registerExtension(methodName,(method : string,parameters : core.DartMap<string,string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
        /* TODO (AssertStatementImpl) : assert (method == methodName); */;
        /* TODO (AssertStatementImpl) : assert (() {if (debugInstrumentationEnabled) debugPrint('service extension method received: $method($parameters)'); return true;}()); */;
        op(Op.LT,await lib6.debugInstrumentAction,);
        op(Op.GT,,('Wait for outer event loop'));
        () =>  {
            return op(Op.LT,async.Future<T>,);
            op(Op.GT,,.delayed(core.DartDuration.zero));
        }
        let caughtException : any;
        let caughtStack : core.DartStackTrace;
        let result : core.DartMap<string,any>;
        try {
            result = await callback(parameters);
        } catch (__error__) {

            {
                let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                caughtException = exception;
                caughtStack = stack;
            }
        }
        if (op(Op.EQUALS,caughtException,null)) {
            result.set('type','_extensionType');
            result.set('method',method);
            return developer.ServiceExtensionResponse.result(json.encode(result));
        }else {
            lib5.FlutterError.reportError(lib5.FlutterErrorDetails({
                exception : caughtException,stack : caughtStack,context : `during a service extension callback for "${method}"`}));
            return developer.ServiceExtensionResponse.error(developer.ServiceExtensionResponse.extensionError,json.encode(new core.DartMap.literal([
                ['exception',caughtException.toString()],
                ['stack',caughtStack.toString()],
                ['method',method]])));
        }
    })()));
};
export var toString : () => string = () : string =>  {
    return `<${runtimeType}>`;
};
export var _exitApplication : () => any = () => new async.Future.fromPromise(( async () : Promise<any> =>  {
    io.exit(0);
})());
export namespace BindingBase {
    export type Constructors = 'BindingBase' | 'whenComplete';
    export type Interface = Omit<BindingBase, Constructors>;
}
@DartClass
export class BindingBase {
    constructor() {
    }
    @defaultConstructor
    BindingBase() {
        this._lockCount = 0;
        this.future = this.callback();
        developer.Timeline.startSync('Framework initialization');
        /* TODO (AssertStatementImpl) : assert (!_debugInitialized); */;
        this.initInstances();
        /* TODO (AssertStatementImpl) : assert (_debugInitialized); */;
        /* TODO (AssertStatementImpl) : assert (!_debugServiceExtensionsRegistered); */;
        this.initServiceExtensions();
        /* TODO (AssertStatementImpl) : assert (_debugServiceExtensionsRegistered); */;
        developer.postEvent('Flutter.FrameworkInitialization',new core.DartMap.literal([
        ]));
        developer.Timeline.finishSync();
    }
    private static __$_debugInitialized : boolean;
    static get _debugInitialized() : boolean { 
        if (this.__$_debugInitialized===undefined) {
            this.__$_debugInitialized = false;
        }
        return this.__$_debugInitialized;
    }
    static set _debugInitialized(__$value : boolean)  { 
        this.__$_debugInitialized = __$value;
    }

    private static __$_debugServiceExtensionsRegistered : boolean;
    static get _debugServiceExtensionsRegistered() : boolean { 
        if (this.__$_debugServiceExtensionsRegistered===undefined) {
            this.__$_debugServiceExtensionsRegistered = false;
        }
        return this.__$_debugServiceExtensionsRegistered;
    }
    static set _debugServiceExtensionsRegistered(__$value : boolean)  { 
        this.__$_debugServiceExtensionsRegistered = __$value;
    }

    get window() : any {
        return ui.window;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    initInstances() : any {
        /* TODO (AssertStatementImpl) : assert (!_debugInitialized); */;
        /* TODO (AssertStatementImpl) : assert (() {_debugInitialized = true; return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    initServiceExtensions() : any {
        /* TODO (AssertStatementImpl) : assert (!_debugServiceExtensionsRegistered); */;
        /* TODO (AssertStatementImpl) : assert (() {registerSignalServiceExtension(name: 'reassemble', callback: reassembleApplication); return true;}()); */;
        if (!lib4.properties.kReleaseMode) {
            registerSignalServiceExtension({
                name : 'exit',callback : _exitApplication});
            registerServiceExtension({
                name : 'saveCompilationTrace',callback : (parameters : core.DartMap<string,string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
                    return new core.DartMap.literal([
                        ['value',ui.saveCompilationTrace()]]);
                })())});
        }
        /* TODO (AssertStatementImpl) : assert (() {const String platformOverrideExtensionName = 'platformOverride'; registerServiceExtension(name: platformOverrideExtensionName, callback: (Map<String, String> parameters) async {if (parameters.containsKey('value')) {switch (parameters['value']) {case 'android': debugDefaultTargetPlatformOverride = TargetPlatform.android; break; case 'iOS': debugDefaultTargetPlatformOverride = TargetPlatform.iOS; break; case 'fuchsia': debugDefaultTargetPlatformOverride = TargetPlatform.fuchsia; break; case 'default':  default: debugDefaultTargetPlatformOverride = null;} _postExtensionStateChangedEvent(platformOverrideExtensionName, defaultTargetPlatform.toString().substring('$TargetPlatform.'.length)); await reassembleApplication();} return <String, dynamic> {'value' : defaultTargetPlatform.toString().substring('$TargetPlatform.'.length)};}); return true;}()); */;
        /* TODO (AssertStatementImpl) : assert (() {_debugServiceExtensionsRegistered = true; return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    get locked() : boolean {
        return this._lockCount > 0;
    }
    _lockCount : number;

    @DartPropertyAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    void : async.Future<any>;

    lockEvents(Future : any, : any, : any) {
    }
    callback() {
    }
     : developer.Timeline;

    startSync( : any) {
    }
     : any;

     : any;

    void : async.Future<any>;

    future;

     : any;

    @namedConstructor
    whenComplete( : () => any,_namedArguments? : {_lockCount? : any,? : any}) {
        let {_lockCount,} = Object.assign({
        }, _namedArguments );
        this._lockCount = 0;
        this.future = this.callback();
    }
    static whenComplete : new( : () => any,_namedArguments? : {_lockCount? : any,? : any}) => BindingBase;

     : any;

     : developer.Timeline;

    @Abstract
    finishSync(){ throw 'abstract'}
    @Abstract
    unlocked(){ throw 'abstract'}
}

export class properties {
    private static __$future;
    static get future() { 
        return this.__$future;
    }
    static set future(__$value : any)  { 
        this.__$future = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

}
