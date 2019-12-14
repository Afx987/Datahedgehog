/** Library asset:datahedgehog_monitor/lib/lib/material/popup_menu.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./divider";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/widgets/navigator";
import * as lib8 from "./theme";
import * as lib9 from "./theme_data";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib11 from "./constants";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/widgets/implicit_animations";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme_data";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib18 from "./ink_well";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib21 from "./icons";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/widgets/icon";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/widgets/transitions";
import * as lib24 from "./list_tile";
import * as lib25 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib27 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib28 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib29 from "@dart2ts.packages/flutter/lib/src/widgets/single_child_scroll_view";
import * as lib30 from "./material";
import * as lib31 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib32 from "@dart2ts.packages/flutter/lib/src/rendering/shifted_box";
import * as lib33 from "@dart2ts.packages/flutter/lib/src/rendering/stack";
import * as lib34 from "@dart2ts.packages/flutter/lib/src/widgets/routes";
import * as lib35 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as lib36 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib37 from "./material_localizations";
import * as lib38 from "@dart2ts.packages/flutter/lib/src/widgets/overlay";
import * as lib39 from "./icon_button";

export var showMenu : <T>(_namedArguments? : {context? : lib3.BuildContext,position? : lib33.RelativeRect,items? : core.DartList<PopupMenuEntry<T>>,initialValue? : T,elevation? : double,semanticLabel? : string}) => async.Future<T> = <T>(_namedArguments? : {context? : lib3.BuildContext,position? : lib33.RelativeRect,items? : core.DartList<PopupMenuEntry<T>>,initialValue? : T,elevation? : double,semanticLabel? : string}) : async.Future<T> =>  {
    let {context,position,items,initialValue,elevation,semanticLabel} = Object.assign({
        "elevation" : 8.0}, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (context != null); */;
    /* TODO (AssertStatementImpl) : assert (items != null && items.isNotEmpty); */;
    /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
    let label : string = semanticLabel;
    switch (lib36.properties.defaultTargetPlatform) {
        case lib36.TargetPlatform.iOS:
            label = semanticLabel;
            break;
        case lib36.TargetPlatform.android:
        case lib36.TargetPlatform.fuchsia:
            label = (semanticLabel || ((t)=>(!!t)?t.popupMenuLabel:null)(lib37.MaterialLocalizations.of(context)));
    }
    return lib7.Navigator.push(context,_PopupMenuRoute({
        position : position,items : items,initialValue : initialValue,elevation : elevation,semanticLabel : label,theme : lib8.Theme.of(context,{
            shadowThemeOnly : true}),barrierLabel : lib37.MaterialLocalizations.of(context).modalBarrierDismissLabel}));
};
export namespace PopupMenuEntry {
    export type Constructors = lib3.StatefulWidget.Constructors | 'PopupMenuEntry';
    export type Interface<T> = Omit<PopupMenuEntry<T>, Constructors>;
}
@DartClass
export class PopupMenuEntry<T> extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PopupMenuEntry(_namedArguments? : {key? : lib4.Key}) {
        let {key} = Object.assign({
        }, _namedArguments );
        super.StatefulWidget({
            key : key});
    }
    @AbstractProperty
    get height() : double{ throw 'abstract'}
    @Abstract
    represents(value : T) : boolean{ throw 'abstract'}
}

export namespace _PopupMenuDividerState {
    export type Constructors = '_PopupMenuDividerState';
    export type Interface = Omit<_PopupMenuDividerState, Constructors>;
}
@DartClass
export class _PopupMenuDividerState extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib5.Divider({
            height : widget.height});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _PopupMenuDividerState() {
    }
}

export namespace PopupMenuItemState {
    export type Constructors = 'PopupMenuItemState';
    export type Interface<T,W extends PopupMenuItem<T>> = Omit<PopupMenuItemState<T,W extends PopupMenuItem<T>>, Constructors>;
}
@DartClass
export class PopupMenuItemState<T,W extends PopupMenuItem<T>> extends any {
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    buildChild() : lib3.Widget {
        return widget.child;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    handleTap() : any {
        lib7.Navigator.pop(lib6.properties.context,widget.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let theme : lib9.ThemeData = lib8.Theme.of(context);
        let style : lib10.TextStyle = theme.textTheme.subhead;
        if (!widget.enabled) style = style.copyWith({
            color : theme.disabledColor});
        let item : lib3.Widget = lib13.AnimatedDefaultTextStyle({
            style : style,duration : lib11.properties.kThemeChangeDuration,child : lib12.Baseline({
                baseline : op(Op.MINUS,widget.height,properties._kBaselineOffsetFromBottom),baselineType : style.textBaseline,child : this.buildChild()})});
        if (!widget.enabled) {
            let isDark : boolean = op(Op.EQUALS,theme.brightness,Brightness.dark);
            item = lib15.IconTheme.merge({
                data : lib14.IconThemeData({
                    opacity : isDark ? 0.5 : 0.38}),child : item});
        }
        return lib18.InkWell({
            onTap : widget.enabled ? this.handleTap.bind(this) : null,child : lib17.Container({
                height : widget.height,padding : new lib16.EdgeInsets.symmetric({
                    horizontal : properties._kMenuHorizontalPadding}),child : item})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PopupMenuItemState() {
    }
}

export namespace _PopupMenu {
    export type Constructors = lib3.StatelessWidget.Constructors | '_PopupMenu';
    export type Interface<T> = Omit<_PopupMenu<T>, Constructors>;
}
@DartClass
export class _PopupMenu<T> extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,route? : _PopupMenuRoute<T>,semanticLabel? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _PopupMenu(_namedArguments? : {key? : lib4.Key,route? : _PopupMenuRoute<T>,semanticLabel? : string}) {
        let {key,route,semanticLabel} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.route = route;
        this.semanticLabel = semanticLabel;
    }
    route : _PopupMenuRoute<T>;

    semanticLabel : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let unit : double = 1.0 / (this.route.items.length + 1.5);
        let children : core.DartList<lib3.Widget> = new core.DartList.literal<lib3.Widget>();
        for(let i : number = 0; i < this.route.items.length; i += 1){
            let start : double = (i + 1) * unit;
            let end : double = new core.DartDouble((start + 1.5 * unit)).clamp(0.0,1.0);
            let opacity : lib26.CurvedAnimation = lib26.CurvedAnimation({
                parent : this.route.animation,curve : lib25.Interval(start,end)});
            let item : lib3.Widget = this.route.items[i];
            if (this.route.initialValue != null && this.route.items[i].represents(this.route.initialValue)) {
                item = lib17.Container({
                    color : lib8.Theme.of(context).highlightColor,child : item});
            }
            children.add(lib23.FadeTransition({
                opacity : opacity,child : item}));
        }
        let opacity : lib27.CurveTween = lib27.CurveTween({
            curve : new lib25.Interval(0.0,1.0 / 3.0)});
        let width : lib27.CurveTween = lib27.CurveTween({
            curve : lib25.Interval(0.0,unit)});
        let height : lib27.CurveTween = lib27.CurveTween({
            curve : lib25.Interval(0.0,unit * this.route.items.length)});
        let child : lib3.Widget = lib12.ConstrainedBox({
            constraints : new lib28.BoxConstraints({
                minWidth : properties._kMenuMinWidth,maxWidth : properties._kMenuMaxWidth}),child : lib12.IntrinsicWidth({
                stepWidth : properties._kMenuWidthStep,child : lib12.Semantics({
                    scopesRoute : true,namesRoute : true,explicitChildNodes : true,label : this.semanticLabel,child : lib29.SingleChildScrollView({
                        padding : new lib16.EdgeInsets.symmetric({
                            vertical : properties._kMenuVerticalPadding}),child : lib12.ListBody({
                            children : children})})})})});
        return lib23.AnimatedBuilder({
            animation : this.route.animation,builder : (context : lib3.BuildContext,child : lib3.Widget) =>  {
                return lib12.Opacity({
                    opacity : opacity.evaluate(this.route.animation),child : lib30.Material({
                        type : lib30.MaterialType.card,elevation : this.route.elevation,child : lib12.Align({
                            alignment : lib31.AlignmentDirectional.topEnd,widthFactor : width.evaluate(this.route.animation),heightFactor : height.evaluate(this.route.animation),child : child})})});
            },child : child});
    }
}

export namespace _PopupMenuRouteLayout {
    export type Constructors = lib32.SingleChildLayoutDelegate.Constructors | '_PopupMenuRouteLayout';
    export type Interface = Omit<_PopupMenuRouteLayout, Constructors>;
}
@DartClass
export class _PopupMenuRouteLayout extends lib32.SingleChildLayoutDelegate {
    constructor(position : lib33.RelativeRect,selectedItemOffset : double,textDirection : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _PopupMenuRouteLayout(position : lib33.RelativeRect,selectedItemOffset : double,textDirection : any) {
        this.position = position;
        this.selectedItemOffset = selectedItemOffset;
        this.textDirection = textDirection;
    }
    position : lib33.RelativeRect;

    selectedItemOffset : double;

    textDirection : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getConstraintsForChild(constraints : lib28.BoxConstraints) : lib28.BoxConstraints {
        return lib28.BoxConstraints.loose(op(Op.MINUS,constraints.biggest,new bare.createInstance(any,null,properties._kMenuScreenPadding * 2.0,properties._kMenuScreenPadding * 2.0)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getPositionForChild(size : any,childSize : any) : any {
        let y : double;
        if (this.selectedItemOffset == null) {
            y = this.position.top;
        }else {
            y = this.position.top + op(Op.DIVIDE,(op(Op.MINUS,op(Op.MINUS,size.height,this.position.top),this.position.bottom)),2.0) - this.selectedItemOffset;
        }
        let x : double;
        if (this.position.left > this.position.right) {
            x = op(Op.MINUS,op(Op.MINUS,size.width,this.position.right),childSize.width);
        }else if (this.position.left < this.position.right) {
            x = this.position.left;
        }else {
            /* TODO (AssertStatementImpl) : assert (textDirection != null); */;
            switch (this.textDirection) {
                case TextDirection.rtl:
                    x = op(Op.MINUS,op(Op.MINUS,size.width,this.position.right),childSize.width);
                    break;
                case TextDirection.ltr:
                    x = this.position.left;
                    break;
            }
        }
        if (x < properties._kMenuScreenPadding) x = properties._kMenuScreenPadding;else if (x + childSize.width > op(Op.MINUS,size.width,properties._kMenuScreenPadding)) x = op(Op.MINUS,op(Op.MINUS,size.width,childSize.width),properties._kMenuScreenPadding);
        if (y < properties._kMenuScreenPadding) y = properties._kMenuScreenPadding;else if (y + childSize.height > op(Op.MINUS,size.height,properties._kMenuScreenPadding)) y = op(Op.MINUS,op(Op.MINUS,size.height,childSize.height),properties._kMenuScreenPadding);
        return Offset(x,y);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRelayout(oldDelegate : _PopupMenuRouteLayout) : boolean {
        return this.position != oldDelegate.position;
    }
}

export namespace _PopupMenuRoute {
    export type Constructors = lib34.PopupRoute.Constructors | '_PopupMenuRoute';
    export type Interface<T> = Omit<_PopupMenuRoute<T>, Constructors>;
}
@DartClass
export class _PopupMenuRoute<T> extends lib34.PopupRoute<T> {
    constructor(_namedArguments? : {position? : lib33.RelativeRect,items? : core.DartList<PopupMenuEntry<T>>,initialValue? : any,elevation? : double,theme? : lib9.ThemeData,barrierLabel? : string,semanticLabel? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _PopupMenuRoute(_namedArguments? : {position? : lib33.RelativeRect,items? : core.DartList<PopupMenuEntry<T>>,initialValue? : any,elevation? : double,theme? : lib9.ThemeData,barrierLabel? : string,semanticLabel? : string}) {
        let {position,items,initialValue,elevation,theme,barrierLabel,semanticLabel} = Object.assign({
        }, _namedArguments );
        this.position = position;
        this.items = items;
        this.initialValue = initialValue;
        this.elevation = elevation;
        this.theme = theme;
        this.barrierLabel = barrierLabel;
        this.semanticLabel = semanticLabel;
    }
    position : lib33.RelativeRect;

    items : core.DartList<PopupMenuEntry<T>>;

    initialValue : any;

    elevation : double;

    theme : lib9.ThemeData;

    semanticLabel : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createAnimation() : lib20.Animation<double> {
        return lib26.CurvedAnimation({
            parent : super.createAnimation(),curve : lib25.Curves.linear,reverseCurve : new lib25.Interval(0.0,properties._kMenuCloseIntervalEnd)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get transitionDuration() : core.DartDuration {
        return properties._kMenuDuration;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get barrierDismissible() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get barrierColor() : any {
        return null;
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    barrierLabel : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildPage(context : lib3.BuildContext,animation : lib20.Animation<double>,secondaryAnimation : lib20.Animation<double>) : lib3.Widget {
        let selectedItemOffset : double;
        if (this.initialValue != null) {
            let y : double = properties._kMenuVerticalPadding;
            for(let entry of this.items) {
                if (entry.represents(this.initialValue)) {
                    selectedItemOffset = y + entry.height / 2.0;
                    break;
                }
                y += entry.height;
            }
        }
        let menu : lib3.Widget = _PopupMenu({
            route : this,semanticLabel : this.semanticLabel});
        if (this.theme != null) menu = lib8.Theme({
            data : this.theme,child : menu});
        return lib35.MediaQuery.removePadding({
            context : context,removeTop : true,removeBottom : true,removeLeft : true,removeRight : true,child : lib12.Builder({
                builder : (context : lib3.BuildContext) =>  {
                    return lib12.CustomSingleChildLayout({
                        delegate : _PopupMenuRouteLayout(this.position,selectedItemOffset,lib12.Directionality.of(context)),child : menu});
                }})});
    }
}

export namespace PopupMenuButton {
    export type Constructors = lib3.StatefulWidget.Constructors | 'PopupMenuButton';
    export type Interface<T> = Omit<PopupMenuButton<T>, Constructors>;
}
@DartClass
export class PopupMenuButton<T> extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,itemBuilder? : <T>(context : lib3.BuildContext) => core.DartList<PopupMenuEntry<T>>,initialValue? : T,onSelected? : <T>(value : T) => any,onCanceled? : () => any,tooltip? : string,elevation? : double,padding? : lib16.EdgeInsetsGeometry,child? : lib3.Widget,icon? : lib22.Icon,offset? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PopupMenuButton(_namedArguments? : {key? : lib4.Key,itemBuilder? : <T>(context : lib3.BuildContext) => core.DartList<PopupMenuEntry<T>>,initialValue? : T,onSelected? : <T>(value : T) => any,onCanceled? : () => any,tooltip? : string,elevation? : double,padding? : lib16.EdgeInsetsGeometry,child? : lib3.Widget,icon? : lib22.Icon,offset? : any}) {
        let {key,itemBuilder,initialValue,onSelected,onCanceled,tooltip,elevation,padding,child,icon,offset} = Object.assign({
            "elevation" : 8.0,
            "padding" : new lib16.EdgeInsets.all(8.0),
            "offset" : Offset.zero}, _namedArguments );
        this.assert = assert;
        this.itemBuilder = itemBuilder;
        this.initialValue = initialValue;
        this.onSelected = onSelected;
        this.onCanceled = onCanceled;
        this.tooltip = tooltip;
        this.elevation = elevation;
        this.padding = padding;
        this.child = child;
        this.icon = icon;
        this.offset = offset;
    }
     : any;

     : any;

    [null](child : any, : any) {
    }
     : any;

     : any;

     : any;

    itemBuilder : <T>(context : lib3.BuildContext) => core.DartList<PopupMenuEntry<T>>;

    initialValue : T;

    onSelected : <T>(value : T) => any;

    onCanceled : () => any;

    tooltip : string;

    elevation : double;

    padding : lib16.EdgeInsetsGeometry;

    child : lib3.Widget;

    icon : lib22.Icon;

    offset : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _PopupMenuButtonState<T> {
        return _PopupMenuButtonState();
    }
}

export namespace _PopupMenuButtonState {
    export type Constructors = '_PopupMenuButtonState';
    export type Interface<T> = Omit<_PopupMenuButtonState<T>, Constructors>;
}
@DartClass
export class _PopupMenuButtonState<T> extends any {
    showButtonMenu() : any {
        let button : any = lib6.properties.context.findRenderObject();
        let overlay : any = lib38.Overlay.of(lib6.properties.context).context.findRenderObject();
        let position : lib33.RelativeRect = lib33.RelativeRect.fromRect(Rect.fromPoints(button.localToGlobal(widget.offset,{
            ancestor : overlay}),button.localToGlobal(button.size.bottomRight(Offset.zero),{
            ancestor : overlay})),op(Op.BITAND,Offset.zero,overlay.size));
        op(Op.LT,showMenu({
            context : lib6.properties.context,elevation : widget.elevation,items : widget.itemBuilder(lib6.properties.context),initialValue : widget.initialValue,position : position}).then.bind(showMenu({
            context : lib6.properties.context,elevation : widget.elevation,items : widget.itemBuilder(lib6.properties.context),initialValue : widget.initialValue,position : position})),);
        op(Op.GT,,((newValue : T) =>  {
            if (!mounted) return null;
            if (op(Op.EQUALS,newValue,null)) {
                if (widget.onCanceled != null) widget.onCanceled();
                return null;
            }
            if (widget.onSelected != null) widget.onSelected(newValue);
        }));
    }
    _getIcon(platform : lib36.TargetPlatform) : lib22.Icon {
        /* TODO (AssertStatementImpl) : assert (platform != null); */;
        switch (platform) {
            case lib36.TargetPlatform.android:
            case lib36.TargetPlatform.fuchsia:
                return new lib22.Icon(lib21.Icons.more_vert);
            case lib36.TargetPlatform.iOS:
                return new lib22.Icon(lib21.Icons.more_horiz);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        return widget.child != null ? lib18.InkWell({
            onTap : this.showButtonMenu.bind(this),child : widget.child}) : lib39.IconButton({
            icon : (widget.icon || this._getIcon(lib8.Theme.of(context).platform)),padding : widget.padding,tooltip : (widget.tooltip || lib37.MaterialLocalizations.of(context).showMenuTooltip),onPressed : this.showButtonMenu.bind(this)});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _PopupMenuButtonState() {
    }
}

export namespace PopupMenuDivider {
    export type Constructors = PopupMenuEntry.Constructors | 'PopupMenuDivider';
    export type Interface = Omit<PopupMenuDivider, Constructors>;
}
@DartClass
export class PopupMenuDivider extends PopupMenuEntry<core.Null> {
    constructor(_namedArguments? : {key? : lib4.Key,height? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PopupMenuDivider(_namedArguments? : {key? : lib4.Key,height? : double}) {
        let {key,height} = Object.assign({
            "height" : properties._kMenuDividerHeight}, _namedArguments );
        super.PopupMenuEntry({
            key : key});
        this.height = height;
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    height : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    represents(value : any) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _PopupMenuDividerState {
        return _PopupMenuDividerState();
    }
}

export namespace PopupMenuItem {
    export type Constructors = PopupMenuEntry.Constructors | 'PopupMenuItem';
    export type Interface<T> = Omit<PopupMenuItem<T>, Constructors>;
}
@DartClass
export class PopupMenuItem<T> extends PopupMenuEntry<T> {
    constructor(_namedArguments? : {key? : lib4.Key,value? : T,enabled? : boolean,height? : double,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PopupMenuItem(_namedArguments? : {key? : lib4.Key,value? : T,enabled? : boolean,height? : double,child? : lib3.Widget}) {
        let {key,value,enabled,height,child} = Object.assign({
            "enabled" : true,
            "height" : properties._kMenuItemHeight}, _namedArguments );
        this.assert = assert;
        this.value = value;
        this.enabled = enabled;
        this.height = height;
        this.child = child;
    }
     : any;

     : any;

     : any;

     : any;

    value : T;

    enabled : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    height : double;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    represents(value : T) : boolean {
        return op(Op.EQUALS,value,this.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : PopupMenuItemState<T,PopupMenuItem<T>> {
        return PopupMenuItemState();
    }
}

export namespace _CheckedPopupMenuItemState {
    export type Constructors = PopupMenuItemState.Constructors | '_CheckedPopupMenuItemState';
    export type Interface<T> = Omit<_CheckedPopupMenuItemState<T>, Constructors>;
}
@DartClass
@With(any)
export class _CheckedPopupMenuItemState<T> extends PopupMenuItemState<T,CheckedPopupMenuItem<T>> implements any.Interface {
    private static __$_fadeDuration : core.DartDuration;
    static get _fadeDuration() : core.DartDuration { 
        if (this.__$_fadeDuration===undefined) {
            this.__$_fadeDuration = core.DartDuration({
                milliseconds : 150});
        }
        return this.__$_fadeDuration;
    }

    _controller : lib19.AnimationController;

    get _opacity() : lib20.Animation<double> {
        return this._controller.view;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._controller = ((_) : any =>  {
            {
                _.value = widget.checked ? 1.0 : 0.0;
                addListener(() =>  {
                    return setState(() =>  {
                    });
                });
                return _;
            }
        })(lib19.AnimationController({
            duration : _CheckedPopupMenuItemState._fadeDuration,vsync : this}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleTap() : any {
        if (widget.checked) this._controller.reverse();else this._controller.forward();
        super.handleTap();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildChild() : lib3.Widget {
        return lib24.ListTile({
            enabled : widget.enabled,leading : lib23.FadeTransition({
                opacity : this._opacity,child : lib22.Icon(this._controller.isDismissed ? null : lib21.Icons.done)}),title : widget.child});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CheckedPopupMenuItemState() {
    }
}

export namespace CheckedPopupMenuItem {
    export type Constructors = PopupMenuItem.Constructors | 'CheckedPopupMenuItem';
    export type Interface<T> = Omit<CheckedPopupMenuItem<T>, Constructors>;
}
@DartClass
export class CheckedPopupMenuItem<T> extends PopupMenuItem<T> {
    constructor(_namedArguments? : {key? : lib4.Key,value? : T,checked? : boolean,enabled? : boolean,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CheckedPopupMenuItem(_namedArguments? : {key? : lib4.Key,value? : T,checked? : boolean,enabled? : boolean,child? : lib3.Widget}) {
        let {key,value,checked,enabled,child} = Object.assign({
            "checked" : false,
            "enabled" : true}, _namedArguments );
        this.assert = assert;
        this.checked = checked;
    }
     : any;

     : any;

    key;
    value;

    value;
    enabled;

    enabled;
    child;

    child;
    ;

    checked : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get child() : lib3.Widget {
        return super.child;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _CheckedPopupMenuItemState<T> {
        return _CheckedPopupMenuItemState();
    }
}

export class properties {
    private static __$_kMenuDuration : core.DartDuration;
    static get _kMenuDuration() : core.DartDuration { 
        if (this.__$_kMenuDuration===undefined) {
            this.__$_kMenuDuration = core.DartDuration({
                milliseconds : 300});
        }
        return this.__$_kMenuDuration;
    }
    static set _kMenuDuration(__$value : core.DartDuration)  { 
        this.__$_kMenuDuration = __$value;
    }

    private static __$_kBaselineOffsetFromBottom : double;
    static get _kBaselineOffsetFromBottom() : double { 
        if (this.__$_kBaselineOffsetFromBottom===undefined) {
            this.__$_kBaselineOffsetFromBottom = 20.0;
        }
        return this.__$_kBaselineOffsetFromBottom;
    }
    static set _kBaselineOffsetFromBottom(__$value : double)  { 
        this.__$_kBaselineOffsetFromBottom = __$value;
    }

    private static __$_kMenuCloseIntervalEnd : double;
    static get _kMenuCloseIntervalEnd() : double { 
        if (this.__$_kMenuCloseIntervalEnd===undefined) {
            this.__$_kMenuCloseIntervalEnd = 2.0 / 3.0;
        }
        return this.__$_kMenuCloseIntervalEnd;
    }
    static set _kMenuCloseIntervalEnd(__$value : double)  { 
        this.__$_kMenuCloseIntervalEnd = __$value;
    }

    private static __$_kMenuHorizontalPadding : double;
    static get _kMenuHorizontalPadding() : double { 
        if (this.__$_kMenuHorizontalPadding===undefined) {
            this.__$_kMenuHorizontalPadding = 16.0;
        }
        return this.__$_kMenuHorizontalPadding;
    }
    static set _kMenuHorizontalPadding(__$value : double)  { 
        this.__$_kMenuHorizontalPadding = __$value;
    }

    private static __$_kMenuItemHeight : double;
    static get _kMenuItemHeight() : double { 
        if (this.__$_kMenuItemHeight===undefined) {
            this.__$_kMenuItemHeight = 48.0;
        }
        return this.__$_kMenuItemHeight;
    }
    static set _kMenuItemHeight(__$value : double)  { 
        this.__$_kMenuItemHeight = __$value;
    }

    private static __$_kMenuDividerHeight : double;
    static get _kMenuDividerHeight() : double { 
        if (this.__$_kMenuDividerHeight===undefined) {
            this.__$_kMenuDividerHeight = 16.0;
        }
        return this.__$_kMenuDividerHeight;
    }
    static set _kMenuDividerHeight(__$value : double)  { 
        this.__$_kMenuDividerHeight = __$value;
    }

    private static __$_kMenuMaxWidth : double;
    static get _kMenuMaxWidth() : double { 
        if (this.__$_kMenuMaxWidth===undefined) {
            this.__$_kMenuMaxWidth = 5.0 * properties._kMenuWidthStep;
        }
        return this.__$_kMenuMaxWidth;
    }
    static set _kMenuMaxWidth(__$value : double)  { 
        this.__$_kMenuMaxWidth = __$value;
    }

    private static __$_kMenuMinWidth : double;
    static get _kMenuMinWidth() : double { 
        if (this.__$_kMenuMinWidth===undefined) {
            this.__$_kMenuMinWidth = 2.0 * properties._kMenuWidthStep;
        }
        return this.__$_kMenuMinWidth;
    }
    static set _kMenuMinWidth(__$value : double)  { 
        this.__$_kMenuMinWidth = __$value;
    }

    private static __$_kMenuVerticalPadding : double;
    static get _kMenuVerticalPadding() : double { 
        if (this.__$_kMenuVerticalPadding===undefined) {
            this.__$_kMenuVerticalPadding = 8.0;
        }
        return this.__$_kMenuVerticalPadding;
    }
    static set _kMenuVerticalPadding(__$value : double)  { 
        this.__$_kMenuVerticalPadding = __$value;
    }

    private static __$_kMenuWidthStep : double;
    static get _kMenuWidthStep() : double { 
        if (this.__$_kMenuWidthStep===undefined) {
            this.__$_kMenuWidthStep = 56.0;
        }
        return this.__$_kMenuWidthStep;
    }
    static set _kMenuWidthStep(__$value : double)  { 
        this.__$_kMenuWidthStep = __$value;
    }

    private static __$_kMenuScreenPadding : double;
    static get _kMenuScreenPadding() : double { 
        if (this.__$_kMenuScreenPadding===undefined) {
            this.__$_kMenuScreenPadding = 8.0;
        }
        return this.__$_kMenuScreenPadding;
    }
    static set _kMenuScreenPadding(__$value : double)  { 
        this.__$_kMenuScreenPadding = __$value;
    }

}
