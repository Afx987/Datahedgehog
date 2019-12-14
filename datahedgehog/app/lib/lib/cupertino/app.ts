/** Library asset:datahedgehog_monitor/lib/lib/cupertino/app.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./theme";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/navigator";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/widgets/localizations";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/widgets/heroes";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_configuration";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_physics";
import * as lib12 from "./localizations";
import * as lib13 from "./route";
import * as lib14 from "./colors";
import * as lib15 from "./icons";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/widgets/icon";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib18 from "./button";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/widgets/app";

export namespace CupertinoApp {
    export type Constructors = lib3.StatefulWidget.Constructors | 'CupertinoApp';
    export type Interface = Omit<CupertinoApp, Constructors>;
}
@DartClass
export class CupertinoApp extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,navigatorKey? : lib3.GlobalKey<lib6.NavigatorState>,home? : lib3.Widget,theme? : lib5.CupertinoThemeData,routes? : core.DartMap<string,(context : lib3.BuildContext) => lib3.Widget>,initialRoute? : string,onGenerateRoute? : (settings : lib6.RouteSettings) => lib6.Route<any>,onUnknownRoute? : (settings : lib6.RouteSettings) => lib6.Route<any>,navigatorObservers? : core.DartList<lib6.NavigatorObserver>,builder? : (context : lib3.BuildContext,child : lib3.Widget) => lib3.Widget,title? : string,onGenerateTitle? : (context : lib3.BuildContext) => string,color? : any,locale? : any,localizationsDelegates? : core.DartIterable<lib7.LocalizationsDelegate<any>>,localeListResolutionCallback? : (locales : core.DartList<any>,supportedLocales : core.DartIterable<any>) => any,localeResolutionCallback? : (locale : any,supportedLocales : core.DartIterable<any>) => any,supportedLocales? : core.DartIterable<any>,showPerformanceOverlay? : boolean,checkerboardRasterCacheImages? : boolean,checkerboardOffscreenLayers? : boolean,showSemanticsDebugger? : boolean,debugShowCheckedModeBanner? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoApp(_namedArguments? : {key? : lib4.Key,navigatorKey? : lib3.GlobalKey<lib6.NavigatorState>,home? : lib3.Widget,theme? : lib5.CupertinoThemeData,routes? : core.DartMap<string,(context : lib3.BuildContext) => lib3.Widget>,initialRoute? : string,onGenerateRoute? : (settings : lib6.RouteSettings) => lib6.Route<any>,onUnknownRoute? : (settings : lib6.RouteSettings) => lib6.Route<any>,navigatorObservers? : core.DartList<lib6.NavigatorObserver>,builder? : (context : lib3.BuildContext,child : lib3.Widget) => lib3.Widget,title? : string,onGenerateTitle? : (context : lib3.BuildContext) => string,color? : any,locale? : any,localizationsDelegates? : core.DartIterable<lib7.LocalizationsDelegate<any>>,localeListResolutionCallback? : (locales : core.DartList<any>,supportedLocales : core.DartIterable<any>) => any,localeResolutionCallback? : (locale : any,supportedLocales : core.DartIterable<any>) => any,supportedLocales? : core.DartIterable<any>,showPerformanceOverlay? : boolean,checkerboardRasterCacheImages? : boolean,checkerboardOffscreenLayers? : boolean,showSemanticsDebugger? : boolean,debugShowCheckedModeBanner? : boolean}) {
        let {key,navigatorKey,home,theme,routes,initialRoute,onGenerateRoute,onUnknownRoute,navigatorObservers,builder,title,onGenerateTitle,color,locale,localizationsDelegates,localeListResolutionCallback,localeResolutionCallback,supportedLocales,showPerformanceOverlay,checkerboardRasterCacheImages,checkerboardOffscreenLayers,showSemanticsDebugger,debugShowCheckedModeBanner} = Object.assign({
            "routes" : new core.DartMap.literal([
            ]),
            "navigatorObservers" : new core.DartList.literal<lib6.NavigatorObserver>(),
            "title" : '',
            "supportedLocales" : new core.DartList.literal<any>(Locale('en','US')),
            "showPerformanceOverlay" : false,
            "checkerboardRasterCacheImages" : false,
            "checkerboardOffscreenLayers" : false,
            "showSemanticsDebugger" : false,
            "debugShowCheckedModeBanner" : true}, _namedArguments );
        this.assert = assert;
        this.navigatorKey = navigatorKey;
        this.home = home;
        this.theme = theme;
        this.routes = routes;
        this.initialRoute = initialRoute;
        this.onGenerateRoute = onGenerateRoute;
        this.onUnknownRoute = onUnknownRoute;
        this.navigatorObservers = navigatorObservers;
        this.builder = builder;
        this.title = title;
        this.onGenerateTitle = onGenerateTitle;
        this.color = color;
        this.locale = locale;
        this.localizationsDelegates = localizationsDelegates;
        this.localeListResolutionCallback = localeListResolutionCallback;
        this.localeResolutionCallback = localeResolutionCallback;
        this.supportedLocales = supportedLocales;
        this.showPerformanceOverlay = showPerformanceOverlay;
        this.checkerboardRasterCacheImages = checkerboardRasterCacheImages;
        this.checkerboardOffscreenLayers = checkerboardOffscreenLayers;
        this.showSemanticsDebugger = showSemanticsDebugger;
        this.debugShowCheckedModeBanner = debugShowCheckedModeBanner;
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

    navigatorKey : lib3.GlobalKey<lib6.NavigatorState>;

    home : lib3.Widget;

    theme : lib5.CupertinoThemeData;

    routes : core.DartMap<string,(context : lib3.BuildContext) => lib3.Widget>;

    initialRoute : string;

    onGenerateRoute : (settings : lib6.RouteSettings) => lib6.Route<any>;

    onUnknownRoute : (settings : lib6.RouteSettings) => lib6.Route<any>;

    navigatorObservers : core.DartList<lib6.NavigatorObserver>;

    builder : (context : lib3.BuildContext,child : lib3.Widget) => lib3.Widget;

    title : string;

    onGenerateTitle : (context : lib3.BuildContext) => string;

    color : any;

    locale : any;

    localizationsDelegates : core.DartIterable<lib7.LocalizationsDelegate<any>>;

    localeListResolutionCallback : (locales : core.DartList<any>,supportedLocales : core.DartIterable<any>) => any;

    localeResolutionCallback : (locale : any,supportedLocales : core.DartIterable<any>) => any;

    supportedLocales : core.DartIterable<any>;

    showPerformanceOverlay : boolean;

    checkerboardRasterCacheImages : boolean;

    checkerboardOffscreenLayers : boolean;

    showSemanticsDebugger : boolean;

    debugShowCheckedModeBanner : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _CupertinoAppState {
        return _CupertinoAppState();
    }
    static createCupertinoHeroController() : lib8.HeroController {
        return lib8.HeroController();
    }
}

export namespace _AlwaysCupertinoScrollBehavior {
    export type Constructors = lib9.ScrollBehavior.Constructors | '_AlwaysCupertinoScrollBehavior';
    export type Interface = Omit<_AlwaysCupertinoScrollBehavior, Constructors>;
}
@DartClass
export class _AlwaysCupertinoScrollBehavior extends lib9.ScrollBehavior {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildViewportChrome(context : lib3.BuildContext,child : lib3.Widget,axisDirection : lib10.AxisDirection) : lib3.Widget {
        return child;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getScrollPhysics(context : lib3.BuildContext) : lib11.ScrollPhysics {
        return new lib11.BouncingScrollPhysics();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AlwaysCupertinoScrollBehavior() {
    }
}

export namespace _CupertinoAppState {
    export type Constructors = '_CupertinoAppState';
    export type Interface = Omit<_CupertinoAppState, Constructors>;
}
@DartClass
export class _CupertinoAppState extends any {
    _heroController : lib8.HeroController;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._heroController = CupertinoApp.createCupertinoHeroController();
        this._updateNavigator();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : CupertinoApp) : any {
        super.didUpdateWidget(oldWidget);
        if (widget.navigatorKey != oldWidget.navigatorKey) {
            this._heroController = CupertinoApp.createCupertinoHeroController();
        }
        this._updateNavigator();
    }
    _navigatorObservers : core.DartList<lib6.NavigatorObserver>;

    _updateNavigator() : any {
        if (widget.home != null || widget.routes.isNotEmpty || widget.onGenerateRoute != null || widget.onUnknownRoute != null) {
            this._navigatorObservers = op(Op.LT,core.DartList<E>,lib6.NavigatorObserver);
            ((_) : any =>  {
                {
                    add(this._heroController);
                    return _;
                }
            })(op(Op.GT,,.from(widget.navigatorObservers)));
        }else {
            this._navigatorObservers = new core.DartList.literal<lib6.NavigatorObserver>();
        }
    }
    get _localizationsDelegates() : core.DartIterable<lib7.LocalizationsDelegate<any>> { 
        return core.iter<lib7.LocalizationsDelegate<any>>(()=>(function*()  {
            if (widget.localizationsDelegates != null) yield* widget.localizationsDelegates;
            yield lib12.DefaultCupertinoLocalizations.delegate;
        }).call(this));
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let effectiveThemeData : lib5.CupertinoThemeData = (widget.theme || new lib5.CupertinoThemeData());
        return lib9.ScrollConfiguration({
            behavior : _AlwaysCupertinoScrollBehavior(),child : lib5.CupertinoTheme({
                data : effectiveThemeData,child : lib19.WidgetsApp({
                    key : lib3.GlobalObjectKey(this),navigatorKey : widget.navigatorKey,navigatorObservers : this._navigatorObservers,pageRouteBuilder : <T>(settings : lib6.RouteSettings,builder : (context : lib3.BuildContext) => lib3.Widget) =>  {
                        return lib13.CupertinoPageRoute({
                            settings : settings,builder : builder});
                    },home : widget.home,routes : widget.routes,initialRoute : widget.initialRoute,onGenerateRoute : widget.onGenerateRoute,onUnknownRoute : widget.onUnknownRoute,builder : widget.builder,title : widget.title,onGenerateTitle : widget.onGenerateTitle,textStyle : effectiveThemeData.textTheme.textStyle,color : (widget.color || lib14.CupertinoColors.activeBlue),locale : widget.locale,localizationsDelegates : this._localizationsDelegates,localeResolutionCallback : widget.localeResolutionCallback,localeListResolutionCallback : widget.localeListResolutionCallback,supportedLocales : widget.supportedLocales,showPerformanceOverlay : widget.showPerformanceOverlay,checkerboardRasterCacheImages : widget.checkerboardRasterCacheImages,checkerboardOffscreenLayers : widget.checkerboardOffscreenLayers,showSemanticsDebugger : widget.showSemanticsDebugger,debugShowCheckedModeBanner : widget.debugShowCheckedModeBanner,inspectorSelectButtonBuilder : (context : lib3.BuildContext,onPressed : any) =>  {
                        return lib18.CupertinoButton.filled({
                            child : new lib16.Icon(lib15.CupertinoIcons.search,{
                                size : 28.0,color : lib14.CupertinoColors.white}),padding : lib17.EdgeInsets.zero,onPressed : onPressed});
                    }})})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoAppState() {
    }
}

export class properties {
}
