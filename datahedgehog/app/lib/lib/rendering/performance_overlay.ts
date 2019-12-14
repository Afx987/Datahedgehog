/** Library asset:datahedgehog_monitor/lib/lib/rendering/performance_overlay.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./box";
import * as lib4 from "./object";
import * as lib5 from "./layer";

export enum PerformanceOverlayOption {
    displayRasterizerStatistics,
    visualizeRasterizerStatistics,
    displayEngineStatistics,
    visualizeEngineStatistics
}

export namespace RenderPerformanceOverlay {
    export type Constructors = lib3.RenderBox.Constructors | 'RenderPerformanceOverlay';
    export type Interface = Omit<RenderPerformanceOverlay, Constructors>;
}
@DartClass
export class RenderPerformanceOverlay extends lib3.RenderBox {
    constructor(_namedArguments? : {optionsMask? : number,rasterizerThreshold? : number,checkerboardRasterCacheImages? : boolean,checkerboardOffscreenLayers? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderPerformanceOverlay(_namedArguments? : {optionsMask? : number,rasterizerThreshold? : number,checkerboardRasterCacheImages? : boolean,checkerboardOffscreenLayers? : boolean}) {
        let {optionsMask,rasterizerThreshold,checkerboardRasterCacheImages,checkerboardOffscreenLayers} = Object.assign({
            "optionsMask" : 0,
            "rasterizerThreshold" : 0,
            "checkerboardRasterCacheImages" : false,
            "checkerboardOffscreenLayers" : false}, _namedArguments );
        this._optionsMask = this.optionsMask;
        this._rasterizerThreshold = this.rasterizerThreshold;
        this._checkerboardRasterCacheImages = this.checkerboardRasterCacheImages;
        this._checkerboardOffscreenLayers = this.checkerboardOffscreenLayers;
        this.assert = assert;
    }
     : any;

     : any;

     : any;

     : any;

    _optionsMask;
    _rasterizerThreshold;
    _checkerboardRasterCacheImages;
    _checkerboardOffscreenLayers;

    get optionsMask() : number {
        return this._optionsMask;
    }
    _optionsMask : number;

    set optionsMask(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (value == this._optionsMask) return;
        this._optionsMask = value;
        this.markNeedsPaint();
    }
    get rasterizerThreshold() : number {
        return this._rasterizerThreshold;
    }
    _rasterizerThreshold : number;

    set rasterizerThreshold(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (value == this._rasterizerThreshold) return;
        this._rasterizerThreshold = value;
        this.markNeedsPaint();
    }
    get checkerboardRasterCacheImages() : boolean {
        return this._checkerboardRasterCacheImages;
    }
    _checkerboardRasterCacheImages : boolean;

    set checkerboardRasterCacheImages(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (value == this._checkerboardRasterCacheImages) return;
        this._checkerboardRasterCacheImages = value;
        this.markNeedsPaint();
    }
    get checkerboardOffscreenLayers() : boolean {
        return this._checkerboardOffscreenLayers;
    }
    _checkerboardOffscreenLayers : boolean;

    set checkerboardOffscreenLayers(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (value == this._checkerboardOffscreenLayers) return;
        this._checkerboardOffscreenLayers = value;
        this.markNeedsPaint();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sizedByParent() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get alwaysNeedsCompositing() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicWidth(height : double) : double {
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        return 0.0;
    }
    get _intrinsicHeight() : double {
        let kDefaultGraphHeight : double = 80.0;
        let result : double = 0.0;
        if ((this.optionsMask | (1 << PerformanceOverlayOption.displayRasterizerStatistics.index) > 0) || (this.optionsMask | (1 << PerformanceOverlayOption.visualizeRasterizerStatistics.index) > 0)) result += kDefaultGraphHeight;
        if ((this.optionsMask | (1 << PerformanceOverlayOption.displayEngineStatistics.index) > 0) || (this.optionsMask | (1 << PerformanceOverlayOption.visualizeEngineStatistics.index) > 0)) result += kDefaultGraphHeight;
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicHeight(width : double) : double {
        return this._intrinsicHeight;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicHeight(width : double) : double {
        return this._intrinsicHeight;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performResize() : any {
        this.size = this.constraints.constrain(Size(new core.DartDouble(double).infinity,this._intrinsicHeight));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib4.PaintingContext,offset : any) : any {
        /* TODO (AssertStatementImpl) : assert (needsCompositing); */;
        context.addLayer(lib5.PerformanceOverlayLayer({
            overlayRect : Rect.fromLTWH(offset.dx,offset.dy,this.size.width,this.size.height),optionsMask : this.optionsMask,rasterizerThreshold : this.rasterizerThreshold,checkerboardRasterCacheImages : this.checkerboardRasterCacheImages,checkerboardOffscreenLayers : this.checkerboardOffscreenLayers}));
    }
}

export class properties {
}
