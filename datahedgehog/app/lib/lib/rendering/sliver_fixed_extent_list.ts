/** Library asset:datahedgehog_monitor/lib/lib/rendering/sliver_fixed_extent_list.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./sliver_multi_box_adaptor";
import * as math from "@dart2ts/dart/math";
import * as lib5 from "./sliver";
import * as lib6 from "./box";

export namespace RenderSliverFixedExtentBoxAdaptor {
    export type Constructors = lib3.RenderSliverMultiBoxAdaptor.Constructors | 'RenderSliverFixedExtentBoxAdaptor';
    export type Interface = Omit<RenderSliverFixedExtentBoxAdaptor, Constructors>;
}
@DartClass
export class RenderSliverFixedExtentBoxAdaptor extends lib3.RenderSliverMultiBoxAdaptor {
    constructor(_namedArguments? : {childManager? : lib3.RenderSliverBoxChildManager}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderSliverFixedExtentBoxAdaptor(_namedArguments? : {childManager? : lib3.RenderSliverBoxChildManager}) {
        let {childManager} = Object.assign({
        }, _namedArguments );
        super.RenderSliverMultiBoxAdaptor({
            childManager : childManager});
    }
    @AbstractProperty
    get itemExtent() : double{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    indexToLayoutOffset(itemExtent : double,index : number) : double {
        return itemExtent * index;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    getMinChildIndexForScrollOffset(scrollOffset : double,itemExtent : double) : number {
        return itemExtent > 0.0 ? math.max(0,op(Op.QUOTIENT,scrollOffset,itemExtent)) : 0;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    getMaxChildIndexForScrollOffset(scrollOffset : double,itemExtent : double) : number {
        return itemExtent > 0.0 ? math.max(0,new core.DartDouble((scrollOffset / itemExtent)).ceil() - 1) : 0;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    estimateMaxScrollOffset(constraints : lib5.SliverConstraints,_namedArguments? : {firstIndex? : number,lastIndex? : number,leadingScrollOffset? : double,trailingScrollOffset? : double}) : double {
        let {firstIndex,lastIndex,leadingScrollOffset,trailingScrollOffset} = Object.assign({
        }, _namedArguments );
        return this.childManager.estimateMaxScrollOffset(constraints,{
            firstIndex : firstIndex,lastIndex : lastIndex,leadingScrollOffset : leadingScrollOffset,trailingScrollOffset : trailingScrollOffset});
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxScrollOffset(constraints : lib5.SliverConstraints,itemExtent : double) : double {
        return this.childManager.childCount * itemExtent;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        this.childManager.didStartLayout();
        this.childManager.setDidUnderflow(false);
        let itemExtent : double = this.itemExtent;
        let scrollOffset : double = this.constraints.scrollOffset + this.constraints.cacheOrigin;
        /* TODO (AssertStatementImpl) : assert (scrollOffset >= 0.0); */;
        let remainingExtent : double = this.constraints.remainingCacheExtent;
        /* TODO (AssertStatementImpl) : assert (remainingExtent >= 0.0); */;
        let targetEndScrollOffset : double = scrollOffset + remainingExtent;
        let childConstraints : lib6.BoxConstraints = this.constraints.asBoxConstraints({
            minExtent : itemExtent,maxExtent : itemExtent});
        let firstIndex : number = this.getMinChildIndexForScrollOffset(scrollOffset,itemExtent);
        let targetLastIndex : number = new core.DartDouble(targetEndScrollOffset).isFinite ? this.getMaxChildIndexForScrollOffset(targetEndScrollOffset,itemExtent) : null;
        if (firstChild != null) {
            let oldFirstIndex : number = this.indexOf(firstChild);
            let oldLastIndex : number = this.indexOf(lastChild);
            let leadingGarbage : number = new core.DartInt((firstIndex - oldFirstIndex)).clamp(0,childCount);
            let trailingGarbage : number = targetLastIndex == null ? 0 : new core.DartInt((oldLastIndex - targetLastIndex)).clamp(0,childCount);
            this.collectGarbage(leadingGarbage,trailingGarbage);
        }else {
            this.collectGarbage(0,0);
        }
        if (op(Op.EQUALS,firstChild,null)) {
            if (!this.addInitialChild({
                index : firstIndex,layoutOffset : this.indexToLayoutOffset(itemExtent,firstIndex)})) {
                let max : double = this.computeMaxScrollOffset(this.constraints,itemExtent);
                this.geometry = lib5.SliverGeometry({
                    scrollExtent : max,maxPaintExtent : max});
                this.childManager.didFinishLayout();
                return;
            }
        }
        let trailingChildWithLayout : lib6.RenderBox;
        for(let index : number = this.indexOf(firstChild) - 1; index >= firstIndex; --index){
            let child : lib6.RenderBox = this.insertAndLayoutLeadingChild(childConstraints);
            if (op(Op.EQUALS,child,null)) {
                this.geometry = lib5.SliverGeometry({
                    scrollOffsetCorrection : index * itemExtent});
                return;
            }
            let childParentData : lib3.SliverMultiBoxAdaptorParentData = child.parentData;
            childParentData.layoutOffset = this.indexToLayoutOffset(itemExtent,index);
            /* TODO (AssertStatementImpl) : assert (childParentData.index == index); */;
            trailingChildWithLayout = ( trailingChildWithLayout ) || ( child );
        }
        if (op(Op.EQUALS,trailingChildWithLayout,null)) {
            firstChild.layout(childConstraints);
            let childParentData : lib3.SliverMultiBoxAdaptorParentData = firstChild.parentData;
            childParentData.layoutOffset = this.indexToLayoutOffset(itemExtent,firstIndex);
            trailingChildWithLayout = firstChild;
        }
        while (targetLastIndex == null || this.indexOf(trailingChildWithLayout) < targetLastIndex){
            let child : lib6.RenderBox = childAfter(trailingChildWithLayout);
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
            let childParentData : lib3.SliverMultiBoxAdaptorParentData = child.parentData;
            childParentData.layoutOffset = this.indexToLayoutOffset(itemExtent,childParentData.index);
        }
        let lastIndex : number = this.indexOf(lastChild);
        let leadingScrollOffset : double = this.indexToLayoutOffset(itemExtent,firstIndex);
        let trailingScrollOffset : double = this.indexToLayoutOffset(itemExtent,lastIndex + 1);
        /* TODO (AssertStatementImpl) : assert (firstIndex == 0 || childScrollOffset(firstChild) <= scrollOffset); */;
        /* TODO (AssertStatementImpl) : assert (debugAssertChildListIsNonEmptyAndContiguous()); */;
        /* TODO (AssertStatementImpl) : assert (indexOf(firstChild) == firstIndex); */;
        /* TODO (AssertStatementImpl) : assert (targetLastIndex == null || lastIndex <= targetLastIndex); */;
        let estimatedMaxScrollOffset : double = this.estimateMaxScrollOffset(this.constraints,{
            firstIndex : firstIndex,lastIndex : lastIndex,leadingScrollOffset : leadingScrollOffset,trailingScrollOffset : trailingScrollOffset});
        let paintExtent : double = this.calculatePaintOffset(this.constraints,{
            from : leadingScrollOffset,to : trailingScrollOffset});
        let cacheExtent : double = this.calculateCacheOffset(this.constraints,{
            from : leadingScrollOffset,to : trailingScrollOffset});
        let targetEndScrollOffsetForPaint : double = this.constraints.scrollOffset + this.constraints.remainingPaintExtent;
        let targetLastIndexForPaint : number = new core.DartDouble(targetEndScrollOffsetForPaint).isFinite ? this.getMaxChildIndexForScrollOffset(targetEndScrollOffsetForPaint,itemExtent) : null;
        this.geometry = lib5.SliverGeometry({
            scrollExtent : estimatedMaxScrollOffset,paintExtent : paintExtent,cacheExtent : cacheExtent,maxPaintExtent : estimatedMaxScrollOffset,hasVisualOverflow : (targetLastIndexForPaint != null && lastIndex >= targetLastIndexForPaint) || this.constraints.scrollOffset > 0.0});
        if (estimatedMaxScrollOffset == trailingScrollOffset) this.childManager.setDidUnderflow(true);
        this.childManager.didFinishLayout();
    }
}

export namespace RenderSliverFixedExtentList {
    export type Constructors = RenderSliverFixedExtentBoxAdaptor.Constructors | 'RenderSliverFixedExtentList';
    export type Interface = Omit<RenderSliverFixedExtentList, Constructors>;
}
@DartClass
export class RenderSliverFixedExtentList extends RenderSliverFixedExtentBoxAdaptor {
    constructor(_namedArguments? : {childManager? : lib3.RenderSliverBoxChildManager,itemExtent? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderSliverFixedExtentList(_namedArguments? : {childManager? : lib3.RenderSliverBoxChildManager,itemExtent? : double}) {
        let {childManager,itemExtent} = Object.assign({
        }, _namedArguments );
        this._itemExtent = itemExtent;
        super.RenderSliverFixedExtentBoxAdaptor({
            childManager : childManager});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get itemExtent() : double {
        return this._itemExtent;
    }
    _itemExtent : double;

    set itemExtent(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (this._itemExtent == value) return;
        this._itemExtent = value;
        this.markNeedsLayout();
    }
}

export class properties {
}
