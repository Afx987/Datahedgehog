/** Library asset:datahedgehog_monitor/lib/lib/cupertino/nav_bar.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/box_border";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/widgets/navigator";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/services/system_chrome";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/widgets/annotated_region";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib12 from "./theme";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/widgets/routes";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/pages";
import * as lib15 from "./page_scaffold";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/widgets/heroes";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/widgets/sliver_persistent_header";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/rendering/stack";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/rendering/paragraph";
import * as lib25 from "@dart2ts.packages/flutter/lib/src/widgets/implicit_animations";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/widgets/safe_area";
import * as lib27 from "@dart2ts.packages/flutter/lib/src/widgets/navigation_toolbar";
import * as lib28 from "./route";
import * as lib29 from "./button";
import * as lib30 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme_data";
import * as lib31 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme";
import * as lib32 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib33 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib34 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib35 from "./icons";
import * as lib36 from "@dart2ts.packages/flutter/lib/src/painting/text_span";
import * as lib37 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib38 from "@dart2ts.packages/flutter/lib/src/widgets/value_listenable_builder";
import * as lib39 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib40 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib41 from "@dart2ts.packages/flutter/lib/src/widgets/transitions";
import * as math from "@dart2ts/dart/math";
import * as lib43 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib44 from "@dart2ts.packages/flutter/lib/src/rendering/proxy_box";
import * as lib45 from "@dart2ts.packages/flutter/lib/src/widgets/visibility";

export var _wrapWithBackground : (_namedArguments? : {border? : lib4.Border,backgroundColor? : any,child? : lib6.Widget,updateSystemUiOverlay? : boolean}) => lib6.Widget = (_namedArguments? : {border? : lib4.Border,backgroundColor? : any,child? : lib6.Widget,updateSystemUiOverlay? : boolean}) : lib6.Widget =>  {
    let {border,backgroundColor,child,updateSystemUiOverlay} = Object.assign({
        "updateSystemUiOverlay" : true}, _namedArguments );
    let result : lib6.Widget = child;
    if (updateSystemUiOverlay) {
        let darkBackground : boolean = op(Op.LT,backgroundColor.computeLuminance(),0.179);
        let overlayStyle : lib7.SystemUiOverlayStyle = darkBackground ? lib7.SystemUiOverlayStyle.light : lib7.SystemUiOverlayStyle.dark;
        result = lib8.AnnotatedRegion({
            value : overlayStyle,sized : true,child : result});
    }
    let childWithBackground : lib10.DecoratedBox = lib10.DecoratedBox({
        decoration : lib9.BoxDecoration({
            border : border,color : backgroundColor}),child : result});
    if (op(Op.EQUALS,backgroundColor.alpha,255)) return childWithBackground;
    return lib11.ClipRect({
        child : lib11.BackdropFilter({
            filter : ImageFilter.blur({
                sigmaX : 10.0,sigmaY : 10.0}),child : childWithBackground})});
};
export var _wrapActiveColor : (color : any,context : lib6.BuildContext,child : lib6.Widget) => lib6.Widget = (color : any,context : lib6.BuildContext,child : lib6.Widget) : lib6.Widget =>  {
    if (op(Op.EQUALS,color,null)) {
        return child;
    }
    return lib12.CupertinoTheme({
        data : lib12.CupertinoTheme.of(context).copyWith({
            primaryColor : color}),child : child});
};
export var _isTransitionable : (context : lib6.BuildContext) => boolean = (context : lib6.BuildContext) : boolean =>  {
    let route : lib13.ModalRoute<any> = lib13.ModalRoute.of(context);
    return is(route, lib14.PageRoute<any>) && !route.fullscreenDialog;
};
export namespace _HeroTag {
    export type Constructors = '_HeroTag';
    export type Interface = Omit<_HeroTag, Constructors>;
}
@DartClass
export class _HeroTag {
    constructor(navigator : lib5.NavigatorState) {
    }
    @defaultConstructor
    _HeroTag(navigator : lib5.NavigatorState) {
        this.navigator = navigator;
    }
    navigator : lib5.NavigatorState;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `Default Hero tag for Cupertino navigation bars with navigator ${this.navigator}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        if (core.identical(this,other)) {
            return true;
        }
        if (other.runtimeType != this.runtimeType) {
            return false;
        }
        let otherTag : _HeroTag = other;
        return op(Op.EQUALS,this.navigator,otherTag.navigator);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return core.identityHashCode(this.navigator);
    }
}

export namespace CupertinoNavigationBar {
    export type Constructors = lib6.StatefulWidget.Constructors | 'CupertinoNavigationBar';
    export type Interface = Omit<CupertinoNavigationBar, Constructors>;
}
@DartClass
@Implements(lib15.ObstructingPreferredSizeWidget)
export class CupertinoNavigationBar extends lib6.StatefulWidget implements lib15.ObstructingPreferredSizeWidget.Interface {
    constructor(_namedArguments? : {key? : lib16.Key,leading? : lib6.Widget,automaticallyImplyLeading? : boolean,automaticallyImplyMiddle? : boolean,previousPageTitle? : string,middle? : lib6.Widget,trailing? : lib6.Widget,border? : lib4.Border,backgroundColor? : any,padding? : lib17.EdgeInsetsDirectional,actionsForegroundColor? : any,transitionBetweenRoutes? : boolean,heroTag? : core.DartObject}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoNavigationBar(_namedArguments? : {key? : lib16.Key,leading? : lib6.Widget,automaticallyImplyLeading? : boolean,automaticallyImplyMiddle? : boolean,previousPageTitle? : string,middle? : lib6.Widget,trailing? : lib6.Widget,border? : lib4.Border,backgroundColor? : any,padding? : lib17.EdgeInsetsDirectional,actionsForegroundColor? : any,transitionBetweenRoutes? : boolean,heroTag? : core.DartObject}) {
        let {key,leading,automaticallyImplyLeading,automaticallyImplyMiddle,previousPageTitle,middle,trailing,border,backgroundColor,padding,actionsForegroundColor,transitionBetweenRoutes,heroTag} = Object.assign({
            "automaticallyImplyLeading" : true,
            "automaticallyImplyMiddle" : true,
            "border" : properties._kDefaultNavBarBorder,
            "transitionBetweenRoutes" : true,
            "heroTag" : properties._defaultHeroTag}, _namedArguments );
        this.assert = assert;
        this.leading = leading;
        this.automaticallyImplyLeading = automaticallyImplyLeading;
        this.automaticallyImplyMiddle = automaticallyImplyMiddle;
        this.previousPageTitle = previousPageTitle;
        this.middle = middle;
        this.trailing = trailing;
        this.border = border;
        this.backgroundColor = backgroundColor;
        this.padding = padding;
        this.actionsForegroundColor = actionsForegroundColor;
        this.transitionBetweenRoutes = transitionBetweenRoutes;
        this.heroTag = heroTag;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    identical(heroTag : any,_defaultHeroTag : any) {
    }
     : any;

     : any;

    leading : lib6.Widget;

    automaticallyImplyLeading : boolean;

    automaticallyImplyMiddle : boolean;

    previousPageTitle : string;

    middle : lib6.Widget;

    trailing : lib6.Widget;

    backgroundColor : any;

    padding : lib17.EdgeInsetsDirectional;

    border : lib4.Border;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'Deprecated',value : {
            arguments : ['Use CupertinoTheme and primaryColor to propagate color'],namedArguments : {
            }}})
    actionsForegroundColor : any;

    transitionBetweenRoutes : boolean;

    heroTag : core.DartObject;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fullObstruction() : boolean {
        return op(Op.EQUALS,this.backgroundColor,null) ? null : op(Op.EQUALS,this.backgroundColor.alpha,255);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get preferredSize() : any {
        return new bare.createInstance(any,null,properties._kNavBarPersistentHeight);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _CupertinoNavigationBarState {
        return _CupertinoNavigationBarState();
    }
}

export namespace _CupertinoNavigationBarState {
    export type Constructors = '_CupertinoNavigationBarState';
    export type Interface = Omit<_CupertinoNavigationBarState, Constructors>;
}
@DartClass
export class _CupertinoNavigationBarState extends any {
    keys : _NavigationBarStaticComponentsKeys;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this.keys = _NavigationBarStaticComponentsKeys();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        let backgroundColor : any = (widget.backgroundColor || lib12.CupertinoTheme.of(context).barBackgroundColor);
        let components : _NavigationBarStaticComponents = _NavigationBarStaticComponents({
            keys : this.keys,route : lib13.ModalRoute.of(context),userLeading : widget.leading,automaticallyImplyLeading : widget.automaticallyImplyLeading,automaticallyImplyTitle : widget.automaticallyImplyMiddle,previousPageTitle : widget.previousPageTitle,userMiddle : widget.middle,userTrailing : widget.trailing,padding : widget.padding,userLargeTitle : null,large : false});
        let navBar : lib6.Widget = _wrapWithBackground({
            border : widget.border,backgroundColor : backgroundColor,child : lib18.DefaultTextStyle({
                style : lib12.CupertinoTheme.of(context).textTheme.textStyle,child : _PersistentNavigationBar({
                    components : components,padding : widget.padding})})});
        if (!widget.transitionBetweenRoutes || !_isTransitionable(context)) {
            return _wrapActiveColor(widget.actionsForegroundColor,context,navBar);
        }
        return _wrapActiveColor(widget.actionsForegroundColor,context,lib11.Builder({
            builder : (context : lib6.BuildContext) =>  {
                return lib19.Hero({
                    tag : op(Op.EQUALS,widget.heroTag,properties._defaultHeroTag) ? _HeroTag(lib5.Navigator.of(context)) : widget.heroTag,createRectTween : properties._linearTranslateWithLargestRectSizeTween,placeholderBuilder : properties._navBarHeroLaunchPadBuilder,flightShuttleBuilder : properties._navBarHeroFlightShuttleBuilder,transitionOnUserGestures : true,child : _TransitionableNavigationBar({
                        componentsKeys : this.keys,backgroundColor : backgroundColor,backButtonTextStyle : lib12.CupertinoTheme.of(context).textTheme.navActionTextStyle,titleTextStyle : lib12.CupertinoTheme.of(context).textTheme.navTitleTextStyle,largeTitleTextStyle : null,border : widget.border,hasUserMiddle : widget.middle != null,largeExpanded : false,child : navBar})});
            }}));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoNavigationBarState() {
    }
}

export namespace CupertinoSliverNavigationBar {
    export type Constructors = lib6.StatefulWidget.Constructors | 'CupertinoSliverNavigationBar';
    export type Interface = Omit<CupertinoSliverNavigationBar, Constructors>;
}
@DartClass
export class CupertinoSliverNavigationBar extends lib6.StatefulWidget {
    constructor(_namedArguments? : {key? : lib16.Key,largeTitle? : lib6.Widget,leading? : lib6.Widget,automaticallyImplyLeading? : boolean,automaticallyImplyTitle? : boolean,previousPageTitle? : string,middle? : lib6.Widget,trailing? : lib6.Widget,border? : lib4.Border,backgroundColor? : any,padding? : lib17.EdgeInsetsDirectional,actionsForegroundColor? : any,transitionBetweenRoutes? : boolean,heroTag? : core.DartObject}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoSliverNavigationBar(_namedArguments? : {key? : lib16.Key,largeTitle? : lib6.Widget,leading? : lib6.Widget,automaticallyImplyLeading? : boolean,automaticallyImplyTitle? : boolean,previousPageTitle? : string,middle? : lib6.Widget,trailing? : lib6.Widget,border? : lib4.Border,backgroundColor? : any,padding? : lib17.EdgeInsetsDirectional,actionsForegroundColor? : any,transitionBetweenRoutes? : boolean,heroTag? : core.DartObject}) {
        let {key,largeTitle,leading,automaticallyImplyLeading,automaticallyImplyTitle,previousPageTitle,middle,trailing,border,backgroundColor,padding,actionsForegroundColor,transitionBetweenRoutes,heroTag} = Object.assign({
            "automaticallyImplyLeading" : true,
            "automaticallyImplyTitle" : true,
            "border" : properties._kDefaultNavBarBorder,
            "transitionBetweenRoutes" : true,
            "heroTag" : properties._defaultHeroTag}, _namedArguments );
        this.assert = assert;
        this.largeTitle = largeTitle;
        this.leading = leading;
        this.automaticallyImplyLeading = automaticallyImplyLeading;
        this.automaticallyImplyTitle = automaticallyImplyTitle;
        this.previousPageTitle = previousPageTitle;
        this.middle = middle;
        this.trailing = trailing;
        this.border = border;
        this.backgroundColor = backgroundColor;
        this.padding = padding;
        this.actionsForegroundColor = actionsForegroundColor;
        this.transitionBetweenRoutes = transitionBetweenRoutes;
        this.heroTag = heroTag;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    largeTitle : lib6.Widget;

    leading : lib6.Widget;

    automaticallyImplyLeading : boolean;

    automaticallyImplyTitle : boolean;

    previousPageTitle : string;

    middle : lib6.Widget;

    trailing : lib6.Widget;

    backgroundColor : any;

    padding : lib17.EdgeInsetsDirectional;

    border : lib4.Border;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'Deprecated',value : {
            arguments : ['Use CupertinoTheme and primaryColor to propagate color'],namedArguments : {
            }}})
    actionsForegroundColor : any;

    transitionBetweenRoutes : boolean;

    heroTag : core.DartObject;

    get opaque() : boolean {
        return op(Op.EQUALS,this.backgroundColor.alpha,255);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _CupertinoSliverNavigationBarState {
        return _CupertinoSliverNavigationBarState();
    }
}

export namespace _CupertinoSliverNavigationBarState {
    export type Constructors = '_CupertinoSliverNavigationBarState';
    export type Interface = Omit<_CupertinoSliverNavigationBarState, Constructors>;
}
@DartClass
export class _CupertinoSliverNavigationBarState extends any {
    keys : _NavigationBarStaticComponentsKeys;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this.keys = _NavigationBarStaticComponentsKeys();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        let actionsForegroundColor : any = (widget.actionsForegroundColor || lib12.CupertinoTheme.of(context).primaryColor);
        let components : _NavigationBarStaticComponents = _NavigationBarStaticComponents({
            keys : this.keys,route : lib13.ModalRoute.of(context),userLeading : widget.leading,automaticallyImplyLeading : widget.automaticallyImplyLeading,automaticallyImplyTitle : widget.automaticallyImplyTitle,previousPageTitle : widget.previousPageTitle,userMiddle : widget.middle,userTrailing : widget.trailing,userLargeTitle : widget.largeTitle,padding : widget.padding,large : true});
        return _wrapActiveColor(widget.actionsForegroundColor,context,lib21.SliverPersistentHeader({
            pinned : true,delegate : _LargeTitleNavigationBarSliverDelegate({
                keys : this.keys,components : components,userMiddle : widget.middle,backgroundColor : (widget.backgroundColor || lib12.CupertinoTheme.of(context).barBackgroundColor),border : widget.border,padding : widget.padding,actionsForegroundColor : actionsForegroundColor,transitionBetweenRoutes : widget.transitionBetweenRoutes,heroTag : widget.heroTag,persistentHeight : properties._kNavBarPersistentHeight + lib20.MediaQuery.of(context).padding.top,alwaysShowMiddle : widget.middle != null})}));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoSliverNavigationBarState() {
    }
}

export namespace _LargeTitleNavigationBarSliverDelegate {
    export type Constructors = lib21.SliverPersistentHeaderDelegate.Constructors | '_LargeTitleNavigationBarSliverDelegate';
    export type Interface = Omit<_LargeTitleNavigationBarSliverDelegate, Constructors>;
}
@DartClass
@With(any)
export class _LargeTitleNavigationBarSliverDelegate extends lib21.SliverPersistentHeaderDelegate implements any.Interface {
    constructor(_namedArguments? : {keys? : _NavigationBarStaticComponentsKeys,components? : _NavigationBarStaticComponents,userMiddle? : lib6.Widget,backgroundColor? : any,border? : lib4.Border,padding? : lib17.EdgeInsetsDirectional,actionsForegroundColor? : any,transitionBetweenRoutes? : boolean,heroTag? : core.DartObject,persistentHeight? : double,alwaysShowMiddle? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _LargeTitleNavigationBarSliverDelegate(_namedArguments? : {keys? : _NavigationBarStaticComponentsKeys,components? : _NavigationBarStaticComponents,userMiddle? : lib6.Widget,backgroundColor? : any,border? : lib4.Border,padding? : lib17.EdgeInsetsDirectional,actionsForegroundColor? : any,transitionBetweenRoutes? : boolean,heroTag? : core.DartObject,persistentHeight? : double,alwaysShowMiddle? : boolean}) {
        let {keys,components,userMiddle,backgroundColor,border,padding,actionsForegroundColor,transitionBetweenRoutes,heroTag,persistentHeight,alwaysShowMiddle} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.keys = keys;
        this.components = components;
        this.userMiddle = userMiddle;
        this.backgroundColor = backgroundColor;
        this.border = border;
        this.padding = padding;
        this.actionsForegroundColor = actionsForegroundColor;
        this.transitionBetweenRoutes = transitionBetweenRoutes;
        this.heroTag = heroTag;
        this.persistentHeight = persistentHeight;
        this.alwaysShowMiddle = alwaysShowMiddle;
    }
     : any;

     : any;

     : any;

    keys : _NavigationBarStaticComponentsKeys;

    components : _NavigationBarStaticComponents;

    userMiddle : lib6.Widget;

    backgroundColor : any;

    border : lib4.Border;

    padding : lib17.EdgeInsetsDirectional;

    actionsForegroundColor : any;

    transitionBetweenRoutes : boolean;

    heroTag : core.DartObject;

    persistentHeight : double;

    alwaysShowMiddle : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get minExtent() : double {
        return this.persistentHeight;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get maxExtent() : double {
        return this.persistentHeight + properties._kNavBarLargeTitleHeightExtension;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext,shrinkOffset : double,overlapsContent : boolean) : lib6.Widget {
        let showLargeTitle : boolean = shrinkOffset < this.maxExtent - this.minExtent - properties._kNavBarShowLargeTitleThreshold;
        let persistentNavigationBar : _PersistentNavigationBar = _PersistentNavigationBar({
            components : this.components,padding : this.padding,middleVisible : this.alwaysShowMiddle ? null : !showLargeTitle});
        let navBar : lib6.Widget = _wrapWithBackground({
            border : this.border,backgroundColor : this.backgroundColor,child : lib18.DefaultTextStyle({
                style : lib12.CupertinoTheme.of(context).textTheme.textStyle,child : lib11.Stack({
                    fit : lib22.StackFit.expand,children : new core.DartList.literal<lib6.Widget>(lib11.Positioned({
                        top : this.persistentHeight,left : 0.0,right : 0.0,bottom : 0.0,child : lib11.ClipRect({
                            child : lib11.OverflowBox({
                                minHeight : 0.0,maxHeight : new core.DartDouble(double).infinity,alignment : lib23.AlignmentDirectional.bottomStart,child : lib11.Padding({
                                    padding : new lib17.EdgeInsetsDirectional.only({
                                        start : properties._kNavBarEdgePadding,bottom : 8.0}),child : lib26.SafeArea({
                                        top : false,bottom : false,child : lib25.AnimatedOpacity({
                                            opacity : showLargeTitle ? 1.0 : 0.0,duration : properties._kNavBarTitleFadeDuration,child : lib11.Semantics({
                                                header : true,child : lib18.DefaultTextStyle({
                                                    style : lib12.CupertinoTheme.of(context).textTheme.navLargeTitleTextStyle,maxLines : 1,overflow : lib24.TextOverflow.ellipsis,child : this.components.largeTitle})})})})})})})}),lib11.Positioned({
                        left : 0.0,right : 0.0,top : 0.0,child : persistentNavigationBar}))})})});
        if (!this.transitionBetweenRoutes || !_isTransitionable(context)) {
            return navBar;
        }
        return lib19.Hero({
            tag : op(Op.EQUALS,this.heroTag,properties._defaultHeroTag) ? _HeroTag(lib5.Navigator.of(context)) : this.heroTag,createRectTween : properties._linearTranslateWithLargestRectSizeTween,flightShuttleBuilder : properties._navBarHeroFlightShuttleBuilder,placeholderBuilder : properties._navBarHeroLaunchPadBuilder,transitionOnUserGestures : true,child : _TransitionableNavigationBar({
                componentsKeys : this.keys,backgroundColor : this.backgroundColor,backButtonTextStyle : lib12.CupertinoTheme.of(context).textTheme.navActionTextStyle,titleTextStyle : lib12.CupertinoTheme.of(context).textTheme.navTitleTextStyle,largeTitleTextStyle : lib12.CupertinoTheme.of(context).textTheme.navLargeTitleTextStyle,border : this.border,hasUserMiddle : this.userMiddle != null,largeExpanded : showLargeTitle,child : navBar})});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRebuild(oldDelegate : _LargeTitleNavigationBarSliverDelegate) : boolean {
        return this.components != oldDelegate.components || this.userMiddle != oldDelegate.userMiddle || this.backgroundColor != oldDelegate.backgroundColor || this.border != oldDelegate.border || this.padding != oldDelegate.padding || this.actionsForegroundColor != oldDelegate.actionsForegroundColor || this.transitionBetweenRoutes != oldDelegate.transitionBetweenRoutes || this.persistentHeight != oldDelegate.persistentHeight || this.alwaysShowMiddle != oldDelegate.alwaysShowMiddle || this.heroTag != oldDelegate.heroTag;
    }
}

export namespace _PersistentNavigationBar {
    export type Constructors = lib6.StatelessWidget.Constructors | '_PersistentNavigationBar';
    export type Interface = Omit<_PersistentNavigationBar, Constructors>;
}
@DartClass
export class _PersistentNavigationBar extends lib6.StatelessWidget {
    constructor(_namedArguments? : {key? : lib16.Key,components? : _NavigationBarStaticComponents,padding? : lib17.EdgeInsetsDirectional,middleVisible? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _PersistentNavigationBar(_namedArguments? : {key? : lib16.Key,components? : _NavigationBarStaticComponents,padding? : lib17.EdgeInsetsDirectional,middleVisible? : boolean}) {
        let {key,components,padding,middleVisible} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.components = components;
        this.padding = padding;
        this.middleVisible = middleVisible;
    }
    components : _NavigationBarStaticComponents;

    padding : lib17.EdgeInsetsDirectional;

    middleVisible : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        let middle : lib6.Widget = this.components.middle;
        if (middle != null) {
            middle = lib18.DefaultTextStyle({
                style : lib12.CupertinoTheme.of(context).textTheme.navTitleTextStyle,child : lib11.Semantics({
                    header : true,child : middle})});
            middle = this.middleVisible == null ? middle : lib25.AnimatedOpacity({
                opacity : this.middleVisible ? 1.0 : 0.0,duration : properties._kNavBarTitleFadeDuration,child : middle});
        }
        let leading : lib6.Widget = this.components.leading;
        let backChevron : lib6.Widget = this.components.backChevron;
        let backLabel : lib6.Widget = this.components.backLabel;
        if (op(Op.EQUALS,leading,null) && backChevron != null && backLabel != null) {
            leading = CupertinoNavigationBarBackButton._assemble(backChevron,backLabel);
        }
        let paddedToolbar : lib6.Widget = lib27.NavigationToolbar({
            leading : leading,middle : middle,trailing : this.components.trailing,centerMiddle : true,middleSpacing : 6.0});
        if (this.padding != null) {
            paddedToolbar = lib11.Padding({
                padding : lib17.EdgeInsets.only({
                    top : this.padding.top,bottom : this.padding.bottom}),child : paddedToolbar});
        }
        return lib11.SizedBox({
            height : properties._kNavBarPersistentHeight + lib20.MediaQuery.of(context).padding.top,child : lib26.SafeArea({
                bottom : false,child : paddedToolbar})});
    }
}

export namespace _NavigationBarStaticComponentsKeys {
    export type Constructors = '_NavigationBarStaticComponentsKeys';
    export type Interface = Omit<_NavigationBarStaticComponentsKeys, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class _NavigationBarStaticComponentsKeys {
    constructor() {
    }
    @defaultConstructor
    _NavigationBarStaticComponentsKeys() {
        this.navBarBoxKey = lib6.GlobalKey({
            debugLabel : 'Navigation bar render box'});
        this.leadingKey = lib6.GlobalKey({
            debugLabel : 'Leading'});
        this.backChevronKey = lib6.GlobalKey({
            debugLabel : 'Back chevron'});
        this.backLabelKey = lib6.GlobalKey({
            debugLabel : 'Back label'});
        this.middleKey = lib6.GlobalKey({
            debugLabel : 'Middle'});
        this.trailingKey = lib6.GlobalKey({
            debugLabel : 'Trailing'});
        this.largeTitleKey = lib6.GlobalKey({
            debugLabel : 'Large title'});
    }
    navBarBoxKey : lib6.GlobalKey<any>;

    leadingKey : lib6.GlobalKey<any>;

    backChevronKey : lib6.GlobalKey<any>;

    backLabelKey : lib6.GlobalKey<any>;

    middleKey : lib6.GlobalKey<any>;

    trailingKey : lib6.GlobalKey<any>;

    largeTitleKey : lib6.GlobalKey<any>;

}

export namespace _NavigationBarStaticComponents {
    export type Constructors = '_NavigationBarStaticComponents';
    export type Interface = Omit<_NavigationBarStaticComponents, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class _NavigationBarStaticComponents {
    constructor(_namedArguments? : {keys? : _NavigationBarStaticComponentsKeys,route? : lib13.ModalRoute<any>,userLeading? : lib6.Widget,automaticallyImplyLeading? : boolean,automaticallyImplyTitle? : boolean,previousPageTitle? : string,userMiddle? : lib6.Widget,userTrailing? : lib6.Widget,userLargeTitle? : lib6.Widget,padding? : lib17.EdgeInsetsDirectional,large? : boolean}) {
    }
    @defaultConstructor
    _NavigationBarStaticComponents(_namedArguments? : {keys? : _NavigationBarStaticComponentsKeys,route? : lib13.ModalRoute<any>,userLeading? : lib6.Widget,automaticallyImplyLeading? : boolean,automaticallyImplyTitle? : boolean,previousPageTitle? : string,userMiddle? : lib6.Widget,userTrailing? : lib6.Widget,userLargeTitle? : lib6.Widget,padding? : lib17.EdgeInsetsDirectional,large? : boolean}) {
        let {keys,route,userLeading,automaticallyImplyLeading,automaticallyImplyTitle,previousPageTitle,userMiddle,userTrailing,userLargeTitle,padding,large} = Object.assign({
        }, _namedArguments );
        this.leading = _NavigationBarStaticComponents.createLeading({
            leadingKey : keys.leadingKey,userLeading : userLeading,route : route,automaticallyImplyLeading : automaticallyImplyLeading,padding : padding});
        this.backChevron = _NavigationBarStaticComponents.createBackChevron({
            backChevronKey : keys.backChevronKey,userLeading : userLeading,route : route,automaticallyImplyLeading : automaticallyImplyLeading});
        this.backLabel = _NavigationBarStaticComponents.createBackLabel({
            backLabelKey : keys.backLabelKey,userLeading : userLeading,route : route,previousPageTitle : previousPageTitle,automaticallyImplyLeading : automaticallyImplyLeading});
        this.middle = _NavigationBarStaticComponents.createMiddle({
            middleKey : keys.middleKey,userMiddle : userMiddle,userLargeTitle : userLargeTitle,route : route,automaticallyImplyTitle : automaticallyImplyTitle,large : large});
        this.trailing = _NavigationBarStaticComponents.createTrailing({
            trailingKey : keys.trailingKey,userTrailing : userTrailing,padding : padding});
        this.largeTitle = _NavigationBarStaticComponents.createLargeTitle({
            largeTitleKey : keys.largeTitleKey,userLargeTitle : userLargeTitle,route : route,automaticImplyTitle : automaticallyImplyTitle,large : large});
    }
    static _derivedTitle(_namedArguments? : {automaticallyImplyTitle? : boolean,currentRoute? : lib13.ModalRoute<any>}) : lib6.Widget {
        let {automaticallyImplyTitle,currentRoute} = Object.assign({
        }, _namedArguments );
        if (automaticallyImplyTitle && is(currentRoute, lib28.CupertinoPageRoute<any>) && currentRoute.title != null) {
            return lib18.Text(currentRoute.title);
        }
        return null;
    }
    leading : lib11.KeyedSubtree;

    static createLeading(_namedArguments? : {leadingKey? : lib6.GlobalKey<any>,userLeading? : lib6.Widget,route? : lib13.ModalRoute<any>,automaticallyImplyLeading? : boolean,padding? : lib17.EdgeInsetsDirectional}) : lib11.KeyedSubtree {
        let {leadingKey,userLeading,route,automaticallyImplyLeading,padding} = Object.assign({
        }, _namedArguments );
        let leadingContent : lib6.Widget;
        if (userLeading != null) {
            leadingContent = userLeading;
        }else if (automaticallyImplyLeading && is(route, lib14.PageRoute<any>) && route.canPop && route.fullscreenDialog) {
            leadingContent = lib29.CupertinoButton({
                child : new lib18.Text('Close'),padding : lib17.EdgeInsets.zero,onPressed : () =>  {
                    route.navigator.maybePop();
                }});
        }
        if (op(Op.EQUALS,leadingContent,null)) {
            return null;
        }
        return lib11.KeyedSubtree({
            key : leadingKey,child : lib11.Padding({
                padding : lib17.EdgeInsetsDirectional.only({
                    start : (((t)=>(!!t)?t.start:null)(padding) || properties._kNavBarEdgePadding)}),child : lib31.IconTheme.merge({
                    data : new lib30.IconThemeData({
                        size : 32.0}),child : leadingContent})})});
    }
    backChevron : lib11.KeyedSubtree;

    static createBackChevron(_namedArguments? : {backChevronKey? : lib6.GlobalKey<any>,userLeading? : lib6.Widget,route? : lib13.ModalRoute<any>,automaticallyImplyLeading? : boolean}) : lib11.KeyedSubtree {
        let {backChevronKey,userLeading,route,automaticallyImplyLeading} = Object.assign({
        }, _namedArguments );
        if (userLeading != null || !automaticallyImplyLeading || op(Op.EQUALS,route,null) || !route.canPop || (is(route, lib14.PageRoute<any>) && route.fullscreenDialog)) {
            return null;
        }
        return lib11.KeyedSubtree({
            key : backChevronKey,child : new _BackChevron()});
    }
    backLabel : lib11.KeyedSubtree;

    static createBackLabel(_namedArguments? : {backLabelKey? : lib6.GlobalKey<any>,userLeading? : lib6.Widget,route? : lib13.ModalRoute<any>,automaticallyImplyLeading? : boolean,previousPageTitle? : string}) : lib11.KeyedSubtree {
        let {backLabelKey,userLeading,route,automaticallyImplyLeading,previousPageTitle} = Object.assign({
        }, _namedArguments );
        if (userLeading != null || !automaticallyImplyLeading || op(Op.EQUALS,route,null) || !route.canPop || (is(route, lib14.PageRoute<any>) && route.fullscreenDialog)) {
            return null;
        }
        return lib11.KeyedSubtree({
            key : backLabelKey,child : _BackLabel({
                specifiedPreviousTitle : previousPageTitle,route : route})});
    }
    middle : lib11.KeyedSubtree;

    static createMiddle(_namedArguments? : {middleKey? : lib6.GlobalKey<any>,userMiddle? : lib6.Widget,userLargeTitle? : lib6.Widget,large? : boolean,automaticallyImplyTitle? : boolean,route? : lib13.ModalRoute<any>}) : lib11.KeyedSubtree {
        let {middleKey,userMiddle,userLargeTitle,large,automaticallyImplyTitle,route} = Object.assign({
        }, _namedArguments );
        let middleContent : lib6.Widget = userMiddle;
        if (large) {
            middleContent = ( middleContent ) || ( userLargeTitle );
        }
        middleContent = ( middleContent ) || ( _NavigationBarStaticComponents._derivedTitle({
            automaticallyImplyTitle : automaticallyImplyTitle,currentRoute : route}) );
        if (op(Op.EQUALS,middleContent,null)) {
            return null;
        }
        return lib11.KeyedSubtree({
            key : middleKey,child : middleContent});
    }
    trailing : lib11.KeyedSubtree;

    static createTrailing(_namedArguments? : {trailingKey? : lib6.GlobalKey<any>,userTrailing? : lib6.Widget,padding? : lib17.EdgeInsetsDirectional}) : lib11.KeyedSubtree {
        let {trailingKey,userTrailing,padding} = Object.assign({
        }, _namedArguments );
        if (op(Op.EQUALS,userTrailing,null)) {
            return null;
        }
        return lib11.KeyedSubtree({
            key : trailingKey,child : lib11.Padding({
                padding : lib17.EdgeInsetsDirectional.only({
                    end : (((t)=>(!!t)?t.end:null)(padding) || properties._kNavBarEdgePadding)}),child : lib31.IconTheme.merge({
                    data : new lib30.IconThemeData({
                        size : 32.0}),child : userTrailing})})});
    }
    largeTitle : lib11.KeyedSubtree;

    static createLargeTitle(_namedArguments? : {largeTitleKey? : lib6.GlobalKey<any>,userLargeTitle? : lib6.Widget,large? : boolean,automaticImplyTitle? : boolean,route? : lib13.ModalRoute<any>}) : lib11.KeyedSubtree {
        let {largeTitleKey,userLargeTitle,large,automaticImplyTitle,route} = Object.assign({
        }, _namedArguments );
        if (!large) {
            return null;
        }
        let largeTitleContent : lib6.Widget = (userLargeTitle || _NavigationBarStaticComponents._derivedTitle({
            automaticallyImplyTitle : automaticImplyTitle,currentRoute : route}));
        /* TODO (AssertStatementImpl) : assert (largeTitleContent != null, 'largeTitle was not provided and there was no title from the route.'); */;
        ;
        return lib11.KeyedSubtree({
            key : largeTitleKey,child : largeTitleContent});
    }
}

export namespace CupertinoNavigationBarBackButton {
    export type Constructors = lib6.StatelessWidget.Constructors | 'CupertinoNavigationBarBackButton' | '_assemble';
    export type Interface = Omit<CupertinoNavigationBarBackButton, Constructors>;
}
@DartClass
export class CupertinoNavigationBarBackButton extends lib6.StatelessWidget {
    constructor(_namedArguments? : {color? : any,previousPageTitle? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoNavigationBarBackButton(_namedArguments? : {color? : any,previousPageTitle? : string}) {
        let {color,previousPageTitle} = Object.assign({
        }, _namedArguments );
        this._backChevron = null;
        this._backLabel = null;
        this.color = color;
        this.previousPageTitle = previousPageTitle;
    }
    @namedConstructor
    _assemble(_backChevron : lib6.Widget,_backLabel : lib6.Widget) {
        this.previousPageTitle = null;
        this.color = null;
        this._backChevron = _backChevron;
        this._backLabel = _backLabel;
    }
    static _assemble : new(_backChevron : lib6.Widget,_backLabel : lib6.Widget) => CupertinoNavigationBarBackButton;

    color : any;

    previousPageTitle : string;

    _backChevron : lib6.Widget;

    _backLabel : lib6.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        let currentRoute : lib13.ModalRoute<any> = lib13.ModalRoute.of(context);
        /* TODO (AssertStatementImpl) : assert (currentRoute.canPop, 'CupertinoNavigationBarBackButton should only be used in routes that can be popped'); */;
        ;
        let actionTextStyle : lib32.TextStyle = lib12.CupertinoTheme.of(context).textTheme.navActionTextStyle;
        if (this.color != null) {
            actionTextStyle = actionTextStyle.copyWith({
                color : this.color});
        }
        return lib29.CupertinoButton({
            child : lib11.Semantics({
                container : true,excludeSemantics : true,label : 'Back',button : true,child : lib18.DefaultTextStyle({
                    style : actionTextStyle,child : lib11.ConstrainedBox({
                        constraints : new lib33.BoxConstraints({
                            minWidth : properties._kNavBarBackButtonTapWidth}),child : lib11.Row({
                            mainAxisSize : lib34.MainAxisSize.min,mainAxisAlignment : lib34.MainAxisAlignment.start,children : new core.DartList.literal<lib6.Widget>(new lib11.Padding({
                                padding : lib17.EdgeInsetsDirectional.only({
                                    start : 8.0})}),(this._backChevron || new _BackChevron()),new lib11.Padding({
                                padding : lib17.EdgeInsetsDirectional.only({
                                    start : 6.0})}),lib11.Flexible({
                                child : (this._backLabel || _BackLabel({
                                    specifiedPreviousTitle : this.previousPageTitle,route : currentRoute}))}))})})})}),padding : lib17.EdgeInsets.zero,onPressed : () =>  {
                lib5.Navigator.maybePop(context);
            }});
    }
}

export namespace _BackChevron {
    export type Constructors = lib6.StatelessWidget.Constructors | '_BackChevron';
    export type Interface = Omit<_BackChevron, Constructors>;
}
@DartClass
export class _BackChevron extends lib6.StatelessWidget {
    constructor(_namedArguments? : {key? : lib16.Key}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _BackChevron(_namedArguments? : {key? : lib16.Key}) {
        let {key} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        let textDirection : any = lib11.Directionality.of(context);
        let textStyle : lib32.TextStyle = lib18.DefaultTextStyle.of(context).style;
        let iconWidget : lib6.Widget = lib18.Text.rich(lib36.TextSpan({
            text : new core.DartString(string).fromCharCode(lib35.CupertinoIcons.back.codePoint),style : lib32.TextStyle({
                inherit : false,color : textStyle.color,fontSize : 34.0,fontFamily : lib35.CupertinoIcons.back.fontFamily,package : lib35.CupertinoIcons.back.fontPackage})}));
        switch (textDirection) {
            case TextDirection.rtl:
                iconWidget = lib11.Transform({
                    transform : ((_) : any =>  {
                        {
                            scale(-1.0,1.0,1.0);
                            return _;
                        }
                    })(lib37.Matrix4.identity()),alignment : lib23.Alignment.center,transformHitTests : false,child : iconWidget});
                break;
            case TextDirection.ltr:
                break;
        }
        return iconWidget;
    }
}

export namespace _BackLabel {
    export type Constructors = lib6.StatelessWidget.Constructors | '_BackLabel';
    export type Interface = Omit<_BackLabel, Constructors>;
}
@DartClass
export class _BackLabel extends lib6.StatelessWidget {
    constructor(_namedArguments? : {key? : lib16.Key,specifiedPreviousTitle? : string,route? : lib13.ModalRoute<any>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _BackLabel(_namedArguments? : {key? : lib16.Key,specifiedPreviousTitle? : string,route? : lib13.ModalRoute<any>}) {
        let {key,specifiedPreviousTitle,route} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.specifiedPreviousTitle = specifiedPreviousTitle;
        this.route = route;
    }
     : any;

     : any;

     : any;

    specifiedPreviousTitle : string;

    route : lib13.ModalRoute<any>;

    _buildPreviousTitleWidget(context : lib6.BuildContext,previousTitle : string,child : lib6.Widget) : lib6.Widget {
        if (previousTitle == null) {
            return new lib11.SizedBox({
                height : 0.0,width : 0.0});
        }
        let textWidget : lib18.Text = lib18.Text(previousTitle,{
            maxLines : 1,overflow : lib24.TextOverflow.ellipsis});
        if (new core.DartString(previousTitle).length > 12) {
            textWidget = new lib18.Text('Back');
        }
        return lib11.Align({
            alignment : lib23.AlignmentDirectional.centerStart,widthFactor : 1.0,child : textWidget});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        if (this.specifiedPreviousTitle != null) {
            return this._buildPreviousTitleWidget(context,this.specifiedPreviousTitle,null);
        }else if (is(this.route, lib28.CupertinoPageRoute<any>)) {
            let cupertinoRoute : lib28.CupertinoPageRoute<any> = this.route;
            return lib38.ValueListenableBuilder({
                valueListenable : cupertinoRoute.previousTitle,builder : this._buildPreviousTitleWidget.bind(this)});
        }else {
            return new lib11.SizedBox({
                height : 0.0,width : 0.0});
        }
    }
}

export namespace _TransitionableNavigationBar {
    export type Constructors = lib6.StatelessWidget.Constructors | '_TransitionableNavigationBar';
    export type Interface = Omit<_TransitionableNavigationBar, Constructors>;
}
@DartClass
export class _TransitionableNavigationBar extends lib6.StatelessWidget {
    constructor(_namedArguments? : {componentsKeys? : _NavigationBarStaticComponentsKeys,backgroundColor? : any,backButtonTextStyle? : lib32.TextStyle,titleTextStyle? : lib32.TextStyle,largeTitleTextStyle? : lib32.TextStyle,border? : lib4.Border,hasUserMiddle? : boolean,largeExpanded? : boolean,child? : lib6.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TransitionableNavigationBar(_namedArguments? : {componentsKeys? : _NavigationBarStaticComponentsKeys,backgroundColor? : any,backButtonTextStyle? : lib32.TextStyle,titleTextStyle? : lib32.TextStyle,largeTitleTextStyle? : lib32.TextStyle,border? : lib4.Border,hasUserMiddle? : boolean,largeExpanded? : boolean,child? : lib6.Widget}) {
        let {componentsKeys,backgroundColor,backButtonTextStyle,titleTextStyle,largeTitleTextStyle,border,hasUserMiddle,largeExpanded,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.componentsKeys = componentsKeys;
        this.backgroundColor = backgroundColor;
        this.backButtonTextStyle = backButtonTextStyle;
        this.titleTextStyle = titleTextStyle;
        this.largeTitleTextStyle = largeTitleTextStyle;
        this.border = border;
        this.hasUserMiddle = hasUserMiddle;
        this.largeExpanded = largeExpanded;
        this.child = child;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    componentsKeys : _NavigationBarStaticComponentsKeys;

    backgroundColor : any;

    backButtonTextStyle : lib32.TextStyle;

    titleTextStyle : lib32.TextStyle;

    largeTitleTextStyle : lib32.TextStyle;

    border : lib4.Border;

    hasUserMiddle : boolean;

    largeExpanded : boolean;

    child : lib6.Widget;

    get renderBox() : any {
        let box : any = this.componentsKeys.navBarBoxKey.currentContext.findRenderObject();
        /* TODO (AssertStatementImpl) : assert (box.attached, '_TransitionableNavigationBar.renderBox should be called when building ' 'hero flight shuttles when the from and the to nav bar boxes are already ' 'laid out and painted.'); */;
        ;
        return box;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        /* TODO (AssertStatementImpl) : assert (() {bool inHero; context.visitAncestorElements((Element ancestor) {if (ancestor is ComponentElement) {assert (ancestor.widget.runtimeType != _NavigationBarTransition, '_TransitionableNavigationBar should never re-appear inside ' '_NavigationBarTransition. Keyed _TransitionableNavigationBar should ' 'only serve as anchor points in routes rather than appearing inside ' 'Hero flights themselves.'); ; if (ancestor.widget.runtimeType == Hero) {inHero = true;}} inHero ??= false; return true;}); assert (inHero == true, '_TransitionableNavigationBar should only be added as the immediate ' 'child of Hero widgets.'); ; return true;}()); */;
        return this.child;
    }
}

export namespace _NavigationBarTransition {
    export type Constructors = lib6.StatelessWidget.Constructors | '_NavigationBarTransition';
    export type Interface = Omit<_NavigationBarTransition, Constructors>;
}
@DartClass
export class _NavigationBarTransition extends lib6.StatelessWidget {
    constructor(_namedArguments? : {animation? : lib39.Animation<double>,topNavBar? : _TransitionableNavigationBar,bottomNavBar? : _TransitionableNavigationBar}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _NavigationBarTransition(_namedArguments? : {animation? : lib39.Animation<double>,topNavBar? : _TransitionableNavigationBar,bottomNavBar? : _TransitionableNavigationBar}) {
        let {animation,topNavBar,bottomNavBar} = Object.assign({
        }, _namedArguments );
        this.heightTween = lib40.Tween({
            begin : bottomNavBar.renderBox.size.height,end : topNavBar.renderBox.size.height});
        this.backgroundTween = lib40.ColorTween({
            begin : bottomNavBar.backgroundColor,end : topNavBar.backgroundColor});
        this.borderTween = lib25.BorderTween({
            begin : bottomNavBar.border,end : topNavBar.border});
        this.animation = animation;
        this.topNavBar = topNavBar;
        this.bottomNavBar = bottomNavBar;
    }
    animation : lib39.Animation<double>;

    topNavBar : _TransitionableNavigationBar;

    bottomNavBar : _TransitionableNavigationBar;

    heightTween : lib40.Tween<double>;

    backgroundTween : lib40.ColorTween;

    borderTween : lib25.BorderTween;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        let componentsTransition : _NavigationBarComponentsTransition = _NavigationBarComponentsTransition({
            animation : this.animation,bottomNavBar : this.bottomNavBar,topNavBar : this.topNavBar,directionality : lib11.Directionality.of(context)});
        let children : core.DartList<lib6.Widget> = new core.DartList.literal<lib6.Widget>(lib41.AnimatedBuilder({
            animation : this.animation,builder : (context : lib6.BuildContext,child : lib6.Widget) =>  {
                return _wrapWithBackground({
                    updateSystemUiOverlay : false,backgroundColor : this.backgroundTween.evaluate(this.animation),border : this.borderTween.evaluate(this.animation),child : lib11.SizedBox({
                        height : this.heightTween.evaluate(this.animation),width : new core.DartDouble(double).infinity})});
            }}),componentsTransition.bottomBackChevron,componentsTransition.bottomBackLabel,componentsTransition.bottomLeading,componentsTransition.bottomMiddle,componentsTransition.bottomLargeTitle,componentsTransition.bottomTrailing,componentsTransition.topLeading,componentsTransition.topBackChevron,componentsTransition.topBackLabel,componentsTransition.topMiddle,componentsTransition.topLargeTitle,componentsTransition.topTrailing);
        children.removeWhere((child : lib6.Widget) =>  {
            return op(Op.EQUALS,child,null);
        });
        return lib11.SizedBox({
            height : op(Op.PLUS,math.max(this.heightTween.begin,this.heightTween.end),lib20.MediaQuery.of(context).padding.top),width : new core.DartDouble(double).infinity,child : lib11.Stack({
                children : children})});
    }
}

export namespace _NavigationBarComponentsTransition {
    export type Constructors = '_NavigationBarComponentsTransition';
    export type Interface = Omit<_NavigationBarComponentsTransition, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class _NavigationBarComponentsTransition {
    constructor(_namedArguments? : {animation? : lib39.Animation<double>,bottomNavBar? : _TransitionableNavigationBar,topNavBar? : _TransitionableNavigationBar,directionality? : any}) {
    }
    @defaultConstructor
    _NavigationBarComponentsTransition(_namedArguments? : {animation? : lib39.Animation<double>,bottomNavBar? : _TransitionableNavigationBar,topNavBar? : _TransitionableNavigationBar,directionality? : any}) {
        let {animation,bottomNavBar,topNavBar,directionality} = Object.assign({
        }, _namedArguments );
        this.bottomComponents = bottomNavBar.componentsKeys;
        this.topComponents = topNavBar.componentsKeys;
        this.bottomNavBarBox = bottomNavBar.renderBox;
        this.topNavBarBox = topNavBar.renderBox;
        this.bottomBackButtonTextStyle = bottomNavBar.backButtonTextStyle;
        this.topBackButtonTextStyle = topNavBar.backButtonTextStyle;
        this.bottomTitleTextStyle = bottomNavBar.titleTextStyle;
        this.topTitleTextStyle = topNavBar.titleTextStyle;
        this.bottomLargeTitleTextStyle = bottomNavBar.largeTitleTextStyle;
        this.topLargeTitleTextStyle = topNavBar.largeTitleTextStyle;
        this.bottomHasUserMiddle = bottomNavBar.hasUserMiddle;
        this.topHasUserMiddle = topNavBar.hasUserMiddle;
        this.bottomLargeExpanded = bottomNavBar.largeExpanded;
        this.topLargeExpanded = topNavBar.largeExpanded;
        this.transitionBox = bottomNavBar.renderBox.paintBounds.expandToInclude(topNavBar.renderBox.paintBounds);
        this.forwardDirection = op(Op.EQUALS,directionality,TextDirection.ltr) ? 1.0 : -1.0;
        this.animation = animation;
    }
    private static __$fadeOut : lib40.Animatable<double>;
    static get fadeOut() : lib40.Animatable<double> { 
        if (this.__$fadeOut===undefined) {
            this.__$fadeOut = lib40.Tween({
                begin : 1.0,end : 0.0});
        }
        return this.__$fadeOut;
    }
    static set fadeOut(__$value : lib40.Animatable<double>)  { 
        this.__$fadeOut = __$value;
    }

    private static __$fadeIn : lib40.Animatable<double>;
    static get fadeIn() : lib40.Animatable<double> { 
        if (this.__$fadeIn===undefined) {
            this.__$fadeIn = lib40.Tween({
                begin : 0.0,end : 1.0});
        }
        return this.__$fadeIn;
    }
    static set fadeIn(__$value : lib40.Animatable<double>)  { 
        this.__$fadeIn = __$value;
    }

    animation : lib39.Animation<double>;

    bottomComponents : _NavigationBarStaticComponentsKeys;

    topComponents : _NavigationBarStaticComponentsKeys;

    bottomNavBarBox : any;

    topNavBarBox : any;

    bottomBackButtonTextStyle : lib32.TextStyle;

    topBackButtonTextStyle : lib32.TextStyle;

    bottomTitleTextStyle : lib32.TextStyle;

    topTitleTextStyle : lib32.TextStyle;

    bottomLargeTitleTextStyle : lib32.TextStyle;

    topLargeTitleTextStyle : lib32.TextStyle;

    bottomHasUserMiddle : boolean;

    topHasUserMiddle : boolean;

    bottomLargeExpanded : boolean;

    topLargeExpanded : boolean;

    transitionBox : any;

    forwardDirection : double;

    positionInTransitionBox(key : lib6.GlobalKey<any>,_namedArguments? : {from? : any}) : lib22.RelativeRect {
        let {from} = Object.assign({
        }, _namedArguments );
        let componentBox : any = key.currentContext.findRenderObject();
        /* TODO (AssertStatementImpl) : assert (componentBox.attached); */;
        return lib22.RelativeRect.fromRect(op(Op.BITAND,componentBox.localToGlobal(Offset.zero,{
            ancestor : from}),componentBox.size),this.transitionBox);
    }
    slideFromLeadingEdge(_namedArguments? : {fromKey? : lib6.GlobalKey<any>,fromNavBarBox? : any,toKey? : lib6.GlobalKey<any>,toNavBarBox? : any}) : lib41.RelativeRectTween {
        let {fromKey,fromNavBarBox,toKey,toNavBarBox} = Object.assign({
        }, _namedArguments );
        let fromRect : lib22.RelativeRect = this.positionInTransitionBox(fromKey,{
            from : fromNavBarBox});
        let fromBox : any = fromKey.currentContext.findRenderObject();
        let toBox : any = toKey.currentContext.findRenderObject();
        let toRect : any = op(Op.BITAND,toBox.localToGlobal(Offset.zero,{
            ancestor : toNavBarBox}).translate(0.0,op(Op.PLUS,op(Op.DIVIDE,op(Op.NEG,fromBox.size.height),2),op(Op.DIVIDE,toBox.size.height,2))),fromBox.size);
        if (this.forwardDirection < 0) {
            toRect = toRect.translate(op(Op.PLUS,op(Op.NEG,fromBox.size.width),toBox.size.width),0.0);
        }
        return lib41.RelativeRectTween({
            begin : fromRect,end : lib22.RelativeRect.fromRect(toRect,this.transitionBox)});
    }
    fadeInFrom(t : double,_namedArguments? : {curve? : lib43.Curve}) : lib39.Animation<double> {
        let {curve} = Object.assign({
            "curve" : lib43.Curves.easeIn}, _namedArguments );
        return this.animation.drive(_NavigationBarComponentsTransition.fadeIn.chain(lib40.CurveTween({
            curve : lib43.Interval(t,1.0,{
                curve : curve})})));
    }
    fadeOutBy(t : double,_namedArguments? : {curve? : lib43.Curve}) : lib39.Animation<double> {
        let {curve} = Object.assign({
            "curve" : lib43.Curves.easeOut}, _namedArguments );
        return this.animation.drive(_NavigationBarComponentsTransition.fadeOut.chain(lib40.CurveTween({
            curve : lib43.Interval(0.0,t,{
                curve : curve})})));
    }
    get bottomLeading() : lib6.Widget {
        let bottomLeading : lib11.KeyedSubtree = this.bottomComponents.leadingKey.currentWidget;
        if (op(Op.EQUALS,bottomLeading,null)) {
            return null;
        }
        return lib11.Positioned.fromRelativeRect({
            rect : this.positionInTransitionBox(this.bottomComponents.leadingKey,{
                from : this.bottomNavBarBox}),child : lib41.FadeTransition({
                opacity : this.fadeOutBy(0.4),child : bottomLeading.child})});
    }
    get bottomBackChevron() : lib6.Widget {
        let bottomBackChevron : lib11.KeyedSubtree = this.bottomComponents.backChevronKey.currentWidget;
        if (op(Op.EQUALS,bottomBackChevron,null)) {
            return null;
        }
        return lib11.Positioned.fromRelativeRect({
            rect : this.positionInTransitionBox(this.bottomComponents.backChevronKey,{
                from : this.bottomNavBarBox}),child : lib41.FadeTransition({
                opacity : this.fadeOutBy(0.6),child : lib18.DefaultTextStyle({
                    style : this.bottomBackButtonTextStyle,child : bottomBackChevron.child})})});
    }
    get bottomBackLabel() : lib6.Widget {
        let bottomBackLabel : lib11.KeyedSubtree = this.bottomComponents.backLabelKey.currentWidget;
        if (op(Op.EQUALS,bottomBackLabel,null)) {
            return null;
        }
        let from : lib22.RelativeRect = this.positionInTransitionBox(this.bottomComponents.backLabelKey,{
            from : this.bottomNavBarBox});
        let positionTween : lib41.RelativeRectTween = lib41.RelativeRectTween({
            begin : from,end : from.shift(Offset(this.forwardDirection * (op(Op.DIVIDE,op(Op.NEG,this.bottomNavBarBox.size.width),2.0)),0.0))});
        return lib41.PositionedTransition({
            rect : this.animation.drive(positionTween),child : lib41.FadeTransition({
                opacity : this.fadeOutBy(0.2),child : lib18.DefaultTextStyle({
                    style : this.bottomBackButtonTextStyle,child : bottomBackLabel.child})})});
    }
    get bottomMiddle() : lib6.Widget {
        let bottomMiddle : lib11.KeyedSubtree = this.bottomComponents.middleKey.currentWidget;
        let topBackLabel : lib11.KeyedSubtree = this.topComponents.backLabelKey.currentWidget;
        let topLeading : lib11.KeyedSubtree = this.topComponents.leadingKey.currentWidget;
        if (!this.bottomHasUserMiddle && this.bottomLargeExpanded) {
            return null;
        }
        if (bottomMiddle != null && topBackLabel != null) {
            return lib41.PositionedTransition({
                rect : this.animation.drive(this.slideFromLeadingEdge({
                    fromKey : this.bottomComponents.middleKey,fromNavBarBox : this.bottomNavBarBox,toKey : this.topComponents.backLabelKey,toNavBarBox : this.topNavBarBox})),child : lib41.FadeTransition({
                    opacity : this.fadeOutBy(this.bottomHasUserMiddle ? 0.4 : 0.7),child : lib11.Align({
                        alignment : lib23.AlignmentDirectional.centerStart,child : lib41.DefaultTextStyleTransition({
                            style : this.animation.drive(lib25.TextStyleTween({
                                begin : this.bottomTitleTextStyle,end : this.topBackButtonTextStyle})),child : bottomMiddle.child})})})});
        }
        if (bottomMiddle != null && topLeading != null) {
            return lib11.Positioned.fromRelativeRect({
                rect : this.positionInTransitionBox(this.bottomComponents.middleKey,{
                    from : this.bottomNavBarBox}),child : lib41.FadeTransition({
                    opacity : this.fadeOutBy(this.bottomHasUserMiddle ? 0.4 : 0.7),child : lib18.DefaultTextStyle({
                        style : this.bottomTitleTextStyle,child : bottomMiddle.child})})});
        }
        return null;
    }
    get bottomLargeTitle() : lib6.Widget {
        let bottomLargeTitle : lib11.KeyedSubtree = this.bottomComponents.largeTitleKey.currentWidget;
        let topBackLabel : lib11.KeyedSubtree = this.topComponents.backLabelKey.currentWidget;
        let topLeading : lib11.KeyedSubtree = this.topComponents.leadingKey.currentWidget;
        if (op(Op.EQUALS,bottomLargeTitle,null) || !this.bottomLargeExpanded) {
            return null;
        }
        if (bottomLargeTitle != null && topBackLabel != null) {
            return lib41.PositionedTransition({
                rect : this.animation.drive(this.slideFromLeadingEdge({
                    fromKey : this.bottomComponents.largeTitleKey,fromNavBarBox : this.bottomNavBarBox,toKey : this.topComponents.backLabelKey,toNavBarBox : this.topNavBarBox})),child : lib41.FadeTransition({
                    opacity : this.fadeOutBy(0.6),child : lib11.Align({
                        alignment : lib23.AlignmentDirectional.centerStart,child : lib41.DefaultTextStyleTransition({
                            style : this.animation.drive(lib25.TextStyleTween({
                                begin : this.bottomLargeTitleTextStyle,end : this.topBackButtonTextStyle})),maxLines : 1,overflow : lib24.TextOverflow.ellipsis,child : bottomLargeTitle.child})})})});
        }
        if (bottomLargeTitle != null && topLeading != null) {
            let from : lib22.RelativeRect = this.positionInTransitionBox(this.bottomComponents.largeTitleKey,{
                from : this.bottomNavBarBox});
            let positionTween : lib41.RelativeRectTween = lib41.RelativeRectTween({
                begin : from,end : from.shift(Offset(this.forwardDirection * this.bottomNavBarBox.size.width / 4.0,0.0))});
            return lib41.PositionedTransition({
                rect : this.animation.drive(positionTween),child : lib41.FadeTransition({
                    opacity : this.fadeOutBy(0.4),child : lib18.DefaultTextStyle({
                        style : this.bottomLargeTitleTextStyle,child : bottomLargeTitle.child})})});
        }
        return null;
    }
    get bottomTrailing() : lib6.Widget {
        let bottomTrailing : lib11.KeyedSubtree = this.bottomComponents.trailingKey.currentWidget;
        if (op(Op.EQUALS,bottomTrailing,null)) {
            return null;
        }
        return lib11.Positioned.fromRelativeRect({
            rect : this.positionInTransitionBox(this.bottomComponents.trailingKey,{
                from : this.bottomNavBarBox}),child : lib41.FadeTransition({
                opacity : this.fadeOutBy(0.6),child : bottomTrailing.child})});
    }
    get topLeading() : lib6.Widget {
        let topLeading : lib11.KeyedSubtree = this.topComponents.leadingKey.currentWidget;
        if (op(Op.EQUALS,topLeading,null)) {
            return null;
        }
        return lib11.Positioned.fromRelativeRect({
            rect : this.positionInTransitionBox(this.topComponents.leadingKey,{
                from : this.topNavBarBox}),child : lib41.FadeTransition({
                opacity : this.fadeInFrom(0.6),child : topLeading.child})});
    }
    get topBackChevron() : lib6.Widget {
        let topBackChevron : lib11.KeyedSubtree = this.topComponents.backChevronKey.currentWidget;
        let bottomBackChevron : lib11.KeyedSubtree = this.bottomComponents.backChevronKey.currentWidget;
        if (op(Op.EQUALS,topBackChevron,null)) {
            return null;
        }
        let to : lib22.RelativeRect = this.positionInTransitionBox(this.topComponents.backChevronKey,{
            from : this.topNavBarBox});
        let from : lib22.RelativeRect = to;
        if (op(Op.EQUALS,bottomBackChevron,null)) {
            let topBackChevronBox : any = this.topComponents.backChevronKey.currentContext.findRenderObject();
            from = to.shift(Offset(this.forwardDirection * topBackChevronBox.size.width * 2.0,0.0));
        }
        let positionTween : lib41.RelativeRectTween = lib41.RelativeRectTween({
            begin : from,end : to});
        return lib41.PositionedTransition({
            rect : this.animation.drive(positionTween),child : lib41.FadeTransition({
                opacity : this.fadeInFrom(op(Op.EQUALS,bottomBackChevron,null) ? 0.7 : 0.4),child : lib18.DefaultTextStyle({
                    style : this.topBackButtonTextStyle,child : topBackChevron.child})})});
    }
    get topBackLabel() : lib6.Widget {
        let bottomMiddle : lib11.KeyedSubtree = this.bottomComponents.middleKey.currentWidget;
        let bottomLargeTitle : lib11.KeyedSubtree = this.bottomComponents.largeTitleKey.currentWidget;
        let topBackLabel : lib11.KeyedSubtree = this.topComponents.backLabelKey.currentWidget;
        if (op(Op.EQUALS,topBackLabel,null)) {
            return null;
        }
        let topBackLabelOpacity : lib44.RenderAnimatedOpacity = ((_519_)=>(!!_519_)?_519_.ancestorRenderObjectOfType(new lib6.TypeMatcher<lib44.RenderAnimatedOpacity>()):null)(this.topComponents.backLabelKey.currentContext);
        let midClickOpacity : lib39.Animation<double>;
        if (topBackLabelOpacity != null && op(Op.LT,topBackLabelOpacity.opacity.value,1.0)) {
            midClickOpacity = this.animation.drive(lib40.Tween({
                begin : 0.0,end : topBackLabelOpacity.opacity.value}));
        }
        if (bottomLargeTitle != null && topBackLabel != null && this.bottomLargeExpanded) {
            return lib41.PositionedTransition({
                rect : this.animation.drive(this.slideFromLeadingEdge({
                    fromKey : this.bottomComponents.largeTitleKey,fromNavBarBox : this.bottomNavBarBox,toKey : this.topComponents.backLabelKey,toNavBarBox : this.topNavBarBox})),child : lib41.FadeTransition({
                    opacity : (midClickOpacity || this.fadeInFrom(0.4)),child : lib41.DefaultTextStyleTransition({
                        style : this.animation.drive(lib25.TextStyleTween({
                            begin : this.bottomLargeTitleTextStyle,end : this.topBackButtonTextStyle})),maxLines : 1,overflow : lib24.TextOverflow.ellipsis,child : topBackLabel.child})})});
        }
        if (bottomMiddle != null && topBackLabel != null) {
            return lib41.PositionedTransition({
                rect : this.animation.drive(this.slideFromLeadingEdge({
                    fromKey : this.bottomComponents.middleKey,fromNavBarBox : this.bottomNavBarBox,toKey : this.topComponents.backLabelKey,toNavBarBox : this.topNavBarBox})),child : lib41.FadeTransition({
                    opacity : (midClickOpacity || this.fadeInFrom(0.3)),child : lib41.DefaultTextStyleTransition({
                        style : this.animation.drive(lib25.TextStyleTween({
                            begin : this.bottomTitleTextStyle,end : this.topBackButtonTextStyle})),child : topBackLabel.child})})});
        }
        return null;
    }
    get topMiddle() : lib6.Widget {
        let topMiddle : lib11.KeyedSubtree = this.topComponents.middleKey.currentWidget;
        if (op(Op.EQUALS,topMiddle,null)) {
            return null;
        }
        if (!this.topHasUserMiddle && this.topLargeExpanded) {
            return null;
        }
        let to : lib22.RelativeRect = this.positionInTransitionBox(this.topComponents.middleKey,{
            from : this.topNavBarBox});
        let positionTween : lib41.RelativeRectTween = lib41.RelativeRectTween({
            begin : to.shift(Offset(this.forwardDirection * this.topNavBarBox.size.width / 2.0,0.0)),end : to});
        return lib41.PositionedTransition({
            rect : this.animation.drive(positionTween),child : lib41.FadeTransition({
                opacity : this.fadeInFrom(0.25),child : lib18.DefaultTextStyle({
                    style : this.topTitleTextStyle,child : topMiddle.child})})});
    }
    get topTrailing() : lib6.Widget {
        let topTrailing : lib11.KeyedSubtree = this.topComponents.trailingKey.currentWidget;
        if (op(Op.EQUALS,topTrailing,null)) {
            return null;
        }
        return lib11.Positioned.fromRelativeRect({
            rect : this.positionInTransitionBox(this.topComponents.trailingKey,{
                from : this.topNavBarBox}),child : lib41.FadeTransition({
                opacity : this.fadeInFrom(0.4),child : topTrailing.child})});
    }
    get topLargeTitle() : lib6.Widget {
        let topLargeTitle : lib11.KeyedSubtree = this.topComponents.largeTitleKey.currentWidget;
        if (op(Op.EQUALS,topLargeTitle,null) || !this.topLargeExpanded) {
            return null;
        }
        let to : lib22.RelativeRect = this.positionInTransitionBox(this.topComponents.largeTitleKey,{
            from : this.topNavBarBox});
        let positionTween : lib41.RelativeRectTween = lib41.RelativeRectTween({
            begin : to.shift(Offset(this.forwardDirection * this.topNavBarBox.size.width,0.0)),end : to});
        return lib41.PositionedTransition({
            rect : this.animation.drive(positionTween),child : lib41.FadeTransition({
                opacity : this.fadeInFrom(0.3),child : lib18.DefaultTextStyle({
                    style : this.topLargeTitleTextStyle,maxLines : 1,overflow : lib24.TextOverflow.ellipsis,child : topLargeTitle.child})})});
    }
}

export class properties {
    private static __$_kNavBarPersistentHeight : double;
    static get _kNavBarPersistentHeight() : double { 
        if (this.__$_kNavBarPersistentHeight===undefined) {
            this.__$_kNavBarPersistentHeight = 44.0;
        }
        return this.__$_kNavBarPersistentHeight;
    }
    static set _kNavBarPersistentHeight(__$value : double)  { 
        this.__$_kNavBarPersistentHeight = __$value;
    }

    private static __$_kNavBarLargeTitleHeightExtension : double;
    static get _kNavBarLargeTitleHeightExtension() : double { 
        if (this.__$_kNavBarLargeTitleHeightExtension===undefined) {
            this.__$_kNavBarLargeTitleHeightExtension = 52.0;
        }
        return this.__$_kNavBarLargeTitleHeightExtension;
    }
    static set _kNavBarLargeTitleHeightExtension(__$value : double)  { 
        this.__$_kNavBarLargeTitleHeightExtension = __$value;
    }

    private static __$_kNavBarShowLargeTitleThreshold : double;
    static get _kNavBarShowLargeTitleThreshold() : double { 
        if (this.__$_kNavBarShowLargeTitleThreshold===undefined) {
            this.__$_kNavBarShowLargeTitleThreshold = 10.0;
        }
        return this.__$_kNavBarShowLargeTitleThreshold;
    }
    static set _kNavBarShowLargeTitleThreshold(__$value : double)  { 
        this.__$_kNavBarShowLargeTitleThreshold = __$value;
    }

    private static __$_kNavBarEdgePadding : double;
    static get _kNavBarEdgePadding() : double { 
        if (this.__$_kNavBarEdgePadding===undefined) {
            this.__$_kNavBarEdgePadding = 16.0;
        }
        return this.__$_kNavBarEdgePadding;
    }
    static set _kNavBarEdgePadding(__$value : double)  { 
        this.__$_kNavBarEdgePadding = __$value;
    }

    private static __$_kNavBarBackButtonTapWidth : double;
    static get _kNavBarBackButtonTapWidth() : double { 
        if (this.__$_kNavBarBackButtonTapWidth===undefined) {
            this.__$_kNavBarBackButtonTapWidth = 50.0;
        }
        return this.__$_kNavBarBackButtonTapWidth;
    }
    static set _kNavBarBackButtonTapWidth(__$value : double)  { 
        this.__$_kNavBarBackButtonTapWidth = __$value;
    }

    private static __$_kNavBarTitleFadeDuration : core.DartDuration;
    static get _kNavBarTitleFadeDuration() : core.DartDuration { 
        if (this.__$_kNavBarTitleFadeDuration===undefined) {
            this.__$_kNavBarTitleFadeDuration = core.DartDuration({
                milliseconds : 150});
        }
        return this.__$_kNavBarTitleFadeDuration;
    }
    static set _kNavBarTitleFadeDuration(__$value : core.DartDuration)  { 
        this.__$_kNavBarTitleFadeDuration = __$value;
    }

    private static __$_kDefaultNavBarBorderColor : any;
    static get _kDefaultNavBarBorderColor() : any { 
        if (this.__$_kDefaultNavBarBorderColor===undefined) {
            this.__$_kDefaultNavBarBorderColor = Color(1275068416);
        }
        return this.__$_kDefaultNavBarBorderColor;
    }
    static set _kDefaultNavBarBorderColor(__$value : any)  { 
        this.__$_kDefaultNavBarBorderColor = __$value;
    }

    private static __$_kDefaultNavBarBorder : lib4.Border;
    static get _kDefaultNavBarBorder() : lib4.Border { 
        if (this.__$_kDefaultNavBarBorder===undefined) {
            this.__$_kDefaultNavBarBorder = lib4.Border({
                bottom : lib3.BorderSide({
                    color : properties._kDefaultNavBarBorderColor,width : 0.0,style : lib3.BorderStyle.solid})});
        }
        return this.__$_kDefaultNavBarBorder;
    }
    static set _kDefaultNavBarBorder(__$value : lib4.Border)  { 
        this.__$_kDefaultNavBarBorder = __$value;
    }

    private static __$_defaultHeroTag : _HeroTag;
    static get _defaultHeroTag() : _HeroTag { 
        if (this.__$_defaultHeroTag===undefined) {
            this.__$_defaultHeroTag = _HeroTag(null);
        }
        return this.__$_defaultHeroTag;
    }
    static set _defaultHeroTag(__$value : _HeroTag)  { 
        this.__$_defaultHeroTag = __$value;
    }

    private static __$_linearTranslateWithLargestRectSizeTween : (begin : any,end : any) => lib40.Tween<any>;
    static get _linearTranslateWithLargestRectSizeTween() : (begin : any,end : any) => lib40.Tween<any> { 
        if (this.__$_linearTranslateWithLargestRectSizeTween===undefined) {
            this.__$_linearTranslateWithLargestRectSizeTween = (begin : any,end : any) =>  {
                let largestSize : any = Size(math.max(begin.size.width,end.size.width),math.max(begin.size.height,end.size.height));
                return lib40.RectTween({
                    begin : op(Op.BITAND,begin.topLeft,largestSize),end : op(Op.BITAND,end.topLeft,largestSize)});
            };
        }
        return this.__$_linearTranslateWithLargestRectSizeTween;
    }
    static set _linearTranslateWithLargestRectSizeTween(__$value : (begin : any,end : any) => lib40.Tween<any>)  { 
        this.__$_linearTranslateWithLargestRectSizeTween = __$value;
    }

    private static __$_navBarHeroLaunchPadBuilder : (context : lib6.BuildContext,child : lib6.Widget) => lib6.Widget;
    static get _navBarHeroLaunchPadBuilder() : (context : lib6.BuildContext,child : lib6.Widget) => lib6.Widget { 
        if (this.__$_navBarHeroLaunchPadBuilder===undefined) {
            this.__$_navBarHeroLaunchPadBuilder = (context : lib6.BuildContext,child : lib6.Widget) =>  {
                /* TODO (AssertStatementImpl) : assert (child is _TransitionableNavigationBar); */;
                return lib45.Visibility({
                    maintainSize : true,maintainAnimation : true,maintainState : true,visible : false,child : child});
            };
        }
        return this.__$_navBarHeroLaunchPadBuilder;
    }
    static set _navBarHeroLaunchPadBuilder(__$value : (context : lib6.BuildContext,child : lib6.Widget) => lib6.Widget)  { 
        this.__$_navBarHeroLaunchPadBuilder = __$value;
    }

    private static __$_navBarHeroFlightShuttleBuilder : (flightContext : lib6.BuildContext,animation : lib39.Animation<double>,flightDirection : lib19.HeroFlightDirection,fromHeroContext : lib6.BuildContext,toHeroContext : lib6.BuildContext) => lib6.Widget;
    static get _navBarHeroFlightShuttleBuilder() : (flightContext : lib6.BuildContext,animation : lib39.Animation<double>,flightDirection : lib19.HeroFlightDirection,fromHeroContext : lib6.BuildContext,toHeroContext : lib6.BuildContext) => lib6.Widget { 
        if (this.__$_navBarHeroFlightShuttleBuilder===undefined) {
            this.__$_navBarHeroFlightShuttleBuilder = (flightContext : lib6.BuildContext,animation : lib39.Animation<double>,flightDirection : lib19.HeroFlightDirection,fromHeroContext : lib6.BuildContext,toHeroContext : lib6.BuildContext) =>  {
                /* TODO (AssertStatementImpl) : assert (animation != null); */;
                /* TODO (AssertStatementImpl) : assert (flightDirection != null); */;
                /* TODO (AssertStatementImpl) : assert (fromHeroContext != null); */;
                /* TODO (AssertStatementImpl) : assert (toHeroContext != null); */;
                /* TODO (AssertStatementImpl) : assert (fromHeroContext.widget is Hero); */;
                /* TODO (AssertStatementImpl) : assert (toHeroContext.widget is Hero); */;
                let fromHeroWidget : lib19.Hero = fromHeroContext.widget;
                let toHeroWidget : lib19.Hero = toHeroContext.widget;
                /* TODO (AssertStatementImpl) : assert (fromHeroWidget.child is _TransitionableNavigationBar); */;
                /* TODO (AssertStatementImpl) : assert (toHeroWidget.child is _TransitionableNavigationBar); */;
                let fromNavBar : _TransitionableNavigationBar = fromHeroWidget.child;
                let toNavBar : _TransitionableNavigationBar = toHeroWidget.child;
                /* TODO (AssertStatementImpl) : assert (fromNavBar.componentsKeys != null); */;
                /* TODO (AssertStatementImpl) : assert (toNavBar.componentsKeys != null); */;
                /* TODO (AssertStatementImpl) : assert (fromNavBar.componentsKeys.navBarBoxKey.currentContext.owner != null, 'The from nav bar to Hero must have been mounted in the previous frame'); */;
                ;
                /* TODO (AssertStatementImpl) : assert (toNavBar.componentsKeys.navBarBoxKey.currentContext.owner != null, 'The to nav bar to Hero must have been mounted in the previous frame'); */;
                ;
                switch (flightDirection) {
                    case lib19.HeroFlightDirection.push:
                        return _NavigationBarTransition({
                            animation : animation,bottomNavBar : fromNavBar,topNavBar : toNavBar});
                        break;
                    case lib19.HeroFlightDirection.pop:
                        return _NavigationBarTransition({
                            animation : animation,bottomNavBar : toNavBar,topNavBar : fromNavBar});
                }
            };
        }
        return this.__$_navBarHeroFlightShuttleBuilder;
    }
    static set _navBarHeroFlightShuttleBuilder(__$value : (flightContext : lib6.BuildContext,animation : lib39.Animation<double>,flightDirection : lib19.HeroFlightDirection,fromHeroContext : lib6.BuildContext,toHeroContext : lib6.BuildContext) => lib6.Widget)  { 
        this.__$_navBarHeroFlightShuttleBuilder = __$value;
    }

}
