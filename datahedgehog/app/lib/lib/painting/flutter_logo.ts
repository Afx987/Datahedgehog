/** Library asset:datahedgehog_monitor/lib/lib/painting/flutter_logo.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./decoration";
import * as lib4 from "./edge_insets";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib6 from "./text_painter";
import * as lib7 from "./text_style";
import * as lib8 from "./text_span";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/services/text_editing";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as lib11 from "./image_provider";
import * as lib12 from "./box_fit";
import * as lib13 from "./alignment";
import * as math from "@dart2ts/dart/math";

export var _prepareText : () => any = () : any =>  {
    let kLabel : string = 'Flutter';
    properties._textPainter = lib6.TextPainter({
        text : lib8.TextSpan({
            text : kLabel,style : lib7.TextStyle({
                color : properties._config.textColor,fontFamily : 'Roboto',fontSize : 100.0 * 350.0 / 247.0,fontWeight : FontWeight.w300,textBaseline : TextBaseline.alphabetic})}),textDirection : TextDirection.ltr});
    properties._textPainter.layout();
    let textSize : any = properties._textPainter.getBoxesForSelection(new lib9.TextSelection({
        baseOffset : 0,extentOffset : new core.DartString(kLabel).length})).single;
    properties._textBoundingRect = Rect.fromLTRB(textSize.left,textSize.top,textSize.right,textSize.bottom);
};
export var _paintLogo : (canvas : any,rect : any) => any = (canvas : any,rect : any) : any =>  {
    canvas.save();
    canvas.translate(rect.left,rect.top);
    canvas.scale(op(Op.DIVIDE,rect.width,202.0),op(Op.DIVIDE,rect.height,202.0));
    canvas.translate((202.0 - 166.0) / 2.0,0.0);
    let lightPaint : any = ((_) : any =>  {
        {
            _.color = properties._config.lightColor.withOpacity(0.8);
            return _;
        }
    })(Paint());
    let mediumPaint : any = ((_) : any =>  {
        {
            _.color = properties._config.lightColor;
            return _;
        }
    })(Paint());
    let darkPaint : any = ((_) : any =>  {
        {
            _.color = properties._config.darkColor;
            return _;
        }
    })(Paint());
    let triangleGradient : any = ui.Gradient.linear(new bare.createInstance(any,null,87.2623 + 37.9092,28.8384 + 123.4389),new bare.createInstance(any,null,42.9205 + 37.9092,35.0952 + 123.4389),new core.DartList.literal<any>(new bare.createInstance(any,null,3221225471),new bare.createInstance(any,null,3221028092),new bare.createInstance(any,null,3220501748),new bare.createInstance(any,null,3219514853),new bare.createInstance(any,null,3218198993),new bare.createInstance(any,null,3216422582),new bare.createInstance(any,null,3214251413),new bare.createInstance(any,null,3211685486),new bare.createInstance(any,null,3210830177)),new core.DartList.literal<double>(0.269,0.4093,0.4972,0.5708,0.6364,0.6968,0.7533,0.8058,0.8219));
    let trianglePaint : any = ((_) : any =>  {
        {
            _.shader = triangleGradient;
            _.blendMode = BlendMode.multiply;
            return _;
        }
    })(Paint());
    let rectangleGradient : any = ui.Gradient.linear(new bare.createInstance(any,null,62.3643 + 37.9092,40.135 + 123.4389),new bare.createInstance(any,null,54.0376 + 37.9092,31.8083 + 123.4389),new core.DartList.literal<any>(new bare.createInstance(any,null,2164260863),new bare.createInstance(any,null,2164063484),new bare.createInstance(any,null,2163537140),new bare.createInstance(any,null,2162550245),new bare.createInstance(any,null,2161234385),new bare.createInstance(any,null,2159457974),new bare.createInstance(any,null,2157286805),new bare.createInstance(any,null,2154720878),new bare.createInstance(any,null,2153865569)),new core.DartList.literal<double>(0.4588,0.5509,0.6087,0.657,0.7001,0.7397,0.7768,0.8113,0.8219));
    let rectanglePaint : any = ((_) : any =>  {
        {
            _.shader = rectangleGradient;
            _.blendMode = BlendMode.multiply;
            return _;
        }
    })(Paint());
    let topBeam : any = ((_) : any =>  {
        {
            moveTo(37.7,128.9);
            lineTo(9.8,101.0);
            lineTo(100.4,10.4);
            lineTo(156.2,10.4);
            return _;
        }
    })(Path());
    canvas.drawPath(topBeam,lightPaint);
    let middleBeam : any = ((_) : any =>  {
        {
            moveTo(156.2,94.0);
            lineTo(100.4,94.0);
            lineTo(79.5,114.9);
            lineTo(107.4,142.8);
            return _;
        }
    })(Path());
    canvas.drawPath(middleBeam,lightPaint);
    let bottomBeam : any = ((_) : any =>  {
        {
            moveTo(79.5,170.7);
            lineTo(100.4,191.6);
            lineTo(156.2,191.6);
            lineTo(156.2,191.6);
            lineTo(107.4,142.8);
            return _;
        }
    })(Path());
    canvas.drawPath(bottomBeam,darkPaint);
    canvas.save();
    canvas.transform(typed_data.Float64List.fromList(new core.DartList.literal<double>(0.7071,-0.7071,0.0,0.0,0.7071,0.7071,0.0,0.0,0.0,0.0,1.0,0.0,-77.697,98.057,0.0,1.0)));
    canvas.drawRect(Rect.fromLTWH(59.8,123.1,39.4,39.4),mediumPaint);
    canvas.restore();
    let triangle : any = ((_) : any =>  {
        {
            moveTo(79.5,170.7);
            lineTo(120.9,156.4);
            lineTo(107.4,142.8);
            return _;
        }
    })(Path());
    canvas.drawPath(triangle,trianglePaint);
    let rectangle : any = ((_) : any =>  {
        {
            moveTo(107.4,142.8);
            lineTo(79.5,170.7);
            lineTo(86.1,177.3);
            lineTo(114.0,149.4);
            return _;
        }
    })(Path());
    canvas.drawPath(rectangle,rectanglePaint);
    canvas.restore();
};
export var paint : (canvas : any,offset : any,configuration : lib11.ImageConfiguration) => any = (canvas : any,offset : any,configuration : lib11.ImageConfiguration) : any =>  {
    offset += properties._config.margin.topLeft;
    let canvasSize : any = properties._config.margin.deflateSize(configuration.size);
    if (canvasSize.isEmpty) return;
    let logoSize : any;
    if (op(Op.GT,properties._config._position,0.0)) {
        logoSize = new bare.createInstance(any,null,820.0,232.0);
    }else if (op(Op.LT,properties._config._position,0.0)) {
        logoSize = new bare.createInstance(any,null,252.0,306.0);
    }else {
        logoSize = new bare.createInstance(any,null,202.0,202.0);
    }
    let fittedSize : lib12.FittedSizes = lib12.applyBoxFit(lib12.BoxFit.contain,logoSize,canvasSize);
    /* TODO (AssertStatementImpl) : assert (fittedSize.source == logoSize); */;
    let rect : any = lib13.Alignment.center.inscribe(fittedSize.destination,op(Op.BITAND,offset,canvasSize));
    let centerSquareHeight : double = canvasSize.shortestSide;
    let centerSquare : any = Rect.fromLTWH(op(Op.PLUS,offset.dx,op(Op.DIVIDE,(op(Op.MINUS,canvasSize.width,centerSquareHeight)),2.0)),op(Op.PLUS,offset.dy,op(Op.DIVIDE,(op(Op.MINUS,canvasSize.height,centerSquareHeight)),2.0)),centerSquareHeight,centerSquareHeight);
    let logoTargetSquare : any;
    if (op(Op.GT,properties._config._position,0.0)) {
        logoTargetSquare = Rect.fromLTWH(rect.left,rect.top,rect.height,rect.height);
    }else if (op(Op.LT,properties._config._position,0.0)) {
        let logoHeight : double = op(Op.DIVIDE,op(Op.TIMES,rect.height,191.0),306.0);
        logoTargetSquare = Rect.fromLTWH(op(Op.PLUS,rect.left,op(Op.DIVIDE,(op(Op.MINUS,rect.width,logoHeight)),2.0)),rect.top,logoHeight,logoHeight);
    }else {
        logoTargetSquare = centerSquare;
    }
    let logoSquare : any = Rect.lerp(centerSquare,logoTargetSquare,properties._config._position.abs());
    if (op(Op.LT,properties._config._opacity,1.0)) {
        canvas.saveLayer(op(Op.BITAND,offset,canvasSize),((_) : any =>  {
            {
                _.colorFilter = ColorFilter.mode(new bare.createInstance(any,null,4294967295).withOpacity(properties._config._opacity),BlendMode.modulate);
                return _;
            }
        })(Paint()));
    }
    if (properties._config._position != 0.0) {
        if (op(Op.GT,properties._config._position,0.0)) {
            let fontSize : double = 2.0 / 3.0 * logoSquare.height * (1 - (10.4 * 2.0) / 202.0);
            let scale : double = fontSize / 100.0;
            let finalLeftTextPosition : double = (256.4 / 820.0) * rect.width - (32.0 / 350.0) * fontSize;
            let initialLeftTextPosition : double = op(Op.MINUS,op(Op.DIVIDE,rect.width,2.0),op(Op.TIMES,properties._textBoundingRect.width,scale));
            let textOffset : any = Offset(op(Op.PLUS,rect.left,ui.lerpDouble(initialLeftTextPosition,finalLeftTextPosition,properties._config._position)),op(Op.PLUS,rect.top,op(Op.DIVIDE,(op(Op.MINUS,rect.height,op(Op.TIMES,properties._textBoundingRect.height,scale))),2.0)));
            canvas.save();
            if (op(Op.LT,properties._config._position,1.0)) {
                let center : any = logoSquare.center;
                let path : any = ((_) : any =>  {
                    {
                        moveTo(center.dx,center.dy);
                        lineTo(op(Op.PLUS,center.dx,rect.width),op(Op.MINUS,center.dy,rect.width));
                        lineTo(op(Op.PLUS,center.dx,rect.width),op(Op.PLUS,center.dy,rect.width));
                        close();
                        return _;
                    }
                })(Path());
                canvas.clipPath(path);
            }
            canvas.translate(textOffset.dx,textOffset.dy);
            canvas.scale(scale,scale);
            properties._textPainter.paint(canvas,Offset.zero);
            canvas.restore();
        }else if (op(Op.LT,properties._config._position,0.0)) {
            let fontSize : double = 0.35 * logoTargetSquare.height * (1 - (10.4 * 2.0) / 202.0);
            let scale : double = fontSize / 100.0;
            if (op(Op.GT,properties._config._position,-1.0)) {
                canvas.saveLayer(properties._textBoundingRect,Paint());
            }else {
                canvas.save();
            }
            canvas.translate(op(Op.MINUS,logoTargetSquare.center.dx,(op(Op.DIVIDE,op(Op.TIMES,properties._textBoundingRect.width,scale),2.0))),logoTargetSquare.bottom);
            canvas.scale(scale,scale);
            properties._textPainter.paint(canvas,Offset.zero);
            if (op(Op.GT,properties._config._position,-1.0)) {
                canvas.drawRect(properties._textBoundingRect.inflate(op(Op.TIMES,properties._textBoundingRect.width,0.5)),((_) : any =>  {
                    {
                        _.blendMode = BlendMode.modulate;
                        _.shader = ui.Gradient.linear(Offset(op(Op.TIMES,properties._textBoundingRect.width,-0.5),0.0),Offset(op(Op.TIMES,properties._textBoundingRect.width,1.5),0.0),new core.DartList.literal<any>(new bare.createInstance(any,null,4294967295),new bare.createInstance(any,null,4294967295),new bare.createInstance(any,null,16777215),new bare.createInstance(any,null,16777215)),new core.DartList.literal<double>(0.0,math.max(0.0,op(Op.MINUS,properties._config._position.abs(),0.1)),math.min(op(Op.PLUS,properties._config._position.abs(),0.1),1.0),1.0));
                        return _;
                    }
                })(Paint()));
            }
            canvas.restore();
        }
    }
    _paintLogo(canvas,logoSquare);
    if (op(Op.LT,properties._config._opacity,1.0)) canvas.restore();
};
export enum FlutterLogoStyle {
    markOnly,
    horizontal,
    stacked
}

export namespace FlutterLogoDecoration {
    export type Constructors = lib3.Decoration.Constructors | 'FlutterLogoDecoration' | '_';
    export type Interface = Omit<FlutterLogoDecoration, Constructors>;
}
@DartClass
export class FlutterLogoDecoration extends lib3.Decoration {
    constructor(_namedArguments? : {lightColor? : any,darkColor? : any,textColor? : any,style? : FlutterLogoStyle,margin? : lib4.EdgeInsets}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FlutterLogoDecoration(_namedArguments? : {lightColor? : any,darkColor? : any,textColor? : any,style? : FlutterLogoStyle,margin? : lib4.EdgeInsets}) {
        let {lightColor,darkColor,textColor,style,margin} = Object.assign({
            "lightColor" : new bare.createInstance(any,null,4282557941),
            "darkColor" : new bare.createInstance(any,null,4279060385),
            "textColor" : new bare.createInstance(any,null,4284572001),
            "style" : FlutterLogoStyle.markOnly,
            "margin" : lib4.EdgeInsets.zero}, _namedArguments );
        this._position = op(Op.EQUALS,this.style,FlutterLogoStyle.markOnly) ? 0.0 : op(Op.EQUALS,this.style,FlutterLogoStyle.horizontal) ? 1.0 : -1.0;
        this._opacity = 1.0;
        this.assert = assert;
        this.lightColor = lightColor;
        this.darkColor = darkColor;
        this.textColor = textColor;
        this.style = style;
        this.margin = margin;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    _position;
    _opacity;

    @namedConstructor
    _(lightColor : any,darkColor : any,textColor : any,style : FlutterLogoStyle,margin : lib4.EdgeInsets,_position : any,_opacity : any) {
        this._position = op(Op.EQUALS,this.style,FlutterLogoStyle.markOnly) ? 0.0 : op(Op.EQUALS,this.style,FlutterLogoStyle.horizontal) ? 1.0 : -1.0;
        this._opacity = 1.0;
        this.lightColor = lightColor;
        this.darkColor = darkColor;
        this.textColor = textColor;
        this.style = style;
        this.margin = margin;
        this._position = _position;
        this._opacity = _opacity;
    }
    static _ : new(lightColor : any,darkColor : any,textColor : any,style : FlutterLogoStyle,margin : lib4.EdgeInsets,_position : any,_opacity : any) => FlutterLogoDecoration;

    lightColor : any;

    darkColor : any;

    textColor : any;

    style : FlutterLogoStyle;

    margin : lib4.EdgeInsets;

    _position : double;

    _opacity : double;

    get _inTransition() : boolean {
        return this._opacity != 1.0 || (this._position != -1.0 && this._position != 0.0 && this._position != 1.0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugAssertIsValid() : boolean {
        /* TODO (AssertStatementImpl) : assert (lightColor != null && darkColor != null && textColor != null && style != null && margin != null && _position != null && _position.isFinite && _opacity != null && _opacity >= 0.0 && _opacity <= 1.0); */;
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isComplex() : boolean {
        return !this._inTransition;
    }
    static lerp(a : FlutterLogoDecoration,b : FlutterLogoDecoration,t : double) : FlutterLogoDecoration {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        /* TODO (AssertStatementImpl) : assert (a == null || a.debugAssertIsValid()); */;
        /* TODO (AssertStatementImpl) : assert (b == null || b.debugAssertIsValid()); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) {
            return FlutterLogoDecoration._(b.lightColor,b.darkColor,b.textColor,b.style,op(Op.TIMES,b.margin,t),b._position,op(Op.TIMES,b._opacity,new core.DartDouble(t).clamp(0.0,1.0)));
        }
        if (op(Op.EQUALS,b,null)) {
            return FlutterLogoDecoration._(a.lightColor,a.darkColor,a.textColor,a.style,op(Op.TIMES,a.margin,t),a._position,op(Op.TIMES,a._opacity,new core.DartDouble((1.0 - t)).clamp(0.0,1.0)));
        }
        if (t == 0.0) return a;
        if (t == 1.0) return b;
        return FlutterLogoDecoration._(Color.lerp(a.lightColor,b.lightColor,t),Color.lerp(a.darkColor,b.darkColor,t),Color.lerp(a.textColor,b.textColor,t),t < 0.5 ? a.style : b.style,lib4.EdgeInsets.lerp(a.margin,b.margin,t),op(Op.PLUS,a._position,op(Op.TIMES,(op(Op.MINUS,b._position,a._position)),t)),(op(Op.PLUS,a._opacity,op(Op.TIMES,(op(Op.MINUS,b._opacity,a._opacity)),t))).clamp(0.0,1.0));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : lib3.Decoration,t : double) : FlutterLogoDecoration {
        /* TODO (AssertStatementImpl) : assert (debugAssertIsValid()); */;
        if (op(Op.EQUALS,a,null) || is(a, FlutterLogoDecoration)) {
            /* TODO (AssertStatementImpl) : assert (a == null || a.debugAssertIsValid()); */;
            return FlutterLogoDecoration.lerp(a,this,t);
        }
        return super.lerpFrom(a,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : lib3.Decoration,t : double) : FlutterLogoDecoration {
        /* TODO (AssertStatementImpl) : assert (debugAssertIsValid()); */;
        if (op(Op.EQUALS,b,null) || is(b, FlutterLogoDecoration)) {
            /* TODO (AssertStatementImpl) : assert (b == null || b.debugAssertIsValid()); */;
            return FlutterLogoDecoration.lerp(this,b,t);
        }
        return super.lerpTo(b,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTest(size : any,position : any,_namedArguments? : {textDirection? : any}) : boolean {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createBoxPainter(onChanged? : any) : lib3.BoxPainter {
        /* TODO (AssertStatementImpl) : assert (debugAssertIsValid()); */;
        return _FlutterLogoPainter(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        /* TODO (AssertStatementImpl) : assert (debugAssertIsValid()); */;
        if (core.identical(this,other)) return true;
        if (isNot(other, FlutterLogoDecoration)) return false;
        let typedOther : FlutterLogoDecoration = other;
        return op(Op.EQUALS,this.lightColor,typedOther.lightColor) && op(Op.EQUALS,this.darkColor,typedOther.darkColor) && op(Op.EQUALS,this.textColor,typedOther.textColor) && op(Op.EQUALS,this._position,typedOther._position) && op(Op.EQUALS,this._opacity,typedOther._opacity);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        /* TODO (AssertStatementImpl) : assert (debugAssertIsValid()); */;
        return hashValues(this.lightColor,this.darkColor,this.textColor,this._position,this._opacity);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DiagnosticsNode.message(`${this.lightColor}/${this.darkColor} on ${this.textColor}`));
        properties.add(lib5.EnumProperty('style',this.style));
        if (this._inTransition) properties.add(lib5.DiagnosticsNode.message(`transition ${this._position}:${this._opacity}`));
    }
}

export namespace _FlutterLogoPainter {
    export type Constructors = lib3.BoxPainter.Constructors | '_FlutterLogoPainter' | 'debugAssertIsValid';
    export type Interface = Omit<_FlutterLogoPainter, Constructors>;
}
@DartClass
export class _FlutterLogoPainter extends lib3.BoxPainter {
    constructor(_config : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FlutterLogoPainter(_config : any) {
        this.assert = assert;
        this._config = _config;
    }
     : any;

    @namedConstructor
    debugAssertIsValid() {
    }
    static debugAssertIsValid : new() => _FlutterLogoPainter;

    @Abstract
    _prepareText(){ throw 'abstract'}
}

export class properties {
    private static __$_config : FlutterLogoDecoration;
    static get _config() : FlutterLogoDecoration { 
        return this.__$_config;
    }
    static set _config(__$value : FlutterLogoDecoration)  { 
        this.__$_config = __$value;
    }

    private static __$_textPainter : lib6.TextPainter;
    static get _textPainter() : lib6.TextPainter { 
        return this.__$_textPainter;
    }
    static set _textPainter(__$value : lib6.TextPainter)  { 
        this.__$_textPainter = __$value;
    }

    private static __$_textBoundingRect : any;
    static get _textBoundingRect() : any { 
        return this.__$_textBoundingRect;
    }
    static set _textBoundingRect(__$value : any)  { 
        this.__$_textBoundingRect = __$value;
    }

}
