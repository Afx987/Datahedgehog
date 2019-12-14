/** Library asset:datahedgehog_monitor/lib/lib/semantics/semantics_service.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./semantics_event";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/services/system_channels";

export namespace SemanticsService {
    export type Constructors = '_';
    export type Interface = Omit<SemanticsService, Constructors>;
}
@DartClass
export class SemanticsService {
    @namedConstructor
    _() {
    }
    static _ : new() => SemanticsService;

    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

    announce(message : string,textDirection : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let event : lib3.AnnounceSemanticsEvent = lib3.AnnounceSemanticsEvent(message,textDirection);
            await lib4.SystemChannels.accessibility.send(event.toMap());
        } )());
    }

    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

    tooltip(message : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let event : lib3.TooltipSemanticsEvent = lib3.TooltipSemanticsEvent(message);
            await lib4.SystemChannels.accessibility.send(event.toMap());
        } )());
    }

}

export class properties {
}
