/** Library asset:datahedgehog_monitor/lib/lib/widgets/will_pop_scope.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./routes";

export namespace WillPopScope {
    export type Constructors = lib3.StatefulWidget.Constructors | 'WillPopScope';
    export type Interface = Omit<WillPopScope, Constructors>;
}
@DartClass
export class WillPopScope extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,onWillPop? : () => async.Future<boolean>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    WillPopScope(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,onWillPop? : () => async.Future<boolean>}) {
        let {key,child,onWillPop} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.child = child;
        this.onWillPop = onWillPop;
    }
     : any;

     : any;

     : any;

    child : lib3.Widget;

    onWillPop : () => async.Future<boolean>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _WillPopScopeState {
        return _WillPopScopeState();
    }
}

export namespace _WillPopScopeState {
    export type Constructors = lib3.State.Constructors | '_WillPopScopeState';
    export type Interface = Omit<_WillPopScopeState, Constructors>;
}
@DartClass
export class _WillPopScopeState extends lib3.State<WillPopScope> {
    _route : lib5.ModalRoute<any>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : void {
        super.didChangeDependencies();
        if (this.widget.onWillPop != null) ((_970_)=>(!!_970_)?_970_.removeScopedWillPopCallback(this.widget.onWillPop):null)(this._route);
        this._route = lib5.ModalRoute.of(this.context);
        if (this.widget.onWillPop != null) ((_971_)=>(!!_971_)?_971_.addScopedWillPopCallback(this.widget.onWillPop):null)(this._route);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : WillPopScope) : void {
        super.didUpdateWidget(oldWidget);
        /* TODO (AssertStatementImpl) : assert (_route == ModalRoute.of(context)); */;
        if (this.widget.onWillPop != oldWidget.onWillPop && this._route != null) {
            if (oldWidget.onWillPop != null) this._route.removeScopedWillPopCallback(oldWidget.onWillPop);
            if (this.widget.onWillPop != null) this._route.addScopedWillPopCallback(this.widget.onWillPop);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : void {
        if (this.widget.onWillPop != null) ((_972_)=>(!!_972_)?_972_.removeScopedWillPopCallback(this.widget.onWillPop):null)(this._route);
        super.dispose();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return this.widget.child;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _WillPopScopeState() {
    }
}

export class properties {
}
