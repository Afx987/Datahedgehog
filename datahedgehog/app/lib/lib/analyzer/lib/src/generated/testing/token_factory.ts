/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/testing/token_factory.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace TokenFactory {
    export type Constructors = 'TokenFactory';
    export type Interface = Omit<TokenFactory, Constructors>;
}
@DartClass
export class TokenFactory {
    static tokenFromKeyword(keyword : any) : any {
        return new bare.createInstance(any,null,keyword,0);
    }
    static tokenFromString(lexeme : string) : any {
        return new bare.createInstance(any,null,TokenType.STRING,lexeme,0);
    }
    static tokenFromType(type : any) : any {
        return new bare.createInstance(any,null,type,0);
    }
    static tokenFromTypeAndString(type : any,lexeme : string) : any {
        return new bare.createInstance(any,null,type,lexeme,0);
    }
    constructor() {
    }
    @defaultConstructor
    TokenFactory() {
    }
}

export class properties {
}
