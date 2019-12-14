/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/sanitize_for_vm.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../ast";

export namespace SanitizeForVM {
    export type Constructors = 'SanitizeForVM';
    export type Interface = Omit<SanitizeForVM, Constructors>;
}
@DartClass
export class SanitizeForVM {
    transform(program : lib3.Program) : void {
        for(let library of program.libraries) {
            for(let class_ of library.classes) {
                if (class_.constructors.isEmpty && class_.procedures.isEmpty) {
                    class_.addMember(new lib3.Constructor(new lib3.FunctionNode(new lib3.EmptyStatement()),{
                        name : new lib3.Name('')}));
                }
            }
        }
    }
    constructor() {
    }
    @defaultConstructor
    SanitizeForVM() {
    }
}

export class properties {
}
