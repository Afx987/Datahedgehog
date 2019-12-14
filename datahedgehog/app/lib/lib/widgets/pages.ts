/** Library asset:datahedgehog_monitor/lib/lib/widgets/pages.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./routes";
import * as lib4 from "./navigator";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib6 from "./framework";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/animation/animation";

export var _defaultTransitionsBuilder : (context : lib6.BuildContext,animation : lib7.Animation<double>,secondaryAnimation : lib7.Animation<double>,child : lib6.Widget) => lib6.Widget = (context : lib6.BuildContext,animation : lib7.Animation<double>,secondaryAnimation : lib7.Animation<double>,child : lib6.Widget) : lib6.Widget =>  {
    return child;
};
export namespace PageRoute {
    export type Constructors = lib3.ModalRoute.Constructors | 'PageRoute';
    export type Interface<T> = Omit<PageRoute<T>, Constructors>;
}
@DartClass
export class PageRoute<T> extends lib3.ModalRoute<T> {
    constructor(_namedArguments? : {settings? : lib4.RouteSettings,fullscreenDialog? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PageRoute(_namedArguments? : {settings? : lib4.RouteSettings,fullscreenDialog? : boolean}) {
        let {settings,fullscreenDialog} = Object.assign({
            "fullscreenDialog" : false}, _namedArguments );
        super.ModalRoute({
            settings : settings});
        this.fullscreenDialog = fullscreenDialog;
    }
    fullscreenDialog : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get opaque() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get barrierDismissible() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    canTransitionTo(nextRoute : lib3.TransitionRoute<any>) : boolean {
        return is(nextRoute, PageRoute<any>);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    canTransitionFrom(previousRoute : lib3.TransitionRoute<any>) : boolean {
        return is(previousRoute, PageRoute<any>);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createAnimationController() : lib5.AnimationController {
        let controller : lib5.AnimationController = super.createAnimationController();
        if (settings.isInitialRoute) controller.value = 1.0;
        return controller;
    }
}

export namespace PageRouteBuilder {
    export type Constructors = PageRoute.Constructors | 'PageRouteBuilder';
    export type Interface<T> = Omit<PageRouteBuilder<T>, Constructors>;
}
@DartClass
export class PageRouteBuilder<T> extends PageRoute<T> {
    constructor(_namedArguments? : {settings? : lib4.RouteSettings,pageBuilder? : (context : lib6.BuildContext,animation : lib7.Animation<double>,secondaryAnimation : lib7.Animation<double>) => lib6.Widget,transitionsBuilder? : (context : lib6.BuildContext,animation : lib7.Animation<double>,secondaryAnimation : lib7.Animation<double>,child : lib6.Widget) => lib6.Widget,transitionDuration? : core.DartDuration,opaque? : boolean,barrierDismissible? : boolean,barrierColor? : any,barrierLabel? : string,maintainState? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PageRouteBuilder(_namedArguments? : {settings? : lib4.RouteSettings,pageBuilder? : (context : lib6.BuildContext,animation : lib7.Animation<double>,secondaryAnimation : lib7.Animation<double>) => lib6.Widget,transitionsBuilder? : (context : lib6.BuildContext,animation : lib7.Animation<double>,secondaryAnimation : lib7.Animation<double>,child : lib6.Widget) => lib6.Widget,transitionDuration? : core.DartDuration,opaque? : boolean,barrierDismissible? : boolean,barrierColor? : any,barrierLabel? : string,maintainState? : boolean}) {
        let {settings,pageBuilder,transitionsBuilder,transitionDuration,opaque,barrierDismissible,barrierColor,barrierLabel,maintainState} = Object.assign({
            "transitionsBuilder" : _defaultTransitionsBuilder,
            "transitionDuration" : new core.DartDuration({
                milliseconds : 300}),
            "opaque" : true,
            "barrierDismissible" : false,
            "maintainState" : true}, _namedArguments );
        this.assert = assert;
        this.pageBuilder = pageBuilder;
        this.transitionsBuilder = transitionsBuilder;
        this.transitionDuration = transitionDuration;
        this.opaque = opaque;
        this.barrierDismissible = barrierDismissible;
        this.barrierColor = barrierColor;
        this.barrierLabel = barrierLabel;
        this.maintainState = maintainState;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    pageBuilder : (context : lib6.BuildContext,animation : lib7.Animation<double>,secondaryAnimation : lib7.Animation<double>) => lib6.Widget;

    transitionsBuilder : (context : lib6.BuildContext,animation : lib7.Animation<double>,secondaryAnimation : lib7.Animation<double>,child : lib6.Widget) => lib6.Widget;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    transitionDuration : core.DartDuration;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    opaque : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    barrierDismissible : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    barrierColor : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    barrierLabel : string;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    maintainState : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildPage(context : lib6.BuildContext,animation : lib7.Animation<double>,secondaryAnimation : lib7.Animation<double>) : lib6.Widget {
        return this.pageBuilder(context,animation,secondaryAnimation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildTransitions(context : lib6.BuildContext,animation : lib7.Animation<double>,secondaryAnimation : lib7.Animation<double>,child : lib6.Widget) : lib6.Widget {
        return this.transitionsBuilder(context,animation,secondaryAnimation,child);
    }
}

export class properties {
}
