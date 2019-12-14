/** Library asset:datahedgehog_monitor/lib/lib/widgets/notification_listener.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";

export namespace Notification {
    export type Constructors = 'Notification';
    export type Interface = Omit<Notification, Constructors>;
}
@DartClass
export class Notification {
    constructor() {
    }
    @defaultConstructor
    Notification() {
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    visitAncestor(element : lib3.Element) : boolean {
        if (is(element, lib3.StatelessElement)) {
            let widget : lib3.StatelessWidget = element.widget;
            if (is(widget, NotificationListener<Notification>)) {
                if (widget._dispatch(this,element)) return false;
            }
        }
        return true;
    }
    dispatch(target : lib3.BuildContext) : void {
        ((_934_)=>(!!_934_)?_934_.visitAncestorElements(this.visitAncestor.bind(this)):null)(target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let description : core.DartList<string> = new core.DartList.literal<string>();
        this.debugFillDescription(description);
        return `${this.runtimeType}(${description.join(", ")})`;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillDescription(description : core.DartList<string>) : void {
    }
}

export namespace NotificationListener {
    export type Constructors = lib3.StatelessWidget.Constructors | 'NotificationListener';
    export type Interface<T extends Notification> = Omit<NotificationListener<T extends Notification>, Constructors>;
}
@DartClass
export class NotificationListener<T extends Notification> extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,onNotification? : <T extends Notification>(notification : T) => boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NotificationListener(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,onNotification? : <T extends Notification>(notification : T) => boolean}) {
        let {key,child,onNotification} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.child = child;
        this.onNotification = onNotification;
    }
    child : lib3.Widget;

    onNotification : <T extends Notification>(notification : T) => boolean;

    _dispatch(notification : Notification,element : lib3.Element) : boolean {
        if (this.onNotification != null && is(notification, T)) {
            let result : boolean = this.onNotification(notification);
            return result == true;
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return this.child;
    }
}

export namespace LayoutChangedNotification {
    export type Constructors = Notification.Constructors | 'LayoutChangedNotification';
    export type Interface = Omit<LayoutChangedNotification, Constructors>;
}
@DartClass
export class LayoutChangedNotification extends Notification {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LayoutChangedNotification() {
    }
}

export class properties {
}
