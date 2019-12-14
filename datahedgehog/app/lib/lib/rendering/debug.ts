/** Library asset:datahedgehog_monitor/lib/lib/rendering/debug.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/painting/colors";
import * as lib4 from "./object";

export var _debugDrawDoubleRect : (canvas : any,outerRect : any,innerRect : any,color : any) => any = (canvas : any,outerRect : any,innerRect : any,color : any) : any =>  {
    let path : any = ((_) : any =>  {
        {
            _.fillType = PathFillType.evenOdd;
            addRect(outerRect);
            addRect(innerRect);
            return _;
        }
    })(Path());
    let paint : any = ((_) : any =>  {
        {
            _.color = color;
            return _;
        }
    })(Paint());
    canvas.drawPath(path,paint);
};
export var debugPaintPadding : (canvas : any,outerRect : any,innerRect : any,_namedArguments? : {outlineWidth? : double}) => any = (canvas : any,outerRect : any,innerRect : any,_namedArguments? : {outlineWidth? : double}) : any =>  {
    let {outlineWidth} = Object.assign({
        "outlineWidth" : 2.0}, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (() {if (innerRect != null && !innerRect.isEmpty) {_debugDrawDoubleRect(canvas, outerRect, innerRect, const Color(0x900090FF)); _debugDrawDoubleRect(canvas, innerRect.inflate(outlineWidth).intersect(outerRect), innerRect, const Color(0xFF0090FF));} else {final Paint paint = Paint()..color = const Color(0x90909090); canvas.drawRect(outerRect, paint);} return true;}()); */;
};
export var debugAssertAllRenderVarsUnset : (reason : string,_namedArguments? : {debugCheckIntrinsicSizesOverride? : boolean}) => boolean = (reason : string,_namedArguments? : {debugCheckIntrinsicSizesOverride? : boolean}) : boolean =>  {
    let {debugCheckIntrinsicSizesOverride} = Object.assign({
        "debugCheckIntrinsicSizesOverride" : false}, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (() {if (debugPaintSizeEnabled || debugPaintBaselinesEnabled || debugPaintLayerBordersEnabled || debugPaintPointersEnabled || debugRepaintRainbowEnabled || debugRepaintTextRainbowEnabled || debugCurrentRepaintColor != _kDebugDefaultRepaintColor || debugPrintMarkNeedsLayoutStacks || debugPrintMarkNeedsPaintStacks || debugPrintLayouts || debugCheckIntrinsicSizes != debugCheckIntrinsicSizesOverride || debugProfilePaintsEnabled || debugOnProfilePaint != null) {throw FlutterError(reason);} return true;}()); */;
    return true;
};
export class properties {
    private static __$_kDebugDefaultRepaintColor : lib3.HSVColor;
    static get _kDebugDefaultRepaintColor() : lib3.HSVColor { 
        if (this.__$_kDebugDefaultRepaintColor===undefined) {
            this.__$_kDebugDefaultRepaintColor = lib3.HSVColor.fromAHSV(0.4,60.0,1.0,1.0);
        }
        return this.__$_kDebugDefaultRepaintColor;
    }
    static set _kDebugDefaultRepaintColor(__$value : lib3.HSVColor)  { 
        this.__$_kDebugDefaultRepaintColor = __$value;
    }

    private static __$debugPaintSizeEnabled : boolean;
    static get debugPaintSizeEnabled() : boolean { 
        if (this.__$debugPaintSizeEnabled===undefined) {
            this.__$debugPaintSizeEnabled = false;
        }
        return this.__$debugPaintSizeEnabled;
    }
    static set debugPaintSizeEnabled(__$value : boolean)  { 
        this.__$debugPaintSizeEnabled = __$value;
    }

    private static __$debugPaintBaselinesEnabled : boolean;
    static get debugPaintBaselinesEnabled() : boolean { 
        if (this.__$debugPaintBaselinesEnabled===undefined) {
            this.__$debugPaintBaselinesEnabled = false;
        }
        return this.__$debugPaintBaselinesEnabled;
    }
    static set debugPaintBaselinesEnabled(__$value : boolean)  { 
        this.__$debugPaintBaselinesEnabled = __$value;
    }

    private static __$debugPaintLayerBordersEnabled : boolean;
    static get debugPaintLayerBordersEnabled() : boolean { 
        if (this.__$debugPaintLayerBordersEnabled===undefined) {
            this.__$debugPaintLayerBordersEnabled = false;
        }
        return this.__$debugPaintLayerBordersEnabled;
    }
    static set debugPaintLayerBordersEnabled(__$value : boolean)  { 
        this.__$debugPaintLayerBordersEnabled = __$value;
    }

    private static __$debugPaintPointersEnabled : boolean;
    static get debugPaintPointersEnabled() : boolean { 
        if (this.__$debugPaintPointersEnabled===undefined) {
            this.__$debugPaintPointersEnabled = false;
        }
        return this.__$debugPaintPointersEnabled;
    }
    static set debugPaintPointersEnabled(__$value : boolean)  { 
        this.__$debugPaintPointersEnabled = __$value;
    }

    private static __$debugRepaintRainbowEnabled : boolean;
    static get debugRepaintRainbowEnabled() : boolean { 
        if (this.__$debugRepaintRainbowEnabled===undefined) {
            this.__$debugRepaintRainbowEnabled = false;
        }
        return this.__$debugRepaintRainbowEnabled;
    }
    static set debugRepaintRainbowEnabled(__$value : boolean)  { 
        this.__$debugRepaintRainbowEnabled = __$value;
    }

    private static __$debugRepaintTextRainbowEnabled : boolean;
    static get debugRepaintTextRainbowEnabled() : boolean { 
        if (this.__$debugRepaintTextRainbowEnabled===undefined) {
            this.__$debugRepaintTextRainbowEnabled = false;
        }
        return this.__$debugRepaintTextRainbowEnabled;
    }
    static set debugRepaintTextRainbowEnabled(__$value : boolean)  { 
        this.__$debugRepaintTextRainbowEnabled = __$value;
    }

    private static __$debugCurrentRepaintColor : lib3.HSVColor;
    static get debugCurrentRepaintColor() : lib3.HSVColor { 
        if (this.__$debugCurrentRepaintColor===undefined) {
            this.__$debugCurrentRepaintColor = properties._kDebugDefaultRepaintColor;
        }
        return this.__$debugCurrentRepaintColor;
    }
    static set debugCurrentRepaintColor(__$value : lib3.HSVColor)  { 
        this.__$debugCurrentRepaintColor = __$value;
    }

    private static __$debugPrintMarkNeedsLayoutStacks : boolean;
    static get debugPrintMarkNeedsLayoutStacks() : boolean { 
        if (this.__$debugPrintMarkNeedsLayoutStacks===undefined) {
            this.__$debugPrintMarkNeedsLayoutStacks = false;
        }
        return this.__$debugPrintMarkNeedsLayoutStacks;
    }
    static set debugPrintMarkNeedsLayoutStacks(__$value : boolean)  { 
        this.__$debugPrintMarkNeedsLayoutStacks = __$value;
    }

    private static __$debugPrintMarkNeedsPaintStacks : boolean;
    static get debugPrintMarkNeedsPaintStacks() : boolean { 
        if (this.__$debugPrintMarkNeedsPaintStacks===undefined) {
            this.__$debugPrintMarkNeedsPaintStacks = false;
        }
        return this.__$debugPrintMarkNeedsPaintStacks;
    }
    static set debugPrintMarkNeedsPaintStacks(__$value : boolean)  { 
        this.__$debugPrintMarkNeedsPaintStacks = __$value;
    }

    private static __$debugPrintLayouts : boolean;
    static get debugPrintLayouts() : boolean { 
        if (this.__$debugPrintLayouts===undefined) {
            this.__$debugPrintLayouts = false;
        }
        return this.__$debugPrintLayouts;
    }
    static set debugPrintLayouts(__$value : boolean)  { 
        this.__$debugPrintLayouts = __$value;
    }

    private static __$debugCheckIntrinsicSizes : boolean;
    static get debugCheckIntrinsicSizes() : boolean { 
        if (this.__$debugCheckIntrinsicSizes===undefined) {
            this.__$debugCheckIntrinsicSizes = false;
        }
        return this.__$debugCheckIntrinsicSizes;
    }
    static set debugCheckIntrinsicSizes(__$value : boolean)  { 
        this.__$debugCheckIntrinsicSizes = __$value;
    }

    private static __$debugProfilePaintsEnabled : boolean;
    static get debugProfilePaintsEnabled() : boolean { 
        if (this.__$debugProfilePaintsEnabled===undefined) {
            this.__$debugProfilePaintsEnabled = false;
        }
        return this.__$debugProfilePaintsEnabled;
    }
    static set debugProfilePaintsEnabled(__$value : boolean)  { 
        this.__$debugProfilePaintsEnabled = __$value;
    }

    private static __$debugOnProfilePaint : (renderObject : lib4.RenderObject) => any;
    static get debugOnProfilePaint() : (renderObject : lib4.RenderObject) => any { 
        return this.__$debugOnProfilePaint;
    }
    static set debugOnProfilePaint(__$value : (renderObject : lib4.RenderObject) => any)  { 
        this.__$debugOnProfilePaint = __$value;
    }

    private static __$debugDisableClipLayers : boolean;
    static get debugDisableClipLayers() : boolean { 
        if (this.__$debugDisableClipLayers===undefined) {
            this.__$debugDisableClipLayers = false;
        }
        return this.__$debugDisableClipLayers;
    }
    static set debugDisableClipLayers(__$value : boolean)  { 
        this.__$debugDisableClipLayers = __$value;
    }

    private static __$debugDisablePhysicalShapeLayers : boolean;
    static get debugDisablePhysicalShapeLayers() : boolean { 
        if (this.__$debugDisablePhysicalShapeLayers===undefined) {
            this.__$debugDisablePhysicalShapeLayers = false;
        }
        return this.__$debugDisablePhysicalShapeLayers;
    }
    static set debugDisablePhysicalShapeLayers(__$value : boolean)  { 
        this.__$debugDisablePhysicalShapeLayers = __$value;
    }

    private static __$debugDisableOpacityLayers : boolean;
    static get debugDisableOpacityLayers() : boolean { 
        if (this.__$debugDisableOpacityLayers===undefined) {
            this.__$debugDisableOpacityLayers = false;
        }
        return this.__$debugDisableOpacityLayers;
    }
    static set debugDisableOpacityLayers(__$value : boolean)  { 
        this.__$debugDisableOpacityLayers = __$value;
    }

}
