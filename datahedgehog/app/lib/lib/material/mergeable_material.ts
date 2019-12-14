/** Library asset:datahedgehog_monitor/lib/lib/material/mergeable_material.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib9 from "./theme";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib12 from "./material";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/painting/border_radius";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/painting/box_border";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib18 from "./divider";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/widgets/implicit_animations";
import * as lib21 from "./shadows";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/painting/box_shadow";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/rendering/list_body";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/rendering/object";

export namespace MergeableMaterialItem {
    export type Constructors = 'MergeableMaterialItem';
    export type Interface = Omit<MergeableMaterialItem, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class MergeableMaterialItem {
    constructor(key : lib3.LocalKey) {
    }
    @defaultConstructor
    MergeableMaterialItem(key : lib3.LocalKey) {
        this.assert = assert;
        this.key = key;
    }
     : any;

    key : lib3.LocalKey;

}

export namespace MergeableMaterial {
    export type Constructors = lib4.StatefulWidget.Constructors | 'MergeableMaterial';
    export type Interface = Omit<MergeableMaterial, Constructors>;
}
@DartClass
export class MergeableMaterial extends lib4.StatefulWidget {
    constructor(_namedArguments? : {key? : lib3.Key,mainAxis? : lib5.Axis,elevation? : number,hasDividers? : boolean,children? : core.DartList<MergeableMaterialItem>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MergeableMaterial(_namedArguments? : {key? : lib3.Key,mainAxis? : lib5.Axis,elevation? : number,hasDividers? : boolean,children? : core.DartList<MergeableMaterialItem>}) {
        let {key,mainAxis,elevation,hasDividers,children} = Object.assign({
            "mainAxis" : lib5.Axis.vertical,
            "elevation" : 2,
            "hasDividers" : false,
            "children" : new core.DartList.literal<MergeableMaterialItem>()}, _namedArguments );
        super.StatefulWidget({
            key : key});
        this.mainAxis = mainAxis;
        this.elevation = elevation;
        this.hasDividers = hasDividers;
        this.children = children;
    }
    children : core.DartList<MergeableMaterialItem>;

    mainAxis : lib5.Axis;

    elevation : number;

    hasDividers : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib6.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib6.EnumProperty('mainAxis',this.mainAxis));
        properties.add(lib6.DoubleProperty('elevation',new core.DartInt(this.elevation).toDouble()));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _MergeableMaterialState {
        return _MergeableMaterialState();
    }
}

export namespace _AnimationTuple {
    export type Constructors = '_AnimationTuple';
    export type Interface = Omit<_AnimationTuple, Constructors>;
}
@DartClass
export class _AnimationTuple {
    constructor(_namedArguments? : {controller? : lib7.AnimationController,startAnimation? : lib8.CurvedAnimation,endAnimation? : lib8.CurvedAnimation,gapAnimation? : lib8.CurvedAnimation,gapStart? : double}) {
    }
    @defaultConstructor
    _AnimationTuple(_namedArguments? : {controller? : lib7.AnimationController,startAnimation? : lib8.CurvedAnimation,endAnimation? : lib8.CurvedAnimation,gapAnimation? : lib8.CurvedAnimation,gapStart? : double}) {
        let {controller,startAnimation,endAnimation,gapAnimation,gapStart} = Object.assign({
            "gapStart" : 0.0}, _namedArguments );
        this.controller = controller;
        this.startAnimation = startAnimation;
        this.endAnimation = endAnimation;
        this.gapAnimation = gapAnimation;
        this.gapStart = gapStart;
    }
    controller : lib7.AnimationController;

    startAnimation : lib8.CurvedAnimation;

    endAnimation : lib8.CurvedAnimation;

    gapAnimation : lib8.CurvedAnimation;

    gapStart : double;

}

export namespace _MergeableMaterialState {
    export type Constructors = '_MergeableMaterialState';
    export type Interface = Omit<_MergeableMaterialState, Constructors>;
}
@DartClass
@With(any)
export class _MergeableMaterialState extends any implements any.Interface {
    _children : core.DartList<MergeableMaterialItem>;

    _animationTuples : core.DartMap<lib3.LocalKey,_AnimationTuple>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._children = op(Op.LT,core.DartList<E>,MergeableMaterialItem);
        op(Op.GT,,.from(widget.children));
        for(let i : number = 0; i < this._children.length; i += 1){
            if (is(this._children[i], MaterialGap)) {
                this._initGap(this._children[i]);
                this._animationTuples.get(this._children[i].key).controller.value = 1.0;
            }
        }
        /* TODO (AssertStatementImpl) : assert (_debugGapsAreValid(_children)); */;
    }
    _initGap(gap : MaterialGap) : any {
        let controller : lib7.AnimationController = lib7.AnimationController({
            duration : lib9.properties.kThemeAnimationDuration,vsync : this});
        let startAnimation : lib8.CurvedAnimation = lib8.CurvedAnimation({
            parent : controller,curve : lib10.Curves.fastOutSlowIn});
        let endAnimation : lib8.CurvedAnimation = lib8.CurvedAnimation({
            parent : controller,curve : lib10.Curves.fastOutSlowIn});
        let gapAnimation : lib8.CurvedAnimation = lib8.CurvedAnimation({
            parent : controller,curve : lib10.Curves.fastOutSlowIn});
        controller.addListener(this._handleTick.bind(this));
        this._animationTuples.set(gap.key,_AnimationTuple({
            controller : controller,startAnimation : startAnimation,endAnimation : endAnimation,gapAnimation : gapAnimation}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        for(let child of this._children) {
            if (is(child, MaterialGap)) this._animationTuples.get(child.key).controller.dispose();
        }
        super.dispose();
    }
    _handleTick() : any {
        setState(() =>  {
        });
    }
    _debugHasConsecutiveGaps(children : core.DartList<MergeableMaterialItem>) : boolean {
        for(let i : number = 0; i < op(Op.MINUS,widget.children.length,1); i += 1){
            if (is(op(Op.INDEX,widget.children,i), MaterialGap) && is(op(Op.INDEX,widget.children,i + 1), MaterialGap)) return true;
        }
        return false;
    }
    _debugGapsAreValid(children : core.DartList<MergeableMaterialItem>) : boolean {
        if (this._debugHasConsecutiveGaps(children)) return false;
        if (children.isNotEmpty) {
            if (is(children.first, MaterialGap) || is(children.last, MaterialGap)) return false;
        }
        return true;
    }
    _insertChild(index : number,child : MergeableMaterialItem) : any {
        this._children.insert(index,child);
        if (is(child, MaterialGap)) this._initGap(child);
    }
    _removeChild(index : number) : any {
        let child : MergeableMaterialItem = this._children.removeAt(index);
        if (is(child, MaterialGap)) this._animationTuples.set(child.key,null);
    }
    _isClosingGap(index : number) : boolean {
        if (index < this._children.length - 1 && is(this._children[index], MaterialGap)) {
            return op(Op.EQUALS,this._animationTuples.get(this._children[index].key).controller.status,lib11.AnimationStatus.reverse);
        }
        return false;
    }
    _removeEmptyGaps() : any {
        let j : number = 0;
        while (j < this._children.length){
            if (is(this._children[j], MaterialGap) && op(Op.EQUALS,this._animationTuples.get(this._children[j].key).controller.status,lib11.AnimationStatus.dismissed)) {
                this._removeChild(j);
            }else {
                j += 1;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : MergeableMaterial) : any {
        super.didUpdateWidget(oldWidget);
        let oldKeys : core.DartSet<lib3.LocalKey> = oldWidget.children.map((child : MergeableMaterialItem) =>  {
            return child.key;
        }).toSet();
        let newKeys : core.DartSet<lib3.LocalKey> = widget.children.map((child : MergeableMaterialItem) =>  {
            return child.key;
        }).toSet();
        let newOnly : core.DartSet<lib3.LocalKey> = newKeys.difference(oldKeys);
        let oldOnly : core.DartSet<lib3.LocalKey> = oldKeys.difference(newKeys);
        let newChildren : core.DartList<MergeableMaterialItem> = widget.children;
        let i : number = 0;
        let j : number = 0;
        /* TODO (AssertStatementImpl) : assert (_debugGapsAreValid(newChildren)); */;
        this._removeEmptyGaps();
        while (i < newChildren.length && j < this._children.length){
            if (newOnly.contains(newChildren[i].key) || oldOnly.contains(this._children[j].key)) {
                let startNew : number = i;
                let startOld : number = j;
                while (newOnly.contains(newChildren[i].key))i += 1;
                while (oldOnly.contains(this._children[j].key) || this._isClosingGap(j))j += 1;
                let newLength : number = i - startNew;
                let oldLength : number = j - startOld;
                if (newLength > 0) {
                    if (oldLength > 1 || oldLength == 1 && is(this._children[startOld], MaterialSlice)) {
                        if (newLength == 1 && is(newChildren[startNew], MaterialGap)) {
                            let gapSizeSum : double = 0.0;
                            while (startOld < j){
                                if (is(this._children[startOld], MaterialGap)) {
                                    let gap : MaterialGap = this._children[startOld];
                                    gapSizeSum += gap.size;
                                }
                                this._removeChild(startOld);
                                j -= 1;
                            }
                            this._insertChild(startOld,newChildren[startNew]);
                            ((_) : _AnimationTuple =>  {
                                {
                                    _.gapStart = gapSizeSum;
                                    _.controller.forward();
                                    return _;
                                }
                            })(this._animationTuples.get(newChildren[startNew].key));
                            j += 1;
                        }else {
                            for(let k : number = 0; k < oldLength; k += 1)this._removeChild(startOld);
                            for(let k : number = 0; k < newLength; k += 1)this._insertChild(startOld + k,newChildren[startNew + k]);
                            j += newLength - oldLength;
                        }
                    }else if (oldLength == 1) {
                        if (newLength == 1 && is(newChildren[startNew], MaterialGap) && op(Op.EQUALS,this._children[startOld].key,newChildren[startNew].key)) {
                            this._animationTuples.get(newChildren[startNew].key).controller.forward();
                        }else {
                            let gapSize : double = this._getGapSize(startOld);
                            this._removeChild(startOld);
                            for(let k : number = 0; k < newLength; k += 1)this._insertChild(startOld + k,newChildren[startNew + k]);
                            j += newLength - 1;
                            let gapSizeSum : double = 0.0;
                            for(let k : number = startNew; k < i; k += 1){
                                if (is(newChildren[k], MaterialGap)) {
                                    let gap : MaterialGap = newChildren[k];
                                    gapSizeSum += gap.size;
                                }
                            }
                            for(let k : number = startNew; k < i; k += 1){
                                if (is(newChildren[k], MaterialGap)) {
                                    let gap : MaterialGap = newChildren[k];
                                    this._animationTuples.get(gap.key).gapStart = gapSize * gap.size / gapSizeSum;
                                    ((_) : lib7.AnimationController =>  {
                                        {
                                            _.value = 0.0;
                                            forward();
                                            return _;
                                        }
                                    })(this._animationTuples.get(gap.key).controller);
                                }
                            }
                        }
                    }else {
                        for(let k : number = 0; k < newLength; k += 1){
                            this._insertChild(startOld + k,newChildren[startNew + k]);
                            if (is(newChildren[startNew + k], MaterialGap)) {
                                let gap : MaterialGap = newChildren[startNew + k];
                                this._animationTuples.get(gap.key).controller.forward();
                            }
                        }
                        j += newLength;
                    }
                }else {
                    if (oldLength > 1 || oldLength == 1 && is(this._children[startOld], MaterialSlice)) {
                        let gapSizeSum : double = 0.0;
                        while (startOld < j){
                            if (is(this._children[startOld], MaterialGap)) {
                                let gap : MaterialGap = this._children[startOld];
                                gapSizeSum += gap.size;
                            }
                            this._removeChild(startOld);
                            j -= 1;
                        }
                        if (gapSizeSum != 0.0) {
                            let gap : MaterialGap = MaterialGap({
                                key : lib4.UniqueKey(),size : gapSizeSum});
                            this._insertChild(startOld,gap);
                            this._animationTuples.get(gap.key).gapStart = 0.0;
                            ((_) : lib7.AnimationController =>  {
                                {
                                    _.value = 1.0;
                                    reverse();
                                    return _;
                                }
                            })(this._animationTuples.get(gap.key).controller);
                            j += 1;
                        }
                    }else if (oldLength == 1) {
                        let gap : MaterialGap = this._children[startOld];
                        this._animationTuples.get(gap.key).gapStart = 0.0;
                        this._animationTuples.get(gap.key).controller.reverse();
                    }
                }
            }else {
                if ((is(this._children[j], MaterialGap)) == (is(newChildren[i], MaterialGap))) {
                    this._children[j] = newChildren[i];
                    i += 1;
                    j += 1;
                }else {
                    /* TODO (AssertStatementImpl) : assert (_children[j] is MaterialGap); */;
                    j += 1;
                }
            }
        }
        while (j < this._children.length)this._removeChild(j);
        while (i < newChildren.length){
            this._insertChild(j,newChildren[i]);
            i += 1;
            j += 1;
        }
    }
    _borderRadius(index : number,start : boolean,end : boolean) : lib13.BorderRadius {
        /* TODO (AssertStatementImpl) : assert (kMaterialEdges[MaterialType.card].topLeft == kMaterialEdges[MaterialType.card].topRight); */;
        /* TODO (AssertStatementImpl) : assert (kMaterialEdges[MaterialType.card].topLeft == kMaterialEdges[MaterialType.card].bottomLeft); */;
        /* TODO (AssertStatementImpl) : assert (kMaterialEdges[MaterialType.card].topLeft == kMaterialEdges[MaterialType.card].bottomRight); */;
        let cardRadius : any = lib12.properties.kMaterialEdges.get(lib12.MaterialType.card).topLeft;
        let startRadius : any = Radius.zero;
        let endRadius : any = Radius.zero;
        if (index > 0 && is(this._children[index - 1], MaterialGap)) {
            startRadius = Radius.lerp(Radius.zero,cardRadius,this._animationTuples.get(this._children[index - 1].key).startAnimation.value);
        }
        if (index < this._children.length - 2 && is(this._children[index + 1], MaterialGap)) {
            endRadius = Radius.lerp(Radius.zero,cardRadius,this._animationTuples.get(this._children[index + 1].key).endAnimation.value);
        }
        if (op(Op.EQUALS,widget.mainAxis,lib5.Axis.vertical)) {
            return lib13.BorderRadius.vertical({
                top : start ? cardRadius : startRadius,bottom : end ? cardRadius : endRadius});
        }else {
            return lib13.BorderRadius.horizontal({
                left : start ? cardRadius : startRadius,right : end ? cardRadius : endRadius});
        }
    }
    _getGapSize(index : number) : double {
        let gap : MaterialGap = this._children[index];
        return lerpDouble(this._animationTuples.get(gap.key).gapStart,gap.size,this._animationTuples.get(gap.key).gapAnimation.value);
    }
    _willNeedDivider(index : number) : boolean {
        if (index < 0) return false;
        if (index >= this._children.length) return false;
        return is(this._children[index], MaterialSlice) || this._isClosingGap(index);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib4.BuildContext) : lib4.Widget {
        this._removeEmptyGaps();
        let widgets : core.DartList<lib4.Widget> = new core.DartList.literal<lib4.Widget>();
        let slices : core.DartList<lib4.Widget> = new core.DartList.literal<lib4.Widget>();
        let i : number;
        for(i = 0; i < this._children.length; i += 1){
            if (is(this._children[i], MaterialGap)) {
                /* TODO (AssertStatementImpl) : assert (slices.isNotEmpty); */;
                widgets.add(lib17.Container({
                    decoration : lib15.BoxDecoration({
                        color : lib9.Theme.of(context).cardColor,borderRadius : this._borderRadius(i - 1,widgets.isEmpty,false),shape : lib14.BoxShape.rectangle}),child : lib16.ListBody({
                        mainAxis : widget.mainAxis,children : slices})}));
                slices = new core.DartList.literal<lib4.Widget>();
                widgets.add(lib16.SizedBox({
                    width : op(Op.EQUALS,widget.mainAxis,lib5.Axis.horizontal) ? this._getGapSize(i) : null,height : op(Op.EQUALS,widget.mainAxis,lib5.Axis.vertical) ? this._getGapSize(i) : null}));
            }else {
                let slice : MaterialSlice = this._children[i];
                let child : lib4.Widget = slice.child;
                if (widget.hasDividers) {
                    let hasTopDivider : boolean = this._willNeedDivider(i - 1);
                    let hasBottomDivider : boolean = this._willNeedDivider(i + 1);
                    let border : lib14.Border;
                    let divider : lib19.BorderSide = lib18.Divider.createBorderSide(context,{
                        width : 0.5});
                    if (i == 0) {
                        border = lib14.Border({
                            bottom : hasBottomDivider ? divider : lib19.BorderSide.none});
                    }else if (i == this._children.length - 1) {
                        border = lib14.Border({
                            top : hasTopDivider ? divider : lib19.BorderSide.none});
                    }else {
                        border = lib14.Border({
                            top : hasTopDivider ? divider : lib19.BorderSide.none,bottom : hasBottomDivider ? divider : lib19.BorderSide.none});
                    }
                    /* TODO (AssertStatementImpl) : assert (border != null); */;
                    child = lib20.AnimatedContainer({
                        key : _MergeableMaterialSliceKey(this._children[i].key),decoration : lib15.BoxDecoration({
                            border : border}),duration : lib9.properties.kThemeAnimationDuration,curve : lib10.Curves.fastOutSlowIn,child : child});
                }
                slices.add(lib12.Material({
                    type : lib12.MaterialType.transparency,child : child}));
            }
        }
        if (slices.isNotEmpty) {
            widgets.add(lib17.Container({
                decoration : lib15.BoxDecoration({
                    color : lib9.Theme.of(context).cardColor,borderRadius : this._borderRadius(i - 1,widgets.isEmpty,true),shape : lib14.BoxShape.rectangle}),child : lib16.ListBody({
                    mainAxis : widget.mainAxis,children : slices})}));
            slices = new core.DartList.literal<lib4.Widget>();
        }
        return _MergeableMaterialListBody({
            mainAxis : widget.mainAxis,boxShadows : lib21.properties.kElevationToShadow.get(widget.elevation),items : this._children,children : widgets});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MergeableMaterialState() {
        this._animationTuples = new core.DartMap.literal([
        ]);
    }
}

export namespace _MergeableMaterialSliceKey {
    export type Constructors = lib4.GlobalKey.Constructors | '_MergeableMaterialSliceKey';
    export type Interface = Omit<_MergeableMaterialSliceKey, Constructors>;
}
@DartClass
export class _MergeableMaterialSliceKey extends lib4.GlobalKey<any> {
    constructor(value : lib3.LocalKey) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MergeableMaterialSliceKey(value : lib3.LocalKey) {
        super.constructor();
        this.value = value;
    }
    value : lib3.LocalKey;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (isNot(other, _MergeableMaterialSliceKey)) return false;
        let typedOther : _MergeableMaterialSliceKey = other;
        return op(Op.EQUALS,this.value,typedOther.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.value.hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `_MergeableMaterialSliceKey(${this.value})`;
    }
}

export namespace _MergeableMaterialListBody {
    export type Constructors = lib16.ListBody.Constructors | '_MergeableMaterialListBody';
    export type Interface = Omit<_MergeableMaterialListBody, Constructors>;
}
@DartClass
export class _MergeableMaterialListBody extends lib16.ListBody {
    constructor(_namedArguments? : {children? : core.DartList<lib4.Widget>,mainAxis? : lib5.Axis,items? : core.DartList<MergeableMaterialItem>,boxShadows? : core.DartList<lib22.BoxShadow>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MergeableMaterialListBody(_namedArguments? : {children? : core.DartList<lib4.Widget>,mainAxis? : lib5.Axis,items? : core.DartList<MergeableMaterialItem>,boxShadows? : core.DartList<lib22.BoxShadow>}) {
        let {children,mainAxis,items,boxShadows} = Object.assign({
            "mainAxis" : lib5.Axis.vertical}, _namedArguments );
        super.ListBody({
            children : children,mainAxis : mainAxis});
        this.items = items;
        this.boxShadows = boxShadows;
    }
    items : core.DartList<MergeableMaterialItem>;

    boxShadows : core.DartList<lib22.BoxShadow>;

    _getDirection(context : lib4.BuildContext) : lib5.AxisDirection {
        return lib16.getAxisDirectionFromAxisReverseAndDirectionality(context,lib23.properties.mainAxis,false);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib4.BuildContext) : lib23.RenderListBody {
        return _RenderMergeableMaterialListBody({
            axisDirection : this._getDirection(context),boxShadows : this.boxShadows});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib4.BuildContext,renderObject : lib23.RenderListBody) : any {
        let materialRenderListBody : _RenderMergeableMaterialListBody = renderObject;
        ((_) : _RenderMergeableMaterialListBody =>  {
            {
                _.axisDirection = this._getDirection(context);
                _.boxShadows = this.boxShadows;
                return _;
            }
        })(materialRenderListBody);
    }
}

export namespace _RenderMergeableMaterialListBody {
    export type Constructors = lib23.RenderListBody.Constructors | '_RenderMergeableMaterialListBody';
    export type Interface = Omit<_RenderMergeableMaterialListBody, Constructors>;
}
@DartClass
export class _RenderMergeableMaterialListBody extends lib23.RenderListBody {
    constructor(_namedArguments? : {children? : core.DartList<any>,axisDirection? : lib5.AxisDirection,boxShadows? : core.DartList<lib22.BoxShadow>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RenderMergeableMaterialListBody(_namedArguments? : {children? : core.DartList<any>,axisDirection? : lib5.AxisDirection,boxShadows? : core.DartList<lib22.BoxShadow>}) {
        let {children,axisDirection,boxShadows} = Object.assign({
            "axisDirection" : lib5.AxisDirection.down}, _namedArguments );
        super.RenderListBody({
            children : children,axisDirection : axisDirection});
        this.boxShadows = boxShadows;
    }
    boxShadows : core.DartList<lib22.BoxShadow>;

    _paintShadows(canvas : any,rect : any) : any {
        for(let boxShadow of this.boxShadows) {
            let paint : any = boxShadow.toPaint();
            canvas.drawRRect(lib12.properties.kMaterialEdges.get(lib12.MaterialType.card).toRRect(rect),paint);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib24.PaintingContext,offset : any) : any {
        let child : any = firstChild;
        let i : number = 0;
        while (child != null){
            let childParentData : lib23.ListBodyParentData = child.parentData;
            let rect : any = op(Op.BITAND,(op(Op.PLUS,childParentData.offset,offset)),child.size);
            if (i % 2 == 0) this._paintShadows(context.canvas,rect);
            child = childParentData.nextSibling;
            i += 1;
        }
        defaultPaint(context,offset);
    }
}

export namespace MaterialSlice {
    export type Constructors = MergeableMaterialItem.Constructors | 'MaterialSlice';
    export type Interface = Omit<MaterialSlice, Constructors>;
}
@DartClass
export class MaterialSlice extends MergeableMaterialItem {
    constructor(_namedArguments? : {key? : lib3.LocalKey,child? : lib4.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MaterialSlice(_namedArguments? : {key? : lib3.LocalKey,child? : lib4.Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.child = child;
    }
     : any;

     : any;

    child : lib4.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `MergeableSlice(key: ${this.key}, child: ${this.child})`;
    }
}

export namespace MaterialGap {
    export type Constructors = MergeableMaterialItem.Constructors | 'MaterialGap';
    export type Interface = Omit<MaterialGap, Constructors>;
}
@DartClass
export class MaterialGap extends MergeableMaterialItem {
    constructor(_namedArguments? : {key? : lib3.LocalKey,size? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MaterialGap(_namedArguments? : {key? : lib3.LocalKey,size? : double}) {
        let {key,size} = Object.assign({
            "size" : 16.0}, _namedArguments );
        this.assert = assert;
        this.size = size;
    }
     : any;

     : any;

    size : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `MaterialGap(key: ${this.key}, child: ${this.size})`;
    }
}

export class properties {
}
