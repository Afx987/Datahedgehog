/** Library asset:datahedgehog_monitor/lib/lib/widgets/routes.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./navigator";
import * as lib4 from "./overlay";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/scheduler/ticker";
import * as lib9 from "./framework";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib13 from "./basic";
import * as lib14 from "./transitions";
import * as lib15 from "./focus_scope";
import * as lib16 from "./page_storage";
import * as lib17 from "./focus_manager";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib20 from "./modal_barrier";

export var LocalHistoryRoute : <T>() => any = <T>() : any =>  {
};
export var Route : <T>() => any = <T>() : any =>  {
    let _localHistory : core.DartList<LocalHistoryEntry>;
    var addLocalHistoryEntry : (entry : LocalHistoryEntry) => any = (entry : LocalHistoryEntry) : any =>  {
        /* TODO (AssertStatementImpl) : assert (entry._owner == null); */;
        entry._owner = this;
        _localHistory = ( _localHistory ) || ( new core.DartList.literal<LocalHistoryEntry>() );
        let wasEmpty : boolean = _localHistory.isEmpty;
        _localHistory.add(entry);
        if (wasEmpty) changedInternalState();
    };
    var removeLocalHistoryEntry : (entry : LocalHistoryEntry) => any = (entry : LocalHistoryEntry) : any =>  {
        /* TODO (AssertStatementImpl) : assert (entry != null); */;
        /* TODO (AssertStatementImpl) : assert (entry._owner == this); */;
        /* TODO (AssertStatementImpl) : assert (_localHistory.contains(entry)); */;
        _localHistory.remove(entry);
        entry._owner = null;
        entry._notifyRemoved();
        if (_localHistory.isEmpty) changedInternalState();
    };
    var willPop : () => async.Future<lib3.RoutePopDisposition> = () => new async.Future.fromPromise(( async () : Promise<lib3.RoutePopDisposition> =>  {
        if (willHandlePopInternally) return lib3.RoutePopDisposition.pop;
        return await super.willPop();
    })());
    var didPop : (result : T) => boolean = (result : T) : boolean =>  {
        if (_localHistory != null && _localHistory.isNotEmpty) {
            let entry : LocalHistoryEntry = _localHistory.removeLast();
            /* TODO (AssertStatementImpl) : assert (entry._owner == this); */;
            entry._owner = null;
            entry._notifyRemoved();
            if (_localHistory.isEmpty) changedInternalState();
            return false;
        }
        return super.didPop(result);
    };
    var willHandlePopInternally : () => boolean = () : boolean =>  {
        return _localHistory != null && _localHistory.isNotEmpty;
    };
};
export var showGeneralDialog : <T>(_namedArguments? : {context? : lib9.BuildContext,pageBuilder? : (context : lib9.BuildContext,animation : lib5.Animation<double>,secondaryAnimation : lib5.Animation<double>) => lib9.Widget,barrierDismissible? : boolean,barrierLabel? : string,barrierColor? : any,transitionDuration? : core.DartDuration,transitionBuilder? : (context : lib9.BuildContext,animation : lib5.Animation<double>,secondaryAnimation : lib5.Animation<double>,child : lib9.Widget) => lib9.Widget}) => async.Future<T> = <T>(_namedArguments? : {context? : lib9.BuildContext,pageBuilder? : (context : lib9.BuildContext,animation : lib5.Animation<double>,secondaryAnimation : lib5.Animation<double>) => lib9.Widget,barrierDismissible? : boolean,barrierLabel? : string,barrierColor? : any,transitionDuration? : core.DartDuration,transitionBuilder? : (context : lib9.BuildContext,animation : lib5.Animation<double>,secondaryAnimation : lib5.Animation<double>,child : lib9.Widget) => lib9.Widget}) : async.Future<T> =>  {
    let {context,pageBuilder,barrierDismissible,barrierLabel,barrierColor,transitionDuration,transitionBuilder} = Object.assign({
    }, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (pageBuilder != null); */;
    /* TODO (AssertStatementImpl) : assert (!barrierDismissible || barrierLabel != null); */;
    return lib3.Navigator.of(context,{
        rootNavigator : true}).push(_DialogRoute({
        pageBuilder : pageBuilder,barrierDismissible : barrierDismissible,barrierLabel : barrierLabel,barrierColor : barrierColor,transitionDuration : transitionDuration,transitionBuilder : transitionBuilder}));
};
export namespace OverlayRoute {
    export type Constructors = 'OverlayRoute';
    export type Interface<T> = Omit<OverlayRoute<T>, Constructors>;
}
@DartClass
export class OverlayRoute<T> extends any {
    constructor(_namedArguments? : {settings? : lib3.RouteSettings}) {
    }
    @defaultConstructor
    OverlayRoute(_namedArguments? : {settings? : lib3.RouteSettings}) {
        let {settings} = Object.assign({
        }, _namedArguments );
        this._overlayEntries = new core.DartList.literal<lib4.OverlayEntry>();
        super.DartObject({
            settings : settings});
    }
    @Abstract
    createOverlayEntries() : core.DartIterable<lib4.OverlayEntry>{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get overlayEntries() : core.DartList<lib4.OverlayEntry> {
        return this._overlayEntries;
    }
    _overlayEntries : core.DartList<lib4.OverlayEntry>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    install(insertionPoint : lib4.OverlayEntry) : any {
        /* TODO (AssertStatementImpl) : assert (_overlayEntries.isEmpty); */;
        this._overlayEntries.addAll(this.createOverlayEntries());
        ((_942_)=>(!!_942_)?_942_.insertAll(this._overlayEntries,{
            above : insertionPoint}):null)(navigator.overlay);
        super.install(insertionPoint);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    get finishedWhenPopped() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didPop(result : T) : boolean {
        let returnValue : boolean = super.didPop(result);
        /* TODO (AssertStatementImpl) : assert (returnValue); */;
        if (this.finishedWhenPopped) navigator.finalizeRoute(this);
        return returnValue;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        for(let entry of this._overlayEntries) entry.remove();
        this._overlayEntries.clear();
        super.dispose();
    }
}

export namespace LocalHistoryEntry {
    export type Constructors = 'LocalHistoryEntry';
    export type Interface = Omit<LocalHistoryEntry, Constructors>;
}
@DartClass
export class LocalHistoryEntry {
    constructor(_namedArguments? : {onRemove? : any}) {
    }
    @defaultConstructor
    LocalHistoryEntry(_namedArguments? : {onRemove? : any}) {
        let {onRemove} = Object.assign({
        }, _namedArguments );
        this.onRemove = onRemove;
    }
    onRemove : any;

    _owner : any;

    remove() : any {
        this._owner.removeLocalHistoryEntry(this);
        /* TODO (AssertStatementImpl) : assert (_owner == null); */;
    }
    _notifyRemoved() : any {
        if (this.onRemove != null) this.onRemove();
    }
}

export namespace _ModalScopeStatus {
    export type Constructors = lib9.InheritedWidget.Constructors | '_ModalScopeStatus';
    export type Interface = Omit<_ModalScopeStatus, Constructors>;
}
@DartClass
export class _ModalScopeStatus extends lib9.InheritedWidget {
    constructor(_namedArguments? : {key? : lib10.Key,isCurrent? : boolean,canPop? : boolean,route? : any,child? : lib9.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ModalScopeStatus(_namedArguments? : {key? : lib10.Key,isCurrent? : boolean,canPop? : boolean,route? : any,child? : lib9.Widget}) {
        let {key,isCurrent,canPop,route,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.isCurrent = isCurrent;
        this.canPop = canPop;
        this.route = route;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    key;
    child;

     : any;

    isCurrent : boolean;

    canPop : boolean;

    route : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(old : _ModalScopeStatus) : boolean {
        return this.isCurrent != old.isCurrent || this.canPop != old.canPop || this.route != old.route;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(description : lib11.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(description);
        description.add(lib11.FlagProperty('isCurrent',{
            value : this.isCurrent,ifTrue : 'active',ifFalse : 'inactive'}));
        description.add(lib11.FlagProperty('canPop',{
            value : this.canPop,ifTrue : 'can pop'}));
    }
}

export namespace _ModalScope {
    export type Constructors = lib9.StatefulWidget.Constructors | '_ModalScope';
    export type Interface<T> = Omit<_ModalScope<T>, Constructors>;
}
@DartClass
export class _ModalScope<T> extends lib9.StatefulWidget {
    constructor(_namedArguments? : {key? : lib10.Key,route? : ModalRoute<T>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ModalScope(_namedArguments? : {key? : lib10.Key,route? : ModalRoute<T>}) {
        let {key,route} = Object.assign({
        }, _namedArguments );
        super.StatefulWidget({
            key : key});
        this.route = route;
    }
    route : ModalRoute<T>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _ModalScopeState<T> {
        return _ModalScopeState();
    }
}

export namespace _ModalScopeState {
    export type Constructors = lib9.State.Constructors | '_ModalScopeState';
    export type Interface<T> = Omit<_ModalScopeState<T>, Constructors>;
}
@DartClass
export class _ModalScopeState<T> extends lib9.State<_ModalScope<T>> {
    _page : lib9.Widget;

    _listenable : lib12.Listenable;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        let animations : core.DartList<lib12.Listenable> = new core.DartList.literal<lib12.Listenable>();
        if (this.widget.route.animation != null) animations.add(this.widget.route.animation);
        if (this.widget.route.secondaryAnimation != null) animations.add(this.widget.route.secondaryAnimation);
        this._listenable = lib12.Listenable.merge(animations);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : _ModalScope<T>) : any {
        super.didUpdateWidget(oldWidget);
        /* TODO (AssertStatementImpl) : assert (widget.route == oldWidget.route); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        super.didChangeDependencies();
        this._page = null;
    }
    _forceRebuildPage() : any {
        this.setState(() =>  {
            this._page = null;
        });
    }
    _routeSetState(fn : any) : any {
        this.setState(fn);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib9.BuildContext) : lib9.Widget {
        return _ModalScopeStatus({
            route : this.widget.route,isCurrent : this.widget.route.isCurrent,canPop : this.widget.route.canPop,child : lib13.Offstage({
                offstage : this.widget.route.offstage,child : lib16.PageStorage({
                    bucket : this.widget.route._storageBucket,child : lib15.FocusScope({
                        node : this.widget.route.focusScopeNode,child : lib13.RepaintBoundary({
                            child : lib14.AnimatedBuilder({
                                animation : this._listenable,builder : (context : lib9.BuildContext,child : lib9.Widget) =>  {
                                    return this.widget.route.buildTransitions(context,this.widget.route.animation,this.widget.route.secondaryAnimation,lib13.IgnorePointer({
                                        ignoring : op(Op.EQUALS,((t)=>(!!t)?t.status:null)(this.widget.route.animation),lib5.AnimationStatus.reverse),child : child}));
                                },child : this._page = ( this._page ) || ( lib13.RepaintBoundary({
                                    key : this.widget.route._subtreeKey,child : lib13.Builder({
                                        builder : (context : lib9.BuildContext) =>  {
                                            return this.widget.route.buildPage(context,this.widget.route.animation,this.widget.route.secondaryAnimation);
                                        }})}) )})})})})})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ModalScopeState() {
    }
}

export namespace RouteObserver {
    export type Constructors = lib3.NavigatorObserver.Constructors | 'RouteObserver';
    export type Interface<R extends any> = Omit<RouteObserver<R extends any>, Constructors>;
}
@DartClass
export class RouteObserver<R extends any> extends lib3.NavigatorObserver {
    _listeners : core.DartMap<R,core.DartSet<RouteAware>>;

    subscribe(routeAware : RouteAware,route : R) : any {
        /* TODO (AssertStatementImpl) : assert (routeAware != null); */;
        /* TODO (AssertStatementImpl) : assert (route != null); */;
        let subscribers : core.DartSet<RouteAware> = this._listeners.putIfAbsent(route,() =>  {
            return core.DartSet();
        });
        if (subscribers.add(routeAware)) {
            routeAware.didPush();
        }
    }
    unsubscribe(routeAware : RouteAware) : any {
        /* TODO (AssertStatementImpl) : assert (routeAware != null); */;
        for(let route of this._listeners.keys) {
            let subscribers : core.DartSet<RouteAware> = this._listeners.get(route);
            ((_944_)=>(!!_944_)?_944_.remove(routeAware):null)(subscribers);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didPop(route : any,previousRoute : any) : any {
        if (is(route, R) && is(previousRoute, R)) {
            let previousSubscribers : core.DartList<RouteAware> = ((_945_)=>(!!_945_)?_945_.toList():null)(this._listeners.get(previousRoute));
            if (previousSubscribers != null) {
                for(let routeAware of previousSubscribers) {
                    routeAware.didPopNext();
                }
            }
            let subscribers : core.DartList<RouteAware> = ((_946_)=>(!!_946_)?_946_.toList():null)(this._listeners.get(route));
            if (subscribers != null) {
                for(let routeAware of subscribers) {
                    routeAware.didPop();
                }
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didPush(route : any,previousRoute : any) : any {
        if (is(route, R) && is(previousRoute, R)) {
            let previousSubscribers : core.DartSet<RouteAware> = this._listeners.get(previousRoute);
            if (previousSubscribers != null) {
                for(let routeAware of previousSubscribers) {
                    routeAware.didPushNext();
                }
            }
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RouteObserver() {
        this._listeners = new core.DartMap.literal([
        ]);
    }
}

export namespace RouteAware {
    export type Constructors = 'RouteAware';
    export type Interface = Omit<RouteAware, Constructors>;
}
@DartClass
export class RouteAware {
    didPopNext() : any {
    }
    didPush() : any {
    }
    didPop() : any {
    }
    didPushNext() : any {
    }
    constructor() {
    }
    @defaultConstructor
    RouteAware() {
    }
}

export namespace TransitionRoute {
    export type Constructors = OverlayRoute.Constructors | 'TransitionRoute' | '_settings';
    export type Interface<T> = Omit<TransitionRoute<T>, Constructors>;
}
@DartClass
export class TransitionRoute<T> extends OverlayRoute<T> {
    constructor(_namedArguments? : {settings? : lib3.RouteSettings}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TransitionRoute(_namedArguments? : {settings? : lib3.RouteSettings}) {
        let {settings} = Object.assign({
        }, _namedArguments );
        this._transitionCompleter = async.DartCompleter();
        this._secondaryAnimation = lib7.ProxyAnimation(lib7.properties.kAlwaysDismissedAnimation);
        super.OverlayRoute({
            settings : settings});
    }
    @namedConstructor
    _settings(settings : lib3.RouteSettings) {
        this._transitionCompleter = async.DartCompleter();
        this._secondaryAnimation = lib7.ProxyAnimation(lib7.properties.kAlwaysDismissedAnimation);
        super.OverlayRoute({
            settings : settings});
    }
    static _settings : new<T>(settings : lib3.RouteSettings) => TransitionRoute<T>;

    get completed() : async.Future<T> {
        return this._transitionCompleter.future;
    }
    _transitionCompleter : async.DartCompleter<T>;

    @AbstractProperty
    get transitionDuration() : core.DartDuration{ throw 'abstract'}
    @AbstractProperty
    get opaque() : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get finishedWhenPopped() : boolean {
        return op(Op.EQUALS,this._controller.status,lib5.AnimationStatus.dismissed);
    }
    get animation() : lib5.Animation<double> {
        return this._animation;
    }
    _animation : lib5.Animation<double>;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    get controller() : lib6.AnimationController {
        return this._controller;
    }
    _controller : lib6.AnimationController;

    createAnimationController() : lib6.AnimationController {
        /* TODO (AssertStatementImpl) : assert (!_transitionCompleter.isCompleted, 'Cannot reuse a $runtimeType after disposing it.'); */;
        let duration : core.DartDuration = this.transitionDuration;
        /* TODO (AssertStatementImpl) : assert (duration != null && duration >= Duration.zero); */;
        return lib6.AnimationController({
            duration : duration,debugLabel : this.debugLabel,vsync : navigator});
    }
    createAnimation() : lib5.Animation<double> {
        /* TODO (AssertStatementImpl) : assert (!_transitionCompleter.isCompleted, 'Cannot reuse a $runtimeType after disposing it.'); */;
        /* TODO (AssertStatementImpl) : assert (_controller != null); */;
        return this._controller.view;
    }
    _result : T;

    _handleStatusChanged(status : lib5.AnimationStatus) : any {
        switch (status) {
            case lib5.AnimationStatus.completed:
                if (this.overlayEntries.isNotEmpty) this.overlayEntries.first.opaque = this.opaque;
                break;
            case lib5.AnimationStatus.forward:
            case lib5.AnimationStatus.reverse:
                if (this.overlayEntries.isNotEmpty) this.overlayEntries.first.opaque = false;
                break;
            case lib5.AnimationStatus.dismissed:
                if (!isCurrent) {
                    navigator.finalizeRoute(this);
                    /* TODO (AssertStatementImpl) : assert (overlayEntries.isEmpty); */;
                }
                break;
        }
        changedInternalState();
    }
    get secondaryAnimation() : lib5.Animation<double> {
        return this._secondaryAnimation;
    }
    _secondaryAnimation : lib7.ProxyAnimation;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    install(insertionPoint : lib4.OverlayEntry) : any {
        /* TODO (AssertStatementImpl) : assert (!_transitionCompleter.isCompleted, 'Cannot install a $runtimeType after disposing it.'); */;
        this._controller = this.createAnimationController();
        /* TODO (AssertStatementImpl) : assert (_controller != null, '$runtimeType.createAnimationController() returned null.'); */;
        this._animation = this.createAnimation();
        /* TODO (AssertStatementImpl) : assert (_animation != null, '$runtimeType.createAnimation() returned null.'); */;
        super.install(insertionPoint);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didPush() : lib8.TickerFuture {
        /* TODO (AssertStatementImpl) : assert (_controller != null, '$runtimeType.didPush called before calling install() or after calling dispose().'); */;
        /* TODO (AssertStatementImpl) : assert (!_transitionCompleter.isCompleted, 'Cannot reuse a $runtimeType after disposing it.'); */;
        this._animation.addStatusListener(this._handleStatusChanged.bind(this));
        return this._controller.forward();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didReplace(oldRoute : any) : any {
        /* TODO (AssertStatementImpl) : assert (_controller != null, '$runtimeType.didReplace called before calling install() or after calling dispose().'); */;
        /* TODO (AssertStatementImpl) : assert (!_transitionCompleter.isCompleted, 'Cannot reuse a $runtimeType after disposing it.'); */;
        if (is(oldRoute, TransitionRoute<any>)) this._controller.value = oldRoute._controller.value;
        this._animation.addStatusListener(this._handleStatusChanged.bind(this));
        super.didReplace(oldRoute);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didPop(result : T) : boolean {
        /* TODO (AssertStatementImpl) : assert (_controller != null, '$runtimeType.didPop called before calling install() or after calling dispose().'); */;
        /* TODO (AssertStatementImpl) : assert (!_transitionCompleter.isCompleted, 'Cannot reuse a $runtimeType after disposing it.'); */;
        this._result = result;
        this._controller.reverse();
        return super.didPop(result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didPopNext(nextRoute : any) : any {
        /* TODO (AssertStatementImpl) : assert (_controller != null, '$runtimeType.didPopNext called before calling install() or after calling dispose().'); */;
        /* TODO (AssertStatementImpl) : assert (!_transitionCompleter.isCompleted, 'Cannot reuse a $runtimeType after disposing it.'); */;
        this._updateSecondaryAnimation(nextRoute);
        super.didPopNext(nextRoute);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeNext(nextRoute : any) : any {
        /* TODO (AssertStatementImpl) : assert (_controller != null, '$runtimeType.didChangeNext called before calling install() or after calling dispose().'); */;
        /* TODO (AssertStatementImpl) : assert (!_transitionCompleter.isCompleted, 'Cannot reuse a $runtimeType after disposing it.'); */;
        this._updateSecondaryAnimation(nextRoute);
        super.didChangeNext(nextRoute);
    }
    _updateSecondaryAnimation(nextRoute : any) : any {
        if (is(nextRoute, TransitionRoute<any>) && this.canTransitionTo(nextRoute) && nextRoute.canTransitionFrom(this)) {
            let current : lib5.Animation<double> = this._secondaryAnimation.parent;
            if (current != null) {
                if (is(current, lib7.TrainHoppingAnimation)) {
                    let newAnimation : lib7.TrainHoppingAnimation;
                    newAnimation = lib7.TrainHoppingAnimation(current.currentTrain,nextRoute._animation,{
                        onSwitchedTrain : () =>  {
                            /* TODO (AssertStatementImpl) : assert (_secondaryAnimation.parent == newAnimation); */;
                            /* TODO (AssertStatementImpl) : assert (newAnimation.currentTrain == nextRoute._animation); */;
                            this._secondaryAnimation.parent = newAnimation.currentTrain;
                            newAnimation.dispose();
                        }});
                    this._secondaryAnimation.parent = newAnimation;
                    current.dispose();
                }else {
                    this._secondaryAnimation.parent = lib7.TrainHoppingAnimation(current,nextRoute._animation);
                }
            }else {
                this._secondaryAnimation.parent = nextRoute._animation;
            }
        }else {
            this._secondaryAnimation.parent = lib7.properties.kAlwaysDismissedAnimation;
        }
    }
    canTransitionTo(nextRoute : TransitionRoute<any>) : boolean {
        return true;
    }
    canTransitionFrom(previousRoute : TransitionRoute<any>) : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        /* TODO (AssertStatementImpl) : assert (!_transitionCompleter.isCompleted, 'Cannot dispose a $runtimeType twice.'); */;
        ((_943_)=>(!!_943_)?_943_.dispose():null)(this._controller);
        this._transitionCompleter.complete(this._result);
        super.dispose();
    }
    get debugLabel() : string {
        return `${this.runtimeType}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(animation: ${this._controller})`;
    }
}

export namespace ModalRoute {
    export type Constructors = TransitionRoute.Constructors | 'ModalRoute';
    export type Interface<T> = Omit<ModalRoute<T>, Constructors>;
}
@DartClass
@With(any)
export class ModalRoute<T> extends TransitionRoute<T> implements any.Interface {
    constructor(_namedArguments? : {settings? : lib3.RouteSettings}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ModalRoute(_namedArguments? : {settings? : lib3.RouteSettings}) {
        let {settings} = Object.assign({
        }, _namedArguments );
        this.focusScopeNode = lib17.FocusScopeNode();
        this._offstage = false;
        this._willPopCallbacks = new core.DartList.literal<() => async.Future<boolean>>();
        this._scopeKey = lib9.GlobalKey();
        this._subtreeKey = lib9.GlobalKey();
        this._storageBucket = lib16.PageStorageBucket();
        super._settings(settings);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'optionalTypeArgs',value : {
            arguments : [],namedArguments : {
            }}})
    static of<T extends core.DartObject>(context : lib9.BuildContext) : ModalRoute<T> {
        let widget : _ModalScopeStatus = context.inheritFromWidgetOfExactType(_ModalScopeStatus);
        return ((t)=>(!!t)?t.route:null)(widget);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    setState(fn : any) : any {
        if (this._scopeKey.currentState != null) {
            this._scopeKey.currentState._routeSetState(fn);
        }else {
            fn();
        }
    }
    static withName(name : string) : (route : lib3.Route<any>) => boolean {
        return (route : any) =>  {
            return !route.willHandlePopInternally && is(route, ModalRoute<any>) && op(Op.EQUALS,route.settings.name,name);
        };
    }
    @Abstract
    buildPage(context : lib9.BuildContext,animation : lib5.Animation<double>,secondaryAnimation : lib5.Animation<double>) : lib9.Widget{ throw 'abstract'}
    buildTransitions(context : lib9.BuildContext,animation : lib5.Animation<double>,secondaryAnimation : lib5.Animation<double>,child : lib9.Widget) : lib9.Widget {
        return child;
    }
    focusScopeNode : lib17.FocusScopeNode;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    install(insertionPoint : lib4.OverlayEntry) : any {
        super.install(insertionPoint);
        this._animationProxy = lib7.ProxyAnimation(super.animation);
        this._secondaryAnimationProxy = lib7.ProxyAnimation(super.secondaryAnimation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didPush() : lib8.TickerFuture {
        navigator.focusScopeNode.setFirstFocus(this.focusScopeNode);
        return super.didPush();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this.focusScopeNode.detach();
        super.dispose();
    }
    @AbstractProperty
    get barrierDismissible() : boolean{ throw 'abstract'}
    get semanticsDismissible() : boolean {
        return true;
    }
    @AbstractProperty
    get barrierColor() : any{ throw 'abstract'}
    @AbstractProperty
    get barrierLabel() : string{ throw 'abstract'}
    @AbstractProperty
    get maintainState() : boolean{ throw 'abstract'}
    get offstage() : boolean {
        return this._offstage;
    }
    _offstage : boolean;

    set offstage(value : boolean) {
        if (this._offstage == value) return;
        this.setState(() =>  {
            this._offstage = value;
        });
        this._animationProxy.parent = this._offstage ? lib7.properties.kAlwaysCompleteAnimation : super.animation;
        this._secondaryAnimationProxy.parent = this._offstage ? lib7.properties.kAlwaysDismissedAnimation : super.secondaryAnimation;
    }
    get subtreeContext() : lib9.BuildContext {
        return this._subtreeKey.currentContext;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get animation() : lib5.Animation<double> {
        return this._animationProxy;
    }
    _animationProxy : lib7.ProxyAnimation;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get secondaryAnimation() : lib5.Animation<double> {
        return this._secondaryAnimationProxy;
    }
    _secondaryAnimationProxy : lib7.ProxyAnimation;

    _willPopCallbacks : core.DartList<() => async.Future<boolean>>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    willPop() : async.Future<lib3.RoutePopDisposition> { 
        return new async.Future.fromPromise(( async () =>  {
            let scope : _ModalScopeState<T> = this._scopeKey.currentState;
            /* TODO (AssertStatementImpl) : assert (scope != null); */;
            for(let callback of op(Op.LT,core.DartList<E>,lib3.WillPopCallback)) op(Op.GT,,.from(this._willPopCallbacks));
            {
                if (!await callback()) return lib3.RoutePopDisposition.doNotPop;
            }
            return await super.willPop();
        } )());
    }

    addScopedWillPopCallback(callback : () => async.Future<boolean>) : any {
        /* TODO (AssertStatementImpl) : assert (_scopeKey.currentState != null, 'Tried to add a willPop callback to a route that is not currently in the tree.'); */;
        this._willPopCallbacks.add(callback);
    }
    removeScopedWillPopCallback(callback : () => async.Future<boolean>) : any {
        /* TODO (AssertStatementImpl) : assert (_scopeKey.currentState != null, 'Tried to remove a willPop callback from a route that is not currently in the tree.'); */;
        this._willPopCallbacks.remove(callback);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    get hasScopedWillPopCallback() : boolean {
        return this._willPopCallbacks.isNotEmpty;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangePrevious(previousRoute : any) : any {
        super.didChangePrevious(previousRoute);
        this.changedInternalState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    changedInternalState() : any {
        super.changedInternalState();
        this.setState(() =>  {
        });
        this._modalBarrier.markNeedsBuild();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    changedExternalState() : any {
        super.changedExternalState();
        if (this._scopeKey.currentState != null) this._scopeKey.currentState._forceRebuildPage();
    }
    get canPop() : boolean {
        return !isFirst || willHandlePopInternally;
    }
    _scopeKey : lib9.GlobalKey<_ModalScopeState<T>>;

    _subtreeKey : lib9.GlobalKey<any>;

    _storageBucket : lib16.PageStorageBucket;

    private static __$_easeCurveTween : lib19.Animatable<double>;
    static get _easeCurveTween() : lib19.Animatable<double> { 
        if (this.__$_easeCurveTween===undefined) {
            this.__$_easeCurveTween = lib19.CurveTween({
                curve : lib18.Curves.ease});
        }
        return this.__$_easeCurveTween;
    }
    static set _easeCurveTween(__$value : lib19.Animatable<double>)  { 
        this.__$_easeCurveTween = __$value;
    }

    _modalBarrier : lib4.OverlayEntry;

    _buildModalBarrier(context : lib9.BuildContext) : lib9.Widget {
        let barrier : lib9.Widget;
        if (this.barrierColor != null && !this.offstage) {
            /* TODO (AssertStatementImpl) : assert (barrierColor != _kTransparent); */;
            let color : lib5.Animation<any> = this.animation.drive(lib19.ColorTween({
                begin : properties._kTransparent,end : this.barrierColor}).chain(ModalRoute._easeCurveTween));
            barrier = lib20.AnimatedModalBarrier({
                color : color,dismissible : this.barrierDismissible,semanticsLabel : this.barrierLabel,barrierSemanticsDismissible : this.semanticsDismissible});
        }else {
            barrier = lib20.ModalBarrier({
                dismissible : this.barrierDismissible,semanticsLabel : this.barrierLabel,barrierSemanticsDismissible : this.semanticsDismissible});
        }
        return lib13.IgnorePointer({
            ignoring : op(Op.EQUALS,this.animation.status,lib5.AnimationStatus.reverse) || op(Op.EQUALS,this.animation.status,lib5.AnimationStatus.dismissed),child : barrier});
    }
    _modalScopeCache : lib9.Widget;

    _buildModalScope(context : lib9.BuildContext) : lib9.Widget {
        return this._modalScopeCache = ( this._modalScopeCache ) || ( _ModalScope({
            key : this._scopeKey,route : this}) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createOverlayEntries() : core.DartIterable<lib4.OverlayEntry> { 
        return core.iter<lib4.OverlayEntry>(()=>(function*()  {
            yield this._modalBarrier = lib4.OverlayEntry({
                builder : this._buildModalBarrier.bind(this)});
            yield lib4.OverlayEntry({
                builder : this._buildModalScope.bind(this),maintainState : this.maintainState});
        }).call(this));
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${settings}, animation: ${this._animation})`;
    }
}

export namespace PopupRoute {
    export type Constructors = ModalRoute.Constructors | 'PopupRoute';
    export type Interface<T> = Omit<PopupRoute<T>, Constructors>;
}
@DartClass
export class PopupRoute<T> extends ModalRoute<T> {
    constructor(_namedArguments? : {settings? : lib3.RouteSettings}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PopupRoute(_namedArguments? : {settings? : lib3.RouteSettings}) {
        let {settings} = Object.assign({
        }, _namedArguments );
        super.ModalRoute({
            settings : settings});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get opaque() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get maintainState() : boolean {
        return true;
    }
}

export namespace _DialogRoute {
    export type Constructors = PopupRoute.Constructors | '_DialogRoute';
    export type Interface<T> = Omit<_DialogRoute<T>, Constructors>;
}
@DartClass
export class _DialogRoute<T> extends PopupRoute<T> {
    constructor(_namedArguments? : {pageBuilder? : (context : lib9.BuildContext,animation : lib5.Animation<double>,secondaryAnimation : lib5.Animation<double>) => lib9.Widget,barrierDismissible? : boolean,barrierLabel? : string,barrierColor? : any,transitionDuration? : core.DartDuration,transitionBuilder? : (context : lib9.BuildContext,animation : lib5.Animation<double>,secondaryAnimation : lib5.Animation<double>,child : lib9.Widget) => lib9.Widget,settings? : lib3.RouteSettings}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DialogRoute(_namedArguments? : {pageBuilder? : (context : lib9.BuildContext,animation : lib5.Animation<double>,secondaryAnimation : lib5.Animation<double>) => lib9.Widget,barrierDismissible? : boolean,barrierLabel? : string,barrierColor? : any,transitionDuration? : core.DartDuration,transitionBuilder? : (context : lib9.BuildContext,animation : lib5.Animation<double>,secondaryAnimation : lib5.Animation<double>,child : lib9.Widget) => lib9.Widget,settings? : lib3.RouteSettings}) {
        let {pageBuilder,barrierDismissible,barrierLabel,barrierColor,transitionDuration,transitionBuilder,settings} = Object.assign({
            "barrierDismissible" : true,
            "barrierColor" : new bare.createInstance(any,null,2147483648),
            "transitionDuration" : new core.DartDuration({
                milliseconds : 200})}, _namedArguments );
        this._pageBuilder = pageBuilder;
        this._barrierDismissible = this.barrierDismissible;
        this._barrierLabel = this.barrierLabel;
        this._barrierColor = this.barrierColor;
        this._transitionDuration = this.transitionDuration;
        this._transitionBuilder = transitionBuilder;
        this.assert = assert;
    }
     : any;

    _pageBuilder;
    _barrierDismissible;
    _barrierLabel;
    _barrierColor;
    _transitionDuration;
    _transitionBuilder;
    super;

     : any;

     : any;

    _pageBuilder : (context : lib9.BuildContext,animation : lib5.Animation<double>,secondaryAnimation : lib5.Animation<double>) => lib9.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get barrierDismissible() : boolean {
        return this._barrierDismissible;
    }
    _barrierDismissible : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get barrierLabel() : string {
        return this._barrierLabel;
    }
    _barrierLabel : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get barrierColor() : any {
        return this._barrierColor;
    }
    _barrierColor : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get transitionDuration() : core.DartDuration {
        return this._transitionDuration;
    }
    _transitionDuration : core.DartDuration;

    _transitionBuilder : (context : lib9.BuildContext,animation : lib5.Animation<double>,secondaryAnimation : lib5.Animation<double>,child : lib9.Widget) => lib9.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildPage(context : lib9.BuildContext,animation : lib5.Animation<double>,secondaryAnimation : lib5.Animation<double>) : lib9.Widget {
        return lib13.Semantics({
            child : this._pageBuilder(context,animation,secondaryAnimation),scopesRoute : true,explicitChildNodes : true});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildTransitions(context : lib9.BuildContext,animation : lib5.Animation<double>,secondaryAnimation : lib5.Animation<double>,child : lib9.Widget) : lib9.Widget {
        if (op(Op.EQUALS,this._transitionBuilder,null)) {
            return lib14.FadeTransition({
                opacity : lib7.CurvedAnimation({
                    parent : animation,curve : lib18.Curves.linear}),child : child});
        }
        return this._transitionBuilder(context,animation,secondaryAnimation,child);
    }
}

export class properties {
    private static __$_kTransparent : any;
    static get _kTransparent() : any { 
        if (this.__$_kTransparent===undefined) {
            this.__$_kTransparent = Color(0);
        }
        return this.__$_kTransparent;
    }
    static set _kTransparent(__$value : any)  { 
        this.__$_kTransparent = __$value;
    }

}
