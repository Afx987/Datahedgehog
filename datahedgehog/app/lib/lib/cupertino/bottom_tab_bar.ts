/** Library asset:datahedgehog_monitor/lib/lib/cupertino/bottom_tab_bar.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/widgets/preferred_size";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/bottom_navigation_bar_item";
import * as lib7 from "./colors";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/painting/box_border";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib10 from "./theme";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme_data";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/widgets/gesture_detector";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/painting/text_style";

export namespace CupertinoTabBar {
    export type Constructors = lib3.StatelessWidget.Constructors | 'CupertinoTabBar';
    export type Interface = Omit<CupertinoTabBar, Constructors>;
}
@DartClass
@Implements(lib4.PreferredSizeWidget)
export class CupertinoTabBar extends lib3.StatelessWidget implements lib4.PreferredSizeWidget.Interface {
    constructor(_namedArguments? : {key? : lib5.Key,items? : core.DartList<lib6.BottomNavigationBarItem>,onTap? : <T>(value : number) => void,currentIndex? : number,backgroundColor? : any,activeColor? : any,inactiveColor? : any,iconSize? : double,border? : lib8.Border}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoTabBar(_namedArguments? : {key? : lib5.Key,items? : core.DartList<lib6.BottomNavigationBarItem>,onTap? : <T>(value : number) => void,currentIndex? : number,backgroundColor? : any,activeColor? : any,inactiveColor? : any,iconSize? : double,border? : lib8.Border}) {
        let {key,items,onTap,currentIndex,backgroundColor,activeColor,inactiveColor,iconSize,border} = Object.assign({
            "currentIndex" : 0,
            "inactiveColor" : lib7.CupertinoColors.inactiveGray,
            "iconSize" : 30.0,
            "border" : new lib8.Border({
                top : lib9.BorderSide({
                    color : properties._kDefaultTabBarBorderColor,width : 0.0,style : lib9.BorderStyle.solid})})}, _namedArguments );
        this.assert = assert;
        this.items = items;
        this.onTap = onTap;
        this.currentIndex = currentIndex;
        this.backgroundColor = backgroundColor;
        this.activeColor = activeColor;
        this.inactiveColor = inactiveColor;
        this.iconSize = iconSize;
        this.border = border;
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

    items : core.DartList<lib6.BottomNavigationBarItem>;

    onTap : <T>(value : number) => void;

    currentIndex : number;

    backgroundColor : any;

    activeColor : any;

    inactiveColor : any;

    iconSize : double;

    border : lib8.Border;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get preferredSize() : any {
        return new bare.createInstance(any,null,properties._kTabBarHeight);
    }
    opaque(context : lib3.BuildContext) : boolean {
        let backgroundColor : any = (this.backgroundColor || lib10.CupertinoTheme.of(context).barBackgroundColor);
        return op(Op.EQUALS,backgroundColor.alpha,255);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let bottomPadding : double = lib11.MediaQuery.of(context).padding.bottom;
        let result : lib3.Widget = lib19.DecoratedBox({
            decoration : lib12.BoxDecoration({
                border : this.border,color : (this.backgroundColor || lib10.CupertinoTheme.of(context).barBackgroundColor)}),child : lib16.SizedBox({
                height : properties._kTabBarHeight + bottomPadding,child : lib18.IconTheme.merge({
                    data : lib13.IconThemeData({
                        color : this.inactiveColor,size : this.iconSize}),child : lib17.DefaultTextStyle({
                        style : lib10.CupertinoTheme.of(context).textTheme.tabLabelTextStyle.copyWith({
                            color : this.inactiveColor}),child : lib16.Padding({
                            padding : lib14.EdgeInsets.only({
                                bottom : bottomPadding}),child : lib16.Row({
                                crossAxisAlignment : lib15.CrossAxisAlignment.end,children : this._buildTabItems(context)})})})})})});
        if (!this.opaque(context)) {
            result = lib16.ClipRect({
                child : lib16.BackdropFilter({
                    filter : ImageFilter.blur({
                        sigmaX : 10.0,sigmaY : 10.0}),child : result})});
        }
        return result;
    }
    _buildTabItems(context : lib3.BuildContext) : core.DartList<lib3.Widget> {
        let result : core.DartList<lib3.Widget> = new core.DartList.literal<lib3.Widget>();
        for(let index : number = 0; index < this.items.length; index += 1){
            let active : boolean = index == this.currentIndex;
            result.add(this._wrapActiveItem(context,lib16.Expanded({
                child : lib16.Semantics({
                    selected : active,hint : `tab, ${index + 1} of ${this.items.length}`,child : lib20.GestureDetector({
                        behavior : HitTestBehavior.opaque,onTap : op(Op.EQUALS,this.onTap,null) ? null : () =>  {
                            this.onTap(index);
                        },child : lib16.Padding({
                            padding : new lib14.EdgeInsets.only({
                                bottom : 4.0}),child : lib16.Column({
                                mainAxisAlignment : lib15.MainAxisAlignment.end,children : this._buildSingleTabItem(this.items[index],active)})})})})}),{
                active : active}));
        }
        return result;
    }
    _buildSingleTabItem(item : lib6.BottomNavigationBarItem,active : boolean) : core.DartList<lib3.Widget> {
        let components : core.DartList<lib3.Widget> = new core.DartList.literal<lib3.Widget>(lib16.Expanded({
            child : lib16.Center({
                child : active ? item.activeIcon : item.icon})}));
        if (item.title != null) {
            components.add(item.title);
        }
        return components;
    }
    _wrapActiveItem(context : lib3.BuildContext,item : lib3.Widget,_namedArguments? : {active? : boolean}) : lib3.Widget {
        let {active} = Object.assign({
        }, _namedArguments );
        if (!active) return item;
        let activeColor : any = (this.activeColor || lib10.CupertinoTheme.of(context).primaryColor);
        return lib18.IconTheme.merge({
            data : lib13.IconThemeData({
                color : activeColor}),child : lib17.DefaultTextStyle.merge({
                style : lib21.TextStyle({
                    color : activeColor}),child : item})});
    }
    copyWith(_namedArguments? : {key? : lib5.Key,items? : core.DartList<lib6.BottomNavigationBarItem>,backgroundColor? : any,activeColor? : any,inactiveColor? : any,iconSize? : any,border? : lib8.Border,currentIndex? : number,onTap? : <T>(value : number) => void}) : CupertinoTabBar {
        let {key,items,backgroundColor,activeColor,inactiveColor,iconSize,border,currentIndex,onTap} = Object.assign({
        }, _namedArguments );
        return CupertinoTabBar({
            key : (key || this.key),items : (items || this.items),backgroundColor : (backgroundColor || this.backgroundColor),activeColor : (activeColor || this.activeColor),inactiveColor : (inactiveColor || this.inactiveColor),iconSize : (iconSize || this.iconSize),border : (border || this.border),currentIndex : (currentIndex || this.currentIndex),onTap : (onTap || this.onTap)});
    }
}

export class properties {
    private static __$_kTabBarHeight : double;
    static get _kTabBarHeight() : double { 
        if (this.__$_kTabBarHeight===undefined) {
            this.__$_kTabBarHeight = 50.0;
        }
        return this.__$_kTabBarHeight;
    }
    static set _kTabBarHeight(__$value : double)  { 
        this.__$_kTabBarHeight = __$value;
    }

    private static __$_kDefaultTabBarBorderColor : any;
    static get _kDefaultTabBarBorderColor() : any { 
        if (this.__$_kDefaultTabBarBorderColor===undefined) {
            this.__$_kDefaultTabBarBorderColor = Color(1275068416);
        }
        return this.__$_kDefaultTabBarBorderColor;
    }
    static set _kDefaultTabBarBorderColor(__$value : any)  { 
        this.__$_kDefaultTabBarBorderColor = __$value;
    }

}
