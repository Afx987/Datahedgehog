/** Library asset:datahedgehog_monitor/lib/lib/rendering/sliver_fill.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./sliver_fixed_extent_list";
import * as lib4 from "./sliver_multi_box_adaptor";
import * as math from "@dart2ts/dart/math";
import * as lib6 from "./sliver";
import * as lib7 from "./box";

export namespace RenderSliverFillViewport {
    export type Constructors = lib3.RenderSliverFixedExtentBoxAdaptor.Constructors | 'RenderSliverFillViewport';
    export type Interface = Omit<RenderSliverFillViewport, Constructors>;
}
@DartClass
export class RenderSliverFillViewport extends lib3.RenderSliverFixedExtentBoxAdaptor {
    constructor(_namedArguments? : {childManager? : lib4.RenderSliverBoxChildManager,viewportFraction? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderSliverFillViewport(_namedArguments? : {childManager? : lib4.RenderSliverBoxChildManager,viewportFraction? : double}) {
        let {childManager,viewportFraction} = Object.assign({
            "viewportFraction" : 1.0}, _namedArguments );
        this._viewportFraction = this.viewportFraction;
        this.assert = assert;
    }
     : any;

     : any;

    _viewportFraction;
    super;

     : any;

     : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get itemExtent() : double {
        return this.constraints.viewportMainAxisExtent * this.viewportFraction;
    }
    get viewportFraction() : double {
        return this._viewportFraction;
    }
    _viewportFraction : double;

    set viewportFraction(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._viewportFraction,value)) return;
        this._viewportFraction = value;
        this.markNeedsLayout();
    }
    get _padding() : double {
        return (1.0 - this.viewportFraction) * this.constraints.viewportMainAxisExtent * 0.5;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    indexToLayoutOffset(itemExtent : double,index : number) : double {
        return this._padding + super.indexToLayoutOffset(itemExtent,index);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getMinChildIndexForScrollOffset(scrollOffset : double,itemExtent : double) : number {
        return super.getMinChildIndexForScrollOffset(math.max(scrollOffset - this._padding,0.0),itemExtent);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getMaxChildIndexForScrollOffset(scrollOffset : double,itemExtent : double) : number {
        return super.getMaxChildIndexForScrollOffset(math.max(scrollOffset - this._padding,0.0),itemExtent);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    estimateMaxScrollOffset(constraints : lib6.SliverConstraints,_namedArguments? : {firstIndex? : number,lastIndex? : number,leadingScrollOffset? : double,trailingScrollOffset? : double}) : double {
        let {firstIndex,lastIndex,leadingScrollOffset,trailingScrollOffset} = Object.assign({
        }, _namedArguments );
        let padding : double = this._padding;
        return this.childManager.estimateMaxScrollOffset(constraints,{
            firstIndex : firstIndex,lastIndex : lastIndex,leadingScrollOffset : leadingScrollOffset - padding,trailingScrollOffset : trailingScrollOffset - padding}) + padding + padding;
    }
}

export namespace RenderSliverFillRemaining {
    export type Constructors = lib6.RenderSliverSingleBoxAdapter.Constructors | 'RenderSliverFillRemaining';
    export type Interface = Omit<RenderSliverFillRemaining, Constructors>;
}
@DartClass
export class RenderSliverFillRemaining extends lib6.RenderSliverSingleBoxAdapter {
    constructor(_namedArguments? : {child? : lib7.RenderBox}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderSliverFillRemaining(_namedArguments? : {child? : lib7.RenderBox}) {
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
        let extent : double = this.constraints.remainingPaintExtent - math.min(this.constraints.overlap,0.0);
        if (child != null) child.layout(this.constraints.asBoxConstraints({
            minExtent : extent,maxExtent : extent}),{
            parentUsesSize : true});
        let paintedChildSize : double = this.calculatePaintOffset(this.constraints,{
            from : 0.0,to : extent});
        /* TODO (AssertStatementImpl) : assert (paintedChildSize.isFinite); */;
        /* TODO (AssertStatementImpl) : assert (paintedChildSize >= 0.0); */;
        this.geometry = lib6.SliverGeometry({
            scrollExtent : this.constraints.viewportMainAxisExtent,paintExtent : paintedChildSize,maxPaintExtent : paintedChildSize,hasVisualOverflow : extent > this.constraints.remainingPaintExtent || this.constraints.scrollOffset > 0.0});
        if (child != null) this.setChildParentData(child,this.constraints,this.geometry);
    }
}

export class properties {
}
