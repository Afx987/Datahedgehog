/** Library asset:datahedgehog_monitor/lib/lib/rendering/custom_layout.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./box";
import * as lib4 from "./object";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";

export var setupParentData : (child : lib3.RenderBox) => any = (child : lib3.RenderBox) : any =>  {
    if (isNot(child.parentData, MultiChildLayoutParentData)) child.parentData = MultiChildLayoutParentData();
};
export var _getSize : (constraints : lib3.BoxConstraints) => any = (constraints : lib3.BoxConstraints) : any =>  {
    /* TODO (AssertStatementImpl) : assert (constraints.debugAssertIsValid()); */;
    return constraints.constrain(properties._delegate.getSize(constraints));
};
export var computeMinIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    let width : double = _getSize(lib3.BoxConstraints.tightForFinite({
        height : height})).width;
    if (new core.DartDouble(width).isFinite) return width;
    return 0.0;
};
export var computeMaxIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    let width : double = _getSize(lib3.BoxConstraints.tightForFinite({
        height : height})).width;
    if (new core.DartDouble(width).isFinite) return width;
    return 0.0;
};
export var computeMinIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    let height : double = _getSize(lib3.BoxConstraints.tightForFinite({
        width : width})).height;
    if (new core.DartDouble(height).isFinite) return height;
    return 0.0;
};
export var computeMaxIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    let height : double = _getSize(lib3.BoxConstraints.tightForFinite({
        width : width})).height;
    if (new core.DartDouble(height).isFinite) return height;
    return 0.0;
};
export var performLayout : () => any = () : any =>  {
    size = _getSize(constraints);
    properties.delegate._callPerformLayout(size,firstChild);
};
export var paint : (context : lib4.PaintingContext,offset : any) => any = (context : lib4.PaintingContext,offset : any) : any =>  {
    defaultPaint(context,offset);
};
export var hitTestChildren : (result : lib5.HitTestResult,_namedArguments? : {position? : any}) => boolean = (result : lib5.HitTestResult,_namedArguments? : {position? : any}) : boolean =>  {
    let {position} = Object.assign({
    }, _namedArguments );
    return defaultHitTestChildren(result,{
        position : position});
};
export namespace MultiChildLayoutParentData {
    export type Constructors = lib3.ContainerBoxParentData.Constructors | 'MultiChildLayoutParentData';
    export type Interface = Omit<MultiChildLayoutParentData, Constructors>;
}
@DartClass
export class MultiChildLayoutParentData extends lib3.ContainerBoxParentData<lib3.RenderBox> {
    id : core.DartObject;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${super.toString()}; id=${this.id}`;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MultiChildLayoutParentData() {
    }
}

export namespace MultiChildLayoutDelegate {
    export type Constructors = 'MultiChildLayoutDelegate';
    export type Interface = Omit<MultiChildLayoutDelegate, Constructors>;
}
@DartClass
export class MultiChildLayoutDelegate {
    _idToChild : core.DartMap<core.DartObject,lib3.RenderBox>;

    _debugChildrenNeedingLayout : core.DartSet<lib3.RenderBox>;

    hasChild(childId : core.DartObject) : boolean {
        return this._idToChild.get(childId) != null;
    }
    layoutChild(childId : core.DartObject,constraints : lib3.BoxConstraints) : any {
        let child : lib3.RenderBox = this._idToChild.get(childId);
        /* TODO (AssertStatementImpl) : assert (() {if (child == null) {throw FlutterError('The $this custom multichild layout delegate tried to lay out a non-existent child.\n' 'There is no child with the id "$childId".');} if (!_debugChildrenNeedingLayout.remove(child)) {throw FlutterError('The $this custom multichild layout delegate tried to lay out the child with id "$childId" more than once.\n' 'Each child must be laid out exactly once.');} try {assert (constraints.debugAssertIsValid(isAppliedConstraint: true));} on AssertionError catch (exception) {throw FlutterError('The $this custom multichild layout delegate provided invalid box constraints for the child with id "$childId".\n' '$exception\n' 'The minimum width and height must be greater than or equal to zero.\n' 'The maximum width must be greater than or equal to the minimum width.\n' 'The maximum height must be greater than or equal to the minimum height.');} return true;}()); */;
        child.layout(constraints,{
            parentUsesSize : true});
        return child.size;
    }
    positionChild(childId : core.DartObject,offset : any) : any {
        let child : lib3.RenderBox = this._idToChild.get(childId);
        /* TODO (AssertStatementImpl) : assert (() {if (child == null) {throw FlutterError('The $this custom multichild layout delegate tried to position out a non-existent child:\n' 'There is no child with the id "$childId".');} if (offset == null) {throw FlutterError('The $this custom multichild layout delegate provided a null position for the child with id "$childId".');} return true;}()); */;
        let childParentData : MultiChildLayoutParentData = child.parentData;
        childParentData.offset = offset;
    }
    _debugDescribeChild(child : lib3.RenderBox) : string {
        let childParentData : MultiChildLayoutParentData = child.parentData;
        return `${childParentData.id}: ${child}`;
    }
    _callPerformLayout(size : any,firstChild : lib3.RenderBox) : any {
        let previousIdToChild : core.DartMap<core.DartObject,lib3.RenderBox> = this._idToChild;
        let debugPreviousChildrenNeedingLayout : core.DartSet<lib3.RenderBox>;
        /* TODO (AssertStatementImpl) : assert (() {debugPreviousChildrenNeedingLayout = _debugChildrenNeedingLayout; _debugChildrenNeedingLayout = Set<RenderBox>(); return true;}()); */;
        try {
            this._idToChild = new core.DartMap.literal([
            ]);
            let child : lib3.RenderBox = firstChild;
            while (child != null){
                let childParentData : MultiChildLayoutParentData = child.parentData;
                /* TODO (AssertStatementImpl) : assert (() {if (childParentData.id == null) {throw FlutterError('The following child has no ID:\n' '  $child\n' 'Every child of a RenderCustomMultiChildLayoutBox must have an ID in its parent data.');} return true;}()); */;
                this._idToChild.set(childParentData.id,child);
                /* TODO (AssertStatementImpl) : assert (() {_debugChildrenNeedingLayout.add(child); return true;}()); */;
                child = childParentData.nextSibling;
            }
            this.performLayout(size);
            /* TODO (AssertStatementImpl) : assert (() {if (_debugChildrenNeedingLayout.isNotEmpty) {if (_debugChildrenNeedingLayout.length > 1) {throw FlutterError('The $this custom multichild layout delegate forgot to lay out the following children:\n' '  ${_debugChildrenNeedingLayout.map<String>(_debugDescribeChild).join("\n  ")}\n' 'Each child must be laid out exactly once.');} else {throw FlutterError('The $this custom multichild layout delegate forgot to lay out the following child:\n' '  ${_debugDescribeChild(_debugChildrenNeedingLayout.single)}\n' 'Each child must be laid out exactly once.');}} return true;}()); */;
        } finally {
            this._idToChild = previousIdToChild;
            /* TODO (AssertStatementImpl) : assert (() {_debugChildrenNeedingLayout = debugPreviousChildrenNeedingLayout; return true;}()); */;
        }
    }
    getSize(constraints : lib3.BoxConstraints) : any {
        return constraints.biggest;
    }
    @Abstract
    performLayout(size : any) : any{ throw 'abstract'}
    @Abstract
    shouldRelayout(oldDelegate : MultiChildLayoutDelegate) : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}`;
    }
    constructor() {
    }
    @defaultConstructor
    MultiChildLayoutDelegate() {
    }
}

export namespace RenderCustomMultiChildLayoutBox {
    export type Constructors = lib3.RenderBox.Constructors | 'RenderCustomMultiChildLayoutBox';
    export type Interface = Omit<RenderCustomMultiChildLayoutBox, Constructors>;
}
@DartClass
@With(any,any)
export class RenderCustomMultiChildLayoutBox extends lib3.RenderBox implements any.Interface,any.Interface {
    constructor(_namedArguments? : {children? : core.DartList<lib3.RenderBox>,delegate? : MultiChildLayoutDelegate}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderCustomMultiChildLayoutBox(_namedArguments? : {children? : core.DartList<lib3.RenderBox>,delegate? : MultiChildLayoutDelegate}) {
        let {children,delegate} = Object.assign({
        }, _namedArguments );
        this._delegate = properties.delegate;
        this.assert = assert;
    }
     : any;

    _delegate;

    @Abstract
    addAll(children : any){ throw 'abstract'}
}

export class properties {
    static get delegate() : MultiChildLayoutDelegate {
        return properties._delegate;
    }
    private static __$_delegate : MultiChildLayoutDelegate;
    static get _delegate() : MultiChildLayoutDelegate { 
        return this.__$_delegate;
    }
    static set _delegate(__$value : MultiChildLayoutDelegate)  { 
        this.__$_delegate = __$value;
    }

    static set delegate(value : MultiChildLayoutDelegate) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,properties._delegate,value)) return;
        if (value.runtimeType != properties._delegate.runtimeType || value.shouldRelayout(properties._delegate)) markNeedsLayout();
        properties._delegate = value;
    }
}
