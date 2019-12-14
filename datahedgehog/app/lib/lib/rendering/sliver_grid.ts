/** Library asset:datahedgehog_monitor/lib/lib/rendering/sliver_grid.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./sliver";
import * as lib4 from "./box";
import * as math from "@dart2ts/dart/math";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib7 from "./sliver_multi_box_adaptor";
import * as lib8 from "./object";

export namespace SliverGridGeometry {
    export type Constructors = 'SliverGridGeometry';
    export type Interface = Omit<SliverGridGeometry, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class SliverGridGeometry {
    constructor(_namedArguments? : {scrollOffset? : double,crossAxisOffset? : double,mainAxisExtent? : double,crossAxisExtent? : double}) {
    }
    @defaultConstructor
    SliverGridGeometry(_namedArguments? : {scrollOffset? : double,crossAxisOffset? : double,mainAxisExtent? : double,crossAxisExtent? : double}) {
        let {scrollOffset,crossAxisOffset,mainAxisExtent,crossAxisExtent} = Object.assign({
        }, _namedArguments );
        this.scrollOffset = scrollOffset;
        this.crossAxisOffset = crossAxisOffset;
        this.mainAxisExtent = mainAxisExtent;
        this.crossAxisExtent = crossAxisExtent;
    }
    scrollOffset : double;

    crossAxisOffset : double;

    mainAxisExtent : double;

    crossAxisExtent : double;

    get trailingScrollOffset() : double {
        return this.scrollOffset + this.mainAxisExtent;
    }
    getBoxConstraints(constraints : lib3.SliverConstraints) : lib4.BoxConstraints {
        return constraints.asBoxConstraints({
            minExtent : this.mainAxisExtent,maxExtent : this.mainAxisExtent,crossAxisExtent : this.crossAxisExtent});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return 'SliverGridGeometry(' + `scrollOffset: ${this.scrollOffset}, ` + `crossAxisOffset: ${this.crossAxisOffset}, ` + `mainAxisExtent: ${this.mainAxisExtent}, ` + `crossAxisExtent: ${this.crossAxisExtent}` + ')';
    }
}

export namespace SliverGridLayout {
    export type Constructors = 'SliverGridLayout';
    export type Interface = Omit<SliverGridLayout, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class SliverGridLayout {
    constructor() {
    }
    @defaultConstructor
    SliverGridLayout() {
    }
    @Abstract
    getMinChildIndexForScrollOffset(scrollOffset : double) : number{ throw 'abstract'}
    @Abstract
    getMaxChildIndexForScrollOffset(scrollOffset : double) : number{ throw 'abstract'}
    @Abstract
    getGeometryForChildIndex(index : number) : SliverGridGeometry{ throw 'abstract'}
    @Abstract
    computeMaxScrollOffset(childCount : number) : double{ throw 'abstract'}
}

export namespace SliverGridDelegate {
    export type Constructors = 'SliverGridDelegate';
    export type Interface = Omit<SliverGridDelegate, Constructors>;
}
@DartClass
export class SliverGridDelegate {
    constructor() {
    }
    @defaultConstructor
    SliverGridDelegate() {
    }
    @Abstract
    getLayout(constraints : lib3.SliverConstraints) : SliverGridLayout{ throw 'abstract'}
    @Abstract
    shouldRelayout(oldDelegate : SliverGridDelegate) : boolean{ throw 'abstract'}
}

export namespace SliverGridParentData {
    export type Constructors = lib7.SliverMultiBoxAdaptorParentData.Constructors | 'SliverGridParentData';
    export type Interface = Omit<SliverGridParentData, Constructors>;
}
@DartClass
export class SliverGridParentData extends lib7.SliverMultiBoxAdaptorParentData {
    crossAxisOffset : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `crossAxisOffset=${this.crossAxisOffset}; ${super.toString()}`;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverGridParentData() {
    }
}

export namespace RenderSliverGrid {
    export type Constructors = lib7.RenderSliverMultiBoxAdaptor.Constructors | 'RenderSliverGrid';
    export type Interface = Omit<RenderSliverGrid, Constructors>;
}
@DartClass
export class RenderSliverGrid extends lib7.RenderSliverMultiBoxAdaptor {
    constructor(_namedArguments? : {childManager? : lib7.RenderSliverBoxChildManager,gridDelegate? : SliverGridDelegate}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderSliverGrid(_namedArguments? : {childManager? : lib7.RenderSliverBoxChildManager,gridDelegate? : SliverGridDelegate}) {
        let {childManager,gridDelegate} = Object.assign({
        }, _namedArguments );
        this._gridDelegate = this.gridDelegate;
        this.assert = assert;
    }
     : any;

    _gridDelegate;
    super;

     : any;

     : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setupParentData(child : lib8.RenderObject) : any {
        if (isNot(child.parentData, SliverGridParentData)) child.parentData = SliverGridParentData();
    }
    get gridDelegate() : SliverGridDelegate {
        return this._gridDelegate;
    }
    _gridDelegate : SliverGridDelegate;

    set gridDelegate(value : SliverGridDelegate) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._gridDelegate,value)) return;
        if (value.runtimeType != this._gridDelegate.runtimeType || value.shouldRelayout(this._gridDelegate)) this.markNeedsLayout();
        this._gridDelegate = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    childCrossAxisPosition(child : lib4.RenderBox) : double {
        let childParentData : SliverGridParentData = child.parentData;
        return childParentData.crossAxisOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        this.childManager.didStartLayout();
        this.childManager.setDidUnderflow(false);
        let scrollOffset : double = this.constraints.scrollOffset + this.constraints.cacheOrigin;
        /* TODO (AssertStatementImpl) : assert (scrollOffset >= 0.0); */;
        let remainingExtent : double = this.constraints.remainingCacheExtent;
        /* TODO (AssertStatementImpl) : assert (remainingExtent >= 0.0); */;
        let targetEndScrollOffset : double = scrollOffset + remainingExtent;
        let layout : SliverGridLayout = this._gridDelegate.getLayout(this.constraints);
        let firstIndex : number = layout.getMinChildIndexForScrollOffset(scrollOffset);
        let targetLastIndex : number = new core.DartDouble(targetEndScrollOffset).isFinite ? layout.getMaxChildIndexForScrollOffset(targetEndScrollOffset) : null;
        if (firstChild != null) {
            let oldFirstIndex : number = this.indexOf(firstChild);
            let oldLastIndex : number = this.indexOf(lastChild);
            let leadingGarbage : number = new core.DartInt((firstIndex - oldFirstIndex)).clamp(0,childCount);
            let trailingGarbage : number = targetLastIndex == null ? 0 : new core.DartInt((oldLastIndex - targetLastIndex)).clamp(0,childCount);
            this.collectGarbage(leadingGarbage,trailingGarbage);
        }else {
            this.collectGarbage(0,0);
        }
        let firstChildGridGeometry : SliverGridGeometry = layout.getGeometryForChildIndex(firstIndex);
        let leadingScrollOffset : double = firstChildGridGeometry.scrollOffset;
        let trailingScrollOffset : double = firstChildGridGeometry.trailingScrollOffset;
        if (op(Op.EQUALS,firstChild,null)) {
            if (!this.addInitialChild({
                index : firstIndex,layoutOffset : firstChildGridGeometry.scrollOffset})) {
                let max : double = layout.computeMaxScrollOffset(this.childManager.childCount);
                this.geometry = lib3.SliverGeometry({
                    scrollExtent : max,maxPaintExtent : max});
                this.childManager.didFinishLayout();
                return;
            }
        }
        let trailingChildWithLayout : lib4.RenderBox;
        for(let index : number = this.indexOf(firstChild) - 1; index >= firstIndex; --index){
            let gridGeometry : SliverGridGeometry = layout.getGeometryForChildIndex(index);
            let child : lib4.RenderBox = this.insertAndLayoutLeadingChild(gridGeometry.getBoxConstraints(this.constraints));
            let childParentData : SliverGridParentData = child.parentData;
            childParentData.layoutOffset = gridGeometry.scrollOffset;
            childParentData.crossAxisOffset = gridGeometry.crossAxisOffset;
            /* TODO (AssertStatementImpl) : assert (childParentData.index == index); */;
            trailingChildWithLayout = ( trailingChildWithLayout ) || ( child );
            trailingScrollOffset = math.max(trailingScrollOffset,gridGeometry.trailingScrollOffset);
        }
        if (op(Op.EQUALS,trailingChildWithLayout,null)) {
            firstChild.layout(firstChildGridGeometry.getBoxConstraints(this.constraints));
            let childParentData : SliverGridParentData = firstChild.parentData;
            childParentData.layoutOffset = firstChildGridGeometry.scrollOffset;
            childParentData.crossAxisOffset = firstChildGridGeometry.crossAxisOffset;
            trailingChildWithLayout = firstChild;
        }
        for(let index : number = this.indexOf(trailingChildWithLayout) + 1; targetLastIndex == null || index <= targetLastIndex; ++index){
            let gridGeometry : SliverGridGeometry = layout.getGeometryForChildIndex(index);
            let childConstraints : lib4.BoxConstraints = gridGeometry.getBoxConstraints(this.constraints);
            let child : lib4.RenderBox = childAfter(trailingChildWithLayout);
            if (op(Op.EQUALS,child,null)) {
                child = this.insertAndLayoutChild(childConstraints,{
                    after : trailingChildWithLayout});
                if (op(Op.EQUALS,child,null)) {
                    break;
                }
            }else {
                child.layout(childConstraints);
            }
            trailingChildWithLayout = child;
            /* TODO (AssertStatementImpl) : assert (child != null); */;
            let childParentData : SliverGridParentData = child.parentData;
            childParentData.layoutOffset = gridGeometry.scrollOffset;
            childParentData.crossAxisOffset = gridGeometry.crossAxisOffset;
            /* TODO (AssertStatementImpl) : assert (childParentData.index == index); */;
            trailingScrollOffset = math.max(trailingScrollOffset,gridGeometry.trailingScrollOffset);
        }
        let lastIndex : number = this.indexOf(lastChild);
        /* TODO (AssertStatementImpl) : assert (childScrollOffset(firstChild) <= scrollOffset); */;
        /* TODO (AssertStatementImpl) : assert (debugAssertChildListIsNonEmptyAndContiguous()); */;
        /* TODO (AssertStatementImpl) : assert (indexOf(firstChild) == firstIndex); */;
        /* TODO (AssertStatementImpl) : assert (targetLastIndex == null || lastIndex <= targetLastIndex); */;
        let estimatedTotalExtent : double = this.childManager.estimateMaxScrollOffset(this.constraints,{
            firstIndex : firstIndex,lastIndex : lastIndex,leadingScrollOffset : leadingScrollOffset,trailingScrollOffset : trailingScrollOffset});
        let paintExtent : double = this.calculatePaintOffset(this.constraints,{
            from : leadingScrollOffset,to : trailingScrollOffset});
        let cacheExtent : double = this.calculateCacheOffset(this.constraints,{
            from : leadingScrollOffset,to : trailingScrollOffset});
        this.geometry = lib3.SliverGeometry({
            scrollExtent : estimatedTotalExtent,paintExtent : paintExtent,maxPaintExtent : estimatedTotalExtent,cacheExtent : cacheExtent,hasVisualOverflow : true});
        if (estimatedTotalExtent == trailingScrollOffset) this.childManager.setDidUnderflow(true);
        this.childManager.didFinishLayout();
    }
}

export namespace SliverGridRegularTileLayout {
    export type Constructors = SliverGridLayout.Constructors | 'SliverGridRegularTileLayout';
    export type Interface = Omit<SliverGridRegularTileLayout, Constructors>;
}
@DartClass
export class SliverGridRegularTileLayout extends SliverGridLayout {
    constructor(_namedArguments? : {crossAxisCount? : number,mainAxisStride? : double,crossAxisStride? : double,childMainAxisExtent? : double,childCrossAxisExtent? : double,reverseCrossAxis? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverGridRegularTileLayout(_namedArguments? : {crossAxisCount? : number,mainAxisStride? : double,crossAxisStride? : double,childMainAxisExtent? : double,childCrossAxisExtent? : double,reverseCrossAxis? : boolean}) {
        let {crossAxisCount,mainAxisStride,crossAxisStride,childMainAxisExtent,childCrossAxisExtent,reverseCrossAxis} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.crossAxisCount = crossAxisCount;
        this.mainAxisStride = mainAxisStride;
        this.crossAxisStride = crossAxisStride;
        this.childMainAxisExtent = childMainAxisExtent;
        this.childCrossAxisExtent = childCrossAxisExtent;
        this.reverseCrossAxis = reverseCrossAxis;
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

    crossAxisCount : number;

    mainAxisStride : double;

    crossAxisStride : double;

    childMainAxisExtent : double;

    childCrossAxisExtent : double;

    reverseCrossAxis : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getMinChildIndexForScrollOffset(scrollOffset : double) : number {
        return this.mainAxisStride > 0.0 ? this.crossAxisCount * (op(Op.QUOTIENT,scrollOffset,this.mainAxisStride)) : 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getMaxChildIndexForScrollOffset(scrollOffset : double) : number {
        if (this.mainAxisStride > 0.0) {
            let mainAxisCount : number = new core.DartDouble((scrollOffset / this.mainAxisStride)).ceil();
            return math.max(0,this.crossAxisCount * mainAxisCount - 1);
        }
        return 0;
    }
    _getOffsetFromStartInCrossAxis(crossAxisStart : double) : double {
        if (this.reverseCrossAxis) return this.crossAxisCount * this.crossAxisStride - crossAxisStart - this.childCrossAxisExtent;
        return crossAxisStart;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getGeometryForChildIndex(index : number) : SliverGridGeometry {
        let crossAxisStart : double = (index % this.crossAxisCount) * this.crossAxisStride;
        return SliverGridGeometry({
            scrollOffset : (op(Op.QUOTIENT,index,this.crossAxisCount)) * this.mainAxisStride,crossAxisOffset : this._getOffsetFromStartInCrossAxis(crossAxisStart),mainAxisExtent : this.childMainAxisExtent,crossAxisExtent : this.childCrossAxisExtent});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxScrollOffset(childCount : number) : double {
        /* TODO (AssertStatementImpl) : assert (childCount != null); */;
        let mainAxisCount : number = (op(Op.QUOTIENT,(childCount - 1),this.crossAxisCount)) + 1;
        let mainAxisSpacing : double = this.mainAxisStride - this.childMainAxisExtent;
        return this.mainAxisStride * mainAxisCount - mainAxisSpacing;
    }
}

export namespace SliverGridDelegateWithFixedCrossAxisCount {
    export type Constructors = SliverGridDelegate.Constructors | 'SliverGridDelegateWithFixedCrossAxisCount';
    export type Interface = Omit<SliverGridDelegateWithFixedCrossAxisCount, Constructors>;
}
@DartClass
export class SliverGridDelegateWithFixedCrossAxisCount extends SliverGridDelegate {
    constructor(_namedArguments? : {crossAxisCount? : number,mainAxisSpacing? : double,crossAxisSpacing? : double,childAspectRatio? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverGridDelegateWithFixedCrossAxisCount(_namedArguments? : {crossAxisCount? : number,mainAxisSpacing? : double,crossAxisSpacing? : double,childAspectRatio? : double}) {
        let {crossAxisCount,mainAxisSpacing,crossAxisSpacing,childAspectRatio} = Object.assign({
            "mainAxisSpacing" : 0.0,
            "crossAxisSpacing" : 0.0,
            "childAspectRatio" : 1.0}, _namedArguments );
        this.assert = assert;
        this.crossAxisCount = crossAxisCount;
        this.mainAxisSpacing = mainAxisSpacing;
        this.crossAxisSpacing = crossAxisSpacing;
        this.childAspectRatio = childAspectRatio;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    crossAxisCount : number;

    mainAxisSpacing : double;

    crossAxisSpacing : double;

    childAspectRatio : double;

    _debugAssertIsValid() : boolean {
        /* TODO (AssertStatementImpl) : assert (crossAxisCount > 0); */;
        /* TODO (AssertStatementImpl) : assert (mainAxisSpacing >= 0.0); */;
        /* TODO (AssertStatementImpl) : assert (crossAxisSpacing >= 0.0); */;
        /* TODO (AssertStatementImpl) : assert (childAspectRatio > 0.0); */;
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLayout(constraints : lib3.SliverConstraints) : SliverGridLayout {
        /* TODO (AssertStatementImpl) : assert (_debugAssertIsValid()); */;
        let usableCrossAxisExtent : double = constraints.crossAxisExtent - this.crossAxisSpacing * (this.crossAxisCount - 1);
        let childCrossAxisExtent : double = usableCrossAxisExtent / this.crossAxisCount;
        let childMainAxisExtent : double = childCrossAxisExtent / this.childAspectRatio;
        return SliverGridRegularTileLayout({
            crossAxisCount : this.crossAxisCount,mainAxisStride : childMainAxisExtent + this.mainAxisSpacing,crossAxisStride : childCrossAxisExtent + this.crossAxisSpacing,childMainAxisExtent : childMainAxisExtent,childCrossAxisExtent : childCrossAxisExtent,reverseCrossAxis : lib6.axisDirectionIsReversed(constraints.crossAxisDirection)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRelayout(oldDelegate : SliverGridDelegateWithFixedCrossAxisCount) : boolean {
        return oldDelegate.crossAxisCount != this.crossAxisCount || oldDelegate.mainAxisSpacing != this.mainAxisSpacing || oldDelegate.crossAxisSpacing != this.crossAxisSpacing || oldDelegate.childAspectRatio != this.childAspectRatio;
    }
}

export namespace SliverGridDelegateWithMaxCrossAxisExtent {
    export type Constructors = SliverGridDelegate.Constructors | 'SliverGridDelegateWithMaxCrossAxisExtent';
    export type Interface = Omit<SliverGridDelegateWithMaxCrossAxisExtent, Constructors>;
}
@DartClass
export class SliverGridDelegateWithMaxCrossAxisExtent extends SliverGridDelegate {
    constructor(_namedArguments? : {maxCrossAxisExtent? : double,mainAxisSpacing? : double,crossAxisSpacing? : double,childAspectRatio? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverGridDelegateWithMaxCrossAxisExtent(_namedArguments? : {maxCrossAxisExtent? : double,mainAxisSpacing? : double,crossAxisSpacing? : double,childAspectRatio? : double}) {
        let {maxCrossAxisExtent,mainAxisSpacing,crossAxisSpacing,childAspectRatio} = Object.assign({
            "mainAxisSpacing" : 0.0,
            "crossAxisSpacing" : 0.0,
            "childAspectRatio" : 1.0}, _namedArguments );
        this.assert = assert;
        this.maxCrossAxisExtent = maxCrossAxisExtent;
        this.mainAxisSpacing = mainAxisSpacing;
        this.crossAxisSpacing = crossAxisSpacing;
        this.childAspectRatio = childAspectRatio;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    maxCrossAxisExtent : double;

    mainAxisSpacing : double;

    crossAxisSpacing : double;

    childAspectRatio : double;

    _debugAssertIsValid() : boolean {
        /* TODO (AssertStatementImpl) : assert (maxCrossAxisExtent > 0.0); */;
        /* TODO (AssertStatementImpl) : assert (mainAxisSpacing >= 0.0); */;
        /* TODO (AssertStatementImpl) : assert (crossAxisSpacing >= 0.0); */;
        /* TODO (AssertStatementImpl) : assert (childAspectRatio > 0.0); */;
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLayout(constraints : lib3.SliverConstraints) : SliverGridLayout {
        /* TODO (AssertStatementImpl) : assert (_debugAssertIsValid()); */;
        let crossAxisCount : number = new core.DartDouble((constraints.crossAxisExtent / (this.maxCrossAxisExtent + this.crossAxisSpacing))).ceil();
        let usableCrossAxisExtent : double = constraints.crossAxisExtent - this.crossAxisSpacing * (crossAxisCount - 1);
        let childCrossAxisExtent : double = usableCrossAxisExtent / crossAxisCount;
        let childMainAxisExtent : double = childCrossAxisExtent / this.childAspectRatio;
        return SliverGridRegularTileLayout({
            crossAxisCount : crossAxisCount,mainAxisStride : childMainAxisExtent + this.mainAxisSpacing,crossAxisStride : childCrossAxisExtent + this.crossAxisSpacing,childMainAxisExtent : childMainAxisExtent,childCrossAxisExtent : childCrossAxisExtent,reverseCrossAxis : lib6.axisDirectionIsReversed(constraints.crossAxisDirection)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRelayout(oldDelegate : SliverGridDelegateWithMaxCrossAxisExtent) : boolean {
        return oldDelegate.maxCrossAxisExtent != this.maxCrossAxisExtent || oldDelegate.mainAxisSpacing != this.mainAxisSpacing || oldDelegate.crossAxisSpacing != this.crossAxisSpacing || oldDelegate.childAspectRatio != this.childAspectRatio;
    }
}

export class properties {
}
