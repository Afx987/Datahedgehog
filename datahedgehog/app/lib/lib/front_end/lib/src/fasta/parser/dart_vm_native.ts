/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/parser/dart_vm_native.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../scanner/token";
import * as lib4 from "./parser";
import * as lib5 from "./../scanner/token_constants";
import * as lib6 from "./../util/link";

export var skipNativeClause : (token : lib3.Token) => lib3.Token = (token : lib3.Token) : lib3.Token =>  {
    if (!lib4.optional("native",token)) return null;
    token = token.next;
    if (token.kind != lib5.properties.STRING_TOKEN) return null;
    if (!lib4.optional(";",token.next)) return null;
    return token;
};
export var removeNativeClause : (identifiers : lib6.Link<lib3.Token>) => lib6.Link<lib3.Token> = (identifiers : lib6.Link<lib3.Token>) : lib6.Link<lib3.Token> =>  {
    let result : lib6.Link<lib3.Token> = identifiers.tail;
    if (result.head.kind != lib5.properties.STRING_TOKEN) return identifiers;
    result = result.tail;
    if (result.isEmpty) return identifiers;
    if (lib4.optional('native',result.head)) {
        return result.tail.prepend(identifiers.head);
    }
    return identifiers;
};
export class properties {
}
