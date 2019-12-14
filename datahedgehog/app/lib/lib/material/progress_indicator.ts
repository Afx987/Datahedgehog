/** Library asset:datahedgehog_monitor/lib/lib/material/progress_indicator.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib6 from "./theme";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/rendering/custom_paint";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/transitions";
import * as math from "@dart2ts/dart/math";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib18 from "./material";

export namespace ProgressIndicator {
    export type Constructors = lib3.StatefulWidget.Constructors | 'ProgressIndicator';
    export type Interface = Omit<ProgressIndicator, Constructors>;
}
@DartClass
export class ProgressIndicator extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,value? : double,backgroundColor? : any,valueColor? : lib5.Animation<any>,semanticsLabel? : string,semanticsValue? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ProgressIndicator(_namedArguments? : {key? : lib4.Key,value? : double,backgroundColor? : any,valueColor? : lib5.Animation<any>,semanticsLabel? : string,semanticsValue? : string}) {
        let {key,value,backgroundColor,valueColor,semanticsLabel,semanticsValue} = Object.assign({
        }, _namedArguments );
        super.StatefulWidget({
            key : key});
        this.value = value;
        this.backgroundColor = backgroundColor;
        this.valueColor = valueColor;
        this.semanticsLabel = semanticsLabel;
        this.semanticsValue = semanticsValue;
    }
    value : double;

    backgroundColor : any;

    valueColor : lib5.Animation<any>;

    semanticsLabel : string;

    semanticsValue : string;

    _getBackgroundColor(context : lib3.BuildContext) : any {
        return (this.backgroundColor || lib6.Theme.of(context).backgroundColor);
    }
    _getValueColor(context : lib3.BuildContext) : any {
        return (((t)=>(!!t)?t.value:null)(this.valueColor) || lib6.Theme.of(context).accentColor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.PercentProperty('value',this.value,{
            showName : false,ifNull : '<indeterminate>'}));
    }
    _buildSemanticsWrapper(_namedArguments? : {context? : lib3.BuildContext,child? : lib3.Widget}) : lib3.Widget {
        let {context,child} = Object.assign({
        }, _namedArguments );
        let expandedSemanticsValue : string = this.semanticsValue;
        if (this.value != null) {
            expandedSemanticsValue = ( expandedSemanticsValue ) || ( `${new core.DartDouble((this.value * 100)).round()}%` );
        }
        return lib8.Semantics({
            label : this.semanticsLabel,value : expandedSemanticsValue,child : child});
    }
}

export namespace _LinearProgressIndicatorPainter {
    export type Constructors = lib9.CustomPainter.Constructors | '_LinearProgressIndicatorPainter';
    export type Interface = Omit<_LinearProgressIndicatorPainter, Constructors>;
}
@DartClass
export class _LinearProgressIndicatorPainter extends lib9.CustomPainter {
    constructor(_namedArguments? : {backgroundColor? : any,valueColor? : any,value? : double,animationValue? : double,textDirection? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _LinearProgressIndicatorPainter(_namedArguments? : {backgroundColor? : any,valueColor? : any,value? : double,animationValue? : double,textDirection? : any}) {
        let {backgroundColor,valueColor,value,animationValue,textDirection} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.backgroundColor = backgroundColor;
        this.valueColor = valueColor;
        this.value = value;
        this.animationValue = animationValue;
        this.textDirection = textDirection;
    }
     : any;

    backgroundColor : any;

    valueColor : any;

    value : double;

    animationValue : double;

    textDirection : any;

    private static __$line1Head : lib10.Curve;
    static get line1Head() : lib10.Curve { 
        if (this.__$line1Head===undefined) {
            this.__$line1Head = lib10.Interval(0.0,750.0 / properties._kIndeterminateLinearDuration,{
                curve : lib10.Cubic(0.2,0.0,0.8,1.0)});
        }
        return this.__$line1Head;
    }

    private static __$line1Tail : lib10.Curve;
    static get line1Tail() : lib10.Curve { 
        if (this.__$line1Tail===undefined) {
            this.__$line1Tail = lib10.Interval(333.0 / properties._kIndeterminateLinearDuration,(333.0 + 750.0) / properties._kIndeterminateLinearDuration,{
                curve : lib10.Cubic(0.4,0.0,1.0,1.0)});
        }
        return this.__$line1Tail;
    }

    private static __$line2Head : lib10.Curve;
    static get line2Head() : lib10.Curve { 
        if (this.__$line2Head===undefined) {
            this.__$line2Head = lib10.Interval(1000.0 / properties._kIndeterminateLinearDuration,(1000.0 + 567.0) / properties._kIndeterminateLinearDuration,{
                curve : lib10.Cubic(0.0,0.0,0.65,1.0)});
        }
        return this.__$line2Head;
    }

    private static __$line2Tail : lib10.Curve;
    static get line2Tail() : lib10.Curve { 
        if (this.__$line2Tail===undefined) {
            this.__$line2Tail = lib10.Interval(1267.0 / properties._kIndeterminateLinearDuration,(1267.0 + 533.0) / properties._kIndeterminateLinearDuration,{
                curve : lib10.Cubic(0.1,0.0,0.45,1.0)});
        }
        return this.__$line2Tail;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,size : any) : any {
        let paint : any = ((_) : any =>  {
            {
                _.color = this.backgroundColor;
                _.style = PaintingStyle.fill;
                return _;
            }
        })(Paint());
        canvas.drawRect(op(Op.BITAND,Offset.zero,size),paint);
        paint.color = this.valueColor;
        var drawBar : (x : double,width : double) => any = (x : double,width : double) : any =>  {
            if (width <= 0.0) return;
            let left : double;
            switch (this.textDirection) {
                case TextDirection.rtl:
                    left = op(Op.MINUS,op(Op.MINUS,size.width,width),x);
                    break;
                case TextDirection.ltr:
                    left = x;
                    break;
            }
            canvas.drawRect(op(Op.BITAND,Offset(left,0.0),Size(width,size.height)),paint);
        };
        if (this.value != null) {
            drawBar(0.0,new core.DartDouble(this.value).clamp(0.0,1.0) * size.width);
        }else {
            let x1 : double = op(Op.TIMES,size.width,_LinearProgressIndicatorPainter.line1Tail.transform(this.animationValue));
            let width1 : double = op(Op.MINUS,op(Op.TIMES,size.width,_LinearProgressIndicatorPainter.line1Head.transform(this.animationValue)),x1);
            let x2 : double = op(Op.TIMES,size.width,_LinearProgressIndicatorPainter.line2Tail.transform(this.animationValue));
            let width2 : double = op(Op.MINUS,op(Op.TIMES,size.width,_LinearProgressIndicatorPainter.line2Head.transform(this.animationValue)),x2);
            drawBar(x1,width1);
            drawBar(x2,width2);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRepaint(oldPainter : _LinearProgressIndicatorPainter) : boolean {
        return oldPainter.backgroundColor != this.backgroundColor || oldPainter.valueColor != this.valueColor || oldPainter.value != this.value || oldPainter.animationValue != this.animationValue || oldPainter.textDirection != this.textDirection;
    }
}

export namespace _LinearProgressIndicatorState {
    export type Constructors = '_LinearProgressIndicatorState';
    export type Interface = Omit<_LinearProgressIndicatorState, Constructors>;
}
@DartClass
@With(any)
export class _LinearProgressIndicatorState extends any implements any.Interface {
    _controller : lib11.AnimationController;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._controller = lib11.AnimationController({
            duration : new core.DartDuration({
                milliseconds : properties._kIndeterminateLinearDuration}),vsync : this});
        if (op(Op.EQUALS,widget.value,null)) this._controller.repeat();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : LinearProgressIndicator) : any {
        super.didUpdateWidget(oldWidget);
        if (op(Op.EQUALS,widget.value,null) && !this._controller.isAnimating) this._controller.repeat();else if (widget.value != null && this._controller.isAnimating) this._controller.stop();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._controller.dispose();
        super.dispose();
    }
    _buildIndicator(context : lib3.BuildContext,animationValue : double,textDirection : any) : lib3.Widget {
        return widget._buildSemanticsWrapper({
            context : context,child : lib13.Container({
                constraints : new lib12.BoxConstraints({
                    minWidth : new core.DartDouble(double).infinity,minHeight : properties._kLinearProgressIndicatorHeight}),child : lib8.CustomPaint({
                    painter : _LinearProgressIndicatorPainter({
                        backgroundColor : widget._getBackgroundColor(context),valueColor : widget._getValueColor(context),value : widget.value,animationValue : animationValue,textDirection : textDirection})})})});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let textDirection : any = lib8.Directionality.of(context);
        if (widget.value != null) return this._buildIndicator(context,this._controller.value,textDirection);
        return lib14.AnimatedBuilder({
            animation : this._controller.view,builder : (context : lib3.BuildContext,child : lib3.Widget) =>  {
                return this._buildIndicator(context,this._controller.value,textDirection);
            }});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _LinearProgressIndicatorState() {
    }
}

export namespace _CircularProgressIndicatorPainter {
    export type Constructors = lib9.CustomPainter.Constructors | '_CircularProgressIndicatorPainter';
    export type Interface = Omit<_CircularProgressIndicatorPainter, Constructors>;
}
@DartClass
export class _CircularProgressIndicatorPainter extends lib9.CustomPainter {
    constructor(_namedArguments? : {valueColor? : any,value? : double,headValue? : double,tailValue? : double,stepValue? : number,rotationValue? : double,strokeWidth? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CircularProgressIndicatorPainter(_namedArguments? : {valueColor? : any,value? : double,headValue? : double,tailValue? : double,stepValue? : number,rotationValue? : double,strokeWidth? : double}) {
        let {valueColor,value,headValue,tailValue,stepValue,rotationValue,strokeWidth} = Object.assign({
        }, _namedArguments );
        this.arcStart = value != null ? _CircularProgressIndicatorPainter._startAngle : _CircularProgressIndicatorPainter._startAngle + tailValue * 3 / 2 * math.pi + rotationValue * math.pi * 1.7 - stepValue * 0.8 * math.pi;
        this.arcSweep = value != null ? new core.DartDouble(value).clamp(0.0,1.0) * _CircularProgressIndicatorPainter._sweep : math.max(headValue * 3 / 2 * math.pi - tailValue * 3 / 2 * math.pi,_CircularProgressIndicatorPainter._epsilon);
        this.valueColor = valueColor;
        this.value = value;
        this.headValue = headValue;
        this.tailValue = tailValue;
        this.stepValue = stepValue;
        this.rotationValue = rotationValue;
        this.strokeWidth = strokeWidth;
    }
    valueColor : any;

    value : double;

    headValue : double;

    tailValue : double;

    stepValue : number;

    rotationValue : double;

    strokeWidth : double;

    arcStart : double;

    arcSweep : double;

    private static __$_twoPi : double;
    static get _twoPi() : double { 
        if (this.__$_twoPi===undefined) {
            this.__$_twoPi = op(Op.TIMES,math.pi,2.0);
        }
        return this.__$_twoPi;
    }

    private static __$_epsilon : double;
    static get _epsilon() : double { 
        if (this.__$_epsilon===undefined) {
            this.__$_epsilon = 0.001;
        }
        return this.__$_epsilon;
    }

    private static __$_sweep : double;
    static get _sweep() : double { 
        if (this.__$_sweep===undefined) {
            this.__$_sweep = _CircularProgressIndicatorPainter._twoPi - _CircularProgressIndicatorPainter._epsilon;
        }
        return this.__$_sweep;
    }

    private static __$_startAngle : double;
    static get _startAngle() : double { 
        if (this.__$_startAngle===undefined) {
            this.__$_startAngle = op(Op.DIVIDE,op(Op.NEG,math.pi),2.0);
        }
        return this.__$_startAngle;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,size : any) : any {
        let paint : any = ((_) : any =>  {
            {
                _.color = this.valueColor;
                _.strokeWidth = this.strokeWidth;
                _.style = PaintingStyle.stroke;
                return _;
            }
        })(Paint());
        if (this.value == null) paint.strokeCap = StrokeCap.square;
        canvas.drawArc(op(Op.BITAND,Offset.zero,size),this.arcStart,this.arcSweep,false,paint);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRepaint(oldPainter : _CircularProgressIndicatorPainter) : boolean {
        return oldPainter.valueColor != this.valueColor || oldPainter.value != this.value || oldPainter.headValue != this.headValue || oldPainter.tailValue != this.tailValue || oldPainter.stepValue != this.stepValue || oldPainter.rotationValue != this.rotationValue || oldPainter.strokeWidth != this.strokeWidth;
    }
}

export namespace _CircularProgressIndicatorState {
    export type Constructors = '_CircularProgressIndicatorState';
    export type Interface = Omit<_CircularProgressIndicatorState, Constructors>;
}
@DartClass
@With(any)
export class _CircularProgressIndicatorState extends any implements any.Interface {
    _controller : lib11.AnimationController;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._controller = lib11.AnimationController({
            duration : new core.DartDuration({
                seconds : 5}),vsync : this});
        if (op(Op.EQUALS,widget.value,null)) this._controller.repeat();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : CircularProgressIndicator) : any {
        super.didUpdateWidget(oldWidget);
        if (op(Op.EQUALS,widget.value,null) && !this._controller.isAnimating) this._controller.repeat();else if (widget.value != null && this._controller.isAnimating) this._controller.stop();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._controller.dispose();
        super.dispose();
    }
    _buildIndicator(context : lib3.BuildContext,headValue : double,tailValue : double,stepValue : number,rotationValue : double) : lib3.Widget {
        return widget._buildSemanticsWrapper({
            context : context,child : lib13.Container({
                constraints : new lib12.BoxConstraints({
                    minWidth : properties._kMinCircularProgressIndicatorSize,minHeight : properties._kMinCircularProgressIndicatorSize}),child : lib8.CustomPaint({
                    painter : _CircularProgressIndicatorPainter({
                        valueColor : widget._getValueColor(context),value : widget.value,headValue : headValue,tailValue : tailValue,stepValue : stepValue,rotationValue : rotationValue,strokeWidth : widget.strokeWidth})})})});
    }
    _buildAnimation() : lib3.Widget {
        return lib14.AnimatedBuilder({
            animation : this._controller,builder : (context : lib3.BuildContext,child : lib3.Widget) =>  {
                return this._buildIndicator(context,properties._kStrokeHeadTween.evaluate(this._controller),properties._kStrokeTailTween.evaluate(this._controller),properties._kStepTween.evaluate(this._controller),properties._kRotationTween.evaluate(this._controller));
            }});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        if (widget.value != null) return this._buildIndicator(context,0.0,0.0,0,0.0);
        return this._buildAnimation();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CircularProgressIndicatorState() {
    }
}

export namespace LinearProgressIndicator {
    export type Constructors = ProgressIndicator.Constructors | 'LinearProgressIndicator';
    export type Interface = Omit<LinearProgressIndicator, Constructors>;
}
@DartClass
export class LinearProgressIndicator extends ProgressIndicator {
    constructor(_namedArguments? : {key? : lib4.Key,value? : double,backgroundColor? : any,valueColor? : lib5.Animation<any>,semanticsLabel? : string,semanticsValue? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LinearProgressIndicator(_namedArguments? : {key? : lib4.Key,value? : double,backgroundColor? : any,valueColor? : lib5.Animation<any>,semanticsLabel? : string,semanticsValue? : string}) {
        let {key,value,backgroundColor,valueColor,semanticsLabel,semanticsValue} = Object.assign({
        }, _namedArguments );
        super.ProgressIndicator({
            key : key,value : value,backgroundColor : backgroundColor,valueColor : valueColor,semanticsLabel : semanticsLabel,semanticsValue : semanticsValue});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _LinearProgressIndicatorState {
        return _LinearProgressIndicatorState();
    }
}

export namespace CircularProgressIndicator {
    export type Constructors = ProgressIndicator.Constructors | 'CircularProgressIndicator';
    export type Interface = Omit<CircularProgressIndicator, Constructors>;
}
@DartClass
export class CircularProgressIndicator extends ProgressIndicator {
    constructor(_namedArguments? : {key? : lib4.Key,value? : double,backgroundColor? : any,valueColor? : lib5.Animation<any>,strokeWidth? : double,semanticsLabel? : string,semanticsValue? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CircularProgressIndicator(_namedArguments? : {key? : lib4.Key,value? : double,backgroundColor? : any,valueColor? : lib5.Animation<any>,strokeWidth? : double,semanticsLabel? : string,semanticsValue? : string}) {
        let {key,value,backgroundColor,valueColor,strokeWidth,semanticsLabel,semanticsValue} = Object.assign({
            "strokeWidth" : 4.0}, _namedArguments );
        super.ProgressIndicator({
            key : key,value : value,backgroundColor : backgroundColor,valueColor : valueColor,semanticsLabel : semanticsLabel,semanticsValue : semanticsValue});
        this.strokeWidth = strokeWidth;
    }
    strokeWidth : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _CircularProgressIndicatorState {
        return _CircularProgressIndicatorState();
    }
}

export namespace _RefreshProgressIndicatorPainter {
    export type Constructors = _CircularProgressIndicatorPainter.Constructors | '_RefreshProgressIndicatorPainter';
    export type Interface = Omit<_RefreshProgressIndicatorPainter, Constructors>;
}
@DartClass
export class _RefreshProgressIndicatorPainter extends _CircularProgressIndicatorPainter {
    constructor(_namedArguments? : {valueColor? : any,value? : double,headValue? : double,tailValue? : double,stepValue? : number,rotationValue? : double,strokeWidth? : double,arrowheadScale? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RefreshProgressIndicatorPainter(_namedArguments? : {valueColor? : any,value? : double,headValue? : double,tailValue? : double,stepValue? : number,rotationValue? : double,strokeWidth? : double,arrowheadScale? : double}) {
        let {valueColor,value,headValue,tailValue,stepValue,rotationValue,strokeWidth,arrowheadScale} = Object.assign({
        }, _namedArguments );
        super._CircularProgressIndicatorPainter({
            valueColor : valueColor,value : value,headValue : headValue,tailValue : tailValue,stepValue : stepValue,rotationValue : rotationValue,strokeWidth : strokeWidth});
        this.arrowheadScale = arrowheadScale;
    }
    arrowheadScale : double;

    paintArrowhead(canvas : any,size : any) : any {
        let arcEnd : double = this.arcStart + this.arcSweep;
        let ux : double = math.cos(arcEnd);
        let uy : double = math.sin(arcEnd);
        /* TODO (AssertStatementImpl) : assert (size.width == size.height); */;
        let radius : double = op(Op.DIVIDE,size.width,2.0);
        let arrowheadPointX : double = radius + ux * radius + -uy * this.strokeWidth * 2.0 * this.arrowheadScale;
        let arrowheadPointY : double = radius + uy * radius + ux * this.strokeWidth * 2.0 * this.arrowheadScale;
        let arrowheadRadius : double = this.strokeWidth * 1.5 * this.arrowheadScale;
        let innerRadius : double = radius - arrowheadRadius;
        let outerRadius : double = radius + arrowheadRadius;
        let path : any = ((_) : any =>  {
            {
                moveTo(radius + ux * innerRadius,radius + uy * innerRadius);
                lineTo(radius + ux * outerRadius,radius + uy * outerRadius);
                lineTo(arrowheadPointX,arrowheadPointY);
                close();
                return _;
            }
        })(Path());
        let paint : any = ((_) : any =>  {
            {
                _.color = this.valueColor;
                _.strokeWidth = this.strokeWidth;
                _.style = PaintingStyle.fill;
                return _;
            }
        })(Paint());
        canvas.drawPath(path,paint);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,size : any) : any {
        super.paint(canvas,size);
        if (this.arrowheadScale > 0.0) this.paintArrowhead(canvas,size);
    }
}

export namespace _RefreshProgressIndicatorState {
    export type Constructors = _CircularProgressIndicatorState.Constructors | '_RefreshProgressIndicatorState';
    export type Interface = Omit<_RefreshProgressIndicatorState, Constructors>;
}
@DartClass
export class _RefreshProgressIndicatorState extends _CircularProgressIndicatorState {
    private static __$_indicatorSize : double;
    static get _indicatorSize() : double { 
        if (this.__$_indicatorSize===undefined) {
            this.__$_indicatorSize = 40.0;
        }
        return this.__$_indicatorSize;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        if (widget.value != null) this._controller.value = op(Op.DIVIDE,widget.value,10.0);else if (!this._controller.isAnimating) this._controller.repeat();
        return this._buildAnimation();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _buildIndicator(context : lib3.BuildContext,headValue : double,tailValue : double,stepValue : number,rotationValue : double) : lib3.Widget {
        let arrowheadScale : double = op(Op.EQUALS,widget.value,null) ? 0.0 : (op(Op.TIMES,widget.value,2.0)).clamp(0.0,1.0);
        return widget._buildSemanticsWrapper({
            context : context,child : lib13.Container({
                width : _RefreshProgressIndicatorState._indicatorSize,height : _RefreshProgressIndicatorState._indicatorSize,margin : new lib17.EdgeInsets.all(4.0),child : lib18.Material({
                    type : lib18.MaterialType.circle,color : (widget.backgroundColor || lib6.Theme.of(context).canvasColor),elevation : 2.0,child : lib8.Padding({
                        padding : new lib17.EdgeInsets.all(12.0),child : lib8.CustomPaint({
                            painter : _RefreshProgressIndicatorPainter({
                                valueColor : widget._getValueColor(context),value : null,headValue : headValue,tailValue : tailValue,stepValue : stepValue,rotationValue : rotationValue,strokeWidth : widget.strokeWidth,arrowheadScale : arrowheadScale})})})})})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RefreshProgressIndicatorState() {
    }
}

export namespace RefreshProgressIndicator {
    export type Constructors = CircularProgressIndicator.Constructors | 'RefreshProgressIndicator';
    export type Interface = Omit<RefreshProgressIndicator, Constructors>;
}
@DartClass
export class RefreshProgressIndicator extends CircularProgressIndicator {
    constructor(_namedArguments? : {key? : lib4.Key,value? : double,backgroundColor? : any,valueColor? : lib5.Animation<any>,strokeWidth? : double,semanticsLabel? : string,semanticsValue? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RefreshProgressIndicator(_namedArguments? : {key? : lib4.Key,value? : double,backgroundColor? : any,valueColor? : lib5.Animation<any>,strokeWidth? : double,semanticsLabel? : string,semanticsValue? : string}) {
        let {key,value,backgroundColor,valueColor,strokeWidth,semanticsLabel,semanticsValue} = Object.assign({
            "strokeWidth" : 2.0}, _namedArguments );
        super.CircularProgressIndicator({
            key : key,value : value,backgroundColor : backgroundColor,valueColor : valueColor,strokeWidth : strokeWidth,semanticsLabel : semanticsLabel,semanticsValue : semanticsValue});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _RefreshProgressIndicatorState {
        return _RefreshProgressIndicatorState();
    }
}

export class properties {
    private static __$_kLinearProgressIndicatorHeight : double;
    static get _kLinearProgressIndicatorHeight() : double { 
        if (this.__$_kLinearProgressIndicatorHeight===undefined) {
            this.__$_kLinearProgressIndicatorHeight = 6.0;
        }
        return this.__$_kLinearProgressIndicatorHeight;
    }
    static set _kLinearProgressIndicatorHeight(__$value : double)  { 
        this.__$_kLinearProgressIndicatorHeight = __$value;
    }

    private static __$_kMinCircularProgressIndicatorSize : double;
    static get _kMinCircularProgressIndicatorSize() : double { 
        if (this.__$_kMinCircularProgressIndicatorSize===undefined) {
            this.__$_kMinCircularProgressIndicatorSize = 36.0;
        }
        return this.__$_kMinCircularProgressIndicatorSize;
    }
    static set _kMinCircularProgressIndicatorSize(__$value : double)  { 
        this.__$_kMinCircularProgressIndicatorSize = __$value;
    }

    private static __$_kIndeterminateLinearDuration : number;
    static get _kIndeterminateLinearDuration() : number { 
        if (this.__$_kIndeterminateLinearDuration===undefined) {
            this.__$_kIndeterminateLinearDuration = 1800;
        }
        return this.__$_kIndeterminateLinearDuration;
    }
    static set _kIndeterminateLinearDuration(__$value : number)  { 
        this.__$_kIndeterminateLinearDuration = __$value;
    }

    private static __$_kStrokeHeadTween : lib16.Animatable<double>;
    static get _kStrokeHeadTween() : lib16.Animatable<double> { 
        if (this.__$_kStrokeHeadTween===undefined) {
            this.__$_kStrokeHeadTween = lib16.CurveTween({
                curve : new lib10.Interval(0.0,0.5,{
                    curve : lib10.Curves.fastOutSlowIn})}).chain(lib16.CurveTween({
                curve : new lib10.SawTooth(5)}));
        }
        return this.__$_kStrokeHeadTween;
    }
    static set _kStrokeHeadTween(__$value : lib16.Animatable<double>)  { 
        this.__$_kStrokeHeadTween = __$value;
    }

    private static __$_kStrokeTailTween : lib16.Animatable<double>;
    static get _kStrokeTailTween() : lib16.Animatable<double> { 
        if (this.__$_kStrokeTailTween===undefined) {
            this.__$_kStrokeTailTween = lib16.CurveTween({
                curve : new lib10.Interval(0.5,1.0,{
                    curve : lib10.Curves.fastOutSlowIn})}).chain(lib16.CurveTween({
                curve : new lib10.SawTooth(5)}));
        }
        return this.__$_kStrokeTailTween;
    }
    static set _kStrokeTailTween(__$value : lib16.Animatable<double>)  { 
        this.__$_kStrokeTailTween = __$value;
    }

    private static __$_kStepTween : lib16.Animatable<number>;
    static get _kStepTween() : lib16.Animatable<number> { 
        if (this.__$_kStepTween===undefined) {
            this.__$_kStepTween = lib16.StepTween({
                begin : 0,end : 5});
        }
        return this.__$_kStepTween;
    }
    static set _kStepTween(__$value : lib16.Animatable<number>)  { 
        this.__$_kStepTween = __$value;
    }

    private static __$_kRotationTween : lib16.Animatable<double>;
    static get _kRotationTween() : lib16.Animatable<double> { 
        if (this.__$_kRotationTween===undefined) {
            this.__$_kRotationTween = lib16.CurveTween({
                curve : new lib10.SawTooth(5)});
        }
        return this.__$_kRotationTween;
    }
    static set _kRotationTween(__$value : lib16.Animatable<double>)  { 
        this.__$_kRotationTween = __$value;
    }

}
