/** Library asset:datahedgehog_monitor/lib/lib/widgets/modal_barrier.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/gestures/tap";
import * as lib7 from "./navigator";
import * as lib8 from "./basic";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib11 from "./container";
import * as lib12 from "./gesture_detector";
import * as lib13 from "./transitions";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/animation/animation";

export namespace ModalBarrier {
    export type Constructors = lib3.StatelessWidget.Constructors | 'ModalBarrier';
    export type Interface = Omit<ModalBarrier, Constructors>;
}
@DartClass
export class ModalBarrier extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,color? : any,dismissible? : boolean,semanticsLabel? : string,barrierSemanticsDismissible? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ModalBarrier(_namedArguments? : {key? : lib4.Key,color? : any,dismissible? : boolean,semanticsLabel? : string,barrierSemanticsDismissible? : boolean}) {
        let {key,color,dismissible,semanticsLabel,barrierSemanticsDismissible} = Object.assign({
            "dismissible" : true,
            "barrierSemanticsDismissible" : true}, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.color = color;
        this.dismissible = dismissible;
        this.semanticsLabel = semanticsLabel;
        this.barrierSemanticsDismissible = barrierSemanticsDismissible;
    }
    color : any;

    dismissible : boolean;

    barrierSemanticsDismissible : boolean;

    semanticsLabel : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (!dismissible || semanticsLabel == null || debugCheckHasDirectionality(context)); */;
        let semanticsDismissible : boolean = this.dismissible && lib5.properties.defaultTargetPlatform != lib5.TargetPlatform.android;
        let modalBarrierSemanticsDismissible : boolean = (this.barrierSemanticsDismissible || semanticsDismissible);
        return lib8.BlockSemantics({
            child : lib8.ExcludeSemantics({
                excluding : !semanticsDismissible || !modalBarrierSemanticsDismissible,child : lib12.GestureDetector({
                    onTapDown : (details : lib6.TapDownDetails) =>  {
                        if (this.dismissible) lib7.Navigator.maybePop(context);
                    },behavior : HitTestBehavior.opaque,child : lib8.Semantics({
                        label : semanticsDismissible ? this.semanticsLabel : null,textDirection : semanticsDismissible && this.semanticsLabel != null ? lib8.Directionality.of(context) : null,child : lib8.ConstrainedBox({
                            constraints : new lib9.BoxConstraints.expand(),child : op(Op.EQUALS,this.color,null) ? null : lib11.DecoratedBox({
                                decoration : lib10.BoxDecoration({
                                    color : this.color})})})})})})});
    }
}

export namespace AnimatedModalBarrier {
    export type Constructors = lib13.AnimatedWidget.Constructors | 'AnimatedModalBarrier';
    export type Interface = Omit<AnimatedModalBarrier, Constructors>;
}
@DartClass
export class AnimatedModalBarrier extends lib13.AnimatedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,color? : lib14.Animation<any>,dismissible? : boolean,semanticsLabel? : string,barrierSemanticsDismissible? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnimatedModalBarrier(_namedArguments? : {key? : lib4.Key,color? : lib14.Animation<any>,dismissible? : boolean,semanticsLabel? : string,barrierSemanticsDismissible? : boolean}) {
        let {key,color,dismissible,semanticsLabel,barrierSemanticsDismissible} = Object.assign({
            "dismissible" : true}, _namedArguments );
        super.AnimatedWidget({
            key : key,listenable : color});
        this.dismissible = dismissible;
        this.semanticsLabel = semanticsLabel;
        this.barrierSemanticsDismissible = barrierSemanticsDismissible;
    }
    get color() : lib14.Animation<any> {
        return this.listenable;
    }
    dismissible : boolean;

    semanticsLabel : string;

    barrierSemanticsDismissible : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return ModalBarrier({
            color : ((t)=>(!!t)?t.value:null)(this.color),dismissible : this.dismissible,semanticsLabel : this.semanticsLabel,barrierSemanticsDismissible : this.barrierSemanticsDismissible});
    }
}

export class properties {
}
