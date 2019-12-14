/** Library asset:datahedgehog_monitor/lib/lib/widgets/scroll_physics.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./scroll_metrics";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/physics/simulation";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/physics/spring_simulation";
import * as lib6 from "./binding";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/physics/tolerance";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/gestures/constants";
import * as math from "@dart2ts/dart/math";
import * as lib10 from "./scroll_simulation";

export namespace ScrollPhysics {
    export type Constructors = 'ScrollPhysics';
    export type Interface = Omit<ScrollPhysics, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class ScrollPhysics {
    constructor(_namedArguments? : {parent? : ScrollPhysics}) {
    }
    @defaultConstructor
    ScrollPhysics(_namedArguments? : {parent? : ScrollPhysics}) {
        let {parent} = Object.assign({
        }, _namedArguments );
        this.parent = parent;
    }
    parent : ScrollPhysics;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    buildParent(ancestor : ScrollPhysics) : ScrollPhysics {
        return (((_959_)=>(!!_959_)?_959_.applyTo(ancestor):null)(this.parent) || ancestor);
    }
    applyTo(ancestor : ScrollPhysics) : ScrollPhysics {
        return ScrollPhysics({
            parent : this.buildParent(ancestor)});
    }
    applyPhysicsToUserOffset(position : lib3.ScrollMetrics,offset : double) : double {
        if (op(Op.EQUALS,this.parent,null)) return offset;
        return this.parent.applyPhysicsToUserOffset(position,offset);
    }
    shouldAcceptUserOffset(position : lib3.ScrollMetrics) : boolean {
        if (op(Op.EQUALS,this.parent,null)) return position.pixels != 0.0 || position.minScrollExtent != position.maxScrollExtent;
        return this.parent.shouldAcceptUserOffset(position);
    }
    applyBoundaryConditions(position : lib3.ScrollMetrics,value : double) : double {
        if (op(Op.EQUALS,this.parent,null)) return 0.0;
        return this.parent.applyBoundaryConditions(position,value);
    }
    createBallisticSimulation(position : lib3.ScrollMetrics,velocity : double) : lib4.Simulation {
        if (op(Op.EQUALS,this.parent,null)) return null;
        return this.parent.createBallisticSimulation(position,velocity);
    }
    private static __$_kDefaultSpring : lib5.SpringDescription;
    static get _kDefaultSpring() : lib5.SpringDescription { 
        if (this.__$_kDefaultSpring===undefined) {
            this.__$_kDefaultSpring = lib5.SpringDescription.withDampingRatio({
                mass : 0.5,stiffness : 100.0,ratio : 1.1});
        }
        return this.__$_kDefaultSpring;
    }
    static set _kDefaultSpring(__$value : lib5.SpringDescription)  { 
        this.__$_kDefaultSpring = __$value;
    }

    get spring() : lib5.SpringDescription {
        return (((t)=>(!!t)?t.spring:null)(this.parent) || ScrollPhysics._kDefaultSpring);
    }
    private static __$_kDefaultTolerance : lib7.Tolerance;
    static get _kDefaultTolerance() : lib7.Tolerance { 
        if (this.__$_kDefaultTolerance===undefined) {
            this.__$_kDefaultTolerance = lib7.Tolerance({
                velocity : 1.0 / (0.05 * lib6.properties.WidgetsBinding.instance.window.devicePixelRatio),distance : 1.0 / lib6.properties.WidgetsBinding.instance.window.devicePixelRatio});
        }
        return this.__$_kDefaultTolerance;
    }
    static set _kDefaultTolerance(__$value : lib7.Tolerance)  { 
        this.__$_kDefaultTolerance = __$value;
    }

    get tolerance() : lib7.Tolerance {
        return (((t)=>(!!t)?t.tolerance:null)(this.parent) || ScrollPhysics._kDefaultTolerance);
    }
    get minFlingDistance() : double {
        return (((t)=>(!!t)?t.minFlingDistance:null)(this.parent) || lib8.properties.kTouchSlop);
    }
    get minFlingVelocity() : double {
        return (((t)=>(!!t)?t.minFlingVelocity:null)(this.parent) || lib8.properties.kMinFlingVelocity);
    }
    get maxFlingVelocity() : double {
        return (((t)=>(!!t)?t.maxFlingVelocity:null)(this.parent) || lib8.properties.kMaxFlingVelocity);
    }
    carriedMomentum(existingVelocity : double) : double {
        if (op(Op.EQUALS,this.parent,null)) return 0.0;
        return this.parent.carriedMomentum(existingVelocity);
    }
    get dragStartDistanceMotionThreshold() : double {
        return ((t)=>(!!t)?t.dragStartDistanceMotionThreshold:null)(this.parent);
    }
    get allowImplicitScrolling() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        if (op(Op.EQUALS,this.parent,null)) return this.runtimeType.toString();
        return `${this.runtimeType} -> ${this.parent}`;
    }
}

export namespace BouncingScrollPhysics {
    export type Constructors = ScrollPhysics.Constructors | 'BouncingScrollPhysics';
    export type Interface = Omit<BouncingScrollPhysics, Constructors>;
}
@DartClass
export class BouncingScrollPhysics extends ScrollPhysics {
    constructor(_namedArguments? : {parent? : ScrollPhysics}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BouncingScrollPhysics(_namedArguments? : {parent? : ScrollPhysics}) {
        let {parent} = Object.assign({
        }, _namedArguments );
        super.ScrollPhysics({
            parent : parent});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyTo(ancestor : ScrollPhysics) : BouncingScrollPhysics {
        return BouncingScrollPhysics({
            parent : this.buildParent(ancestor)});
    }
    frictionFactor(overscrollFraction : double) : double {
        return 0.52 * math.pow(1 - overscrollFraction,2);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyPhysicsToUserOffset(position : lib3.ScrollMetrics,offset : double) : double {
        /* TODO (AssertStatementImpl) : assert (offset != 0.0); */;
        /* TODO (AssertStatementImpl) : assert (position.minScrollExtent <= position.maxScrollExtent); */;
        if (!position.outOfRange) return offset;
        let overscrollPastStart : double = math.max(position.minScrollExtent - position.pixels,0.0);
        let overscrollPastEnd : double = math.max(position.pixels - position.maxScrollExtent,0.0);
        let overscrollPast : double = math.max(overscrollPastStart,overscrollPastEnd);
        let easing : boolean = (overscrollPastStart > 0.0 && offset < 0.0) || (overscrollPastEnd > 0.0 && offset > 0.0);
        let friction : double = easing ? this.frictionFactor((overscrollPast - new core.DartDouble(offset).abs()) / position.viewportDimension) : this.frictionFactor(overscrollPast / position.viewportDimension);
        let direction : double = new core.DartDouble(offset).sign;
        return direction * BouncingScrollPhysics._applyFriction(overscrollPast,new core.DartDouble(offset).abs(),friction);
    }
    static _applyFriction(extentOutside : double,absDelta : double,gamma : double) : double {
        /* TODO (AssertStatementImpl) : assert (absDelta > 0); */;
        let total : double = 0.0;
        if (extentOutside > 0) {
            let deltaToLimit : double = extentOutside / gamma;
            if (absDelta < deltaToLimit) return absDelta * gamma;
            total += extentOutside;
            absDelta -= deltaToLimit;
        }
        return total + absDelta;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyBoundaryConditions(position : lib3.ScrollMetrics,value : double) : double {
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createBallisticSimulation(position : lib3.ScrollMetrics,velocity : double) : lib4.Simulation {
        let tolerance : lib7.Tolerance = this.tolerance;
        if (new core.DartDouble(velocity).abs() >= tolerance.velocity || position.outOfRange) {
            return lib10.BouncingScrollSimulation({
                spring : lib10.properties.spring,position : position.pixels,velocity : velocity * 0.91,leadingExtent : position.minScrollExtent,trailingExtent : position.maxScrollExtent,tolerance : tolerance});
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get minFlingVelocity() : double {
        return lib8.properties.kMinFlingVelocity * 2.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    carriedMomentum(existingVelocity : double) : double {
        return new core.DartDouble(existingVelocity).sign * math.min(0.000816 * new core.DartNumber(math.pow(new core.DartDouble(existingVelocity).abs(),1.967)).toDouble(),40000.0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dragStartDistanceMotionThreshold() : double {
        return 3.5;
    }
}

export namespace ClampingScrollPhysics {
    export type Constructors = ScrollPhysics.Constructors | 'ClampingScrollPhysics';
    export type Interface = Omit<ClampingScrollPhysics, Constructors>;
}
@DartClass
export class ClampingScrollPhysics extends ScrollPhysics {
    constructor(_namedArguments? : {parent? : ScrollPhysics}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClampingScrollPhysics(_namedArguments? : {parent? : ScrollPhysics}) {
        let {parent} = Object.assign({
        }, _namedArguments );
        super.ScrollPhysics({
            parent : parent});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyTo(ancestor : ScrollPhysics) : ClampingScrollPhysics {
        return ClampingScrollPhysics({
            parent : this.buildParent(ancestor)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyBoundaryConditions(position : lib3.ScrollMetrics,value : double) : double {
        /* TODO (AssertStatementImpl) : assert (() {if (value == position.pixels) {throw FlutterError('$runtimeType.applyBoundaryConditions() was called redundantly.\n' 'The proposed new position, $value, is exactly equal to the current position of the ' 'given ${position.runtimeType}, ${position.pixels}.\n' 'The applyBoundaryConditions method should only be called when the value is ' 'going to actually change the pixels, otherwise it is redundant.\n' 'The physics object in question was:\n' '  $this\n' 'The position object in question was:\n' '  $position\n');} return true;}()); */;
        if (value < position.pixels && position.pixels <= position.minScrollExtent) return value - position.pixels;
        if (position.maxScrollExtent <= position.pixels && position.pixels < value) return value - position.pixels;
        if (value < position.minScrollExtent && position.minScrollExtent < position.pixels) return value - position.minScrollExtent;
        if (position.pixels < position.maxScrollExtent && position.maxScrollExtent < value) return value - position.maxScrollExtent;
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createBallisticSimulation(position : lib3.ScrollMetrics,velocity : double) : lib4.Simulation {
        let tolerance : lib7.Tolerance = this.tolerance;
        if (position.outOfRange) {
            let end : double;
            if (position.pixels > position.maxScrollExtent) end = position.maxScrollExtent;
            if (position.pixels < position.minScrollExtent) end = position.minScrollExtent;
            /* TODO (AssertStatementImpl) : assert (end != null); */;
            return lib5.ScrollSpringSimulation(lib10.properties.spring,position.pixels,end,math.min(0.0,velocity),{
                tolerance : tolerance});
        }
        if (new core.DartDouble(velocity).abs() < tolerance.velocity) return null;
        if (velocity > 0.0 && position.pixels >= position.maxScrollExtent) return null;
        if (velocity < 0.0 && position.pixels <= position.minScrollExtent) return null;
        return lib10.ClampingScrollSimulation({
            position : position.pixels,velocity : velocity,tolerance : tolerance});
    }
}

export namespace AlwaysScrollableScrollPhysics {
    export type Constructors = ScrollPhysics.Constructors | 'AlwaysScrollableScrollPhysics';
    export type Interface = Omit<AlwaysScrollableScrollPhysics, Constructors>;
}
@DartClass
export class AlwaysScrollableScrollPhysics extends ScrollPhysics {
    constructor(_namedArguments? : {parent? : ScrollPhysics}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AlwaysScrollableScrollPhysics(_namedArguments? : {parent? : ScrollPhysics}) {
        let {parent} = Object.assign({
        }, _namedArguments );
        super.ScrollPhysics({
            parent : parent});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyTo(ancestor : ScrollPhysics) : AlwaysScrollableScrollPhysics {
        return AlwaysScrollableScrollPhysics({
            parent : this.buildParent(ancestor)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldAcceptUserOffset(position : lib3.ScrollMetrics) : boolean {
        return true;
    }
}

export namespace NeverScrollableScrollPhysics {
    export type Constructors = ScrollPhysics.Constructors | 'NeverScrollableScrollPhysics';
    export type Interface = Omit<NeverScrollableScrollPhysics, Constructors>;
}
@DartClass
export class NeverScrollableScrollPhysics extends ScrollPhysics {
    constructor(_namedArguments? : {parent? : ScrollPhysics}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NeverScrollableScrollPhysics(_namedArguments? : {parent? : ScrollPhysics}) {
        let {parent} = Object.assign({
        }, _namedArguments );
        super.ScrollPhysics({
            parent : parent});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyTo(ancestor : ScrollPhysics) : NeverScrollableScrollPhysics {
        return NeverScrollableScrollPhysics({
            parent : this.buildParent(ancestor)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldAcceptUserOffset(position : lib3.ScrollMetrics) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get allowImplicitScrolling() : boolean {
        return false;
    }
}

export class properties {
}
