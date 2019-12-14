/** Library asset:datahedgehog_monitor/lib/lib/material/app.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/navigator";
import * as lib7 from "./theme_data";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/widgets/localizations";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_configuration";
import * as lib10 from "./theme";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/widgets/overscroll_indicator";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/heroes";
import * as lib15 from "./arc";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib17 from "./material_localizations";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/cupertino/localizations";
import * as lib19 from "./page";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib22 from "./colors";
import * as lib23 from "./icons";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/widgets/icon";
import * as lib25 from "./floating_action_button";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/widgets/app";

export namespace MaterialApp {
    export type Constructors = lib4.StatefulWidget.Constructors | 'MaterialApp';
    export type Interface = Omit<MaterialApp, Constructors>;
}
@DartClass
export class MaterialApp extends lib4.StatefulWidget {
    constructor(_namedArguments? : {key? : lib5.Key,navigatorKey? : lib4.GlobalKey<lib6.NavigatorState>,home? : lib4.Widget,routes? : core.DartMap<string,(context : lib4.BuildContext) => lib4.Widget>,initialRoute? : string,onGenerateRoute? : (settings : lib6.RouteSettings) => lib6.Route<any>,onUnknownRoute? : (settings : lib6.RouteSettings) => lib6.Route<any>,navigatorObservers? : core.DartList<lib6.NavigatorObserver>,builder? : (context : lib4.BuildContext,child : lib4.Widget) => lib4.Widget,title? : string,onGenerateTitle? : (context : lib4.BuildContext) => string,color? : any,theme? : lib7.ThemeData,darkTheme? : lib7.ThemeData,locale? : any,localizationsDelegates? : core.DartIterable<lib8.LocalizationsDelegate<any>>,localeListResolutionCallback? : (locales : core.DartList<any>,supportedLocales : core.DartIterable<any>) => any,localeResolutionCallback? : (locale : any,supportedLocales : core.DartIterable<any>) => any,supportedLocales? : core.DartIterable<any>,debugShowMaterialGrid? : boolean,showPerformanceOverlay? : boolean,checkerboardRasterCacheImages? : boolean,checkerboardOffscreenLayers? : boolean,showSemanticsDebugger? : boolean,debugShowCheckedModeBanner? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MaterialApp(_namedArguments? : {key? : lib5.Key,navigatorKey? : lib4.GlobalKey<lib6.NavigatorState>,home? : lib4.Widget,routes? : core.DartMap<string,(context : lib4.BuildContext) => lib4.Widget>,initialRoute? : string,onGenerateRoute? : (settings : lib6.RouteSettings) => lib6.Route<any>,onUnknownRoute? : (settings : lib6.RouteSettings) => lib6.Route<any>,navigatorObservers? : core.DartList<lib6.NavigatorObserver>,builder? : (context : lib4.BuildContext,child : lib4.Widget) => lib4.Widget,title? : string,onGenerateTitle? : (context : lib4.BuildContext) => string,color? : any,theme? : lib7.ThemeData,darkTheme? : lib7.ThemeData,locale? : any,localizationsDelegates? : core.DartIterable<lib8.LocalizationsDelegate<any>>,localeListResolutionCallback? : (locales : core.DartList<any>,supportedLocales : core.DartIterable<any>) => any,localeResolutionCallback? : (locale : any,supportedLocales : core.DartIterable<any>) => any,supportedLocales? : core.DartIterable<any>,debugShowMaterialGrid? : boolean,showPerformanceOverlay? : boolean,checkerboardRasterCacheImages? : boolean,checkerboardOffscreenLayers? : boolean,showSemanticsDebugger? : boolean,debugShowCheckedModeBanner? : boolean}) {
        let {key,navigatorKey,home,routes,initialRoute,onGenerateRoute,onUnknownRoute,navigatorObservers,builder,title,onGenerateTitle,color,theme,darkTheme,locale,localizationsDelegates,localeListResolutionCallback,localeResolutionCallback,supportedLocales,debugShowMaterialGrid,showPerformanceOverlay,checkerboardRasterCacheImages,checkerboardOffscreenLayers,showSemanticsDebugger,debugShowCheckedModeBanner} = Object.assign({
            "routes" : new core.DartMap.literal([
            ]),
            "navigatorObservers" : new core.DartList.literal<lib6.NavigatorObserver>(),
            "title" : '',
            "supportedLocales" : new core.DartList.literal<any>(Locale('en','US')),
            "debugShowMaterialGrid" : false,
            "showPerformanceOverlay" : false,
            "checkerboardRasterCacheImages" : false,
            "checkerboardOffscreenLayers" : false,
            "showSemanticsDebugger" : false,
            "debugShowCheckedModeBanner" : true}, _namedArguments );
        this.assert = assert;
        this.navigatorKey = navigatorKey;
        this.home = home;
        this.routes = routes;
        this.initialRoute = initialRoute;
        this.onGenerateRoute = onGenerateRoute;
        this.onUnknownRoute = onUnknownRoute;
        this.navigatorObservers = navigatorObservers;
        this.builder = builder;
        this.title = title;
        this.onGenerateTitle = onGenerateTitle;
        this.color = color;
        this.theme = theme;
        this.darkTheme = darkTheme;
        this.locale = locale;
        this.localizationsDelegates = localizationsDelegates;
        this.localeListResolutionCallback = localeListResolutionCallback;
        this.localeResolutionCallback = localeResolutionCallback;
        this.supportedLocales = supportedLocales;
        this.debugShowMaterialGrid = debugShowMaterialGrid;
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

     : any;

    navigatorKey : lib4.GlobalKey<lib6.NavigatorState>;

    home : lib4.Widget;

    routes : core.DartMap<string,(context : lib4.BuildContext) => lib4.Widget>;

    initialRoute : string;

    onGenerateRoute : (settings : lib6.RouteSettings) => lib6.Route<any>;

    onUnknownRoute : (settings : lib6.RouteSettings) => lib6.Route<any>;

    navigatorObservers : core.DartList<lib6.NavigatorObserver>;

    builder : (context : lib4.BuildContext,child : lib4.Widget) => lib4.Widget;

    title : string;

    onGenerateTitle : (context : lib4.BuildContext) => string;

    theme : lib7.ThemeData;

    darkTheme : lib7.ThemeData;

    color : any;

    locale : any;

    localizationsDelegates : core.DartIterable<lib8.LocalizationsDelegate<any>>;

    localeListResolutionCallback : (locales : core.DartList<any>,supportedLocales : core.DartIterable<any>) => any;

    localeResolutionCallback : (locale : any,supportedLocales : core.DartIterable<any>) => any;

    supportedLocales : core.DartIterable<any>;

    showPerformanceOverlay : boolean;

    checkerboardRasterCacheImages : boolean;

    checkerboardOffscreenLayers : boolean;

    showSemanticsDebugger : boolean;

    debugShowCheckedModeBanner : boolean;

    debugShowMaterialGrid : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _MaterialAppState {
        return _MaterialAppState();
    }
}

export namespace _MaterialScrollBehavior {
    export type Constructors = lib9.ScrollBehavior.Constructors | '_MaterialScrollBehavior';
    export type Interface = Omit<_MaterialScrollBehavior, Constructors>;
}
@DartClass
export class _MaterialScrollBehavior extends lib9.ScrollBehavior {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getPlatform(context : lib4.BuildContext) : lib11.TargetPlatform {
        return lib10.Theme.of(context).platform;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildViewportChrome(context : lib4.BuildContext,child : lib4.Widget,axisDirection : lib12.AxisDirection) : lib4.Widget {
        switch (this.getPlatform(context)) {
            case lib11.TargetPlatform.iOS:
                return child;
            case lib11.TargetPlatform.android:
            case lib11.TargetPlatform.fuchsia:
                return lib13.GlowingOverscrollIndicator({
                    child : child,axisDirection : axisDirection,color : lib10.Theme.of(context).accentColor});
        }
        return null;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MaterialScrollBehavior() {
    }
}

export namespace _MaterialAppState {
    export type Constructors = '_MaterialAppState';
    export type Interface = Omit<_MaterialAppState, Constructors>;
}
@DartClass
export class _MaterialAppState extends any {
    _heroController : lib14.HeroController;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._heroController = lib14.HeroController({
            createRectTween : this._createRectTween.bind(this)});
        this._updateNavigator();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : MaterialApp) : any {
        super.didUpdateWidget(oldWidget);
        if (widget.navigatorKey != oldWidget.navigatorKey) {
            this._heroController = lib14.HeroController({
                createRectTween : this._createRectTween.bind(this)});
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
            this._navigatorObservers = null;
        }
    }
    _createRectTween(begin : any,end : any) : lib16.RectTween {
        return lib15.MaterialRectArcTween({
            begin : begin,end : end});
    }
    get _localizationsDelegates() : core.DartIterable<lib8.LocalizationsDelegate<any>> { 
        return core.iter<lib8.LocalizationsDelegate<any>>(()=>(function*()  {
            if (widget.localizationsDelegates != null) yield* widget.localizationsDelegates;
            yield lib17.DefaultMaterialLocalizations.delegate;
            yield lib18.DefaultCupertinoLocalizations.delegate;
        }).call(this));
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib4.BuildContext) : lib4.Widget {
        let result : lib4.Widget = lib26.WidgetsApp({
            key : lib4.GlobalObjectKey(this),navigatorKey : widget.navigatorKey,navigatorObservers : this._navigatorObservers,pageRouteBuilder : <T>(settings : lib6.RouteSettings,builder : (context : lib4.BuildContext) => lib4.Widget) =>  {
                return lib19.MaterialPageRoute({
                    settings : settings,builder : builder});
            },home : widget.home,routes : widget.routes,initialRoute : widget.initialRoute,onGenerateRoute : widget.onGenerateRoute,onUnknownRoute : widget.onUnknownRoute,builder : (context : lib4.BuildContext,child : lib4.Widget) =>  {
                let theme : lib7.ThemeData;
                let platformBrightness : any = lib20.MediaQuery.platformBrightnessOf(context);
                if (op(Op.EQUALS,platformBrightness,ui.Brightness.dark) && widget.darkTheme != null) {
                    theme = widget.darkTheme;
                }else if (widget.theme != null) {
                    theme = widget.theme;
                }else {
                    theme = lib7.ThemeData.fallback();
                }
                return lib10.AnimatedTheme({
                    data : theme,isMaterialAppTheme : true,child : widget.builder != null ? lib21.Builder({
                        builder : (context : lib4.BuildContext) =>  {
                            return widget.builder(context,child);
                        }}) : child});
            },title : widget.title,onGenerateTitle : widget.onGenerateTitle,textStyle : properties._errorTextStyle,color : ((widget.color || ((t)=>(!!t)?t.primaryColor:null)(widget.theme)) || lib22.Colors.blue),locale : widget.locale,localizationsDelegates : this._localizationsDelegates,localeResolutionCallback : widget.localeResolutionCallback,localeListResolutionCallback : widget.localeListResolutionCallback,supportedLocales : widget.supportedLocales,showPerformanceOverlay : widget.showPerformanceOverlay,checkerboardRasterCacheImages : widget.checkerboardRasterCacheImages,checkerboardOffscreenLayers : widget.checkerboardOffscreenLayers,showSemanticsDebugger : widget.showSemanticsDebugger,debugShowCheckedModeBanner : widget.debugShowCheckedModeBanner,inspectorSelectButtonBuilder : (context : lib4.BuildContext,onPressed : any) =>  {
                return lib25.FloatingActionButton({
                    child : new lib24.Icon(lib23.Icons.search),onPressed : onPressed,mini : true});
            }});
        /* TODO (AssertStatementImpl) : assert (() {if (widget.debugShowMaterialGrid) {result = GridPaper(color: const Color(0xE0F9BBE0), interval: 8.0, divisions: 2, subdivisions: 1, child: result);} return true;}()); */;
        return lib9.ScrollConfiguration({
            behavior : _MaterialScrollBehavior(),child : result});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MaterialAppState() {
    }
}

export class properties {
    private static __$_errorTextStyle : lib3.TextStyle;
    static get _errorTextStyle() : lib3.TextStyle { 
        if (this.__$_errorTextStyle===undefined) {
            this.__$_errorTextStyle = lib3.TextStyle({
                color : Color(3506372608),fontFamily : 'monospace',fontSize : 48.0,fontWeight : FontWeight.w900,decoration : TextDecoration.underline,decorationColor : Color(4294967040),decorationStyle : TextDecorationStyle.double,debugLabel : 'fallback style; consider putting your text in a Material'});
        }
        return this.__$_errorTextStyle;
    }
    static set _errorTextStyle(__$value : lib3.TextStyle)  { 
        this.__$_errorTextStyle = __$value;
    }

}
