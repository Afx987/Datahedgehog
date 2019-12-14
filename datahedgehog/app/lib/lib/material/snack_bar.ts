/** Library asset:datahedgehog_monitor/lib/lib/material/snack_bar.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib7 from "./scaffold";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib9 from "./flat_button";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as lib12 from "./theme";
import * as lib13 from "./theme_data";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib17 from "./button_theme";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/widgets/safe_area";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/widgets/dismissible";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/widgets/transitions";
import * as lib23 from "./material";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib25 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";

export enum SnackBarClosedReason {
    action,
    dismiss,
    swipe,
    hide,
    remove,
    timeout
}

export namespace SnackBarAction {
    export type Constructors = lib4.StatefulWidget.Constructors | 'SnackBarAction';
    export type Interface = Omit<SnackBarAction, Constructors>;
}
@DartClass
export class SnackBarAction extends lib4.StatefulWidget {
    constructor(_namedArguments? : {key? : lib5.Key,textColor? : any,disabledTextColor? : any,label? : string,onPressed? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SnackBarAction(_namedArguments? : {key? : lib5.Key,textColor? : any,disabledTextColor? : any,label? : string,onPressed? : any}) {
        let {key,textColor,disabledTextColor,label,onPressed} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.textColor = textColor;
        this.disabledTextColor = disabledTextColor;
        this.label = label;
        this.onPressed = onPressed;
    }
     : any;

     : any;

     : any;

     : any;

    textColor : any;

    disabledTextColor : any;

    label : string;

    onPressed : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _SnackBarActionState {
        return _SnackBarActionState();
    }
}

export namespace _SnackBarActionState {
    export type Constructors = '_SnackBarActionState';
    export type Interface = Omit<_SnackBarActionState, Constructors>;
}
@DartClass
export class _SnackBarActionState extends any {
    _haveTriggeredAction : boolean;

    _handlePressed() : any {
        if (this._haveTriggeredAction) return;
        setState(() =>  {
            this._haveTriggeredAction = true;
        });
        widget.onPressed();
        lib7.Scaffold.of(lib6.properties.context).hideCurrentSnackBar({
            reason : SnackBarClosedReason.action});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib4.BuildContext) : lib4.Widget {
        return lib9.FlatButton({
            onPressed : this._haveTriggeredAction ? null : this._handlePressed.bind(this),child : lib8.Text(widget.label),textColor : widget.textColor,disabledTextColor : widget.disabledTextColor});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SnackBarActionState() {
        this._haveTriggeredAction = false;
    }
}

export namespace SnackBar {
    export type Constructors = lib4.StatelessWidget.Constructors | 'SnackBar';
    export type Interface = Omit<SnackBar, Constructors>;
}
@DartClass
export class SnackBar extends lib4.StatelessWidget {
    constructor(_namedArguments? : {key? : lib5.Key,content? : lib4.Widget,backgroundColor? : any,action? : SnackBarAction,duration? : core.DartDuration,animation? : lib10.Animation<double>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SnackBar(_namedArguments? : {key? : lib5.Key,content? : lib4.Widget,backgroundColor? : any,action? : SnackBarAction,duration? : core.DartDuration,animation? : lib10.Animation<double>}) {
        let {key,content,backgroundColor,action,duration,animation} = Object.assign({
            "duration" : properties._kSnackBarDisplayDuration}, _namedArguments );
        this.assert = assert;
        this.content = content;
        this.backgroundColor = backgroundColor;
        this.action = action;
        this.duration = duration;
        this.animation = animation;
    }
     : any;

     : any;

     : any;

     : any;

    content : lib4.Widget;

    backgroundColor : any;

    action : SnackBarAction;

    duration : core.DartDuration;

    animation : lib10.Animation<double>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib4.BuildContext) : lib4.Widget {
        let mediaQueryData : lib11.MediaQueryData = lib11.MediaQuery.of(context);
        /* TODO (AssertStatementImpl) : assert (animation != null); */;
        let theme : lib13.ThemeData = lib12.Theme.of(context);
        let darkTheme : lib13.ThemeData = lib13.ThemeData({
            brightness : Brightness.dark,accentColor : theme.accentColor,accentColorBrightness : theme.accentColorBrightness});
        let children : core.DartList<lib4.Widget> = new core.DartList.literal<lib4.Widget>(new lib14.SizedBox({
            width : properties._kSnackBarPadding}),lib14.Expanded({
            child : lib16.Container({
                padding : new lib15.EdgeInsets.symmetric({
                    vertical : properties._kSingleLineVerticalPadding}),child : lib8.DefaultTextStyle({
                    style : darkTheme.textTheme.subhead,child : this.content})})}));
        if (this.action != null) {
            children.add(lib17.ButtonTheme.bar({
                padding : new lib15.EdgeInsets.symmetric({
                    horizontal : properties._kSnackBarPadding}),textTheme : lib17.ButtonTextTheme.accent,child : this.action}));
        }else {
            children.add(new lib14.SizedBox({
                width : properties._kSnackBarPadding}));
        }
        let heightAnimation : lib18.CurvedAnimation = lib18.CurvedAnimation({
            parent : this.animation,curve : properties._snackBarHeightCurve});
        let fadeAnimation : lib18.CurvedAnimation = lib18.CurvedAnimation({
            parent : this.animation,curve : properties._snackBarFadeCurve,reverseCurve : new lib3.Threshold(0.0)});
        let snackbar : lib4.Widget = lib20.SafeArea({
            top : false,child : lib14.Row({
                children : children,crossAxisAlignment : lib19.CrossAxisAlignment.center})});
        snackbar = lib14.Semantics({
            container : true,liveRegion : true,onDismiss : () =>  {
                lib7.Scaffold.of(context).removeCurrentSnackBar({
                    reason : SnackBarClosedReason.dismiss});
            },child : lib21.Dismissible({
                key : new lib5.Key('dismissible'),direction : lib21.DismissDirection.down,resizeDuration : null,onDismissed : (direction : lib21.DismissDirection) =>  {
                    lib7.Scaffold.of(context).removeCurrentSnackBar({
                        reason : SnackBarClosedReason.swipe});
                },child : lib23.Material({
                    elevation : 6.0,color : (this.backgroundColor || properties._kSnackBackground),child : lib12.Theme({
                        data : darkTheme,child : mediaQueryData.accessibleNavigation ? snackbar : lib22.FadeTransition({
                            opacity : fadeAnimation,child : snackbar})})})})});
        return lib14.ClipRect({
            child : mediaQueryData.accessibleNavigation ? snackbar : lib22.AnimatedBuilder({
                animation : heightAnimation,builder : (context : lib4.BuildContext,child : lib4.Widget) =>  {
                    return lib14.Align({
                        alignment : lib24.AlignmentDirectional.topStart,heightFactor : heightAnimation.value,child : child});
                },child : snackbar})});
    }
    static createAnimationController(_namedArguments? : {vsync? : any}) : lib25.AnimationController {
        let {vsync} = Object.assign({
        }, _namedArguments );
        return lib25.AnimationController({
            duration : properties._kSnackBarTransitionDuration,debugLabel : 'SnackBar',vsync : vsync});
    }
    withAnimation(newAnimation : lib10.Animation<double>,_namedArguments? : {fallbackKey? : lib5.Key}) : SnackBar {
        let {fallbackKey} = Object.assign({
        }, _namedArguments );
        return SnackBar({
            key : (this.key || fallbackKey),content : this.content,backgroundColor : this.backgroundColor,action : this.action,duration : this.duration,animation : newAnimation});
    }
}

export class properties {
    private static __$_kSnackBarPadding : double;
    static get _kSnackBarPadding() : double { 
        if (this.__$_kSnackBarPadding===undefined) {
            this.__$_kSnackBarPadding = 24.0;
        }
        return this.__$_kSnackBarPadding;
    }
    static set _kSnackBarPadding(__$value : double)  { 
        this.__$_kSnackBarPadding = __$value;
    }

    private static __$_kSingleLineVerticalPadding : double;
    static get _kSingleLineVerticalPadding() : double { 
        if (this.__$_kSingleLineVerticalPadding===undefined) {
            this.__$_kSingleLineVerticalPadding = 14.0;
        }
        return this.__$_kSingleLineVerticalPadding;
    }
    static set _kSingleLineVerticalPadding(__$value : double)  { 
        this.__$_kSingleLineVerticalPadding = __$value;
    }

    private static __$_kSnackBackground : any;
    static get _kSnackBackground() : any { 
        if (this.__$_kSnackBackground===undefined) {
            this.__$_kSnackBackground = Color(4281479730);
        }
        return this.__$_kSnackBackground;
    }
    static set _kSnackBackground(__$value : any)  { 
        this.__$_kSnackBackground = __$value;
    }

    private static __$_kSnackBarTransitionDuration : core.DartDuration;
    static get _kSnackBarTransitionDuration() : core.DartDuration { 
        if (this.__$_kSnackBarTransitionDuration===undefined) {
            this.__$_kSnackBarTransitionDuration = core.DartDuration({
                milliseconds : 250});
        }
        return this.__$_kSnackBarTransitionDuration;
    }
    static set _kSnackBarTransitionDuration(__$value : core.DartDuration)  { 
        this.__$_kSnackBarTransitionDuration = __$value;
    }

    private static __$_kSnackBarDisplayDuration : core.DartDuration;
    static get _kSnackBarDisplayDuration() : core.DartDuration { 
        if (this.__$_kSnackBarDisplayDuration===undefined) {
            this.__$_kSnackBarDisplayDuration = core.DartDuration({
                milliseconds : 4000});
        }
        return this.__$_kSnackBarDisplayDuration;
    }
    static set _kSnackBarDisplayDuration(__$value : core.DartDuration)  { 
        this.__$_kSnackBarDisplayDuration = __$value;
    }

    private static __$_snackBarHeightCurve : lib3.Curve;
    static get _snackBarHeightCurve() : lib3.Curve { 
        if (this.__$_snackBarHeightCurve===undefined) {
            this.__$_snackBarHeightCurve = lib3.Curves.fastOutSlowIn;
        }
        return this.__$_snackBarHeightCurve;
    }
    static set _snackBarHeightCurve(__$value : lib3.Curve)  { 
        this.__$_snackBarHeightCurve = __$value;
    }

    private static __$_snackBarFadeCurve : lib3.Curve;
    static get _snackBarFadeCurve() : lib3.Curve { 
        if (this.__$_snackBarFadeCurve===undefined) {
            this.__$_snackBarFadeCurve = lib3.Interval(0.72,1.0,{
                curve : lib3.Curves.fastOutSlowIn});
        }
        return this.__$_snackBarFadeCurve;
    }
    static set _snackBarFadeCurve(__$value : lib3.Curve)  { 
        this.__$_snackBarFadeCurve = __$value;
    }

}
