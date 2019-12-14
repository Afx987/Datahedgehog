/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/parser/class_member_parser.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./parser";
import * as lib4 from "./listener";
import * as lib5 from "./../../scanner/token";

export namespace ClassMemberParser {
    export type Constructors = lib3.Parser.Constructors | 'ClassMemberParser';
    export type Interface = Omit<ClassMemberParser, Constructors>;
}
@DartClass
export class ClassMemberParser extends lib3.Parser {
    constructor(listener : lib4.Listener) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassMemberParser(listener : lib4.Listener) {
        super.Parser(listener);
    }
    parseExpression(token : lib5.Token) : lib5.Token {
        return this.skipExpression(token);
    }
    parseRecoverExpression(token : lib5.Token) : lib5.Token {
        let begin : lib5.Token = token;
        token = this.skipExpression(token);
        this.listener.handleRecoverExpression(begin);
        return token;
    }
    parseArgumentsOpt(token : lib5.Token) : lib5.Token {
        return this.skipArgumentsOpt(token);
    }
    parseFunctionBody(token : lib5.Token,isExpression : boolean,allowAbstract : boolean) : lib5.Token {
        return this.skipFunctionBody(token,isExpression,allowAbstract);
    }
}

export class properties {
}
