/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/file_system/resource_uri_resolver_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ResourceUriResolverTest);
    });
};
export namespace ResourceUriResolverTest {
    export type Constructors = 'ResourceUriResolverTest';
    export type Interface = Omit<ResourceUriResolverTest, Constructors>;
}
@DartClass
export class ResourceUriResolverTest {
    provider : any;

    resolver : any;

    setUp() : void {
        this.provider = new bare.createInstance(any,null);
        this.resolver = new bare.createInstance(any,null,this.provider);
        this.provider.newFile(this.provider.convertPath('/test.dart'),'');
        this.provider.newFolder(this.provider.convertPath('/folder'));
    }
    test_creation() : void {
        expect(this.provider,isNotNull);
        expect(this.resolver,isNotNull);
    }
    test_resolveAbsolute_file() : void {
        let uri = this.provider.pathContext.toUri(this.provider.convertPath('/test.dart'));
        let source : any = this.resolver.resolveAbsolute(uri);
        expect(source,isNotNull);
        expect(source.exists(),isTrue);
        expect(source.fullName,this.provider.convertPath('/test.dart'));
    }
    test_resolveAbsolute_folder() : void {
        let uri = this.provider.pathContext.toUri(this.provider.convertPath('/folder'));
        let source : any = this.resolver.resolveAbsolute(uri);
        expect(source,isNull);
    }
    test_resolveAbsolute_notFile_dartUri() : void {
        let uri = new lib3.Uri({
            scheme : 'dart',path : 'core'});
        let source : any = this.resolver.resolveAbsolute(uri);
        expect(source,isNull);
    }
    test_resolveAbsolute_notFile_httpsUri() : void {
        let uri = new lib3.Uri({
            scheme : 'https',path : '127.0.0.1/test.dart'});
        let source : any = this.resolver.resolveAbsolute(uri);
        expect(source,isNull);
    }
    test_restoreAbsolute() : void {
        let uri = this.provider.pathContext.toUri(this.provider.convertPath('/test.dart'));
        let source : any = this.resolver.resolveAbsolute(uri);
        expect(source,isNotNull);
        expect(this.resolver.restoreAbsolute(source),uri);
        expect(this.resolver.restoreAbsolute(new bare.createInstance(any,null,source.fullName,null,null)),uri);
    }
    constructor() {
    }
    @defaultConstructor
    ResourceUriResolverTest() {
    }
}

export class properties {
}
