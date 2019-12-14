/** Library asset:datahedgehog_monitor/lib/lib/widgets/banner.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/rendering/custom_paint";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/box_shadow";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/text_painter";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/text_span";
import * as math from "@dart2ts/dart/math";
import * as lib9 from "./framework";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib11 from "./basic";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export enum BannerLocation {
    topStart,
    topEnd,
    bottomStart,
    bottomEnd
}

export namespace BannerPainter {
    export type Constructors = lib4.CustomPainter.Constructors | 'BannerPainter';
    export type Interface = Omit<BannerPainter, Constructors>;
}
@DartClass
export class BannerPainter extends lib4.CustomPainter {
    constructor(_namedArguments? : {message? : string,textDirection? : any,location? : BannerLocation,layoutDirection? : any,color? : any,textStyle? : lib3.TextStyle}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BannerPainter(_namedArguments? : {message? : string,textDirection? : any,location? : BannerLocation,layoutDirection? : any,color? : any,textStyle? : lib3.TextStyle}) {
        let {message,textDirection,location,layoutDirection,color,textStyle} = Object.assign({
            "color" : properties._kColor,
            "textStyle" : properties._kTextStyle}, _namedArguments );
        this._prepared = false;
        this.assert = assert;
        this.message = message;
        this.textDirection = textDirection;
        this.location = location;
        this.layoutDirection = layoutDirection;
        this.color = color;
        this.textStyle = textStyle;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    message : string;

    textDirection : any;

    location : BannerLocation;

    layoutDirection : any;

    color : any;

    textStyle : lib3.TextStyle;

    private static __$_shadow : lib5.BoxShadow;
    static get _shadow() : lib5.BoxShadow { 
        if (this.__$_shadow===undefined) {
            this.__$_shadow = lib5.BoxShadow({
                color : Color(2130706432),blurRadius : 6.0});
        }
        return this.__$_shadow;
    }

    _prepared : boolean;

    _textPainter : lib6.TextPainter;

    _paintShadow : any;

    _paintBanner : any;

    _prepare() : any {
        this._paintShadow = BannerPainter._shadow.toPaint();
        this._paintBanner = ((_) : any =>  {
            {
                _.color = this.color;
                return _;
            }
        })(Paint());
        this._textPainter = lib6.TextPainter({
            text : lib7.TextSpan({
                style : this.textStyle,text : this.message}),textAlign : TextAlign.center,textDirection : this.textDirection});
        this._prepared = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,size : any) : any {
        if (!this._prepared) this._prepare();
        ((_) : any =>  {
            {
                translate(this._translationX(size.width),this._translationY(size.height));
                rotate(this._rotation);
                drawRect(properties._kRect,this._paintShadow);
                drawRect(properties._kRect,this._paintBanner);
                return _;
            }
        })(canvas);
        let width : double = properties._kOffset * 2.0;
        this._textPainter.layout({
            minWidth : width,maxWidth : width});
        this._textPainter.paint(canvas,op(Op.PLUS,properties._kRect.topLeft,Offset(0.0,op(Op.DIVIDE,(op(Op.MINUS,properties._kRect.height,this._textPainter.height)),2.0))));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRepaint(oldDelegate : BannerPainter) : boolean {
        return this.message != oldDelegate.message || this.location != oldDelegate.location || this.color != oldDelegate.color || this.textStyle != oldDelegate.textStyle;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTest(position : any) : boolean {
        return false;
    }
    _translationX(width : double) : double {
        /* TODO (AssertStatementImpl) : assert (location != null); */;
        /* TODO (AssertStatementImpl) : assert (layoutDirection != null); */;
        switch (this.layoutDirection) {
            case TextDirection.rtl:
                switch (this.location) {
                    case BannerLocation.bottomEnd:
                        return properties._kBottomOffset;
                    case BannerLocation.topEnd:
                        return 0.0;
                    case BannerLocation.bottomStart:
                        return width - properties._kBottomOffset;
                    case BannerLocation.topStart:
                        return width;
                }
                break;
            case TextDirection.ltr:
                switch (this.location) {
                    case BannerLocation.bottomEnd:
                        return width - properties._kBottomOffset;
                    case BannerLocation.topEnd:
                        return width;
                    case BannerLocation.bottomStart:
                        return properties._kBottomOffset;
                    case BannerLocation.topStart:
                        return 0.0;
                }
                break;
        }
        return null;
    }
    _translationY(height : double) : double {
        /* TODO (AssertStatementImpl) : assert (location != null); */;
        switch (this.location) {
            case BannerLocation.bottomStart:
            case BannerLocation.bottomEnd:
                return height - properties._kBottomOffset;
            case BannerLocation.topStart:
            case BannerLocation.topEnd:
                return 0.0;
        }
        return null;
    }
    get _rotation() : double {
        /* TODO (AssertStatementImpl) : assert (location != null); */;
        /* TODO (AssertStatementImpl) : assert (layoutDirection != null); */;
        switch (this.layoutDirection) {
            case TextDirection.rtl:
                switch (this.location) {
                    case BannerLocation.bottomStart:
                    case BannerLocation.topEnd:
                        return op(Op.DIVIDE,op(Op.NEG,math.pi),4.0);
                    case BannerLocation.bottomEnd:
                    case BannerLocation.topStart:
                        return op(Op.DIVIDE,math.pi,4.0);
                }
                break;
            case TextDirection.ltr:
                switch (this.location) {
                    case BannerLocation.bottomStart:
                    case BannerLocation.topEnd:
                        return op(Op.DIVIDE,math.pi,4.0);
                    case BannerLocation.bottomEnd:
                    case BannerLocation.topStart:
                        return op(Op.DIVIDE,op(Op.NEG,math.pi),4.0);
                }
                break;
        }
        return null;
    }
}

export namespace Banner {
    export type Constructors = lib9.StatelessWidget.Constructors | 'Banner';
    export type Interface = Omit<Banner, Constructors>;
}
@DartClass
export class Banner extends lib9.StatelessWidget {
    constructor(_namedArguments? : {key? : lib10.Key,child? : lib9.Widget,message? : string,textDirection? : any,location? : BannerLocation,layoutDirection? : any,color? : any,textStyle? : lib3.TextStyle}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Banner(_namedArguments? : {key? : lib10.Key,child? : lib9.Widget,message? : string,textDirection? : any,location? : BannerLocation,layoutDirection? : any,color? : any,textStyle? : lib3.TextStyle}) {
        let {key,child,message,textDirection,location,layoutDirection,color,textStyle} = Object.assign({
            "color" : properties._kColor,
            "textStyle" : properties._kTextStyle}, _namedArguments );
        this.assert = assert;
        this.child = child;
        this.message = message;
        this.textDirection = textDirection;
        this.location = location;
        this.layoutDirection = layoutDirection;
        this.color = color;
        this.textStyle = textStyle;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    child : lib9.Widget;

    message : string;

    textDirection : any;

    location : BannerLocation;

    layoutDirection : any;

    color : any;

    textStyle : lib3.TextStyle;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib9.BuildContext) : lib9.Widget {
        /* TODO (AssertStatementImpl) : assert ((textDirection != null && layoutDirection != null) || debugCheckHasDirectionality(context)); */;
        return lib11.CustomPaint({
            foregroundPainter : BannerPainter({
                message : this.message,textDirection : (this.textDirection || lib11.Directionality.of(context)),location : this.location,layoutDirection : (this.layoutDirection || lib11.Directionality.of(context)),color : this.color,textStyle : this.textStyle}),child : this.child});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib12.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib12.StringProperty('message',this.message,{
            showName : false}));
        properties.add(lib12.EnumProperty('textDirection',this.textDirection,{
            defaultValue : null}));
        properties.add(lib12.EnumProperty('location',this.location));
        properties.add(lib12.EnumProperty('layoutDirection',this.layoutDirection,{
            defaultValue : null}));
        properties.add(lib12.DiagnosticsProperty('color',this.color,{
            showName : false}));
        ((_877_)=>(!!_877_)?_877_.debugFillProperties(properties,{
            prefix : 'text '}):null)(this.textStyle);
    }
}

export namespace CheckedModeBanner {
    export type Constructors = lib9.StatelessWidget.Constructors | 'CheckedModeBanner';
    export type Interface = Omit<CheckedModeBanner, Constructors>;
}
@DartClass
export class CheckedModeBanner extends lib9.StatelessWidget {
    constructor(_namedArguments? : {key? : lib10.Key,child? : lib9.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CheckedModeBanner(_namedArguments? : {key? : lib10.Key,child? : lib9.Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.child = child;
    }
    child : lib9.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib9.BuildContext) : lib9.Widget {
        let result : lib9.Widget = this.child;
        /* TODO (AssertStatementImpl) : assert (() {result = Banner(child: result, message: 'DEBUG', textDirection: TextDirection.ltr, location: BannerLocation.topEnd); return true;}()); */;
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib12.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        let message : string = 'disabled';
        /* TODO (AssertStatementImpl) : assert (() {message = '"DEBUG"'; return true;}()); */;
        properties.add(lib12.DiagnosticsNode.message(message));
    }
}

export class properties {
    private static __$_kOffset : double;
    static get _kOffset() : double { 
        if (this.__$_kOffset===undefined) {
            this.__$_kOffset = 40.0;
        }
        return this.__$_kOffset;
    }
    static set _kOffset(__$value : double)  { 
        this.__$_kOffset = __$value;
    }

    private static __$_kHeight : double;
    static get _kHeight() : double { 
        if (this.__$_kHeight===undefined) {
            this.__$_kHeight = 12.0;
        }
        return this.__$_kHeight;
    }
    static set _kHeight(__$value : double)  { 
        this.__$_kHeight = __$value;
    }

    private static __$_kBottomOffset : double;
    static get _kBottomOffset() : double { 
        if (this.__$_kBottomOffset===undefined) {
            this.__$_kBottomOffset = properties._kOffset + 0.707 * properties._kHeight;
        }
        return this.__$_kBottomOffset;
    }
    static set _kBottomOffset(__$value : double)  { 
        this.__$_kBottomOffset = __$value;
    }

    private static __$_kRect : any;
    static get _kRect() : any { 
        if (this.__$_kRect===undefined) {
            this.__$_kRect = Rect.fromLTWH(-properties._kOffset,properties._kOffset - properties._kHeight,properties._kOffset * 2.0,properties._kHeight);
        }
        return this.__$_kRect;
    }
    static set _kRect(__$value : any)  { 
        this.__$_kRect = __$value;
    }

    private static __$_kColor : any;
    static get _kColor() : any { 
        if (this.__$_kColor===undefined) {
            this.__$_kColor = Color(2696354844);
        }
        return this.__$_kColor;
    }
    static set _kColor(__$value : any)  { 
        this.__$_kColor = __$value;
    }

    private static __$_kTextStyle : lib3.TextStyle;
    static get _kTextStyle() : lib3.TextStyle { 
        if (this.__$_kTextStyle===undefined) {
            this.__$_kTextStyle = lib3.TextStyle({
                color : Color(4294967295),fontSize : properties._kHeight * 0.85,fontWeight : FontWeight.w900,height : 1.0});
        }
        return this.__$_kTextStyle;
    }
    static set _kTextStyle(__$value : lib3.TextStyle)  { 
        this.__$_kTextStyle = __$value;
    }

}
