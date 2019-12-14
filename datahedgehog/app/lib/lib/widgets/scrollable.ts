/** Library asset:datahedgehog_monitor/lib/lib/widgets/scrollable.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib6 from "./scroll_controller";
import * as lib7 from "./scroll_physics";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/rendering/viewport_offset";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/gestures/recognizer";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib12 from "./scroll_position";
import * as lib13 from "./scroll_context";
import * as lib14 from "./scroll_configuration";
import * as lib15 from "./scroll_position_with_single_context";
import * as lib16 from "./gesture_detector";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/gestures/monodrag";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/rendering/proxy_box";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/gestures/drag";
import * as lib20 from "./scroll_activity";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/gestures/drag_details";
import * as lib22 from "./basic";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/semantics/semantics";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/rendering/viewport";
import * as lib25 from "@dart2ts.packages/flutter/lib/src/rendering/list_wheel_viewport";

export var describeSemanticsConfiguration : (config : lib23.SemanticsConfiguration) => any = (config : lib23.SemanticsConfiguration) : any =>  {
    super.describeSemanticsConfiguration(config);
    config.isSemanticBoundary = true;
    if (properties.position.haveDimensions) {
        ((_) : lib23.SemanticsConfiguration =>  {
            {
                _.hasImplicitScrolling = properties.allowImplicitScrolling;
                _.scrollPosition = properties._position.pixels;
                _.scrollExtentMax = properties._position.maxScrollExtent;
                _.scrollExtentMin = properties._position.minScrollExtent;
                _.scrollChildCount = properties.semanticChildCount;
                return _;
            }
        })(config);
    }
};
export var assembleSemanticsNode : (node : lib23.SemanticsNode,config : lib23.SemanticsConfiguration,children : core.DartIterable<lib23.SemanticsNode>) => any = (node : lib23.SemanticsNode,config : lib23.SemanticsConfiguration,children : core.DartIterable<lib23.SemanticsNode>) : any =>  {
    if (children.isEmpty || !children.first.isTagged(lib24.RenderViewport.useTwoPaneSemantics)) {
        super.assembleSemanticsNode(node,config,children);
        return;
    }
    properties._innerNode = ( properties._innerNode ) || ( lib23.SemanticsNode({
        showOnScreen : lib25.showOnScreen}) );
    ((_) : lib23.SemanticsNode =>  {
        {
            _.isMergedIntoParent = node.isPartOfNodeMerging;
            _.rect = op(Op.BITAND,Offset.zero,node.rect.size);
            return _;
        }
    })(properties._innerNode);
    let firstVisibleIndex : number;
    let excluded : core.DartList<lib23.SemanticsNode> = new core.DartList.literal<lib23.SemanticsNode>(properties._innerNode);
    let included : core.DartList<lib23.SemanticsNode> = new core.DartList.literal<lib23.SemanticsNode>();
    for(let child of children) {
        /* TODO (AssertStatementImpl) : assert (child.isTagged(RenderViewport.useTwoPaneSemantics)); */;
        if (child.isTagged(lib24.RenderViewport.excludeFromScrolling)) excluded.add(child);else {
            if (!child.hasFlag(SemanticsFlag.isHidden)) firstVisibleIndex = ( firstVisibleIndex ) || ( child.indexInParent );
            included.add(child);
        }
    }
    config.scrollIndex = firstVisibleIndex;
    node.updateWith({
        config : null,childrenInInversePaintOrder : excluded});
    properties._innerNode.updateWith({
        config : config,childrenInInversePaintOrder : included});
};
export var clearSemantics : () => any = () : any =>  {
    super.clearSemantics();
    properties._innerNode = null;
};
export namespace Scrollable {
    export type Constructors = lib3.StatefulWidget.Constructors | 'Scrollable';
    export type Interface = Omit<Scrollable, Constructors>;
}
@DartClass
export class Scrollable extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,axisDirection? : lib5.AxisDirection,controller? : lib6.ScrollController,physics? : lib7.ScrollPhysics,viewportBuilder? : (context : lib3.BuildContext,position : lib8.ViewportOffset) => lib3.Widget,excludeFromSemantics? : boolean,semanticChildCount? : number,dragStartBehavior? : lib9.DragStartBehavior}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Scrollable(_namedArguments? : {key? : lib4.Key,axisDirection? : lib5.AxisDirection,controller? : lib6.ScrollController,physics? : lib7.ScrollPhysics,viewportBuilder? : (context : lib3.BuildContext,position : lib8.ViewportOffset) => lib3.Widget,excludeFromSemantics? : boolean,semanticChildCount? : number,dragStartBehavior? : lib9.DragStartBehavior}) {
        let {key,axisDirection,controller,physics,viewportBuilder,excludeFromSemantics,semanticChildCount,dragStartBehavior} = Object.assign({
            "axisDirection" : lib5.AxisDirection.down,
            "excludeFromSemantics" : false,
            "dragStartBehavior" : lib9.DragStartBehavior.down}, _namedArguments );
        this.assert = assert;
        this.axisDirection = axisDirection;
        this.controller = controller;
        this.physics = physics;
        this.viewportBuilder = viewportBuilder;
        this.excludeFromSemantics = excludeFromSemantics;
        this.semanticChildCount = semanticChildCount;
        this.dragStartBehavior = dragStartBehavior;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    axisDirection : lib5.AxisDirection;

    controller : lib6.ScrollController;

    physics : lib7.ScrollPhysics;

    viewportBuilder : (context : lib3.BuildContext,position : lib8.ViewportOffset) => lib3.Widget;

    excludeFromSemantics : boolean;

    semanticChildCount : number;

    dragStartBehavior : lib9.DragStartBehavior;

    get axis() : lib5.Axis {
        return lib5.axisDirectionToAxis(this.axisDirection);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : ScrollableState {
        return ScrollableState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib10.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib10.EnumProperty('axisDirection',this.axisDirection));
        properties.add(lib10.DiagnosticsProperty('physics',this.physics));
    }
    static of(context : lib3.BuildContext) : ScrollableState {
        let widget : _ScrollableScope = context.inheritFromWidgetOfExactType(_ScrollableScope);
        return ((t)=>(!!t)?t.scrollable:null)(widget);
    }
    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

    ensureVisible(context : lib3.BuildContext,_namedArguments? : {alignment? : double,duration? : core.DartDuration,curve? : lib11.Curve}) {
        let {alignment,duration,curve} = Object.assign({
            "alignment" : 0.0,
            "duration" : core.DartDuration.zero,
            "curve" : lib11.Curves.ease}, _namedArguments );
        let List;
        new core.DartList.literal<async.Future<any>>();
        /* TODO (EmptyStatementImpl) : ; */;
        op(Op.SHIFTRIGHT,,futures);
        /* TODO (EmptyStatementImpl) : ; */;
        op(Op.SHIFTRIGHT,,new core.DartList.literal());
        let scrollable : ScrollableState = Scrollable.of(context);
        while (scrollable != null){
            futures.add(scrollable.position.ensureVisible(context.findRenderObject(),{
                alignment : alignment,duration : duration,curve : curve}));
            context = scrollable.context;
            scrollable = Scrollable.of(context);
        }
        if (futures.isEmpty || op(Op.EQUALS,duration,core.DartDuration.zero)) return op(Op.LT,async.Future<T>,);
        op(Op.GT,,.value());
        if (op(Op.EQUALS,futures.length,1)) return futures.single;
        return op(Op.LT,async.Future.wait.bind(async.Future),);
        op(Op.GT,,(futures).then);
        new core.DartList.literal<any>();
        /* TODO (EmptyStatementImpl) : ; */;
        op(Op.GT,,(op(Op.GT,(op(Op.LT,List,)),_)));
        null;
    }
}

export namespace _ScrollableScope {
    export type Constructors = lib3.InheritedWidget.Constructors | '_ScrollableScope';
    export type Interface = Omit<_ScrollableScope, Constructors>;
}
@DartClass
export class _ScrollableScope extends lib3.InheritedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,scrollable? : ScrollableState,position? : lib12.ScrollPosition,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ScrollableScope(_namedArguments? : {key? : lib4.Key,scrollable? : ScrollableState,position? : lib12.ScrollPosition,child? : lib3.Widget}) {
        let {key,scrollable,position,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.scrollable = scrollable;
        this.position = position;
    }
     : any;

     : any;

     : any;

    key;
    child;

     : any;

    scrollable : ScrollableState;

    position : lib12.ScrollPosition;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(old : _ScrollableScope) : boolean {
        return this.position != old.position;
    }
}

export namespace ScrollableState {
    export type Constructors = 'ScrollableState';
    export type Interface = Omit<ScrollableState, Constructors>;
}
@DartClass
@Implements(lib13.ScrollContext)
@With(any)
export class ScrollableState extends any implements lib13.ScrollContext.Interface,any.Interface {
    get position() : lib12.ScrollPosition {
        return this._position;
    }
    _position : lib12.ScrollPosition;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get axisDirection() : lib5.AxisDirection {
        return widget.axisDirection;
    }
    _configuration : lib14.ScrollBehavior;

    _physics : lib7.ScrollPhysics;

    _updatePosition() : any {
        this._configuration = lib14.ScrollConfiguration.of(lib12.properties.context);
        this._physics = this._configuration.getScrollPhysics(lib12.properties.context);
        if (widget.physics != null) this._physics = widget.physics.applyTo(this._physics);
        let controller : lib6.ScrollController = widget.controller;
        let oldPosition : lib12.ScrollPosition = this.position;
        if (oldPosition != null) {
            ((_947_)=>(!!_947_)?_947_.detach(oldPosition):null)(controller);
            async.scheduleMicrotask(oldPosition.dispose.bind(oldPosition));
        }
        this._position = (((_948_)=>(!!_948_)?_948_.createScrollPosition(this._physics,this,oldPosition):null)(controller) || lib15.ScrollPositionWithSingleContext({
            physics : this._physics,context : this,oldPosition : oldPosition}));
        /* TODO (AssertStatementImpl) : assert (position != null); */;
        ((_949_)=>(!!_949_)?_949_.attach(this.position):null)(controller);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        super.didChangeDependencies();
        this._updatePosition();
    }
    _shouldUpdatePosition(oldWidget : Scrollable) : boolean {
        let newPhysics : lib7.ScrollPhysics = widget.physics;
        let oldPhysics : lib7.ScrollPhysics = oldWidget.physics;
        do{
            if (((t)=>(!!t)?t.runtimeType:null)(newPhysics) != ((t)=>(!!t)?t.runtimeType:null)(oldPhysics)) return true;
            newPhysics = ((t)=>(!!t)?t.parent:null)(newPhysics);
            oldPhysics = ((t)=>(!!t)?t.parent:null)(oldPhysics);
        } while (newPhysics != null || oldPhysics != null);
        return ((t)=>(!!t)?t.runtimeType:null)(widget.controller) != ((t)=>(!!t)?t.runtimeType:null)(oldWidget.controller);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : Scrollable) : any {
        super.didUpdateWidget(oldWidget);
        if (widget.controller != oldWidget.controller) {
            ((_950_)=>(!!_950_)?_950_.detach(this.position):null)(oldWidget.controller);
            ((_951_)=>(!!_951_)?_951_.attach(this.position):null)(widget.controller);
        }
        if (this._shouldUpdatePosition(oldWidget)) this._updatePosition();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        ((_952_)=>(!!_952_)?_952_.detach(this.position):null)(widget.controller);
        this.position.dispose();
        super.dispose();
    }
    _scrollSemanticsKey : lib3.GlobalKey<any>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    setSemanticsActions(actions : core.DartSet<any>) : any {
        if (this._gestureDetectorKey.currentState != null) this._gestureDetectorKey.currentState.replaceSemanticsActions(actions);
    }
    _gestureDetectorKey : lib3.GlobalKey<lib16.RawGestureDetectorState>;

    _ignorePointerKey : lib3.GlobalKey<any>;

    _gestureRecognizers : core.DartMap<core.Type,lib16.GestureRecognizerFactory<any>>;

    _shouldIgnorePointer : boolean;

    _lastCanDrag : boolean;

    _lastAxisDirection : lib5.Axis;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    setCanDrag(canDrag : boolean) : any {
        if (canDrag == this._lastCanDrag && (!canDrag || op(Op.EQUALS,widget.axis,this._lastAxisDirection))) return;
        if (!canDrag) {
            this._gestureRecognizers = new core.DartMap.literal([
            ]);
        }else {
            switch (widget.axis) {
                case lib5.Axis.vertical:
                    this._gestureRecognizers = new core.DartMap.literal([
                        [lib17.VerticalDragGestureRecognizer,lib16.GestureRecognizerFactoryWithHandlers(() =>  {
                            return lib17.VerticalDragGestureRecognizer();
                        },(instance : lib17.VerticalDragGestureRecognizer) =>  {
                            ((_) : lib17.VerticalDragGestureRecognizer =>  {
                                {
                                    _.onDown = this._handleDragDown.bind(this);
                                    _.onStart = this._handleDragStart.bind(this);
                                    _.onUpdate = this._handleDragUpdate.bind(this);
                                    _.onEnd = this._handleDragEnd.bind(this);
                                    _.onCancel = this._handleDragCancel.bind(this);
                                    _.minFlingDistance = ((t)=>(!!t)?t.minFlingDistance:null)(this._physics);
                                    _.minFlingVelocity = ((t)=>(!!t)?t.minFlingVelocity:null)(this._physics);
                                    _.maxFlingVelocity = ((t)=>(!!t)?t.maxFlingVelocity:null)(this._physics);
                                    _.dragStartBehavior = widget.dragStartBehavior;
                                    return _;
                                }
                            })(instance);
                        })]]);
                    break;
                case lib5.Axis.horizontal:
                    this._gestureRecognizers = new core.DartMap.literal([
                        [lib17.HorizontalDragGestureRecognizer,lib16.GestureRecognizerFactoryWithHandlers(() =>  {
                            return lib17.HorizontalDragGestureRecognizer();
                        },(instance : lib17.HorizontalDragGestureRecognizer) =>  {
                            ((_) : lib17.HorizontalDragGestureRecognizer =>  {
                                {
                                    _.onDown = this._handleDragDown.bind(this);
                                    _.onStart = this._handleDragStart.bind(this);
                                    _.onUpdate = this._handleDragUpdate.bind(this);
                                    _.onEnd = this._handleDragEnd.bind(this);
                                    _.onCancel = this._handleDragCancel.bind(this);
                                    _.minFlingDistance = ((t)=>(!!t)?t.minFlingDistance:null)(this._physics);
                                    _.minFlingVelocity = ((t)=>(!!t)?t.minFlingVelocity:null)(this._physics);
                                    _.maxFlingVelocity = ((t)=>(!!t)?t.maxFlingVelocity:null)(this._physics);
                                    _.dragStartBehavior = widget.dragStartBehavior;
                                    return _;
                                }
                            })(instance);
                        })]]);
                    break;
            }
        }
        this._lastCanDrag = canDrag;
        this._lastAxisDirection = widget.axis;
        if (this._gestureDetectorKey.currentState != null) this._gestureDetectorKey.currentState.replaceGestureRecognizers(this._gestureRecognizers);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get vsync() : any {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    setIgnorePointer(value : boolean) : any {
        if (this._shouldIgnorePointer == value) return;
        this._shouldIgnorePointer = value;
        if (this._ignorePointerKey.currentContext != null) {
            let renderBox : lib18.RenderIgnorePointer = this._ignorePointerKey.currentContext.findRenderObject();
            renderBox.ignoring = this._shouldIgnorePointer;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get notificationContext() : lib3.BuildContext {
        return this._gestureDetectorKey.currentContext;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get storageContext() : lib3.BuildContext {
        return lib12.properties.context;
    }
    _drag : lib19.Drag;

    _hold : lib20.ScrollHoldController;

    _handleDragDown(details : lib21.DragDownDetails) : any {
        /* TODO (AssertStatementImpl) : assert (_drag == null); */;
        /* TODO (AssertStatementImpl) : assert (_hold == null); */;
        this._hold = this.position.hold(this._disposeHold.bind(this));
    }
    _handleDragStart(details : lib21.DragStartDetails) : any {
        /* TODO (AssertStatementImpl) : assert (_drag == null); */;
        this._drag = this.position.drag(details,this._disposeDrag.bind(this));
        /* TODO (AssertStatementImpl) : assert (_drag != null); */;
        /* TODO (AssertStatementImpl) : assert (_hold == null); */;
    }
    _handleDragUpdate(details : lib21.DragUpdateDetails) : any {
        /* TODO (AssertStatementImpl) : assert (_hold == null || _drag == null); */;
        ((_953_)=>(!!_953_)?_953_.update(details):null)(this._drag);
    }
    _handleDragEnd(details : lib21.DragEndDetails) : any {
        /* TODO (AssertStatementImpl) : assert (_hold == null || _drag == null); */;
        ((_954_)=>(!!_954_)?_954_.end(details):null)(this._drag);
        /* TODO (AssertStatementImpl) : assert (_drag == null); */;
    }
    _handleDragCancel() : any {
        /* TODO (AssertStatementImpl) : assert (_hold == null || _drag == null); */;
        ((_955_)=>(!!_955_)?_955_.cancel():null)(this._hold);
        ((_956_)=>(!!_956_)?_956_.cancel():null)(this._drag);
        /* TODO (AssertStatementImpl) : assert (_hold == null); */;
        /* TODO (AssertStatementImpl) : assert (_drag == null); */;
    }
    _disposeHold() : any {
        this._hold = null;
    }
    _disposeDrag() : any {
        this._drag = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (position != null); */;
        let result : lib3.Widget = _ScrollableScope({
            scrollable : this,position : this.position,child : lib16.RawGestureDetector({
                key : this._gestureDetectorKey,gestures : this._gestureRecognizers,behavior : HitTestBehavior.opaque,excludeFromSemantics : widget.excludeFromSemantics,child : lib22.Semantics({
                    explicitChildNodes : !widget.excludeFromSemantics,child : lib22.IgnorePointer({
                        key : this._ignorePointerKey,ignoring : this._shouldIgnorePointer,ignoringSemantics : false,child : widget.viewportBuilder(context,this.position)})})})});
        if (!widget.excludeFromSemantics) {
            result = _ScrollSemantics({
                key : this._scrollSemanticsKey,child : result,position : this.position,allowImplicitScrolling : (((t)=>(!!t)?t.allowImplicitScrolling:null)(((t)=>(!!t)?t.physics:null)(widget)) || this._physics.allowImplicitScrolling),semanticChildCount : widget.semanticChildCount});
        }
        return this._configuration.buildViewportChrome(context,result,widget.axisDirection);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib10.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib10.DiagnosticsProperty('position',this.position));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScrollableState() {
        this._scrollSemanticsKey = lib3.GlobalKey();
        this._gestureDetectorKey = lib3.GlobalKey();
        this._ignorePointerKey = lib3.GlobalKey();
        this._gestureRecognizers = new core.DartMap.literal([
        ]);
        this._shouldIgnorePointer = false;
    }
}

export namespace _ScrollSemantics {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | '_ScrollSemantics';
    export type Interface = Omit<_ScrollSemantics, Constructors>;
}
@DartClass
export class _ScrollSemantics extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,position? : lib12.ScrollPosition,allowImplicitScrolling? : boolean,semanticChildCount? : number,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ScrollSemantics(_namedArguments? : {key? : lib4.Key,position? : lib12.ScrollPosition,allowImplicitScrolling? : boolean,semanticChildCount? : number,child? : lib3.Widget}) {
        let {key,position,allowImplicitScrolling,semanticChildCount,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.position = position;
        this.allowImplicitScrolling = allowImplicitScrolling;
        this.semanticChildCount = semanticChildCount;
    }
     : any;

     : any;

    key;
    child;

     : any;

    position : lib12.ScrollPosition;

    allowImplicitScrolling : boolean;

    semanticChildCount : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : _RenderScrollSemantics {
        return _RenderScrollSemantics({
            position : this.position,allowImplicitScrolling : this.allowImplicitScrolling,semanticChildCount : this.semanticChildCount});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : _RenderScrollSemantics) : any {
        ((_) : _RenderScrollSemantics =>  {
            {
                _.allowImplicitScrolling = this.allowImplicitScrolling;
                _.position = this.position;
                _.semanticChildCount = this.semanticChildCount;
                return _;
            }
        })(renderObject);
    }
}

export namespace _RenderScrollSemantics {
    export type Constructors = lib18.RenderProxyBox.Constructors | '_RenderScrollSemantics' | 'addListener';
    export type Interface = Omit<_RenderScrollSemantics, Constructors>;
}
@DartClass
export class _RenderScrollSemantics extends lib18.RenderProxyBox {
    constructor(_namedArguments? : {position? : lib12.ScrollPosition,allowImplicitScrolling? : boolean,semanticChildCount? : number,child? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RenderScrollSemantics(_namedArguments? : {position? : lib12.ScrollPosition,allowImplicitScrolling? : boolean,semanticChildCount? : number,child? : any}) {
        let {position,allowImplicitScrolling,semanticChildCount,child} = Object.assign({
        }, _namedArguments );
        this._position = position;
        this._allowImplicitScrolling = allowImplicitScrolling;
        this._semanticChildCount = semanticChildCount;
        this.assert = assert;
    }
     : any;

     : any;

    @namedConstructor
    addListener(markNeedsSemanticsUpdate : any) {
    }
    static addListener : new(markNeedsSemanticsUpdate : any) => _RenderScrollSemantics;

}

export class properties {
    static get position() : lib12.ScrollPosition {
        return properties._position;
    }
    private static __$_position : lib12.ScrollPosition;
    static get _position() : lib12.ScrollPosition { 
        return this.__$_position;
    }
    static set _position(__$value : lib12.ScrollPosition)  { 
        this.__$_position = __$value;
    }

    static set position(value : lib12.ScrollPosition) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,value,properties._position)) return;
        properties._position.removeListener(markNeedsSemanticsUpdate);
        properties._position = value;
        properties._position.addListener(markNeedsSemanticsUpdate);
        markNeedsSemanticsUpdate();
    }
    static get allowImplicitScrolling() : boolean {
        return properties._allowImplicitScrolling;
    }
    private static __$_allowImplicitScrolling : boolean;
    static get _allowImplicitScrolling() : boolean { 
        return this.__$_allowImplicitScrolling;
    }
    static set _allowImplicitScrolling(__$value : boolean)  { 
        this.__$_allowImplicitScrolling = __$value;
    }

    static set allowImplicitScrolling(value : boolean) {
        if (value == properties._allowImplicitScrolling) return;
        properties._allowImplicitScrolling = value;
        markNeedsSemanticsUpdate();
    }
    static get semanticChildCount() : number {
        return properties._semanticChildCount;
    }
    private static __$_semanticChildCount : number;
    static get _semanticChildCount() : number { 
        return this.__$_semanticChildCount;
    }
    static set _semanticChildCount(__$value : number)  { 
        this.__$_semanticChildCount = __$value;
    }

    static set semanticChildCount(value : number) {
        if (value == properties.semanticChildCount) return;
        properties._semanticChildCount = value;
        markNeedsSemanticsUpdate();
    }
    private static __$_innerNode : lib23.SemanticsNode;
    static get _innerNode() : lib23.SemanticsNode { 
        return this.__$_innerNode;
    }
    static set _innerNode(__$value : lib23.SemanticsNode)  { 
        this.__$_innerNode = __$value;
    }

}
