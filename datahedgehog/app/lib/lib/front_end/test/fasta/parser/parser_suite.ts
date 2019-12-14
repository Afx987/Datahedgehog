/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/fasta/parser/parser_suite.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var createContext : (suite : any,environment : core.DartMap<string,string>) => any = (suite : any,environment : core.DartMap<string,string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    return new ScannerContext();
})());
export var main : (arguments : core.DartList<string>) => any = (arguments : core.DartList<string>) =>  {
    return runMe(arguments,createContext,"../testing.json");
};
export namespace ScannerContext {
    export type Constructors = 'ScannerContext';
    export type Interface = Omit<ScannerContext, Constructors>;
}
@DartClass
export class ScannerContext extends any {
    steps : core.DartList<any>;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScannerContext() {
        this.steps = new core.DartList.literal<any>(new bare.createInstance(any,null),new bare.createInstance(any,null),new Parse());
    }
}

export namespace Parse {
    export type Constructors = 'Parse';
    export type Interface = Omit<Parse, Constructors>;
}
@DartClass
export class Parse extends any {
    constructor() {
    }
    @defaultConstructor
    Parse() {
    }
    get name() : string {
        return "parse";
    }
    run(result : any,context : any) : any { 
        return new async.Future.fromPromise(( async () =>  {
            try {
                let errors : core.DartList<any> = parse(result.tokens);
                if (errors.isNotEmpty) {
                    return fail(null,errors.join("\n"));
                }
            } catch (__error__) {

                if (is(__error__,any)){
                    let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e : any = __error__;
                    return fail(null,e,s);
                }
            }
            return pass(null);
        } )());
    }

}

export class properties {
}
