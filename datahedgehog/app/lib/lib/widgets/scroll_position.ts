/** Library asset:datahedgehog_monitor/lib/lib/widgets/scroll_position.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/rendering/viewport_offset";
import * as lib4 from "./scroll_metrics";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib6 from "./scroll_physics";
import * as lib7 from "./scroll_context";
import * as lib8 from "./page_storage";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/foundation/collections";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/physics/tolerance";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/physics/utils";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/rendering/viewport";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib16 from "./scroll_activity";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/gestures/drag_details";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/gestures/drag";
import * as lib19 from "./scroll_notification";

export var correctPixels : (value : double) => any = (value : double) : any =>  {
    properties._pixels = value;
};
export var absorb : (other : ScrollPosition) => any = (other : ScrollPosition) : any =>  {
    /* TODO (AssertStatementImpl) : assert (other != null); */;
    /* TODO (AssertStatementImpl) : assert (other.context == context); */;
    /* TODO (AssertStatementImpl) : assert (_pixels == null); */;
    properties._minScrollExtent = other.minScrollExtent;
    properties._maxScrollExtent = other.maxScrollExtent;
    properties._pixels = other._pixels;
    properties._viewportDimension = other.viewportDimension;
    /* TODO (AssertStatementImpl) : assert (activity == null); */;
    /* TODO (AssertStatementImpl) : assert (other.activity != null); */;
    properties._activity = other.activity;
    other._activity = null;
    if (other.runtimeType != runtimeType) properties.activity.resetActivity();
    properties.context.setIgnorePointer(properties.activity.shouldIgnorePointer);
    properties.isScrollingNotifier.value = properties.activity.isScrolling;
};
export var setPixels : (newPixels : double) => double = (newPixels : double) : double =>  {
    /* TODO (AssertStatementImpl) : assert (_pixels != null); */;
    /* TODO (AssertStatementImpl) : assert (SchedulerBinding.instance.schedulerPhase.index <= SchedulerPhase.transientCallbacks.index); */;
    if (newPixels != properties.pixels) {
        let overscroll : double = applyBoundaryConditions(newPixels);
        /* TODO (AssertStatementImpl) : assert (() {final double delta = newPixels - pixels; if (overscroll.abs() > delta.abs()) {throw FlutterError('$runtimeType.applyBoundaryConditions returned invalid overscroll value.\n' 'setPixels() was called to change the scroll offset from $pixels to $newPixels.\n' 'That is a delta of $delta units.\n' '$runtimeType.applyBoundaryConditions reported an overscroll of $overscroll units.');} return true;}()); */;
        let oldPixels : double = properties._pixels;
        properties._pixels = newPixels - overscroll;
        if (properties._pixels != oldPixels) {
            notifyListeners();
            didUpdateScrollPositionBy(properties._pixels - oldPixels);
        }
        if (overscroll != 0.0) {
            didOverscrollBy(overscroll);
            return overscroll;
        }
    }
    return 0.0;
};
export var notifyListeners : () => any = () : any =>  {
    _updateSemanticActions();
    super.notifyListeners();
};
export var correctBy : (correction : double) => any = (correction : double) : any =>  {
    /* TODO (AssertStatementImpl) : assert (_pixels != null, 'An initial pixels value must exist by caling correctPixels on the ScrollPosition'); */;
    ;
    properties._pixels += correction;
    properties._didChangeViewportDimensionOrReceiveCorrection = true;
};
export var forcePixels : (value : double) => any = (value : double) : any =>  {
    /* TODO (AssertStatementImpl) : assert (pixels != null); */;
    properties._pixels = value;
    notifyListeners();
};
export var saveScrollOffset : () => any = () : any =>  {
    ((_960_)=>(!!_960_)?_960_.writeState(properties.context.storageContext,properties.pixels):null)(lib8.PageStorage.of(properties.context.storageContext));
};
export var restoreScrollOffset : () => any = () : any =>  {
    if (properties.pixels == null) {
        let value : double = ((_961_)=>(!!_961_)?_961_.readState(properties.context.storageContext):null)(lib8.PageStorage.of(properties.context.storageContext));
        if (value != null) correctPixels(value);
    }
};
export var applyBoundaryConditions : (value : double) => double = (value : double) : double =>  {
    let result : double = properties.physics.applyBoundaryConditions(this,value);
    /* TODO (AssertStatementImpl) : assert (() {final double delta = value - pixels; if (result.abs() > delta.abs()) {throw FlutterError('${physics.runtimeType}.applyBoundaryConditions returned invalid overscroll value.\n' 'The method was called to consider a change from $pixels to $value, which is a ' 'delta of ${delta.toStringAsFixed(1)} units. However, it returned an overscroll of ' '${result.toStringAsFixed(1)} units, which has a greater magnitude than the delta. ' 'The applyBoundaryConditions method is only supposed to reduce the possible range ' 'of movement, not increase it.\n' 'The scroll extents are $minScrollExtent .. $maxScrollExtent, and the ' 'viewport dimension is $viewportDimension.');} return true;}()); */;
    return result;
};
export var applyViewportDimension : (viewportDimension : double) => boolean = (viewportDimension : double) : boolean =>  {
    if (properties._viewportDimension != viewportDimension) {
        properties._viewportDimension = viewportDimension;
        properties._didChangeViewportDimensionOrReceiveCorrection = true;
    }
    return true;
};
export var _updateSemanticActions : () => any = () : any =>  {
    let forward : any;
    let backward : any;
    switch (axis) {
        case lib5.Axis.vertical:
            forward = SemanticsAction.scrollUp;
            backward = SemanticsAction.scrollDown;
            break;
        case lib5.Axis.horizontal:
            forward = SemanticsAction.scrollLeft;
            backward = SemanticsAction.scrollRight;
            break;
    }
    let actions : core.DartSet<any> = core.DartSet();
    if (properties.pixels > properties.minScrollExtent) actions.add(backward);
    if (properties.pixels < properties.maxScrollExtent) actions.add(forward);
    if (lib9.setEquals(actions,properties._semanticActions)) return;
    properties._semanticActions = actions;
    properties.context.setSemanticsActions(properties._semanticActions);
};
export var applyContentDimensions : (minScrollExtent : double,maxScrollExtent : double) => boolean = (minScrollExtent : double,maxScrollExtent : double) : boolean =>  {
    if (!lib11.nearEqual(properties._minScrollExtent,minScrollExtent,lib10.Tolerance.defaultTolerance.distance) || !lib11.nearEqual(properties._maxScrollExtent,maxScrollExtent,lib10.Tolerance.defaultTolerance.distance) || properties._didChangeViewportDimensionOrReceiveCorrection) {
        properties._minScrollExtent = minScrollExtent;
        properties._maxScrollExtent = maxScrollExtent;
        properties._haveDimensions = true;
        applyNewDimensions();
        properties._didChangeViewportDimensionOrReceiveCorrection = false;
    }
    return true;
};
export var applyNewDimensions : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (pixels != null); */;
    properties.activity.applyNewDimensions();
    _updateSemanticActions();
};
export var ensureVisible : (object : lib12.RenderObject,_namedArguments? : {alignment? : double,duration? : core.DartDuration,curve? : lib13.Curve}) => any = (object : lib12.RenderObject,_namedArguments? : {alignment? : double,duration? : core.DartDuration,curve? : lib13.Curve}) =>  {
    let {alignment,duration,curve} = Object.assign({
        "alignment" : 0.0,
        "duration" : core.DartDuration.zero,
        "curve" : lib13.Curves.ease}, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (object.attached); */;
    let viewport : lib14.RenderAbstractViewport = lib14.RenderAbstractViewport.of(object);
    /* TODO (AssertStatementImpl) : assert (viewport != null); */;
    let target : double = new core.DartDouble(viewport.getOffsetToReveal(object,alignment).offset).clamp(properties.minScrollExtent,properties.maxScrollExtent);
    if (target == properties.pixels) return op(Op.LT,async.Future<T>,);
    op(Op.GT,,.value());
    if (op(Op.EQUALS,duration,core.DartDuration.zero)) {
        jumpTo(target);
        return op(Op.LT,async.Future<T>,);
        op(Op.GT,,.value());
    }
    return animateTo(target,{
        duration : duration,curve : curve});
};
export var debugFillDescription : (description : core.DartList<string>) => any = (description : core.DartList<string>) : any =>  {
    if (properties.debugLabel != null) description.add(properties.debugLabel);
    super.debugFillDescription(description);
    description.add(`range: ${((_963_)=>(!!_963_)?new core.DartDouble(_963_).toStringAsFixed(1):null)(properties.minScrollExtent)}..${((_964_)=>(!!_964_)?new core.DartDouble(_964_).toStringAsFixed(1):null)(properties.maxScrollExtent)}`);
    description.add(`viewport: ${((_965_)=>(!!_965_)?new core.DartDouble(_965_).toStringAsFixed(1):null)(properties.viewportDimension)}`);
};
export var jumpTo : (value : double) => any = (value : double) : any =>  {
};
export var moveTo : (to : double,_namedArguments? : {duration? : core.DartDuration,curve? : lib13.Curve,clamp? : boolean}) => any = (to : double,_namedArguments? : {duration? : core.DartDuration,curve? : lib13.Curve,clamp? : boolean}) =>  {
    let {duration,curve,clamp} = Object.assign({
        "clamp" : true}, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (to != null); */;
    /* TODO (AssertStatementImpl) : assert (clamp != null); */;
    if (clamp) to = new core.DartDouble(to).clamp(properties.minScrollExtent,properties.maxScrollExtent);
    return super.moveTo(to,{
        duration : duration,curve : curve});
};
export var jumpToWithoutSettling : (value : double) => any = (value : double) : any =>  {
};
export var hold : (holdCancelCallback : any) => lib16.ScrollHoldController = (holdCancelCallback : any) : lib16.ScrollHoldController =>  {
};
export var drag : (details : lib17.DragStartDetails,dragCancelCallback : any) => lib18.Drag = (details : lib17.DragStartDetails,dragCancelCallback : any) : lib18.Drag =>  {
};
export var beginActivity : (newActivity : lib16.ScrollActivity) => any = (newActivity : lib16.ScrollActivity) : any =>  {
    if (op(Op.EQUALS,newActivity,null)) return;
    let wasScrolling : boolean, oldIgnorePointer : boolean;
    if (properties._activity != null) {
        oldIgnorePointer = properties._activity.shouldIgnorePointer;
        wasScrolling = properties._activity.isScrolling;
        if (wasScrolling && !newActivity.isScrolling) didEndScroll();
        properties._activity.dispose();
    }else {
        oldIgnorePointer = false;
        wasScrolling = false;
    }
    properties._activity = newActivity;
    if (oldIgnorePointer != properties.activity.shouldIgnorePointer) properties.context.setIgnorePointer(properties.activity.shouldIgnorePointer);
    properties.isScrollingNotifier.value = properties.activity.isScrolling;
    if (!wasScrolling && properties._activity.isScrolling) didStartScroll();
};
export var didStartScroll : () => any = () : any =>  {
    properties.activity.dispatchScrollStartNotification(copyWith(),properties.context.notificationContext);
};
export var didUpdateScrollPositionBy : (delta : double) => any = (delta : double) : any =>  {
    properties.activity.dispatchScrollUpdateNotification(copyWith(),properties.context.notificationContext,delta);
};
export var didEndScroll : () => any = () : any =>  {
    properties.activity.dispatchScrollEndNotification(copyWith(),properties.context.notificationContext);
    if (properties.keepScrollOffset) saveScrollOffset();
};
export var didOverscrollBy : (value : double) => any = (value : double) : any =>  {
    /* TODO (AssertStatementImpl) : assert (activity.isScrolling); */;
    properties.activity.dispatchOverscrollNotification(copyWith(),properties.context.notificationContext,value);
};
export var didUpdateScrollDirection : (direction : lib3.ScrollDirection) => any = (direction : lib3.ScrollDirection) : any =>  {
    lib19.UserScrollNotification({
        metrics : copyWith(),context : properties.context.notificationContext,direction : direction}).dispatch(properties.context.notificationContext);
};
export var dispose : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (pixels != null); */;
    ((_962_)=>(!!_962_)?_962_.dispose():null)(properties.activity);
    properties._activity = null;
    super.dispose();
};
export var animateTo : (to : double,_namedArguments? : {duration? : core.DartDuration,curve? : lib13.Curve}) => any = (to : double,_namedArguments? : {duration? : core.DartDuration,curve? : lib13.Curve}) =>  {
    let {duration,curve} = Object.assign({
    }, _namedArguments );
};
export namespace ScrollPosition {
    export type Constructors = lib3.ViewportOffset.Constructors | 'ScrollPosition';
    export type Interface = Omit<ScrollPosition, Constructors>;
}
@DartClass
@With(lib4.ScrollMetrics)
export class ScrollPosition extends lib3.ViewportOffset implements lib4.ScrollMetrics.Interface {
    @Abstract
    copyWith(_namedArguments? : {minScrollExtent? : double,maxScrollExtent? : double,pixels? : double,viewportDimension? : double,axisDirection? : lib5.AxisDirection}) : lib4.ScrollMetrics {
        let {minScrollExtent,maxScrollExtent,pixels,viewportDimension,axisDirection} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    constructor(_namedArguments? : {physics? : any,context? : any,keepScrollOffset? : any,oldPosition? : ScrollPosition,debugLabel? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScrollPosition(_namedArguments? : {physics? : any,context? : any,keepScrollOffset? : any,oldPosition? : ScrollPosition,debugLabel? : any}) {
        let {physics,context,keepScrollOffset,oldPosition,debugLabel} = Object.assign({
            "keepScrollOffset" : true}, _namedArguments );
        this.assert = assert;
        this.physics = physics;
        this.context = context;
        this.keepScrollOffset = keepScrollOffset;
        this.debugLabel = debugLabel;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    @Abstract
    absorb(oldPosition : any){ throw 'abstract'}
     : any;

    @Abstract
    restoreScrollOffset(){ throw 'abstract'}
}

export class properties {
    private static __$physics : lib6.ScrollPhysics;
    static get physics() : lib6.ScrollPhysics { 
        return this.__$physics;
    }
    static set physics(__$value : lib6.ScrollPhysics)  { 
        this.__$physics = __$value;
    }

    private static __$context : lib7.ScrollContext;
    static get context() : lib7.ScrollContext { 
        return this.__$context;
    }
    static set context(__$value : lib7.ScrollContext)  { 
        this.__$context = __$value;
    }

    private static __$keepScrollOffset : boolean;
    static get keepScrollOffset() : boolean { 
        return this.__$keepScrollOffset;
    }
    static set keepScrollOffset(__$value : boolean)  { 
        this.__$keepScrollOffset = __$value;
    }

    private static __$debugLabel : string;
    static get debugLabel() : string { 
        return this.__$debugLabel;
    }
    static set debugLabel(__$value : string)  { 
        this.__$debugLabel = __$value;
    }

    static get minScrollExtent() : double {
        return properties._minScrollExtent;
    }
    private static __$_minScrollExtent : double;
    static get _minScrollExtent() : double { 
        return this.__$_minScrollExtent;
    }
    static set _minScrollExtent(__$value : double)  { 
        this.__$_minScrollExtent = __$value;
    }

    static get maxScrollExtent() : double {
        return properties._maxScrollExtent;
    }
    private static __$_maxScrollExtent : double;
    static get _maxScrollExtent() : double { 
        return this.__$_maxScrollExtent;
    }
    static set _maxScrollExtent(__$value : double)  { 
        this.__$_maxScrollExtent = __$value;
    }

    static get pixels() : double {
        return properties._pixels;
    }
    private static __$_pixels : double;
    static get _pixels() : double { 
        return this.__$_pixels;
    }
    static set _pixels(__$value : double)  { 
        this.__$_pixels = __$value;
    }

    static get viewportDimension() : double {
        return properties._viewportDimension;
    }
    private static __$_viewportDimension : double;
    static get _viewportDimension() : double { 
        return this.__$_viewportDimension;
    }
    static set _viewportDimension(__$value : double)  { 
        this.__$_viewportDimension = __$value;
    }

    static get haveDimensions() : boolean {
        return properties._haveDimensions;
    }
    private static __$_haveDimensions : boolean;
    static get _haveDimensions() : boolean { 
        if (this.__$_haveDimensions===undefined) {
            this.__$_haveDimensions = false;
        }
        return this.__$_haveDimensions;
    }
    static set _haveDimensions(__$value : boolean)  { 
        this.__$_haveDimensions = __$value;
    }

    private static __$_didChangeViewportDimensionOrReceiveCorrection : boolean;
    static get _didChangeViewportDimensionOrReceiveCorrection() : boolean { 
        if (this.__$_didChangeViewportDimensionOrReceiveCorrection===undefined) {
            this.__$_didChangeViewportDimensionOrReceiveCorrection = true;
        }
        return this.__$_didChangeViewportDimensionOrReceiveCorrection;
    }
    static set _didChangeViewportDimensionOrReceiveCorrection(__$value : boolean)  { 
        this.__$_didChangeViewportDimensionOrReceiveCorrection = __$value;
    }

    private static __$_semanticActions : core.DartSet<any>;
    static get _semanticActions() : core.DartSet<any> { 
        return this.__$_semanticActions;
    }
    static set _semanticActions(__$value : core.DartSet<any>)  { 
        this.__$_semanticActions = __$value;
    }

    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

    private static __$isScrollingNotifier : lib15.ValueNotifier<boolean>;
    static get isScrollingNotifier() : lib15.ValueNotifier<boolean> { 
        if (this.__$isScrollingNotifier===undefined) {
            this.__$isScrollingNotifier = lib15.ValueNotifier(false);
        }
        return this.__$isScrollingNotifier;
    }
    static set isScrollingNotifier(__$value : lib15.ValueNotifier<boolean>)  { 
        this.__$isScrollingNotifier = __$value;
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

    static get allowImplicitScrolling() : boolean {
        return properties.physics.allowImplicitScrolling;
    }
    static get activity() : lib16.ScrollActivity {
        return properties._activity;
    }
    private static __$_activity : lib16.ScrollActivity;
    static get _activity() : lib16.ScrollActivity { 
        return this.__$_activity;
    }
    static set _activity(__$value : lib16.ScrollActivity)  { 
        this.__$_activity = __$value;
    }

}
