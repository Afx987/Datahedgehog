/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/base/uri_resolver.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export namespace UriResolver {
    export type Constructors = 'UriResolver';
    export type Interface = Omit<UriResolver, Constructors>;
}
@DartClass
export class UriResolver {
    private static __$PACKAGE_SCHEME;
    static get PACKAGE_SCHEME() { 
        if (this.__$PACKAGE_SCHEME===undefined) {
            this.__$PACKAGE_SCHEME = 'package';
        }
        return this.__$PACKAGE_SCHEME;
    }

    private static __$DART_SCHEME;
    static get DART_SCHEME() { 
        if (this.__$DART_SCHEME===undefined) {
            this.__$DART_SCHEME = 'dart';
        }
        return this.__$DART_SCHEME;
    }

    packages : core.DartMap<string,lib3.Uri>;

    sdkLibraries : core.DartMap<string,lib3.Uri>;

    constructor(packages : core.DartMap<string,lib3.Uri>,sdkLibraries : core.DartMap<string,lib3.Uri>) {
    }
    @defaultConstructor
    UriResolver(packages : core.DartMap<string,lib3.Uri>,sdkLibraries : core.DartMap<string,lib3.Uri>) {
        this.packages = packages;
        this.sdkLibraries = sdkLibraries;
    }
    resolve(uri : lib3.Uri) : lib3.Uri {
        if (uri.scheme == UriResolver.DART_SCHEME || uri.scheme == UriResolver.PACKAGE_SCHEME) {
            let path = uri.path;
            let slashIndex = new core.DartString(path).indexOf('/');
            let prefix : string;
            let rest : string;
            if (slashIndex >= 0) {
                prefix = new core.DartString(path).substring(0,slashIndex);
                rest = new core.DartString(path).substring(slashIndex + 1);
            }else {
                prefix = path;
                rest = '';
            }
            let libUri : lib3.Uri;
            if (uri.scheme == UriResolver.PACKAGE_SCHEME) {
                if (slashIndex < 0) return null;
                libUri = this.packages.get(prefix);
            }else if (uri.scheme == UriResolver.DART_SCHEME) {
                libUri = this.sdkLibraries.get(prefix);
            }
            if (op(Op.EQUALS,libUri,null)) return null;
            return libUri.resolve(rest);
        }else {
            return uri;
        }
    }
}

export class properties {
}
