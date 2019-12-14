/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/source/package_map_resolver_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "@dart2ts.packages/path/lib/path";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(_PackageMapUriResolverTest);
    });
};
export namespace _PackageMapUriResolverTest {
    export type Constructors = '_PackageMapUriResolverTest';
    export type Interface = Omit<_PackageMapUriResolverTest, Constructors>;
}
@DartClass
export class _PackageMapUriResolverTest {
    private static __$EMPTY_MAP : core.DartMap<string,core.DartList<any>>;
    static get EMPTY_MAP() : core.DartMap<string,core.DartList<any>> { 
        if (this.__$EMPTY_MAP===undefined) {
            this.__$EMPTY_MAP = new core.DartMap.literal([
            ]);
        }
        return this.__$EMPTY_MAP;
    }

    provider : any;

    test_isPackageUri() : void {
        let uri : lib3.Uri = lib3.Uri.parse('package:test/test.dart');
        expect(uri.scheme,'package');
        expect(PackageMapUriResolver.isPackageUri(uri),isTrue);
    }
    test_isPackageUri_null_scheme() : void {
        let uri : lib3.Uri = lib3.Uri.parse('foo.dart');
        expect(uri.scheme,'');
        expect(PackageMapUriResolver.isPackageUri(uri),isFalse);
    }
    test_isPackageUri_other_scheme() : void {
        let uri : lib3.Uri = lib3.Uri.parse('memfs:/foo.dart');
        expect(uri.scheme,'memfs');
        expect(PackageMapUriResolver.isPackageUri(uri),isFalse);
    }
    test_new_null_packageMap() : void {
        expect(() =>  {
            new bare.createInstance(any,null,this.provider,null);
        },throws);
    }
    test_new_null_resourceProvider() : void {
        expect(() =>  {
            new bare.createInstance(any,null,null,new core.DartMap.literal([
            ]));
        },throws);
    }
    test_resolve_multiple_folders() : void {
        let a = this.provider.newFile(this.provider.convertPath('/aaa/a.dart'),'');
        let b = this.provider.newFile(this.provider.convertPath('/bbb/b.dart'),'');
        expect(() =>  {
            new bare.createInstance(any,null,this.provider,new core.DartMap.literal([
                ['pkg',new core.DartList.literal<any>(a.parent,b.parent)]]));
        },throwsArgumentError);
    }
    test_resolve_nonPackage() : void {
        let resolver : any = new bare.createInstance(any,null,this.provider,_PackageMapUriResolverTest.EMPTY_MAP);
        let uri : lib3.Uri = lib3.Uri.parse('dart:core');
        let result : any = resolver.resolveAbsolute(uri);
        expect(result,isNull);
    }
    test_resolve_OK() : void {
        let pkgFileA : string = this.provider.convertPath('/pkgA/lib/libA.dart');
        let pkgFileB : string = this.provider.convertPath('/pkgB/lib/libB.dart');
        this.provider.newFile(pkgFileA,'library lib_a;');
        this.provider.newFile(pkgFileB,'library lib_b;');
        let resolver : any = new bare.createInstance(any,null,this.provider,new core.DartMap.literal([
            ['pkgA',new core.DartList.literal<any>(this.provider.getResource(this.provider.convertPath('/pkgA/lib/')))],
            ['pkgB',new core.DartList.literal<any>(this.provider.getResource(this.provider.convertPath('/pkgB/lib/')))]]));
        {
            let uri : lib3.Uri = lib3.Uri.parse('package:pkgA/libA.dart');
            let result : any = resolver.resolveAbsolute(uri);
            expect(result,isNotNull);
            expect(result.exists(),isTrue);
            expect(result.uriKind,UriKind.PACKAGE_URI);
            expect(result.fullName,pkgFileA);
        }
        {
            let uri : lib3.Uri = lib3.Uri.parse('package:pkgB/libB.dart');
            let result : any = resolver.resolveAbsolute(uri);
            expect(result,isNotNull);
            expect(result.exists(),isTrue);
            expect(result.uriKind,UriKind.PACKAGE_URI);
            expect(result.fullName,pkgFileB);
        }
    }
    test_resolve_package_invalid_leadingSlash() : void {
        let resolver : any = new bare.createInstance(any,null,this.provider,_PackageMapUriResolverTest.EMPTY_MAP);
        let uri : lib3.Uri = lib3.Uri.parse('package:/foo');
        let result : any = resolver.resolveAbsolute(uri);
        expect(result,isNull);
    }
    test_resolve_package_invalid_noSlash() : void {
        let resolver : any = new bare.createInstance(any,null,this.provider,_PackageMapUriResolverTest.EMPTY_MAP);
        let uri : lib3.Uri = lib3.Uri.parse('package:foo');
        let result : any = resolver.resolveAbsolute(uri);
        expect(result,isNull);
    }
    test_resolve_package_invalid_onlySlash() : void {
        let resolver : any = new bare.createInstance(any,null,this.provider,_PackageMapUriResolverTest.EMPTY_MAP);
        let uri : lib3.Uri = lib3.Uri.parse('package:/');
        let result : any = resolver.resolveAbsolute(uri);
        expect(result,isNull);
    }
    test_resolve_package_notInMap() : void {
        let resolver : any = new bare.createInstance(any,null,this.provider,_PackageMapUriResolverTest.EMPTY_MAP);
        let uri : lib3.Uri = lib3.Uri.parse('package:analyzer/analyzer.dart');
        let result : any = resolver.resolveAbsolute(uri);
        expect(result,isNull);
    }
    test_restoreAbsolute() : void {
        let pkgFileA : string = this.provider.convertPath('/pkgA/lib/libA.dart');
        let pkgFileB : string = this.provider.convertPath('/pkgB/lib/src/libB.dart');
        this.provider.newFile(pkgFileA,'library lib_a;');
        this.provider.newFile(pkgFileB,'library lib_b;');
        let resolver : any = new bare.createInstance(any,null,this.provider,new core.DartMap.literal([
            ['pkgA',new core.DartList.literal<any>(this.provider.getResource(this.provider.convertPath('/pkgA/lib/')))],
            ['pkgB',new core.DartList.literal<any>(this.provider.getResource(this.provider.convertPath('/pkgB/lib/')))]]));
        {
            let source : any = this._createFileSource(this.provider.convertPath('/pkgA/lib/libA.dart'));
            let uri : lib3.Uri = resolver.restoreAbsolute(source);
            expect(uri,isNotNull);
            expect(uri.toString(),'package:pkgA/libA.dart');
        }
        {
            let source : any = this._createFileSource(this.provider.convertPath('/pkgB/lib/src/libB.dart'));
            let uri : lib3.Uri = resolver.restoreAbsolute(source);
            expect(uri,isNotNull);
            expect(uri.toString(),'package:pkgB/src/libB.dart');
        }
        {
            let source : any = this._createFileSource('/no/such/file');
            let uri : lib3.Uri = resolver.restoreAbsolute(source);
            expect(uri,isNull);
        }
    }
    _createFileSource(path : string) : any {
        return new bare.createInstance(any,null,path,lib4.toUri(path),UriKind.FILE_URI);
    }
    constructor() {
    }
    @defaultConstructor
    _PackageMapUriResolverTest() {
        this.provider = new bare.createInstance(any,null);
    }
}

export class properties {
}
