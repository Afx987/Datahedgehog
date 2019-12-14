/** Library asset:datahedgehog_monitor/lib/lib/widgets/status_transitions.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/animation/animation";

export namespace StatusTransitionWidget {
    export type Constructors = lib3.StatefulWidget.Constructors | 'StatusTransitionWidget';
    export type Interface = Omit<StatusTransitionWidget, Constructors>;
}
@DartClass
export class StatusTransitionWidget extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,animation? : lib5.Animation<double>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StatusTransitionWidget(_namedArguments? : {key? : lib4.Key,animation? : lib5.Animation<double>}) {
        let {key,animation} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.animation = animation;
    }
     : any;

     : any;

     : any;

    animation : lib5.Animation<double>;

    @Abstract
    build(context : lib3.BuildContext) : lib3.Widget{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _StatusTransitionState {
        return _StatusTransitionState();
    }
}

export namespace _StatusTransitionState {
    export type Constructors = lib3.State.Constructors | '_StatusTransitionState';
    export type Interface = Omit<_StatusTransitionState, Constructors>;
}
@DartClass
export class _StatusTransitionState extends lib3.State<StatusTransitionWidget> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this.widget.animation.addStatusListener(this._animationStatusChanged.bind(this));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : StatusTransitionWidget) : any {
        super.didUpdateWidget(oldWidget);
        if (this.widget.animation != oldWidget.animation) {
            oldWidget.animation.removeStatusListener(this._animationStatusChanged.bind(this));
            this.widget.animation.addStatusListener(this._animationStatusChanged.bind(this));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this.widget.animation.removeStatusListener(this._animationStatusChanged.bind(this));
        super.dispose();
    }
    _animationStatusChanged(status : lib5.AnimationStatus) : any {
        this.setState(() =>  {
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return this.widget.build(context);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _StatusTransitionState() {
    }
}

export class properties {
}
