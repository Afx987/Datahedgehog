/** Library asset:datahedgehog_monitor/lib/lib/widgets/sliver_prototype_extent_list.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./sliver";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./framework";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/rendering/sliver_fixed_extent_list";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";

export namespace SliverPrototypeExtentList {
    export type Constructors = lib3.SliverMultiBoxAdaptorWidget.Constructors | 'SliverPrototypeExtentList';
    export type Interface = Omit<SliverPrototypeExtentList, Constructors>;
}
@DartClass
export class SliverPrototypeExtentList extends lib3.SliverMultiBoxAdaptorWidget {
    constructor(_namedArguments? : {key? : lib4.Key,delegate? : lib3.SliverChildDelegate,prototypeItem? : lib5.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverPrototypeExtentList(_namedArguments? : {key? : lib4.Key,delegate? : lib3.SliverChildDelegate,prototypeItem? : lib5.Widget}) {
        let {key,delegate,prototypeItem} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.prototypeItem = prototypeItem;
    }
     : any;

     : any;

    key;
    delegate;

     : any;

    prototypeItem : lib5.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib5.BuildContext) : _RenderSliverPrototypeExtentList {
        let element : _SliverPrototypeExtentListElement = context;
        return _RenderSliverPrototypeExtentList({
            childManager : element});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createElement() : _SliverPrototypeExtentListElement {
        return _SliverPrototypeExtentListElement(this);
    }
}

export namespace _SliverPrototypeExtentListElement {
    export type Constructors = lib3.SliverMultiBoxAdaptorElement.Constructors | '_SliverPrototypeExtentListElement';
    export type Interface = Omit<_SliverPrototypeExtentListElement, Constructors>;
}
@DartClass
export class _SliverPrototypeExtentListElement extends lib3.SliverMultiBoxAdaptorElement {
    constructor(widget : SliverPrototypeExtentList) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SliverPrototypeExtentListElement(widget : SliverPrototypeExtentList) {
        super.SliverMultiBoxAdaptorElement(widget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : SliverPrototypeExtentList {
        return super.widget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get renderObject() : _RenderSliverPrototypeExtentList {
        return super.renderObject;
    }
    _prototype : lib5.Element;

    private static __$_prototypeSlot : core.DartObject;
    static get _prototypeSlot() : core.DartObject { 
        if (this.__$_prototypeSlot===undefined) {
            this.__$_prototypeSlot = core.DartObject();
        }
        return this.__$_prototypeSlot;
    }
    static set _prototypeSlot(__$value : core.DartObject)  { 
        this.__$_prototypeSlot = __$value;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    insertChildRenderObject(child : lib6.RenderObject,slot : any) : any {
        if (op(Op.EQUALS,slot,_SliverPrototypeExtentListElement._prototypeSlot)) {
            /* TODO (AssertStatementImpl) : assert (child is RenderBox); */;
            this.renderObject.child = child;
        }else {
            super.insertChildRenderObject(child,slot);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didAdoptChild(child : any) : any {
        if (child != this.renderObject.child) super.didAdoptChild(child);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveChildRenderObject(child : any,slot : any) : any {
        if (op(Op.EQUALS,slot,_SliverPrototypeExtentListElement._prototypeSlot)) /* TODO (AssertStatementImpl) : assert (false); */;else super.moveChildRenderObject(child,slot);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeChildRenderObject(child : any) : any {
        if (op(Op.EQUALS,this.renderObject.child,child)) this.renderObject.child = null;else super.removeChildRenderObject(child);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : (element : lib5.Element) => any) : any {
        if (this._prototype != null) visitor(this._prototype);
        super.visitChildren(visitor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mount(parent : lib5.Element,newSlot : any) : any {
        super.mount(parent,newSlot);
        this._prototype = this.updateChild(this._prototype,this.widget.prototypeItem,_SliverPrototypeExtentListElement._prototypeSlot);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    update(newWidget : SliverPrototypeExtentList) : any {
        super.update(newWidget);
        /* TODO (AssertStatementImpl) : assert (widget == newWidget); */;
        this._prototype = this.updateChild(this._prototype,this.widget.prototypeItem,_SliverPrototypeExtentListElement._prototypeSlot);
    }
}

export namespace _RenderSliverPrototypeExtentList {
    export type Constructors = lib7.RenderSliverFixedExtentBoxAdaptor.Constructors | '_RenderSliverPrototypeExtentList';
    export type Interface = Omit<_RenderSliverPrototypeExtentList, Constructors>;
}
@DartClass
export class _RenderSliverPrototypeExtentList extends lib7.RenderSliverFixedExtentBoxAdaptor {
    constructor(_namedArguments? : {childManager? : _SliverPrototypeExtentListElement}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RenderSliverPrototypeExtentList(_namedArguments? : {childManager? : _SliverPrototypeExtentListElement}) {
        let {childManager} = Object.assign({
        }, _namedArguments );
        super.RenderSliverFixedExtentBoxAdaptor({
            childManager : childManager});
    }
    _child : any;

    get child() : any {
        return this._child;
    }
    set child(value : any) {
        if (this._child != null) this.dropChild(this._child);
        this._child = value;
        if (this._child != null) this.adoptChild(this._child);
        this.markNeedsLayout();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        this.child.layout(this.constraints.asBoxConstraints(),{
            parentUsesSize : true});
        super.performLayout();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    attach(owner : lib6.PipelineOwner) : any {
        super.attach(owner);
        if (this._child != null) this._child.attach(owner);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    detach() : any {
        super.detach();
        if (this._child != null) this._child.detach();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    redepthChildren() : any {
        if (this._child != null) this.redepthChild(this._child);
        super.redepthChildren();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : (child : any) => any) : any {
        if (this._child != null) visitor(this._child);
        super.visitChildren(visitor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get itemExtent() : double {
        /* TODO (AssertStatementImpl) : assert (child != null && child.hasSize); */;
        return op(Op.EQUALS,this.constraints.axis,lib8.Axis.vertical) ? this.child.size.height : this.child.size.width;
    }
}

export class properties {
}
