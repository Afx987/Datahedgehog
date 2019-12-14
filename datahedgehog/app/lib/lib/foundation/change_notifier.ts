/** Library asset:datahedgehog_monitor/lib/lib/foundation/change_notifier.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./observer_list";
import * as lib4 from "./assertions";
import * as lib5 from "./diagnostics";

export namespace Listenable {
    export type Constructors = 'Listenable';
    export type Interface = Omit<Listenable, Constructors>;
}
@DartClass
export class Listenable {
    constructor() {
    }
    @defaultConstructor
    Listenable() {
    }
    @namedFactory
    static $merge(listenables : core.DartList<Listenable>) : Listenable {
        return new _MergingListenable(listenables);
    }
    static merge : new(listenables : core.DartList<Listenable>) => Listenable;

    @Abstract
    addListener(listener : any) : void{ throw 'abstract'}
    @Abstract
    removeListener(listener : any) : void{ throw 'abstract'}
}

export namespace ChangeNotifier {
    export type Constructors = 'ChangeNotifier';
    export type Interface = Omit<ChangeNotifier, Constructors>;
}
@DartClass
@Implements(Listenable)
export class ChangeNotifier implements Listenable.Interface {
    _listeners : lib3.ObserverList<any>;

    _debugAssertNotDisposed() : boolean {
        /* TODO (AssertStatementImpl) : assert (() {if (_listeners == null) {throw FlutterError('A $runtimeType was used after being disposed.\n' 'Once you have called dispose() on a $runtimeType, it can no longer be used.');} return true;}()); */;
        return true;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    get hasListeners() : boolean {
        /* TODO (AssertStatementImpl) : assert (_debugAssertNotDisposed()); */;
        return this._listeners.isNotEmpty;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addListener(listener : any) : void {
        /* TODO (AssertStatementImpl) : assert (_debugAssertNotDisposed()); */;
        this._listeners.add(listener);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeListener(listener : any) : void {
        /* TODO (AssertStatementImpl) : assert (_debugAssertNotDisposed()); */;
        this._listeners.remove(listener);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : void {
        /* TODO (AssertStatementImpl) : assert (_debugAssertNotDisposed()); */;
        this._listeners = null;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'visibleForTesting',value : {
            arguments : [],namedArguments : {
            }}})
    notifyListeners() : void {
        /* TODO (AssertStatementImpl) : assert (_debugAssertNotDisposed()); */;
        if (this._listeners != null) {
            let localListeners : core.DartList<any> = op(Op.LT,core.DartList<E>,VoidCallback);
            op(Op.GT,,.from(this._listeners));
            for(let listener of localListeners) {
                try {
                    if (this._listeners.contains(listener)) listener();
                } catch (__error__) {

                    {
                        let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let exception = __error__;
                        lib4.FlutterError.reportError(lib4.FlutterErrorDetails({
                            exception : exception,stack : stack,library : 'foundation library',context : `while dispatching notifications for ${this.runtimeType}`,informationCollector : (information : core.DartStringBuffer) =>  {
                                information.writeln(`The ${this.runtimeType} sending notification was:`);
                                information.write(`  ${this}`);
                            }}));
                    }
                }
            }
        }
    }
    constructor() {
    }
    @defaultConstructor
    ChangeNotifier() {
        this._listeners = lib3.ObserverList();
    }
}

export namespace ValueListenable {
    export type Constructors = Listenable.Constructors | 'ValueListenable';
    export type Interface<T> = Omit<ValueListenable<T>, Constructors>;
}
@DartClass
export class ValueListenable<T> extends Listenable {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ValueListenable() {
    }
    @AbstractProperty
    get value() : T{ throw 'abstract'}
}

export namespace _MergingListenable {
    export type Constructors = Listenable.Constructors | '_MergingListenable';
    export type Interface = Omit<_MergingListenable, Constructors>;
}
@DartClass
export class _MergingListenable extends Listenable {
    constructor(_children : core.DartList<Listenable>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MergingListenable(_children : core.DartList<Listenable>) {
        this._children = _children;
    }
    _children : core.DartList<Listenable>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addListener(listener : any) : void {
        for(let child of this._children) {
            ((_532_)=>(!!_532_)?_532_.addListener(listener):null)(child);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeListener(listener : any) : void {
        for(let child of this._children) {
            ((_533_)=>(!!_533_)?_533_.removeListener(listener):null)(child);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `Listenable.merge([${this._children.join(", ")}])`;
    }
}

export namespace ValueNotifier {
    export type Constructors = ChangeNotifier.Constructors | 'ValueNotifier';
    export type Interface<T> = Omit<ValueNotifier<T>, Constructors>;
}
@DartClass
@Implements(ValueListenable)
export class ValueNotifier<T> extends ChangeNotifier implements ValueListenable.Interface<T> {
    constructor(_value : T) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ValueNotifier(_value : T) {
        this._value = _value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get value() : T {
        return this._value;
    }
    _value : T;

    set value(newValue : T) {
        if (op(Op.EQUALS,this._value,newValue)) return;
        this._value = newValue;
        this.notifyListeners();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${lib5.describeIdentity(this)}(${this.value})`;
    }
}

export class properties {
}
