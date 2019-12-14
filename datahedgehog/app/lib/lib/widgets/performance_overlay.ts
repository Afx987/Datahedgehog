/** Library asset:datahedgehog_monitor/lib/lib/widgets/performance_overlay.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/rendering/performance_overlay";

export namespace PerformanceOverlay {
    export type Constructors = lib3.LeafRenderObjectWidget.Constructors | 'PerformanceOverlay' | 'allEnabled';
    export type Interface = Omit<PerformanceOverlay, Constructors>;
}
@DartClass
export class PerformanceOverlay extends lib3.LeafRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,optionsMask? : number,rasterizerThreshold? : number,checkerboardRasterCacheImages? : boolean,checkerboardOffscreenLayers? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PerformanceOverlay(_namedArguments? : {key? : lib4.Key,optionsMask? : number,rasterizerThreshold? : number,checkerboardRasterCacheImages? : boolean,checkerboardOffscreenLayers? : boolean}) {
        let {key,optionsMask,rasterizerThreshold,checkerboardRasterCacheImages,checkerboardOffscreenLayers} = Object.assign({
            "optionsMask" : 0,
            "rasterizerThreshold" : 0,
            "checkerboardRasterCacheImages" : false,
            "checkerboardOffscreenLayers" : false}, _namedArguments );
        super.LeafRenderObjectWidget({
            key : key});
        this.optionsMask = optionsMask;
        this.rasterizerThreshold = rasterizerThreshold;
        this.checkerboardRasterCacheImages = checkerboardRasterCacheImages;
        this.checkerboardOffscreenLayers = checkerboardOffscreenLayers;
    }
    @namedConstructor
    allEnabled(_namedArguments? : {key? : lib4.Key,rasterizerThreshold? : number,checkerboardRasterCacheImages? : boolean,checkerboardOffscreenLayers? : boolean}) {
        let {key,rasterizerThreshold,checkerboardRasterCacheImages,checkerboardOffscreenLayers} = Object.assign({
            "rasterizerThreshold" : 0,
            "checkerboardRasterCacheImages" : false,
            "checkerboardOffscreenLayers" : false}, _namedArguments );
        this.optionsMask = 1 << lib5.PerformanceOverlayOption.displayRasterizerStatistics.index | 1 << lib5.PerformanceOverlayOption.visualizeRasterizerStatistics.index | 1 << lib5.PerformanceOverlayOption.displayEngineStatistics.index | 1 << lib5.PerformanceOverlayOption.visualizeEngineStatistics.index;
        super.LeafRenderObjectWidget({
            key : key});
        this.rasterizerThreshold = rasterizerThreshold;
        this.checkerboardRasterCacheImages = checkerboardRasterCacheImages;
        this.checkerboardOffscreenLayers = checkerboardOffscreenLayers;
    }
    static allEnabled : new(_namedArguments? : {key? : lib4.Key,rasterizerThreshold? : number,checkerboardRasterCacheImages? : boolean,checkerboardOffscreenLayers? : boolean}) => PerformanceOverlay;

    optionsMask : number;

    rasterizerThreshold : number;

    checkerboardRasterCacheImages : boolean;

    checkerboardOffscreenLayers : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib5.RenderPerformanceOverlay {
        return lib5.RenderPerformanceOverlay({
            optionsMask : this.optionsMask,rasterizerThreshold : this.rasterizerThreshold,checkerboardRasterCacheImages : this.checkerboardRasterCacheImages,checkerboardOffscreenLayers : this.checkerboardOffscreenLayers});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib5.RenderPerformanceOverlay) : any {
        ((_) : lib5.RenderPerformanceOverlay =>  {
            {
                _.optionsMask = this.optionsMask;
                _.rasterizerThreshold = this.rasterizerThreshold;
                return _;
            }
        })(renderObject);
    }
}

export class properties {
}
