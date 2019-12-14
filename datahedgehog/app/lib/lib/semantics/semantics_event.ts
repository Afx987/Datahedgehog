/** Library asset:datahedgehog_monitor/lib/lib/semantics/semantics_event.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace SemanticsEvent {
    export type Constructors = 'SemanticsEvent';
    export type Interface = Omit<SemanticsEvent, Constructors>;
}
@DartClass
export class SemanticsEvent {
    constructor(type : string) {
    }
    @defaultConstructor
    SemanticsEvent(type : string) {
        this.type = type;
    }
    type : string;

    toMap(_namedArguments? : {nodeId? : number}) : core.DartMap<string,any> {
        let {nodeId} = Object.assign({
        }, _namedArguments );
        let event : core.DartMap<string,any> = new core.DartMap.literal([
            ['type',this.type],
            ['data',this.getDataMap()]]);
        if (nodeId != null) event.set('nodeId',nodeId);
        return event;
    }
    @Abstract
    getDataMap() : core.DartMap<string,any>{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let pairs : core.DartList<string> = new core.DartList.literal<string>();
        let dataMap : core.DartMap<string,any> = this.getDataMap();
        let sortedKeys : core.DartList<string> = ((_) : core.DartList<string> =>  {
            {
                _.sort();
                return _;
            }
        })(dataMap.keys.toList());
        for(let key of sortedKeys) pairs.add(`${key}: ${dataMap.get(key)}`);
        return `${this.runtimeType}(${pairs.join(', ')})`;
    }
}

export namespace AnnounceSemanticsEvent {
    export type Constructors = SemanticsEvent.Constructors | 'AnnounceSemanticsEvent';
    export type Interface = Omit<AnnounceSemanticsEvent, Constructors>;
}
@DartClass
export class AnnounceSemanticsEvent extends SemanticsEvent {
    constructor(message : string,textDirection : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnnounceSemanticsEvent(message : string,textDirection : any) {
        this.assert = assert;
        this.message = message;
        this.textDirection = textDirection;
    }
     : any;

     : any;

    message : string;

    textDirection : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getDataMap() : core.DartMap<string,any> {
        return new core.DartMap.literal([
            ['message',this.message],
            ['textDirection',this.textDirection.index]]);
    }
}

export namespace TooltipSemanticsEvent {
    export type Constructors = SemanticsEvent.Constructors | 'TooltipSemanticsEvent';
    export type Interface = Omit<TooltipSemanticsEvent, Constructors>;
}
@DartClass
export class TooltipSemanticsEvent extends SemanticsEvent {
    constructor(message : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TooltipSemanticsEvent(message : string) {
        super.SemanticsEvent('tooltip');
        this.message = message;
    }
    message : string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getDataMap() : core.DartMap<string,any> {
        return new core.DartMap.literal([
            ['message',this.message]]);
    }
}

export namespace LongPressSemanticsEvent {
    export type Constructors = SemanticsEvent.Constructors | 'LongPressSemanticsEvent';
    export type Interface = Omit<LongPressSemanticsEvent, Constructors>;
}
@DartClass
export class LongPressSemanticsEvent extends SemanticsEvent {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LongPressSemanticsEvent() {
        super.SemanticsEvent('longPress');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getDataMap() : core.DartMap<string,any> {
        return new core.DartMap.literal([
        ]);
    }
}

export namespace TapSemanticEvent {
    export type Constructors = SemanticsEvent.Constructors | 'TapSemanticEvent';
    export type Interface = Omit<TapSemanticEvent, Constructors>;
}
@DartClass
export class TapSemanticEvent extends SemanticsEvent {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TapSemanticEvent() {
        super.SemanticsEvent('tap');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getDataMap() : core.DartMap<string,any> {
        return new core.DartMap.literal([
        ]);
    }
}

export namespace UpdateLiveRegionEvent {
    export type Constructors = SemanticsEvent.Constructors | 'UpdateLiveRegionEvent';
    export type Interface = Omit<UpdateLiveRegionEvent, Constructors>;
}
@DartClass
export class UpdateLiveRegionEvent extends SemanticsEvent {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UpdateLiveRegionEvent() {
        super.SemanticsEvent('updateLiveRegion');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getDataMap() : core.DartMap<string,any> {
        return new core.DartMap.literal([
        ]);
    }
}

export class properties {
}
