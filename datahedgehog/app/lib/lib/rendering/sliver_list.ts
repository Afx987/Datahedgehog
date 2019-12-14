/** Library asset:datahedgehog_monitor/lib/lib/rendering/sliver_list.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./sliver_multi_box_adaptor";
import * as lib4 from "./box";
import * as lib5 from "./sliver";

export namespace RenderSliverList {
    export type Constructors = lib3.RenderSliverMultiBoxAdaptor.Constructors | 'RenderSliverList';
    export type Interface = Omit<RenderSliverList, Constructors>;
}
@DartClass
export class RenderSliverList extends lib3.RenderSliverMultiBoxAdaptor {
    constructor(_namedArguments? : {childManager? : lib3.RenderSliverBoxChildManager}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderSliverList(_namedArguments? : {childManager? : lib3.RenderSliverBoxChildManager}) {
        let {childManager} = Object.assign({
        }, _namedArguments );
        super.RenderSliverMultiBoxAdaptor({
            childManager : childManager});
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
        let childConstraints : lib4.BoxConstraints = this.constraints.asBoxConstraints();
        let leadingGarbage : number = 0;
        let trailingGarbage : number = 0;
        let reachedEnd : boolean = false;
        if (op(Op.EQUALS,firstChild,null)) {
            if (!this.addInitialChild()) {
                this.geometry = lib5.SliverGeometry.zero;
                this.childManager.didFinishLayout();
                return;
            }
        }
        let leadingChildWithLayout : lib4.RenderBox, trailingChildWithLayout : lib4.RenderBox;
        let earliestUsefulChild : lib4.RenderBox = firstChild;
        for(let earliestScrollOffset : double = this.childScrollOffset(earliestUsefulChild); earliestScrollOffset > scrollOffset; earliestScrollOffset = this.childScrollOffset(earliestUsefulChild)){
            earliestUsefulChild = this.insertAndLayoutLeadingChild(childConstraints,{
                parentUsesSize : true});
            if (op(Op.EQUALS,earliestUsefulChild,null)) {
                let childParentData : lib3.SliverMultiBoxAdaptorParentData = firstChild.parentData;
                childParentData.layoutOffset = 0.0;
                if (scrollOffset == 0.0) {
                    earliestUsefulChild = firstChild;
                    leadingChildWithLayout = earliestUsefulChild;
                    trailingChildWithLayout = ( trailingChildWithLayout ) || ( earliestUsefulChild );
                    break;
                }else {
                    this.geometry = lib5.SliverGeometry({
                        scrollOffsetCorrection : -scrollOffset});
                    return;
                }
            }
            let firstChildScrollOffset : double = earliestScrollOffset - this.paintExtentOf(firstChild);
            if (firstChildScrollOffset < 0.0) {
                let correction : double = 0.0;
                while (earliestUsefulChild != null){
                    /* TODO (AssertStatementImpl) : assert (firstChild == earliestUsefulChild); */;
                    correction += this.paintExtentOf(firstChild);
                    earliestUsefulChild = this.insertAndLayoutLeadingChild(childConstraints,{
                        parentUsesSize : true});
                }
                this.geometry = lib5.SliverGeometry({
                    scrollOffsetCorrection : correction - earliestScrollOffset});
                let childParentData : lib3.SliverMultiBoxAdaptorParentData = firstChild.parentData;
                childParentData.layoutOffset = 0.0;
                return;
            }
            let childParentData : lib3.SliverMultiBoxAdaptorParentData = earliestUsefulChild.parentData;
            childParentData.layoutOffset = firstChildScrollOffset;
            /* TODO (AssertStatementImpl) : assert (earliestUsefulChild == firstChild); */;
            leadingChildWithLayout = earliestUsefulChild;
            trailingChildWithLayout = ( trailingChildWithLayout ) || ( earliestUsefulChild );
        }
        /* TODO (AssertStatementImpl) : assert (earliestUsefulChild == firstChild); */;
        /* TODO (AssertStatementImpl) : assert (childScrollOffset(earliestUsefulChild) <= scrollOffset); */;
        if (op(Op.EQUALS,leadingChildWithLayout,null)) {
            earliestUsefulChild.layout(childConstraints,{
                parentUsesSize : true});
            leadingChildWithLayout = earliestUsefulChild;
            trailingChildWithLayout = earliestUsefulChild;
        }
        let inLayoutRange : boolean = true;
        let child : lib4.RenderBox = earliestUsefulChild;
        let index : number = this.indexOf(child);
        let endScrollOffset : double = this.childScrollOffset(child) + this.paintExtentOf(child);
        var advance : () => boolean = () : boolean =>  {
            /* TODO (AssertStatementImpl) : assert (child != null); */;
            if (op(Op.EQUALS,child,trailingChildWithLayout)) inLayoutRange = false;
            child = childAfter(child);
            if (op(Op.EQUALS,child,null)) inLayoutRange = false;
            index += 1;
            if (!inLayoutRange) {
                if (op(Op.EQUALS,child,null) || this.indexOf(child) != index) {
                    child = this.insertAndLayoutChild(childConstraints,{
                        after : trailingChildWithLayout,parentUsesSize : true});
                    if (op(Op.EQUALS,child,null)) {
                        return false;
                    }
                }else {
                    child.layout(childConstraints,{
                        parentUsesSize : true});
                }
                trailingChildWithLayout = child;
            }
            /* TODO (AssertStatementImpl) : assert (child != null); */;
            let childParentData : lib3.SliverMultiBoxAdaptorParentData = child.parentData;
            childParentData.layoutOffset = endScrollOffset;
            /* TODO (AssertStatementImpl) : assert (childParentData.index == index); */;
            endScrollOffset = this.childScrollOffset(child) + this.paintExtentOf(child);
            return true;
        };
        while (endScrollOffset < scrollOffset){
            leadingGarbage += 1;
            if (!advance()) {
                /* TODO (AssertStatementImpl) : assert (leadingGarbage == childCount); */;
                /* TODO (AssertStatementImpl) : assert (child == null); */;
                this.collectGarbage(leadingGarbage - 1,0);
                /* TODO (AssertStatementImpl) : assert (firstChild == lastChild); */;
                let extent : double = this.childScrollOffset(lastChild) + this.paintExtentOf(lastChild);
                this.geometry = lib5.SliverGeometry({
                    scrollExtent : extent,paintExtent : 0.0,maxPaintExtent : extent});
                return;
            }
        }
        while (endScrollOffset < targetEndScrollOffset){
            if (!advance()) {
                reachedEnd = true;
                break;
            }
        }
        if (child != null) {
            child = childAfter(child);
            while (child != null){
                trailingGarbage += 1;
                child = childAfter(child);
            }
        }
        this.collectGarbage(leadingGarbage,trailingGarbage);
        /* TODO (AssertStatementImpl) : assert (debugAssertChildListIsNonEmptyAndContiguous()); */;
        let estimatedMaxScrollOffset : double;
        if (reachedEnd) {
            estimatedMaxScrollOffset = endScrollOffset;
        }else {
            estimatedMaxScrollOffset = this.childManager.estimateMaxScrollOffset(this.constraints,{
                firstIndex : this.indexOf(firstChild),lastIndex : this.indexOf(lastChild),leadingScrollOffset : this.childScrollOffset(firstChild),trailingScrollOffset : endScrollOffset});
            /* TODO (AssertStatementImpl) : assert (estimatedMaxScrollOffset >= endScrollOffset - childScrollOffset(firstChild)); */;
        }
        let paintExtent : double = this.calculatePaintOffset(this.constraints,{
            from : this.childScrollOffset(firstChild),to : endScrollOffset});
        let cacheExtent : double = this.calculateCacheOffset(this.constraints,{
            from : this.childScrollOffset(firstChild),to : endScrollOffset});
        let targetEndScrollOffsetForPaint : double = this.constraints.scrollOffset + this.constraints.remainingPaintExtent;
        this.geometry = lib5.SliverGeometry({
            scrollExtent : estimatedMaxScrollOffset,paintExtent : paintExtent,cacheExtent : cacheExtent,maxPaintExtent : estimatedMaxScrollOffset,hasVisualOverflow : endScrollOffset > targetEndScrollOffsetForPaint || this.constraints.scrollOffset > 0.0});
        if (estimatedMaxScrollOffset == endScrollOffset) this.childManager.setDidUnderflow(true);
        this.childManager.didFinishLayout();
    }
}

export class properties {
}
