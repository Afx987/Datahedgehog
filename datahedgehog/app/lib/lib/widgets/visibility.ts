/** Library asset:datahedgehog_monitor/lib/lib/widgets/visibility.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./basic";
import * as lib6 from "./ticker_provider";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export namespace Visibility {
    export type Constructors = lib3.StatelessWidget.Constructors | 'Visibility';
    export type Interface = Omit<Visibility, Constructors>;
}
@DartClass
export class Visibility extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,replacement? : lib3.Widget,visible? : boolean,maintainState? : boolean,maintainAnimation? : boolean,maintainSize? : boolean,maintainSemantics? : boolean,maintainInteractivity? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Visibility(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,replacement? : lib3.Widget,visible? : boolean,maintainState? : boolean,maintainAnimation? : boolean,maintainSize? : boolean,maintainSemantics? : boolean,maintainInteractivity? : boolean}) {
        let {key,child,replacement,visible,maintainState,maintainAnimation,maintainSize,maintainSemantics,maintainInteractivity} = Object.assign({
            "replacement" : new lib5.SizedBox.shrink(),
            "visible" : true,
            "maintainState" : false,
            "maintainAnimation" : false,
            "maintainSize" : false,
            "maintainSemantics" : false,
            "maintainInteractivity" : false}, _namedArguments );
        this.assert = assert;
        this.child = child;
        this.replacement = replacement;
        this.visible = visible;
        this.maintainState = maintainState;
        this.maintainAnimation = maintainAnimation;
        this.maintainSize = maintainSize;
        this.maintainSemantics = maintainSemantics;
        this.maintainInteractivity = maintainInteractivity;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    child : lib3.Widget;

    replacement : lib3.Widget;

    visible : boolean;

    maintainState : boolean;

    maintainAnimation : boolean;

    maintainSize : boolean;

    maintainSemantics : boolean;

    maintainInteractivity : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        if (this.maintainSize) {
            let result : lib3.Widget = this.child;
            if (!this.maintainInteractivity) {
                result = lib5.IgnorePointer({
                    child : this.child,ignoring : !this.visible,ignoringSemantics : !this.visible && !this.maintainSemantics});
            }
            return lib5.Opacity({
                opacity : this.visible ? 1.0 : 0.0,alwaysIncludeSemantics : this.maintainSemantics,child : result});
        }
        /* TODO (AssertStatementImpl) : assert (!maintainInteractivity); */;
        /* TODO (AssertStatementImpl) : assert (!maintainSemantics); */;
        /* TODO (AssertStatementImpl) : assert (!maintainSize); */;
        if (this.maintainState) {
            let result : lib3.Widget = this.child;
            if (!this.maintainAnimation) result = lib6.TickerMode({
                child : this.child,enabled : this.visible});
            return lib5.Offstage({
                child : result,offstage : !this.visible});
        }
        /* TODO (AssertStatementImpl) : assert (!maintainAnimation); */;
        /* TODO (AssertStatementImpl) : assert (!maintainState); */;
        return this.visible ? this.child : this.replacement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.FlagProperty('visible',{
            value : this.visible,ifFalse : 'hidden',ifTrue : 'visible'}));
        properties.add(lib7.FlagProperty('maintainState',{
            value : this.maintainState,ifFalse : 'maintainState'}));
        properties.add(lib7.FlagProperty('maintainAnimation',{
            value : this.maintainAnimation,ifFalse : 'maintainAnimation'}));
        properties.add(lib7.FlagProperty('maintainSize',{
            value : this.maintainSize,ifFalse : 'maintainSize'}));
        properties.add(lib7.FlagProperty('maintainSemantics',{
            value : this.maintainSemantics,ifFalse : 'maintainSemantics'}));
        properties.add(lib7.FlagProperty('maintainInteractivity',{
            value : this.maintainInteractivity,ifFalse : 'maintainInteractivity'}));
    }
}

export class properties {
}
