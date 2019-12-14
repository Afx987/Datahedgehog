/** Library asset:datahedgehog_monitor/lib/lib/material/button.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/rounded_rectangle_border";
import * as lib10 from "./constants";
import * as lib11 from "./theme_data";
import * as lib12 from "./material";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme_data";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme";
import * as lib17 from "./ink_well";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/rendering/shifted_box";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/widgets/gesture_detector";
import * as math from "@dart2ts/dart/math";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/rendering/view";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";

export namespace RawMaterialButton {
    export type Constructors = lib3.StatefulWidget.Constructors | 'RawMaterialButton';
    export type Interface = Omit<RawMaterialButton, Constructors>;
}
@DartClass
export class RawMaterialButton extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,onPressed? : any,onHighlightChanged? : <T>(value : boolean) => void,textStyle? : lib5.TextStyle,fillColor? : any,highlightColor? : any,splashColor? : any,elevation? : double,highlightElevation? : double,disabledElevation? : double,padding? : lib6.EdgeInsetsGeometry,constraints? : lib7.BoxConstraints,shape? : lib8.ShapeBorder,animationDuration? : core.DartDuration,clipBehavior? : any,materialTapTargetSize? : lib11.MaterialTapTargetSize,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RawMaterialButton(_namedArguments? : {key? : lib4.Key,onPressed? : any,onHighlightChanged? : <T>(value : boolean) => void,textStyle? : lib5.TextStyle,fillColor? : any,highlightColor? : any,splashColor? : any,elevation? : double,highlightElevation? : double,disabledElevation? : double,padding? : lib6.EdgeInsetsGeometry,constraints? : lib7.BoxConstraints,shape? : lib8.ShapeBorder,animationDuration? : core.DartDuration,clipBehavior? : any,materialTapTargetSize? : lib11.MaterialTapTargetSize,child? : lib3.Widget}) {
        let {key,onPressed,onHighlightChanged,textStyle,fillColor,highlightColor,splashColor,elevation,highlightElevation,disabledElevation,padding,constraints,shape,animationDuration,clipBehavior,materialTapTargetSize,child} = Object.assign({
            "elevation" : 2.0,
            "highlightElevation" : 8.0,
            "disabledElevation" : 0.0,
            "padding" : lib6.EdgeInsets.zero,
            "constraints" : new lib7.BoxConstraints({
                minWidth : 88.0,minHeight : 36.0}),
            "shape" : new lib9.RoundedRectangleBorder(),
            "animationDuration" : lib10.properties.kThemeChangeDuration,
            "clipBehavior" : Clip.none}, _namedArguments );
        this.materialTapTargetSize = (materialTapTargetSize || lib11.MaterialTapTargetSize.padded);
        this.assert = assert;
        this.onPressed = onPressed;
        this.onHighlightChanged = onHighlightChanged;
        this.textStyle = textStyle;
        this.fillColor = fillColor;
        this.highlightColor = highlightColor;
        this.splashColor = splashColor;
        this.elevation = elevation;
        this.highlightElevation = highlightElevation;
        this.disabledElevation = disabledElevation;
        this.padding = padding;
        this.constraints = constraints;
        this.shape = shape;
        this.animationDuration = animationDuration;
        this.clipBehavior = clipBehavior;
        this.child = child;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    onPressed : any;

    onHighlightChanged : <T>(value : boolean) => void;

    textStyle : lib5.TextStyle;

    fillColor : any;

    highlightColor : any;

    splashColor : any;

    elevation : double;

    highlightElevation : double;

    disabledElevation : double;

    padding : lib6.EdgeInsetsGeometry;

    constraints : lib7.BoxConstraints;

    shape : lib8.ShapeBorder;

    animationDuration : core.DartDuration;

    child : lib3.Widget;

    get enabled() : boolean {
        return this.onPressed != null;
    }
    materialTapTargetSize : lib11.MaterialTapTargetSize;

    clipBehavior : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _RawMaterialButtonState {
        return _RawMaterialButtonState();
    }
}

export namespace _RawMaterialButtonState {
    export type Constructors = '_RawMaterialButtonState';
    export type Interface = Omit<_RawMaterialButtonState, Constructors>;
}
@DartClass
export class _RawMaterialButtonState extends any {
    _highlight : boolean;

    _handleHighlightChanged(value : boolean) : any {
        if (this._highlight != value) {
            setState(() =>  {
                this._highlight = value;
                if (widget.onHighlightChanged != null) widget.onHighlightChanged(value);
            });
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : RawMaterialButton) : any {
        super.didUpdateWidget(oldWidget);
        if (this._highlight && !widget.enabled) {
            this._highlight = false;
            if (widget.onHighlightChanged != null) widget.onHighlightChanged(false);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let elevation : double = widget.enabled ? (this._highlight ? widget.highlightElevation : widget.elevation) : widget.disabledElevation;
        let result : lib3.Widget = lib14.ConstrainedBox({
            constraints : widget.constraints,child : lib12.Material({
                elevation : elevation,textStyle : widget.textStyle,shape : widget.shape,color : widget.fillColor,type : op(Op.EQUALS,widget.fillColor,null) ? lib12.MaterialType.transparency : lib12.MaterialType.button,animationDuration : widget.animationDuration,clipBehavior : widget.clipBehavior,child : lib17.InkWell({
                    onHighlightChanged : this._handleHighlightChanged.bind(this),splashColor : widget.splashColor,highlightColor : widget.highlightColor,onTap : widget.onPressed,customBorder : widget.shape,child : lib16.IconTheme.merge({
                        data : lib13.IconThemeData({
                            color : ((t)=>(!!t)?t.color:null)(widget.textStyle)}),child : lib15.Container({
                            padding : widget.padding,child : lib14.Center({
                                widthFactor : 1.0,heightFactor : 1.0,child : widget.child})})})})})});
        let minSize : any;
        switch (widget.materialTapTargetSize) {
            case lib11.MaterialTapTargetSize.padded:
                minSize = new bare.createInstance(any,null,48.0,48.0);
                break;
            case lib11.MaterialTapTargetSize.shrinkWrap:
                minSize = Size.zero;
                break;
        }
        return lib14.Semantics({
            container : true,button : true,enabled : widget.enabled,child : _InputPadding({
                minSize : minSize,child : result})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RawMaterialButtonState() {
        this._highlight = false;
    }
}

export namespace _InputPadding {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | '_InputPadding';
    export type Interface = Omit<_InputPadding, Constructors>;
}
@DartClass
export class _InputPadding extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,minSize? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _InputPadding(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,minSize? : any}) {
        let {key,child,minSize} = Object.assign({
        }, _namedArguments );
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
        this.minSize = minSize;
    }
    minSize : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib18.RenderObject {
        return _RenderInputPadding(this.minSize);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : _RenderInputPadding) : any {
        renderObject.minSize = this.minSize;
    }
}

export namespace _RenderInputPadding {
    export type Constructors = lib19.RenderShiftedBox.Constructors | '_RenderInputPadding';
    export type Interface = Omit<_RenderInputPadding, Constructors>;
}
@DartClass
export class _RenderInputPadding extends lib19.RenderShiftedBox {
    constructor(_minSize : any,child? : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RenderInputPadding(_minSize : any,child? : any) {
        super.RenderShiftedBox(child);
        this._minSize = _minSize;
    }
    get minSize() : any {
        return this._minSize;
    }
    _minSize : any;

    set minSize(value : any) {
        if (op(Op.EQUALS,this._minSize,value)) return;
        this._minSize = value;
        this.markNeedsLayout();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicWidth(height : double) : double {
        if (lib20.properties.child != null) return math.max(lib20.properties.child.getMinIntrinsicWidth(height),this.minSize.width);
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicHeight(width : double) : double {
        if (lib20.properties.child != null) return math.max(lib20.properties.child.getMinIntrinsicHeight(width),this.minSize.height);
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        if (lib20.properties.child != null) return math.max(lib20.properties.child.getMaxIntrinsicWidth(height),this.minSize.width);
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicHeight(width : double) : double {
        if (lib20.properties.child != null) return math.max(lib20.properties.child.getMaxIntrinsicHeight(width),this.minSize.height);
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        if (lib20.properties.child != null) {
            lib20.properties.child.layout(this.constraints,{
                parentUsesSize : true});
            let height : double = math.max(lib20.properties.child.size.width,this.minSize.width);
            let width : double = math.max(lib20.properties.child.size.height,this.minSize.height);
            this.size = this.constraints.constrain(Size(height,width));
            let childParentData : lib7.BoxParentData = lib20.properties.child.parentData;
            childParentData.offset = lib23.Alignment.center.alongOffset(op(Op.MINUS,lib22.properties.size,lib20.properties.child.size));
        }else {
            this.size = Size.zero;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTest(result : lib24.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        return super.hitTest(result,{
            position : position}) || lib20.properties.child.hitTest(result,{
            position : lib20.properties.child.size.center(Offset.zero)});
    }
}

export class properties {
}
