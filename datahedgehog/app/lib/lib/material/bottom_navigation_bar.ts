/** Library asset:datahedgehog_monitor/lib/lib/material/bottom_navigation_bar.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/widgets/bottom_navigation_bar_item";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib10 from "./ink_well";
import * as lib11 from "./colors";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme_data";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib18 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/widgets/transitions";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as collection from "@dart2ts/dart/core";
import * as lib24 from "./theme";
import * as lib25 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib27 from "./material_localizations";
import * as lib28 from "./theme_data";
import * as lib29 from "./text_theme";
import * as lib30 from "@dart2ts.packages/flutter/lib/src/rendering/paragraph";
import * as lib31 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as math from "@dart2ts/dart/math";
import * as lib33 from "./constants";
import * as lib34 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib35 from "./material";
import * as lib36 from "@dart2ts.packages/flutter/lib/src/rendering/custom_paint";

export var dispose : () => any = () : any =>  {
    properties.controller.dispose();
};
export enum BottomNavigationBarType {
    fixed,
    shifting
}

export namespace BottomNavigationBar {
    export type Constructors = lib3.StatefulWidget.Constructors | 'BottomNavigationBar' | 'every';
    export type Interface = Omit<BottomNavigationBar, Constructors>;
}
@DartClass
export class BottomNavigationBar extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,items? : core.DartList<lib5.BottomNavigationBarItem>,onTap? : <T>(value : number) => void,currentIndex? : number,type? : BottomNavigationBarType,fixedColor? : any,iconSize? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BottomNavigationBar(_namedArguments? : {key? : lib4.Key,items? : core.DartList<lib5.BottomNavigationBarItem>,onTap? : <T>(value : number) => void,currentIndex? : number,type? : BottomNavigationBarType,fixedColor? : any,iconSize? : double}) {
        let {key,items,onTap,currentIndex,type,fixedColor,iconSize} = Object.assign({
            "currentIndex" : 0,
            "iconSize" : 24.0}, _namedArguments );
        this.type = (this.type || (this.items.length <= 3 ? BottomNavigationBarType.fixed : BottomNavigationBarType.shifting));
        this.assert = assert;
        this.items = items;
        this.onTap = onTap;
        this.currentIndex = currentIndex;
        this.fixedColor = fixedColor;
        this.iconSize = iconSize;
    }
     : any;

     : any;

    @namedConstructor
    every( : (item : lib5.BottomNavigationBarItem) => any, : any) {
        this.type = (this.type || (this.items.length <= 3 ? BottomNavigationBarType.fixed : BottomNavigationBarType.shifting));
        item.title != null;
    }
    static every : new( : any) => BottomNavigationBar;

     : any;

     : any;

     : any;

    type;
    super;

     : any;

     : any;

    items : core.DartList<lib5.BottomNavigationBarItem>;

    onTap : <T>(value : number) => void;

    currentIndex : number;

    type : BottomNavigationBarType;

    fixedColor : any;

    iconSize : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _BottomNavigationBarState {
        return _BottomNavigationBarState();
    }
}

export namespace _BottomNavigationTile {
    export type Constructors = lib3.StatelessWidget.Constructors | '_BottomNavigationTile';
    export type Interface = Omit<_BottomNavigationTile, Constructors>;
}
@DartClass
export class _BottomNavigationTile extends lib3.StatelessWidget {
    constructor(type : BottomNavigationBarType,item : lib5.BottomNavigationBarItem,animation : lib6.Animation<double>,iconSize : double,_namedArguments? : {onTap? : any,colorTween? : lib7.ColorTween,flex? : double,selected? : boolean,indexLabel? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _BottomNavigationTile(type : BottomNavigationBarType,item : lib5.BottomNavigationBarItem,animation : lib6.Animation<double>,iconSize : double,_namedArguments? : {onTap? : any,colorTween? : lib7.ColorTween,flex? : double,selected? : boolean,indexLabel? : string}) {
        let {onTap,colorTween,flex,selected,indexLabel} = Object.assign({
            "selected" : false}, _namedArguments );
        this.assert = assert;
        this.type = type;
        this.item = item;
        this.animation = animation;
        this.iconSize = iconSize;
        this.onTap = onTap;
        this.colorTween = colorTween;
        this.flex = flex;
        this.selected = selected;
        this.indexLabel = indexLabel;
    }
     : any;

    type : BottomNavigationBarType;

    item : lib5.BottomNavigationBarItem;

    animation : lib6.Animation<double>;

    iconSize : double;

    onTap : any;

    colorTween : lib7.ColorTween;

    flex : double;

    selected : boolean;

    indexLabel : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let size : number;
        let label : lib3.Widget;
        switch (this.type) {
            case BottomNavigationBarType.fixed:
                size = 1;
                label = _FixedLabel({
                    colorTween : this.colorTween,animation : this.animation,item : this.item});
                break;
            case BottomNavigationBarType.shifting:
                size = new core.DartDouble((this.flex * 1000.0)).round();
                label = _ShiftingLabel({
                    animation : this.animation,item : this.item});
                break;
        }
        return lib9.Expanded({
            flex : size,child : lib9.Semantics({
                container : true,header : true,selected : this.selected,child : lib9.Stack({
                    children : new core.DartList.literal<lib3.Widget>(lib10.InkResponse({
                        onTap : this.onTap,child : lib9.Column({
                            crossAxisAlignment : lib8.CrossAxisAlignment.center,mainAxisAlignment : lib8.MainAxisAlignment.spaceBetween,mainAxisSize : lib8.MainAxisSize.min,children : new core.DartList.literal<lib3.Widget>(_TileIcon({
                                type : this.type,colorTween : this.colorTween,animation : this.animation,iconSize : this.iconSize,selected : this.selected,item : this.item}),label)})}),lib9.Semantics({
                        label : this.indexLabel}))})})});
    }
}

export namespace _TileIcon {
    export type Constructors = lib3.StatelessWidget.Constructors | '_TileIcon';
    export type Interface = Omit<_TileIcon, Constructors>;
}
@DartClass
export class _TileIcon extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,type? : BottomNavigationBarType,colorTween? : lib7.ColorTween,animation? : lib6.Animation<double>,iconSize? : double,selected? : boolean,item? : lib5.BottomNavigationBarItem}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TileIcon(_namedArguments? : {key? : lib4.Key,type? : BottomNavigationBarType,colorTween? : lib7.ColorTween,animation? : lib6.Animation<double>,iconSize? : double,selected? : boolean,item? : lib5.BottomNavigationBarItem}) {
        let {key,type,colorTween,animation,iconSize,selected,item} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.type = type;
        this.colorTween = colorTween;
        this.animation = animation;
        this.iconSize = iconSize;
        this.selected = selected;
        this.item = item;
    }
    type : BottomNavigationBarType;

    colorTween : lib7.ColorTween;

    animation : lib6.Animation<double>;

    iconSize : double;

    selected : boolean;

    item : lib5.BottomNavigationBarItem;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let tweenStart : double;
        let iconColor : any;
        switch (this.type) {
            case BottomNavigationBarType.fixed:
                tweenStart = 8.0;
                iconColor = this.colorTween.evaluate(this.animation);
                break;
            case BottomNavigationBarType.shifting:
                tweenStart = 16.0;
                iconColor = lib11.Colors.white;
                break;
        }
        return lib9.Align({
            alignment : lib12.Alignment.topCenter,heightFactor : 1.0,child : lib16.Container({
                margin : lib13.EdgeInsets.only({
                    top : lib7.Tween({
                        begin : tweenStart,end : properties._kTopMargin}).evaluate(this.animation)}),child : lib15.IconTheme({
                    data : lib14.IconThemeData({
                        color : iconColor,size : this.iconSize}),child : this.selected ? this.item.activeIcon : this.item.icon})})});
    }
}

export namespace _FixedLabel {
    export type Constructors = lib3.StatelessWidget.Constructors | '_FixedLabel';
    export type Interface = Omit<_FixedLabel, Constructors>;
}
@DartClass
export class _FixedLabel extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,colorTween? : lib7.ColorTween,animation? : lib6.Animation<double>,item? : lib5.BottomNavigationBarItem}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FixedLabel(_namedArguments? : {key? : lib4.Key,colorTween? : lib7.ColorTween,animation? : lib6.Animation<double>,item? : lib5.BottomNavigationBarItem}) {
        let {key,colorTween,animation,item} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.colorTween = colorTween;
        this.animation = animation;
        this.item = item;
    }
    colorTween : lib7.ColorTween;

    animation : lib6.Animation<double>;

    item : lib5.BottomNavigationBarItem;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib9.Align({
            alignment : lib12.Alignment.bottomCenter,heightFactor : 1.0,child : lib16.Container({
                margin : new lib13.EdgeInsets.only({
                    bottom : properties._kBottomMargin}),child : lib19.DefaultTextStyle.merge({
                    style : lib17.TextStyle({
                        fontSize : properties._kActiveFontSize,color : this.colorTween.evaluate(this.animation)}),child : lib9.Transform({
                        transform : lib18.Matrix4.diagonal3(lib18.Vector3.all(lib7.Tween({
                            begin : properties._kInactiveFontSize / properties._kActiveFontSize,end : 1.0}).evaluate(this.animation))),alignment : lib12.Alignment.bottomCenter,child : this.item.title})})})});
    }
}

export namespace _ShiftingLabel {
    export type Constructors = lib3.StatelessWidget.Constructors | '_ShiftingLabel';
    export type Interface = Omit<_ShiftingLabel, Constructors>;
}
@DartClass
export class _ShiftingLabel extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,animation? : lib6.Animation<double>,item? : lib5.BottomNavigationBarItem}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ShiftingLabel(_namedArguments? : {key? : lib4.Key,animation? : lib6.Animation<double>,item? : lib5.BottomNavigationBarItem}) {
        let {key,animation,item} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.animation = animation;
        this.item = item;
    }
    animation : lib6.Animation<double>;

    item : lib5.BottomNavigationBarItem;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib9.Align({
            alignment : lib12.Alignment.bottomCenter,heightFactor : 1.0,child : lib16.Container({
                margin : lib13.EdgeInsets.only({
                    bottom : lib7.Tween({
                        begin : 2.0,end : properties._kBottomMargin}).evaluate(this.animation)}),child : lib20.FadeTransition({
                    alwaysIncludeSemantics : true,opacity : this.animation,child : lib19.DefaultTextStyle.merge({
                        style : new lib17.TextStyle({
                            fontSize : properties._kActiveFontSize,color : lib11.Colors.white}),child : this.item.title})})})});
    }
}

export namespace _BottomNavigationBarState {
    export type Constructors = '_BottomNavigationBarState';
    export type Interface = Omit<_BottomNavigationBarState, Constructors>;
}
@DartClass
@With(any)
export class _BottomNavigationBarState extends any implements any.Interface {
    _controllers : core.DartList<lib21.AnimationController>;

    _animations : core.DartList<lib22.CurvedAnimation>;

    _circles : collection.Queue<_Circle>;

    _backgroundColor : any;

    private static __$_flexTween : lib7.Animatable<double>;
    static get _flexTween() : lib7.Animatable<double> { 
        if (this.__$_flexTween===undefined) {
            this.__$_flexTween = lib7.Tween({
                begin : 1.0,end : 1.5});
        }
        return this.__$_flexTween;
    }
    static set _flexTween(__$value : lib7.Animatable<double>)  { 
        this.__$_flexTween = __$value;
    }

    _resetState() : any {
        for(let controller of this._controllers) controller.dispose();
        for(let circle of this._circles) circle.dispose();
        this._circles.clear();
        this._controllers = op(Op.LT,core.DartList<E>,lib21.AnimationController);
        op(Op.GT,,.generate(widget.items.length,(index : number) =>  {
            return ((_) : any =>  {
                {
                    addListener(this._rebuild.bind(this));
                    return _;
                }
            })(lib21.AnimationController({
                duration : lib24.properties.kThemeAnimationDuration,vsync : this}));
        }));
        this._animations = op(Op.LT,core.DartList<E>,lib22.CurvedAnimation);
        op(Op.GT,,.generate(widget.items.length,(index : number) =>  {
            return lib22.CurvedAnimation({
                parent : this._controllers[index],curve : lib25.Curves.fastOutSlowIn,reverseCurve : lib25.Curves.fastOutSlowIn.flipped});
        }));
        this._controllers[widget.currentIndex].value = 1.0;
        this._backgroundColor = op(Op.INDEX,widget.items,widget.currentIndex).backgroundColor;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._resetState();
    }
    _rebuild() : any {
        setState(() =>  {
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        for(let controller of this._controllers) controller.dispose();
        for(let circle of this._circles) circle.dispose();
        super.dispose();
    }
    _evaluateFlex(animation : lib6.Animation<double>) : double {
        return _BottomNavigationBarState._flexTween.evaluate(animation);
    }
    _pushCircle(index : number) : any {
        if (op(Op.INDEX,widget.items,index).backgroundColor != null) {
            this._circles.add(((_) : any =>  {
                {
                    _.controller.addStatusListener((status : lib6.AnimationStatus) =>  {
                        switch (status) {
                            case lib6.AnimationStatus.completed:
                                setState(() =>  {
                                    let circle : _Circle = this._circles.removeFirst();
                                    this._backgroundColor = circle.color;
                                    circle.dispose();
                                });
                                break;
                            case lib6.AnimationStatus.dismissed:
                            case lib6.AnimationStatus.forward:
                            case lib6.AnimationStatus.reverse:
                                break;
                        }
                    });
                    return _;
                }
            })(_Circle({
                state : this,index : index,color : op(Op.INDEX,widget.items,index).backgroundColor,vsync : this})));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : BottomNavigationBar) : any {
        super.didUpdateWidget(oldWidget);
        if (widget.items.length != oldWidget.items.length) {
            this._resetState();
            return;
        }
        if (widget.currentIndex != oldWidget.currentIndex) {
            switch (widget.type) {
                case BottomNavigationBarType.fixed:
                    break;
                case BottomNavigationBarType.shifting:
                    this._pushCircle(widget.currentIndex);
                    break;
            }
            this._controllers[oldWidget.currentIndex].reverse();
            this._controllers[widget.currentIndex].forward();
        }else {
            if (this._backgroundColor != op(Op.INDEX,widget.items,widget.currentIndex).backgroundColor) this._backgroundColor = op(Op.INDEX,widget.items,widget.currentIndex).backgroundColor;
        }
    }
    _createTiles() : core.DartList<lib3.Widget> {
        let localizations : lib27.MaterialLocalizations = lib27.MaterialLocalizations.of(lib26.properties.context);
        /* TODO (AssertStatementImpl) : assert (localizations != null); */;
        let children : core.DartList<lib3.Widget> = new core.DartList.literal<lib3.Widget>();
        switch (widget.type) {
            case BottomNavigationBarType.fixed:
                let themeData : lib28.ThemeData = lib24.Theme.of(lib26.properties.context);
                let textTheme : lib29.TextTheme = themeData.textTheme;
                let themeColor : any;
                switch (themeData.brightness) {
                    case Brightness.light:
                        themeColor = themeData.primaryColor;
                        break;
                    case Brightness.dark:
                        themeColor = themeData.accentColor;
                        break;
                }
                let colorTween : lib7.ColorTween = lib7.ColorTween({
                    begin : textTheme.caption.color,end : (widget.fixedColor || themeColor)});
                for(let i : number = 0; i < widget.items.length; i += 1){
                    children.add(_BottomNavigationTile(widget.type,op(Op.INDEX,widget.items,i),this._animations[i],widget.iconSize,{
                        onTap : () =>  {
                            if (widget.onTap != null) widget.onTap(i);
                        },colorTween : colorTween,selected : i == widget.currentIndex,indexLabel : localizations.tabLabel({
                            tabIndex : i + 1,tabCount : widget.items.length})}));
                }
                break;
            case BottomNavigationBarType.shifting:
                for(let i : number = 0; i < widget.items.length; i += 1){
                    children.add(_BottomNavigationTile(widget.type,op(Op.INDEX,widget.items,i),this._animations[i],widget.iconSize,{
                        onTap : () =>  {
                            if (widget.onTap != null) widget.onTap(i);
                        },flex : this._evaluateFlex(this._animations[i]),selected : i == widget.currentIndex,indexLabel : localizations.tabLabel({
                            tabIndex : i + 1,tabCount : widget.items.length})}));
                }
                break;
        }
        return children;
    }
    _createContainer(tiles : core.DartList<lib3.Widget>) : lib3.Widget {
        return lib19.DefaultTextStyle.merge({
            overflow : lib30.TextOverflow.ellipsis,child : lib9.Row({
                mainAxisAlignment : lib8.MainAxisAlignment.spaceBetween,children : tiles})});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasDirectionality(context)); */;
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        let additionalBottomPadding : double = math.max(lib31.MediaQuery.of(context).padding.bottom - properties._kBottomMargin,0.0);
        let backgroundColor : any;
        switch (widget.type) {
            case BottomNavigationBarType.fixed:
                break;
            case BottomNavigationBarType.shifting:
                backgroundColor = this._backgroundColor;
                break;
        }
        return lib9.Semantics({
            explicitChildNodes : true,child : lib35.Material({
                elevation : 8.0,color : backgroundColor,child : lib9.ConstrainedBox({
                    constraints : lib34.BoxConstraints({
                        minHeight : lib33.properties.kBottomNavigationBarHeight + additionalBottomPadding}),child : lib9.CustomPaint({
                        painter : _RadialPainter({
                            circles : this._circles.toList(),textDirection : lib9.Directionality.of(context)}),child : lib35.Material({
                            type : lib35.MaterialType.transparency,child : lib9.Padding({
                                padding : lib13.EdgeInsets.only({
                                    bottom : additionalBottomPadding}),child : lib31.MediaQuery.removePadding({
                                    context : context,removeBottom : true,child : this._createContainer(this._createTiles())})})})})})})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _BottomNavigationBarState() {
        this._controllers = new core.DartList.literal<lib21.AnimationController>();
        this._circles = collection.Queue();
    }
}

export namespace _Circle {
    export type Constructors = '_Circle' | 'forward';
    export type Interface = Omit<_Circle, Constructors>;
}
@DartClass
export class _Circle {
    constructor(_namedArguments? : {state? : any,index? : any,color? : any,vsync? : any}) {
    }
    @defaultConstructor
    _Circle(_namedArguments? : {state? : any,index? : any,color? : any,vsync? : any}) {
        let {state,index,color,vsync} = Object.assign({
        }, _namedArguments );
        this.controller = lib21.AnimationController({
            duration : lib24.properties.kThemeAnimationDuration,vsync : lib21.properties.vsync});
        this.animation = lib22.CurvedAnimation({
            parent : this.controller,curve : lib25.Curves.fastOutSlowIn});
        this.assert = assert;
        this.state = state;
        this.index = index;
        this.color = color;
    }
     : any;

     : any;

     : any;

    controller;

    animation;

    @namedConstructor
    forward() {
        this.controller = lib21.AnimationController({
            duration : lib24.properties.kThemeAnimationDuration,vsync : lib21.properties.vsync});
        this.animation = lib22.CurvedAnimation({
            parent : this.controller,curve : lib25.Curves.fastOutSlowIn});
    }
    static forward : new() => _Circle;

}

export namespace _RadialPainter {
    export type Constructors = lib36.CustomPainter.Constructors | '_RadialPainter';
    export type Interface = Omit<_RadialPainter, Constructors>;
}
@DartClass
export class _RadialPainter extends lib36.CustomPainter {
    constructor(_namedArguments? : {circles? : core.DartList<_Circle>,textDirection? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RadialPainter(_namedArguments? : {circles? : core.DartList<_Circle>,textDirection? : any}) {
        let {circles,textDirection} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.circles = circles;
        this.textDirection = textDirection;
    }
     : any;

     : any;

    circles : core.DartList<_Circle>;

    textDirection : any;

    static _maxRadius(center : any,size : any) : double {
        let maxX : double = math.max(center.dx,op(Op.MINUS,size.width,center.dx));
        let maxY : double = math.max(center.dy,op(Op.MINUS,size.height,center.dy));
        return math.sqrt(maxX * maxX + maxY * maxY);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRepaint(oldPainter : _RadialPainter) : boolean {
        if (this.textDirection != oldPainter.textDirection) return true;
        if (this.circles == oldPainter.circles) return false;
        if (this.circles.length != oldPainter.circles.length) return true;
        for(let i : number = 0; i < this.circles.length; i += 1)if (this.circles[i] != oldPainter.circles[i]) return true;
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,size : any) : any {
        for(let circle of this.circles) {
            let paint : any = ((_) : any =>  {
                {
                    _.color = circle.color;
                    return _;
                }
            })(Paint());
            let rect : any = Rect.fromLTWH(0.0,0.0,size.width,size.height);
            canvas.clipRect(rect);
            let leftFraction : double;
            switch (this.textDirection) {
                case TextDirection.rtl:
                    leftFraction = 1.0 - circle.horizontalLeadingOffset;
                    break;
                case TextDirection.ltr:
                    leftFraction = circle.horizontalLeadingOffset;
                    break;
            }
            let center : any = Offset(leftFraction * size.width,op(Op.DIVIDE,size.height,2.0));
            let radiusTween : lib7.Tween<double> = lib7.Tween({
                begin : 0.0,end : _RadialPainter._maxRadius(center,size)});
            canvas.drawCircle(center,radiusTween.transform(circle.animation.value),paint);
        }
    }
}

export class properties {
    private static __$_kActiveFontSize : double;
    static get _kActiveFontSize() : double { 
        if (this.__$_kActiveFontSize===undefined) {
            this.__$_kActiveFontSize = 14.0;
        }
        return this.__$_kActiveFontSize;
    }
    static set _kActiveFontSize(__$value : double)  { 
        this.__$_kActiveFontSize = __$value;
    }

    private static __$_kInactiveFontSize : double;
    static get _kInactiveFontSize() : double { 
        if (this.__$_kInactiveFontSize===undefined) {
            this.__$_kInactiveFontSize = 12.0;
        }
        return this.__$_kInactiveFontSize;
    }
    static set _kInactiveFontSize(__$value : double)  { 
        this.__$_kInactiveFontSize = __$value;
    }

    private static __$_kTopMargin : double;
    static get _kTopMargin() : double { 
        if (this.__$_kTopMargin===undefined) {
            this.__$_kTopMargin = 6.0;
        }
        return this.__$_kTopMargin;
    }
    static set _kTopMargin(__$value : double)  { 
        this.__$_kTopMargin = __$value;
    }

    private static __$_kBottomMargin : double;
    static get _kBottomMargin() : double { 
        if (this.__$_kBottomMargin===undefined) {
            this.__$_kBottomMargin = 8.0;
        }
        return this.__$_kBottomMargin;
    }
    static set _kBottomMargin(__$value : double)  { 
        this.__$_kBottomMargin = __$value;
    }

    private static __$state : _BottomNavigationBarState;
    static get state() : _BottomNavigationBarState { 
        return this.__$state;
    }
    static set state(__$value : _BottomNavigationBarState)  { 
        this.__$state = __$value;
    }

    private static __$index : number;
    static get index() : number { 
        return this.__$index;
    }
    static set index(__$value : number)  { 
        this.__$index = __$value;
    }

    private static __$color : any;
    static get color() : any { 
        return this.__$color;
    }
    static set color(__$value : any)  { 
        this.__$color = __$value;
    }

    private static __$controller : lib21.AnimationController;
    static get controller() : lib21.AnimationController { 
        return this.__$controller;
    }
    static set controller(__$value : lib21.AnimationController)  { 
        this.__$controller = __$value;
    }

    private static __$animation : lib22.CurvedAnimation;
    static get animation() : lib22.CurvedAnimation { 
        return this.__$animation;
    }
    static set animation(__$value : lib22.CurvedAnimation)  { 
        this.__$animation = __$value;
    }

    static get horizontalLeadingOffset() : double {
        var weightSum : (animations : core.DartIterable<lib6.Animation<double>>) => double = (animations : core.DartIterable<lib6.Animation<double>>) : double =>  {
            return animations.map(properties.state._evaluateFlex.bind(properties.state)).fold(0.0,(sum : double,value : double) =>  {
                return sum + value;
            });
        };
        let allWeights : double = weightSum(properties.state._animations);
        let leadingWeights : double = weightSum(properties.state._animations.sublist(0,properties.index));
        return (leadingWeights + properties.state._evaluateFlex(properties.state._animations[properties.index]) / 2.0) / allWeights;
    }
}
