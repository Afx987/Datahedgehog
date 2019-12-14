/** Library asset:datahedgehog_monitor/lib/lib/material/floating_action_button.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/circle_border";
import * as lib8 from "./theme_data";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/stadium_border";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib12 from "./theme";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme_data";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme";
import * as lib15 from "./button";
import * as lib16 from "./tooltip";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/widgets/heroes";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/rendering/shifted_box";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/widgets/gesture_detector";
import * as math from "@dart2ts/dart/math";

export namespace _DefaultHeroTag {
    export type Constructors = '_DefaultHeroTag';
    export type Interface = Omit<_DefaultHeroTag, Constructors>;
}
@DartClass
export class _DefaultHeroTag {
    constructor() {
    }
    @defaultConstructor
    _DefaultHeroTag() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return '<default FloatingActionButton tag>';
    }
}

export namespace FloatingActionButton {
    export type Constructors = lib4.StatelessWidget.Constructors | 'FloatingActionButton' | 'extended';
    export type Interface = Omit<FloatingActionButton, Constructors>;
}
@DartClass
export class FloatingActionButton extends lib4.StatelessWidget {
    constructor(_namedArguments? : {key? : lib5.Key,child? : any,tooltip? : string,foregroundColor? : any,backgroundColor? : any,heroTag? : core.DartObject,elevation? : double,highlightElevation? : double,disabledElevation? : double,onPressed? : any,mini? : any,shape? : lib6.ShapeBorder,clipBehavior? : any,materialTapTargetSize? : lib8.MaterialTapTargetSize,isExtended? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FloatingActionButton(_namedArguments? : {key? : lib5.Key,child? : any,tooltip? : string,foregroundColor? : any,backgroundColor? : any,heroTag? : core.DartObject,elevation? : double,highlightElevation? : double,disabledElevation? : double,onPressed? : any,mini? : any,shape? : lib6.ShapeBorder,clipBehavior? : any,materialTapTargetSize? : lib8.MaterialTapTargetSize,isExtended? : boolean}) {
        let {key,child,tooltip,foregroundColor,backgroundColor,heroTag,elevation,highlightElevation,disabledElevation,onPressed,mini,shape,clipBehavior,materialTapTargetSize,isExtended} = Object.assign({
            "heroTag" : new _DefaultHeroTag(),
            "elevation" : 6.0,
            "highlightElevation" : 12.0,
            "mini" : false,
            "shape" : new lib7.CircleBorder(),
            "clipBehavior" : Clip.none,
            "isExtended" : false}, _namedArguments );
        this._sizeConstraints = this.mini ? properties._kMiniSizeConstraints : properties._kSizeConstraints;
        this.disabledElevation = (this.disabledElevation || this.elevation);
        this._sizeConstraints = properties._kExtendedSizeConstraints;
        this.disabledElevation = (this.disabledElevation || this.elevation);
        this.mini = false;
        this.child = _ChildOverflowBox({
            child : lib11.Row({
                mainAxisSize : lib10.MainAxisSize.min,children : new core.DartList.literal<lib4.Widget>(new lib11.SizedBox({
                    width : 16.0}),icon,new lib11.SizedBox({
                    width : 8.0}),label,new lib11.SizedBox({
                    width : 20.0}))})});
        this.assert = assert;
        this.child = child;
        this.tooltip = tooltip;
        this.foregroundColor = foregroundColor;
        this.backgroundColor = backgroundColor;
        this.heroTag = heroTag;
        this.elevation = elevation;
        this.highlightElevation = highlightElevation;
        this.onPressed = onPressed;
        this.mini = mini;
        this.shape = shape;
        this.clipBehavior = clipBehavior;
        this.materialTapTargetSize = materialTapTargetSize;
        this.isExtended = isExtended;
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

    _sizeConstraints;
    disabledElevation;
    super;

     : any;

     : any;

    @namedConstructor
    extended(_namedArguments? : {key? : lib5.Key,tooltip? : string,foregroundColor? : any,backgroundColor? : any,heroTag? : core.DartObject,elevation? : double,highlightElevation? : double,disabledElevation? : double,onPressed? : any,shape? : lib6.ShapeBorder,isExtended? : boolean,materialTapTargetSize? : lib8.MaterialTapTargetSize,clipBehavior? : any,icon? : lib4.Widget,label? : lib4.Widget}) {
        let {key,tooltip,foregroundColor,backgroundColor,heroTag,elevation,highlightElevation,disabledElevation,onPressed,shape,isExtended,materialTapTargetSize,clipBehavior,icon,label} = Object.assign({
            "heroTag" : new _DefaultHeroTag(),
            "elevation" : 6.0,
            "highlightElevation" : 12.0,
            "shape" : new lib9.StadiumBorder(),
            "isExtended" : true,
            "clipBehavior" : Clip.none}, _namedArguments );
        this._sizeConstraints = this.mini ? properties._kMiniSizeConstraints : properties._kSizeConstraints;
        this.disabledElevation = (this.disabledElevation || this.elevation);
        this._sizeConstraints = properties._kExtendedSizeConstraints;
        this.disabledElevation = (this.disabledElevation || this.elevation);
        this.mini = false;
        this.child = _ChildOverflowBox({
            child : lib11.Row({
                mainAxisSize : lib10.MainAxisSize.min,children : new core.DartList.literal<lib4.Widget>(new lib11.SizedBox({
                    width : 16.0}),icon,new lib11.SizedBox({
                    width : 8.0}),label,new lib11.SizedBox({
                    width : 20.0}))})});
        this.assert = assert;
        this.tooltip = tooltip;
        this.foregroundColor = foregroundColor;
        this.backgroundColor = backgroundColor;
        this.heroTag = heroTag;
        this.elevation = elevation;
        this.highlightElevation = highlightElevation;
        this.onPressed = onPressed;
        this.shape = shape;
        this.isExtended = isExtended;
        this.materialTapTargetSize = materialTapTargetSize;
        this.clipBehavior = clipBehavior;
    }
    static extended : new(_namedArguments? : {key? : lib5.Key,tooltip? : string,foregroundColor? : any,backgroundColor? : any,heroTag? : core.DartObject,elevation? : double,highlightElevation? : double,disabledElevation? : double,onPressed? : any,shape? : lib6.ShapeBorder,isExtended? : boolean,materialTapTargetSize? : lib8.MaterialTapTargetSize,clipBehavior? : any,icon? : lib4.Widget,label? : lib4.Widget}) => FloatingActionButton;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    _sizeConstraints;
    disabledElevation;
    mini;
    child;
    super;

     : any;

     : any;

    child : lib4.Widget;

    tooltip : string;

    foregroundColor : any;

    backgroundColor : any;

    heroTag : core.DartObject;

    onPressed : any;

    elevation : double;

    highlightElevation : double;

    disabledElevation : double;

    mini : boolean;

    shape : lib6.ShapeBorder;

    clipBehavior : any;

    isExtended : boolean;

    materialTapTargetSize : lib8.MaterialTapTargetSize;

    _sizeConstraints : lib3.BoxConstraints;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib4.BuildContext) : lib4.Widget {
        let theme : lib8.ThemeData = lib12.Theme.of(context);
        let foregroundColor : any = (this.foregroundColor || theme.accentIconTheme.color);
        let result : lib4.Widget;
        if (this.child != null) {
            result = lib14.IconTheme.merge({
                data : lib13.IconThemeData({
                    color : foregroundColor}),child : this.child});
        }
        result = lib15.RawMaterialButton({
            onPressed : this.onPressed,elevation : this.elevation,highlightElevation : this.highlightElevation,disabledElevation : this.disabledElevation,constraints : this._sizeConstraints,materialTapTargetSize : (this.materialTapTargetSize || theme.materialTapTargetSize),fillColor : (this.backgroundColor || theme.accentColor),textStyle : theme.accentTextTheme.button.copyWith({
                color : foregroundColor,letterSpacing : 1.2}),shape : this.shape,clipBehavior : this.clipBehavior,child : result});
        if (this.tooltip != null) {
            result = lib11.MergeSemantics({
                child : lib16.Tooltip({
                    message : this.tooltip,child : result})});
        }
        if (this.heroTag != null) {
            result = lib17.Hero({
                tag : this.heroTag,child : result});
        }
        return result;
    }
}

export namespace _ChildOverflowBox {
    export type Constructors = lib4.SingleChildRenderObjectWidget.Constructors | '_ChildOverflowBox';
    export type Interface = Omit<_ChildOverflowBox, Constructors>;
}
@DartClass
export class _ChildOverflowBox extends lib4.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib5.Key,child? : lib4.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ChildOverflowBox(_namedArguments? : {key? : lib5.Key,child? : lib4.Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib4.BuildContext) : _RenderChildOverflowBox {
        return _RenderChildOverflowBox({
            textDirection : lib11.Directionality.of(context)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib4.BuildContext,renderObject : _RenderChildOverflowBox) : any {
        ((_) : _RenderChildOverflowBox =>  {
            {
                _.textDirection = lib11.Directionality.of(context);
                return _;
            }
        })(renderObject);
    }
}

export namespace _RenderChildOverflowBox {
    export type Constructors = lib18.RenderAligningShiftedBox.Constructors | '_RenderChildOverflowBox';
    export type Interface = Omit<_RenderChildOverflowBox, Constructors>;
}
@DartClass
export class _RenderChildOverflowBox extends lib18.RenderAligningShiftedBox {
    constructor(_namedArguments? : {child? : any,textDirection? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RenderChildOverflowBox(_namedArguments? : {child? : any,textDirection? : any}) {
        let {child,textDirection} = Object.assign({
        }, _namedArguments );
        super.RenderAligningShiftedBox({
            child : child,alignment : lib19.Alignment.center,textDirection : textDirection});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicWidth(height : double) : double {
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicHeight(width : double) : double {
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        if (lib20.properties.child != null) {
            lib20.properties.child.layout(new lib3.BoxConstraints(),{
                parentUsesSize : true});
            this.size = Size(math.max(this.constraints.minWidth,math.min(this.constraints.maxWidth,lib20.properties.child.size.width)),math.max(this.constraints.minHeight,math.min(this.constraints.maxHeight,lib20.properties.child.size.height)));
            this.alignChild();
        }else {
            this.size = this.constraints.biggest;
        }
    }
}

export class properties {
    private static __$_kSizeConstraints : lib3.BoxConstraints;
    static get _kSizeConstraints() : lib3.BoxConstraints { 
        if (this.__$_kSizeConstraints===undefined) {
            this.__$_kSizeConstraints = lib3.BoxConstraints.tightFor({
                width : 56.0,height : 56.0});
        }
        return this.__$_kSizeConstraints;
    }
    static set _kSizeConstraints(__$value : lib3.BoxConstraints)  { 
        this.__$_kSizeConstraints = __$value;
    }

    private static __$_kMiniSizeConstraints : lib3.BoxConstraints;
    static get _kMiniSizeConstraints() : lib3.BoxConstraints { 
        if (this.__$_kMiniSizeConstraints===undefined) {
            this.__$_kMiniSizeConstraints = lib3.BoxConstraints.tightFor({
                width : 40.0,height : 40.0});
        }
        return this.__$_kMiniSizeConstraints;
    }
    static set _kMiniSizeConstraints(__$value : lib3.BoxConstraints)  { 
        this.__$_kMiniSizeConstraints = __$value;
    }

    private static __$_kExtendedSizeConstraints : lib3.BoxConstraints;
    static get _kExtendedSizeConstraints() : lib3.BoxConstraints { 
        if (this.__$_kExtendedSizeConstraints===undefined) {
            this.__$_kExtendedSizeConstraints = lib3.BoxConstraints({
                minHeight : 48.0,maxHeight : 48.0});
        }
        return this.__$_kExtendedSizeConstraints;
    }
    static set _kExtendedSizeConstraints(__$value : lib3.BoxConstraints)  { 
        this.__$_kExtendedSizeConstraints = __$value;
    }

}
