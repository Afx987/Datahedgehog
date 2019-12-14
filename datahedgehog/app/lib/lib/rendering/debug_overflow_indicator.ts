/** Library asset:datahedgehog_monitor/lib/lib/rendering/debug_overflow_indicator.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/text_painter";
import * as lib5 from "./stack";
import * as math from "@dart2ts/dart/math";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/assertions";
import * as lib8 from "./object";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/text_span";

export var RenderObject : () => any = () : any =>  {
    static;
    let _black : any = Color(3204448256);
    static;
    let _yellow : any = Color(3221225216);
    static;
    let _indicatorFraction : double = 0.1;
    static;
    let _indicatorFontSizePixels : double = 7.5;
    static;
    let _indicatorLabelPaddingPixels : double = 1.0;
    static;
    let _indicatorTextStyle : lib3.TextStyle = lib3.TextStyle({
        color : Color(4287627264),fontSize : _indicatorFontSizePixels,fontWeight : FontWeight.w800});
    static;
    let _indicatorPaint : any = ((_) : any =>  {
        {
            _.shader = ui.Gradient.linear(new bare.createInstance(any,null,0.0,0.0),new bare.createInstance(any,null,10.0,10.0),new core.DartList.literal<any>(_black,_yellow,_yellow,_black),new core.DartList.literal<double>(0.25,0.25,0.75,0.75),TileMode.repeated);
            return _;
        }
    })(Paint());
    static;
    let _labelBackgroundPaint : any = ((_) : any =>  {
        {
            _.color = new bare.createInstance(any,null,4294967295);
            return _;
        }
    })(Paint());
    let _indicatorLabel : core.DartList<lib4.TextPainter> = op(Op.LT,core.DartList<E>,lib4.TextPainter);
    op(Op.GT,,.filled(_OverflowSide.values.length,lib4.TextPainter({
        textDirection : TextDirection.ltr})));
    let _overflowReportNeeded : boolean = true;
    var _formatPixels : (value : double) => string = (value : double) : string =>  {
        /* TODO (AssertStatementImpl) : assert (value > 0.0); */;
        let pixels : string;
        if (value > 10.0) {
            pixels = new core.DartDouble(value).toStringAsFixed(0);
        }else if (value > 1.0) {
            pixels = new core.DartDouble(value).toStringAsFixed(1);
        }else {
            pixels = new core.DartDouble(value).toStringAsPrecision(3);
        }
        return pixels;
    };
    var _calculateOverflowRegions : (overflow : lib5.RelativeRect,containerRect : any) => core.DartList<_OverflowRegionData> = (overflow : lib5.RelativeRect,containerRect : any) : core.DartList<_OverflowRegionData> =>  {
        let regions : core.DartList<_OverflowRegionData> = new core.DartList.literal<_OverflowRegionData>();
        if (overflow.left > 0.0) {
            let markerRect : any = Rect.fromLTWH(0.0,0.0,op(Op.TIMES,containerRect.width,_indicatorFraction),containerRect.height);
            regions.add(_OverflowRegionData({
                rect : markerRect,label : `LEFT OVERFLOWED BY ${_formatPixels(overflow.left)} PIXELS`,labelOffset : op(Op.PLUS,markerRect.centerLeft,new bare.createInstance(any,null,_indicatorFontSizePixels + _indicatorLabelPaddingPixels,0.0)),rotation : op(Op.DIVIDE,math.pi,2.0),side : _OverflowSide.left}));
        }
        if (overflow.right > 0.0) {
            let markerRect : any = Rect.fromLTWH(op(Op.TIMES,containerRect.width,(1.0 - _indicatorFraction)),0.0,op(Op.TIMES,containerRect.width,_indicatorFraction),containerRect.height);
            regions.add(_OverflowRegionData({
                rect : markerRect,label : `RIGHT OVERFLOWED BY ${_formatPixels(overflow.right)} PIXELS`,labelOffset : op(Op.MINUS,markerRect.centerRight,new bare.createInstance(any,null,_indicatorFontSizePixels + _indicatorLabelPaddingPixels,0.0)),rotation : op(Op.DIVIDE,op(Op.NEG,math.pi),2.0),side : _OverflowSide.right}));
        }
        if (overflow.top > 0.0) {
            let markerRect : any = Rect.fromLTWH(0.0,0.0,containerRect.width,op(Op.TIMES,containerRect.height,_indicatorFraction));
            regions.add(_OverflowRegionData({
                rect : markerRect,label : `TOP OVERFLOWED BY ${_formatPixels(overflow.top)} PIXELS`,labelOffset : op(Op.PLUS,markerRect.topCenter,new bare.createInstance(any,null,0.0,_indicatorLabelPaddingPixels)),rotation : 0.0,side : _OverflowSide.top}));
        }
        if (overflow.bottom > 0.0) {
            let markerRect : any = Rect.fromLTWH(0.0,op(Op.TIMES,containerRect.height,(1.0 - _indicatorFraction)),containerRect.width,op(Op.TIMES,containerRect.height,_indicatorFraction));
            regions.add(_OverflowRegionData({
                rect : markerRect,label : `BOTTOM OVERFLOWED BY ${_formatPixels(overflow.bottom)} PIXELS`,labelOffset : op(Op.MINUS,markerRect.bottomCenter,new bare.createInstance(any,null,0.0,_indicatorFontSizePixels + _indicatorLabelPaddingPixels)),rotation : 0.0,side : _OverflowSide.bottom}));
        }
        return regions;
    };
    var _reportOverflow : (overflow : lib5.RelativeRect,overflowHints : string) => any = (overflow : lib5.RelativeRect,overflowHints : string) : any =>  {
        overflowHints = ( overflowHints ) || ( `The edge of the ${runtimeType} that is ` + 'overflowing has been marked in the rendering with a yellow and black ' + 'striped pattern. This is usually caused by the contents being too big ' + `for the ${runtimeType}.\n` + 'This is considered an error condition because it indicates that there ' + 'is content that cannot be seen. If the content is legitimately bigger ' + 'than the available space, consider clipping it with a ClipRect widget ' + `before putting it in the ${runtimeType}, or using a scrollable ` + 'container, like a ListView.' );
        let overflows : core.DartList<string> = new core.DartList.literal<string>();
        if (overflow.left > 0.0) overflows.add(`${_formatPixels(overflow.left)} pixels on the left`);
        if (overflow.top > 0.0) overflows.add(`${_formatPixels(overflow.top)} pixels on the top`);
        if (overflow.bottom > 0.0) overflows.add(`${_formatPixels(overflow.bottom)} pixels on the bottom`);
        if (overflow.right > 0.0) overflows.add(`${_formatPixels(overflow.right)} pixels on the right`);
        let overflowText : string = '';
        /* TODO (AssertStatementImpl) : assert (overflows.isNotEmpty, "Somehow $runtimeType didn't actually overflow like it thought it did."); */;
        switch (overflows.length) {
            case 1:
                overflowText = overflows.first;
                break;
            case 2:
                overflowText = `${overflows.first} and ${overflows.last}`;
                break;
            default:
                overflows[overflows.length - 1] = `and ${overflows[overflows.length - 1]}`;
                overflowText = overflows.join(', ');
        }
        lib7.FlutterError.reportError(lib8.FlutterErrorDetailsForRendering({
            exception : `A ${runtimeType} overflowed by ${overflowText}.`,library : 'rendering library',context : 'during layout',renderObject : this,informationCollector : (information : core.DartStringBuffer) =>  {
                information.writeln(overflowHints);
                information.writeln(`The specific ${runtimeType} in question is:`);
                information.writeln(`  ${toStringShallow({
                    joiner : '\n  '})}`);
                information.writeln(op(Op.TIMES,'◢◤',(op(Op.QUOTIENT,lib7.FlutterError.wrapWidth,2))));
            }}));
    };
    var paintOverflowIndicator : (context : lib8.PaintingContext,offset : any,containerRect : any,childRect : any,_namedArguments? : {overflowHints? : string}) => any = (context : lib8.PaintingContext,offset : any,containerRect : any,childRect : any,_namedArguments? : {overflowHints? : string}) : any =>  {
        let {overflowHints} = Object.assign({
        }, _namedArguments );
        let overflow : lib5.RelativeRect = lib5.RelativeRect.fromRect(containerRect,childRect);
        if (overflow.left <= 0.0 && overflow.right <= 0.0 && overflow.top <= 0.0 && overflow.bottom <= 0.0) {
            return;
        }
        let overflowRegions : core.DartList<_OverflowRegionData> = _calculateOverflowRegions(overflow,containerRect);
        for(let region of overflowRegions) {
            context.canvas.drawRect(region.rect.shift(offset),_indicatorPaint);
            if (((t)=>(!!t)?t.text:null)(_indicatorLabel[region.side.index].text) != region.label) {
                _indicatorLabel[region.side.index].text = lib9.TextSpan({
                    text : region.label,style : _indicatorTextStyle});
                _indicatorLabel[region.side.index].layout();
            }
            let labelOffset : any = op(Op.PLUS,region.labelOffset,offset);
            let centerOffset : any = Offset(-_indicatorLabel[region.side.index].width / 2.0,0.0);
            let textBackgroundRect : any = op(Op.BITAND,centerOffset,_indicatorLabel[region.side.index].size);
            context.canvas.save();
            context.canvas.translate(labelOffset.dx,labelOffset.dy);
            context.canvas.rotate(region.rotation);
            context.canvas.drawRect(textBackgroundRect,_labelBackgroundPaint);
            _indicatorLabel[region.side.index].paint(context.canvas,centerOffset);
            context.canvas.restore();
        }
        if (_overflowReportNeeded) {
            _overflowReportNeeded = false;
            _reportOverflow(overflow,overflowHints);
        }
    };
    var reassemble : () => any = () : any =>  {
        super.reassemble();
        /* TODO (AssertStatementImpl) : assert (() {_overflowReportNeeded = true; return true;}()); */;
    };
};
export enum _OverflowSide {
    left,
    top,
    bottom,
    right
}

export namespace _OverflowRegionData {
    export type Constructors = '_OverflowRegionData';
    export type Interface = Omit<_OverflowRegionData, Constructors>;
}
@DartClass
export class _OverflowRegionData {
    constructor(_namedArguments? : {rect? : any,label? : string,labelOffset? : any,rotation? : double,side? : _OverflowSide}) {
    }
    @defaultConstructor
    _OverflowRegionData(_namedArguments? : {rect? : any,label? : string,labelOffset? : any,rotation? : double,side? : _OverflowSide}) {
        let {rect,label,labelOffset,rotation,side} = Object.assign({
            "label" : '',
            "labelOffset" : Offset.zero,
            "rotation" : 0.0}, _namedArguments );
        this.rect = rect;
        this.label = label;
        this.labelOffset = labelOffset;
        this.rotation = rotation;
        this.side = side;
    }
    rect : any;

    label : string;

    labelOffset : any;

    rotation : double;

    side : _OverflowSide;

}

export class properties {
    private static __$DebugOverflowIndicatorMixin : any;
    static get DebugOverflowIndicatorMixin() : any { 
        return this.__$DebugOverflowIndicatorMixin;
    }
    static set DebugOverflowIndicatorMixin(__$value : any)  { 
        this.__$DebugOverflowIndicatorMixin = __$value;
    }

}
