/** Library asset:datahedgehog_monitor/lib/lib/widgets/navigation_toolbar.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./basic";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/rendering/custom_layout";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as math from "@dart2ts/dart/math";

export namespace NavigationToolbar {
    export type Constructors = lib3.StatelessWidget.Constructors | 'NavigationToolbar';
    export type Interface = Omit<NavigationToolbar, Constructors>;
}
@DartClass
export class NavigationToolbar extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,leading? : lib3.Widget,middle? : lib3.Widget,trailing? : lib3.Widget,centerMiddle? : boolean,middleSpacing? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NavigationToolbar(_namedArguments? : {key? : lib4.Key,leading? : lib3.Widget,middle? : lib3.Widget,trailing? : lib3.Widget,centerMiddle? : boolean,middleSpacing? : double}) {
        let {key,leading,middle,trailing,centerMiddle,middleSpacing} = Object.assign({
            "centerMiddle" : true,
            "middleSpacing" : NavigationToolbar.kMiddleSpacing}, _namedArguments );
        this.assert = assert;
        this.leading = leading;
        this.middle = middle;
        this.trailing = trailing;
        this.centerMiddle = centerMiddle;
        this.middleSpacing = middleSpacing;
    }
     : any;

     : any;

     : any;

     : any;

    private static __$kMiddleSpacing : double;
    static get kMiddleSpacing() : double { 
        if (this.__$kMiddleSpacing===undefined) {
            this.__$kMiddleSpacing = 16.0;
        }
        return this.__$kMiddleSpacing;
    }

    leading : lib3.Widget;

    middle : lib3.Widget;

    trailing : lib3.Widget;

    centerMiddle : boolean;

    middleSpacing : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasDirectionality(context)); */;
        let children : core.DartList<lib3.Widget> = new core.DartList.literal<lib3.Widget>();
        if (this.leading != null) children.add(lib5.LayoutId({
            id : _ToolbarSlot.leading,child : this.leading}));
        if (this.middle != null) children.add(lib5.LayoutId({
            id : _ToolbarSlot.middle,child : this.middle}));
        if (this.trailing != null) children.add(lib5.LayoutId({
            id : _ToolbarSlot.trailing,child : this.trailing}));
        let textDirection : any = lib5.Directionality.of(context);
        return lib5.CustomMultiChildLayout({
            delegate : _ToolbarLayout({
                centerMiddle : this.centerMiddle,middleSpacing : this.middleSpacing,textDirection : textDirection}),children : children});
    }
}

export enum _ToolbarSlot {
    leading,
    middle,
    trailing
}

export namespace _ToolbarLayout {
    export type Constructors = lib6.MultiChildLayoutDelegate.Constructors | '_ToolbarLayout';
    export type Interface = Omit<_ToolbarLayout, Constructors>;
}
@DartClass
export class _ToolbarLayout extends lib6.MultiChildLayoutDelegate {
    constructor(_namedArguments? : {centerMiddle? : boolean,middleSpacing? : double,textDirection? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ToolbarLayout(_namedArguments? : {centerMiddle? : boolean,middleSpacing? : double,textDirection? : any}) {
        let {centerMiddle,middleSpacing,textDirection} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.centerMiddle = centerMiddle;
        this.middleSpacing = middleSpacing;
        this.textDirection = textDirection;
    }
     : any;

     : any;

    centerMiddle : boolean;

    middleSpacing : double;

    textDirection : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout(size : any) : any {
        let leadingWidth : double = 0.0;
        let trailingWidth : double = 0.0;
        if (this.hasChild(_ToolbarSlot.leading)) {
            let constraints : lib7.BoxConstraints = lib7.BoxConstraints({
                minWidth : 0.0,maxWidth : op(Op.DIVIDE,size.width,3.0),minHeight : size.height,maxHeight : size.height});
            leadingWidth = this.layoutChild(_ToolbarSlot.leading,constraints).width;
            let leadingX : double;
            switch (this.textDirection) {
                case TextDirection.rtl:
                    leadingX = op(Op.MINUS,size.width,leadingWidth);
                    break;
                case TextDirection.ltr:
                    leadingX = 0.0;
                    break;
            }
            this.positionChild(_ToolbarSlot.leading,Offset(leadingX,0.0));
        }
        if (this.hasChild(_ToolbarSlot.trailing)) {
            let constraints : lib7.BoxConstraints = lib7.BoxConstraints.loose(size);
            let trailingSize : any = this.layoutChild(_ToolbarSlot.trailing,constraints);
            let trailingX : double;
            switch (this.textDirection) {
                case TextDirection.rtl:
                    trailingX = 0.0;
                    break;
                case TextDirection.ltr:
                    trailingX = op(Op.MINUS,size.width,trailingSize.width);
                    break;
            }
            let trailingY : double = op(Op.DIVIDE,(op(Op.MINUS,size.height,trailingSize.height)),2.0);
            trailingWidth = trailingSize.width;
            this.positionChild(_ToolbarSlot.trailing,Offset(trailingX,trailingY));
        }
        if (this.hasChild(_ToolbarSlot.middle)) {
            let maxWidth : double = math.max(op(Op.MINUS,op(Op.MINUS,op(Op.MINUS,size.width,leadingWidth),trailingWidth),this.middleSpacing * 2.0),0.0);
            let constraints : lib7.BoxConstraints = lib7.BoxConstraints.loose(size).copyWith({
                maxWidth : maxWidth});
            let middleSize : any = this.layoutChild(_ToolbarSlot.middle,constraints);
            let middleStartMargin : double = leadingWidth + this.middleSpacing;
            let middleStart : double = middleStartMargin;
            let middleY : double = op(Op.DIVIDE,(op(Op.MINUS,size.height,middleSize.height)),2.0);
            if (this.centerMiddle) {
                middleStart = op(Op.DIVIDE,(op(Op.MINUS,size.width,middleSize.width)),2.0);
                if (middleStart + middleSize.width > op(Op.MINUS,size.width,trailingWidth)) middleStart = op(Op.MINUS,op(Op.MINUS,size.width,trailingWidth),middleSize.width);else if (middleStart < middleStartMargin) middleStart = middleStartMargin;
            }
            let middleX : double;
            switch (this.textDirection) {
                case TextDirection.rtl:
                    middleX = op(Op.MINUS,op(Op.MINUS,size.width,middleSize.width),middleStart);
                    break;
                case TextDirection.ltr:
                    middleX = middleStart;
                    break;
            }
            this.positionChild(_ToolbarSlot.middle,Offset(middleX,middleY));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRelayout(oldDelegate : _ToolbarLayout) : boolean {
        return oldDelegate.centerMiddle != this.centerMiddle || oldDelegate.middleSpacing != this.middleSpacing || oldDelegate.textDirection != this.textDirection;
    }
}

export class properties {
}
