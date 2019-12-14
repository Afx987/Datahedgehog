/** Library asset:datahedgehog_monitor/lib/lib/material/scrollbar.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/widgets/scrollbar";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib12 from "./theme";
import * as lib13 from "./theme_data";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_notification";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/cupertino/scrollbar";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/widgets/notification_listener";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/widgets/widget_inspector";

export namespace Scrollbar {
    export type Constructors = lib3.StatefulWidget.Constructors | 'Scrollbar';
    export type Interface = Omit<Scrollbar, Constructors>;
}
@DartClass
export class Scrollbar extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Scrollbar(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        super.StatefulWidget({
            key : key});
        this.child = child;
    }
    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _ScrollbarState {
        return _ScrollbarState();
    }
}

export namespace _ScrollbarState {
    export type Constructors = '_ScrollbarState';
    export type Interface = Omit<_ScrollbarState, Constructors>;
}
@DartClass
@With(any)
export class _ScrollbarState extends any implements any.Interface {
    _materialPainter : lib5.ScrollbarPainter;

    _currentPlatform : lib6.TargetPlatform;

    _textDirection : any;

    _themeColor : any;

    _fadeoutAnimationController : lib7.AnimationController;

    _fadeoutOpacityAnimation : lib8.Animation<double>;

    _fadeoutTimer : async.DartTimer;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._fadeoutAnimationController = lib7.AnimationController({
            vsync : this,duration : properties._kScrollbarFadeDuration});
        this._fadeoutOpacityAnimation = lib10.CurvedAnimation({
            parent : this._fadeoutAnimationController,curve : lib9.Curves.fastOutSlowIn});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        super.didChangeDependencies();
        let theme : lib13.ThemeData = lib12.Theme.of(lib11.properties.context);
        this._currentPlatform = theme.platform;
        switch (this._currentPlatform) {
            case lib6.TargetPlatform.iOS:
                ((_746_)=>(!!_746_)?_746_.cancel():null)(this._fadeoutTimer);
                this._fadeoutTimer = null;
                this._fadeoutAnimationController.reset();
                break;
            case lib6.TargetPlatform.android:
            case lib6.TargetPlatform.fuchsia:
                this._themeColor = theme.highlightColor.withOpacity(1.0);
                this._textDirection = lib14.Directionality.of(lib11.properties.context);
                this._materialPainter = this._buildMaterialScrollbarPainter();
                break;
        }
    }
    _buildMaterialScrollbarPainter() : lib5.ScrollbarPainter {
        return lib5.ScrollbarPainter({
            color : this._themeColor,textDirection : this._textDirection,thickness : properties._kScrollbarThickness,fadeoutOpacityAnimation : this._fadeoutOpacityAnimation});
    }
    _handleScrollNotification(notification : lib15.ScrollNotification) : boolean {
        if (this._currentPlatform != lib6.TargetPlatform.iOS && (is(notification, lib15.ScrollUpdateNotification) || is(notification, lib15.OverscrollNotification))) {
            if (this._fadeoutAnimationController.status != lib8.AnimationStatus.forward) {
                this._fadeoutAnimationController.forward();
            }
            this._materialPainter.update(notification.metrics,notification.metrics.axisDirection);
            ((_747_)=>(!!_747_)?_747_.cancel():null)(this._fadeoutTimer);
            this._fadeoutTimer = async.DartTimer(properties._kScrollbarTimeToFade,() =>  {
                this._fadeoutAnimationController.reverse();
                this._fadeoutTimer = null;
            });
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._fadeoutAnimationController.dispose();
        ((_748_)=>(!!_748_)?_748_.cancel():null)(this._fadeoutTimer);
        ((_749_)=>(!!_749_)?_749_.dispose():null)(this._materialPainter);
        super.dispose();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        switch (this._currentPlatform) {
            case lib6.TargetPlatform.iOS:
                return lib16.CupertinoScrollbar({
                    child : widget.child});
            case lib6.TargetPlatform.android:
            case lib6.TargetPlatform.fuchsia:
                return lib17.NotificationListener({
                    onNotification : this._handleScrollNotification.bind(this),child : lib14.RepaintBoundary({
                        child : lib14.CustomPaint({
                            foregroundPainter : this._materialPainter,child : lib14.RepaintBoundary({
                                child : widget.child})})})});
        }
        throw lib18.FlutterError('Unknown platform for scrollbar insertion');
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ScrollbarState() {
    }
}

export class properties {
    private static __$_kScrollbarThickness : double;
    static get _kScrollbarThickness() : double { 
        if (this.__$_kScrollbarThickness===undefined) {
            this.__$_kScrollbarThickness = 6.0;
        }
        return this.__$_kScrollbarThickness;
    }
    static set _kScrollbarThickness(__$value : double)  { 
        this.__$_kScrollbarThickness = __$value;
    }

    private static __$_kScrollbarFadeDuration : core.DartDuration;
    static get _kScrollbarFadeDuration() : core.DartDuration { 
        if (this.__$_kScrollbarFadeDuration===undefined) {
            this.__$_kScrollbarFadeDuration = core.DartDuration({
                milliseconds : 300});
        }
        return this.__$_kScrollbarFadeDuration;
    }
    static set _kScrollbarFadeDuration(__$value : core.DartDuration)  { 
        this.__$_kScrollbarFadeDuration = __$value;
    }

    private static __$_kScrollbarTimeToFade : core.DartDuration;
    static get _kScrollbarTimeToFade() : core.DartDuration { 
        if (this.__$_kScrollbarTimeToFade===undefined) {
            this.__$_kScrollbarTimeToFade = core.DartDuration({
                milliseconds : 600});
        }
        return this.__$_kScrollbarTimeToFade;
    }
    static set _kScrollbarTimeToFade(__$value : core.DartDuration)  { 
        this.__$_kScrollbarTimeToFade = __$value;
    }

}
