/** Library asset:datahedgehog_monitor/lib/lib/widgets/focus_scope.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./focus_manager";
import * as lib6 from "./basic";

export namespace _FocusScopeMarker {
    export type Constructors = lib3.InheritedWidget.Constructors | '_FocusScopeMarker';
    export type Interface = Omit<_FocusScopeMarker, Constructors>;
}
@DartClass
export class _FocusScopeMarker extends lib3.InheritedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,node? : lib5.FocusScopeNode,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FocusScopeMarker(_namedArguments? : {key? : lib4.Key,node? : lib5.FocusScopeNode,child? : lib3.Widget}) {
        let {key,node,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.node = node;
    }
     : any;

     : any;

    key;
    child;

     : any;

    node : lib5.FocusScopeNode;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(oldWidget : _FocusScopeMarker) : boolean {
        return this.node != oldWidget.node;
    }
}

export namespace FocusScope {
    export type Constructors = lib3.StatefulWidget.Constructors | 'FocusScope';
    export type Interface = Omit<FocusScope, Constructors>;
}
@DartClass
export class FocusScope extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,node? : lib5.FocusScopeNode,autofocus? : boolean,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FocusScope(_namedArguments? : {key? : lib4.Key,node? : lib5.FocusScopeNode,autofocus? : boolean,child? : lib3.Widget}) {
        let {key,node,autofocus,child} = Object.assign({
            "autofocus" : false}, _namedArguments );
        this.assert = assert;
        this.node = node;
        this.autofocus = autofocus;
        this.child = child;
    }
     : any;

     : any;

     : any;

     : any;

    node : lib5.FocusScopeNode;

    autofocus : boolean;

    child : lib3.Widget;

    static of(context : lib3.BuildContext) : lib5.FocusScopeNode {
        /* TODO (AssertStatementImpl) : assert (context != null); */;
        let scope : _FocusScopeMarker = context.inheritFromWidgetOfExactType(_FocusScopeMarker);
        return (((t)=>(!!t)?t.node:null)(scope) || context.owner.focusManager.rootScope);
    }
    static ancestorsOf(context : lib3.BuildContext) : core.DartList<lib5.FocusScopeNode> {
        /* TODO (AssertStatementImpl) : assert (context != null); */;
        let ancestors : core.DartList<lib5.FocusScopeNode> = new core.DartList.literal<lib5.FocusScopeNode>();
        while (true){
            context = context.ancestorInheritedElementForWidgetOfExactType(_FocusScopeMarker);
            if (op(Op.EQUALS,context,null)) return ancestors;
            let scope : _FocusScopeMarker = context.widget;
            ancestors.add(scope.node);
            context.visitAncestorElements((parent : lib3.Element) =>  {
                context = parent;
                return false;
            });
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _FocusScopeState {
        return _FocusScopeState();
    }
}

export namespace _FocusScopeState {
    export type Constructors = lib3.State.Constructors | '_FocusScopeState';
    export type Interface = Omit<_FocusScopeState, Constructors>;
}
@DartClass
export class _FocusScopeState extends lib3.State<FocusScope> {
    _didAutofocus : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        super.didChangeDependencies();
        if (!this._didAutofocus && this.widget.autofocus) {
            FocusScope.of(this.context).setFirstFocus(this.widget.node);
            this._didAutofocus = true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this.widget.node.detach();
        super.dispose();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        FocusScope.of(context).reparentScopeIfNeeded(this.widget.node);
        return lib6.Semantics({
            explicitChildNodes : true,child : _FocusScopeMarker({
                node : this.widget.node,child : this.widget.child})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FocusScopeState() {
        this._didAutofocus = false;
    }
}

export class properties {
}
