/** Library asset:datahedgehog_monitor/lib/lib/material/tab_controller.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_position";
import * as lib9 from "./constants";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/widgets/ticker_provider";

export namespace TabController {
    export type Constructors = lib3.ChangeNotifier.Constructors | 'TabController';
    export type Interface = Omit<TabController, Constructors>;
}
@DartClass
export class TabController extends lib3.ChangeNotifier {
    constructor(_namedArguments? : {initialIndex? : number,length? : number,vsync? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TabController(_namedArguments? : {initialIndex? : number,length? : number,vsync? : any}) {
        let {initialIndex,length,vsync} = Object.assign({
            "initialIndex" : 0}, _namedArguments );
        this._index = initialIndex;
        this._previousIndex = initialIndex;
        this._animationController = this.length < 2 ? null : lib4.AnimationController({
            value : initialIndex.toDouble(),upperBound : new core.DartInt((this.length - 1)).toDouble(),vsync : lib4.properties.vsync});
        this._indexIsChangingCount = 0;
        this.assert = assert;
        this.length = length;
    }
     : any;

     : any;

     : any;

     : any;

    [null](length : any, : any) {
    }
     : any;

    _index;
    _previousIndex;
    _animationController;

    get animation() : lib6.Animation<double> {
        return (((t)=>(!!t)?t.view:null)(this._animationController) || lib5.properties.kAlwaysCompleteAnimation);
    }
    _animationController : lib4.AnimationController;

    length : number;

    _changeIndex(value : number,_namedArguments? : {duration? : core.DartDuration,curve? : lib7.Curve}) : any {
        let {duration,curve} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (value >= 0 && (value < length || length == 0)); */;
        /* TODO (AssertStatementImpl) : assert (duration == null ? curve == null : true); */;
        /* TODO (AssertStatementImpl) : assert (_indexIsChangingCount >= 0); */;
        if (value == this._index || this.length < 2) return;
        this._previousIndex = this.index;
        this._index = value;
        if (duration != null) {
            this._indexIsChangingCount += 1;
            lib8.notifyListeners();
            this._animationController.animateTo(this._index.toDouble(),{
                duration : duration,curve : curve}).whenCompleteOrCancel(() =>  {
                this._indexIsChangingCount -= 1;
                lib8.notifyListeners();
            });
        }else {
            this._indexIsChangingCount += 1;
            this._animationController.value = this._index.toDouble();
            this._indexIsChangingCount -= 1;
            lib8.notifyListeners();
        }
    }
    get index() : number {
        return this._index;
    }
    _index : number;

    set index(value : number) {
        this._changeIndex(value);
    }
    get previousIndex() : number {
        return this._previousIndex;
    }
    _previousIndex : number;

    get indexIsChanging() : boolean {
        return this._indexIsChangingCount != 0;
    }
    _indexIsChangingCount : number;

    animateTo(value : number,_namedArguments? : {duration? : core.DartDuration,curve? : lib7.Curve}) : any {
        let {duration,curve} = Object.assign({
            "duration" : lib9.properties.kTabScrollDuration,
            "curve" : lib7.Curves.ease}, _namedArguments );
        this._changeIndex(value,{
            duration : duration,curve : curve});
    }
    get offset() : double {
        return this.length > 1 ? op(Op.MINUS,this._animationController.value,this._index.toDouble()) : 0.0;
    }
    set offset(value : double) {
        /* TODO (AssertStatementImpl) : assert (length > 1); */;
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (value >= -1.0 && value <= 1.0); */;
        /* TODO (AssertStatementImpl) : assert (!indexIsChanging); */;
        if (value == this.offset) return;
        this._animationController.value = value + this._index.toDouble();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        ((_756_)=>(!!_756_)?_756_.dispose():null)(this._animationController);
        super.dispose();
    }
}

export namespace _TabControllerScope {
    export type Constructors = lib10.InheritedWidget.Constructors | '_TabControllerScope';
    export type Interface = Omit<_TabControllerScope, Constructors>;
}
@DartClass
export class _TabControllerScope extends lib10.InheritedWidget {
    constructor(_namedArguments? : {key? : lib11.Key,controller? : TabController,enabled? : boolean,child? : lib10.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TabControllerScope(_namedArguments? : {key? : lib11.Key,controller? : TabController,enabled? : boolean,child? : lib10.Widget}) {
        let {key,controller,enabled,child} = Object.assign({
        }, _namedArguments );
        super.InheritedWidget({
            key : key,child : child});
        this.controller = controller;
        this.enabled = enabled;
    }
    controller : TabController;

    enabled : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(old : _TabControllerScope) : boolean {
        return this.enabled != old.enabled || this.controller != old.controller;
    }
}

export namespace DefaultTabController {
    export type Constructors = lib10.StatefulWidget.Constructors | 'DefaultTabController';
    export type Interface = Omit<DefaultTabController, Constructors>;
}
@DartClass
export class DefaultTabController extends lib10.StatefulWidget {
    constructor(_namedArguments? : {key? : lib11.Key,length? : number,initialIndex? : number,child? : lib10.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DefaultTabController(_namedArguments? : {key? : lib11.Key,length? : number,initialIndex? : number,child? : lib10.Widget}) {
        let {key,length,initialIndex,child} = Object.assign({
            "initialIndex" : 0}, _namedArguments );
        this.assert = assert;
        this.length = length;
        this.initialIndex = initialIndex;
        this.child = child;
    }
     : any;

     : any;

     : any;

    length : number;

    initialIndex : number;

    child : lib10.Widget;

    static of(context : lib10.BuildContext) : TabController {
        let scope : _TabControllerScope = context.inheritFromWidgetOfExactType(_TabControllerScope);
        return ((t)=>(!!t)?t.controller:null)(scope);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _DefaultTabControllerState {
        return _DefaultTabControllerState();
    }
}

export namespace _DefaultTabControllerState {
    export type Constructors = '_DefaultTabControllerState';
    export type Interface = Omit<_DefaultTabControllerState, Constructors>;
}
@DartClass
@With(any)
export class _DefaultTabControllerState extends any implements any.Interface {
    _controller : TabController;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._controller = TabController({
            vsync : this,length : widget.length,initialIndex : widget.initialIndex});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._controller.dispose();
        super.dispose();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib10.BuildContext) : lib10.Widget {
        return _TabControllerScope({
            controller : this._controller,enabled : lib12.TickerMode.of(context),child : widget.child});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DefaultTabControllerState() {
    }
}

export class properties {
}
