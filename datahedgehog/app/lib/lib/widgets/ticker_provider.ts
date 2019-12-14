/** Library asset:datahedgehog_monitor/lib/lib/widgets/ticker_provider.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/scheduler/ticker";

export var SingleTickerProviderStateMixin : <T extends lib3.StatefulWidget>() => any = <T extends lib3.StatefulWidget>() : any =>  {
};
export var State : <T>() => any = <T>() : any =>  {
};
export var TickerProvider : () => any = () : any =>  {
    let _ticker : lib6.Ticker;
    var createTicker : (onTick : (elapsed : core.DartDuration) => any) => lib6.Ticker = (onTick : (elapsed : core.DartDuration) => any) : lib6.Ticker =>  {
        /* TODO (AssertStatementImpl) : assert (() {if (_ticker == null) return true; throw FlutterError('$runtimeType is a SingleTickerProviderStateMixin but multiple tickers were created.\n' 'A SingleTickerProviderStateMixin can only be used as a TickerProvider once. If a ' 'State is used for multiple AnimationController objects, or if it is passed to other ' 'objects and those objects might use it more than one time in total, then instead of ' 'mixing in a SingleTickerProviderStateMixin, use a regular TickerProviderStateMixin.');}()); */;
        _ticker = lib6.Ticker(onTick,{
            debugLabel : `created by ${this}`});
        return _ticker;
    };
    var dispose : () => any = () : any =>  {
        /* TODO (AssertStatementImpl) : assert (() {if (_ticker == null || !_ticker.isActive) return true; throw FlutterError('$this was disposed with an active Ticker.\n' '$runtimeType created a Ticker via its SingleTickerProviderStateMixin, but at the time ' 'dispose() was called on the mixin, that Ticker was still active. The Ticker must ' 'be disposed before calling super.dispose(). Tickers used by AnimationControllers ' 'should be disposed by calling dispose() on the AnimationController itself. ' 'Otherwise, the ticker will leak.\n' 'The offending ticker was: ${_ticker.toString(debugIncludeStack: true)}');}()); */;
        super.dispose();
    };
    var didChangeDependencies : () => any = () : any =>  {
        if (_ticker != null) _ticker.muted = !TickerMode.of(context);
        super.didChangeDependencies();
    };
    var debugFillProperties : (properties : lib5.DiagnosticPropertiesBuilder) => any = (properties : lib5.DiagnosticPropertiesBuilder) : any =>  {
        super.debugFillProperties(properties);
        let tickerDescription : string;
        if (_ticker != null) {
            if (_ticker.isActive && _ticker.muted) tickerDescription = 'active but muted';else if (_ticker.isActive) tickerDescription = 'active';else if (_ticker.muted) tickerDescription = 'inactive and muted';else tickerDescription = 'inactive';
        }
        properties.add(lib5.DiagnosticsProperty('ticker',_ticker,{
            description : tickerDescription,showSeparator : false,defaultValue : null}));
    };
};
export var TickerProviderStateMixin : <T extends lib3.StatefulWidget>() => any = <T extends lib3.StatefulWidget>() : any =>  {
};
export var State : <T>() => any = <T>() : any =>  {
};
export var TickerProvider : () => any = () : any =>  {
    let _tickers : core.DartSet<lib6.Ticker>;
    var createTicker : (onTick : (elapsed : core.DartDuration) => any) => lib6.Ticker = (onTick : (elapsed : core.DartDuration) => any) : lib6.Ticker =>  {
        _tickers = ( _tickers ) || ( core.DartSet() );
        let result : _WidgetTicker = _WidgetTicker(onTick,this,{
            debugLabel : `created by ${this}`});
        _tickers.add(result);
        return result;
    };
    var _removeTicker : (ticker : _WidgetTicker) => any = (ticker : _WidgetTicker) : any =>  {
        /* TODO (AssertStatementImpl) : assert (_tickers != null); */;
        /* TODO (AssertStatementImpl) : assert (_tickers.contains(ticker)); */;
        _tickers.remove(ticker);
    };
    var dispose : () => any = () : any =>  {
        /* TODO (AssertStatementImpl) : assert (() {if (_tickers != null) {for (Ticker ticker in _tickers) {if (ticker.isActive) {throw FlutterError('$this was disposed with an active Ticker.\n' '$runtimeType created a Ticker via its TickerProviderStateMixin, but at the time ' 'dispose() was called on the mixin, that Ticker was still active. All Tickers must ' 'be disposed before calling super.dispose(). Tickers used by AnimationControllers ' 'should be disposed by calling dispose() on the AnimationController itself. ' 'Otherwise, the ticker will leak.\n' 'The offending ticker was: ${ticker.toString(debugIncludeStack: true)}');}}} return true;}()); */;
        super.dispose();
    };
    var didChangeDependencies : () => any = () : any =>  {
        let muted : boolean = !TickerMode.of(context);
        if (_tickers != null) {
            for(let ticker of _tickers) {
                ticker.muted = muted;
            }
        }
        super.didChangeDependencies();
    };
    var debugFillProperties : (properties : lib5.DiagnosticPropertiesBuilder) => any = (properties : lib5.DiagnosticPropertiesBuilder) : any =>  {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsProperty('tickers',_tickers,{
            description : _tickers != null ? `tracking ${_tickers.length} ticker${_tickers.length == 1 ? "" : "s"}` : null,defaultValue : null}));
    };
};
export namespace TickerMode {
    export type Constructors = lib3.InheritedWidget.Constructors | 'TickerMode';
    export type Interface = Omit<TickerMode, Constructors>;
}
@DartClass
export class TickerMode extends lib3.InheritedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,enabled? : boolean,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TickerMode(_namedArguments? : {key? : lib4.Key,enabled? : boolean,child? : lib3.Widget}) {
        let {key,enabled,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.enabled = enabled;
    }
     : any;

     : any;

    key;
    child;

     : any;

    enabled : boolean;

    static of(context : lib3.BuildContext) : boolean {
        let widget : TickerMode = context.inheritFromWidgetOfExactType(TickerMode);
        return (((t)=>(!!t)?t.enabled:null)(widget) || true);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(oldWidget : TickerMode) : boolean {
        return this.enabled != oldWidget.enabled;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.FlagProperty('mode',{
            value : this.enabled,ifTrue : 'enabled',ifFalse : 'disabled',showName : true}));
    }
}

export namespace _WidgetTicker {
    export type Constructors = lib6.Ticker.Constructors | '_WidgetTicker';
    export type Interface = Omit<_WidgetTicker, Constructors>;
}
@DartClass
export class _WidgetTicker extends lib6.Ticker {
    constructor(onTick : (elapsed : core.DartDuration) => any,_creator : any,_namedArguments? : {debugLabel? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _WidgetTicker(onTick : (elapsed : core.DartDuration) => any,_creator : any,_namedArguments? : {debugLabel? : string}) {
        let {debugLabel} = Object.assign({
        }, _namedArguments );
        super.Ticker(onTick,{
            debugLabel : debugLabel});
        this._creator = _creator;
    }
    _creator : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._creator._removeTicker(this);
        super.dispose();
    }
}

export class properties {
}
