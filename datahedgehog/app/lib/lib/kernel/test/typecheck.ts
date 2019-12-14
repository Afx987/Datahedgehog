/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/typecheck.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) =>  {
    if (args.length != 1) {
        core.print(properties.usage);
        io.exit(1);
    }
    let program = loadProgramFromBinary(args[0]);
    let coreTypes = new bare.createInstance(any,null,program);
    let hierarchy = new bare.createInstance(any,null,program);
    new TestTypeChecker(coreTypes,hierarchy).checkProgram(program);
};
export namespace TestTypeChecker {
    export type Constructors = 'TestTypeChecker';
    export type Interface = Omit<TestTypeChecker, Constructors>;
}
@DartClass
export class TestTypeChecker extends any {
    constructor(coreTypes : any,hierarchy : any) {
    }
    @defaultConstructor
    TestTypeChecker(coreTypes : any,hierarchy : any) {
        super.DartObject(coreTypes,hierarchy);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkAssignable(where : any,from : any,to : any) : void {
        if (!environment.isSubtypeOf(from,to)) {
            this.fail(where,`${from} is not a subtype of ${to}`);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fail(where : any,message : string) : void {
        let location : any = where.location;
        let locationString : string = op(Op.EQUALS,location,null) ? '' : `(${location})`;
        core.print(`[error] ${message} ${locationString}`);
    }
}

export class properties {
    private static __$usage : string;
    static get usage() : string { 
        if (this.__$usage===undefined) {
            this.__$usage = 'Usage: typecheck FILE.dill\n\nRuns the strong mode type checker on the given program.\n';
        }
        return this.__$usage;
    }
    static set usage(__$value : string)  { 
        this.__$usage = __$value;
    }

}
