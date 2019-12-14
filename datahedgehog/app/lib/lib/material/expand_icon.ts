/** Library asset:datahedgehog_monitor/lib/lib/material/expand_icon.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib10 from "./theme";
import * as math from "@dart2ts/dart/math";
import * as lib12 from "./material_localizations";
import * as lib13 from "./theme_data";
import * as lib14 from "./colors";
import * as lib15 from "./icons";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/widgets/icon";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/widgets/transitions";
import * as lib18 from "./icon_button";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/widgets/basic";

export namespace ExpandIcon {
    export type Constructors = lib3.StatefulWidget.Constructors | 'ExpandIcon';
    export type Interface = Omit<ExpandIcon, Constructors>;
}
@DartClass
export class ExpandIcon extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,isExpanded? : boolean,size? : double,onPressed? : <T>(value : boolean) => void,padding? : lib5.EdgeInsetsGeometry}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpandIcon(_namedArguments? : {key? : lib4.Key,isExpanded? : boolean,size? : double,onPressed? : <T>(value : boolean) => void,padding? : lib5.EdgeInsetsGeometry}) {
        let {key,isExpanded,size,onPressed,padding} = Object.assign({
            "isExpanded" : false,
            "size" : 24.0,
            "padding" : new lib5.EdgeInsets.all(8.0)}, _namedArguments );
        this.assert = assert;
        this.isExpanded = isExpanded;
        this.size = size;
        this.onPressed = onPressed;
        this.padding = padding;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    isExpanded : boolean;

    size : double;

    onPressed : <T>(value : boolean) => void;

    padding : lib5.EdgeInsetsGeometry;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _ExpandIconState {
        return _ExpandIconState();
    }
}

export namespace _ExpandIconState {
    export type Constructors = '_ExpandIconState';
    export type Interface = Omit<_ExpandIconState, Constructors>;
}
@DartClass
@With(any)
export class _ExpandIconState extends any implements any.Interface {
    _controller : lib6.AnimationController;

    _iconTurns : lib7.Animation<double>;

    private static __$_iconTurnTween : lib9.Animatable<double>;
    static get _iconTurnTween() : lib9.Animatable<double> { 
        if (this.__$_iconTurnTween===undefined) {
            this.__$_iconTurnTween = lib9.Tween({
                begin : 0.0,end : 0.5}).chain(lib9.CurveTween({
                curve : lib8.Curves.fastOutSlowIn}));
        }
        return this.__$_iconTurnTween;
    }
    static set _iconTurnTween(__$value : lib9.Animatable<double>)  { 
        this.__$_iconTurnTween = __$value;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._controller = lib6.AnimationController({
            duration : lib10.properties.kThemeAnimationDuration,vsync : this});
        this._iconTurns = this._controller.drive(_ExpandIconState._iconTurnTween);
        if (widget.isExpanded) {
            this._controller.value = math.pi;
        }
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
    didUpdateWidget(oldWidget : ExpandIcon) : any {
        super.didUpdateWidget(oldWidget);
        if (widget.isExpanded != oldWidget.isExpanded) {
            if (widget.isExpanded) {
                this._controller.forward();
            }else {
                this._controller.reverse();
            }
        }
    }
    _handlePressed() : any {
        if (widget.onPressed != null) widget.onPressed(widget.isExpanded);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterial(context)); */;
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        let localizations : lib12.MaterialLocalizations = lib12.MaterialLocalizations.of(context);
        let theme : lib13.ThemeData = lib10.Theme.of(context);
        let onTapHint : string = widget.isExpanded ? localizations.expandedIconTapHint : localizations.collapsedIconTapHint;
        return lib19.Semantics({
            onTapHint : op(Op.EQUALS,widget.onPressed,null) ? null : onTapHint,child : lib18.IconButton({
                padding : widget.padding,color : op(Op.EQUALS,theme.brightness,Brightness.dark) ? lib14.Colors.white54 : lib14.Colors.black54,onPressed : op(Op.EQUALS,widget.onPressed,null) ? null : this._handlePressed.bind(this),icon : lib17.RotationTransition({
                    turns : this._iconTurns,child : new lib16.Icon(lib15.Icons.expand_more)})})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ExpandIconState() {
    }
}

export class properties {
}
