/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/source/diet_parser.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../parser/class_member_parser";
import * as lib4 from "./../parser/listener";
import * as lib5 from "./../../scanner/token";
import * as lib6 from "./../parser/parser";
import * as lib7 from "./../fasta_codes";
import * as lib8 from "./../scanner/token";

export namespace DietParser {
    export type Constructors = lib3.ClassMemberParser.Constructors | 'DietParser';
    export type Interface = Omit<DietParser, Constructors>;
}
@DartClass
export class DietParser extends lib3.ClassMemberParser {
    constructor(listener : lib4.Listener) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DietParser(listener : lib4.Listener) {
        super.ClassMemberParser(listener);
    }
    parseFormalParameters(token : lib5.Token,kind : lib6.MemberKind) : lib5.Token {
        return this.skipFormals(token,kind);
    }
    skipFormals(token : lib5.Token,kind : lib6.MemberKind) : lib5.Token {
        this.listener.beginOptionalFormalParameters(token);
        if (!lib6.optional('(',token)) {
            if (lib6.optional(';',token)) {
                this.reportRecoverableErrorCode(token,lib7.properties.codeExpectedOpenParens);
                return token;
            }
            return this.reportUnexpectedToken(token).next;
        }
        let beginGroupToken : lib8.BeginGroupToken = token;
        let endToken : lib5.Token = beginGroupToken.endGroup;
        this.listener.endFormalParameters(0,token,endToken,kind);
        return endToken.next;
    }
}

export class properties {
}
