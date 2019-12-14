/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/source/embedder_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../embedder_tests";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "./../resource_utils";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(DartUriResolverTest);
        defineReflectiveTests(EmbedderSdkTest);
        defineReflectiveTests(EmbedderUriResolverTest);
    });
};
export namespace DartUriResolverTest {
    export type Constructors = lib3.EmbedderRelatedTest.Constructors | 'DartUriResolverTest';
    export type Interface = Omit<DartUriResolverTest, Constructors>;
}
@DartClass
export class DartUriResolverTest extends lib3.EmbedderRelatedTest {
    test_embedderYaml() : void {
        let locator : any = new bare.createInstance(any,null,new core.DartMap.literal([
            ['fox',new core.DartList.literal<any>(this.pathTranslator.getResource(this.foxLib))]]));
        let sdk : any = new bare.createInstance(any,null,locator.embedderYamls);
        let resolver : any = new bare.createInstance(any,null,sdk);
        var expectResolved : (dartUri : any,posixPath : any) => void = (dartUri : any,posixPath : any) : void =>  {
            let source : any = resolver.resolveAbsolute(lib4.Uri.parse(dartUri));
            expect(source,isNotNull,{
                reason : dartUri});
            expect(source.fullName,lib5.posixToOSPath(posixPath));
        };
        expectResolved('dart:core',`${this.foxLib}/core.dart`);
        expectResolved('dart:fox',`${this.foxLib}/slippy.dart`);
        expectResolved('dart:bear',`${this.foxLib}/grizzly.dart`);
        expectResolved('dart:relative',`${this.foxPath}/relative.dart`);
        expectResolved('dart:deep',`${this.foxLib}/deep/directory/file.dart`);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DartUriResolverTest() {
    }
}

export namespace EmbedderSdkTest {
    export type Constructors = lib3.EmbedderRelatedTest.Constructors | 'EmbedderSdkTest';
    export type Interface = Omit<EmbedderSdkTest, Constructors>;
}
@DartClass
export class EmbedderSdkTest extends lib3.EmbedderRelatedTest {
    test_creation() : void {
        let locator : any = new bare.createInstance(any,null,new core.DartMap.literal([
            ['fox',new core.DartList.literal<any>(this.pathTranslator.getResource(this.foxLib))]]));
        let sdk : any = new bare.createInstance(any,null,locator.embedderYamls);
        expect(sdk.urlMappings,hasLength(5));
    }
    test_fromFileUri() : void {
        let locator : any = new bare.createInstance(any,null,new core.DartMap.literal([
            ['fox',new core.DartList.literal<any>(this.pathTranslator.getResource(this.foxLib))]]));
        let sdk : any = new bare.createInstance(any,null,locator.embedderYamls);
        var expectSource : (posixPath : string,dartUri : string) => any = (posixPath : string,dartUri : string) =>  {
            let uri : lib4.Uri = lib4.Uri.parse(lib5.posixToOSFileUri(posixPath));
            let source : any = sdk.fromFileUri(uri);
            expect(source,isNotNull,{
                reason : posixPath});
            expect(source.uri.toString(),dartUri);
            expect(source.fullName,lib5.posixToOSPath(posixPath));
        };
        expectSource(`${this.foxLib}/slippy.dart`,'dart:fox');
        expectSource(`${this.foxLib}/deep/directory/file.dart`,'dart:deep');
        expectSource(`${this.foxLib}/deep/directory/part.dart`,'dart:deep/part.dart');
    }
    test_getSdkLibrary() : void {
        let locator : any = new bare.createInstance(any,null,new core.DartMap.literal([
            ['fox',new core.DartList.literal<any>(this.pathTranslator.getResource(this.foxLib))]]));
        let sdk : any = new bare.createInstance(any,null,locator.embedderYamls);
        let lib : any = sdk.getSdkLibrary('dart:fox');
        expect(lib,isNotNull);
        expect(lib.path,lib5.posixToOSPath(`${this.foxLib}/slippy.dart`));
        expect(lib.shortName,'dart:fox');
    }
    test_mapDartUri() : void {
        let locator : any = new bare.createInstance(any,null,new core.DartMap.literal([
            ['fox',new core.DartList.literal<any>(this.pathTranslator.getResource(this.foxLib))]]));
        let sdk : any = new bare.createInstance(any,null,locator.embedderYamls);
        var expectSource : (dartUri : string,posixPath : string) => void = (dartUri : string,posixPath : string) : void =>  {
            let source : any = sdk.mapDartUri(dartUri);
            expect(source,isNotNull,{
                reason : posixPath});
            expect(source.uri.toString(),dartUri);
            expect(source.fullName,lib5.posixToOSPath(posixPath));
        };
        expectSource('dart:core',`${this.foxLib}/core.dart`);
        expectSource('dart:fox',`${this.foxLib}/slippy.dart`);
        expectSource('dart:deep',`${this.foxLib}/deep/directory/file.dart`);
        expectSource('dart:deep/part.dart',`${this.foxLib}/deep/directory/part.dart`);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EmbedderSdkTest() {
    }
}

export namespace EmbedderUriResolverTest {
    export type Constructors = lib3.EmbedderRelatedTest.Constructors | 'EmbedderUriResolverTest';
    export type Interface = Omit<EmbedderUriResolverTest, Constructors>;
}
@DartClass
export class EmbedderUriResolverTest extends lib3.EmbedderRelatedTest {
    test_embedderYaml() : void {
        let locator = new bare.createInstance(any,null,new core.DartMap.literal([
            ['fox',new core.DartList.literal<any>(this.pathTranslator.getResource(this.foxLib))]]));
        let resolver = new bare.createInstance(any,null,locator.embedderYamls);
        var expectResolved : (dartUri : any,posixPath : any) => any = (dartUri : any,posixPath : any) =>  {
            let source : any = resolver.resolveAbsolute(lib4.Uri.parse(dartUri));
            expect(source,isNotNull,{
                reason : dartUri});
            expect(source.fullName,lib5.posixToOSPath(posixPath));
        };
        expect(resolver,hasLength(5));
        expectResolved('dart:core',`${this.foxLib}/core.dart`);
        expectResolved('dart:fox',`${this.foxLib}/slippy.dart`);
        expectResolved('dart:bear',`${this.foxLib}/grizzly.dart`);
        expectResolved('dart:relative',`${this.foxPath}/relative.dart`);
        expectResolved('dart:deep',`${this.foxLib}/deep/directory/file.dart`);
    }
    test_nullEmbedderYamls() : void {
        let resolver = new bare.createInstance(any,null,null);
        expect(resolver,hasLength(0));
    }
    test_restoreAbsolute() : void {
        let locator = new bare.createInstance(any,null,new core.DartMap.literal([
            ['fox',new core.DartList.literal<any>(this.pathTranslator.getResource(this.foxLib))]]));
        let resolver = new bare.createInstance(any,null,locator.embedderYamls);
        var expectRestore : (dartUri : string,expected? : string) => any = (dartUri : string,expected? : string) =>  {
            let parsedUri = lib4.Uri.parse(dartUri);
            let source = resolver.resolveAbsolute(parsedUri);
            expect(source,isNotNull);
            let restoreUri = resolver.restoreAbsolute(source);
            expect(restoreUri,isNotNull,{
                reason : dartUri});
            expect(restoreUri.toString(),(expected || dartUri));
            let split : core.DartList<string> = new core.DartString(((expected || dartUri))).split(':');
            expect(restoreUri.scheme,split[0]);
            expect(restoreUri.path,split[1]);
        };
        expectRestore('dart:deep');
        expectRestore('dart:deep/file.dart','dart:deep');
        expectRestore('dart:deep/part.dart');
        expectRestore('dart:deep/deep/file.dart');
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EmbedderUriResolverTest() {
    }
}

export class properties {
}
