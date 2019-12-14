/** Library asset:datahedgehog_monitor/lib/lib/widgets/scrollbar.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/rendering/custom_paint";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib6 from "./scroll_metrics";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as math from "@dart2ts/dart/math";

export var update : (metrics : lib6.ScrollMetrics,axisDirection : lib7.AxisDirection) => any = (metrics : lib6.ScrollMetrics,axisDirection : lib7.AxisDirection) : any =>  {
    properties._lastMetrics = metrics;
    properties._lastAxisDirection = axisDirection;
    notifyListeners();
};
export var _getThumbX : (size : any) => double = (size : any) : double =>  {
    /* TODO (AssertStatementImpl) : assert (textDirection != null); */;
    switch (properties.textDirection) {
        case TextDirection.rtl:
            return properties.crossAxisMargin;
        case TextDirection.ltr:
            return op(Op.MINUS,op(Op.MINUS,size.width,properties.thickness),properties.crossAxisMargin);
    }
    return null;
};
export var _paintVerticalThumb : (canvas : any,size : any,thumbOffset : double,thumbExtent : double) => any = (canvas : any,size : any,thumbOffset : double,thumbExtent : double) : any =>  {
    let thumbOrigin : any = Offset(_getThumbX(size),thumbOffset);
    let thumbSize : any = Size(properties.thickness,thumbExtent);
    let thumbRect : any = op(Op.BITAND,thumbOrigin,thumbSize);
    if (op(Op.EQUALS,properties.radius,null)) canvas.drawRect(thumbRect,properties._paint);else canvas.drawRRect(RRect.fromRectAndRadius(thumbRect,properties.radius),properties._paint);
};
export var _paintHorizontalThumb : (canvas : any,size : any,thumbOffset : double,thumbExtent : double) => any = (canvas : any,size : any,thumbOffset : double,thumbExtent : double) : any =>  {
    let thumbOrigin : any = Offset(thumbOffset,op(Op.MINUS,size.height,properties.thickness));
    let thumbSize : any = Size(thumbExtent,properties.thickness);
    let thumbRect : any = op(Op.BITAND,thumbOrigin,thumbSize);
    if (op(Op.EQUALS,properties.radius,null)) canvas.drawRect(thumbRect,properties._paint);else canvas.drawRRect(RRect.fromRectAndRadius(thumbRect,properties.radius),properties._paint);
};
export var _paintThumb : (before : double,inside : double,after : double,viewport : double,canvas : any,size : any,painter : (canvas : any,size : any,thumbOffset : double,thumbExtent : double) => any) => any = (before : double,inside : double,after : double,viewport : double,canvas : any,size : any,painter : (canvas : any,size : any,thumbOffset : double,thumbExtent : double) => any) : any =>  {
    let thumbExtent : double = math.min(viewport,properties.minOverscrollLength);
    if (before + inside + after > 0.0) {
        let fractionVisible : double = inside / (before + inside + after);
        thumbExtent = math.max(thumbExtent,viewport * fractionVisible - 2 * properties.mainAxisMargin);
        if (before != 0.0 && after != 0.0) {
            thumbExtent = math.max(properties.minLength,thumbExtent);
        }else {
            thumbExtent = math.max(thumbExtent,properties.minLength * (((inside / viewport) - 0.8) / 0.2));
        }
    }
    let fractionPast : double = before / (before + after);
    let thumbOffset : double = (before + after > 0.0) ? fractionPast * (viewport - thumbExtent - 2 * properties.mainAxisMargin) + properties.mainAxisMargin : properties.mainAxisMargin;
    painter(canvas,size,thumbOffset,thumbExtent);
};
export var dispose : () => any = () : any =>  {
    properties.fadeoutOpacityAnimation.removeListener(notifyListeners);
    super.dispose();
};
export var paint : (canvas : any,size : any) => any = (canvas : any,size : any) : any =>  {
    if (op(Op.EQUALS,properties._lastAxisDirection,null) || op(Op.EQUALS,properties._lastMetrics,null) || properties.fadeoutOpacityAnimation.value == 0.0) return;
    switch (properties._lastAxisDirection) {
        case lib7.AxisDirection.down:
            _paintThumb(properties._lastMetrics.extentBefore,properties._lastMetrics.extentInside,properties._lastMetrics.extentAfter,size.height,canvas,size,_paintVerticalThumb);
            break;
        case lib7.AxisDirection.up:
            _paintThumb(properties._lastMetrics.extentAfter,properties._lastMetrics.extentInside,properties._lastMetrics.extentBefore,size.height,canvas,size,_paintVerticalThumb);
            break;
        case lib7.AxisDirection.right:
            _paintThumb(properties._lastMetrics.extentBefore,properties._lastMetrics.extentInside,properties._lastMetrics.extentAfter,size.width,canvas,size,_paintHorizontalThumb);
            break;
        case lib7.AxisDirection.left:
            _paintThumb(properties._lastMetrics.extentAfter,properties._lastMetrics.extentInside,properties._lastMetrics.extentBefore,size.width,canvas,size,_paintHorizontalThumb);
            break;
    }
};
export var hitTest : (position : any) => boolean = (position : any) : boolean =>  {
    return null;
};
export var shouldRepaint : (old : ScrollbarPainter) => boolean = (old : ScrollbarPainter) : boolean =>  {
    return properties.color != old.color || properties.textDirection != old.textDirection || properties.thickness != old.thickness || properties.fadeoutOpacityAnimation != old.fadeoutOpacityAnimation || properties.mainAxisMargin != old.mainAxisMargin || properties.crossAxisMargin != old.crossAxisMargin || properties.radius != old.radius || properties.minLength != old.minLength;
};
export var shouldRebuildSemantics : (oldDelegate : lib4.CustomPainter) => boolean = (oldDelegate : lib4.CustomPainter) : boolean =>  {
    return false;
};
export namespace ScrollbarPainter {
    export type Constructors = lib3.ChangeNotifier.Constructors | 'ScrollbarPainter' | 'addListener';
    export type Interface = Omit<ScrollbarPainter, Constructors>;
}
@DartClass
@Implements(lib4.CustomPainter)
export class ScrollbarPainter extends lib3.ChangeNotifier implements lib4.CustomPainter.Interface {
    constructor(_namedArguments? : {color? : any,textDirection? : any,thickness? : any,fadeoutOpacityAnimation? : any,mainAxisMargin? : any,crossAxisMargin? : any,radius? : any,minLength? : any,minOverscrollLength? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScrollbarPainter(_namedArguments? : {color? : any,textDirection? : any,thickness? : any,fadeoutOpacityAnimation? : any,mainAxisMargin? : any,crossAxisMargin? : any,radius? : any,minLength? : any,minOverscrollLength? : any}) {
        let {color,textDirection,thickness,fadeoutOpacityAnimation,mainAxisMargin,crossAxisMargin,radius,minLength,minOverscrollLength} = Object.assign({
            "mainAxisMargin" : 0.0,
            "crossAxisMargin" : 0.0,
            "minLength" : properties._kMinThumbExtent,
            "minOverscrollLength" : properties._kMinThumbExtent}, _namedArguments );
        this.assert = assert;
        this.color = color;
        this.textDirection = textDirection;
        this.thickness = thickness;
        this.fadeoutOpacityAnimation = fadeoutOpacityAnimation;
        this.mainAxisMargin = mainAxisMargin;
        this.crossAxisMargin = crossAxisMargin;
        this.radius = radius;
        this.minLength = minLength;
        this.minOverscrollLength = minOverscrollLength;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    @namedConstructor
    addListener(notifyListeners : any) {
    }
    static addListener : new(notifyListeners : any) => ScrollbarPainter;

}

export class properties {
    private static __$_kMinThumbExtent : double;
    static get _kMinThumbExtent() : double { 
        if (this.__$_kMinThumbExtent===undefined) {
            this.__$_kMinThumbExtent = 18.0;
        }
        return this.__$_kMinThumbExtent;
    }
    static set _kMinThumbExtent(__$value : double)  { 
        this.__$_kMinThumbExtent = __$value;
    }

    private static __$color : any;
    static get color() : any { 
        return this.__$color;
    }
    static set color(__$value : any)  { 
        this.__$color = __$value;
    }

    private static __$textDirection : any;
    static get textDirection() : any { 
        return this.__$textDirection;
    }
    static set textDirection(__$value : any)  { 
        this.__$textDirection = __$value;
    }

    private static __$thickness : double;
    static get thickness() : double { 
        return this.__$thickness;
    }
    static set thickness(__$value : double)  { 
        this.__$thickness = __$value;
    }

    private static __$fadeoutOpacityAnimation : lib5.Animation<double>;
    static get fadeoutOpacityAnimation() : lib5.Animation<double> { 
        return this.__$fadeoutOpacityAnimation;
    }
    static set fadeoutOpacityAnimation(__$value : lib5.Animation<double>)  { 
        this.__$fadeoutOpacityAnimation = __$value;
    }

    private static __$mainAxisMargin : double;
    static get mainAxisMargin() : double { 
        return this.__$mainAxisMargin;
    }
    static set mainAxisMargin(__$value : double)  { 
        this.__$mainAxisMargin = __$value;
    }

    private static __$crossAxisMargin : double;
    static get crossAxisMargin() : double { 
        return this.__$crossAxisMargin;
    }
    static set crossAxisMargin(__$value : double)  { 
        this.__$crossAxisMargin = __$value;
    }

    private static __$radius : any;
    static get radius() : any { 
        return this.__$radius;
    }
    static set radius(__$value : any)  { 
        this.__$radius = __$value;
    }

    private static __$minLength : double;
    static get minLength() : double { 
        return this.__$minLength;
    }
    static set minLength(__$value : double)  { 
        this.__$minLength = __$value;
    }

    private static __$minOverscrollLength : double;
    static get minOverscrollLength() : double { 
        return this.__$minOverscrollLength;
    }
    static set minOverscrollLength(__$value : double)  { 
        this.__$minOverscrollLength = __$value;
    }

    private static __$_lastMetrics : lib6.ScrollMetrics;
    static get _lastMetrics() : lib6.ScrollMetrics { 
        return this.__$_lastMetrics;
    }
    static set _lastMetrics(__$value : lib6.ScrollMetrics)  { 
        this.__$_lastMetrics = __$value;
    }

    private static __$_lastAxisDirection : lib7.AxisDirection;
    static get _lastAxisDirection() : lib7.AxisDirection { 
        return this.__$_lastAxisDirection;
    }
    static set _lastAxisDirection(__$value : lib7.AxisDirection)  { 
        this.__$_lastAxisDirection = __$value;
    }

    static get _paint() : any {
        return ((_) : any =>  {
            {
                _.color = properties.color.withOpacity(op(Op.TIMES,properties.color.opacity,properties.fadeoutOpacityAnimation.value));
                return _;
            }
        })(Paint());
    }
    static get semanticsBuilder() : (size : any) => core.DartList<lib4.CustomPainterSemantics> {
        return null;
    }
}
