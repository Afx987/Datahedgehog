/** Library asset:datahedgehog_monitor/lib/lib/cupertino/scrollbar.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/widgets/scrollbar";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_notification";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/widgets/notification_listener";

export namespace CupertinoScrollbar {
    export type Constructors = lib3.StatefulWidget.Constructors | 'CupertinoScrollbar';
    export type Interface = Omit<CupertinoScrollbar, Constructors>;
}
@DartClass
export class CupertinoScrollbar extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoScrollbar(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) {
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
    createState() : _CupertinoScrollbarState {
        return _CupertinoScrollbarState();
    }
}

export namespace _CupertinoScrollbarState {
    export type Constructors = '_CupertinoScrollbarState';
    export type Interface = Omit<_CupertinoScrollbarState, Constructors>;
}
@DartClass
@With(any)
export class _CupertinoScrollbarState extends any implements any.Interface {
    _painter : lib5.ScrollbarPainter;

    _textDirection : any;

    _fadeoutAnimationController : lib6.AnimationController;

    _fadeoutOpacityAnimation : lib7.Animation<double>;

    _fadeoutTimer : async.DartTimer;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._fadeoutAnimationController = lib6.AnimationController({
            vsync : this,duration : properties._kScrollbarFadeDuration});
        this._fadeoutOpacityAnimation = lib9.CurvedAnimation({
            parent : this._fadeoutAnimationController,curve : lib8.Curves.fastOutSlowIn});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        super.didChangeDependencies();
        this._textDirection = lib11.Directionality.of(lib10.properties.context);
        this._painter = this._buildCupertinoScrollbarPainter();
    }
    _buildCupertinoScrollbarPainter() : lib5.ScrollbarPainter {
        return lib5.ScrollbarPainter({
            color : properties._kScrollbarColor,textDirection : this._textDirection,thickness : properties._kScrollbarThickness,fadeoutOpacityAnimation : this._fadeoutOpacityAnimation,mainAxisMargin : properties._kScrollbarMainAxisMargin,crossAxisMargin : properties._kScrollbarCrossAxisMargin,radius : properties._kScrollbarRadius,minLength : properties._kScrollbarMinLength,minOverscrollLength : properties._kScrollbarMinOverscrollLength});
    }
    _handleScrollNotification(notification : lib12.ScrollNotification) : boolean {
        if (is(notification, lib12.ScrollUpdateNotification) || is(notification, lib12.OverscrollNotification)) {
            if (this._fadeoutAnimationController.status != lib7.AnimationStatus.forward) {
                this._fadeoutAnimationController.forward();
            }
            ((_525_)=>(!!_525_)?_525_.cancel():null)(this._fadeoutTimer);
            this._painter.update(notification.metrics,notification.metrics.axisDirection);
        }else if (is(notification, lib12.ScrollEndNotification)) {
            ((_526_)=>(!!_526_)?_526_.cancel():null)(this._fadeoutTimer);
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
        ((_527_)=>(!!_527_)?_527_.cancel():null)(this._fadeoutTimer);
        this._painter.dispose();
        super.dispose();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib13.NotificationListener({
            onNotification : this._handleScrollNotification.bind(this),child : lib11.RepaintBoundary({
                child : lib11.CustomPaint({
                    foregroundPainter : this._painter,child : lib11.RepaintBoundary({
                        child : widget.child})})})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoScrollbarState() {
    }
}

export class properties {
    private static __$_kScrollbarColor : any;
    static get _kScrollbarColor() : any { 
        if (this.__$_kScrollbarColor===undefined) {
            this.__$_kScrollbarColor = Color(2574743415);
        }
        return this.__$_kScrollbarColor;
    }
    static set _kScrollbarColor(__$value : any)  { 
        this.__$_kScrollbarColor = __$value;
    }

    private static __$_kScrollbarThickness : double;
    static get _kScrollbarThickness() : double { 
        if (this.__$_kScrollbarThickness===undefined) {
            this.__$_kScrollbarThickness = 2.5;
        }
        return this.__$_kScrollbarThickness;
    }
    static set _kScrollbarThickness(__$value : double)  { 
        this.__$_kScrollbarThickness = __$value;
    }

    private static __$_kScrollbarMainAxisMargin : double;
    static get _kScrollbarMainAxisMargin() : double { 
        if (this.__$_kScrollbarMainAxisMargin===undefined) {
            this.__$_kScrollbarMainAxisMargin = 4.0;
        }
        return this.__$_kScrollbarMainAxisMargin;
    }
    static set _kScrollbarMainAxisMargin(__$value : double)  { 
        this.__$_kScrollbarMainAxisMargin = __$value;
    }

    private static __$_kScrollbarCrossAxisMargin : double;
    static get _kScrollbarCrossAxisMargin() : double { 
        if (this.__$_kScrollbarCrossAxisMargin===undefined) {
            this.__$_kScrollbarCrossAxisMargin = 2.5;
        }
        return this.__$_kScrollbarCrossAxisMargin;
    }
    static set _kScrollbarCrossAxisMargin(__$value : double)  { 
        this.__$_kScrollbarCrossAxisMargin = __$value;
    }

    private static __$_kScrollbarMinLength : double;
    static get _kScrollbarMinLength() : double { 
        if (this.__$_kScrollbarMinLength===undefined) {
            this.__$_kScrollbarMinLength = 36.0;
        }
        return this.__$_kScrollbarMinLength;
    }
    static set _kScrollbarMinLength(__$value : double)  { 
        this.__$_kScrollbarMinLength = __$value;
    }

    private static __$_kScrollbarMinOverscrollLength : double;
    static get _kScrollbarMinOverscrollLength() : double { 
        if (this.__$_kScrollbarMinOverscrollLength===undefined) {
            this.__$_kScrollbarMinOverscrollLength = 8.0;
        }
        return this.__$_kScrollbarMinOverscrollLength;
    }
    static set _kScrollbarMinOverscrollLength(__$value : double)  { 
        this.__$_kScrollbarMinOverscrollLength = __$value;
    }

    private static __$_kScrollbarRadius : any;
    static get _kScrollbarRadius() : any { 
        if (this.__$_kScrollbarRadius===undefined) {
            this.__$_kScrollbarRadius = Radius.circular(1.25);
        }
        return this.__$_kScrollbarRadius;
    }
    static set _kScrollbarRadius(__$value : any)  { 
        this.__$_kScrollbarRadius = __$value;
    }

    private static __$_kScrollbarTimeToFade : core.DartDuration;
    static get _kScrollbarTimeToFade() : core.DartDuration { 
        if (this.__$_kScrollbarTimeToFade===undefined) {
            this.__$_kScrollbarTimeToFade = core.DartDuration({
                milliseconds : 50});
        }
        return this.__$_kScrollbarTimeToFade;
    }
    static set _kScrollbarTimeToFade(__$value : core.DartDuration)  { 
        this.__$_kScrollbarTimeToFade = __$value;
    }

    private static __$_kScrollbarFadeDuration : core.DartDuration;
    static get _kScrollbarFadeDuration() : core.DartDuration { 
        if (this.__$_kScrollbarFadeDuration===undefined) {
            this.__$_kScrollbarFadeDuration = core.DartDuration({
                milliseconds : 250});
        }
        return this.__$_kScrollbarFadeDuration;
    }
    static set _kScrollbarFadeDuration(__$value : core.DartDuration)  { 
        this.__$_kScrollbarFadeDuration = __$value;
    }

}
