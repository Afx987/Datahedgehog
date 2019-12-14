/** Library asset:datahedgehog_monitor/lib/lib/cupertino/page_scaffold.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib7 from "./theme";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/preferred_size";

export namespace CupertinoPageScaffold {
    export type Constructors = lib3.StatelessWidget.Constructors | 'CupertinoPageScaffold';
    export type Interface = Omit<CupertinoPageScaffold, Constructors>;
}
@DartClass
export class CupertinoPageScaffold extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,navigationBar? : ObstructingPreferredSizeWidget,backgroundColor? : any,resizeToAvoidBottomInset? : boolean,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoPageScaffold(_namedArguments? : {key? : lib4.Key,navigationBar? : ObstructingPreferredSizeWidget,backgroundColor? : any,resizeToAvoidBottomInset? : boolean,child? : lib3.Widget}) {
        let {key,navigationBar,backgroundColor,resizeToAvoidBottomInset,child} = Object.assign({
            "resizeToAvoidBottomInset" : true}, _namedArguments );
        this.assert = assert;
        this.navigationBar = navigationBar;
        this.backgroundColor = backgroundColor;
        this.resizeToAvoidBottomInset = resizeToAvoidBottomInset;
        this.child = child;
    }
     : any;

     : any;

     : any;

     : any;

    navigationBar : ObstructingPreferredSizeWidget;

    child : lib3.Widget;

    backgroundColor : any;

    resizeToAvoidBottomInset : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let stacked : core.DartList<lib3.Widget> = new core.DartList.literal<lib3.Widget>();
        let paddedContent : lib3.Widget = this.child;
        if (this.navigationBar != null) {
            let existingMediaQuery : lib5.MediaQueryData = lib5.MediaQuery.of(context);
            let topPadding : double = op(Op.PLUS,this.navigationBar.preferredSize.height,existingMediaQuery.padding.top);
            let bottomPadding : double = this.resizeToAvoidBottomInset ? existingMediaQuery.viewInsets.bottom : 0.0;
            let newViewInsets : lib6.EdgeInsets = this.resizeToAvoidBottomInset ? existingMediaQuery.viewInsets.copyWith({
                bottom : 0.0}) : existingMediaQuery.viewInsets;
            let fullObstruction : boolean = (this.navigationBar.fullObstruction || op(Op.EQUALS,lib7.CupertinoTheme.of(context).barBackgroundColor.alpha,255));
            if (fullObstruction) {
                paddedContent = lib5.MediaQuery({
                    data : existingMediaQuery.copyWith({
                        viewInsets : newViewInsets}),child : lib8.Padding({
                        padding : lib6.EdgeInsets.only({
                            top : topPadding,bottom : bottomPadding}),child : this.child})});
            }else {
                paddedContent = lib5.MediaQuery({
                    data : existingMediaQuery.copyWith({
                        padding : existingMediaQuery.padding.copyWith({
                            top : topPadding}),viewInsets : newViewInsets}),child : lib8.Padding({
                        padding : lib6.EdgeInsets.only({
                            bottom : bottomPadding}),child : this.child})});
            }
        }
        stacked.add(paddedContent);
        if (this.navigationBar != null) {
            stacked.add(lib8.Positioned({
                top : 0.0,left : 0.0,right : 0.0,child : this.navigationBar}));
        }
        return lib10.DecoratedBox({
            decoration : lib9.BoxDecoration({
                color : (this.backgroundColor || lib7.CupertinoTheme.of(context).scaffoldBackgroundColor)}),child : lib8.Stack({
                children : stacked})});
    }
}

export namespace ObstructingPreferredSizeWidget {
    export type Constructors = lib11.PreferredSizeWidget.Constructors | 'ObstructingPreferredSizeWidget';
    export type Interface = Omit<ObstructingPreferredSizeWidget, Constructors>;
}
@DartClass
export class ObstructingPreferredSizeWidget extends lib11.PreferredSizeWidget {
    @AbstractProperty
    get fullObstruction() : boolean{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ObstructingPreferredSizeWidget() {
    }
}

export class properties {
}
