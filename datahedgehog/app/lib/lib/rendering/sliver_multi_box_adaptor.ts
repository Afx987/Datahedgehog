/** Library asset:datahedgehog_monitor/lib/lib/rendering/sliver_multi_box_adaptor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./box";
import * as lib4 from "./sliver";
import * as lib5 from "./object";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib7 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export var ParentData : () => any = () : any =>  {
    let keepAlive : boolean = false;
    boolean;
    let keptAlive : any;
};
export var RenderSliver : () => any = () : any =>  {
    var setupParentData : (child : lib5.RenderObject) => any = (child : lib5.RenderObject) : any =>  {
        /* TODO (AssertStatementImpl) : assert (child.parentData is KeepAliveParentDataMixin); */;
    };
};
export namespace RenderSliverBoxChildManager {
    export type Constructors = 'RenderSliverBoxChildManager';
    export type Interface = Omit<RenderSliverBoxChildManager, Constructors>;
}
@DartClass
export class RenderSliverBoxChildManager {
    @Abstract
    createChild(index : number,_namedArguments? : {after? : lib3.RenderBox}) : any{ throw 'abstract'}
    @Abstract
    removeChild(child : lib3.RenderBox) : any{ throw 'abstract'}
    @Abstract
    estimateMaxScrollOffset(constraints : lib4.SliverConstraints,_namedArguments? : {firstIndex? : number,lastIndex? : number,leadingScrollOffset? : double,trailingScrollOffset? : double}) : double{ throw 'abstract'}
    @AbstractProperty
    get childCount() : number{ throw 'abstract'}
    @Abstract
    didAdoptChild(child : lib3.RenderBox) : any{ throw 'abstract'}
    @Abstract
    setDidUnderflow(value : boolean) : any{ throw 'abstract'}
    didStartLayout() : any {
    }
    didFinishLayout() : any {
    }
    debugAssertChildListLocked() : boolean {
        return true;
    }
    constructor() {
    }
    @defaultConstructor
    RenderSliverBoxChildManager() {
    }
}

export namespace SliverMultiBoxAdaptorParentData {
    export type Constructors = lib4.SliverLogicalParentData.Constructors | 'SliverMultiBoxAdaptorParentData';
    export type Interface = Omit<SliverMultiBoxAdaptorParentData, Constructors>;
}
@DartClass
@With(any,any)
export class SliverMultiBoxAdaptorParentData extends lib4.SliverLogicalParentData implements any.Interface,any.Interface {
    index : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get keptAlive() : boolean {
        return this._keptAlive;
    }
    _keptAlive : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `index=${this.index}; ${op(Op.EQUALS,keepAlive,true) ? "keepAlive; " : ""}${super.toString()}`;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliverMultiBoxAdaptorParentData() {
        this._keptAlive = false;
    }
}

export namespace RenderSliverMultiBoxAdaptor {
    export type Constructors = 'RenderSliverMultiBoxAdaptor';
    export type Interface = Omit<RenderSliverMultiBoxAdaptor, Constructors>;
}
@DartClass
@With(any,lib4.RenderSliverHelpers,any)
export class RenderSliverMultiBoxAdaptor extends any implements any.Interface,lib4.RenderSliverHelpers.Interface,any.Interface {
    @Abstract
    _getRightWayUp(constraints : lib4.SliverConstraints) : boolean {
        throw 'from mixin';
    }
    @Abstract
    hitTestBoxChild(result : lib6.HitTestResult,child : lib3.RenderBox,_namedArguments? : {mainAxisPosition? : double,crossAxisPosition? : double}) : boolean {
        let {mainAxisPosition,crossAxisPosition} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    applyPaintTransformForBoxChild(child : lib3.RenderBox,transform : lib7.Matrix4) : any {
        throw 'from mixin';
    }
    constructor(_namedArguments? : {childManager? : RenderSliverBoxChildManager}) {
    }
    @defaultConstructor
    RenderSliverMultiBoxAdaptor(_namedArguments? : {childManager? : RenderSliverBoxChildManager}) {
        let {childManager} = Object.assign({
        }, _namedArguments );
        this._childManager = this.childManager;
        this._keepAliveBucket = new core.DartMap.literal([
        ]);
        this.assert = assert;
    }
     : any;

    _childManager;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setupParentData(child : lib5.RenderObject) : any {
        if (isNot(child.parentData, SliverMultiBoxAdaptorParentData)) child.parentData = SliverMultiBoxAdaptorParentData();
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    get childManager() : RenderSliverBoxChildManager {
        return this._childManager;
    }
    _childManager : RenderSliverBoxChildManager;

    _keepAliveBucket : core.DartMap<number,lib3.RenderBox>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    adoptChild(child : lib5.RenderObject) : any {
        super.adoptChild(child);
        let childParentData : SliverMultiBoxAdaptorParentData = child.parentData;
        if (!childParentData._keptAlive) this.childManager.didAdoptChild(child);
    }
    _debugAssertChildListLocked() : boolean {
        return this.childManager.debugAssertChildListLocked();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    insert(child : lib3.RenderBox,_namedArguments? : {after? : lib3.RenderBox}) : any {
        let {after} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (!_keepAliveBucket.containsValue(child)); */;
        super.insert(child,{
            after : after});
        /* TODO (AssertStatementImpl) : assert (firstChild != null); */;
        /* TODO (AssertStatementImpl) : assert (() {int index = indexOf(firstChild); RenderBox child = childAfter(firstChild); while (child != null) {assert (indexOf(child) > index); index = indexOf(child); child = childAfter(child);} return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    remove(child : lib3.RenderBox) : any {
        let childParentData : SliverMultiBoxAdaptorParentData = child.parentData;
        if (!childParentData._keptAlive) {
            super.remove(child);
            return;
        }
        /* TODO (AssertStatementImpl) : assert (_keepAliveBucket[childParentData.index] == child); */;
        this._keepAliveBucket.remove(childParentData.index);
        this.dropChild(child);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeAll() : any {
        super.removeAll();
        this._keepAliveBucket.values.forEach(this.dropChild.bind(this));
        this._keepAliveBucket.clear();
    }
    _createOrObtainChild(index : number,_namedArguments? : {after? : lib3.RenderBox}) : any {
        let {after} = Object.assign({
        }, _namedArguments );
        this.invokeLayoutCallback((constraints : lib4.SliverConstraints) =>  {
            /* TODO (AssertStatementImpl) : assert (constraints == this.constraints); */;
            if (this._keepAliveBucket.containsKey(index)) {
                let child : lib3.RenderBox = this._keepAliveBucket.remove(index);
                let childParentData : SliverMultiBoxAdaptorParentData = child.parentData;
                /* TODO (AssertStatementImpl) : assert (childParentData._keptAlive); */;
                this.dropChild(child);
                child.parentData = childParentData;
                this.insert(child,{
                    after : after});
                childParentData._keptAlive = false;
            }else {
                this._childManager.createChild(index,{
                    after : after});
            }
        });
    }
    _destroyOrCacheChild(child : lib3.RenderBox) : any {
        let childParentData : SliverMultiBoxAdaptorParentData = child.parentData;
        if (childParentData.keepAlive) {
            /* TODO (AssertStatementImpl) : assert (!childParentData._keptAlive); */;
            this.remove(child);
            this._keepAliveBucket.set(childParentData.index,child);
            child.parentData = childParentData;
            super.adoptChild(child);
            childParentData._keptAlive = true;
        }else {
            /* TODO (AssertStatementImpl) : assert (child.parent == this); */;
            this._childManager.removeChild(child);
            /* TODO (AssertStatementImpl) : assert (child.parent == null); */;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    attach(owner : lib5.PipelineOwner) : any {
        super.attach(owner);
        for(let child of this._keepAliveBucket.values) child.attach(owner);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    detach() : any {
        super.detach();
        for(let child of this._keepAliveBucket.values) child.detach();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    redepthChildren() : any {
        super.redepthChildren();
        this._keepAliveBucket.values.forEach(this.redepthChild.bind(this));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : (child : any) => any) : any {
        super.visitChildren(visitor);
        this._keepAliveBucket.values.forEach(visitor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildrenForSemantics(visitor : (child : any) => any) : any {
        super.visitChildren(visitor);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    addInitialChild(_namedArguments? : {index? : number,layoutOffset? : double}) : boolean {
        let {index,layoutOffset} = Object.assign({
            "index" : 0,
            "layoutOffset" : 0.0}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (_debugAssertChildListLocked()); */;
        /* TODO (AssertStatementImpl) : assert (firstChild == null); */;
        this._createOrObtainChild(index,{
            after : null});
        if (firstChild != null) {
            /* TODO (AssertStatementImpl) : assert (firstChild == lastChild); */;
            /* TODO (AssertStatementImpl) : assert (indexOf(firstChild) == index); */;
            let firstChildParentData : SliverMultiBoxAdaptorParentData = firstChild.parentData;
            firstChildParentData.layoutOffset = layoutOffset;
            return true;
        }
        this.childManager.setDidUnderflow(true);
        return false;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    insertAndLayoutLeadingChild(childConstraints : lib3.BoxConstraints,_namedArguments? : {parentUsesSize? : boolean}) : lib3.RenderBox {
        let {parentUsesSize} = Object.assign({
            "parentUsesSize" : false}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (_debugAssertChildListLocked()); */;
        let index : number = this.indexOf(firstChild) - 1;
        this._createOrObtainChild(index,{
            after : null});
        if (this.indexOf(firstChild) == index) {
            firstChild.layout(childConstraints,{
                parentUsesSize : parentUsesSize});
            return firstChild;
        }
        this.childManager.setDidUnderflow(true);
        return null;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    insertAndLayoutChild(childConstraints : lib3.BoxConstraints,_namedArguments? : {after? : lib3.RenderBox,parentUsesSize? : boolean}) : lib3.RenderBox {
        let {after,parentUsesSize} = Object.assign({
            "parentUsesSize" : false}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (_debugAssertChildListLocked()); */;
        /* TODO (AssertStatementImpl) : assert (after != null); */;
        let index : number = this.indexOf(after) + 1;
        this._createOrObtainChild(index,{
            after : after});
        let child : lib3.RenderBox = childAfter(after);
        if (child != null && this.indexOf(child) == index) {
            child.layout(childConstraints,{
                parentUsesSize : parentUsesSize});
            return child;
        }
        this.childManager.setDidUnderflow(true);
        return null;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    collectGarbage(leadingGarbage : number,trailingGarbage : number) : any {
        /* TODO (AssertStatementImpl) : assert (_debugAssertChildListLocked()); */;
        /* TODO (AssertStatementImpl) : assert (childCount >= leadingGarbage + trailingGarbage); */;
        this.invokeLayoutCallback((constraints : lib4.SliverConstraints) =>  {
            while (leadingGarbage > 0){
                this._destroyOrCacheChild(firstChild);
                leadingGarbage -= 1;
            }
            while (trailingGarbage > 0){
                this._destroyOrCacheChild(lastChild);
                trailingGarbage -= 1;
            }
            this._keepAliveBucket.values.where((child : lib3.RenderBox) =>  {
                let childParentData : SliverMultiBoxAdaptorParentData = child.parentData;
                return !childParentData.keepAlive;
            }).toList().forEach(this._childManager.removeChild);
            /* TODO (AssertStatementImpl) : assert (_keepAliveBucket.values.where((RenderBox child) {final SliverMultiBoxAdaptorParentData childParentData = child.parentData; return !childParentData.keepAlive;}).isEmpty); */;
        });
    }
    indexOf(child : lib3.RenderBox) : number {
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        let childParentData : SliverMultiBoxAdaptorParentData = child.parentData;
        /* TODO (AssertStatementImpl) : assert (childParentData.index != null); */;
        return childParentData.index;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    paintExtentOf(child : lib3.RenderBox) : double {
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        /* TODO (AssertStatementImpl) : assert (child.hasSize); */;
        switch (this.constraints.axis) {
            case lib8.Axis.horizontal:
                return child.size.width;
            case lib8.Axis.vertical:
                return child.size.height;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestChildren(result : lib6.HitTestResult,_namedArguments? : {mainAxisPosition? : double,crossAxisPosition? : double}) : boolean {
        let {mainAxisPosition,crossAxisPosition} = Object.assign({
        }, _namedArguments );
        let child : lib3.RenderBox = lastChild;
        while (child != null){
            if (this.hitTestBoxChild(result,child,{
                mainAxisPosition : mainAxisPosition,crossAxisPosition : crossAxisPosition})) return true;
            child = childBefore(child);
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    childMainAxisPosition(child : lib3.RenderBox) : double {
        return this.childScrollOffset(child) - this.constraints.scrollOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    childScrollOffset(child : lib5.RenderObject) : double {
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        /* TODO (AssertStatementImpl) : assert (child.parent == this); */;
        let childParentData : SliverMultiBoxAdaptorParentData = child.parentData;
        /* TODO (AssertStatementImpl) : assert (childParentData.layoutOffset != null); */;
        return childParentData.layoutOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyPaintTransform(child : lib5.RenderObject,transform : lib7.Matrix4) : any {
        this.applyPaintTransformForBoxChild(child,transform);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib5.PaintingContext,offset : any) : any {
        if (op(Op.EQUALS,firstChild,null)) return;
        let mainAxisUnit : any, crossAxisUnit : any, originOffset : any;
        let addExtent : boolean;
        switch (lib4.applyGrowthDirectionToAxisDirection(this.constraints.axisDirection,this.constraints.growthDirection)) {
            case lib8.AxisDirection.up:
                mainAxisUnit = new bare.createInstance(any,null,0.0,-1.0);
                crossAxisUnit = new bare.createInstance(any,null,1.0,0.0);
                originOffset = op(Op.PLUS,offset,Offset(0.0,this.geometry.paintExtent));
                addExtent = true;
                break;
            case lib8.AxisDirection.right:
                mainAxisUnit = new bare.createInstance(any,null,1.0,0.0);
                crossAxisUnit = new bare.createInstance(any,null,0.0,1.0);
                originOffset = offset;
                addExtent = false;
                break;
            case lib8.AxisDirection.down:
                mainAxisUnit = new bare.createInstance(any,null,0.0,1.0);
                crossAxisUnit = new bare.createInstance(any,null,1.0,0.0);
                originOffset = offset;
                addExtent = false;
                break;
            case lib8.AxisDirection.left:
                mainAxisUnit = new bare.createInstance(any,null,-1.0,0.0);
                crossAxisUnit = new bare.createInstance(any,null,0.0,1.0);
                originOffset = op(Op.PLUS,offset,Offset(this.geometry.paintExtent,0.0));
                addExtent = true;
                break;
        }
        /* TODO (AssertStatementImpl) : assert (mainAxisUnit != null); */;
        /* TODO (AssertStatementImpl) : assert (addExtent != null); */;
        let child : lib3.RenderBox = firstChild;
        while (child != null){
            let mainAxisDelta : double = this.childMainAxisPosition(child);
            let crossAxisDelta : double = this.childCrossAxisPosition(child);
            let childOffset : any = Offset(op(Op.PLUS,op(Op.PLUS,originOffset.dx,op(Op.TIMES,mainAxisUnit.dx,mainAxisDelta)),op(Op.TIMES,crossAxisUnit.dx,crossAxisDelta)),op(Op.PLUS,op(Op.PLUS,originOffset.dy,op(Op.TIMES,mainAxisUnit.dy,mainAxisDelta)),op(Op.TIMES,crossAxisUnit.dy,crossAxisDelta)));
            if (addExtent) childOffset += op(Op.TIMES,mainAxisUnit,this.paintExtentOf(child));
            if (mainAxisDelta < this.constraints.remainingPaintExtent && mainAxisDelta + this.paintExtentOf(child) > 0) context.paintChild(child,childOffset);
            child = childAfter(child);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib9.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib9.DiagnosticsNode.message(firstChild != null ? `currently live children: ${this.indexOf(firstChild)} to ${this.indexOf(lastChild)}` : 'no children current live'));
    }
    debugAssertChildListIsNonEmptyAndContiguous() : boolean {
        /* TODO (AssertStatementImpl) : assert (() {assert (firstChild != null); int index = indexOf(firstChild); RenderBox child = childAfter(firstChild); while (child != null) {index += 1; assert (indexOf(child) == index); child = childAfter(child);} return true;}()); */;
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugDescribeChildren() : core.DartList<lib9.DiagnosticsNode> {
        let children : core.DartList<lib9.DiagnosticsNode> = new core.DartList.literal<lib9.DiagnosticsNode>();
        if (firstChild != null) {
            let child : lib3.RenderBox = firstChild;
            while (true){
                let childParentData : SliverMultiBoxAdaptorParentData = child.parentData;
                children.add(child.toDiagnosticsNode({
                    name : `child with index ${childParentData.index}`}));
                if (op(Op.EQUALS,child,lastChild)) break;
                child = childParentData.nextSibling;
            }
        }
        if (this._keepAliveBucket.isNotEmpty) {
            let indices : core.DartList<number> = ((_) : core.DartList<number> =>  {
                {
                    _.sort();
                    return _;
                }
            })(this._keepAliveBucket.keys.toList());
            for(let index of indices) {
                children.add(this._keepAliveBucket.get(index).toDiagnosticsNode({
                    name : `child with index ${index} (kept alive but not laid out)`,style : lib9.DiagnosticsTreeStyle.offstage}));
            }
        }
        return children;
    }
}

export class properties {
    private static __$KeepAliveParentDataMixin : any;
    static get KeepAliveParentDataMixin() : any { 
        return this.__$KeepAliveParentDataMixin;
    }
    static set KeepAliveParentDataMixin(__$value : any)  { 
        this.__$KeepAliveParentDataMixin = __$value;
    }

    private static __$RenderSliverWithKeepAliveMixin : any;
    static get RenderSliverWithKeepAliveMixin() : any { 
        return this.__$RenderSliverWithKeepAliveMixin;
    }
    static set RenderSliverWithKeepAliveMixin(__$value : any)  { 
        this.__$RenderSliverWithKeepAliveMixin = __$value;
    }

}
