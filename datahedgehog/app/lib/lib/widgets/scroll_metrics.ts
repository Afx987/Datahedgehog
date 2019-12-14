/** Library asset:datahedgehog_monitor/lib/lib/widgets/scroll_metrics.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as math from "@dart2ts/dart/math";

export namespace ScrollMetrics {
    export type Constructors = 'ScrollMetrics';
    export type Interface = Omit<ScrollMetrics, Constructors>;
}
@DartClass
export class ScrollMetrics {
    copyWith(_namedArguments? : {minScrollExtent? : double,maxScrollExtent? : double,pixels? : double,viewportDimension? : double,axisDirection? : lib3.AxisDirection}) : ScrollMetrics {
        let {minScrollExtent,maxScrollExtent,pixels,viewportDimension,axisDirection} = Object.assign({
        }, _namedArguments );
        return FixedScrollMetrics({
            minScrollExtent : (minScrollExtent || this.minScrollExtent),maxScrollExtent : (maxScrollExtent || this.maxScrollExtent),pixels : (pixels || this.pixels),viewportDimension : (viewportDimension || this.viewportDimension),axisDirection : (axisDirection || this.axisDirection)});
    }
    @AbstractProperty
    get minScrollExtent() : double{ throw 'abstract'}
    @AbstractProperty
    get maxScrollExtent() : double{ throw 'abstract'}
    @AbstractProperty
    get pixels() : double{ throw 'abstract'}
    @AbstractProperty
    get viewportDimension() : double{ throw 'abstract'}
    @AbstractProperty
    get axisDirection() : lib3.AxisDirection{ throw 'abstract'}
    get axis() : lib3.Axis {
        return lib3.axisDirectionToAxis(this.axisDirection);
    }
    get outOfRange() : boolean {
        return this.pixels < this.minScrollExtent || this.pixels > this.maxScrollExtent;
    }
    get atEdge() : boolean {
        return this.pixels == this.minScrollExtent || this.pixels == this.maxScrollExtent;
    }
    get extentBefore() : double {
        return math.max(this.pixels - this.minScrollExtent,0.0);
    }
    get extentInside() : double {
        return op(Op.PLUS,op(Op.MINUS,math.min(this.pixels,this.maxScrollExtent),math.max(this.pixels,this.minScrollExtent)),math.min(this.viewportDimension,this.maxScrollExtent - this.minScrollExtent));
    }
    get extentAfter() : double {
        return math.max(this.maxScrollExtent - this.pixels,0.0);
    }
    constructor() {
    }
    @defaultConstructor
    ScrollMetrics() {
    }
}

export namespace FixedScrollMetrics {
    export type Constructors = ScrollMetrics.Constructors | 'FixedScrollMetrics';
    export type Interface = Omit<FixedScrollMetrics, Constructors>;
}
@DartClass
export class FixedScrollMetrics extends ScrollMetrics {
    constructor(_namedArguments? : {minScrollExtent? : double,maxScrollExtent? : double,pixels? : double,viewportDimension? : double,axisDirection? : lib3.AxisDirection}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FixedScrollMetrics(_namedArguments? : {minScrollExtent? : double,maxScrollExtent? : double,pixels? : double,viewportDimension? : double,axisDirection? : lib3.AxisDirection}) {
        let {minScrollExtent,maxScrollExtent,pixels,viewportDimension,axisDirection} = Object.assign({
        }, _namedArguments );
        this.minScrollExtent = minScrollExtent;
        this.maxScrollExtent = maxScrollExtent;
        this.pixels = pixels;
        this.viewportDimension = viewportDimension;
        this.axisDirection = axisDirection;
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    minScrollExtent : double;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    maxScrollExtent : double;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    pixels : double;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    viewportDimension : double;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    axisDirection : lib3.AxisDirection;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${new core.DartDouble(this.extentBefore).toStringAsFixed(1)}..[${new core.DartDouble(this.extentInside).toStringAsFixed(1)}]..${new core.DartDouble(this.extentAfter).toStringAsFixed(1)})`;
    }
}

export class properties {
}
