/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/util/relativize.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var relativizeUri : (uri : lib3.Uri,_namedArguments? : {base? : lib3.Uri}) => string = (uri : lib3.Uri,_namedArguments? : {base? : lib3.Uri}) : string =>  {
    let {base} = Object.assign({
    }, _namedArguments );
    if (op(Op.EQUALS,uri,null)) return null;
    base = ( base ) || ( lib3.Uri.base );
    let result : string = `${uri}`;
    let prefix = `${base}`;
    return new core.DartString(result).startsWith(prefix) ? new core.DartString(result).substring(new core.DartString(prefix).length) : result;
};
export class properties {
}
