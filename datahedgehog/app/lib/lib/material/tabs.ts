/** Library asset:datahedgehog_monitor/lib/lib/material/tabs.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/rendering/paragraph";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/widgets/transitions";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib15 from "./theme";
import * as lib16 from "./theme_data";
import * as lib17 from "./tab_bar_theme";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme_data";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/rendering/view";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/rendering/wrap";
import * as lib23 from "./tab_controller";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/rendering/custom_paint";
import * as lib25 from "@dart2ts.packages/flutter/lib/src/painting/decoration";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/painting/image_provider";
import * as lib27 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_position_with_single_context";
import * as lib28 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_physics";
import * as lib29 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_context";
import * as lib30 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_position";
import * as lib31 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_controller";
import * as lib32 from "@dart2ts.packages/flutter/lib/src/widgets/preferred_size";
import * as lib33 from "@dart2ts.packages/flutter/lib/src/gestures/recognizer";
import * as lib34 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib35 from "./material";
import * as lib36 from "./colors";
import * as lib37 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib38 from "./tab_indicator";
import * as lib39 from "./constants";
import * as lib40 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib41 from "./material_localizations";
import * as lib42 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib43 from "./ink_well";
import * as lib44 from "@dart2ts.packages/flutter/lib/src/widgets/single_child_scroll_view";
import * as lib45 from "@dart2ts.packages/flutter/lib/src/widgets/page_view";
import * as lib46 from "@dart2ts.packages/flutter/lib/src/widgets/scroll_notification";
import * as lib47 from "@dart2ts.packages/flutter/lib/src/widgets/notification_listener";
import * as lib48 from "@dart2ts.packages/flutter/lib/src/painting/box_border";
import * as lib49 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib50 from "@dart2ts.packages/flutter/lib/src/animation/tween";

export var markNeedsPaint : () => any = () : any =>  {
    properties._needsPaint = true;
};
export var _indexChangeProgress : (controller : lib23.TabController) => double = (controller : lib23.TabController) : double =>  {
    let controllerValue : double = controller.animation.value;
    let previousIndex : double = new core.DartInt(controller.previousIndex).toDouble();
    let currentIndex : double = new core.DartInt(controller.index).toDouble();
    if (!controller.indexIsChanging) return new core.DartDouble(new core.DartDouble((currentIndex - controllerValue)).abs()).clamp(0.0,1.0);
    return new core.DartDouble((controllerValue - currentIndex)).abs() / new core.DartDouble((currentIndex - previousIndex)).abs();
};
export var paint : (canvas : any,size : any) => any = (canvas : any,size : any) : any =>  {
    properties._needsPaint = false;
    properties._painter = ( properties._painter ) || ( properties.indicator.createBoxPainter(markNeedsPaint) );
    if (properties.controller.indexIsChanging) {
        let targetRect : any = indicatorRect(size,properties.controller.index);
        properties._currentRect = Rect.lerp(targetRect,(properties._currentRect || targetRect),_indexChangeProgress(properties.controller));
    }else {
        let currentIndex : number = properties.controller.index;
        let previous : any = currentIndex > 0 ? indicatorRect(size,currentIndex - 1) : null;
        let middle : any = indicatorRect(size,currentIndex);
        let next : any = currentIndex < properties.maxTabIndex ? indicatorRect(size,currentIndex + 1) : null;
        let index : double = new core.DartInt(properties.controller.index).toDouble();
        let value : double = properties.controller.animation.value;
        if (value == index - 1.0) properties._currentRect = (previous || middle);else if (value == index + 1.0) properties._currentRect = (next || middle);else if (value == index) properties._currentRect = middle;else if (value < index) properties._currentRect = op(Op.EQUALS,previous,null) ? middle : Rect.lerp(middle,previous,index - value);else properties._currentRect = op(Op.EQUALS,next,null) ? middle : Rect.lerp(middle,next,value - index);
    }
    /* TODO (AssertStatementImpl) : assert (_currentRect != null); */;
    let configuration : lib26.ImageConfiguration = lib26.ImageConfiguration({
        size : properties._currentRect.size,textDirection : properties._currentTextDirection});
    properties._painter.paint(canvas,properties._currentRect.topLeft,configuration);
};
export var dispose : () => any = () : any =>  {
    ((_754_)=>(!!_754_)?_754_.dispose():null)(properties._painter);
};
export var saveTabOffsets : (tabOffsets : core.DartList<double>,textDirection : any) => any = (tabOffsets : core.DartList<double>,textDirection : any) : any =>  {
    properties._currentTabOffsets = tabOffsets;
    properties._currentTextDirection = textDirection;
};
export var shouldRepaint : (old : _IndicatorPainter) => boolean = (old : _IndicatorPainter) : boolean =>  {
    return properties._needsPaint || properties.controller != old.controller || properties.indicator != old.indicator || properties.tabKeys.length != old.tabKeys.length || (!_tabOffsetsEqual(properties._currentTabOffsets,old._currentTabOffsets)) || properties._currentTextDirection != old._currentTextDirection;
};
export var centerOf : (tabIndex : number) => double = (tabIndex : number) : double =>  {
    /* TODO (AssertStatementImpl) : assert (_currentTabOffsets != null); */;
    /* TODO (AssertStatementImpl) : assert (_currentTabOffsets.isNotEmpty); */;
    /* TODO (AssertStatementImpl) : assert (tabIndex >= 0); */;
    /* TODO (AssertStatementImpl) : assert (tabIndex <= maxTabIndex); */;
    return (properties._currentTabOffsets[tabIndex] + properties._currentTabOffsets[tabIndex + 1]) / 2.0;
};
export var _tabOffsetsEqual : (a : core.DartList<double>,b : core.DartList<double>) => boolean = (a : core.DartList<double>,b : core.DartList<double>) : boolean =>  {
    if (((t)=>(!!t)?t.length:null)(a) != ((t)=>(!!t)?t.length:null)(b)) return false;
    for(let i : number = 0; i < a.length; i += 1){
        if (a[i] != b[i]) return false;
    }
    return true;
};
export var indicatorRect : (tabBarSize : any,tabIndex : number) => any = (tabBarSize : any,tabIndex : number) : any =>  {
    /* TODO (AssertStatementImpl) : assert (_currentTabOffsets != null); */;
    /* TODO (AssertStatementImpl) : assert (_currentTextDirection != null); */;
    /* TODO (AssertStatementImpl) : assert (_currentTabOffsets.isNotEmpty); */;
    /* TODO (AssertStatementImpl) : assert (tabIndex >= 0); */;
    /* TODO (AssertStatementImpl) : assert (tabIndex <= maxTabIndex); */;
    let tabLeft : double, tabRight : double;
    switch (properties._currentTextDirection) {
        case TextDirection.rtl:
            tabLeft = properties._currentTabOffsets[tabIndex + 1];
            tabRight = properties._currentTabOffsets[tabIndex];
            break;
        case TextDirection.ltr:
            tabLeft = properties._currentTabOffsets[tabIndex];
            tabRight = properties._currentTabOffsets[tabIndex + 1];
            break;
    }
    if (op(Op.EQUALS,properties.indicatorSize,TabBarIndicatorSize.label)) {
        let tabWidth : double = properties.tabKeys[tabIndex].currentContext.size.width;
        let delta : double = ((tabRight - tabLeft) - tabWidth) / 2.0;
        tabLeft += delta;
        tabRight -= delta;
    }
    return Rect.fromLTWH(tabLeft,0.0,tabRight - tabLeft,tabBarSize.height);
};
export namespace _IndicatorPainter {
    export type Constructors = lib24.CustomPainter.Constructors | '_IndicatorPainter';
    export type Interface = Omit<_IndicatorPainter, Constructors>;
}
@DartClass
export class _IndicatorPainter extends lib24.CustomPainter {
    constructor(_namedArguments? : {controller? : any,indicator? : any,indicatorSize? : any,tabKeys? : any,old? : _IndicatorPainter}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _IndicatorPainter(_namedArguments? : {controller? : any,indicator? : any,indicatorSize? : any,tabKeys? : any,old? : _IndicatorPainter}) {
        let {controller,indicator,indicatorSize,tabKeys,old} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.controller = controller;
        this.indicator = indicator;
        this.indicatorSize = indicatorSize;
        this.tabKeys = tabKeys;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    @Abstract
    saveTabOffsets( : any, : any){ throw 'abstract'}
}

export namespace _TabLabelBarRenderer {
    export type Constructors = lib7.RenderFlex.Constructors | '_TabLabelBarRenderer';
    export type Interface = Omit<_TabLabelBarRenderer, Constructors>;
}
@DartClass
export class _TabLabelBarRenderer extends lib7.RenderFlex {
    constructor(_namedArguments? : {children? : core.DartList<any>,direction? : lib20.Axis,mainAxisSize? : lib7.MainAxisSize,mainAxisAlignment? : lib7.MainAxisAlignment,crossAxisAlignment? : lib7.CrossAxisAlignment,textDirection? : any,verticalDirection? : lib20.VerticalDirection,onPerformLayout? : (xOffsets : core.DartList<double>,textDirection : any,width : double) => any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TabLabelBarRenderer(_namedArguments? : {children? : core.DartList<any>,direction? : lib20.Axis,mainAxisSize? : lib7.MainAxisSize,mainAxisAlignment? : lib7.MainAxisAlignment,crossAxisAlignment? : lib7.CrossAxisAlignment,textDirection? : any,verticalDirection? : lib20.VerticalDirection,onPerformLayout? : (xOffsets : core.DartList<double>,textDirection : any,width : double) => any}) {
        let {children,direction,mainAxisSize,mainAxisAlignment,crossAxisAlignment,textDirection,verticalDirection,onPerformLayout} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.onPerformLayout = onPerformLayout;
    }
     : any;

     : any;

     : any;

    children;
    direction;

    direction;
    mainAxisSize;

    mainAxisSize;
    mainAxisAlignment;

    mainAxisAlignment;
    crossAxisAlignment;

    crossAxisAlignment;
    textDirection;

    textDirection;
    verticalDirection;

    verticalDirection;
    ;

    onPerformLayout : (xOffsets : core.DartList<double>,textDirection : any,width : double) => any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        super.performLayout();
        let child : any = firstChild;
        let xOffsets : core.DartList<double> = new core.DartList.literal<double>();
        while (child != null){
            let childParentData : lib7.FlexParentData = child.parentData;
            xOffsets.add(childParentData.offset.dx);
            /* TODO (AssertStatementImpl) : assert (child.parentData == childParentData); */;
            child = childParentData.nextSibling;
        }
        /* TODO (AssertStatementImpl) : assert (textDirection != null); */;
        switch (this.textDirection) {
            case TextDirection.rtl:
                xOffsets.insert(0,lib21.properties.size.width);
                break;
            case TextDirection.ltr:
                xOffsets.add(lib21.properties.size.width);
                break;
        }
        this.onPerformLayout(xOffsets,this.textDirection,lib21.properties.size.width);
    }
}

export namespace TabPageSelector {
    export type Constructors = lib3.StatelessWidget.Constructors | 'TabPageSelector';
    export type Interface = Omit<TabPageSelector, Constructors>;
}
@DartClass
export class TabPageSelector extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,controller? : lib23.TabController,indicatorSize? : double,color? : any,selectedColor? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TabPageSelector(_namedArguments? : {key? : lib4.Key,controller? : lib23.TabController,indicatorSize? : double,color? : any,selectedColor? : any}) {
        let {key,controller,indicatorSize,color,selectedColor} = Object.assign({
            "indicatorSize" : 12.0}, _namedArguments );
        this.assert = assert;
        this.controller = controller;
        this.indicatorSize = indicatorSize;
        this.color = color;
        this.selectedColor = selectedColor;
    }
     : any;

     : any;

     : any;

     : any;

    controller : lib23.TabController;

    indicatorSize : double;

    color : any;

    selectedColor : any;

    _buildTabIndicator(tabIndex : number,tabController : lib23.TabController,selectedColorTween : lib50.ColorTween,previousColorTween : lib50.ColorTween) : lib3.Widget {
        let background : any;
        if (tabController.indexIsChanging) {
            let t : double = 1.0 - _indexChangeProgress(tabController);
            if (tabController.index == tabIndex) background = selectedColorTween.lerp(t);else if (tabController.previousIndex == tabIndex) background = previousColorTween.lerp(t);else background = selectedColorTween.begin;
        }else {
            let offset : double = tabController.offset;
            if (tabController.index == tabIndex) {
                background = selectedColorTween.lerp(1.0 - new core.DartDouble(offset).abs());
            }else if (tabController.index == tabIndex - 1 && offset > 0.0) {
                background = selectedColorTween.lerp(offset);
            }else if (tabController.index == tabIndex + 1 && offset < 0.0) {
                background = selectedColorTween.lerp(-offset);
            }else {
                background = selectedColorTween.begin;
            }
        }
        return TabPageSelectorIndicator({
            backgroundColor : background,borderColor : selectedColorTween.end,size : this.indicatorSize});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let fixColor : any = (this.color || lib36.Colors.transparent);
        let fixSelectedColor : any = (this.selectedColor || lib15.Theme.of(context).accentColor);
        let selectedColorTween : lib50.ColorTween = lib50.ColorTween({
            begin : fixColor,end : fixSelectedColor});
        let previousColorTween : lib50.ColorTween = lib50.ColorTween({
            begin : fixSelectedColor,end : fixColor});
        let tabController : lib23.TabController = (this.controller || lib23.DefaultTabController.of(context));
        /* TODO (AssertStatementImpl) : assert (() {if (tabController == null) {throw FlutterError('No TabController for $runtimeType.\n' 'When creating a $runtimeType, you must either provide an explicit TabController ' 'using the "controller" property, or you must ensure that there is a ' 'DefaultTabController above the $runtimeType.\n' 'In this case, there was neither an explicit controller nor a default controller.');} return true;}()); */;
        let animation : lib13.Animation<double> = lib42.CurvedAnimation({
            parent : tabController.animation,curve : lib40.Curves.fastOutSlowIn});
        return lib12.AnimatedBuilder({
            animation : animation,builder : (context : lib3.BuildContext,child : lib3.Widget) =>  {
                return lib10.Semantics({
                    label : `Page ${tabController.index + 1} of ${tabController.length}`,child : op(Op.GT,lib10.Row({
                        mainAxisSize : lib7.MainAxisSize.min,children : op(Op.LT,core.DartList<E>,lib3.Widget)}),.generate(tabController.length,(tabIndex : number) =>  {
                        return this._buildTabIndicator(tabIndex,tabController,selectedColorTween,previousColorTween);
                    }).toList())});
                ;
            }});
    }
}

export namespace _TabStyle {
    export type Constructors = lib12.AnimatedWidget.Constructors | '_TabStyle';
    export type Interface = Omit<_TabStyle, Constructors>;
}
@DartClass
export class _TabStyle extends lib12.AnimatedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,animation? : lib13.Animation<double>,selected? : boolean,labelColor? : any,unselectedLabelColor? : any,labelStyle? : lib14.TextStyle,unselectedLabelStyle? : lib14.TextStyle,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TabStyle(_namedArguments? : {key? : lib4.Key,animation? : lib13.Animation<double>,selected? : boolean,labelColor? : any,unselectedLabelColor? : any,labelStyle? : lib14.TextStyle,unselectedLabelStyle? : lib14.TextStyle,child? : lib3.Widget}) {
        let {key,animation,selected,labelColor,unselectedLabelColor,labelStyle,unselectedLabelStyle,child} = Object.assign({
        }, _namedArguments );
        super.AnimatedWidget({
            key : key,listenable : animation});
        this.selected = selected;
        this.labelColor = labelColor;
        this.unselectedLabelColor = unselectedLabelColor;
        this.labelStyle = labelStyle;
        this.unselectedLabelStyle = unselectedLabelStyle;
        this.child = child;
    }
    labelStyle : lib14.TextStyle;

    unselectedLabelStyle : lib14.TextStyle;

    selected : boolean;

    labelColor : any;

    unselectedLabelColor : any;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let themeData : lib16.ThemeData = lib15.Theme.of(context);
        let tabBarTheme : lib17.TabBarTheme = lib17.TabBarTheme.of(context);
        let defaultStyle : lib14.TextStyle = ((this.labelStyle || tabBarTheme.labelStyle) || themeData.primaryTextTheme.body2);
        let defaultUnselectedStyle : lib14.TextStyle = (((this.unselectedLabelStyle || tabBarTheme.unselectedLabelStyle) || this.labelStyle) || themeData.primaryTextTheme.body2);
        let animation : lib13.Animation<double> = this.listenable;
        let textStyle : lib14.TextStyle = this.selected ? lib14.TextStyle.lerp(defaultStyle,defaultUnselectedStyle,animation.value) : lib14.TextStyle.lerp(defaultUnselectedStyle,defaultStyle,animation.value);
        let selectedColor : any = ((this.labelColor || tabBarTheme.labelColor) || themeData.primaryTextTheme.body2.color);
        let unselectedColor : any = ((this.unselectedLabelColor || tabBarTheme.unselectedLabelColor) || selectedColor.withAlpha(178));
        let color : any = this.selected ? Color.lerp(selectedColor,unselectedColor,animation.value) : Color.lerp(unselectedColor,selectedColor,animation.value);
        return lib6.DefaultTextStyle({
            style : textStyle.copyWith({
                color : color}),child : lib19.IconTheme.merge({
                data : lib18.IconThemeData({
                    size : 24.0,color : color}),child : this.child})});
    }
}

export namespace Tab {
    export type Constructors = lib3.StatelessWidget.Constructors | 'Tab';
    export type Interface = Omit<Tab, Constructors>;
}
@DartClass
export class Tab extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,text? : string,icon? : lib3.Widget,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Tab(_namedArguments? : {key? : lib4.Key,text? : string,icon? : lib3.Widget,child? : lib3.Widget}) {
        let {key,text,icon,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.text = text;
        this.icon = icon;
        this.child = child;
    }
     : any;

     : any;

     : any;

    [null](text : any, : any) {
    }
     : any;

     : any;

     : any;

    text : string;

    child : lib3.Widget;

    icon : lib3.Widget;

    _buildLabelText() : lib3.Widget {
        return (this.child || lib6.Text(this.text,{
            softWrap : false,overflow : lib5.TextOverflow.fade}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterial(context)); */;
        let height : double;
        let label : lib3.Widget;
        if (op(Op.EQUALS,this.icon,null)) {
            height = properties._kTabHeight;
            label = this._buildLabelText();
        }else if (this.text == null && op(Op.EQUALS,this.child,null)) {
            height = properties._kTabHeight;
            label = this.icon;
        }else {
            height = properties._kTextAndIconTabHeight;
            label = lib10.Column({
                mainAxisAlignment : lib7.MainAxisAlignment.center,crossAxisAlignment : lib7.CrossAxisAlignment.center,children : new core.DartList.literal<lib3.Widget>(lib9.Container({
                    child : this.icon,margin : new lib8.EdgeInsets.only({
                        bottom : 10.0})}),this._buildLabelText())});
        }
        return lib10.SizedBox({
            height : height,child : lib10.Center({
                child : label,widthFactor : 1.0})});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib11.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib11.StringProperty('text',this.text,{
            defaultValue : null}));
        properties.add(lib11.DiagnosticsProperty('icon',this.icon,{
            defaultValue : null}));
    }
}

export namespace _ChangeAnimation {
    export type Constructors = lib13.Animation.Constructors | '_ChangeAnimation';
    export type Interface = Omit<_ChangeAnimation, Constructors>;
}
@DartClass
@With(any)
export class _ChangeAnimation extends lib13.Animation<double> implements any.Interface {
    constructor(controller : lib23.TabController) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ChangeAnimation(controller : lib23.TabController) {
        this.controller = controller;
    }
    controller : lib23.TabController;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parent() : lib13.Animation<double> {
        return this.controller.animation;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get value() : double {
        return _indexChangeProgress(this.controller);
    }
}

export namespace _DragAnimation {
    export type Constructors = lib13.Animation.Constructors | '_DragAnimation';
    export type Interface = Omit<_DragAnimation, Constructors>;
}
@DartClass
@With(any)
export class _DragAnimation extends lib13.Animation<double> implements any.Interface {
    constructor(controller : lib23.TabController,index : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DragAnimation(controller : lib23.TabController,index : number) {
        this.controller = controller;
        this.index = index;
    }
    controller : lib23.TabController;

    index : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parent() : lib13.Animation<double> {
        return this.controller.animation;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get value() : double {
        /* TODO (AssertStatementImpl) : assert (!controller.indexIsChanging); */;
        return new core.DartDouble(new core.DartDouble((this.controller.animation.value - new core.DartInt(this.index).toDouble())).abs()).clamp(0.0,1.0);
    }
}

export namespace _TabBarScrollPosition {
    export type Constructors = lib27.ScrollPositionWithSingleContext.Constructors | '_TabBarScrollPosition';
    export type Interface = Omit<_TabBarScrollPosition, Constructors>;
}
@DartClass
export class _TabBarScrollPosition extends lib27.ScrollPositionWithSingleContext {
    constructor(_namedArguments? : {physics? : lib28.ScrollPhysics,context? : lib29.ScrollContext,oldPosition? : lib30.ScrollPosition,tabBar? : _TabBarState}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TabBarScrollPosition(_namedArguments? : {physics? : lib28.ScrollPhysics,context? : lib29.ScrollContext,oldPosition? : lib30.ScrollPosition,tabBar? : _TabBarState}) {
        let {physics,context,oldPosition,tabBar} = Object.assign({
        }, _namedArguments );
        super.ScrollPositionWithSingleContext({
            physics : physics,context : context,initialPixels : null,oldPosition : oldPosition});
        this.tabBar = tabBar;
    }
    tabBar : _TabBarState;

    _initialViewportDimensionWasZero : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyContentDimensions(minScrollExtent : double,maxScrollExtent : double) : boolean {
        let result : boolean = true;
        if (this._initialViewportDimensionWasZero != true) {
            /* TODO (AssertStatementImpl) : assert (viewportDimension != null); */;
            this._initialViewportDimensionWasZero = lib30.properties.viewportDimension != 0.0;
            lib30.correctPixels(this.tabBar._initialScrollOffset(lib30.properties.viewportDimension,minScrollExtent,maxScrollExtent));
            result = false;
        }
        return super.applyContentDimensions(minScrollExtent,maxScrollExtent) && result;
    }
}

export namespace _TabBarScrollController {
    export type Constructors = lib31.ScrollController.Constructors | '_TabBarScrollController';
    export type Interface = Omit<_TabBarScrollController, Constructors>;
}
@DartClass
export class _TabBarScrollController extends lib31.ScrollController {
    constructor(tabBar : _TabBarState) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TabBarScrollController(tabBar : _TabBarState) {
        this.tabBar = tabBar;
    }
    tabBar : _TabBarState;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createScrollPosition(physics : lib28.ScrollPhysics,context : lib29.ScrollContext,oldPosition : lib30.ScrollPosition) : lib30.ScrollPosition {
        return _TabBarScrollPosition({
            physics : physics,context : context,oldPosition : oldPosition,tabBar : this.tabBar});
    }
}

export namespace TabBar {
    export type Constructors = lib3.StatefulWidget.Constructors | 'TabBar';
    export type Interface = Omit<TabBar, Constructors>;
}
@DartClass
@Implements(lib32.PreferredSizeWidget)
export class TabBar extends lib3.StatefulWidget implements lib32.PreferredSizeWidget.Interface {
    constructor(_namedArguments? : {key? : lib4.Key,tabs? : core.DartList<lib3.Widget>,controller? : lib23.TabController,isScrollable? : boolean,indicatorColor? : any,indicatorWeight? : double,indicatorPadding? : lib8.EdgeInsetsGeometry,indicator? : lib25.Decoration,indicatorSize? : TabBarIndicatorSize,labelColor? : any,labelStyle? : lib14.TextStyle,labelPadding? : lib8.EdgeInsetsGeometry,unselectedLabelColor? : any,unselectedLabelStyle? : lib14.TextStyle,dragStartBehavior? : lib33.DragStartBehavior,onTap? : <T>(value : number) => void}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TabBar(_namedArguments? : {key? : lib4.Key,tabs? : core.DartList<lib3.Widget>,controller? : lib23.TabController,isScrollable? : boolean,indicatorColor? : any,indicatorWeight? : double,indicatorPadding? : lib8.EdgeInsetsGeometry,indicator? : lib25.Decoration,indicatorSize? : TabBarIndicatorSize,labelColor? : any,labelStyle? : lib14.TextStyle,labelPadding? : lib8.EdgeInsetsGeometry,unselectedLabelColor? : any,unselectedLabelStyle? : lib14.TextStyle,dragStartBehavior? : lib33.DragStartBehavior,onTap? : <T>(value : number) => void}) {
        let {key,tabs,controller,isScrollable,indicatorColor,indicatorWeight,indicatorPadding,indicator,indicatorSize,labelColor,labelStyle,labelPadding,unselectedLabelColor,unselectedLabelStyle,dragStartBehavior,onTap} = Object.assign({
            "isScrollable" : false,
            "indicatorWeight" : 2.0,
            "indicatorPadding" : lib8.EdgeInsets.zero,
            "dragStartBehavior" : lib33.DragStartBehavior.down}, _namedArguments );
        this.assert = assert;
        this.tabs = tabs;
        this.controller = controller;
        this.isScrollable = isScrollable;
        this.indicatorColor = indicatorColor;
        this.indicatorWeight = indicatorWeight;
        this.indicatorPadding = indicatorPadding;
        this.indicator = indicator;
        this.indicatorSize = indicatorSize;
        this.labelColor = labelColor;
        this.labelStyle = labelStyle;
        this.labelPadding = labelPadding;
        this.unselectedLabelColor = unselectedLabelColor;
        this.unselectedLabelStyle = unselectedLabelStyle;
        this.dragStartBehavior = dragStartBehavior;
        this.onTap = onTap;
    }
     : any;

     : any;

     : any;

     : any;

    [null](indicatorWeight : any, : any) {
    }
     : any;

     : any;

    [null](indicatorPadding : any, : any) {
    }
     : any;

     : any;

    tabs : core.DartList<lib3.Widget>;

    controller : lib23.TabController;

    isScrollable : boolean;

    indicatorColor : any;

    indicatorWeight : double;

    indicatorPadding : lib8.EdgeInsetsGeometry;

    indicator : lib25.Decoration;

    indicatorSize : TabBarIndicatorSize;

    labelColor : any;

    unselectedLabelColor : any;

    labelStyle : lib14.TextStyle;

    labelPadding : lib8.EdgeInsetsGeometry;

    unselectedLabelStyle : lib14.TextStyle;

    dragStartBehavior : lib33.DragStartBehavior;

    onTap : <T>(value : number) => void;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get preferredSize() : any {
        for(let item of this.tabs) {
            if (is(item, Tab)) {
                let tab : Tab = item;
                if (tab.text != null && tab.icon != null) return Size.fromHeight(properties._kTextAndIconTabHeight + this.indicatorWeight);
            }
        }
        return Size.fromHeight(properties._kTabHeight + this.indicatorWeight);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _TabBarState {
        return _TabBarState();
    }
}

export namespace _TabBarState {
    export type Constructors = '_TabBarState';
    export type Interface = Omit<_TabBarState, Constructors>;
}
@DartClass
export class _TabBarState extends any {
    _scrollController : lib31.ScrollController;

    _controller : lib23.TabController;

    _indicatorPainter : _IndicatorPainter;

    _currentIndex : number;

    _tabStripWidth : double;

    _tabKeys : core.DartList<lib3.GlobalKey<any>>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._tabKeys = widget.tabs.map((tab : lib3.Widget) =>  {
            return lib3.GlobalKey();
        }).toList();
    }
    get _indicator() : lib25.Decoration {
        if (widget.indicator != null) return widget.indicator;
        let tabBarTheme : lib17.TabBarTheme = lib17.TabBarTheme.of(lib34.properties.context);
        if (tabBarTheme.indicator != null) return tabBarTheme.indicator;
        let color : any = (widget.indicatorColor || lib15.Theme.of(lib34.properties.context).indicatorColor);
        if (op(Op.EQUALS,color.value,((t)=>(!!t)?t.value:null)(lib35.Material.of(lib34.properties.context).color))) color = lib36.Colors.white;
        return lib38.UnderlineTabIndicator({
            insets : widget.indicatorPadding,borderSide : lib37.BorderSide({
                width : widget.indicatorWeight,color : color})});
    }
    _updateTabController() : any {
        let newController : lib23.TabController = (widget.controller || lib23.DefaultTabController.of(lib34.properties.context));
        /* TODO (AssertStatementImpl) : assert (() {if (newController == null) {throw FlutterError('No TabController for ${widget.runtimeType}.\n' 'When creating a ${widget.runtimeType}, you must either provide an explicit ' 'TabController using the "controller" property, or you must ensure that there ' 'is a DefaultTabController above the ${widget.runtimeType}.\n' 'In this case, there was neither an explicit controller nor a default controller.');} return true;}()); */;
        if (op(Op.EQUALS,newController,this._controller)) return;
        if (this._controller != null) {
            this._controller.animation.removeListener(this._handleTabControllerAnimationTick.bind(this));
            this._controller.removeListener(this._handleTabControllerTick.bind(this));
        }
        this._controller = newController;
        if (this._controller != null) {
            this._controller.animation.addListener(this._handleTabControllerAnimationTick.bind(this));
            this._controller.addListener(this._handleTabControllerTick.bind(this));
            this._currentIndex = this._controller.index;
        }
    }
    _initIndicatorPainter() : any {
        this._indicatorPainter = op(Op.EQUALS,this._controller,null) ? null : _IndicatorPainter({
            controller : this._controller,indicator : this._indicator,indicatorSize : (widget.indicatorSize || lib17.TabBarTheme.of(lib34.properties.context).indicatorSize),tabKeys : this._tabKeys,old : this._indicatorPainter});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        super.didChangeDependencies();
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterial(context)); */;
        this._updateTabController();
        this._initIndicatorPainter();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : TabBar) : any {
        super.didUpdateWidget(oldWidget);
        if (widget.controller != oldWidget.controller) {
            this._updateTabController();
            this._initIndicatorPainter();
        }else if (widget.indicatorColor != oldWidget.indicatorColor || widget.indicatorWeight != oldWidget.indicatorWeight || widget.indicatorSize != oldWidget.indicatorSize || widget.indicator != oldWidget.indicator) {
            this._initIndicatorPainter();
        }
        if (op(Op.GT,widget.tabs.length,oldWidget.tabs.length)) {
            let delta : number = op(Op.MINUS,widget.tabs.length,oldWidget.tabs.length);
            op(Op.GT,this._tabKeys.addAll(op(Op.LT,core.DartList<E>,lib3.GlobalKey<T>)),.generate(delta,(n : number) =>  {
                return lib3.GlobalKey();
            }));
        }else if (op(Op.LT,widget.tabs.length,oldWidget.tabs.length)) {
            this._tabKeys.removeRange(widget.tabs.length,oldWidget.tabs.length);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._indicatorPainter.dispose();
        if (this._controller != null) {
            this._controller.animation.removeListener(this._handleTabControllerAnimationTick.bind(this));
            this._controller.removeListener(this._handleTabControllerTick.bind(this));
        }
        super.dispose();
    }
    get maxTabIndex() : number {
        return this._indicatorPainter.maxTabIndex;
    }
    _tabScrollOffset(index : number,viewportWidth : double,minExtent : double,maxExtent : double) : double {
        if (!widget.isScrollable) return 0.0;
        let tabCenter : double = this._indicatorPainter.centerOf(index);
        switch (lib10.Directionality.of(lib34.properties.context)) {
            case TextDirection.rtl:
                tabCenter = this._tabStripWidth - tabCenter;
                break;
            case TextDirection.ltr:
                break;
        }
        return new core.DartDouble((tabCenter - viewportWidth / 2.0)).clamp(minExtent,maxExtent);
    }
    _tabCenteredScrollOffset(index : number) : double {
        let position : lib30.ScrollPosition = this._scrollController.position;
        return this._tabScrollOffset(index,position.viewportDimension,position.minScrollExtent,position.maxScrollExtent);
    }
    _initialScrollOffset(viewportWidth : double,minExtent : double,maxExtent : double) : double {
        return this._tabScrollOffset(this._currentIndex,viewportWidth,minExtent,maxExtent);
    }
    _scrollToCurrentIndex() : any {
        let offset : double = this._tabCenteredScrollOffset(this._currentIndex);
        this._scrollController.animateTo(offset,{
            duration : lib39.properties.kTabScrollDuration,curve : lib40.Curves.ease});
    }
    _scrollToControllerValue() : any {
        let leadingPosition : double = this._currentIndex > 0 ? this._tabCenteredScrollOffset(this._currentIndex - 1) : null;
        let middlePosition : double = this._tabCenteredScrollOffset(this._currentIndex);
        let trailingPosition : double = this._currentIndex < this.maxTabIndex ? this._tabCenteredScrollOffset(this._currentIndex + 1) : null;
        let index : double = new core.DartInt(this._controller.index).toDouble();
        let value : double = this._controller.animation.value;
        let offset : double;
        if (value == index - 1.0) offset = (leadingPosition || middlePosition);else if (value == index + 1.0) offset = (trailingPosition || middlePosition);else if (value == index) offset = middlePosition;else if (value < index) offset = leadingPosition == null ? middlePosition : lerpDouble(middlePosition,leadingPosition,index - value);else offset = trailingPosition == null ? middlePosition : lerpDouble(middlePosition,trailingPosition,value - index);
        this._scrollController.jumpTo(offset);
    }
    _handleTabControllerAnimationTick() : any {
        /* TODO (AssertStatementImpl) : assert (mounted); */;
        if (!this._controller.indexIsChanging && widget.isScrollable) {
            this._currentIndex = this._controller.index;
            this._scrollToControllerValue();
        }
    }
    _handleTabControllerTick() : any {
        if (this._controller.index != this._currentIndex) {
            this._currentIndex = this._controller.index;
            if (widget.isScrollable) this._scrollToCurrentIndex();
        }
        setState(() =>  {
        });
    }
    _saveTabOffsets(tabOffsets : core.DartList<double>,textDirection : any,width : double) : any {
        this._tabStripWidth = width;
        ((_755_)=>(!!_755_)?_755_.saveTabOffsets(tabOffsets,textDirection):null)(this._indicatorPainter);
    }
    _handleTap(index : number) : any {
        /* TODO (AssertStatementImpl) : assert (index >= 0 && index < widget.tabs.length); */;
        this._controller.animateTo(index);
        if (widget.onTap != null) {
            widget.onTap(index);
        }
    }
    _buildStyledTab(child : lib3.Widget,selected : boolean,animation : lib13.Animation<double>) : lib3.Widget {
        return _TabStyle({
            animation : animation,selected : selected,labelColor : widget.labelColor,unselectedLabelColor : widget.unselectedLabelColor,labelStyle : widget.labelStyle,unselectedLabelStyle : widget.unselectedLabelStyle,child : child});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        let localizations : lib41.MaterialLocalizations = lib41.MaterialLocalizations.of(context);
        if (this._controller.length == 0) {
            return lib9.Container({
                height : properties._kTabHeight + widget.indicatorWeight});
        }
        let wrappedTabs : core.DartList<lib3.Widget> = core.DartList(widget.tabs.length);
        for(let i : number = 0; i < widget.tabs.length; i += 1){
            wrappedTabs[i] = lib10.Center({
                heightFactor : 1.0,child : lib10.Padding({
                    padding : (widget.labelPadding || lib39.properties.kTabLabelPadding),child : lib10.KeyedSubtree({
                        key : this._tabKeys[i],child : op(Op.INDEX,widget.tabs,i)})})});
        }
        if (this._controller != null) {
            let previousIndex : number = this._controller.previousIndex;
            if (this._controller.indexIsChanging) {
                /* TODO (AssertStatementImpl) : assert (_currentIndex != previousIndex); */;
                let animation : lib13.Animation<double> = _ChangeAnimation(this._controller);
                wrappedTabs[this._currentIndex] = this._buildStyledTab(wrappedTabs[this._currentIndex],true,animation);
                wrappedTabs[previousIndex] = this._buildStyledTab(wrappedTabs[previousIndex],false,animation);
            }else {
                let tabIndex : number = this._currentIndex;
                let centerAnimation : lib13.Animation<double> = _DragAnimation(this._controller,tabIndex);
                wrappedTabs[tabIndex] = this._buildStyledTab(wrappedTabs[tabIndex],true,centerAnimation);
                if (this._currentIndex > 0) {
                    let tabIndex : number = this._currentIndex - 1;
                    let previousAnimation : lib13.Animation<double> = lib42.ReverseAnimation(_DragAnimation(this._controller,tabIndex));
                    wrappedTabs[tabIndex] = this._buildStyledTab(wrappedTabs[tabIndex],false,previousAnimation);
                }
                if (this._currentIndex < op(Op.MINUS,widget.tabs.length,1)) {
                    let tabIndex : number = this._currentIndex + 1;
                    let nextAnimation : lib13.Animation<double> = lib42.ReverseAnimation(_DragAnimation(this._controller,tabIndex));
                    wrappedTabs[tabIndex] = this._buildStyledTab(wrappedTabs[tabIndex],false,nextAnimation);
                }
            }
        }
        let tabCount : number = widget.tabs.length;
        for(let index : number = 0; index < tabCount; index += 1){
            wrappedTabs[index] = lib43.InkWell({
                onTap : () =>  {
                    this._handleTap(index);
                },child : lib10.Padding({
                    padding : lib8.EdgeInsets.only({
                        bottom : widget.indicatorWeight}),child : lib10.Stack({
                        children : new core.DartList.literal<lib3.Widget>(wrappedTabs[index],lib10.Semantics({
                            selected : index == this._currentIndex,label : localizations.tabLabel({
                                tabIndex : index + 1,tabCount : tabCount})}))})})});
            if (!widget.isScrollable) wrappedTabs[index] = lib10.Expanded({
                child : wrappedTabs[index]});
        }
        let tabBar : lib3.Widget = lib10.CustomPaint({
            painter : this._indicatorPainter,child : _TabStyle({
                animation : lib42.properties.kAlwaysDismissedAnimation,selected : false,labelColor : widget.labelColor,unselectedLabelColor : widget.unselectedLabelColor,labelStyle : widget.labelStyle,unselectedLabelStyle : widget.unselectedLabelStyle,child : _TabLabelBar({
                    onPerformLayout : this._saveTabOffsets.bind(this),children : wrappedTabs})})});
        if (widget.isScrollable) {
            this._scrollController = ( this._scrollController ) || ( _TabBarScrollController(this) );
            tabBar = lib44.SingleChildScrollView({
                dragStartBehavior : widget.dragStartBehavior,scrollDirection : lib20.Axis.horizontal,controller : this._scrollController,child : tabBar});
        }
        return tabBar;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TabBarState() {
    }
}

export namespace TabBarView {
    export type Constructors = lib3.StatefulWidget.Constructors | 'TabBarView';
    export type Interface = Omit<TabBarView, Constructors>;
}
@DartClass
export class TabBarView extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,children? : core.DartList<lib3.Widget>,controller? : lib23.TabController,physics? : lib28.ScrollPhysics,dragStartBehavior? : lib33.DragStartBehavior}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TabBarView(_namedArguments? : {key? : lib4.Key,children? : core.DartList<lib3.Widget>,controller? : lib23.TabController,physics? : lib28.ScrollPhysics,dragStartBehavior? : lib33.DragStartBehavior}) {
        let {key,children,controller,physics,dragStartBehavior} = Object.assign({
            "dragStartBehavior" : lib33.DragStartBehavior.down}, _namedArguments );
        this.assert = assert;
        this.children = children;
        this.controller = controller;
        this.physics = physics;
        this.dragStartBehavior = dragStartBehavior;
    }
     : any;

     : any;

     : any;

     : any;

    controller : lib23.TabController;

    children : core.DartList<lib3.Widget>;

    physics : lib28.ScrollPhysics;

    dragStartBehavior : lib33.DragStartBehavior;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _TabBarViewState {
        return _TabBarViewState();
    }
}

export enum TabBarIndicatorSize {
    tab,
    label
}

export namespace _TabBarViewState {
    export type Constructors = '_TabBarViewState';
    export type Interface = Omit<_TabBarViewState, Constructors>;
}
@DartClass
export class _TabBarViewState extends any {
    _controller : lib23.TabController;

    _pageController : lib45.PageController;

    _children : core.DartList<lib3.Widget>;

    _currentIndex : number;

    _warpUnderwayCount : number;

    _updateTabController() : any {
        let newController : lib23.TabController = (widget.controller || lib23.DefaultTabController.of(lib34.properties.context));
        /* TODO (AssertStatementImpl) : assert (() {if (newController == null) {throw FlutterError('No TabController for ${widget.runtimeType}.\n' 'When creating a ${widget.runtimeType}, you must either provide an explicit ' 'TabController using the "controller" property, or you must ensure that there ' 'is a DefaultTabController above the ${widget.runtimeType}.\n' 'In this case, there was neither an explicit controller nor a default controller.');} return true;}()); */;
        if (op(Op.EQUALS,newController,this._controller)) return;
        if (this._controller != null) this._controller.animation.removeListener(this._handleTabControllerAnimationTick.bind(this));
        this._controller = newController;
        if (this._controller != null) this._controller.animation.addListener(this._handleTabControllerAnimationTick.bind(this));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._children = widget.children;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        super.didChangeDependencies();
        this._updateTabController();
        this._currentIndex = ((t)=>(!!t)?t.index:null)(this._controller);
        this._pageController = lib45.PageController({
            initialPage : (this._currentIndex || 0)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : TabBarView) : any {
        super.didUpdateWidget(oldWidget);
        if (widget.controller != oldWidget.controller) this._updateTabController();
        if (widget.children != oldWidget.children && this._warpUnderwayCount == 0) this._children = widget.children;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        if (this._controller != null) this._controller.animation.removeListener(this._handleTabControllerAnimationTick.bind(this));
        super.dispose();
    }
    _handleTabControllerAnimationTick() : any {
        if (this._warpUnderwayCount > 0 || !this._controller.indexIsChanging) return;
        if (this._controller.index != this._currentIndex) {
            this._currentIndex = this._controller.index;
            this._warpToCurrentIndex();
        }
    }
    void : async.Future<any>;

    _warpToCurrentIndex() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!mounted) return op(Op.LT,async.Future<T>,);
            op(Op.GT,,.value());
            if (this._pageController.page == new core.DartInt(this._currentIndex).toDouble()) return op(Op.LT,async.Future<T>,);
            op(Op.GT,,.value());
            let previousIndex : number = this._controller.previousIndex;
            if (new core.DartInt((this._currentIndex - previousIndex)).abs() == 1) return this._pageController.animateToPage(this._currentIndex,{
                duration : lib39.properties.kTabScrollDuration,curve : lib40.Curves.ease});
            /* TODO (AssertStatementImpl) : assert ((_currentIndex - previousIndex).abs() > 1); */;
            let initialPage : number;
            setState(() =>  {
                this._warpUnderwayCount += 1;
                this._children = op(Op.LT,core.DartList<E>,lib3.Widget);
                op(Op.GT,,.from(widget.children,{
                    growable : false}));
                if (this._currentIndex > previousIndex) {
                    this._children[this._currentIndex - 1] = this._children[previousIndex];
                    initialPage = this._currentIndex - 1;
                }else {
                    this._children[this._currentIndex + 1] = this._children[previousIndex];
                    initialPage = this._currentIndex + 1;
                }
            });
            this._pageController.jumpToPage(initialPage);
            await this._pageController.animateToPage(this._currentIndex,{
                duration : lib39.properties.kTabScrollDuration,curve : lib40.Curves.ease});
            if (!mounted) return op(Op.LT,async.Future<T>,);
            op(Op.GT,,.value());
            setState(() =>  {
                this._warpUnderwayCount -= 1;
                this._children = widget.children;
            });
        } )());
    }

    _handleScrollNotification(notification : lib46.ScrollNotification) : boolean {
        if (this._warpUnderwayCount > 0) return false;
        if (notification.depth != 0) return false;
        this._warpUnderwayCount += 1;
        if (is(notification, lib46.ScrollUpdateNotification) && !this._controller.indexIsChanging) {
            if (new core.DartDouble((this._pageController.page - this._controller.index)).abs() > 1.0) {
                this._controller.index = new core.DartDouble(this._pageController.page).floor();
                this._currentIndex = this._controller.index;
            }
            this._controller.offset = new core.DartDouble((this._pageController.page - this._controller.index)).clamp(-1.0,1.0);
        }else if (is(notification, lib46.ScrollEndNotification)) {
            this._controller.index = new core.DartDouble(this._pageController.page).round();
            this._currentIndex = this._controller.index;
        }
        this._warpUnderwayCount -= 1;
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib47.NotificationListener({
            onNotification : this._handleScrollNotification.bind(this),child : lib45.PageView({
                dragStartBehavior : widget.dragStartBehavior,controller : this._pageController,physics : op(Op.EQUALS,widget.physics,null) ? properties._kTabBarViewPhysics : properties._kTabBarViewPhysics.applyTo(widget.physics),children : this._children})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TabBarViewState() {
        this._warpUnderwayCount = 0;
    }
}

export namespace TabPageSelectorIndicator {
    export type Constructors = lib3.StatelessWidget.Constructors | 'TabPageSelectorIndicator';
    export type Interface = Omit<TabPageSelectorIndicator, Constructors>;
}
@DartClass
export class TabPageSelectorIndicator extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,backgroundColor? : any,borderColor? : any,size? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TabPageSelectorIndicator(_namedArguments? : {key? : lib4.Key,backgroundColor? : any,borderColor? : any,size? : double}) {
        let {key,backgroundColor,borderColor,size} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.backgroundColor = backgroundColor;
        this.borderColor = borderColor;
        this.size = size;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    backgroundColor : any;

    borderColor : any;

    size : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib9.Container({
            width : this.size,height : this.size,margin : new lib8.EdgeInsets.all(4.0),decoration : lib49.BoxDecoration({
                color : this.backgroundColor,border : lib48.Border.all({
                    color : this.borderColor}),shape : lib48.BoxShape.circle})});
    }
}

export namespace _TabLabelBar {
    export type Constructors = lib10.Flex.Constructors | '_TabLabelBar';
    export type Interface = Omit<_TabLabelBar, Constructors>;
}
@DartClass
export class _TabLabelBar extends lib10.Flex {
    constructor(_namedArguments? : {key? : lib4.Key,children? : core.DartList<lib3.Widget>,onPerformLayout? : (xOffsets : core.DartList<double>,textDirection : any,width : double) => any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TabLabelBar(_namedArguments? : {key? : lib4.Key,children? : core.DartList<lib3.Widget>,onPerformLayout? : (xOffsets : core.DartList<double>,textDirection : any,width : double) => any}) {
        let {key,children,onPerformLayout} = Object.assign({
            "children" : new core.DartList.literal<lib3.Widget>()}, _namedArguments );
        super.Flex({
            key : key,children : children,direction : lib20.Axis.horizontal,mainAxisSize : lib7.MainAxisSize.max,mainAxisAlignment : lib7.MainAxisAlignment.start,crossAxisAlignment : lib7.CrossAxisAlignment.center,verticalDirection : lib20.VerticalDirection.down});
        this.onPerformLayout = onPerformLayout;
    }
    onPerformLayout : (xOffsets : core.DartList<double>,textDirection : any,width : double) => any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib7.RenderFlex {
        return _TabLabelBarRenderer({
            direction : lib22.properties.direction,mainAxisAlignment : lib7.properties.mainAxisAlignment,mainAxisSize : lib7.properties.mainAxisSize,crossAxisAlignment : lib22.properties.crossAxisAlignment,textDirection : this.getEffectiveTextDirection(context),verticalDirection : lib22.properties.verticalDirection,onPerformLayout : this.onPerformLayout});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : _TabLabelBarRenderer) : any {
        super.updateRenderObject(context,renderObject);
        renderObject.onPerformLayout = this.onPerformLayout;
    }
}

export class properties {
    private static __$_kTextAndIconTabHeight : double;
    static get _kTextAndIconTabHeight() : double { 
        if (this.__$_kTextAndIconTabHeight===undefined) {
            this.__$_kTextAndIconTabHeight = 72.0;
        }
        return this.__$_kTextAndIconTabHeight;
    }
    static set _kTextAndIconTabHeight(__$value : double)  { 
        this.__$_kTextAndIconTabHeight = __$value;
    }

    private static __$tabKeys : core.DartList<lib3.GlobalKey<any>>;
    static get tabKeys() : core.DartList<lib3.GlobalKey<any>> { 
        return this.__$tabKeys;
    }
    static set tabKeys(__$value : core.DartList<lib3.GlobalKey<any>>)  { 
        this.__$tabKeys = __$value;
    }

    private static __$controller : lib23.TabController;
    static get controller() : lib23.TabController { 
        return this.__$controller;
    }
    static set controller(__$value : lib23.TabController)  { 
        this.__$controller = __$value;
    }

    private static __$indicator : lib25.Decoration;
    static get indicator() : lib25.Decoration { 
        return this.__$indicator;
    }
    static set indicator(__$value : lib25.Decoration)  { 
        this.__$indicator = __$value;
    }

    private static __$indicatorSize : TabBarIndicatorSize;
    static get indicatorSize() : TabBarIndicatorSize { 
        return this.__$indicatorSize;
    }
    static set indicatorSize(__$value : TabBarIndicatorSize)  { 
        this.__$indicatorSize = __$value;
    }

    private static __$_kTabHeight : double;
    static get _kTabHeight() : double { 
        if (this.__$_kTabHeight===undefined) {
            this.__$_kTabHeight = 46.0;
        }
        return this.__$_kTabHeight;
    }
    static set _kTabHeight(__$value : double)  { 
        this.__$_kTabHeight = __$value;
    }

    private static __$_currentTabOffsets : core.DartList<double>;
    static get _currentTabOffsets() : core.DartList<double> { 
        return this.__$_currentTabOffsets;
    }
    static set _currentTabOffsets(__$value : core.DartList<double>)  { 
        this.__$_currentTabOffsets = __$value;
    }

    private static __$_currentTextDirection : any;
    static get _currentTextDirection() : any { 
        return this.__$_currentTextDirection;
    }
    static set _currentTextDirection(__$value : any)  { 
        this.__$_currentTextDirection = __$value;
    }

    private static __$_currentRect : any;
    static get _currentRect() : any { 
        return this.__$_currentRect;
    }
    static set _currentRect(__$value : any)  { 
        this.__$_currentRect = __$value;
    }

    private static __$_painter : lib25.BoxPainter;
    static get _painter() : lib25.BoxPainter { 
        return this.__$_painter;
    }
    static set _painter(__$value : lib25.BoxPainter)  { 
        this.__$_painter = __$value;
    }

    private static __$_needsPaint : boolean;
    static get _needsPaint() : boolean { 
        if (this.__$_needsPaint===undefined) {
            this.__$_needsPaint = false;
        }
        return this.__$_needsPaint;
    }
    static set _needsPaint(__$value : boolean)  { 
        this.__$_needsPaint = __$value;
    }

    static get maxTabIndex() : number {
        return properties._currentTabOffsets.length - 2;
    }
    private static __$_kTabBarViewPhysics : lib45.PageScrollPhysics;
    static get _kTabBarViewPhysics() : lib45.PageScrollPhysics { 
        if (this.__$_kTabBarViewPhysics===undefined) {
            this.__$_kTabBarViewPhysics = new lib45.PageScrollPhysics().applyTo(new lib28.ClampingScrollPhysics());
        }
        return this.__$_kTabBarViewPhysics;
    }
    static set _kTabBarViewPhysics(__$value : lib45.PageScrollPhysics)  { 
        this.__$_kTabBarViewPhysics = __$value;
    }

}
