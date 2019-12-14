/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/closure/invalidate_closures.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../visitor";
import * as lib4 from "./../../ast";

export namespace InvalidateClosures {
    export type Constructors = lib3.Transformer.Constructors | 'InvalidateClosures';
    export type Interface = Omit<InvalidateClosures, Constructors>;
}
@DartClass
export class InvalidateClosures extends lib3.Transformer {
    visitFunctionDeclaration(node : lib4.FunctionDeclaration) : lib4.FunctionDeclaration {
        this.invalidate(node.function);
        return node;
    }
    visitFunctionExpression(node : lib4.FunctionExpression) : lib4.FunctionExpression {
        this.invalidate(node.function);
        return node;
    }
    invalidate(function : lib4.FunctionNode) : void {
        let position = function.location;
        function.body = ((_) : lib4.ExpressionStatement =>  {
            {
                _.parent = function;
                return _;
            }
        })(new lib4.ExpressionStatement(new lib4.Throw(new lib4.StringLiteral(`Calling unconverted closure at ${position}`))));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InvalidateClosures() {
    }
}

export class properties {
}
