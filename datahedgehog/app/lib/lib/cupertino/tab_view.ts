/** Library asset:datahedgehog_monitor/lib/lib/cupertino/tab_view.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/widgets/navigator";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/heroes";
import * as lib7 from "./app";
import * as lib8 from "./route";

export namespace CupertinoTabView {
    export type Constructors = lib3.StatefulWidget.Constructors | 'CupertinoTabView';
    export type Interface = Omit<CupertinoTabView, Constructors>;
}
@DartClass
export class CupertinoTabView extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,builder? : (context : lib3.BuildContext) => lib3.Widget,navigatorKey? : lib3.GlobalKey<lib5.NavigatorState>,defaultTitle? : string,routes? : core.DartMap<string,(context : lib3.BuildContext) => lib3.Widget>,onGenerateRoute? : (settings : lib5.RouteSettings) => lib5.Route<any>,onUnknownRoute? : (settings : lib5.RouteSettings) => lib5.Route<any>,navigatorObservers? : core.DartList<lib5.NavigatorObserver>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoTabView(_namedArguments? : {key? : lib4.Key,builder? : (context : lib3.BuildContext) => lib3.Widget,navigatorKey? : lib3.GlobalKey<lib5.NavigatorState>,defaultTitle? : string,routes? : core.DartMap<string,(context : lib3.BuildContext) => lib3.Widget>,onGenerateRoute? : (settings : lib5.RouteSettings) => lib5.Route<any>,onUnknownRoute? : (settings : lib5.RouteSettings) => lib5.Route<any>,navigatorObservers? : core.DartList<lib5.NavigatorObserver>}) {
        let {key,builder,navigatorKey,defaultTitle,routes,onGenerateRoute,onUnknownRoute,navigatorObservers} = Object.assign({
            "navigatorObservers" : new core.DartList.literal<lib5.NavigatorObserver>()}, _namedArguments );
        this.assert = assert;
        this.builder = builder;
        this.navigatorKey = navigatorKey;
        this.defaultTitle = defaultTitle;
        this.routes = routes;
        this.onGenerateRoute = onGenerateRoute;
        this.onUnknownRoute = onUnknownRoute;
        this.navigatorObservers = navigatorObservers;
    }
     : any;

     : any;

     : any;

    builder : (context : lib3.BuildContext) => lib3.Widget;

    navigatorKey : lib3.GlobalKey<lib5.NavigatorState>;

    defaultTitle : string;

    routes : core.DartMap<string,(context : lib3.BuildContext) => lib3.Widget>;

    onGenerateRoute : (settings : lib5.RouteSettings) => lib5.Route<any>;

    onUnknownRoute : (settings : lib5.RouteSettings) => lib5.Route<any>;

    navigatorObservers : core.DartList<lib5.NavigatorObserver>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _CupertinoTabViewState {
        return _CupertinoTabViewState();
    }
}

export namespace _CupertinoTabViewState {
    export type Constructors = '_CupertinoTabViewState';
    export type Interface = Omit<_CupertinoTabViewState, Constructors>;
}
@DartClass
export class _CupertinoTabViewState extends any {
    _heroController : lib6.HeroController;

    _navigatorObservers : core.DartList<lib5.NavigatorObserver>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._heroController = lib7.CupertinoApp.createCupertinoHeroController();
        this._updateObservers();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : CupertinoTabView) : any {
        super.didUpdateWidget(oldWidget);
        if (widget.navigatorKey != oldWidget.navigatorKey || widget.navigatorObservers != oldWidget.navigatorObservers) {
            this._updateObservers();
        }
    }
    _updateObservers() : any {
        this._navigatorObservers = op(Op.LT,core.DartList<E>,lib5.NavigatorObserver);
        ((_) : any =>  {
            {
                add(this._heroController);
                return _;
            }
        })(op(Op.GT,,.from(widget.navigatorObservers)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib5.Navigator({
            key : widget.navigatorKey,onGenerateRoute : this._onGenerateRoute.bind(this),onUnknownRoute : this._onUnknownRoute.bind(this),observers : this._navigatorObservers});
    }
    _onGenerateRoute(settings : lib5.RouteSettings) : any {
        let name : string = settings.name;
        let routeBuilder : (context : lib3.BuildContext) => lib3.Widget;
        let title : string;
        if (name == lib5.Navigator.defaultRouteName && widget.builder != null) {
            routeBuilder = widget.builder;
            title = widget.defaultTitle;
        }else if (widget.routes != null) routeBuilder = op(Op.INDEX,widget.routes,name);
        if (routeBuilder != null) {
            return lib8.CupertinoPageRoute({
                builder : routeBuilder,title : title,settings : settings});
        }
        if (widget.onGenerateRoute != null) return widget.onGenerateRoute(settings);
        return null;
    }
    _onUnknownRoute(settings : lib5.RouteSettings) : any {
        /* TODO (AssertStatementImpl) : assert (() {if (widget.onUnknownRoute == null) {throw FlutterError('Could not find a generator for route $settings in the $runtimeType.\n' 'Generators for routes are searched for in the following order:\n' ' 1. For the "/" route, the "builder" property, if non-null, is used.\n' ' 2. Otherwise, the "routes" table is used, if it has an entry for ' 'the route.\n' ' 3. Otherwise, onGenerateRoute is called. It should return a ' 'non-null value for any valid route not handled by "builder" and "routes".\n' ' 4. Finally if all else fails onUnknownRoute is called.\n' 'Unfortunately, onUnknownRoute was not set.');} return true;}()); */;
        let result : any = widget.onUnknownRoute(settings);
        /* TODO (AssertStatementImpl) : assert (() {if (result == null) {throw FlutterError('The onUnknownRoute callback returned null.\n' 'When the $runtimeType requested the route $settings from its ' 'onUnknownRoute callback, the callback returned null. Such callbacks ' 'must never return null.');} return true;}()); */;
        return result;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoTabViewState() {
    }
}

export class properties {
}
