/** Library asset:datahedgehog_monitor/lib/lib/material/drawer_header.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/decoration";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib8 from "./theme";
import * as lib9 from "./theme_data";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as lib11 from "./divider";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/painting/box_border";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/widgets/implicit_animations";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/widgets/container";

export namespace DrawerHeader {
    export type Constructors = lib3.StatelessWidget.Constructors | 'DrawerHeader';
    export type Interface = Omit<DrawerHeader, Constructors>;
}
@DartClass
export class DrawerHeader extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,decoration? : lib5.Decoration,margin? : lib6.EdgeInsetsGeometry,padding? : lib6.EdgeInsetsGeometry,duration? : core.DartDuration,curve? : lib7.Curve,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DrawerHeader(_namedArguments? : {key? : lib4.Key,decoration? : lib5.Decoration,margin? : lib6.EdgeInsetsGeometry,padding? : lib6.EdgeInsetsGeometry,duration? : core.DartDuration,curve? : lib7.Curve,child? : lib3.Widget}) {
        let {key,decoration,margin,padding,duration,curve,child} = Object.assign({
            "margin" : new lib6.EdgeInsets.only({
                bottom : 8.0}),
            "padding" : new lib6.EdgeInsets.fromLTRB(16.0,16.0,16.0,8.0),
            "duration" : new core.DartDuration({
                milliseconds : 250}),
            "curve" : lib7.Curves.fastOutSlowIn}, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.decoration = decoration;
        this.margin = margin;
        this.padding = padding;
        this.duration = duration;
        this.curve = curve;
        this.child = child;
    }
    decoration : lib5.Decoration;

    padding : lib6.EdgeInsetsGeometry;

    margin : lib6.EdgeInsetsGeometry;

    duration : core.DartDuration;

    curve : lib7.Curve;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterial(context)); */;
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMediaQuery(context)); */;
        let theme : lib9.ThemeData = lib8.Theme.of(context);
        let statusBarHeight : double = lib10.MediaQuery.of(context).padding.top;
        return lib16.Container({
            height : statusBarHeight + properties._kDrawerHeaderHeight,margin : this.margin,decoration : lib13.BoxDecoration({
                border : lib12.Border({
                    bottom : lib11.Divider.createBorderSide(context)})}),child : lib15.AnimatedContainer({
                padding : this.padding.add(lib6.EdgeInsets.only({
                    top : statusBarHeight})),decoration : this.decoration,duration : this.duration,curve : this.curve,child : op(Op.EQUALS,this.child,null) ? null : lib14.DefaultTextStyle({
                    style : theme.textTheme.body2,child : lib10.MediaQuery.removePadding({
                        context : context,removeTop : true,child : this.child})})})});
    }
}

export class properties {
    private static __$_kDrawerHeaderHeight : double;
    static get _kDrawerHeaderHeight() : double { 
        if (this.__$_kDrawerHeaderHeight===undefined) {
            this.__$_kDrawerHeaderHeight = 160.0 + 1.0;
        }
        return this.__$_kDrawerHeaderHeight;
    }
    static set _kDrawerHeaderHeight(__$value : double)  { 
        this.__$_kDrawerHeaderHeight = __$value;
    }

}
