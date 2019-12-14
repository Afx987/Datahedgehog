/** Library asset:datahedgehog_monitor/lib/lib/material/app_bar.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./constants";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/rendering/shifted_box";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/widgets/preferred_size";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme_data";
import * as lib10 from "./text_theme";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/navigation_toolbar";
import * as lib12 from "./theme_data";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib15 from "./scaffold";
import * as lib16 from "./theme";
import * as lib17 from "./app_bar_theme";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/widgets/routes";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/widgets/pages";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib22 from "./icons";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/widgets/icon";
import * as lib24 from "./material_localizations";
import * as lib25 from "./icon_button";
import * as lib26 from "./back_button";
import * as lib27 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib28 from "@dart2ts.packages/flutter/lib/src/rendering/paragraph";
import * as lib29 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib30 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib31 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme";
import * as lib32 from "@dart2ts.packages/flutter/lib/src/widgets/safe_area";
import * as lib33 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib34 from "@dart2ts.packages/flutter/lib/src/rendering/stack";
import * as lib35 from "@dart2ts.packages/flutter/lib/src/services/system_chrome";
import * as lib36 from "./material";
import * as lib37 from "@dart2ts.packages/flutter/lib/src/widgets/annotated_region";
import * as lib38 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_position";
import * as lib39 from "@dart2ts.packages/flutter/lib/src/widgets/scrollable";
import * as lib40 from "@dart2ts.packages/flutter/lib/src/rendering/sliver_persistent_header";
import * as lib41 from "@dart2ts.packages/flutter/lib/src/widgets/sliver_persistent_header";
import * as math from "@dart2ts/dart/math";
import * as lib43 from "./flexible_space_bar";
import * as lib44 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib45 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";

export namespace _ToolbarContainerLayout {
    export type Constructors = lib4.SingleChildLayoutDelegate.Constructors | '_ToolbarContainerLayout';
    export type Interface = Omit<_ToolbarContainerLayout, Constructors>;
}
@DartClass
export class _ToolbarContainerLayout extends lib4.SingleChildLayoutDelegate {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ToolbarContainerLayout() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getConstraintsForChild(constraints : lib5.BoxConstraints) : lib5.BoxConstraints {
        return constraints.tighten({
            height : lib3.properties.kToolbarHeight});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getSize(constraints : lib5.BoxConstraints) : any {
        return Size(constraints.maxWidth,lib3.properties.kToolbarHeight);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getPositionForChild(size : any,childSize : any) : any {
        return Offset(0.0,op(Op.MINUS,size.height,childSize.height));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRelayout(oldDelegate : _ToolbarContainerLayout) : boolean {
        return false;
    }
}

export namespace AppBar {
    export type Constructors = lib6.StatefulWidget.Constructors | 'AppBar';
    export type Interface = Omit<AppBar, Constructors>;
}
@DartClass
@Implements(lib7.PreferredSizeWidget)
export class AppBar extends lib6.StatefulWidget implements lib7.PreferredSizeWidget.Interface {
    constructor(_namedArguments? : {key? : lib8.Key,leading? : lib6.Widget,automaticallyImplyLeading? : boolean,title? : lib6.Widget,actions? : core.DartList<lib6.Widget>,flexibleSpace? : lib6.Widget,bottom? : lib7.PreferredSizeWidget,elevation? : double,backgroundColor? : any,brightness? : any,iconTheme? : lib9.IconThemeData,textTheme? : lib10.TextTheme,primary? : boolean,centerTitle? : boolean,titleSpacing? : double,toolbarOpacity? : double,bottomOpacity? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AppBar(_namedArguments? : {key? : lib8.Key,leading? : lib6.Widget,automaticallyImplyLeading? : boolean,title? : lib6.Widget,actions? : core.DartList<lib6.Widget>,flexibleSpace? : lib6.Widget,bottom? : lib7.PreferredSizeWidget,elevation? : double,backgroundColor? : any,brightness? : any,iconTheme? : lib9.IconThemeData,textTheme? : lib10.TextTheme,primary? : boolean,centerTitle? : boolean,titleSpacing? : double,toolbarOpacity? : double,bottomOpacity? : double}) {
        let {key,leading,automaticallyImplyLeading,title,actions,flexibleSpace,bottom,elevation,backgroundColor,brightness,iconTheme,textTheme,primary,centerTitle,titleSpacing,toolbarOpacity,bottomOpacity} = Object.assign({
            "automaticallyImplyLeading" : true,
            "primary" : true,
            "titleSpacing" : lib11.NavigationToolbar.kMiddleSpacing,
            "toolbarOpacity" : 1.0,
            "bottomOpacity" : 1.0}, _namedArguments );
        this.preferredSize = Size.fromHeight(lib3.properties.kToolbarHeight + ((((t)=>(!!t)?t.height:null)(((t)=>(!!t)?t.preferredSize:null)(this.bottom)) || 0.0)));
        this.assert = assert;
        this.leading = leading;
        this.automaticallyImplyLeading = automaticallyImplyLeading;
        this.title = title;
        this.actions = actions;
        this.flexibleSpace = flexibleSpace;
        this.bottom = bottom;
        this.elevation = elevation;
        this.backgroundColor = backgroundColor;
        this.brightness = brightness;
        this.iconTheme = iconTheme;
        this.textTheme = textTheme;
        this.primary = primary;
        this.centerTitle = centerTitle;
        this.titleSpacing = titleSpacing;
        this.toolbarOpacity = toolbarOpacity;
        this.bottomOpacity = bottomOpacity;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    preferredSize;
    super;

     : any;

     : any;

    leading : lib6.Widget;

    automaticallyImplyLeading : boolean;

    title : lib6.Widget;

    actions : core.DartList<lib6.Widget>;

    flexibleSpace : lib6.Widget;

    bottom : lib7.PreferredSizeWidget;

    elevation : double;

    backgroundColor : any;

    brightness : any;

    iconTheme : lib9.IconThemeData;

    textTheme : lib10.TextTheme;

    primary : boolean;

    centerTitle : boolean;

    titleSpacing : double;

    toolbarOpacity : double;

    bottomOpacity : double;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    preferredSize : any;

    _getEffectiveCenterTitle(themeData : lib12.ThemeData) : boolean {
        if (this.centerTitle != null) return this.centerTitle;
        /* TODO (AssertStatementImpl) : assert (themeData.platform != null); */;
        switch (themeData.platform) {
            case lib13.TargetPlatform.android:
            case lib13.TargetPlatform.fuchsia:
                return false;
            case lib13.TargetPlatform.iOS:
                return this.actions == null || this.actions.length < 2;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _AppBarState {
        return _AppBarState();
    }
}

export namespace _AppBarState {
    export type Constructors = '_AppBarState';
    export type Interface = Omit<_AppBarState, Constructors>;
}
@DartClass
export class _AppBarState extends any {
    private static __$_defaultElevation : double;
    static get _defaultElevation() : double { 
        if (this.__$_defaultElevation===undefined) {
            this.__$_defaultElevation = 4.0;
        }
        return this.__$_defaultElevation;
    }

    _handleDrawerButton() : any {
        lib15.Scaffold.of(lib14.properties.context).openDrawer();
    }
    _handleDrawerButtonEnd() : any {
        lib15.Scaffold.of(lib14.properties.context).openEndDrawer();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        /* TODO (AssertStatementImpl) : assert (!widget.primary || debugCheckHasMediaQuery(context)); */;
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        let themeData : lib12.ThemeData = lib16.Theme.of(context);
        let appBarTheme : lib17.AppBarTheme = lib17.AppBarTheme.of(context);
        let scaffold : lib15.ScaffoldState = lib15.Scaffold.of(context,{
            nullOk : true});
        let parentRoute : lib18.ModalRoute<any> = lib18.ModalRoute.of(context);
        let hasDrawer : boolean = (((t)=>(!!t)?t.hasDrawer:null)(scaffold) || false);
        let hasEndDrawer : boolean = (((t)=>(!!t)?t.hasEndDrawer:null)(scaffold) || false);
        let canPop : boolean = (((t)=>(!!t)?t.canPop:null)(parentRoute) || false);
        let useCloseButton : boolean = is(parentRoute, lib19.PageRoute<any>) && parentRoute.fullscreenDialog;
        let appBarIconTheme : lib9.IconThemeData = ((widget.iconTheme || appBarTheme.iconTheme) || themeData.primaryIconTheme);
        let centerStyle : lib20.TextStyle = ((((t)=>(!!t)?t.title:null)(widget.textTheme) || ((t)=>(!!t)?t.title:null)(appBarTheme.textTheme)) || themeData.primaryTextTheme.title);
        let sideStyle : lib20.TextStyle = ((((t)=>(!!t)?t.body1:null)(widget.textTheme) || ((t)=>(!!t)?t.body1:null)(appBarTheme.textTheme)) || themeData.primaryTextTheme.body1);
        if (widget.toolbarOpacity != 1.0) {
            let opacity : double = new lib21.Interval(0.25,1.0,{
                curve : lib21.Curves.fastOutSlowIn}).transform(widget.toolbarOpacity);
            if (((t)=>(!!t)?t.color:null)(centerStyle) != null) centerStyle = centerStyle.copyWith({
                color : centerStyle.color.withOpacity(opacity)});
            if (((t)=>(!!t)?t.color:null)(sideStyle) != null) sideStyle = sideStyle.copyWith({
                color : sideStyle.color.withOpacity(opacity)});
            appBarIconTheme = appBarIconTheme.copyWith({
                opacity : opacity * ((appBarIconTheme.opacity || 1.0))});
        }
        let leading : lib6.Widget = widget.leading;
        if (op(Op.EQUALS,leading,null) && widget.automaticallyImplyLeading) {
            if (hasDrawer) {
                leading = lib25.IconButton({
                    icon : new lib23.Icon(lib22.Icons.menu),onPressed : this._handleDrawerButton.bind(this),tooltip : lib24.MaterialLocalizations.of(context).openAppDrawerTooltip});
            }else {
                if (canPop) leading = useCloseButton ? new lib26.CloseButton() : new lib26.BackButton();
            }
        }
        if (leading != null) {
            leading = lib27.ConstrainedBox({
                constraints : new lib5.BoxConstraints.tightFor({
                    width : properties._kLeadingWidth}),child : leading});
        }
        let title : lib6.Widget = widget.title;
        if (title != null) {
            let namesRoute : boolean;
            switch (lib13.properties.defaultTargetPlatform) {
                case lib13.TargetPlatform.android:
                case lib13.TargetPlatform.fuchsia:
                    namesRoute = true;
                    break;
                case lib13.TargetPlatform.iOS:
                    break;
            }
            title = lib29.DefaultTextStyle({
                style : centerStyle,softWrap : false,overflow : lib28.TextOverflow.ellipsis,child : lib27.Semantics({
                    namesRoute : namesRoute,child : title,header : true})});
        }
        let actions : lib6.Widget;
        if (widget.actions != null && widget.actions.isNotEmpty) {
            actions = lib27.Row({
                mainAxisSize : lib30.MainAxisSize.min,crossAxisAlignment : lib30.CrossAxisAlignment.stretch,children : widget.actions});
        }else if (hasEndDrawer) {
            actions = lib25.IconButton({
                icon : new lib23.Icon(lib22.Icons.menu),onPressed : this._handleDrawerButtonEnd.bind(this),tooltip : lib24.MaterialLocalizations.of(context).openAppDrawerTooltip});
        }
        let toolbar : lib6.Widget = lib11.NavigationToolbar({
            leading : leading,middle : title,trailing : actions,centerMiddle : widget._getEffectiveCenterTitle(themeData),middleSpacing : widget.titleSpacing});
        let appBar : lib6.Widget = lib27.ClipRect({
            child : lib27.CustomSingleChildLayout({
                delegate : new _ToolbarContainerLayout(),child : lib31.IconTheme.merge({
                    data : appBarIconTheme,child : lib29.DefaultTextStyle({
                        style : sideStyle,child : toolbar})})})});
        if (widget.bottom != null) {
            appBar = lib27.Column({
                mainAxisAlignment : lib30.MainAxisAlignment.spaceBetween,children : new core.DartList.literal<lib6.Widget>(lib27.Flexible({
                    child : lib27.ConstrainedBox({
                        constraints : new lib5.BoxConstraints({
                            maxHeight : lib3.properties.kToolbarHeight}),child : appBar})}),op(Op.EQUALS,widget.bottomOpacity,1.0) ? widget.bottom : lib27.Opacity({
                    opacity : new lib21.Interval(0.25,1.0,{
                        curve : lib21.Curves.fastOutSlowIn}).transform(widget.bottomOpacity),child : widget.bottom}))});
        }
        if (widget.primary) {
            appBar = lib32.SafeArea({
                top : true,child : appBar});
        }
        appBar = lib27.Align({
            alignment : lib33.Alignment.topCenter,child : appBar});
        if (widget.flexibleSpace != null) {
            appBar = lib27.Stack({
                fit : lib34.StackFit.passthrough,children : new core.DartList.literal<lib6.Widget>(widget.flexibleSpace,appBar)});
        }
        let brightness : any = ((widget.brightness || appBarTheme.brightness) || themeData.primaryColorBrightness);
        let overlayStyle : lib35.SystemUiOverlayStyle = op(Op.EQUALS,brightness,Brightness.dark) ? lib35.SystemUiOverlayStyle.light : lib35.SystemUiOverlayStyle.dark;
        return lib27.Semantics({
            container : true,child : lib37.AnnotatedRegion({
                value : overlayStyle,child : lib36.Material({
                    color : ((widget.backgroundColor || appBarTheme.color) || themeData.primaryColor),elevation : ((widget.elevation || appBarTheme.elevation) || _AppBarState._defaultElevation),child : lib27.Semantics({
                        explicitChildNodes : true,child : appBar})})})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AppBarState() {
    }
}

export namespace _FloatingAppBar {
    export type Constructors = lib6.StatefulWidget.Constructors | '_FloatingAppBar';
    export type Interface = Omit<_FloatingAppBar, Constructors>;
}
@DartClass
export class _FloatingAppBar extends lib6.StatefulWidget {
    constructor(_namedArguments? : {key? : lib8.Key,child? : lib6.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FloatingAppBar(_namedArguments? : {key? : lib8.Key,child? : lib6.Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        super.StatefulWidget({
            key : key});
        this.child = child;
    }
    child : lib6.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _FloatingAppBarState {
        return _FloatingAppBarState();
    }
}

export namespace _FloatingAppBarState {
    export type Constructors = '_FloatingAppBarState';
    export type Interface = Omit<_FloatingAppBarState, Constructors>;
}
@DartClass
export class _FloatingAppBarState extends any {
    _position : lib38.ScrollPosition;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        super.didChangeDependencies();
        if (this._position != null) this._position.isScrollingNotifier.removeListener(this._isScrollingListener.bind(this));
        this._position = ((t)=>(!!t)?t.position:null)(lib39.Scrollable.of(lib14.properties.context));
        if (this._position != null) this._position.isScrollingNotifier.addListener(this._isScrollingListener.bind(this));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        if (this._position != null) this._position.isScrollingNotifier.removeListener(this._isScrollingListener.bind(this));
        super.dispose();
    }
    _headerRenderer() : lib40.RenderSliverFloatingPersistentHeader {
        return lib14.properties.context.ancestorRenderObjectOfType(new lib6.TypeMatcher<lib40.RenderSliverFloatingPersistentHeader>());
    }
    _isScrollingListener() : any {
        if (op(Op.EQUALS,this._position,null)) return;
        let header : lib40.RenderSliverFloatingPersistentHeader = this._headerRenderer();
        if (this._position.isScrollingNotifier.value) ((_718_)=>(!!_718_)?_718_.maybeStopSnapAnimation(this._position.userScrollDirection):null)(header);else ((_719_)=>(!!_719_)?_719_.maybeStartSnapAnimation(this._position.userScrollDirection):null)(header);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        return widget.child;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FloatingAppBarState() {
    }
}

export namespace _SliverAppBarDelegate {
    export type Constructors = lib41.SliverPersistentHeaderDelegate.Constructors | '_SliverAppBarDelegate';
    export type Interface = Omit<_SliverAppBarDelegate, Constructors>;
}
@DartClass
export class _SliverAppBarDelegate extends lib41.SliverPersistentHeaderDelegate {
    constructor(_namedArguments? : {leading? : lib6.Widget,automaticallyImplyLeading? : boolean,title? : lib6.Widget,actions? : core.DartList<lib6.Widget>,flexibleSpace? : lib6.Widget,bottom? : lib7.PreferredSizeWidget,elevation? : double,forceElevated? : boolean,backgroundColor? : any,brightness? : any,iconTheme? : lib9.IconThemeData,textTheme? : lib10.TextTheme,primary? : boolean,centerTitle? : boolean,titleSpacing? : double,expandedHeight? : double,collapsedHeight? : double,topPadding? : double,floating? : boolean,pinned? : boolean,snapConfiguration? : lib40.FloatingHeaderSnapConfiguration}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SliverAppBarDelegate(_namedArguments? : {leading? : lib6.Widget,automaticallyImplyLeading? : boolean,title? : lib6.Widget,actions? : core.DartList<lib6.Widget>,flexibleSpace? : lib6.Widget,bottom? : lib7.PreferredSizeWidget,elevation? : double,forceElevated? : boolean,backgroundColor? : any,brightness? : any,iconTheme? : lib9.IconThemeData,textTheme? : lib10.TextTheme,primary? : boolean,centerTitle? : boolean,titleSpacing? : double,expandedHeight? : double,collapsedHeight? : double,topPadding? : double,floating? : boolean,pinned? : boolean,snapConfiguration? : lib40.FloatingHeaderSnapConfiguration}) {
        let {leading,automaticallyImplyLeading,title,actions,flexibleSpace,bottom,elevation,forceElevated,backgroundColor,brightness,iconTheme,textTheme,primary,centerTitle,titleSpacing,expandedHeight,collapsedHeight,topPadding,floating,pinned,snapConfiguration} = Object.assign({
        }, _namedArguments );
        this._bottomHeight = (((t)=>(!!t)?t.height:null)(((t)=>(!!t)?t.preferredSize:null)(this.bottom)) || 0.0);
        this.assert = assert;
        this.leading = leading;
        this.automaticallyImplyLeading = automaticallyImplyLeading;
        this.title = title;
        this.actions = actions;
        this.flexibleSpace = flexibleSpace;
        this.bottom = bottom;
        this.elevation = elevation;
        this.forceElevated = forceElevated;
        this.backgroundColor = backgroundColor;
        this.brightness = brightness;
        this.iconTheme = iconTheme;
        this.textTheme = textTheme;
        this.primary = primary;
        this.centerTitle = centerTitle;
        this.titleSpacing = titleSpacing;
        this.expandedHeight = expandedHeight;
        this.collapsedHeight = collapsedHeight;
        this.topPadding = topPadding;
        this.floating = floating;
        this.pinned = pinned;
        this.snapConfiguration = snapConfiguration;
    }
     : any;

     : any;

    _bottomHeight;

    leading : lib6.Widget;

    automaticallyImplyLeading : boolean;

    title : lib6.Widget;

    actions : core.DartList<lib6.Widget>;

    flexibleSpace : lib6.Widget;

    bottom : lib7.PreferredSizeWidget;

    elevation : double;

    forceElevated : boolean;

    backgroundColor : any;

    brightness : any;

    iconTheme : lib9.IconThemeData;

    textTheme : lib10.TextTheme;

    primary : boolean;

    centerTitle : boolean;

    titleSpacing : double;

    expandedHeight : double;

    collapsedHeight : double;

    topPadding : double;

    floating : boolean;

    pinned : boolean;

    _bottomHeight : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get minExtent() : double {
        return (this.collapsedHeight || (this.topPadding + lib3.properties.kToolbarHeight + this._bottomHeight));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get maxExtent() : double {
        return math.max(this.topPadding + ((this.expandedHeight || lib3.properties.kToolbarHeight + this._bottomHeight)),this.minExtent);
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    snapConfiguration : lib40.FloatingHeaderSnapConfiguration;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext,shrinkOffset : double,overlapsContent : boolean) : lib6.Widget {
        let visibleMainHeight : double = this.maxExtent - shrinkOffset - this.topPadding;
        let toolbarOpacity : double = !this.pinned || (this.floating && this.bottom != null) ? new core.DartDouble(((visibleMainHeight - this._bottomHeight) / lib3.properties.kToolbarHeight)).clamp(0.0,1.0) : 1.0;
        let appBar : lib6.Widget = lib43.FlexibleSpaceBar.createSettings({
            minExtent : this.minExtent,maxExtent : this.maxExtent,currentExtent : math.max(this.minExtent,this.maxExtent - shrinkOffset),toolbarOpacity : toolbarOpacity,child : AppBar({
                leading : this.leading,automaticallyImplyLeading : this.automaticallyImplyLeading,title : this.title,actions : this.actions,flexibleSpace : (op(Op.EQUALS,this.title,null) && this.flexibleSpace != null) ? lib27.Semantics({
                    child : this.flexibleSpace,header : true}) : this.flexibleSpace,bottom : this.bottom,elevation : this.forceElevated || overlapsContent || (this.pinned && shrinkOffset > this.maxExtent - this.minExtent) ? (this.elevation || 4.0) : 0.0,backgroundColor : this.backgroundColor,brightness : this.brightness,iconTheme : this.iconTheme,textTheme : this.textTheme,primary : this.primary,centerTitle : this.centerTitle,titleSpacing : this.titleSpacing,toolbarOpacity : toolbarOpacity,bottomOpacity : this.pinned ? 1.0 : new core.DartDouble((visibleMainHeight / this._bottomHeight)).clamp(0.0,1.0)})});
        return this.floating ? _FloatingAppBar({
            child : appBar}) : appBar;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRebuild(oldDelegate : _SliverAppBarDelegate) : boolean {
        return this.leading != oldDelegate.leading || this.automaticallyImplyLeading != oldDelegate.automaticallyImplyLeading || this.title != oldDelegate.title || this.actions != oldDelegate.actions || this.flexibleSpace != oldDelegate.flexibleSpace || this.bottom != oldDelegate.bottom || this._bottomHeight != oldDelegate._bottomHeight || this.elevation != oldDelegate.elevation || this.backgroundColor != oldDelegate.backgroundColor || this.brightness != oldDelegate.brightness || this.iconTheme != oldDelegate.iconTheme || this.textTheme != oldDelegate.textTheme || this.primary != oldDelegate.primary || this.centerTitle != oldDelegate.centerTitle || this.titleSpacing != oldDelegate.titleSpacing || this.expandedHeight != oldDelegate.expandedHeight || this.topPadding != oldDelegate.topPadding || this.pinned != oldDelegate.pinned || this.floating != oldDelegate.floating || this.snapConfiguration != oldDelegate.snapConfiguration;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${lib44.describeIdentity(this)}(topPadding: ${new core.DartDouble(this.topPadding).toStringAsFixed(1)}, bottomHeight: ${this._bottomHeight.toStringAsFixed(1)}, ...)`;
    }
}

export namespace SliverAppBar {
    export type Constructors = lib6.StatefulWidget.Constructors | 'SliverAppBar';
    export type Interface = Omit<SliverAppBar, Constructors>;
}
@DartClass
export class SliverAppBar extends lib6.StatefulWidget {
    constructor(_namedArguments? : {key? : lib8.Key,leading? : lib6.Widget,automaticallyImplyLeading? : boolean,title? : lib6.Widget,actions? : core.DartList<lib6.Widget>,flexibleSpace? : lib6.Widget,bottom? : lib7.PreferredSizeWidget,elevation? : double,forceElevated? : boolean,backgroundColor? : any,brightness? : any,iconTheme? : lib9.IconThemeData,textTheme? : lib10.TextTheme,primary? : boolean,centerTitle? : boolean,titleSpacing? : double,expandedHeight? : double,floating? : boolean,pinned? : boolean,snap? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverAppBar(_namedArguments? : {key? : lib8.Key,leading? : lib6.Widget,automaticallyImplyLeading? : boolean,title? : lib6.Widget,actions? : core.DartList<lib6.Widget>,flexibleSpace? : lib6.Widget,bottom? : lib7.PreferredSizeWidget,elevation? : double,forceElevated? : boolean,backgroundColor? : any,brightness? : any,iconTheme? : lib9.IconThemeData,textTheme? : lib10.TextTheme,primary? : boolean,centerTitle? : boolean,titleSpacing? : double,expandedHeight? : double,floating? : boolean,pinned? : boolean,snap? : any}) {
        let {key,leading,automaticallyImplyLeading,title,actions,flexibleSpace,bottom,elevation,forceElevated,backgroundColor,brightness,iconTheme,textTheme,primary,centerTitle,titleSpacing,expandedHeight,floating,pinned,snap} = Object.assign({
            "automaticallyImplyLeading" : true,
            "forceElevated" : false,
            "primary" : true,
            "titleSpacing" : lib11.NavigationToolbar.kMiddleSpacing,
            "floating" : false,
            "pinned" : false,
            "snap" : false}, _namedArguments );
        this.assert = assert;
        this.leading = leading;
        this.automaticallyImplyLeading = automaticallyImplyLeading;
        this.title = title;
        this.actions = actions;
        this.flexibleSpace = flexibleSpace;
        this.bottom = bottom;
        this.elevation = elevation;
        this.forceElevated = forceElevated;
        this.backgroundColor = backgroundColor;
        this.brightness = brightness;
        this.iconTheme = iconTheme;
        this.textTheme = textTheme;
        this.primary = primary;
        this.centerTitle = centerTitle;
        this.titleSpacing = titleSpacing;
        this.expandedHeight = expandedHeight;
        this.floating = floating;
        this.pinned = pinned;
        this.snap = snap;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    snap;
    ;

     : any;

     : any;

    leading : lib6.Widget;

    automaticallyImplyLeading : boolean;

    title : lib6.Widget;

    actions : core.DartList<lib6.Widget>;

    flexibleSpace : lib6.Widget;

    bottom : lib7.PreferredSizeWidget;

    elevation : double;

    forceElevated : boolean;

    backgroundColor : any;

    brightness : any;

    iconTheme : lib9.IconThemeData;

    textTheme : lib10.TextTheme;

    primary : boolean;

    centerTitle : boolean;

    titleSpacing : double;

    expandedHeight : double;

    floating : boolean;

    pinned : boolean;

    snap : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _SliverAppBarState {
        return _SliverAppBarState();
    }
}

export namespace _SliverAppBarState {
    export type Constructors = '_SliverAppBarState';
    export type Interface = Omit<_SliverAppBarState, Constructors>;
}
@DartClass
@With(any)
export class _SliverAppBarState extends any implements any.Interface {
    _snapConfiguration : lib40.FloatingHeaderSnapConfiguration;

    _updateSnapConfiguration() : any {
        if (widget.snap && widget.floating) {
            this._snapConfiguration = lib40.FloatingHeaderSnapConfiguration({
                vsync : this,curve : lib21.Curves.easeOut,duration : new core.DartDuration({
                    milliseconds : 200})});
        }else {
            this._snapConfiguration = null;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._updateSnapConfiguration();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : SliverAppBar) : any {
        super.didUpdateWidget(oldWidget);
        if (widget.snap != oldWidget.snap || widget.floating != oldWidget.floating) this._updateSnapConfiguration();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        /* TODO (AssertStatementImpl) : assert (!widget.primary || debugCheckHasMediaQuery(context)); */;
        let topPadding : double = widget.primary ? lib45.MediaQuery.of(context).padding.top : 0.0;
        let collapsedHeight : double = (widget.pinned && widget.floating && widget.bottom != null) ? op(Op.PLUS,widget.bottom.preferredSize.height,topPadding) : null;
        return lib45.MediaQuery.removePadding({
            context : context,removeBottom : true,child : lib41.SliverPersistentHeader({
                floating : widget.floating,pinned : widget.pinned,delegate : _SliverAppBarDelegate({
                    leading : widget.leading,automaticallyImplyLeading : widget.automaticallyImplyLeading,title : widget.title,actions : widget.actions,flexibleSpace : widget.flexibleSpace,bottom : widget.bottom,elevation : widget.elevation,forceElevated : widget.forceElevated,backgroundColor : widget.backgroundColor,brightness : widget.brightness,iconTheme : widget.iconTheme,textTheme : widget.textTheme,primary : widget.primary,centerTitle : widget.centerTitle,titleSpacing : widget.titleSpacing,expandedHeight : widget.expandedHeight,collapsedHeight : collapsedHeight,topPadding : topPadding,floating : widget.floating,pinned : widget.pinned,snapConfiguration : this._snapConfiguration})})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SliverAppBarState() {
    }
}

export class properties {
    private static __$_kLeadingWidth : double;
    static get _kLeadingWidth() : double { 
        if (this.__$_kLeadingWidth===undefined) {
            this.__$_kLeadingWidth = lib3.properties.kToolbarHeight;
        }
        return this.__$_kLeadingWidth;
    }
    static set _kLeadingWidth(__$value : double)  { 
        this.__$_kLeadingWidth = __$value;
    }

}
