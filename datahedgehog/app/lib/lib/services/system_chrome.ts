/** Library asset:datahedgehog_monitor/lib/lib/services/system_chrome.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./system_channels";

export var _stringify : (list : core.DartList<any>) => core.DartList<string> = (list : core.DartList<any>) : core.DartList<string> =>  {
    let result : core.DartList<string> = new core.DartList.literal<string>();
    for(let item of list) result.add(item.toString());
    return result;
};
export enum DeviceOrientation {
    portraitUp,
    landscapeLeft,
    portraitDown,
    landscapeRight
}

export namespace ApplicationSwitcherDescription {
    export type Constructors = 'ApplicationSwitcherDescription';
    export type Interface = Omit<ApplicationSwitcherDescription, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class ApplicationSwitcherDescription {
    constructor(_namedArguments? : {label? : string,primaryColor? : number}) {
    }
    @defaultConstructor
    ApplicationSwitcherDescription(_namedArguments? : {label? : string,primaryColor? : number}) {
        let {label,primaryColor} = Object.assign({
        }, _namedArguments );
        this.label = label;
        this.primaryColor = primaryColor;
    }
    label : string;

    primaryColor : number;

}

export enum SystemUiOverlay {
    top,
    bottom
}

export namespace SystemUiOverlayStyle {
    export type Constructors = 'SystemUiOverlayStyle';
    export type Interface = Omit<SystemUiOverlayStyle, Constructors>;
}
@DartClass
export class SystemUiOverlayStyle {
    constructor(_namedArguments? : {systemNavigationBarColor? : any,systemNavigationBarDividerColor? : any,systemNavigationBarIconBrightness? : any,statusBarColor? : any,statusBarBrightness? : any,statusBarIconBrightness? : any}) {
    }
    @defaultConstructor
    SystemUiOverlayStyle(_namedArguments? : {systemNavigationBarColor? : any,systemNavigationBarDividerColor? : any,systemNavigationBarIconBrightness? : any,statusBarColor? : any,statusBarBrightness? : any,statusBarIconBrightness? : any}) {
        let {systemNavigationBarColor,systemNavigationBarDividerColor,systemNavigationBarIconBrightness,statusBarColor,statusBarBrightness,statusBarIconBrightness} = Object.assign({
        }, _namedArguments );
        this.systemNavigationBarColor = systemNavigationBarColor;
        this.systemNavigationBarDividerColor = systemNavigationBarDividerColor;
        this.systemNavigationBarIconBrightness = systemNavigationBarIconBrightness;
        this.statusBarColor = statusBarColor;
        this.statusBarBrightness = statusBarBrightness;
        this.statusBarIconBrightness = statusBarIconBrightness;
    }
    systemNavigationBarColor : any;

    systemNavigationBarDividerColor : any;

    systemNavigationBarIconBrightness : any;

    statusBarColor : any;

    statusBarBrightness : any;

    statusBarIconBrightness : any;

    private static __$light : SystemUiOverlayStyle;
    static get light() : SystemUiOverlayStyle { 
        if (this.__$light===undefined) {
            this.__$light = SystemUiOverlayStyle({
                systemNavigationBarColor : Color(4278190080),systemNavigationBarDividerColor : null,statusBarColor : null,systemNavigationBarIconBrightness : Brightness.light,statusBarIconBrightness : Brightness.light,statusBarBrightness : Brightness.dark});
        }
        return this.__$light;
    }

    private static __$dark : SystemUiOverlayStyle;
    static get dark() : SystemUiOverlayStyle { 
        if (this.__$dark===undefined) {
            this.__$dark = SystemUiOverlayStyle({
                systemNavigationBarColor : Color(4278190080),systemNavigationBarDividerColor : null,statusBarColor : null,systemNavigationBarIconBrightness : Brightness.light,statusBarIconBrightness : Brightness.dark,statusBarBrightness : Brightness.light});
        }
        return this.__$dark;
    }

    _toMap() : core.DartMap<string,any> {
        return new core.DartMap.literal([
            ['systemNavigationBarColor',((t)=>(!!t)?t.value:null)(this.systemNavigationBarColor)],
            ['systemNavigationBarDividerColor',((t)=>(!!t)?t.value:null)(this.systemNavigationBarDividerColor)],
            ['statusBarColor',((t)=>(!!t)?t.value:null)(this.statusBarColor)],
            ['statusBarBrightness',((_874_)=>(!!_874_)?_874_.toString():null)(this.statusBarBrightness)],
            ['statusBarIconBrightness',((_875_)=>(!!_875_)?_875_.toString():null)(this.statusBarIconBrightness)],
            ['systemNavigationBarIconBrightness',((_876_)=>(!!_876_)?_876_.toString():null)(this.systemNavigationBarIconBrightness)]]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this._toMap().toString();
    }
    copyWith(_namedArguments? : {systemNavigationBarColor? : any,systemNavigationBarDividerColor? : any,statusBarColor? : any,statusBarBrightness? : any,statusBarIconBrightness? : any,systemNavigationBarIconBrightness? : any}) : SystemUiOverlayStyle {
        let {systemNavigationBarColor,systemNavigationBarDividerColor,statusBarColor,statusBarBrightness,statusBarIconBrightness,systemNavigationBarIconBrightness} = Object.assign({
        }, _namedArguments );
        return SystemUiOverlayStyle({
            systemNavigationBarColor : (systemNavigationBarColor || this.systemNavigationBarColor),systemNavigationBarDividerColor : (systemNavigationBarDividerColor || this.systemNavigationBarDividerColor),statusBarColor : (statusBarColor || this.statusBarColor),statusBarIconBrightness : (statusBarIconBrightness || this.statusBarIconBrightness),statusBarBrightness : (statusBarBrightness || this.statusBarBrightness),systemNavigationBarIconBrightness : (systemNavigationBarIconBrightness || this.systemNavigationBarIconBrightness)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.systemNavigationBarColor,this.systemNavigationBarDividerColor,this.statusBarColor,this.statusBarBrightness,this.statusBarIconBrightness,this.systemNavigationBarIconBrightness);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : SystemUiOverlayStyle = other;
        return op(Op.EQUALS,typedOther.systemNavigationBarColor,this.systemNavigationBarColor) && op(Op.EQUALS,typedOther.systemNavigationBarDividerColor,this.systemNavigationBarDividerColor) && op(Op.EQUALS,typedOther.statusBarColor,this.statusBarColor) && op(Op.EQUALS,typedOther.statusBarIconBrightness,this.statusBarIconBrightness) && op(Op.EQUALS,typedOther.statusBarBrightness,this.statusBarBrightness) && op(Op.EQUALS,typedOther.systemNavigationBarIconBrightness,this.systemNavigationBarIconBrightness);
    }
}

export namespace SystemChrome {
    export type Constructors = '_';
    export type Interface = Omit<SystemChrome, Constructors>;
}
@DartClass
export class SystemChrome {
    @namedConstructor
    _() {
    }
    static _ : new() => SystemChrome;

    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

    setPreferredOrientations(orientations : core.DartList<DeviceOrientation>) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            op(Op.LT,await lib3.SystemChannels.platform.invokeMethod.bind(lib3.SystemChannels.platform),);
            op(Op.GT,,('SystemChrome.setPreferredOrientations'));
            _stringify(orientations);
            ;
        } )());
    }

    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

    setApplicationSwitcherDescription(description : ApplicationSwitcherDescription) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            op(Op.LT,await lib3.SystemChannels.platform.invokeMethod.bind(lib3.SystemChannels.platform),);
            op(Op.GT,,('SystemChrome.setApplicationSwitcherDescription'));
            new core.DartMap.literal([
                ['label',description.label],
                ['primaryColor',description.primaryColor]]);
            ;
        } )());
    }

    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

    setEnabledSystemUIOverlays(overlays : core.DartList<SystemUiOverlay>) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            op(Op.LT,await lib3.SystemChannels.platform.invokeMethod.bind(lib3.SystemChannels.platform),);
            op(Op.GT,,('SystemChrome.setEnabledSystemUIOverlays'));
            _stringify(overlays);
            ;
        } )());
    }

    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

    restoreSystemUIOverlays() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            op(Op.LT,await lib3.SystemChannels.platform.invokeMethod.bind(lib3.SystemChannels.platform),);
            op(Op.GT,,('SystemChrome.restoreSystemUIOverlays'));
            null;
            ;
        } )());
    }

    static setSystemUIOverlayStyle(style : SystemUiOverlayStyle) : any {
        /* TODO (AssertStatementImpl) : assert (style != null); */;
        if (SystemChrome._pendingStyle != null) {
            SystemChrome._pendingStyle = style;
            return;
        }
        if (op(Op.EQUALS,style,SystemChrome._latestStyle)) {
            return;
        }
        SystemChrome._pendingStyle = style;
        async.scheduleMicrotask(() =>  {
            /* TODO (AssertStatementImpl) : assert (_pendingStyle != null); */;
            if (SystemChrome._pendingStyle != SystemChrome._latestStyle) {
                op(Op.LT,lib3.SystemChannels.platform.invokeMethod.bind(lib3.SystemChannels.platform),);
                op(Op.GT,,('SystemChrome.setSystemUIOverlayStyle'));
                SystemChrome._pendingStyle._toMap();
                ;
                SystemChrome._latestStyle = SystemChrome._pendingStyle;
            }
            SystemChrome._pendingStyle = null;
        });
    }
    private static __$_pendingStyle : SystemUiOverlayStyle;
    static get _pendingStyle() : SystemUiOverlayStyle { 
        return this.__$_pendingStyle;
    }
    static set _pendingStyle(__$value : SystemUiOverlayStyle)  { 
        this.__$_pendingStyle = __$value;
    }

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'visibleForTesting',value : {
            arguments : [],namedArguments : {
            }}})
    static get latestStyle() : SystemUiOverlayStyle {
        return SystemChrome._latestStyle;
    }
    private static __$_latestStyle : SystemUiOverlayStyle;
    static get _latestStyle() : SystemUiOverlayStyle { 
        return this.__$_latestStyle;
    }
    static set _latestStyle(__$value : SystemUiOverlayStyle)  { 
        this.__$_latestStyle = __$value;
    }

}

export class properties {
}
