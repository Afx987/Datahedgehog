/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/parser.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../scanner/token";
import * as lib4 from "./parser/listener";
import * as lib5 from "./parser/parser";

export var parse : (tokens : lib3.Token) => core.DartList<lib4.ParserError> = (tokens : lib3.Token) : core.DartList<lib4.ParserError> =>  {
    let listener : lib4.Listener = new lib4.Listener();
    let parser : lib5.Parser = new lib5.Parser(listener);
    parser.parseUnit(tokens);
    return listener.recoverableErrors;
};
export class properties {
}
