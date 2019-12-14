/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/application_root.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "@dart2ts.packages/path/lib/path";

export namespace ApplicationRoot {
    export type Constructors = 'ApplicationRoot' | 'none';
    export type Interface = Omit<ApplicationRoot, Constructors>;
}
@DartClass
export class ApplicationRoot {
    private static __$scheme : string;
    static get scheme() : string { 
        if (this.__$scheme===undefined) {
            this.__$scheme = 'app';
        }
        return this.__$scheme;
    }

    path : string;

    constructor(path : string) {
    }
    @defaultConstructor
    ApplicationRoot(path : string) {
        this.path = path;
        /* TODO (AssertStatementImpl) : assert (path == null || pathlib.isAbsolute(path)); */;
    }
    @namedConstructor
    none() {
        this.path = null;
    }
    static none : new() => ApplicationRoot;

    absoluteUri(uri : lib3.Uri) : lib3.Uri {
        if (this.path == null) return uri;
        if (uri.scheme == ApplicationRoot.scheme) {
            return new lib3.Uri({
                scheme : 'file',path : lib4.join(this.path,uri.path)});
        }else {
            return uri;
        }
    }
    relativeUri(uri : lib3.Uri) : lib3.Uri {
        if (this.path == null) return uri;
        if (uri.scheme == 'file' && lib4.isWithin(this.path,uri.path)) {
            return new lib3.Uri({
                scheme : ApplicationRoot.scheme,path : lib4.relative(uri.path,{
                    from : this.path})});
        }else {
            return uri;
        }
    }
}

export class properties {
}
