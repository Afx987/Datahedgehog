/** Library asset:datahedgehog_monitor/lib/lib/widgets/scroll_notification.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/rendering/viewport";
import * as lib5 from "./notification_listener";
import * as lib6 from "./scroll_metrics";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/gestures/drag_details";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/rendering/viewport_offset";

export var Notification : () => any = () : any =>  {
    var depth : () => number = () : number =>  {
        return _depth;
    };
    let _depth : number = 0;
    var visitAncestor : (element : lib3.Element) => boolean = (element : lib3.Element) : boolean =>  {
        if (is(element, lib3.RenderObjectElement) && is(element.renderObject, lib4.RenderAbstractViewport)) _depth += 1;
        return super.visitAncestor(element);
    };
    var debugFillDescription : (description : core.DartList<string>) => any = (description : core.DartList<string>) : any =>  {
        super.debugFillDescription(description);
        description.add(`depth: ${depth} (${op(Op.EQUALS,depth,0) ? "local" : "remote"})`);
    };
};
export var defaultScrollNotificationPredicate : (notification : ScrollNotification) => boolean = (notification : ScrollNotification) : boolean =>  {
    return op(Op.EQUALS,notification.depth,0);
};
export namespace ScrollNotification {
    export type Constructors = lib5.LayoutChangedNotification.Constructors | 'ScrollNotification';
    export type Interface = Omit<ScrollNotification, Constructors>;
}
@DartClass
@With(any)
export class ScrollNotification extends lib5.LayoutChangedNotification implements any.Interface {
    constructor(_namedArguments? : {metrics? : lib6.ScrollMetrics,context? : lib3.BuildContext}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScrollNotification(_namedArguments? : {metrics? : lib6.ScrollMetrics,context? : lib3.BuildContext}) {
        let {metrics,context} = Object.assign({
        }, _namedArguments );
        this.metrics = metrics;
        this.context = context;
    }
    metrics : lib6.ScrollMetrics;

    context : lib3.BuildContext;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillDescription(description : core.DartList<string>) : any {
        super.debugFillDescription(description);
        description.add(`${this.metrics}`);
    }
}

export namespace ScrollStartNotification {
    export type Constructors = ScrollNotification.Constructors | 'ScrollStartNotification';
    export type Interface = Omit<ScrollStartNotification, Constructors>;
}
@DartClass
export class ScrollStartNotification extends ScrollNotification {
    constructor(_namedArguments? : {metrics? : lib6.ScrollMetrics,context? : lib3.BuildContext,dragDetails? : lib7.DragStartDetails}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScrollStartNotification(_namedArguments? : {metrics? : lib6.ScrollMetrics,context? : lib3.BuildContext,dragDetails? : lib7.DragStartDetails}) {
        let {metrics,context,dragDetails} = Object.assign({
        }, _namedArguments );
        super.ScrollNotification({
            metrics : metrics,context : context});
        this.dragDetails = dragDetails;
    }
    dragDetails : lib7.DragStartDetails;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillDescription(description : core.DartList<string>) : any {
        super.debugFillDescription(description);
        if (this.dragDetails != null) description.add(`${this.dragDetails}`);
    }
}

export namespace ScrollUpdateNotification {
    export type Constructors = ScrollNotification.Constructors | 'ScrollUpdateNotification';
    export type Interface = Omit<ScrollUpdateNotification, Constructors>;
}
@DartClass
export class ScrollUpdateNotification extends ScrollNotification {
    constructor(_namedArguments? : {metrics? : lib6.ScrollMetrics,context? : lib3.BuildContext,dragDetails? : lib7.DragUpdateDetails,scrollDelta? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScrollUpdateNotification(_namedArguments? : {metrics? : lib6.ScrollMetrics,context? : lib3.BuildContext,dragDetails? : lib7.DragUpdateDetails,scrollDelta? : double}) {
        let {metrics,context,dragDetails,scrollDelta} = Object.assign({
        }, _namedArguments );
        super.ScrollNotification({
            metrics : metrics,context : context});
        this.dragDetails = dragDetails;
        this.scrollDelta = scrollDelta;
    }
    dragDetails : lib7.DragUpdateDetails;

    scrollDelta : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillDescription(description : core.DartList<string>) : any {
        super.debugFillDescription(description);
        description.add(`scrollDelta: ${this.scrollDelta}`);
        if (this.dragDetails != null) description.add(`${this.dragDetails}`);
    }
}

export namespace OverscrollNotification {
    export type Constructors = ScrollNotification.Constructors | 'OverscrollNotification';
    export type Interface = Omit<OverscrollNotification, Constructors>;
}
@DartClass
export class OverscrollNotification extends ScrollNotification {
    constructor(_namedArguments? : {metrics? : lib6.ScrollMetrics,context? : lib3.BuildContext,dragDetails? : lib7.DragUpdateDetails,overscroll? : double,velocity? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OverscrollNotification(_namedArguments? : {metrics? : lib6.ScrollMetrics,context? : lib3.BuildContext,dragDetails? : lib7.DragUpdateDetails,overscroll? : double,velocity? : double}) {
        let {metrics,context,dragDetails,overscroll,velocity} = Object.assign({
            "velocity" : 0.0}, _namedArguments );
        this.assert = assert;
        this.dragDetails = dragDetails;
        this.overscroll = overscroll;
        this.velocity = velocity;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    metrics;
    context;

     : any;

    dragDetails : lib7.DragUpdateDetails;

    overscroll : double;

    velocity : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillDescription(description : core.DartList<string>) : any {
        super.debugFillDescription(description);
        description.add(`overscroll: ${new core.DartDouble(this.overscroll).toStringAsFixed(1)}`);
        description.add(`velocity: ${new core.DartDouble(this.velocity).toStringAsFixed(1)}`);
        if (this.dragDetails != null) description.add(`${this.dragDetails}`);
    }
}

export namespace ScrollEndNotification {
    export type Constructors = ScrollNotification.Constructors | 'ScrollEndNotification';
    export type Interface = Omit<ScrollEndNotification, Constructors>;
}
@DartClass
export class ScrollEndNotification extends ScrollNotification {
    constructor(_namedArguments? : {metrics? : lib6.ScrollMetrics,context? : lib3.BuildContext,dragDetails? : lib7.DragEndDetails}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScrollEndNotification(_namedArguments? : {metrics? : lib6.ScrollMetrics,context? : lib3.BuildContext,dragDetails? : lib7.DragEndDetails}) {
        let {metrics,context,dragDetails} = Object.assign({
        }, _namedArguments );
        super.ScrollNotification({
            metrics : metrics,context : context});
        this.dragDetails = dragDetails;
    }
    dragDetails : lib7.DragEndDetails;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillDescription(description : core.DartList<string>) : any {
        super.debugFillDescription(description);
        if (this.dragDetails != null) description.add(`${this.dragDetails}`);
    }
}

export namespace UserScrollNotification {
    export type Constructors = ScrollNotification.Constructors | 'UserScrollNotification';
    export type Interface = Omit<UserScrollNotification, Constructors>;
}
@DartClass
export class UserScrollNotification extends ScrollNotification {
    constructor(_namedArguments? : {metrics? : lib6.ScrollMetrics,context? : lib3.BuildContext,direction? : lib8.ScrollDirection}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UserScrollNotification(_namedArguments? : {metrics? : lib6.ScrollMetrics,context? : lib3.BuildContext,direction? : lib8.ScrollDirection}) {
        let {metrics,context,direction} = Object.assign({
        }, _namedArguments );
        super.ScrollNotification({
            metrics : metrics,context : context});
        this.direction = direction;
    }
    direction : lib8.ScrollDirection;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillDescription(description : core.DartList<string>) : any {
        super.debugFillDescription(description);
        description.add(`direction: ${this.direction}`);
    }
}

export class properties {
    private static __$ViewportNotificationMixin : any;
    static get ViewportNotificationMixin() : any { 
        return this.__$ViewportNotificationMixin;
    }
    static set ViewportNotificationMixin(__$value : any)  { 
        this.__$ViewportNotificationMixin = __$value;
    }

}
