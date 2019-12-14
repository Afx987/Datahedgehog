/** Library asset:datahedgehog_monitor/lib/lib/widgets/preferred_size.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";

export namespace PreferredSizeWidget {
    export type Constructors = 'PreferredSizeWidget';
    export type Interface = Omit<PreferredSizeWidget, Constructors>;
}
@DartClass
@Implements(lib3.Widget)
export class PreferredSizeWidget implements lib3.Widget.Interface {
    @AbstractProperty
    get preferredSize() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    PreferredSizeWidget() {
    }
}

export namespace PreferredSize {
    export type Constructors = lib3.StatelessWidget.Constructors | 'PreferredSize';
    export type Interface = Omit<PreferredSize, Constructors>;
}
@DartClass
@Implements(PreferredSizeWidget)
export class PreferredSize extends lib3.StatelessWidget implements PreferredSizeWidget.Interface {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,preferredSize? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PreferredSize(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,preferredSize? : any}) {
        let {key,child,preferredSize} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.child = child;
        this.preferredSize = preferredSize;
    }
    child : lib3.Widget;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    preferredSize : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return this.child;
    }
}

export class properties {
}
