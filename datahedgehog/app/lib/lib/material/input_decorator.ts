/** Library asset:datahedgehog_monitor/lib/lib/material/input_decorator.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_position";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib7 from "./input_border";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/widgets/drag_target";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/rendering/custom_paint";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/widgets/transitions";
import * as lib18 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/rendering/paragraph";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/rendering/proxy_box";
import * as lib25 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as math from "@dart2ts/dart/math";
import * as lib28 from "@dart2ts.packages/flutter/lib/src/rendering/view";
import * as lib29 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib30 from "@dart2ts.packages/flutter/lib/src/widgets/implicit_animations";
import * as lib31 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib32 from "./theme";
import * as lib33 from "./theme_data";
import * as lib34 from "./colors";
import * as lib35 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme_data";
import * as lib36 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme";
import * as lib37 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";

export namespace _InputBorderGap {
    export type Constructors = lib4.ChangeNotifier.Constructors | '_InputBorderGap';
    export type Interface = Omit<_InputBorderGap, Constructors>;
}
@DartClass
export class _InputBorderGap extends lib4.ChangeNotifier {
    _start : double;

    get start() : double {
        return this._start;
    }
    set start(value : double) {
        if (value != this._start) {
            this._start = value;
            lib5.notifyListeners();
        }
    }
    _extent : double;

    get extent() : double {
        return this._extent;
    }
    set extent(value : double) {
        if (value != this._extent) {
            this._extent = value;
            lib5.notifyListeners();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : _InputBorderGap = other;
        return typedOther.start == this.start && typedOther.extent == this.extent;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.start,this.extent);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _InputBorderGap() {
        this._extent = 0.0;
    }
}

export namespace _InputBorderTween {
    export type Constructors = lib6.Tween.Constructors | '_InputBorderTween';
    export type Interface = Omit<_InputBorderTween, Constructors>;
}
@DartClass
export class _InputBorderTween extends lib6.Tween<lib7.InputBorder> {
    constructor(_namedArguments? : {begin? : lib7.InputBorder,end? : lib7.InputBorder}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _InputBorderTween(_namedArguments? : {begin? : lib7.InputBorder,end? : lib7.InputBorder}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        super.Tween({
            begin : begin,end : end});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : lib7.InputBorder {
        return lib9.ShapeBorder.lerp(this.begin,lib8.end,t);
    }
}

export namespace _InputBorderPainter {
    export type Constructors = lib10.CustomPainter.Constructors | '_InputBorderPainter';
    export type Interface = Omit<_InputBorderPainter, Constructors>;
}
@DartClass
export class _InputBorderPainter extends lib10.CustomPainter {
    constructor(_namedArguments? : {repaint? : lib4.Listenable,borderAnimation? : lib11.Animation<double>,border? : _InputBorderTween,gapAnimation? : lib11.Animation<double>,gap? : _InputBorderGap,textDirection? : any,fillColor? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _InputBorderPainter(_namedArguments? : {repaint? : lib4.Listenable,borderAnimation? : lib11.Animation<double>,border? : _InputBorderTween,gapAnimation? : lib11.Animation<double>,gap? : _InputBorderGap,textDirection? : any,fillColor? : any}) {
        let {repaint,borderAnimation,border,gapAnimation,gap,textDirection,fillColor} = Object.assign({
        }, _namedArguments );
        super.CustomPainter({
            repaint : repaint});
        this.borderAnimation = borderAnimation;
        this.border = border;
        this.gapAnimation = gapAnimation;
        this.gap = gap;
        this.textDirection = textDirection;
        this.fillColor = fillColor;
    }
    borderAnimation : lib11.Animation<double>;

    border : _InputBorderTween;

    gapAnimation : lib11.Animation<double>;

    gap : _InputBorderGap;

    textDirection : any;

    fillColor : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,size : any) : any {
        let borderValue : lib7.InputBorder = this.border.evaluate(this.borderAnimation);
        let canvasRect : any = op(Op.BITAND,Offset.zero,size);
        if (op(Op.GT,this.fillColor.alpha,0)) {
            canvas.drawPath(borderValue.getOuterPath(canvasRect,{
                textDirection : this.textDirection}),((_) : any =>  {
                {
                    _.color = this.fillColor;
                    _.style = PaintingStyle.fill;
                    return _;
                }
            })(Paint()));
        }
        borderValue.paint(canvas,canvasRect,{
            gapStart : this.gap.start,gapExtent : this.gap.extent,gapPercentage : this.gapAnimation.value,textDirection : this.textDirection});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRepaint(oldPainter : _InputBorderPainter) : boolean {
        return this.borderAnimation != oldPainter.borderAnimation || this.gapAnimation != oldPainter.gapAnimation || this.border != oldPainter.border || this.gap != oldPainter.gap || this.textDirection != oldPainter.textDirection;
    }
}

export namespace _BorderContainer {
    export type Constructors = lib12.StatefulWidget.Constructors | '_BorderContainer';
    export type Interface = Omit<_BorderContainer, Constructors>;
}
@DartClass
export class _BorderContainer extends lib12.StatefulWidget {
    constructor(_namedArguments? : {key? : lib13.Key,border? : lib7.InputBorder,gap? : _InputBorderGap,gapAnimation? : lib11.Animation<double>,fillColor? : any,child? : lib12.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _BorderContainer(_namedArguments? : {key? : lib13.Key,border? : lib7.InputBorder,gap? : _InputBorderGap,gapAnimation? : lib11.Animation<double>,fillColor? : any,child? : lib12.Widget}) {
        let {key,border,gap,gapAnimation,fillColor,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.border = border;
        this.gap = gap;
        this.gapAnimation = gapAnimation;
        this.fillColor = fillColor;
        this.child = child;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    border : lib7.InputBorder;

    gap : _InputBorderGap;

    gapAnimation : lib11.Animation<double>;

    fillColor : any;

    child : lib12.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _BorderContainerState {
        return _BorderContainerState();
    }
}

export namespace _BorderContainerState {
    export type Constructors = '_BorderContainerState';
    export type Interface = Omit<_BorderContainerState, Constructors>;
}
@DartClass
@With(any)
export class _BorderContainerState extends any implements any.Interface {
    _controller : lib14.AnimationController;

    _borderAnimation : lib11.Animation<double>;

    _border : _InputBorderTween;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._controller = lib14.AnimationController({
            duration : properties._kTransitionDuration,vsync : this});
        this._borderAnimation = lib15.CurvedAnimation({
            parent : this._controller,curve : properties._kTransitionCurve});
        this._border = _InputBorderTween({
            begin : widget.border,end : widget.border});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._controller.dispose();
        super.dispose();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : _BorderContainer) : any {
        super.didUpdateWidget(oldWidget);
        if (widget.border != oldWidget.border) {
            this._border = _InputBorderTween({
                begin : oldWidget.border,end : widget.border});
            ((_) : lib14.AnimationController =>  {
                {
                    _.value = 0.0;
                    forward();
                    return _;
                }
            })(this._controller);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib12.BuildContext) : lib12.Widget {
        return lib16.CustomPaint({
            foregroundPainter : _InputBorderPainter({
                repaint : lib4.Listenable.merge(new core.DartList.literal<lib4.Listenable>(this._borderAnimation,widget.gap)),borderAnimation : this._borderAnimation,border : this._border,gapAnimation : widget.gapAnimation,gap : widget.gap,textDirection : lib16.Directionality.of(context),fillColor : widget.fillColor}),child : widget.child});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _BorderContainerState() {
    }
}

export namespace _Shaker {
    export type Constructors = lib17.AnimatedWidget.Constructors | '_Shaker';
    export type Interface = Omit<_Shaker, Constructors>;
}
@DartClass
export class _Shaker extends lib17.AnimatedWidget {
    constructor(_namedArguments? : {key? : lib13.Key,animation? : lib11.Animation<double>,child? : lib12.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _Shaker(_namedArguments? : {key? : lib13.Key,animation? : lib11.Animation<double>,child? : lib12.Widget}) {
        let {key,animation,child} = Object.assign({
        }, _namedArguments );
        super.AnimatedWidget({
            key : key,listenable : animation});
        this.child = child;
    }
    child : lib12.Widget;

    get animation() : lib11.Animation<double> {
        return this.listenable;
    }
    get translateX() : double {
        let shakeDelta : double = 4.0;
        let t : double = this.animation.value;
        if (t <= 0.25) return -t * shakeDelta;else if (t < 0.75) return (t - 0.5) * shakeDelta;else return (1.0 - t) * 4.0 * shakeDelta;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib12.BuildContext) : lib12.Widget {
        return lib16.Transform({
            transform : lib18.Matrix4.translationValues(this.translateX,0.0,0.0),child : this.child});
    }
}

export namespace _HelperError {
    export type Constructors = lib12.StatefulWidget.Constructors | '_HelperError';
    export type Interface = Omit<_HelperError, Constructors>;
}
@DartClass
export class _HelperError extends lib12.StatefulWidget {
    constructor(_namedArguments? : {key? : lib13.Key,textAlign? : any,helperText? : string,helperStyle? : lib19.TextStyle,errorText? : string,errorStyle? : lib19.TextStyle,errorMaxLines? : number}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _HelperError(_namedArguments? : {key? : lib13.Key,textAlign? : any,helperText? : string,helperStyle? : lib19.TextStyle,errorText? : string,errorStyle? : lib19.TextStyle,errorMaxLines? : number}) {
        let {key,textAlign,helperText,helperStyle,errorText,errorStyle,errorMaxLines} = Object.assign({
        }, _namedArguments );
        super.StatefulWidget({
            key : key});
        this.textAlign = textAlign;
        this.helperText = helperText;
        this.helperStyle = helperStyle;
        this.errorText = errorText;
        this.errorStyle = errorStyle;
        this.errorMaxLines = errorMaxLines;
    }
    textAlign : any;

    helperText : string;

    helperStyle : lib19.TextStyle;

    errorText : string;

    errorStyle : lib19.TextStyle;

    errorMaxLines : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _HelperErrorState {
        return _HelperErrorState();
    }
}

export namespace _HelperErrorState {
    export type Constructors = '_HelperErrorState';
    export type Interface = Omit<_HelperErrorState, Constructors>;
}
@DartClass
@With(any)
export class _HelperErrorState extends any implements any.Interface {
    private static __$empty : lib12.Widget;
    static get empty() : lib12.Widget { 
        if (this.__$empty===undefined) {
            this.__$empty = lib16.SizedBox();
        }
        return this.__$empty;
    }

    _controller : lib14.AnimationController;

    _helper : lib12.Widget;

    _error : lib12.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._controller = lib14.AnimationController({
            duration : properties._kTransitionDuration,vsync : this});
        if (widget.errorText != null) {
            this._error = this._buildError();
            this._controller.value = 1.0;
        }else if (widget.helperText != null) {
            this._helper = this._buildHelper();
        }
        this._controller.addListener(this._handleChange.bind(this));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._controller.dispose();
        super.dispose();
    }
    _handleChange() : any {
        setState(() =>  {
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(old : _HelperError) : any {
        super.didUpdateWidget(old);
        let newErrorText : string = widget.errorText;
        let newHelperText : string = widget.helperText;
        let oldErrorText : string = old.errorText;
        let oldHelperText : string = old.helperText;
        let errorTextStateChanged : boolean = (newErrorText != null) != (oldErrorText != null);
        let helperTextStateChanged : boolean = newErrorText == null && (newHelperText != null) != (oldHelperText != null);
        if (errorTextStateChanged || helperTextStateChanged) {
            if (newErrorText != null) {
                this._error = this._buildError();
                this._controller.forward();
            }else if (newHelperText != null) {
                this._helper = this._buildHelper();
                this._controller.reverse();
            }else {
                this._controller.reverse();
            }
        }
    }
    _buildHelper() : lib12.Widget {
        /* TODO (AssertStatementImpl) : assert (widget.helperText != null); */;
        return lib16.Semantics({
            container : true,child : lib16.Opacity({
                opacity : 1.0 - this._controller.value,child : lib21.Text(widget.helperText,{
                    style : widget.helperStyle,textAlign : widget.textAlign,overflow : lib20.TextOverflow.ellipsis})})});
    }
    _buildError() : lib12.Widget {
        /* TODO (AssertStatementImpl) : assert (widget.errorText != null); */;
        return lib16.Semantics({
            container : true,liveRegion : true,child : lib16.Opacity({
                opacity : this._controller.value,child : lib16.FractionalTranslation({
                    translation : lib6.Tween({
                        begin : new bare.createInstance(any,null,0.0,-0.25),end : new bare.createInstance(any,null,0.0,0.0)}).evaluate(this._controller.view),child : lib21.Text(widget.errorText,{
                        style : widget.errorStyle,textAlign : widget.textAlign,overflow : lib20.TextOverflow.ellipsis,maxLines : widget.errorMaxLines})})})});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib12.BuildContext) : lib12.Widget {
        if (this._controller.isDismissed) {
            this._error = null;
            if (widget.helperText != null) {
                return this._helper = this._buildHelper();
            }else {
                this._helper = null;
                return _HelperErrorState.empty;
            }
        }
        if (this._controller.isCompleted) {
            this._helper = null;
            if (widget.errorText != null) {
                return this._error = this._buildError();
            }else {
                this._error = null;
                return _HelperErrorState.empty;
            }
        }
        if (op(Op.EQUALS,this._helper,null) && widget.errorText != null) return this._buildError();
        if (op(Op.EQUALS,this._error,null) && widget.helperText != null) return this._buildHelper();
        if (widget.errorText != null) {
            return lib16.Stack({
                children : new core.DartList.literal<lib12.Widget>(lib16.Opacity({
                    opacity : 1.0 - this._controller.value,child : this._helper}),this._buildError())});
        }
        if (widget.helperText != null) {
            return lib16.Stack({
                children : new core.DartList.literal<lib12.Widget>(this._buildHelper(),lib16.Opacity({
                    opacity : this._controller.value,child : this._error}))});
        }
        return _HelperErrorState.empty;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _HelperErrorState() {
    }
}

export enum _DecorationSlot {
    icon,
    input,
    label,
    hint,
    prefix,
    suffix,
    prefixIcon,
    suffixIcon,
    helperError,
    counter,
    container
}

export namespace _Decoration {
    export type Constructors = '_Decoration';
    export type Interface = Omit<_Decoration, Constructors>;
}
@DartClass
export class _Decoration {
    constructor(_namedArguments? : {contentPadding? : lib22.EdgeInsetsGeometry,isCollapsed? : boolean,floatingLabelHeight? : double,floatingLabelProgress? : double,border? : lib7.InputBorder,borderGap? : _InputBorderGap,icon? : lib12.Widget,input? : lib12.Widget,label? : lib12.Widget,hint? : lib12.Widget,prefix? : lib12.Widget,suffix? : lib12.Widget,prefixIcon? : lib12.Widget,suffixIcon? : lib12.Widget,helperError? : lib12.Widget,counter? : lib12.Widget,container? : lib12.Widget,alignLabelWithHint? : boolean}) {
    }
    @defaultConstructor
    _Decoration(_namedArguments? : {contentPadding? : lib22.EdgeInsetsGeometry,isCollapsed? : boolean,floatingLabelHeight? : double,floatingLabelProgress? : double,border? : lib7.InputBorder,borderGap? : _InputBorderGap,icon? : lib12.Widget,input? : lib12.Widget,label? : lib12.Widget,hint? : lib12.Widget,prefix? : lib12.Widget,suffix? : lib12.Widget,prefixIcon? : lib12.Widget,suffixIcon? : lib12.Widget,helperError? : lib12.Widget,counter? : lib12.Widget,container? : lib12.Widget,alignLabelWithHint? : boolean}) {
        let {contentPadding,isCollapsed,floatingLabelHeight,floatingLabelProgress,border,borderGap,icon,input,label,hint,prefix,suffix,prefixIcon,suffixIcon,helperError,counter,container,alignLabelWithHint} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.contentPadding = contentPadding;
        this.isCollapsed = isCollapsed;
        this.floatingLabelHeight = floatingLabelHeight;
        this.floatingLabelProgress = floatingLabelProgress;
        this.border = border;
        this.borderGap = borderGap;
        this.icon = icon;
        this.input = input;
        this.label = label;
        this.hint = hint;
        this.prefix = prefix;
        this.suffix = suffix;
        this.prefixIcon = prefixIcon;
        this.suffixIcon = suffixIcon;
        this.helperError = helperError;
        this.counter = counter;
        this.container = container;
        this.alignLabelWithHint = alignLabelWithHint;
    }
     : any;

     : any;

     : any;

     : any;

    contentPadding : lib22.EdgeInsetsGeometry;

    isCollapsed : boolean;

    floatingLabelHeight : double;

    floatingLabelProgress : double;

    border : lib7.InputBorder;

    borderGap : _InputBorderGap;

    alignLabelWithHint : boolean;

    icon : lib12.Widget;

    input : lib12.Widget;

    label : lib12.Widget;

    hint : lib12.Widget;

    prefix : lib12.Widget;

    suffix : lib12.Widget;

    prefixIcon : lib12.Widget;

    suffixIcon : lib12.Widget;

    helperError : lib12.Widget;

    counter : lib12.Widget;

    container : lib12.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : _Decoration = other;
        return op(Op.EQUALS,typedOther.contentPadding,this.contentPadding) && typedOther.floatingLabelHeight == this.floatingLabelHeight && typedOther.floatingLabelProgress == this.floatingLabelProgress && op(Op.EQUALS,typedOther.border,this.border) && op(Op.EQUALS,typedOther.borderGap,this.borderGap) && op(Op.EQUALS,typedOther.icon,this.icon) && op(Op.EQUALS,typedOther.input,this.input) && op(Op.EQUALS,typedOther.label,this.label) && op(Op.EQUALS,typedOther.hint,this.hint) && op(Op.EQUALS,typedOther.prefix,this.prefix) && op(Op.EQUALS,typedOther.suffix,this.suffix) && op(Op.EQUALS,typedOther.prefixIcon,this.prefixIcon) && op(Op.EQUALS,typedOther.suffixIcon,this.suffixIcon) && op(Op.EQUALS,typedOther.helperError,this.helperError) && op(Op.EQUALS,typedOther.counter,this.counter) && op(Op.EQUALS,typedOther.container,this.container) && typedOther.alignLabelWithHint == this.alignLabelWithHint;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.contentPadding,this.floatingLabelHeight,this.floatingLabelProgress,this.border,this.borderGap,this.icon,this.input,this.label,this.hint,this.prefix,this.suffix,this.prefixIcon,this.suffixIcon,this.helperError,this.counter,this.container,this.alignLabelWithHint);
    }
}

export namespace _RenderDecorationLayout {
    export type Constructors = '_RenderDecorationLayout';
    export type Interface = Omit<_RenderDecorationLayout, Constructors>;
}
@DartClass
export class _RenderDecorationLayout {
    constructor(_namedArguments? : {boxToBaseline? : core.DartMap<any,double>,inputBaseline? : double,outlineBaseline? : double,subtextBaseline? : double,containerHeight? : double,subtextHeight? : double}) {
    }
    @defaultConstructor
    _RenderDecorationLayout(_namedArguments? : {boxToBaseline? : core.DartMap<any,double>,inputBaseline? : double,outlineBaseline? : double,subtextBaseline? : double,containerHeight? : double,subtextHeight? : double}) {
        let {boxToBaseline,inputBaseline,outlineBaseline,subtextBaseline,containerHeight,subtextHeight} = Object.assign({
        }, _namedArguments );
        this.boxToBaseline = boxToBaseline;
        this.inputBaseline = inputBaseline;
        this.outlineBaseline = outlineBaseline;
        this.subtextBaseline = subtextBaseline;
        this.containerHeight = containerHeight;
        this.subtextHeight = subtextHeight;
    }
    boxToBaseline : core.DartMap<any,double>;

    inputBaseline : double;

    outlineBaseline : double;

    subtextBaseline : double;

    containerHeight : double;

    subtextHeight : double;

}

export namespace _RenderDecoration {
    export type Constructors = '_RenderDecoration';
    export type Interface = Omit<_RenderDecoration, Constructors>;
}
@DartClass
export class _RenderDecoration extends any {
    constructor(_namedArguments? : {decoration? : _Decoration,textDirection? : any,textBaseline? : any,isFocused? : boolean}) {
    }
    @defaultConstructor
    _RenderDecoration(_namedArguments? : {decoration? : _Decoration,textDirection? : any,textBaseline? : any,isFocused? : boolean}) {
        let {decoration,textDirection,textBaseline,isFocused} = Object.assign({
        }, _namedArguments );
        this._decoration = this.decoration;
        this._textDirection = this.textDirection;
        this._textBaseline = this.textBaseline;
        this._isFocused = this.isFocused;
        this.slotToChild = new core.DartMap.literal([
        ]);
        this.childToSlot = new core.DartMap.literal([
        ]);
        this.assert = assert;
    }
     : any;

     : any;

     : any;

    _decoration;
    _textDirection;
    _textBaseline;
    _isFocused;

    slotToChild : core.DartMap<_DecorationSlot,any>;

    childToSlot : core.DartMap<any,_DecorationSlot>;

    _updateChild(oldChild : any,newChild : any,slot : _DecorationSlot) : any {
        if (oldChild != null) {
            dropChild(oldChild);
            this.childToSlot.remove(oldChild);
            this.slotToChild.remove(slot);
        }
        if (newChild != null) {
            this.childToSlot.set(newChild,slot);
            this.slotToChild.set(slot,newChild);
            adoptChild(newChild);
        }
        return newChild;
    }
    _icon : any;

    get icon() : any {
        return this._icon;
    }
    set icon(value : any) {
        this._icon = this._updateChild(this._icon,value,_DecorationSlot.icon);
    }
    _input : any;

    get input() : any {
        return this._input;
    }
    set input(value : any) {
        this._input = this._updateChild(this._input,value,_DecorationSlot.input);
    }
    _label : any;

    get label() : any {
        return this._label;
    }
    set label(value : any) {
        this._label = this._updateChild(this._label,value,_DecorationSlot.label);
    }
    _hint : any;

    get hint() : any {
        return this._hint;
    }
    set hint(value : any) {
        this._hint = this._updateChild(this._hint,value,_DecorationSlot.hint);
    }
    _prefix : any;

    get prefix() : any {
        return this._prefix;
    }
    set prefix(value : any) {
        this._prefix = this._updateChild(this._prefix,value,_DecorationSlot.prefix);
    }
    _suffix : any;

    get suffix() : any {
        return this._suffix;
    }
    set suffix(value : any) {
        this._suffix = this._updateChild(this._suffix,value,_DecorationSlot.suffix);
    }
    _prefixIcon : any;

    get prefixIcon() : any {
        return this._prefixIcon;
    }
    set prefixIcon(value : any) {
        this._prefixIcon = this._updateChild(this._prefixIcon,value,_DecorationSlot.prefixIcon);
    }
    _suffixIcon : any;

    get suffixIcon() : any {
        return this._suffixIcon;
    }
    set suffixIcon(value : any) {
        this._suffixIcon = this._updateChild(this._suffixIcon,value,_DecorationSlot.suffixIcon);
    }
    _helperError : any;

    get helperError() : any {
        return this._helperError;
    }
    set helperError(value : any) {
        this._helperError = this._updateChild(this._helperError,value,_DecorationSlot.helperError);
    }
    _counter : any;

    get counter() : any {
        return this._counter;
    }
    set counter(value : any) {
        this._counter = this._updateChild(this._counter,value,_DecorationSlot.counter);
    }
    _container : any;

    get container() : any {
        return this._container;
    }
    set container(value : any) {
        this._container = this._updateChild(this._container,value,_DecorationSlot.container);
    }
    get _children() : core.DartIterable<any> { 
        return core.iter<any>(()=>(function*()  {
            if (this.icon != null) yield this.icon;
            if (this.input != null) yield this.input;
            if (this.prefixIcon != null) yield this.prefixIcon;
            if (this.suffixIcon != null) yield this.suffixIcon;
            if (this.prefix != null) yield this.prefix;
            if (this.suffix != null) yield this.suffix;
            if (this.label != null) yield this.label;
            if (this.hint != null) yield this.hint;
            if (this.helperError != null) yield this.helperError;
            if (this.counter != null) yield this.counter;
            if (this.container != null) yield this.container;
        }).call(this));
    }

    get decoration() : _Decoration {
        return this._decoration;
    }
    _decoration : _Decoration;

    set decoration(value : _Decoration) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._decoration,value)) return;
        this._decoration = value;
        markNeedsLayout();
    }
    get textDirection() : any {
        return this._textDirection;
    }
    _textDirection : any;

    set textDirection(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._textDirection,value)) return;
        this._textDirection = value;
        markNeedsLayout();
    }
    get textBaseline() : any {
        return this._textBaseline;
    }
    _textBaseline : any;

    set textBaseline(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._textBaseline,value)) return;
        this._textBaseline = value;
        markNeedsLayout();
    }
    get isFocused() : boolean {
        return this._isFocused;
    }
    _isFocused : boolean;

    set isFocused(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._isFocused,value)) return;
        this._isFocused = value;
        markNeedsSemanticsUpdate();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    attach(owner : lib23.PipelineOwner) : any {
        super.attach(owner);
        for(let child of this._children) child.attach(owner);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    detach() : any {
        super.detach();
        for(let child of this._children) child.detach();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    redepthChildren() : any {
        this._children.forEach(redepthChild);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : (child : any) => any) : any {
        this._children.forEach(visitor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildrenForSemantics(visitor : (child : any) => any) : any {
        if (this.icon != null) visitor(this.icon);
        if (this.prefix != null) visitor(this.prefix);
        if (this.prefixIcon != null) visitor(this.prefixIcon);
        if (this.isFocused && this.hint != null) {
            let typedHint : lib24.RenderProxyBox = this.hint;
            visitor(typedHint.child);
        }else if (!this.isFocused && this.label != null) visitor(this.label);
        if (this.input != null) visitor(this.input);
        if (this.suffixIcon != null) visitor(this.suffixIcon);
        if (this.suffix != null) visitor(this.suffix);
        if (this.container != null) visitor(this.container);
        if (this.helperError != null) visitor(this.helperError);
        if (this.counter != null) visitor(this.counter);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugDescribeChildren() : core.DartList<lib25.DiagnosticsNode> {
        let value : core.DartList<lib25.DiagnosticsNode> = new core.DartList.literal<lib25.DiagnosticsNode>();
        var add : (child : any,name : string) => any = (child : any,name : string) : any =>  {
            if (child != null) value.add(child.toDiagnosticsNode({
                name : name}));
        };
        add(this.icon,'icon');
        add(this.input,'input');
        add(this.label,'label');
        add(this.hint,'hint');
        add(this.prefix,'prefix');
        add(this.suffix,'suffix');
        add(this.prefixIcon,'prefixIcon');
        add(this.suffixIcon,'suffixIcon');
        add(this.helperError,'helperError');
        add(this.counter,'counter');
        add(this.container,'container');
        return value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sizedByParent() : boolean {
        return false;
    }
    static _minWidth(box : any,height : double) : double {
        return op(Op.EQUALS,box,null) ? 0.0 : box.getMinIntrinsicWidth(height);
    }
    static _maxWidth(box : any,height : double) : double {
        return op(Op.EQUALS,box,null) ? 0.0 : box.getMaxIntrinsicWidth(height);
    }
    static _minHeight(box : any,width : double) : double {
        return op(Op.EQUALS,box,null) ? 0.0 : box.getMinIntrinsicHeight(width);
    }
    static _boxSize(box : any) : any {
        return op(Op.EQUALS,box,null) ? Size.zero : box.size;
    }
    static _boxParentData(box : any) : lib26.BoxParentData {
        return box.parentData;
    }
    get contentPadding() : lib22.EdgeInsets {
        return this.decoration.contentPadding;
    }
    _layout(layoutConstraints : lib26.BoxConstraints) : _RenderDecorationLayout {
        let boxToBaseline : core.DartMap<any,double> = new core.DartMap.literal([
        ]);
        let boxConstraints : lib26.BoxConstraints = layoutConstraints.loosen();
        let aboveBaseline : double = 0.0;
        let belowBaseline : double = 0.0;
        var layoutLineBox : (box : any) => any = (box : any) : any =>  {
            if (op(Op.EQUALS,box,null)) return;
            box.layout(boxConstraints,{
                parentUsesSize : true});
            let baseline : double = box.getDistanceToBaseline(this.textBaseline);
            /* TODO (AssertStatementImpl) : assert (baseline != null && baseline >= 0.0); */;
            boxToBaseline.set(box,baseline);
            aboveBaseline = math.max(baseline,aboveBaseline);
            belowBaseline = math.max(op(Op.MINUS,box.size.height,baseline),belowBaseline);
        };
        layoutLineBox(this.prefix);
        layoutLineBox(this.suffix);
        if (this.icon != null) this.icon.layout(boxConstraints,{
            parentUsesSize : true});
        if (this.prefixIcon != null) this.prefixIcon.layout(boxConstraints,{
            parentUsesSize : true});
        if (this.suffixIcon != null) this.suffixIcon.layout(boxConstraints,{
            parentUsesSize : true});
        let inputWidth : double = math.max(0.0,op(Op.MINUS,constraints.maxWidth,(op(Op.PLUS,op(Op.PLUS,op(Op.PLUS,op(Op.PLUS,op(Op.PLUS,op(Op.PLUS,_RenderDecoration._boxSize(this.icon).width,this.contentPadding.left),_RenderDecoration._boxSize(this.prefixIcon).width),_RenderDecoration._boxSize(this.prefix).width),_RenderDecoration._boxSize(this.suffix).width),_RenderDecoration._boxSize(this.suffixIcon).width),this.contentPadding.right))));
        boxConstraints = boxConstraints.copyWith({
            maxWidth : inputWidth});
        if (this.label != null) {
            if (this.decoration.alignLabelWithHint) {
                layoutLineBox(this.label);
            }else {
                this.label.layout(boxConstraints,{
                    parentUsesSize : true});
            }
        }
        boxConstraints = boxConstraints.copyWith({
            minWidth : inputWidth});
        layoutLineBox(this.hint);
        layoutLineBox(this.input);
        let inputBaseline : double = this.contentPadding.top + aboveBaseline;
        let containerHeight : double = this.contentPadding.top + aboveBaseline + belowBaseline + this.contentPadding.bottom;
        if (this.label != null) {
            containerHeight += this.decoration.floatingLabelHeight;
            inputBaseline += this.decoration.floatingLabelHeight;
        }
        containerHeight = math.max(containerHeight,math.max(_RenderDecoration._boxSize(this.suffixIcon).height,_RenderDecoration._boxSize(this.prefixIcon).height));
        let outlineBaseline : double = aboveBaseline + (containerHeight - (2.0 + aboveBaseline + belowBaseline)) / 2.0;
        let subtextBaseline : double = 0.0;
        let subtextHeight : double = 0.0;
        if (this.helperError != null || this.counter != null) {
            boxConstraints = layoutConstraints.loosen();
            aboveBaseline = 0.0;
            belowBaseline = 0.0;
            layoutLineBox(this.counter);
            boxConstraints = boxConstraints.copyWith({
                maxWidth : math.max(0.0,boxConstraints.maxWidth - _RenderDecoration._boxSize(this.icon).width - _RenderDecoration._boxSize(this.counter).width - this.contentPadding.horizontal)});
            layoutLineBox(this.helperError);
            if (aboveBaseline + belowBaseline > 0.0) {
                let subtextGap : double = 8.0;
                subtextBaseline = containerHeight + subtextGap + aboveBaseline;
                subtextHeight = subtextGap + aboveBaseline + belowBaseline;
            }
        }
        return _RenderDecorationLayout({
            boxToBaseline : boxToBaseline,containerHeight : containerHeight,inputBaseline : inputBaseline,outlineBaseline : outlineBaseline,subtextBaseline : subtextBaseline,subtextHeight : subtextHeight});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicWidth(height : double) : double {
        return _RenderDecoration._minWidth(this.icon,height) + this.contentPadding.left + _RenderDecoration._minWidth(this.prefixIcon,height) + _RenderDecoration._minWidth(this.prefix,height) + math.max(_RenderDecoration._minWidth(this.input,height),_RenderDecoration._minWidth(this.hint,height)) + _RenderDecoration._minWidth(this.suffix,height) + _RenderDecoration._minWidth(this.suffixIcon,height) + this.contentPadding.right;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        return _RenderDecoration._maxWidth(this.icon,height) + this.contentPadding.left + _RenderDecoration._maxWidth(this.prefixIcon,height) + _RenderDecoration._maxWidth(this.prefix,height) + math.max(_RenderDecoration._maxWidth(this.input,height),_RenderDecoration._maxWidth(this.hint,height)) + _RenderDecoration._maxWidth(this.suffix,height) + _RenderDecoration._maxWidth(this.suffixIcon,height) + this.contentPadding.right;
    }
    _lineHeight(width : double,boxes : core.DartList<any>) : double {
        let height : double = 0.0;
        for(let box of boxes) {
            if (op(Op.EQUALS,box,null)) continue;
            height = math.max(_RenderDecoration._minHeight(box,width),height);
        }
        return height;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicHeight(width : double) : double {
        let subtextHeight : double = this._lineHeight(width,new core.DartList.literal<any>(this.helperError,this.counter));
        if (subtextHeight > 0.0) subtextHeight += 8.0;
        return this.contentPadding.top + (op(Op.EQUALS,this.label,null) ? 0.0 : this.decoration.floatingLabelHeight) + this._lineHeight(width,new core.DartList.literal<any>(this.prefix,this.input,this.suffix)) + subtextHeight + this.contentPadding.bottom;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicHeight(width : double) : double {
        return this.computeMinIntrinsicHeight(width);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDistanceToActualBaseline(baseline : any) : double {
        /* TODO (AssertStatementImpl) : assert (false, 'not implemented'); */;
        return 0.0;
    }
    _labelTransform : lib18.Matrix4;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        this._labelTransform = null;
        let layout : _RenderDecorationLayout = this._layout(constraints);
        let overallWidth : double = constraints.maxWidth;
        let overallHeight : double = layout.containerHeight + layout.subtextHeight;
        if (this.container != null) {
            let containerConstraints : lib26.BoxConstraints = lib26.BoxConstraints.tightFor({
                height : layout.containerHeight,width : overallWidth - _RenderDecoration._boxSize(this.icon).width});
            this.container.layout(containerConstraints,{
                parentUsesSize : true});
            let x : double;
            switch (this.textDirection) {
                case TextDirection.rtl:
                    x = 0.0;
                    break;
                case TextDirection.ltr:
                    x = _RenderDecoration._boxSize(this.icon).width;
                    break;
            }
            _RenderDecoration._boxParentData(this.container).offset = Offset(x,0.0);
        }
        let height : double;
        var centerLayout : (box : any,x : double) => double = (box : any,x : double) : double =>  {
            _RenderDecoration._boxParentData(box).offset = Offset(x,(height - box.size.height) / 2.0);
            return box.size.width;
        };
        let baseline : double;
        var baselineLayout : (box : any,x : double) => double = (box : any,x : double) : double =>  {
            _RenderDecoration._boxParentData(box).offset = Offset(x,baseline - layout.boxToBaseline.get(box));
            return box.size.width;
        };
        let left : double = this.contentPadding.left;
        let right : double = overallWidth - this.contentPadding.right;
        height = layout.containerHeight;
        baseline = this.decoration.isCollapsed || !this.decoration.border.isOutline ? layout.inputBaseline : layout.outlineBaseline;
        if (this.icon != null) {
            let x : double;
            switch (this.textDirection) {
                case TextDirection.rtl:
                    x = overallWidth - this.icon.size.width;
                    break;
                case TextDirection.ltr:
                    x = 0.0;
                    break;
            }
            centerLayout(this.icon,x);
        }
        switch (this.textDirection) {
            case TextDirection.rtl:
                {
                    let start : double = right - _RenderDecoration._boxSize(this.icon).width;
                    let end : double = left;
                    if (this.prefixIcon != null) {
                        start += this.contentPadding.left;
                        start -= centerLayout(this.prefixIcon,start - this.prefixIcon.size.width);
                    }
                    if (this.label != null) {
                        if (this.decoration.alignLabelWithHint) {
                            baselineLayout(this.label,start - this.label.size.width);
                        }else {
                            centerLayout(this.label,start - this.label.size.width);
                        }
                    }
                    if (this.prefix != null) start -= baselineLayout(this.prefix,start - this.prefix.size.width);
                    if (this.input != null) baselineLayout(this.input,start - this.input.size.width);
                    if (this.hint != null) baselineLayout(this.hint,start - this.hint.size.width);
                    if (this.suffixIcon != null) {
                        end -= this.contentPadding.left;
                        end += centerLayout(this.suffixIcon,end);
                    }
                    if (this.suffix != null) end += baselineLayout(this.suffix,end);
                    break;
                }
            case TextDirection.ltr:
                {
                    let start : double = left + _RenderDecoration._boxSize(this.icon).width;
                    let end : double = right;
                    if (this.prefixIcon != null) {
                        start -= this.contentPadding.left;
                        start += centerLayout(this.prefixIcon,start);
                    }
                    if (this.label != null) if (this.decoration.alignLabelWithHint) {
                        baselineLayout(this.label,start);
                    }else {
                        centerLayout(this.label,start);
                    }
                    if (this.prefix != null) start += baselineLayout(this.prefix,start);
                    if (this.input != null) baselineLayout(this.input,start);
                    if (this.hint != null) baselineLayout(this.hint,start);
                    if (this.suffixIcon != null) {
                        end += this.contentPadding.right;
                        end -= centerLayout(this.suffixIcon,end - this.suffixIcon.size.width);
                    }
                    if (this.suffix != null) end -= baselineLayout(this.suffix,end - this.suffix.size.width);
                    break;
                }
        }
        if (this.helperError != null || this.counter != null) {
            height = layout.subtextHeight;
            baseline = layout.subtextBaseline;
            switch (this.textDirection) {
                case TextDirection.rtl:
                    if (this.helperError != null) baselineLayout(this.helperError,right - this.helperError.size.width - _RenderDecoration._boxSize(this.icon).width);
                    if (this.counter != null) baselineLayout(this.counter,left);
                    break;
                case TextDirection.ltr:
                    if (this.helperError != null) baselineLayout(this.helperError,left + _RenderDecoration._boxSize(this.icon).width);
                    if (this.counter != null) baselineLayout(this.counter,right - this.counter.size.width);
                    break;
            }
        }
        if (this.label != null) {
            let labelX : double = _RenderDecoration._boxParentData(this.label).offset.dx;
            switch (this.textDirection) {
                case TextDirection.rtl:
                    this.decoration.borderGap.start = labelX + this.label.size.width;
                    break;
                case TextDirection.ltr:
                    this.decoration.borderGap.start = labelX - _RenderDecoration._boxSize(this.icon).width;
                    break;
            }
            this.decoration.borderGap.extent = op(Op.TIMES,this.label.size.width,0.75);
        }else {
            this.decoration.borderGap.start = null;
            this.decoration.borderGap.extent = 0.0;
        }
        lib28.properties.size = constraints.constrain(Size(overallWidth,overallHeight));
        /* TODO (AssertStatementImpl) : assert (size.width == constraints.constrainWidth(overallWidth)); */;
        /* TODO (AssertStatementImpl) : assert (size.height == constraints.constrainHeight(overallHeight)); */;
    }
    _paintLabel(context : lib23.PaintingContext,offset : any) : any {
        context.paintChild(this.label,offset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib23.PaintingContext,offset : any) : any {
        var doPaint : (child : any) => any = (child : any) : any =>  {
            if (child != null) context.paintChild(child,op(Op.PLUS,_RenderDecoration._boxParentData(child).offset,offset));
        };
        doPaint(this.container);
        if (this.label != null) {
            let labelOffset : any = _RenderDecoration._boxParentData(this.label).offset;
            let labelHeight : double = this.label.size.height;
            let t : double = this.decoration.floatingLabelProgress;
            let isOutlineBorder : boolean = this.decoration.border != null && this.decoration.border.isOutline;
            let floatingY : double = isOutlineBorder ? -labelHeight * 0.25 : this.contentPadding.top;
            let scale : double = lerpDouble(1.0,0.75,t);
            let dx : double;
            switch (this.textDirection) {
                case TextDirection.rtl:
                    dx = op(Op.PLUS,labelOffset.dx,op(Op.TIMES,this.label.size.width,(1.0 - scale)));
                    break;
                case TextDirection.ltr:
                    dx = labelOffset.dx;
                    break;
            }
            let dy : double = lerpDouble(0.0,floatingY - labelOffset.dy,t);
            this._labelTransform = ((_) : any =>  {
                {
                    translate(dx,op(Op.PLUS,labelOffset.dy,dy));
                    scale(scale);
                    return _;
                }
            })(lib18.Matrix4.identity());
            context.pushTransform(needsCompositing,offset,this._labelTransform,this._paintLabel.bind(this));
        }
        doPaint(this.icon);
        doPaint(this.prefix);
        doPaint(this.suffix);
        doPaint(this.prefixIcon);
        doPaint(this.suffixIcon);
        doPaint(this.hint);
        doPaint(this.input);
        doPaint(this.helperError);
        doPaint(this.counter);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestSelf(position : any) : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestChildren(result : lib29.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (position != null); */;
        for(let child of this._children) {
            if (child.hitTest(result,{
                position : op(Op.MINUS,position,_RenderDecoration._boxParentData(child).offset)})) return true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyPaintTransform(child : lib23.RenderObject,transform : lib18.Matrix4) : any {
        if (op(Op.EQUALS,child,this.label) && this._labelTransform != null) {
            let labelOffset : any = _RenderDecoration._boxParentData(this.label).offset;
            ((_) : lib18.Matrix4 =>  {
                {
                    _.multiply(this._labelTransform);
                    _.translate(op(Op.NEG,labelOffset.dx),op(Op.NEG,labelOffset.dy));
                    return _;
                }
            })(transform);
        }
        super.applyPaintTransform(child,transform);
    }
}

export namespace _RenderDecorationElement {
    export type Constructors = lib12.RenderObjectElement.Constructors | '_RenderDecorationElement';
    export type Interface = Omit<_RenderDecorationElement, Constructors>;
}
@DartClass
export class _RenderDecorationElement extends lib12.RenderObjectElement {
    constructor(widget : _Decorator) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RenderDecorationElement(widget : _Decorator) {
        this.slotToChild = new core.DartMap.literal([
        ]);
        this.childToSlot = new core.DartMap.literal([
        ]);
        super.RenderObjectElement(widget);
    }
    slotToChild : core.DartMap<_DecorationSlot,lib12.Element>;

    childToSlot : core.DartMap<lib12.Element,_DecorationSlot>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : _Decorator {
        return super.widget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get renderObject() : _RenderDecoration {
        return super.renderObject;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : (element : lib12.Element) => any) : any {
        this.slotToChild.values.forEach(visitor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forgetChild(child : lib12.Element) : any {
        /* TODO (AssertStatementImpl) : assert (slotToChild.values.contains(child)); */;
        /* TODO (AssertStatementImpl) : assert (childToSlot.keys.contains(child)); */;
        let slot : _DecorationSlot = this.childToSlot.get(child);
        this.childToSlot.remove(child);
        this.slotToChild.remove(slot);
    }
    _mountChild(widget : lib12.Widget,slot : _DecorationSlot) : any {
        let oldChild : lib12.Element = this.slotToChild.get(slot);
        let newChild : lib12.Element = this.updateChild(oldChild,widget,slot);
        if (oldChild != null) {
            this.slotToChild.remove(slot);
            this.childToSlot.remove(oldChild);
        }
        if (newChild != null) {
            this.slotToChild.set(slot,newChild);
            this.childToSlot.set(newChild,slot);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mount(parent : lib12.Element,newSlot : any) : any {
        super.mount(parent,newSlot);
        this._mountChild(this.widget.decoration.icon,_DecorationSlot.icon);
        this._mountChild(this.widget.decoration.input,_DecorationSlot.input);
        this._mountChild(this.widget.decoration.label,_DecorationSlot.label);
        this._mountChild(this.widget.decoration.hint,_DecorationSlot.hint);
        this._mountChild(this.widget.decoration.prefix,_DecorationSlot.prefix);
        this._mountChild(this.widget.decoration.suffix,_DecorationSlot.suffix);
        this._mountChild(this.widget.decoration.prefixIcon,_DecorationSlot.prefixIcon);
        this._mountChild(this.widget.decoration.suffixIcon,_DecorationSlot.suffixIcon);
        this._mountChild(this.widget.decoration.helperError,_DecorationSlot.helperError);
        this._mountChild(this.widget.decoration.counter,_DecorationSlot.counter);
        this._mountChild(this.widget.decoration.container,_DecorationSlot.container);
    }
    _updateChild(widget : lib12.Widget,slot : _DecorationSlot) : any {
        let oldChild : lib12.Element = this.slotToChild.get(slot);
        let newChild : lib12.Element = this.updateChild(oldChild,widget,slot);
        if (oldChild != null) {
            this.childToSlot.remove(oldChild);
            this.slotToChild.remove(slot);
        }
        if (newChild != null) {
            this.slotToChild.set(slot,newChild);
            this.childToSlot.set(newChild,slot);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    update(newWidget : _Decorator) : any {
        super.update(newWidget);
        /* TODO (AssertStatementImpl) : assert (widget == newWidget); */;
        this._updateChild(this.widget.decoration.icon,_DecorationSlot.icon);
        this._updateChild(this.widget.decoration.input,_DecorationSlot.input);
        this._updateChild(this.widget.decoration.label,_DecorationSlot.label);
        this._updateChild(this.widget.decoration.hint,_DecorationSlot.hint);
        this._updateChild(this.widget.decoration.prefix,_DecorationSlot.prefix);
        this._updateChild(this.widget.decoration.suffix,_DecorationSlot.suffix);
        this._updateChild(this.widget.decoration.prefixIcon,_DecorationSlot.prefixIcon);
        this._updateChild(this.widget.decoration.suffixIcon,_DecorationSlot.suffixIcon);
        this._updateChild(this.widget.decoration.helperError,_DecorationSlot.helperError);
        this._updateChild(this.widget.decoration.counter,_DecorationSlot.counter);
        this._updateChild(this.widget.decoration.container,_DecorationSlot.container);
    }
    _updateRenderObject(child : lib23.RenderObject,slot : _DecorationSlot) : any {
        switch (slot) {
            case _DecorationSlot.icon:
                this.renderObject.icon = child;
                break;
            case _DecorationSlot.input:
                this.renderObject.input = child;
                break;
            case _DecorationSlot.label:
                this.renderObject.label = child;
                break;
            case _DecorationSlot.hint:
                this.renderObject.hint = child;
                break;
            case _DecorationSlot.prefix:
                this.renderObject.prefix = child;
                break;
            case _DecorationSlot.suffix:
                this.renderObject.suffix = child;
                break;
            case _DecorationSlot.prefixIcon:
                this.renderObject.prefixIcon = child;
                break;
            case _DecorationSlot.suffixIcon:
                this.renderObject.suffixIcon = child;
                break;
            case _DecorationSlot.helperError:
                this.renderObject.helperError = child;
                break;
            case _DecorationSlot.counter:
                this.renderObject.counter = child;
                break;
            case _DecorationSlot.container:
                this.renderObject.container = child;
                break;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    insertChildRenderObject(child : lib23.RenderObject,slotValue : any) : any {
        /* TODO (AssertStatementImpl) : assert (child is RenderBox); */;
        /* TODO (AssertStatementImpl) : assert (slotValue is _DecorationSlot); */;
        let slot : _DecorationSlot = slotValue;
        this._updateRenderObject(child,slot);
        /* TODO (AssertStatementImpl) : assert (renderObject.childToSlot.keys.contains(child)); */;
        /* TODO (AssertStatementImpl) : assert (renderObject.slotToChild.keys.contains(slot)); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeChildRenderObject(child : lib23.RenderObject) : any {
        /* TODO (AssertStatementImpl) : assert (child is RenderBox); */;
        /* TODO (AssertStatementImpl) : assert (renderObject.childToSlot.keys.contains(child)); */;
        this._updateRenderObject(null,this.renderObject.childToSlot.get(child));
        /* TODO (AssertStatementImpl) : assert (!renderObject.childToSlot.keys.contains(child)); */;
        /* TODO (AssertStatementImpl) : assert (!renderObject.slotToChild.keys.contains(slot)); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveChildRenderObject(child : lib23.RenderObject,slotValue : any) : any {
        /* TODO (AssertStatementImpl) : assert (false, 'not reachable'); */;
    }
}

export namespace _Decorator {
    export type Constructors = lib12.RenderObjectWidget.Constructors | '_Decorator';
    export type Interface = Omit<_Decorator, Constructors>;
}
@DartClass
export class _Decorator extends lib12.RenderObjectWidget {
    constructor(_namedArguments? : {key? : lib13.Key,decoration? : _Decoration,textDirection? : any,textBaseline? : any,isFocused? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _Decorator(_namedArguments? : {key? : lib13.Key,decoration? : _Decoration,textDirection? : any,textBaseline? : any,isFocused? : boolean}) {
        let {key,decoration,textDirection,textBaseline,isFocused} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.decoration = decoration;
        this.textDirection = textDirection;
        this.textBaseline = textBaseline;
        this.isFocused = isFocused;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    decoration : _Decoration;

    textDirection : any;

    textBaseline : any;

    isFocused : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createElement() : _RenderDecorationElement {
        return _RenderDecorationElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib12.BuildContext) : _RenderDecoration {
        return _RenderDecoration({
            decoration : this.decoration,textDirection : this.textDirection,textBaseline : this.textBaseline,isFocused : this.isFocused});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib12.BuildContext,renderObject : _RenderDecoration) : any {
        ((_) : _RenderDecoration =>  {
            {
                _.decoration = this.decoration;
                _.textDirection = this.textDirection;
                _.textBaseline = this.textBaseline;
                _.isFocused = this.isFocused;
                return _;
            }
        })(renderObject);
    }
}

export namespace _AffixText {
    export type Constructors = lib12.StatelessWidget.Constructors | '_AffixText';
    export type Interface = Omit<_AffixText, Constructors>;
}
@DartClass
export class _AffixText extends lib12.StatelessWidget {
    constructor(_namedArguments? : {labelIsFloating? : boolean,text? : string,style? : lib19.TextStyle,child? : lib12.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AffixText(_namedArguments? : {labelIsFloating? : boolean,text? : string,style? : lib19.TextStyle,child? : lib12.Widget}) {
        let {labelIsFloating,text,style,child} = Object.assign({
        }, _namedArguments );
        this.labelIsFloating = labelIsFloating;
        this.text = text;
        this.style = style;
        this.child = child;
    }
    labelIsFloating : boolean;

    text : string;

    style : lib19.TextStyle;

    child : lib12.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib12.BuildContext) : lib12.Widget {
        return lib21.DefaultTextStyle.merge({
            style : this.style,child : lib30.AnimatedOpacity({
                duration : properties._kTransitionDuration,curve : properties._kTransitionCurve,opacity : this.labelIsFloating ? 1.0 : 0.0,child : (this.child || lib21.Text(this.text,{
                    style : this.style}))})});
    }
}

export namespace InputDecorator {
    export type Constructors = lib12.StatefulWidget.Constructors | 'InputDecorator';
    export type Interface = Omit<InputDecorator, Constructors>;
}
@DartClass
export class InputDecorator extends lib12.StatefulWidget {
    constructor(_namedArguments? : {key? : lib13.Key,decoration? : InputDecoration,baseStyle? : lib19.TextStyle,textAlign? : any,isFocused? : boolean,isEmpty? : boolean,child? : lib12.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InputDecorator(_namedArguments? : {key? : lib13.Key,decoration? : InputDecoration,baseStyle? : lib19.TextStyle,textAlign? : any,isFocused? : boolean,isEmpty? : boolean,child? : lib12.Widget}) {
        let {key,decoration,baseStyle,textAlign,isFocused,isEmpty,child} = Object.assign({
            "isFocused" : false,
            "isEmpty" : false}, _namedArguments );
        this.assert = assert;
        this.decoration = decoration;
        this.baseStyle = baseStyle;
        this.textAlign = textAlign;
        this.isFocused = isFocused;
        this.isEmpty = isEmpty;
        this.child = child;
    }
     : any;

     : any;

     : any;

     : any;

    decoration : InputDecoration;

    baseStyle : lib19.TextStyle;

    textAlign : any;

    isFocused : boolean;

    isEmpty : boolean;

    child : lib12.Widget;

    get _labelShouldWithdraw() : boolean {
        return !this.isEmpty || this.isFocused;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _InputDecoratorState {
        return _InputDecoratorState();
    }
    static containerOf(context : lib12.BuildContext) : any {
        let result : _RenderDecoration = context.ancestorRenderObjectOfType(new lib12.TypeMatcher<_RenderDecoration>());
        return ((t)=>(!!t)?t.container:null)(result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib25.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib25.DiagnosticsProperty('decoration',this.decoration));
        properties.add(lib25.DiagnosticsProperty('baseStyle',this.baseStyle,{
            defaultValue : null}));
        properties.add(lib25.DiagnosticsProperty('isFocused',this.isFocused));
        properties.add(lib25.DiagnosticsProperty('isEmpty',this.isEmpty));
    }
}

export namespace _InputDecoratorState {
    export type Constructors = '_InputDecoratorState';
    export type Interface = Omit<_InputDecoratorState, Constructors>;
}
@DartClass
@With(any)
export class _InputDecoratorState extends any implements any.Interface {
    _floatingLabelController : lib14.AnimationController;

    _shakingLabelController : lib14.AnimationController;

    _borderGap : _InputBorderGap;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._floatingLabelController = lib14.AnimationController({
            duration : properties._kTransitionDuration,vsync : this,value : (widget.decoration.hasFloatingPlaceholder && widget._labelShouldWithdraw) ? 1.0 : 0.0});
        this._floatingLabelController.addListener(this._handleChange.bind(this));
        this._shakingLabelController = lib14.AnimationController({
            duration : properties._kTransitionDuration,vsync : this});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        super.didChangeDependencies();
        this._effectiveDecoration = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._floatingLabelController.dispose();
        this._shakingLabelController.dispose();
        super.dispose();
    }
    _handleChange() : any {
        setState(() =>  {
        });
    }
    _effectiveDecoration : InputDecoration;

    get decoration() : InputDecoration {
        this._effectiveDecoration = ( this._effectiveDecoration ) || ( widget.decoration.applyDefaults(lib32.Theme.of(lib31.properties.context).inputDecorationTheme) );
        return this._effectiveDecoration;
    }
    get textAlign() : any {
        return widget.textAlign;
    }
    get isFocused() : boolean {
        return widget.isFocused;
    }
    get isEmpty() : boolean {
        return widget.isEmpty;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(old : InputDecorator) : any {
        super.didUpdateWidget(old);
        if (widget.decoration != old.decoration) this._effectiveDecoration = null;
        if (widget._labelShouldWithdraw != old._labelShouldWithdraw && widget.decoration.hasFloatingPlaceholder) {
            if (widget._labelShouldWithdraw) {
                this._floatingLabelController.forward();
            }else this._floatingLabelController.reverse();
        }
        let errorText : string = this.decoration.errorText;
        let oldErrorText : string = old.decoration.errorText;
        if (this._floatingLabelController.isCompleted && errorText != null && errorText != oldErrorText) {
            ((_) : lib14.AnimationController =>  {
                {
                    _.value = 0.0;
                    forward();
                    return _;
                }
            })(this._shakingLabelController);
        }
    }
    _getActiveColor(themeData : lib33.ThemeData) : any {
        if (this.isFocused) {
            switch (themeData.brightness) {
                case Brightness.dark:
                    return themeData.accentColor;
                case Brightness.light:
                    return themeData.primaryColor;
            }
        }
        return themeData.hintColor;
    }
    _getFillColor(themeData : lib33.ThemeData) : any {
        if (this.decoration.filled != true) return lib34.Colors.transparent;
        if (this.decoration.fillColor != null) return this.decoration.fillColor;
        let darkEnabled : any = Color(452984831);
        let darkDisabled : any = Color(234881023);
        let lightEnabled : any = Color(167772160);
        let lightDisabled : any = Color(83886080);
        switch (themeData.brightness) {
            case Brightness.dark:
                return this.decoration.enabled ? darkEnabled : darkDisabled;
            case Brightness.light:
                return this.decoration.enabled ? lightEnabled : lightDisabled;
        }
        return lightEnabled;
    }
    _getDefaultIconColor(themeData : lib33.ThemeData) : any {
        if (!this.decoration.enabled) return themeData.disabledColor;
        switch (themeData.brightness) {
            case Brightness.dark:
                return lib34.Colors.white70;
            case Brightness.light:
                return lib34.Colors.black45;
            default:
                return themeData.iconTheme.color;
        }
    }
    get _hasInlineLabel() : boolean {
        return !widget._labelShouldWithdraw && this.decoration.labelText != null;
    }
    get _shouldShowLabel() : boolean {
        return this._hasInlineLabel || this.decoration.hasFloatingPlaceholder;
    }
    _getInlineStyle(themeData : lib33.ThemeData) : lib19.TextStyle {
        return themeData.textTheme.subhead.merge(widget.baseStyle).copyWith({
            color : this.decoration.enabled ? themeData.hintColor : themeData.disabledColor});
    }
    _getFloatingLabelStyle(themeData : lib33.ThemeData) : lib19.TextStyle {
        let color : any = this.decoration.errorText != null ? (((t)=>(!!t)?t.color:null)(this.decoration.errorStyle) || themeData.errorColor) : this._getActiveColor(themeData);
        let style : lib19.TextStyle = themeData.textTheme.subhead.merge(widget.baseStyle);
        return style.copyWith({
            color : this.decoration.enabled ? color : themeData.disabledColor}).merge(this.decoration.labelStyle);
    }
    _getHelperStyle(themeData : lib33.ThemeData) : lib19.TextStyle {
        let color : any = this.decoration.enabled ? themeData.hintColor : lib34.Colors.transparent;
        return themeData.textTheme.caption.copyWith({
            color : color}).merge(this.decoration.helperStyle);
    }
    _getErrorStyle(themeData : lib33.ThemeData) : lib19.TextStyle {
        let color : any = this.decoration.enabled ? themeData.errorColor : lib34.Colors.transparent;
        return themeData.textTheme.caption.copyWith({
            color : color}).merge(this.decoration.errorStyle);
    }
    _getDefaultBorder(themeData : lib33.ThemeData) : lib7.InputBorder {
        if (op(Op.EQUALS,((t)=>(!!t)?t.borderSide:null)(this.decoration.border),lib9.BorderSide.none)) {
            return this.decoration.border;
        }
        let borderColor : any;
        if (this.decoration.enabled) {
            borderColor = op(Op.EQUALS,this.decoration.errorText,null) ? this._getActiveColor(themeData) : themeData.errorColor;
        }else {
            borderColor = (this.decoration.filled == true && ((t)=>(!!t)?t.isOutline:null)(this.decoration.border) != true) ? lib34.Colors.transparent : themeData.disabledColor;
        }
        let borderWeight : double;
        if (this.decoration.isCollapsed || op(Op.EQUALS,((t)=>(!!t)?t.border:null)(this.decoration),lib7.InputBorder.none) || !this.decoration.enabled) borderWeight = 0.0;else borderWeight = this.isFocused ? 2.0 : 1.0;
        let border : lib7.InputBorder = (this.decoration.border || new lib7.UnderlineInputBorder());
        return border.copyWith({
            borderSide : lib9.BorderSide({
                color : borderColor,width : borderWeight})});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib12.BuildContext) : lib12.Widget {
        let themeData : lib33.ThemeData = lib32.Theme.of(context);
        let inlineStyle : lib19.TextStyle = this._getInlineStyle(themeData);
        let textBaseline : any = inlineStyle.textBaseline;
        let hintStyle : lib19.TextStyle = inlineStyle.merge(this.decoration.hintStyle);
        let hint : lib12.Widget = this.decoration.hintText == null ? null : lib30.AnimatedOpacity({
            opacity : (this.isEmpty && !this._hasInlineLabel) ? 1.0 : 0.0,duration : properties._kTransitionDuration,curve : properties._kTransitionCurve,child : lib21.Text(this.decoration.hintText,{
                style : hintStyle,overflow : lib20.TextOverflow.ellipsis,textAlign : this.textAlign,maxLines : this.decoration.hintMaxLines})});
        let isError : boolean = this.decoration.errorText != null;
        let border : lib7.InputBorder;
        if (!this.decoration.enabled) border = isError ? this.decoration.errorBorder : this.decoration.disabledBorder;else if (this.isFocused) border = isError ? this.decoration.focusedErrorBorder : this.decoration.focusedBorder;else border = isError ? this.decoration.errorBorder : this.decoration.enabledBorder;
        border = ( border ) || ( this._getDefaultBorder(themeData) );
        let container : lib12.Widget = _BorderContainer({
            border : border,gap : this._borderGap,gapAnimation : this._floatingLabelController.view,fillColor : this._getFillColor(themeData)});
        let inlineLabelStyle : lib19.TextStyle = inlineStyle.merge(this.decoration.labelStyle);
        let label : lib12.Widget = op(Op.EQUALS,this.decoration.labelText,null) ? null : _Shaker({
            animation : this._shakingLabelController.view,child : lib30.AnimatedOpacity({
                duration : properties._kTransitionDuration,curve : properties._kTransitionCurve,opacity : this._shouldShowLabel ? 1.0 : 0.0,child : lib30.AnimatedDefaultTextStyle({
                    duration : properties._kTransitionDuration,curve : properties._kTransitionCurve,style : widget._labelShouldWithdraw ? this._getFloatingLabelStyle(themeData) : inlineLabelStyle,child : lib21.Text(this.decoration.labelText,{
                        overflow : lib20.TextOverflow.ellipsis,textAlign : this.textAlign})})})});
        let prefix : lib12.Widget = op(Op.EQUALS,this.decoration.prefix,null) && op(Op.EQUALS,this.decoration.prefixText,null) ? null : _AffixText({
            labelIsFloating : widget._labelShouldWithdraw,text : this.decoration.prefixText,style : (this.decoration.prefixStyle || hintStyle),child : this.decoration.prefix});
        let suffix : lib12.Widget = op(Op.EQUALS,this.decoration.suffix,null) && op(Op.EQUALS,this.decoration.suffixText,null) ? null : _AffixText({
            labelIsFloating : widget._labelShouldWithdraw,text : this.decoration.suffixText,style : (this.decoration.suffixStyle || hintStyle),child : this.decoration.suffix});
        let activeColor : any = this._getActiveColor(themeData);
        let decorationIsDense : boolean = op(Op.EQUALS,this.decoration.isDense,true);
        let iconSize : double = decorationIsDense ? 18.0 : 24.0;
        let iconColor : any = this.isFocused ? activeColor : this._getDefaultIconColor(themeData);
        let icon : lib12.Widget = op(Op.EQUALS,this.decoration.icon,null) ? null : lib16.Padding({
            padding : new lib22.EdgeInsetsDirectional.only({
                end : 16.0}),child : lib36.IconTheme.merge({
                data : lib35.IconThemeData({
                    color : iconColor,size : iconSize}),child : this.decoration.icon})});
        let prefixIcon : lib12.Widget = op(Op.EQUALS,this.decoration.prefixIcon,null) ? null : lib16.Center({
            widthFactor : 1.0,heightFactor : 1.0,child : lib16.ConstrainedBox({
                constraints : new lib26.BoxConstraints({
                    minWidth : 48.0,minHeight : 48.0}),child : lib36.IconTheme.merge({
                    data : lib35.IconThemeData({
                        color : iconColor,size : iconSize}),child : this.decoration.prefixIcon})})});
        let suffixIcon : lib12.Widget = op(Op.EQUALS,this.decoration.suffixIcon,null) ? null : lib16.Center({
            widthFactor : 1.0,heightFactor : 1.0,child : lib16.ConstrainedBox({
                constraints : new lib26.BoxConstraints({
                    minWidth : 48.0,minHeight : 48.0}),child : lib36.IconTheme.merge({
                    data : lib35.IconThemeData({
                        color : iconColor,size : iconSize}),child : this.decoration.suffixIcon})})});
        let helperError : lib12.Widget = _HelperError({
            textAlign : this.textAlign,helperText : this.decoration.helperText,helperStyle : this._getHelperStyle(themeData),errorText : this.decoration.errorText,errorStyle : this._getErrorStyle(themeData),errorMaxLines : this.decoration.errorMaxLines});
        let counter : lib12.Widget;
        if (this.decoration.counter != null) {
            counter = this.decoration.counter;
        }else if (this.decoration.counterText != null && this.decoration.counterText != '') {
            counter = lib16.Semantics({
                container : true,liveRegion : this.isFocused,child : lib21.Text(this.decoration.counterText,{
                    style : this._getHelperStyle(themeData).merge(this.decoration.counterStyle),overflow : lib20.TextOverflow.ellipsis,semanticsLabel : this.decoration.semanticCounterText})});
        }
        let textDirection : any = lib16.Directionality.of(context);
        let decorationContentPadding : lib22.EdgeInsets = ((_740_)=>(!!_740_)?_740_.resolve(textDirection):null)(this.decoration.contentPadding);
        let contentPadding : lib22.EdgeInsets;
        let floatingLabelHeight : double;
        if (this.decoration.isCollapsed) {
            floatingLabelHeight = 0.0;
            contentPadding = (decorationContentPadding || lib22.EdgeInsets.zero);
        }else if (!border.isOutline) {
            floatingLabelHeight = (4.0 + 0.75 * inlineLabelStyle.fontSize) * lib37.MediaQuery.textScaleFactorOf(context);
            if (this.decoration.filled == true) {
                contentPadding = (decorationContentPadding || (decorationIsDense ? new lib22.EdgeInsets.fromLTRB(12.0,8.0,12.0,8.0) : new lib22.EdgeInsets.fromLTRB(12.0,12.0,12.0,12.0)));
            }else {
                contentPadding = (decorationContentPadding || (decorationIsDense ? new lib22.EdgeInsets.fromLTRB(0.0,8.0,0.0,8.0) : new lib22.EdgeInsets.fromLTRB(0.0,12.0,0.0,12.0)));
            }
        }else {
            floatingLabelHeight = 0.0;
            contentPadding = (decorationContentPadding || (decorationIsDense ? new lib22.EdgeInsets.fromLTRB(12.0,20.0,12.0,12.0) : new lib22.EdgeInsets.fromLTRB(12.0,24.0,12.0,16.0)));
        }
        return _Decorator({
            decoration : _Decoration({
                contentPadding : contentPadding,isCollapsed : this.decoration.isCollapsed,floatingLabelHeight : floatingLabelHeight,floatingLabelProgress : this._floatingLabelController.value,border : border,borderGap : this._borderGap,icon : icon,input : widget.child,label : label,alignLabelWithHint : this.decoration.alignLabelWithHint,hint : hint,prefix : prefix,suffix : suffix,prefixIcon : prefixIcon,suffixIcon : suffixIcon,helperError : helperError,counter : counter,container : container}),textDirection : textDirection,textBaseline : textBaseline,isFocused : this.isFocused});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _InputDecoratorState() {
        this._borderGap = _InputBorderGap();
    }
}

export namespace InputDecoration {
    export type Constructors = 'InputDecoration' | 'collapsed';
    export type Interface = Omit<InputDecoration, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class InputDecoration {
    constructor(_namedArguments? : {icon? : any,labelText? : any,labelStyle? : any,helperText? : any,helperStyle? : any,hintText? : string,hintStyle? : lib19.TextStyle,hintMaxLines? : any,errorText? : any,errorStyle? : any,errorMaxLines? : any,hasFloatingPlaceholder? : boolean,isDense? : any,contentPadding? : any,prefixIcon? : any,prefix? : any,prefixText? : any,prefixStyle? : any,suffixIcon? : any,suffix? : any,suffixText? : any,suffixStyle? : any,counter? : any,counterText? : any,counterStyle? : any,filled? : boolean,fillColor? : any,errorBorder? : any,focusedBorder? : any,focusedErrorBorder? : any,disabledBorder? : any,enabledBorder? : any,border? : lib7.InputBorder,enabled? : boolean,semanticCounterText? : any,alignLabelWithHint? : any}) {
    }
    @defaultConstructor
    InputDecoration(_namedArguments? : {icon? : any,labelText? : any,labelStyle? : any,helperText? : any,helperStyle? : any,hintText? : string,hintStyle? : lib19.TextStyle,hintMaxLines? : any,errorText? : any,errorStyle? : any,errorMaxLines? : any,hasFloatingPlaceholder? : boolean,isDense? : any,contentPadding? : any,prefixIcon? : any,prefix? : any,prefixText? : any,prefixStyle? : any,suffixIcon? : any,suffix? : any,suffixText? : any,suffixStyle? : any,counter? : any,counterText? : any,counterStyle? : any,filled? : boolean,fillColor? : any,errorBorder? : any,focusedBorder? : any,focusedErrorBorder? : any,disabledBorder? : any,enabledBorder? : any,border? : lib7.InputBorder,enabled? : boolean,semanticCounterText? : any,alignLabelWithHint? : any}) {
        let {icon,labelText,labelStyle,helperText,helperStyle,hintText,hintStyle,hintMaxLines,errorText,errorStyle,errorMaxLines,hasFloatingPlaceholder,isDense,contentPadding,prefixIcon,prefix,prefixText,prefixStyle,suffixIcon,suffix,suffixText,suffixStyle,counter,counterText,counterStyle,filled,fillColor,errorBorder,focusedBorder,focusedErrorBorder,disabledBorder,enabledBorder,border,enabled,semanticCounterText,alignLabelWithHint} = Object.assign({
            "hasFloatingPlaceholder" : true,
            "enabled" : true}, _namedArguments );
        this.isCollapsed = false;
        this.icon = null;
        this.labelText = null;
        this.labelStyle = null;
        this.helperText = null;
        this.helperStyle = null;
        this.hintMaxLines = null;
        this.errorText = null;
        this.errorStyle = null;
        this.errorMaxLines = null;
        this.isDense = false;
        this.contentPadding = lib22.EdgeInsets.zero;
        this.isCollapsed = true;
        this.prefixIcon = null;
        this.prefix = null;
        this.prefixText = null;
        this.prefixStyle = null;
        this.suffix = null;
        this.suffixIcon = null;
        this.suffixText = null;
        this.suffixStyle = null;
        this.counter = null;
        this.counterText = null;
        this.counterStyle = null;
        this.errorBorder = null;
        this.focusedBorder = null;
        this.focusedErrorBorder = null;
        this.disabledBorder = null;
        this.enabledBorder = null;
        this.semanticCounterText = null;
        this.alignLabelWithHint = false;
        this.assert = assert;
        this.icon = icon;
        this.labelText = labelText;
        this.labelStyle = labelStyle;
        this.helperText = helperText;
        this.helperStyle = helperStyle;
        this.hintText = hintText;
        this.hintStyle = hintStyle;
        this.hintMaxLines = hintMaxLines;
        this.errorText = errorText;
        this.errorStyle = errorStyle;
        this.errorMaxLines = errorMaxLines;
        this.hasFloatingPlaceholder = hasFloatingPlaceholder;
        this.isDense = isDense;
        this.contentPadding = contentPadding;
        this.prefixIcon = prefixIcon;
        this.prefix = prefix;
        this.prefixText = prefixText;
        this.prefixStyle = prefixStyle;
        this.suffixIcon = suffixIcon;
        this.suffix = suffix;
        this.suffixText = suffixText;
        this.suffixStyle = suffixStyle;
        this.counter = counter;
        this.counterText = counterText;
        this.counterStyle = counterStyle;
        this.filled = filled;
        this.fillColor = fillColor;
        this.errorBorder = errorBorder;
        this.focusedBorder = focusedBorder;
        this.focusedErrorBorder = focusedErrorBorder;
        this.disabledBorder = disabledBorder;
        this.enabledBorder = enabledBorder;
        this.border = border;
        this.enabled = enabled;
        this.semanticCounterText = semanticCounterText;
        this.alignLabelWithHint = alignLabelWithHint;
    }
     : any;

    [null](prefix : any, : any) {
    }
     : any;

    [null](suffix : any, : any) {
    }
     : any;

    isCollapsed;

    @namedConstructor
    collapsed(_namedArguments? : {hintText? : string,hasFloatingPlaceholder? : boolean,hintStyle? : lib19.TextStyle,filled? : boolean,fillColor? : any,border? : lib7.InputBorder,enabled? : boolean}) {
        let {hintText,hasFloatingPlaceholder,hintStyle,filled,fillColor,border,enabled} = Object.assign({
            "hasFloatingPlaceholder" : true,
            "filled" : false,
            "border" : lib7.InputBorder.none,
            "enabled" : true}, _namedArguments );
        this.isCollapsed = false;
        this.icon = null;
        this.labelText = null;
        this.labelStyle = null;
        this.helperText = null;
        this.helperStyle = null;
        this.hintMaxLines = null;
        this.errorText = null;
        this.errorStyle = null;
        this.errorMaxLines = null;
        this.isDense = false;
        this.contentPadding = lib22.EdgeInsets.zero;
        this.isCollapsed = true;
        this.prefixIcon = null;
        this.prefix = null;
        this.prefixText = null;
        this.prefixStyle = null;
        this.suffix = null;
        this.suffixIcon = null;
        this.suffixText = null;
        this.suffixStyle = null;
        this.counter = null;
        this.counterText = null;
        this.counterStyle = null;
        this.errorBorder = null;
        this.focusedBorder = null;
        this.focusedErrorBorder = null;
        this.disabledBorder = null;
        this.enabledBorder = null;
        this.semanticCounterText = null;
        this.alignLabelWithHint = false;
        this.assert = assert;
        this.hintText = hintText;
        this.hasFloatingPlaceholder = hasFloatingPlaceholder;
        this.hintStyle = hintStyle;
        this.filled = filled;
        this.fillColor = fillColor;
        this.border = border;
        this.enabled = enabled;
    }
    static collapsed : new(_namedArguments? : {hintText? : string,hasFloatingPlaceholder? : boolean,hintStyle? : lib19.TextStyle,filled? : boolean,fillColor? : any,border? : lib7.InputBorder,enabled? : boolean}) => InputDecoration;

     : any;

    icon;
    labelText;
    labelStyle;
    helperText;
    helperStyle;
    hintMaxLines;
    errorText;
    errorStyle;
    errorMaxLines;
    isDense;
    contentPadding;
    isCollapsed;
    prefixIcon;
    prefix;
    prefixText;
    prefixStyle;
    suffix;
    suffixIcon;
    suffixText;
    suffixStyle;
    counter;
    counterText;
    counterStyle;
    errorBorder;
    focusedBorder;
    focusedErrorBorder;
    disabledBorder;
    enabledBorder;
    semanticCounterText;
    alignLabelWithHint;

    icon : lib12.Widget;

    labelText : string;

    labelStyle : lib19.TextStyle;

    helperText : string;

    helperStyle : lib19.TextStyle;

    hintText : string;

    hintStyle : lib19.TextStyle;

    hintMaxLines : number;

    errorText : string;

    errorStyle : lib19.TextStyle;

    errorMaxLines : number;

    hasFloatingPlaceholder : boolean;

    isDense : boolean;

    contentPadding : lib22.EdgeInsetsGeometry;

    isCollapsed : boolean;

    prefixIcon : lib12.Widget;

    prefix : lib12.Widget;

    prefixText : string;

    prefixStyle : lib19.TextStyle;

    suffixIcon : lib12.Widget;

    suffix : lib12.Widget;

    suffixText : string;

    suffixStyle : lib19.TextStyle;

    counterText : string;

    counter : lib12.Widget;

    counterStyle : lib19.TextStyle;

    filled : boolean;

    fillColor : any;

    errorBorder : lib7.InputBorder;

    focusedBorder : lib7.InputBorder;

    focusedErrorBorder : lib7.InputBorder;

    disabledBorder : lib7.InputBorder;

    enabledBorder : lib7.InputBorder;

    border : lib7.InputBorder;

    enabled : boolean;

    semanticCounterText : string;

    alignLabelWithHint : boolean;

    copyWith(_namedArguments? : {icon? : lib12.Widget,labelText? : string,labelStyle? : lib19.TextStyle,helperText? : string,helperStyle? : lib19.TextStyle,hintText? : string,hintStyle? : lib19.TextStyle,hintMaxLines? : number,errorText? : string,errorStyle? : lib19.TextStyle,errorMaxLines? : number,hasFloatingPlaceholder? : boolean,isDense? : boolean,contentPadding? : lib22.EdgeInsetsGeometry,prefixIcon? : lib12.Widget,prefix? : lib12.Widget,prefixText? : string,prefixStyle? : lib19.TextStyle,suffixIcon? : lib12.Widget,suffix? : lib12.Widget,suffixText? : string,suffixStyle? : lib19.TextStyle,counter? : lib12.Widget,counterText? : string,counterStyle? : lib19.TextStyle,filled? : boolean,fillColor? : any,errorBorder? : lib7.InputBorder,focusedBorder? : lib7.InputBorder,focusedErrorBorder? : lib7.InputBorder,disabledBorder? : lib7.InputBorder,enabledBorder? : lib7.InputBorder,border? : lib7.InputBorder,enabled? : boolean,semanticCounterText? : string,alignLabelWithHint? : boolean}) : InputDecoration {
        let {icon,labelText,labelStyle,helperText,helperStyle,hintText,hintStyle,hintMaxLines,errorText,errorStyle,errorMaxLines,hasFloatingPlaceholder,isDense,contentPadding,prefixIcon,prefix,prefixText,prefixStyle,suffixIcon,suffix,suffixText,suffixStyle,counter,counterText,counterStyle,filled,fillColor,errorBorder,focusedBorder,focusedErrorBorder,disabledBorder,enabledBorder,border,enabled,semanticCounterText,alignLabelWithHint} = Object.assign({
        }, _namedArguments );
        return InputDecoration({
            icon : (icon || this.icon),labelText : (labelText || this.labelText),labelStyle : (labelStyle || this.labelStyle),helperText : (helperText || this.helperText),helperStyle : (helperStyle || this.helperStyle),hintText : (hintText || this.hintText),hintStyle : (hintStyle || this.hintStyle),hintMaxLines : (hintMaxLines || this.hintMaxLines),errorText : (errorText || this.errorText),errorStyle : (errorStyle || this.errorStyle),errorMaxLines : (errorMaxLines || this.errorMaxLines),hasFloatingPlaceholder : (hasFloatingPlaceholder || this.hasFloatingPlaceholder),isDense : (isDense || this.isDense),contentPadding : (contentPadding || this.contentPadding),prefixIcon : (prefixIcon || this.prefixIcon),prefix : (prefix || this.prefix),prefixText : (prefixText || this.prefixText),prefixStyle : (prefixStyle || this.prefixStyle),suffixIcon : (suffixIcon || this.suffixIcon),suffix : (suffix || this.suffix),suffixText : (suffixText || this.suffixText),suffixStyle : (suffixStyle || this.suffixStyle),counter : (counter || this.counter),counterText : (counterText || this.counterText),counterStyle : (counterStyle || this.counterStyle),filled : (filled || this.filled),fillColor : (fillColor || this.fillColor),errorBorder : (errorBorder || this.errorBorder),focusedBorder : (focusedBorder || this.focusedBorder),focusedErrorBorder : (focusedErrorBorder || this.focusedErrorBorder),disabledBorder : (disabledBorder || this.disabledBorder),enabledBorder : (enabledBorder || this.enabledBorder),border : (border || this.border),enabled : (enabled || this.enabled),semanticCounterText : (semanticCounterText || this.semanticCounterText),alignLabelWithHint : (alignLabelWithHint || this.alignLabelWithHint)});
    }
    applyDefaults(theme : InputDecorationTheme) : InputDecoration {
        return this.copyWith({
            labelStyle : (this.labelStyle || theme.labelStyle),helperStyle : (this.helperStyle || theme.helperStyle),hintStyle : (this.hintStyle || theme.hintStyle),errorStyle : (this.errorStyle || theme.errorStyle),errorMaxLines : (this.errorMaxLines || theme.errorMaxLines),hasFloatingPlaceholder : (this.hasFloatingPlaceholder || theme.hasFloatingPlaceholder),isDense : (this.isDense || theme.isDense),contentPadding : (this.contentPadding || theme.contentPadding),prefixStyle : (this.prefixStyle || theme.prefixStyle),suffixStyle : (this.suffixStyle || theme.suffixStyle),counterStyle : (this.counterStyle || theme.counterStyle),filled : (this.filled || theme.filled),fillColor : (this.fillColor || theme.fillColor),errorBorder : (this.errorBorder || theme.errorBorder),focusedBorder : (this.focusedBorder || theme.focusedBorder),focusedErrorBorder : (this.focusedErrorBorder || theme.focusedErrorBorder),disabledBorder : (this.disabledBorder || theme.disabledBorder),enabledBorder : (this.enabledBorder || theme.enabledBorder),border : (this.border || theme.border),alignLabelWithHint : (this.alignLabelWithHint || theme.alignLabelWithHint)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : InputDecoration = other;
        return op(Op.EQUALS,typedOther.icon,this.icon) && op(Op.EQUALS,typedOther.labelText,this.labelText) && op(Op.EQUALS,typedOther.labelStyle,this.labelStyle) && op(Op.EQUALS,typedOther.helperText,this.helperText) && op(Op.EQUALS,typedOther.helperStyle,this.helperStyle) && typedOther.hintText == this.hintText && op(Op.EQUALS,typedOther.hintStyle,this.hintStyle) && op(Op.EQUALS,typedOther.hintMaxLines,this.hintMaxLines) && op(Op.EQUALS,typedOther.errorText,this.errorText) && op(Op.EQUALS,typedOther.errorStyle,this.errorStyle) && op(Op.EQUALS,typedOther.errorMaxLines,this.errorMaxLines) && typedOther.hasFloatingPlaceholder == this.hasFloatingPlaceholder && op(Op.EQUALS,typedOther.isDense,this.isDense) && op(Op.EQUALS,typedOther.contentPadding,this.contentPadding) && op(Op.EQUALS,typedOther.isCollapsed,this.isCollapsed) && op(Op.EQUALS,typedOther.prefixIcon,this.prefixIcon) && op(Op.EQUALS,typedOther.prefix,this.prefix) && op(Op.EQUALS,typedOther.prefixText,this.prefixText) && op(Op.EQUALS,typedOther.prefixStyle,this.prefixStyle) && op(Op.EQUALS,typedOther.suffixIcon,this.suffixIcon) && op(Op.EQUALS,typedOther.suffix,this.suffix) && op(Op.EQUALS,typedOther.suffixText,this.suffixText) && op(Op.EQUALS,typedOther.suffixStyle,this.suffixStyle) && op(Op.EQUALS,typedOther.counter,this.counter) && op(Op.EQUALS,typedOther.counterText,this.counterText) && op(Op.EQUALS,typedOther.counterStyle,this.counterStyle) && typedOther.filled == this.filled && op(Op.EQUALS,typedOther.fillColor,this.fillColor) && op(Op.EQUALS,typedOther.errorBorder,this.errorBorder) && op(Op.EQUALS,typedOther.focusedBorder,this.focusedBorder) && op(Op.EQUALS,typedOther.focusedErrorBorder,this.focusedErrorBorder) && op(Op.EQUALS,typedOther.disabledBorder,this.disabledBorder) && op(Op.EQUALS,typedOther.enabledBorder,this.enabledBorder) && op(Op.EQUALS,typedOther.border,this.border) && typedOther.enabled == this.enabled && op(Op.EQUALS,typedOther.semanticCounterText,this.semanticCounterText) && op(Op.EQUALS,typedOther.alignLabelWithHint,this.alignLabelWithHint);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.icon,this.labelText,this.labelStyle,this.helperText,this.helperStyle,this.hintText,this.hintStyle,this.hintMaxLines,this.errorText,this.errorStyle,this.errorMaxLines,this.hasFloatingPlaceholder,this.isDense,this.contentPadding,this.isCollapsed,this.filled,this.fillColor,this.border,this.enabled,hashValues(this.prefixIcon,this.prefix,this.prefixText,this.prefixStyle,this.suffixIcon,this.suffix,this.suffixText,this.suffixStyle,this.counter,this.counterText,this.counterStyle,this.filled,this.fillColor,this.errorBorder,this.focusedBorder,this.focusedErrorBorder,this.disabledBorder,this.enabledBorder,this.border,hashValues(this.enabled,this.semanticCounterText,this.alignLabelWithHint)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let description : core.DartList<string> = new core.DartList.literal<string>();
        if (this.icon != null) description.add(`icon: ${this.icon}`);
        if (this.labelText != null) description.add(`labelText: "${this.labelText}"`);
        if (this.helperText != null) description.add(`helperText: "${this.helperText}"`);
        if (this.hintText != null) description.add(`hintText: "${this.hintText}"`);
        if (this.hintMaxLines != null) description.add(`hintMaxLines: "${this.hintMaxLines}"`);
        if (this.errorText != null) description.add(`errorText: "${this.errorText}"`);
        if (this.errorStyle != null) description.add(`errorStyle: "${this.errorStyle}"`);
        if (this.errorMaxLines != null) description.add(`errorMaxLines: "${this.errorMaxLines}"`);
        if (this.hasFloatingPlaceholder == false) description.add('hasFloatingPlaceholder: false');
        if ((this.isDense || false)) description.add(`isDense: ${this.isDense}`);
        if (this.contentPadding != null) description.add(`contentPadding: ${this.contentPadding}`);
        if (this.isCollapsed) description.add(`isCollapsed: ${this.isCollapsed}`);
        if (this.prefixIcon != null) description.add(`prefixIcon: ${this.prefixIcon}`);
        if (this.prefix != null) description.add(`prefix: ${this.prefix}`);
        if (this.prefixText != null) description.add(`prefixText: ${this.prefixText}`);
        if (this.prefixStyle != null) description.add(`prefixStyle: ${this.prefixStyle}`);
        if (this.suffixIcon != null) description.add(`suffixIcon: ${this.suffixIcon}`);
        if (this.suffix != null) description.add(`suffix: ${this.suffix}`);
        if (this.suffixText != null) description.add(`suffixText: ${this.suffixText}`);
        if (this.suffixStyle != null) description.add(`suffixStyle: ${this.suffixStyle}`);
        if (this.counter != null) description.add(`counter: ${this.counter}`);
        if (this.counterText != null) description.add(`counterText: ${this.counterText}`);
        if (this.counterStyle != null) description.add(`counterStyle: ${this.counterStyle}`);
        if (this.filled == true) description.add('filled: true');
        if (this.fillColor != null) description.add(`fillColor: ${this.fillColor}`);
        if (this.errorBorder != null) description.add(`errorBorder: ${this.errorBorder}`);
        if (this.focusedBorder != null) description.add(`focusedBorder: ${this.focusedBorder}`);
        if (this.focusedErrorBorder != null) description.add(`focusedErrorBorder: ${this.focusedErrorBorder}`);
        if (this.disabledBorder != null) description.add(`disabledBorder: ${this.disabledBorder}`);
        if (this.enabledBorder != null) description.add(`enabledBorder: ${this.enabledBorder}`);
        if (this.border != null) description.add(`border: ${this.border}`);
        if (!this.enabled) description.add('enabled: false');
        if (this.semanticCounterText != null) description.add(`semanticCounterText: ${this.semanticCounterText}`);
        if (this.alignLabelWithHint != null) description.add(`alignLabelWithHint: ${this.alignLabelWithHint}`);
        return `InputDecoration(${description.join(', ')})`;
    }
}

export namespace InputDecorationTheme {
    export type Constructors = lib25.Diagnosticable.Constructors | 'InputDecorationTheme';
    export type Interface = Omit<InputDecorationTheme, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class InputDecorationTheme extends lib25.Diagnosticable {
    constructor(_namedArguments? : {labelStyle? : lib19.TextStyle,helperStyle? : lib19.TextStyle,hintStyle? : lib19.TextStyle,errorStyle? : lib19.TextStyle,errorMaxLines? : number,hasFloatingPlaceholder? : boolean,isDense? : boolean,contentPadding? : lib22.EdgeInsetsGeometry,isCollapsed? : boolean,prefixStyle? : lib19.TextStyle,suffixStyle? : lib19.TextStyle,counterStyle? : lib19.TextStyle,filled? : boolean,fillColor? : any,errorBorder? : lib7.InputBorder,focusedBorder? : lib7.InputBorder,focusedErrorBorder? : lib7.InputBorder,disabledBorder? : lib7.InputBorder,enabledBorder? : lib7.InputBorder,border? : lib7.InputBorder,alignLabelWithHint? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InputDecorationTheme(_namedArguments? : {labelStyle? : lib19.TextStyle,helperStyle? : lib19.TextStyle,hintStyle? : lib19.TextStyle,errorStyle? : lib19.TextStyle,errorMaxLines? : number,hasFloatingPlaceholder? : boolean,isDense? : boolean,contentPadding? : lib22.EdgeInsetsGeometry,isCollapsed? : boolean,prefixStyle? : lib19.TextStyle,suffixStyle? : lib19.TextStyle,counterStyle? : lib19.TextStyle,filled? : boolean,fillColor? : any,errorBorder? : lib7.InputBorder,focusedBorder? : lib7.InputBorder,focusedErrorBorder? : lib7.InputBorder,disabledBorder? : lib7.InputBorder,enabledBorder? : lib7.InputBorder,border? : lib7.InputBorder,alignLabelWithHint? : boolean}) {
        let {labelStyle,helperStyle,hintStyle,errorStyle,errorMaxLines,hasFloatingPlaceholder,isDense,contentPadding,isCollapsed,prefixStyle,suffixStyle,counterStyle,filled,fillColor,errorBorder,focusedBorder,focusedErrorBorder,disabledBorder,enabledBorder,border,alignLabelWithHint} = Object.assign({
            "hasFloatingPlaceholder" : true,
            "isDense" : false,
            "isCollapsed" : false,
            "filled" : false,
            "alignLabelWithHint" : false}, _namedArguments );
        this.assert = assert;
        this.labelStyle = labelStyle;
        this.helperStyle = helperStyle;
        this.hintStyle = hintStyle;
        this.errorStyle = errorStyle;
        this.errorMaxLines = errorMaxLines;
        this.hasFloatingPlaceholder = hasFloatingPlaceholder;
        this.isDense = isDense;
        this.contentPadding = contentPadding;
        this.isCollapsed = isCollapsed;
        this.prefixStyle = prefixStyle;
        this.suffixStyle = suffixStyle;
        this.counterStyle = counterStyle;
        this.filled = filled;
        this.fillColor = fillColor;
        this.errorBorder = errorBorder;
        this.focusedBorder = focusedBorder;
        this.focusedErrorBorder = focusedErrorBorder;
        this.disabledBorder = disabledBorder;
        this.enabledBorder = enabledBorder;
        this.border = border;
        this.alignLabelWithHint = alignLabelWithHint;
    }
     : any;

     : any;

     : any;

     : any;

    labelStyle : lib19.TextStyle;

    helperStyle : lib19.TextStyle;

    hintStyle : lib19.TextStyle;

    errorStyle : lib19.TextStyle;

    errorMaxLines : number;

    hasFloatingPlaceholder : boolean;

    isDense : boolean;

    contentPadding : lib22.EdgeInsetsGeometry;

    isCollapsed : boolean;

    prefixStyle : lib19.TextStyle;

    suffixStyle : lib19.TextStyle;

    counterStyle : lib19.TextStyle;

    filled : boolean;

    fillColor : any;

    errorBorder : lib7.InputBorder;

    focusedBorder : lib7.InputBorder;

    focusedErrorBorder : lib7.InputBorder;

    disabledBorder : lib7.InputBorder;

    enabledBorder : lib7.InputBorder;

    border : lib7.InputBorder;

    alignLabelWithHint : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib25.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        let defaultTheme : InputDecorationTheme = InputDecorationTheme();
        properties.add(lib25.DiagnosticsProperty('labelStyle',this.labelStyle,{
            defaultValue : defaultTheme.labelStyle}));
        properties.add(lib25.DiagnosticsProperty('helperStyle',this.helperStyle,{
            defaultValue : defaultTheme.helperStyle}));
        properties.add(lib25.DiagnosticsProperty('hintStyle',this.hintStyle,{
            defaultValue : defaultTheme.hintStyle}));
        properties.add(lib25.DiagnosticsProperty('errorStyle',this.errorStyle,{
            defaultValue : defaultTheme.errorStyle}));
        properties.add(lib25.DiagnosticsProperty('errorMaxLines',this.errorMaxLines,{
            defaultValue : defaultTheme.errorMaxLines}));
        properties.add(lib25.DiagnosticsProperty('hasFloatingPlaceholder',this.hasFloatingPlaceholder,{
            defaultValue : defaultTheme.hasFloatingPlaceholder}));
        properties.add(lib25.DiagnosticsProperty('isDense',this.isDense,{
            defaultValue : defaultTheme.isDense}));
        properties.add(lib25.DiagnosticsProperty('contentPadding',this.contentPadding,{
            defaultValue : defaultTheme.contentPadding}));
        properties.add(lib25.DiagnosticsProperty('isCollapsed',this.isCollapsed,{
            defaultValue : defaultTheme.isCollapsed}));
        properties.add(lib25.DiagnosticsProperty('prefixStyle',this.prefixStyle,{
            defaultValue : defaultTheme.prefixStyle}));
        properties.add(lib25.DiagnosticsProperty('suffixStyle',this.suffixStyle,{
            defaultValue : defaultTheme.suffixStyle}));
        properties.add(lib25.DiagnosticsProperty('counterStyle',this.counterStyle,{
            defaultValue : defaultTheme.counterStyle}));
        properties.add(lib25.DiagnosticsProperty('filled',this.filled,{
            defaultValue : defaultTheme.filled}));
        properties.add(lib25.DiagnosticsProperty('fillColor',this.fillColor,{
            defaultValue : defaultTheme.fillColor}));
        properties.add(lib25.DiagnosticsProperty('errorBorder',this.errorBorder,{
            defaultValue : defaultTheme.errorBorder}));
        properties.add(lib25.DiagnosticsProperty('focusedBorder',this.focusedBorder,{
            defaultValue : defaultTheme.focusedErrorBorder}));
        properties.add(lib25.DiagnosticsProperty('focusedErrorBorder',this.focusedErrorBorder,{
            defaultValue : defaultTheme.focusedErrorBorder}));
        properties.add(lib25.DiagnosticsProperty('disabledBorder',this.disabledBorder,{
            defaultValue : defaultTheme.disabledBorder}));
        properties.add(lib25.DiagnosticsProperty('enabledBorder',this.enabledBorder,{
            defaultValue : defaultTheme.enabledBorder}));
        properties.add(lib25.DiagnosticsProperty('border',this.border,{
            defaultValue : defaultTheme.border}));
        properties.add(lib25.DiagnosticsProperty('alignLabelWithHint',this.alignLabelWithHint,{
            defaultValue : defaultTheme.alignLabelWithHint}));
    }
}

export class properties {
    private static __$_kTransitionDuration : core.DartDuration;
    static get _kTransitionDuration() : core.DartDuration { 
        if (this.__$_kTransitionDuration===undefined) {
            this.__$_kTransitionDuration = core.DartDuration({
                milliseconds : 200});
        }
        return this.__$_kTransitionDuration;
    }
    static set _kTransitionDuration(__$value : core.DartDuration)  { 
        this.__$_kTransitionDuration = __$value;
    }

    private static __$_kTransitionCurve : lib3.Curve;
    static get _kTransitionCurve() : lib3.Curve { 
        if (this.__$_kTransitionCurve===undefined) {
            this.__$_kTransitionCurve = lib3.Curves.fastOutSlowIn;
        }
        return this.__$_kTransitionCurve;
    }
    static set _kTransitionCurve(__$value : lib3.Curve)  { 
        this.__$_kTransitionCurve = __$value;
    }

}
