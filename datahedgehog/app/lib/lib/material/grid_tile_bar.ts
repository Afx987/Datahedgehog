/** Library asset:datahedgehog_monitor/lib/lib/material/grid_tile_bar.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib8 from "./theme";
import * as lib9 from "./theme_data";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/rendering/paragraph";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib13 from "./colors";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme_data";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/widgets/container";

export namespace GridTileBar {
    export type Constructors = lib3.StatelessWidget.Constructors | 'GridTileBar';
    export type Interface = Omit<GridTileBar, Constructors>;
}
@DartClass
export class GridTileBar extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,backgroundColor? : any,leading? : lib3.Widget,title? : lib3.Widget,subtitle? : lib3.Widget,trailing? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GridTileBar(_namedArguments? : {key? : lib4.Key,backgroundColor? : any,leading? : lib3.Widget,title? : lib3.Widget,subtitle? : lib3.Widget,trailing? : lib3.Widget}) {
        let {key,backgroundColor,leading,title,subtitle,trailing} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.backgroundColor = backgroundColor;
        this.leading = leading;
        this.title = title;
        this.subtitle = subtitle;
        this.trailing = trailing;
    }
    backgroundColor : any;

    leading : lib3.Widget;

    title : lib3.Widget;

    subtitle : lib3.Widget;

    trailing : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let decoration : lib5.BoxDecoration;
        if (this.backgroundColor != null) decoration = lib5.BoxDecoration({
            color : this.backgroundColor});
        let children : core.DartList<lib3.Widget> = new core.DartList.literal<lib3.Widget>();
        let padding : lib6.EdgeInsetsDirectional = lib6.EdgeInsetsDirectional.only({
            start : this.leading != null ? 8.0 : 16.0,end : this.trailing != null ? 8.0 : 16.0});
        if (this.leading != null) children.add(lib7.Padding({
            padding : new lib6.EdgeInsetsDirectional.only({
                end : 8.0}),child : this.leading}));
        let theme : lib9.ThemeData = lib8.Theme.of(context);
        let darkTheme : lib9.ThemeData = lib9.ThemeData({
            brightness : Brightness.dark,accentColor : theme.accentColor,accentColorBrightness : theme.accentColorBrightness});
        if (this.title != null && this.subtitle != null) {
            children.add(lib7.Expanded({
                child : lib7.Column({
                    mainAxisAlignment : lib10.MainAxisAlignment.center,crossAxisAlignment : lib10.CrossAxisAlignment.start,children : new core.DartList.literal<lib3.Widget>(lib12.DefaultTextStyle({
                        style : darkTheme.textTheme.subhead,softWrap : false,overflow : lib11.TextOverflow.ellipsis,child : this.title}),lib12.DefaultTextStyle({
                        style : darkTheme.textTheme.caption,softWrap : false,overflow : lib11.TextOverflow.ellipsis,child : this.subtitle}))})}));
        }else if (this.title != null || this.subtitle != null) {
            children.add(lib7.Expanded({
                child : lib12.DefaultTextStyle({
                    style : darkTheme.textTheme.subhead,softWrap : false,overflow : lib11.TextOverflow.ellipsis,child : (this.title || this.subtitle)})}));
        }
        if (this.trailing != null) children.add(lib7.Padding({
            padding : new lib6.EdgeInsetsDirectional.only({
                start : 8.0}),child : this.trailing}));
        return lib16.Container({
            padding : padding,decoration : decoration,height : (this.title != null && this.subtitle != null) ? 68.0 : 48.0,child : lib8.Theme({
                data : darkTheme,child : lib15.IconTheme.merge({
                    data : new lib14.IconThemeData({
                        color : lib13.Colors.white}),child : lib7.Row({
                        crossAxisAlignment : lib10.CrossAxisAlignment.center,children : children})})})});
    }
}

export class properties {
}
