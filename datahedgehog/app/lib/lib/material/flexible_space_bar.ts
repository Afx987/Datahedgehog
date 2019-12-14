/** Library asset:datahedgehog_monitor/lib/lib/material/flexible_space_bar.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib6 from "./theme_data";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib12 from "./constants";
import * as math from "@dart2ts/dart/math";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib15 from "./theme";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib17 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/widgets/container";

export enum CollapseMode {
    parallax,
    pin,
    none
}

export namespace FlexibleSpaceBar {
    export type Constructors = lib3.StatefulWidget.Constructors | 'FlexibleSpaceBar';
    export type Interface = Omit<FlexibleSpaceBar, Constructors>;
}
@DartClass
export class FlexibleSpaceBar extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,title? : lib3.Widget,background? : lib3.Widget,centerTitle? : boolean,titlePadding? : lib5.EdgeInsetsGeometry,collapseMode? : CollapseMode}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FlexibleSpaceBar(_namedArguments? : {key? : lib4.Key,title? : lib3.Widget,background? : lib3.Widget,centerTitle? : boolean,titlePadding? : lib5.EdgeInsetsGeometry,collapseMode? : CollapseMode}) {
        let {key,title,background,centerTitle,titlePadding,collapseMode} = Object.assign({
            "collapseMode" : CollapseMode.parallax}, _namedArguments );
        this.assert = assert;
        this.title = title;
        this.background = background;
        this.centerTitle = centerTitle;
        this.titlePadding = titlePadding;
        this.collapseMode = collapseMode;
    }
     : any;

     : any;

     : any;

    title : lib3.Widget;

    background : lib3.Widget;

    centerTitle : boolean;

    collapseMode : CollapseMode;

    titlePadding : lib5.EdgeInsetsGeometry;

    static createSettings(_namedArguments? : {toolbarOpacity? : double,minExtent? : double,maxExtent? : double,currentExtent? : double,child? : lib3.Widget}) : lib3.Widget {
        let {toolbarOpacity,minExtent,maxExtent,currentExtent,child} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (currentExtent != null); */;
        return FlexibleSpaceBarSettings({
            toolbarOpacity : (toolbarOpacity || 1.0),minExtent : (minExtent || currentExtent),maxExtent : (maxExtent || currentExtent),currentExtent : currentExtent,child : child});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _FlexibleSpaceBarState {
        return _FlexibleSpaceBarState();
    }
}

export namespace _FlexibleSpaceBarState {
    export type Constructors = '_FlexibleSpaceBarState';
    export type Interface = Omit<_FlexibleSpaceBarState, Constructors>;
}
@DartClass
export class _FlexibleSpaceBarState extends any {
    _getEffectiveCenterTitle(theme : lib6.ThemeData) : boolean {
        if (widget.centerTitle != null) return widget.centerTitle;
        /* TODO (AssertStatementImpl) : assert (theme.platform != null); */;
        switch (theme.platform) {
            case lib7.TargetPlatform.android:
            case lib7.TargetPlatform.fuchsia:
                return false;
            case lib7.TargetPlatform.iOS:
                return true;
        }
        return null;
    }
    _getTitleAlignment(effectiveCenterTitle : boolean) : lib8.Alignment {
        if (effectiveCenterTitle) return lib8.Alignment.bottomCenter;
        let textDirection : any = lib10.Directionality.of(lib9.properties.context);
        /* TODO (AssertStatementImpl) : assert (textDirection != null); */;
        switch (textDirection) {
            case TextDirection.rtl:
                return lib8.Alignment.bottomRight;
            case TextDirection.ltr:
                return lib8.Alignment.bottomLeft;
        }
        return null;
    }
    _getCollapsePadding(t : double,settings : FlexibleSpaceBarSettings) : double {
        switch (widget.collapseMode) {
            case CollapseMode.pin:
                return -(settings.maxExtent - settings.currentExtent);
            case CollapseMode.none:
                return 0.0;
            case CollapseMode.parallax:
                let deltaExtent : double = settings.maxExtent - settings.minExtent;
                return op(Op.NEG,lib11.Tween({
                    begin : 0.0,end : deltaExtent / 4.0}).transform(t));
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let settings : FlexibleSpaceBarSettings = context.inheritFromWidgetOfExactType(FlexibleSpaceBarSettings);
        /* TODO (AssertStatementImpl) : assert (settings != null, 'A FlexibleSpaceBar must be wrapped in the widget returned by FlexibleSpaceBar.createSettings().'); */;
        let children : core.DartList<lib3.Widget> = new core.DartList.literal<lib3.Widget>();
        let deltaExtent : double = settings.maxExtent - settings.minExtent;
        let t : double = new core.DartDouble((1.0 - (settings.currentExtent - settings.minExtent) / deltaExtent)).clamp(0.0,1.0);
        if (widget.background != null) {
            let fadeStart : double = math.max(0.0,1.0 - lib12.properties.kToolbarHeight / deltaExtent);
            let fadeEnd : double = 1.0;
            /* TODO (AssertStatementImpl) : assert (fadeStart <= fadeEnd); */;
            let opacity : double = 1.0 - lib14.Interval(fadeStart,fadeEnd).transform(t);
            if (opacity > 0.0) {
                children.add(lib10.Positioned({
                    top : this._getCollapsePadding(t,settings),left : 0.0,right : 0.0,height : settings.maxExtent,child : lib10.Opacity({
                        opacity : opacity,child : widget.background})}));
            }
        }
        if (widget.title != null) {
            let title : lib3.Widget;
            switch (lib7.properties.defaultTargetPlatform) {
                case lib7.TargetPlatform.iOS:
                    title = widget.title;
                    break;
                case lib7.TargetPlatform.fuchsia:
                case lib7.TargetPlatform.android:
                    title = lib10.Semantics({
                        namesRoute : true,child : widget.title});
            }
            let theme : lib6.ThemeData = lib15.Theme.of(context);
            let opacity : double = settings.toolbarOpacity;
            if (opacity > 0.0) {
                let titleStyle : lib16.TextStyle = theme.primaryTextTheme.title;
                titleStyle = titleStyle.copyWith({
                    color : titleStyle.color.withOpacity(opacity)});
                let effectiveCenterTitle : boolean = this._getEffectiveCenterTitle(theme);
                let padding : lib5.EdgeInsetsGeometry = (widget.titlePadding || lib5.EdgeInsetsDirectional.only({
                    start : effectiveCenterTitle ? 0.0 : 72.0,bottom : 16.0}));
                let scaleValue : double = lib11.Tween({
                    begin : 1.5,end : 1.0}).transform(t);
                let scaleTransform : lib17.Matrix4 = ((_) : any =>  {
                    {
                        scale(scaleValue,scaleValue,1.0);
                        return _;
                    }
                })(lib17.Matrix4.identity());
                let titleAlignment : lib8.Alignment = this._getTitleAlignment(effectiveCenterTitle);
                children.add(lib19.Container({
                    padding : padding,child : lib10.Transform({
                        alignment : titleAlignment,transform : scaleTransform,child : lib10.Align({
                            alignment : titleAlignment,child : lib18.DefaultTextStyle({
                                style : titleStyle,child : title})})})}));
            }
        }
        return lib10.ClipRect({
            child : lib10.Stack({
                children : children})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FlexibleSpaceBarState() {
    }
}

export namespace FlexibleSpaceBarSettings {
    export type Constructors = lib3.InheritedWidget.Constructors | 'FlexibleSpaceBarSettings';
    export type Interface = Omit<FlexibleSpaceBarSettings, Constructors>;
}
@DartClass
export class FlexibleSpaceBarSettings extends lib3.InheritedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,toolbarOpacity? : double,minExtent? : double,maxExtent? : double,currentExtent? : double,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FlexibleSpaceBarSettings(_namedArguments? : {key? : lib4.Key,toolbarOpacity? : double,minExtent? : double,maxExtent? : double,currentExtent? : double,child? : lib3.Widget}) {
        let {key,toolbarOpacity,minExtent,maxExtent,currentExtent,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.toolbarOpacity = toolbarOpacity;
        this.minExtent = minExtent;
        this.maxExtent = maxExtent;
        this.currentExtent = currentExtent;
    }
     : any;

     : any;

    key;
    child;

     : any;

    toolbarOpacity : double;

    minExtent : double;

    maxExtent : double;

    currentExtent : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(oldWidget : FlexibleSpaceBarSettings) : boolean {
        return this.toolbarOpacity != oldWidget.toolbarOpacity || this.minExtent != oldWidget.minExtent || this.maxExtent != oldWidget.maxExtent || this.currentExtent != oldWidget.currentExtent;
    }
}

export class properties {
}
