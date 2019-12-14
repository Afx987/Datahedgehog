/** Library asset:datahedgehog_monitor/lib/lib/rendering/sliver.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib4 from "./viewport_offset";
import * as lib5 from "./object";
import * as lib6 from "./box";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib9 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/gestures/events";

export var applyGrowthDirectionToAxisDirection : (axisDirection : lib3.AxisDirection,growthDirection : GrowthDirection) => lib3.AxisDirection = (axisDirection : lib3.AxisDirection,growthDirection : GrowthDirection) : lib3.AxisDirection =>  {
    /* TODO (AssertStatementImpl) : assert (axisDirection != null); */;
    /* TODO (AssertStatementImpl) : assert (growthDirection != null); */;
    switch (growthDirection) {
        case GrowthDirection.forward:
            return axisDirection;
        case GrowthDirection.reverse:
            return lib3.flipAxisDirection(axisDirection);
    }
    return null;
};
export var applyGrowthDirectionToScrollDirection : (scrollDirection : lib4.ScrollDirection,growthDirection : GrowthDirection) => lib4.ScrollDirection = (scrollDirection : lib4.ScrollDirection,growthDirection : GrowthDirection) : lib4.ScrollDirection =>  {
    /* TODO (AssertStatementImpl) : assert (scrollDirection != null); */;
    /* TODO (AssertStatementImpl) : assert (growthDirection != null); */;
    switch (growthDirection) {
        case GrowthDirection.forward:
            return scrollDirection;
        case GrowthDirection.reverse:
            return lib4.flipScrollDirection(scrollDirection);
    }
    return null;
};
export var _debugCompareFloats : (labelA : string,valueA : double,labelB : string,valueB : double) => string = (labelA : string,valueA : double,labelB : string,valueB : double) : string =>  {
    if (new core.DartDouble(valueA).toStringAsFixed(1) != new core.DartDouble(valueB).toStringAsFixed(1)) {
        return `The ${labelA} is ${new core.DartDouble(valueA).toStringAsFixed(1)}, but ` + `the ${labelB} is ${new core.DartDouble(valueB).toStringAsFixed(1)}. `;
    }
    return `The ${labelA} is ${valueA}, but the ${labelB} is ${valueB}. ` + 'Maybe you have fallen prey to floating point rounding errors, and should explicitly ' + `apply the min() or max() functions, or the clamp() method, to the ${labelB}? `;
};
export enum GrowthDirection {
    forward,
    reverse
}

export namespace SliverConstraints {
    export type Constructors = lib5.Constraints.Constructors | 'SliverConstraints';
    export type Interface = Omit<SliverConstraints, Constructors>;
}
@DartClass
export class SliverConstraints extends lib5.Constraints {
    constructor(_namedArguments? : {axisDirection? : lib3.AxisDirection,growthDirection? : GrowthDirection,userScrollDirection? : lib4.ScrollDirection,scrollOffset? : double,precedingScrollExtent? : double,overlap? : double,remainingPaintExtent? : double,crossAxisExtent? : double,crossAxisDirection? : lib3.AxisDirection,viewportMainAxisExtent? : double,remainingCacheExtent? : double,cacheOrigin? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverConstraints(_namedArguments? : {axisDirection? : lib3.AxisDirection,growthDirection? : GrowthDirection,userScrollDirection? : lib4.ScrollDirection,scrollOffset? : double,precedingScrollExtent? : double,overlap? : double,remainingPaintExtent? : double,crossAxisExtent? : double,crossAxisDirection? : lib3.AxisDirection,viewportMainAxisExtent? : double,remainingCacheExtent? : double,cacheOrigin? : double}) {
        let {axisDirection,growthDirection,userScrollDirection,scrollOffset,precedingScrollExtent,overlap,remainingPaintExtent,crossAxisExtent,crossAxisDirection,viewportMainAxisExtent,remainingCacheExtent,cacheOrigin} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.axisDirection = axisDirection;
        this.growthDirection = growthDirection;
        this.userScrollDirection = userScrollDirection;
        this.scrollOffset = scrollOffset;
        this.precedingScrollExtent = precedingScrollExtent;
        this.overlap = overlap;
        this.remainingPaintExtent = remainingPaintExtent;
        this.crossAxisExtent = crossAxisExtent;
        this.crossAxisDirection = crossAxisDirection;
        this.viewportMainAxisExtent = viewportMainAxisExtent;
        this.remainingCacheExtent = remainingCacheExtent;
        this.cacheOrigin = cacheOrigin;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    copyWith(_namedArguments? : {axisDirection? : lib3.AxisDirection,growthDirection? : GrowthDirection,userScrollDirection? : lib4.ScrollDirection,scrollOffset? : double,precedingScrollExtent? : double,overlap? : double,remainingPaintExtent? : double,crossAxisExtent? : double,crossAxisDirection? : lib3.AxisDirection,viewportMainAxisExtent? : double,remainingCacheExtent? : double,cacheOrigin? : double}) : SliverConstraints {
        let {axisDirection,growthDirection,userScrollDirection,scrollOffset,precedingScrollExtent,overlap,remainingPaintExtent,crossAxisExtent,crossAxisDirection,viewportMainAxisExtent,remainingCacheExtent,cacheOrigin} = Object.assign({
        }, _namedArguments );
        return SliverConstraints({
            axisDirection : (axisDirection || this.axisDirection),growthDirection : (growthDirection || this.growthDirection),userScrollDirection : (userScrollDirection || this.userScrollDirection),scrollOffset : (scrollOffset || this.scrollOffset),precedingScrollExtent : (precedingScrollExtent || this.precedingScrollExtent),overlap : (overlap || this.overlap),remainingPaintExtent : (remainingPaintExtent || this.remainingPaintExtent),crossAxisExtent : (crossAxisExtent || this.crossAxisExtent),crossAxisDirection : (crossAxisDirection || this.crossAxisDirection),viewportMainAxisExtent : (viewportMainAxisExtent || this.viewportMainAxisExtent),remainingCacheExtent : (remainingCacheExtent || this.remainingCacheExtent),cacheOrigin : (cacheOrigin || this.cacheOrigin)});
    }
    axisDirection : lib3.AxisDirection;

    growthDirection : GrowthDirection;

    userScrollDirection : lib4.ScrollDirection;

    scrollOffset : double;

    precedingScrollExtent : double;

    overlap : double;

    remainingPaintExtent : double;

    crossAxisExtent : double;

    crossAxisDirection : lib3.AxisDirection;

    viewportMainAxisExtent : double;

    cacheOrigin : double;

    remainingCacheExtent : double;

    get axis() : lib3.Axis {
        return lib3.axisDirectionToAxis(this.axisDirection);
    }
    get normalizedGrowthDirection() : GrowthDirection {
        /* TODO (AssertStatementImpl) : assert (axisDirection != null); */;
        switch (this.axisDirection) {
            case lib3.AxisDirection.down:
            case lib3.AxisDirection.right:
                return this.growthDirection;
            case lib3.AxisDirection.up:
            case lib3.AxisDirection.left:
                switch (this.growthDirection) {
                    case GrowthDirection.forward:
                        return GrowthDirection.reverse;
                    case GrowthDirection.reverse:
                        return GrowthDirection.forward;
                }
                return null;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isTight() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isNormalized() : boolean {
        return this.scrollOffset >= 0.0 && this.crossAxisExtent >= 0.0 && lib3.axisDirectionToAxis(this.axisDirection) != lib3.axisDirectionToAxis(this.crossAxisDirection) && this.viewportMainAxisExtent >= 0.0 && this.remainingPaintExtent >= 0.0;
    }
    asBoxConstraints(_namedArguments? : {minExtent? : double,maxExtent? : double,crossAxisExtent? : double}) : lib6.BoxConstraints {
        let {minExtent,maxExtent,crossAxisExtent} = Object.assign({
            "minExtent" : 0.0,
            "maxExtent" : new core.DartDouble(double).infinity}, _namedArguments );
        crossAxisExtent = ( crossAxisExtent ) || ( this.crossAxisExtent );
        switch (this.axis) {
            case lib3.Axis.horizontal:
                return lib6.BoxConstraints({
                    minHeight : crossAxisExtent,maxHeight : crossAxisExtent,minWidth : minExtent,maxWidth : maxExtent});
            case lib3.Axis.vertical:
                return lib6.BoxConstraints({
                    minWidth : crossAxisExtent,maxWidth : crossAxisExtent,minHeight : minExtent,maxHeight : maxExtent});
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugAssertIsValid(_namedArguments? : {isAppliedConstraint? : boolean,informationCollector? : (information : core.DartStringBuffer) => any}) : boolean {
        let {isAppliedConstraint,informationCollector} = Object.assign({
            "isAppliedConstraint" : false}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (() {void verify(bool check, String message) {if (check) return; final StringBuffer information = StringBuffer(); if (informationCollector != null) informationCollector(information); throw FlutterError('$runtimeType is not valid: $message\n${information}The offending constraints were:\n  $this');} verify(axis != null, 'The "axis" is null.'); verify(growthDirection != null, 'The "growthDirection" is null.'); verify(scrollOffset != null, 'The "scrollOffset" is null.'); verify(overlap != null, 'The "overlap" is null.'); verify(remainingPaintExtent != null, 'The "remainingPaintExtent" is null.'); verify(crossAxisExtent != null, 'The "crossAxisExtent" is null.'); verify(viewportMainAxisExtent != null, 'The "viewportMainAxisExtent" is null.'); verify(scrollOffset >= 0.0, 'The "scrollOffset" is negative.'); verify(crossAxisExtent >= 0.0, 'The "crossAxisExtent" is negative.'); verify(crossAxisDirection != null, 'The "crossAxisDirection" is null.'); verify(axisDirectionToAxis(axisDirection) != axisDirectionToAxis(crossAxisDirection), 'The "axisDirection" and the "crossAxisDirection" are along the same axis.'); verify(viewportMainAxisExtent >= 0.0, 'The "viewportMainAxisExtent" is negative.'); verify(remainingPaintExtent >= 0.0, 'The "remainingPaintExtent" is negative.'); verify(remainingCacheExtent >= 0.0, 'The "remainingCacheExtent" is negative.'); verify(cacheOrigin <= 0.0, 'The "cacheOrigin" is positive.'); verify(isNormalized, 'The constraints are not normalized.'); return true;}()); */;
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (isNot(other, SliverConstraints)) return false;
        let typedOther : SliverConstraints = other;
        /* TODO (AssertStatementImpl) : assert (typedOther.debugAssertIsValid()); */;
        return op(Op.EQUALS,typedOther.axisDirection,this.axisDirection) && op(Op.EQUALS,typedOther.growthDirection,this.growthDirection) && typedOther.scrollOffset == this.scrollOffset && typedOther.overlap == this.overlap && typedOther.remainingPaintExtent == this.remainingPaintExtent && typedOther.crossAxisExtent == this.crossAxisExtent && op(Op.EQUALS,typedOther.crossAxisDirection,this.crossAxisDirection) && typedOther.viewportMainAxisExtent == this.viewportMainAxisExtent && typedOther.remainingCacheExtent == this.remainingCacheExtent && typedOther.cacheOrigin == this.cacheOrigin;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.axisDirection,this.growthDirection,this.scrollOffset,this.overlap,this.remainingPaintExtent,this.crossAxisExtent,this.crossAxisDirection,this.viewportMainAxisExtent,this.remainingCacheExtent,this.cacheOrigin);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return 'SliverConstraints(' + `${this.axisDirection}, ` + `${this.growthDirection}, ` + `${this.userScrollDirection}, ` + `scrollOffset: ${new core.DartDouble(this.scrollOffset).toStringAsFixed(1)}, ` + `remainingPaintExtent: ${new core.DartDouble(this.remainingPaintExtent).toStringAsFixed(1)}, ` + (this.overlap != 0.0 ? `overlap: ${new core.DartDouble(this.overlap).toStringAsFixed(1)}, ` : '') + `crossAxisExtent: ${new core.DartDouble(this.crossAxisExtent).toStringAsFixed(1)}, ` + `crossAxisDirection: ${this.crossAxisDirection}, ` + `viewportMainAxisExtent: ${new core.DartDouble(this.viewportMainAxisExtent).toStringAsFixed(1)}, ` + `remainingCacheExtent: ${new core.DartDouble(this.remainingCacheExtent).toStringAsFixed(1)} ` + `cacheOrigin: ${new core.DartDouble(this.cacheOrigin).toStringAsFixed(1)} ` + ')';
    }
}

export namespace SliverGeometry {
    export type Constructors = lib7.Diagnosticable.Constructors | 'SliverGeometry';
    export type Interface = Omit<SliverGeometry, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class SliverGeometry extends lib7.Diagnosticable {
    constructor(_namedArguments? : {scrollExtent? : double,paintExtent? : double,paintOrigin? : double,layoutExtent? : double,maxPaintExtent? : double,maxScrollObstructionExtent? : double,hitTestExtent? : double,visible? : boolean,hasVisualOverflow? : boolean,scrollOffsetCorrection? : double,cacheExtent? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverGeometry(_namedArguments? : {scrollExtent? : double,paintExtent? : double,paintOrigin? : double,layoutExtent? : double,maxPaintExtent? : double,maxScrollObstructionExtent? : double,hitTestExtent? : double,visible? : boolean,hasVisualOverflow? : boolean,scrollOffsetCorrection? : double,cacheExtent? : double}) {
        let {scrollExtent,paintExtent,paintOrigin,layoutExtent,maxPaintExtent,maxScrollObstructionExtent,hitTestExtent,visible,hasVisualOverflow,scrollOffsetCorrection,cacheExtent} = Object.assign({
            "scrollExtent" : 0.0,
            "paintExtent" : 0.0,
            "paintOrigin" : 0.0,
            "maxPaintExtent" : 0.0,
            "maxScrollObstructionExtent" : 0.0,
            "hasVisualOverflow" : false}, _namedArguments );
        this.layoutExtent = (this.layoutExtent || this.paintExtent);
        this.hitTestExtent = (this.hitTestExtent || this.paintExtent);
        this.cacheExtent = ((this.cacheExtent || this.layoutExtent) || this.paintExtent);
        this.visible = (this.visible || this.paintExtent > 0.0);
        this.assert = assert;
        this.scrollExtent = scrollExtent;
        this.paintExtent = paintExtent;
        this.paintOrigin = paintOrigin;
        this.maxPaintExtent = maxPaintExtent;
        this.maxScrollObstructionExtent = maxScrollObstructionExtent;
        this.hasVisualOverflow = hasVisualOverflow;
        this.scrollOffsetCorrection = scrollOffsetCorrection;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    layoutExtent;
    hitTestExtent;
    cacheExtent;
    visible;

    private static __$zero : SliverGeometry;
    static get zero() : SliverGeometry { 
        if (this.__$zero===undefined) {
            this.__$zero = SliverGeometry();
        }
        return this.__$zero;
    }

    scrollExtent : double;

    paintOrigin : double;

    paintExtent : double;

    layoutExtent : double;

    maxPaintExtent : double;

    maxScrollObstructionExtent : double;

    hitTestExtent : double;

    visible : boolean;

    hasVisualOverflow : boolean;

    scrollOffsetCorrection : double;

    cacheExtent : double;

    private static __$_epsilon : double;
    static get _epsilon() : double { 
        if (this.__$_epsilon===undefined) {
            this.__$_epsilon = 1e-10;
        }
        return this.__$_epsilon;
    }

    debugAssertIsValid(_namedArguments? : {informationCollector? : (information : core.DartStringBuffer) => any}) : boolean {
        let {informationCollector} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (() {void verify(bool check, String message) {if (check) return; final StringBuffer information = StringBuffer(); if (informationCollector != null) informationCollector(information); throw FlutterError('$runtimeType is not valid: $message\n$information');} verify(scrollExtent != null, 'The "scrollExtent" is null.'); verify(scrollExtent >= 0.0, 'The "scrollExtent" is negative.'); verify(paintExtent != null, 'The "paintExtent" is null.'); verify(paintExtent >= 0.0, 'The "paintExtent" is negative.'); verify(paintOrigin != null, 'The "paintOrigin" is null.'); verify(layoutExtent != null, 'The "layoutExtent" is null.'); verify(layoutExtent >= 0.0, 'The "layoutExtent" is negative.'); verify(cacheExtent >= 0.0, 'The "cacheExtent" is negative.'); if (layoutExtent > paintExtent) {verify(false, 'The "layoutExtent" exceeds the "paintExtent".\n' + _debugCompareFloats('paintExtent', paintExtent, 'layoutExtent', layoutExtent));} verify(maxPaintExtent != null, 'The "maxPaintExtent" is null.'); if (paintExtent - maxPaintExtent > _epsilon) {verify(false, 'The "maxPaintExtent" is less than the "paintExtent".\n' + _debugCompareFloats('maxPaintExtent', maxPaintExtent, 'paintExtent', paintExtent) + 'By definition, a sliver can\'t paint more than the maximum that it can paint!');} verify(hitTestExtent != null, 'The "hitTestExtent" is null.'); verify(hitTestExtent >= 0.0, 'The "hitTestExtent" is negative.'); verify(visible != null, 'The "visible" property is null.'); verify(hasVisualOverflow != null, 'The "hasVisualOverflow" is null.'); verify(scrollOffsetCorrection != 0.0, 'The "scrollOffsetCorrection" is zero.'); return true;}()); */;
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toStringShort() : string {
        return `${this.runtimeType}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.DoubleProperty('scrollExtent',this.scrollExtent));
        if (this.paintExtent > 0.0) {
            properties.add(lib7.DoubleProperty('paintExtent',this.paintExtent,{
                unit : this.visible ? null : ' but not painting'}));
        }else if (this.paintExtent == 0.0) {
            if (this.visible) {
                properties.add(lib7.DoubleProperty('paintExtent',this.paintExtent,{
                    unit : this.visible ? null : ' but visible'}));
            }
            properties.add(lib7.FlagProperty('visible',{
                value : this.visible,ifFalse : 'hidden'}));
        }else {
            properties.add(lib7.DoubleProperty('paintExtent',this.paintExtent,{
                tooltip : '!'}));
        }
        properties.add(lib7.DoubleProperty('paintOrigin',this.paintOrigin,{
            defaultValue : 0.0}));
        properties.add(lib7.DoubleProperty('layoutExtent',this.layoutExtent,{
            defaultValue : this.paintExtent}));
        properties.add(lib7.DoubleProperty('maxPaintExtent',this.maxPaintExtent));
        properties.add(lib7.DoubleProperty('hitTestExtent',this.hitTestExtent,{
            defaultValue : this.paintExtent}));
        properties.add(lib7.DiagnosticsProperty('hasVisualOverflow',this.hasVisualOverflow,{
            defaultValue : false}));
        properties.add(lib7.DoubleProperty('scrollOffsetCorrection',this.scrollOffsetCorrection,{
            defaultValue : null}));
        properties.add(lib7.DoubleProperty('cacheExtent',this.cacheExtent,{
            defaultValue : 0.0}));
    }
}

export namespace SliverHitTestEntry {
    export type Constructors = lib8.HitTestEntry.Constructors | 'SliverHitTestEntry';
    export type Interface = Omit<SliverHitTestEntry, Constructors>;
}
@DartClass
export class SliverHitTestEntry extends lib8.HitTestEntry {
    constructor(target : RenderSliver,_namedArguments? : {mainAxisPosition? : double,crossAxisPosition? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverHitTestEntry(target : RenderSliver,_namedArguments? : {mainAxisPosition? : double,crossAxisPosition? : double}) {
        let {mainAxisPosition,crossAxisPosition} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.mainAxisPosition = mainAxisPosition;
        this.crossAxisPosition = crossAxisPosition;
    }
     : any;

     : any;

     : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get target() : RenderSliver {
        return super.target;
    }
    mainAxisPosition : double;

    crossAxisPosition : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.target.runtimeType}@(mainAxis: ${this.mainAxisPosition}, crossAxis: ${this.crossAxisPosition})`;
    }
}

export namespace SliverLogicalParentData {
    export type Constructors = lib5.ParentData.Constructors | 'SliverLogicalParentData';
    export type Interface = Omit<SliverLogicalParentData, Constructors>;
}
@DartClass
export class SliverLogicalParentData extends lib5.ParentData {
    layoutOffset : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `layoutOffset=${new core.DartDouble(this.layoutOffset).toStringAsFixed(1)}`;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverLogicalParentData() {
        this.layoutOffset = 0.0;
    }
}

export namespace SliverPhysicalParentData {
    export type Constructors = lib5.ParentData.Constructors | 'SliverPhysicalParentData';
    export type Interface = Omit<SliverPhysicalParentData, Constructors>;
}
@DartClass
export class SliverPhysicalParentData extends lib5.ParentData {
    paintOffset : any;

    applyPaintTransform(transform : lib9.Matrix4) : any {
        transform.translate(this.paintOffset.dx,this.paintOffset.dy);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `paintOffset=${this.paintOffset}`;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverPhysicalParentData() {
        this.paintOffset = Offset.zero;
    }
}

export namespace RenderSliver {
    export type Constructors = lib5.RenderObject.Constructors | 'RenderSliver';
    export type Interface = Omit<RenderSliver, Constructors>;
}
@DartClass
export class RenderSliver extends lib5.RenderObject {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constraints() : SliverConstraints {
        return super.constraints;
    }
    get geometry() : SliverGeometry {
        return this._geometry;
    }
    _geometry : SliverGeometry;

    set geometry(value : SliverGeometry) {
        /* TODO (AssertStatementImpl) : assert (!(debugDoingThisResize && debugDoingThisLayout)); */;
        /* TODO (AssertStatementImpl) : assert (sizedByParent || !debugDoingThisResize); */;
        /* TODO (AssertStatementImpl) : assert (() {if ((sizedByParent && debugDoingThisResize) || (!sizedByParent && debugDoingThisLayout)) return true; assert (!debugDoingThisResize); String contract, violation, hint; if (debugDoingThisLayout) {assert (sizedByParent); violation = 'It appears that the geometry setter was called from performLayout().'; hint = '';} else {violation = 'The geometry setter was called from outside layout (neither performResize() nor performLayout() were being run for this object).'; if (owner != null && owner.debugDoingLayout) hint = 'Only the object itself can set its geometry. It is a contract violation for other objects to set it.';} if (sizedByParent) contract = 'Because this RenderSliver has sizedByParent set to true, it must set its geometry in performResize().'; else contract = 'Because this RenderSliver has sizedByParent set to false, it must set its geometry in performLayout().'; throw FlutterError('RenderSliver geometry setter called incorrectly.\n' '$violation\n' '$hint\n' '$contract\n' 'The RenderSliver in question is:\n' '  $this');}()); */;
        this._geometry = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get semanticBounds() : any {
        return this.paintBounds;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get paintBounds() : any {
        /* TODO (AssertStatementImpl) : assert (constraints.axis != null); */;
        switch (this.constraints.axis) {
            case lib3.Axis.horizontal:
                return Rect.fromLTWH(0.0,0.0,this.geometry.paintExtent,this.constraints.crossAxisExtent);
            case lib3.Axis.vertical:
                return Rect.fromLTWH(0.0,0.0,this.constraints.crossAxisExtent,this.geometry.paintExtent);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugResetSize() : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugAssertDoesMeetConstraints() : any {
        /* TODO (AssertStatementImpl) : assert (geometry.debugAssertIsValid(informationCollector: (StringBuffer information) {information.writeln('The RenderSliver that returned the offending geometry was:'); information.writeln('  ${toStringShallow(joiner: '\n  ')}');})); */;
        /* TODO (AssertStatementImpl) : assert (() {if (geometry.paintExtent > constraints.remainingPaintExtent) {throw FlutterError('SliverGeometry has a paintOffset that exceeds the remainingPaintExtent from the constraints.\n' 'The render object whose geometry violates the constraints is the following:\n' '  ${toStringShallow(joiner: '\n  ')}\n' + _debugCompareFloats('remainingPaintExtent', constraints.remainingPaintExtent, 'paintExtent', geometry.paintExtent) + 'The paintExtent must cause the child sliver to paint within the viewport, and so ' 'cannot exceed the remainingPaintExtent.');} return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performResize() : any {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
    get centerOffsetAdjustment() : double {
        return 0.0;
    }
    hitTest(result : lib8.HitTestResult,_namedArguments? : {mainAxisPosition? : double,crossAxisPosition? : double}) : boolean {
        let {mainAxisPosition,crossAxisPosition} = Object.assign({
        }, _namedArguments );
        if (mainAxisPosition >= 0.0 && mainAxisPosition < this.geometry.hitTestExtent && crossAxisPosition >= 0.0 && crossAxisPosition < this.constraints.crossAxisExtent) {
            if (this.hitTestChildren(result,{
                mainAxisPosition : mainAxisPosition,crossAxisPosition : crossAxisPosition}) || this.hitTestSelf({
                mainAxisPosition : mainAxisPosition,crossAxisPosition : crossAxisPosition})) {
                result.add(SliverHitTestEntry(this,{
                    mainAxisPosition : mainAxisPosition,crossAxisPosition : crossAxisPosition}));
                return true;
            }
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestSelf(_namedArguments? : {mainAxisPosition? : double,crossAxisPosition? : double}) : boolean {
        let {mainAxisPosition,crossAxisPosition} = Object.assign({
        }, _namedArguments );
        return false;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestChildren(result : lib8.HitTestResult,_namedArguments? : {mainAxisPosition? : double,crossAxisPosition? : double}) : boolean {
        let {mainAxisPosition,crossAxisPosition} = Object.assign({
        }, _namedArguments );
        return false;
    }
    calculatePaintOffset(constraints : SliverConstraints,_namedArguments? : {from? : double,to? : double}) : double {
        let {from,to} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (from <= to); */;
        let a : double = constraints.scrollOffset;
        let b : double = constraints.scrollOffset + constraints.remainingPaintExtent;
        return new core.DartNumber((new core.DartDouble(to).clamp(a,b) - new core.DartDouble(from).clamp(a,b))).clamp(0.0,constraints.remainingPaintExtent);
    }
    calculateCacheOffset(constraints : SliverConstraints,_namedArguments? : {from? : double,to? : double}) : double {
        let {from,to} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (from <= to); */;
        let a : double = constraints.scrollOffset + constraints.cacheOrigin;
        let b : double = constraints.scrollOffset + constraints.remainingCacheExtent;
        return new core.DartNumber((new core.DartDouble(to).clamp(a,b) - new core.DartDouble(from).clamp(a,b))).clamp(0.0,constraints.remainingCacheExtent);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    childMainAxisPosition(child : lib5.RenderObject) : double {
        /* TODO (AssertStatementImpl) : assert (() {throw FlutterError('$runtimeType does not implement childPosition.');}()); */;
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    childCrossAxisPosition(child : lib5.RenderObject) : double {
        return 0.0;
    }
    childScrollOffset(child : lib5.RenderObject) : double {
        /* TODO (AssertStatementImpl) : assert (child.parent == this); */;
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyPaintTransform(child : lib5.RenderObject,transform : lib9.Matrix4) : any {
        /* TODO (AssertStatementImpl) : assert (() {throw FlutterError('$runtimeType does not implement applyPaintTransform.');}()); */;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    getAbsoluteSizeRelativeToOrigin() : any {
        /* TODO (AssertStatementImpl) : assert (geometry != null); */;
        /* TODO (AssertStatementImpl) : assert (!debugNeedsLayout); */;
        switch (applyGrowthDirectionToAxisDirection(this.constraints.axisDirection,this.constraints.growthDirection)) {
            case lib3.AxisDirection.up:
                return Size(this.constraints.crossAxisExtent,-this.geometry.paintExtent);
            case lib3.AxisDirection.right:
                return Size(this.geometry.paintExtent,this.constraints.crossAxisExtent);
            case lib3.AxisDirection.down:
                return Size(this.constraints.crossAxisExtent,this.geometry.paintExtent);
            case lib3.AxisDirection.left:
                return Size(-this.geometry.paintExtent,this.constraints.crossAxisExtent);
        }
        return null;
    }
    _debugDrawArrow(canvas : any,paint : any,p0 : any,p1 : any,direction : GrowthDirection) : any {
        /* TODO (AssertStatementImpl) : assert (() {if (p0 == p1) return true; assert (p0.dx == p1.dx || p0.dy == p1.dy); final double d = (p1 - p0).distance * 0.2; Offset temp; double dx1, dx2, dy1, dy2; switch (direction) {case GrowthDirection.forward: dx1 = dx2 = dy1 = dy2 = d; break; case GrowthDirection.reverse: temp = p0; p0 = p1; p1 = temp; dx1 = dx2 = dy1 = dy2 = -d; break;} if (p0.dx == p1.dx) {dx2 = -dx2;} else {dy2 = -dy2;} canvas.drawPath(Path()..moveTo(p0.dx, p0.dy)..lineTo(p1.dx, p1.dy)..moveTo(p1.dx - dx1, p1.dy - dy1)..lineTo(p1.dx, p1.dy)..lineTo(p1.dx - dx2, p1.dy - dy2), paint); return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugPaint(context : lib5.PaintingContext,offset : any) : any {
        /* TODO (AssertStatementImpl) : assert (() {if (debugPaintSizeEnabled) {final double strokeWidth = math.min(4.0, geometry.paintExtent / 30.0); final Paint paint = Paint()..color = const Color(0xFF33CC33)..strokeWidth = strokeWidth..style = PaintingStyle.stroke..maskFilter = MaskFilter.blur(BlurStyle.solid, strokeWidth); final double arrowExtent = geometry.paintExtent; final double padding = math.max(2.0, strokeWidth); final Canvas canvas = context.canvas; canvas.drawCircle(offset.translate(padding, padding), padding * 0.5, paint); switch (constraints.axis) {case Axis.vertical: canvas.drawLine(offset, offset.translate(constraints.crossAxisExtent, 0.0), paint); _debugDrawArrow(canvas, paint, offset.translate(constraints.crossAxisExtent * 1.0 / 4.0, padding), offset.translate(constraints.crossAxisExtent * 1.0 / 4.0, arrowExtent - padding), constraints.normalizedGrowthDirection); _debugDrawArrow(canvas, paint, offset.translate(constraints.crossAxisExtent * 3.0 / 4.0, padding), offset.translate(constraints.crossAxisExtent * 3.0 / 4.0, arrowExtent - padding), constraints.normalizedGrowthDirection); break; case Axis.horizontal: canvas.drawLine(offset, offset.translate(0.0, constraints.crossAxisExtent), paint); _debugDrawArrow(canvas, paint, offset.translate(padding, constraints.crossAxisExtent * 1.0 / 4.0), offset.translate(arrowExtent - padding, constraints.crossAxisExtent * 1.0 / 4.0), constraints.normalizedGrowthDirection); _debugDrawArrow(canvas, paint, offset.translate(padding, constraints.crossAxisExtent * 3.0 / 4.0), offset.translate(arrowExtent - padding, constraints.crossAxisExtent * 3.0 / 4.0), constraints.normalizedGrowthDirection); break;}} return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleEvent(event : lib10.PointerEvent,entry : SliverHitTestEntry) : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.DiagnosticsProperty('geometry',this.geometry));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderSliver() {
    }
}

export namespace RenderSliverHelpers {
    export type Constructors = 'RenderSliverHelpers';
    export type Interface = Omit<RenderSliverHelpers, Constructors>;
}
@DartClass
@Implements(RenderSliver)
export class RenderSliverHelpers implements RenderSliver.Interface {
    _getRightWayUp(constraints : SliverConstraints) : boolean {
        /* TODO (AssertStatementImpl) : assert (constraints != null); */;
        /* TODO (AssertStatementImpl) : assert (constraints.axisDirection != null); */;
        let rightWayUp : boolean;
        switch (constraints.axisDirection) {
            case lib3.AxisDirection.up:
            case lib3.AxisDirection.left:
                rightWayUp = false;
                break;
            case lib3.AxisDirection.down:
            case lib3.AxisDirection.right:
                rightWayUp = true;
                break;
        }
        /* TODO (AssertStatementImpl) : assert (constraints.growthDirection != null); */;
        switch (constraints.growthDirection) {
            case GrowthDirection.forward:
                break;
            case GrowthDirection.reverse:
                rightWayUp = !rightWayUp;
                break;
        }
        /* TODO (AssertStatementImpl) : assert (rightWayUp != null); */;
        return rightWayUp;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestBoxChild(result : lib8.HitTestResult,child : lib6.RenderBox,_namedArguments? : {mainAxisPosition? : double,crossAxisPosition? : double}) : boolean {
        let {mainAxisPosition,crossAxisPosition} = Object.assign({
        }, _namedArguments );
        let rightWayUp : boolean = this._getRightWayUp(this.constraints);
        let absolutePosition : double = mainAxisPosition - this.childMainAxisPosition(child);
        let absoluteCrossAxisPosition : double = crossAxisPosition - this.childCrossAxisPosition(child);
        /* TODO (AssertStatementImpl) : assert (constraints.axis != null); */;
        switch (this.constraints.axis) {
            case lib3.Axis.horizontal:
                if (!rightWayUp) absolutePosition = op(Op.MINUS,child.size.width,absolutePosition);
                return child.hitTest(result,{
                    position : Offset(absolutePosition,absoluteCrossAxisPosition)});
            case lib3.Axis.vertical:
                if (!rightWayUp) absolutePosition = op(Op.MINUS,child.size.height,absolutePosition);
                return child.hitTest(result,{
                    position : Offset(absoluteCrossAxisPosition,absolutePosition)});
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    applyPaintTransformForBoxChild(child : lib6.RenderBox,transform : lib9.Matrix4) : any {
        let rightWayUp : boolean = this._getRightWayUp(this.constraints);
        let delta : double = this.childMainAxisPosition(child);
        let crossAxisDelta : double = this.childCrossAxisPosition(child);
        /* TODO (AssertStatementImpl) : assert (constraints.axis != null); */;
        switch (this.constraints.axis) {
            case lib3.Axis.horizontal:
                if (!rightWayUp) delta = this.geometry.paintExtent - child.size.width - delta;
                transform.translate(delta,crossAxisDelta);
                break;
            case lib3.Axis.vertical:
                if (!rightWayUp) delta = this.geometry.paintExtent - child.size.height - delta;
                transform.translate(crossAxisDelta,delta);
                break;
        }
    }
    constructor() {
    }
    @defaultConstructor
    RenderSliverHelpers() {
    }
}

export namespace SliverLogicalContainerParentData {
    export type Constructors = SliverLogicalParentData.Constructors | 'SliverLogicalContainerParentData';
    export type Interface = Omit<SliverLogicalContainerParentData, Constructors>;
}
@DartClass
@With(any)
export class SliverLogicalContainerParentData extends SliverLogicalParentData implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverLogicalContainerParentData() {
    }
}

export namespace SliverPhysicalContainerParentData {
    export type Constructors = SliverPhysicalParentData.Constructors | 'SliverPhysicalContainerParentData';
    export type Interface = Omit<SliverPhysicalContainerParentData, Constructors>;
}
@DartClass
@With(any)
export class SliverPhysicalContainerParentData extends SliverPhysicalParentData implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverPhysicalContainerParentData() {
    }
}

export namespace RenderSliverSingleBoxAdapter {
    export type Constructors = RenderSliver.Constructors | 'RenderSliverSingleBoxAdapter';
    export type Interface = Omit<RenderSliverSingleBoxAdapter, Constructors>;
}
@DartClass
@With(any,RenderSliverHelpers)
export class RenderSliverSingleBoxAdapter extends RenderSliver implements any.Interface,RenderSliverHelpers.Interface {
    @Abstract
    _getRightWayUp(constraints : SliverConstraints) : boolean {
        throw 'from mixin';
    }
    @Abstract
    hitTestBoxChild(result : lib8.HitTestResult,child : lib6.RenderBox,_namedArguments? : {mainAxisPosition? : double,crossAxisPosition? : double}) : boolean {
        let {mainAxisPosition,crossAxisPosition} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    applyPaintTransformForBoxChild(child : lib6.RenderBox,transform : lib9.Matrix4) : any {
        throw 'from mixin';
    }
    constructor(_namedArguments? : {child? : lib6.RenderBox}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderSliverSingleBoxAdapter(_namedArguments? : {child? : lib6.RenderBox}) {
        let {child} = Object.assign({
        }, _namedArguments );
        this.child = child;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setupParentData(child : lib5.RenderObject) : any {
        if (isNot(child.parentData, SliverPhysicalParentData)) child.parentData = SliverPhysicalParentData();
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    setChildParentData(child : lib5.RenderObject,constraints : SliverConstraints,geometry : SliverGeometry) : any {
        let childParentData : SliverPhysicalParentData = child.parentData;
        /* TODO (AssertStatementImpl) : assert (constraints.axisDirection != null); */;
        /* TODO (AssertStatementImpl) : assert (constraints.growthDirection != null); */;
        switch (applyGrowthDirectionToAxisDirection(constraints.axisDirection,constraints.growthDirection)) {
            case lib3.AxisDirection.up:
                childParentData.paintOffset = Offset(0.0,-(geometry.scrollExtent - (geometry.paintExtent + constraints.scrollOffset)));
                break;
            case lib3.AxisDirection.right:
                childParentData.paintOffset = Offset(-constraints.scrollOffset,0.0);
                break;
            case lib3.AxisDirection.down:
                childParentData.paintOffset = Offset(0.0,-constraints.scrollOffset);
                break;
            case lib3.AxisDirection.left:
                childParentData.paintOffset = Offset(-(geometry.scrollExtent - (geometry.paintExtent + constraints.scrollOffset)),0.0);
                break;
        }
        /* TODO (AssertStatementImpl) : assert (childParentData.paintOffset != null); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestChildren(result : lib8.HitTestResult,_namedArguments? : {mainAxisPosition? : double,crossAxisPosition? : double}) : boolean {
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
    childMainAxisPosition(child : lib6.RenderBox) : double {
        return -this.constraints.scrollOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyPaintTransform(child : lib5.RenderObject,transform : lib9.Matrix4) : any {
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        /* TODO (AssertStatementImpl) : assert (child == this.child); */;
        let childParentData : SliverPhysicalParentData = child.parentData;
        childParentData.applyPaintTransform(transform);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib5.PaintingContext,offset : any) : any {
        if (child != null && this.geometry.visible) {
            let childParentData : SliverPhysicalParentData = child.parentData;
            context.paintChild(child,op(Op.PLUS,offset,childParentData.paintOffset));
        }
    }
}

export namespace RenderSliverToBoxAdapter {
    export type Constructors = RenderSliverSingleBoxAdapter.Constructors | 'RenderSliverToBoxAdapter';
    export type Interface = Omit<RenderSliverToBoxAdapter, Constructors>;
}
@DartClass
export class RenderSliverToBoxAdapter extends RenderSliverSingleBoxAdapter {
    constructor(_namedArguments? : {child? : lib6.RenderBox}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderSliverToBoxAdapter(_namedArguments? : {child? : lib6.RenderBox}) {
        let {child} = Object.assign({
        }, _namedArguments );
        super.RenderSliverSingleBoxAdapter({
            child : child});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        if (op(Op.EQUALS,child,null)) {
            this.geometry = SliverGeometry.zero;
            return;
        }
        child.layout(this.constraints.asBoxConstraints(),{
            parentUsesSize : true});
        let childExtent : double;
        switch (this.constraints.axis) {
            case lib3.Axis.horizontal:
                childExtent = child.size.width;
                break;
            case lib3.Axis.vertical:
                childExtent = child.size.height;
                break;
        }
        /* TODO (AssertStatementImpl) : assert (childExtent != null); */;
        let paintedChildSize : double = this.calculatePaintOffset(this.constraints,{
            from : 0.0,to : childExtent});
        let cacheExtent : double = this.calculateCacheOffset(this.constraints,{
            from : 0.0,to : childExtent});
        /* TODO (AssertStatementImpl) : assert (paintedChildSize.isFinite); */;
        /* TODO (AssertStatementImpl) : assert (paintedChildSize >= 0.0); */;
        this.geometry = SliverGeometry({
            scrollExtent : childExtent,paintExtent : paintedChildSize,cacheExtent : cacheExtent,maxPaintExtent : childExtent,hitTestExtent : paintedChildSize,hasVisualOverflow : childExtent > this.constraints.remainingPaintExtent || this.constraints.scrollOffset > 0.0});
        this.setChildParentData(child,this.constraints,this.geometry);
    }
}

export class properties {
}
