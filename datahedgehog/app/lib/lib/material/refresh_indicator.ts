/** Library asset:datahedgehog_monitor/lib/lib/material/refresh_indicator.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_notification";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib10 from "./theme";
import * as lib11 from "./theme_data";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/overscroll_indicator";
import * as math from "@dart2ts/dart/math";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/widgets/notification_listener";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib19 from "./material_localizations";
import * as lib20 from "./progress_indicator";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/widgets/transitions";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/widgets/basic";

export enum _RefreshIndicatorMode {
    drag,
    armed,
    snap,
    refresh,
    done,
    canceled
}

export namespace RefreshIndicator {
    export type Constructors = lib3.StatefulWidget.Constructors | 'RefreshIndicator';
    export type Interface = Omit<RefreshIndicator, Constructors>;
}
@DartClass
export class RefreshIndicator extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,displacement? : double,onRefresh? : any,color? : any,backgroundColor? : any,notificationPredicate? : (notification : lib5.ScrollNotification) => boolean,semanticsLabel? : string,semanticsValue? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RefreshIndicator(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,displacement? : double,onRefresh? : any,color? : any,backgroundColor? : any,notificationPredicate? : (notification : lib5.ScrollNotification) => boolean,semanticsLabel? : string,semanticsValue? : string}) {
        let {key,child,displacement,onRefresh,color,backgroundColor,notificationPredicate,semanticsLabel,semanticsValue} = Object.assign({
            "displacement" : 40.0,
            "notificationPredicate" : lib5.defaultScrollNotificationPredicate}, _namedArguments );
        this.assert = assert;
        this.child = child;
        this.displacement = displacement;
        this.onRefresh = onRefresh;
        this.color = color;
        this.backgroundColor = backgroundColor;
        this.notificationPredicate = notificationPredicate;
        this.semanticsLabel = semanticsLabel;
        this.semanticsValue = semanticsValue;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    child : lib3.Widget;

    displacement : double;

    onRefresh : any;

    color : any;

    backgroundColor : any;

    notificationPredicate : (notification : lib5.ScrollNotification) => boolean;

    semanticsLabel : string;

    semanticsValue : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : RefreshIndicatorState {
        return RefreshIndicatorState();
    }
}

export namespace RefreshIndicatorState {
    export type Constructors = 'RefreshIndicatorState';
    export type Interface = Omit<RefreshIndicatorState, Constructors>;
}
@DartClass
@With(any)
export class RefreshIndicatorState extends any implements any.Interface {
    _positionController : lib6.AnimationController;

    _scaleController : lib6.AnimationController;

    _positionFactor : lib7.Animation<double>;

    _scaleFactor : lib7.Animation<double>;

    _value : lib7.Animation<double>;

    _valueColor : lib7.Animation<any>;

    _mode : _RefreshIndicatorMode;

    void : async.Future<any>;

    _pendingRefreshFuture;

    _isIndicatorAtTop : boolean;

    _dragOffset : double;

    private static __$_threeQuarterTween : lib8.Animatable<double>;
    static get _threeQuarterTween() : lib8.Animatable<double> { 
        if (this.__$_threeQuarterTween===undefined) {
            this.__$_threeQuarterTween = lib8.Tween({
                begin : 0.0,end : 0.75});
        }
        return this.__$_threeQuarterTween;
    }
    static set _threeQuarterTween(__$value : lib8.Animatable<double>)  { 
        this.__$_threeQuarterTween = __$value;
    }

    private static __$_kDragSizeFactorLimitTween : lib8.Animatable<double>;
    static get _kDragSizeFactorLimitTween() : lib8.Animatable<double> { 
        if (this.__$_kDragSizeFactorLimitTween===undefined) {
            this.__$_kDragSizeFactorLimitTween = lib8.Tween({
                begin : 0.0,end : properties._kDragSizeFactorLimit});
        }
        return this.__$_kDragSizeFactorLimitTween;
    }
    static set _kDragSizeFactorLimitTween(__$value : lib8.Animatable<double>)  { 
        this.__$_kDragSizeFactorLimitTween = __$value;
    }

    private static __$_oneToZeroTween : lib8.Animatable<double>;
    static get _oneToZeroTween() : lib8.Animatable<double> { 
        if (this.__$_oneToZeroTween===undefined) {
            this.__$_oneToZeroTween = lib8.Tween({
                begin : 1.0,end : 0.0});
        }
        return this.__$_oneToZeroTween;
    }
    static set _oneToZeroTween(__$value : lib8.Animatable<double>)  { 
        this.__$_oneToZeroTween = __$value;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._positionController = lib6.AnimationController({
            vsync : this});
        this._positionFactor = this._positionController.drive(RefreshIndicatorState._kDragSizeFactorLimitTween);
        this._value = this._positionController.drive(RefreshIndicatorState._threeQuarterTween);
        this._scaleController = lib6.AnimationController({
            vsync : this});
        this._scaleFactor = this._scaleController.drive(RefreshIndicatorState._oneToZeroTween);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        let theme : lib11.ThemeData = lib10.Theme.of(lib9.properties.context);
        this._valueColor = this._positionController.drive(lib8.ColorTween({
            begin : ((widget.color || theme.accentColor)).withOpacity(0.0),end : ((widget.color || theme.accentColor)).withOpacity(1.0)}).chain(lib8.CurveTween({
            curve : new lib12.Interval(0.0,1.0 / properties._kDragSizeFactorLimit)})));
        super.didChangeDependencies();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._positionController.dispose();
        this._scaleController.dispose();
        super.dispose();
    }
    _handleScrollNotification(notification : lib5.ScrollNotification) : boolean {
        if (!widget.notificationPredicate(notification)) return false;
        if (is(notification, lib5.ScrollStartNotification) && notification.metrics.extentBefore == 0.0 && op(Op.EQUALS,this._mode,null) && this._start(notification.metrics.axisDirection)) {
            setState(() =>  {
                this._mode = _RefreshIndicatorMode.drag;
            });
            return false;
        }
        let indicatorAtTopNow : boolean;
        switch (notification.metrics.axisDirection) {
            case lib13.AxisDirection.down:
                indicatorAtTopNow = true;
                break;
            case lib13.AxisDirection.up:
                indicatorAtTopNow = false;
                break;
            case lib13.AxisDirection.left:
            case lib13.AxisDirection.right:
                indicatorAtTopNow = null;
                break;
        }
        if (indicatorAtTopNow != this._isIndicatorAtTop) {
            if (op(Op.EQUALS,this._mode,_RefreshIndicatorMode.drag) || op(Op.EQUALS,this._mode,_RefreshIndicatorMode.armed)) this._dismiss(_RefreshIndicatorMode.canceled);
        }else if (is(notification, lib5.ScrollUpdateNotification)) {
            if (op(Op.EQUALS,this._mode,_RefreshIndicatorMode.drag) || op(Op.EQUALS,this._mode,_RefreshIndicatorMode.armed)) {
                if (notification.metrics.extentBefore > 0.0) {
                    this._dismiss(_RefreshIndicatorMode.canceled);
                }else {
                    this._dragOffset -= notification.scrollDelta;
                    this._checkDragOffset(notification.metrics.viewportDimension);
                }
            }
            if (op(Op.EQUALS,this._mode,_RefreshIndicatorMode.armed) && op(Op.EQUALS,notification.dragDetails,null)) {
                this._show();
            }
        }else if (is(notification, lib5.OverscrollNotification)) {
            if (op(Op.EQUALS,this._mode,_RefreshIndicatorMode.drag) || op(Op.EQUALS,this._mode,_RefreshIndicatorMode.armed)) {
                this._dragOffset -= notification.overscroll / 2.0;
                this._checkDragOffset(notification.metrics.viewportDimension);
            }
        }else if (is(notification, lib5.ScrollEndNotification)) {
            switch (this._mode) {
                case _RefreshIndicatorMode.armed:
                    this._show();
                    break;
                case _RefreshIndicatorMode.drag:
                    this._dismiss(_RefreshIndicatorMode.canceled);
                    break;
                default:
                    break;
            }
        }
        return false;
    }
    _handleGlowNotification(notification : lib14.OverscrollIndicatorNotification) : boolean {
        if (notification.depth != 0 || !notification.leading) return false;
        if (op(Op.EQUALS,this._mode,_RefreshIndicatorMode.drag)) {
            notification.disallowGlow();
            return true;
        }
        return false;
    }
    _start(direction : lib13.AxisDirection) : boolean {
        /* TODO (AssertStatementImpl) : assert (_mode == null); */;
        /* TODO (AssertStatementImpl) : assert (_isIndicatorAtTop == null); */;
        /* TODO (AssertStatementImpl) : assert (_dragOffset == null); */;
        switch (direction) {
            case lib13.AxisDirection.down:
                this._isIndicatorAtTop = true;
                break;
            case lib13.AxisDirection.up:
                this._isIndicatorAtTop = false;
                break;
            case lib13.AxisDirection.left:
            case lib13.AxisDirection.right:
                this._isIndicatorAtTop = null;
                return false;
        }
        this._dragOffset = 0.0;
        this._scaleController.value = 0.0;
        this._positionController.value = 0.0;
        return true;
    }
    _checkDragOffset(containerExtent : double) : any {
        /* TODO (AssertStatementImpl) : assert (_mode == _RefreshIndicatorMode.drag || _mode == _RefreshIndicatorMode.armed); */;
        let newValue : double = this._dragOffset / (containerExtent * properties._kDragContainerExtentPercentage);
        if (op(Op.EQUALS,this._mode,_RefreshIndicatorMode.armed)) newValue = math.max(newValue,1.0 / properties._kDragSizeFactorLimit);
        this._positionController.value = new core.DartDouble(newValue).clamp(0.0,1.0);
        if (op(Op.EQUALS,this._mode,_RefreshIndicatorMode.drag) && op(Op.EQUALS,this._valueColor.value.alpha,255)) this._mode = _RefreshIndicatorMode.armed;
    }
    void : async.Future<any>;

    _dismiss(newMode : _RefreshIndicatorMode) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            op(Op.LT,await async.Future<T>,);
            op(Op.GT,,.value());
            /* TODO (AssertStatementImpl) : assert (newMode == _RefreshIndicatorMode.canceled || newMode == _RefreshIndicatorMode.done); */;
            setState(() =>  {
                this._mode = newMode;
            });
            switch (this._mode) {
                case _RefreshIndicatorMode.done:
                    await this._scaleController.animateTo(1.0,{
                        duration : properties._kIndicatorScaleDuration});
                    break;
                case _RefreshIndicatorMode.canceled:
                    await this._positionController.animateTo(0.0,{
                        duration : properties._kIndicatorScaleDuration});
                    break;
                default:
                    /* TODO (AssertStatementImpl) : assert (false); */;
            }
            if (mounted && op(Op.EQUALS,this._mode,newMode)) {
                this._dragOffset = null;
                this._isIndicatorAtTop = null;
                setState(() =>  {
                    this._mode = null;
                });
            }
        } )());
    }

    _show() : any {
        /* TODO (AssertStatementImpl) : assert (_mode != _RefreshIndicatorMode.refresh); */;
        /* TODO (AssertStatementImpl) : assert (_mode != _RefreshIndicatorMode.snap); */;
        let Completer;
        new core.DartList.literal<any>();
        /* TODO (EmptyStatementImpl) : ; */;
        op(Op.GT,,completer);
        op(Op.GT,,());
        this._pendingRefreshFuture = completer.future;
        this._mode = _RefreshIndicatorMode.snap;
        op(Op.LT,this._positionController.animateTo(1.0 / properties._kDragSizeFactorLimit,{
            duration : properties._kIndicatorSnapDuration}).then,);
        op(Op.GT,,((value : any) =>  {
            if (mounted && op(Op.EQUALS,this._mode,_RefreshIndicatorMode.snap)) {
                /* TODO (AssertStatementImpl) : assert (widget.onRefresh != null); */;
                setState(() =>  {
                    this._mode = _RefreshIndicatorMode.refresh;
                });
                let Future;
                new core.DartList.literal<any>();
                /* TODO (EmptyStatementImpl) : ; */;
                op(Op.GT,,refreshResult);
                /* TODO (AssertStatementImpl) : assert (() {if (refreshResult == null) FlutterError.reportError(FlutterErrorDetails(exception: FlutterError('The onRefresh callback returned null.\n' 'The RefreshIndicator onRefresh callback must return a Future.'), context: 'when calling onRefresh', library: 'material library')); return true;}()); */;
                if (op(Op.EQUALS,refreshResult,null)) return;
                refreshResult.whenComplete(() =>  {
                    if (mounted && op(Op.EQUALS,this._mode,_RefreshIndicatorMode.refresh)) {
                        completer.complete();
                        this._dismiss(_RefreshIndicatorMode.done);
                    }
                });
            }
        }));
    }
    void : async.Future<any>;

    show(_namedArguments? : {atTop? : boolean}) {
        let {atTop} = Object.assign({
            "atTop" : true}, _namedArguments );
        if (this._mode != _RefreshIndicatorMode.refresh && this._mode != _RefreshIndicatorMode.snap) {
            if (op(Op.EQUALS,this._mode,null)) this._start(atTop ? lib13.AxisDirection.down : lib13.AxisDirection.up);
            this._show();
        }
        return this._pendingRefreshFuture;
    }
    _key : lib3.GlobalKey<any>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        let child : lib3.Widget = lib16.NotificationListener({
            key : this._key,onNotification : this._handleScrollNotification.bind(this),child : lib16.NotificationListener({
                onNotification : this._handleGlowNotification.bind(this),child : widget.child})});
        if (op(Op.EQUALS,this._mode,null)) {
            /* TODO (AssertStatementImpl) : assert (_dragOffset == null); */;
            /* TODO (AssertStatementImpl) : assert (_isIndicatorAtTop == null); */;
            return child;
        }
        /* TODO (AssertStatementImpl) : assert (_dragOffset != null); */;
        /* TODO (AssertStatementImpl) : assert (_isIndicatorAtTop != null); */;
        let showIndeterminateIndicator : boolean = op(Op.EQUALS,this._mode,_RefreshIndicatorMode.refresh) || op(Op.EQUALS,this._mode,_RefreshIndicatorMode.done);
        return lib23.Stack({
            children : new core.DartList.literal<lib3.Widget>(child,lib23.Positioned({
                top : this._isIndicatorAtTop ? 0.0 : null,bottom : !this._isIndicatorAtTop ? 0.0 : null,left : 0.0,right : 0.0,child : lib21.SizeTransition({
                    axisAlignment : this._isIndicatorAtTop ? 1.0 : -1.0,sizeFactor : this._positionFactor,child : lib22.Container({
                        padding : this._isIndicatorAtTop ? lib17.EdgeInsets.only({
                            top : widget.displacement}) : lib17.EdgeInsets.only({
                            bottom : widget.displacement}),alignment : this._isIndicatorAtTop ? lib18.Alignment.topCenter : lib18.Alignment.bottomCenter,child : lib21.ScaleTransition({
                            scale : this._scaleFactor,child : lib21.AnimatedBuilder({
                                animation : this._positionController,builder : (context : lib3.BuildContext,child : lib3.Widget) =>  {
                                    return lib20.RefreshProgressIndicator({
                                        semanticsLabel : (widget.semanticsLabel || lib19.MaterialLocalizations.of(context).refreshIndicatorSemanticLabel),semanticsValue : widget.semanticsValue,value : showIndeterminateIndicator ? null : this._value.value,valueColor : this._valueColor,backgroundColor : widget.backgroundColor});
                                }})})})})}))});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RefreshIndicatorState() {
        this._key = lib3.GlobalKey();
    }
}

export class properties {
    private static __$_kDragContainerExtentPercentage : double;
    static get _kDragContainerExtentPercentage() : double { 
        if (this.__$_kDragContainerExtentPercentage===undefined) {
            this.__$_kDragContainerExtentPercentage = 0.25;
        }
        return this.__$_kDragContainerExtentPercentage;
    }
    static set _kDragContainerExtentPercentage(__$value : double)  { 
        this.__$_kDragContainerExtentPercentage = __$value;
    }

    private static __$_kDragSizeFactorLimit : double;
    static get _kDragSizeFactorLimit() : double { 
        if (this.__$_kDragSizeFactorLimit===undefined) {
            this.__$_kDragSizeFactorLimit = 1.5;
        }
        return this.__$_kDragSizeFactorLimit;
    }
    static set _kDragSizeFactorLimit(__$value : double)  { 
        this.__$_kDragSizeFactorLimit = __$value;
    }

    private static __$_kIndicatorSnapDuration : core.DartDuration;
    static get _kIndicatorSnapDuration() : core.DartDuration { 
        if (this.__$_kIndicatorSnapDuration===undefined) {
            this.__$_kIndicatorSnapDuration = core.DartDuration({
                milliseconds : 150});
        }
        return this.__$_kIndicatorSnapDuration;
    }
    static set _kIndicatorSnapDuration(__$value : core.DartDuration)  { 
        this.__$_kIndicatorSnapDuration = __$value;
    }

    private static __$_kIndicatorScaleDuration : core.DartDuration;
    static get _kIndicatorScaleDuration() : core.DartDuration { 
        if (this.__$_kIndicatorScaleDuration===undefined) {
            this.__$_kIndicatorScaleDuration = core.DartDuration({
                milliseconds : 200});
        }
        return this.__$_kIndicatorScaleDuration;
    }
    static set _kIndicatorScaleDuration(__$value : core.DartDuration)  { 
        this.__$_kIndicatorScaleDuration = __$value;
    }

}
