/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/closure/clone_without_body.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../clone";
import * as lib4 from "./../../ast";

export namespace CloneWithoutBody {
    export type Constructors = lib3.CloneVisitor.Constructors | 'CloneWithoutBody';
    export type Interface = Omit<CloneWithoutBody, Constructors>;
}
@DartClass
export class CloneWithoutBody extends lib3.CloneVisitor {
    constructor(_namedArguments? : {typeSubstitution? : core.DartMap<lib4.TypeParameter,lib4.DartType>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CloneWithoutBody(_namedArguments? : {typeSubstitution? : core.DartMap<lib4.TypeParameter,lib4.DartType>}) {
        let {typeSubstitution} = Object.assign({
        }, _namedArguments );
        super.CloneVisitor({
            typeSubstitution : typeSubstitution});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    cloneFunctionNodeBody(node : lib4.FunctionNode) : lib4.TreeNode {
        return null;
    }
}

export class properties {
}
