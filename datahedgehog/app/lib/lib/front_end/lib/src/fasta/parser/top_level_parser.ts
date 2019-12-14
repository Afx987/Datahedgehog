/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/parser/top_level_parser.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./class_member_parser";
import * as lib4 from "./listener";
import * as lib5 from "./../../scanner/token";

export namespace TopLevelParser {
    export type Constructors = lib3.ClassMemberParser.Constructors | 'TopLevelParser';
    export type Interface = Omit<TopLevelParser, Constructors>;
}
@DartClass
export class TopLevelParser extends lib3.ClassMemberParser {
    constructor(listener : lib4.Listener) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TopLevelParser(listener : lib4.Listener) {
        super.ClassMemberParser(listener);
    }
    parseClassBody(token : lib5.Token) : lib5.Token {
        return this.skipClassBody(token);
    }
}

export class properties {
}
