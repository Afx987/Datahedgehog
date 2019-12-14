/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/fasta/analyzer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./element_store";

export var toKernel : (node : any,store : lib3.ElementStore,library : any,scope : any) => any = (node : any,store : lib3.ElementStore,library : any,scope : any) : any =>  {
    let expressionScope : any = new bare.createInstance(any,null,store,library);
    scope.forEach((name : string,builder : any) =>  {
        if (is(builder, any)) {
            let local : any = op(Op.INDEX,store,builder);
            /* TODO (AssertStatementImpl) : assert (local != null); */;
            /* TODO (AssertStatementImpl) : assert (builder.declaration != null); */;
            op(Op.INDEX_ASSIGN,expressionScope.localVariables,local,builder.declaration);
        }
    });
    return expressionScope.buildStatement(node);
};
export class properties {
}
