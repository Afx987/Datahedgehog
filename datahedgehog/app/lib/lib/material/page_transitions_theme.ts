/** Library asset:datahedgehog_monitor/lib/lib/material/page_transitions_theme.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/widgets/transitions";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib11 from "./colors";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/widgets/layout_builder";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/widgets/pages";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/cupertino/route";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib20 from "./theme";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/foundation/collections";

export namespace _FadeUpwardsPageTransition {
    export type Constructors = lib3.StatelessWidget.Constructors | '_FadeUpwardsPageTransition';
    export type Interface = Omit<_FadeUpwardsPageTransition, Constructors>;
}
@DartClass
export class _FadeUpwardsPageTransition extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,routeAnimation? : lib5.Animation<double>,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FadeUpwardsPageTransition(_namedArguments? : {key? : lib4.Key,routeAnimation? : lib5.Animation<double>,child? : lib3.Widget}) {
        let {key,routeAnimation,child} = Object.assign({
        }, _namedArguments );
        this._positionAnimation = routeAnimation.drive(_FadeUpwardsPageTransition._bottomUpTween.chain(_FadeUpwardsPageTransition._fastOutSlowInTween));
        this._opacityAnimation = routeAnimation.drive(_FadeUpwardsPageTransition._easeInTween);
        super.StatelessWidget({
            key : key});
        this.child = child;
    }
    private static __$_bottomUpTween : lib6.Tween<any>;
    static get _bottomUpTween() : lib6.Tween<any> { 
        if (this.__$_bottomUpTween===undefined) {
            this.__$_bottomUpTween = lib6.Tween({
                begin : new bare.createInstance(any,null,0.0,0.25),end : Offset.zero});
        }
        return this.__$_bottomUpTween;
    }
    static set _bottomUpTween(__$value : lib6.Tween<any>)  { 
        this.__$_bottomUpTween = __$value;
    }

    private static __$_fastOutSlowInTween : lib6.Animatable<double>;
    static get _fastOutSlowInTween() : lib6.Animatable<double> { 
        if (this.__$_fastOutSlowInTween===undefined) {
            this.__$_fastOutSlowInTween = lib6.CurveTween({
                curve : lib7.Curves.fastOutSlowIn});
        }
        return this.__$_fastOutSlowInTween;
    }
    static set _fastOutSlowInTween(__$value : lib6.Animatable<double>)  { 
        this.__$_fastOutSlowInTween = __$value;
    }

    private static __$_easeInTween : lib6.Animatable<double>;
    static get _easeInTween() : lib6.Animatable<double> { 
        if (this.__$_easeInTween===undefined) {
            this.__$_easeInTween = lib6.CurveTween({
                curve : lib7.Curves.easeIn});
        }
        return this.__$_easeInTween;
    }
    static set _easeInTween(__$value : lib6.Animatable<double>)  { 
        this.__$_easeInTween = __$value;
    }

    _positionAnimation : lib5.Animation<any>;

    _opacityAnimation : lib5.Animation<double>;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib8.SlideTransition({
            position : this._positionAnimation,child : lib8.FadeTransition({
                opacity : this._opacityAnimation,child : this.child})});
    }
}

export namespace _OpenUpwardsPageTransition {
    export type Constructors = lib3.StatelessWidget.Constructors | '_OpenUpwardsPageTransition';
    export type Interface = Omit<_OpenUpwardsPageTransition, Constructors>;
}
@DartClass
export class _OpenUpwardsPageTransition extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,animation? : lib5.Animation<double>,secondaryAnimation? : lib5.Animation<double>,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _OpenUpwardsPageTransition(_namedArguments? : {key? : lib4.Key,animation? : lib5.Animation<double>,secondaryAnimation? : lib5.Animation<double>,child? : lib3.Widget}) {
        let {key,animation,secondaryAnimation,child} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.animation = animation;
        this.secondaryAnimation = secondaryAnimation;
        this.child = child;
    }
    private static __$_primaryTranslationTween : lib6.Tween<any>;
    static get _primaryTranslationTween() : lib6.Tween<any> { 
        if (this.__$_primaryTranslationTween===undefined) {
            this.__$_primaryTranslationTween = lib6.Tween({
                begin : new bare.createInstance(any,null,0.0,0.05),end : Offset.zero});
        }
        return this.__$_primaryTranslationTween;
    }
    static set _primaryTranslationTween(__$value : lib6.Tween<any>)  { 
        this.__$_primaryTranslationTween = __$value;
    }

    private static __$_secondaryTranslationTween : lib6.Tween<any>;
    static get _secondaryTranslationTween() : lib6.Tween<any> { 
        if (this.__$_secondaryTranslationTween===undefined) {
            this.__$_secondaryTranslationTween = lib6.Tween({
                begin : Offset.zero,end : new bare.createInstance(any,null,0.0,-0.025)});
        }
        return this.__$_secondaryTranslationTween;
    }
    static set _secondaryTranslationTween(__$value : lib6.Tween<any>)  { 
        this.__$_secondaryTranslationTween = __$value;
    }

    private static __$_scrimOpacityTween : lib6.Tween<double>;
    static get _scrimOpacityTween() : lib6.Tween<double> { 
        if (this.__$_scrimOpacityTween===undefined) {
            this.__$_scrimOpacityTween = lib6.Tween({
                begin : 0.0,end : 0.25});
        }
        return this.__$_scrimOpacityTween;
    }
    static set _scrimOpacityTween(__$value : lib6.Tween<double>)  { 
        this.__$_scrimOpacityTween = __$value;
    }

    private static __$_transitionCurve : lib7.Curve;
    static get _transitionCurve() : lib7.Curve { 
        if (this.__$_transitionCurve===undefined) {
            this.__$_transitionCurve = lib7.Cubic(0.2,0.0,0.0,1.0);
        }
        return this.__$_transitionCurve;
    }

    animation : lib5.Animation<double>;

    secondaryAnimation : lib5.Animation<double>;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib15.LayoutBuilder({
            builder : (context : lib3.BuildContext,constraints : lib9.BoxConstraints) =>  {
                let size : any = constraints.biggest;
                let primaryAnimation : lib10.CurvedAnimation = lib10.CurvedAnimation({
                    parent : this.animation,curve : _OpenUpwardsPageTransition._transitionCurve,reverseCurve : _OpenUpwardsPageTransition._transitionCurve.flipped});
                let clipAnimation : lib5.Animation<double> = lib6.Tween({
                    begin : 0.0,end : size.height}).animate(primaryAnimation);
                let opacityAnimation : lib5.Animation<double> = _OpenUpwardsPageTransition._scrimOpacityTween.animate(primaryAnimation);
                let primaryTranslationAnimation : lib5.Animation<any> = _OpenUpwardsPageTransition._primaryTranslationTween.animate(primaryAnimation);
                let secondaryTranslationAnimation : lib5.Animation<any> = _OpenUpwardsPageTransition._secondaryTranslationTween.animate(lib10.CurvedAnimation({
                    parent : this.secondaryAnimation,curve : _OpenUpwardsPageTransition._transitionCurve,reverseCurve : _OpenUpwardsPageTransition._transitionCurve.flipped}));
                return lib8.AnimatedBuilder({
                    animation : this.animation,builder : (context : lib3.BuildContext,child : lib3.Widget) =>  {
                        return lib14.Container({
                            color : lib11.Colors.black.withOpacity(opacityAnimation.value),alignment : lib12.Alignment.bottomLeft,child : lib13.ClipRect({
                                child : lib13.SizedBox({
                                    height : clipAnimation.value,child : lib13.OverflowBox({
                                        alignment : lib12.Alignment.bottomLeft,maxHeight : size.height,child : child})})})});
                    },child : lib8.AnimatedBuilder({
                        animation : this.secondaryAnimation,child : lib13.FractionalTranslation({
                            translation : primaryTranslationAnimation.value,child : this.child}),builder : (context : lib3.BuildContext,child : lib3.Widget) =>  {
                            return lib13.FractionalTranslation({
                                translation : secondaryTranslationAnimation.value,child : child});
                        }})});
            }});
    }
}

export namespace PageTransitionsBuilder {
    export type Constructors = 'PageTransitionsBuilder';
    export type Interface = Omit<PageTransitionsBuilder, Constructors>;
}
@DartClass
export class PageTransitionsBuilder {
    constructor() {
    }
    @defaultConstructor
    PageTransitionsBuilder() {
    }
    @Abstract
    buildTransitions<T>(route : lib16.PageRoute<T>,context : lib3.BuildContext,animation : lib5.Animation<double>,secondaryAnimation : lib5.Animation<double>,child : lib3.Widget) : lib3.Widget{ throw 'abstract'}
}

export namespace PageTransitionsTheme {
    export type Constructors = lib18.Diagnosticable.Constructors | 'PageTransitionsTheme';
    export type Interface = Omit<PageTransitionsTheme, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class PageTransitionsTheme extends lib18.Diagnosticable {
    constructor(_namedArguments? : {builders? : core.DartMap<lib19.TargetPlatform,PageTransitionsBuilder>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PageTransitionsTheme(_namedArguments? : {builders? : core.DartMap<lib19.TargetPlatform,PageTransitionsBuilder>}) {
        let {builders} = Object.assign({
        }, _namedArguments );
        this._builders = builders;
    }
    private static __$_defaultBuilders : core.DartMap<lib19.TargetPlatform,PageTransitionsBuilder>;
    static get _defaultBuilders() : core.DartMap<lib19.TargetPlatform,PageTransitionsBuilder> { 
        if (this.__$_defaultBuilders===undefined) {
            this.__$_defaultBuilders = new core.DartMap.literal([
                [lib19.TargetPlatform.android,FadeUpwardsPageTransitionsBuilder()],
                [lib19.TargetPlatform.iOS,CupertinoPageTransitionsBuilder()]]);
        }
        return this.__$_defaultBuilders;
    }

    get builders() : core.DartMap<lib19.TargetPlatform,PageTransitionsBuilder> {
        return (this._builders || PageTransitionsTheme._defaultBuilders);
    }
    _builders : core.DartMap<lib19.TargetPlatform,PageTransitionsBuilder>;

    buildTransitions<T>(route : lib16.PageRoute<T>,context : lib3.BuildContext,animation : lib5.Animation<double>,secondaryAnimation : lib5.Animation<double>,child : lib3.Widget) : lib3.Widget {
        let platform : lib19.TargetPlatform = lib20.Theme.of(context).platform;
        if (lib17.CupertinoPageRoute.isPopGestureInProgress(route)) platform = lib19.TargetPlatform.iOS;
        let matchingBuilder : PageTransitionsBuilder = (this.builders.get(platform) || new FadeUpwardsPageTransitionsBuilder());
        return matchingBuilder.buildTransitions(route,context,animation,secondaryAnimation,child);
    }
    _all(builders : core.DartMap<lib19.TargetPlatform,PageTransitionsBuilder>) : core.DartList<PageTransitionsBuilder> {
        return lib19.TargetPlatform.values.map((platform : lib19.TargetPlatform) =>  {
            return builders.get(platform);
        }).toList();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : PageTransitionsTheme = other;
        if (core.identical(this.builders,other.builders)) return true;
        return lib21.listEquals(this._all(this.builders),this._all(typedOther.builders));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashList(this._all(this.builders));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib18.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib18.DiagnosticsProperty('builders',this.builders,{
            defaultValue : PageTransitionsTheme._defaultBuilders}));
    }
}

export namespace FadeUpwardsPageTransitionsBuilder {
    export type Constructors = PageTransitionsBuilder.Constructors | 'FadeUpwardsPageTransitionsBuilder';
    export type Interface = Omit<FadeUpwardsPageTransitionsBuilder, Constructors>;
}
@DartClass
export class FadeUpwardsPageTransitionsBuilder extends PageTransitionsBuilder {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FadeUpwardsPageTransitionsBuilder() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildTransitions<T>(route : lib16.PageRoute<T>,context : lib3.BuildContext,animation : lib5.Animation<double>,secondaryAnimation : lib5.Animation<double>,child : lib3.Widget) : lib3.Widget {
        return _FadeUpwardsPageTransition({
            routeAnimation : animation,child : child});
    }
}

export namespace OpenUpwardsPageTransitionsBuilder {
    export type Constructors = PageTransitionsBuilder.Constructors | 'OpenUpwardsPageTransitionsBuilder';
    export type Interface = Omit<OpenUpwardsPageTransitionsBuilder, Constructors>;
}
@DartClass
export class OpenUpwardsPageTransitionsBuilder extends PageTransitionsBuilder {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OpenUpwardsPageTransitionsBuilder() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildTransitions<T>(route : lib16.PageRoute<T>,context : lib3.BuildContext,animation : lib5.Animation<double>,secondaryAnimation : lib5.Animation<double>,child : lib3.Widget) : lib3.Widget {
        return _OpenUpwardsPageTransition({
            animation : animation,secondaryAnimation : secondaryAnimation,child : child});
    }
}

export namespace CupertinoPageTransitionsBuilder {
    export type Constructors = PageTransitionsBuilder.Constructors | 'CupertinoPageTransitionsBuilder';
    export type Interface = Omit<CupertinoPageTransitionsBuilder, Constructors>;
}
@DartClass
export class CupertinoPageTransitionsBuilder extends PageTransitionsBuilder {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoPageTransitionsBuilder() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildTransitions<T>(route : lib16.PageRoute<T>,context : lib3.BuildContext,animation : lib5.Animation<double>,secondaryAnimation : lib5.Animation<double>,child : lib3.Widget) : lib3.Widget {
        return lib17.CupertinoPageRoute.buildPageTransitions(route,context,animation,secondaryAnimation,child);
    }
}

export class properties {
}
