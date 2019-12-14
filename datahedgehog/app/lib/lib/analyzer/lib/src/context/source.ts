/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/context/source.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as lib4 from "@dart2ts/dart/uri";
import * as math from "@dart2ts/dart/math";

export namespace SourceFactoryImpl {
    export type Constructors = 'SourceFactoryImpl';
    export type Interface = Omit<SourceFactoryImpl, Constructors>;
}
@DartClass
@Implements(any)
export class SourceFactoryImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    context : any;

    _packages : any;

    _resourceProvider : any;

    resolvers : core.DartList<any>;

    _localSourcePredicate : any;

    _absoluteUriToSourceCache : core.DartHashMap<lib4.Uri,any>;

    constructor(resolvers : core.DartList<any>,_packages? : any,resourceProvider? : any) {
    }
    @defaultConstructor
    SourceFactoryImpl(resolvers : core.DartList<any>,_packages? : any,resourceProvider? : any) {
        this._localSourcePredicate = LocalSourcePredicate.NOT_SDK;
        this._absoluteUriToSourceCache = new core.DartHashMap<lib4.Uri,any>();
        this._resourceProvider = (resourceProvider || PhysicalResourceProvider.INSTANCE);
        this.resolvers = resolvers;
        this._packages = _packages;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dartSdk() : any {
        let resolvers : core.DartList<any> = this.resolvers;
        let length : number = resolvers.length;
        for(let i : number = 0; i < length; i++){
            let resolver : any = resolvers[i];
            if (is(resolver, any)) {
                let dartUriResolver : any = resolver;
                return dartUriResolver.dartSdk;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set localSourcePredicate(localSourcePredicate : any) {
        this._localSourcePredicate = localSourcePredicate;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get packageMap() : core.DartMap<string,core.DartList<any>> {
        if (this._packages != null) {
            let packageMap : core.DartMap<string,core.DartList<any>> = new core.DartMap.literal([
            ]);
            this._packages.asMap().forEach((name : string,uri : lib4.Uri) =>  {
                if (uri.scheme == 'file' || uri.scheme == '') {
                    packageMap.set(name,new core.DartList.literal<any>(this._resourceProvider.getFolder(uri.toFilePath())));
                }
            });
            return packageMap;
        }
        let resolver : any = this.resolvers.firstWhere((r : any) =>  {
            return is(r, any);
        },{
            orElse : () =>  {
                return null;
            }});
        return ((t)=>(!!t)?t.packageMap:null)(resolver);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    clone() : any {
        let factory : any = new bare.createInstance(any,null,this.resolvers,this._packages,this._resourceProvider);
        factory.localSourcePredicate = this._localSourcePredicate;
        return factory;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forUri(absoluteUri : string) : any {
        try {
            let uri : lib4.Uri = lib4.Uri.parse(absoluteUri);
            if (uri.isAbsolute) {
                return this._internalResolveUri(null,uri);
            }
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                AnalysisEngine.instance.logger.logError(`Could not resolve URI: ${absoluteUri}`,new bare.createInstance(any,null,exception,stackTrace));
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forUri2(absoluteUri : lib4.Uri) : any {
        if (absoluteUri.isAbsolute) {
            try {
                return this._internalResolveUri(null,absoluteUri);
            } catch (__error__) {

                if (is(__error__,any)){
                    let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let exception : any = __error__;
                    AnalysisEngine.instance.logger.logError(`Could not resolve URI: ${absoluteUri}`,new bare.createInstance(any,null,exception,stackTrace));
                }
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fromEncoding(encoding : string) : any {
        let source : any = this.forUri(encoding);
        if (op(Op.EQUALS,source,null)) {
            throw new core.ArgumentError(`Invalid source encoding: '${encoding}'`);
        }
        return source;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isLocalSource(source : any) : boolean {
        return this._localSourcePredicate.isLocal(source);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveUri(containingSource : any,containedUri : string) : any {
        if (containedUri == null || new core.DartString(containedUri).isEmpty) {
            return null;
        }
        try {
            return this._internalResolveUri(containingSource,lib4.Uri.parse(containedUri));
        } catch (__error__) {

            if (is(__error__,core.FormatException)){
                return null;
            }


            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                let containingFullName : string = containingSource != null ? containingSource.fullName : '<null>';
                AnalysisEngine.instance.logger.logInformation(`Could not resolve URI (${containedUri}) ` + `relative to source (${containingFullName})`,new bare.createInstance(any,null,exception,stackTrace));
                return null;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    restoreUri(source : any) : lib4.Uri {
        for(let resolver of this.resolvers) {
            let uri : lib4.Uri = resolver.restoreAbsolute(source);
            if (uri != null) {
                let packageMappedUri : lib4.Uri = this._getPackageMapping(uri);
                if (packageMappedUri != null) {
                    return packageMappedUri;
                }
                return uri;
            }
        }
        return null;
    }
    _getPackageMapping(sourceUri : lib4.Uri) : lib4.Uri {
        if (op(Op.EQUALS,this._packages,null)) {
            return null;
        }
        if (sourceUri.scheme != 'file') {
            return null;
        }
        let packageUri : lib4.Uri;
        this._packages.asMap().forEach((name : string,uri : lib4.Uri) =>  {
            if (op(Op.EQUALS,packageUri,null)) {
                if (null /*topLevl*/.startsWith(sourceUri,uri)) {
                    let relativePath : string = new core.DartString(sourceUri.path).substring(math.min(new core.DartString(uri.path).length,new core.DartString(sourceUri.path).length));
                    packageUri = lib4.Uri.parse(`package:${name}/${relativePath}`);
                }
            }
        });
        return packageUri;
    }
    _internalResolveUri(containingSource : any,containedUri : lib4.Uri) : any {
        if (!containedUri.isAbsolute) {
            if (op(Op.EQUALS,containingSource,null)) {
                throw new bare.createInstance(any,null,"Cannot resolve a relative URI without a containing source: " + `${containedUri}`);
            }
            containedUri = null /*topLevl*/.resolveRelativeUri(containingSource.uri,containedUri);
        }
        let actualUri : lib4.Uri = containedUri;
        if (this._packages != null && containedUri.scheme == 'package') {
            let packageUri : lib4.Uri = null;
            try {
                packageUri = this._packages.resolve(containedUri,{
                    notFound : (packageUri : lib4.Uri) =>  {
                        return null;
                    }});
            } catch (__error__) {

                if (is(__error__,core.ArgumentError)){
                }
            }
            if (packageUri != null) {
                if (packageUri.scheme == '') {
                    packageUri = packageUri.replace({
                        scheme : 'file'});
                }
                containedUri = packageUri;
            }
        }
        return this._absoluteUriToSourceCache.putIfAbsent(actualUri,() =>  {
            for(let resolver of this.resolvers) {
                let result : any = resolver.resolveAbsolute(containedUri,actualUri);
                if (result != null) {
                    return result;
                }
            }
            return null;
        });
    }
}

export class properties {
}
