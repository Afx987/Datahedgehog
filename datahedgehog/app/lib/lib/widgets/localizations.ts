/** Library asset:datahedgehog_monitor/lib/lib/widgets/localizations.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/synchronous_future";
import * as lib4 from "./framework";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib7 from "./binding";
import * as lib8 from "./container";
import * as lib9 from "./basic";

export var _loadAll : (locale : any,allDelegates : core.DartIterable<LocalizationsDelegate<any>>) => async.Future<core.DartMap<core.Type,any>> = (locale : any,allDelegates : core.DartIterable<LocalizationsDelegate<any>>) : async.Future<core.DartMap<core.Type,any>> =>  {
    let output : core.DartMap<core.Type,any> = new core.DartMap.literal([
    ]);
    let pendingList : core.DartList<_Pending>;
    let types : core.DartSet<core.Type> = core.DartSet();
    let delegates : core.DartList<LocalizationsDelegate<any>> = new core.DartList.literal<LocalizationsDelegate<any>>();
    for(let delegate of allDelegates) {
        if (!types.contains(delegate.type) && delegate.isSupported(locale)) {
            types.add(delegate.type);
            delegates.add(delegate);
        }
    }
    for(let delegate of delegates) {
        let inputValue : async.Future<any> = delegate.load(locale);
        let completedValue : any;
        let futureValue : async.Future<any> = inputValue.then((value : any) =>  {
            return completedValue = value;
        });
        if (completedValue != null) {
            let type : core.Type = delegate.type;
            /* TODO (AssertStatementImpl) : assert (!output.containsKey(type)); */;
            output.set(type,completedValue);
        }else {
            pendingList = ( pendingList ) || ( new core.DartList.literal<_Pending>() );
            pendingList.add(_Pending(delegate,futureValue));
        }
    }
    if (pendingList == null) return lib3.SynchronousFuture(output);
    return async.Future.wait(pendingList.map((p : _Pending) =>  {
        return p.futureValue;
    })).then((values : core.DartList<any>) =>  {
        /* TODO (AssertStatementImpl) : assert (values.length == pendingList.length); */;
        for(let i : number = 0; i < values.length; i += 1){
            let type : core.Type = pendingList[i].delegate.type;
            /* TODO (AssertStatementImpl) : assert (!output.containsKey(type)); */;
            output.set(type,values[i]);
        }
        return output;
    });
};
export namespace _Pending {
    export type Constructors = '_Pending';
    export type Interface = Omit<_Pending, Constructors>;
}
@DartClass
export class _Pending {
    constructor(delegate : LocalizationsDelegate<any>,futureValue : async.Future<any>) {
    }
    @defaultConstructor
    _Pending(delegate : LocalizationsDelegate<any>,futureValue : async.Future<any>) {
        this.delegate = delegate;
        this.futureValue = futureValue;
    }
    delegate : LocalizationsDelegate<any>;

    futureValue : async.Future<any>;

}

export namespace LocalizationsDelegate {
    export type Constructors = 'LocalizationsDelegate';
    export type Interface<T> = Omit<LocalizationsDelegate<T>, Constructors>;
}
@DartClass
export class LocalizationsDelegate<T> {
    constructor() {
    }
    @defaultConstructor
    LocalizationsDelegate() {
    }
    @Abstract
    isSupported(locale : any) : boolean{ throw 'abstract'}
    @Abstract
    load(locale : any) : async.Future<T>{ throw 'abstract'}
    @Abstract
    shouldReload(old : LocalizationsDelegate<T>) : boolean{ throw 'abstract'}
    get type() : core.Type {
        return T;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}[${this.type}]`;
    }
}

export namespace WidgetsLocalizations {
    export type Constructors = 'WidgetsLocalizations';
    export type Interface = Omit<WidgetsLocalizations, Constructors>;
}
@DartClass
export class WidgetsLocalizations {
    @AbstractProperty
    get textDirection() : any{ throw 'abstract'}
    static of(context : lib4.BuildContext) : WidgetsLocalizations {
        return Localizations.of(context,WidgetsLocalizations);
    }
    constructor() {
    }
    @defaultConstructor
    WidgetsLocalizations() {
    }
}

export namespace DefaultWidgetsLocalizations {
    export type Constructors = 'DefaultWidgetsLocalizations';
    export type Interface = Omit<DefaultWidgetsLocalizations, Constructors>;
}
@DartClass
@Implements(WidgetsLocalizations)
export class DefaultWidgetsLocalizations implements WidgetsLocalizations.Interface {
    constructor() {
    }
    @defaultConstructor
    DefaultWidgetsLocalizations() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get textDirection() : any {
        return TextDirection.ltr;
    }
    static load(locale : any) : async.Future<WidgetsLocalizations> {
        return lib3.SynchronousFuture(new DefaultWidgetsLocalizations());
    }
    private static __$delegate : LocalizationsDelegate<WidgetsLocalizations>;
    static get delegate() : LocalizationsDelegate<WidgetsLocalizations> { 
        if (this.__$delegate===undefined) {
            this.__$delegate = _WidgetsLocalizationsDelegate();
        }
        return this.__$delegate;
    }

}

export namespace _LocalizationsScope {
    export type Constructors = lib4.InheritedWidget.Constructors | '_LocalizationsScope';
    export type Interface = Omit<_LocalizationsScope, Constructors>;
}
@DartClass
export class _LocalizationsScope extends lib4.InheritedWidget {
    constructor(_namedArguments? : {key? : lib5.Key,locale? : any,localizationsState? : _LocalizationsState,typeToResources? : core.DartMap<core.Type,any>,child? : lib4.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _LocalizationsScope(_namedArguments? : {key? : lib5.Key,locale? : any,localizationsState? : _LocalizationsState,typeToResources? : core.DartMap<core.Type,any>,child? : lib4.Widget}) {
        let {key,locale,localizationsState,typeToResources,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.locale = locale;
        this.localizationsState = localizationsState;
        this.typeToResources = typeToResources;
    }
     : any;

     : any;

     : any;

    key;
    child;

     : any;

    locale : any;

    localizationsState : _LocalizationsState;

    typeToResources : core.DartMap<core.Type,any>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(old : _LocalizationsScope) : boolean {
        return this.typeToResources != old.typeToResources;
    }
}

export namespace Localizations {
    export type Constructors = lib4.StatefulWidget.Constructors | 'Localizations' | 'any';
    export type Interface = Omit<Localizations, Constructors>;
}
@DartClass
export class Localizations extends lib4.StatefulWidget {
    constructor(_namedArguments? : {key? : lib5.Key,locale? : any,delegates? : core.DartList<LocalizationsDelegate<any>>,child? : lib4.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Localizations(_namedArguments? : {key? : lib5.Key,locale? : any,delegates? : core.DartList<LocalizationsDelegate<any>>,child? : lib4.Widget}) {
        let {key,locale,delegates,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.locale = locale;
        this.delegates = delegates;
        this.child = child;
    }
     : any;

     : any;

    @namedConstructor
    any( : (delegate : LocalizationsDelegate<any>) => any, : any) {
        is(delegate, LocalizationsDelegate<WidgetsLocalizations>);
    }
    static any : new( : any) => Localizations;

     : any;

     : any;

    @namedFactory
    static $override(_namedArguments? : {key? : lib5.Key,context? : lib4.BuildContext,locale? : any,delegates? : core.DartList<LocalizationsDelegate<any>>,child? : lib4.Widget}) : Localizations {
        let {key,context,locale,delegates,child} = Object.assign({
        }, _namedArguments );
        let mergedDelegates : core.DartList<LocalizationsDelegate<any>> = Localizations._delegatesOf(context);
        if (delegates != null) mergedDelegates.insertAll(0,delegates);
        return Localizations({
            key : key,locale : (locale || Localizations.localeOf(context)),delegates : mergedDelegates,child : child});
    }
    static override : new(_namedArguments? : {key? : lib5.Key,context? : lib4.BuildContext,locale? : any,delegates? : core.DartList<LocalizationsDelegate<any>>,child? : lib4.Widget}) => Localizations;

    locale : any;

    delegates : core.DartList<LocalizationsDelegate<any>>;

    child : lib4.Widget;

    static localeOf(context : lib4.BuildContext,_namedArguments? : {nullOk? : boolean}) : any {
        let {nullOk} = Object.assign({
            "nullOk" : false}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (context != null); */;
        /* TODO (AssertStatementImpl) : assert (nullOk != null); */;
        let scope : _LocalizationsScope = context.inheritFromWidgetOfExactType(_LocalizationsScope);
        if (nullOk && op(Op.EQUALS,scope,null)) return null;
        /* TODO (AssertStatementImpl) : assert (scope != null, 'a Localizations ancestor was not found'); */;
        return scope.localizationsState.locale;
    }
    static _delegatesOf(context : lib4.BuildContext) : core.DartList<LocalizationsDelegate<any>> {
        /* TODO (AssertStatementImpl) : assert (context != null); */;
        let scope : _LocalizationsScope = context.inheritFromWidgetOfExactType(_LocalizationsScope);
        /* TODO (AssertStatementImpl) : assert (scope != null, 'a Localizations ancestor was not found'); */;
        return op(Op.LT,core.DartList<E>,LocalizationsDelegate<T>);
        new core.DartList.literal<any>() > .from(scope.localizationsState.widget.delegates);
    }
    static of<T>(context : lib4.BuildContext,type : core.Type) : T {
        /* TODO (AssertStatementImpl) : assert (context != null); */;
        /* TODO (AssertStatementImpl) : assert (type != null); */;
        let scope : _LocalizationsScope = context.inheritFromWidgetOfExactType(_LocalizationsScope);
        return ((_928_)=>(!!_928_)?_928_.resourcesFor(type):null)(((t)=>(!!t)?t.localizationsState:null)(scope));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _LocalizationsState {
        return _LocalizationsState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib6.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib6.DiagnosticsProperty('locale',this.locale));
        properties.add(lib6.IterableProperty('delegates',this.delegates));
    }
}

export namespace _LocalizationsState {
    export type Constructors = lib4.State.Constructors | '_LocalizationsState';
    export type Interface = Omit<_LocalizationsState, Constructors>;
}
@DartClass
export class _LocalizationsState extends lib4.State<Localizations> {
    _localizedResourcesScopeKey : lib4.GlobalKey<any>;

    _typeToResources : core.DartMap<core.Type,any>;

    get locale() : any {
        return this._locale;
    }
    _locale : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this.load(this.widget.locale);
    }
    _anyDelegatesShouldReload(old : Localizations) : boolean {
        if (this.widget.delegates.length != old.delegates.length) return true;
        let delegates : core.DartList<LocalizationsDelegate<any>> = this.widget.delegates.toList();
        let oldDelegates : core.DartList<LocalizationsDelegate<any>> = old.delegates.toList();
        for(let i : number = 0; i < delegates.length; i += 1){
            let delegate : LocalizationsDelegate<any> = delegates[i];
            let oldDelegate : LocalizationsDelegate<any> = oldDelegates[i];
            if (delegate.runtimeType != oldDelegate.runtimeType || delegate.shouldReload(oldDelegate)) return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(old : Localizations) : any {
        super.didUpdateWidget(old);
        if (this.widget.locale != old.locale || (this.widget.delegates == null && old.delegates != null) || (this.widget.delegates != null && old.delegates == null) || (this.widget.delegates != null && this._anyDelegatesShouldReload(old))) this.load(this.widget.locale);
    }
    load(locale : any) : any {
        let delegates : core.DartIterable<LocalizationsDelegate<any>> = this.widget.delegates;
        if (delegates == null || delegates.isEmpty) {
            this._locale = locale;
            return;
        }
        let typeToResources : core.DartMap<core.Type,any>;
        let typeToResourcesFuture : async.Future<core.DartMap<core.Type,any>> = _loadAll(locale,delegates).then((value : core.DartMap<core.Type,any>) =>  {
            return typeToResources = value;
        });
        if (typeToResources != null) {
            this._typeToResources = typeToResources;
            this._locale = locale;
        }else {
            lib7.properties.WidgetsBinding.instance.deferFirstFrameReport();
            op(Op.LT,typeToResourcesFuture.then.bind(typeToResourcesFuture),);
            op(Op.GT,,((value : core.DartMap<core.Type,any>) =>  {
                lib7.properties.WidgetsBinding.instance.allowFirstFrameReport();
                if (!this.mounted) return;
                this.setState(() =>  {
                    this._typeToResources = value;
                    this._locale = locale;
                });
            }));
        }
    }
    resourcesFor<T>(type : core.Type) : T {
        /* TODO (AssertStatementImpl) : assert (type != null); */;
        let resources : T = this._typeToResources.get(type);
        return resources;
    }
    get _textDirection() : any {
        let resources : WidgetsLocalizations = this._typeToResources.get(WidgetsLocalizations);
        /* TODO (AssertStatementImpl) : assert (resources != null); */;
        return resources.textDirection;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib4.BuildContext) : lib4.Widget {
        if (op(Op.EQUALS,this._locale,null)) return lib8.Container();
        return lib9.Semantics({
            textDirection : this._textDirection,child : _LocalizationsScope({
                key : this._localizedResourcesScopeKey,locale : this._locale,localizationsState : this,typeToResources : this._typeToResources,child : lib9.Directionality({
                    textDirection : this._textDirection,child : this.widget.child})})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _LocalizationsState() {
        this._localizedResourcesScopeKey = lib4.GlobalKey();
        this._typeToResources = new core.DartMap.literal([
        ]);
    }
}

export namespace _WidgetsLocalizationsDelegate {
    export type Constructors = LocalizationsDelegate.Constructors | '_WidgetsLocalizationsDelegate';
    export type Interface = Omit<_WidgetsLocalizationsDelegate, Constructors>;
}
@DartClass
export class _WidgetsLocalizationsDelegate extends LocalizationsDelegate<WidgetsLocalizations> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _WidgetsLocalizationsDelegate() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isSupported(locale : any) : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    load(locale : any) : async.Future<WidgetsLocalizations> {
        return DefaultWidgetsLocalizations.load(locale);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldReload(old : _WidgetsLocalizationsDelegate) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return 'DefaultWidgetsLocalizations.delegate(en_US)';
    }
}

export class properties {
}
