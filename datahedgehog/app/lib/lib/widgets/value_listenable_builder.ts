/** Library asset:datahedgehog_monitor/lib/lib/widgets/value_listenable_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";

export namespace ValueListenableBuilder {
    export type Constructors = lib3.StatefulWidget.Constructors | 'ValueListenableBuilder';
    export type Interface<T> = Omit<ValueListenableBuilder<T>, Constructors>;
}
@DartClass
export class ValueListenableBuilder<T> extends lib3.StatefulWidget {
    constructor(_namedArguments? : {valueListenable? : lib4.ValueListenable<T>,builder? : <T>(context : lib3.BuildContext,value : T,child : lib3.Widget) => lib3.Widget,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ValueListenableBuilder(_namedArguments? : {valueListenable? : lib4.ValueListenable<T>,builder? : <T>(context : lib3.BuildContext,value : T,child : lib3.Widget) => lib3.Widget,child? : lib3.Widget}) {
        let {valueListenable,builder,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.valueListenable = valueListenable;
        this.builder = builder;
        this.child = child;
    }
     : any;

     : any;

    valueListenable : lib4.ValueListenable<T>;

    builder : <T>(context : lib3.BuildContext,value : T,child : lib3.Widget) => lib3.Widget;

    child : lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : lib3.State<lib3.StatefulWidget> {
        return _ValueListenableBuilderState();
    }
}

export namespace _ValueListenableBuilderState {
    export type Constructors = lib3.State.Constructors | '_ValueListenableBuilderState';
    export type Interface<T> = Omit<_ValueListenableBuilderState<T>, Constructors>;
}
@DartClass
export class _ValueListenableBuilderState<T> extends lib3.State<ValueListenableBuilder<T>> {
    value : T;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this.value = this.widget.valueListenable.value;
        this.widget.valueListenable.addListener(this._valueChanged.bind(this));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : ValueListenableBuilder<T>) : any {
        if (oldWidget.valueListenable != this.widget.valueListenable) {
            oldWidget.valueListenable.removeListener(this._valueChanged.bind(this));
            this.value = this.widget.valueListenable.value;
            this.widget.valueListenable.addListener(this._valueChanged.bind(this));
        }
        super.didUpdateWidget(oldWidget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this.widget.valueListenable.removeListener(this._valueChanged.bind(this));
        super.dispose();
    }
    _valueChanged() : any {
        this.setState(() =>  {
            this.value = this.widget.valueListenable.value;
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return this.widget.builder(context,this.value,this.widget.child);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ValueListenableBuilderState() {
    }
}

export class properties {
}
