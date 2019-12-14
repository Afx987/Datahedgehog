/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/ticker.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Ticker {
    export type Constructors = 'Ticker';
    export type Interface = Omit<Ticker, Constructors>;
}
@DartClass
export class Ticker {
    sw : core.DartStopwatch;

    isVerbose : boolean;

    previousTick : core.DartDuration;

    constructor(_namedArguments? : {isVerbose? : boolean}) {
    }
    @defaultConstructor
    Ticker(_namedArguments? : {isVerbose? : boolean}) {
        let {isVerbose} = Object.assign({
            "isVerbose" : true}, _namedArguments );
        this.sw = ((_) : core.DartStopwatch =>  {
            {
                _.start();
                return _;
            }
        })(new core.DartStopwatch());
        this.isVerbose = isVerbose;
        this.previousTick = this.sw.elapsed;
    }
    logMs(message : core.DartObject) : void {
        this.log((elapsed : core.DartDuration,sinceStart : core.DartDuration) =>  {
            core.print(`${sinceStart}: ${message} in ${elapsed.inMilliseconds}ms.`);
        });
    }
    log(f : (elapsed : core.DartDuration,sinceStart : core.DartDuration) => void) : void {
        let elapsed : core.DartDuration = this.sw.elapsed;
        try {
            if (this.isVerbose) f(op(Op.MINUS,elapsed,this.previousTick),elapsed);
        } finally {
            this.previousTick = this.sw.elapsed;
        }
    }
}

export class properties {
}
