/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/base/resolve_relative_uri.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var resolveRelativeUri : (baseUri : lib3.Uri,containedUri : lib3.Uri) => lib3.Uri = (baseUri : lib3.Uri,containedUri : lib3.Uri) : lib3.Uri =>  {
    if (containedUri.isAbsolute) {
        return containedUri;
    }
    let scheme : string = baseUri.scheme;
    if (scheme == 'dart') {
        let part : string = baseUri.path;
        if (new core.DartString(part).indexOf('/') < 0) {
            baseUri = lib3.Uri.parse(`${scheme}:${part}/${part}.dart`);
        }
    }
    return baseUri.resolveUri(containedUri);
};
export class properties {
}
