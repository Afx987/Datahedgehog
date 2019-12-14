/** Library asset:datahedgehog_monitor/lib/lib/widgets/focus_manager.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/collections";

export namespace FocusNode {
    export type Constructors = lib3.ChangeNotifier.Constructors | 'FocusNode';
    export type Interface = Omit<FocusNode, Constructors>;
}
@DartClass
export class FocusNode extends lib3.ChangeNotifier {
    _parent : FocusScopeNode;

    _manager : FocusManager;

    _hasKeyboardToken : boolean;

    get hasFocus() : boolean {
        return op(Op.EQUALS,((t)=>(!!t)?t._currentFocus:null)(this._manager),this);
    }
    consumeKeyboardToken() : boolean {
        if (!this._hasKeyboardToken) return false;
        this._hasKeyboardToken = false;
        return true;
    }
    unfocus() : any {
        ((_882_)=>(!!_882_)?_882_._resignFocus(this):null)(this._parent);
        /* TODO (AssertStatementImpl) : assert (_parent == null); */;
        /* TODO (AssertStatementImpl) : assert (_manager == null); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        ((_883_)=>(!!_883_)?_883_._willDisposeFocusNode(this):null)(this._manager);
        ((_884_)=>(!!_884_)?_884_._resignFocus(this):null)(this._parent);
        /* TODO (AssertStatementImpl) : assert (_parent == null); */;
        /* TODO (AssertStatementImpl) : assert (_manager == null); */;
        super.dispose();
    }
    _notify() : any {
        this.notifyListeners();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${lib4.describeIdentity(this)}${this.hasFocus ? '(FOCUSED)' : ''}`;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FocusNode() {
        this._hasKeyboardToken = false;
    }
}

export namespace FocusScopeNode {
    export type Constructors = 'FocusScopeNode';
    export type Interface = Omit<FocusScopeNode, Constructors>;
}
@DartClass
@With(any)
export class FocusScopeNode extends core.DartObject implements any.Interface {
    _manager : FocusManager;

    _parent : FocusScopeNode;

    _nextSibling : FocusScopeNode;

    _previousSibling : FocusScopeNode;

    _firstChild : FocusScopeNode;

    _lastChild : FocusScopeNode;

    _focus : FocusNode;

    _focusPath : core.DartList<FocusScopeNode>;

    get isFirstFocus() : boolean {
        return op(Op.EQUALS,this._parent,null) || op(Op.EQUALS,this._parent._firstChild,this);
    }
    _getFocusPath() : core.DartList<FocusScopeNode> {
        let nodes : core.DartList<FocusScopeNode> = new core.DartList.literal<FocusScopeNode>(this);
        let node : FocusScopeNode = this._parent;
        while (node != null && node != ((t)=>(!!t)?t.rootScope:null)(this._manager)){
            nodes.add(node);
            node = node._parent;
        }
        return nodes;
    }
    _prepend(child : FocusScopeNode) : any {
        /* TODO (AssertStatementImpl) : assert (child != this); */;
        /* TODO (AssertStatementImpl) : assert (child != _firstChild); */;
        /* TODO (AssertStatementImpl) : assert (child != _lastChild); */;
        /* TODO (AssertStatementImpl) : assert (child._parent == null); */;
        /* TODO (AssertStatementImpl) : assert (child._manager == null); */;
        /* TODO (AssertStatementImpl) : assert (child._nextSibling == null); */;
        /* TODO (AssertStatementImpl) : assert (child._previousSibling == null); */;
        /* TODO (AssertStatementImpl) : assert (() {FocusScopeNode node = this; while (node._parent != null) node = node._parent; assert (node != child); return true;}()); */;
        child._parent = this;
        child._nextSibling = this._firstChild;
        if (this._firstChild != null) this._firstChild._previousSibling = child;
        this._firstChild = child;
        this._lastChild = ( this._lastChild ) || ( child );
        child._updateManager(this._manager);
    }
    _updateManager(manager : FocusManager) : any {
        var update : (child : FocusScopeNode) => any = (child : FocusScopeNode) : any =>  {
            if (op(Op.EQUALS,child._manager,manager)) return;
            child._manager = manager;
            if (manager != null) ((t)=>(!!t)?t._manager:null)(child._focus) = manager;
            child._visitChildren(update);
        };
        update(this);
    }
    _visitChildren(visitor : (child : FocusScopeNode) => any) : any {
        let child : FocusScopeNode = this._firstChild;
        while (child != null){
            visitor(child);
            child = child._nextSibling;
        }
    }
    _debugUltimatePreviousSiblingOf(child : FocusScopeNode,_namedArguments? : {equals? : FocusScopeNode}) : boolean {
        let {equals} = Object.assign({
        }, _namedArguments );
        while (child._previousSibling != null){
            /* TODO (AssertStatementImpl) : assert (child._previousSibling != child); */;
            child = child._previousSibling;
        }
        return op(Op.EQUALS,child,equals);
    }
    _debugUltimateNextSiblingOf(child : FocusScopeNode,_namedArguments? : {equals? : FocusScopeNode}) : boolean {
        let {equals} = Object.assign({
        }, _namedArguments );
        while (child._nextSibling != null){
            /* TODO (AssertStatementImpl) : assert (child._nextSibling != child); */;
            child = child._nextSibling;
        }
        return op(Op.EQUALS,child,equals);
    }
    _remove(child : FocusScopeNode) : any {
        /* TODO (AssertStatementImpl) : assert (child._parent == this); */;
        /* TODO (AssertStatementImpl) : assert (child._manager == _manager); */;
        /* TODO (AssertStatementImpl) : assert (_debugUltimatePreviousSiblingOf(child, equals: _firstChild)); */;
        /* TODO (AssertStatementImpl) : assert (_debugUltimateNextSiblingOf(child, equals: _lastChild)); */;
        if (op(Op.EQUALS,child._previousSibling,null)) {
            /* TODO (AssertStatementImpl) : assert (_firstChild == child); */;
            this._firstChild = child._nextSibling;
        }else {
            child._previousSibling._nextSibling = child._nextSibling;
        }
        if (op(Op.EQUALS,child._nextSibling,null)) {
            /* TODO (AssertStatementImpl) : assert (_lastChild == child); */;
            this._lastChild = child._previousSibling;
        }else {
            child._nextSibling._previousSibling = child._previousSibling;
        }
        child._previousSibling = null;
        child._nextSibling = null;
        child._parent = null;
        child._updateManager(null);
    }
    _didChangeFocusChain() : any {
        if (this.isFirstFocus) ((_885_)=>(!!_885_)?_885_._markNeedsUpdate():null)(this._manager);
    }
    requestFocus(node : FocusNode) : any {
        /* TODO (AssertStatementImpl) : assert (node != null); */;
        if (op(Op.EQUALS,this._focus,node) && lib5.listEquals(this._focusPath,((_886_)=>(!!_886_)?_886_._getCurrentFocusPath():null)(this._manager))) return;
        ((_887_)=>(!!_887_)?_887_.unfocus():null)(this._focus);
        node._hasKeyboardToken = true;
        this._setFocus(node);
    }
    autofocus(node : FocusNode) : any {
        /* TODO (AssertStatementImpl) : assert (node != null); */;
        if (op(Op.EQUALS,this._focus,null)) {
            node._hasKeyboardToken = true;
            this._setFocus(node);
        }
    }
    reparentIfNeeded(node : FocusNode) : any {
        /* TODO (AssertStatementImpl) : assert (node != null); */;
        if (op(Op.EQUALS,node._parent,null) || op(Op.EQUALS,node._parent,this)) return;
        node.unfocus();
        /* TODO (AssertStatementImpl) : assert (node._parent == null); */;
        if (op(Op.EQUALS,this._focus,null)) this._setFocus(node);
    }
    _setFocus(node : FocusNode) : any {
        /* TODO (AssertStatementImpl) : assert (node != null); */;
        /* TODO (AssertStatementImpl) : assert (node._parent == null); */;
        /* TODO (AssertStatementImpl) : assert (_focus == null); */;
        this._focus = node;
        this._focus._parent = this;
        this._focus._manager = this._manager;
        this._focus._hasKeyboardToken = true;
        this._focusPath = this._getFocusPath();
        this._didChangeFocusChain();
    }
    _resignFocus(node : FocusNode) : any {
        /* TODO (AssertStatementImpl) : assert (node != null); */;
        if (this._focus != node) return;
        this._focus._parent = null;
        this._focus._manager = null;
        this._focus = null;
        this._didChangeFocusChain();
    }
    setFirstFocus(child : FocusScopeNode) : any {
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        /* TODO (AssertStatementImpl) : assert (child._parent == null || child._parent == this); */;
        if (op(Op.EQUALS,this._firstChild,child)) return;
        child.detach();
        this._prepend(child);
        /* TODO (AssertStatementImpl) : assert (child._parent == this); */;
        this._didChangeFocusChain();
    }
    reparentScopeIfNeeded(child : FocusScopeNode) : any {
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        if (op(Op.EQUALS,child._parent,null) || op(Op.EQUALS,child._parent,this)) return;
        if (child.isFirstFocus) this.setFirstFocus(child);else child.detach();
    }
    detach() : any {
        this._didChangeFocusChain();
        ((_888_)=>(!!_888_)?_888_._remove(this):null)(this._parent);
        /* TODO (AssertStatementImpl) : assert (_parent == null); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib4.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        if (this._focus != null) properties.add(lib4.DiagnosticsProperty('focus',this._focus));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugDescribeChildren() : core.DartList<lib4.DiagnosticsNode> {
        let children : core.DartList<lib4.DiagnosticsNode> = new core.DartList.literal<lib4.DiagnosticsNode>();
        if (this._firstChild != null) {
            let child : FocusScopeNode = this._firstChild;
            let count : number = 1;
            while (true){
                children.add(child.toDiagnosticsNode({
                    name : `child ${count}`}));
                if (op(Op.EQUALS,child,this._lastChild)) break;
                child = child._nextSibling;
                count += 1;
            }
        }
        return children;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FocusScopeNode() {
    }
}

export namespace FocusManager {
    export type Constructors = 'FocusManager';
    export type Interface = Omit<FocusManager, Constructors>;
}
@DartClass
export class FocusManager {
    constructor() {
    }
    @defaultConstructor
    FocusManager() {
        this.rootScope = FocusScopeNode();
        this._haveScheduledUpdate = false;
        this.rootScope._manager = this;
        /* TODO (AssertStatementImpl) : assert (rootScope._firstChild == null); */;
        /* TODO (AssertStatementImpl) : assert (rootScope._lastChild == null); */;
    }
    rootScope : FocusScopeNode;

    _currentFocus : FocusNode;

    _willDisposeFocusNode(node : FocusNode) : any {
        /* TODO (AssertStatementImpl) : assert (node != null); */;
        if (op(Op.EQUALS,this._currentFocus,node)) this._currentFocus = null;
    }
    _haveScheduledUpdate : boolean;

    _markNeedsUpdate() : any {
        if (this._haveScheduledUpdate) return;
        this._haveScheduledUpdate = true;
        async.scheduleMicrotask(this._update.bind(this));
    }
    _findNextFocus() : FocusNode {
        let scope : FocusScopeNode = this.rootScope;
        while (scope._firstChild != null)scope = scope._firstChild;
        return scope._focus;
    }
    _update() : any {
        this._haveScheduledUpdate = false;
        let nextFocus : FocusNode = this._findNextFocus();
        if (op(Op.EQUALS,this._currentFocus,nextFocus)) return;
        let previousFocus : FocusNode = this._currentFocus;
        this._currentFocus = nextFocus;
        ((_889_)=>(!!_889_)?_889_._notify():null)(previousFocus);
        ((_890_)=>(!!_890_)?_890_._notify():null)(this._currentFocus);
    }
    _getCurrentFocusPath() : core.DartList<FocusScopeNode> {
        return ((_891_)=>(!!_891_)?_891_._getFocusPath():null)(((t)=>(!!t)?t._parent:null)(this._currentFocus));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let status : string = this._haveScheduledUpdate ? ' UPDATE SCHEDULED' : '';
        let indent : string = '  ';
        return `${lib4.describeIdentity(this)}${status}\n` + `${indent}currentFocus: ${this._currentFocus}\n` + `${this.rootScope.toStringDeep({
            prefixLineOne : indent,prefixOtherLines : indent})}`;
    }
}

export class properties {
}
