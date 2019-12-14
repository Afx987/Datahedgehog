/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/treeshaker_check.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) =>  {
    if (args.length == 0) {
        core.print(properties.usage);
        io.exit(1);
    }
    let program = loadProgramFromBinary(args[0]);
    let shaker = new bare.createInstance(any,null,program);
    shaker.transform(program);
    new TreeShakingSanityCheck(shaker).visit(program);
};
export namespace TreeShakingSanityCheck {
    export type Constructors = 'TreeShakingSanityCheck';
    export type Interface = Omit<TreeShakingSanityCheck, Constructors>;
}
@DartClass
export class TreeShakingSanityCheck extends any {
    shaker : any;

    isInCoreLibrary : boolean;

    constructor(shaker : any) {
    }
    @defaultConstructor
    TreeShakingSanityCheck(shaker : any) {
        this.isInCoreLibrary = false;
        this.shaker = shaker;
    }
    visit(node : any) : void {
        node.accept(this);
    }
    visitLibrary(node : any) {
        this.isInCoreLibrary = (op(Op.EQUALS,node.importUri.scheme,'dart'));
        super.visitLibrary(node);
    }
    defaultMember(member : any) {
        if (!this.isInCoreLibrary && isNot(member, any) && !this.shaker.isMemberUsed(member)) {
            throw `Unused member ${member} was not removed`;
        }
    }
    defaultMemberReference(target : any) {
        if (!this.shaker.isMemberUsed(target)) {
            throw `Found reference to ${target}`;
        }
    }
}

export class properties {
    private static __$usage : string;
    static get usage() : string { 
        if (this.__$usage===undefined) {
            this.__$usage = 'Usage: treeshaker_check FILE.dill\n\nRun the tree shaker on FILE.dill and perform some internal sanity checks.\n';
        }
        return this.__$usage;
    }
    static set usage(__$value : string)  { 
        this.__$usage = __$value;
    }

}
