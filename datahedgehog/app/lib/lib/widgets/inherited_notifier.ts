/** Library asset:datahedgehog_monitor/lib/lib/widgets/inherited_notifier.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/key";

export namespace InheritedNotifier {
    export type Constructors = lib3.InheritedWidget.Constructors | 'InheritedNotifier';
    export type Interface<T extends lib4.Listenable> = Omit<InheritedNotifier<T extends lib4.Listenable>, Constructors>;
}
@DartClass
export class InheritedNotifier<T extends lib4.Listenable> extends lib3.InheritedWidget {
    constructor(_namedArguments? : {key? : lib5.Key,notifier? : T,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InheritedNotifier(_namedArguments? : {key? : lib5.Key,notifier? : T,child? : lib3.Widget}) {
        let {key,notifier,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.notifier = notifier;
    }
     : any;

     : any;

    key;
    child;

     : any;

    notifier : T;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(oldWidget : InheritedNotifier<T>) : boolean {
        return oldWidget.notifier != this.notifier;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createElement() : _InheritedNotifierElement<T> {
        return _InheritedNotifierElement(this);
    }
}

export namespace _InheritedNotifierElement {
    export type Constructors = lib3.InheritedElement.Constructors | '_InheritedNotifierElement';
    export type Interface<T extends lib4.Listenable> = Omit<_InheritedNotifierElement<T extends lib4.Listenable>, Constructors>;
}
@DartClass
export class _InheritedNotifierElement<T extends lib4.Listenable> extends lib3.InheritedElement {
    constructor(widget : InheritedNotifier<T>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _InheritedNotifierElement(widget : InheritedNotifier<T>) {
        this._dirty = false;
        super.InheritedElement(widget);
        ((_922_)=>(!!_922_)?_922_.addListener(this._handleUpdate.bind(this)):null)(widget.notifier);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : InheritedNotifier<T> {
        return super.widget;
    }
    _dirty : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    update(newWidget : InheritedNotifier<T>) : any {
        let oldNotifier : T = this.widget.notifier;
        let newNotifier : T = newWidget.notifier;
        if (oldNotifier != newNotifier) {
            ((_923_)=>(!!_923_)?_923_.removeListener(this._handleUpdate.bind(this)):null)(oldNotifier);
            ((_924_)=>(!!_924_)?_924_.addListener(this._handleUpdate.bind(this)):null)(newNotifier);
        }
        super.update(newWidget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build() : lib3.Widget {
        if (this._dirty) this.notifyClients(this.widget);
        return super.build();
    }
    _handleUpdate() : any {
        this._dirty = true;
        this.markNeedsBuild();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    notifyClients(oldWidget : InheritedNotifier<T>) : any {
        super.notifyClients(oldWidget);
        this._dirty = false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    unmount() : any {
        ((_925_)=>(!!_925_)?_925_.removeListener(this._handleUpdate.bind(this)):null)(this.widget.notifier);
        super.unmount();
    }
}

export class properties {
}
