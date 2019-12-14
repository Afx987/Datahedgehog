/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/type_hashcode_quality.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export var main : (args : core.DartList<string>) => void = (args : core.DartList<string>) : void =>  {
    if (args.length == 0) {
        core.print(properties.usage);
        io.exit(1);
    }
    let program : any = loadProgramFromBinary(args[0]);
    let visitor = new DartTypeCollector();
    program.accept(visitor);
    core.print(`Types:      ${visitor.numberOfTypes}\nCollisions: ${visitor.numberOfCollisions}`);
};
export namespace DartTypeCollector {
    export type Constructors = 'DartTypeCollector';
    export type Interface = Omit<DartTypeCollector, Constructors>;
}
@DartClass
export class DartTypeCollector extends any {
    seenTypes : core.DartSet<any>;

    table : core.DartMap<number,any>;

    numberOfCollisions : number;

    numberOfTypes : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    defaultDartType(node : any) {
        if (!this.seenTypes.add(node)) return;
        ++this.numberOfTypes;
        let hash : number = node.hashCode;
        if (hash == 0) {
            core.print(`Type has a hash code of zero: ${node}`);
        }
        let existing : any = this.table.get(hash);
        if (op(Op.EQUALS,existing,null)) {
            this.table.set(hash,node);
        }else if (existing != node) {
            core.print(`Collision between ${existing} and ${node}`);
            ++this.numberOfCollisions;
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DartTypeCollector() {
        this.seenTypes = new core.DartSet<any>();
        this.table = new core.DartMap.literal([
        ]);
        this.numberOfCollisions = 0;
        this.numberOfTypes = 0;
    }
}

export class properties {
    private static __$usage : string;
    static get usage() : string { 
        if (this.__$usage===undefined) {
            this.__$usage = 'Usage: type_hashcode_quality FILE.dill\n\nCounts the number of hash collisions between DartTypes in the given file.\n';
        }
        return this.__$usage;
    }
    static set usage(__$value : string)  { 
        this.__$usage = __$value;
    }

}
