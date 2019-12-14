/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/source/sdk_ext_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SdkExtUriResolverTest);
    });
};
export namespace SdkExtUriResolverTest {
    export type Constructors = 'SdkExtUriResolverTest';
    export type Interface = Omit<SdkExtUriResolverTest, Constructors>;
}
@DartClass
export class SdkExtUriResolverTest {
    resourceProvider : any;

    setUp() : void {
        var joinAndEscape : (components : core.DartList<string>) => string = (components : core.DartList<string>) : string =>  {
            return this.resourceProvider.pathContext.joinAll(components).replaceAll('\','\\');
        };
        this.resourceProvider = new bare.createInstance(any,null);
        this.resourceProvider.newFolder(this.resourceProvider.convertPath('/empty'));
        this.resourceProvider.newFolder(this.resourceProvider.convertPath('/tmp'));
        this.resourceProvider.newFile(this.resourceProvider.convertPath('/tmp/_sdkext'),`{\n  "dart:fox": "slippy.dart",\n  "dart:bear": "grizzly.dart",\n  "dart:relative": "${joinAndEscape(new core.DartList.literal('..','relative.dart'))}",\n  "dart:deep": "${joinAndEscape(new core.DartList.literal('deep','directory','file.dart'))}",\n  "fart:loudly": "nomatter.dart"\n}`);
    }
    test_create_badJSON() {
        let resolver = new bare.createInstance(any,null,null);
        resolver.addSdkExt('{{{,{{}}},}}',null);
        expect(resolver.length,equals(0));
    }
    test_create_noSdkExtPackageMap() {
        let resolver = new bare.createInstance(any,null,new core.DartMap.literal([
            ['fox',new core.DartList.literal<any>(this.resourceProvider.getFolder(this.resourceProvider.convertPath('/empty')))]]));
        expect(resolver.length,equals(0));
    }
    test_create_nullPackageMap() {
        let resolver = new bare.createInstance(any,null,null);
        expect(resolver.length,equals(0));
    }
    test_create_sdkExtPackageMap() {
        let resolver = new bare.createInstance(any,null,new core.DartMap.literal([
            ['fox',new core.DartList.literal<any>(this.resourceProvider.newFolder(this.resourceProvider.convertPath('/tmp')))]]));
        expect(resolver.length,equals(4));
        expect(op(Op.INDEX,resolver,'dart:fox'),equals(this.resourceProvider.convertPath('/tmp/slippy.dart')));
        expect(op(Op.INDEX,resolver,'dart:bear'),equals(this.resourceProvider.convertPath('/tmp/grizzly.dart')));
        expect(op(Op.INDEX,resolver,'dart:relative'),equals(this.resourceProvider.convertPath('/relative.dart')));
        expect(op(Op.INDEX,resolver,'dart:deep'),equals(this.resourceProvider.convertPath('/tmp/deep/directory/file.dart')));
    }
    test_restoreAbsolute() {
        let resolver = new bare.createInstance(any,null,new core.DartMap.literal([
            ['fox',new core.DartList.literal<any>(this.resourceProvider.newFolder(this.resourceProvider.convertPath('/tmp')))]]));
        let source = resolver.resolveAbsolute(lib3.Uri.parse('dart:fox'));
        expect(source,isNotNull);
        let restoreUri = resolver.restoreAbsolute(source);
        expect(restoreUri,isNotNull);
        expect(restoreUri.toString(),equals('dart:fox'));
        expect(restoreUri.scheme,equals('dart'));
        expect(restoreUri.path,equals('fox'));
    }
    constructor() {
    }
    @defaultConstructor
    SdkExtUriResolverTest() {
    }
}

export class properties {
}
