/** Library asset:datahedgehog_monitor/lib/lib/widgets/dismissible.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib4 from "./framework";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/gestures/recognizer";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/rendering/proxy_box";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib11 from "./basic";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/gestures/drag_details";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/gestures/velocity_tracker";
import * as lib15 from "./transitions";
import * as lib16 from "./gesture_detector";

export enum DismissDirection {
    vertical,
    horizontal,
    endToStart,
    startToEnd,
    up,
    down
}

export namespace Dismissible {
    export type Constructors = lib4.StatefulWidget.Constructors | 'Dismissible';
    export type Interface = Omit<Dismissible, Constructors>;
}
@DartClass
export class Dismissible extends lib4.StatefulWidget {
    constructor(_namedArguments? : {key? : lib5.Key,child? : lib4.Widget,background? : lib4.Widget,secondaryBackground? : lib4.Widget,confirmDismiss? : (direction : DismissDirection) => any,onResize? : any,onDismissed? : (direction : DismissDirection) => any,direction? : DismissDirection,resizeDuration? : core.DartDuration,dismissThresholds? : core.DartMap<DismissDirection,double>,movementDuration? : core.DartDuration,crossAxisEndOffset? : double,dragStartBehavior? : lib6.DragStartBehavior}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Dismissible(_namedArguments? : {key? : lib5.Key,child? : lib4.Widget,background? : lib4.Widget,secondaryBackground? : lib4.Widget,confirmDismiss? : (direction : DismissDirection) => any,onResize? : any,onDismissed? : (direction : DismissDirection) => any,direction? : DismissDirection,resizeDuration? : core.DartDuration,dismissThresholds? : core.DartMap<DismissDirection,double>,movementDuration? : core.DartDuration,crossAxisEndOffset? : double,dragStartBehavior? : lib6.DragStartBehavior}) {
        let {key,child,background,secondaryBackground,confirmDismiss,onResize,onDismissed,direction,resizeDuration,dismissThresholds,movementDuration,crossAxisEndOffset,dragStartBehavior} = Object.assign({
            "direction" : DismissDirection.horizontal,
            "resizeDuration" : new core.DartDuration({
                milliseconds : 300}),
            "dismissThresholds" : new core.DartMap.literal([
            ]),
            "movementDuration" : new core.DartDuration({
                milliseconds : 200}),
            "crossAxisEndOffset" : 0.0,
            "dragStartBehavior" : lib6.DragStartBehavior.down}, _namedArguments );
        this.assert = assert;
        this.child = child;
        this.background = background;
        this.secondaryBackground = secondaryBackground;
        this.confirmDismiss = confirmDismiss;
        this.onResize = onResize;
        this.onDismissed = onDismissed;
        this.direction = direction;
        this.resizeDuration = resizeDuration;
        this.dismissThresholds = dismissThresholds;
        this.movementDuration = movementDuration;
        this.crossAxisEndOffset = crossAxisEndOffset;
        this.dragStartBehavior = dragStartBehavior;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    child : lib4.Widget;

    background : lib4.Widget;

    secondaryBackground : lib4.Widget;

    confirmDismiss : (direction : DismissDirection) => any;

    onResize : any;

    onDismissed : (direction : DismissDirection) => any;

    direction : DismissDirection;

    resizeDuration : core.DartDuration;

    dismissThresholds : core.DartMap<DismissDirection,double>;

    movementDuration : core.DartDuration;

    crossAxisEndOffset : double;

    dragStartBehavior : lib6.DragStartBehavior;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _DismissibleState {
        return _DismissibleState();
    }
}

export namespace _DismissibleClipper {
    export type Constructors = lib7.CustomClipper.Constructors | '_DismissibleClipper';
    export type Interface = Omit<_DismissibleClipper, Constructors>;
}
@DartClass
export class _DismissibleClipper extends lib7.CustomClipper<any> {
    constructor(_namedArguments? : {axis? : lib8.Axis,moveAnimation? : lib9.Animation<any>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DismissibleClipper(_namedArguments? : {axis? : lib8.Axis,moveAnimation? : lib9.Animation<any>}) {
        let {axis,moveAnimation} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.axis = axis;
        this.moveAnimation = moveAnimation;
    }
     : any;

     : any;

     : any;

     : any;

    axis : lib8.Axis;

    moveAnimation : lib9.Animation<any>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getClip(size : any) : any {
        /* TODO (AssertStatementImpl) : assert (axis != null); */;
        switch (this.axis) {
            case lib8.Axis.horizontal:
                let offset : double = op(Op.TIMES,this.moveAnimation.value.dx,size.width);
                if (offset < 0) return Rect.fromLTRB(op(Op.PLUS,size.width,offset),0.0,size.width,size.height);
                return Rect.fromLTRB(0.0,0.0,offset,size.height);
            case lib8.Axis.vertical:
                let offset : double = op(Op.TIMES,this.moveAnimation.value.dy,size.height);
                if (offset < 0) return Rect.fromLTRB(0.0,op(Op.PLUS,size.height,offset),size.width,size.height);
                return Rect.fromLTRB(0.0,0.0,size.width,offset);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getApproximateClipRect(size : any) : any {
        return this.getClip(size);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldReclip(oldClipper : _DismissibleClipper) : boolean {
        return oldClipper.axis != this.axis || oldClipper.moveAnimation.value != this.moveAnimation.value;
    }
}

export enum _FlingGestureKind {
    none,
    forward,
    reverse
}

export namespace _DismissibleState {
    export type Constructors = '_DismissibleState';
    export type Interface = Omit<_DismissibleState, Constructors>;
}
@DartClass
@With(any,any)
export class _DismissibleState extends any implements any.Interface,any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._moveController = ((_) : any =>  {
            {
                addStatusListener(this._handleDismissStatusChanged.bind(this));
                return _;
            }
        })(lib10.AnimationController({
            duration : widget.movementDuration,vsync : this}));
        this._updateMoveAnimation();
    }
    _moveController : lib10.AnimationController;

    _moveAnimation : lib9.Animation<any>;

    _resizeController : lib10.AnimationController;

    _resizeAnimation : lib9.Animation<double>;

    _dragExtent : double;

    _dragUnderway : boolean;

    _sizePriorToCollapse : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get wantKeepAlive() : boolean {
        return op(Op.EQUALS,((t)=>(!!t)?t.isAnimating:null)(this._moveController),true) || op(Op.EQUALS,((t)=>(!!t)?t.isAnimating:null)(this._resizeController),true);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._moveController.dispose();
        ((_879_)=>(!!_879_)?_879_.dispose():null)(this._resizeController);
        super.dispose();
    }
    get _directionIsXAxis() : boolean {
        return op(Op.EQUALS,widget.direction,DismissDirection.horizontal) || op(Op.EQUALS,widget.direction,DismissDirection.endToStart) || op(Op.EQUALS,widget.direction,DismissDirection.startToEnd);
    }
    _extentToDirection(extent : double) : DismissDirection {
        if (extent == 0.0) return null;
        if (this._directionIsXAxis) {
            switch (lib11.Directionality.of(context)) {
                case TextDirection.rtl:
                    return extent < 0 ? DismissDirection.startToEnd : DismissDirection.endToStart;
                case TextDirection.ltr:
                    return extent > 0 ? DismissDirection.startToEnd : DismissDirection.endToStart;
            }
            /* TODO (AssertStatementImpl) : assert (false); */;
            return null;
        }
        return extent > 0 ? DismissDirection.down : DismissDirection.up;
    }
    get _dismissDirection() : DismissDirection {
        return this._extentToDirection(this._dragExtent);
    }
    get _isActive() : boolean {
        return this._dragUnderway || this._moveController.isAnimating;
    }
    get _overallDragAxisExtent() : double {
        let size : any = context.size;
        return this._directionIsXAxis ? size.width : size.height;
    }
    _handleDragStart(details : lib12.DragStartDetails) : any {
        this._dragUnderway = true;
        if (this._moveController.isAnimating) {
            this._dragExtent = this._moveController.value * this._overallDragAxisExtent * new core.DartDouble(this._dragExtent).sign;
            this._moveController.stop();
        }else {
            this._dragExtent = 0.0;
            this._moveController.value = 0.0;
        }
        setState(() =>  {
            this._updateMoveAnimation();
        });
    }
    _handleDragUpdate(details : lib12.DragUpdateDetails) : any {
        if (!this._isActive || this._moveController.isAnimating) return;
        let delta : double = details.primaryDelta;
        let oldDragExtent : double = this._dragExtent;
        switch (widget.direction) {
            case DismissDirection.horizontal:
            case DismissDirection.vertical:
                this._dragExtent += delta;
                break;
            case DismissDirection.up:
                if (this._dragExtent + delta < 0) this._dragExtent += delta;
                break;
            case DismissDirection.down:
                if (this._dragExtent + delta > 0) this._dragExtent += delta;
                break;
            case DismissDirection.endToStart:
                switch (lib11.Directionality.of(context)) {
                    case TextDirection.rtl:
                        if (this._dragExtent + delta > 0) this._dragExtent += delta;
                        break;
                    case TextDirection.ltr:
                        if (this._dragExtent + delta < 0) this._dragExtent += delta;
                        break;
                }
                break;
            case DismissDirection.startToEnd:
                switch (lib11.Directionality.of(context)) {
                    case TextDirection.rtl:
                        if (this._dragExtent + delta < 0) this._dragExtent += delta;
                        break;
                    case TextDirection.ltr:
                        if (this._dragExtent + delta > 0) this._dragExtent += delta;
                        break;
                }
                break;
        }
        if (new core.DartDouble(oldDragExtent).sign != new core.DartDouble(this._dragExtent).sign) {
            setState(() =>  {
                this._updateMoveAnimation();
            });
        }
        if (!this._moveController.isAnimating) {
            this._moveController.value = new core.DartDouble(this._dragExtent).abs() / this._overallDragAxisExtent;
        }
    }
    _updateMoveAnimation() : any {
        let end : double = new core.DartDouble(this._dragExtent).sign;
        this._moveAnimation = this._moveController.drive(lib13.Tween({
            begin : Offset.zero,end : this._directionIsXAxis ? Offset(end,widget.crossAxisEndOffset) : Offset(widget.crossAxisEndOffset,end)}));
    }
    _describeFlingGesture(velocity : lib14.Velocity) : _FlingGestureKind {
        /* TODO (AssertStatementImpl) : assert (widget.direction != null); */;
        if (this._dragExtent == 0.0) {
            return _FlingGestureKind.none;
        }
        let vx : double = velocity.pixelsPerSecond.dx;
        let vy : double = velocity.pixelsPerSecond.dy;
        let flingDirection : DismissDirection;
        if (this._directionIsXAxis) {
            if (new core.DartDouble(vx).abs() - new core.DartDouble(vy).abs() < properties._kMinFlingVelocityDelta || new core.DartDouble(vx).abs() < properties._kMinFlingVelocity) return _FlingGestureKind.none;
            /* TODO (AssertStatementImpl) : assert (vx != 0.0); */;
            flingDirection = this._extentToDirection(vx);
        }else {
            if (new core.DartDouble(vy).abs() - new core.DartDouble(vx).abs() < properties._kMinFlingVelocityDelta || new core.DartDouble(vy).abs() < properties._kMinFlingVelocity) return _FlingGestureKind.none;
            /* TODO (AssertStatementImpl) : assert (vy != 0.0); */;
            flingDirection = this._extentToDirection(vy);
        }
        /* TODO (AssertStatementImpl) : assert (_dismissDirection != null); */;
        if (op(Op.EQUALS,flingDirection,this._dismissDirection)) return _FlingGestureKind.forward;
        return _FlingGestureKind.reverse;
    }
    void : any;

    _handleDragEnd(details : lib12.DragEndDetails) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this._isActive || this._moveController.isAnimating) return;
            this._dragUnderway = false;
            if (this._moveController.isCompleted && op(Op.EQUALS,await this._confirmStartResizeAnimation(),true)) {
                this._startResizeAnimation();
                return;
            }
            let flingVelocity : double = this._directionIsXAxis ? details.velocity.pixelsPerSecond.dx : details.velocity.pixelsPerSecond.dy;
            switch (this._describeFlingGesture(details.velocity)) {
                case _FlingGestureKind.forward:
                    /* TODO (AssertStatementImpl) : assert (_dragExtent != 0.0); */;
                    /* TODO (AssertStatementImpl) : assert (!_moveController.isDismissed); */;
                    if (op(Op.GEQ,((op(Op.INDEX,widget.dismissThresholds,this._dismissDirection) || properties._kDismissThreshold)),1.0)) {
                        this._moveController.reverse();
                        break;
                    }
                    this._dragExtent = new core.DartDouble(flingVelocity).sign;
                    this._moveController.fling({
                        velocity : new core.DartDouble(flingVelocity).abs() * properties._kFlingVelocityScale});
                    break;
                case _FlingGestureKind.reverse:
                    /* TODO (AssertStatementImpl) : assert (_dragExtent != 0.0); */;
                    /* TODO (AssertStatementImpl) : assert (!_moveController.isDismissed); */;
                    this._dragExtent = new core.DartDouble(flingVelocity).sign;
                    this._moveController.fling({
                        velocity : -new core.DartDouble(flingVelocity).abs() * properties._kFlingVelocityScale});
                    break;
                case _FlingGestureKind.none:
                    if (!this._moveController.isDismissed) {
                        if (this._moveController.value > ((op(Op.INDEX,widget.dismissThresholds,this._dismissDirection) || properties._kDismissThreshold))) {
                            this._moveController.forward();
                        }else {
                            this._moveController.reverse();
                        }
                    }
                    break;
            }
        } )());
    }

    void : any;

    _handleDismissStatusChanged(status : lib9.AnimationStatus) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (op(Op.EQUALS,status,lib9.AnimationStatus.completed) && !this._dragUnderway) {
                if (op(Op.EQUALS,await this._confirmStartResizeAnimation(),true)) this._startResizeAnimation();else this._moveController.reverse();
            }
            updateKeepAlive();
        } )());
    }

    _confirmStartResizeAnimation() : any { 
        return new async.Future.fromPromise(( async () =>  {
            if (widget.confirmDismiss != null) {
                let direction : DismissDirection = this._dismissDirection;
                /* TODO (AssertStatementImpl) : assert (direction != null); */;
                return widget.confirmDismiss(direction);
            }
            return true;
        } )());
    }

    _startResizeAnimation() : any {
        /* TODO (AssertStatementImpl) : assert (_moveController != null); */;
        /* TODO (AssertStatementImpl) : assert (_moveController.isCompleted); */;
        /* TODO (AssertStatementImpl) : assert (_resizeController == null); */;
        /* TODO (AssertStatementImpl) : assert (_sizePriorToCollapse == null); */;
        if (op(Op.EQUALS,widget.resizeDuration,null)) {
            if (widget.onDismissed != null) {
                let direction : DismissDirection = this._dismissDirection;
                /* TODO (AssertStatementImpl) : assert (direction != null); */;
                widget.onDismissed(direction);
            }
        }else {
            this._resizeController = ((_) : any =>  {
                {
                    addListener(this._handleResizeProgressChanged.bind(this));
                    addStatusListener((status : lib9.AnimationStatus) =>  {
                        return updateKeepAlive();
                    });
                    return _;
                }
            })(lib10.AnimationController({
                duration : widget.resizeDuration,vsync : this}));
            this._resizeController.forward();
            setState(() =>  {
                this._sizePriorToCollapse = context.size;
                this._resizeAnimation = this._resizeController.drive(lib13.CurveTween({
                    curve : properties._kResizeTimeCurve})).drive(lib13.Tween({
                    begin : 1.0,end : 0.0}));
            });
        }
    }
    _handleResizeProgressChanged() : any {
        if (this._resizeController.isCompleted) {
            if (widget.onDismissed != null) {
                let direction : DismissDirection = this._dismissDirection;
                /* TODO (AssertStatementImpl) : assert (direction != null); */;
                widget.onDismissed(direction);
            }
        }else {
            if (widget.onResize != null) widget.onResize();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib4.BuildContext) : lib4.Widget {
        super.build(context);
        /* TODO (AssertStatementImpl) : assert (!_directionIsXAxis || debugCheckHasDirectionality(context)); */;
        let background : lib4.Widget = widget.background;
        if (widget.secondaryBackground != null) {
            let direction : DismissDirection = this._dismissDirection;
            if (op(Op.EQUALS,direction,DismissDirection.endToStart) || op(Op.EQUALS,direction,DismissDirection.up)) background = widget.secondaryBackground;
        }
        if (this._resizeAnimation != null) {
            /* TODO (AssertStatementImpl) : assert (() {if (_resizeAnimation.status != AnimationStatus.forward) {assert (_resizeAnimation.status == AnimationStatus.completed); throw FlutterError('A dismissed Dismissible widget is still part of the tree.\n' 'Make sure to implement the onDismissed handler and to immediately remove the Dismissible\n' 'widget from the application once that handler has fired.');} return true;}()); */;
            return lib15.SizeTransition({
                sizeFactor : this._resizeAnimation,axis : this._directionIsXAxis ? lib8.Axis.vertical : lib8.Axis.horizontal,child : lib11.SizedBox({
                    width : this._sizePriorToCollapse.width,height : this._sizePriorToCollapse.height,child : background})});
        }
        let content : lib4.Widget = lib15.SlideTransition({
            position : this._moveAnimation,child : widget.child});
        if (background != null) {
            let children : core.DartList<lib4.Widget> = new core.DartList.literal<lib4.Widget>();
            if (!this._moveAnimation.isDismissed) {
                children.add(lib11.Positioned.fill({
                    child : lib11.ClipRect({
                        clipper : _DismissibleClipper({
                            axis : this._directionIsXAxis ? lib8.Axis.horizontal : lib8.Axis.vertical,moveAnimation : this._moveAnimation}),child : background})}));
            }
            children.add(content);
            content = lib11.Stack({
                children : children});
        }
        return lib16.GestureDetector({
            onHorizontalDragStart : this._directionIsXAxis ? this._handleDragStart.bind(this) : null,onHorizontalDragUpdate : this._directionIsXAxis ? this._handleDragUpdate.bind(this) : null,onHorizontalDragEnd : this._directionIsXAxis ? this._handleDragEnd.bind(this) : null,onVerticalDragStart : this._directionIsXAxis ? null : this._handleDragStart.bind(this),onVerticalDragUpdate : this._directionIsXAxis ? null : this._handleDragUpdate.bind(this),onVerticalDragEnd : this._directionIsXAxis ? null : this._handleDragEnd.bind(this),behavior : HitTestBehavior.opaque,child : content,dragStartBehavior : widget.dragStartBehavior});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DismissibleState() {
        this._dragExtent = 0.0;
        this._dragUnderway = false;
    }
}

export class properties {
    private static __$_kResizeTimeCurve : lib3.Curve;
    static get _kResizeTimeCurve() : lib3.Curve { 
        if (this.__$_kResizeTimeCurve===undefined) {
            this.__$_kResizeTimeCurve = lib3.Interval(0.4,1.0,{
                curve : lib3.Curves.ease});
        }
        return this.__$_kResizeTimeCurve;
    }
    static set _kResizeTimeCurve(__$value : lib3.Curve)  { 
        this.__$_kResizeTimeCurve = __$value;
    }

    private static __$_kMinFlingVelocity : double;
    static get _kMinFlingVelocity() : double { 
        if (this.__$_kMinFlingVelocity===undefined) {
            this.__$_kMinFlingVelocity = 700.0;
        }
        return this.__$_kMinFlingVelocity;
    }
    static set _kMinFlingVelocity(__$value : double)  { 
        this.__$_kMinFlingVelocity = __$value;
    }

    private static __$_kMinFlingVelocityDelta : double;
    static get _kMinFlingVelocityDelta() : double { 
        if (this.__$_kMinFlingVelocityDelta===undefined) {
            this.__$_kMinFlingVelocityDelta = 400.0;
        }
        return this.__$_kMinFlingVelocityDelta;
    }
    static set _kMinFlingVelocityDelta(__$value : double)  { 
        this.__$_kMinFlingVelocityDelta = __$value;
    }

    private static __$_kFlingVelocityScale : double;
    static get _kFlingVelocityScale() : double { 
        if (this.__$_kFlingVelocityScale===undefined) {
            this.__$_kFlingVelocityScale = 1.0 / 300.0;
        }
        return this.__$_kFlingVelocityScale;
    }
    static set _kFlingVelocityScale(__$value : double)  { 
        this.__$_kFlingVelocityScale = __$value;
    }

    private static __$_kDismissThreshold : double;
    static get _kDismissThreshold() : double { 
        if (this.__$_kDismissThreshold===undefined) {
            this.__$_kDismissThreshold = 0.4;
        }
        return this.__$_kDismissThreshold;
    }
    static set _kDismissThreshold(__$value : double)  { 
        this.__$_kDismissThreshold = __$value;
    }

}
