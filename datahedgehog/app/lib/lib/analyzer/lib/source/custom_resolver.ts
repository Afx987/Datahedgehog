/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/source/custom_resolver.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export namespace CustomUriResolver {
    export type Constructors = 'CustomUriResolver';
    export type Interface = Omit<CustomUriResolver, Constructors>;
}
@DartClass
export class CustomUriResolver extends any {
    resourceProvider : any;

    _urlMappings : core.DartMap<string,string>;

    constructor(resourceProvider : any,_urlMappings : core.DartMap<string,string>) {
    }
    @defaultConstructor
    CustomUriResolver(resourceProvider : any,_urlMappings : core.DartMap<string,string>) {
        this.resourceProvider = resourceProvider;
        this._urlMappings = _urlMappings;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveAbsolute(uri : lib3.Uri,actualUri? : lib3.Uri) : any {
        let mapping : string = this._urlMappings.get(uri.toString());
        if (mapping == null) {
            return null;
        }
        let fileUri : lib3.Uri = new lib3.Uri.file(mapping);
        if (!fileUri.isAbsolute) {
            return null;
        }
        return this.resourceProvider.getFile(this.resourceProvider.pathContext.fromUri(fileUri)).createSource((actualUri || uri));
    }
}

export class properties {
}
