/** Library asset:datahedgehog_monitor/lib/lib/material/list_tile.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib7 from "./divider";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/painting/box_border";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/painting/decoration";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/rendering/proxy_box";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib13 from "./theme_data";
import * as lib14 from "./colors";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib16 from "./theme";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme_data";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme";
import * as lib19 from "./constants";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/widgets/implicit_animations";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/widgets/safe_area";
import * as lib22 from "./ink_well";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as math from "@dart2ts/dart/math";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib27 from "@dart2ts.packages/flutter/lib/src/rendering/view";
import * as lib28 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";

export enum ListTileStyle {
    list,
    drawer
}

export namespace ListTileTheme {
    export type Constructors = lib3.InheritedWidget.Constructors | 'ListTileTheme';
    export type Interface = Omit<ListTileTheme, Constructors>;
}
@DartClass
export class ListTileTheme extends lib3.InheritedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,dense? : boolean,style? : ListTileStyle,selectedColor? : any,iconColor? : any,textColor? : any,contentPadding? : lib5.EdgeInsetsGeometry,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListTileTheme(_namedArguments? : {key? : lib4.Key,dense? : boolean,style? : ListTileStyle,selectedColor? : any,iconColor? : any,textColor? : any,contentPadding? : lib5.EdgeInsetsGeometry,child? : lib3.Widget}) {
        let {key,dense,style,selectedColor,iconColor,textColor,contentPadding,child} = Object.assign({
            "dense" : false,
            "style" : ListTileStyle.list}, _namedArguments );
        super.InheritedWidget({
            key : key,child : child});
        this.dense = dense;
        this.style = style;
        this.selectedColor = selectedColor;
        this.iconColor = iconColor;
        this.textColor = textColor;
        this.contentPadding = contentPadding;
    }
    static merge(_namedArguments? : {key? : lib4.Key,dense? : boolean,style? : ListTileStyle,selectedColor? : any,iconColor? : any,textColor? : any,contentPadding? : lib5.EdgeInsetsGeometry,child? : lib3.Widget}) : lib3.Widget {
        let {key,dense,style,selectedColor,iconColor,textColor,contentPadding,child} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        return lib6.Builder({
            builder : (context : lib3.BuildContext) =>  {
                let parent : ListTileTheme = ListTileTheme.of(context);
                return ListTileTheme({
                    key : key,dense : (dense || parent.dense),style : (style || parent.style),selectedColor : (selectedColor || parent.selectedColor),iconColor : (iconColor || parent.iconColor),textColor : (textColor || parent.textColor),contentPadding : (contentPadding || parent.contentPadding),child : child});
            }});
    }
    dense : boolean;

    style : ListTileStyle;

    selectedColor : any;

    iconColor : any;

    textColor : any;

    contentPadding : lib5.EdgeInsetsGeometry;

    static of(context : lib3.BuildContext) : ListTileTheme {
        let result : ListTileTheme = context.inheritFromWidgetOfExactType(ListTileTheme);
        return (result || new ListTileTheme());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(oldWidget : ListTileTheme) : boolean {
        return this.dense != oldWidget.dense || this.style != oldWidget.style || this.selectedColor != oldWidget.selectedColor || this.iconColor != oldWidget.iconColor || this.textColor != oldWidget.textColor || this.contentPadding != oldWidget.contentPadding;
    }
}

export enum ListTileControlAffinity {
    leading,
    trailing,
    platform
}

export namespace ListTile {
    export type Constructors = lib3.StatelessWidget.Constructors | 'ListTile';
    export type Interface = Omit<ListTile, Constructors>;
}
@DartClass
export class ListTile extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,leading? : lib3.Widget,title? : lib3.Widget,subtitle? : lib3.Widget,trailing? : lib3.Widget,isThreeLine? : boolean,dense? : boolean,contentPadding? : lib5.EdgeInsetsGeometry,enabled? : boolean,onTap? : () => any,onLongPress? : () => void,selected? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListTile(_namedArguments? : {key? : lib4.Key,leading? : lib3.Widget,title? : lib3.Widget,subtitle? : lib3.Widget,trailing? : lib3.Widget,isThreeLine? : boolean,dense? : boolean,contentPadding? : lib5.EdgeInsetsGeometry,enabled? : boolean,onTap? : () => any,onLongPress? : () => void,selected? : boolean}) {
        let {key,leading,title,subtitle,trailing,isThreeLine,dense,contentPadding,enabled,onTap,onLongPress,selected} = Object.assign({
            "isThreeLine" : false,
            "enabled" : true,
            "selected" : false}, _namedArguments );
        this.assert = assert;
        this.leading = leading;
        this.title = title;
        this.subtitle = subtitle;
        this.trailing = trailing;
        this.isThreeLine = isThreeLine;
        this.dense = dense;
        this.contentPadding = contentPadding;
        this.enabled = enabled;
        this.onTap = onTap;
        this.onLongPress = onLongPress;
        this.selected = selected;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    leading : lib3.Widget;

    title : lib3.Widget;

    subtitle : lib3.Widget;

    trailing : lib3.Widget;

    isThreeLine : boolean;

    dense : boolean;

    contentPadding : lib5.EdgeInsetsGeometry;

    enabled : boolean;

    onTap : () => any;

    onLongPress : () => void;

    selected : boolean;

    static divideTiles(_namedArguments? : {context? : lib3.BuildContext,tiles? : core.DartIterable<lib3.Widget>,color? : any}) : core.DartIterable<lib3.Widget> { 
        return core.iter<lib3.Widget>(()=>(function*()  {
            let {context,tiles,color} = Object.assign({
            }, _namedArguments );
            /* TODO (AssertStatementImpl) : assert (tiles != null); */;
            /* TODO (AssertStatementImpl) : assert (color != null || context != null); */;
            let iterator : core.DartIterator<lib3.Widget> = tiles.iterator;
            let isNotEmpty : boolean = iterator.moveNext();
            let decoration : lib10.Decoration = lib9.BoxDecoration({
                border : lib8.Border({
                    bottom : lib7.Divider.createBorderSide(context,{
                        color : color})})});
            let tile : lib3.Widget = iterator.current;
            while (iterator.moveNext()){
                yield lib12.DecoratedBox({
                    position : lib11.DecorationPosition.foreground,decoration : decoration,child : tile});
                tile = iterator.current;
            }
            if (isNotEmpty) yield tile;
        }).call(this));
    }

    _iconColor(theme : lib13.ThemeData,tileTheme : ListTileTheme) : any {
        if (!this.enabled) return theme.disabledColor;
        if (this.selected && ((t)=>(!!t)?t.selectedColor:null)(tileTheme) != null) return tileTheme.selectedColor;
        if (!this.selected && ((t)=>(!!t)?t.iconColor:null)(tileTheme) != null) return tileTheme.iconColor;
        switch (theme.brightness) {
            case Brightness.light:
                return this.selected ? theme.primaryColor : lib14.Colors.black45;
            case Brightness.dark:
                return this.selected ? theme.accentColor : null;
        }
        /* TODO (AssertStatementImpl) : assert (theme.brightness != null); */;
        return null;
    }
    _textColor(theme : lib13.ThemeData,tileTheme : ListTileTheme,defaultColor : any) : any {
        if (!this.enabled) return theme.disabledColor;
        if (this.selected && ((t)=>(!!t)?t.selectedColor:null)(tileTheme) != null) return tileTheme.selectedColor;
        if (!this.selected && ((t)=>(!!t)?t.textColor:null)(tileTheme) != null) return tileTheme.textColor;
        if (this.selected) {
            switch (theme.brightness) {
                case Brightness.light:
                    return theme.primaryColor;
                case Brightness.dark:
                    return theme.accentColor;
            }
        }
        return defaultColor;
    }
    _isDenseLayout(tileTheme : ListTileTheme) : boolean {
        return this.dense != null ? this.dense : ((((t)=>(!!t)?t.dense:null)(tileTheme) || false));
    }
    _titleTextStyle(theme : lib13.ThemeData,tileTheme : ListTileTheme) : lib15.TextStyle {
        let style : lib15.TextStyle;
        if (tileTheme != null) {
            switch (tileTheme.style) {
                case ListTileStyle.drawer:
                    style = theme.textTheme.body2;
                    break;
                case ListTileStyle.list:
                    style = theme.textTheme.subhead;
                    break;
            }
        }else {
            style = theme.textTheme.subhead;
        }
        let color : any = this._textColor(theme,tileTheme,style.color);
        return this._isDenseLayout(tileTheme) ? style.copyWith({
            fontSize : 13.0,color : color}) : style.copyWith({
            color : color});
    }
    _subtitleTextStyle(theme : lib13.ThemeData,tileTheme : ListTileTheme) : lib15.TextStyle {
        let style : lib15.TextStyle = theme.textTheme.body1;
        let color : any = this._textColor(theme,tileTheme,theme.textTheme.caption.color);
        return this._isDenseLayout(tileTheme) ? style.copyWith({
            color : color,fontSize : 12.0}) : style.copyWith({
            color : color});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterial(context)); */;
        let theme : lib13.ThemeData = lib16.Theme.of(context);
        let tileTheme : ListTileTheme = ListTileTheme.of(context);
        let iconThemeData : lib17.IconThemeData;
        if (this.leading != null || this.trailing != null) iconThemeData = lib17.IconThemeData({
            color : this._iconColor(theme,tileTheme)});
        let leadingIcon : lib3.Widget;
        if (this.leading != null) {
            leadingIcon = lib18.IconTheme.merge({
                data : iconThemeData,child : this.leading});
        }
        let titleStyle : lib15.TextStyle = this._titleTextStyle(theme,tileTheme);
        let titleText : lib3.Widget = lib20.AnimatedDefaultTextStyle({
            style : titleStyle,duration : lib19.properties.kThemeChangeDuration,child : (this.title || new lib6.SizedBox())});
        let subtitleText : lib3.Widget;
        let subtitleStyle : lib15.TextStyle;
        if (this.subtitle != null) {
            subtitleStyle = this._subtitleTextStyle(theme,tileTheme);
            subtitleText = lib20.AnimatedDefaultTextStyle({
                style : subtitleStyle,duration : lib19.properties.kThemeChangeDuration,child : this.subtitle});
        }
        let trailingIcon : lib3.Widget;
        if (this.trailing != null) {
            trailingIcon = lib18.IconTheme.merge({
                data : iconThemeData,child : this.trailing});
        }
        let _defaultContentPadding : lib5.EdgeInsets = lib5.EdgeInsets.symmetric({
            horizontal : 16.0});
        let textDirection : any = lib6.Directionality.of(context);
        let resolvedContentPadding : lib5.EdgeInsets = ((((_741_)=>(!!_741_)?_741_.resolve(textDirection):null)(this.contentPadding) || ((_742_)=>(!!_742_)?_742_.resolve(textDirection):null)(((t)=>(!!t)?t.contentPadding:null)(tileTheme))) || _defaultContentPadding);
        return lib22.InkWell({
            onTap : this.enabled ? this.onTap : null,onLongPress : this.enabled ? this.onLongPress : null,child : lib6.Semantics({
                selected : this.selected,enabled : this.enabled,child : lib21.SafeArea({
                    top : false,bottom : false,minimum : resolvedContentPadding,child : _ListTile({
                        leading : leadingIcon,title : titleText,subtitle : subtitleText,trailing : trailingIcon,isDense : this._isDenseLayout(tileTheme),isThreeLine : this.isThreeLine,textDirection : textDirection,titleBaselineType : titleStyle.textBaseline,subtitleBaselineType : ((t)=>(!!t)?t.textBaseline:null)(subtitleStyle)})})})});
    }
}

export enum _ListTileSlot {
    leading,
    title,
    subtitle,
    trailing
}

export namespace _ListTile {
    export type Constructors = lib3.RenderObjectWidget.Constructors | '_ListTile';
    export type Interface = Omit<_ListTile, Constructors>;
}
@DartClass
export class _ListTile extends lib3.RenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,leading? : lib3.Widget,title? : lib3.Widget,subtitle? : lib3.Widget,trailing? : lib3.Widget,isThreeLine? : boolean,isDense? : boolean,textDirection? : any,titleBaselineType? : any,subtitleBaselineType? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ListTile(_namedArguments? : {key? : lib4.Key,leading? : lib3.Widget,title? : lib3.Widget,subtitle? : lib3.Widget,trailing? : lib3.Widget,isThreeLine? : boolean,isDense? : boolean,textDirection? : any,titleBaselineType? : any,subtitleBaselineType? : any}) {
        let {key,leading,title,subtitle,trailing,isThreeLine,isDense,textDirection,titleBaselineType,subtitleBaselineType} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.leading = leading;
        this.title = title;
        this.subtitle = subtitle;
        this.trailing = trailing;
        this.isThreeLine = isThreeLine;
        this.isDense = isDense;
        this.textDirection = textDirection;
        this.titleBaselineType = titleBaselineType;
        this.subtitleBaselineType = subtitleBaselineType;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    leading : lib3.Widget;

    title : lib3.Widget;

    subtitle : lib3.Widget;

    trailing : lib3.Widget;

    isThreeLine : boolean;

    isDense : boolean;

    textDirection : any;

    titleBaselineType : any;

    subtitleBaselineType : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createElement() : _ListTileElement {
        return _ListTileElement(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : _RenderListTile {
        return _RenderListTile({
            isThreeLine : this.isThreeLine,isDense : this.isDense,textDirection : this.textDirection,titleBaselineType : this.titleBaselineType,subtitleBaselineType : this.subtitleBaselineType});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : _RenderListTile) : any {
        ((_) : _RenderListTile =>  {
            {
                _.isThreeLine = this.isThreeLine;
                _.isDense = this.isDense;
                _.textDirection = this.textDirection;
                _.titleBaselineType = this.titleBaselineType;
                _.subtitleBaselineType = this.subtitleBaselineType;
                return _;
            }
        })(renderObject);
    }
}

export namespace _ListTileElement {
    export type Constructors = lib3.RenderObjectElement.Constructors | '_ListTileElement';
    export type Interface = Omit<_ListTileElement, Constructors>;
}
@DartClass
export class _ListTileElement extends lib3.RenderObjectElement {
    constructor(widget : _ListTile) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ListTileElement(widget : _ListTile) {
        this.slotToChild = new core.DartMap.literal([
        ]);
        this.childToSlot = new core.DartMap.literal([
        ]);
        super.RenderObjectElement(widget);
    }
    slotToChild : core.DartMap<_ListTileSlot,lib3.Element>;

    childToSlot : core.DartMap<lib3.Element,_ListTileSlot>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : _ListTile {
        return super.widget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get renderObject() : _RenderListTile {
        return super.renderObject;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : (element : lib3.Element) => any) : any {
        this.slotToChild.values.forEach(visitor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forgetChild(child : lib3.Element) : any {
        /* TODO (AssertStatementImpl) : assert (slotToChild.values.contains(child)); */;
        /* TODO (AssertStatementImpl) : assert (childToSlot.keys.contains(child)); */;
        let slot : _ListTileSlot = this.childToSlot.get(child);
        this.childToSlot.remove(child);
        this.slotToChild.remove(slot);
    }
    _mountChild(widget : lib3.Widget,slot : _ListTileSlot) : any {
        let oldChild : lib3.Element = this.slotToChild.get(slot);
        let newChild : lib3.Element = this.updateChild(oldChild,widget,slot);
        if (oldChild != null) {
            this.slotToChild.remove(slot);
            this.childToSlot.remove(oldChild);
        }
        if (newChild != null) {
            this.slotToChild.set(slot,newChild);
            this.childToSlot.set(newChild,slot);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mount(parent : lib3.Element,newSlot : any) : any {
        super.mount(parent,newSlot);
        this._mountChild(this.widget.leading,_ListTileSlot.leading);
        this._mountChild(this.widget.title,_ListTileSlot.title);
        this._mountChild(this.widget.subtitle,_ListTileSlot.subtitle);
        this._mountChild(this.widget.trailing,_ListTileSlot.trailing);
    }
    _updateChild(widget : lib3.Widget,slot : _ListTileSlot) : any {
        let oldChild : lib3.Element = this.slotToChild.get(slot);
        let newChild : lib3.Element = this.updateChild(oldChild,widget,slot);
        if (oldChild != null) {
            this.childToSlot.remove(oldChild);
            this.slotToChild.remove(slot);
        }
        if (newChild != null) {
            this.slotToChild.set(slot,newChild);
            this.childToSlot.set(newChild,slot);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    update(newWidget : _ListTile) : any {
        super.update(newWidget);
        /* TODO (AssertStatementImpl) : assert (widget == newWidget); */;
        this._updateChild(this.widget.leading,_ListTileSlot.leading);
        this._updateChild(this.widget.title,_ListTileSlot.title);
        this._updateChild(this.widget.subtitle,_ListTileSlot.subtitle);
        this._updateChild(this.widget.trailing,_ListTileSlot.trailing);
    }
    _updateRenderObject(child : lib23.RenderObject,slot : _ListTileSlot) : any {
        switch (slot) {
            case _ListTileSlot.leading:
                this.renderObject.leading = child;
                break;
            case _ListTileSlot.title:
                this.renderObject.title = child;
                break;
            case _ListTileSlot.subtitle:
                this.renderObject.subtitle = child;
                break;
            case _ListTileSlot.trailing:
                this.renderObject.trailing = child;
                break;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    insertChildRenderObject(child : lib23.RenderObject,slotValue : any) : any {
        /* TODO (AssertStatementImpl) : assert (child is RenderBox); */;
        /* TODO (AssertStatementImpl) : assert (slotValue is _ListTileSlot); */;
        let slot : _ListTileSlot = slotValue;
        this._updateRenderObject(child,slot);
        /* TODO (AssertStatementImpl) : assert (renderObject.childToSlot.keys.contains(child)); */;
        /* TODO (AssertStatementImpl) : assert (renderObject.slotToChild.keys.contains(slot)); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeChildRenderObject(child : lib23.RenderObject) : any {
        /* TODO (AssertStatementImpl) : assert (child is RenderBox); */;
        /* TODO (AssertStatementImpl) : assert (renderObject.childToSlot.keys.contains(child)); */;
        this._updateRenderObject(null,this.renderObject.childToSlot.get(child));
        /* TODO (AssertStatementImpl) : assert (!renderObject.childToSlot.keys.contains(child)); */;
        /* TODO (AssertStatementImpl) : assert (!renderObject.slotToChild.keys.contains(slot)); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveChildRenderObject(child : lib23.RenderObject,slotValue : any) : any {
        /* TODO (AssertStatementImpl) : assert (false, 'not reachable'); */;
    }
}

export namespace _RenderListTile {
    export type Constructors = '_RenderListTile';
    export type Interface = Omit<_RenderListTile, Constructors>;
}
@DartClass
export class _RenderListTile extends any {
    constructor(_namedArguments? : {isDense? : boolean,isThreeLine? : boolean,textDirection? : any,titleBaselineType? : any,subtitleBaselineType? : any}) {
    }
    @defaultConstructor
    _RenderListTile(_namedArguments? : {isDense? : boolean,isThreeLine? : boolean,textDirection? : any,titleBaselineType? : any,subtitleBaselineType? : any}) {
        let {isDense,isThreeLine,textDirection,titleBaselineType,subtitleBaselineType} = Object.assign({
        }, _namedArguments );
        this._isDense = this.isDense;
        this._isThreeLine = this.isThreeLine;
        this._textDirection = this.textDirection;
        this._titleBaselineType = this.titleBaselineType;
        this._subtitleBaselineType = this.subtitleBaselineType;
        this.slotToChild = new core.DartMap.literal([
        ]);
        this.childToSlot = new core.DartMap.literal([
        ]);
        this.assert = assert;
    }
     : any;

     : any;

     : any;

     : any;

    _isDense;
    _isThreeLine;
    _textDirection;
    _titleBaselineType;
    _subtitleBaselineType;

    private static __$_minLeadingWidth : double;
    static get _minLeadingWidth() : double { 
        if (this.__$_minLeadingWidth===undefined) {
            this.__$_minLeadingWidth = 40.0;
        }
        return this.__$_minLeadingWidth;
    }

    private static __$_horizontalTitleGap : double;
    static get _horizontalTitleGap() : double { 
        if (this.__$_horizontalTitleGap===undefined) {
            this.__$_horizontalTitleGap = 16.0;
        }
        return this.__$_horizontalTitleGap;
    }

    private static __$_minVerticalPadding : double;
    static get _minVerticalPadding() : double { 
        if (this.__$_minVerticalPadding===undefined) {
            this.__$_minVerticalPadding = 4.0;
        }
        return this.__$_minVerticalPadding;
    }

    slotToChild : core.DartMap<_ListTileSlot,any>;

    childToSlot : core.DartMap<any,_ListTileSlot>;

    _updateChild(oldChild : any,newChild : any,slot : _ListTileSlot) : any {
        if (oldChild != null) {
            dropChild(oldChild);
            this.childToSlot.remove(oldChild);
            this.slotToChild.remove(slot);
        }
        if (newChild != null) {
            this.childToSlot.set(newChild,slot);
            this.slotToChild.set(slot,newChild);
            adoptChild(newChild);
        }
        return newChild;
    }
    _leading : any;

    get leading() : any {
        return this._leading;
    }
    set leading(value : any) {
        this._leading = this._updateChild(this._leading,value,_ListTileSlot.leading);
    }
    _title : any;

    get title() : any {
        return this._title;
    }
    set title(value : any) {
        this._title = this._updateChild(this._title,value,_ListTileSlot.title);
    }
    _subtitle : any;

    get subtitle() : any {
        return this._subtitle;
    }
    set subtitle(value : any) {
        this._subtitle = this._updateChild(this._subtitle,value,_ListTileSlot.subtitle);
    }
    _trailing : any;

    get trailing() : any {
        return this._trailing;
    }
    set trailing(value : any) {
        this._trailing = this._updateChild(this._trailing,value,_ListTileSlot.trailing);
    }
    get _children() : core.DartIterable<any> { 
        return core.iter<any>(()=>(function*()  {
            if (this.leading != null) yield this.leading;
            if (this.title != null) yield this.title;
            if (this.subtitle != null) yield this.subtitle;
            if (this.trailing != null) yield this.trailing;
        }).call(this));
    }

    get isDense() : boolean {
        return this._isDense;
    }
    _isDense : boolean;

    set isDense(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._isDense,value)) return;
        this._isDense = value;
        markNeedsLayout();
    }
    get isThreeLine() : boolean {
        return this._isThreeLine;
    }
    _isThreeLine : boolean;

    set isThreeLine(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._isThreeLine,value)) return;
        this._isThreeLine = value;
        markNeedsLayout();
    }
    get textDirection() : any {
        return this._textDirection;
    }
    _textDirection : any;

    set textDirection(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._textDirection,value)) return;
        this._textDirection = value;
        markNeedsLayout();
    }
    get titleBaselineType() : any {
        return this._titleBaselineType;
    }
    _titleBaselineType : any;

    set titleBaselineType(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._titleBaselineType,value)) return;
        this._titleBaselineType = value;
        markNeedsLayout();
    }
    get subtitleBaselineType() : any {
        return this._subtitleBaselineType;
    }
    _subtitleBaselineType : any;

    set subtitleBaselineType(value : any) {
        if (op(Op.EQUALS,this._subtitleBaselineType,value)) return;
        this._subtitleBaselineType = value;
        markNeedsLayout();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    attach(owner : lib23.PipelineOwner) : any {
        super.attach(owner);
        for(let child of this._children) child.attach(owner);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    detach() : any {
        super.detach();
        for(let child of this._children) child.detach();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    redepthChildren() : any {
        this._children.forEach(redepthChild);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : (child : any) => any) : any {
        this._children.forEach(visitor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugDescribeChildren() : core.DartList<lib24.DiagnosticsNode> {
        let value : core.DartList<lib24.DiagnosticsNode> = new core.DartList.literal<lib24.DiagnosticsNode>();
        var add : (child : any,name : string) => any = (child : any,name : string) : any =>  {
            if (child != null) value.add(child.toDiagnosticsNode({
                name : name}));
        };
        add(this.leading,'leading');
        add(this.title,'title');
        add(this.subtitle,'subtitle');
        add(this.trailing,'trailing');
        return value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sizedByParent() : boolean {
        return false;
    }
    static _minWidth(box : any,height : double) : double {
        return op(Op.EQUALS,box,null) ? 0.0 : box.getMinIntrinsicWidth(height);
    }
    static _maxWidth(box : any,height : double) : double {
        return op(Op.EQUALS,box,null) ? 0.0 : box.getMaxIntrinsicWidth(height);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicWidth(height : double) : double {
        let leadingWidth : double = this.leading != null ? op(Op.PLUS,math.max(this.leading.getMinIntrinsicWidth(height),_RenderListTile._minLeadingWidth),_RenderListTile._horizontalTitleGap) : 0.0;
        return leadingWidth + math.max(_RenderListTile._minWidth(this.title,height),_RenderListTile._minWidth(this.subtitle,height)) + _RenderListTile._maxWidth(this.trailing,height);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        let leadingWidth : double = this.leading != null ? op(Op.PLUS,math.max(this.leading.getMaxIntrinsicWidth(height),_RenderListTile._minLeadingWidth),_RenderListTile._horizontalTitleGap) : 0.0;
        return leadingWidth + math.max(_RenderListTile._maxWidth(this.title,height),_RenderListTile._maxWidth(this.subtitle,height)) + _RenderListTile._maxWidth(this.trailing,height);
    }
    get _defaultTileHeight() : double {
        let hasSubtitle : boolean = this.subtitle != null;
        let isTwoLine : boolean = !this.isThreeLine && hasSubtitle;
        let isOneLine : boolean = !this.isThreeLine && !hasSubtitle;
        if (isOneLine) return this.isDense ? 48.0 : 56.0;
        if (isTwoLine) return this.isDense ? 64.0 : 72.0;
        return this.isDense ? 76.0 : 88.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicHeight(width : double) : double {
        return math.max(this._defaultTileHeight,op(Op.PLUS,this.title.getMinIntrinsicHeight(width),((((_743_)=>(!!_743_)?_743_.getMinIntrinsicHeight(width):null)(this.subtitle) || 0.0))));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicHeight(width : double) : double {
        return this.computeMinIntrinsicHeight(width);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDistanceToActualBaseline(baseline : any) : double {
        /* TODO (AssertStatementImpl) : assert (title != null); */;
        let parentData : lib26.BoxParentData = this.title.parentData;
        return op(Op.PLUS,parentData.offset.dy,this.title.getDistanceToActualBaseline(baseline));
    }
    static _boxBaseline(box : any,baseline : any) : double {
        return box.getDistanceToBaseline(baseline);
    }
    static _layoutBox(box : any,constraints : lib26.BoxConstraints) : any {
        if (op(Op.EQUALS,box,null)) return Size.zero;
        box.layout(constraints,{
            parentUsesSize : true});
        return box.size;
    }
    static _positionBox(box : any,offset : any) : any {
        let parentData : lib26.BoxParentData = box.parentData;
        parentData.offset = offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        let hasLeading : boolean = this.leading != null;
        let hasSubtitle : boolean = this.subtitle != null;
        let hasTrailing : boolean = this.trailing != null;
        let isTwoLine : boolean = !this.isThreeLine && hasSubtitle;
        let isOneLine : boolean = !this.isThreeLine && !hasSubtitle;
        let looseConstraints : lib26.BoxConstraints = constraints.loosen();
        let tileWidth : double = looseConstraints.maxWidth;
        let leadingSize : any = _RenderListTile._layoutBox(this.leading,looseConstraints);
        let trailingSize : any = _RenderListTile._layoutBox(this.trailing,looseConstraints);
        let titleStart : double = hasLeading ? op(Op.PLUS,math.max(_RenderListTile._minLeadingWidth,leadingSize.width),_RenderListTile._horizontalTitleGap) : 0.0;
        let textConstraints : lib26.BoxConstraints = looseConstraints.tighten({
            width : tileWidth - titleStart - (hasTrailing ? op(Op.PLUS,trailingSize.width,_RenderListTile._horizontalTitleGap) : 0.0)});
        let titleSize : any = _RenderListTile._layoutBox(this.title,textConstraints);
        let subtitleSize : any = _RenderListTile._layoutBox(this.subtitle,textConstraints);
        let titleBaseline : double;
        let subtitleBaseline : double;
        if (isTwoLine) {
            titleBaseline = this.isDense ? 28.0 : 32.0;
            subtitleBaseline = this.isDense ? 48.0 : 52.0;
        }else if (this.isThreeLine) {
            titleBaseline = this.isDense ? 22.0 : 28.0;
            subtitleBaseline = this.isDense ? 42.0 : 48.0;
        }else {
            /* TODO (AssertStatementImpl) : assert (isOneLine); */;
        }
        let defaultTileHeight : double = this._defaultTileHeight;
        let tileHeight : double;
        let titleY : double;
        let subtitleY : double;
        if (!hasSubtitle) {
            tileHeight = math.max(defaultTileHeight,op(Op.PLUS,titleSize.height,2.0 * _RenderListTile._minVerticalPadding));
            titleY = (tileHeight - titleSize.height) / 2.0;
        }else {
            /* TODO (AssertStatementImpl) : assert (subtitleBaselineType != null); */;
            titleY = titleBaseline - _RenderListTile._boxBaseline(this.title,this.titleBaselineType);
            subtitleY = subtitleBaseline - _RenderListTile._boxBaseline(this.subtitle,this.subtitleBaselineType);
            tileHeight = defaultTileHeight;
            let titleOverlap : double = titleY + titleSize.height - subtitleY;
            if (titleOverlap > 0.0) {
                titleY -= titleOverlap / 2.0;
                subtitleY += titleOverlap / 2.0;
            }
            if (titleY < _RenderListTile._minVerticalPadding || (subtitleY + subtitleSize.height + _RenderListTile._minVerticalPadding) > tileHeight) {
                tileHeight = op(Op.PLUS,op(Op.PLUS,titleSize.height,subtitleSize.height),2.0 * _RenderListTile._minVerticalPadding);
                titleY = _RenderListTile._minVerticalPadding;
                subtitleY = op(Op.PLUS,titleSize.height,_RenderListTile._minVerticalPadding);
            }
        }
        let leadingY : double;
        let trailingY : double;
        if (tileHeight > 72.0) {
            leadingY = 16.0;
            trailingY = 16.0;
        }else {
            leadingY = math.min((tileHeight - leadingSize.height) / 2.0,16.0);
            trailingY = (tileHeight - trailingSize.height) / 2.0;
        }
        switch (this.textDirection) {
            case TextDirection.rtl:
                {
                    if (hasLeading) _RenderListTile._positionBox(this.leading,Offset(tileWidth - leadingSize.width,leadingY));
                    let titleX : double = hasTrailing ? op(Op.PLUS,trailingSize.width,_RenderListTile._horizontalTitleGap) : 0.0;
                    _RenderListTile._positionBox(this.title,Offset(titleX,titleY));
                    if (hasSubtitle) _RenderListTile._positionBox(this.subtitle,Offset(titleX,subtitleY));
                    if (hasTrailing) _RenderListTile._positionBox(this.trailing,Offset(0.0,trailingY));
                    break;
                }
            case TextDirection.ltr:
                {
                    if (hasLeading) _RenderListTile._positionBox(this.leading,Offset(0.0,leadingY));
                    _RenderListTile._positionBox(this.title,Offset(titleStart,titleY));
                    if (hasSubtitle) _RenderListTile._positionBox(this.subtitle,Offset(titleStart,subtitleY));
                    if (hasTrailing) _RenderListTile._positionBox(this.trailing,Offset(tileWidth - trailingSize.width,trailingY));
                    break;
                }
        }
        lib27.properties.size = constraints.constrain(Size(tileWidth,tileHeight));
        /* TODO (AssertStatementImpl) : assert (size.width == constraints.constrainWidth(tileWidth)); */;
        /* TODO (AssertStatementImpl) : assert (size.height == constraints.constrainHeight(tileHeight)); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib23.PaintingContext,offset : any) : any {
        var doPaint : (child : any) => any = (child : any) : any =>  {
            if (child != null) {
                let parentData : lib26.BoxParentData = child.parentData;
                context.paintChild(child,op(Op.PLUS,parentData.offset,offset));
            }
        };
        doPaint(this.leading);
        doPaint(this.title);
        doPaint(this.subtitle);
        doPaint(this.trailing);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestSelf(position : any) : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestChildren(result : lib28.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (position != null); */;
        for(let child of this._children) {
            let parentData : lib26.BoxParentData = child.parentData;
            if (child.hitTest(result,{
                position : op(Op.MINUS,position,parentData.offset)})) return true;
        }
        return false;
    }
}

export class properties {
}
