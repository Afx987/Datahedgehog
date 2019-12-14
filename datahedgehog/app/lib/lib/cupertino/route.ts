/** Library asset:datahedgehog_monitor/lib/lib/cupertino/route.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/gradient";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/implicit_animations";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/widgets/pages";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/navigator";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/routes";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/widgets/transitions";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/gestures/monodrag";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/gestures/drag_details";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/gestures/events";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as math from "@dart2ts/dart/math";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/rendering/stack";
import * as lib25 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/painting/decoration";
import * as lib27 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib28 from "@dart2ts.packages/flutter/lib/src/painting/image_provider";

export var dragUpdate : (delta : double) => any = (delta : double) : any =>  {
    properties.controller.value -= delta;
};
export var dragEnd : (velocity : double) => any = (velocity : double) : any =>  {
    let animationCurve : lib15.Curve = lib15.Curves.fastLinearToSlowEaseIn;
    let animateForward : boolean;
    if (new core.DartDouble(velocity).abs() >= properties._kMinFlingVelocity) animateForward = velocity > 0 ? false : true;else animateForward = properties.controller.value > 0.5 ? true : false;
    if (animateForward) {
        let droppedPageForwardAnimationTime : number = math.min(lerpDouble(properties._kMaxDroppedSwipePageForwardAnimationTime,0,properties.controller.value).floor(),properties._kMaxPageBackAnimationTime);
        properties.controller.animateTo(1.0,{
            duration : core.DartDuration({
                milliseconds : droppedPageForwardAnimationTime}),curve : animationCurve});
    }else {
        let droppedPageBackAnimationTime : number = lerpDouble(0,properties._kMaxDroppedSwipePageForwardAnimationTime,properties.controller.value).floor();
        properties.controller.animateBack(0.0,{
            duration : core.DartDuration({
                milliseconds : droppedPageBackAnimationTime}),curve : animationCurve});
    }
    if (properties.controller.isAnimating) {
        properties._animating = true;
        properties.controller.addStatusListener(_handleStatusChanged);
    }else {
        return _handleStatusChanged(properties.controller.status);
    }
};
export var _handleStatusChanged : (status : lib12.AnimationStatus) => any = (status : lib12.AnimationStatus) : any =>  {
    if (properties._animating) {
        properties.controller.removeStatusListener(_handleStatusChanged);
    }
    properties._animating = false;
    if (op(Op.EQUALS,status,lib12.AnimationStatus.dismissed)) properties.navigator.pop();
    properties.onEnded();
};
export var dispose : () => any = () : any =>  {
    if (properties._animating) properties.controller.removeStatusListener(_handleStatusChanged);
    properties.navigator.didStopUserGesture();
};
export var showCupertinoModalPopup : <T>(_namedArguments? : {context? : lib8.BuildContext,builder? : (context : lib8.BuildContext) => lib8.Widget}) => async.Future<T> = <T>(_namedArguments? : {context? : lib8.BuildContext,builder? : (context : lib8.BuildContext) => lib8.Widget}) : async.Future<T> =>  {
    let {context,builder} = Object.assign({
    }, _namedArguments );
    return lib9.Navigator.of(context,{
        rootNavigator : true}).push(_CupertinoModalPopupRoute({
        builder : builder,barrierLabel : 'Dismiss'}));
};
export var _buildCupertinoDialogTransitions : (context : lib8.BuildContext,animation : lib12.Animation<double>,secondaryAnimation : lib12.Animation<double>,child : lib8.Widget) => lib8.Widget = (context : lib8.BuildContext,animation : lib12.Animation<double>,secondaryAnimation : lib12.Animation<double>,child : lib8.Widget) : lib8.Widget =>  {
    let fadeAnimation : lib16.CurvedAnimation = lib16.CurvedAnimation({
        parent : animation,curve : lib15.Curves.easeInOut});
    if (op(Op.EQUALS,animation.status,lib12.AnimationStatus.reverse)) {
        return lib17.FadeTransition({
            opacity : fadeAnimation,child : child});
    }
    return lib17.FadeTransition({
        opacity : fadeAnimation,child : lib17.ScaleTransition({
            child : child,scale : animation.drive(properties._dialogTween)})});
};
export var showCupertinoDialog : <T>(_namedArguments? : {context? : lib8.BuildContext,builder? : (context : lib8.BuildContext) => lib8.Widget}) => async.Future<T> = <T>(_namedArguments? : {context? : lib8.BuildContext,builder? : (context : lib8.BuildContext) => lib8.Widget}) : async.Future<T> =>  {
    let {context,builder} = Object.assign({
    }, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (builder != null); */;
    return lib11.showGeneralDialog({
        context : context,barrierDismissible : false,barrierColor : properties._kModalBarrierColor,transitionDuration : new core.DartDuration({
            milliseconds : 300}),pageBuilder : (context : lib8.BuildContext,animation : lib12.Animation<double>,secondaryAnimation : lib12.Animation<double>) =>  {
            return builder(context);
        },transitionBuilder : _buildCupertinoDialogTransitions});
};
export namespace CupertinoPageRoute {
    export type Constructors = lib7.PageRoute.Constructors | 'CupertinoPageRoute';
    export type Interface<T> = Omit<CupertinoPageRoute<T>, Constructors>;
}
@DartClass
export class CupertinoPageRoute<T> extends lib7.PageRoute<T> {
    constructor(_namedArguments? : {builder? : (context : lib8.BuildContext) => lib8.Widget,title? : string,settings? : lib9.RouteSettings,maintainState? : boolean,fullscreenDialog? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoPageRoute(_namedArguments? : {builder? : (context : lib8.BuildContext) => lib8.Widget,title? : string,settings? : lib9.RouteSettings,maintainState? : boolean,fullscreenDialog? : boolean}) {
        let {builder,title,settings,maintainState,fullscreenDialog} = Object.assign({
            "maintainState" : true,
            "fullscreenDialog" : false}, _namedArguments );
        this.assert = assert;
        this.builder = builder;
        this.title = title;
        this.maintainState = maintainState;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    settings;
    fullscreenDialog;

     : any;

    builder : (context : lib8.BuildContext) => lib8.Widget;

    title : string;

    _previousTitle : lib10.ValueNotifier<string>;

    get previousTitle() : lib10.ValueListenable<string> {
        /* TODO (AssertStatementImpl) : assert (_previousTitle != null, 'Cannot read the previousTitle for a route that has not yet been installed'); */;
        ;
        return this._previousTitle;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangePrevious(previousRoute : any) : any {
        let previousTitleString : string = is(previousRoute, CupertinoPageRoute<any>) ? previousRoute.title : null;
        if (op(Op.EQUALS,this._previousTitle,null)) {
            this._previousTitle = lib10.ValueNotifier(previousTitleString);
        }else {
            this._previousTitle.value = previousTitleString;
        }
        super.didChangePrevious(previousRoute);
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    maintainState : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get transitionDuration() : core.DartDuration {
        return new core.DartDuration({
            milliseconds : 400});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get barrierColor() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get barrierLabel() : string {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    canTransitionFrom(previousRoute : lib11.TransitionRoute<any>) : boolean {
        return is(previousRoute, CupertinoPageRoute<any>);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    canTransitionTo(nextRoute : lib11.TransitionRoute<any>) : boolean {
        return is(nextRoute, CupertinoPageRoute<any>) && !nextRoute.fullscreenDialog;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        CupertinoPageRoute._popGestureInProgress.remove(this);
        super.dispose();
    }
    static isPopGestureInProgress(route : lib7.PageRoute<any>) : boolean {
        return CupertinoPageRoute._popGestureInProgress.contains(route);
    }
    private static __$_popGestureInProgress : core.DartSet<lib7.PageRoute<any>>;
    static get _popGestureInProgress() : core.DartSet<lib7.PageRoute<any>> { 
        if (this.__$_popGestureInProgress===undefined) {
            this.__$_popGestureInProgress = core.DartSet();
        }
        return this.__$_popGestureInProgress;
    }
    static set _popGestureInProgress(__$value : core.DartSet<lib7.PageRoute<any>>)  { 
        this.__$_popGestureInProgress = __$value;
    }

    get popGestureInProgress() : boolean {
        return CupertinoPageRoute.isPopGestureInProgress(this);
    }
    get popGestureEnabled() : boolean {
        return CupertinoPageRoute._isPopGestureEnabled(this);
    }
    static _isPopGestureEnabled<T>(route : lib7.PageRoute<T>) : boolean {
        if (route.isFirst) return false;
        if (route.willHandlePopInternally) return false;
        if (route.hasScopedWillPopCallback) return false;
        if (route.fullscreenDialog) return false;
        if (route.controller.status != lib12.AnimationStatus.completed) return false;
        if (CupertinoPageRoute._popGestureInProgress.contains(route)) return false;
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildPage(context : lib8.BuildContext,animation : lib12.Animation<double>,secondaryAnimation : lib12.Animation<double>) : lib8.Widget {
        let result : lib8.Widget = lib13.Semantics({
            scopesRoute : true,explicitChildNodes : true,child : this.builder(context)});
        /* TODO (AssertStatementImpl) : assert (() {if (result == null) {throw FlutterError('The builder for route "${settings.name}" returned null.\n' 'Route builders must never return null.');} return true;}()); */;
        return result;
    }
    static _startPopGesture<T>(route : lib7.PageRoute<T>) : _CupertinoBackGestureController<T> {
        /* TODO (AssertStatementImpl) : assert (!_popGestureInProgress.contains(route)); */;
        /* TODO (AssertStatementImpl) : assert (_isPopGestureEnabled(route)); */;
        CupertinoPageRoute._popGestureInProgress.add(route);
        let backController : _CupertinoBackGestureController<T>;
        backController = _CupertinoBackGestureController({
            navigator : route.navigator,controller : route.controller,onEnded : () =>  {
                ((_523_)=>(!!_523_)?_523_.dispose():null)(backController);
                backController = null;
                CupertinoPageRoute._popGestureInProgress.remove(route);
            }});
        return backController;
    }
    static buildPageTransitions<T>(route : lib7.PageRoute<T>,context : lib8.BuildContext,animation : lib12.Animation<double>,secondaryAnimation : lib12.Animation<double>,child : lib8.Widget) : lib8.Widget {
        if (route.fullscreenDialog) {
            return CupertinoFullscreenDialogTransition({
                animation : animation,child : child});
        }else {
            return CupertinoPageTransition({
                primaryRouteAnimation : animation,secondaryRouteAnimation : secondaryAnimation,linearTransition : CupertinoPageRoute._popGestureInProgress.contains(route),child : _CupertinoBackGestureDetector({
                    enabledCallback : () =>  {
                        return CupertinoPageRoute._isPopGestureEnabled(route);
                    },onStartPopGesture : () =>  {
                        return CupertinoPageRoute._startPopGesture(route);
                    },child : child})});
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildTransitions(context : lib8.BuildContext,animation : lib12.Animation<double>,secondaryAnimation : lib12.Animation<double>,child : lib8.Widget) : lib8.Widget {
        return CupertinoPageRoute.buildPageTransitions(this,context,animation,secondaryAnimation,child);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get debugLabel() : string {
        return `${super.debugLabel}(${this.settings.name})`;
    }
}

export namespace CupertinoPageTransition {
    export type Constructors = lib8.StatelessWidget.Constructors | 'CupertinoPageTransition';
    export type Interface = Omit<CupertinoPageTransition, Constructors>;
}
@DartClass
export class CupertinoPageTransition extends lib8.StatelessWidget {
    constructor(_namedArguments? : {key? : lib14.Key,primaryRouteAnimation? : lib12.Animation<double>,secondaryRouteAnimation? : lib12.Animation<double>,child? : lib8.Widget,linearTransition? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoPageTransition(_namedArguments? : {key? : lib14.Key,primaryRouteAnimation? : lib12.Animation<double>,secondaryRouteAnimation? : lib12.Animation<double>,child? : lib8.Widget,linearTransition? : boolean}) {
        let {key,primaryRouteAnimation,secondaryRouteAnimation,child,linearTransition} = Object.assign({
        }, _namedArguments );
        this._primaryPositionAnimation = (linearTransition ? primaryRouteAnimation : lib16.CurvedAnimation({
            parent : primaryRouteAnimation,curve : lib15.Curves.linearToEaseOut,reverseCurve : lib15.Curves.easeInToLinear})).drive(properties._kRightMiddleTween);
        this._secondaryPositionAnimation = lib16.CurvedAnimation({
            parent : secondaryRouteAnimation,curve : lib15.Curves.linearToEaseOut,reverseCurve : lib15.Curves.easeInToLinear}).drive(properties._kMiddleLeftTween);
        this._primaryShadowAnimation = lib16.CurvedAnimation({
            parent : primaryRouteAnimation,curve : lib15.Curves.linearToEaseOut}).drive(properties._kGradientShadowTween);
        this.assert = assert;
        this.child = child;
    }
     : any;

    _primaryPositionAnimation;
    _secondaryPositionAnimation;
    _primaryShadowAnimation;
    super;

     : any;

     : any;

    _primaryPositionAnimation : lib12.Animation<any>;

    _secondaryPositionAnimation : lib12.Animation<any>;

    _primaryShadowAnimation : lib12.Animation<lib26.Decoration>;

    child : lib8.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib8.BuildContext) : lib8.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasDirectionality(context)); */;
        let textDirection : any = lib13.Directionality.of(context);
        return lib17.SlideTransition({
            position : this._secondaryPositionAnimation,textDirection : textDirection,transformHitTests : false,child : lib17.SlideTransition({
                position : this._primaryPositionAnimation,textDirection : textDirection,child : lib17.DecoratedBoxTransition({
                    decoration : this._primaryShadowAnimation,child : this.child})})});
    }
}

export namespace CupertinoFullscreenDialogTransition {
    export type Constructors = lib8.StatelessWidget.Constructors | 'CupertinoFullscreenDialogTransition';
    export type Interface = Omit<CupertinoFullscreenDialogTransition, Constructors>;
}
@DartClass
export class CupertinoFullscreenDialogTransition extends lib8.StatelessWidget {
    constructor(_namedArguments? : {key? : lib14.Key,animation? : lib12.Animation<double>,child? : lib8.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoFullscreenDialogTransition(_namedArguments? : {key? : lib14.Key,animation? : lib12.Animation<double>,child? : lib8.Widget}) {
        let {key,animation,child} = Object.assign({
        }, _namedArguments );
        this._positionAnimation = animation.drive(lib3.CurveTween({
            curve : lib15.Curves.easeInOut})).drive(properties._kBottomUpTween);
        super.StatelessWidget({
            key : key});
        this.child = child;
    }
    _positionAnimation : lib12.Animation<any>;

    child : lib8.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib8.BuildContext) : lib8.Widget {
        return lib17.SlideTransition({
            position : this._positionAnimation,child : this.child});
    }
}

export namespace _CupertinoBackGestureDetector {
    export type Constructors = lib8.StatefulWidget.Constructors | '_CupertinoBackGestureDetector';
    export type Interface<T> = Omit<_CupertinoBackGestureDetector<T>, Constructors>;
}
@DartClass
export class _CupertinoBackGestureDetector<T> extends lib8.StatefulWidget {
    constructor(_namedArguments? : {key? : lib14.Key,enabledCallback? : <T>() => boolean,onStartPopGesture? : <T>() => _CupertinoBackGestureController<T>,child? : lib8.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoBackGestureDetector(_namedArguments? : {key? : lib14.Key,enabledCallback? : <T>() => boolean,onStartPopGesture? : <T>() => _CupertinoBackGestureController<T>,child? : lib8.Widget}) {
        let {key,enabledCallback,onStartPopGesture,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.enabledCallback = enabledCallback;
        this.onStartPopGesture = onStartPopGesture;
        this.child = child;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    child : lib8.Widget;

    enabledCallback : <T>() => boolean;

    onStartPopGesture : <T>() => _CupertinoBackGestureController<T>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _CupertinoBackGestureDetectorState<T> {
        return _CupertinoBackGestureDetectorState();
    }
}

export namespace _CupertinoBackGestureDetectorState {
    export type Constructors = '_CupertinoBackGestureDetectorState';
    export type Interface<T> = Omit<_CupertinoBackGestureDetectorState<T>, Constructors>;
}
@DartClass
export class _CupertinoBackGestureDetectorState<T> extends any {
    _backGestureController : _CupertinoBackGestureController<T>;

    _recognizer : lib18.HorizontalDragGestureRecognizer;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._recognizer = ((_) : any =>  {
            {
                _.onStart = this._handleDragStart.bind(this);
                _.onUpdate = this._handleDragUpdate.bind(this);
                _.onEnd = this._handleDragEnd.bind(this);
                _.onCancel = this._handleDragCancel.bind(this);
                return _;
            }
        })(lib18.HorizontalDragGestureRecognizer({
            debugOwner : this}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._recognizer.dispose();
        super.dispose();
    }
    _handleDragStart(details : lib19.DragStartDetails) : any {
        /* TODO (AssertStatementImpl) : assert (mounted); */;
        /* TODO (AssertStatementImpl) : assert (_backGestureController == null); */;
        this._backGestureController = widget.onStartPopGesture();
    }
    _handleDragUpdate(details : lib19.DragUpdateDetails) : any {
        /* TODO (AssertStatementImpl) : assert (mounted); */;
        /* TODO (AssertStatementImpl) : assert (_backGestureController != null); */;
        this._backGestureController.dragUpdate(this._convertToLogical(details.primaryDelta / lib20.properties.context.size.width));
    }
    _handleDragEnd(details : lib19.DragEndDetails) : any {
        /* TODO (AssertStatementImpl) : assert (mounted); */;
        /* TODO (AssertStatementImpl) : assert (_backGestureController != null); */;
        this._backGestureController.dragEnd(this._convertToLogical(op(Op.DIVIDE,details.velocity.pixelsPerSecond.dx,lib20.properties.context.size.width)));
        this._backGestureController = null;
    }
    _handleDragCancel() : any {
        /* TODO (AssertStatementImpl) : assert (mounted); */;
        ((_524_)=>(!!_524_)?_524_.dragEnd(0.0):null)(this._backGestureController);
        this._backGestureController = null;
    }
    _handlePointerDown(event : lib21.PointerDownEvent) : any {
        if (widget.enabledCallback()) this._recognizer.addPointer(event);
    }
    _convertToLogical(value : double) : double {
        switch (lib13.Directionality.of(lib20.properties.context)) {
            case TextDirection.rtl:
                return -value;
            case TextDirection.ltr:
                return value;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib8.BuildContext) : lib8.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasDirectionality(context)); */;
        let dragAreaWidth : double = op(Op.EQUALS,lib13.Directionality.of(context),TextDirection.ltr) ? lib22.MediaQuery.of(context).padding.left : lib22.MediaQuery.of(context).padding.right;
        dragAreaWidth = math.max(dragAreaWidth,properties._kBackGestureWidth);
        return lib13.Stack({
            fit : lib24.StackFit.passthrough,children : new core.DartList.literal<lib8.Widget>(widget.child,lib13.PositionedDirectional({
                start : 0.0,width : dragAreaWidth,top : 0.0,bottom : 0.0,child : lib13.Listener({
                    onPointerDown : this._handlePointerDown.bind(this),behavior : HitTestBehavior.translucent})}))});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoBackGestureDetectorState() {
    }
}

export namespace _CupertinoBackGestureController {
    export type Constructors = '_CupertinoBackGestureController' | 'didStartUserGesture';
    export type Interface<T> = Omit<_CupertinoBackGestureController<T>, Constructors>;
}
@DartClass
export class _CupertinoBackGestureController<T> {
    constructor(_namedArguments? : {navigator? : any,controller? : any,onEnded? : any}) {
    }
    @defaultConstructor
    _CupertinoBackGestureController(_namedArguments? : {navigator? : any,controller? : any,onEnded? : any}) {
        let {navigator,controller,onEnded} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.navigator = navigator;
        this.controller = controller;
        this.onEnded = onEnded;
    }
     : any;

     : any;

     : any;

    @namedConstructor
    didStartUserGesture() {
    }
    static didStartUserGesture : new<T>() => _CupertinoBackGestureController<T>;

}

export namespace _CupertinoEdgeShadowDecoration {
    export type Constructors = lib26.Decoration.Constructors | '_CupertinoEdgeShadowDecoration';
    export type Interface = Omit<_CupertinoEdgeShadowDecoration, Constructors>;
}
@DartClass
export class _CupertinoEdgeShadowDecoration extends lib26.Decoration {
    constructor(_namedArguments? : {edgeGradient? : lib5.LinearGradient}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoEdgeShadowDecoration(_namedArguments? : {edgeGradient? : lib5.LinearGradient}) {
        let {edgeGradient} = Object.assign({
        }, _namedArguments );
        this.edgeGradient = edgeGradient;
    }
    private static __$none : _CupertinoEdgeShadowDecoration;
    static get none() : _CupertinoEdgeShadowDecoration { 
        if (this.__$none===undefined) {
            this.__$none = _CupertinoEdgeShadowDecoration();
        }
        return this.__$none;
    }

    edgeGradient : lib5.LinearGradient;

    static lerp(a : _CupertinoEdgeShadowDecoration,b : _CupertinoEdgeShadowDecoration,t : double) : _CupertinoEdgeShadowDecoration {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        return _CupertinoEdgeShadowDecoration({
            edgeGradient : lib5.LinearGradient.lerp(((t)=>(!!t)?t.edgeGradient:null)(a),((t)=>(!!t)?t.edgeGradient:null)(b),t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : lib26.Decoration,t : double) : _CupertinoEdgeShadowDecoration {
        if (isNot(a, _CupertinoEdgeShadowDecoration)) return _CupertinoEdgeShadowDecoration.lerp(null,this,t);
        return _CupertinoEdgeShadowDecoration.lerp(a,this,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : lib26.Decoration,t : double) : _CupertinoEdgeShadowDecoration {
        if (isNot(b, _CupertinoEdgeShadowDecoration)) return _CupertinoEdgeShadowDecoration.lerp(this,null,t);
        return _CupertinoEdgeShadowDecoration.lerp(this,b,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createBoxPainter(onChanged? : any) : _CupertinoEdgeShadowPainter {
        return _CupertinoEdgeShadowPainter(this,onChanged);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : _CupertinoEdgeShadowDecoration = other;
        return op(Op.EQUALS,this.edgeGradient,typedOther.edgeGradient);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.edgeGradient.hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib27.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib27.DiagnosticsProperty('edgeGradient',this.edgeGradient));
    }
}

export namespace _CupertinoEdgeShadowPainter {
    export type Constructors = lib26.BoxPainter.Constructors | '_CupertinoEdgeShadowPainter';
    export type Interface = Omit<_CupertinoEdgeShadowPainter, Constructors>;
}
@DartClass
export class _CupertinoEdgeShadowPainter extends lib26.BoxPainter {
    constructor(_decoration : _CupertinoEdgeShadowDecoration,onChange : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoEdgeShadowPainter(_decoration : _CupertinoEdgeShadowDecoration,onChange : any) {
        this.assert = assert;
        this._decoration = _decoration;
    }
     : any;

     : any;

    _decoration : _CupertinoEdgeShadowDecoration;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,offset : any,configuration : lib28.ImageConfiguration) : any {
        let gradient : lib5.LinearGradient = this._decoration.edgeGradient;
        if (op(Op.EQUALS,gradient,null)) return;
        let textDirection : any = configuration.textDirection;
        /* TODO (AssertStatementImpl) : assert (textDirection != null); */;
        let deltaX : double;
        switch (textDirection) {
            case TextDirection.rtl:
                deltaX = configuration.size.width;
                break;
            case TextDirection.ltr:
                deltaX = op(Op.NEG,configuration.size.width);
                break;
        }
        let rect : any = (op(Op.BITAND,offset,configuration.size)).translate(deltaX,0.0);
        let paint : any = ((_) : any =>  {
            {
                _.shader = gradient.createShader(rect,{
                    textDirection : textDirection});
                return _;
            }
        })(Paint());
        canvas.drawRect(rect,paint);
    }
}

export namespace _CupertinoModalPopupRoute {
    export type Constructors = lib11.PopupRoute.Constructors | '_CupertinoModalPopupRoute';
    export type Interface<T> = Omit<_CupertinoModalPopupRoute<T>, Constructors>;
}
@DartClass
export class _CupertinoModalPopupRoute<T> extends lib11.PopupRoute<T> {
    constructor(_namedArguments? : {builder? : (context : lib8.BuildContext) => lib8.Widget,barrierLabel? : string,settings? : lib9.RouteSettings}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoModalPopupRoute(_namedArguments? : {builder? : (context : lib8.BuildContext) => lib8.Widget,barrierLabel? : string,settings? : lib9.RouteSettings}) {
        let {builder,barrierLabel,settings} = Object.assign({
        }, _namedArguments );
        super.PopupRoute({
            settings : settings});
        this.builder = builder;
        this.barrierLabel = barrierLabel;
    }
    builder : (context : lib8.BuildContext) => lib8.Widget;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    barrierLabel : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get barrierColor() : any {
        return properties._kModalBarrierColor;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get barrierDismissible() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get semanticsDismissible() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get transitionDuration() : core.DartDuration {
        return properties._kModalPopupTransitionDuration;
    }
    _animation : lib12.Animation<double>;

    _offsetTween : lib3.Tween<any>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createAnimation() : lib12.Animation<double> {
        /* TODO (AssertStatementImpl) : assert (_animation == null); */;
        this._animation = lib16.CurvedAnimation({
            parent : super.createAnimation(),curve : lib15.Curves.ease,reverseCurve : lib15.Curves.ease.flipped});
        this._offsetTween = lib3.Tween({
            begin : new bare.createInstance(any,null,0.0,1.0),end : new bare.createInstance(any,null,0.0,0.0)});
        return this._animation;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildPage(context : lib8.BuildContext,animation : lib12.Animation<double>,secondaryAnimation : lib12.Animation<double>) : lib8.Widget {
        return this.builder(context);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildTransitions(context : lib8.BuildContext,animation : lib12.Animation<double>,secondaryAnimation : lib12.Animation<double>,child : lib8.Widget) : lib8.Widget {
        return lib13.Align({
            alignment : lib4.Alignment.bottomCenter,child : lib13.FractionalTranslation({
                translation : this._offsetTween.evaluate(this._animation),child : child})});
    }
}

export class properties {
    private static __$_kBackGestureWidth : double;
    static get _kBackGestureWidth() : double { 
        if (this.__$_kBackGestureWidth===undefined) {
            this.__$_kBackGestureWidth = 20.0;
        }
        return this.__$_kBackGestureWidth;
    }
    static set _kBackGestureWidth(__$value : double)  { 
        this.__$_kBackGestureWidth = __$value;
    }

    private static __$_kMinFlingVelocity : double;
    static get _kMinFlingVelocity() : double { 
        if (this.__$_kMinFlingVelocity===undefined) {
            this.__$_kMinFlingVelocity = 1.0;
        }
        return this.__$_kMinFlingVelocity;
    }
    static set _kMinFlingVelocity(__$value : double)  { 
        this.__$_kMinFlingVelocity = __$value;
    }

    private static __$_kMaxDroppedSwipePageForwardAnimationTime : number;
    static get _kMaxDroppedSwipePageForwardAnimationTime() : number { 
        if (this.__$_kMaxDroppedSwipePageForwardAnimationTime===undefined) {
            this.__$_kMaxDroppedSwipePageForwardAnimationTime = 800;
        }
        return this.__$_kMaxDroppedSwipePageForwardAnimationTime;
    }
    static set _kMaxDroppedSwipePageForwardAnimationTime(__$value : number)  { 
        this.__$_kMaxDroppedSwipePageForwardAnimationTime = __$value;
    }

    private static __$_kMaxPageBackAnimationTime : number;
    static get _kMaxPageBackAnimationTime() : number { 
        if (this.__$_kMaxPageBackAnimationTime===undefined) {
            this.__$_kMaxPageBackAnimationTime = 300;
        }
        return this.__$_kMaxPageBackAnimationTime;
    }
    static set _kMaxPageBackAnimationTime(__$value : number)  { 
        this.__$_kMaxPageBackAnimationTime = __$value;
    }

    private static __$_kModalBarrierColor : any;
    static get _kModalBarrierColor() : any { 
        if (this.__$_kModalBarrierColor===undefined) {
            this.__$_kModalBarrierColor = Color(1711539215);
        }
        return this.__$_kModalBarrierColor;
    }
    static set _kModalBarrierColor(__$value : any)  { 
        this.__$_kModalBarrierColor = __$value;
    }

    private static __$_kModalPopupTransitionDuration : core.DartDuration;
    static get _kModalPopupTransitionDuration() : core.DartDuration { 
        if (this.__$_kModalPopupTransitionDuration===undefined) {
            this.__$_kModalPopupTransitionDuration = core.DartDuration({
                milliseconds : 335});
        }
        return this.__$_kModalPopupTransitionDuration;
    }
    static set _kModalPopupTransitionDuration(__$value : core.DartDuration)  { 
        this.__$_kModalPopupTransitionDuration = __$value;
    }

    private static __$_kRightMiddleTween : lib3.Animatable<any>;
    static get _kRightMiddleTween() : lib3.Animatable<any> { 
        if (this.__$_kRightMiddleTween===undefined) {
            this.__$_kRightMiddleTween = lib3.Tween({
                begin : new bare.createInstance(any,null,1.0,0.0),end : Offset.zero});
        }
        return this.__$_kRightMiddleTween;
    }
    static set _kRightMiddleTween(__$value : lib3.Animatable<any>)  { 
        this.__$_kRightMiddleTween = __$value;
    }

    private static __$_kMiddleLeftTween : lib3.Animatable<any>;
    static get _kMiddleLeftTween() : lib3.Animatable<any> { 
        if (this.__$_kMiddleLeftTween===undefined) {
            this.__$_kMiddleLeftTween = lib3.Tween({
                begin : Offset.zero,end : new bare.createInstance(any,null,-1.0 / 3.0,0.0)});
        }
        return this.__$_kMiddleLeftTween;
    }
    static set _kMiddleLeftTween(__$value : lib3.Animatable<any>)  { 
        this.__$_kMiddleLeftTween = __$value;
    }

    private static __$_kBottomUpTween : lib3.Animatable<any>;
    static get _kBottomUpTween() : lib3.Animatable<any> { 
        if (this.__$_kBottomUpTween===undefined) {
            this.__$_kBottomUpTween = lib3.Tween({
                begin : new bare.createInstance(any,null,0.0,1.0),end : Offset.zero});
        }
        return this.__$_kBottomUpTween;
    }
    static set _kBottomUpTween(__$value : lib3.Animatable<any>)  { 
        this.__$_kBottomUpTween = __$value;
    }

    private static __$_kGradientShadowTween : lib6.DecorationTween;
    static get _kGradientShadowTween() : lib6.DecorationTween { 
        if (this.__$_kGradientShadowTween===undefined) {
            this.__$_kGradientShadowTween = lib6.DecorationTween({
                begin : _CupertinoEdgeShadowDecoration.none,end : new _CupertinoEdgeShadowDecoration({
                    edgeGradient : lib5.LinearGradient({
                        begin : lib4.AlignmentDirectional(0.9,0.0),end : lib4.AlignmentDirectional.centerEnd,colors : new core.DartList.literal<any>(Color(0),Color(67108864),Color(301989888),Color(939524096)),stops : new core.DartList.literal<double>(0.0,0.3,0.6,1.0)})})});
        }
        return this.__$_kGradientShadowTween;
    }
    static set _kGradientShadowTween(__$value : lib6.DecorationTween)  { 
        this.__$_kGradientShadowTween = __$value;
    }

    private static __$navigator : lib9.NavigatorState;
    static get navigator() : lib9.NavigatorState { 
        return this.__$navigator;
    }
    static set navigator(__$value : lib9.NavigatorState)  { 
        this.__$navigator = __$value;
    }

    private static __$controller : lib25.AnimationController;
    static get controller() : lib25.AnimationController { 
        return this.__$controller;
    }
    static set controller(__$value : lib25.AnimationController)  { 
        this.__$controller = __$value;
    }

    private static __$onEnded : any;
    static get onEnded() : any { 
        return this.__$onEnded;
    }
    static set onEnded(__$value : any)  { 
        this.__$onEnded = __$value;
    }

    private static __$_animating : boolean;
    static get _animating() : boolean { 
        if (this.__$_animating===undefined) {
            this.__$_animating = false;
        }
        return this.__$_animating;
    }
    static set _animating(__$value : boolean)  { 
        this.__$_animating = __$value;
    }

    private static __$_dialogTween : lib3.Animatable<double>;
    static get _dialogTween() : lib3.Animatable<double> { 
        if (this.__$_dialogTween===undefined) {
            this.__$_dialogTween = lib3.Tween({
                begin : 1.2,end : 1.0}).chain(lib3.CurveTween({
                curve : lib15.Curves.fastOutSlowIn}));
        }
        return this.__$_dialogTween;
    }
    static set _dialogTween(__$value : lib3.Animatable<double>)  { 
        this.__$_dialogTween = __$value;
    }

}
