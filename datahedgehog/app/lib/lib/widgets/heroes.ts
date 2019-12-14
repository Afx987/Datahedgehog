/** Library asset:datahedgehog_monitor/lib/lib/widgets/heroes.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/matrix_utils";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib9 from "./basic";
import * as lib10 from "./overlay";
import * as lib11 from "./pages";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/rendering/stack";
import * as lib15 from "./transitions";
import * as lib16 from "./navigator";
import * as lib17 from "./binding";

export var _globalBoundingBoxFor : (context : lib3.BuildContext) => any = (context : lib3.BuildContext) : any =>  {
    let box : any = context.findRenderObject();
    /* TODO (AssertStatementImpl) : assert (box != null && box.hasSize); */;
    return lib4.MatrixUtils.transformRect(box.getTransformTo(null),op(Op.BITAND,Offset.zero,box.size));
};
export enum HeroFlightDirection {
    push,
    pop
}

export namespace Hero {
    export type Constructors = lib3.StatefulWidget.Constructors | 'Hero';
    export type Interface = Omit<Hero, Constructors>;
}
@DartClass
export class Hero extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib5.Key,tag? : core.DartObject,createRectTween? : (begin : any,end : any) => lib6.Tween<any>,flightShuttleBuilder? : (flightContext : lib3.BuildContext,animation : lib7.Animation<double>,flightDirection : HeroFlightDirection,fromHeroContext : lib3.BuildContext,toHeroContext : lib3.BuildContext) => lib3.Widget,placeholderBuilder? : (context : lib3.BuildContext,child : lib3.Widget) => lib3.Widget,transitionOnUserGestures? : boolean,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Hero(_namedArguments? : {key? : lib5.Key,tag? : core.DartObject,createRectTween? : (begin : any,end : any) => lib6.Tween<any>,flightShuttleBuilder? : (flightContext : lib3.BuildContext,animation : lib7.Animation<double>,flightDirection : HeroFlightDirection,fromHeroContext : lib3.BuildContext,toHeroContext : lib3.BuildContext) => lib3.Widget,placeholderBuilder? : (context : lib3.BuildContext,child : lib3.Widget) => lib3.Widget,transitionOnUserGestures? : boolean,child? : lib3.Widget}) {
        let {key,tag,createRectTween,flightShuttleBuilder,placeholderBuilder,transitionOnUserGestures,child} = Object.assign({
            "transitionOnUserGestures" : false}, _namedArguments );
        this.assert = assert;
        this.tag = tag;
        this.createRectTween = createRectTween;
        this.flightShuttleBuilder = flightShuttleBuilder;
        this.placeholderBuilder = placeholderBuilder;
        this.transitionOnUserGestures = transitionOnUserGestures;
        this.child = child;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    tag : core.DartObject;

    createRectTween : (begin : any,end : any) => lib6.Tween<any>;

    child : lib3.Widget;

    flightShuttleBuilder : (flightContext : lib3.BuildContext,animation : lib7.Animation<double>,flightDirection : HeroFlightDirection,fromHeroContext : lib3.BuildContext,toHeroContext : lib3.BuildContext) => lib3.Widget;

    placeholderBuilder : (context : lib3.BuildContext,child : lib3.Widget) => lib3.Widget;

    transitionOnUserGestures : boolean;

    static _allHeroesFor(context : lib3.BuildContext,isUserGestureTransition : boolean) : core.DartMap<core.DartObject,_HeroState> {
        /* TODO (AssertStatementImpl) : assert (context != null); */;
        /* TODO (AssertStatementImpl) : assert (isUserGestureTransition != null); */;
        let result : core.DartMap<core.DartObject,_HeroState> = new core.DartMap.literal([
        ]);
        var visitor : (element : lib3.Element) => any = (element : lib3.Element) : any =>  {
            if (is(element.widget, Hero)) {
                let hero : lib3.StatefulElement = element;
                let heroWidget : Hero = element.widget;
                if (!isUserGestureTransition || heroWidget.transitionOnUserGestures) {
                    let tag : core.DartObject = heroWidget.tag;
                    /* TODO (AssertStatementImpl) : assert (tag != null); */;
                    /* TODO (AssertStatementImpl) : assert (() {if (result.containsKey(tag)) {throw FlutterError('There are multiple heroes that share the same tag within a subtree.\n' 'Within each subtree for which heroes are to be animated (typically a PageRoute subtree), ' 'each Hero must have a unique non-null tag.\n' 'In this case, multiple heroes had the following tag: $tag\n' 'Here is the subtree for one of the offending heroes:\n' '${element.toStringDeep(prefixLineOne: "# ")}');} return true;}()); */;
                    let heroState : _HeroState = hero.state;
                    result.set(tag,heroState);
                }
            }
            element.visitChildren(visitor);
        };
        context.visitChildElements(visitor);
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _HeroState {
        return _HeroState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib8.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib8.DiagnosticsProperty('tag',this.tag));
    }
}

export namespace _HeroState {
    export type Constructors = lib3.State.Constructors | '_HeroState';
    export type Interface = Omit<_HeroState, Constructors>;
}
@DartClass
export class _HeroState extends lib3.State<Hero> {
    _key : lib3.GlobalKey<any>;

    _placeholderSize : any;

    startFlight() : any {
        /* TODO (AssertStatementImpl) : assert (mounted); */;
        let box : any = this.context.findRenderObject();
        /* TODO (AssertStatementImpl) : assert (box != null && box.hasSize); */;
        this.setState(() =>  {
            this._placeholderSize = box.size;
        });
    }
    endFlight() : any {
        if (this.mounted) {
            this.setState(() =>  {
                this._placeholderSize = null;
            });
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        if (this._placeholderSize != null) {
            if (op(Op.EQUALS,this.widget.placeholderBuilder,null)) {
                return lib9.SizedBox({
                    width : this._placeholderSize.width,height : this._placeholderSize.height});
            }else {
                return this.widget.placeholderBuilder(context,this.widget.child);
            }
        }
        return lib9.KeyedSubtree({
            key : this._key,child : this.widget.child});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _HeroState() {
        this._key = lib3.GlobalKey();
    }
}

export namespace _HeroFlightManifest {
    export type Constructors = '_HeroFlightManifest';
    export type Interface = Omit<_HeroFlightManifest, Constructors>;
}
@DartClass
export class _HeroFlightManifest {
    constructor(_namedArguments? : {type? : HeroFlightDirection,overlay? : lib10.OverlayState,navigatorRect? : any,fromRoute? : lib11.PageRoute<any>,toRoute? : lib11.PageRoute<any>,fromHero? : _HeroState,toHero? : _HeroState,createRectTween? : (begin : any,end : any) => lib6.Tween<any>,shuttleBuilder? : (flightContext : lib3.BuildContext,animation : lib7.Animation<double>,flightDirection : HeroFlightDirection,fromHeroContext : lib3.BuildContext,toHeroContext : lib3.BuildContext) => lib3.Widget,isUserGestureTransition? : boolean}) {
    }
    @defaultConstructor
    _HeroFlightManifest(_namedArguments? : {type? : HeroFlightDirection,overlay? : lib10.OverlayState,navigatorRect? : any,fromRoute? : lib11.PageRoute<any>,toRoute? : lib11.PageRoute<any>,fromHero? : _HeroState,toHero? : _HeroState,createRectTween? : (begin : any,end : any) => lib6.Tween<any>,shuttleBuilder? : (flightContext : lib3.BuildContext,animation : lib7.Animation<double>,flightDirection : HeroFlightDirection,fromHeroContext : lib3.BuildContext,toHeroContext : lib3.BuildContext) => lib3.Widget,isUserGestureTransition? : boolean}) {
        let {type,overlay,navigatorRect,fromRoute,toRoute,fromHero,toHero,createRectTween,shuttleBuilder,isUserGestureTransition} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.type = type;
        this.overlay = overlay;
        this.navigatorRect = navigatorRect;
        this.fromRoute = fromRoute;
        this.toRoute = toRoute;
        this.fromHero = fromHero;
        this.toHero = toHero;
        this.createRectTween = createRectTween;
        this.shuttleBuilder = shuttleBuilder;
        this.isUserGestureTransition = isUserGestureTransition;
    }
     : any;

     : any;

     : any;

     : any;

    type : HeroFlightDirection;

    overlay : lib10.OverlayState;

    navigatorRect : any;

    fromRoute : lib11.PageRoute<any>;

    toRoute : lib11.PageRoute<any>;

    fromHero : _HeroState;

    toHero : _HeroState;

    createRectTween : (begin : any,end : any) => lib6.Tween<any>;

    shuttleBuilder : (flightContext : lib3.BuildContext,animation : lib7.Animation<double>,flightDirection : HeroFlightDirection,fromHeroContext : lib3.BuildContext,toHeroContext : lib3.BuildContext) => lib3.Widget;

    isUserGestureTransition : boolean;

    get tag() : core.DartObject {
        return this.fromHero.widget.tag;
    }
    get animation() : lib7.Animation<double> {
        return lib13.CurvedAnimation({
            parent : (op(Op.EQUALS,this.type,HeroFlightDirection.push)) ? this.toRoute.animation : this.fromRoute.animation,curve : lib12.Curves.fastOutSlowIn});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `_HeroFlightManifest(${this.type} tag: ${this.tag} from route: ${this.fromRoute.settings} ` + `to route: ${this.toRoute.settings} with hero: ${this.fromHero} to ${this.toHero})`;
    }
}

export namespace _HeroFlight {
    export type Constructors = '_HeroFlight';
    export type Interface = Omit<_HeroFlight, Constructors>;
}
@DartClass
export class _HeroFlight {
    constructor(onFlightEnded : (flight : _HeroFlight) => any) {
    }
    @defaultConstructor
    _HeroFlight(onFlightEnded : (flight : _HeroFlight) => any) {
        this._heroOpacity = lib13.properties.kAlwaysCompleteAnimation;
        this._aborted = false;
        this.onFlightEnded = onFlightEnded;
        this._proxyAnimation = ((_) : any =>  {
            {
                addStatusListener(this._handleAnimationUpdate.bind(this));
                return _;
            }
        })(lib13.ProxyAnimation());
    }
    onFlightEnded : (flight : _HeroFlight) => any;

    heroRectTween : lib6.Tween<any>;

    shuttle : lib3.Widget;

    _heroOpacity : lib7.Animation<double>;

    _proxyAnimation : lib13.ProxyAnimation;

    manifest : _HeroFlightManifest;

    overlayEntry : lib10.OverlayEntry;

    _aborted : boolean;

    _doCreateRectTween(begin : any,end : any) : lib6.Tween<any> {
        let createRectTween : (begin : any,end : any) => lib6.Tween<any> = (this.manifest.toHero.widget.createRectTween || this.manifest.createRectTween);
        if (createRectTween != null) return createRectTween(begin,end);
        return lib6.RectTween({
            begin : begin,end : end});
    }
    private static __$_reverseTween : lib6.Animatable<double>;
    static get _reverseTween() : lib6.Animatable<double> { 
        if (this.__$_reverseTween===undefined) {
            this.__$_reverseTween = lib6.Tween({
                begin : 1.0,end : 0.0});
        }
        return this.__$_reverseTween;
    }
    static set _reverseTween(__$value : lib6.Animatable<double>)  { 
        this.__$_reverseTween = __$value;
    }

    _buildOverlay(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (manifest != null); */;
        this.shuttle = ( this.shuttle ) || ( this.manifest.shuttleBuilder(context,this.manifest.animation,this.manifest.type,this.manifest.fromHero.context,this.manifest.toHero.context) );
        /* TODO (AssertStatementImpl) : assert (shuttle != null); */;
        return lib15.AnimatedBuilder({
            animation : this._proxyAnimation,child : this.shuttle,builder : (context : lib3.BuildContext,child : lib3.Widget) =>  {
                let toHeroBox : any = ((_898_)=>(!!_898_)?_898_.findRenderObject():null)(this.manifest.toHero.context);
                if (this._aborted || op(Op.EQUALS,toHeroBox,null) || !toHeroBox.attached) {
                    if (this._heroOpacity.isCompleted) {
                        this._heroOpacity = this._proxyAnimation.drive(_HeroFlight._reverseTween.chain(lib6.CurveTween({
                            curve : lib12.Interval(this._proxyAnimation.value,1.0)})));
                    }
                }else if (toHeroBox.hasSize) {
                    let finalRouteBox : any = ((_899_)=>(!!_899_)?_899_.findRenderObject():null)(this.manifest.toRoute.subtreeContext);
                    let toHeroOrigin : any = toHeroBox.localToGlobal(Offset.zero,{
                        ancestor : finalRouteBox});
                    if (toHeroOrigin != this.heroRectTween.end.topLeft) {
                        let heroRectEnd : any = op(Op.BITAND,toHeroOrigin,this.heroRectTween.end.size);
                        this.heroRectTween = this._doCreateRectTween(this.heroRectTween.begin,heroRectEnd);
                    }
                }
                let rect : any = this.heroRectTween.evaluate(this._proxyAnimation);
                let size : any = this.manifest.navigatorRect.size;
                let offsets : lib14.RelativeRect = lib14.RelativeRect.fromSize(rect,size);
                return lib9.Positioned({
                    top : offsets.top,right : offsets.right,bottom : offsets.bottom,left : offsets.left,child : lib9.IgnorePointer({
                        child : lib9.RepaintBoundary({
                            child : lib9.Opacity({
                                opacity : this._heroOpacity.value,child : child})})})});
            }});
    }
    _handleAnimationUpdate(status : lib7.AnimationStatus) : any {
        if (op(Op.EQUALS,status,lib7.AnimationStatus.completed) || op(Op.EQUALS,status,lib7.AnimationStatus.dismissed)) {
            this._proxyAnimation.parent = null;
            /* TODO (AssertStatementImpl) : assert (overlayEntry != null); */;
            this.overlayEntry.remove();
            this.overlayEntry = null;
            this.manifest.fromHero.endFlight();
            this.manifest.toHero.endFlight();
            this.onFlightEnded(this);
        }
    }
    start(initialManifest : _HeroFlightManifest) : any {
        /* TODO (AssertStatementImpl) : assert (!_aborted); */;
        /* TODO (AssertStatementImpl) : assert (() {final Animation<double> initial = initialManifest.animation; assert (initial != null); final HeroFlightDirection type = initialManifest.type; assert (type != null); switch (type) {case HeroFlightDirection.pop: return initial.value == 1.0 && initialManifest.isUserGestureTransition ? initial.status == AnimationStatus.completed : initial.status == AnimationStatus.reverse; case HeroFlightDirection.push: return initial.value == 0.0 && initial.status == AnimationStatus.forward;} return null;}()); */;
        this.manifest = initialManifest;
        if (op(Op.EQUALS,this.manifest.type,HeroFlightDirection.pop)) this._proxyAnimation.parent = lib13.ReverseAnimation(this.manifest.animation);else this._proxyAnimation.parent = this.manifest.animation;
        this.manifest.fromHero.startFlight();
        this.manifest.toHero.startFlight();
        this.heroRectTween = this._doCreateRectTween(_globalBoundingBoxFor(this.manifest.fromHero.context),_globalBoundingBoxFor(this.manifest.toHero.context));
        this.overlayEntry = lib10.OverlayEntry({
            builder : this._buildOverlay.bind(this)});
        this.manifest.overlay.insert(this.overlayEntry);
    }
    divert(newManifest : _HeroFlightManifest) : any {
        /* TODO (AssertStatementImpl) : assert (manifest.tag == newManifest.tag); */;
        if (op(Op.EQUALS,this.manifest.type,HeroFlightDirection.push) && op(Op.EQUALS,newManifest.type,HeroFlightDirection.pop)) {
            /* TODO (AssertStatementImpl) : assert (newManifest.animation.status == AnimationStatus.reverse); */;
            /* TODO (AssertStatementImpl) : assert (manifest.fromHero == newManifest.toHero); */;
            /* TODO (AssertStatementImpl) : assert (manifest.toHero == newManifest.fromHero); */;
            /* TODO (AssertStatementImpl) : assert (manifest.fromRoute == newManifest.toRoute); */;
            /* TODO (AssertStatementImpl) : assert (manifest.toRoute == newManifest.fromRoute); */;
            this._proxyAnimation.parent = lib13.ReverseAnimation(newManifest.animation);
            this.heroRectTween = lib6.ReverseTween(this.heroRectTween);
        }else if (op(Op.EQUALS,this.manifest.type,HeroFlightDirection.pop) && op(Op.EQUALS,newManifest.type,HeroFlightDirection.push)) {
            /* TODO (AssertStatementImpl) : assert (newManifest.animation.status == AnimationStatus.forward); */;
            /* TODO (AssertStatementImpl) : assert (manifest.toHero == newManifest.fromHero); */;
            /* TODO (AssertStatementImpl) : assert (manifest.toRoute == newManifest.fromRoute); */;
            this._proxyAnimation.parent = newManifest.animation.drive(lib6.Tween({
                begin : this.manifest.animation.value,end : 1.0}));
            if (this.manifest.fromHero != newManifest.toHero) {
                this.manifest.fromHero.endFlight();
                newManifest.toHero.startFlight();
                this.heroRectTween = this._doCreateRectTween(this.heroRectTween.end,_globalBoundingBoxFor(newManifest.toHero.context));
            }else {
                this.heroRectTween = this._doCreateRectTween(this.heroRectTween.end,this.heroRectTween.begin);
            }
        }else {
            /* TODO (AssertStatementImpl) : assert (manifest.fromHero != newManifest.fromHero); */;
            /* TODO (AssertStatementImpl) : assert (manifest.toHero != newManifest.toHero); */;
            this.heroRectTween = this._doCreateRectTween(this.heroRectTween.evaluate(this._proxyAnimation),_globalBoundingBoxFor(newManifest.toHero.context));
            this.shuttle = null;
            if (op(Op.EQUALS,newManifest.type,HeroFlightDirection.pop)) this._proxyAnimation.parent = lib13.ReverseAnimation(newManifest.animation);else this._proxyAnimation.parent = newManifest.animation;
            this.manifest.fromHero.endFlight();
            this.manifest.toHero.endFlight();
            newManifest.fromHero.startFlight();
            newManifest.toHero.startFlight();
            this.overlayEntry.markNeedsBuild();
        }
        this._aborted = false;
        this.manifest = newManifest;
    }
    abort() : any {
        this._aborted = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let from : lib16.RouteSettings = this.manifest.fromRoute.settings;
        let to : lib16.RouteSettings = this.manifest.toRoute.settings;
        let tag : core.DartObject = this.manifest.tag;
        return `HeroFlight(for: ${tag}, from: ${from}, to: ${to} ${this._proxyAnimation.parent})`;
    }
}

export namespace HeroController {
    export type Constructors = lib16.NavigatorObserver.Constructors | 'HeroController';
    export type Interface = Omit<HeroController, Constructors>;
}
@DartClass
export class HeroController extends lib16.NavigatorObserver {
    constructor(_namedArguments? : {createRectTween? : (begin : any,end : any) => lib6.Tween<any>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    HeroController(_namedArguments? : {createRectTween? : (begin : any,end : any) => lib6.Tween<any>}) {
        let {createRectTween} = Object.assign({
        }, _namedArguments );
        this._flights = new core.DartMap.literal([
        ]);
        this.createRectTween = createRectTween;
    }
    createRectTween : (begin : any,end : any) => lib6.Tween<any>;

    _flights : core.DartMap<core.DartObject,_HeroFlight>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didPush(route : lib16.Route<any>,previousRoute : lib16.Route<any>) : any {
        /* TODO (AssertStatementImpl) : assert (navigator != null); */;
        /* TODO (AssertStatementImpl) : assert (route != null); */;
        this._maybeStartHeroTransition(previousRoute,route,HeroFlightDirection.push,false);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didPop(route : lib16.Route<any>,previousRoute : lib16.Route<any>) : any {
        /* TODO (AssertStatementImpl) : assert (navigator != null); */;
        /* TODO (AssertStatementImpl) : assert (route != null); */;
        this._maybeStartHeroTransition(route,previousRoute,HeroFlightDirection.pop,false);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didStartUserGesture(route : lib16.Route<any>,previousRoute : lib16.Route<any>) : any {
        /* TODO (AssertStatementImpl) : assert (navigator != null); */;
        /* TODO (AssertStatementImpl) : assert (route != null); */;
        this._maybeStartHeroTransition(route,previousRoute,HeroFlightDirection.pop,true);
    }
    _maybeStartHeroTransition(fromRoute : lib16.Route<any>,toRoute : lib16.Route<any>,flightType : HeroFlightDirection,isUserGestureTransition : boolean) : any {
        if (toRoute != fromRoute && is(toRoute, lib11.PageRoute<any>) && is(fromRoute, lib11.PageRoute<any>)) {
            let from : lib11.PageRoute<any> = fromRoute;
            let to : lib11.PageRoute<any> = toRoute;
            let animation : lib7.Animation<double> = (op(Op.EQUALS,flightType,HeroFlightDirection.push)) ? to.animation : from.animation;
            switch (flightType) {
                case HeroFlightDirection.pop:
                    if (animation.value == 0.0) {
                        return;
                    }
                    break;
                case HeroFlightDirection.push:
                    if (animation.value == 1.0) {
                        return;
                    }
                    break;
            }
            if (isUserGestureTransition && op(Op.EQUALS,flightType,HeroFlightDirection.pop) && to.maintainState) {
                this._startHeroTransition(from,to,animation,flightType,isUserGestureTransition);
            }else {
                to.offstage = to.animation.value == 0.0;
                lib17.properties.WidgetsBinding.instance.addPostFrameCallback((value : core.DartDuration) =>  {
                    this._startHeroTransition(from,to,animation,flightType,isUserGestureTransition);
                });
            }
        }
    }
    _startHeroTransition(from : lib11.PageRoute<any>,to : lib11.PageRoute<any>,animation : lib7.Animation<double>,flightType : HeroFlightDirection,isUserGestureTransition : boolean) : any {
        if (op(Op.EQUALS,this.navigator,null) || op(Op.EQUALS,from.subtreeContext,null) || op(Op.EQUALS,to.subtreeContext,null)) {
            to.offstage = false;
            return;
        }
        let navigatorRect : any = _globalBoundingBoxFor(this.navigator.context);
        let fromHeroes : core.DartMap<core.DartObject,_HeroState> = Hero._allHeroesFor(from.subtreeContext,isUserGestureTransition);
        let toHeroes : core.DartMap<core.DartObject,_HeroState> = Hero._allHeroesFor(to.subtreeContext,isUserGestureTransition);
        to.offstage = false;
        for(let tag of fromHeroes.keys) {
            if (toHeroes.get(tag) != null) {
                let fromShuttleBuilder : (flightContext : lib3.BuildContext,animation : lib7.Animation<double>,flightDirection : HeroFlightDirection,fromHeroContext : lib3.BuildContext,toHeroContext : lib3.BuildContext) => lib3.Widget = fromHeroes.get(tag).widget.flightShuttleBuilder;
                let toShuttleBuilder : (flightContext : lib3.BuildContext,animation : lib7.Animation<double>,flightDirection : HeroFlightDirection,fromHeroContext : lib3.BuildContext,toHeroContext : lib3.BuildContext) => lib3.Widget = toHeroes.get(tag).widget.flightShuttleBuilder;
                let manifest : _HeroFlightManifest = _HeroFlightManifest({
                    type : flightType,overlay : this.navigator.overlay,navigatorRect : navigatorRect,fromRoute : from,toRoute : to,fromHero : fromHeroes.get(tag),toHero : toHeroes.get(tag),createRectTween : this.createRectTween,shuttleBuilder : ((toShuttleBuilder || fromShuttleBuilder) || HeroController._defaultHeroFlightShuttleBuilder),isUserGestureTransition : isUserGestureTransition});
                if (this._flights.get(tag) != null) this._flights.get(tag).divert(manifest);else this._flights.set(tag,((_) : any =>  {
                    {
                        start(manifest);
                        return _;
                    }
                })(_HeroFlight(this._handleFlightEnded.bind(this))));
            }else if (this._flights.get(tag) != null) {
                this._flights.get(tag).abort();
            }
        }
    }
    _handleFlightEnded(flight : _HeroFlight) : any {
        this._flights.remove(flight.manifest.tag);
    }
    private static __$_defaultHeroFlightShuttleBuilder : (flightContext : lib3.BuildContext,animation : lib7.Animation<double>,flightDirection : HeroFlightDirection,fromHeroContext : lib3.BuildContext,toHeroContext : lib3.BuildContext) => lib3.Widget;
    static get _defaultHeroFlightShuttleBuilder() : (flightContext : lib3.BuildContext,animation : lib7.Animation<double>,flightDirection : HeroFlightDirection,fromHeroContext : lib3.BuildContext,toHeroContext : lib3.BuildContext) => lib3.Widget { 
        if (this.__$_defaultHeroFlightShuttleBuilder===undefined) {
            this.__$_defaultHeroFlightShuttleBuilder = (flightContext : lib3.BuildContext,animation : lib7.Animation<double>,flightDirection : HeroFlightDirection,fromHeroContext : lib3.BuildContext,toHeroContext : lib3.BuildContext) =>  {
                let toHero : Hero = toHeroContext.widget;
                return toHero.child;
            };
        }
        return this.__$_defaultHeroFlightShuttleBuilder;
    }
    static set _defaultHeroFlightShuttleBuilder(__$value : (flightContext : lib3.BuildContext,animation : lib7.Animation<double>,flightDirection : HeroFlightDirection,fromHeroContext : lib3.BuildContext,toHeroContext : lib3.BuildContext) => lib3.Widget)  { 
        this.__$_defaultHeroFlightShuttleBuilder = __$value;
    }

}

export class properties {
}
