/** Library asset:datahedgehog_monitor/lib/lib/widgets/animated_list.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib4 from "./framework";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib8 from "./scroll_controller";
import * as lib9 from "./scroll_physics";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/foundation/assertions";
import * as lib12 from "@dart2ts.packages/collection/lib/src/algorithms";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib14 from "./scroll_view";

export namespace _ActiveItem {
    export type Constructors = 'incoming' | 'outgoing' | 'index';
    export type Interface = Omit<_ActiveItem, Constructors>;
}
@DartClass
@Implements(core.DartComparable)
export class _ActiveItem implements core.DartComparable.Interface<_ActiveItem> {
    @namedConstructor
    incoming(controller : lib3.AnimationController,itemIndex : number) {
        this.removedItemBuilder = null;
        this.controller = controller;
        this.itemIndex = itemIndex;
    }
    static incoming : new(controller : lib3.AnimationController,itemIndex : number) => _ActiveItem;

    @namedConstructor
    outgoing(controller : lib3.AnimationController,itemIndex : number,removedItemBuilder : (context : lib4.BuildContext,animation : lib5.Animation<double>) => lib4.Widget) {
        this.controller = controller;
        this.itemIndex = itemIndex;
        this.removedItemBuilder = removedItemBuilder;
    }
    static outgoing : new(controller : lib3.AnimationController,itemIndex : number,removedItemBuilder : (context : lib4.BuildContext,animation : lib5.Animation<double>) => lib4.Widget) => _ActiveItem;

    @namedConstructor
    index(itemIndex : number) {
        this.controller = null;
        this.removedItemBuilder = null;
        this.itemIndex = itemIndex;
    }
    static index : new(itemIndex : number) => _ActiveItem;

    controller : lib3.AnimationController;

    removedItemBuilder : (context : lib4.BuildContext,animation : lib5.Animation<double>) => lib4.Widget;

    itemIndex : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compareTo(other : _ActiveItem) : number {
        return this.itemIndex - other.itemIndex;
    }
}

export namespace AnimatedList {
    export type Constructors = lib4.StatefulWidget.Constructors | 'AnimatedList';
    export type Interface = Omit<AnimatedList, Constructors>;
}
@DartClass
export class AnimatedList extends lib4.StatefulWidget {
    constructor(_namedArguments? : {key? : lib6.Key,itemBuilder? : (context : lib4.BuildContext,index : number,animation : lib5.Animation<double>) => lib4.Widget,initialItemCount? : number,scrollDirection? : lib7.Axis,reverse? : boolean,controller? : lib8.ScrollController,primary? : boolean,physics? : lib9.ScrollPhysics,shrinkWrap? : boolean,padding? : lib10.EdgeInsetsGeometry}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnimatedList(_namedArguments? : {key? : lib6.Key,itemBuilder? : (context : lib4.BuildContext,index : number,animation : lib5.Animation<double>) => lib4.Widget,initialItemCount? : number,scrollDirection? : lib7.Axis,reverse? : boolean,controller? : lib8.ScrollController,primary? : boolean,physics? : lib9.ScrollPhysics,shrinkWrap? : boolean,padding? : lib10.EdgeInsetsGeometry}) {
        let {key,itemBuilder,initialItemCount,scrollDirection,reverse,controller,primary,physics,shrinkWrap,padding} = Object.assign({
            "initialItemCount" : 0,
            "scrollDirection" : lib7.Axis.vertical,
            "reverse" : false,
            "shrinkWrap" : false}, _namedArguments );
        this.assert = assert;
        this.itemBuilder = itemBuilder;
        this.initialItemCount = initialItemCount;
        this.scrollDirection = scrollDirection;
        this.reverse = reverse;
        this.controller = controller;
        this.primary = primary;
        this.physics = physics;
        this.shrinkWrap = shrinkWrap;
        this.padding = padding;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    itemBuilder : (context : lib4.BuildContext,index : number,animation : lib5.Animation<double>) => lib4.Widget;

    initialItemCount : number;

    scrollDirection : lib7.Axis;

    reverse : boolean;

    controller : lib8.ScrollController;

    primary : boolean;

    physics : lib9.ScrollPhysics;

    shrinkWrap : boolean;

    padding : lib10.EdgeInsetsGeometry;

    static of(context : lib4.BuildContext,_namedArguments? : {nullOk? : boolean}) : AnimatedListState {
        let {nullOk} = Object.assign({
            "nullOk" : false}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (context != null); */;
        /* TODO (AssertStatementImpl) : assert (nullOk != null); */;
        let result : AnimatedListState = context.ancestorStateOfType(new lib4.TypeMatcher<AnimatedListState>());
        if (nullOk || result != null) return result;
        throw lib11.FlutterError('AnimatedList.of() called with a context that does not contain an AnimatedList.\n' + 'No AnimatedList ancestor could be found starting from the context that was passed to AnimatedList.of(). ' + 'This can happen when the context provided is from the same StatefulWidget that ' + 'built the AnimatedList. Please see the AnimatedList documentation for examples ' + 'of how to refer to an AnimatedListState object: ' + '  https://docs.flutter.io/flutter/widgets/AnimatedListState-class.html \n' + 'The context used was:\n' + `  ${context}`);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : AnimatedListState {
        return AnimatedListState();
    }
}

export namespace AnimatedListState {
    export type Constructors = 'AnimatedListState';
    export type Interface = Omit<AnimatedListState, Constructors>;
}
@DartClass
@With(any)
export class AnimatedListState extends any implements any.Interface {
    _incomingItems : core.DartList<_ActiveItem>;

    _outgoingItems : core.DartList<_ActiveItem>;

    _itemsCount : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._itemsCount = widget.initialItemCount;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        for(let item of this._incomingItems) item.controller.dispose();
        for(let item of this._outgoingItems) item.controller.dispose();
        super.dispose();
    }
    _removeActiveItemAt(items : core.DartList<_ActiveItem>,itemIndex : number) : _ActiveItem {
        let i : number = lib12.binarySearch(items,_ActiveItem.index(itemIndex));
        return i == -1 ? null : items.removeAt(i);
    }
    _activeItemAt(items : core.DartList<_ActiveItem>,itemIndex : number) : _ActiveItem {
        let i : number = lib12.binarySearch(items,_ActiveItem.index(itemIndex));
        return i == -1 ? null : items[i];
    }
    _indexToItemIndex(index : number) : number {
        let itemIndex : number = index;
        for(let item of this._outgoingItems) {
            if (item.itemIndex <= itemIndex) itemIndex += 1;else break;
        }
        return itemIndex;
    }
    _itemIndexToIndex(itemIndex : number) : number {
        let index : number = itemIndex;
        for(let item of this._outgoingItems) {
            /* TODO (AssertStatementImpl) : assert (item.itemIndex != itemIndex); */;
            if (item.itemIndex < itemIndex) index -= 1;else break;
        }
        return index;
    }
    insertItem(index : number,_namedArguments? : {duration? : core.DartDuration}) : any {
        let {duration} = Object.assign({
            "duration" : properties._kDuration}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (index != null && index >= 0); */;
        /* TODO (AssertStatementImpl) : assert (duration != null); */;
        let itemIndex : number = this._indexToItemIndex(index);
        /* TODO (AssertStatementImpl) : assert (itemIndex >= 0 && itemIndex <= _itemsCount); */;
        for(let item of this._incomingItems) {
            if (item.itemIndex >= itemIndex) item.itemIndex += 1;
        }
        for(let item of this._outgoingItems) {
            if (item.itemIndex >= itemIndex) item.itemIndex += 1;
        }
        let controller : lib3.AnimationController = lib3.AnimationController({
            duration : duration,vsync : this});
        let incomingItem : _ActiveItem = _ActiveItem.incoming(controller,itemIndex);
        setState(() =>  {
            ((_) : core.DartList<_ActiveItem> =>  {
                {
                    _.add(incomingItem);
                    _.sort();
                    return _;
                }
            })(this._incomingItems);
            this._itemsCount += 1;
        });
        op(Op.LT,controller.forward().then,);
        op(Op.GT,,((_ : any) =>  {
            this._removeActiveItemAt(this._incomingItems,incomingItem.itemIndex).controller.dispose();
        }));
    }
    removeItem(index : number,builder : (context : lib4.BuildContext,animation : lib5.Animation<double>) => lib4.Widget,_namedArguments? : {duration? : core.DartDuration}) : any {
        let {duration} = Object.assign({
            "duration" : properties._kDuration}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (index != null && index >= 0); */;
        /* TODO (AssertStatementImpl) : assert (builder != null); */;
        /* TODO (AssertStatementImpl) : assert (duration != null); */;
        let itemIndex : number = this._indexToItemIndex(index);
        /* TODO (AssertStatementImpl) : assert (itemIndex >= 0 && itemIndex < _itemsCount); */;
        /* TODO (AssertStatementImpl) : assert (_activeItemAt(_outgoingItems, itemIndex) == null); */;
        let incomingItem : _ActiveItem = this._removeActiveItemAt(this._incomingItems,itemIndex);
        let controller : lib3.AnimationController = (((t)=>(!!t)?t.controller:null)(incomingItem) || lib3.AnimationController({
            duration : duration,value : 1.0,vsync : this}));
        let outgoingItem : _ActiveItem = _ActiveItem.outgoing(controller,itemIndex,builder);
        setState(() =>  {
            ((_) : core.DartList<_ActiveItem> =>  {
                {
                    _.add(outgoingItem);
                    _.sort();
                    return _;
                }
            })(this._outgoingItems);
        });
        op(Op.LT,controller.reverse().then,);
        op(Op.GT,,((value : any) =>  {
            this._removeActiveItemAt(this._outgoingItems,outgoingItem.itemIndex).controller.dispose();
            for(let item of this._incomingItems) {
                if (item.itemIndex > outgoingItem.itemIndex) item.itemIndex -= 1;
            }
            for(let item of this._outgoingItems) {
                if (item.itemIndex > outgoingItem.itemIndex) item.itemIndex -= 1;
            }
            setState(() =>  {
                this._itemsCount -= 1;
            });
        }));
    }
    _itemBuilder(context : lib4.BuildContext,itemIndex : number) : lib4.Widget {
        let outgoingItem : _ActiveItem = this._activeItemAt(this._outgoingItems,itemIndex);
        if (outgoingItem != null) return outgoingItem.removedItemBuilder(context,outgoingItem.controller.view);
        let incomingItem : _ActiveItem = this._activeItemAt(this._incomingItems,itemIndex);
        let animation : lib5.Animation<double> = (((t)=>(!!t)?t.view:null)(((t)=>(!!t)?t.controller:null)(incomingItem)) || lib13.properties.kAlwaysCompleteAnimation);
        return widget.itemBuilder(context,this._itemIndexToIndex(itemIndex),animation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib4.BuildContext) : lib4.Widget {
        return lib14.ListView.builder({
            itemBuilder : this._itemBuilder.bind(this),itemCount : this._itemsCount,scrollDirection : widget.scrollDirection,reverse : widget.reverse,controller : widget.controller,primary : widget.primary,physics : widget.physics,shrinkWrap : widget.shrinkWrap,padding : widget.padding});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnimatedListState() {
        this._incomingItems = new core.DartList.literal<_ActiveItem>();
        this._outgoingItems = new core.DartList.literal<_ActiveItem>();
        this._itemsCount = 0;
    }
}

export class properties {
    private static __$_kDuration : core.DartDuration;
    static get _kDuration() : core.DartDuration { 
        if (this.__$_kDuration===undefined) {
            this.__$_kDuration = core.DartDuration({
                milliseconds : 300});
        }
        return this.__$_kDuration;
    }
    static set _kDuration(__$value : core.DartDuration)  { 
        this.__$_kDuration = __$value;
    }

}
