/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/services/lint.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export var getLints : (context : any) => core.DartList<Linter> = (context : any) : core.DartList<Linter> =>  {
    return context.analysisOptions.lintRules;
};
export var setLints : (context : any,lints : core.DartList<Linter>) => void = (context : any,lints : core.DartList<Linter>) : void =>  {
    let options : any = new bare.createInstance(any,null,context.analysisOptions);
    options.lintRules = lints;
    context.analysisOptions = options;
};
export namespace Linter {
    export type Constructors = 'Linter';
    export type Interface = Omit<Linter, Constructors>;
}
@DartClass
export class Linter {
    reporter : any;

    get lintCode() : any {
        return null;
    }
    @AbstractProperty
    get name() : string{ throw 'abstract'}
    @Abstract
    getVisitor() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Linter() {
    }
}

export namespace LintRegistry {
    export type Constructors = 'LintRegistry';
    export type Interface = Omit<LintRegistry, Constructors>;
}
@DartClass
export class LintRegistry {
    timers : core.DartMap<string,core.DartStopwatch>;

    getTimer(linter : Linter) : core.DartStopwatch {
        return this.timers.putIfAbsent(linter.name,() =>  {
            return new core.DartStopwatch();
        });
    }
    constructor() {
    }
    @defaultConstructor
    LintRegistry() {
        this.timers = new core.DartHashMap<string,core.DartStopwatch>();
    }
}

export class properties {
    private static __$lintRegistry : LintRegistry;
    static get lintRegistry() : LintRegistry { 
        if (this.__$lintRegistry===undefined) {
            this.__$lintRegistry = new LintRegistry();
        }
        return this.__$lintRegistry;
    }
    static set lintRegistry(__$value : LintRegistry)  { 
        this.__$lintRegistry = __$value;
    }

}
