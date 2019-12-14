/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/named_parameters.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var topLevelNamed : (beta : any,alpha : any,_namedArguments? : {gamma? : any,delta? : any}) => any = (beta : any,alpha : any,_namedArguments? : {gamma? : any,delta? : any}) =>  {
    let {gamma,delta} = Object.assign({
    }, _namedArguments );
};
export var topLevelOptional : (beta : any,alpha : any,gamma? : any,delta? : any) => any = (beta : any,alpha : any,gamma? : any,delta? : any) =>  {
};
export var main : () => any = () =>  {
    new Subclass().foo({
        beta : 1,alpha : 2});
    new Subclass().foo({
        alpha : 1,beta : 2});
    topLevelNamed(1,2,{
        gamma : 3,delta : 4});
    topLevelNamed(1,2,{
        delta : 3,gamma : 4});
};
export namespace Superclass {
    export type Constructors = 'Superclass';
    export type Interface = Omit<Superclass, Constructors>;
}
@DartClass
export class Superclass {
    foo(_namedArguments? : {alpha? : any,beta? : any}) {
        let {alpha,beta} = Object.assign({
        }, _namedArguments );
    }
    bar(_namedArguments? : {beta? : any,alpha? : any}) {
        let {beta,alpha} = Object.assign({
        }, _namedArguments );
    }
    namedCallback(callback : (_namedArguments : {alpha? : string?,beta? : number?}) => any) {
        callback({
            alpha : 'one',beta : 2});
        callback({
            beta : 1,alpha : 'two'});
    }
    constructor() {
    }
    @defaultConstructor
    Superclass() {
    }
}

export namespace Subclass {
    export type Constructors = Superclass.Constructors | 'Subclass';
    export type Interface = Omit<Subclass, Constructors>;
}
@DartClass
export class Subclass extends Superclass {
    foo(_namedArguments? : {beta? : any,alpha? : any}) {
        let {beta,alpha} = Object.assign({
        }, _namedArguments );
    }
    bar(_namedArguments? : {alpha? : any,beta? : any}) {
        let {alpha,beta} = Object.assign({
        }, _namedArguments );
    }
    namedCallback(callback : (_namedArguments : {beta? : number?,alpha? : string?}) => any) {
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Subclass() {
    }
}

export class properties {
}
