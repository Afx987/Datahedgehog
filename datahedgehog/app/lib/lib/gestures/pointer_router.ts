/** Library asset:datahedgehog_monitor/lib/lib/gestures/pointer_router.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as lib4 from "./events";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/assertions";

export namespace PointerRouter {
    export type Constructors = 'PointerRouter';
    export type Interface = Omit<PointerRouter, Constructors>;
}
@DartClass
export class PointerRouter {
    _routeMap : core.DartMap<number,core.DartLinkedHashSet<(event : lib4.PointerEvent) => any>>;

    _globalRoutes : core.DartLinkedHashSet<(event : lib4.PointerEvent) => any>;

    addRoute(pointer : number,route : (event : lib4.PointerEvent) => any) : any {
        let routes : core.DartLinkedHashSet<(event : lib4.PointerEvent) => any> = this._routeMap.putIfAbsent(pointer,() =>  {
            return core.DartLinkedHashSet();
        });
        /* TODO (AssertStatementImpl) : assert (!routes.contains(route)); */;
        routes.add(route);
    }
    removeRoute(pointer : number,route : (event : lib4.PointerEvent) => any) : any {
        /* TODO (AssertStatementImpl) : assert (_routeMap.containsKey(pointer)); */;
        let routes : core.DartLinkedHashSet<(event : lib4.PointerEvent) => any> = this._routeMap.get(pointer);
        /* TODO (AssertStatementImpl) : assert (routes.contains(route)); */;
        routes.remove(route);
        if (routes.isEmpty) this._routeMap.remove(pointer);
    }
    addGlobalRoute(route : (event : lib4.PointerEvent) => any) : any {
        /* TODO (AssertStatementImpl) : assert (!_globalRoutes.contains(route)); */;
        this._globalRoutes.add(route);
    }
    removeGlobalRoute(route : (event : lib4.PointerEvent) => any) : any {
        /* TODO (AssertStatementImpl) : assert (_globalRoutes.contains(route)); */;
        this._globalRoutes.remove(route);
    }
    _dispatch(event : lib4.PointerEvent,route : (event : lib4.PointerEvent) => any) : any {
        try {
            route(event);
        } catch (__error__) {

            {
                let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                lib5.FlutterError.reportError(FlutterErrorDetailsForPointerRouter({
                    exception : exception,stack : stack,library : 'gesture library',context : 'while routing a pointer event',router : this,route : route,event : event,informationCollector : (information : core.DartStringBuffer) =>  {
                        information.writeln('Event:');
                        information.write(`  ${event}`);
                    }}));
            }
        }
    }
    route(event : lib4.PointerEvent) : any {
        let routes : core.DartLinkedHashSet<(event : lib4.PointerEvent) => any> = this._routeMap.get(event.pointer);
        let globalRoutes : core.DartList<(event : lib4.PointerEvent) => any> = op(Op.LT,core.DartList<E>,PointerRoute);
        op(Op.GT,,.from(this._globalRoutes));
        if (routes != null) {
            for(let route of op(Op.LT,core.DartList<E>,PointerRoute)) op(Op.GT,,.from(routes));
            {
                if (routes.contains(this.route.bind(this))) this._dispatch(event,this.route.bind(this));
            }
        }
        for(let route of globalRoutes) {
            if (this._globalRoutes.contains(route)) this._dispatch(event,route);
        }
    }
    constructor() {
    }
    @defaultConstructor
    PointerRouter() {
        this._routeMap = new core.DartMap.literal([
        ]);
        this._globalRoutes = core.DartLinkedHashSet();
    }
}

export namespace FlutterErrorDetailsForPointerRouter {
    export type Constructors = lib5.FlutterErrorDetails.Constructors | 'FlutterErrorDetailsForPointerRouter';
    export type Interface = Omit<FlutterErrorDetailsForPointerRouter, Constructors>;
}
@DartClass
export class FlutterErrorDetailsForPointerRouter extends lib5.FlutterErrorDetails {
    constructor(_namedArguments? : {exception? : any,stack? : core.DartStackTrace,library? : string,context? : string,router? : PointerRouter,route? : (event : lib4.PointerEvent) => any,event? : lib4.PointerEvent,informationCollector? : (information : core.DartStringBuffer) => any,silent? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FlutterErrorDetailsForPointerRouter(_namedArguments? : {exception? : any,stack? : core.DartStackTrace,library? : string,context? : string,router? : PointerRouter,route? : (event : lib4.PointerEvent) => any,event? : lib4.PointerEvent,informationCollector? : (information : core.DartStringBuffer) => any,silent? : boolean}) {
        let {exception,stack,library,context,router,route,event,informationCollector,silent} = Object.assign({
            "silent" : false}, _namedArguments );
        super.FlutterErrorDetails({
            exception : exception,stack : stack,library : library,context : context,informationCollector : informationCollector,silent : silent});
        this.router = router;
        this.route = route;
        this.event = event;
    }
    router : PointerRouter;

    route : (event : lib4.PointerEvent) => any;

    event : lib4.PointerEvent;

}

export class properties {
}
