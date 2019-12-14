/** Library asset:datahedgehog_monitor/lib/lib/widgets/sliver.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib5 from "./basic";
import * as lib6 from "./automatic_keep_alive";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/rendering/sliver_multi_box_adaptor";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/rendering/sliver";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/rendering/sliver_list";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/rendering/sliver_fixed_extent_list";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/rendering/sliver_grid";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/rendering/flow";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/rendering/sliver_fill";
import * as collection from "@dart2ts/dart/core";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/foundation/node";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/foundation/assertions";

export var _kDefaultSemanticIndexCallback : (_ : lib3.Widget,localIndex : number) => number = (_ : lib3.Widget,localIndex : number) : number =>  {
    return localIndex;
};
export var _createErrorWidget : (exception : any,stackTrace : core.DartStackTrace) => lib3.ErrorWidget = (exception : any,stackTrace : core.DartStackTrace) : lib3.ErrorWidget =>  {
    let details : lib19.FlutterErrorDetails = lib19.FlutterErrorDetails({
        exception : exception,stack : stackTrace,library : 'widgets library',context : 'building',informationCollector : null});
    lib19.FlutterError.reportError(details);
    return lib3.ErrorWidget.builder(details);
};
export namespace SliverChildDelegate {
    export type Constructors = 'SliverChildDelegate';
    export type Interface = Omit<SliverChildDelegate, Constructors>;
}
@DartClass
export class SliverChildDelegate {
    constructor() {
    }
    @defaultConstructor
    SliverChildDelegate() {
    }
    @Abstract
    build(context : lib3.BuildContext,index : number) : lib3.Widget{ throw 'abstract'}
    get estimatedChildCount() : number {
        return null;
    }
    estimateMaxScrollOffset(firstIndex : number,lastIndex : number,leadingScrollOffset : double,trailingScrollOffset : double) : double {
        return null;
    }
    didFinishLayout(firstIndex : number,lastIndex : number) : any {
    }
    @Abstract
    shouldRebuild(oldDelegate : SliverChildDelegate) : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let description : core.DartList<string> = new core.DartList.literal<string>();
        this.debugFillDescription(description);
        return `${lib4.describeIdentity(this)}(${description.join(", ")})`;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillDescription(description : core.DartList<string>) : any {
        try {
            let children : number = this.estimatedChildCount;
            if (children != null) description.add(`estimated child count: ${children}`);
        } catch (__error__) {

            {
                let e = __error__;
                description.add(`estimated child count: EXCEPTION (${e.runtimeType})`);
            }
        }
    }
}

export namespace SliverWithKeepAliveWidget {
    export type Constructors = lib3.RenderObjectWidget.Constructors | 'SliverWithKeepAliveWidget';
    export type Interface = Omit<SliverWithKeepAliveWidget, Constructors>;
}
@DartClass
export class SliverWithKeepAliveWidget extends lib3.RenderObjectWidget {
    constructor(_namedArguments? : {key? : lib7.Key}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverWithKeepAliveWidget(_namedArguments? : {key? : lib7.Key}) {
        let {key} = Object.assign({
        }, _namedArguments );
        super.RenderObjectWidget({
            key : key});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    createRenderObject(context : lib3.BuildContext) : any{ throw 'abstract'}
}

export namespace SliverMultiBoxAdaptorElement {
    export type Constructors = lib3.RenderObjectElement.Constructors | 'SliverMultiBoxAdaptorElement';
    export type Interface = Omit<SliverMultiBoxAdaptorElement, Constructors>;
}
@DartClass
@Implements(lib8.RenderSliverBoxChildManager)
export class SliverMultiBoxAdaptorElement extends lib3.RenderObjectElement implements lib8.RenderSliverBoxChildManager.Interface {
    constructor(widget : SliverMultiBoxAdaptorWidget) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverMultiBoxAdaptorElement(widget : SliverMultiBoxAdaptorWidget) {
        this._childWidgets = core.DartHashMap();
        this._childElements = collection.SplayTreeMap();
        this._didUnderflow = false;
        super.RenderObjectElement(widget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : SliverMultiBoxAdaptorWidget {
        return super.widget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get renderObject() : lib8.RenderSliverMultiBoxAdaptor {
        return super.renderObject;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    update(newWidget : SliverMultiBoxAdaptorWidget) : any {
        let oldWidget : SliverMultiBoxAdaptorWidget = this.widget;
        super.update(newWidget);
        let newDelegate : SliverChildDelegate = newWidget.delegate;
        let oldDelegate : SliverChildDelegate = oldWidget.delegate;
        if (newDelegate != oldDelegate && (newDelegate.runtimeType != oldDelegate.runtimeType || newDelegate.shouldRebuild(oldDelegate))) this.performRebuild();
    }
    _childWidgets : core.DartMap<number,lib3.Widget>;

    _childElements : collection.SplayTreeMap<number,lib3.Element>;

    _currentBeforeChild : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performRebuild() : any {
        this._childWidgets.clear();
        super.performRebuild();
        this._currentBeforeChild = null;
        /* TODO (AssertStatementImpl) : assert (_currentlyUpdatingChildIndex == null); */;
        try {
            var processElement : (index : number) => any = (index : number) : any =>  {
                this._currentlyUpdatingChildIndex = index;
                let newChild : lib3.Element = this.updateChild(op(Op.INDEX,this._childElements,index),this._build(index),index);
                if (newChild != null) {
                    op(Op.INDEX_ASSIGN,this._childElements,index,newChild);
                    let parentData : lib8.SliverMultiBoxAdaptorParentData = newChild.renderObject.parentData;
                    if (!parentData.keptAlive) this._currentBeforeChild = newChild.renderObject;
                }else {
                    this._childElements.remove(index);
                }
            };
            this._childElements.keys.toList().forEach(processElement);
            if (this._didUnderflow) {
                let lastKey : number = (this._childElements.lastKey() || -1);
                processElement(lastKey + 1);
            }
        } finally {
            this._currentlyUpdatingChildIndex = null;
        }
    }
    _build(index : number) : lib3.Widget {
        return this._childWidgets.putIfAbsent(index,() =>  {
            return this.widget.delegate.build(this,index);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createChild(index : number,_namedArguments? : {after? : any}) : any {
        let {after} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (_currentlyUpdatingChildIndex == null); */;
        this.owner.buildScope(this,() =>  {
            let insertFirst : boolean = op(Op.EQUALS,after,null);
            /* TODO (AssertStatementImpl) : assert (insertFirst || _childElements[index - 1] != null); */;
            this._currentBeforeChild = insertFirst ? null : op(Op.INDEX,this._childElements,index - 1).renderObject;
            let newChild : lib3.Element;
            try {
                this._currentlyUpdatingChildIndex = index;
                newChild = this.updateChild(op(Op.INDEX,this._childElements,index),this._build(index),index);
            } finally {
                this._currentlyUpdatingChildIndex = null;
            }
            if (newChild != null) {
                op(Op.INDEX_ASSIGN,this._childElements,index,newChild);
            }else {
                this._childElements.remove(index);
            }
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateChild(child : lib3.Element,newWidget : lib3.Widget,newSlot : any) : lib3.Element {
        let oldParentData : lib8.SliverMultiBoxAdaptorParentData = ((t)=>(!!t)?t.parentData:null)(((t)=>(!!t)?t.renderObject:null)(child));
        let newChild : lib3.Element = super.updateChild(child,newWidget,newSlot);
        let newParentData : lib8.SliverMultiBoxAdaptorParentData = ((t)=>(!!t)?t.parentData:null)(((t)=>(!!t)?t.renderObject:null)(newChild));
        if (oldParentData != newParentData && oldParentData != null && newParentData != null) {
            newParentData.layoutOffset = oldParentData.layoutOffset;
        }
        return newChild;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forgetChild(child : lib3.Element) : any {
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        /* TODO (AssertStatementImpl) : assert (child.slot != null); */;
        /* TODO (AssertStatementImpl) : assert (_childElements.containsKey(child.slot)); */;
        this._childElements.remove(child.slot);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeChild(child : any) : any {
        let index : number = this.renderObject.indexOf(child);
        /* TODO (AssertStatementImpl) : assert (_currentlyUpdatingChildIndex == null); */;
        /* TODO (AssertStatementImpl) : assert (index >= 0); */;
        this.owner.buildScope(this,() =>  {
            /* TODO (AssertStatementImpl) : assert (_childElements.containsKey(index)); */;
            try {
                this._currentlyUpdatingChildIndex = index;
                let result : lib3.Element = this.updateChild(op(Op.INDEX,this._childElements,index),null,index);
                /* TODO (AssertStatementImpl) : assert (result == null); */;
            } finally {
                this._currentlyUpdatingChildIndex = null;
            }
            this._childElements.remove(index);
            /* TODO (AssertStatementImpl) : assert (!_childElements.containsKey(index)); */;
        });
    }
    static _extrapolateMaxScrollOffset(firstIndex : number,lastIndex : number,leadingScrollOffset : double,trailingScrollOffset : double,childCount : number) : double {
        if (lastIndex == childCount - 1) return trailingScrollOffset;
        let reifiedCount : number = lastIndex - firstIndex + 1;
        let averageExtent : double = (trailingScrollOffset - leadingScrollOffset) / reifiedCount;
        let remainingCount : number = childCount - lastIndex - 1;
        return trailingScrollOffset + averageExtent * remainingCount;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    estimateMaxScrollOffset(constraints : lib9.SliverConstraints,_namedArguments? : {firstIndex? : number,lastIndex? : number,leadingScrollOffset? : double,trailingScrollOffset? : double}) : double {
        let {firstIndex,lastIndex,leadingScrollOffset,trailingScrollOffset} = Object.assign({
        }, _namedArguments );
        let childCount : number = this.childCount;
        if (childCount == null) return new core.DartDouble(double).infinity;
        return (this.widget.estimateMaxScrollOffset(constraints,firstIndex,lastIndex,leadingScrollOffset,trailingScrollOffset) || SliverMultiBoxAdaptorElement._extrapolateMaxScrollOffset(firstIndex,lastIndex,leadingScrollOffset,trailingScrollOffset,childCount));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childCount() : number {
        return this.widget.delegate.estimatedChildCount;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didStartLayout() : any {
        /* TODO (AssertStatementImpl) : assert (debugAssertChildListLocked()); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didFinishLayout() : any {
        /* TODO (AssertStatementImpl) : assert (debugAssertChildListLocked()); */;
        let firstIndex : number = (this._childElements.firstKey() || 0);
        let lastIndex : number = (this._childElements.lastKey() || 0);
        this.widget.delegate.didFinishLayout(firstIndex,lastIndex);
    }
    _currentlyUpdatingChildIndex : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugAssertChildListLocked() : boolean {
        /* TODO (AssertStatementImpl) : assert (_currentlyUpdatingChildIndex == null); */;
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didAdoptChild(child : any) : any {
        /* TODO (AssertStatementImpl) : assert (_currentlyUpdatingChildIndex != null); */;
        let childParentData : lib8.SliverMultiBoxAdaptorParentData = child.parentData;
        childParentData.index = this._currentlyUpdatingChildIndex;
    }
    _didUnderflow : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setDidUnderflow(value : boolean) : any {
        this._didUnderflow = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    insertChildRenderObject(child : lib16.RenderObject,slot : number) : any {
        /* TODO (AssertStatementImpl) : assert (slot != null); */;
        /* TODO (AssertStatementImpl) : assert (_currentlyUpdatingChildIndex == slot); */;
        /* TODO (AssertStatementImpl) : assert (renderObject.debugValidateChild(child)); */;
        this.renderObject.insert(child,{
            after : this._currentBeforeChild});
        /* TODO (AssertStatementImpl) : assert (() {final SliverMultiBoxAdaptorParentData childParentData = child.parentData; assert (slot == childParentData.index); return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveChildRenderObject(child : lib16.RenderObject,slot : number) : any {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeChildRenderObject(child : lib16.RenderObject) : any {
        /* TODO (AssertStatementImpl) : assert (_currentlyUpdatingChildIndex != null); */;
        this.renderObject.remove(child);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : (element : lib3.Element) => any) : any {
        /* TODO (AssertStatementImpl) : assert (!_childElements.values.any((Element child) => child == null)); */;
        this._childElements.values.toList().forEach(visitor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugVisitOnstageChildren(visitor : (element : lib3.Element) => any) : any {
        this._childElements.values.where((child : lib3.Element) =>  {
            let parentData : lib8.SliverMultiBoxAdaptorParentData = child.renderObject.parentData;
            let itemExtent : double;
            switch (this.renderObject.constraints.axis) {
                case lib17.Axis.horizontal:
                    itemExtent = child.renderObject.paintBounds.width;
                    break;
                case lib17.Axis.vertical:
                    itemExtent = child.renderObject.paintBounds.height;
                    break;
            }
            return parentData.layoutOffset < this.renderObject.constraints.scrollOffset + this.renderObject.constraints.remainingPaintExtent && parentData.layoutOffset + itemExtent > this.renderObject.constraints.scrollOffset;
        }).forEach(visitor);
    }
}

export namespace SliverFillRemaining {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'SliverFillRemaining';
    export type Interface = Omit<SliverFillRemaining, Constructors>;
}
@DartClass
export class SliverFillRemaining extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib7.Key,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverFillRemaining(_namedArguments? : {key? : lib7.Key,child? : lib3.Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib14.RenderSliverFillRemaining {
        return lib14.RenderSliverFillRemaining();
    }
}

export namespace KeepAlive {
    export type Constructors = lib3.ParentDataWidget.Constructors | 'KeepAlive';
    export type Interface = Omit<KeepAlive, Constructors>;
}
@DartClass
export class KeepAlive extends lib3.ParentDataWidget<SliverWithKeepAliveWidget> {
    constructor(_namedArguments? : {key? : lib7.Key,keepAlive? : boolean,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KeepAlive(_namedArguments? : {key? : lib7.Key,keepAlive? : boolean,child? : lib3.Widget}) {
        let {key,keepAlive,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.keepAlive = keepAlive;
    }
     : any;

     : any;

     : any;

    key;
    child;

     : any;

    keepAlive : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyParentData(renderObject : lib16.RenderObject) : any {
        /* TODO (AssertStatementImpl) : assert (renderObject.parentData is KeepAliveParentDataMixin); */;
        let parentData : any = renderObject.parentData;
        if (parentData.keepAlive != this.keepAlive) {
            parentData.keepAlive = this.keepAlive;
            let targetParent : lib18.AbstractNode = renderObject.parent;
            if (is(targetParent, lib16.RenderObject) && !this.keepAlive) targetParent.markNeedsLayout();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugCanApplyOutOfTurn() : boolean {
        return this.keepAlive;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib4.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib4.DiagnosticsProperty('keepAlive',this.keepAlive));
    }
}

export namespace SliverChildBuilderDelegate {
    export type Constructors = SliverChildDelegate.Constructors | 'SliverChildBuilderDelegate';
    export type Interface = Omit<SliverChildBuilderDelegate, Constructors>;
}
@DartClass
export class SliverChildBuilderDelegate extends SliverChildDelegate {
    constructor(builder : (context : lib3.BuildContext,index : number) => lib3.Widget,_namedArguments? : {childCount? : number,addAutomaticKeepAlives? : boolean,addRepaintBoundaries? : boolean,addSemanticIndexes? : boolean,semanticIndexCallback? : (widget : lib3.Widget,localIndex : number) => number,semanticIndexOffset? : number}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverChildBuilderDelegate(builder : (context : lib3.BuildContext,index : number) => lib3.Widget,_namedArguments? : {childCount? : number,addAutomaticKeepAlives? : boolean,addRepaintBoundaries? : boolean,addSemanticIndexes? : boolean,semanticIndexCallback? : (widget : lib3.Widget,localIndex : number) => number,semanticIndexOffset? : number}) {
        let {childCount,addAutomaticKeepAlives,addRepaintBoundaries,addSemanticIndexes,semanticIndexCallback,semanticIndexOffset} = Object.assign({
            "addAutomaticKeepAlives" : true,
            "addRepaintBoundaries" : true,
            "addSemanticIndexes" : true,
            "semanticIndexCallback" : _kDefaultSemanticIndexCallback,
            "semanticIndexOffset" : 0}, _namedArguments );
        this.assert = assert;
        this.builder = builder;
        this.childCount = childCount;
        this.addAutomaticKeepAlives = addAutomaticKeepAlives;
        this.addRepaintBoundaries = addRepaintBoundaries;
        this.addSemanticIndexes = addSemanticIndexes;
        this.semanticIndexCallback = semanticIndexCallback;
        this.semanticIndexOffset = semanticIndexOffset;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    builder : (context : lib3.BuildContext,index : number) => lib3.Widget;

    childCount : number;

    addAutomaticKeepAlives : boolean;

    addRepaintBoundaries : boolean;

    addSemanticIndexes : boolean;

    semanticIndexOffset : number;

    semanticIndexCallback : (widget : lib3.Widget,localIndex : number) => number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext,index : number) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (builder != null); */;
        if (index < 0 || (this.childCount != null && index >= this.childCount)) return null;
        let child : lib3.Widget;
        try {
            child = this.builder(context,index);
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                child = _createErrorWidget(exception,stackTrace);
            }
        }
        if (op(Op.EQUALS,child,null)) return null;
        if (this.addRepaintBoundaries) child = lib5.RepaintBoundary.wrap(child,index);
        if (this.addSemanticIndexes) {
            let semanticIndex : number = this.semanticIndexCallback(child,index);
            if (semanticIndex != null) child = lib5.IndexedSemantics({
                index : semanticIndex + this.semanticIndexOffset,child : child});
        }
        if (this.addAutomaticKeepAlives) child = lib6.AutomaticKeepAlive({
            child : child});
        return child;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get estimatedChildCount() : number {
        return this.childCount;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRebuild(oldDelegate : SliverChildBuilderDelegate) : boolean {
        return true;
    }
}

export namespace SliverChildListDelegate {
    export type Constructors = SliverChildDelegate.Constructors | 'SliverChildListDelegate';
    export type Interface = Omit<SliverChildListDelegate, Constructors>;
}
@DartClass
export class SliverChildListDelegate extends SliverChildDelegate {
    constructor(children : core.DartList<lib3.Widget>,_namedArguments? : {addAutomaticKeepAlives? : boolean,addRepaintBoundaries? : boolean,addSemanticIndexes? : boolean,semanticIndexCallback? : (widget : lib3.Widget,localIndex : number) => number,semanticIndexOffset? : number}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverChildListDelegate(children : core.DartList<lib3.Widget>,_namedArguments? : {addAutomaticKeepAlives? : boolean,addRepaintBoundaries? : boolean,addSemanticIndexes? : boolean,semanticIndexCallback? : (widget : lib3.Widget,localIndex : number) => number,semanticIndexOffset? : number}) {
        let {addAutomaticKeepAlives,addRepaintBoundaries,addSemanticIndexes,semanticIndexCallback,semanticIndexOffset} = Object.assign({
            "addAutomaticKeepAlives" : true,
            "addRepaintBoundaries" : true,
            "addSemanticIndexes" : true,
            "semanticIndexCallback" : _kDefaultSemanticIndexCallback,
            "semanticIndexOffset" : 0}, _namedArguments );
        this.assert = assert;
        this.children = children;
        this.addAutomaticKeepAlives = addAutomaticKeepAlives;
        this.addRepaintBoundaries = addRepaintBoundaries;
        this.addSemanticIndexes = addSemanticIndexes;
        this.semanticIndexCallback = semanticIndexCallback;
        this.semanticIndexOffset = semanticIndexOffset;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    addAutomaticKeepAlives : boolean;

    addRepaintBoundaries : boolean;

    addSemanticIndexes : boolean;

    semanticIndexOffset : number;

    semanticIndexCallback : (widget : lib3.Widget,localIndex : number) => number;

    children : core.DartList<lib3.Widget>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext,index : number) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (children != null); */;
        if (index < 0 || index >= this.children.length) return null;
        let child : lib3.Widget = this.children[index];
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        if (this.addRepaintBoundaries) child = lib5.RepaintBoundary.wrap(child,index);
        if (this.addSemanticIndexes) {
            let semanticIndex : number = this.semanticIndexCallback(child,index);
            if (semanticIndex != null) child = lib5.IndexedSemantics({
                index : semanticIndex + this.semanticIndexOffset,child : child});
        }
        if (this.addAutomaticKeepAlives) child = lib6.AutomaticKeepAlive({
            child : child});
        return child;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get estimatedChildCount() : number {
        return this.children.length;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRebuild(oldDelegate : SliverChildListDelegate) : boolean {
        return this.children != oldDelegate.children;
    }
}

export namespace SliverMultiBoxAdaptorWidget {
    export type Constructors = SliverWithKeepAliveWidget.Constructors | 'SliverMultiBoxAdaptorWidget';
    export type Interface = Omit<SliverMultiBoxAdaptorWidget, Constructors>;
}
@DartClass
export class SliverMultiBoxAdaptorWidget extends SliverWithKeepAliveWidget {
    constructor(_namedArguments? : {key? : lib7.Key,delegate? : SliverChildDelegate}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverMultiBoxAdaptorWidget(_namedArguments? : {key? : lib7.Key,delegate? : SliverChildDelegate}) {
        let {key,delegate} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.delegate = delegate;
    }
     : any;

     : any;

     : any;

    delegate : SliverChildDelegate;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createElement() : SliverMultiBoxAdaptorElement {
        return SliverMultiBoxAdaptorElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    createRenderObject(context : lib3.BuildContext) : lib8.RenderSliverMultiBoxAdaptor{ throw 'abstract'}
    estimateMaxScrollOffset(constraints : lib9.SliverConstraints,firstIndex : number,lastIndex : number,leadingScrollOffset : double,trailingScrollOffset : double) : double {
        /* TODO (AssertStatementImpl) : assert (lastIndex >= firstIndex); */;
        return this.delegate.estimateMaxScrollOffset(firstIndex,lastIndex,leadingScrollOffset,trailingScrollOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib4.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib4.DiagnosticsProperty('delegate',this.delegate));
    }
}

export namespace SliverList {
    export type Constructors = SliverMultiBoxAdaptorWidget.Constructors | 'SliverList';
    export type Interface = Omit<SliverList, Constructors>;
}
@DartClass
export class SliverList extends SliverMultiBoxAdaptorWidget {
    constructor(_namedArguments? : {key? : lib7.Key,delegate? : SliverChildDelegate}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverList(_namedArguments? : {key? : lib7.Key,delegate? : SliverChildDelegate}) {
        let {key,delegate} = Object.assign({
        }, _namedArguments );
        super.SliverMultiBoxAdaptorWidget({
            key : key,delegate : delegate});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib10.RenderSliverList {
        let element : SliverMultiBoxAdaptorElement = context;
        return lib10.RenderSliverList({
            childManager : element});
    }
}

export namespace SliverFixedExtentList {
    export type Constructors = SliverMultiBoxAdaptorWidget.Constructors | 'SliverFixedExtentList';
    export type Interface = Omit<SliverFixedExtentList, Constructors>;
}
@DartClass
export class SliverFixedExtentList extends SliverMultiBoxAdaptorWidget {
    constructor(_namedArguments? : {key? : lib7.Key,delegate? : SliverChildDelegate,itemExtent? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverFixedExtentList(_namedArguments? : {key? : lib7.Key,delegate? : SliverChildDelegate,itemExtent? : double}) {
        let {key,delegate,itemExtent} = Object.assign({
        }, _namedArguments );
        super.SliverMultiBoxAdaptorWidget({
            key : key,delegate : delegate});
        this.itemExtent = itemExtent;
    }
    itemExtent : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib11.RenderSliverFixedExtentList {
        let element : SliverMultiBoxAdaptorElement = context;
        return lib11.RenderSliverFixedExtentList({
            childManager : element,itemExtent : this.itemExtent});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib11.RenderSliverFixedExtentList) : any {
        renderObject.itemExtent = this.itemExtent;
    }
}

export namespace SliverGrid {
    export type Constructors = SliverMultiBoxAdaptorWidget.Constructors | 'SliverGrid' | 'count' | 'extent';
    export type Interface = Omit<SliverGrid, Constructors>;
}
@DartClass
export class SliverGrid extends SliverMultiBoxAdaptorWidget {
    constructor(_namedArguments? : {key? : lib7.Key,delegate? : SliverChildDelegate,gridDelegate? : lib12.SliverGridDelegate}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverGrid(_namedArguments? : {key? : lib7.Key,delegate? : SliverChildDelegate,gridDelegate? : lib12.SliverGridDelegate}) {
        let {key,delegate,gridDelegate} = Object.assign({
        }, _namedArguments );
        super.SliverMultiBoxAdaptorWidget({
            key : key,delegate : delegate});
        this.gridDelegate = gridDelegate;
    }
    @namedConstructor
    count(_namedArguments? : {key? : lib7.Key,crossAxisCount? : number,mainAxisSpacing? : double,crossAxisSpacing? : double,childAspectRatio? : double,children? : core.DartList<lib3.Widget>}) {
        let {key,crossAxisCount,mainAxisSpacing,crossAxisSpacing,childAspectRatio,children} = Object.assign({
            "mainAxisSpacing" : 0.0,
            "crossAxisSpacing" : 0.0,
            "childAspectRatio" : 1.0,
            "children" : new core.DartList.literal<lib3.Widget>()}, _namedArguments );
        this.gridDelegate = lib12.SliverGridDelegateWithFixedCrossAxisCount({
            crossAxisCount : crossAxisCount,mainAxisSpacing : mainAxisSpacing,crossAxisSpacing : crossAxisSpacing,childAspectRatio : childAspectRatio});
        super.SliverMultiBoxAdaptorWidget({
            key : key,delegate : SliverChildListDelegate(children)});
    }
    static count : new(_namedArguments? : {key? : lib7.Key,crossAxisCount? : number,mainAxisSpacing? : double,crossAxisSpacing? : double,childAspectRatio? : double,children? : core.DartList<lib3.Widget>}) => SliverGrid;

    @namedConstructor
    extent(_namedArguments? : {key? : lib7.Key,maxCrossAxisExtent? : double,mainAxisSpacing? : double,crossAxisSpacing? : double,childAspectRatio? : double,children? : core.DartList<lib3.Widget>}) {
        let {key,maxCrossAxisExtent,mainAxisSpacing,crossAxisSpacing,childAspectRatio,children} = Object.assign({
            "mainAxisSpacing" : 0.0,
            "crossAxisSpacing" : 0.0,
            "childAspectRatio" : 1.0,
            "children" : new core.DartList.literal<lib3.Widget>()}, _namedArguments );
        this.gridDelegate = lib12.SliverGridDelegateWithMaxCrossAxisExtent({
            maxCrossAxisExtent : maxCrossAxisExtent,mainAxisSpacing : mainAxisSpacing,crossAxisSpacing : crossAxisSpacing,childAspectRatio : childAspectRatio});
        super.SliverMultiBoxAdaptorWidget({
            key : key,delegate : SliverChildListDelegate(children)});
    }
    static extent : new(_namedArguments? : {key? : lib7.Key,maxCrossAxisExtent? : double,mainAxisSpacing? : double,crossAxisSpacing? : double,childAspectRatio? : double,children? : core.DartList<lib3.Widget>}) => SliverGrid;

    gridDelegate : lib12.SliverGridDelegate;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib12.RenderSliverGrid {
        let element : SliverMultiBoxAdaptorElement = context;
        return lib12.RenderSliverGrid({
            childManager : element,gridDelegate : this.gridDelegate});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib12.RenderSliverGrid) : any {
        renderObject.gridDelegate = this.gridDelegate;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    estimateMaxScrollOffset(constraints : lib9.SliverConstraints,firstIndex : number,lastIndex : number,leadingScrollOffset : double,trailingScrollOffset : double) : double {
        return (super.estimateMaxScrollOffset(constraints,firstIndex,lastIndex,leadingScrollOffset,trailingScrollOffset) || this.gridDelegate.getLayout(constraints).computeMaxScrollOffset(lib13.properties.delegate.estimatedChildCount));
    }
}

export namespace SliverFillViewport {
    export type Constructors = SliverMultiBoxAdaptorWidget.Constructors | 'SliverFillViewport';
    export type Interface = Omit<SliverFillViewport, Constructors>;
}
@DartClass
export class SliverFillViewport extends SliverMultiBoxAdaptorWidget {
    constructor(_namedArguments? : {key? : lib7.Key,delegate? : SliverChildDelegate,viewportFraction? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverFillViewport(_namedArguments? : {key? : lib7.Key,delegate? : SliverChildDelegate,viewportFraction? : double}) {
        let {key,delegate,viewportFraction} = Object.assign({
            "viewportFraction" : 1.0}, _namedArguments );
        this.assert = assert;
        this.viewportFraction = viewportFraction;
    }
     : any;

     : any;

     : any;

    key;
    delegate;

     : any;

    viewportFraction : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib14.RenderSliverFillViewport {
        let element : SliverMultiBoxAdaptorElement = context;
        return lib14.RenderSliverFillViewport({
            childManager : element,viewportFraction : this.viewportFraction});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib14.RenderSliverFillViewport) : any {
        renderObject.viewportFraction = this.viewportFraction;
    }
}

export class properties {
}
