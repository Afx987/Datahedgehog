/** Library asset:datahedgehog_monitor/lib/lib/material/expansion_panel.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib5 from "./theme";
import * as lib6 from "./mergeable_material";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/implicit_animations";
import * as lib12 from "./expand_icon";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/animated_cross_fade";

export namespace _SaltedKey {
    export type Constructors = lib3.LocalKey.Constructors | '_SaltedKey';
    export type Interface<S,V> = Omit<_SaltedKey<S,V>, Constructors>;
}
@DartClass
export class _SaltedKey<S,V> extends lib3.LocalKey {
    constructor(salt : S,value : V) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SaltedKey(salt : S,value : V) {
        this.salt = salt;
        this.value = value;
    }
    salt : S;

    value : V;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : _SaltedKey<S,V> = other;
        return op(Op.EQUALS,this.salt,typedOther.salt) && op(Op.EQUALS,this.value,typedOther.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.runtimeType,this.salt,this.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let saltString : string = op(Op.EQUALS,S,string) ? `<'${this.salt}'>` : `<${this.salt}>`;
        let valueString : string = op(Op.EQUALS,V,string) ? `<'${this.value}'>` : `<${this.value}>`;
        return `[${saltString} ${valueString}]`;
    }
}

export namespace ExpansionPanel {
    export type Constructors = 'ExpansionPanel';
    export type Interface = Omit<ExpansionPanel, Constructors>;
}
@DartClass
export class ExpansionPanel {
    constructor(_namedArguments? : {headerBuilder? : (context : lib4.BuildContext,isExpanded : boolean) => lib4.Widget,body? : lib4.Widget,isExpanded? : boolean}) {
    }
    @defaultConstructor
    ExpansionPanel(_namedArguments? : {headerBuilder? : (context : lib4.BuildContext,isExpanded : boolean) => lib4.Widget,body? : lib4.Widget,isExpanded? : boolean}) {
        let {headerBuilder,body,isExpanded} = Object.assign({
            "isExpanded" : false}, _namedArguments );
        this.assert = assert;
        this.headerBuilder = headerBuilder;
        this.body = body;
        this.isExpanded = isExpanded;
    }
     : any;

     : any;

     : any;

    headerBuilder : (context : lib4.BuildContext,isExpanded : boolean) => lib4.Widget;

    body : lib4.Widget;

    isExpanded : boolean;

}

export namespace ExpansionPanelList {
    export type Constructors = lib4.StatefulWidget.Constructors | 'ExpansionPanelList' | 'radio';
    export type Interface = Omit<ExpansionPanelList, Constructors>;
}
@DartClass
export class ExpansionPanelList extends lib4.StatefulWidget {
    constructor(_namedArguments? : {key? : lib3.Key,children? : core.DartList<ExpansionPanel>,expansionCallback? : (panelIndex : number,isExpanded : boolean) => any,animationDuration? : core.DartDuration}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpansionPanelList(_namedArguments? : {key? : lib3.Key,children? : core.DartList<ExpansionPanel>,expansionCallback? : (panelIndex : number,isExpanded : boolean) => any,animationDuration? : core.DartDuration}) {
        let {key,children,expansionCallback,animationDuration} = Object.assign({
            "children" : new core.DartList.literal<ExpansionPanel>(),
            "animationDuration" : lib5.properties.kThemeAnimationDuration}, _namedArguments );
        this._allowOnlyOnePanelOpen = false;
        this.initialOpenPanelValue = null;
        this._allowOnlyOnePanelOpen = true;
        this.assert = assert;
        this.children = children;
        this.expansionCallback = expansionCallback;
        this.animationDuration = animationDuration;
    }
     : any;

     : any;

    _allowOnlyOnePanelOpen;
    initialOpenPanelValue;
    super;

     : any;

     : any;

    @namedConstructor
    radio(_namedArguments? : {key? : lib3.Key,children? : core.DartList<ExpansionPanel>,expansionCallback? : (panelIndex : number,isExpanded : boolean) => any,animationDuration? : core.DartDuration,initialOpenPanelValue? : any}) {
        let {key,children,expansionCallback,animationDuration,initialOpenPanelValue} = Object.assign({
            "children" : new core.DartList.literal<ExpansionPanelRadio>(),
            "animationDuration" : lib5.properties.kThemeAnimationDuration}, _namedArguments );
        this._allowOnlyOnePanelOpen = false;
        this.initialOpenPanelValue = null;
        this._allowOnlyOnePanelOpen = true;
        this.assert = assert;
        this.children = children;
        this.expansionCallback = expansionCallback;
        this.animationDuration = animationDuration;
        this.initialOpenPanelValue = initialOpenPanelValue;
    }
    static radio : new(_namedArguments? : {key? : lib3.Key,children? : core.DartList<ExpansionPanel>,expansionCallback? : (panelIndex : number,isExpanded : boolean) => any,animationDuration? : core.DartDuration,initialOpenPanelValue? : any}) => ExpansionPanelList;

     : any;

     : any;

    _allowOnlyOnePanelOpen;
    super;

     : any;

     : any;

    children : core.DartList<ExpansionPanel>;

    expansionCallback : (panelIndex : number,isExpanded : boolean) => any;

    animationDuration : core.DartDuration;

    _allowOnlyOnePanelOpen : boolean;

    initialOpenPanelValue : core.DartObject;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : any {
        return _ExpansionPanelListState();
    }
}

export namespace _ExpansionPanelListState {
    export type Constructors = '_ExpansionPanelListState';
    export type Interface = Omit<_ExpansionPanelListState, Constructors>;
}
@DartClass
export class _ExpansionPanelListState extends any {
    _currentOpenPanel : ExpansionPanelRadio;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        if (widget._allowOnlyOnePanelOpen) {
            /* TODO (AssertStatementImpl) : assert (_allIdentifiersUnique(), 'All object identifiers are not unique!'); */;
            for(let child of widget.children) {
                if (widget.initialOpenPanelValue != null && op(Op.EQUALS,child.value,widget.initialOpenPanelValue)) this._currentOpenPanel = child;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : ExpansionPanelList) : any {
        super.didUpdateWidget(oldWidget);
        if (widget._allowOnlyOnePanelOpen) {
            /* TODO (AssertStatementImpl) : assert (_allIdentifiersUnique(), 'All object identifiers are not unique!'); */;
            for(let newChild of widget.children) {
                if (widget.initialOpenPanelValue != null && op(Op.EQUALS,newChild.value,widget.initialOpenPanelValue)) this._currentOpenPanel = newChild;
            }
        }else if (oldWidget._allowOnlyOnePanelOpen) {
            this._currentOpenPanel = null;
        }
    }
    _allIdentifiersUnique() : boolean {
        let identifierMap : core.DartMap<core.DartObject,boolean> = new core.DartMap.literal([
        ]);
        for(let child of widget.children) {
            identifierMap.set(child.value,true);
        }
        return identifierMap.length == widget.children.length;
    }
    _isChildExpanded(index : number) : boolean {
        if (widget._allowOnlyOnePanelOpen) {
            let radioWidget : ExpansionPanelRadio = op(Op.INDEX,widget.children,index);
            return op(Op.EQUALS,((t)=>(!!t)?t.value:null)(this._currentOpenPanel),radioWidget.value);
        }
        return op(Op.INDEX,widget.children,index).isExpanded;
    }
    _handlePressed(isExpanded : boolean,index : number) : any {
        if (widget.expansionCallback != null) widget.expansionCallback(index,isExpanded);
        if (widget._allowOnlyOnePanelOpen) {
            let pressedChild : ExpansionPanelRadio = op(Op.INDEX,widget.children,index);
            for(let childIndex : number = 0; childIndex < widget.children.length; childIndex += 1){
                let child : ExpansionPanelRadio = op(Op.INDEX,widget.children,childIndex);
                if (widget.expansionCallback != null && childIndex != index && op(Op.EQUALS,child.value,((t)=>(!!t)?t.value:null)(this._currentOpenPanel))) widget.expansionCallback(childIndex,false);
            }
            this._currentOpenPanel = isExpanded ? null : pressedChild;
        }
        setState(() =>  {
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib4.BuildContext) : lib4.Widget {
        let items : core.DartList<lib6.MergeableMaterialItem> = new core.DartList.literal<lib6.MergeableMaterialItem>();
        let kExpandedEdgeInsets : lib7.EdgeInsets = lib7.EdgeInsets.symmetric({
            vertical : properties._kPanelHeaderExpandedHeight - properties._kPanelHeaderCollapsedHeight});
        for(let index : number = 0; index < widget.children.length; index += 1){
            if (this._isChildExpanded(index) && index != 0 && !this._isChildExpanded(index - 1)) items.add(lib6.MaterialGap({
                key : _SaltedKey(context,index * 2 - 1)}));
            let child : ExpansionPanel = op(Op.INDEX,widget.children,index);
            let header : lib10.Row = lib10.Row({
                children : new core.DartList.literal<lib4.Widget>(lib10.Expanded({
                    child : lib11.AnimatedContainer({
                        duration : widget.animationDuration,curve : lib8.Curves.fastOutSlowIn,margin : this._isChildExpanded(index) ? kExpandedEdgeInsets : lib7.EdgeInsets.zero,child : lib10.ConstrainedBox({
                            constraints : new lib9.BoxConstraints({
                                minHeight : properties._kPanelHeaderCollapsedHeight}),child : child.headerBuilder(context,this._isChildExpanded(index))})})}),lib13.Container({
                    margin : new lib7.EdgeInsetsDirectional.only({
                        end : 8.0}),child : lib12.ExpandIcon({
                        isExpanded : this._isChildExpanded(index),padding : new lib7.EdgeInsets.all(16.0),onPressed : (isExpanded : boolean) =>  {
                            return this._handlePressed(isExpanded,index);
                        }})}))});
            items.add(lib6.MaterialSlice({
                key : _SaltedKey(context,index * 2),child : lib10.Column({
                    children : new core.DartList.literal<lib4.Widget>(lib10.MergeSemantics({
                        child : header}),lib14.AnimatedCrossFade({
                        firstChild : lib13.Container({
                            height : 0.0}),secondChild : child.body,firstCurve : new lib8.Interval(0.0,0.6,{
                            curve : lib8.Curves.fastOutSlowIn}),secondCurve : new lib8.Interval(0.4,1.0,{
                            curve : lib8.Curves.fastOutSlowIn}),sizeCurve : lib8.Curves.fastOutSlowIn,crossFadeState : this._isChildExpanded(index) ? lib14.CrossFadeState.showSecond : lib14.CrossFadeState.showFirst,duration : widget.animationDuration}))})}));
            if (this._isChildExpanded(index) && index != op(Op.MINUS,widget.children.length,1)) items.add(lib6.MaterialGap({
                key : _SaltedKey(context,index * 2 + 1)}));
        }
        return lib6.MergeableMaterial({
            hasDividers : true,children : items});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ExpansionPanelListState() {
    }
}

export namespace ExpansionPanelRadio {
    export type Constructors = ExpansionPanel.Constructors | 'ExpansionPanelRadio';
    export type Interface = Omit<ExpansionPanelRadio, Constructors>;
}
@DartClass
export class ExpansionPanelRadio extends ExpansionPanel {
    constructor(_namedArguments? : {value? : core.DartObject,headerBuilder? : (context : lib4.BuildContext,isExpanded : boolean) => lib4.Widget,body? : lib4.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpansionPanelRadio(_namedArguments? : {value? : core.DartObject,headerBuilder? : (context : lib4.BuildContext,isExpanded : boolean) => lib4.Widget,body? : lib4.Widget}) {
        let {value,headerBuilder,body} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.value = value;
    }
     : any;

     : any;

    body;
    headerBuilder;

     : any;

    value : core.DartObject;

}

export class properties {
    private static __$_kPanelHeaderCollapsedHeight : double;
    static get _kPanelHeaderCollapsedHeight() : double { 
        if (this.__$_kPanelHeaderCollapsedHeight===undefined) {
            this.__$_kPanelHeaderCollapsedHeight = 48.0;
        }
        return this.__$_kPanelHeaderCollapsedHeight;
    }
    static set _kPanelHeaderCollapsedHeight(__$value : double)  { 
        this.__$_kPanelHeaderCollapsedHeight = __$value;
    }

    private static __$_kPanelHeaderExpandedHeight : double;
    static get _kPanelHeaderExpandedHeight() : double { 
        if (this.__$_kPanelHeaderExpandedHeight===undefined) {
            this.__$_kPanelHeaderExpandedHeight = 64.0;
        }
        return this.__$_kPanelHeaderExpandedHeight;
    }
    static set _kPanelHeaderExpandedHeight(__$value : double)  { 
        this.__$_kPanelHeaderExpandedHeight = __$value;
    }

}
