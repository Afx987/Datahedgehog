/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/redirecting_factory_body.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var isRedirectingFactory : (member : any) => boolean = (member : any) : boolean =>  {
    return is(member, any) && is(member.function.body, RedirectingFactoryBody);
};
export var getImmediateRedirectionTarget : (member : any) => any = (member : any) : any =>  {
    if (isRedirectingFactory(member)) {
        let procedure : any = member;
        let body : RedirectingFactoryBody = procedure.function.body;
        return body.target;
    }else {
        return null;
    }
};
export var getRedirectionTarget : (member : any) => any = (member : any) : any =>  {
    let tortoise : any = member;
    let hare : any = getImmediateRedirectionTarget(member);
    while (tortoise != hare){
        if (!isRedirectingFactory(tortoise)) return tortoise;
        tortoise = getImmediateRedirectionTarget(tortoise);
        hare = getImmediateRedirectionTarget(getImmediateRedirectionTarget(hare));
    }
    return null;
};
export namespace RedirectingFactoryBody {
    export type Constructors = 'RedirectingFactoryBody';
    export type Interface = Omit<RedirectingFactoryBody, Constructors>;
}
@DartClass
export class RedirectingFactoryBody extends any {
    constructor(target : any) {
    }
    @defaultConstructor
    RedirectingFactoryBody(target : any) {
        super.DartObject(new bare.createInstance(any,null,new bare.createInstance(any,null,new bare.createInstance(any,null,target)),new bare.createInstance(any,null)));
    }
    get target() : any {
        let let : any = expression;
        let staticGet : any = let.variable.initializer;
        return staticGet.target;
    }
}

export class properties {
}
