/** Library asset:datahedgehog_monitor/lib/lib/material/page.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/pages";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/widgets/navigator";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/routes";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/cupertino/route";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib10 from "./theme";
import * as lib11 from "./page_transitions_theme";

export namespace MaterialPageRoute {
    export type Constructors = lib3.PageRoute.Constructors | 'MaterialPageRoute';
    export type Interface<T> = Omit<MaterialPageRoute<T>, Constructors>;
}
@DartClass
export class MaterialPageRoute<T> extends lib3.PageRoute<T> {
    constructor(_namedArguments? : {builder? : (context : lib4.BuildContext) => lib4.Widget,settings? : lib5.RouteSettings,maintainState? : boolean,fullscreenDialog? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MaterialPageRoute(_namedArguments? : {builder? : (context : lib4.BuildContext) => lib4.Widget,settings? : lib5.RouteSettings,maintainState? : boolean,fullscreenDialog? : boolean}) {
        let {builder,settings,maintainState,fullscreenDialog} = Object.assign({
            "maintainState" : true,
            "fullscreenDialog" : false}, _namedArguments );
        this.assert = assert;
        this.builder = builder;
        this.maintainState = maintainState;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    settings;
    fullscreenDialog;

     : any;

    builder : (context : lib4.BuildContext) => lib4.Widget;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    maintainState : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get transitionDuration() : core.DartDuration {
        return new core.DartDuration({
            milliseconds : 300});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get barrierColor() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get barrierLabel() : string {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    canTransitionFrom(previousRoute : lib6.TransitionRoute<any>) : boolean {
        return is(previousRoute, MaterialPageRoute<any>) || is(previousRoute, lib7.CupertinoPageRoute<any>);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    canTransitionTo(nextRoute : lib6.TransitionRoute<any>) : boolean {
        return (is(nextRoute, MaterialPageRoute<any>) && !nextRoute.fullscreenDialog) || (is(nextRoute, lib7.CupertinoPageRoute<any>) && !nextRoute.fullscreenDialog);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildPage(context : lib4.BuildContext,animation : lib8.Animation<double>,secondaryAnimation : lib8.Animation<double>) : lib4.Widget {
        let result : lib4.Widget = this.builder(context);
        /* TODO (AssertStatementImpl) : assert (() {if (result == null) {throw FlutterError('The builder for route "${settings.name}" returned null.\n' 'Route builders must never return null.');} return true;}()); */;
        return lib9.Semantics({
            scopesRoute : true,explicitChildNodes : true,child : result});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildTransitions(context : lib4.BuildContext,animation : lib8.Animation<double>,secondaryAnimation : lib8.Animation<double>,child : lib4.Widget) : lib4.Widget {
        let theme : lib11.PageTransitionsTheme = lib10.Theme.of(context).pageTransitionsTheme;
        return theme.buildTransitions(this,context,animation,secondaryAnimation,child);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get debugLabel() : string {
        return `${super.debugLabel}(${this.settings.name})`;
    }
}

export class properties {
}
