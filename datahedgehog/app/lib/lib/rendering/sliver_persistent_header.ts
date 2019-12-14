/** Library asset:datahedgehog_monitor/lib/lib/rendering/sliver_persistent_header.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./sliver";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib5 from "./box";
import * as lib6 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as math from "@dart2ts/dart/math";
import * as lib9 from "./object";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/semantics/semantics";
import * as lib11 from "./viewport";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/scheduler/ticker";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib17 from "./viewport_offset";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/animation/tween";

export namespace RenderSliverPersistentHeader {
    export type Constructors = lib3.RenderSliver.Constructors | 'RenderSliverPersistentHeader';
    export type Interface = Omit<RenderSliverPersistentHeader, Constructors>;
}
@DartClass
@With(any,lib3.RenderSliverHelpers)
export class RenderSliverPersistentHeader extends lib3.RenderSliver implements any.Interface,lib3.RenderSliverHelpers.Interface {
    @Abstract
    _getRightWayUp(constraints : lib3.SliverConstraints) : boolean {
        throw 'from mixin';
    }
    @Abstract
    hitTestBoxChild(result : lib4.HitTestResult,child : lib5.RenderBox,_namedArguments? : {mainAxisPosition? : double,crossAxisPosition? : double}) : boolean {
        let {mainAxisPosition,crossAxisPosition} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    applyPaintTransformForBoxChild(child : lib5.RenderBox,transform : lib6.Matrix4) : any {
        throw 'from mixin';
    }
    constructor(_namedArguments? : {child? : lib5.RenderBox}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderSliverPersistentHeader(_namedArguments? : {child? : lib5.RenderBox}) {
        let {child} = Object.assign({
        }, _namedArguments );
        this._needsUpdateChild = true;
        this._lastShrinkOffset = 0.0;
        this._lastOverlapsContent = false;
        this._excludeFromSemanticsScrolling = false;
        this.child = child;
    }
    @AbstractProperty
    get maxExtent() : double{ throw 'abstract'}
    @AbstractProperty
    get minExtent() : double{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    get childExtent() : double {
        if (op(Op.EQUALS,child,null)) return 0.0;
        /* TODO (AssertStatementImpl) : assert (child.hasSize); */;
        /* TODO (AssertStatementImpl) : assert (constraints.axis != null); */;
        switch (this.constraints.axis) {
            case lib7.Axis.vertical:
                return child.size.height;
            case lib7.Axis.horizontal:
                return child.size.width;
        }
        return null;
    }
    _needsUpdateChild : boolean;

    _lastShrinkOffset : double;

    _lastOverlapsContent : boolean;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    updateChild(shrinkOffset : double,overlapsContent : boolean) : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    markNeedsLayout() : any {
        this._needsUpdateChild = true;
        super.markNeedsLayout();
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    layoutChild(scrollOffset : double,maxExtent : double,_namedArguments? : {overlapsContent? : boolean}) : any {
        let {overlapsContent} = Object.assign({
            "overlapsContent" : false}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (maxExtent != null); */;
        let shrinkOffset : double = math.min(scrollOffset,maxExtent);
        if (this._needsUpdateChild || this._lastShrinkOffset != shrinkOffset || this._lastOverlapsContent != overlapsContent) {
            this.invokeLayoutCallback((constraints : lib3.SliverConstraints) =>  {
                /* TODO (AssertStatementImpl) : assert (constraints == this.constraints); */;
                this.updateChild(shrinkOffset,overlapsContent);
            });
            this._lastShrinkOffset = shrinkOffset;
            this._lastOverlapsContent = overlapsContent;
            this._needsUpdateChild = false;
        }
        /* TODO (AssertStatementImpl) : assert (minExtent != null); */;
        /* TODO (AssertStatementImpl) : assert (() {if (minExtent <= maxExtent) return true; throw FlutterError('The maxExtent for this $runtimeType is less than its minExtent.\n' 'The specified maxExtent was: ${maxExtent.toStringAsFixed(1)}\n' 'The specified minExtent was: ${minExtent.toStringAsFixed(1)}\n');}()); */;
        ((_854_)=>(!!_854_)?_854_.layout(this.constraints.asBoxConstraints({
            maxExtent : math.max(this.minExtent,maxExtent - shrinkOffset)}),{
            parentUsesSize : true}):null)(child);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    childMainAxisPosition(child : lib9.RenderObject) : double {
        return super.childMainAxisPosition(child);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestChildren(result : lib4.HitTestResult,_namedArguments? : {mainAxisPosition? : double,crossAxisPosition? : double}) : boolean {
        let {mainAxisPosition,crossAxisPosition} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (geometry.hitTestExtent > 0.0); */;
        if (child != null) return this.hitTestBoxChild(result,child,{
            mainAxisPosition : mainAxisPosition,crossAxisPosition : crossAxisPosition});
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyPaintTransform(child : lib9.RenderObject,transform : lib6.Matrix4) : any {
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        /* TODO (AssertStatementImpl) : assert (child == this.child); */;
        this.applyPaintTransformForBoxChild(child,transform);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib9.PaintingContext,offset : any) : any {
        if (child != null && this.geometry.visible) {
            /* TODO (AssertStatementImpl) : assert (constraints.axisDirection != null); */;
            switch (lib3.applyGrowthDirectionToAxisDirection(this.constraints.axisDirection,this.constraints.growthDirection)) {
                case lib7.AxisDirection.up:
                    offset += Offset(0.0,this.geometry.paintExtent - this.childMainAxisPosition(child) - this.childExtent);
                    break;
                case lib7.AxisDirection.down:
                    offset += Offset(0.0,this.childMainAxisPosition(child));
                    break;
                case lib7.AxisDirection.left:
                    offset += Offset(this.geometry.paintExtent - this.childMainAxisPosition(child) - this.childExtent,0.0);
                    break;
                case lib7.AxisDirection.right:
                    offset += Offset(this.childMainAxisPosition(child),0.0);
                    break;
            }
            context.paintChild(child,offset);
        }
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    get excludeFromSemanticsScrolling() : boolean {
        return this._excludeFromSemanticsScrolling;
    }
    _excludeFromSemanticsScrolling : boolean;

    set excludeFromSemanticsScrolling(value : boolean) {
        if (this._excludeFromSemanticsScrolling == value) return;
        this._excludeFromSemanticsScrolling = value;
        this.markNeedsSemanticsUpdate();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describeSemanticsConfiguration(config : lib10.SemanticsConfiguration) : any {
        super.describeSemanticsConfiguration(config);
        if (this._excludeFromSemanticsScrolling) config.addTagForChildren(lib11.RenderViewport.excludeFromScrolling);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib12.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib12.DoubleProperty.lazy('maxExtent',() =>  {
            return this.maxExtent;
        }));
        properties.add(lib12.DoubleProperty.lazy('child position',() =>  {
            return this.childMainAxisPosition(child);
        }));
    }
}

export namespace FloatingHeaderSnapConfiguration {
    export type Constructors = 'FloatingHeaderSnapConfiguration';
    export type Interface = Omit<FloatingHeaderSnapConfiguration, Constructors>;
}
@DartClass
export class FloatingHeaderSnapConfiguration {
    constructor(_namedArguments? : {vsync? : lib13.TickerProvider,curve? : lib14.Curve,duration? : core.DartDuration}) {
    }
    @defaultConstructor
    FloatingHeaderSnapConfiguration(_namedArguments? : {vsync? : lib13.TickerProvider,curve? : lib14.Curve,duration? : core.DartDuration}) {
        let {vsync,curve,duration} = Object.assign({
            "curve" : lib14.Curves.ease,
            "duration" : new core.DartDuration({
                milliseconds : 300})}, _namedArguments );
        this.assert = assert;
        this.vsync = vsync;
        this.curve = curve;
        this.duration = duration;
    }
     : any;

     : any;

     : any;

    vsync : lib13.TickerProvider;

    curve : lib14.Curve;

    duration : core.DartDuration;

}

export namespace RenderSliverScrollingPersistentHeader {
    export type Constructors = RenderSliverPersistentHeader.Constructors | 'RenderSliverScrollingPersistentHeader';
    export type Interface = Omit<RenderSliverScrollingPersistentHeader, Constructors>;
}
@DartClass
export class RenderSliverScrollingPersistentHeader extends RenderSliverPersistentHeader {
    constructor(_namedArguments? : {child? : lib5.RenderBox}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderSliverScrollingPersistentHeader(_namedArguments? : {child? : lib5.RenderBox}) {
        let {child} = Object.assign({
        }, _namedArguments );
        super.RenderSliverPersistentHeader({
            child : child});
    }
    _childPosition : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        let maxExtent : double = this.maxExtent;
        this.layoutChild(this.constraints.scrollOffset,maxExtent);
        let paintExtent : double = maxExtent - this.constraints.scrollOffset;
        this.geometry = lib3.SliverGeometry({
            scrollExtent : maxExtent,paintOrigin : math.min(this.constraints.overlap,0.0),paintExtent : new core.DartDouble(paintExtent).clamp(0.0,this.constraints.remainingPaintExtent),maxPaintExtent : maxExtent,hasVisualOverflow : true});
        this._childPosition = math.min(0.0,paintExtent - this.childExtent);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    childMainAxisPosition(child : lib5.RenderBox) : double {
        /* TODO (AssertStatementImpl) : assert (child == this.child); */;
        return this._childPosition;
    }
}

export namespace RenderSliverPinnedPersistentHeader {
    export type Constructors = RenderSliverPersistentHeader.Constructors | 'RenderSliverPinnedPersistentHeader';
    export type Interface = Omit<RenderSliverPinnedPersistentHeader, Constructors>;
}
@DartClass
export class RenderSliverPinnedPersistentHeader extends RenderSliverPersistentHeader {
    constructor(_namedArguments? : {child? : lib5.RenderBox}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderSliverPinnedPersistentHeader(_namedArguments? : {child? : lib5.RenderBox}) {
        let {child} = Object.assign({
        }, _namedArguments );
        super.RenderSliverPersistentHeader({
            child : child});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        let maxExtent : double = this.maxExtent;
        let overlapsContent : boolean = this.constraints.overlap > 0.0;
        this.excludeFromSemanticsScrolling = overlapsContent || (this.constraints.scrollOffset > maxExtent - this.minExtent);
        this.layoutChild(this.constraints.scrollOffset,maxExtent,{
            overlapsContent : overlapsContent});
        let layoutExtent : double = new core.DartDouble((maxExtent - this.constraints.scrollOffset)).clamp(0.0,this.constraints.remainingPaintExtent);
        this.geometry = lib3.SliverGeometry({
            scrollExtent : maxExtent,paintOrigin : this.constraints.overlap,paintExtent : math.min(this.childExtent,this.constraints.remainingPaintExtent),layoutExtent : layoutExtent,maxPaintExtent : maxExtent,maxScrollObstructionExtent : this.minExtent,cacheExtent : layoutExtent > 0.0 ? -this.constraints.cacheOrigin + layoutExtent : layoutExtent,hasVisualOverflow : true});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    childMainAxisPosition(child : lib5.RenderBox) : double {
        return 0.0;
    }
}

export namespace RenderSliverFloatingPersistentHeader {
    export type Constructors = RenderSliverPersistentHeader.Constructors | 'RenderSliverFloatingPersistentHeader';
    export type Interface = Omit<RenderSliverFloatingPersistentHeader, Constructors>;
}
@DartClass
export class RenderSliverFloatingPersistentHeader extends RenderSliverPersistentHeader {
    constructor(_namedArguments? : {child? : lib5.RenderBox,snapConfiguration? : FloatingHeaderSnapConfiguration}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderSliverFloatingPersistentHeader(_namedArguments? : {child? : lib5.RenderBox,snapConfiguration? : FloatingHeaderSnapConfiguration}) {
        let {child,snapConfiguration} = Object.assign({
        }, _namedArguments );
        this._snapConfiguration = snapConfiguration;
        super.RenderSliverPersistentHeader({
            child : child});
    }
    _controller : lib15.AnimationController;

    _animation : lib16.Animation<double>;

    _lastActualScrollOffset : double;

    _effectiveScrollOffset : double;

    _childPosition : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    detach() : any {
        ((_855_)=>(!!_855_)?_855_.dispose():null)(this._controller);
        this._controller = null;
        super.detach();
    }
    get snapConfiguration() : FloatingHeaderSnapConfiguration {
        return this._snapConfiguration;
    }
    _snapConfiguration : FloatingHeaderSnapConfiguration;

    set snapConfiguration(value : FloatingHeaderSnapConfiguration) {
        if (op(Op.EQUALS,value,this._snapConfiguration)) return;
        if (op(Op.EQUALS,value,null)) {
            ((_856_)=>(!!_856_)?_856_.dispose():null)(this._controller);
            this._controller = null;
        }else {
            if (this._snapConfiguration != null && value.vsync != this._snapConfiguration.vsync) ((_857_)=>(!!_857_)?_857_.resync(value.vsync):null)(this._controller);
        }
        this._snapConfiguration = value;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    updateGeometry() : double {
        let maxExtent : double = this.maxExtent;
        let paintExtent : double = maxExtent - this._effectiveScrollOffset;
        let layoutExtent : double = maxExtent - this.constraints.scrollOffset;
        this.geometry = lib3.SliverGeometry({
            scrollExtent : maxExtent,paintOrigin : math.min(this.constraints.overlap,0.0),paintExtent : new core.DartDouble(paintExtent).clamp(0.0,this.constraints.remainingPaintExtent),layoutExtent : new core.DartDouble(layoutExtent).clamp(0.0,this.constraints.remainingPaintExtent),maxPaintExtent : maxExtent,maxScrollObstructionExtent : maxExtent,hasVisualOverflow : true});
        return math.min(0.0,paintExtent - this.childExtent);
    }
    maybeStartSnapAnimation(direction : lib17.ScrollDirection) : any {
        if (op(Op.EQUALS,this.snapConfiguration,null)) return;
        if (op(Op.EQUALS,direction,lib17.ScrollDirection.forward) && this._effectiveScrollOffset <= 0.0) return;
        if (op(Op.EQUALS,direction,lib17.ScrollDirection.reverse) && this._effectiveScrollOffset >= this.maxExtent) return;
        let vsync : lib13.TickerProvider = this.snapConfiguration.vsync;
        let duration : core.DartDuration = this.snapConfiguration.duration;
        this._controller = ( this._controller ) || ( ((_) : any =>  {
            {
                addListener(() =>  {
                    if (this._effectiveScrollOffset == this._animation.value) return;
                    this._effectiveScrollOffset = this._animation.value;
                    this.markNeedsLayout();
                });
                return _;
            }
        })(lib15.AnimationController({
            vsync : vsync,duration : duration})) );
        this._animation = this._controller.drive(lib18.Tween({
            begin : this._effectiveScrollOffset,end : op(Op.EQUALS,direction,lib17.ScrollDirection.forward) ? 0.0 : this.maxExtent}).chain(lib18.CurveTween({
            curve : this.snapConfiguration.curve})));
        this._controller.forward({
            from : 0.0});
    }
    maybeStopSnapAnimation(direction : lib17.ScrollDirection) : any {
        ((_858_)=>(!!_858_)?_858_.stop():null)(this._controller);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        let maxExtent : double = this.maxExtent;
        if (this._lastActualScrollOffset != null && ((this.constraints.scrollOffset < this._lastActualScrollOffset) || (this._effectiveScrollOffset < maxExtent))) {
            let delta : double = this._lastActualScrollOffset - this.constraints.scrollOffset;
            let allowFloatingExpansion : boolean = op(Op.EQUALS,this.constraints.userScrollDirection,lib17.ScrollDirection.forward);
            if (allowFloatingExpansion) {
                if (this._effectiveScrollOffset > maxExtent) this._effectiveScrollOffset = maxExtent;
            }else {
                if (delta > 0.0) delta = 0.0;
            }
            this._effectiveScrollOffset = new core.DartDouble((this._effectiveScrollOffset - delta)).clamp(0.0,this.constraints.scrollOffset);
        }else {
            this._effectiveScrollOffset = this.constraints.scrollOffset;
        }
        let overlapsContent : boolean = this._effectiveScrollOffset < this.constraints.scrollOffset;
        this.excludeFromSemanticsScrolling = overlapsContent;
        this.layoutChild(this._effectiveScrollOffset,maxExtent,{
            overlapsContent : overlapsContent});
        this._childPosition = this.updateGeometry();
        this._lastActualScrollOffset = this.constraints.scrollOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    childMainAxisPosition(child : lib5.RenderBox) : double {
        /* TODO (AssertStatementImpl) : assert (child == this.child); */;
        return this._childPosition;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib12.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib12.DoubleProperty('effective scroll offset',this._effectiveScrollOffset));
    }
}

export namespace RenderSliverFloatingPinnedPersistentHeader {
    export type Constructors = RenderSliverFloatingPersistentHeader.Constructors | 'RenderSliverFloatingPinnedPersistentHeader';
    export type Interface = Omit<RenderSliverFloatingPinnedPersistentHeader, Constructors>;
}
@DartClass
export class RenderSliverFloatingPinnedPersistentHeader extends RenderSliverFloatingPersistentHeader {
    constructor(_namedArguments? : {child? : lib5.RenderBox,snapConfiguration? : FloatingHeaderSnapConfiguration}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderSliverFloatingPinnedPersistentHeader(_namedArguments? : {child? : lib5.RenderBox,snapConfiguration? : FloatingHeaderSnapConfiguration}) {
        let {child,snapConfiguration} = Object.assign({
        }, _namedArguments );
        super.RenderSliverFloatingPersistentHeader({
            child : child,snapConfiguration : snapConfiguration});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateGeometry() : double {
        let minExtent : double = this.minExtent;
        let minAllowedExtent : double = this.constraints.remainingPaintExtent > minExtent ? minExtent : this.constraints.remainingPaintExtent;
        let maxExtent : double = this.maxExtent;
        let paintExtent : double = maxExtent - this._effectiveScrollOffset;
        let clampedPaintExtent : double = new core.DartDouble(paintExtent).clamp(minAllowedExtent,this.constraints.remainingPaintExtent);
        let layoutExtent : double = maxExtent - this.constraints.scrollOffset;
        this.geometry = lib3.SliverGeometry({
            scrollExtent : maxExtent,paintExtent : clampedPaintExtent,layoutExtent : new core.DartDouble(layoutExtent).clamp(0.0,clampedPaintExtent),maxPaintExtent : maxExtent,maxScrollObstructionExtent : maxExtent,hasVisualOverflow : true});
        return 0.0;
    }
}

export class properties {
}
