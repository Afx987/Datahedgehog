/** Library asset:datahedgehog_monitor/lib/lib/material/button_bar.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib6 from "./button_theme";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/container";

export namespace ButtonBar {
    export type Constructors = lib3.StatelessWidget.Constructors | 'ButtonBar';
    export type Interface = Omit<ButtonBar, Constructors>;
}
@DartClass
export class ButtonBar extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,alignment? : lib5.MainAxisAlignment,mainAxisSize? : lib5.MainAxisSize,children? : core.DartList<lib3.Widget>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ButtonBar(_namedArguments? : {key? : lib4.Key,alignment? : lib5.MainAxisAlignment,mainAxisSize? : lib5.MainAxisSize,children? : core.DartList<lib3.Widget>}) {
        let {key,alignment,mainAxisSize,children} = Object.assign({
            "alignment" : lib5.MainAxisAlignment.end,
            "mainAxisSize" : lib5.MainAxisSize.max,
            "children" : new core.DartList.literal<lib3.Widget>()}, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.alignment = alignment;
        this.mainAxisSize = mainAxisSize;
        this.children = children;
    }
    alignment : lib5.MainAxisAlignment;

    mainAxisSize : lib5.MainAxisSize;

    children : core.DartList<lib3.Widget>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let buttonTheme : lib6.ButtonThemeData = lib6.ButtonTheme.of(context);
        let paddingUnit : double = buttonTheme.padding.horizontal / 4.0;
        let child : lib3.Widget = lib8.Row({
            mainAxisAlignment : this.alignment,mainAxisSize : this.mainAxisSize,children : this.children.map((child : lib3.Widget) =>  {
                return lib8.Padding({
                    padding : lib7.EdgeInsets.symmetric({
                        horizontal : paddingUnit}),child : child});
            }).toList()});
        switch (buttonTheme.layoutBehavior) {
            case lib6.ButtonBarLayoutBehavior.padded:
                return lib8.Padding({
                    padding : lib7.EdgeInsets.symmetric({
                        vertical : 2.0 * paddingUnit,horizontal : paddingUnit}),child : child});
            case lib6.ButtonBarLayoutBehavior.constrained:
                return lib11.Container({
                    padding : lib7.EdgeInsets.symmetric({
                        horizontal : paddingUnit}),constraints : new lib9.BoxConstraints({
                        minHeight : 52.0}),alignment : lib10.Alignment.center,child : child});
        }
        /* TODO (AssertStatementImpl) : assert (false); */;
        return null;
    }
}

export class properties {
}
