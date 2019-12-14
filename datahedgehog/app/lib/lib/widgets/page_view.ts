/** Library asset:datahedgehog_monitor/lib/lib/widgets/page_view.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./scroll_controller";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib5 from "./scroll_physics";
import * as lib6 from "./scroll_context";
import * as lib7 from "./scroll_position";
import * as lib8 from "./scroll_metrics";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as math from "@dart2ts/dart/math";
import * as lib11 from "./scroll_position_with_single_context";
import * as lib12 from "./page_storage";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/physics/tolerance";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/physics/spring_simulation";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/physics/simulation";
import * as lib16 from "./framework";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/gestures/recognizer";
import * as lib19 from "./sliver";
import * as lib20 from "./basic";
import * as lib21 from "./scroll_notification";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/rendering/viewport_offset";
import * as lib23 from "./viewport";
import * as lib24 from "./scrollable";
import * as lib25 from "./notification_listener";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export namespace PageController {
    export type Constructors = lib3.ScrollController.Constructors | 'PageController';
    export type Interface = Omit<PageController, Constructors>;
}
@DartClass
export class PageController extends lib3.ScrollController {
    constructor(_namedArguments? : {initialPage? : number,keepPage? : boolean,viewportFraction? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PageController(_namedArguments? : {initialPage? : number,keepPage? : boolean,viewportFraction? : double}) {
        let {initialPage,keepPage,viewportFraction} = Object.assign({
            "initialPage" : 0,
            "keepPage" : true,
            "viewportFraction" : 1.0}, _namedArguments );
        this.assert = assert;
        this.initialPage = initialPage;
        this.keepPage = keepPage;
        this.viewportFraction = viewportFraction;
    }
     : any;

     : any;

     : any;

     : any;

    initialPage : number;

    keepPage : boolean;

    viewportFraction : double;

    get page() : double {
        /* TODO (AssertStatementImpl) : assert (positions.isNotEmpty, 'PageController.page cannot be accessed before a PageView is built with it.'); */;
        ;
        /* TODO (AssertStatementImpl) : assert (positions.length == 1, 'The page property cannot be read when multiple PageViews are attached to ' 'the same PageController.'); */;
        ;
        let position : _PagePosition = this.position;
        return position.page;
    }
    void : async.Future<any>;

    animateToPage(page : number,_namedArguments? : {duration? : core.DartDuration,curve? : lib4.Curve}) {
        let {duration,curve} = Object.assign({
        }, _namedArguments );
        let position : _PagePosition = this.position;
        return position.animateTo(position.getPixelsFromPage(new core.DartInt(page).toDouble()),{
            duration : duration,curve : curve});
    }
    jumpToPage(page : number) : any {
        let position : _PagePosition = this.position;
        position.jumpTo(position.getPixelsFromPage(new core.DartInt(page).toDouble()));
    }
    void : async.Future<any>;

    nextPage(_namedArguments? : {duration? : core.DartDuration,curve? : lib4.Curve}) {
        let {duration,curve} = Object.assign({
        }, _namedArguments );
        return this.animateToPage(new core.DartDouble(this.page).round() + 1,{
            duration : duration,curve : curve});
    }
    void : async.Future<any>;

    previousPage(_namedArguments? : {duration? : core.DartDuration,curve? : lib4.Curve}) {
        let {duration,curve} = Object.assign({
        }, _namedArguments );
        return this.animateToPage(new core.DartDouble(this.page).round() - 1,{
            duration : duration,curve : curve});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createScrollPosition(physics : lib5.ScrollPhysics,context : lib6.ScrollContext,oldPosition : lib7.ScrollPosition) : lib7.ScrollPosition {
        return _PagePosition({
            physics : physics,context : context,initialPage : this.initialPage,keepPage : this.keepPage,viewportFraction : this.viewportFraction,oldPosition : oldPosition});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    attach(position : lib7.ScrollPosition) : any {
        super.attach(position);
        let pagePosition : _PagePosition = position;
        pagePosition.viewportFraction = this.viewportFraction;
    }
}

export namespace PageMetrics {
    export type Constructors = lib8.FixedScrollMetrics.Constructors | 'PageMetrics';
    export type Interface = Omit<PageMetrics, Constructors>;
}
@DartClass
export class PageMetrics extends lib8.FixedScrollMetrics {
    constructor(_namedArguments? : {minScrollExtent? : double,maxScrollExtent? : double,pixels? : double,viewportDimension? : double,axisDirection? : lib9.AxisDirection,viewportFraction? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PageMetrics(_namedArguments? : {minScrollExtent? : double,maxScrollExtent? : double,pixels? : double,viewportDimension? : double,axisDirection? : lib9.AxisDirection,viewportFraction? : double}) {
        let {minScrollExtent,maxScrollExtent,pixels,viewportDimension,axisDirection,viewportFraction} = Object.assign({
        }, _namedArguments );
        super.FixedScrollMetrics({
            minScrollExtent : minScrollExtent,maxScrollExtent : maxScrollExtent,pixels : pixels,viewportDimension : viewportDimension,axisDirection : axisDirection});
        this.viewportFraction = viewportFraction;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copyWith(_namedArguments? : {minScrollExtent? : double,maxScrollExtent? : double,pixels? : double,viewportDimension? : double,axisDirection? : lib9.AxisDirection,viewportFraction? : double}) : PageMetrics {
        let {minScrollExtent,maxScrollExtent,pixels,viewportDimension,axisDirection,viewportFraction} = Object.assign({
        }, _namedArguments );
        return PageMetrics({
            minScrollExtent : (minScrollExtent || this.minScrollExtent),maxScrollExtent : (maxScrollExtent || this.maxScrollExtent),pixels : (pixels || this.pixels),viewportDimension : (viewportDimension || this.viewportDimension),axisDirection : (axisDirection || this.axisDirection),viewportFraction : (viewportFraction || this.viewportFraction)});
    }
    get page() : double {
        return op(Op.DIVIDE,math.max(0.0,new core.DartDouble(lib7.properties.pixels).clamp(lib7.properties.minScrollExtent,lib7.properties.maxScrollExtent)),math.max(1.0,lib7.properties.viewportDimension * this.viewportFraction));
    }
    viewportFraction : double;

}

export namespace _PagePosition {
    export type Constructors = lib11.ScrollPositionWithSingleContext.Constructors | '_PagePosition';
    export type Interface = Omit<_PagePosition, Constructors>;
}
@DartClass
@Implements(PageMetrics)
export class _PagePosition extends lib11.ScrollPositionWithSingleContext implements PageMetrics.Interface {
    constructor(_namedArguments? : {physics? : lib5.ScrollPhysics,context? : lib6.ScrollContext,initialPage? : number,keepPage? : boolean,viewportFraction? : double,oldPosition? : lib7.ScrollPosition}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _PagePosition(_namedArguments? : {physics? : lib5.ScrollPhysics,context? : lib6.ScrollContext,initialPage? : number,keepPage? : boolean,viewportFraction? : double,oldPosition? : lib7.ScrollPosition}) {
        let {physics,context,initialPage,keepPage,viewportFraction,oldPosition} = Object.assign({
            "initialPage" : 0,
            "keepPage" : true,
            "viewportFraction" : 1.0}, _namedArguments );
        this._viewportFraction = this.viewportFraction;
        this._pageToUseOnStartup = new core.DartInt(this.initialPage).toDouble();
        this.assert = assert;
        this.initialPage = initialPage;
    }
     : any;

     : any;

     : any;

     : any;

    _viewportFraction;
    _pageToUseOnStartup;
    super;

     : any;

    physics;
    context;

    context;
    initialPixels;

     : any;

    keepPage;
    oldPosition;

    oldPosition;
    ;

    initialPage : number;

    _pageToUseOnStartup : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get viewportFraction() : double {
        return this._viewportFraction;
    }
    _viewportFraction : double;

    set viewportFraction(value : double) {
        if (op(Op.EQUALS,this._viewportFraction,value)) return;
        let oldPage : double = this.page;
        this._viewportFraction = value;
        if (oldPage != null) lib7.forcePixels(this.getPixelsFromPage(oldPage));
    }
    getPageFromPixels(pixels : double,viewportDimension : double) : double {
        return op(Op.DIVIDE,math.max(0.0,pixels),math.max(1.0,viewportDimension * this.viewportFraction));
    }
    getPixelsFromPage(page : double) : double {
        return page * lib7.properties.viewportDimension * this.viewportFraction;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get page() : double {
        return lib7.properties.pixels == null ? null : this.getPageFromPixels(new core.DartDouble(lib7.properties.pixels).clamp(lib7.properties.minScrollExtent,lib7.properties.maxScrollExtent),lib7.properties.viewportDimension);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    saveScrollOffset() : any {
        ((_936_)=>(!!_936_)?_936_.writeState(this.context.storageContext,this.getPageFromPixels(lib7.properties.pixels,lib7.properties.viewportDimension)):null)(lib12.PageStorage.of(this.context.storageContext));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    restoreScrollOffset() : any {
        if (lib7.properties.pixels == null) {
            let value : double = ((_937_)=>(!!_937_)?_937_.readState(this.context.storageContext):null)(lib12.PageStorage.of(this.context.storageContext));
            if (value != null) this._pageToUseOnStartup = value;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyViewportDimension(viewportDimension : double) : boolean {
        let oldViewportDimensions : double = this.viewportDimension;
        let result : boolean = super.applyViewportDimension(viewportDimension);
        let oldPixels : double = lib7.properties.pixels;
        let page : double = (oldPixels == null || oldViewportDimensions == 0.0) ? this._pageToUseOnStartup : this.getPageFromPixels(oldPixels,oldViewportDimensions);
        let newPixels : double = this.getPixelsFromPage(page);
        if (newPixels != oldPixels) {
            lib7.correctPixels(newPixels);
            return false;
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copyWith(_namedArguments? : {minScrollExtent? : double,maxScrollExtent? : double,pixels? : double,viewportDimension? : double,axisDirection? : lib9.AxisDirection,viewportFraction? : double}) : PageMetrics {
        let {minScrollExtent,maxScrollExtent,pixels,viewportDimension,axisDirection,viewportFraction} = Object.assign({
        }, _namedArguments );
        return PageMetrics({
            minScrollExtent : (minScrollExtent || this.minScrollExtent),maxScrollExtent : (maxScrollExtent || this.maxScrollExtent),pixels : (pixels || this.pixels),viewportDimension : (viewportDimension || this.viewportDimension),axisDirection : (axisDirection || this.axisDirection),viewportFraction : (viewportFraction || this.viewportFraction)});
    }
}

export namespace PageScrollPhysics {
    export type Constructors = lib5.ScrollPhysics.Constructors | 'PageScrollPhysics';
    export type Interface = Omit<PageScrollPhysics, Constructors>;
}
@DartClass
export class PageScrollPhysics extends lib5.ScrollPhysics {
    constructor(_namedArguments? : {parent? : lib5.ScrollPhysics}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PageScrollPhysics(_namedArguments? : {parent? : lib5.ScrollPhysics}) {
        let {parent} = Object.assign({
        }, _namedArguments );
        super.ScrollPhysics({
            parent : parent});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyTo(ancestor : lib5.ScrollPhysics) : PageScrollPhysics {
        return PageScrollPhysics({
            parent : this.buildParent(ancestor)});
    }
    _getPage(position : lib7.ScrollPosition) : double {
        if (is(position, _PagePosition)) return position.page;
        return position.pixels / position.viewportDimension;
    }
    _getPixels(position : lib7.ScrollPosition,page : double) : double {
        if (is(position, _PagePosition)) return position.getPixelsFromPage(page);
        return page * position.viewportDimension;
    }
    _getTargetPixels(position : lib7.ScrollPosition,tolerance : lib13.Tolerance,velocity : double) : double {
        let page : double = this._getPage(position);
        if (velocity < -tolerance.velocity) page -= 0.5;else if (velocity > tolerance.velocity) page += 0.5;
        return this._getPixels(position,new core.DartDouble(page).roundToDouble());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createBallisticSimulation(position : lib8.ScrollMetrics,velocity : double) : lib15.Simulation {
        if ((velocity <= 0.0 && position.pixels <= position.minScrollExtent) || (velocity >= 0.0 && position.pixels >= position.maxScrollExtent)) return super.createBallisticSimulation(position,velocity);
        let tolerance : lib13.Tolerance = this.tolerance;
        let target : double = this._getTargetPixels(position,tolerance,velocity);
        if (target != position.pixels) return lib14.ScrollSpringSimulation(this.spring,position.pixels,target,velocity,{
            tolerance : tolerance});
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get allowImplicitScrolling() : boolean {
        return false;
    }
}

export namespace PageView {
    export type Constructors = lib16.StatefulWidget.Constructors | 'PageView' | 'builder' | 'custom';
    export type Interface = Omit<PageView, Constructors>;
}
@DartClass
export class PageView extends lib16.StatefulWidget {
    constructor(_namedArguments? : {key? : lib17.Key,scrollDirection? : lib9.Axis,reverse? : boolean,controller? : PageController,physics? : lib5.ScrollPhysics,pageSnapping? : boolean,onPageChanged? : <T>(value : number) => void,children? : core.DartList<lib16.Widget>,dragStartBehavior? : lib18.DragStartBehavior}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PageView(_namedArguments? : {key? : lib17.Key,scrollDirection? : lib9.Axis,reverse? : boolean,controller? : PageController,physics? : lib5.ScrollPhysics,pageSnapping? : boolean,onPageChanged? : <T>(value : number) => void,children? : core.DartList<lib16.Widget>,dragStartBehavior? : lib18.DragStartBehavior}) {
        let {key,scrollDirection,reverse,controller,physics,pageSnapping,onPageChanged,children,dragStartBehavior} = Object.assign({
            "scrollDirection" : lib9.Axis.horizontal,
            "reverse" : false,
            "pageSnapping" : true,
            "children" : new core.DartList.literal<lib16.Widget>(),
            "dragStartBehavior" : lib18.DragStartBehavior.down}, _namedArguments );
        this.controller = (this.controller || properties._defaultPageController);
        this.controller = (controller || properties._defaultPageController);
        this.childrenDelegate = lib19.SliverChildListDelegate(children);
        super.StatefulWidget({
            key : key});
        this.scrollDirection = scrollDirection;
        this.reverse = reverse;
        this.physics = physics;
        this.pageSnapping = pageSnapping;
        this.onPageChanged = onPageChanged;
        this.dragStartBehavior = dragStartBehavior;
    }
    @namedConstructor
    builder(_namedArguments? : {key? : lib17.Key,scrollDirection? : lib9.Axis,reverse? : boolean,controller? : PageController,physics? : lib5.ScrollPhysics,pageSnapping? : boolean,onPageChanged? : <T>(value : number) => void,itemBuilder? : (context : lib16.BuildContext,index : number) => lib16.Widget,itemCount? : number,dragStartBehavior? : lib18.DragStartBehavior}) {
        let {key,scrollDirection,reverse,controller,physics,pageSnapping,onPageChanged,itemBuilder,itemCount,dragStartBehavior} = Object.assign({
            "scrollDirection" : lib9.Axis.horizontal,
            "reverse" : false,
            "pageSnapping" : true,
            "dragStartBehavior" : lib18.DragStartBehavior.down}, _namedArguments );
        this.controller = (this.controller || properties._defaultPageController);
        this.controller = (controller || properties._defaultPageController);
        this.childrenDelegate = lib19.SliverChildBuilderDelegate(itemBuilder,{
            childCount : itemCount});
        super.StatefulWidget({
            key : key});
        this.scrollDirection = scrollDirection;
        this.reverse = reverse;
        this.physics = physics;
        this.pageSnapping = pageSnapping;
        this.onPageChanged = onPageChanged;
        this.dragStartBehavior = dragStartBehavior;
    }
    static builder : new(_namedArguments? : {key? : lib17.Key,scrollDirection? : lib9.Axis,reverse? : boolean,controller? : PageController,physics? : lib5.ScrollPhysics,pageSnapping? : boolean,onPageChanged? : <T>(value : number) => void,itemBuilder? : (context : lib16.BuildContext,index : number) => lib16.Widget,itemCount? : number,dragStartBehavior? : lib18.DragStartBehavior}) => PageView;

    @namedConstructor
    custom(_namedArguments? : {key? : lib17.Key,scrollDirection? : lib9.Axis,reverse? : boolean,controller? : PageController,physics? : lib5.ScrollPhysics,pageSnapping? : boolean,onPageChanged? : <T>(value : number) => void,childrenDelegate? : lib19.SliverChildDelegate,dragStartBehavior? : lib18.DragStartBehavior}) {
        let {key,scrollDirection,reverse,controller,physics,pageSnapping,onPageChanged,childrenDelegate,dragStartBehavior} = Object.assign({
            "scrollDirection" : lib9.Axis.horizontal,
            "reverse" : false,
            "pageSnapping" : true,
            "dragStartBehavior" : lib18.DragStartBehavior.down}, _namedArguments );
        this.controller = (this.controller || properties._defaultPageController);
        this.assert = assert;
        this.scrollDirection = scrollDirection;
        this.reverse = reverse;
        this.physics = physics;
        this.pageSnapping = pageSnapping;
        this.onPageChanged = onPageChanged;
        this.childrenDelegate = childrenDelegate;
        this.dragStartBehavior = dragStartBehavior;
    }
    static custom : new(_namedArguments? : {key? : lib17.Key,scrollDirection? : lib9.Axis,reverse? : boolean,controller? : PageController,physics? : lib5.ScrollPhysics,pageSnapping? : boolean,onPageChanged? : <T>(value : number) => void,childrenDelegate? : lib19.SliverChildDelegate,dragStartBehavior? : lib18.DragStartBehavior}) => PageView;

     : any;

    controller;
    super;

     : any;

     : any;

    scrollDirection : lib9.Axis;

    reverse : boolean;

    controller : PageController;

    physics : lib5.ScrollPhysics;

    pageSnapping : boolean;

    onPageChanged : <T>(value : number) => void;

    childrenDelegate : lib19.SliverChildDelegate;

    dragStartBehavior : lib18.DragStartBehavior;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _PageViewState {
        return _PageViewState();
    }
}

export namespace _PageViewState {
    export type Constructors = lib16.State.Constructors | '_PageViewState';
    export type Interface = Omit<_PageViewState, Constructors>;
}
@DartClass
export class _PageViewState extends lib16.State<PageView> {
    _lastReportedPage : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._lastReportedPage = this.widget.controller.initialPage;
    }
    _getDirection(context : lib16.BuildContext) : lib9.AxisDirection {
        switch (this.widget.scrollDirection) {
            case lib9.Axis.horizontal:
                /* TODO (AssertStatementImpl) : assert (debugCheckHasDirectionality(context)); */;
                let textDirection : any = lib20.Directionality.of(context);
                let axisDirection : lib9.AxisDirection = lib9.textDirectionToAxisDirection(textDirection);
                return this.widget.reverse ? lib9.flipAxisDirection(axisDirection) : axisDirection;
            case lib9.Axis.vertical:
                return this.widget.reverse ? lib9.AxisDirection.up : lib9.AxisDirection.down;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib16.BuildContext) : lib16.Widget {
        let axisDirection : lib9.AxisDirection = this._getDirection(context);
        let physics : lib5.ScrollPhysics = this.widget.pageSnapping ? properties._kPagePhysics.applyTo(this.widget.physics) : this.widget.physics;
        return lib25.NotificationListener({
            onNotification : (notification : lib21.ScrollNotification) =>  {
                if (op(Op.EQUALS,notification.depth,0) && this.widget.onPageChanged != null && is(notification, lib21.ScrollUpdateNotification)) {
                    let metrics : PageMetrics = notification.metrics;
                    let currentPage : number = new core.DartDouble(metrics.page).round();
                    if (currentPage != this._lastReportedPage) {
                        this._lastReportedPage = currentPage;
                        this.widget.onPageChanged(currentPage);
                    }
                }
                return false;
            },child : lib24.Scrollable({
                dragStartBehavior : this.widget.dragStartBehavior,axisDirection : axisDirection,controller : this.widget.controller,physics : physics,viewportBuilder : (context : lib16.BuildContext,position : lib22.ViewportOffset) =>  {
                    return lib23.Viewport({
                        cacheExtent : 0.0,axisDirection : axisDirection,offset : position,slivers : new core.DartList.literal<lib16.Widget>(lib19.SliverFillViewport({
                            viewportFraction : this.widget.controller.viewportFraction,delegate : this.widget.childrenDelegate}))});
                }})});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(description : lib26.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(description);
        description.add(lib26.EnumProperty('scrollDirection',this.widget.scrollDirection));
        description.add(lib26.FlagProperty('reverse',{
            value : this.widget.reverse,ifTrue : 'reversed'}));
        description.add(lib26.DiagnosticsProperty('controller',this.widget.controller,{
            showName : false}));
        description.add(lib26.DiagnosticsProperty('physics',this.widget.physics,{
            showName : false}));
        description.add(lib26.FlagProperty('pageSnapping',{
            value : this.widget.pageSnapping,ifFalse : 'snapping disabled'}));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _PageViewState() {
        this._lastReportedPage = 0;
    }
}

export class properties {
    private static __$_defaultPageController : PageController;
    static get _defaultPageController() : PageController { 
        if (this.__$_defaultPageController===undefined) {
            this.__$_defaultPageController = PageController();
        }
        return this.__$_defaultPageController;
    }
    static set _defaultPageController(__$value : PageController)  { 
        this.__$_defaultPageController = __$value;
    }

    private static __$_kPagePhysics : PageScrollPhysics;
    static get _kPagePhysics() : PageScrollPhysics { 
        if (this.__$_kPagePhysics===undefined) {
            this.__$_kPagePhysics = PageScrollPhysics();
        }
        return this.__$_kPagePhysics;
    }
    static set _kPagePhysics(__$value : PageScrollPhysics)  { 
        this.__$_kPagePhysics = __$value;
    }

}
