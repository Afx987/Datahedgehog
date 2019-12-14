/** Library asset:datahedgehog_monitor/lib/lib/material/dropdown.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/rendering/custom_paint";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/border_radius";
import * as lib7 from "./shadows";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/decoration";
import * as lib10 from "./constants";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/painting/image_provider";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_configuration";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib15 from "./theme";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_physics";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib22 from "./material_localizations";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/widgets/navigator";
import * as lib25 from "./ink_well";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/widgets/transitions";
import * as lib27 from "./material";
import * as lib28 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_view";
import * as lib29 from "./scrollbar";
import * as lib30 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib31 from "@dart2ts.packages/flutter/lib/src/rendering/shifted_box";
import * as lib32 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as math from "@dart2ts/dart/math";
import * as lib34 from "@dart2ts.packages/flutter/lib/src/widgets/routes";
import * as lib35 from "./theme_data";
import * as lib36 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib37 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_controller";
import * as lib38 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as lib39 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib40 from "@dart2ts.packages/flutter/lib/src/widgets/binding";
import * as lib41 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib42 from "./button_theme";
import * as lib43 from "./colors";
import * as lib44 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib45 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib46 from "./icons";
import * as lib47 from "@dart2ts.packages/flutter/lib/src/widgets/icon";
import * as lib48 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib49 from "@dart2ts.packages/flutter/lib/src/painting/box_border";
import * as lib50 from "@dart2ts.packages/flutter/lib/src/widgets/gesture_detector";
import * as lib51 from "@dart2ts.packages/flutter/lib/src/widgets/form";
import * as lib52 from "./input_decorator";

export var createState : () => lib51.FormFieldState<any> = () : lib51.FormFieldState<any> =>  {
    return _DropdownButtonFormFieldState();
};
export namespace _DropdownMenuPainter {
    export type Constructors = lib4.CustomPainter.Constructors | '_DropdownMenuPainter';
    export type Interface = Omit<_DropdownMenuPainter, Constructors>;
}
@DartClass
export class _DropdownMenuPainter extends lib4.CustomPainter {
    constructor(_namedArguments? : {color? : any,elevation? : number,selectedIndex? : number,resize? : lib5.Animation<double>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DropdownMenuPainter(_namedArguments? : {color? : any,elevation? : number,selectedIndex? : number,resize? : lib5.Animation<double>}) {
        let {color,elevation,selectedIndex,resize} = Object.assign({
        }, _namedArguments );
        this._painter = lib8.BoxDecoration({
            color : color,borderRadius : lib6.BorderRadius.circular(2.0),boxShadow : lib7.properties.kElevationToShadow.get(elevation)}).createBoxPainter();
        super.CustomPainter({
            repaint : resize});
        this.color = color;
        this.elevation = elevation;
        this.selectedIndex = selectedIndex;
        this.resize = resize;
    }
    color : any;

    elevation : number;

    selectedIndex : number;

    resize : lib5.Animation<double>;

    _painter : lib9.BoxPainter;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,size : any) : any {
        let selectedItemOffset : double = this.selectedIndex * properties._kMenuItemHeight + lib10.properties.kMaterialListPadding.top;
        let top : lib11.Tween<double> = lib11.Tween({
            begin : new core.DartDouble(selectedItemOffset).clamp(0.0,op(Op.MINUS,size.height,properties._kMenuItemHeight)),end : 0.0});
        let bottom : lib11.Tween<double> = lib11.Tween({
            begin : new core.DartDouble((top.begin + properties._kMenuItemHeight)).clamp(properties._kMenuItemHeight,size.height),end : size.height});
        let rect : any = Rect.fromLTRB(0.0,top.evaluate(this.resize),size.width,bottom.evaluate(this.resize));
        this._painter.paint(canvas,rect.topLeft,lib12.ImageConfiguration({
            size : rect.size}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRepaint(oldPainter : _DropdownMenuPainter) : boolean {
        return oldPainter.color != this.color || oldPainter.elevation != this.elevation || oldPainter.selectedIndex != this.selectedIndex || oldPainter.resize != this.resize;
    }
}

export namespace _DropdownScrollBehavior {
    export type Constructors = lib13.ScrollBehavior.Constructors | '_DropdownScrollBehavior';
    export type Interface = Omit<_DropdownScrollBehavior, Constructors>;
}
@DartClass
export class _DropdownScrollBehavior extends lib13.ScrollBehavior {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DropdownScrollBehavior() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getPlatform(context : lib14.BuildContext) : lib16.TargetPlatform {
        return lib15.Theme.of(context).platform;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildViewportChrome(context : lib14.BuildContext,child : lib14.Widget,axisDirection : lib17.AxisDirection) : lib14.Widget {
        return child;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getScrollPhysics(context : lib14.BuildContext) : lib18.ScrollPhysics {
        return new lib18.ClampingScrollPhysics();
    }
}

export namespace _DropdownMenu {
    export type Constructors = lib14.StatefulWidget.Constructors | '_DropdownMenu';
    export type Interface<T> = Omit<_DropdownMenu<T>, Constructors>;
}
@DartClass
export class _DropdownMenu<T> extends lib14.StatefulWidget {
    constructor(_namedArguments? : {key? : lib19.Key,padding? : lib3.EdgeInsets,route? : _DropdownRoute<T>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DropdownMenu(_namedArguments? : {key? : lib19.Key,padding? : lib3.EdgeInsets,route? : _DropdownRoute<T>}) {
        let {key,padding,route} = Object.assign({
        }, _namedArguments );
        super.StatefulWidget({
            key : key});
        this.padding = padding;
        this.route = route;
    }
    route : _DropdownRoute<T>;

    padding : lib3.EdgeInsets;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _DropdownMenuState<T> {
        return _DropdownMenuState();
    }
}

export namespace _DropdownMenuState {
    export type Constructors = '_DropdownMenuState';
    export type Interface<T> = Omit<_DropdownMenuState<T>, Constructors>;
}
@DartClass
export class _DropdownMenuState<T> extends any {
    _fadeOpacity : lib20.CurvedAnimation;

    _resize : lib20.CurvedAnimation;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._fadeOpacity = lib20.CurvedAnimation({
            parent : widget.route.animation,curve : new lib21.Interval(0.0,0.25),reverseCurve : new lib21.Interval(0.75,1.0)});
        this._resize = lib20.CurvedAnimation({
            parent : widget.route.animation,curve : new lib21.Interval(0.25,0.5),reverseCurve : new lib21.Threshold(0.0)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib14.BuildContext) : lib14.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        let localizations : lib22.MaterialLocalizations = lib22.MaterialLocalizations.of(context);
        let route : _DropdownRoute<T> = widget.route;
        let unit : double = 0.5 / (route.items.length + 1.5);
        let children : core.DartList<lib14.Widget> = new core.DartList.literal<lib14.Widget>();
        for(let itemIndex : number = 0; itemIndex < route.items.length; ++itemIndex){
            let opacity : lib20.CurvedAnimation;
            if (itemIndex == route.selectedIndex) {
                opacity = lib20.CurvedAnimation({
                    parent : route.animation,curve : new lib21.Threshold(0.0)});
            }else {
                let start : double = new core.DartDouble((0.5 + (itemIndex + 1) * unit)).clamp(0.0,1.0);
                let end : double = new core.DartDouble((start + 1.5 * unit)).clamp(0.0,1.0);
                opacity = lib20.CurvedAnimation({
                    parent : route.animation,curve : lib21.Interval(start,end)});
            }
            children.add(lib26.FadeTransition({
                opacity : opacity,child : lib25.InkWell({
                    child : lib23.Container({
                        padding : widget.padding,child : route.items[itemIndex]}),onTap : () =>  {
                        return lib24.Navigator.pop(context,_DropdownRouteResult(route.items[itemIndex].value));
                    }})}));
        }
        return lib26.FadeTransition({
            opacity : this._fadeOpacity,child : lib30.CustomPaint({
                painter : _DropdownMenuPainter({
                    color : lib15.Theme.of(context).canvasColor,elevation : route.elevation,selectedIndex : route.selectedIndex,resize : this._resize}),child : lib30.Semantics({
                    scopesRoute : true,namesRoute : true,explicitChildNodes : true,label : localizations.popupMenuLabel,child : lib27.Material({
                        type : lib27.MaterialType.transparency,textStyle : route.style,child : lib13.ScrollConfiguration({
                            behavior : new _DropdownScrollBehavior(),child : lib29.Scrollbar({
                                child : lib28.ListView({
                                    controller : widget.route.scrollController,padding : lib10.properties.kMaterialListPadding,itemExtent : properties._kMenuItemHeight,shrinkWrap : true,children : children})})})})})})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DropdownMenuState() {
    }
}

export namespace _DropdownMenuRouteLayout {
    export type Constructors = lib31.SingleChildLayoutDelegate.Constructors | '_DropdownMenuRouteLayout';
    export type Interface<T> = Omit<_DropdownMenuRouteLayout<T>, Constructors>;
}
@DartClass
export class _DropdownMenuRouteLayout<T> extends lib31.SingleChildLayoutDelegate {
    constructor(_namedArguments? : {buttonRect? : any,menuTop? : double,menuHeight? : double,textDirection? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DropdownMenuRouteLayout(_namedArguments? : {buttonRect? : any,menuTop? : double,menuHeight? : double,textDirection? : any}) {
        let {buttonRect,menuTop,menuHeight,textDirection} = Object.assign({
        }, _namedArguments );
        this.buttonRect = buttonRect;
        this.menuTop = menuTop;
        this.menuHeight = menuHeight;
        this.textDirection = textDirection;
    }
    buttonRect : any;

    menuTop : double;

    menuHeight : double;

    textDirection : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getConstraintsForChild(constraints : lib32.BoxConstraints) : lib32.BoxConstraints {
        let maxHeight : double = math.max(0.0,constraints.maxHeight - 2 * properties._kMenuItemHeight);
        let width : double = math.min(constraints.maxWidth,this.buttonRect.width);
        return lib32.BoxConstraints({
            minWidth : width,maxWidth : width,minHeight : 0.0,maxHeight : maxHeight});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getPositionForChild(size : any,childSize : any) : any {
        /* TODO (AssertStatementImpl) : assert (() {final Rect container = Offset.zero & size; if (container.intersect(buttonRect) == buttonRect) {assert (menuTop >= 0.0); assert (menuTop + menuHeight <= size.height);} return true;}()); */;
        /* TODO (AssertStatementImpl) : assert (textDirection != null); */;
        let left : double;
        switch (this.textDirection) {
            case TextDirection.rtl:
                left = op(Op.MINUS,this.buttonRect.right.clamp(0.0,size.width),childSize.width);
                break;
            case TextDirection.ltr:
                left = this.buttonRect.left.clamp(0.0,op(Op.MINUS,size.width,childSize.width));
                break;
        }
        return Offset(left,this.menuTop);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRelayout(oldDelegate : _DropdownMenuRouteLayout<T>) : boolean {
        return this.buttonRect != oldDelegate.buttonRect || this.menuTop != oldDelegate.menuTop || this.menuHeight != oldDelegate.menuHeight || this.textDirection != oldDelegate.textDirection;
    }
}

export namespace _DropdownRouteResult {
    export type Constructors = '_DropdownRouteResult';
    export type Interface<T> = Omit<_DropdownRouteResult<T>, Constructors>;
}
@DartClass
export class _DropdownRouteResult<T> {
    constructor(result : T) {
    }
    @defaultConstructor
    _DropdownRouteResult(result : T) {
        this.result = result;
    }
    result : T;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (isNot(other, _DropdownRouteResult<T>)) return false;
        let typedOther : _DropdownRouteResult<T> = other;
        return op(Op.EQUALS,this.result,typedOther.result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.result.hashCode;
    }
}

export namespace _DropdownRoute {
    export type Constructors = lib34.PopupRoute.Constructors | '_DropdownRoute';
    export type Interface<T> = Omit<_DropdownRoute<T>, Constructors>;
}
@DartClass
export class _DropdownRoute<T> extends lib34.PopupRoute<_DropdownRouteResult<T>> {
    constructor(_namedArguments? : {items? : core.DartList<DropdownMenuItem<T>>,padding? : lib3.EdgeInsetsGeometry,buttonRect? : any,selectedIndex? : number,elevation? : number,theme? : lib35.ThemeData,style? : lib36.TextStyle,barrierLabel? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DropdownRoute(_namedArguments? : {items? : core.DartList<DropdownMenuItem<T>>,padding? : lib3.EdgeInsetsGeometry,buttonRect? : any,selectedIndex? : number,elevation? : number,theme? : lib35.ThemeData,style? : lib36.TextStyle,barrierLabel? : string}) {
        let {items,padding,buttonRect,selectedIndex,elevation,theme,style,barrierLabel} = Object.assign({
            "elevation" : 8}, _namedArguments );
        this.assert = assert;
        this.items = items;
        this.padding = padding;
        this.buttonRect = buttonRect;
        this.selectedIndex = selectedIndex;
        this.elevation = elevation;
        this.theme = theme;
        this.style = style;
        this.barrierLabel = barrierLabel;
    }
     : any;

    items : core.DartList<DropdownMenuItem<T>>;

    padding : lib3.EdgeInsetsGeometry;

    buttonRect : any;

    selectedIndex : number;

    elevation : number;

    theme : lib35.ThemeData;

    style : lib36.TextStyle;

    scrollController : lib37.ScrollController;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get transitionDuration() : core.DartDuration {
        return properties._kDropdownMenuDuration;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get barrierDismissible() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get barrierColor() : any {
        return null;
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    barrierLabel : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildPage(context : lib14.BuildContext,animation : lib5.Animation<double>,secondaryAnimation : lib5.Animation<double>) : lib14.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasDirectionality(context)); */;
        let screenHeight : double = lib38.MediaQuery.of(context).size.height;
        let maxMenuHeight : double = screenHeight - 2.0 * properties._kMenuItemHeight;
        let buttonTop : double = this.buttonRect.top;
        let buttonBottom : double = this.buttonRect.bottom;
        let topLimit : double = math.min(properties._kMenuItemHeight,buttonTop);
        let bottomLimit : double = math.max(screenHeight - properties._kMenuItemHeight,buttonBottom);
        let selectedItemOffset : double = this.selectedIndex * properties._kMenuItemHeight + lib10.properties.kMaterialListPadding.top;
        let menuTop : double = (buttonTop - selectedItemOffset) - (properties._kMenuItemHeight - this.buttonRect.height) / 2.0;
        let preferredMenuHeight : double = (this.items.length * properties._kMenuItemHeight) + lib10.properties.kMaterialListPadding.vertical;
        let menuHeight : double = math.min(maxMenuHeight,preferredMenuHeight);
        let menuBottom : double = menuTop + menuHeight;
        if (menuTop < topLimit) menuTop = math.min(buttonTop,topLimit);
        if (menuBottom > bottomLimit) {
            menuBottom = math.max(buttonBottom,bottomLimit);
            menuTop = menuBottom - menuHeight;
        }
        if (op(Op.EQUALS,this.scrollController,null)) {
            let scrollOffset : double = preferredMenuHeight > maxMenuHeight ? math.max(0.0,selectedItemOffset - (buttonTop - menuTop)) : 0.0;
            this.scrollController = lib37.ScrollController({
                initialScrollOffset : scrollOffset});
        }
        let textDirection : any = lib30.Directionality.of(context);
        let menu : lib14.Widget = _DropdownMenu({
            route : this,padding : this.padding.resolve(textDirection)});
        if (this.theme != null) menu = lib15.Theme({
            data : this.theme,child : menu});
        return lib38.MediaQuery.removePadding({
            context : context,removeTop : true,removeBottom : true,removeLeft : true,removeRight : true,child : lib30.Builder({
                builder : (context : lib14.BuildContext) =>  {
                    return lib30.CustomSingleChildLayout({
                        delegate : _DropdownMenuRouteLayout({
                            buttonRect : this.buttonRect,menuTop : menuTop,menuHeight : menuHeight,textDirection : textDirection}),child : menu});
                }})});
    }
    _dismiss() : any {
        ((_731_)=>(!!_731_)?_731_.removeRoute(this):null)(navigator);
    }
}

export namespace DropdownMenuItem {
    export type Constructors = lib14.StatelessWidget.Constructors | 'DropdownMenuItem';
    export type Interface<T> = Omit<DropdownMenuItem<T>, Constructors>;
}
@DartClass
export class DropdownMenuItem<T> extends lib14.StatelessWidget {
    constructor(_namedArguments? : {key? : lib19.Key,value? : T,child? : lib14.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DropdownMenuItem(_namedArguments? : {key? : lib19.Key,value? : T,child? : lib14.Widget}) {
        let {key,value,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.value = value;
        this.child = child;
    }
     : any;

     : any;

     : any;

    child : lib14.Widget;

    value : T;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib14.BuildContext) : lib14.Widget {
        return lib23.Container({
            height : properties._kMenuItemHeight,alignment : lib39.AlignmentDirectional.centerStart,child : this.child});
    }
}

export namespace DropdownButtonHideUnderline {
    export type Constructors = lib14.InheritedWidget.Constructors | 'DropdownButtonHideUnderline';
    export type Interface = Omit<DropdownButtonHideUnderline, Constructors>;
}
@DartClass
export class DropdownButtonHideUnderline extends lib14.InheritedWidget {
    constructor(_namedArguments? : {key? : lib19.Key,child? : lib14.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DropdownButtonHideUnderline(_namedArguments? : {key? : lib19.Key,child? : lib14.Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
    }
     : any;

     : any;

    key;
    child;

     : any;

    static at(context : lib14.BuildContext) : boolean {
        return context.inheritFromWidgetOfExactType(DropdownButtonHideUnderline) != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(oldWidget : DropdownButtonHideUnderline) : boolean {
        return false;
    }
}

export namespace DropdownButton {
    export type Constructors = lib14.StatefulWidget.Constructors | 'DropdownButton' | 'where';
    export type Interface<T> = Omit<DropdownButton<T>, Constructors>;
}
@DartClass
export class DropdownButton<T> extends lib14.StatefulWidget {
    constructor(_namedArguments? : {key? : lib19.Key,items? : core.DartList<DropdownMenuItem<T>>,value? : T,hint? : lib14.Widget,disabledHint? : lib14.Widget,onChanged? : <T>(value : T) => void,elevation? : number,style? : lib36.TextStyle,iconSize? : double,isDense? : boolean,isExpanded? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DropdownButton(_namedArguments? : {key? : lib19.Key,items? : core.DartList<DropdownMenuItem<T>>,value? : T,hint? : lib14.Widget,disabledHint? : lib14.Widget,onChanged? : <T>(value : T) => void,elevation? : number,style? : lib36.TextStyle,iconSize? : double,isDense? : boolean,isExpanded? : boolean}) {
        let {key,items,value,hint,disabledHint,onChanged,elevation,style,iconSize,isDense,isExpanded} = Object.assign({
            "elevation" : 8,
            "iconSize" : 24.0,
            "isDense" : false,
            "isExpanded" : false}, _namedArguments );
        this.assert = assert;
        this.items = items;
        this.value = value;
        this.hint = hint;
        this.disabledHint = disabledHint;
        this.onChanged = onChanged;
        this.elevation = elevation;
        this.style = style;
        this.iconSize = iconSize;
        this.isDense = isDense;
        this.isExpanded = isExpanded;
    }
     : any;

     : any;

     : any;

    @namedConstructor
    where( : <T>(item : DropdownMenuItem<T>) => any, : any) {
        op(Op.EQUALS,item.value,this.value);
    }
    static where : new<T>( : any) => DropdownButton<T>;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    items : core.DartList<DropdownMenuItem<T>>;

    value : T;

    hint : lib14.Widget;

    disabledHint : lib14.Widget;

    onChanged : <T>(value : T) => void;

    elevation : number;

    style : lib36.TextStyle;

    iconSize : double;

    isDense : boolean;

    isExpanded : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _DropdownButtonState<T> {
        return _DropdownButtonState();
    }
}

export namespace _DropdownButtonState {
    export type Constructors = '_DropdownButtonState';
    export type Interface<T> = Omit<_DropdownButtonState<T>, Constructors>;
}
@DartClass
@With(lib40.WidgetsBindingObserver)
export class _DropdownButtonState<T> extends any implements lib40.WidgetsBindingObserver.Interface {
    @Abstract
    didPopRoute() : async.Future<boolean> {
        throw 'from mixin';
    }
    @Abstract
    value(false : any) : any {
        throw 'from mixin';
    }
    @Abstract
    didPushRoute(route : string) : async.Future<boolean> {
        throw 'from mixin';
    }
    @Abstract
    value(false : any) : any {
        throw 'from mixin';
    }
    @Abstract
    didChangeTextScaleFactor() : any {
        throw 'from mixin';
    }
    @Abstract
    didChangePlatformBrightness() : any {
        throw 'from mixin';
    }
    @Abstract
    didChangeLocales(locale : core.DartList<any>) : any {
        throw 'from mixin';
    }
    @Abstract
    didChangeAppLifecycleState(state : any) : any {
        throw 'from mixin';
    }
    @Abstract
    didHaveMemoryPressure() : any {
        throw 'from mixin';
    }
    @Abstract
    didChangeAccessibilityFeatures() : any {
        throw 'from mixin';
    }
    _selectedIndex : number;

    _dropdownRoute : _DropdownRoute<T>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._updateSelectedIndex();
        lib40.properties.WidgetsBinding.instance.addObserver(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        lib40.properties.WidgetsBinding.instance.removeObserver(this);
        this._removeDropdownRoute();
        super.dispose();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeMetrics() : any {
        this._removeDropdownRoute();
    }
    _removeDropdownRoute() : any {
        ((_732_)=>(!!_732_)?_732_._dismiss():null)(this._dropdownRoute);
        this._dropdownRoute = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : DropdownButton<T>) : any {
        super.didUpdateWidget(oldWidget);
        this._updateSelectedIndex();
    }
    _updateSelectedIndex() : any {
        if (!this._enabled) {
            return;
        }
        /* TODO (AssertStatementImpl) : assert (widget.value == null || widget.items.where((DropdownMenuItem<T> item) => item.value == widget.value).length == 1); */;
        this._selectedIndex = null;
        for(let itemIndex : number = 0; itemIndex < widget.items.length; itemIndex++){
            if (op(Op.EQUALS,op(Op.INDEX,widget.items,itemIndex).value,widget.value)) {
                this._selectedIndex = itemIndex;
                return;
            }
        }
    }
    get _textStyle() : lib36.TextStyle {
        return (widget.style || lib15.Theme.of(lib41.properties.context).textTheme.subhead);
    }
    _handleTap() : any {
        let itemBox : any = lib41.properties.context.findRenderObject();
        let itemRect : any = op(Op.BITAND,itemBox.localToGlobal(Offset.zero),itemBox.size);
        let textDirection : any = lib30.Directionality.of(lib41.properties.context);
        let menuMargin : lib3.EdgeInsetsGeometry = lib42.ButtonTheme.of(lib41.properties.context).alignedDropdown ? properties._kAlignedMenuMargin : properties._kUnalignedMenuMargin;
        /* TODO (AssertStatementImpl) : assert (_dropdownRoute == null); */;
        this._dropdownRoute = _DropdownRoute({
            items : widget.items,buttonRect : menuMargin.resolve(textDirection).inflateRect(itemRect),padding : properties._kMenuItemPadding.resolve(textDirection),selectedIndex : (this._selectedIndex || 0),elevation : widget.elevation,theme : lib15.Theme.of(lib41.properties.context,{
                shadowThemeOnly : true}),style : this._textStyle,barrierLabel : lib22.MaterialLocalizations.of(lib41.properties.context).modalBarrierDismissLabel});
        op(Op.LT,lib24.Navigator.push(lib41.properties.context,this._dropdownRoute).then.bind(lib24.Navigator.push(lib41.properties.context,this._dropdownRoute)),);
        op(Op.GT,,((newValue : _DropdownRouteResult<T>) =>  {
            this._dropdownRoute = null;
            if (!mounted || op(Op.EQUALS,newValue,null)) return;
            if (widget.onChanged != null) widget.onChanged(newValue.result);
        }));
    }
    get _denseButtonHeight() : double {
        return math.max(this._textStyle.fontSize,math.max(widget.iconSize,properties._kDenseButtonHeight));
    }
    get _downArrowColor() : any {
        if (this._enabled) {
            if (op(Op.EQUALS,lib15.Theme.of(lib41.properties.context).brightness,Brightness.light)) {
                return lib43.Colors.grey.shade700;
            }else {
                return lib43.Colors.white70;
            }
        }else {
            if (op(Op.EQUALS,lib15.Theme.of(lib41.properties.context).brightness,Brightness.light)) {
                return lib43.Colors.grey.shade400;
            }else {
                return lib43.Colors.white10;
            }
        }
    }
    get _enabled() : boolean {
        return widget.items != null && widget.items.isNotEmpty && widget.onChanged != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib14.BuildContext) : lib14.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterial(context)); */;
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        let items : core.DartList<lib14.Widget> = this._enabled ? op(Op.LT,core.DartList<E>,lib14.Widget) : op(Op.GT,,.from(widget.items));
        new core.DartList.literal<lib14.Widget>();
        let hintIndex : number;
        if (widget.hint != null || (!this._enabled && widget.disabledHint != null)) {
            let emplacedHint : lib14.Widget = this._enabled ? widget.hint : DropdownMenuItem({
                child : (widget.disabledHint || widget.hint)});
            hintIndex = items.length;
            items.add(lib44.DefaultTextStyle({
                style : this._textStyle.copyWith({
                    color : lib15.Theme.of(context).hintColor}),child : lib30.IgnorePointer({
                    child : emplacedHint,ignoringSemantics : false})}));
        }
        let padding : lib3.EdgeInsetsGeometry = lib42.ButtonTheme.of(context).alignedDropdown ? properties._kAlignedButtonPadding : properties._kUnalignedButtonPadding;
        let index : number = this._enabled ? ((this._selectedIndex || hintIndex)) : hintIndex;
        let innerItemsWidget : lib14.Widget;
        if (items.isEmpty) {
            innerItemsWidget = lib23.Container();
        }else {
            innerItemsWidget = lib30.IndexedStack({
                index : index,alignment : lib39.AlignmentDirectional.centerStart,children : items});
        }
        let result : lib14.Widget = lib44.DefaultTextStyle({
            style : this._textStyle,child : lib23.Container({
                padding : padding.resolve(lib30.Directionality.of(context)),height : widget.isDense ? this._denseButtonHeight : null,child : lib30.Row({
                    mainAxisAlignment : lib45.MainAxisAlignment.spaceBetween,mainAxisSize : lib45.MainAxisSize.min,children : new core.DartList.literal<lib14.Widget>(widget.isExpanded ? lib30.Expanded({
                        child : innerItemsWidget}) : innerItemsWidget,lib47.Icon(lib46.Icons.arrow_drop_down,{
                        size : widget.iconSize,color : this._downArrowColor}))})})});
        if (!DropdownButtonHideUnderline.at(context)) {
            let bottom : double = widget.isDense ? 0.0 : 8.0;
            result = lib30.Stack({
                children : new core.DartList.literal<lib14.Widget>(result,lib30.Positioned({
                    left : 0.0,right : 0.0,bottom : bottom,child : lib23.Container({
                        height : 1.0,decoration : new lib8.BoxDecoration({
                            border : lib49.Border({
                                bottom : lib48.BorderSide({
                                    color : Color(4290624957),width : 0.0})})})})}))});
        }
        return lib30.Semantics({
            button : true,child : lib50.GestureDetector({
                onTap : this._enabled ? this._handleTap.bind(this) : null,behavior : HitTestBehavior.opaque,child : result})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DropdownButtonState() {
    }
}

export namespace DropdownButtonFormField {
    export type Constructors = lib51.FormField.Constructors | 'DropdownButtonFormField';
    export type Interface<T> = Omit<DropdownButtonFormField<T>, Constructors>;
}
@DartClass
export class DropdownButtonFormField<T> extends lib51.FormField<T> {
    constructor(_namedArguments? : {key? : lib19.Key,value? : T,items? : core.DartList<DropdownMenuItem<T>>,onChanged? : any,decoration? : lib52.InputDecoration,onSaved? : <T>(newValue : T) => void,validator? : <T>(value : T) => string,hint? : lib14.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DropdownButtonFormField(_namedArguments? : {key? : lib19.Key,value? : T,items? : core.DartList<DropdownMenuItem<T>>,onChanged? : any,decoration? : lib52.InputDecoration,onSaved? : <T>(newValue : T) => void,validator? : <T>(value : T) => string,hint? : lib14.Widget}) {
        let {key,value,items,onChanged,decoration,onSaved,validator,hint} = Object.assign({
            "decoration" : new lib52.InputDecoration()}, _namedArguments );
        this.effectiveDecoration = decoration.applyDefaults(lib15.Theme.of(this.field.context).inputDecorationTheme);
        this.assert = assert;
        this.onChanged = onChanged;
    }
     : any;

     : any;

    key;
    onSaved;

    onSaved;
    initialValue;

    value;
    validator;

    validator;
    builder;

    field : lib51.FormFieldState<T>;

    effectiveDecoration : lib52.InputDecoration;

    @Abstract
    InputDecorator(_namedArguments? : {decoration? : any,isEmpty? : any,child? : any}){ throw 'abstract'}
}

export namespace _DropdownButtonFormFieldState {
    export type Constructors = lib51.FormFieldState.Constructors | '_DropdownButtonFormFieldState';
    export type Interface<T> = Omit<_DropdownButtonFormFieldState<T>, Constructors>;
}
@DartClass
export class _DropdownButtonFormFieldState<T> extends lib51.FormFieldState<T> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : DropdownButtonFormField<T> {
        return super.widget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChange(value : T) : any {
        super.didChange(value);
        if (this.widget.onChanged != null) this.widget.onChanged(value);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DropdownButtonFormFieldState() {
    }
}

export class properties {
    private static __$_kDropdownMenuDuration : core.DartDuration;
    static get _kDropdownMenuDuration() : core.DartDuration { 
        if (this.__$_kDropdownMenuDuration===undefined) {
            this.__$_kDropdownMenuDuration = core.DartDuration({
                milliseconds : 300});
        }
        return this.__$_kDropdownMenuDuration;
    }
    static set _kDropdownMenuDuration(__$value : core.DartDuration)  { 
        this.__$_kDropdownMenuDuration = __$value;
    }

    private static __$_kMenuItemHeight : double;
    static get _kMenuItemHeight() : double { 
        if (this.__$_kMenuItemHeight===undefined) {
            this.__$_kMenuItemHeight = 48.0;
        }
        return this.__$_kMenuItemHeight;
    }
    static set _kMenuItemHeight(__$value : double)  { 
        this.__$_kMenuItemHeight = __$value;
    }

    private static __$_kDenseButtonHeight : double;
    static get _kDenseButtonHeight() : double { 
        if (this.__$_kDenseButtonHeight===undefined) {
            this.__$_kDenseButtonHeight = 24.0;
        }
        return this.__$_kDenseButtonHeight;
    }
    static set _kDenseButtonHeight(__$value : double)  { 
        this.__$_kDenseButtonHeight = __$value;
    }

    private static __$_kMenuItemPadding : lib3.EdgeInsets;
    static get _kMenuItemPadding() : lib3.EdgeInsets { 
        if (this.__$_kMenuItemPadding===undefined) {
            this.__$_kMenuItemPadding = lib3.EdgeInsets.symmetric({
                horizontal : 16.0});
        }
        return this.__$_kMenuItemPadding;
    }
    static set _kMenuItemPadding(__$value : lib3.EdgeInsets)  { 
        this.__$_kMenuItemPadding = __$value;
    }

    private static __$_kAlignedButtonPadding : lib3.EdgeInsetsGeometry;
    static get _kAlignedButtonPadding() : lib3.EdgeInsetsGeometry { 
        if (this.__$_kAlignedButtonPadding===undefined) {
            this.__$_kAlignedButtonPadding = lib3.EdgeInsetsDirectional.only({
                start : 16.0,end : 4.0});
        }
        return this.__$_kAlignedButtonPadding;
    }
    static set _kAlignedButtonPadding(__$value : lib3.EdgeInsetsGeometry)  { 
        this.__$_kAlignedButtonPadding = __$value;
    }

    private static __$_kUnalignedButtonPadding : lib3.EdgeInsets;
    static get _kUnalignedButtonPadding() : lib3.EdgeInsets { 
        if (this.__$_kUnalignedButtonPadding===undefined) {
            this.__$_kUnalignedButtonPadding = lib3.EdgeInsets.zero;
        }
        return this.__$_kUnalignedButtonPadding;
    }
    static set _kUnalignedButtonPadding(__$value : lib3.EdgeInsets)  { 
        this.__$_kUnalignedButtonPadding = __$value;
    }

    private static __$_kAlignedMenuMargin : lib3.EdgeInsets;
    static get _kAlignedMenuMargin() : lib3.EdgeInsets { 
        if (this.__$_kAlignedMenuMargin===undefined) {
            this.__$_kAlignedMenuMargin = lib3.EdgeInsets.zero;
        }
        return this.__$_kAlignedMenuMargin;
    }
    static set _kAlignedMenuMargin(__$value : lib3.EdgeInsets)  { 
        this.__$_kAlignedMenuMargin = __$value;
    }

    private static __$_kUnalignedMenuMargin : lib3.EdgeInsetsGeometry;
    static get _kUnalignedMenuMargin() : lib3.EdgeInsetsGeometry { 
        if (this.__$_kUnalignedMenuMargin===undefined) {
            this.__$_kUnalignedMenuMargin = lib3.EdgeInsetsDirectional.only({
                start : 16.0,end : 24.0});
        }
        return this.__$_kUnalignedMenuMargin;
    }
    static set _kUnalignedMenuMargin(__$value : lib3.EdgeInsetsGeometry)  { 
        this.__$_kUnalignedMenuMargin = __$value;
    }

    private static __$onChanged : <T>(value : any) => void;
    static get onChanged() : <T>(value : any) => void { 
        return this.__$onChanged;
    }
    static set onChanged(__$value : <T>(value : any) => void)  { 
        this.__$onChanged = __$value;
    }

}
