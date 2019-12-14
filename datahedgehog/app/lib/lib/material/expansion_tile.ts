/** Library asset:datahedgehog_monitor/lib/lib/material/expansion_tile.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/widgets/page_storage";
import * as lib11 from "./colors";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/painting/box_border";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib16 from "./icons";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/widgets/icon";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/widgets/transitions";
import * as lib19 from "./list_tile";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib22 from "./theme";
import * as lib23 from "./theme_data";

export namespace ExpansionTile {
    export type Constructors = lib3.StatefulWidget.Constructors | 'ExpansionTile';
    export type Interface = Omit<ExpansionTile, Constructors>;
}
@DartClass
export class ExpansionTile extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,leading? : lib3.Widget,title? : lib3.Widget,backgroundColor? : any,onExpansionChanged? : <T>(value : boolean) => void,children? : core.DartList<lib3.Widget>,trailing? : lib3.Widget,initiallyExpanded? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpansionTile(_namedArguments? : {key? : lib4.Key,leading? : lib3.Widget,title? : lib3.Widget,backgroundColor? : any,onExpansionChanged? : <T>(value : boolean) => void,children? : core.DartList<lib3.Widget>,trailing? : lib3.Widget,initiallyExpanded? : boolean}) {
        let {key,leading,title,backgroundColor,onExpansionChanged,children,trailing,initiallyExpanded} = Object.assign({
            "children" : new core.DartList.literal<lib3.Widget>(),
            "initiallyExpanded" : false}, _namedArguments );
        this.assert = assert;
        this.leading = leading;
        this.title = title;
        this.backgroundColor = backgroundColor;
        this.onExpansionChanged = onExpansionChanged;
        this.children = children;
        this.trailing = trailing;
        this.initiallyExpanded = initiallyExpanded;
    }
     : any;

     : any;

     : any;

    leading : lib3.Widget;

    title : lib3.Widget;

    onExpansionChanged : <T>(value : boolean) => void;

    children : core.DartList<lib3.Widget>;

    backgroundColor : any;

    trailing : lib3.Widget;

    initiallyExpanded : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _ExpansionTileState {
        return _ExpansionTileState();
    }
}

export namespace _ExpansionTileState {
    export type Constructors = '_ExpansionTileState';
    export type Interface = Omit<_ExpansionTileState, Constructors>;
}
@DartClass
@With(any)
export class _ExpansionTileState extends any implements any.Interface {
    private static __$_easeOutTween : lib6.Animatable<double>;
    static get _easeOutTween() : lib6.Animatable<double> { 
        if (this.__$_easeOutTween===undefined) {
            this.__$_easeOutTween = lib6.CurveTween({
                curve : lib5.Curves.easeOut});
        }
        return this.__$_easeOutTween;
    }
    static set _easeOutTween(__$value : lib6.Animatable<double>)  { 
        this.__$_easeOutTween = __$value;
    }

    private static __$_easeInTween : lib6.Animatable<double>;
    static get _easeInTween() : lib6.Animatable<double> { 
        if (this.__$_easeInTween===undefined) {
            this.__$_easeInTween = lib6.CurveTween({
                curve : lib5.Curves.easeIn});
        }
        return this.__$_easeInTween;
    }
    static set _easeInTween(__$value : lib6.Animatable<double>)  { 
        this.__$_easeInTween = __$value;
    }

    private static __$_halfTween : lib6.Animatable<double>;
    static get _halfTween() : lib6.Animatable<double> { 
        if (this.__$_halfTween===undefined) {
            this.__$_halfTween = lib6.Tween({
                begin : 0.0,end : 0.5});
        }
        return this.__$_halfTween;
    }
    static set _halfTween(__$value : lib6.Animatable<double>)  { 
        this.__$_halfTween = __$value;
    }

    _borderColorTween : lib6.ColorTween;

    _headerColorTween : lib6.ColorTween;

    _iconColorTween : lib6.ColorTween;

    _backgroundColorTween : lib6.ColorTween;

    _controller : lib7.AnimationController;

    _iconTurns : lib8.Animation<double>;

    _heightFactor : lib8.Animation<double>;

    _borderColor : lib8.Animation<any>;

    _headerColor : lib8.Animation<any>;

    _iconColor : lib8.Animation<any>;

    _backgroundColor : lib8.Animation<any>;

    _isExpanded : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._controller = lib7.AnimationController({
            duration : properties._kExpand,vsync : this});
        this._heightFactor = this._controller.drive(_ExpansionTileState._easeInTween);
        this._iconTurns = this._controller.drive(_ExpansionTileState._halfTween.chain(_ExpansionTileState._easeInTween));
        this._borderColor = this._controller.drive(this._borderColorTween.chain(_ExpansionTileState._easeOutTween));
        this._headerColor = this._controller.drive(this._headerColorTween.chain(_ExpansionTileState._easeInTween));
        this._iconColor = this._controller.drive(this._iconColorTween.chain(_ExpansionTileState._easeInTween));
        this._backgroundColor = this._controller.drive(this._backgroundColorTween.chain(_ExpansionTileState._easeOutTween));
        this._isExpanded = (((_733_)=>(!!_733_)?_733_.readState(lib9.properties.context):null)(lib10.PageStorage.of(lib9.properties.context)) || widget.initiallyExpanded);
        if (this._isExpanded) this._controller.value = 1.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._controller.dispose();
        super.dispose();
    }
    _handleTap() : any {
        setState(() =>  {
            this._isExpanded = !this._isExpanded;
            if (this._isExpanded) {
                this._controller.forward();
            }else {
                op(Op.LT,this._controller.reverse().then,);
                op(Op.GT,,((value : any) =>  {
                    if (!mounted) return;
                    setState(() =>  {
                    });
                }));
            }
            ((_734_)=>(!!_734_)?_734_.writeState(lib9.properties.context,this._isExpanded):null)(lib10.PageStorage.of(lib9.properties.context));
        });
        if (widget.onExpansionChanged != null) widget.onExpansionChanged(this._isExpanded);
    }
    _buildChildren(context : lib3.BuildContext,child : lib3.Widget) : lib3.Widget {
        let borderSideColor : any = (this._borderColor.value || lib11.Colors.transparent);
        return lib21.Container({
            decoration : lib14.BoxDecoration({
                color : (this._backgroundColor.value || lib11.Colors.transparent),border : lib13.Border({
                    top : lib12.BorderSide({
                        color : borderSideColor}),bottom : lib12.BorderSide({
                        color : borderSideColor})})}),child : lib20.Column({
                mainAxisSize : lib15.MainAxisSize.min,children : new core.DartList.literal<lib3.Widget>(lib19.ListTileTheme.merge({
                    iconColor : this._iconColor.value,textColor : this._headerColor.value,child : lib19.ListTile({
                        onTap : this._handleTap.bind(this),leading : widget.leading,title : widget.title,trailing : (widget.trailing || lib18.RotationTransition({
                            turns : this._iconTurns,child : new lib17.Icon(lib16.Icons.expand_more)}))})}),lib20.ClipRect({
                    child : lib20.Align({
                        heightFactor : this._heightFactor.value,child : child})}))})});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        let theme : lib23.ThemeData = lib22.Theme.of(lib9.properties.context);
        ((_) : lib6.ColorTween =>  {
            {
                _.end = theme.dividerColor;
                return _;
            }
        })(this._borderColorTween);
        ((_) : lib6.ColorTween =>  {
            {
                _.begin = theme.textTheme.subhead.color;
                _.end = theme.accentColor;
                return _;
            }
        })(this._headerColorTween);
        ((_) : lib6.ColorTween =>  {
            {
                _.begin = theme.unselectedWidgetColor;
                _.end = theme.accentColor;
                return _;
            }
        })(this._iconColorTween);
        ((_) : lib6.ColorTween =>  {
            {
                _.end = widget.backgroundColor;
                return _;
            }
        })(this._backgroundColorTween);
        super.didChangeDependencies();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let closed : boolean = !this._isExpanded && this._controller.isDismissed;
        return lib18.AnimatedBuilder({
            animation : this._controller.view,builder : this._buildChildren.bind(this),child : closed ? null : lib20.Column({
                children : widget.children})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ExpansionTileState() {
        this._borderColorTween = lib6.ColorTween();
        this._headerColorTween = lib6.ColorTween();
        this._iconColorTween = lib6.ColorTween();
        this._backgroundColorTween = lib6.ColorTween();
        this._isExpanded = false;
    }
}

export class properties {
    private static __$_kExpand : core.DartDuration;
    static get _kExpand() : core.DartDuration { 
        if (this.__$_kExpand===undefined) {
            this.__$_kExpand = core.DartDuration({
                milliseconds : 200});
        }
        return this.__$_kExpand;
    }
    static set _kExpand(__$value : core.DartDuration)  { 
        this.__$_kExpand = __$value;
    }

}
