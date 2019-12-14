/** Library asset:datahedgehog_monitor/lib/lib/semantics/semantics.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/services/text_editing";
import * as lib5 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/matrix_utils";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/collections";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/foundation/print";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/foundation/node";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as math from "@dart2ts/dart/math";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as lib13 from "./semantics_event";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/services/system_channels";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib16 from "./binding";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/foundation/unicode";

export var debugResetSemanticsIdCounter : () => any = () : any =>  {
    SemanticsNode._lastIdentifier = 0;
};
export var _pointInParentCoordinates : (node : SemanticsNode,point : any) => any = (node : SemanticsNode,point : any) : any =>  {
    if (op(Op.EQUALS,node.transform,null)) {
        return point;
    }
    let vector : lib5.Vector3 = lib5.Vector3(point.dx,point.dy,0.0);
    node.transform.transform3(vector);
    return Offset(vector.x,vector.y);
};
export var _childrenInDefaultOrder : (children : core.DartList<SemanticsNode>,textDirection : any) => core.DartList<SemanticsNode> = (children : core.DartList<SemanticsNode>,textDirection : any) : core.DartList<SemanticsNode> =>  {
    let edges : core.DartList<_BoxEdge> = new core.DartList.literal<_BoxEdge>();
    for(let child of children) {
        let childRect : any = child.rect.deflate(0.1);
        edges.add(_BoxEdge({
            isLeadingEdge : true,offset : _pointInParentCoordinates(child,childRect.topLeft).dy,node : child}));
        edges.add(_BoxEdge({
            isLeadingEdge : false,offset : _pointInParentCoordinates(child,childRect.bottomRight).dy,node : child}));
    }
    edges.sort();
    let verticalGroups : core.DartList<_SemanticsSortGroup> = new core.DartList.literal<_SemanticsSortGroup>();
    let group : _SemanticsSortGroup;
    let depth : number = 0;
    for(let edge of edges) {
        if (edge.isLeadingEdge) {
            depth += 1;
            group = ( group ) || ( _SemanticsSortGroup({
                startOffset : edge.offset,textDirection : textDirection}) );
            group.nodes.add(edge.node);
        }else {
            depth -= 1;
        }
        if (depth == 0) {
            verticalGroups.add(group);
            group = null;
        }
    }
    verticalGroups.sort();
    let result : core.DartList<SemanticsNode> = new core.DartList.literal<SemanticsNode>();
    for(let group of verticalGroups) {
        let sortedGroupNodes : core.DartList<SemanticsNode> = group.sortedWithinVerticalGroup();
        result.addAll(sortedGroupNodes);
    }
    return result;
};
export var _concatStrings : (_namedArguments? : {thisString? : string,otherString? : string,thisTextDirection? : any,otherTextDirection? : any}) => string = (_namedArguments? : {thisString? : string,otherString? : string,thisTextDirection? : any,otherTextDirection? : any}) : string =>  {
    let {thisString,otherString,thisTextDirection,otherTextDirection} = Object.assign({
    }, _namedArguments );
    if (new core.DartString(otherString).isEmpty) return thisString;
    let nestedLabel : string = otherString;
    if (thisTextDirection != otherTextDirection && otherTextDirection != null) {
        switch (otherTextDirection) {
            case TextDirection.rtl:
                nestedLabel = `${lib17.Unicode.RLE}${nestedLabel}${lib17.Unicode.PDF}`;
                break;
            case TextDirection.ltr:
                nestedLabel = `${lib17.Unicode.LRE}${nestedLabel}${lib17.Unicode.PDF}`;
                break;
        }
    }
    if (new core.DartString(thisString).isEmpty) return nestedLabel;
    return `${thisString}\n${nestedLabel}`;
};
export namespace SemanticsTag {
    export type Constructors = 'SemanticsTag';
    export type Interface = Omit<SemanticsTag, Constructors>;
}
@DartClass
export class SemanticsTag {
    constructor(name : string) {
    }
    @defaultConstructor
    SemanticsTag(name : string) {
        this.name = name;
    }
    name : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.name})`;
    }
}

export namespace CustomSemanticsAction {
    export type Constructors = 'CustomSemanticsAction' | 'overridingAction';
    export type Interface = Omit<CustomSemanticsAction, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class CustomSemanticsAction {
    constructor(_namedArguments? : {label? : any}) {
    }
    @defaultConstructor
    CustomSemanticsAction(_namedArguments? : {label? : any}) {
        let {label} = Object.assign({
        }, _namedArguments );
        this.hint = null;
        this.action = null;
        this.label = null;
        this.assert = assert;
        this.label = label;
    }
     : any;

     : any;

    hint;
    action;

    @namedConstructor
    overridingAction(_namedArguments? : {hint? : any,action? : any}) {
        let {hint,action} = Object.assign({
        }, _namedArguments );
        this.hint = null;
        this.action = null;
        this.label = null;
        this.assert = assert;
        this.hint = hint;
        this.action = action;
    }
    static overridingAction : new(_namedArguments? : {hint? : any,action? : any}) => CustomSemanticsAction;

     : any;

     : any;

     : any;

    label;

    label : string;

    hint : string;

    action : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return ui.hashValues(this.label,this.hint,this.action);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : CustomSemanticsAction = other;
        return op(Op.EQUALS,typedOther.label,this.label) && op(Op.EQUALS,typedOther.hint,this.hint) && op(Op.EQUALS,typedOther.action,this.action);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `CustomSemanticsAction(${CustomSemanticsAction._ids.get(this)}, label:${this.label}, hint:${this.hint}, action:${this.action})`;
    }
    private static __$_nextId : number;
    static get _nextId() : number { 
        if (this.__$_nextId===undefined) {
            this.__$_nextId = 0;
        }
        return this.__$_nextId;
    }
    static set _nextId(__$value : number)  { 
        this.__$_nextId = __$value;
    }

    private static __$_actions : core.DartMap<number,CustomSemanticsAction>;
    static get _actions() : core.DartMap<number,CustomSemanticsAction> { 
        if (this.__$_actions===undefined) {
            this.__$_actions = new core.DartMap.literal([
            ]);
        }
        return this.__$_actions;
    }
    static set _actions(__$value : core.DartMap<number,CustomSemanticsAction>)  { 
        this.__$_actions = __$value;
    }

    private static __$_ids : core.DartMap<CustomSemanticsAction,number>;
    static get _ids() : core.DartMap<CustomSemanticsAction,number> { 
        if (this.__$_ids===undefined) {
            this.__$_ids = new core.DartMap.literal([
            ]);
        }
        return this.__$_ids;
    }
    static set _ids(__$value : core.DartMap<CustomSemanticsAction,number>)  { 
        this.__$_ids = __$value;
    }

    static getIdentifier(action : CustomSemanticsAction) : number {
        let result : number = CustomSemanticsAction._ids.get(action);
        if (result == null) {
            result = CustomSemanticsAction._nextId++;
            CustomSemanticsAction._ids.set(action,result);
            CustomSemanticsAction._actions.set(result,action);
        }
        return result;
    }
    static getAction(id : number) : CustomSemanticsAction {
        return CustomSemanticsAction._actions.get(id);
    }
}

export namespace SemanticsData {
    export type Constructors = lib3.Diagnosticable.Constructors | 'SemanticsData';
    export type Interface = Omit<SemanticsData, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class SemanticsData extends lib3.Diagnosticable {
    constructor(_namedArguments? : {flags? : number,actions? : number,label? : string,increasedValue? : string,value? : string,decreasedValue? : string,hint? : string,textDirection? : any,rect? : any,elevation? : double,thickness? : double,textSelection? : lib4.TextSelection,scrollIndex? : number,scrollChildCount? : number,scrollPosition? : double,scrollExtentMax? : double,scrollExtentMin? : double,tags? : core.DartSet<SemanticsTag>,transform? : lib5.Matrix4,customSemanticsActionIds? : core.DartList<number>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SemanticsData(_namedArguments? : {flags? : number,actions? : number,label? : string,increasedValue? : string,value? : string,decreasedValue? : string,hint? : string,textDirection? : any,rect? : any,elevation? : double,thickness? : double,textSelection? : lib4.TextSelection,scrollIndex? : number,scrollChildCount? : number,scrollPosition? : double,scrollExtentMax? : double,scrollExtentMin? : double,tags? : core.DartSet<SemanticsTag>,transform? : lib5.Matrix4,customSemanticsActionIds? : core.DartList<number>}) {
        let {flags,actions,label,increasedValue,value,decreasedValue,hint,textDirection,rect,elevation,thickness,textSelection,scrollIndex,scrollChildCount,scrollPosition,scrollExtentMax,scrollExtentMin,tags,transform,customSemanticsActionIds} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.flags = flags;
        this.actions = actions;
        this.label = label;
        this.increasedValue = increasedValue;
        this.value = value;
        this.decreasedValue = decreasedValue;
        this.hint = hint;
        this.textDirection = textDirection;
        this.rect = rect;
        this.elevation = elevation;
        this.thickness = thickness;
        this.textSelection = textSelection;
        this.scrollIndex = scrollIndex;
        this.scrollChildCount = scrollChildCount;
        this.scrollPosition = scrollPosition;
        this.scrollExtentMax = scrollExtentMax;
        this.scrollExtentMin = scrollExtentMin;
        this.tags = tags;
        this.transform = transform;
        this.customSemanticsActionIds = customSemanticsActionIds;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    flags : number;

    actions : number;

    label : string;

    value : string;

    increasedValue : string;

    decreasedValue : string;

    hint : string;

    textDirection : any;

    textSelection : lib4.TextSelection;

    scrollChildCount : number;

    scrollIndex : number;

    scrollPosition : double;

    scrollExtentMax : double;

    scrollExtentMin : double;

    rect : any;

    tags : core.DartSet<SemanticsTag>;

    transform : lib5.Matrix4;

    elevation : double;

    thickness : double;

    customSemanticsActionIds : core.DartList<number>;

    hasFlag(flag : any) : boolean {
        return (this.flags & flag.index) != 0;
    }
    hasAction(action : any) : boolean {
        return (this.actions & action.index) != 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toStringShort() : string {
        return `${this.runtimeType}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib3.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib3.DiagnosticsProperty('rect',this.rect,{
            showName : false}));
        properties.add(lib6.TransformProperty('transform',this.transform,{
            showName : false,defaultValue : null}));
        properties.add(lib3.DoubleProperty('elevation',this.elevation,{
            defaultValue : 0.0}));
        properties.add(lib3.DoubleProperty('thickness',this.thickness,{
            defaultValue : 0.0}));
        let actionSummary : core.DartList<string> = new core.DartList.literal<string>();
        for(let action of SemanticsAction.values.values) {
            if ((this.actions & action.index) != 0) actionSummary.add(lib3.describeEnum(action));
        }
        let customSemanticsActionSummary : core.DartList<string> = this.customSemanticsActionIds.map((actionId : number) =>  {
            return CustomSemanticsAction.getAction(actionId).label;
        }).toList();
        properties.add(lib3.IterableProperty('actions',actionSummary,{
            ifEmpty : null}));
        properties.add(lib3.IterableProperty('customActions',customSemanticsActionSummary,{
            ifEmpty : null}));
        let flagSummary : core.DartList<string> = new core.DartList.literal<string>();
        for(let flag of SemanticsFlag.values.values) {
            if ((this.flags & flag.index) != 0) flagSummary.add(lib3.describeEnum(flag));
        }
        properties.add(lib3.IterableProperty('flags',flagSummary,{
            ifEmpty : null}));
        properties.add(lib3.StringProperty('label',this.label,{
            defaultValue : ''}));
        properties.add(lib3.StringProperty('value',this.value,{
            defaultValue : ''}));
        properties.add(lib3.StringProperty('increasedValue',this.increasedValue,{
            defaultValue : ''}));
        properties.add(lib3.StringProperty('decreasedValue',this.decreasedValue,{
            defaultValue : ''}));
        properties.add(lib3.StringProperty('hint',this.hint,{
            defaultValue : ''}));
        properties.add(lib3.EnumProperty('textDirection',this.textDirection,{
            defaultValue : null}));
        if (((t)=>(!!t)?t.isValid:null)(this.textSelection) == true) properties.add(lib3.MessageProperty('textSelection',`[${this.textSelection.start}, ${this.textSelection.end}]`));
        properties.add(lib3.IntProperty('scrollChildren',this.scrollChildCount,{
            defaultValue : null}));
        properties.add(lib3.IntProperty('scrollIndex',this.scrollIndex,{
            defaultValue : null}));
        properties.add(lib3.DoubleProperty('scrollExtentMin',this.scrollExtentMin,{
            defaultValue : null}));
        properties.add(lib3.DoubleProperty('scrollPosition',this.scrollPosition,{
            defaultValue : null}));
        properties.add(lib3.DoubleProperty('scrollExtentMax',this.scrollExtentMax,{
            defaultValue : null}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (isNot(other, SemanticsData)) return false;
        let typedOther : SemanticsData = other;
        return typedOther.flags == this.flags && typedOther.actions == this.actions && typedOther.label == this.label && typedOther.value == this.value && typedOther.increasedValue == this.increasedValue && typedOther.decreasedValue == this.decreasedValue && typedOther.hint == this.hint && op(Op.EQUALS,typedOther.textDirection,this.textDirection) && op(Op.EQUALS,typedOther.rect,this.rect) && lib7.setEquals(typedOther.tags,this.tags) && typedOther.scrollChildCount == this.scrollChildCount && typedOther.scrollIndex == this.scrollIndex && op(Op.EQUALS,typedOther.textSelection,this.textSelection) && typedOther.scrollPosition == this.scrollPosition && typedOther.scrollExtentMax == this.scrollExtentMax && typedOther.scrollExtentMin == this.scrollExtentMin && op(Op.EQUALS,typedOther.transform,this.transform) && typedOther.elevation == this.elevation && typedOther.thickness == this.thickness && SemanticsData._sortedListsEqual(typedOther.customSemanticsActionIds,this.customSemanticsActionIds);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return ui.hashValues(this.flags,this.actions,this.label,this.value,this.increasedValue,this.decreasedValue,this.hint,this.textDirection,this.rect,this.tags,this.textSelection,this.scrollChildCount,this.scrollIndex,this.scrollPosition,this.scrollExtentMax,this.scrollExtentMin,this.transform,this.elevation,this.thickness,ui.hashList(this.customSemanticsActionIds));
    }
    static _sortedListsEqual(left : core.DartList<number>,right : core.DartList<number>) : boolean {
        if (left == null && right == null) return true;
        if (left != null && right != null) {
            if (left.length != right.length) return false;
            for(let i : number = 0; i < left.length; i++)if (left[i] != right[i]) return false;
            return true;
        }
        return false;
    }
}

export namespace _SemanticsDiagnosticableNode {
    export type Constructors = lib3.DiagnosticableNode.Constructors | '_SemanticsDiagnosticableNode';
    export type Interface = Omit<_SemanticsDiagnosticableNode, Constructors>;
}
@DartClass
export class _SemanticsDiagnosticableNode extends lib3.DiagnosticableNode<SemanticsNode> {
    constructor(_namedArguments? : {name? : string,value? : SemanticsNode,style? : lib3.DiagnosticsTreeStyle,childOrder? : DebugSemanticsDumpOrder}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SemanticsDiagnosticableNode(_namedArguments? : {name? : string,value? : SemanticsNode,style? : lib3.DiagnosticsTreeStyle,childOrder? : DebugSemanticsDumpOrder}) {
        let {name,value,style,childOrder} = Object.assign({
        }, _namedArguments );
        super.DiagnosticableNode({
            name : name,value : value,style : style});
        this.childOrder = childOrder;
    }
    childOrder : DebugSemanticsDumpOrder;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getChildren() : core.DartList<lib3.DiagnosticsNode> {
        if (lib8.value != null) return lib8.value.debugDescribeChildren({
            childOrder : this.childOrder});
        return new core.DartList.literal<lib3.DiagnosticsNode>();
    }
}

export namespace SemanticsHintOverrides {
    export type Constructors = lib3.DiagnosticableTree.Constructors | 'SemanticsHintOverrides';
    export type Interface = Omit<SemanticsHintOverrides, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class SemanticsHintOverrides extends lib3.DiagnosticableTree {
    constructor(_namedArguments? : {onTapHint? : string,onLongPressHint? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SemanticsHintOverrides(_namedArguments? : {onTapHint? : string,onLongPressHint? : string}) {
        let {onTapHint,onLongPressHint} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.onTapHint = onTapHint;
        this.onLongPressHint = onLongPressHint;
    }
     : any;

     : any;

    onTapHint : string;

    onLongPressHint : string;

    get isNotEmpty() : boolean {
        return this.onTapHint != null || this.onLongPressHint != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return ui.hashValues(this.onTapHint,this.onLongPressHint);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : SemanticsHintOverrides = other;
        return typedOther.onTapHint == this.onTapHint && typedOther.onLongPressHint == this.onLongPressHint;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib3.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib3.StringProperty('onTapHint',this.onTapHint,{
            defaultValue : null}));
        properties.add(lib3.StringProperty('onLongPressHint',this.onLongPressHint,{
            defaultValue : null}));
    }
}

export namespace SemanticsProperties {
    export type Constructors = lib3.DiagnosticableTree.Constructors | 'SemanticsProperties';
    export type Interface = Omit<SemanticsProperties, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class SemanticsProperties extends lib3.DiagnosticableTree {
    constructor(_namedArguments? : {enabled? : boolean,checked? : boolean,selected? : boolean,toggled? : boolean,button? : boolean,header? : boolean,textField? : boolean,focused? : boolean,inMutuallyExclusiveGroup? : boolean,hidden? : boolean,obscured? : boolean,scopesRoute? : boolean,namesRoute? : boolean,image? : boolean,liveRegion? : boolean,label? : string,value? : string,increasedValue? : string,decreasedValue? : string,hint? : string,hintOverrides? : SemanticsHintOverrides,textDirection? : any,sortKey? : SemanticsSortKey,onTap? : any,onLongPress? : any,onScrollLeft? : any,onScrollRight? : any,onScrollUp? : any,onScrollDown? : any,onIncrease? : any,onDecrease? : any,onCopy? : any,onCut? : any,onPaste? : any,onMoveCursorForwardByCharacter? : (extendSelection : boolean) => any,onMoveCursorBackwardByCharacter? : (extendSelection : boolean) => any,onMoveCursorForwardByWord? : (extendSelection : boolean) => any,onMoveCursorBackwardByWord? : (extendSelection : boolean) => any,onSetSelection? : (selection : lib4.TextSelection) => any,onDidGainAccessibilityFocus? : any,onDidLoseAccessibilityFocus? : any,onDismiss? : any,customSemanticsActions? : core.DartMap<CustomSemanticsAction,any>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SemanticsProperties(_namedArguments? : {enabled? : boolean,checked? : boolean,selected? : boolean,toggled? : boolean,button? : boolean,header? : boolean,textField? : boolean,focused? : boolean,inMutuallyExclusiveGroup? : boolean,hidden? : boolean,obscured? : boolean,scopesRoute? : boolean,namesRoute? : boolean,image? : boolean,liveRegion? : boolean,label? : string,value? : string,increasedValue? : string,decreasedValue? : string,hint? : string,hintOverrides? : SemanticsHintOverrides,textDirection? : any,sortKey? : SemanticsSortKey,onTap? : any,onLongPress? : any,onScrollLeft? : any,onScrollRight? : any,onScrollUp? : any,onScrollDown? : any,onIncrease? : any,onDecrease? : any,onCopy? : any,onCut? : any,onPaste? : any,onMoveCursorForwardByCharacter? : (extendSelection : boolean) => any,onMoveCursorBackwardByCharacter? : (extendSelection : boolean) => any,onMoveCursorForwardByWord? : (extendSelection : boolean) => any,onMoveCursorBackwardByWord? : (extendSelection : boolean) => any,onSetSelection? : (selection : lib4.TextSelection) => any,onDidGainAccessibilityFocus? : any,onDidLoseAccessibilityFocus? : any,onDismiss? : any,customSemanticsActions? : core.DartMap<CustomSemanticsAction,any>}) {
        let {enabled,checked,selected,toggled,button,header,textField,focused,inMutuallyExclusiveGroup,hidden,obscured,scopesRoute,namesRoute,image,liveRegion,label,value,increasedValue,decreasedValue,hint,hintOverrides,textDirection,sortKey,onTap,onLongPress,onScrollLeft,onScrollRight,onScrollUp,onScrollDown,onIncrease,onDecrease,onCopy,onCut,onPaste,onMoveCursorForwardByCharacter,onMoveCursorBackwardByCharacter,onMoveCursorForwardByWord,onMoveCursorBackwardByWord,onSetSelection,onDidGainAccessibilityFocus,onDidLoseAccessibilityFocus,onDismiss,customSemanticsActions} = Object.assign({
        }, _namedArguments );
        this.enabled = enabled;
        this.checked = checked;
        this.selected = selected;
        this.toggled = toggled;
        this.button = button;
        this.header = header;
        this.textField = textField;
        this.focused = focused;
        this.inMutuallyExclusiveGroup = inMutuallyExclusiveGroup;
        this.hidden = hidden;
        this.obscured = obscured;
        this.scopesRoute = scopesRoute;
        this.namesRoute = namesRoute;
        this.image = image;
        this.liveRegion = liveRegion;
        this.label = label;
        this.value = value;
        this.increasedValue = increasedValue;
        this.decreasedValue = decreasedValue;
        this.hint = hint;
        this.hintOverrides = hintOverrides;
        this.textDirection = textDirection;
        this.sortKey = sortKey;
        this.onTap = onTap;
        this.onLongPress = onLongPress;
        this.onScrollLeft = onScrollLeft;
        this.onScrollRight = onScrollRight;
        this.onScrollUp = onScrollUp;
        this.onScrollDown = onScrollDown;
        this.onIncrease = onIncrease;
        this.onDecrease = onDecrease;
        this.onCopy = onCopy;
        this.onCut = onCut;
        this.onPaste = onPaste;
        this.onMoveCursorForwardByCharacter = onMoveCursorForwardByCharacter;
        this.onMoveCursorBackwardByCharacter = onMoveCursorBackwardByCharacter;
        this.onMoveCursorForwardByWord = onMoveCursorForwardByWord;
        this.onMoveCursorBackwardByWord = onMoveCursorBackwardByWord;
        this.onSetSelection = onSetSelection;
        this.onDidGainAccessibilityFocus = onDidGainAccessibilityFocus;
        this.onDidLoseAccessibilityFocus = onDidLoseAccessibilityFocus;
        this.onDismiss = onDismiss;
        this.customSemanticsActions = customSemanticsActions;
    }
    enabled : boolean;

    checked : boolean;

    toggled : boolean;

    selected : boolean;

    button : boolean;

    header : boolean;

    textField : boolean;

    focused : boolean;

    inMutuallyExclusiveGroup : boolean;

    hidden : boolean;

    obscured : boolean;

    scopesRoute : boolean;

    namesRoute : boolean;

    image : boolean;

    liveRegion : boolean;

    label : string;

    value : string;

    increasedValue : string;

    decreasedValue : string;

    hint : string;

    hintOverrides : SemanticsHintOverrides;

    textDirection : any;

    sortKey : SemanticsSortKey;

    onTap : any;

    onLongPress : any;

    onScrollLeft : any;

    onScrollRight : any;

    onScrollUp : any;

    onScrollDown : any;

    onIncrease : any;

    onDecrease : any;

    onCopy : any;

    onCut : any;

    onPaste : any;

    onMoveCursorForwardByCharacter : (extendSelection : boolean) => any;

    onMoveCursorBackwardByCharacter : (extendSelection : boolean) => any;

    onMoveCursorForwardByWord : (extendSelection : boolean) => any;

    onMoveCursorBackwardByWord : (extendSelection : boolean) => any;

    onSetSelection : (selection : lib4.TextSelection) => any;

    onDidGainAccessibilityFocus : any;

    onDidLoseAccessibilityFocus : any;

    onDismiss : any;

    customSemanticsActions : core.DartMap<CustomSemanticsAction,any>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib3.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib3.DiagnosticsProperty('checked',this.checked,{
            defaultValue : null}));
        properties.add(lib3.DiagnosticsProperty('selected',this.selected,{
            defaultValue : null}));
        properties.add(lib3.StringProperty('label',this.label,{
            defaultValue : ''}));
        properties.add(lib3.StringProperty('value',this.value));
        properties.add(lib3.StringProperty('hint',this.hint));
        properties.add(lib3.EnumProperty('textDirection',this.textDirection,{
            defaultValue : null}));
        properties.add(lib3.DiagnosticsProperty('sortKey',this.sortKey,{
            defaultValue : null}));
        properties.add(lib3.DiagnosticsProperty('hintOverrides',this.hintOverrides));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toStringShort() : string {
        return `${this.runtimeType}`;
    }
}

export namespace SemanticsNode {
    export type Constructors = lib9.AbstractNode.Constructors | 'SemanticsNode' | 'root';
    export type Interface = Omit<SemanticsNode, Constructors>;
}
@DartClass
@With(any)
export class SemanticsNode extends lib9.AbstractNode implements any.Interface {
    constructor(_namedArguments? : {key? : lib10.Key,showOnScreen? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SemanticsNode(_namedArguments? : {key? : lib10.Key,showOnScreen? : any}) {
        let {key,showOnScreen} = Object.assign({
        }, _namedArguments );
        this._rect = Rect.zero;
        this._isMergedIntoParent = false;
        this._mergeAllDescendantsIntoThisNode = SemanticsNode._kEmptyConfig.isMergingSemanticsOfDescendants;
        this._dead = false;
        this._dirty = false;
        this._actions = SemanticsNode._kEmptyConfig._actions;
        this._customSemanticsActions = SemanticsNode._kEmptyConfig._customSemanticsActions;
        this._actionsAsBits = SemanticsNode._kEmptyConfig._actionsAsBits;
        this._flags = SemanticsNode._kEmptyConfig._flags;
        this._label = SemanticsNode._kEmptyConfig.label;
        this._value = SemanticsNode._kEmptyConfig.value;
        this._decreasedValue = SemanticsNode._kEmptyConfig.decreasedValue;
        this._increasedValue = SemanticsNode._kEmptyConfig.increasedValue;
        this._hint = SemanticsNode._kEmptyConfig.hint;
        this._elevation = SemanticsNode._kEmptyConfig.elevation;
        this._thickness = SemanticsNode._kEmptyConfig.thickness;
        this._textDirection = SemanticsNode._kEmptyConfig.textDirection;
        this.id = SemanticsNode._generateNewId();
        this._showOnScreen = showOnScreen;
        this.key = key;
    }
    @namedConstructor
    root(_namedArguments? : {key? : lib10.Key,showOnScreen? : any,owner? : SemanticsOwner}) {
        let {key,showOnScreen,owner} = Object.assign({
        }, _namedArguments );
        this._rect = Rect.zero;
        this._isMergedIntoParent = false;
        this._mergeAllDescendantsIntoThisNode = SemanticsNode._kEmptyConfig.isMergingSemanticsOfDescendants;
        this._dead = false;
        this._dirty = false;
        this._actions = SemanticsNode._kEmptyConfig._actions;
        this._customSemanticsActions = SemanticsNode._kEmptyConfig._customSemanticsActions;
        this._actionsAsBits = SemanticsNode._kEmptyConfig._actionsAsBits;
        this._flags = SemanticsNode._kEmptyConfig._flags;
        this._label = SemanticsNode._kEmptyConfig.label;
        this._value = SemanticsNode._kEmptyConfig.value;
        this._decreasedValue = SemanticsNode._kEmptyConfig.decreasedValue;
        this._increasedValue = SemanticsNode._kEmptyConfig.increasedValue;
        this._hint = SemanticsNode._kEmptyConfig.hint;
        this._elevation = SemanticsNode._kEmptyConfig.elevation;
        this._thickness = SemanticsNode._kEmptyConfig.thickness;
        this._textDirection = SemanticsNode._kEmptyConfig.textDirection;
        this.id = 0;
        this._showOnScreen = showOnScreen;
        this.key = key;
        this.attach(owner);
    }
    static root : new(_namedArguments? : {key? : lib10.Key,showOnScreen? : any,owner? : SemanticsOwner}) => SemanticsNode;

    private static __$_lastIdentifier : number;
    static get _lastIdentifier() : number { 
        if (this.__$_lastIdentifier===undefined) {
            this.__$_lastIdentifier = 0;
        }
        return this.__$_lastIdentifier;
    }
    static set _lastIdentifier(__$value : number)  { 
        this.__$_lastIdentifier = __$value;
    }

    static _generateNewId() : number {
        SemanticsNode._lastIdentifier += 1;
        return SemanticsNode._lastIdentifier;
    }
    key : lib10.Key;

    id : number;

    _showOnScreen : any;

    get transform() : lib5.Matrix4 {
        return this._transform;
    }
    _transform : lib5.Matrix4;

    set transform(value : lib5.Matrix4) {
        if (!lib6.MatrixUtils.matrixEquals(this._transform,value)) {
            this._transform = lib6.MatrixUtils.isIdentity(value) ? null : value;
            this._markDirty();
        }
    }
    get rect() : any {
        return this._rect;
    }
    _rect : any;

    set rect(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (this._rect != value) {
            this._rect = value;
            this._markDirty();
        }
    }
    parentSemanticsClipRect : any;

    parentPaintClipRect : any;

    elevationAdjustment : double;

    indexInParent : number;

    get isInvisible() : boolean {
        return !this.isMergedIntoParent && this.rect.isEmpty;
    }
    get isMergedIntoParent() : boolean {
        return this._isMergedIntoParent;
    }
    _isMergedIntoParent : boolean;

    set isMergedIntoParent(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (this._isMergedIntoParent == value) return;
        this._isMergedIntoParent = value;
        this._markDirty();
    }
    get isPartOfNodeMerging() : boolean {
        return this.mergeAllDescendantsIntoThisNode || this.isMergedIntoParent;
    }
    get mergeAllDescendantsIntoThisNode() : boolean {
        return this._mergeAllDescendantsIntoThisNode;
    }
    _mergeAllDescendantsIntoThisNode : boolean;

    _children : core.DartList<SemanticsNode>;

    _debugPreviousSnapshot : core.DartList<SemanticsNode>;

    _replaceChildren(newChildren : core.DartList<SemanticsNode>) : any {
        /* TODO (AssertStatementImpl) : assert (!newChildren.any((SemanticsNode child) => child == this)); */;
        /* TODO (AssertStatementImpl) : assert (() {if (identical(newChildren, _children)) {final StringBuffer mutationErrors = StringBuffer(); if (newChildren.length != _debugPreviousSnapshot.length) {mutationErrors.writeln('The list\'s length has changed from ${_debugPreviousSnapshot.length} ' 'to ${newChildren.length}.');} else {for (int i = 0; i < newChildren.length; i++) {if (!identical(newChildren[i], _debugPreviousSnapshot[i])) {mutationErrors.writeln('Child node at position $i was replaced:\n' 'Previous child: ${newChildren[i]}\n' 'New child: ${_debugPreviousSnapshot[i]}\n');}}} if (mutationErrors.isNotEmpty) {throw FlutterError('Failed to replace child semantics nodes because the list of `SemanticsNode`s was mutated.\n' 'Instead of mutating the existing list, create a new list containing the desired `SemanticsNode`s.\n' 'Error details:\n' '$mutationErrors');}} assert (!newChildren.any((SemanticsNode node) => node.isMergedIntoParent) || isPartOfNodeMerging); _debugPreviousSnapshot = List < SemanticsNode;  > .from(newChildren); SemanticsNode ancestor = this; while (ancestor.parent is SemanticsNode) ancestor = ancestor.parent; assert (!newChildren.any((SemanticsNode child) => child == ancestor)); return true;}()); */;
        /* TODO (AssertStatementImpl) : assert (() {final Set<SemanticsNode> seenChildren = Set<SemanticsNode>(); for (SemanticsNode child in newChildren) assert (seenChildren.add(child)); return true;}()); */;
        if (this._children != null) {
            for(let child of this._children) child._dead = true;
        }
        if (newChildren != null) {
            for(let child of newChildren) {
                /* TODO (AssertStatementImpl) : assert (!child.isInvisible, 'Child $child is invisible and should not be added as a child of $this.'); */;
                child._dead = false;
            }
        }
        let sawChange : boolean = false;
        if (this._children != null) {
            for(let child of this._children) {
                if (child._dead) {
                    if (op(Op.EQUALS,child.parent,this)) {
                        this.dropChild(child);
                    }
                    sawChange = true;
                }
            }
        }
        if (newChildren != null) {
            for(let child of newChildren) {
                if (child.parent != this) {
                    if (child.parent != null) {
                        ((_872_)=>(!!_872_)?_872_.dropChild(child):null)(child.parent);
                    }
                    /* TODO (AssertStatementImpl) : assert (!child.attached); */;
                    this.adoptChild(child);
                    sawChange = true;
                }
            }
        }
        if (!sawChange && this._children != null) {
            /* TODO (AssertStatementImpl) : assert (newChildren != null); */;
            /* TODO (AssertStatementImpl) : assert (newChildren.length == _children.length); */;
            for(let i : number = 0; i < this._children.length; i++){
                if (this._children[i].id != newChildren[i].id) {
                    sawChange = true;
                    break;
                }
            }
        }
        this._children = newChildren;
        if (sawChange) this._markDirty();
    }
    get hasChildren() : boolean {
        return (((t)=>(!!t)?t.isNotEmpty:null)(this._children) || false);
    }
    _dead : boolean;

    get childrenCount() : number {
        return this.hasChildren ? this._children.length : 0;
    }
    visitChildren(visitor : (node : SemanticsNode) => boolean) : any {
        if (this._children != null) {
            for(let child of this._children) {
                if (!visitor(child)) return;
            }
        }
    }
    _visitDescendants(visitor : (node : SemanticsNode) => boolean) : boolean {
        if (this._children != null) {
            for(let child of this._children) {
                if (!visitor(child) || !child._visitDescendants(visitor)) return false;
            }
        }
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get owner() : SemanticsOwner {
        return super.owner;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parent() : SemanticsNode {
        return super.parent;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    redepthChildren() : any {
        ((_873_)=>(!!_873_)?_873_.forEach(this.redepthChild.bind(this)):null)(this._children);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    attach(owner : SemanticsOwner) : any {
        super.attach(owner);
        /* TODO (AssertStatementImpl) : assert (!owner._nodes.containsKey(id)); */;
        owner._nodes.set(this.id,this);
        owner._detachedNodes.remove(this);
        if (this._dirty) {
            this._dirty = false;
            this._markDirty();
        }
        if (this._children != null) {
            for(let child of this._children) child.attach(owner);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    detach() : any {
        /* TODO (AssertStatementImpl) : assert (owner._nodes.containsKey(id)); */;
        /* TODO (AssertStatementImpl) : assert (!owner._detachedNodes.contains(this)); */;
        this.owner._nodes.remove(this.id);
        this.owner._detachedNodes.add(this);
        super.detach();
        /* TODO (AssertStatementImpl) : assert (owner == null); */;
        if (this._children != null) {
            for(let child of this._children) {
                if (op(Op.EQUALS,child.parent,this)) child.detach();
            }
        }
        this._markDirty();
    }
    _dirty : boolean;

    _markDirty() : any {
        if (this._dirty) return;
        this._dirty = true;
        if (this.attached) {
            /* TODO (AssertStatementImpl) : assert (!owner._detachedNodes.contains(this)); */;
            this.owner._dirtyNodes.add(this);
        }
    }
    _isDifferentFromCurrentSemanticAnnotation(config : SemanticsConfiguration) : boolean {
        return this._label != config.label || this._hint != config.hint || this._elevation != config.elevation || this._thickness != config.thickness || this._decreasedValue != config.decreasedValue || this._value != config.value || this._increasedValue != config.increasedValue || this._flags != config._flags || this._textDirection != config.textDirection || this._sortKey != config._sortKey || this._textSelection != config._textSelection || this._scrollPosition != config._scrollPosition || this._scrollExtentMax != config._scrollExtentMax || this._scrollExtentMin != config._scrollExtentMin || this._actionsAsBits != config._actionsAsBits || this.indexInParent != config.indexInParent || this._mergeAllDescendantsIntoThisNode != config.isMergingSemanticsOfDescendants;
    }
    _actions : core.DartMap<any,(args : any) => any>;

    _customSemanticsActions : core.DartMap<CustomSemanticsAction,any>;

    _actionsAsBits : number;

    tags : core.DartSet<SemanticsTag>;

    isTagged(tag : SemanticsTag) : boolean {
        return this.tags != null && this.tags.contains(tag);
    }
    _flags : number;

    hasFlag(flag : any) : boolean {
        return this._flags & flag.index != 0;
    }
    get label() : string {
        return this._label;
    }
    _label : string;

    get value() : string {
        return this._value;
    }
    _value : string;

    get decreasedValue() : string {
        return this._decreasedValue;
    }
    _decreasedValue : string;

    get increasedValue() : string {
        return this._increasedValue;
    }
    _increasedValue : string;

    get hint() : string {
        return this._hint;
    }
    _hint : string;

    get elevation() : double {
        return this._elevation;
    }
    _elevation : double;

    get thickness() : double {
        return this._thickness;
    }
    _thickness : double;

    get hintOverrides() : SemanticsHintOverrides {
        return this._hintOverrides;
    }
    _hintOverrides : SemanticsHintOverrides;

    get textDirection() : any {
        return this._textDirection;
    }
    _textDirection : any;

    get sortKey() : SemanticsSortKey {
        return this._sortKey;
    }
    _sortKey : SemanticsSortKey;

    get textSelection() : lib4.TextSelection {
        return this._textSelection;
    }
    _textSelection : lib4.TextSelection;

    get scrollChildCount() : number {
        return this._scrollChildCount;
    }
    _scrollChildCount : number;

    get scrollIndex() : number {
        return this._scrollIndex;
    }
    _scrollIndex : number;

    get scrollPosition() : double {
        return this._scrollPosition;
    }
    _scrollPosition : double;

    get scrollExtentMax() : double {
        return this._scrollExtentMax;
    }
    _scrollExtentMax : double;

    get scrollExtentMin() : double {
        return this._scrollExtentMin;
    }
    _scrollExtentMin : double;

    _canPerformAction(action : any) : boolean {
        return this._actions.containsKey(action);
    }
    private static __$_kEmptyConfig : SemanticsConfiguration;
    static get _kEmptyConfig() : SemanticsConfiguration { 
        if (this.__$_kEmptyConfig===undefined) {
            this.__$_kEmptyConfig = SemanticsConfiguration();
        }
        return this.__$_kEmptyConfig;
    }
    static set _kEmptyConfig(__$value : SemanticsConfiguration)  { 
        this.__$_kEmptyConfig = __$value;
    }

    updateWith(_namedArguments? : {config? : SemanticsConfiguration,childrenInInversePaintOrder? : core.DartList<SemanticsNode>}) : any {
        let {config,childrenInInversePaintOrder} = Object.assign({
        }, _namedArguments );
        config = ( config ) || ( SemanticsNode._kEmptyConfig );
        if (this._isDifferentFromCurrentSemanticAnnotation(config)) this._markDirty();
        this._label = config.label;
        this._decreasedValue = config.decreasedValue;
        this._value = config.value;
        this._increasedValue = config.increasedValue;
        this._hint = config.hint;
        this._hintOverrides = config.hintOverrides;
        this._elevation = config.elevation;
        this._thickness = config.thickness;
        this._flags = config._flags;
        this._textDirection = config.textDirection;
        this._sortKey = config.sortKey;
        this._actions = op(Op.LT,core.DartMap<K,V>,SemanticsAction);
        op(Op.GT,_SemanticsActionHandler,.from(config._actions));
        this._customSemanticsActions = op(Op.LT,core.DartMap<K,V>,CustomSemanticsAction);
        op(Op.GT,VoidCallback,.from(config._customSemanticsActions));
        this._actionsAsBits = config._actionsAsBits;
        this._textSelection = config._textSelection;
        this._scrollPosition = config._scrollPosition;
        this._scrollExtentMax = config._scrollExtentMax;
        this._scrollExtentMin = config._scrollExtentMin;
        this._mergeAllDescendantsIntoThisNode = config.isMergingSemanticsOfDescendants;
        this._scrollChildCount = config.scrollChildCount;
        this._scrollIndex = config.scrollIndex;
        this.indexInParent = config.indexInParent;
        this._replaceChildren((childrenInInversePaintOrder || new core.DartList.literal<SemanticsNode>()));
        /* TODO (AssertStatementImpl) : assert (!_canPerformAction(SemanticsAction.increase) || (_value == '') == (_increasedValue == ''), 'A SemanticsNode with action "increase" needs to be annotated with either both "value" and "increasedValue" or neither'); */;
        ;
        /* TODO (AssertStatementImpl) : assert (!_canPerformAction(SemanticsAction.decrease) || (_value == '') == (_decreasedValue == ''), 'A SemanticsNode with action "increase" needs to be annotated with either both "value" and "decreasedValue" or neither'); */;
        ;
    }
    getSemanticsData() : SemanticsData {
        let flags : number = this._flags;
        let actions : number = this._actionsAsBits;
        let label : string = this._label;
        let hint : string = this._hint;
        let value : string = this._value;
        let increasedValue : string = this._increasedValue;
        let decreasedValue : string = this._decreasedValue;
        let textDirection : any = this._textDirection;
        let mergedTags : core.DartSet<SemanticsTag> = op(Op.EQUALS,this.tags,null) ? null : op(Op.LT,core.DartSet<E>,SemanticsTag);
        op(Op.GT,,.from(this.tags));
        let textSelection : lib4.TextSelection = this._textSelection;
        let scrollChildCount : number = this._scrollChildCount;
        let scrollIndex : number = this._scrollIndex;
        let scrollPosition : double = this._scrollPosition;
        let scrollExtentMax : double = this._scrollExtentMax;
        let scrollExtentMin : double = this._scrollExtentMin;
        let elevation : double = this._elevation;
        let thickness : double = this._thickness;
        let customSemanticsActionIds : core.DartSet<number> = core.DartSet();
        for(let action of this._customSemanticsActions.keys) customSemanticsActionIds.add(CustomSemanticsAction.getIdentifier(action));
        if (this.hintOverrides != null) {
            if (this.hintOverrides.onTapHint != null) {
                let action : CustomSemanticsAction = CustomSemanticsAction.overridingAction({
                    hint : this.hintOverrides.onTapHint,action : SemanticsAction.tap});
                customSemanticsActionIds.add(CustomSemanticsAction.getIdentifier(action));
            }
            if (this.hintOverrides.onLongPressHint != null) {
                let action : CustomSemanticsAction = CustomSemanticsAction.overridingAction({
                    hint : this.hintOverrides.onLongPressHint,action : SemanticsAction.longPress});
                customSemanticsActionIds.add(CustomSemanticsAction.getIdentifier(action));
            }
        }
        if (this.mergeAllDescendantsIntoThisNode) {
            this._visitDescendants((node : SemanticsNode) =>  {
                /* TODO (AssertStatementImpl) : assert (node.isMergedIntoParent); */;
                flags |= node._flags;
                actions |= node._actionsAsBits;
                textDirection = ( textDirection ) || ( node._textDirection );
                textSelection = ( textSelection ) || ( node._textSelection );
                scrollChildCount = ( scrollChildCount ) || ( node._scrollChildCount );
                scrollIndex = ( scrollIndex ) || ( node._scrollIndex );
                scrollPosition = ( scrollPosition ) || ( node._scrollPosition );
                scrollExtentMax = ( scrollExtentMax ) || ( node._scrollExtentMax );
                scrollExtentMin = ( scrollExtentMin ) || ( node._scrollExtentMin );
                if (value == '' || value == null) value = node._value;
                if (increasedValue == '' || increasedValue == null) increasedValue = node._increasedValue;
                if (decreasedValue == '' || decreasedValue == null) decreasedValue = node._decreasedValue;
                if (node.tags != null) {
                    mergedTags = ( mergedTags ) || ( core.DartSet() );
                    mergedTags.addAll(node.tags);
                }
                if (node._customSemanticsActions != null) {
                    for(let action of this._customSemanticsActions.keys) customSemanticsActionIds.add(CustomSemanticsAction.getIdentifier(action));
                }
                if (node.hintOverrides != null) {
                    if (node.hintOverrides.onTapHint != null) {
                        let action : CustomSemanticsAction = CustomSemanticsAction.overridingAction({
                            hint : node.hintOverrides.onTapHint,action : SemanticsAction.tap});
                        customSemanticsActionIds.add(CustomSemanticsAction.getIdentifier(action));
                    }
                    if (node.hintOverrides.onLongPressHint != null) {
                        let action : CustomSemanticsAction = CustomSemanticsAction.overridingAction({
                            hint : node.hintOverrides.onLongPressHint,action : SemanticsAction.longPress});
                        customSemanticsActionIds.add(CustomSemanticsAction.getIdentifier(action));
                    }
                }
                label = _concatStrings({
                    thisString : label,thisTextDirection : textDirection,otherString : node._label,otherTextDirection : node._textDirection});
                hint = _concatStrings({
                    thisString : hint,thisTextDirection : textDirection,otherString : node._hint,otherTextDirection : node._textDirection});
                thickness = math.max(thickness,node._thickness + node._elevation);
                return true;
            });
        }
        return SemanticsData({
            flags : flags,actions : actions,label : label,value : value,increasedValue : increasedValue,decreasedValue : decreasedValue,hint : hint,textDirection : textDirection,rect : this.rect,transform : this.transform,elevation : elevation,thickness : thickness,tags : mergedTags,textSelection : textSelection,scrollChildCount : scrollChildCount,scrollIndex : scrollIndex,scrollPosition : scrollPosition,scrollExtentMax : scrollExtentMax,scrollExtentMin : scrollExtentMin,customSemanticsActionIds : ((_) : core.DartList<number> =>  {
                {
                    _.sort();
                    return _;
                }
            })(customSemanticsActionIds.toList())});
    }
    static _initIdentityTransform() : typed_data.Float64List {
        return lib5.Matrix4.identity().storage;
    }
    private static __$_kEmptyChildList : typed_data.Int32List;
    static get _kEmptyChildList() : typed_data.Int32List { 
        if (this.__$_kEmptyChildList===undefined) {
            this.__$_kEmptyChildList = typed_data.Int32List(0);
        }
        return this.__$_kEmptyChildList;
    }
    static set _kEmptyChildList(__$value : typed_data.Int32List)  { 
        this.__$_kEmptyChildList = __$value;
    }

    private static __$_kEmptyCustomSemanticsActionsList : typed_data.Int32List;
    static get _kEmptyCustomSemanticsActionsList() : typed_data.Int32List { 
        if (this.__$_kEmptyCustomSemanticsActionsList===undefined) {
            this.__$_kEmptyCustomSemanticsActionsList = typed_data.Int32List(0);
        }
        return this.__$_kEmptyCustomSemanticsActionsList;
    }
    static set _kEmptyCustomSemanticsActionsList(__$value : typed_data.Int32List)  { 
        this.__$_kEmptyCustomSemanticsActionsList = __$value;
    }

    private static __$_kIdentityTransform : typed_data.Float64List;
    static get _kIdentityTransform() : typed_data.Float64List { 
        if (this.__$_kIdentityTransform===undefined) {
            this.__$_kIdentityTransform = SemanticsNode._initIdentityTransform();
        }
        return this.__$_kIdentityTransform;
    }
    static set _kIdentityTransform(__$value : typed_data.Float64List)  { 
        this.__$_kIdentityTransform = __$value;
    }

    _addToUpdate(builder : any,customSemanticsActionIdsUpdate : core.DartSet<number>) : any {
        /* TODO (AssertStatementImpl) : assert (_dirty); */;
        let data : SemanticsData = this.getSemanticsData();
        let childrenInTraversalOrder : typed_data.Int32List;
        let childrenInHitTestOrder : typed_data.Int32List;
        if (!this.hasChildren || this.mergeAllDescendantsIntoThisNode) {
            childrenInTraversalOrder = SemanticsNode._kEmptyChildList;
            childrenInHitTestOrder = SemanticsNode._kEmptyChildList;
        }else {
            let childCount : number = this._children.length;
            let sortedChildren : core.DartList<SemanticsNode> = this._childrenInTraversalOrder();
            childrenInTraversalOrder = typed_data.Int32List(childCount);
            for(let i : number = 0; i < childCount; i += 1){
                op(Op.INDEX_ASSIGN,childrenInTraversalOrder,i,sortedChildren[i].id);
            }
            childrenInHitTestOrder = typed_data.Int32List(childCount);
            for(let i : number = childCount - 1; i >= 0; i -= 1){
                op(Op.INDEX_ASSIGN,childrenInHitTestOrder,i,this._children[childCount - i - 1].id);
            }
        }
        let customSemanticsActionIds : typed_data.Int32List;
        if (((t)=>(!!t)?t.isNotEmpty:null)(data.customSemanticsActionIds) == true) {
            customSemanticsActionIds = typed_data.Int32List(data.customSemanticsActionIds.length);
            for(let i : number = 0; i < data.customSemanticsActionIds.length; i++){
                op(Op.INDEX_ASSIGN,customSemanticsActionIds,i,data.customSemanticsActionIds[i]);
                customSemanticsActionIdsUpdate.add(data.customSemanticsActionIds[i]);
            }
        }
        builder.updateNode({
            id : this.id,flags : data.flags,actions : data.actions,rect : data.rect,label : data.label,value : data.value,decreasedValue : data.decreasedValue,increasedValue : data.increasedValue,hint : data.hint,textDirection : data.textDirection,textSelectionBase : data.textSelection != null ? data.textSelection.baseOffset : -1,textSelectionExtent : data.textSelection != null ? data.textSelection.extentOffset : -1,scrollChildren : data.scrollChildCount != null ? data.scrollChildCount : 0,scrollIndex : data.scrollIndex != null ? data.scrollIndex : 0,scrollPosition : data.scrollPosition != null ? data.scrollPosition : new core.DartDouble(double).nan,scrollExtentMax : data.scrollExtentMax != null ? data.scrollExtentMax : new core.DartDouble(double).nan,scrollExtentMin : data.scrollExtentMin != null ? data.scrollExtentMin : new core.DartDouble(double).nan,transform : (((t)=>(!!t)?t.storage:null)(data.transform) || SemanticsNode._kIdentityTransform),elevation : data.elevation,thickness : data.thickness,childrenInTraversalOrder : childrenInTraversalOrder,childrenInHitTestOrder : childrenInHitTestOrder,additionalActions : (customSemanticsActionIds || SemanticsNode._kEmptyCustomSemanticsActionsList)});
        this._dirty = false;
    }
    _childrenInTraversalOrder() : core.DartList<SemanticsNode> {
        let inheritedTextDirection : any = this.textDirection;
        let ancestor : SemanticsNode = this.parent;
        while (op(Op.EQUALS,inheritedTextDirection,null) && ancestor != null){
            inheritedTextDirection = ancestor.textDirection;
            ancestor = ancestor.parent;
        }
        let childrenInDefaultOrder : core.DartList<SemanticsNode>;
        if (inheritedTextDirection != null) {
            childrenInDefaultOrder = _childrenInDefaultOrder(this._children,inheritedTextDirection);
        }else {
            childrenInDefaultOrder = this._children;
        }
        let everythingSorted : core.DartList<_TraversalSortNode> = new core.DartList.literal<_TraversalSortNode>();
        let sortNodes : core.DartList<_TraversalSortNode> = new core.DartList.literal<_TraversalSortNode>();
        let lastSortKey : SemanticsSortKey;
        for(let position : number = 0; position < childrenInDefaultOrder.length; position += 1){
            let child : SemanticsNode = childrenInDefaultOrder[position];
            let sortKey : SemanticsSortKey = child.sortKey;
            lastSortKey = position > 0 ? childrenInDefaultOrder[position - 1].sortKey : null;
            let isCompatibleWithPreviousSortKey : boolean = position == 0 || op(Op.EQUALS,sortKey.runtimeType,lastSortKey.runtimeType) && (op(Op.EQUALS,sortKey,null) || sortKey.name == lastSortKey.name);
            if (!isCompatibleWithPreviousSortKey && sortNodes.isNotEmpty) {
                if (lastSortKey != null) {
                    sortNodes.sort();
                }
                everythingSorted.addAll(sortNodes);
                sortNodes.clear();
            }
            sortNodes.add(_TraversalSortNode({
                node : child,sortKey : sortKey,position : position}));
        }
        if (lastSortKey != null) {
            sortNodes.sort();
        }
        everythingSorted.addAll(sortNodes);
        return everythingSorted.map((sortNode : _TraversalSortNode) =>  {
            return sortNode.node;
        }).toList();
    }
    sendEvent(event : lib13.SemanticsEvent) : any {
        if (!this.attached) return;
        lib14.SystemChannels.accessibility.send(event.toMap({
            nodeId : this.id}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toStringShort() : string {
        return `${this.runtimeType}#${this.id}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib3.DiagnosticPropertiesBuilder) : any {
        let hideOwner : boolean = true;
        if (this._dirty) {
            let inDirtyNodes : boolean = this.owner != null && this.owner._dirtyNodes.contains(this);
            properties.add(lib3.FlagProperty('inDirtyNodes',{
                value : inDirtyNodes,ifTrue : 'dirty',ifFalse : 'STALE'}));
            hideOwner = inDirtyNodes;
        }
        properties.add(lib3.DiagnosticsProperty('owner',this.owner,{
            level : hideOwner ? lib3.DiagnosticLevel.hidden : lib3.DiagnosticLevel.info}));
        properties.add(lib3.FlagProperty('isMergedIntoParent',{
            value : this.isMergedIntoParent,ifTrue : 'merged up ⬆️'}));
        properties.add(lib3.FlagProperty('mergeAllDescendantsIntoThisNode',{
            value : this.mergeAllDescendantsIntoThisNode,ifTrue : 'merge boundary ⛔️'}));
        let offset : any = this.transform != null ? lib6.MatrixUtils.getAsTranslation(this.transform) : null;
        if (offset != null) {
            properties.add(lib3.DiagnosticsProperty('rect',this.rect.shift(offset),{
                showName : false}));
        }else {
            let scale : double = this.transform != null ? lib6.MatrixUtils.getAsScale(this.transform) : null;
            let description : string;
            if (scale != null) {
                description = `${this.rect} scaled by ${new core.DartDouble(scale).toStringAsFixed(1)}x`;
            }else if (this.transform != null && !lib6.MatrixUtils.isIdentity(this.transform)) {
                let matrix : string = new core.DartString(this.transform.toString()).split('\n').take(4).map((line : string) =>  {
                    return new core.DartString(line).substring(4);
                }).join('; ');
                description = `${this.rect} with transform [${matrix}]`;
            }
            properties.add(lib3.DiagnosticsProperty('rect',this.rect,{
                description : description,showName : false}));
        }
        let actions : core.DartList<string> = ((_) : core.DartList<string> =>  {
            {
                _.sort();
                return _;
            }
        })(this._actions.keys.map((action : any) =>  {
            return lib3.describeEnum(action);
        }).toList());
        let customSemanticsActions : core.DartList<string> = this._customSemanticsActions.keys.map((action : CustomSemanticsAction) =>  {
            return action.label;
        }).toList();
        properties.add(lib3.IterableProperty('actions',actions,{
            ifEmpty : null}));
        properties.add(lib3.IterableProperty('customActions',customSemanticsActions,{
            ifEmpty : null}));
        let flags : core.DartList<string> = SemanticsFlag.values.values.where((flag : any) =>  {
            return this.hasFlag(flag);
        }).map((flag : any) =>  {
            return new core.DartString(flag.toString()).substring(new core.DartString('SemanticsFlag.').length);
        }).toList();
        properties.add(lib3.IterableProperty('flags',flags,{
            ifEmpty : null}));
        properties.add(lib3.FlagProperty('isInvisible',{
            value : this.isInvisible,ifTrue : 'invisible'}));
        properties.add(lib3.FlagProperty('isHidden',{
            value : this.hasFlag(SemanticsFlag.isHidden),ifTrue : 'HIDDEN'}));
        properties.add(lib3.StringProperty('label',this._label,{
            defaultValue : ''}));
        properties.add(lib3.StringProperty('value',this._value,{
            defaultValue : ''}));
        properties.add(lib3.StringProperty('increasedValue',this._increasedValue,{
            defaultValue : ''}));
        properties.add(lib3.StringProperty('decreasedValue',this._decreasedValue,{
            defaultValue : ''}));
        properties.add(lib3.StringProperty('hint',this._hint,{
            defaultValue : ''}));
        properties.add(lib3.EnumProperty('textDirection',this._textDirection,{
            defaultValue : null}));
        properties.add(lib3.DiagnosticsProperty('sortKey',this.sortKey,{
            defaultValue : null}));
        if (((t)=>(!!t)?t.isValid:null)(this._textSelection) == true) properties.add(lib3.MessageProperty('text selection',`[${this._textSelection.start}, ${this._textSelection.end}]`));
        properties.add(lib3.IntProperty('scrollChildren',this.scrollChildCount,{
            defaultValue : null}));
        properties.add(lib3.IntProperty('scrollIndex',this.scrollIndex,{
            defaultValue : null}));
        properties.add(lib3.DoubleProperty('scrollExtentMin',this.scrollExtentMin,{
            defaultValue : null}));
        properties.add(lib3.DoubleProperty('scrollPosition',this.scrollPosition,{
            defaultValue : null}));
        properties.add(lib3.DoubleProperty('scrollExtentMax',this.scrollExtentMax,{
            defaultValue : null}));
        properties.add(lib3.DoubleProperty('elevation',this.elevation,{
            defaultValue : 0.0}));
        properties.add(lib3.DoubleProperty('thicknes',this.thickness,{
            defaultValue : 0.0}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toStringDeep(_namedArguments? : {prefixLineOne? : string,prefixOtherLines? : string,minLevel? : lib3.DiagnosticLevel,childOrder? : DebugSemanticsDumpOrder}) : string {
        let {prefixLineOne,prefixOtherLines,minLevel,childOrder} = Object.assign({
            "prefixLineOne" : '',
            "minLevel" : lib3.DiagnosticLevel.debug,
            "childOrder" : DebugSemanticsDumpOrder.traversalOrder}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (childOrder != null); */;
        return this.toDiagnosticsNode({
            childOrder : childOrder}).toStringDeep({
            prefixLineOne : prefixLineOne,prefixOtherLines : prefixOtherLines,minLevel : minLevel});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toDiagnosticsNode(_namedArguments? : {name? : string,style? : lib3.DiagnosticsTreeStyle,childOrder? : DebugSemanticsDumpOrder}) : lib3.DiagnosticsNode {
        let {name,style,childOrder} = Object.assign({
            "style" : lib3.DiagnosticsTreeStyle.sparse,
            "childOrder" : DebugSemanticsDumpOrder.traversalOrder}, _namedArguments );
        return _SemanticsDiagnosticableNode({
            name : name,value : this,style : style,childOrder : childOrder});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugDescribeChildren(_namedArguments? : {childOrder? : DebugSemanticsDumpOrder}) : core.DartList<lib3.DiagnosticsNode> {
        let {childOrder} = Object.assign({
            "childOrder" : DebugSemanticsDumpOrder.inverseHitTest}, _namedArguments );
        return this.debugListChildrenInOrder(childOrder).map((node : SemanticsNode) =>  {
            return node.toDiagnosticsNode({
                childOrder : childOrder});
        }).toList();
    }
    debugListChildrenInOrder(childOrder : DebugSemanticsDumpOrder) : core.DartList<SemanticsNode> {
        /* TODO (AssertStatementImpl) : assert (childOrder != null); */;
        if (this._children == null) return new core.DartList.literal<SemanticsNode>();
        switch (childOrder) {
            case DebugSemanticsDumpOrder.inverseHitTest:
                return this._children;
            case DebugSemanticsDumpOrder.traversalOrder:
                return this._childrenInTraversalOrder();
        }
        /* TODO (AssertStatementImpl) : assert (false); */;
        return null;
    }
}

export namespace _BoxEdge {
    export type Constructors = '_BoxEdge';
    export type Interface = Omit<_BoxEdge, Constructors>;
}
@DartClass
@Implements(core.DartComparable)
export class _BoxEdge implements core.DartComparable.Interface<_BoxEdge> {
    constructor(_namedArguments? : {isLeadingEdge? : boolean,offset? : double,node? : SemanticsNode}) {
    }
    @defaultConstructor
    _BoxEdge(_namedArguments? : {isLeadingEdge? : boolean,offset? : double,node? : SemanticsNode}) {
        let {isLeadingEdge,offset,node} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.isLeadingEdge = isLeadingEdge;
        this.offset = offset;
        this.node = node;
    }
     : any;

     : any;

     : any;

    isLeadingEdge : boolean;

    offset : double;

    node : SemanticsNode;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compareTo(other : _BoxEdge) : number {
        return new core.DartDouble(new core.DartDouble((this.offset - other.offset)).sign).toInt();
    }
}

export namespace _SemanticsSortGroup {
    export type Constructors = core.DartComparable.Constructors | '_SemanticsSortGroup';
    export type Interface = Omit<_SemanticsSortGroup, Constructors>;
}
@DartClass
export class _SemanticsSortGroup extends core.DartComparable<_SemanticsSortGroup> {
    constructor(_namedArguments? : {startOffset? : double,textDirection? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SemanticsSortGroup(_namedArguments? : {startOffset? : double,textDirection? : any}) {
        let {startOffset,textDirection} = Object.assign({
        }, _namedArguments );
        this.nodes = new core.DartList.literal<SemanticsNode>();
        this.assert = assert;
        this.startOffset = startOffset;
        this.textDirection = textDirection;
    }
     : any;

    startOffset : double;

    textDirection : any;

    nodes : core.DartList<SemanticsNode>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compareTo(other : _SemanticsSortGroup) : number {
        return new core.DartDouble(new core.DartDouble((this.startOffset - other.startOffset)).sign).toInt();
    }
    sortedWithinVerticalGroup() : core.DartList<SemanticsNode> {
        let edges : core.DartList<_BoxEdge> = new core.DartList.literal<_BoxEdge>();
        for(let child of this.nodes) {
            let childRect : any = child.rect.deflate(0.1);
            edges.add(_BoxEdge({
                isLeadingEdge : true,offset : _pointInParentCoordinates(child,childRect.topLeft).dx,node : child}));
            edges.add(_BoxEdge({
                isLeadingEdge : false,offset : _pointInParentCoordinates(child,childRect.bottomRight).dx,node : child}));
        }
        edges.sort();
        let horizontalGroups : core.DartList<_SemanticsSortGroup> = new core.DartList.literal<_SemanticsSortGroup>();
        let group : _SemanticsSortGroup;
        let depth : number = 0;
        for(let edge of edges) {
            if (edge.isLeadingEdge) {
                depth += 1;
                group = ( group ) || ( _SemanticsSortGroup({
                    startOffset : edge.offset,textDirection : this.textDirection}) );
                group.nodes.add(edge.node);
            }else {
                depth -= 1;
            }
            if (depth == 0) {
                horizontalGroups.add(group);
                group = null;
            }
        }
        horizontalGroups.sort();
        if (op(Op.EQUALS,this.textDirection,TextDirection.rtl)) {
            horizontalGroups = horizontalGroups.reversed.toList();
        }
        let result : core.DartList<SemanticsNode> = new core.DartList.literal<SemanticsNode>();
        for(let group of horizontalGroups) {
            let sortedKnotNodes : core.DartList<SemanticsNode> = group.sortedWithinKnot();
            result.addAll(sortedKnotNodes);
        }
        return result;
    }
    sortedWithinKnot() : core.DartList<SemanticsNode> {
        if (this.nodes.length <= 1) {
            return this.nodes;
        }
        let nodeMap : core.DartMap<number,SemanticsNode> = new core.DartMap.literal([
        ]);
        let edges : core.DartMap<number,number> = new core.DartMap.literal([
        ]);
        for(let node of this.nodes) {
            nodeMap.set(node.id,node);
            let center : any = _pointInParentCoordinates(node,node.rect.center);
            for(let nextNode of this.nodes) {
                if (core.identical(node,nextNode) || edges.get(nextNode.id) == node.id) {
                    continue;
                }
                let nextCenter : any = _pointInParentCoordinates(nextNode,nextNode.rect.center);
                let centerDelta : any = op(Op.MINUS,nextCenter,center);
                let direction : double = centerDelta.direction;
                let isLtrAndForward : boolean = op(Op.EQUALS,this.textDirection,TextDirection.ltr) && op(Op.LT,op(Op.DIVIDE,op(Op.NEG,math.pi),4),direction) && direction < 3 * math.pi / 4;
                let isRtlAndForward : boolean = op(Op.EQUALS,this.textDirection,TextDirection.rtl) && (direction < -3 * math.pi / 4 || direction > 3 * math.pi / 4);
                if (isLtrAndForward || isRtlAndForward) {
                    edges.set(node.id,nextNode.id);
                }
            }
        }
        let sortedIds : core.DartList<number> = new core.DartList.literal<number>();
        let visitedIds : core.DartSet<number> = core.DartSet();
        let startNodes : core.DartList<SemanticsNode> = ((_) : core.DartList<SemanticsNode> =>  {
            {
                _.sort((a : SemanticsNode,b : SemanticsNode) =>  {
                    let aTopLeft : any = _pointInParentCoordinates(a,a.rect.topLeft);
                    let bTopLeft : any = _pointInParentCoordinates(b,b.rect.topLeft);
                    let verticalDiff : number = aTopLeft.dy.compareTo(bTopLeft.dy);
                    if (verticalDiff != 0) {
                        return -verticalDiff;
                    }
                    return op(Op.NEG,aTopLeft.dx.compareTo(bTopLeft.dx));
                });
                return _;
            }
        })(this.nodes.toList());
        var search : (id : number) => any = (id : number) : any =>  {
            if (visitedIds.contains(id)) {
                return;
            }
            visitedIds.add(id);
            if (edges.containsKey(id)) {
                search(edges.get(id));
            }
            sortedIds.add(id);
        };
        startNodes.map((node : SemanticsNode) =>  {
            return node.id;
        }).forEach(search);
        return sortedIds.map((id : number) =>  {
            return nodeMap.get(id);
        }).toList().reversed.toList();
    }
}

export namespace _TraversalSortNode {
    export type Constructors = '_TraversalSortNode';
    export type Interface = Omit<_TraversalSortNode, Constructors>;
}
@DartClass
@Implements(core.DartComparable)
export class _TraversalSortNode implements core.DartComparable.Interface<_TraversalSortNode> {
    constructor(_namedArguments? : {node? : SemanticsNode,sortKey? : SemanticsSortKey,position? : number}) {
    }
    @defaultConstructor
    _TraversalSortNode(_namedArguments? : {node? : SemanticsNode,sortKey? : SemanticsSortKey,position? : number}) {
        let {node,sortKey,position} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.node = node;
        this.sortKey = sortKey;
        this.position = position;
    }
     : any;

     : any;

    node : SemanticsNode;

    sortKey : SemanticsSortKey;

    position : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compareTo(other : _TraversalSortNode) : number {
        if (op(Op.EQUALS,this.sortKey,null) || op(Op.EQUALS,((t)=>(!!t)?t.sortKey:null)(other),null)) {
            return this.position - other.position;
        }
        return this.sortKey.compareTo(other.sortKey);
    }
}

export namespace SemanticsOwner {
    export type Constructors = lib15.ChangeNotifier.Constructors | 'SemanticsOwner';
    export type Interface = Omit<SemanticsOwner, Constructors>;
}
@DartClass
export class SemanticsOwner extends lib15.ChangeNotifier {
    _dirtyNodes : core.DartSet<SemanticsNode>;

    _nodes : core.DartMap<number,SemanticsNode>;

    _detachedNodes : core.DartSet<SemanticsNode>;

    _actions : core.DartMap<number,CustomSemanticsAction>;

    get rootSemanticsNode() : SemanticsNode {
        return this._nodes.get(0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._dirtyNodes.clear();
        this._nodes.clear();
        this._detachedNodes.clear();
        super.dispose();
    }
    sendSemanticsUpdate() : any {
        if (this._dirtyNodes.isEmpty) return;
        let customSemanticsActionIds : core.DartSet<number> = core.DartSet();
        let visitedNodes : core.DartList<SemanticsNode> = new core.DartList.literal<SemanticsNode>();
        while (this._dirtyNodes.isNotEmpty){
            let localDirtyNodes : core.DartList<SemanticsNode> = this._dirtyNodes.where((node : SemanticsNode) =>  {
                return !this._detachedNodes.contains(node);
            }).toList();
            this._dirtyNodes.clear();
            this._detachedNodes.clear();
            localDirtyNodes.sort((a : SemanticsNode,b : SemanticsNode) =>  {
                return a.depth - b.depth;
            });
            visitedNodes.addAll(localDirtyNodes);
            for(let node of localDirtyNodes) {
                /* TODO (AssertStatementImpl) : assert (node._dirty); */;
                /* TODO (AssertStatementImpl) : assert (node.parent == null || !node.parent.isPartOfNodeMerging || node.isMergedIntoParent); */;
                if (node.isPartOfNodeMerging) {
                    /* TODO (AssertStatementImpl) : assert (node.mergeAllDescendantsIntoThisNode || node.parent != null); */;
                    if (node.parent != null && node.parent.isPartOfNodeMerging) node.parent._markDirty();
                }
            }
        }
        visitedNodes.sort((a : SemanticsNode,b : SemanticsNode) =>  {
            return a.depth - b.depth;
        });
        let builder : any = ui.SemanticsUpdateBuilder();
        for(let node of visitedNodes) {
            /* TODO (AssertStatementImpl) : assert (node.parent?._dirty != true); */;
            if (node._dirty && node.attached) node._addToUpdate(builder,customSemanticsActionIds);
        }
        this._dirtyNodes.clear();
        for(let actionId of customSemanticsActionIds) {
            let action : CustomSemanticsAction = CustomSemanticsAction.getAction(actionId);
            builder.updateCustomAction({
                id : actionId,label : action.label,hint : action.hint,overrideId : (((t)=>(!!t)?t.index:null)(action.action) || -1)});
        }
        lib16.properties.SemanticsBinding.instance.window.updateSemantics(builder.build());
        this.notifyListeners();
    }
    _getSemanticsActionHandlerForId(id : number,action : any) : (args : any) => any {
        let result : SemanticsNode = this._nodes.get(id);
        if (result != null && result.isPartOfNodeMerging && !result._canPerformAction(action)) {
            result._visitDescendants((node : SemanticsNode) =>  {
                if (node._canPerformAction(action)) {
                    result = node;
                    return false;
                }
                return true;
            });
        }
        if (op(Op.EQUALS,result,null) || !result._canPerformAction(action)) return null;
        return result._actions.get(action);
    }
    performAction(id : number,action : any,args? : any) : any {
        /* TODO (AssertStatementImpl) : assert (action != null); */;
        let handler : (args : any) => any = this._getSemanticsActionHandlerForId(id,action);
        if (handler != null) {
            handler(args);
            return;
        }
        if (op(Op.EQUALS,action,SemanticsAction.showOnScreen) && this._nodes.get(id)._showOnScreen != null) this._nodes.get(id)._showOnScreen();
    }
    _getSemanticsActionHandlerForPosition(node : SemanticsNode,position : any,action : any) : (args : any) => any {
        if (node.transform != null) {
            let inverse : lib5.Matrix4 = lib5.Matrix4.identity();
            if (inverse.copyInverse(node.transform) == 0.0) return null;
            position = lib6.MatrixUtils.transformPoint(inverse,position);
        }
        if (!node.rect.contains(position)) return null;
        if (node.mergeAllDescendantsIntoThisNode) {
            let result : SemanticsNode;
            node._visitDescendants((child : SemanticsNode) =>  {
                if (child._canPerformAction(action)) {
                    result = child;
                    return false;
                }
                return true;
            });
            return ((t)=>(!!t)?t._actions:null)(result).get(action);
        }
        if (node.hasChildren) {
            for(let child of node._children.reversed) {
                let handler : (args : any) => any = this._getSemanticsActionHandlerForPosition(child,position,action);
                if (handler != null) return handler;
            }
        }
        return node._actions.get(action);
    }
    performActionAt(position : any,action : any,args? : any) : any {
        /* TODO (AssertStatementImpl) : assert (action != null); */;
        let node : SemanticsNode = this.rootSemanticsNode;
        if (op(Op.EQUALS,node,null)) return;
        let handler : (args : any) => any = this._getSemanticsActionHandlerForPosition(node,position,action);
        if (handler != null) handler(args);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return lib3.describeIdentity(this);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SemanticsOwner() {
        this._dirtyNodes = core.DartSet();
        this._nodes = new core.DartMap.literal([
        ]);
        this._detachedNodes = core.DartSet();
        this._actions = new core.DartMap.literal([
        ]);
    }
}

export namespace SemanticsConfiguration {
    export type Constructors = 'SemanticsConfiguration';
    export type Interface = Omit<SemanticsConfiguration, Constructors>;
}
@DartClass
export class SemanticsConfiguration {
    get isSemanticBoundary() : boolean {
        return this._isSemanticBoundary;
    }
    _isSemanticBoundary : boolean;

    set isSemanticBoundary(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (!isMergingSemanticsOfDescendants || value); */;
        this._isSemanticBoundary = value;
    }
    explicitChildNodes : boolean;

    isBlockingSemanticsOfPreviouslyPaintedNodes : boolean;

    get hasBeenAnnotated() : boolean {
        return this._hasBeenAnnotated;
    }
    _hasBeenAnnotated : boolean;

    _actions : core.DartMap<any,(args : any) => any>;

    _actionsAsBits : number;

    _addAction(action : any,handler : (args : any) => any) : any {
        /* TODO (AssertStatementImpl) : assert (handler != null); */;
        this._actions.set(action,handler);
        this._actionsAsBits |= action.index;
        this._hasBeenAnnotated = true;
    }
    _addArgumentlessAction(action : any,handler : any) : any {
        /* TODO (AssertStatementImpl) : assert (handler != null); */;
        this._addAction(action,(args : any) =>  {
            /* TODO (AssertStatementImpl) : assert (args == null); */;
            handler();
        });
    }
    get onTap() : any {
        return this._onTap;
    }
    _onTap : any;

    set onTap(value : any) {
        this._addArgumentlessAction(SemanticsAction.tap,value);
        this._onTap = value;
    }
    get onLongPress() : any {
        return this._onLongPress;
    }
    _onLongPress : any;

    set onLongPress(value : any) {
        this._addArgumentlessAction(SemanticsAction.longPress,value);
        this._onLongPress = value;
    }
    get onScrollLeft() : any {
        return this._onScrollLeft;
    }
    _onScrollLeft : any;

    set onScrollLeft(value : any) {
        this._addArgumentlessAction(SemanticsAction.scrollLeft,value);
        this._onScrollLeft = value;
    }
    get onDismiss() : any {
        return this._onDismiss;
    }
    _onDismiss : any;

    set onDismiss(value : any) {
        this._addArgumentlessAction(SemanticsAction.dismiss,value);
        this._onDismiss = value;
    }
    get onScrollRight() : any {
        return this._onScrollRight;
    }
    _onScrollRight : any;

    set onScrollRight(value : any) {
        this._addArgumentlessAction(SemanticsAction.scrollRight,value);
        this._onScrollRight = value;
    }
    get onScrollUp() : any {
        return this._onScrollUp;
    }
    _onScrollUp : any;

    set onScrollUp(value : any) {
        this._addArgumentlessAction(SemanticsAction.scrollUp,value);
        this._onScrollUp = value;
    }
    get onScrollDown() : any {
        return this._onScrollDown;
    }
    _onScrollDown : any;

    set onScrollDown(value : any) {
        this._addArgumentlessAction(SemanticsAction.scrollDown,value);
        this._onScrollDown = value;
    }
    get onIncrease() : any {
        return this._onIncrease;
    }
    _onIncrease : any;

    set onIncrease(value : any) {
        this._addArgumentlessAction(SemanticsAction.increase,value);
        this._onIncrease = value;
    }
    get onDecrease() : any {
        return this._onDecrease;
    }
    _onDecrease : any;

    set onDecrease(value : any) {
        this._addArgumentlessAction(SemanticsAction.decrease,value);
        this._onDecrease = value;
    }
    get onCopy() : any {
        return this._onCopy;
    }
    _onCopy : any;

    set onCopy(value : any) {
        this._addArgumentlessAction(SemanticsAction.copy,value);
        this._onCopy = value;
    }
    get onCut() : any {
        return this._onCut;
    }
    _onCut : any;

    set onCut(value : any) {
        this._addArgumentlessAction(SemanticsAction.cut,value);
        this._onCut = value;
    }
    get onPaste() : any {
        return this._onPaste;
    }
    _onPaste : any;

    set onPaste(value : any) {
        this._addArgumentlessAction(SemanticsAction.paste,value);
        this._onPaste = value;
    }
    get onShowOnScreen() : any {
        return this._onShowOnScreen;
    }
    _onShowOnScreen : any;

    set onShowOnScreen(value : any) {
        this._addArgumentlessAction(SemanticsAction.showOnScreen,value);
        this._onShowOnScreen = value;
    }
    get onMoveCursorForwardByCharacter() : (extendSelection : boolean) => any {
        return this._onMoveCursorForwardByCharacter;
    }
    _onMoveCursorForwardByCharacter : (extendSelection : boolean) => any;

    set onMoveCursorForwardByCharacter(value : (extendSelection : boolean) => any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._addAction(SemanticsAction.moveCursorForwardByCharacter,(args : any) =>  {
            let extentSelection : boolean = args;
            /* TODO (AssertStatementImpl) : assert (extentSelection != null); */;
            value(extentSelection);
        });
        this._onMoveCursorForwardByCharacter = value;
    }
    get onMoveCursorBackwardByCharacter() : (extendSelection : boolean) => any {
        return this._onMoveCursorBackwardByCharacter;
    }
    _onMoveCursorBackwardByCharacter : (extendSelection : boolean) => any;

    set onMoveCursorBackwardByCharacter(value : (extendSelection : boolean) => any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._addAction(SemanticsAction.moveCursorBackwardByCharacter,(args : any) =>  {
            let extentSelection : boolean = args;
            /* TODO (AssertStatementImpl) : assert (extentSelection != null); */;
            value(extentSelection);
        });
        this._onMoveCursorBackwardByCharacter = value;
    }
    get onMoveCursorForwardByWord() : (extendSelection : boolean) => any {
        return this._onMoveCursorForwardByWord;
    }
    _onMoveCursorForwardByWord : (extendSelection : boolean) => any;

    set onMoveCursorForwardByWord(value : (extendSelection : boolean) => any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._addAction(SemanticsAction.moveCursorForwardByWord,(args : any) =>  {
            let extentSelection : boolean = args;
            /* TODO (AssertStatementImpl) : assert (extentSelection != null); */;
            value(extentSelection);
        });
        this._onMoveCursorForwardByCharacter = value;
    }
    get onMoveCursorBackwardByWord() : (extendSelection : boolean) => any {
        return this._onMoveCursorBackwardByWord;
    }
    _onMoveCursorBackwardByWord : (extendSelection : boolean) => any;

    set onMoveCursorBackwardByWord(value : (extendSelection : boolean) => any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._addAction(SemanticsAction.moveCursorBackwardByWord,(args : any) =>  {
            let extentSelection : boolean = args;
            /* TODO (AssertStatementImpl) : assert (extentSelection != null); */;
            value(extentSelection);
        });
        this._onMoveCursorBackwardByCharacter = value;
    }
    get onSetSelection() : (selection : lib4.TextSelection) => any {
        return this._onSetSelection;
    }
    _onSetSelection : (selection : lib4.TextSelection) => any;

    set onSetSelection(value : (selection : lib4.TextSelection) => any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._addAction(SemanticsAction.setSelection,(args : any) =>  {
            let selection : core.DartMap<string,number> = args;
            /* TODO (AssertStatementImpl) : assert (selection != null && selection['base'] != null && selection['extent'] != null); */;
            value(lib4.TextSelection({
                baseOffset : selection.get('base'),extentOffset : selection.get('extent')}));
        });
        this._onSetSelection = value;
    }
    get onDidGainAccessibilityFocus() : any {
        return this._onDidGainAccessibilityFocus;
    }
    _onDidGainAccessibilityFocus : any;

    set onDidGainAccessibilityFocus(value : any) {
        this._addArgumentlessAction(SemanticsAction.didGainAccessibilityFocus,value);
        this._onDidGainAccessibilityFocus = value;
    }
    get onDidLoseAccessibilityFocus() : any {
        return this._onDidLoseAccessibilityFocus;
    }
    _onDidLoseAccessibilityFocus : any;

    set onDidLoseAccessibilityFocus(value : any) {
        this._addArgumentlessAction(SemanticsAction.didLoseAccessibilityFocus,value);
        this._onDidLoseAccessibilityFocus = value;
    }
    getActionHandler(action : any) : (args : any) => any {
        return this._actions.get(action);
    }
    get sortKey() : SemanticsSortKey {
        return this._sortKey;
    }
    _sortKey : SemanticsSortKey;

    set sortKey(value : SemanticsSortKey) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._sortKey = value;
        this._hasBeenAnnotated = true;
    }
    get indexInParent() : number {
        return this._indexInParent;
    }
    _indexInParent : number;

    set indexInParent(value : number) {
        this._indexInParent = value;
        this._hasBeenAnnotated = true;
    }
    get scrollChildCount() : number {
        return this._scrollChildCount;
    }
    _scrollChildCount : number;

    set scrollChildCount(value : number) {
        if (value == this.scrollChildCount) return;
        this._scrollChildCount = value;
        this._hasBeenAnnotated = true;
    }
    get scrollIndex() : number {
        return this._scrollIndex;
    }
    _scrollIndex : number;

    set scrollIndex(value : number) {
        if (value == this.scrollIndex) return;
        this._scrollIndex = value;
        this._hasBeenAnnotated = true;
    }
    get isMergingSemanticsOfDescendants() : boolean {
        return this._isMergingSemanticsOfDescendants;
    }
    _isMergingSemanticsOfDescendants : boolean;

    set isMergingSemanticsOfDescendants(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (isSemanticBoundary); */;
        this._isMergingSemanticsOfDescendants = value;
        this._hasBeenAnnotated = true;
    }
    get customSemanticsActions() : core.DartMap<CustomSemanticsAction,any> {
        return this._customSemanticsActions;
    }
    _customSemanticsActions : core.DartMap<CustomSemanticsAction,any>;

    set customSemanticsActions(value : core.DartMap<CustomSemanticsAction,any>) {
        this._hasBeenAnnotated = true;
        this._actionsAsBits |= SemanticsAction.customAction.index;
        this._customSemanticsActions = value;
        this._actions.set(SemanticsAction.customAction,this._onCustomSemanticsAction.bind(this));
    }
    _onCustomSemanticsAction(args : any) : any {
        let action : CustomSemanticsAction = CustomSemanticsAction.getAction(args);
        if (op(Op.EQUALS,action,null)) return;
        let callback : any = this._customSemanticsActions.get(action);
        if (callback != null) callback();
    }
    get label() : string {
        return this._label;
    }
    _label : string;

    set label(label : string) {
        /* TODO (AssertStatementImpl) : assert (label != null); */;
        this._label = label;
        this._hasBeenAnnotated = true;
    }
    get value() : string {
        return this._value;
    }
    _value : string;

    set value(value : string) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._value = value;
        this._hasBeenAnnotated = true;
    }
    get decreasedValue() : string {
        return this._decreasedValue;
    }
    _decreasedValue : string;

    set decreasedValue(decreasedValue : string) {
        /* TODO (AssertStatementImpl) : assert (decreasedValue != null); */;
        this._decreasedValue = decreasedValue;
        this._hasBeenAnnotated = true;
    }
    get increasedValue() : string {
        return this._increasedValue;
    }
    _increasedValue : string;

    set increasedValue(increasedValue : string) {
        /* TODO (AssertStatementImpl) : assert (increasedValue != null); */;
        this._increasedValue = increasedValue;
        this._hasBeenAnnotated = true;
    }
    get hint() : string {
        return this._hint;
    }
    _hint : string;

    set hint(hint : string) {
        /* TODO (AssertStatementImpl) : assert (hint != null); */;
        this._hint = hint;
        this._hasBeenAnnotated = true;
    }
    get hintOverrides() : SemanticsHintOverrides {
        return this._hintOverrides;
    }
    _hintOverrides : SemanticsHintOverrides;

    set hintOverrides(value : SemanticsHintOverrides) {
        if (op(Op.EQUALS,value,null)) return;
        this._hintOverrides = value;
        this._hasBeenAnnotated = true;
    }
    get elevation() : double {
        return this._elevation;
    }
    _elevation : double;

    set elevation(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null && value >= 0.0); */;
        if (value == this._elevation) {
            return;
        }
        this._elevation = value;
        this._hasBeenAnnotated = true;
    }
    get thickness() : double {
        return this._thickness;
    }
    _thickness : double;

    set thickness(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null && value >= 0.0); */;
        if (value == this._thickness) {
            return;
        }
        this._thickness = value;
        this._hasBeenAnnotated = true;
    }
    get scopesRoute() : boolean {
        return this._hasFlag(SemanticsFlag.scopesRoute);
    }
    set scopesRoute(value : boolean) {
        this._setFlag(SemanticsFlag.scopesRoute,value);
    }
    get namesRoute() : boolean {
        return this._hasFlag(SemanticsFlag.namesRoute);
    }
    set namesRoute(value : boolean) {
        this._setFlag(SemanticsFlag.namesRoute,value);
    }
    get isImage() : boolean {
        return this._hasFlag(SemanticsFlag.isImage);
    }
    set isImage(value : boolean) {
        this._setFlag(SemanticsFlag.isImage,value);
    }
    get liveRegion() : boolean {
        return this._hasFlag(SemanticsFlag.isLiveRegion);
    }
    set liveRegion(value : boolean) {
        this._setFlag(SemanticsFlag.isLiveRegion,value);
    }
    get textDirection() : any {
        return this._textDirection;
    }
    _textDirection : any;

    set textDirection(textDirection : any) {
        this._textDirection = textDirection;
        this._hasBeenAnnotated = true;
    }
    get isSelected() : boolean {
        return this._hasFlag(SemanticsFlag.isSelected);
    }
    set isSelected(value : boolean) {
        this._setFlag(SemanticsFlag.isSelected,value);
    }
    get isEnabled() : boolean {
        return this._hasFlag(SemanticsFlag.hasEnabledState) ? this._hasFlag(SemanticsFlag.isEnabled) : null;
    }
    set isEnabled(value : boolean) {
        this._setFlag(SemanticsFlag.hasEnabledState,true);
        this._setFlag(SemanticsFlag.isEnabled,value);
    }
    get isChecked() : boolean {
        return this._hasFlag(SemanticsFlag.hasCheckedState) ? this._hasFlag(SemanticsFlag.isChecked) : null;
    }
    set isChecked(value : boolean) {
        this._setFlag(SemanticsFlag.hasCheckedState,true);
        this._setFlag(SemanticsFlag.isChecked,value);
    }
    get isToggled() : boolean {
        return this._hasFlag(SemanticsFlag.hasToggledState) ? this._hasFlag(SemanticsFlag.isToggled) : null;
    }
    set isToggled(value : boolean) {
        this._setFlag(SemanticsFlag.hasToggledState,true);
        this._setFlag(SemanticsFlag.isToggled,value);
    }
    get isInMutuallyExclusiveGroup() : boolean {
        return this._hasFlag(SemanticsFlag.isInMutuallyExclusiveGroup);
    }
    set isInMutuallyExclusiveGroup(value : boolean) {
        this._setFlag(SemanticsFlag.isInMutuallyExclusiveGroup,value);
    }
    get isFocused() : boolean {
        return this._hasFlag(SemanticsFlag.isFocused);
    }
    set isFocused(value : boolean) {
        this._setFlag(SemanticsFlag.isFocused,value);
    }
    get isButton() : boolean {
        return this._hasFlag(SemanticsFlag.isButton);
    }
    set isButton(value : boolean) {
        this._setFlag(SemanticsFlag.isButton,value);
    }
    get isHeader() : boolean {
        return this._hasFlag(SemanticsFlag.isHeader);
    }
    set isHeader(value : boolean) {
        this._setFlag(SemanticsFlag.isHeader,value);
    }
    get isHidden() : boolean {
        return this._hasFlag(SemanticsFlag.isHidden);
    }
    set isHidden(value : boolean) {
        this._setFlag(SemanticsFlag.isHidden,value);
    }
    get isTextField() : boolean {
        return this._hasFlag(SemanticsFlag.isTextField);
    }
    set isTextField(value : boolean) {
        this._setFlag(SemanticsFlag.isTextField,value);
    }
    get isObscured() : boolean {
        return this._hasFlag(SemanticsFlag.isObscured);
    }
    set isObscured(value : boolean) {
        this._setFlag(SemanticsFlag.isObscured,value);
    }
    get hasImplicitScrolling() : boolean {
        return this._hasFlag(SemanticsFlag.hasImplicitScrolling);
    }
    set hasImplicitScrolling(value : boolean) {
        this._setFlag(SemanticsFlag.hasImplicitScrolling,value);
    }
    get textSelection() : lib4.TextSelection {
        return this._textSelection;
    }
    _textSelection : lib4.TextSelection;

    set textSelection(value : lib4.TextSelection) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._textSelection = value;
        this._hasBeenAnnotated = true;
    }
    get scrollPosition() : double {
        return this._scrollPosition;
    }
    _scrollPosition : double;

    set scrollPosition(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._scrollPosition = value;
        this._hasBeenAnnotated = true;
    }
    get scrollExtentMax() : double {
        return this._scrollExtentMax;
    }
    _scrollExtentMax : double;

    set scrollExtentMax(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._scrollExtentMax = value;
        this._hasBeenAnnotated = true;
    }
    get scrollExtentMin() : double {
        return this._scrollExtentMin;
    }
    _scrollExtentMin : double;

    set scrollExtentMin(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        this._scrollExtentMin = value;
        this._hasBeenAnnotated = true;
    }
    get tagsForChildren() : core.DartIterable<SemanticsTag> {
        return this._tagsForChildren;
    }
    _tagsForChildren : core.DartSet<SemanticsTag>;

    addTagForChildren(tag : SemanticsTag) : any {
        this._tagsForChildren = ( this._tagsForChildren ) || ( core.DartSet() );
        this._tagsForChildren.add(tag);
    }
    _flags : number;

    _setFlag(flag : any,value : boolean) : any {
        if (value) {
            this._flags |= flag.index;
        }else {
            this._flags &= op(Op.BITNEG,flag.index);
        }
        this._hasBeenAnnotated = true;
    }
    _hasFlag(flag : any) : boolean {
        return (this._flags & flag.index) != 0;
    }
    isCompatibleWith(other : SemanticsConfiguration) : boolean {
        if (op(Op.EQUALS,other,null) || !other.hasBeenAnnotated || !this.hasBeenAnnotated) return true;
        if (this._actionsAsBits & other._actionsAsBits != 0) return false;
        if ((this._flags & other._flags) != 0) return false;
        if (this._value != null && new core.DartString(this._value).isNotEmpty && other._value != null && new core.DartString(other._value).isNotEmpty) return false;
        return true;
    }
    absorb(child : SemanticsConfiguration) : any {
        /* TODO (AssertStatementImpl) : assert (!explicitChildNodes); */;
        if (!child.hasBeenAnnotated) return;
        this._actions.addAll(child._actions);
        this._customSemanticsActions.addAll(child._customSemanticsActions);
        this._actionsAsBits |= child._actionsAsBits;
        this._flags |= child._flags;
        this._textSelection = ( this._textSelection ) || ( child._textSelection );
        this._scrollPosition = ( this._scrollPosition ) || ( child._scrollPosition );
        this._scrollExtentMax = ( this._scrollExtentMax ) || ( child._scrollExtentMax );
        this._scrollExtentMin = ( this._scrollExtentMin ) || ( child._scrollExtentMin );
        this._hintOverrides = ( this._hintOverrides ) || ( child._hintOverrides );
        this._indexInParent = ( this._indexInParent ) || ( child.indexInParent );
        this._scrollIndex = ( this._scrollIndex ) || ( child._scrollIndex );
        this._scrollChildCount = ( this._scrollChildCount ) || ( child._scrollChildCount );
        this.textDirection = ( this.textDirection ) || ( child.textDirection );
        this._sortKey = ( this._sortKey ) || ( child._sortKey );
        this._label = _concatStrings({
            thisString : this._label,thisTextDirection : this.textDirection,otherString : child._label,otherTextDirection : child.textDirection});
        if (this._decreasedValue == '' || this._decreasedValue == null) this._decreasedValue = child._decreasedValue;
        if (this._value == '' || this._value == null) this._value = child._value;
        if (this._increasedValue == '' || this._increasedValue == null) this._increasedValue = child._increasedValue;
        this._hint = _concatStrings({
            thisString : this._hint,thisTextDirection : this.textDirection,otherString : child._hint,otherTextDirection : child.textDirection});
        this._thickness = math.max(this._thickness,child._thickness + child._elevation);
        this._hasBeenAnnotated = this._hasBeenAnnotated || child._hasBeenAnnotated;
    }
    copy() : SemanticsConfiguration {
        return ((_) : any =>  {
            {
                _._isSemanticBoundary = this._isSemanticBoundary;
                _.explicitChildNodes = this.explicitChildNodes;
                _.isBlockingSemanticsOfPreviouslyPaintedNodes = this.isBlockingSemanticsOfPreviouslyPaintedNodes;
                _._hasBeenAnnotated = this._hasBeenAnnotated;
                _._isMergingSemanticsOfDescendants = this._isMergingSemanticsOfDescendants;
                _._textDirection = this._textDirection;
                _._sortKey = this._sortKey;
                _._label = this._label;
                _._increasedValue = this._increasedValue;
                _._value = this._value;
                _._decreasedValue = this._decreasedValue;
                _._hint = this._hint;
                _._hintOverrides = this._hintOverrides;
                _._elevation = this._elevation;
                _._thickness = this._thickness;
                _._flags = this._flags;
                _._tagsForChildren = this._tagsForChildren;
                _._textSelection = this._textSelection;
                _._scrollPosition = this._scrollPosition;
                _._scrollExtentMax = this._scrollExtentMax;
                _._scrollExtentMin = this._scrollExtentMin;
                _._actionsAsBits = this._actionsAsBits;
                _._indexInParent = this.indexInParent;
                _._scrollIndex = this._scrollIndex;
                _._scrollChildCount = this._scrollChildCount;
                _._actions.addAll(this._actions);
                _._customSemanticsActions.addAll(this._customSemanticsActions);
                return _;
            }
        })(SemanticsConfiguration());
    }
    constructor() {
    }
    @defaultConstructor
    SemanticsConfiguration() {
        this._isSemanticBoundary = false;
        this.explicitChildNodes = false;
        this.isBlockingSemanticsOfPreviouslyPaintedNodes = false;
        this._hasBeenAnnotated = false;
        this._actions = new core.DartMap.literal([
        ]);
        this._actionsAsBits = 0;
        this._isMergingSemanticsOfDescendants = false;
        this._customSemanticsActions = new core.DartMap.literal([
        ]);
        this._label = '';
        this._value = '';
        this._decreasedValue = '';
        this._increasedValue = '';
        this._hint = '';
        this._elevation = 0.0;
        this._thickness = 0.0;
        this._flags = 0;
    }
}

export enum DebugSemanticsDumpOrder {
    inverseHitTest,
    traversalOrder
}

export namespace SemanticsSortKey {
    export type Constructors = lib3.Diagnosticable.Constructors | 'SemanticsSortKey';
    export type Interface = Omit<SemanticsSortKey, Constructors>;
}
@DartClass
@Implements(core.DartComparable)
export class SemanticsSortKey extends lib3.Diagnosticable implements core.DartComparable.Interface<SemanticsSortKey> {
    constructor(_namedArguments? : {name? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SemanticsSortKey(_namedArguments? : {name? : string}) {
        let {name} = Object.assign({
        }, _namedArguments );
        this.name = name;
    }
    name : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compareTo(other : SemanticsSortKey) : number {
        /* TODO (AssertStatementImpl) : assert (runtimeType == other.runtimeType); */;
        /* TODO (AssertStatementImpl) : assert (name == other.name); */;
        return this.doCompare(other);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    doCompare(other : SemanticsSortKey) : number{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib3.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib3.StringProperty('name',this.name,{
            defaultValue : null}));
    }
}

export namespace OrdinalSortKey {
    export type Constructors = SemanticsSortKey.Constructors | 'OrdinalSortKey';
    export type Interface = Omit<OrdinalSortKey, Constructors>;
}
@DartClass
export class OrdinalSortKey extends SemanticsSortKey {
    constructor(order : double,_namedArguments? : {name? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OrdinalSortKey(order : double,_namedArguments? : {name? : string}) {
        let {name} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.order = order;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    order : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    doCompare(other : OrdinalSortKey) : number {
        if (other.order == null || this.order == null || other.order == this.order) return 0;
        return new core.DartDouble(this.order).compareTo(other.order);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib3.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib3.DoubleProperty('order',this.order,{
            defaultValue : null}));
    }
}

export class properties {
}
