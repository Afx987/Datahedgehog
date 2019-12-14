/** Library asset:datahedgehog_monitor/lib/lib/widgets/app.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./navigator";
import * as lib6 from "./pages";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib8 from "./localizations";
import * as lib9 from "./binding";
import * as collection from "@dart2ts/dart/core";
import * as lib11 from "./basic";
import * as lib12 from "./text";
import * as lib13 from "./performance_overlay";
import * as lib14 from "./semantics_debugger";
import * as lib15 from "./title";
import * as lib16 from "./media_query";

export namespace WidgetsApp {
    export type Constructors = lib3.StatefulWidget.Constructors | 'WidgetsApp' | 'containsKey' | 'containsKey';
    export type Interface = Omit<WidgetsApp, Constructors>;
}
@DartClass
export class WidgetsApp extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,navigatorKey? : lib3.GlobalKey<lib5.NavigatorState>,onGenerateRoute? : (settings : lib5.RouteSettings) => lib5.Route<any>,onUnknownRoute? : (settings : lib5.RouteSettings) => lib5.Route<any>,navigatorObservers? : core.DartList<lib5.NavigatorObserver>,initialRoute? : string,pageRouteBuilder? : (settings : lib5.RouteSettings,builder : (context : lib3.BuildContext) => lib3.Widget) => lib6.PageRoute<T>,home? : lib3.Widget,routes? : core.DartMap<string,(context : lib3.BuildContext) => lib3.Widget>,builder? : (context : lib3.BuildContext,child : lib3.Widget) => lib3.Widget,title? : string,onGenerateTitle? : (context : lib3.BuildContext) => string,textStyle? : lib7.TextStyle,color? : any,locale? : any,localizationsDelegates? : core.DartIterable<lib8.LocalizationsDelegate<any>>,localeListResolutionCallback? : (locales : core.DartList<any>,supportedLocales : core.DartIterable<any>) => any,localeResolutionCallback? : (locale : any,supportedLocales : core.DartIterable<any>) => any,supportedLocales? : core.DartIterable<any>,showPerformanceOverlay? : boolean,checkerboardRasterCacheImages? : boolean,checkerboardOffscreenLayers? : boolean,showSemanticsDebugger? : boolean,debugShowWidgetInspector? : boolean,debugShowCheckedModeBanner? : boolean,inspectorSelectButtonBuilder? : (context : lib3.BuildContext,onPressed : any) => lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    WidgetsApp(_namedArguments? : {key? : lib4.Key,navigatorKey? : lib3.GlobalKey<lib5.NavigatorState>,onGenerateRoute? : (settings : lib5.RouteSettings) => lib5.Route<any>,onUnknownRoute? : (settings : lib5.RouteSettings) => lib5.Route<any>,navigatorObservers? : core.DartList<lib5.NavigatorObserver>,initialRoute? : string,pageRouteBuilder? : (settings : lib5.RouteSettings,builder : (context : lib3.BuildContext) => lib3.Widget) => lib6.PageRoute<T>,home? : lib3.Widget,routes? : core.DartMap<string,(context : lib3.BuildContext) => lib3.Widget>,builder? : (context : lib3.BuildContext,child : lib3.Widget) => lib3.Widget,title? : string,onGenerateTitle? : (context : lib3.BuildContext) => string,textStyle? : lib7.TextStyle,color? : any,locale? : any,localizationsDelegates? : core.DartIterable<lib8.LocalizationsDelegate<any>>,localeListResolutionCallback? : (locales : core.DartList<any>,supportedLocales : core.DartIterable<any>) => any,localeResolutionCallback? : (locale : any,supportedLocales : core.DartIterable<any>) => any,supportedLocales? : core.DartIterable<any>,showPerformanceOverlay? : boolean,checkerboardRasterCacheImages? : boolean,checkerboardOffscreenLayers? : boolean,showSemanticsDebugger? : boolean,debugShowWidgetInspector? : boolean,debugShowCheckedModeBanner? : boolean,inspectorSelectButtonBuilder? : (context : lib3.BuildContext,onPressed : any) => lib3.Widget}) {
        let {key,navigatorKey,onGenerateRoute,onUnknownRoute,navigatorObservers,initialRoute,pageRouteBuilder,home,routes,builder,title,onGenerateTitle,textStyle,color,locale,localizationsDelegates,localeListResolutionCallback,localeResolutionCallback,supportedLocales,showPerformanceOverlay,checkerboardRasterCacheImages,checkerboardOffscreenLayers,showSemanticsDebugger,debugShowWidgetInspector,debugShowCheckedModeBanner,inspectorSelectButtonBuilder} = Object.assign({
            "navigatorObservers" : new core.DartList.literal<lib5.NavigatorObserver>(),
            "routes" : new core.DartMap.literal([
            ]),
            "title" : '',
            "supportedLocales" : new core.DartList.literal<any>(Locale('en','US')),
            "showPerformanceOverlay" : false,
            "checkerboardRasterCacheImages" : false,
            "checkerboardOffscreenLayers" : false,
            "showSemanticsDebugger" : false,
            "debugShowWidgetInspector" : false,
            "debugShowCheckedModeBanner" : true}, _namedArguments );
        this.assert = assert;
        this.navigatorKey = navigatorKey;
        this.onGenerateRoute = onGenerateRoute;
        this.onUnknownRoute = onUnknownRoute;
        this.navigatorObservers = navigatorObservers;
        this.initialRoute = initialRoute;
        this.pageRouteBuilder = pageRouteBuilder;
        this.home = home;
        this.routes = routes;
        this.builder = builder;
        this.title = title;
        this.onGenerateTitle = onGenerateTitle;
        this.textStyle = textStyle;
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
        this.debugShowWidgetInspector = debugShowWidgetInspector;
        this.debugShowCheckedModeBanner = debugShowCheckedModeBanner;
        this.inspectorSelectButtonBuilder = inspectorSelectButtonBuilder;
    }
     : any;

     : any;

     : any;

    @namedConstructor
    containsKey( : any) {
    }
    static containsKey : new( : any) => WidgetsApp;

     : any;

     : any;

    @namedConstructor
    containsKey( : any) {
    }
    static containsKey : new( : any) => WidgetsApp;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    [null](builder : any, : any) {
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

     : any;

     : any;

     : any;

     : any;

     : any;

    navigatorKey : lib3.GlobalKey<lib5.NavigatorState>;

    onGenerateRoute : (settings : lib5.RouteSettings) => lib5.Route<any>;

    pageRouteBuilder : (settings : lib5.RouteSettings,builder : (context : lib3.BuildContext) => lib3.Widget) => lib6.PageRoute<T>;

    home : lib3.Widget;

    routes : core.DartMap<string,(context : lib3.BuildContext) => lib3.Widget>;

    onUnknownRoute : (settings : lib5.RouteSettings) => lib5.Route<any>;

    initialRoute : string;

    navigatorObservers : core.DartList<lib5.NavigatorObserver>;

    builder : (context : lib3.BuildContext,child : lib3.Widget) => lib3.Widget;

    title : string;

    onGenerateTitle : (context : lib3.BuildContext) => string;

    textStyle : lib7.TextStyle;

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

    debugShowWidgetInspector : boolean;

    inspectorSelectButtonBuilder : (context : lib3.BuildContext,onPressed : any) => lib3.Widget;

    debugShowCheckedModeBanner : boolean;

    private static __$showPerformanceOverlayOverride : boolean;
    static get showPerformanceOverlayOverride() : boolean { 
        if (this.__$showPerformanceOverlayOverride===undefined) {
            this.__$showPerformanceOverlayOverride = false;
        }
        return this.__$showPerformanceOverlayOverride;
    }
    static set showPerformanceOverlayOverride(__$value : boolean)  { 
        this.__$showPerformanceOverlayOverride = __$value;
    }

    private static __$debugShowWidgetInspectorOverride : boolean;
    static get debugShowWidgetInspectorOverride() : boolean { 
        if (this.__$debugShowWidgetInspectorOverride===undefined) {
            this.__$debugShowWidgetInspectorOverride = false;
        }
        return this.__$debugShowWidgetInspectorOverride;
    }
    static set debugShowWidgetInspectorOverride(__$value : boolean)  { 
        this.__$debugShowWidgetInspectorOverride = __$value;
    }

    private static __$debugAllowBannerOverride : boolean;
    static get debugAllowBannerOverride() : boolean { 
        if (this.__$debugAllowBannerOverride===undefined) {
            this.__$debugAllowBannerOverride = true;
        }
        return this.__$debugAllowBannerOverride;
    }
    static set debugAllowBannerOverride(__$value : boolean)  { 
        this.__$debugAllowBannerOverride = __$value;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _WidgetsAppState {
        return _WidgetsAppState();
    }
}

export namespace _WidgetsAppState {
    export type Constructors = lib3.State.Constructors | '_WidgetsAppState';
    export type Interface = Omit<_WidgetsAppState, Constructors>;
}
@DartClass
@Implements(lib9.WidgetsBindingObserver)
export class _WidgetsAppState extends lib3.State<WidgetsApp> implements lib9.WidgetsBindingObserver.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._updateNavigator();
        this._locale = this._resolveLocales(lib9.properties.WidgetsBinding.instance.window.locales,this.widget.supportedLocales);
        lib9.properties.WidgetsBinding.instance.addObserver(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : WidgetsApp) : any {
        super.didUpdateWidget(oldWidget);
        if (this.widget.navigatorKey != oldWidget.navigatorKey) this._updateNavigator();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        lib9.properties.WidgetsBinding.instance.removeObserver(this);
        super.dispose();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeAppLifecycleState(state : any) : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didHaveMemoryPressure() : any {
    }
    _navigator : lib3.GlobalKey<lib5.NavigatorState>;

    _updateNavigator() : any {
        this._navigator = (this.widget.navigatorKey || lib3.GlobalObjectKey(this));
    }
    _onGenerateRoute(settings : lib5.RouteSettings) : lib5.Route<any> {
        let name : string = settings.name;
        let pageContentBuilder : (context : lib3.BuildContext) => lib3.Widget = name == lib5.Navigator.defaultRouteName && this.widget.home != null ? (context : lib3.BuildContext) =>  {
            return this.widget.home;
        } : this.widget.routes.get(name);
        if (pageContentBuilder != null) {
            /* TODO (AssertStatementImpl) : assert (widget.pageRouteBuilder != null, 'The default onGenerateRoute handler for WidgetsApp must have a ' 'pageRouteBuilder set if the home or routes properties are set.'); */;
            let route : lib5.Route<any> = this.widget.pageRouteBuilder(settings,pageContentBuilder);
            /* TODO (AssertStatementImpl) : assert (route != null, 'The pageRouteBuilder for WidgetsApp must return a valid non-null Route.'); */;
            return route;
        }
        if (this.widget.onGenerateRoute != null) return this.widget.onGenerateRoute(settings);
        return null;
    }
    _onUnknownRoute(settings : lib5.RouteSettings) : lib5.Route<any> {
        /* TODO (AssertStatementImpl) : assert (() {if (widget.onUnknownRoute == null) {throw FlutterError('Could not find a generator for route $settings in the $runtimeType.\n' 'Generators for routes are searched for in the following order:\n' ' 1. For the "/" route, the "home" property, if non-null, is used.\n' ' 2. Otherwise, the "routes" table is used, if it has an entry for ' 'the route.\n' ' 3. Otherwise, onGenerateRoute is called. It should return a ' 'non-null value for any valid route not handled by "home" and "routes".\n' ' 4. Finally if all else fails onUnknownRoute is called.\n' 'Unfortunately, onUnknownRoute was not set.');} return true;}()); */;
        let result : lib5.Route<any> = this.widget.onUnknownRoute(settings);
        /* TODO (AssertStatementImpl) : assert (() {if (result == null) {throw FlutterError('The onUnknownRoute callback returned null.\n' 'When the $runtimeType requested the route $settings from its ' 'onUnknownRoute callback, the callback returned null. Such callbacks ' 'must never return null.');} return true;}()); */;
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didPopRoute() : async.Future<boolean> { 
        return new async.Future.fromPromise(( async () =>  {
            /* TODO (AssertStatementImpl) : assert (mounted); */;
            let navigator : lib5.NavigatorState = ((t)=>(!!t)?t.currentState:null)(this._navigator);
            if (op(Op.EQUALS,navigator,null)) return false;
            return await navigator.maybePop();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didPushRoute(route : string) : async.Future<boolean> { 
        return new async.Future.fromPromise(( async () =>  {
            /* TODO (AssertStatementImpl) : assert (mounted); */;
            let navigator : lib5.NavigatorState = ((t)=>(!!t)?t.currentState:null)(this._navigator);
            if (op(Op.EQUALS,navigator,null)) return false;
            navigator.pushNamed(route);
            return true;
        } )());
    }

    _locale : any;

    _resolveLocales(preferredLocales : core.DartList<any>,supportedLocales : core.DartIterable<any>) : any {
        if (this.widget.localeListResolutionCallback != null) {
            let locale : any = this.widget.localeListResolutionCallback(preferredLocales,this.widget.supportedLocales);
            if (locale != null) return locale;
        }
        if (this.widget.localeResolutionCallback != null) {
            let locale : any = this.widget.localeResolutionCallback(preferredLocales != null && preferredLocales.isNotEmpty ? preferredLocales.first : null,this.widget.supportedLocales);
            if (locale != null) return locale;
        }
        return _WidgetsAppState.basicLocaleListResolution(preferredLocales,supportedLocales);
    }
    static basicLocaleListResolution(preferredLocales : core.DartList<any>,supportedLocales : core.DartIterable<any>) : any {
        if (preferredLocales == null || preferredLocales.isEmpty) {
            return supportedLocales.first;
        }
        let allSupportedLocales : core.DartMap<string,any> = core.DartHashMap();
        let languageAndCountryLocales : core.DartMap<string,any> = core.DartHashMap();
        let languageAndScriptLocales : core.DartMap<string,any> = core.DartHashMap();
        let languageLocales : core.DartMap<string,any> = core.DartHashMap();
        let countryLocales : core.DartMap<string,any> = core.DartHashMap();
        for(let locale of supportedLocales) {
            allSupportedLocales.set(`${locale.languageCode}_${locale.scriptCode}_${locale.countryCode}`,locale);
            languageAndScriptLocales.set(`${locale.languageCode}_${locale.scriptCode}`,locale);
            languageAndCountryLocales.set(`${locale.languageCode}_${locale.countryCode}`,locale);
            languageLocales.set(locale.languageCode,locale);
            countryLocales.set(locale.countryCode,locale);
        }
        let matchesLanguageCode : any;
        let matchesCountryCode : any;
        for(let localeIndex : number = 0; localeIndex < preferredLocales.length; localeIndex += 1){
            let userLocale : any = preferredLocales[localeIndex];
            if (allSupportedLocales.containsKey(`${userLocale.languageCode}_${userLocale.scriptCode}_${userLocale.countryCode}`)) {
                return userLocale;
            }
            if (userLocale.scriptCode != null) {
                let match : any = languageAndScriptLocales.get(`${userLocale.languageCode}_${userLocale.scriptCode}`);
                if (match != null) {
                    return match;
                }
            }
            if (userLocale.countryCode != null) {
                let match : any = languageAndCountryLocales.get(`${userLocale.languageCode}_${userLocale.countryCode}`);
                if (match != null) {
                    return match;
                }
            }
            if (matchesLanguageCode != null) {
                return matchesLanguageCode;
            }
            let match : any = languageLocales.get(userLocale.languageCode);
            if (match != null) {
                matchesLanguageCode = match;
                if (localeIndex == 0 && !(localeIndex + 1 < preferredLocales.length && op(Op.EQUALS,preferredLocales[localeIndex + 1].languageCode,userLocale.languageCode))) {
                    return matchesLanguageCode;
                }
            }
            if (op(Op.EQUALS,matchesCountryCode,null) && userLocale.countryCode != null) {
                match = countryLocales.get(userLocale.countryCode);
                if (match != null) {
                    matchesCountryCode = match;
                }
            }
        }
        let resolvedLocale : any = ((matchesLanguageCode || matchesCountryCode) || supportedLocales.first);
        return resolvedLocale;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeLocales(locales : core.DartList<any>) : any {
        let newLocale : any = this._resolveLocales(locales,this.widget.supportedLocales);
        if (newLocale != this._locale) {
            this.setState(() =>  {
                this._locale = newLocale;
            });
        }
    }
    get _localizationsDelegates() : core.DartIterable<lib8.LocalizationsDelegate<any>> { 
        return core.iter<lib8.LocalizationsDelegate<any>>(()=>(function*()  {
            if (this.widget.localizationsDelegates != null) yield* this.widget.localizationsDelegates;
            yield lib8.DefaultWidgetsLocalizations.delegate;
        }).call(this));
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeAccessibilityFeatures() : any {
        this.setState(() =>  {
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeMetrics() : any {
        this.setState(() =>  {
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeTextScaleFactor() : any {
        this.setState(() =>  {
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangePlatformBrightness() : any {
        this.setState(() =>  {
        });
    }
    _debugCheckLocalizations(appLocale : any) : boolean {
        /* TODO (AssertStatementImpl) : assert (() {final Set<Type> unsupportedTypes = _localizationsDelegates.map<Type>((LocalizationsDelegate<dynamic> delegate) => delegate.type).toSet(); for (LocalizationsDelegate<dynamic> delegate in _localizationsDelegates) {if (!unsupportedTypes.contains(delegate.type)) continue; if (delegate.isSupported(appLocale)) unsupportedTypes.remove(delegate.type);} if (unsupportedTypes.isEmpty) return true; if (listEquals(unsupportedTypes.map((Type type) => type.toString()).toList(), <String> ['CupertinoLocalizations'])) return true; final StringBuffer message = StringBuffer(); message.writeln('\u2550' * 8); message.writeln('Warning: This application\'s locale, $appLocale, is not supported by all of its\n' 'localization delegates.'); for (Type unsupportedType in unsupportedTypes) {if (unsupportedType.toString() == 'CupertinoLocalizations') continue; message.writeln('> A $unsupportedType delegate that supports the $appLocale locale was not found.');} message.writeln('See https://flutter.io/tutorials/internationalization/ for more\n' 'information about configuring an app\'s locale, supportedLocales,\n' 'and localizationsDelegates parameters.'); message.writeln('\u2550' * 8); debugPrint(message.toString()); return true;}()); */;
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let navigator : lib3.Widget;
        if (this._navigator != null) {
            navigator = lib5.Navigator({
                key : this._navigator,initialRoute : lib9.properties.WidgetsBinding.instance.window.defaultRouteName != lib5.Navigator.defaultRouteName ? lib9.properties.WidgetsBinding.instance.window.defaultRouteName : (this.widget.initialRoute || lib9.properties.WidgetsBinding.instance.window.defaultRouteName),onGenerateRoute : this._onGenerateRoute.bind(this),onUnknownRoute : this._onUnknownRoute.bind(this),observers : this.widget.navigatorObservers});
        }
        let result : lib3.Widget;
        if (this.widget.builder != null) {
            result = lib11.Builder({
                builder : (context : lib3.BuildContext) =>  {
                    return this.widget.builder(context,navigator);
                }});
        }else {
            /* TODO (AssertStatementImpl) : assert (navigator != null); */;
            result = navigator;
        }
        if (this.widget.textStyle != null) {
            result = lib12.DefaultTextStyle({
                style : this.widget.textStyle,child : result});
        }
        let performanceOverlay : lib13.PerformanceOverlay;
        if (this.widget.showPerformanceOverlay || WidgetsApp.showPerformanceOverlayOverride) {
            performanceOverlay = lib13.PerformanceOverlay.allEnabled({
                checkerboardRasterCacheImages : this.widget.checkerboardRasterCacheImages,checkerboardOffscreenLayers : this.widget.checkerboardOffscreenLayers});
        }else if (this.widget.checkerboardRasterCacheImages || this.widget.checkerboardOffscreenLayers) {
            performanceOverlay = lib13.PerformanceOverlay({
                checkerboardRasterCacheImages : this.widget.checkerboardRasterCacheImages,checkerboardOffscreenLayers : this.widget.checkerboardOffscreenLayers});
        }
        if (performanceOverlay != null) {
            result = lib11.Stack({
                children : new core.DartList.literal<lib3.Widget>(result,lib11.Positioned({
                    top : 0.0,left : 0.0,right : 0.0,child : performanceOverlay}))});
        }
        if (this.widget.showSemanticsDebugger) {
            result = lib14.SemanticsDebugger({
                child : result});
        }
        /* TODO (AssertStatementImpl) : assert (() {if (widget.debugShowWidgetInspector || WidgetsApp.debugShowWidgetInspectorOverride) {result = WidgetInspector(child: result, selectButtonBuilder: widget.inspectorSelectButtonBuilder);} if (widget.debugShowCheckedModeBanner && WidgetsApp.debugAllowBannerOverride) {result = CheckedModeBanner(child: result);} return true;}()); */;
        let title : lib3.Widget;
        if (this.widget.onGenerateTitle != null) {
            title = lib11.Builder({
                builder : (context : lib3.BuildContext) =>  {
                    let title : string = this.widget.onGenerateTitle(context);
                    /* TODO (AssertStatementImpl) : assert (title != null, 'onGenerateTitle must return a non-null String'); */;
                    return lib15.Title({
                        title : title,color : this.widget.color,child : result});
                }});
        }else {
            title = lib15.Title({
                title : this.widget.title,color : this.widget.color,child : result});
        }
        let appLocale : any = this.widget.locale != null ? this._resolveLocales(new core.DartList.literal<any>(this.widget.locale),this.widget.supportedLocales) : this._locale;
        /* TODO (AssertStatementImpl) : assert (_debugCheckLocalizations(appLocale)); */;
        return lib16.MediaQuery({
            data : lib16.MediaQueryData.fromWindow(lib9.properties.WidgetsBinding.instance.window),child : lib8.Localizations({
                locale : appLocale,delegates : this._localizationsDelegates.toList(),child : title})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _WidgetsAppState() {
    }
}

export class properties {
}
