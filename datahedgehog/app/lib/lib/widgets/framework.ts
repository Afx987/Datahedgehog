/** Library asset:datahedgehog_monitor/lib/lib/widgets/framework.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as collection from "@dart2ts/dart/core";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as lib7 from "./focus_manager";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/foundation/debug";
import * as developer from "@dart2ts/dart/developer";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/foundation/assertions";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/rendering/error";
import * as lib12 from "./debug";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/rendering/table";

export var _debugReportException : (context : string,exception : any,stack : core.DartStackTrace,_namedArguments? : {informationCollector? : (information : core.DartStringBuffer) => any}) => lib10.FlutterErrorDetails = (context : string,exception : any,stack : core.DartStackTrace,_namedArguments? : {informationCollector? : (information : core.DartStringBuffer) => any}) : lib10.FlutterErrorDetails =>  {
    let {informationCollector} = Object.assign({
    }, _namedArguments );
    let details : lib10.FlutterErrorDetails = lib10.FlutterErrorDetails({
        exception : exception,stack : stack,library : 'widgets library',context : context,informationCollector : informationCollector});
    lib10.FlutterError.reportError(details);
    return details;
};
export enum _ElementLifecycle {
    initial,
    active,
    inactive,
    defunct
}

export namespace GlobalKey {
    export type Constructors = lib3.Key.Constructors | 'constructor';
    export type Interface<T extends State<StatefulWidget>> = Omit<GlobalKey<T extends State<StatefulWidget>>, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'optionalTypeArgs',value : {
        arguments : [],namedArguments : {
        }}})
export class GlobalKey<T extends State<StatefulWidget>> extends lib3.Key {
    constructor(_namedArguments? : {debugLabel? : string}) {
        // @ts-ignore
        super();
    }
    @defaultFactory
    static $GlobalKey<T extends State<StatefulWidget>>(_namedArguments? : {debugLabel? : string}) : GlobalKey<T> {
        let {debugLabel} = Object.assign({
        }, _namedArguments );
        return LabeledGlobalKey(debugLabel);
    }
    @namedConstructor
    constructor() {
        super.empty();
    }
    static constructor : new<T extends State<StatefulWidget>>() => GlobalKey<T>;

    private static __$_registry : core.DartMap<GlobalKey<any>,Element>;
    static get _registry() : core.DartMap<GlobalKey<any>,Element> { 
        if (this.__$_registry===undefined) {
            this.__$_registry = new core.DartMap.literal([
            ]);
        }
        return this.__$_registry;
    }
    static set _registry(__$value : core.DartMap<GlobalKey<any>,Element>)  { 
        this.__$_registry = __$value;
    }

    private static __$_debugIllFatedElements : core.DartSet<Element>;
    static get _debugIllFatedElements() : core.DartSet<Element> { 
        if (this.__$_debugIllFatedElements===undefined) {
            this.__$_debugIllFatedElements = core.DartHashSet();
        }
        return this.__$_debugIllFatedElements;
    }
    static set _debugIllFatedElements(__$value : core.DartSet<Element>)  { 
        this.__$_debugIllFatedElements = __$value;
    }

    private static __$_debugReservations : core.DartMap<GlobalKey<any>,Element>;
    static get _debugReservations() : core.DartMap<GlobalKey<any>,Element> { 
        if (this.__$_debugReservations===undefined) {
            this.__$_debugReservations = new core.DartMap.literal([
            ]);
        }
        return this.__$_debugReservations;
    }
    static set _debugReservations(__$value : core.DartMap<GlobalKey<any>,Element>)  { 
        this.__$_debugReservations = __$value;
    }

    _register(element : Element) : any {
        /* TODO (AssertStatementImpl) : assert (() {if (_registry.containsKey(this)) {assert (element.widget != null); assert (_registry[this].widget != null); assert (element.widget.runtimeType != _registry[this].widget.runtimeType); _debugIllFatedElements.add(_registry[this]);} return true;}()); */;
        GlobalKey._registry.set(this,element);
    }
    _unregister(element : Element) : any {
        /* TODO (AssertStatementImpl) : assert (() {if (_registry.containsKey(this) && _registry[this] != element) {assert (element.widget != null); assert (_registry[this].widget != null); assert (element.widget.runtimeType != _registry[this].widget.runtimeType);} return true;}()); */;
        if (op(Op.EQUALS,GlobalKey._registry.get(this),element)) GlobalKey._registry.remove(this);
    }
    _debugReserveFor(parent : Element) : any {
        /* TODO (AssertStatementImpl) : assert (() {assert (parent != null); if (_debugReservations.containsKey(this) && _debugReservations[this] != parent) {final String older = _debugReservations[this].toString(); final String newer = parent.toString(); if (older != newer) {throw FlutterError('Multiple widgets used the same GlobalKey.\n' 'The key $this was used by multiple widgets. The parents of those widgets were:\n' '- $older\n' '- $newer\n' 'A GlobalKey can only be specified on one widget at a time in the widget tree.');} throw FlutterError('Multiple widgets used the same GlobalKey.\n' 'The key $this was used by multiple widgets. The parents of those widgets were ' 'different widgets that both had the following description:\n' '  $newer\n' 'A GlobalKey can only be specified on one widget at a time in the widget tree.');} _debugReservations[this] = parent; return true;}()); */;
    }
    static _debugVerifyIllFatedPopulation() : any {
        /* TODO (AssertStatementImpl) : assert (() {Map<GlobalKey, Set<Element>> duplicates; for (Element element in _debugIllFatedElements) {if (element._debugLifecycleState != _ElementLifecycle.defunct) {assert (element != null); assert (element.widget != null); assert (element.widget.key != null); final GlobalKey key = element.widget.key; assert (_registry.containsKey(key)); duplicates ??= <GlobalKey, Set<Element>> {}; final Set<Element> elements = duplicates.putIfAbsent(key, () => HashSet<Element>()); elements.add(element); elements.add(_registry[key]);}} _debugIllFatedElements.clear(); _debugReservations.clear(); if (duplicates != null) {final StringBuffer buffer = StringBuffer(); buffer.writeln('Multiple widgets used the same GlobalKey.\n'); for (GlobalKey key in duplicates.keys) {final Set<Element> elements = duplicates[key]; buffer.writeln('The key $key was used by ${elements.length} widgets:'); for (Element element in elements) buffer.writeln('- $element');} buffer.write('A GlobalKey can only be specified on one widget at a time in the widget tree.'); throw FlutterError(buffer.toString());} return true;}()); */;
    }
    get _currentElement() : Element {
        return GlobalKey._registry.get(this);
    }
    get currentContext() : BuildContext {
        return this._currentElement;
    }
    get currentWidget() : Widget {
        return ((t)=>(!!t)?t.widget:null)(this._currentElement);
    }
    get currentState() : T {
        let element : Element = this._currentElement;
        if (is(element, StatefulElement)) {
            let statefulElement : StatefulElement = element;
            let state : State<any> = statefulElement.state;
            if (is(state, T)) return state;
        }
        return null;
    }
}

export namespace TypeMatcher {
    export type Constructors = 'TypeMatcher';
    export type Interface<T> = Omit<TypeMatcher<T>, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'optionalTypeArgs',value : {
        arguments : [],namedArguments : {
        }}})
export class TypeMatcher<T> {
    constructor() {
    }
    @defaultConstructor
    TypeMatcher() {
    }
    check(object : any) : boolean {
        return is(object, T);
    }
}

export namespace Widget {
    export type Constructors = lib4.DiagnosticableTree.Constructors | 'Widget';
    export type Interface = Omit<Widget, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class Widget extends lib4.DiagnosticableTree {
    constructor(_namedArguments? : {key? : lib3.Key}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Widget(_namedArguments? : {key? : lib3.Key}) {
        let {key} = Object.assign({
        }, _namedArguments );
        this.key = key;
    }
    key : lib3.Key;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    createElement() : Element{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toStringShort() : string {
        return op(Op.EQUALS,this.key,null) ? `${this.runtimeType}` : `${this.runtimeType}-${this.key}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib4.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.defaultDiagnosticsTreeStyle = lib4.DiagnosticsTreeStyle.dense;
    }
    static canUpdate(oldWidget : Widget,newWidget : Widget) : boolean {
        return op(Op.EQUALS,oldWidget.runtimeType,newWidget.runtimeType) && op(Op.EQUALS,oldWidget.key,newWidget.key);
    }
}

export enum _StateLifecycle {
    created,
    initialized,
    ready,
    defunct
}

export namespace State {
    export type Constructors = lib4.Diagnosticable.Constructors | 'State';
    export type Interface<T extends StatefulWidget> = Omit<State<T extends StatefulWidget>, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'optionalTypeArgs',value : {
        arguments : [],namedArguments : {
        }}})
export class State<T extends StatefulWidget> extends lib4.Diagnosticable {
    get widget() : T {
        return this._widget;
    }
    _widget : T;

    _debugLifecycleState : _StateLifecycle;

    _debugTypesAreRight(widget : Widget) : boolean {
        return is(widget, T);
    }
    get context() : BuildContext {
        return this._element;
    }
    _element : StatefulElement;

    get mounted() : boolean {
        return this._element != null;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        /* TODO (AssertStatementImpl) : assert (_debugLifecycleState == _StateLifecycle.created); */;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : T) : any {
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    reassemble() : any {
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    setState(fn : any) : any {
        /* TODO (AssertStatementImpl) : assert (fn != null); */;
        /* TODO (AssertStatementImpl) : assert (() {if (_debugLifecycleState == _StateLifecycle.defunct) {throw FlutterError('setState() called after dispose(): $this\n' 'This error happens if you call setState() on a State object for a widget that ' 'no longer appears in the widget tree (e.g., whose parent widget no longer ' 'includes the widget in its build). This error can occur when code calls ' 'setState() from a timer or an animation callback. The preferred solution is ' 'to cancel the timer or stop listening to the animation in the dispose() ' 'callback. Another solution is to check the "mounted" property of this ' 'object before calling setState() to ensure the object is still in the ' 'tree.\n' 'This error might indicate a memory leak if setState() is being called ' 'because another object is retaining a reference to this State object ' 'after it has been removed from the tree. To avoid memory leaks, ' 'consider breaking the reference to this object during dispose().');} if (_debugLifecycleState == _StateLifecycle.created && !mounted) {throw FlutterError('setState() called in constructor: $this\n' 'This happens when you call setState() on a State object for a widget that ' 'hasn\'t been inserted into the widget tree yet. It is not necessary to call ' 'setState() in the constructor, since the state is already assumed to be dirty ' 'when it is initially created.');} return true;}()); */;
        let result : any = fn() as any;
        /* TODO (AssertStatementImpl) : assert (() {if (result is Future) {throw FlutterError('setState() callback argument returned a Future.\n' 'The setState() method on $this was called with a closure or method that ' 'returned a Future. Maybe it is marked as "async".\n' 'Instead of performing asynchronous work inside a call to setState(), first ' 'execute the work (without updating the widget state), and then synchronously ' 'update the state inside a call to setState().');} return true;}()); */;
        this._element.markNeedsBuild();
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    deactivate() : any {
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        /* TODO (AssertStatementImpl) : assert (_debugLifecycleState == _StateLifecycle.ready); */;
        /* TODO (AssertStatementImpl) : assert (() {_debugLifecycleState = _StateLifecycle.defunct; return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    build(context : BuildContext) : Widget{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib4.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        /* TODO (AssertStatementImpl) : assert (() {properties.add(EnumProperty<_StateLifecycle>('lifecycle state', _debugLifecycleState, defaultValue: _StateLifecycle.ready)); return true;}()); */;
        properties.add(lib4.ObjectFlagProperty('_widget',this._widget,{
            ifNull : 'no widget'}));
        properties.add(lib4.ObjectFlagProperty('_element',this._element,{
            ifNull : 'not mounted'}));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    State() {
        this._debugLifecycleState = _StateLifecycle.created;
    }
}

export namespace UniqueKey {
    export type Constructors = lib3.LocalKey.Constructors | 'UniqueKey';
    export type Interface = Omit<UniqueKey, Constructors>;
}
@DartClass
export class UniqueKey extends lib3.LocalKey {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UniqueKey() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `[#${lib4.shortHash(this)}]`;
    }
}

export namespace _DebugCreator {
    export type Constructors = '_DebugCreator';
    export type Interface = Omit<_DebugCreator, Constructors>;
}
@DartClass
export class _DebugCreator {
    constructor(element : RenderObjectElement) {
    }
    @defaultConstructor
    _DebugCreator(element : RenderObjectElement) {
        this.element = element;
    }
    element : RenderObjectElement;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.element.debugGetCreatorChain(12);
    }
}

export namespace ObjectKey {
    export type Constructors = lib3.LocalKey.Constructors | 'ObjectKey';
    export type Interface = Omit<ObjectKey, Constructors>;
}
@DartClass
export class ObjectKey extends lib3.LocalKey {
    constructor(value : core.DartObject) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ObjectKey(value : core.DartObject) {
        this.value = value;
    }
    value : core.DartObject;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : ObjectKey = other;
        return core.identical(this.value,typedOther.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.runtimeType,core.identityHashCode(this.value));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        if (op(Op.EQUALS,this.runtimeType,ObjectKey)) return `[${lib4.describeIdentity(this.value)}]`;
        return `[${this.runtimeType} ${lib4.describeIdentity(this.value)}]`;
    }
}

export namespace Element {
    export type Constructors = lib4.DiagnosticableTree.Constructors | 'Element';
    export type Interface = Omit<Element, Constructors>;
}
@DartClass
@Implements(BuildContext)
export class Element extends lib4.DiagnosticableTree implements BuildContext.Interface {
    constructor(widget : Widget) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Element(widget : Widget) {
        this._widget = this.widget;
        this._cachedHash = Element._nextHashCode = (Element._nextHashCode + 1) % 16777215;
        this._active = false;
        this._debugLifecycleState = _ElementLifecycle.initial;
        this._hadUnsatisfiedDependencies = false;
        this._dirty = true;
        this._inDirtyList = false;
        this._debugBuiltOnce = false;
        this._debugAllowIgnoredCallsToMarkNeedsBuild = false;
        this.assert = assert;
    }
     : any;

    _widget;

    _parent : Element;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        return core.identical(this,other);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this._cachedHash;
    }
    _cachedHash : number;

    private static __$_nextHashCode : number;
    static get _nextHashCode() : number { 
        if (this.__$_nextHashCode===undefined) {
            this.__$_nextHashCode = 1;
        }
        return this.__$_nextHashCode;
    }
    static set _nextHashCode(__$value : number)  { 
        this.__$_nextHashCode = __$value;
    }

    get slot() : any {
        return this._slot;
    }
    _slot : any;

    get depth() : number {
        return this._depth;
    }
    _depth : number;

    static _sort(a : Element,b : Element) : number {
        if (a.depth < b.depth) return -1;
        if (b.depth < a.depth) return 1;
        if (b.dirty && !a.dirty) return -1;
        if (a.dirty && !b.dirty) return 1;
        return 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : Widget {
        return this._widget;
    }
    _widget : Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get owner() : BuildOwner {
        return this._owner;
    }
    _owner : BuildOwner;

    _active : boolean;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    reassemble() : any {
        this.markNeedsBuild();
        this.visitChildren((child : Element) =>  {
            child.reassemble();
        });
    }
    _debugIsInScope(target : Element) : boolean {
        let current : Element = this;
        while (current != null){
            if (op(Op.EQUALS,target,current)) return true;
            current = current._parent;
        }
        return false;
    }
    get renderObject() : lib6.RenderObject {
        let result : lib6.RenderObject;
        var visit : (element : Element) => any = (element : Element) : any =>  {
            /* TODO (AssertStatementImpl) : assert (result == null); */;
            if (is(element, RenderObjectElement)) result = element.renderObject;else element.visitChildren(visit);
        };
        visit(this);
        return result;
    }
    _debugLifecycleState : _ElementLifecycle;

    visitChildren(visitor : (element : Element) => any) : any {
    }
    debugVisitOnstageChildren(visitor : (element : Element) => any) : any {
        return this.visitChildren(visitor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildElements(visitor : (element : Element) => any) : any {
        /* TODO (AssertStatementImpl) : assert (() {if (owner == null || !owner._debugStateLocked) return true; throw FlutterError('visitChildElements() called during build.\n' 'The BuildContext.visitChildElements() method can\'t be called during ' 'build because the child list is still being updated at that point, ' 'so the children might not be constructed yet, or might be old children ' 'that are going to be replaced.');}()); */;
        this.visitChildren(visitor);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    updateChild(child : Element,newWidget : Widget,newSlot : any) : Element {
        /* TODO (AssertStatementImpl) : assert (() {if (newWidget != null && newWidget.key is GlobalKey) {final GlobalKey key = newWidget.key; key._debugReserveFor(this);} return true;}()); */;
        if (op(Op.EQUALS,newWidget,null)) {
            if (child != null) this.deactivateChild(child);
            return null;
        }
        if (child != null) {
            if (op(Op.EQUALS,child.widget,newWidget)) {
                if (child.slot != newSlot) this.updateSlotForChild(child,newSlot);
                return child;
            }
            if (Widget.canUpdate(child.widget,newWidget)) {
                if (child.slot != newSlot) this.updateSlotForChild(child,newSlot);
                child.update(newWidget);
                /* TODO (AssertStatementImpl) : assert (child.widget == newWidget); */;
                /* TODO (AssertStatementImpl) : assert (() {child.owner._debugElementWasRebuilt(child); return true;}()); */;
                return child;
            }
            this.deactivateChild(child);
            /* TODO (AssertStatementImpl) : assert (child._parent == null); */;
        }
        return this.inflateWidget(newWidget,newSlot);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    mount(parent : Element,newSlot : any) : any {
        /* TODO (AssertStatementImpl) : assert (_debugLifecycleState == _ElementLifecycle.initial); */;
        /* TODO (AssertStatementImpl) : assert (widget != null); */;
        /* TODO (AssertStatementImpl) : assert (_parent == null); */;
        /* TODO (AssertStatementImpl) : assert (parent == null || parent._debugLifecycleState == _ElementLifecycle.active); */;
        /* TODO (AssertStatementImpl) : assert (slot == null); */;
        /* TODO (AssertStatementImpl) : assert (depth == null); */;
        /* TODO (AssertStatementImpl) : assert (!_active); */;
        this._parent = parent;
        this._slot = newSlot;
        this._depth = this._parent != null ? this._parent.depth + 1 : 1;
        this._active = true;
        if (parent != null) this._owner = parent.owner;
        if (is(this.widget.key, GlobalKey<any>)) {
            let key : GlobalKey<any> = this.widget.key;
            key._register(this);
        }
        this._updateInheritance();
        /* TODO (AssertStatementImpl) : assert (() {_debugLifecycleState = _ElementLifecycle.active; return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    update(newWidget : Widget) : any {
        /* TODO (AssertStatementImpl) : assert (_debugLifecycleState == _ElementLifecycle.active && widget != null && newWidget != null && newWidget != widget && depth != null && _active && Widget.canUpdate(widget, newWidget)); */;
        this._widget = newWidget;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    updateSlotForChild(child : Element,newSlot : any) : any {
        /* TODO (AssertStatementImpl) : assert (_debugLifecycleState == _ElementLifecycle.active); */;
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        /* TODO (AssertStatementImpl) : assert (child._parent == this); */;
        var visit : (element : Element) => any = (element : Element) : any =>  {
            element._updateSlot(newSlot);
            if (isNot(element, RenderObjectElement)) element.visitChildren(visit);
        };
        visit(child);
    }
    _updateSlot(newSlot : any) : any {
        /* TODO (AssertStatementImpl) : assert (_debugLifecycleState == _ElementLifecycle.active); */;
        /* TODO (AssertStatementImpl) : assert (widget != null); */;
        /* TODO (AssertStatementImpl) : assert (_parent != null); */;
        /* TODO (AssertStatementImpl) : assert (_parent._debugLifecycleState == _ElementLifecycle.active); */;
        /* TODO (AssertStatementImpl) : assert (depth != null); */;
        this._slot = newSlot;
    }
    _updateDepth(parentDepth : number) : any {
        let expectedDepth : number = parentDepth + 1;
        if (this._depth < expectedDepth) {
            this._depth = expectedDepth;
            this.visitChildren((child : Element) =>  {
                child._updateDepth(expectedDepth);
            });
        }
    }
    detachRenderObject() : any {
        this.visitChildren((child : Element) =>  {
            child.detachRenderObject();
        });
        this._slot = null;
    }
    attachRenderObject(newSlot : any) : any {
        /* TODO (AssertStatementImpl) : assert (_slot == null); */;
        this.visitChildren((child : Element) =>  {
            child.attachRenderObject(newSlot);
        });
        this._slot = newSlot;
    }
    _retakeInactiveElement(key : GlobalKey<any>,newWidget : Widget) : Element {
        let element : Element = key._currentElement;
        if (op(Op.EQUALS,element,null)) return null;
        if (!Widget.canUpdate(element.widget,newWidget)) return null;
        /* TODO (AssertStatementImpl) : assert (() {if (debugPrintGlobalKeyedWidgetLifecycle) debugPrint('Attempting to take $element from ${element._parent ?? "inactive elements list"} to put in $this.'); return true;}()); */;
        let parent : Element = element._parent;
        if (parent != null) {
            /* TODO (AssertStatementImpl) : assert (() {if (parent == this) {throw FlutterError('A GlobalKey was used multiple times inside one widget\'s child list.\n' 'The offending GlobalKey was: $key\n' 'The parent of the widgets with that key was:\n  $parent\n' 'The first child to get instantiated with that key became:\n  $element\n' 'The second child that was to be instantiated with that key was:\n  $widget\n' 'A GlobalKey can only be specified on one widget at a time in the widget tree.');} parent.owner._debugTrackElementThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans(parent, key); return true;}()); */;
            parent.forgetChild(element);
            parent.deactivateChild(element);
        }
        /* TODO (AssertStatementImpl) : assert (element._parent == null); */;
        this.owner._inactiveElements.remove(element);
        return element;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    inflateWidget(newWidget : Widget,newSlot : any) : Element {
        /* TODO (AssertStatementImpl) : assert (newWidget != null); */;
        let key : lib3.Key = newWidget.key;
        if (is(key, GlobalKey<any>)) {
            let newChild : Element = this._retakeInactiveElement(key,newWidget);
            if (newChild != null) {
                /* TODO (AssertStatementImpl) : assert (newChild._parent == null); */;
                /* TODO (AssertStatementImpl) : assert (() {_debugCheckForCycles(newChild); return true;}()); */;
                newChild._activateWithParent(this,newSlot);
                let updatedChild : Element = this.updateChild(newChild,newWidget,newSlot);
                /* TODO (AssertStatementImpl) : assert (newChild == updatedChild); */;
                return updatedChild;
            }
        }
        let newChild : Element = newWidget.createElement();
        /* TODO (AssertStatementImpl) : assert (() {_debugCheckForCycles(newChild); return true;}()); */;
        newChild.mount(this,newSlot);
        /* TODO (AssertStatementImpl) : assert (newChild._debugLifecycleState == _ElementLifecycle.active); */;
        return newChild;
    }
    _debugCheckForCycles(newChild : Element) : any {
        /* TODO (AssertStatementImpl) : assert (newChild._parent == null); */;
        /* TODO (AssertStatementImpl) : assert (() {Element node = this; while (node._parent != null) node = node._parent; assert (node != newChild); return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    deactivateChild(child : Element) : any {
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        /* TODO (AssertStatementImpl) : assert (child._parent == this); */;
        child._parent = null;
        child.detachRenderObject();
        this.owner._inactiveElements.add(child);
        /* TODO (AssertStatementImpl) : assert (() {if (debugPrintGlobalKeyedWidgetLifecycle) {if (child.widget.key is GlobalKey) debugPrint('Deactivated $child (keyed child of $this)');} return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    forgetChild(child : Element) : any{ throw 'abstract'}
    _activateWithParent(parent : Element,newSlot : any) : any {
        /* TODO (AssertStatementImpl) : assert (_debugLifecycleState == _ElementLifecycle.inactive); */;
        this._parent = parent;
        /* TODO (AssertStatementImpl) : assert (() {if (debugPrintGlobalKeyedWidgetLifecycle) debugPrint('Reactivating $this (now child of $_parent).'); return true;}()); */;
        this._updateDepth(this._parent.depth);
        Element._activateRecursively(this);
        this.attachRenderObject(newSlot);
        /* TODO (AssertStatementImpl) : assert (_debugLifecycleState == _ElementLifecycle.active); */;
    }
    static _activateRecursively(element : Element) : any {
        /* TODO (AssertStatementImpl) : assert (element._debugLifecycleState == _ElementLifecycle.inactive); */;
        element.activate();
        /* TODO (AssertStatementImpl) : assert (element._debugLifecycleState == _ElementLifecycle.active); */;
        element.visitChildren(Element._activateRecursively.bind(this));
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    activate() : any {
        /* TODO (AssertStatementImpl) : assert (_debugLifecycleState == _ElementLifecycle.inactive); */;
        /* TODO (AssertStatementImpl) : assert (widget != null); */;
        /* TODO (AssertStatementImpl) : assert (owner != null); */;
        /* TODO (AssertStatementImpl) : assert (depth != null); */;
        /* TODO (AssertStatementImpl) : assert (!_active); */;
        let hadDependencies : boolean = (this._dependencies != null && this._dependencies.isNotEmpty) || this._hadUnsatisfiedDependencies;
        this._active = true;
        ((_896_)=>(!!_896_)?_896_.clear():null)(this._dependencies);
        this._hadUnsatisfiedDependencies = false;
        this._updateInheritance();
        /* TODO (AssertStatementImpl) : assert (() {_debugLifecycleState = _ElementLifecycle.active; return true;}()); */;
        if (this._dirty) this.owner.scheduleBuildFor(this);
        if (hadDependencies) this.didChangeDependencies();
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    deactivate() : any {
        /* TODO (AssertStatementImpl) : assert (_debugLifecycleState == _ElementLifecycle.active); */;
        /* TODO (AssertStatementImpl) : assert (widget != null); */;
        /* TODO (AssertStatementImpl) : assert (depth != null); */;
        /* TODO (AssertStatementImpl) : assert (_active); */;
        if (this._dependencies != null && this._dependencies.isNotEmpty) {
            for(let dependency of this._dependencies) dependency._dependents.remove(this);
        }
        this._inheritedWidgets = null;
        this._active = false;
        /* TODO (AssertStatementImpl) : assert (() {_debugLifecycleState = _ElementLifecycle.inactive; return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    debugDeactivated() : any {
        /* TODO (AssertStatementImpl) : assert (_debugLifecycleState == _ElementLifecycle.inactive); */;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    unmount() : any {
        /* TODO (AssertStatementImpl) : assert (_debugLifecycleState == _ElementLifecycle.inactive); */;
        /* TODO (AssertStatementImpl) : assert (widget != null); */;
        /* TODO (AssertStatementImpl) : assert (depth != null); */;
        /* TODO (AssertStatementImpl) : assert (!_active); */;
        if (is(this.widget.key, GlobalKey<any>)) {
            let key : GlobalKey<any> = this.widget.key;
            key._unregister(this);
        }
        /* TODO (AssertStatementImpl) : assert (() {_debugLifecycleState = _ElementLifecycle.defunct; return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    findRenderObject() : lib6.RenderObject {
        return this.renderObject;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : any {
        /* TODO (AssertStatementImpl) : assert (() {if (_debugLifecycleState != _ElementLifecycle.active) {throw FlutterError('Cannot get size of inactive element.\n' 'In order for an element to have a valid size, the element must be ' 'active, which means it is part of the tree. Instead, this element ' 'is in the $_debugLifecycleState state.\n' 'The size getter was called for the following element:\n' '  $this\n');} if (owner._debugBuilding) {throw FlutterError('Cannot get size during build.\n' 'The size of this render object has not yet been determined because ' 'the framework is still in the process of building widgets, which ' 'means the render tree for this frame has not yet been determined. ' 'The size getter should only be called from paint callbacks or ' 'interaction event handlers (e.g. gesture callbacks).\n' '\n' 'If you need some sizing information during build to decide which ' 'widgets to build, consider using a LayoutBuilder widget, which can ' 'tell you the layout constraints at a given location in the tree. See ' '<https://docs.flutter.io/flutter/widgets/LayoutBuilder-class.html> ' 'for more details.\n' '\n' 'The size getter was called for the following element:\n' '  $this\n');} return true;}()); */;
        let renderObject : lib6.RenderObject = this.findRenderObject();
        /* TODO (AssertStatementImpl) : assert (() {if (renderObject == null) {throw FlutterError('Cannot get size without a render object.\n' 'In order for an element to have a valid size, the element must have ' 'an associated render object. This element does not have an associated ' 'render object, which typically means that the size getter was called ' 'too early in the pipeline (e.g., during the build phase) before the ' 'framework has created the render tree.\n' 'The size getter was called for the following element:\n' '  $this\n');} if (renderObject is RenderSliver) {throw FlutterError('Cannot get size from a RenderSliver.\n' 'The render object associated with this element is a ' '${renderObject.runtimeType}, which is a subtype of RenderSliver. ' 'Slivers do not have a size per se. They have a more elaborate ' 'geometry description, which can be accessed by calling ' 'findRenderObject and then using the "geometry" getter on the ' 'resulting object.\n' 'The size getter was called for the following element:\n' '  $this\n' 'The associated render sliver was:\n' '  ${renderObject.toStringShallow(joiner: "\n  ")}');} if (renderObject is! RenderBox) {throw FlutterError('Cannot get size from a render object that is not a RenderBox.\n' 'Instead of being a subtype of RenderBox, the render object associated ' 'with this element is a ${renderObject.runtimeType}. If this type of ' 'render object does have a size, consider calling findRenderObject ' 'and extracting its size manually.\n' 'The size getter was called for the following element:\n' '  $this\n' 'The associated render object was:\n' '  ${renderObject.toStringShallow(joiner: "\n  ")}');} final RenderBox box = renderObject; if (!box.hasSize) {throw FlutterError('Cannot get size from a render object that has not been through layout.\n' 'The size of this render object has not yet been determined because ' 'this render object has not yet been through layout, which typically ' 'means that the size getter was called too early in the pipeline ' '(e.g., during the build phase) before the framework has determined ' 'the size and position of the render objects during layout.\n' 'The size getter was called for the following element:\n' '  $this\n' 'The render object from which the size was to be obtained was:\n' '  ${box.toStringShallow(joiner: "\n  ")}');} if (box.debugNeedsLayout) {throw FlutterError('Cannot get size from a render object that has been marked dirty for layout.\n' 'The size of this render object is ambiguous because this render object has ' 'been modified since it was last laid out, which typically means that the size ' 'getter was called too early in the pipeline (e.g., during the build phase) ' 'before the framework has determined the size and position of the render ' 'objects during layout.\n' 'The size getter was called for the following element:\n' '  $this\n' 'The render object from which the size was to be obtained was:\n' '  ${box.toStringShallow(joiner: "\n  ")}\n' 'Consider using debugPrintMarkNeedsLayoutStacks to determine why the render ' 'object in question is dirty, if you did not expect this.');} return true;}()); */;
        if (is(renderObject, any)) return renderObject.size;
        return null;
    }
    _inheritedWidgets : core.DartMap<core.Type,InheritedElement>;

    _dependencies : core.DartSet<InheritedElement>;

    _hadUnsatisfiedDependencies : boolean;

    _debugCheckStateIsActiveForAncestorLookup() : boolean {
        /* TODO (AssertStatementImpl) : assert (() {if (_debugLifecycleState != _ElementLifecycle.active) {throw FlutterError('Looking up a deactivated widget\'s ancestor is unsafe.\n' 'At this point the state of the widget\'s element tree is no longer ' 'stable. To safely refer to a widget\'s ancestor in its dispose() method, ' 'save a reference to the ancestor by calling inheritFromWidgetOfExactType() ' 'in the widget\'s didChangeDependencies() method.\n');} return true;}()); */;
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    inheritFromElement(ancestor : InheritedElement,_namedArguments? : {aspect? : core.DartObject}) : InheritedWidget {
        let {aspect} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (ancestor != null); */;
        this._dependencies = ( this._dependencies ) || ( core.DartHashSet() );
        this._dependencies.add(ancestor);
        ancestor.updateDependencies(this,aspect);
        return ancestor.widget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    inheritFromWidgetOfExactType(targetType : core.Type,_namedArguments? : {aspect? : core.DartObject}) : InheritedWidget {
        let {aspect} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (_debugCheckStateIsActiveForAncestorLookup()); */;
        let ancestor : InheritedElement = this._inheritedWidgets == null ? null : this._inheritedWidgets.get(targetType);
        if (ancestor != null) {
            /* TODO (AssertStatementImpl) : assert (ancestor is InheritedElement); */;
            return this.inheritFromElement(ancestor,{
                aspect : aspect});
        }
        this._hadUnsatisfiedDependencies = true;
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    ancestorInheritedElementForWidgetOfExactType(targetType : core.Type) : InheritedElement {
        /* TODO (AssertStatementImpl) : assert (_debugCheckStateIsActiveForAncestorLookup()); */;
        let ancestor : InheritedElement = this._inheritedWidgets == null ? null : this._inheritedWidgets.get(targetType);
        return ancestor;
    }
    _updateInheritance() : any {
        /* TODO (AssertStatementImpl) : assert (_active); */;
        this._inheritedWidgets = ((t)=>(!!t)?t._inheritedWidgets:null)(this._parent);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    ancestorWidgetOfExactType(targetType : core.Type) : Widget {
        /* TODO (AssertStatementImpl) : assert (_debugCheckStateIsActiveForAncestorLookup()); */;
        let ancestor : Element = this._parent;
        while (ancestor != null && ancestor.widget.runtimeType != targetType)ancestor = ancestor._parent;
        return ((t)=>(!!t)?t.widget:null)(ancestor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    ancestorStateOfType(matcher : TypeMatcher<any>) : State<any> {
        /* TODO (AssertStatementImpl) : assert (_debugCheckStateIsActiveForAncestorLookup()); */;
        let ancestor : Element = this._parent;
        while (ancestor != null){
            if (is(ancestor, StatefulElement) && matcher.check(ancestor.state)) break;
            ancestor = ancestor._parent;
        }
        let statefulAncestor : StatefulElement = ancestor;
        return ((t)=>(!!t)?t.state:null)(statefulAncestor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rootAncestorStateOfType(matcher : TypeMatcher<any>) : State<any> {
        /* TODO (AssertStatementImpl) : assert (_debugCheckStateIsActiveForAncestorLookup()); */;
        let ancestor : Element = this._parent;
        let statefulAncestor : StatefulElement;
        while (ancestor != null){
            if (is(ancestor, StatefulElement) && matcher.check(ancestor.state)) statefulAncestor = ancestor;
            ancestor = ancestor._parent;
        }
        return ((t)=>(!!t)?t.state:null)(statefulAncestor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    ancestorRenderObjectOfType(matcher : TypeMatcher<any>) : lib6.RenderObject {
        /* TODO (AssertStatementImpl) : assert (_debugCheckStateIsActiveForAncestorLookup()); */;
        let ancestor : Element = this._parent;
        while (ancestor != null){
            if (is(ancestor, RenderObjectElement) && matcher.check(ancestor.renderObject)) break;
            ancestor = ancestor._parent;
        }
        let renderObjectAncestor : RenderObjectElement = ancestor;
        return ((t)=>(!!t)?t.renderObject:null)(renderObjectAncestor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitAncestorElements(visitor : (element : Element) => boolean) : any {
        /* TODO (AssertStatementImpl) : assert (_debugCheckStateIsActiveForAncestorLookup()); */;
        let ancestor : Element = this._parent;
        while (ancestor != null && visitor(ancestor))ancestor = ancestor._parent;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        /* TODO (AssertStatementImpl) : assert (_active); */;
        /* TODO (AssertStatementImpl) : assert (_debugCheckOwnerBuildTargetExists('didChangeDependencies')); */;
        this.markNeedsBuild();
    }
    _debugCheckOwnerBuildTargetExists(methodName : string) : boolean {
        /* TODO (AssertStatementImpl) : assert (() {if (owner._debugCurrentBuildTarget == null) {throw FlutterError('$methodName for ${widget.runtimeType} was called at an ' 'inappropriate time.\n' 'It may only be called while the widgets are being built. A possible ' 'cause of this error is when $methodName is called during ' 'one of:\n' ' * network I/O event\n' ' * file I/O event\n' ' * timer\n' ' * microtask (caused by Future.then, async/await, scheduleMicrotask)');} return true;}()); */;
        return true;
    }
    debugGetCreatorChain(limit : number) : string {
        let chain : core.DartList<string> = new core.DartList.literal<string>();
        let node : Element = this;
        while (chain.length < limit && node != null){
            chain.add(node.toStringShort());
            node = node._parent;
        }
        if (node != null) chain.add('⋯');
        return chain.join(' ← ');
    }
    debugGetDiagnosticChain() : core.DartList<Element> {
        let chain : core.DartList<Element> = new core.DartList.literal<Element>(this);
        let node : Element = this._parent;
        while (node != null){
            chain.add(node);
            node = node._parent;
        }
        return chain;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toStringShort() : string {
        return this.widget != null ? `${this.widget.toStringShort()}` : `[${this.runtimeType}]`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib4.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.defaultDiagnosticsTreeStyle = lib4.DiagnosticsTreeStyle.dense;
        properties.add(lib4.ObjectFlagProperty('depth',this.depth,{
            ifNull : 'no depth'}));
        properties.add(lib4.ObjectFlagProperty('widget',this.widget,{
            ifNull : 'no widget'}));
        if (this.widget != null) {
            properties.add(lib4.DiagnosticsProperty('key',((t)=>(!!t)?t.key:null)(this.widget),{
                showName : false,defaultValue : null,level : lib4.DiagnosticLevel.hidden}));
            this.widget.debugFillProperties(properties);
        }
        properties.add(lib4.FlagProperty('dirty',{
            value : this.dirty,ifTrue : 'dirty'}));
        if (this._dependencies != null && this._dependencies.isNotEmpty) {
            let diagnosticsDependencies : core.DartList<lib4.DiagnosticsNode> = this._dependencies.map((element : InheritedElement) =>  {
                return element.widget.toDiagnosticsNode({
                    style : lib4.DiagnosticsTreeStyle.sparse});
            }).toList();
            properties.add(lib4.DiagnosticsProperty('dependencies',diagnosticsDependencies));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugDescribeChildren() : core.DartList<lib4.DiagnosticsNode> {
        let children : core.DartList<lib4.DiagnosticsNode> = new core.DartList.literal<lib4.DiagnosticsNode>();
        this.visitChildren((child : Element) =>  {
            if (child != null) {
                children.add(child.toDiagnosticsNode());
            }else {
                children.add(lib4.DiagnosticsNode.message('<null child>'));
            }
        });
        return children;
    }
    get dirty() : boolean {
        return this._dirty;
    }
    _dirty : boolean;

    _inDirtyList : boolean;

    _debugBuiltOnce : boolean;

    _debugAllowIgnoredCallsToMarkNeedsBuild : boolean;

    _debugSetAllowIgnoredCallsToMarkNeedsBuild(value : boolean) : boolean {
        /* TODO (AssertStatementImpl) : assert (_debugAllowIgnoredCallsToMarkNeedsBuild == !value); */;
        this._debugAllowIgnoredCallsToMarkNeedsBuild = value;
        return true;
    }
    markNeedsBuild() : any {
        /* TODO (AssertStatementImpl) : assert (_debugLifecycleState != _ElementLifecycle.defunct); */;
        if (!this._active) return;
        /* TODO (AssertStatementImpl) : assert (owner != null); */;
        /* TODO (AssertStatementImpl) : assert (_debugLifecycleState == _ElementLifecycle.active); */;
        /* TODO (AssertStatementImpl) : assert (() {if (owner._debugBuilding) {assert (owner._debugCurrentBuildTarget != null); assert (owner._debugStateLocked); if (_debugIsInScope(owner._debugCurrentBuildTarget)) return true; if (!_debugAllowIgnoredCallsToMarkNeedsBuild) {throw FlutterError('setState() or markNeedsBuild() called during build.\n' 'This ${widget.runtimeType} widget cannot be marked as needing to build because the framework ' 'is already in the process of building widgets. A widget can be marked as ' 'needing to be built during the build phase only if one of its ancestors ' 'is currently building. This exception is allowed because the framework ' 'builds parent widgets before children, which means a dirty descendant ' 'will always be built. Otherwise, the framework might not visit this ' 'widget during this build phase.\n' 'The widget on which setState() or markNeedsBuild() was called was:\n' '  $this\n' '${owner._debugCurrentBuildTarget == null ? "" : "The widget which was currently being built when the offending call was made was:\n  ${owner._debugCurrentBuildTarget}"}');} assert (dirty);} else if (owner._debugStateLocked) {assert (!_debugAllowIgnoredCallsToMarkNeedsBuild); throw FlutterError('setState() or markNeedsBuild() called when widget tree was locked.\n' 'This ${widget.runtimeType} widget cannot be marked as needing to build ' 'because the framework is locked.\n' 'The widget on which setState() or markNeedsBuild() was called was:\n' '  $this\n');} return true;}()); */;
        if (this.dirty) return;
        this._dirty = true;
        this.owner.scheduleBuildFor(this);
    }
    rebuild() : any {
        /* TODO (AssertStatementImpl) : assert (_debugLifecycleState != _ElementLifecycle.initial); */;
        if (!this._active || !this._dirty) return;
        /* TODO (AssertStatementImpl) : assert (() {if (debugOnRebuildDirtyWidget != null) {debugOnRebuildDirtyWidget(this, _debugBuiltOnce);} if (debugPrintRebuildDirtyWidgets) {if (!_debugBuiltOnce) {debugPrint('Building $this'); _debugBuiltOnce = true;} else {debugPrint('Rebuilding $this');}} return true;}()); */;
        /* TODO (AssertStatementImpl) : assert (_debugLifecycleState == _ElementLifecycle.active); */;
        /* TODO (AssertStatementImpl) : assert (owner._debugStateLocked); */;
        let debugPreviousBuildTarget : Element;
        /* TODO (AssertStatementImpl) : assert (() {debugPreviousBuildTarget = owner._debugCurrentBuildTarget; owner._debugCurrentBuildTarget = this; return true;}()); */;
        this.performRebuild();
        /* TODO (AssertStatementImpl) : assert (() {assert (owner._debugCurrentBuildTarget == this); owner._debugCurrentBuildTarget = debugPreviousBuildTarget; return true;}()); */;
        /* TODO (AssertStatementImpl) : assert (!_dirty); */;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    performRebuild() : any{ throw 'abstract'}
}

export namespace BuildOwner {
    export type Constructors = 'BuildOwner';
    export type Interface = Omit<BuildOwner, Constructors>;
}
@DartClass
export class BuildOwner {
    constructor(_namedArguments? : {onBuildScheduled? : any}) {
    }
    @defaultConstructor
    BuildOwner(_namedArguments? : {onBuildScheduled? : any}) {
        let {onBuildScheduled} = Object.assign({
        }, _namedArguments );
        this._inactiveElements = _InactiveElements();
        this._dirtyElements = new core.DartList.literal<Element>();
        this._scheduledFlushDirtyElements = false;
        this.focusManager = lib7.FocusManager();
        this._debugStateLockLevel = 0;
        this._debugBuilding = false;
        this.onBuildScheduled = onBuildScheduled;
    }
    onBuildScheduled : any;

    _inactiveElements : _InactiveElements;

    _dirtyElements : core.DartList<Element>;

    _scheduledFlushDirtyElements : boolean;

    _dirtyElementsNeedsResorting : boolean;

    get _debugIsInBuildScope() : boolean {
        return this._dirtyElementsNeedsResorting != null;
    }
    focusManager : lib7.FocusManager;

    scheduleBuildFor(element : Element) : any {
        /* TODO (AssertStatementImpl) : assert (element != null); */;
        /* TODO (AssertStatementImpl) : assert (element.owner == this); */;
        /* TODO (AssertStatementImpl) : assert (() {if (debugPrintScheduleBuildForStacks) debugPrintStack(label: 'scheduleBuildFor() called for $element${_dirtyElements.contains(element) ? " (ALREADY IN LIST)" : ""}'); if (!element.dirty) {throw FlutterError('scheduleBuildFor() called for a widget that is not marked as dirty.\n' 'The method was called for the following element:\n' '  $element\n' 'This element is not current marked as dirty. Make sure to set the dirty flag before ' 'calling scheduleBuildFor().\n' 'If you did not attempt to call scheduleBuildFor() yourself, then this probably ' 'indicates a bug in the widgets framework. Please report it: ' 'https://github.com/flutter/flutter/issues/new?template=BUG.md');} return true;}()); */;
        if (element._inDirtyList) {
            /* TODO (AssertStatementImpl) : assert (() {if (debugPrintScheduleBuildForStacks) debugPrintStack(label: 'BuildOwner.scheduleBuildFor() called; _dirtyElementsNeedsResorting was $_dirtyElementsNeedsResorting (now true); dirty list is: $_dirtyElements'); if (!_debugIsInBuildScope) {throw FlutterError('BuildOwner.scheduleBuildFor() called inappropriately.\n' 'The BuildOwner.scheduleBuildFor() method should only be called while the ' 'buildScope() method is actively rebuilding the widget tree.');} return true;}()); */;
            this._dirtyElementsNeedsResorting = true;
            return;
        }
        if (!this._scheduledFlushDirtyElements && this.onBuildScheduled != null) {
            this._scheduledFlushDirtyElements = true;
            this.onBuildScheduled();
        }
        this._dirtyElements.add(element);
        element._inDirtyList = true;
        /* TODO (AssertStatementImpl) : assert (() {if (debugPrintScheduleBuildForStacks) debugPrint('...dirty list is now: $_dirtyElements'); return true;}()); */;
    }
    _debugStateLockLevel : number;

    get _debugStateLocked() : boolean {
        return this._debugStateLockLevel > 0;
    }
    get debugBuilding() : boolean {
        return this._debugBuilding;
    }
    _debugBuilding : boolean;

    _debugCurrentBuildTarget : Element;

    lockState(callback : () => any) : any {
        /* TODO (AssertStatementImpl) : assert (callback != null); */;
        /* TODO (AssertStatementImpl) : assert (_debugStateLockLevel >= 0); */;
        /* TODO (AssertStatementImpl) : assert (() {_debugStateLockLevel += 1; return true;}()); */;
        try {
            callback();
        } finally {
            /* TODO (AssertStatementImpl) : assert (() {_debugStateLockLevel -= 1; return true;}()); */;
        }
        /* TODO (AssertStatementImpl) : assert (_debugStateLockLevel >= 0); */;
    }
    buildScope(context : Element,callback? : any) : any {
        if (op(Op.EQUALS,callback,null) && this._dirtyElements.isEmpty) return;
        /* TODO (AssertStatementImpl) : assert (context != null); */;
        /* TODO (AssertStatementImpl) : assert (_debugStateLockLevel >= 0); */;
        /* TODO (AssertStatementImpl) : assert (!_debugBuilding); */;
        /* TODO (AssertStatementImpl) : assert (() {if (debugPrintBuildScope) debugPrint('buildScope called with context $context; dirty list is: $_dirtyElements'); _debugStateLockLevel += 1; _debugBuilding = true; return true;}()); */;
        developer.Timeline.startSync('Build',{
            arguments : lib8.properties.timelineWhitelistArguments});
        try {
            this._scheduledFlushDirtyElements = true;
            if (callback != null) {
                /* TODO (AssertStatementImpl) : assert (_debugStateLocked); */;
                let debugPreviousBuildTarget : Element;
                /* TODO (AssertStatementImpl) : assert (() {context._debugSetAllowIgnoredCallsToMarkNeedsBuild(true); debugPreviousBuildTarget = _debugCurrentBuildTarget; _debugCurrentBuildTarget = context; return true;}()); */;
                this._dirtyElementsNeedsResorting = false;
                try {
                    callback();
                } finally {
                    /* TODO (AssertStatementImpl) : assert (() {context._debugSetAllowIgnoredCallsToMarkNeedsBuild(false); assert (_debugCurrentBuildTarget == context); _debugCurrentBuildTarget = debugPreviousBuildTarget; _debugElementWasRebuilt(context); return true;}()); */;
                }
            }
            this._dirtyElements.sort(Element._sort.bind(Element));
            this._dirtyElementsNeedsResorting = false;
            let dirtyCount : number = this._dirtyElements.length;
            let index : number = 0;
            while (index < dirtyCount){
                /* TODO (AssertStatementImpl) : assert (_dirtyElements[index] != null); */;
                /* TODO (AssertStatementImpl) : assert (_dirtyElements[index]._inDirtyList); */;
                /* TODO (AssertStatementImpl) : assert (!_dirtyElements[index]._active || _dirtyElements[index]._debugIsInScope(context)); */;
                try {
                    this._dirtyElements[index].rebuild();
                } catch (__error__) {

                    {
                        let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let e = __error__;
                        _debugReportException('while rebuilding dirty elements',e,stack,{
                            informationCollector : (information : core.DartStringBuffer) =>  {
                                information.writeln(`The element being rebuilt at the time was index ${index} of ${dirtyCount}:`);
                                information.write(`  ${this._dirtyElements[index]}`);
                            }});
                    }
                }
                index += 1;
                if (dirtyCount < this._dirtyElements.length || this._dirtyElementsNeedsResorting) {
                    this._dirtyElements.sort(Element._sort.bind(Element));
                    this._dirtyElementsNeedsResorting = false;
                    dirtyCount = this._dirtyElements.length;
                    while (index > 0 && this._dirtyElements[index - 1].dirty){
                        index -= 1;
                    }
                }
            }
            /* TODO (AssertStatementImpl) : assert (() {if (_dirtyElements.any((Element element) => element._active && element.dirty)) {throw FlutterError('buildScope missed some dirty elements.\n' 'This probably indicates that the dirty list should have been resorted but was not.\n' 'The list of dirty elements at the end of the buildScope call was:\n' '  $_dirtyElements');} return true;}()); */;
        } finally {
            for(let element of this._dirtyElements) {
                /* TODO (AssertStatementImpl) : assert (element._inDirtyList); */;
                element._inDirtyList = false;
            }
            this._dirtyElements.clear();
            this._scheduledFlushDirtyElements = false;
            this._dirtyElementsNeedsResorting = null;
            developer.Timeline.finishSync();
            /* TODO (AssertStatementImpl) : assert (_debugBuilding); */;
            /* TODO (AssertStatementImpl) : assert (() {_debugBuilding = false; _debugStateLockLevel -= 1; if (debugPrintBuildScope) debugPrint('buildScope finished'); return true;}()); */;
        }
        /* TODO (AssertStatementImpl) : assert (_debugStateLockLevel >= 0); */;
    }
    _debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans : core.DartMap<Element,core.DartSet<GlobalKey<any>>>;

    _debugTrackElementThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans(node : Element,key : GlobalKey<any>) : any {
        this._debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans = ( this._debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans ) || ( core.DartHashMap() );
        let keys : core.DartSet<GlobalKey<any>> = this._debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans.putIfAbsent(node,() =>  {
            return core.DartHashSet();
        });
        keys.add(key);
    }
    _debugElementWasRebuilt(node : Element) : any {
        ((_895_)=>(!!_895_)?_895_.remove(node):null)(this._debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans);
    }
    finalizeTree() : any {
        developer.Timeline.startSync('Finalize tree',{
            arguments : lib8.properties.timelineWhitelistArguments});
        try {
            this.lockState(() =>  {
                this._inactiveElements._unmountAll();
            });
            /* TODO (AssertStatementImpl) : assert (() {try {GlobalKey._debugVerifyIllFatedPopulation(); if (_debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans != null && _debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans.isNotEmpty) {final Set<GlobalKey> keys = HashSet<GlobalKey>(); for (Element element in _debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans.keys) {if (element._debugLifecycleState != _ElementLifecycle.defunct) keys.addAll(_debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans[element]);} if (keys.isNotEmpty) {final Map<String, int> keyStringCount = HashMap<String, int>(); for (String key in keys.map<String>((GlobalKey key) => key.toString())) {if (keyStringCount.containsKey(key)) {keyStringCount[key] += 1;} else {keyStringCount[key] = 1;}} final List<String> keyLabels = <String> []; keyStringCount.forEach((String key, int count) {if (count == 1) {keyLabels.add(key);} else {keyLabels.add('$key ($count different affected keys had this toString representation)');}}); final Iterable<Element> elements = _debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans.keys; final Map<String, int> elementStringCount = HashMap<String, int>(); for (String element in elements.map<String>((Element element) => element.toString())) {if (elementStringCount.containsKey(element)) {elementStringCount[element] += 1;} else {elementStringCount[element] = 1;}} final List<String> elementLabels = <String> []; elementStringCount.forEach((String element, int count) {if (count == 1) {elementLabels.add(element);} else {elementLabels.add('$element ($count different affected elements had this toString representation)');}}); assert (keyLabels.isNotEmpty); final String the = keys.length == 1 ? ' the' : ''; final String s = keys.length == 1 ? '' : 's'; final String were = keys.length == 1 ? 'was' : 'were'; final String their = keys.length == 1 ? 'its' : 'their'; final String respective = elementLabels.length == 1 ? '' : ' respective'; final String those = keys.length == 1 ? 'that' : 'those'; final String s2 = elementLabels.length == 1 ? '' : 's'; final String those2 = elementLabels.length == 1 ? 'that' : 'those'; final String they = elementLabels.length == 1 ? 'it' : 'they'; final String think = elementLabels.length == 1 ? 'thinks' : 'think'; final String are = elementLabels.length == 1 ? 'is' : 'are'; throw FlutterError('Duplicate GlobalKey$s detected in widget tree.\n' 'The following GlobalKey$s $were specified multiple times in the widget tree. This will lead to ' 'parts of the widget tree being truncated unexpectedly, because the second time a key is seen, ' 'the previous instance is moved to the new location. The key$s $were:\n' '- ${keyLabels.join("\n  ")}\n' 'This was determined by noticing that after$the widget$s with the above global key$s $were moved ' 'out of $their$respective previous parent$s2, $those2 previous parent$s2 never updated during this frame, meaning ' 'that $they either did not update at all or updated before the widget$s $were moved, in either case ' 'implying that $they still $think that $they should have a child with $those global key$s.\n' 'The specific parent$s2 that did not update after having one or more children forcibly removed ' 'due to GlobalKey reparenting $are:\n' '- ${elementLabels.join("\n  ")}\n' 'A GlobalKey can only be specified on one widget at a time in the widget tree.');}}} finally {_debugElementsThatWillNeedToBeRebuiltDueToGlobalKeyShenanigans?.clear();} return true;}()); */;
        } catch (__error__) {

            {
                let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                _debugReportException('while finalizing the widget tree',e,stack);
            }
        } finally {
            developer.Timeline.finishSync();
        }
    }
    reassemble(root : Element) : any {
        developer.Timeline.startSync('Dirty Element Tree');
        try {
            /* TODO (AssertStatementImpl) : assert (root._parent == null); */;
            /* TODO (AssertStatementImpl) : assert (root.owner == this); */;
            root.reassemble();
        } finally {
            developer.Timeline.finishSync();
        }
    }
}

export namespace _InactiveElements {
    export type Constructors = '_InactiveElements';
    export type Interface = Omit<_InactiveElements, Constructors>;
}
@DartClass
export class _InactiveElements {
    _locked : boolean;

    _elements : core.DartSet<Element>;

    _unmount(element : Element) : any {
        /* TODO (AssertStatementImpl) : assert (element._debugLifecycleState == _ElementLifecycle.inactive); */;
        /* TODO (AssertStatementImpl) : assert (() {if (debugPrintGlobalKeyedWidgetLifecycle) {if (element.widget.key is GlobalKey) debugPrint('Discarding $element from inactive elements list.');} return true;}()); */;
        element.visitChildren((child : Element) =>  {
            /* TODO (AssertStatementImpl) : assert (child._parent == element); */;
            this._unmount(child);
        });
        element.unmount();
        /* TODO (AssertStatementImpl) : assert (element._debugLifecycleState == _ElementLifecycle.defunct); */;
    }
    _unmountAll() : any {
        this._locked = true;
        let elements : core.DartList<Element> = ((_) : core.DartList<Element> =>  {
            {
                _.sort(Element._sort.bind(Element));
                return _;
            }
        })(this._elements.toList());
        this._elements.clear();
        try {
            elements.reversed.forEach(this._unmount.bind(this));
        } finally {
            /* TODO (AssertStatementImpl) : assert (_elements.isEmpty); */;
            this._locked = false;
        }
    }
    _deactivateRecursively(element : Element) : any {
        /* TODO (AssertStatementImpl) : assert (element._debugLifecycleState == _ElementLifecycle.active); */;
        element.deactivate();
        /* TODO (AssertStatementImpl) : assert (element._debugLifecycleState == _ElementLifecycle.inactive); */;
        element.visitChildren(this._deactivateRecursively.bind(this));
        /* TODO (AssertStatementImpl) : assert (() {element.debugDeactivated(); return true;}()); */;
    }
    add(element : Element) : any {
        /* TODO (AssertStatementImpl) : assert (!_locked); */;
        /* TODO (AssertStatementImpl) : assert (!_elements.contains(element)); */;
        /* TODO (AssertStatementImpl) : assert (element._parent == null); */;
        if (element._active) this._deactivateRecursively(element);
        this._elements.add(element);
    }
    remove(element : Element) : any {
        /* TODO (AssertStatementImpl) : assert (!_locked); */;
        /* TODO (AssertStatementImpl) : assert (_elements.contains(element)); */;
        /* TODO (AssertStatementImpl) : assert (element._parent == null); */;
        this._elements.remove(element);
        /* TODO (AssertStatementImpl) : assert (!element._active); */;
    }
    debugContains(element : Element) : boolean {
        let result : boolean;
        /* TODO (AssertStatementImpl) : assert (() {result = _elements.contains(element); return true;}()); */;
        return result;
    }
    constructor() {
    }
    @defaultConstructor
    _InactiveElements() {
        this._locked = false;
        this._elements = core.DartHashSet();
    }
}

export namespace BuildContext {
    export type Constructors = 'BuildContext';
    export type Interface = Omit<BuildContext, Constructors>;
}
@DartClass
export class BuildContext {
    @AbstractProperty
    get widget() : Widget{ throw 'abstract'}
    @AbstractProperty
    get owner() : BuildOwner{ throw 'abstract'}
    @Abstract
    findRenderObject() : lib6.RenderObject{ throw 'abstract'}
    @AbstractProperty
    get size() : any{ throw 'abstract'}
    @Abstract
    inheritFromElement(ancestor : InheritedElement,_namedArguments? : {aspect? : core.DartObject}) : InheritedWidget{ throw 'abstract'}
    @Abstract
    inheritFromWidgetOfExactType(targetType : core.Type,_namedArguments? : {aspect? : core.DartObject}) : InheritedWidget{ throw 'abstract'}
    @Abstract
    ancestorInheritedElementForWidgetOfExactType(targetType : core.Type) : InheritedElement{ throw 'abstract'}
    @Abstract
    ancestorWidgetOfExactType(targetType : core.Type) : Widget{ throw 'abstract'}
    @Abstract
    ancestorStateOfType(matcher : TypeMatcher<any>) : State<any>{ throw 'abstract'}
    @Abstract
    rootAncestorStateOfType(matcher : TypeMatcher<any>) : State<any>{ throw 'abstract'}
    @Abstract
    ancestorRenderObjectOfType(matcher : TypeMatcher<any>) : lib6.RenderObject{ throw 'abstract'}
    @Abstract
    visitAncestorElements(visitor : (element : Element) => boolean) : any{ throw 'abstract'}
    @Abstract
    visitChildElements(visitor : (element : Element) => any) : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    BuildContext() {
    }
}

export namespace LabeledGlobalKey {
    export type Constructors = GlobalKey.Constructors | 'LabeledGlobalKey';
    export type Interface<T extends State<StatefulWidget>> = Omit<LabeledGlobalKey<T extends State<StatefulWidget>>, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'optionalTypeArgs',value : {
        arguments : [],namedArguments : {
        }}})
export class LabeledGlobalKey<T extends State<StatefulWidget>> extends GlobalKey<T> {
    constructor(_debugLabel : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LabeledGlobalKey(_debugLabel : string) {
        super.constructor();
        this._debugLabel = _debugLabel;
    }
    _debugLabel : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let label : string = this._debugLabel != null ? ` ${this._debugLabel}` : '';
        if (op(Op.EQUALS,this.runtimeType,LabeledGlobalKey<T>)) return `[GlobalKey#${lib4.shortHash(this)}${label}]`;
        return `[${lib4.describeIdentity(this)}${label}]`;
    }
}

export namespace GlobalObjectKey {
    export type Constructors = GlobalKey.Constructors | 'GlobalObjectKey';
    export type Interface<T extends State<StatefulWidget>> = Omit<GlobalObjectKey<T extends State<StatefulWidget>>, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'optionalTypeArgs',value : {
        arguments : [],namedArguments : {
        }}})
export class GlobalObjectKey<T extends State<StatefulWidget>> extends GlobalKey<T> {
    constructor(value : core.DartObject) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GlobalObjectKey(value : core.DartObject) {
        super.constructor();
        this.value = value;
    }
    value : core.DartObject;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : GlobalObjectKey<T> = other;
        return core.identical(this.value,typedOther.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return core.identityHashCode(this.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let selfType : string = this.runtimeType.toString();
        let suffix : string = '<State<StatefulWidget>>';
        if (new core.DartString(selfType).endsWith(suffix)) {
            selfType = new core.DartString(selfType).substring(0,new core.DartString(selfType).length - new core.DartString(suffix).length);
        }
        return `[${selfType} ${lib4.describeIdentity(this.value)}]`;
    }
}

export namespace StatelessWidget {
    export type Constructors = Widget.Constructors | 'StatelessWidget';
    export type Interface = Omit<StatelessWidget, Constructors>;
}
@DartClass
export class StatelessWidget extends Widget {
    constructor(_namedArguments? : {key? : lib3.Key}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StatelessWidget(_namedArguments? : {key? : lib3.Key}) {
        let {key} = Object.assign({
        }, _namedArguments );
        super.Widget({
            key : key});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createElement() : StatelessElement {
        return StatelessElement(this);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    build(context : BuildContext) : Widget{ throw 'abstract'}
}

export namespace StatefulWidget {
    export type Constructors = Widget.Constructors | 'StatefulWidget';
    export type Interface = Omit<StatefulWidget, Constructors>;
}
@DartClass
export class StatefulWidget extends Widget {
    constructor(_namedArguments? : {key? : lib3.Key}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StatefulWidget(_namedArguments? : {key? : lib3.Key}) {
        let {key} = Object.assign({
        }, _namedArguments );
        super.Widget({
            key : key});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createElement() : StatefulElement {
        return StatefulElement(this);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    createState() : State<any>{ throw 'abstract'}
}

export namespace ProxyWidget {
    export type Constructors = Widget.Constructors | 'ProxyWidget';
    export type Interface = Omit<ProxyWidget, Constructors>;
}
@DartClass
export class ProxyWidget extends Widget {
    constructor(_namedArguments? : {key? : lib3.Key,child? : Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ProxyWidget(_namedArguments? : {key? : lib3.Key,child? : Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        super.Widget({
            key : key});
        this.child = child;
    }
    child : Widget;

}

export namespace RenderObjectWidget {
    export type Constructors = Widget.Constructors | 'RenderObjectWidget';
    export type Interface = Omit<RenderObjectWidget, Constructors>;
}
@DartClass
export class RenderObjectWidget extends Widget {
    constructor(_namedArguments? : {key? : lib3.Key}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderObjectWidget(_namedArguments? : {key? : lib3.Key}) {
        let {key} = Object.assign({
        }, _namedArguments );
        super.Widget({
            key : key});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    createElement() : RenderObjectElement{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    createRenderObject(context : BuildContext) : lib6.RenderObject{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : BuildContext,renderObject : lib6.RenderObject) : any {
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    didUnmountRenderObject(renderObject : lib6.RenderObject) : any {
    }
}

export namespace ComponentElement {
    export type Constructors = Element.Constructors | 'ComponentElement';
    export type Interface = Omit<ComponentElement, Constructors>;
}
@DartClass
export class ComponentElement extends Element {
    constructor(widget : Widget) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ComponentElement(widget : Widget) {
        super.Element(widget);
    }
    _child : Element;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mount(parent : Element,newSlot : any) : any {
        super.mount(parent,newSlot);
        /* TODO (AssertStatementImpl) : assert (_child == null); */;
        /* TODO (AssertStatementImpl) : assert (_active); */;
        this._firstBuild();
        /* TODO (AssertStatementImpl) : assert (_child != null); */;
    }
    _firstBuild() : any {
        this.rebuild();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performRebuild() : any {
        /* TODO (AssertStatementImpl) : assert (() {if (debugProfileBuildsEnabled) Timeline.startSync('${widget.runtimeType}', arguments: timelineWhitelistArguments); return true;}()); */;
        /* TODO (AssertStatementImpl) : assert (_debugSetAllowIgnoredCallsToMarkNeedsBuild(true)); */;
        let built : Widget;
        try {
            built = this.build();
            lib12.debugWidgetBuilderValue(this.widget,built);
        } catch (__error__) {

            {
                let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                built = ErrorWidget.builder(_debugReportException(`building ${this}`,e,stack));
            }
        } finally {
            this._dirty = false;
            /* TODO (AssertStatementImpl) : assert (_debugSetAllowIgnoredCallsToMarkNeedsBuild(false)); */;
        }
        try {
            this._child = this.updateChild(this._child,built,this.slot);
            /* TODO (AssertStatementImpl) : assert (_child != null); */;
        } catch (__error__) {

            {
                let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                built = ErrorWidget.builder(_debugReportException(`building ${this}`,e,stack));
                this._child = this.updateChild(null,built,this.slot);
            }
        }
        /* TODO (AssertStatementImpl) : assert (() {if (debugProfileBuildsEnabled) Timeline.finishSync(); return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    build() : Widget{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : (element : Element) => any) : any {
        if (this._child != null) visitor(this._child);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forgetChild(child : Element) : any {
        /* TODO (AssertStatementImpl) : assert (child == _child); */;
        this._child = null;
    }
}

export namespace RenderObjectElement {
    export type Constructors = Element.Constructors | 'RenderObjectElement';
    export type Interface = Omit<RenderObjectElement, Constructors>;
}
@DartClass
export class RenderObjectElement extends Element {
    constructor(widget : RenderObjectWidget) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderObjectElement(widget : RenderObjectWidget) {
        super.Element(widget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : RenderObjectWidget {
        return super.widget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get renderObject() : lib6.RenderObject {
        return this._renderObject;
    }
    _renderObject : lib6.RenderObject;

    _ancestorRenderObjectElement : RenderObjectElement;

    _findAncestorRenderObjectElement() : RenderObjectElement {
        let ancestor : Element = this._parent;
        while (ancestor != null && isNot(ancestor, RenderObjectElement))ancestor = ancestor._parent;
        return ancestor;
    }
    _findAncestorParentDataElement() : ParentDataElement<RenderObjectWidget> {
        let ancestor : Element = this._parent;
        while (ancestor != null && isNot(ancestor, RenderObjectElement)){
            if (is(ancestor, ParentDataElement<RenderObjectWidget>)) return ancestor;
            ancestor = ancestor._parent;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mount(parent : Element,newSlot : any) : any {
        super.mount(parent,newSlot);
        this._renderObject = this.widget.createRenderObject(this);
        /* TODO (AssertStatementImpl) : assert (() {_debugUpdateRenderObjectOwner(); return true;}()); */;
        /* TODO (AssertStatementImpl) : assert (_slot == newSlot); */;
        this.attachRenderObject(newSlot);
        this._dirty = false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    update(newWidget : RenderObjectWidget) : any {
        super.update(newWidget);
        /* TODO (AssertStatementImpl) : assert (widget == newWidget); */;
        /* TODO (AssertStatementImpl) : assert (() {_debugUpdateRenderObjectOwner(); return true;}()); */;
        this.widget.updateRenderObject(this,this.renderObject);
        this._dirty = false;
    }
    _debugUpdateRenderObjectOwner() : any {
        /* TODO (AssertStatementImpl) : assert (() {_renderObject.debugCreator = _DebugCreator(this); return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performRebuild() : any {
        this.widget.updateRenderObject(this,this.renderObject);
        this._dirty = false;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    updateChildren(oldChildren : core.DartList<Element>,newWidgets : core.DartList<Widget>,_namedArguments? : {forgottenChildren? : core.DartSet<Element>}) : core.DartList<Element> {
        let {forgottenChildren} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (oldChildren != null); */;
        /* TODO (AssertStatementImpl) : assert (newWidgets != null); */;
        var replaceWithNullIfForgotten : (child : Element) => Element = (child : Element) : Element =>  {
            return forgottenChildren != null && forgottenChildren.contains(child) ? null : child;
        };
        let newChildrenTop : number = 0;
        let oldChildrenTop : number = 0;
        let newChildrenBottom : number = newWidgets.length - 1;
        let oldChildrenBottom : number = oldChildren.length - 1;
        let newChildren : core.DartList<Element> = oldChildren.length == newWidgets.length ? oldChildren : core.DartList(newWidgets.length);
        let previousChild : Element;
        while ((oldChildrenTop <= oldChildrenBottom) && (newChildrenTop <= newChildrenBottom)){
            let oldChild : Element = replaceWithNullIfForgotten(oldChildren[oldChildrenTop]);
            let newWidget : Widget = newWidgets[newChildrenTop];
            /* TODO (AssertStatementImpl) : assert (oldChild == null || oldChild._debugLifecycleState == _ElementLifecycle.active); */;
            if (op(Op.EQUALS,oldChild,null) || !Widget.canUpdate(oldChild.widget,newWidget)) break;
            let newChild : Element = this.updateChild(oldChild,newWidget,previousChild);
            /* TODO (AssertStatementImpl) : assert (newChild._debugLifecycleState == _ElementLifecycle.active); */;
            newChildren[newChildrenTop] = newChild;
            previousChild = newChild;
            newChildrenTop += 1;
            oldChildrenTop += 1;
        }
        while ((oldChildrenTop <= oldChildrenBottom) && (newChildrenTop <= newChildrenBottom)){
            let oldChild : Element = replaceWithNullIfForgotten(oldChildren[oldChildrenBottom]);
            let newWidget : Widget = newWidgets[newChildrenBottom];
            /* TODO (AssertStatementImpl) : assert (oldChild == null || oldChild._debugLifecycleState == _ElementLifecycle.active); */;
            if (op(Op.EQUALS,oldChild,null) || !Widget.canUpdate(oldChild.widget,newWidget)) break;
            oldChildrenBottom -= 1;
            newChildrenBottom -= 1;
        }
        let haveOldChildren : boolean = oldChildrenTop <= oldChildrenBottom;
        let oldKeyedChildren : core.DartMap<lib3.Key,Element>;
        if (haveOldChildren) {
            oldKeyedChildren = new core.DartMap.literal([
            ]);
            while (oldChildrenTop <= oldChildrenBottom){
                let oldChild : Element = replaceWithNullIfForgotten(oldChildren[oldChildrenTop]);
                /* TODO (AssertStatementImpl) : assert (oldChild == null || oldChild._debugLifecycleState == _ElementLifecycle.active); */;
                if (oldChild != null) {
                    if (oldChild.widget.key != null) oldKeyedChildren.set(oldChild.widget.key,oldChild);else this.deactivateChild(oldChild);
                }
                oldChildrenTop += 1;
            }
        }
        while (newChildrenTop <= newChildrenBottom){
            let oldChild : Element;
            let newWidget : Widget = newWidgets[newChildrenTop];
            if (haveOldChildren) {
                let key : lib3.Key = newWidget.key;
                if (key != null) {
                    oldChild = oldKeyedChildren.get(key);
                    if (oldChild != null) {
                        if (Widget.canUpdate(oldChild.widget,newWidget)) {
                            oldKeyedChildren.remove(key);
                        }else {
                            oldChild = null;
                        }
                    }
                }
            }
            /* TODO (AssertStatementImpl) : assert (oldChild == null || Widget.canUpdate(oldChild.widget, newWidget)); */;
            let newChild : Element = this.updateChild(oldChild,newWidget,previousChild);
            /* TODO (AssertStatementImpl) : assert (newChild._debugLifecycleState == _ElementLifecycle.active); */;
            /* TODO (AssertStatementImpl) : assert (oldChild == newChild || oldChild == null || oldChild._debugLifecycleState != _ElementLifecycle.active); */;
            newChildren[newChildrenTop] = newChild;
            previousChild = newChild;
            newChildrenTop += 1;
        }
        /* TODO (AssertStatementImpl) : assert (oldChildrenTop == oldChildrenBottom + 1); */;
        /* TODO (AssertStatementImpl) : assert (newChildrenTop == newChildrenBottom + 1); */;
        /* TODO (AssertStatementImpl) : assert (newWidgets.length - newChildrenTop == oldChildren.length - oldChildrenTop); */;
        newChildrenBottom = newWidgets.length - 1;
        oldChildrenBottom = oldChildren.length - 1;
        while ((oldChildrenTop <= oldChildrenBottom) && (newChildrenTop <= newChildrenBottom)){
            let oldChild : Element = oldChildren[oldChildrenTop];
            /* TODO (AssertStatementImpl) : assert (replaceWithNullIfForgotten(oldChild) != null); */;
            /* TODO (AssertStatementImpl) : assert (oldChild._debugLifecycleState == _ElementLifecycle.active); */;
            let newWidget : Widget = newWidgets[newChildrenTop];
            /* TODO (AssertStatementImpl) : assert (Widget.canUpdate(oldChild.widget, newWidget)); */;
            let newChild : Element = this.updateChild(oldChild,newWidget,previousChild);
            /* TODO (AssertStatementImpl) : assert (newChild._debugLifecycleState == _ElementLifecycle.active); */;
            /* TODO (AssertStatementImpl) : assert (oldChild == newChild || oldChild == null || oldChild._debugLifecycleState != _ElementLifecycle.active); */;
            newChildren[newChildrenTop] = newChild;
            previousChild = newChild;
            newChildrenTop += 1;
            oldChildrenTop += 1;
        }
        if (haveOldChildren && oldKeyedChildren.isNotEmpty) {
            for(let oldChild of oldKeyedChildren.values) {
                if (op(Op.EQUALS,forgottenChildren,null) || !forgottenChildren.contains(oldChild)) this.deactivateChild(oldChild);
            }
        }
        return newChildren;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    deactivate() : any {
        super.deactivate();
        /* TODO (AssertStatementImpl) : assert (!renderObject.attached, 'A RenderObject was still attached when attempting to deactivate its ' 'RenderObjectElement: $renderObject'); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    unmount() : any {
        super.unmount();
        /* TODO (AssertStatementImpl) : assert (!renderObject.attached, 'A RenderObject was still attached when attempting to unmount its ' 'RenderObjectElement: $renderObject'); */;
        this.widget.didUnmountRenderObject(this.renderObject);
    }
    _updateParentData(parentData : ParentDataWidget<RenderObjectWidget>) : any {
        parentData.applyParentData(this.renderObject);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _updateSlot(newSlot : any) : any {
        /* TODO (AssertStatementImpl) : assert (slot != newSlot); */;
        super._updateSlot(newSlot);
        /* TODO (AssertStatementImpl) : assert (slot == newSlot); */;
        this._ancestorRenderObjectElement.moveChildRenderObject(this.renderObject,this.slot);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    attachRenderObject(newSlot : any) : any {
        /* TODO (AssertStatementImpl) : assert (_ancestorRenderObjectElement == null); */;
        this._slot = newSlot;
        this._ancestorRenderObjectElement = this._findAncestorRenderObjectElement();
        ((_897_)=>(!!_897_)?_897_.insertChildRenderObject(this.renderObject,newSlot):null)(this._ancestorRenderObjectElement);
        let parentDataElement : ParentDataElement<RenderObjectWidget> = this._findAncestorParentDataElement();
        if (parentDataElement != null) this._updateParentData(parentDataElement.widget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    detachRenderObject() : any {
        if (this._ancestorRenderObjectElement != null) {
            this._ancestorRenderObjectElement.removeChildRenderObject(this.renderObject);
            this._ancestorRenderObjectElement = null;
        }
        this._slot = null;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    insertChildRenderObject(child : lib6.RenderObject,slot : any) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    moveChildRenderObject(child : lib6.RenderObject,slot : any) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    removeChildRenderObject(child : lib6.RenderObject) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib4.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib4.DiagnosticsProperty('renderObject',this.renderObject,{
            defaultValue : null}));
    }
}

export namespace SingleChildRenderObjectWidget {
    export type Constructors = RenderObjectWidget.Constructors | 'SingleChildRenderObjectWidget';
    export type Interface = Omit<SingleChildRenderObjectWidget, Constructors>;
}
@DartClass
export class SingleChildRenderObjectWidget extends RenderObjectWidget {
    constructor(_namedArguments? : {key? : lib3.Key,child? : Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SingleChildRenderObjectWidget(_namedArguments? : {key? : lib3.Key,child? : Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        super.RenderObjectWidget({
            key : key});
        this.child = child;
    }
    child : Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createElement() : SingleChildRenderObjectElement {
        return SingleChildRenderObjectElement(this);
    }
}

export namespace LeafRenderObjectWidget {
    export type Constructors = RenderObjectWidget.Constructors | 'LeafRenderObjectWidget';
    export type Interface = Omit<LeafRenderObjectWidget, Constructors>;
}
@DartClass
export class LeafRenderObjectWidget extends RenderObjectWidget {
    constructor(_namedArguments? : {key? : lib3.Key}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LeafRenderObjectWidget(_namedArguments? : {key? : lib3.Key}) {
        let {key} = Object.assign({
        }, _namedArguments );
        super.RenderObjectWidget({
            key : key});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createElement() : LeafRenderObjectElement {
        return LeafRenderObjectElement(this);
    }
}

export namespace StatelessElement {
    export type Constructors = ComponentElement.Constructors | 'StatelessElement';
    export type Interface = Omit<StatelessElement, Constructors>;
}
@DartClass
export class StatelessElement extends ComponentElement {
    constructor(widget : StatelessWidget) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StatelessElement(widget : StatelessWidget) {
        super.ComponentElement(widget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : StatelessWidget {
        return super.widget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build() : Widget {
        return this.widget.build(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    update(newWidget : StatelessWidget) : any {
        super.update(newWidget);
        /* TODO (AssertStatementImpl) : assert (widget == newWidget); */;
        this._dirty = true;
        this.rebuild();
    }
}

export namespace StatefulElement {
    export type Constructors = ComponentElement.Constructors | 'StatefulElement';
    export type Interface = Omit<StatefulElement, Constructors>;
}
@DartClass
export class StatefulElement extends ComponentElement {
    constructor(widget : StatefulWidget) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StatefulElement(widget : StatefulWidget) {
        this._state = widget.createState();
        super.ComponentElement(widget);
        /* TODO (AssertStatementImpl) : assert (() {if (!_state._debugTypesAreRight(widget)) {throw FlutterError('StatefulWidget.createState must return a subtype of State<${widget.runtimeType}>\n' 'The createState function for ${widget.runtimeType} returned a state ' 'of type ${_state.runtimeType}, which is not a subtype of ' 'State<${widget.runtimeType}>, violating the contract for createState.');} return true;}()); */;
        /* TODO (AssertStatementImpl) : assert (_state._element == null); */;
        this._state._element = this;
        /* TODO (AssertStatementImpl) : assert (_state._widget == null); */;
        this._state._widget = widget;
        /* TODO (AssertStatementImpl) : assert (_state._debugLifecycleState == _StateLifecycle.created); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build() : Widget {
        return this.state.build(this);
    }
    get state() : State<StatefulWidget> {
        return this._state;
    }
    _state : State<StatefulWidget>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    reassemble() : any {
        this.state.reassemble();
        super.reassemble();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _firstBuild() : any {
        /* TODO (AssertStatementImpl) : assert (_state._debugLifecycleState == _StateLifecycle.created); */;
        try {
            this._debugSetAllowIgnoredCallsToMarkNeedsBuild(true);
            let debugCheckForReturnedFuture : any = this._state.initState() as any;
            /* TODO (AssertStatementImpl) : assert (() {if (debugCheckForReturnedFuture is Future) {throw FlutterError('${_state.runtimeType}.initState() returned a Future.\n' 'State.initState() must be a void method without an `async` keyword.\n' 'Rather than awaiting on asynchronous work directly inside of initState,\n' 'call a separate method to do this work without awaiting it.');} return true;}()); */;
        } finally {
            this._debugSetAllowIgnoredCallsToMarkNeedsBuild(false);
        }
        /* TODO (AssertStatementImpl) : assert (() {_state._debugLifecycleState = _StateLifecycle.initialized; return true;}()); */;
        this._state.didChangeDependencies();
        /* TODO (AssertStatementImpl) : assert (() {_state._debugLifecycleState = _StateLifecycle.ready; return true;}()); */;
        super._firstBuild();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    update(newWidget : StatefulWidget) : any {
        super.update(newWidget);
        /* TODO (AssertStatementImpl) : assert (widget == newWidget); */;
        let oldWidget : StatefulWidget = this._state._widget;
        this._dirty = true;
        this._state._widget = this.widget;
        try {
            this._debugSetAllowIgnoredCallsToMarkNeedsBuild(true);
            let debugCheckForReturnedFuture : any = this._state.didUpdateWidget(oldWidget) as any;
            /* TODO (AssertStatementImpl) : assert (() {if (debugCheckForReturnedFuture is Future) {throw FlutterError('${_state.runtimeType}.didUpdateWidget() returned a Future.\n' 'State.didUpdateWidget() must be a void method without an `async` keyword.\n' 'Rather than awaiting on asynchronous work directly inside of didUpdateWidget,\n' 'call a separate method to do this work without awaiting it.');} return true;}()); */;
        } finally {
            this._debugSetAllowIgnoredCallsToMarkNeedsBuild(false);
        }
        this.rebuild();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    activate() : any {
        super.activate();
        /* TODO (AssertStatementImpl) : assert (_active); */;
        this.markNeedsBuild();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    deactivate() : any {
        this._state.deactivate();
        super.deactivate();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    unmount() : any {
        super.unmount();
        this._state.dispose();
        /* TODO (AssertStatementImpl) : assert (() {if (_state._debugLifecycleState == _StateLifecycle.defunct) return true; throw FlutterError('${_state.runtimeType}.dispose failed to call super.dispose.\n' 'dispose() implementations must always call their superclass dispose() method, to ensure ' 'that all the resources used by the widget are fully released.');}()); */;
        this._state._element = null;
        this._state = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    inheritFromElement(ancestor : Element,_namedArguments? : {aspect? : core.DartObject}) : InheritedWidget {
        let {aspect} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (ancestor != null); */;
        /* TODO (AssertStatementImpl) : assert (() {final Type targetType = ancestor.widget.runtimeType; if (state._debugLifecycleState == _StateLifecycle.created) {throw FlutterError('inheritFromWidgetOfExactType($targetType) or inheritFromElement() was called before ${_state.runtimeType}.initState() completed.\n' 'When an inherited widget changes, for example if the value of Theme.of() changes, ' 'its dependent widgets are rebuilt. If the dependent widget\'s reference to ' 'the inherited widget is in a constructor or an initState() method, ' 'then the rebuilt dependent widget will not reflect the changes in the ' 'inherited widget.\n' 'Typically references to inherited widgets should occur in widget build() methods. Alternatively, ' 'initialization based on inherited widgets can be placed in the didChangeDependencies method, which ' 'is called after initState and whenever the dependencies change thereafter.');} if (state._debugLifecycleState == _StateLifecycle.defunct) {throw FlutterError('inheritFromWidgetOfExactType($targetType) or inheritFromElement() was called after dispose(): $this\n' 'This error happens if you call inheritFromWidgetOfExactType() on the ' 'BuildContext for a widget that no longer appears in the widget tree ' '(e.g., whose parent widget no longer includes the widget in its ' 'build). This error can occur when code calls ' 'inheritFromWidgetOfExactType() from a timer or an animation callback. ' 'The preferred solution is to cancel the timer or stop listening to the ' 'animation in the dispose() callback. Another solution is to check the ' '"mounted" property of this object before calling ' 'inheritFromWidgetOfExactType() to ensure the object is still in the ' 'tree.\n' 'This error might indicate a memory leak if ' 'inheritFromWidgetOfExactType() is being called because another object ' 'is retaining a reference to this State object after it has been ' 'removed from the tree. To avoid memory leaks, consider breaking the ' 'reference to this object during dispose().');} return true;}()); */;
        return super.inheritFromElement(ancestor,{
            aspect : aspect});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        super.didChangeDependencies();
        this._state.didChangeDependencies();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib4.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib4.DiagnosticsProperty('state',this.state,{
            defaultValue : null}));
    }
}

export namespace ProxyElement {
    export type Constructors = ComponentElement.Constructors | 'ProxyElement';
    export type Interface = Omit<ProxyElement, Constructors>;
}
@DartClass
export class ProxyElement extends ComponentElement {
    constructor(widget : ProxyWidget) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ProxyElement(widget : ProxyWidget) {
        super.ComponentElement(widget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : ProxyWidget {
        return super.widget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build() : Widget {
        return this.widget.child;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    update(newWidget : ProxyWidget) : any {
        let oldWidget : ProxyWidget = this.widget;
        /* TODO (AssertStatementImpl) : assert (widget != null); */;
        /* TODO (AssertStatementImpl) : assert (widget != newWidget); */;
        super.update(newWidget);
        /* TODO (AssertStatementImpl) : assert (widget == newWidget); */;
        this.updated(oldWidget);
        this._dirty = true;
        this.rebuild();
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    updated(oldWidget : ProxyWidget) : any {
        this.notifyClients(oldWidget);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    notifyClients(oldWidget : ProxyWidget) : any{ throw 'abstract'}
}

export namespace ParentDataWidget {
    export type Constructors = ProxyWidget.Constructors | 'ParentDataWidget';
    export type Interface<T extends RenderObjectWidget> = Omit<ParentDataWidget<T extends RenderObjectWidget>, Constructors>;
}
@DartClass
export class ParentDataWidget<T extends RenderObjectWidget> extends ProxyWidget {
    constructor(_namedArguments? : {key? : lib3.Key,child? : Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ParentDataWidget(_namedArguments? : {key? : lib3.Key,child? : Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        super.ProxyWidget({
            key : key,child : child});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createElement() : ParentDataElement<T> {
        return ParentDataElement(this);
    }
    debugIsValidAncestor(ancestor : RenderObjectWidget) : boolean {
        /* TODO (AssertStatementImpl) : assert (T != dynamic); */;
        /* TODO (AssertStatementImpl) : assert (T != RenderObjectWidget); */;
        return is(ancestor, T);
    }
    debugDescribeInvalidAncestorChain(_namedArguments? : {description? : string,ownershipChain? : string,foundValidAncestor? : boolean,badAncestors? : core.DartIterable<Widget>}) : string {
        let {description,ownershipChain,foundValidAncestor,badAncestors} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (T != dynamic); */;
        /* TODO (AssertStatementImpl) : assert (T != RenderObjectWidget); */;
        let result : string;
        if (!foundValidAncestor) {
            result = `${this.runtimeType} widgets must be placed inside ${T} widgets.\n` + `${description} has no ${T} ancestor at all.\n`;
        }else {
            /* TODO (AssertStatementImpl) : assert (badAncestors.isNotEmpty); */;
            result = `${this.runtimeType} widgets must be placed directly inside ${T} widgets.\n` + `${description} has a ${T} ancestor, but there are other widgets between them:\n`;
            for(let ancestor of badAncestors) {
                if (op(Op.EQUALS,ancestor.runtimeType,this.runtimeType)) {
                    result += `- ${ancestor} (this is a different ${this.runtimeType} than the one with the problem)\n`;
                }else {
                    result += `- ${ancestor}\n`;
                }
            }
            result += `These widgets cannot come between a ${this.runtimeType} and its ${T}.\n`;
        }
        result += `The ownership chain for the parent of the offending ${this.runtimeType} was:\n  ${ownershipChain}`;
        return result;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    applyParentData(renderObject : lib6.RenderObject) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    debugCanApplyOutOfTurn() : boolean {
        return false;
    }
}

export namespace RootRenderObjectElement {
    export type Constructors = RenderObjectElement.Constructors | 'RootRenderObjectElement';
    export type Interface = Omit<RootRenderObjectElement, Constructors>;
}
@DartClass
export class RootRenderObjectElement extends RenderObjectElement {
    constructor(widget : RenderObjectWidget) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RootRenderObjectElement(widget : RenderObjectWidget) {
        super.RenderObjectElement(widget);
    }
    assignOwner(owner : BuildOwner) : any {
        this._owner = owner;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mount(parent : Element,newSlot : any) : any {
        /* TODO (AssertStatementImpl) : assert (parent == null); */;
        /* TODO (AssertStatementImpl) : assert (newSlot == null); */;
        super.mount(parent,newSlot);
    }
}

export namespace LeafRenderObjectElement {
    export type Constructors = RenderObjectElement.Constructors | 'LeafRenderObjectElement';
    export type Interface = Omit<LeafRenderObjectElement, Constructors>;
}
@DartClass
export class LeafRenderObjectElement extends RenderObjectElement {
    constructor(widget : LeafRenderObjectWidget) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LeafRenderObjectElement(widget : LeafRenderObjectWidget) {
        super.RenderObjectElement(widget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forgetChild(child : Element) : any {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    insertChildRenderObject(child : lib6.RenderObject,slot : any) : any {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveChildRenderObject(child : lib6.RenderObject,slot : any) : any {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeChildRenderObject(child : lib6.RenderObject) : any {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugDescribeChildren() : core.DartList<lib4.DiagnosticsNode> {
        return this.widget.debugDescribeChildren();
    }
}

export namespace SingleChildRenderObjectElement {
    export type Constructors = RenderObjectElement.Constructors | 'SingleChildRenderObjectElement';
    export type Interface = Omit<SingleChildRenderObjectElement, Constructors>;
}
@DartClass
export class SingleChildRenderObjectElement extends RenderObjectElement {
    constructor(widget : SingleChildRenderObjectWidget) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SingleChildRenderObjectElement(widget : SingleChildRenderObjectWidget) {
        super.RenderObjectElement(widget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : SingleChildRenderObjectWidget {
        return super.widget;
    }
    _child : Element;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : (element : Element) => any) : any {
        if (this._child != null) visitor(this._child);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forgetChild(child : Element) : any {
        /* TODO (AssertStatementImpl) : assert (child == _child); */;
        this._child = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mount(parent : Element,newSlot : any) : any {
        super.mount(parent,newSlot);
        this._child = this.updateChild(this._child,this.widget.child,null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    update(newWidget : SingleChildRenderObjectWidget) : any {
        super.update(newWidget);
        /* TODO (AssertStatementImpl) : assert (widget == newWidget); */;
        this._child = this.updateChild(this._child,this.widget.child,null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    insertChildRenderObject(child : lib6.RenderObject,slot : any) : any {
        let renderObject : any = this.renderObject;
        /* TODO (AssertStatementImpl) : assert (slot == null); */;
        /* TODO (AssertStatementImpl) : assert (renderObject.debugValidateChild(child)); */;
        renderObject.child = child;
        /* TODO (AssertStatementImpl) : assert (renderObject == this.renderObject); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveChildRenderObject(child : lib6.RenderObject,slot : any) : any {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeChildRenderObject(child : lib6.RenderObject) : any {
        let renderObject : any = this.renderObject;
        /* TODO (AssertStatementImpl) : assert (renderObject.child == child); */;
        renderObject.child = null;
        /* TODO (AssertStatementImpl) : assert (renderObject == this.renderObject); */;
    }
}

export namespace MultiChildRenderObjectElement {
    export type Constructors = RenderObjectElement.Constructors | 'MultiChildRenderObjectElement';
    export type Interface = Omit<MultiChildRenderObjectElement, Constructors>;
}
@DartClass
export class MultiChildRenderObjectElement extends RenderObjectElement {
    constructor(widget : MultiChildRenderObjectWidget) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MultiChildRenderObjectElement(widget : MultiChildRenderObjectWidget) {
        this._forgottenChildren = core.DartHashSet();
        this.assert = assert;
    }
    debugChildrenHaveDuplicateKeys(widget : any, : any) {
    }
     : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : MultiChildRenderObjectWidget {
        return super.widget;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'visibleForTesting',value : {
            arguments : [],namedArguments : {
            }}})
    get children() : core.DartIterable<Element> {
        return this._children.where((child : Element) =>  {
            return !this._forgottenChildren.contains(child);
        });
    }
    _children : core.DartList<Element>;

    _forgottenChildren : core.DartSet<Element>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    insertChildRenderObject(child : lib6.RenderObject,slot : Element) : any {
        let renderObject : any = this.renderObject;
        /* TODO (AssertStatementImpl) : assert (renderObject.debugValidateChild(child)); */;
        renderObject.insert(child,{
            after : ((t)=>(!!t)?t.renderObject:null)(slot)});
        /* TODO (AssertStatementImpl) : assert (renderObject == this.renderObject); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveChildRenderObject(child : lib6.RenderObject,slot : any) : any {
        let renderObject : any = this.renderObject;
        /* TODO (AssertStatementImpl) : assert (child.parent == renderObject); */;
        renderObject.move(child,{
            after : ((t)=>(!!t)?t.renderObject:null)(slot)});
        /* TODO (AssertStatementImpl) : assert (renderObject == this.renderObject); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeChildRenderObject(child : lib6.RenderObject) : any {
        let renderObject : any = this.renderObject;
        /* TODO (AssertStatementImpl) : assert (child.parent == renderObject); */;
        renderObject.remove(child);
        /* TODO (AssertStatementImpl) : assert (renderObject == this.renderObject); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : (element : Element) => any) : any {
        for(let child of this._children) {
            if (!this._forgottenChildren.contains(child)) visitor(child);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forgetChild(child : Element) : any {
        /* TODO (AssertStatementImpl) : assert (_children.contains(child)); */;
        /* TODO (AssertStatementImpl) : assert (!_forgottenChildren.contains(child)); */;
        this._forgottenChildren.add(child);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mount(parent : Element,newSlot : any) : any {
        super.mount(parent,newSlot);
        this._children = core.DartList(this.widget.children.length);
        let previousChild : Element;
        for(let i : number = 0; i < this._children.length; i += 1){
            let newChild : Element = this.inflateWidget(this.widget.children[i],previousChild);
            this._children[i] = newChild;
            previousChild = newChild;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    update(newWidget : MultiChildRenderObjectWidget) : any {
        super.update(newWidget);
        /* TODO (AssertStatementImpl) : assert (widget == newWidget); */;
        this._children = this.updateChildren(this._children,this.widget.children,{
            forgottenChildren : this._forgottenChildren});
        this._forgottenChildren.clear();
    }
}

export namespace InheritedWidget {
    export type Constructors = ProxyWidget.Constructors | 'InheritedWidget';
    export type Interface = Omit<InheritedWidget, Constructors>;
}
@DartClass
export class InheritedWidget extends ProxyWidget {
    constructor(_namedArguments? : {key? : lib3.Key,child? : Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InheritedWidget(_namedArguments? : {key? : lib3.Key,child? : Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        super.ProxyWidget({
            key : key,child : child});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createElement() : InheritedElement {
        return InheritedElement(this);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    updateShouldNotify(oldWidget : InheritedWidget) : boolean{ throw 'abstract'}
}

export namespace MultiChildRenderObjectWidget {
    export type Constructors = RenderObjectWidget.Constructors | 'MultiChildRenderObjectWidget' | 'any';
    export type Interface = Omit<MultiChildRenderObjectWidget, Constructors>;
}
@DartClass
export class MultiChildRenderObjectWidget extends RenderObjectWidget {
    constructor(_namedArguments? : {key? : lib3.Key,children? : core.DartList<Widget>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MultiChildRenderObjectWidget(_namedArguments? : {key? : lib3.Key,children? : core.DartList<Widget>}) {
        let {key,children} = Object.assign({
            "children" : new core.DartList.literal<Widget>()}, _namedArguments );
        this.assert = assert;
        this.children = children;
    }
     : any;

    @namedConstructor
    any( : (child : Widget) => any, : any) {
        op(Op.EQUALS,child,null);
    }
    static any : new( : any) => MultiChildRenderObjectWidget;

     : any;

     : any;

    children : core.DartList<Widget>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createElement() : MultiChildRenderObjectElement {
        return MultiChildRenderObjectElement(this);
    }
}

export namespace ErrorWidget {
    export type Constructors = LeafRenderObjectWidget.Constructors | 'ErrorWidget';
    export type Interface = Omit<ErrorWidget, Constructors>;
}
@DartClass
export class ErrorWidget extends LeafRenderObjectWidget {
    constructor(exception : core.DartObject) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ErrorWidget(exception : core.DartObject) {
        this.message = ErrorWidget._stringify(exception);
        super.LeafRenderObjectWidget({
            key : UniqueKey()});
    }
    private static __$builder : (details : lib10.FlutterErrorDetails) => Widget;
    static get builder() : (details : lib10.FlutterErrorDetails) => Widget { 
        if (this.__$builder===undefined) {
            this.__$builder = (details : lib10.FlutterErrorDetails) =>  {
                return ErrorWidget(details.exception);
            };
        }
        return this.__$builder;
    }
    static set builder(__$value : (details : lib10.FlutterErrorDetails) => Widget)  { 
        this.__$builder = __$value;
    }

    message : string;

    static _stringify(exception : core.DartObject) : string {
        try {
            return exception.toString();
        } catch (__error__) {

            {
                let e = __error__;
            }
        }
        return 'Error';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : BuildContext) : any {
        return lib11.RenderErrorBox(this.message);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib4.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib4.StringProperty('message',this.message,{
            quoted : false}));
    }
}

export namespace ParentDataElement {
    export type Constructors = ProxyElement.Constructors | 'ParentDataElement';
    export type Interface<T extends RenderObjectWidget> = Omit<ParentDataElement<T extends RenderObjectWidget>, Constructors>;
}
@DartClass
export class ParentDataElement<T extends RenderObjectWidget> extends ProxyElement {
    constructor(widget : ParentDataWidget<T>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ParentDataElement(widget : ParentDataWidget<T>) {
        super.ProxyElement(widget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : ParentDataWidget<T> {
        return super.widget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mount(parent : Element,newSlot : any) : any {
        /* TODO (AssertStatementImpl) : assert (() {final List<Widget> badAncestors = <Widget> []; Element ancestor = parent; while (ancestor != null) {if (ancestor is ParentDataElement<RenderObjectWidget>) {badAncestors.add(ancestor.widget);} else if (ancestor is RenderObjectElement) {if (widget.debugIsValidAncestor(ancestor.widget)) break; badAncestors.add(ancestor.widget);} ancestor = ancestor._parent;} if (ancestor != null && badAncestors.isEmpty) return true; throw FlutterError('Incorrect use of ParentDataWidget.\n' + widget.debugDescribeInvalidAncestorChain(description: '$this', ownershipChain: parent.debugGetCreatorChain(10), foundValidAncestor: ancestor != null, badAncestors: badAncestors));}()); */;
        super.mount(parent,newSlot);
    }
    _applyParentData(widget : ParentDataWidget<T>) : any {
        var applyParentDataToChild : (child : Element) => any = (child : Element) : any =>  {
            if (is(child, RenderObjectElement)) {
                child._updateParentData(widget);
            }else {
                /* TODO (AssertStatementImpl) : assert (child is! ParentDataElement<RenderObjectWidget>); */;
                child.visitChildren(applyParentDataToChild);
            }
        };
        lib13.visitChildren(applyParentDataToChild);
    }
    applyWidgetOutOfTurn(newWidget : ParentDataWidget<T>) : any {
        /* TODO (AssertStatementImpl) : assert (newWidget != null); */;
        /* TODO (AssertStatementImpl) : assert (newWidget.debugCanApplyOutOfTurn()); */;
        /* TODO (AssertStatementImpl) : assert (newWidget.child == widget.child); */;
        this._applyParentData(newWidget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    notifyClients(oldWidget : ParentDataWidget<T>) : any {
        this._applyParentData(this.widget);
    }
}

export namespace InheritedElement {
    export type Constructors = ProxyElement.Constructors | 'InheritedElement';
    export type Interface = Omit<InheritedElement, Constructors>;
}
@DartClass
export class InheritedElement extends ProxyElement {
    constructor(widget : InheritedWidget) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InheritedElement(widget : InheritedWidget) {
        this._dependents = core.DartHashMap();
        super.ProxyElement(widget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : InheritedWidget {
        return super.widget;
    }
    _dependents : core.DartMap<Element,core.DartObject>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _updateInheritance() : any {
        /* TODO (AssertStatementImpl) : assert (_active); */;
        let incomingWidgets : core.DartMap<core.Type,InheritedElement> = ((t)=>(!!t)?t._inheritedWidgets:null)(this._parent);
        if (incomingWidgets != null) this._inheritedWidgets = op(Op.LT,core.DartHashMap<K,V>,core.Type);
        op(Op.GT,InheritedElement,.from(incomingWidgets));
        this._inheritedWidgets = core.DartHashMap();
        this._inheritedWidgets.set(this.widget.runtimeType,this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugDeactivated() : any {
        /* TODO (AssertStatementImpl) : assert (() {assert (_dependents.isEmpty); return true;}()); */;
        super.debugDeactivated();
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    getDependencies(dependent : Element) : core.DartObject {
        return this._dependents.get(dependent);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    setDependencies(dependent : Element,value : core.DartObject) : any {
        this._dependents.set(dependent,value);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    updateDependencies(dependent : Element,aspect : core.DartObject) : any {
        this.setDependencies(dependent,null);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    notifyDependent(oldWidget : InheritedWidget,dependent : Element) : any {
        dependent.didChangeDependencies();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updated(oldWidget : InheritedWidget) : any {
        if (this.widget.updateShouldNotify(oldWidget)) super.updated(oldWidget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    notifyClients(oldWidget : InheritedWidget) : any {
        /* TODO (AssertStatementImpl) : assert (_debugCheckOwnerBuildTargetExists('notifyClients')); */;
        for(let dependent of this._dependents.keys) {
            /* TODO (AssertStatementImpl) : assert (() {Element ancestor = dependent._parent; while (ancestor != this && ancestor != null) ancestor = ancestor._parent; return ancestor == this;}()); */;
            /* TODO (AssertStatementImpl) : assert (dependent._dependencies.contains(this)); */;
            this.notifyDependent(oldWidget,dependent);
        }
    }
}

export class properties {
}
