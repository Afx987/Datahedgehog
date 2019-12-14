/** Library asset:datahedgehog_monitor/lib/lib/rendering/image.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./box";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/box_fit";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/decoration_image";
import * as lib7 from "./object";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export var _resolve : () => any = () : any =>  {
    if (properties._resolvedAlignment != null) return;
    properties._resolvedAlignment = properties.alignment.resolve(properties.textDirection);
    properties._flipHorizontally = properties.matchTextDirection && op(Op.EQUALS,properties.textDirection,TextDirection.rtl);
};
export var _markNeedResolution : () => any = () : any =>  {
    properties._resolvedAlignment = null;
    properties._flipHorizontally = null;
    markNeedsPaint();
};
export var _updateColorFilter : () => any = () : any =>  {
    if (op(Op.EQUALS,properties._color,null)) properties._colorFilter = null;else properties._colorFilter = ColorFilter.mode(properties._color,(properties._colorBlendMode || BlendMode.srcIn));
};
export var paint : (context : lib7.PaintingContext,offset : any) => any = (context : lib7.PaintingContext,offset : any) : any =>  {
    if (op(Op.EQUALS,properties._image,null)) return;
    _resolve();
    /* TODO (AssertStatementImpl) : assert (_resolvedAlignment != null); */;
    /* TODO (AssertStatementImpl) : assert (_flipHorizontally != null); */;
    lib6.paintImage({
        canvas : context.canvas,rect : op(Op.BITAND,offset,size),image : properties._image,scale : properties._scale,colorFilter : properties._colorFilter,fit : properties._fit,alignment : properties._resolvedAlignment,centerSlice : properties._centerSlice,repeat : properties._repeat,flipHorizontally : properties._flipHorizontally,invertColors : properties.invertColors,filterQuality : properties._filterQuality});
};
export var debugFillProperties : (properties : lib8.DiagnosticPropertiesBuilder) => any = (properties : lib8.DiagnosticPropertiesBuilder) : any =>  {
    super.debugFillProperties(properties);
    properties.add(lib8.DiagnosticsProperty('image',properties.image));
    properties.add(lib8.DoubleProperty('width',properties.width,{
        defaultValue : null}));
    properties.add(lib8.DoubleProperty('height',properties.height,{
        defaultValue : null}));
    properties.add(lib8.DoubleProperty('scale',properties.scale,{
        defaultValue : 1.0}));
    properties.add(lib8.DiagnosticsProperty('color',properties.color,{
        defaultValue : null}));
    properties.add(lib8.EnumProperty('colorBlendMode',properties.colorBlendMode,{
        defaultValue : null}));
    properties.add(lib8.EnumProperty('fit',properties.fit,{
        defaultValue : null}));
    properties.add(lib8.DiagnosticsProperty('alignment',properties.alignment,{
        defaultValue : null}));
    properties.add(lib8.EnumProperty('repeat',properties.repeat,{
        defaultValue : lib6.ImageRepeat.noRepeat}));
    properties.add(lib8.DiagnosticsProperty('centerSlice',properties.centerSlice,{
        defaultValue : null}));
    properties.add(lib8.FlagProperty('matchTextDirection',{
        value : properties.matchTextDirection,ifTrue : 'match text direction'}));
    properties.add(lib8.EnumProperty('textDirection',properties.textDirection,{
        defaultValue : null}));
    properties.add(lib8.DiagnosticsProperty('invertColors',properties.invertColors));
    properties.add(lib8.EnumProperty('filterQuality',properties.filterQuality));
};
export var _sizeForConstraints : (constraints : lib3.BoxConstraints) => any = (constraints : lib3.BoxConstraints) : any =>  {
    constraints = lib3.BoxConstraints.tightFor({
        width : properties._width,height : properties._height}).enforce(constraints);
    if (op(Op.EQUALS,properties._image,null)) return constraints.smallest;
    return constraints.constrainSizeAndAttemptToPreserveAspectRatio(Size(op(Op.DIVIDE,properties._image.width.toDouble(),properties._scale),op(Op.DIVIDE,properties._image.height.toDouble(),properties._scale)));
};
export var computeMinIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    /* TODO (AssertStatementImpl) : assert (height >= 0.0); */;
    if (properties._width == null && properties._height == null) return 0.0;
    return _sizeForConstraints(lib3.BoxConstraints.tightForFinite({
        height : height})).width;
};
export var computeMaxIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    /* TODO (AssertStatementImpl) : assert (height >= 0.0); */;
    return _sizeForConstraints(lib3.BoxConstraints.tightForFinite({
        height : height})).width;
};
export var computeMinIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    /* TODO (AssertStatementImpl) : assert (width >= 0.0); */;
    if (properties._width == null && properties._height == null) return 0.0;
    return _sizeForConstraints(lib3.BoxConstraints.tightForFinite({
        width : width})).height;
};
export var computeMaxIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    /* TODO (AssertStatementImpl) : assert (width >= 0.0); */;
    return _sizeForConstraints(lib3.BoxConstraints.tightForFinite({
        width : width})).height;
};
export var hitTestSelf : (position : any) => boolean = (position : any) : boolean =>  {
    return true;
};
export var performLayout : () => any = () : any =>  {
    size = _sizeForConstraints(constraints);
};
export namespace RenderImage {
    export type Constructors = lib3.RenderBox.Constructors | 'RenderImage';
    export type Interface = Omit<RenderImage, Constructors>;
}
@DartClass
export class RenderImage extends lib3.RenderBox {
    constructor(_namedArguments? : {image? : any,width? : double,height? : double,scale? : double,color? : any,colorBlendMode? : any,fit? : lib4.BoxFit,alignment? : lib5.AlignmentGeometry,repeat? : lib6.ImageRepeat,centerSlice? : any,matchTextDirection? : boolean,textDirection? : any,invertColors? : boolean,filterQuality? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderImage(_namedArguments? : {image? : any,width? : double,height? : double,scale? : double,color? : any,colorBlendMode? : any,fit? : lib4.BoxFit,alignment? : lib5.AlignmentGeometry,repeat? : lib6.ImageRepeat,centerSlice? : any,matchTextDirection? : boolean,textDirection? : any,invertColors? : boolean,filterQuality? : any}) {
        let {image,width,height,scale,color,colorBlendMode,fit,alignment,repeat,centerSlice,matchTextDirection,textDirection,invertColors,filterQuality} = Object.assign({
            "scale" : 1.0,
            "alignment" : lib5.Alignment.center,
            "repeat" : lib6.ImageRepeat.noRepeat,
            "matchTextDirection" : false,
            "invertColors" : false,
            "filterQuality" : FilterQuality.low}, _namedArguments );
        this._image = properties.image;
        this._width = properties.width;
        this._height = properties.height;
        this._scale = properties.scale;
        this._color = properties.color;
        this._colorBlendMode = properties.colorBlendMode;
        this._fit = properties.fit;
        this._alignment = properties.alignment;
        this._repeat = properties.repeat;
        this._centerSlice = properties.centerSlice;
        this._matchTextDirection = properties.matchTextDirection;
        this._invertColors = properties.invertColors;
        this._textDirection = properties.textDirection;
        this._filterQuality = properties.filterQuality;
        this.assert = assert;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    _image;
    _width;
    _height;
    _scale;
    _color;
    _colorBlendMode;
    _fit;
    _alignment;
    _repeat;
    _centerSlice;
    _matchTextDirection;
    _invertColors;
    _textDirection;
    _filterQuality;

    @Abstract
    _updateColorFilter(){ throw 'abstract'}
}

export class properties {
    static get color() : any {
        return properties._color;
    }
    private static __$_resolvedAlignment : lib5.Alignment;
    static get _resolvedAlignment() : lib5.Alignment { 
        return this.__$_resolvedAlignment;
    }
    static set _resolvedAlignment(__$value : lib5.Alignment)  { 
        this.__$_resolvedAlignment = __$value;
    }

    private static __$_flipHorizontally : boolean;
    static get _flipHorizontally() : boolean { 
        return this.__$_flipHorizontally;
    }
    static set _flipHorizontally(__$value : boolean)  { 
        this.__$_flipHorizontally = __$value;
    }

    static get image() : any {
        return properties._image;
    }
    private static __$_image : any;
    static get _image() : any { 
        return this.__$_image;
    }
    static set _image(__$value : any)  { 
        this.__$_image = __$value;
    }

    static set image(value : any) {
        if (op(Op.EQUALS,value,properties._image)) return;
        properties._image = value;
        markNeedsPaint();
        if (properties._width == null || properties._height == null) markNeedsLayout();
    }
    static get width() : double {
        return properties._width;
    }
    private static __$_width : double;
    static get _width() : double { 
        return this.__$_width;
    }
    static set _width(__$value : double)  { 
        this.__$_width = __$value;
    }

    static set width(value : double) {
        if (value == properties._width) return;
        properties._width = value;
        markNeedsLayout();
    }
    static get height() : double {
        return properties._height;
    }
    private static __$_height : double;
    static get _height() : double { 
        return this.__$_height;
    }
    static set _height(__$value : double)  { 
        this.__$_height = __$value;
    }

    static set height(value : double) {
        if (value == properties._height) return;
        properties._height = value;
        markNeedsLayout();
    }
    static get scale() : double {
        return properties._scale;
    }
    private static __$_scale : double;
    static get _scale() : double { 
        return this.__$_scale;
    }
    static set _scale(__$value : double)  { 
        this.__$_scale = __$value;
    }

    static set scale(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (value == properties._scale) return;
        properties._scale = value;
        markNeedsLayout();
    }
    private static __$_colorFilter : any;
    static get _colorFilter() : any { 
        return this.__$_colorFilter;
    }
    static set _colorFilter(__$value : any)  { 
        this.__$_colorFilter = __$value;
    }

    private static __$_color : any;
    static get _color() : any { 
        return this.__$_color;
    }
    static set _color(__$value : any)  { 
        this.__$_color = __$value;
    }

    static set color(value : any) {
        if (op(Op.EQUALS,value,properties._color)) return;
        properties._color = value;
        _updateColorFilter();
        markNeedsPaint();
    }
    static get filterQuality() : any {
        return properties._filterQuality;
    }
    private static __$_filterQuality : any;
    static get _filterQuality() : any { 
        return this.__$_filterQuality;
    }
    static set _filterQuality(__$value : any)  { 
        this.__$_filterQuality = __$value;
    }

    static set filterQuality(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,value,properties._filterQuality)) return;
        properties._filterQuality = value;
        markNeedsPaint();
    }
    static get colorBlendMode() : any {
        return properties._colorBlendMode;
    }
    private static __$_colorBlendMode : any;
    static get _colorBlendMode() : any { 
        return this.__$_colorBlendMode;
    }
    static set _colorBlendMode(__$value : any)  { 
        this.__$_colorBlendMode = __$value;
    }

    static set colorBlendMode(value : any) {
        if (op(Op.EQUALS,value,properties._colorBlendMode)) return;
        properties._colorBlendMode = value;
        _updateColorFilter();
        markNeedsPaint();
    }
    static get fit() : lib4.BoxFit {
        return properties._fit;
    }
    private static __$_fit : lib4.BoxFit;
    static get _fit() : lib4.BoxFit { 
        return this.__$_fit;
    }
    static set _fit(__$value : lib4.BoxFit)  { 
        this.__$_fit = __$value;
    }

    static set fit(value : lib4.BoxFit) {
        if (op(Op.EQUALS,value,properties._fit)) return;
        properties._fit = value;
        markNeedsPaint();
    }
    static get alignment() : lib5.AlignmentGeometry {
        return properties._alignment;
    }
    private static __$_alignment : lib5.AlignmentGeometry;
    static get _alignment() : lib5.AlignmentGeometry { 
        return this.__$_alignment;
    }
    static set _alignment(__$value : lib5.AlignmentGeometry)  { 
        this.__$_alignment = __$value;
    }

    static set alignment(value : lib5.AlignmentGeometry) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,value,properties._alignment)) return;
        properties._alignment = value;
        _markNeedResolution();
    }
    static get repeat() : lib6.ImageRepeat {
        return properties._repeat;
    }
    private static __$_repeat : lib6.ImageRepeat;
    static get _repeat() : lib6.ImageRepeat { 
        return this.__$_repeat;
    }
    static set _repeat(__$value : lib6.ImageRepeat)  { 
        this.__$_repeat = __$value;
    }

    static set repeat(value : lib6.ImageRepeat) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,value,properties._repeat)) return;
        properties._repeat = value;
        markNeedsPaint();
    }
    private static __$_centerSlice : any;
    static get _centerSlice() : any { 
        return this.__$_centerSlice;
    }
    static set _centerSlice(__$value : any)  { 
        this.__$_centerSlice = __$value;
    }

    static set centerSlice(value : any) {
        if (op(Op.EQUALS,value,properties._centerSlice)) return;
        properties._centerSlice = value;
        markNeedsPaint();
    }
    static get invertColors() : boolean {
        return properties._invertColors;
    }
    private static __$_invertColors : boolean;
    static get _invertColors() : boolean { 
        return this.__$_invertColors;
    }
    static set _invertColors(__$value : boolean)  { 
        this.__$_invertColors = __$value;
    }

    static set invertColors(value : boolean) {
        if (value == properties._invertColors) return;
        properties._invertColors = value;
        markNeedsPaint();
    }
    static get matchTextDirection() : boolean {
        return properties._matchTextDirection;
    }
    private static __$_matchTextDirection : boolean;
    static get _matchTextDirection() : boolean { 
        return this.__$_matchTextDirection;
    }
    static set _matchTextDirection(__$value : boolean)  { 
        this.__$_matchTextDirection = __$value;
    }

    static set matchTextDirection(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (value == properties._matchTextDirection) return;
        properties._matchTextDirection = value;
        _markNeedResolution();
    }
    static get textDirection() : any {
        return properties._textDirection;
    }
    private static __$_textDirection : any;
    static get _textDirection() : any { 
        return this.__$_textDirection;
    }
    static set _textDirection(__$value : any)  { 
        this.__$_textDirection = __$value;
    }

    static set textDirection(value : any) {
        if (op(Op.EQUALS,properties._textDirection,value)) return;
        properties._textDirection = value;
        _markNeedResolution();
    }
    static get centerSlice() : any {
        return properties._centerSlice;
    }
}
