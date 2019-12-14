/** Library asset:datahedgehog_monitor/lib/lib/animation/animations.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./animation";
import * as lib4 from "./curves";
import * as math from "@dart2ts/dart/math";

export var toString : () => string = () : string =>  {
    if (properties._nextTrain != null) return `${properties.currentTrain}➩${runtimeType}(next: ${properties._nextTrain})`;
    return `${properties.currentTrain}➩${runtimeType}(no next)`;
};
export var dispose : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (_currentTrain != null); */;
    properties._currentTrain.removeStatusListener(_statusChangeHandler);
    properties._currentTrain.removeListener(_valueChangeHandler);
    properties._currentTrain = null;
    ((_516_)=>(!!_516_)?_516_.removeListener(_valueChangeHandler):null)(properties._nextTrain);
    properties._nextTrain = null;
    super.dispose();
};
export var AnimationWithParentMixin : <T>() => any = <T>() : any =>  {
    op(Op.LT,lib3.Animation<T>,T);
    op(Op.GT,,get);
    var addListener : (listener : any) => any = (listener : any) : any =>  {
        return properties.parent.addListener(listener);
    };
    var removeListener : (listener : any) => any = (listener : any) : any =>  {
        return properties.parent.removeListener(listener);
    };
    var addStatusListener : (listener : (status : lib3.AnimationStatus) => any) => any = (listener : (status : lib3.AnimationStatus) => any) : any =>  {
        return properties.parent.addStatusListener(listener);
    };
    var removeStatusListener : (listener : (status : lib3.AnimationStatus) => any) => any = (listener : (status : lib3.AnimationStatus) => any) : any =>  {
        return properties.parent.removeStatusListener(listener);
    };
    var status : () => lib3.AnimationStatus = () : lib3.AnimationStatus =>  {
        return properties.parent.status;
    };
};
export var _valueChangeHandler : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (_currentTrain != null); */;
    let hop : boolean = false;
    if (properties._nextTrain != null) {
        /* TODO (AssertStatementImpl) : assert (_mode != null); */;
        switch (properties._mode) {
            case _TrainHoppingMode.minimize:
                hop = properties._nextTrain.value <= properties._currentTrain.value;
                break;
            case _TrainHoppingMode.maximize:
                hop = properties._nextTrain.value >= properties._currentTrain.value;
                break;
        }
        if (hop) {
            ((_) : lib3.Animation<double> =>  {
                {
                    _.removeStatusListener(_statusChangeHandler);
                    _.removeListener(_valueChangeHandler);
                    return _;
                }
            })(properties._currentTrain);
            properties._currentTrain = properties._nextTrain;
            properties._nextTrain = null;
            properties._currentTrain.addStatusListener(_statusChangeHandler);
            _statusChangeHandler(properties._currentTrain.status);
        }
    }
    let newValue : double = properties.value;
    if (newValue != properties._lastValue) {
        notifyListeners();
        properties._lastValue = newValue;
    }
    /* TODO (AssertStatementImpl) : assert (_lastValue != null); */;
    if (hop && properties.onSwitchedTrain != null) properties.onSwitchedTrain();
};
export var toString : () => string = () : string =>  {
    if (op(Op.EQUALS,properties.reverseCurve,null)) return `${properties.parent}➩${properties.curve}`;
    if (properties._useForwardCurve) return `${properties.parent}➩${properties.curve}ₒₙ/${properties.reverseCurve}`;
    return `${properties.parent}➩${properties.curve}/${properties.reverseCurve}ₒₙ`;
};
export var _updateCurveDirection : (status : lib3.AnimationStatus) => any = (status : lib3.AnimationStatus) : any =>  {
    switch (status) {
        case lib3.AnimationStatus.dismissed:
        case lib3.AnimationStatus.completed:
            properties._curveDirection = null;
            break;
        case lib3.AnimationStatus.forward:
            properties._curveDirection = ( properties._curveDirection ) || ( lib3.AnimationStatus.forward );
            break;
        case lib3.AnimationStatus.reverse:
            properties._curveDirection = ( properties._curveDirection ) || ( lib3.AnimationStatus.reverse );
            break;
    }
};
export var _statusChangeHandler : (status : lib3.AnimationStatus) => any = (status : lib3.AnimationStatus) : any =>  {
    /* TODO (AssertStatementImpl) : assert (_currentTrain != null); */;
    if (status != properties._lastStatus) {
        notifyListeners();
        properties._lastStatus = status;
    }
    /* TODO (AssertStatementImpl) : assert (_lastStatus != null); */;
};
export var addListener : (_valueChangeHandler : any) => any = (_valueChangeHandler : any) =>  {
};
export namespace TrainHoppingAnimation {
    export type Constructors = lib3.Animation.Constructors | 'TrainHoppingAnimation';
    export type Interface = Omit<TrainHoppingAnimation, Constructors>;
}
@DartClass
@With(any,any,any)
export class TrainHoppingAnimation extends lib3.Animation<double> implements any.Interface,any.Interface,any.Interface {
    constructor(_currentTrain : any,_nextTrain : any,_namedArguments? : {onSwitchedTrain? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TrainHoppingAnimation(_currentTrain : any,_nextTrain : any,_namedArguments? : {onSwitchedTrain? : any}) {
        let {onSwitchedTrain} = Object.assign({
        }, _namedArguments );
        this._currentTrain = this._nextTrain;
        this._nextTrain = null;
        this.assert = assert;
        this._currentTrain = _currentTrain;
        this._nextTrain = _nextTrain;
        this.onSwitchedTrain = onSwitchedTrain;
    }
     : any;

     : any;

     : any;

     : any;

    _currentTrain;

    _nextTrain;

}

export namespace _AlwaysCompleteAnimation {
    export type Constructors = lib3.Animation.Constructors | '_AlwaysCompleteAnimation';
    export type Interface = Omit<_AlwaysCompleteAnimation, Constructors>;
}
@DartClass
export class _AlwaysCompleteAnimation extends lib3.Animation<double> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AlwaysCompleteAnimation() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addListener(listener : any) : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeListener(listener : any) : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addStatusListener(listener : (status : lib3.AnimationStatus) => any) : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeStatusListener(listener : (status : lib3.AnimationStatus) => any) : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get status() : lib3.AnimationStatus {
        return lib3.AnimationStatus.completed;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get value() : double {
        return 1.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return 'kAlwaysCompleteAnimation';
    }
}

export namespace CurvedAnimation {
    export type Constructors = lib3.Animation.Constructors | 'CurvedAnimation' | 'addStatusListener';
    export type Interface = Omit<CurvedAnimation, Constructors>;
}
@DartClass
@With(any)
export class CurvedAnimation extends lib3.Animation<double> implements any.Interface {
    constructor(_namedArguments? : {parent? : any,curve? : any,reverseCurve? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CurvedAnimation(_namedArguments? : {parent? : any,curve? : any,reverseCurve? : any}) {
        let {parent,curve,reverseCurve} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.parent = parent;
        this.curve = curve;
        this.reverseCurve = reverseCurve;
    }
     : any;

     : any;

    @Abstract
    _updateCurveDirection( : any){ throw 'abstract'}
    @namedConstructor
    addStatusListener(_updateCurveDirection : any) {
    }
    static addStatusListener : new(_updateCurveDirection : any) => CurvedAnimation;

}

export namespace ReverseAnimation {
    export type Constructors = lib3.Animation.Constructors | 'ReverseAnimation';
    export type Interface = Omit<ReverseAnimation, Constructors>;
}
@DartClass
@With(any,any)
export class ReverseAnimation extends lib3.Animation<double> implements any.Interface,any.Interface {
    constructor(parent : lib3.Animation<double>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ReverseAnimation(parent : lib3.Animation<double>) {
        this.assert = assert;
        this.parent = parent;
    }
     : any;

    parent : lib3.Animation<double>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addListener(listener : any) : any {
        didRegisterListener();
        this.parent.addListener(listener);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeListener(listener : any) : any {
        this.parent.removeListener(listener);
        didUnregisterListener();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didStartListening() : any {
        this.parent.addStatusListener(this._statusChangeHandler.bind(this));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didStopListening() : any {
        this.parent.removeStatusListener(this._statusChangeHandler.bind(this));
    }
    _statusChangeHandler(status : lib3.AnimationStatus) : any {
        notifyStatusListeners(this._reverseStatus(status));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get status() : lib3.AnimationStatus {
        return this._reverseStatus(this.parent.status);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get value() : double {
        return 1.0 - this.parent.value;
    }
    _reverseStatus(status : lib3.AnimationStatus) : lib3.AnimationStatus {
        /* TODO (AssertStatementImpl) : assert (status != null); */;
        switch (status) {
            case lib3.AnimationStatus.forward:
                return lib3.AnimationStatus.reverse;
            case lib3.AnimationStatus.reverse:
                return lib3.AnimationStatus.forward;
            case lib3.AnimationStatus.completed:
                return lib3.AnimationStatus.dismissed;
            case lib3.AnimationStatus.dismissed:
                return lib3.AnimationStatus.completed;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.parent}➪${this.runtimeType}`;
    }
}

export namespace ProxyAnimation {
    export type Constructors = lib3.Animation.Constructors | 'ProxyAnimation';
    export type Interface = Omit<ProxyAnimation, Constructors>;
}
@DartClass
@With(any,any,any)
export class ProxyAnimation extends lib3.Animation<double> implements any.Interface,any.Interface,any.Interface {
    constructor(animation? : lib3.Animation<double>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ProxyAnimation(animation? : lib3.Animation<double>) {
        this._parent = animation;
        if (op(Op.EQUALS,this._parent,null)) {
            this._status = lib3.AnimationStatus.dismissed;
            this._value = 0.0;
        }
    }
    _status : lib3.AnimationStatus;

    _value : double;

    get parent() : lib3.Animation<double> {
        return this._parent;
    }
    _parent : lib3.Animation<double>;

    set parent(value : lib3.Animation<double>) {
        if (op(Op.EQUALS,value,this._parent)) return;
        if (this._parent != null) {
            this._status = this._parent.status;
            this._value = this._parent.value;
            if (isListening) this.didStopListening();
        }
        this._parent = value;
        if (this._parent != null) {
            if (isListening) this.didStartListening();
            if (this._value != this._parent.value) notifyListeners();
            if (this._status != this._parent.status) notifyStatusListeners(this._parent.status);
            this._status = null;
            this._value = null;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didStartListening() : any {
        if (this._parent != null) {
            this._parent.addListener(notifyListeners);
            this._parent.addStatusListener(notifyStatusListeners);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didStopListening() : any {
        if (this._parent != null) {
            this._parent.removeListener(notifyListeners);
            this._parent.removeStatusListener(notifyStatusListeners);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get status() : lib3.AnimationStatus {
        return this._parent != null ? this._parent.status : this._status;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get value() : double {
        return this._parent != null ? this._parent.value : this._value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        if (op(Op.EQUALS,this.parent,null)) return `${this.runtimeType}(null; ${super.toStringDetails()} ${new core.DartDouble(this.value).toStringAsFixed(3)})`;
        return `${this.parent}➩${this.runtimeType}`;
    }
}

export namespace AlwaysStoppedAnimation {
    export type Constructors = lib3.Animation.Constructors | 'AlwaysStoppedAnimation';
    export type Interface<T> = Omit<AlwaysStoppedAnimation<T>, Constructors>;
}
@DartClass
export class AlwaysStoppedAnimation<T> extends lib3.Animation<T> {
    constructor(value : T) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AlwaysStoppedAnimation(value : T) {
        this.value = value;
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    value : T;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addListener(listener : any) : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeListener(listener : any) : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addStatusListener(listener : (status : lib3.AnimationStatus) => any) : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeStatusListener(listener : (status : lib3.AnimationStatus) => any) : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get status() : lib3.AnimationStatus {
        return lib3.AnimationStatus.forward;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toStringDetails() : string {
        return `${super.toStringDetails()} ${this.value}; paused`;
    }
}

export namespace _AlwaysDismissedAnimation {
    export type Constructors = lib3.Animation.Constructors | '_AlwaysDismissedAnimation';
    export type Interface = Omit<_AlwaysDismissedAnimation, Constructors>;
}
@DartClass
export class _AlwaysDismissedAnimation extends lib3.Animation<double> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AlwaysDismissedAnimation() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addListener(listener : any) : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeListener(listener : any) : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addStatusListener(listener : (status : lib3.AnimationStatus) => any) : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeStatusListener(listener : (status : lib3.AnimationStatus) => any) : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get status() : lib3.AnimationStatus {
        return lib3.AnimationStatus.dismissed;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get value() : double {
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return 'kAlwaysDismissedAnimation';
    }
}

export namespace CompoundAnimation {
    export type Constructors = lib3.Animation.Constructors | 'CompoundAnimation';
    export type Interface<T> = Omit<CompoundAnimation<T>, Constructors>;
}
@DartClass
@With(any,any,any)
export class CompoundAnimation<T> extends lib3.Animation<T> implements any.Interface,any.Interface,any.Interface {
    constructor(_namedArguments? : {first? : lib3.Animation<T>,next? : lib3.Animation<T>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CompoundAnimation(_namedArguments? : {first? : lib3.Animation<T>,next? : lib3.Animation<T>}) {
        let {first,next} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.first = first;
        this.next = next;
    }
     : any;

     : any;

    first : lib3.Animation<T>;

    next : lib3.Animation<T>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didStartListening() : any {
        this.first.addListener(this._maybeNotifyListeners.bind(this));
        this.first.addStatusListener(this._maybeNotifyStatusListeners.bind(this));
        this.next.addListener(this._maybeNotifyListeners.bind(this));
        this.next.addStatusListener(this._maybeNotifyStatusListeners.bind(this));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didStopListening() : any {
        this.first.removeListener(this._maybeNotifyListeners.bind(this));
        this.first.removeStatusListener(this._maybeNotifyStatusListeners.bind(this));
        this.next.removeListener(this._maybeNotifyListeners.bind(this));
        this.next.removeStatusListener(this._maybeNotifyStatusListeners.bind(this));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get status() : lib3.AnimationStatus {
        if (op(Op.EQUALS,this.next.status,lib3.AnimationStatus.forward) || op(Op.EQUALS,this.next.status,lib3.AnimationStatus.reverse)) return this.next.status;
        return this.first.status;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.first}, ${this.next})`;
    }
    _lastStatus : lib3.AnimationStatus;

    _maybeNotifyStatusListeners(_ : lib3.AnimationStatus) : any {
        if (this.status != this._lastStatus) {
            this._lastStatus = this.status;
            notifyStatusListeners(this.status);
        }
    }
    _lastValue : T;

    _maybeNotifyListeners() : any {
        if (properties.value != this._lastValue) {
            this._lastValue = properties.value;
            notifyListeners();
        }
    }
}

export namespace AnimationMean {
    export type Constructors = CompoundAnimation.Constructors | 'AnimationMean';
    export type Interface = Omit<AnimationMean, Constructors>;
}
@DartClass
export class AnimationMean extends CompoundAnimation<double> {
    constructor(_namedArguments? : {left? : lib3.Animation<double>,right? : lib3.Animation<double>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnimationMean(_namedArguments? : {left? : lib3.Animation<double>,right? : lib3.Animation<double>}) {
        let {left,right} = Object.assign({
        }, _namedArguments );
        super.CompoundAnimation({
            first : left,next : right});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get value() : double {
        return (this.first.value + this.next.value) / 2.0;
    }
}

export namespace AnimationMax {
    export type Constructors = CompoundAnimation.Constructors | 'AnimationMax';
    export type Interface<T extends number> = Omit<AnimationMax<T extends number>, Constructors>;
}
@DartClass
export class AnimationMax<T extends number> extends CompoundAnimation<T> {
    constructor(first : lib3.Animation<T>,next : lib3.Animation<T>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnimationMax(first : lib3.Animation<T>,next : lib3.Animation<T>) {
        super.CompoundAnimation({
            first : first,next : next});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get value() : T {
        return math.max(this.first.value,this.next.value);
    }
}

export namespace AnimationMin {
    export type Constructors = CompoundAnimation.Constructors | 'AnimationMin';
    export type Interface<T extends number> = Omit<AnimationMin<T extends number>, Constructors>;
}
@DartClass
export class AnimationMin<T extends number> extends CompoundAnimation<T> {
    constructor(first : lib3.Animation<T>,next : lib3.Animation<T>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnimationMin(first : lib3.Animation<T>,next : lib3.Animation<T>) {
        super.CompoundAnimation({
            first : first,next : next});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get value() : T {
        return math.min(this.first.value,this.next.value);
    }
}

export class properties {
    private static __$_mode;
    static get _mode() { 
        if (this.__$_mode===undefined) {
            this.__$_mode = _TrainHoppingMode.minimize;
        }
        return this.__$_mode;
    }
    static set _mode(__$value : any)  { 
        this.__$_mode = __$value;
    }

    private static __$kAlwaysCompleteAnimation : lib3.Animation<double>;
    static get kAlwaysCompleteAnimation() : lib3.Animation<double> { 
        if (this.__$kAlwaysCompleteAnimation===undefined) {
            this.__$kAlwaysCompleteAnimation = _AlwaysCompleteAnimation();
        }
        return this.__$kAlwaysCompleteAnimation;
    }
    static set kAlwaysCompleteAnimation(__$value : lib3.Animation<double>)  { 
        this.__$kAlwaysCompleteAnimation = __$value;
    }

    private static __$kAlwaysDismissedAnimation : lib3.Animation<double>;
    static get kAlwaysDismissedAnimation() : lib3.Animation<double> { 
        if (this.__$kAlwaysDismissedAnimation===undefined) {
            this.__$kAlwaysDismissedAnimation = _AlwaysDismissedAnimation();
        }
        return this.__$kAlwaysDismissedAnimation;
    }
    static set kAlwaysDismissedAnimation(__$value : lib3.Animation<double>)  { 
        this.__$kAlwaysDismissedAnimation = __$value;
    }

    static get value() : double {
        return properties._currentTrain.value;
    }
    private static __$parent : lib3.Animation<double>;
    static get parent() : lib3.Animation<double> { 
        return this.__$parent;
    }
    static set parent(__$value : lib3.Animation<double>)  { 
        this.__$parent = __$value;
    }

    private static __$curve : lib4.Curve;
    static get curve() : lib4.Curve { 
        return this.__$curve;
    }
    static set curve(__$value : lib4.Curve)  { 
        this.__$curve = __$value;
    }

    private static __$reverseCurve : lib4.Curve;
    static get reverseCurve() : lib4.Curve { 
        return this.__$reverseCurve;
    }
    static set reverseCurve(__$value : lib4.Curve)  { 
        this.__$reverseCurve = __$value;
    }

    private static __$_curveDirection : lib3.AnimationStatus;
    static get _curveDirection() : lib3.AnimationStatus { 
        return this.__$_curveDirection;
    }
    static set _curveDirection(__$value : lib3.AnimationStatus)  { 
        this.__$_curveDirection = __$value;
    }

    static get _useForwardCurve() : boolean {
        return op(Op.EQUALS,properties.reverseCurve,null) || ((properties._curveDirection || properties.parent.status)) != lib3.AnimationStatus.reverse;
    }
    static get value() : double {
        let activeCurve : lib4.Curve = properties._useForwardCurve ? properties.curve : properties.reverseCurve;
        let t : double = properties.parent.value;
        if (op(Op.EQUALS,activeCurve,null)) return t;
        if (t == 0.0 || t == 1.0) {
            /* TODO (AssertStatementImpl) : assert (() {final double transformedValue = activeCurve.transform(t); final double roundedTransformedValue = transformedValue.round().toDouble(); if (roundedTransformedValue != t) {throw FlutterError('Invalid curve endpoint at $t.\n' 'Curves must map 0.0 to near zero and 1.0 to near one but ' '${activeCurve.runtimeType} mapped $t to $transformedValue, which ' 'is near $roundedTransformedValue.');} return true;}()); */;
            return t;
        }
        return activeCurve.transform(t);
    }
    static get status() : lib3.AnimationStatus {
        return properties._currentTrain.status;
    }
    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$minimize;
    static get minimize() { 
        return this.__$minimize;
    }
    static set minimize(__$value : any)  { 
        this.__$minimize = __$value;
    }
    ,private static __$maximize;
    static get maximize() { 
        return this.__$maximize;
    }
    static set maximize(__$value : any)  { 
        this.__$maximize = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$_mode;
    static get _mode() { 
        if (this.__$_mode===undefined) {
            this.__$_mode = _TrainHoppingMode.maximize;
        }
        return this.__$_mode;
    }
    static set _mode(__$value : any)  { 
        this.__$_mode = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$_lastStatus : lib3.AnimationStatus;
    static get _lastStatus() : lib3.AnimationStatus { 
        return this.__$_lastStatus;
    }
    static set _lastStatus(__$value : lib3.AnimationStatus)  { 
        this.__$_lastStatus = __$value;
    }

    static get currentTrain() : lib3.Animation<double> {
        return properties._currentTrain;
    }
    private static __$_currentTrain : lib3.Animation<double>;
    static get _currentTrain() : lib3.Animation<double> { 
        return this.__$_currentTrain;
    }
    static set _currentTrain(__$value : lib3.Animation<double>)  { 
        this.__$_currentTrain = __$value;
    }

    private static __$_nextTrain : lib3.Animation<double>;
    static get _nextTrain() : lib3.Animation<double> { 
        return this.__$_nextTrain;
    }
    static set _nextTrain(__$value : lib3.Animation<double>)  { 
        this.__$_nextTrain = __$value;
    }

    private static __$_mode : any;
    static get _mode() : any { 
        return this.__$_mode;
    }
    static set _mode(__$value : any)  { 
        this.__$_mode = __$value;
    }

    private static __$onSwitchedTrain : any;
    static get onSwitchedTrain() : any { 
        return this.__$onSwitchedTrain;
    }
    static set onSwitchedTrain(__$value : any)  { 
        this.__$onSwitchedTrain = __$value;
    }

    private static __$_lastValue : double;
    static get _lastValue() : double { 
        return this.__$_lastValue;
    }
    static set _lastValue(__$value : double)  { 
        this.__$_lastValue = __$value;
    }

}
